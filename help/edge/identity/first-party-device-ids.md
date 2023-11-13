---
title: First-party device IDs in the Platform Web SDK
description: Learn how to configure first-party device IDs (FPIDs) for the Adobe Experience Platform Web SDK.
exl-id: c3b17175-8a57-43c9-b8a0-b874fecca952
---
# First-party device IDs in the Platform Web SDK

The Adobe Experience Platform Web SDK assigns [Adobe Experience Cloud IDs (ECIDs)](https://experienceleague.adobe.com/docs/experience-platform/identity/ecid.html) to website visitors through the use of cookies, in order to track user behavior. To account for browser restrictions on cookie lifespans, you can opt to set and manage your own device identifiers instead. These are referred to as first-party device IDs (FPIDs).

>[!NOTE]
>
>First-party device ID support is only available when sending data to the Platform Edge Network via the Platform Web SDK.

This document covers how to configure first-party device IDs for your Platform Web SDK implementation.

## Prerequisites

This guide assumes you are familiar with how identity data works for the Platform Web SDK, including the role of ECIDs and `identityMap`. See the overview on [identity data in the Web SDK](./overview.md) for more information.

## Using FPIDs

FPIDs track visitors through the use of first-party cookies. First-party cookies are most effective when they are set using a server that leverages a DNS [A record](https://datatracker.ietf.org/doc/html/rfc1035) (for IPv4) or [AAAA record](https://datatracker.ietf.org/doc/html/rfc3596) (for IPv6), as opposed to a DNS CNAME or JavaScript code.

>[!IMPORTANT]
>
>A records or AAAA records are only supported for setting and tracking cookies. The primary method for data collection is through a DNS CNAME. In other words, FPIDs are set using an A record or AAAA record, and are then sent to Adobe using a CNAME.
>
>The [Adobe-Managed Certificate Program](https://experienceleague.adobe.com/docs/core-services/interface/administration/ec-cookies/cookies-first-party.html#adobe-managed-certificate-program) is also still supported for first-party data collection.

Once an FPID cookie is set, its value can be fetched and sent to Adobe as event data is collected. Collected FPIDs are used as seeds to generate ECIDs, which continue to be the primary identifiers in Adobe Experience Cloud applications. 

To send an FPID for a website visitor to the Platform Edge Network, you must include the FPID in the `identityMap` for that visitor. See the section later in this document on [using FPIDs in `identityMap`](#identityMap) for more information.

### ID formatting requirements

The Platform Edge Network only accepts IDs that comply with the [UUIDv4 format](https://datatracker.ietf.org/doc/html/rfc4122). Device IDs that are not in UUIDv4 format will be rejected. 

Generation of a UUID will almost always result in a unique, random ID, with the probability of a collision occurring being negligible. UUIDv4 cannot be seeded using IP addresses or any other personal identifiable information (PII). UUIDs are ubiquitous and libraries can be found for virtually every programming language to generate them.

## Setting a cookie using your own server

When setting a cookie using a server that you own, a variety of methods can be used to prevent the cookie from being restricted due to browser policies: 

* Generate cookies using server-side scripting languages
* Set cookies in response to an API request made to a sub-domain or other endpoint on the site
* Generate cookies using a CMS
* Generate cookies using a CDN

>[!IMPORTANT]
>
>Cookies set using JavaScript's `document.cookie` method will almost never be protected from browser policies that restrict cookie durations. 

### When to set the cookie

The FPID cookie should ideally be set before making any requests to the Edge Network. However, in scenarios where that is not possible, an ECID is still generated using existing methods and acts as the primary identifier as long as the cookie exists.

Assuming the ECID is eventually impacted by a browser deletion policy, but the FPID is not, the FPID will become the primary identifier on the next visit and will be used to seed the ECID on each subsequent visit. 

### Setting the expiration for the cookie

Setting the expiration of a cookie is something that should be carefully considered as you implement the FPID functionality. When making this decision, you should take into account the countries or regions in which your organization operates along with the laws and policies in each one of those regions. 

As part of this decision, you may want to adopt a company-wide cookie setting policy or one that varies for users in each locale where you operate. 

Regardless of the setting you choose for the initial expiration of a cookie, you must ensure you include logic that extends the expiration of the cookie each time a new visit to the site occurs. 

## Impact of cookie flags

There are a variety of cookie flags that impact the how cookies are treated across different browsers:

* [`HTTPOnly`](#http-only)
* [`Secure`](#secure)
* [`SameSite`](#same-site)

### `HTTPOnly` {#http-only}

Cookies set using the `HTTPOnly` flag cannot be accessed using client-side scripts. This means that if you set an `HTTPOnly` flag when setting the FPID, you must leverage a server-side scripting language to read the cookie value for inclusion in the `identityMap`.

If you choose to have the Platform Edge Network read the value of the FPID cookie, setting the `HTTPOnly` flag will ensure the value is not accessible by any client-side scripts but will not have any negative impact on the Platform Edge Network's ability to read the cookie. 

>[!NOTE]
>
>Use of the `HTTPOnly` flag does not have an impact on the cookie policies that may restrict cookie lifetime. However, it is still something you should consider as you set and read the value of the FPID.

### `Secure` {#secure}

Cookies set with the `Secure` attribute are only sent to the server with an encrypted request over the HTTPS protocol. Using this flag can help ensure man-in-the-middle attackers cannot easily access the value of the cookie. When possible, it is always a good idea to set the `Secure` flag.

### `SameSite` {#same-site}

The `SameSite` attribute lets servers determine whether cookies are sent with cross-site requests. The attribute provides some protection against cross-site forgery attacks. Three possible values exist: `Strict`, `Lax` and `None`. Please consult your internal team to determine which setting is right for your organization.

If no `SameSite` attribute is specified, the default setting for some browsers is now `SameSite=Lax`. 

## Using FPIDs in `identityMap` {#identityMap}

Below is an example of how you would set an FPID on it's own in the `identityMap`:

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

As with other identity types, you can include the FPID with other identities within `identityMap`. The following is an example of the FPID included with an Authenticated CRM ID:

```json
{
  "identityMap": {
    "FPID": [
      {
        "id": "123e4567-e89b-42d3-9456-426614174000",
        "authenticatedState": "ambiguous",
        "primary": true
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

If the FPID is contained in a cookie being read by the Edge Network when first-party data collection is enabled, you should capture only the authenticated CRM ID: 

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

The following `identityMap` would result in an error response from the Edge Network since it is missing the `primary` indicator for the FPID. At last one of the IDs present in `identityMap` must be marked as `primary`. 

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

## ID hierarchy

When both an ECID and FPID are present, the ECID will be prioritized in identifying the user. This will ensure that when an existing ECID is present in the browser cookie store, it will continue to be the primary identifier and existing visitor counts do not risk being affected. For existing users, the FPID will not become the primary identity until the ECID expires or is deleted as a result of a browser policy or manual process.

Identities are prioritized in the following order:

1. ECID included in the `identityMap`
1. ECID stored in a cookie
1. FPID included in the `identityMap`
1. FPID stored in a cookie

## Migrating to first-party device IDs

If you are migrating to using FPIDs from a previous implementation, it may be difficult to visualize what the transition might look like at a low level.

To help illustrate this process, consider a scenario that involves a customer who has previously visited your site and what impact an FPID migration would have on how that customer is identified in Adobe solutions. 

![Diagram showing how a customer's ID values are updated between visits after migrating to FPIDs](../assets/identity/tracking/visits.png)

| Visit | Description |
| --- | --- |
| First Visit | Assume you have not yet started setting the FPID cookie. The ECID contained in the [AMCV cookie](https://experienceleague.adobe.com/docs/id-service/using/intro/cookies.html#section-c55af54828dc4cce89f6118655d694c8) will be the identifier used to identify the visitor. |
| Second Visit | Rollout of the First-Party Device ID solution has started. The existing ECID is still present and continues to be the primary identifier for visitor identification. |
| Third Visit | Between the second and third visit, a sufficient amount of time has elapsed that the ECID has been deleted due to browser policy. However, because the FPID was set using a DNS A-record, the FPID persists. The FPID is now considered the primary ID and used to seed the ECID, which is written to the end-user device. The user would now be considered a new visitor in the Adobe Experience Platform and Experience Cloud solutions. |
| Fourth Visit  | Between the third and fourth visits, a sufficient amount of time has elapsed that the ECID has been deleted due to browser policy. Like the previous visit, the FPID remains due to the manner in which it was set. This time, the same ECID is generated as the previous visit. The user is seen throughout the Experience Platform and Experience Cloud solutions as the same user as the previous visit. |
| Fifth Visit | Between the fourth and fifth visits, the end-user cleared all the cookies in their browser. A new FPID is generated and used to seed the creation of a new ECID. The user would now be considered a new visitor in the Adobe Experience Platform and Experience Cloud solutions. |

{style="table-layout:auto"}

## FAQ 

The following is a list of answers to frequently asked questions about first-party device IDs.

### How is seeding an ID different from simply generating an ID? 

The concept of seeding is unique in that the FPID passed to Adobe Experience Cloud is converted to an ECID using a deterministic algorithm. Each time the same FPID is sent the Adobe Experience Platform Edge Network, the same ECID is seeded from the FPID. 

### When should the first-party device ID be generated?

To reduce potential visitor inflation, the FPID should be generated prior to making your first request using the Platform Web SDK. However, if you are unable to do this, an ECID will still be generated for that user and will be used as the primary identifier. The FPID that was generated will not become the primary identifier until the ECID is no longer present. 

### Which data collection methods support first-party device IDs?

Currently only the Platform Web SDK supports FPIDs. 

### Are FPIDs stored on any Platform or Experience Cloud solutions?

Once the FPID has been used to seed an ECID, it is dropped from the `identityMap` and replaced with the ECID that has been generated. The FPID is not stored in any Adobe Experience Platform or Experience Cloud solutions.
