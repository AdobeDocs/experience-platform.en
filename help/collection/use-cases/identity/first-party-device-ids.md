---
title: Use first-party device IDs in Web SDK
description: Learn how to configure first-party device IDs (FPIDs) in the Adobe Experience Platform Web SDK.
exl-id: c3b17175-8a57-43c9-b8a0-b874fecca952
---
# Use first-party device IDs in Web SDK

The Adobe Experience Platform Web SDK assigns [Adobe Experience Cloud IDs (ECIDs)](https://experienceleague.adobe.com/docs/experience-platform/identity/ecid.html) to website visitors using cookies to track user behavior. To address browser restrictions on cookie lifespans, you can set and manage your own device identifiers, known as first-party device IDs (FPIDs).

>[!NOTE]
>
>First-party device ID support is only available when sending data to the Experience Platform Edge Network via the Web SDK.

>[!IMPORTANT]
>
>First-party device IDs are not compatible with the [third-party cookies](/help/tags/extensions/client/web-sdk/configure/identity.md) functionality in Web SDK. You can use either first-party device IDs or third-party cookies, but not both simultaneously.

## Prerequisites {#prerequisites}

Before you start, ensure you are familiar with how identity data works in the Web SDK, including ECIDs and `identityMap`. See the overview on [identity data in the Web SDK](id-overview.md) for more information.

## First-party device ID formatting requirements {#formatting-requirements}

The Edge Network only accepts IDs that comply with the [UUIDv4 format](https://datatracker.ietf.org/doc/html/rfc4122). Device IDs not in UUIDv4 format will be rejected.

* [!DNL UUIDs] are unique and random, with a negligible probability of collision.
* [!DNL UUIDv4] cannot be seeded using IP addresses or any other personal identifiable information (PII).
* Libraries to generate [!DNL UUIDs] are available for every programming language.

## Set the [!DNL FPID] cookie using your own server {#set-cookie-server}

When setting a cookie through your own server, you can use various methods to prevent the cookie from being restricted due to browser policies: 

* Generate cookies using server-side scripting languages
* Set cookies in response to an API request made to a subdomain or other endpoint on the site
* Generate cookies using a [!DNL CMS]
* Generate cookies using a [!DNL CDN]

Additionally, you should always set the FPID cookie under your domain's `A` record.

>[!IMPORTANT]
>
>Cookies set using JavaScript's `document.cookie` method will almost never be protected from browser policies that restrict cookie durations. 

### When to set the cookie {#when-to-set-cookie}

The [!DNL FPID] cookie should ideally be set before making any requests to the Edge Network. However, in scenarios where that is not possible, an [!DNL ECID] is still generated using existing methods and acts as the primary identifier as long as the cookie exists.

Assuming the [!DNL ECID] is eventually impacted by a browser deletion policy, but the [!DNL FPID] is not, the [!DNL FPID] will become the primary identifier on the next visit and will be used to seed the [!DNL ECID] on each subsequent visit. 

### Setting the expiration for the cookie {#set-expiration}

Setting the expiration of a cookie is something that should be carefully considered as you implement the [!DNL FPID] functionality. When deciding this, you should consider the countries or regions in which your organization operates along with the laws and policies in each one of those regions. 

As part of this decision, you may want to adopt a company-wide cookie-setting policy or one that varies for users in each locale where you operate.

Regardless of the setting you choose for the initial expiration of a cookie, you must ensure you include logic that extends the expiration of the cookie each time a new visit to the site occurs. 

## Impact of cookie flags {#cookie-flag-impact}

There are various cookie flags that impact how cookies are treated across different browsers:

* [`HTTPOnly`](#httponly)
* [`Secure`](#secure)
* [`SameSite`](#samesite)

### `HTTPOnly`

Cookies set using the `HTTPOnly` flag cannot be accessed using client-side scripts. This means that if you set an `HTTPOnly` flag when setting the [!DNL FPID], you must use a server-side scripting language to read the cookie value for inclusion in the `identityMap`.

If you choose to have the Edge Network read the value of the [!DNL FPID] cookie, setting the `HTTPOnly` flag ensures that the value is not accessible by any client-side scripts but will not have any negative impact on the Edge Network's ability to read the cookie. 

>[!NOTE]
>
>Use of the `HTTPOnly` flag does not have an impact on the cookie policies that may restrict cookie lifetime. However, it is still something you should consider as you set and read the value of the [!DNL FPID].

### `Secure`

Cookies set with the `Secure` attribute are only sent to the server with an encrypted request over the [!DNL HTTPS] protocol. Using this flag can help ensure that man-in-the-middle attackers cannot easily access the value of the cookie. When possible, it is always a good idea to set the `Secure` flag.

### `SameSite`

The `SameSite` attribute lets servers determine whether cookies are sent with cross-site requests. The attribute provides some protection against cross-site forgery attacks. Three possible values exist: `Strict`, `Lax`, and `None`. Consult your internal team to determine which setting is right for your organization.

If no `SameSite` attribute is specified, the default setting for some browsers is now `SameSite=Lax`.

## ID hierarchy {#id-hierarchy}

When both an [!DNL ECID] and [!DNL FPID] are present, the [!DNL ECID] is prioritized in identifying the user. This ensures that when an existing [!DNL ECID] is present in the browser cookie store, it remains the primary identifier and existing visitor counts do not risk being affected. For existing users, the [!DNL FPID] will not become the primary identity until the [!DNL ECID] expires or is deleted as a result of a browser policy or manual process.

Identities are prioritized in the following order:

1. [!DNL ECID] included in the `identityMap`
1. [!DNL ECID] stored in a cookie
1. [!DNL FPID] included in the `identityMap`
1. [!DNL FPID] stored in a cookie

## Migrating to first-party device IDs {#migrating-to-fpid}

If you are migrating to first-party device IDs from a previous implementation, it may be difficult to visualize what the transition might look like at a low level.

To help illustrate this process, consider a scenario that involves a customer who has previously visited your site and what impact an [!DNL FPID] migration would have on how that customer is identified in Adobe solutions. 

![Diagram showing how a customer's ID values are updated between visits after migrating to FPIDs](/help/collection/js/assets/identity/tracking/visits.png)

>[!IMPORTANT]
>
>The `ECID` cookie is always prioritized over the `FPID`.

| Visit | Description |
| --- | --- |
| First visit | Assume you have not yet started setting the [!DNL FPID] cookie. The [!DNL ECID] contained in the [AMCV cookie](https://experienceleague.adobe.com/docs/id-service/using/intro/cookies.html#section-c55af54828dc4cce89f6118655d694c8) will be the identifier used to identify the visitor. |
| Second visit | Rollout of the [!DNL FPID] solution has started. The existing [!DNL ECID] is still present and remains the primary identifier for visitor identification. |
| Third visit | Between the second and third visit, enough time has elapsed that the [!DNL ECID] has been deleted due to browser policy. However, because the [!DNL FPID] was set using a [!DNL DNS] [!DNL A]-record, the [!DNL FPID] persists. The [!DNL FPID] is now considered the primary ID and used to seed the [!DNL ECID], which is written to the end-user device. The user would now be considered a new visitor in the Adobe Experience Platform and Experience Cloud solutions. |
| Fourth visit  | Between the third and fourth visits, enough time has elapsed that the [!DNL ECID] has been deleted due to browser policy. Like the previous visit, the [!DNL FPID] remains due to the manner in which it was set. This time, the same [!DNL ECID] is generated as the previous visit. The user is seen throughout the Experience Platform and Experience Cloud solutions as the same user as the previous visit. |
| Fifth visit | Between the fourth and fifth visits, the end user cleared all the cookies in their browser. A new [!DNL FPID] is generated and used to seed the creation of a new [!DNL ECID]. The user would now be considered a new visitor in the Adobe Experience Platform and Experience Cloud solutions. |

{style="table-layout:auto"}

## Using first-party device IDs (FPIDs) {#using-fpid}

First-party device IDs ([!DNL FPIDs]) track visitors by using first-party cookies. First-party cookies are most effective when they are set using a server that uses a DNS [A record](https://datatracker.ietf.org/doc/html/rfc1035) (for IPv4) or [AAAA record](https://datatracker.ietf.org/doc/html/rfc3596) (for IPv6), as opposed to a DNS [!DNL CNAME] or [!DNL JavaScript] code.

>[!IMPORTANT]
>
>[!DNL A] or [!DNL AAAA] records are only supported for setting and tracking cookies. The primary method for data collection is through a [!DNL DNS CNAME]. [!DNL FPIDs] are set using an [!DNL A] or [!DNL AAAA] record and sent to Adobe using a [!DNL CNAME].
>
>The [Adobe-Managed Certificate Program](https://experienceleague.adobe.com/docs/core-services/interface/administration/ec-cookies/cookies-first-party.html#adobe-managed-certificate-program) is also supported for first-party data collection.

Once an [!DNL FPID] cookie is set, its value can be fetched and sent to Adobe as event data is collected. Collected [!DNL FPIDs] are used to generate [!DNL ECIDs], which are the primary identifiers in Adobe Experience Cloud applications.

You can use [!DNL FPIDs] in two ways:

* **[Method 1](#setting-cookie-datastreams)**: Configure a [!DNL CNAME] for your Web SDK calls and include the name of your [!DNL FPID] cookie in your datastream configuration.
* **[Method 2](#identityMap)**: Include the [!DNL FPID] in the identity map. See the section further down in this document on [using FPIDs in `identityMap`](#identityMap) for more information.

### Method 1: Configure a CNAME for your Web SDK calls and set a First Party ID Cookie in your datastream {#setting-cookie-datastreams}

To set an [!DNL FPID] cookie from your own domain, you need to configure your own [!DNL CNAME] (Canonical Name)  for your Web SDK calls, and then enable the [!DNL First Party ID Cookie] functionality in your datastream configuration.

**Step 1. Configure a CNAME for your Web SDK deployment domain**

A [!DNL CNAME] record in your DNS allows you to create an alias from one domain name to another. This can help make third-party services appear as if they are part of your own domain, thus making their cookies look like first-party cookies.

**Example**

Let's consider you want to implement Web SDK on your website `example.com`. The Web SDK sends data to the Edge Network to the `edge.adobedc.net` domain.

| Without [!DNL CNAME] | With [!DNL CNAME] |
|---------|----------|
| <ul><li>Your website `example.com` uses the Web SDK domain `edge.adobedc.net` to send data to the Edge Network.</li><li>Cookies set by `edge.adobedc.net` are considered third-party cookies, since they do not come from your `example.com` domain. Depending on your users browsers, third party cookies might be blocked, and your data does not reach the Edge Network.</li></ul> | <ul><li>You create a subdomain where you deploy Web SDK, such as `metrics.example.com`.</li><li>You set a [!DNL CNAME] record in your DNS system so that `metrics.example.com` points to `edge.adobedc.net`.</li><li>When your website sets cookies through `metrics.example.com`, to the browser they will appear to come from `example.com` (first-party) instead of `edge.adobedc.net` (third-party). This makes the first-party ID cookie less likely to be blocked, ensuring more accurate data collection.</li></ul> |

When first-party data collection is enabled using a [!DNL CNAME], all cookies for your domain will be sent on requests made to the data collection endpoint.

To use this functionality, you need to set the [!DNL FPID] cookie at the top level of your domain instead of a specific subdomain. If you set it on a subdomain, the cookie value will not be sent to the Edge Network and the [!DNL FPID] solution will not work as intended. 

>[!IMPORTANT]
>
>This feature requires that you have [First Party Data Collection](https://experienceleague.adobe.com/docs/core-services/interface/administration/ec-cookies/cookies-first-party.html?lang=en) enabled.

**Step 2. Enable **[!UICONTROL First Party ID Cookie]** functionality for your datastream**

After you have configured your CNAME, you must enable **[!UICONTROL First Party ID Cookie]** option for your datastream. This setting tells the Edge Network to refer to a specified cookie when looking up a first-party device ID, instead of looking up this value in the [identity map](#identityMap).

See the [datastream configuration documentation](/help/datastreams/configure.md#advanced-options) to learn how to set up your datastream.

See the documentation on [first-party cookies](https://experienceleague.adobe.com/docs/core-services/interface/administration/ec-cookies/cookies-first-party.html) for more details on how they work with Adobe Experience Cloud.

![Platform UI image showing the datastream configuration highlighting the First Party ID Cookie setting](/help/collection/js/assets/first-party-id-datastreams.png)

When enabling this setting, you must provide the name of the cookie where the [!DNL FPID] is expected to be stored.

>[!NOTE]
>
>When you use first-party IDs, you cannot perform third-party ID syncs. Third-party ID syncs rely on the [!DNL Visitor ID] service and the `UUID` generated by that service. When using the first-party ID functionality, the [!DNL ECID] is generated without the use of the [!DNL Visitor ID] service, which makes third-party ID syncs impossible.
><br> When you use first-party IDs, [Audience Manager](https://experienceleague.adobe.com/en/docs/audience-manager) capabilities targeted towards activation in partner platforms are not supported, given that Audience Manager Partner ID syncs are mostly based on `UUIDs` or `DIDs`. The [!DNL ECID] that is derived off a first-party ID is not linked to a `UUID`, making it unaddressable.

## Method 2: Use FPIDs in `identityMap` {#identityMap}

As an alternative to storing the [!DNL FPID] in your own cookie, you can send the [!DNL FPID] to the Edge Network through the identity map.

Below is an example of how you would set an [!DNL FPID] in the `identityMap`:

```json
{
  "identityMap": {
    "FPID": [
      {
        "id": "123e4567-e89b-42d3-9456-426614174000",
        "authenticatedState": "ambiguous",
        "primary": true
      }
    ]
  }
}
```

As with other identity types, you can include the [!DNL FPID] with other identities within `identityMap`. The following is an example of the [!DNL FPID] included with an authenticated [!DNL CRM ID]:

```json
{
  "identityMap": {
    "FPID": [
      {
        "id": "123e4567-e89b-42d3-9456-426614174000",
        "authenticatedState": "ambiguous",
        "primary": false
      }
    ],
    "EMAIL": [
      {
        "id": "email@mail.com",
        "authenticatedState": "authenticated",
        "primary": true
      }
    ]
  }
}
```

If the [!DNL FPID] is contained in a cookie being read by the Edge Network when first-party data collection is enabled, you should capture only the authenticated [!DNL CRM ID]: 

```json
{
  "identityMap": {
    "EMAIL": [
      {
        "id": "email@mail.com",
        "authenticatedState": "authenticated",
        "primary": true
      }
    ]
  }
}
```

The following `identityMap` would result in an error response from the Edge Network since it is missing the `primary` indicator for the [!DNL FPID]. At last one of the IDs present in `identityMap` must be marked as `primary`. 

```json
{
  "identityMap": {
    "FPID": [
      {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "authenticatedState": "ambiguous"
      }
    ],
    "EMAIL": [
      {
        "id": "email@mail.com",
        "authenticatedState": "authenticated"
      }
    ]
  }
}
```

The error response returned by the Edge Network in this case would be similar to the following:

```json
{
    "type": "https://ns.adobe.com/aep/errors/EXEG-0306-400",
    "status": 400,
    "title": "No primary identity set in request (event)",
    "detail": "No primary identity found in the input event. Update the request accordingly to your schema and try again.",
    "report": {
        "requestId": "{REQUEST_ID}",
        "configId": "{CONFIG_ID}",
        "orgId": "{ORG_ID}"
    }
}
```

## FAQ {#faq}

The following is a list of answers to frequently asked questions about first-party device IDs.

### How is seeding an ID different from simply generating an ID? 

The concept of seeding is unique in that the [!DNL FPID] passed to Adobe Experience Cloud is converted to an [!DNL ECID] using a deterministic algorithm. Each time the same [!DNL FPID] is sent to the Edge Network, the same [!DNL ECID] is seeded from the [!DNL FPID]. 

### When should the first-party device ID be generated?

To reduce potential visitor inflation, the [!DNL FPID] should be generated before making your first request using the Web SDK. However, if you are unable to do this, an [!DNL ECID] will still be generated for that user and will be used as the primary identifier. The [!DNL FPID] that was generated will not become the primary identifier until the [!DNL ECID] is no longer present. 

### Which data collection methods support first-party device IDs?

Currently only Web SDK supports first-party device IDs.

### Are first-party device IDs stored on any Platform or Experience Cloud solutions?

Once the [!DNL FPID] has been used to seed an [!DNL ECID], it is dropped from the `identityMap` and replaced with the [!DNL ECID] that has been generated. The [!DNL FPID] is not stored in any Adobe Experience Platform or Experience Cloud solutions.
