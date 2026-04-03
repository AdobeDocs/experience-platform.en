---
title: Identity in Data Collection
description: Learn how Data Collection uses ECIDs, CORE IDs, first-party persistence, and identityMap across web implementations.
exl-id: 03060cdb-becc-430a-b527-60c055c2a906
---
# Identity in Data Collection

Adobe Data Collection uses identity signals to recognize returning visitors and carry context across experiences. When a visitor reaches your site, the Edge Network generates an Experience Cloud ID (ECID) and persists it in a first-party cookie. That ECID is the primary device identifier used across Adobe Experience Cloud applications and is the foundation that analytics, personalization, and audience activation build on. In your implementation, you can access the visitor's ECID on the client side through the [`getIdentity`](/help/collection/js/commands/getidentity.md) command. At the datastream level, you can use [Data Prep for Data Collection](/help/datastreams/data-prep.md) to map the ECID into a custom XDM field before it reaches downstream services.

The ECID identifies a device, not a person. To tie activity to a known person, you can send additional identifiers, such as a CRM ID or hashed email, alongside the ECID using the XDM [`identityMap`](./identity-map.md). Adobe recommends setting a person-level namespace as the [primary identity](/help/tags/extensions/client/web-sdk/data-element-types.md#identity-map) whenever one is available.

Beyond the default ECID, Data Collection supports additional identity signals depending on your implementation:

* **First-party device IDs (FPIDs)**: Device identifiers that you generate and manage on infrastructure you control. The Edge Network uses an FPID to [seed the ECID](./first-party-device-ids.md), giving you stronger cookie persistence on owned properties when browser restrictions shorten the life of Adobe-managed cookies.
* **CORE IDs**: A separate, demdex-based identifier that participates in third-party identity workflows when third-party cookies are available. The CORE ID is distinct from the ECID and can be retrieved through [`getIdentity`](/help/collection/js/commands/getidentity.md). For details on how first-party and third-party identity contexts work together, see [Unified identity support](./unified-identity-support.md).

If you are upgrading from the Visitor API or reconciling older identity behavior, see [`idMigrationEnabled`](/help/collection/js/commands/configure/idmigrationenabled.md) to migrate existing AMCV cookies.

## First-party and third-party collection {#first-party-and-third-party-collection}

The Web SDK always sets identity [cookies](https://experienceleague.adobe.com/en/docs/core-services/interface/data-collection/cookies/web-sdk) (such as `kndctr_` cookies) as first-party cookies on your domain, regardless of which endpoint receives the data collection request. The collection endpoint (the domain that your implementation sends data to) is a separate choice that affects how browsers and network policies treat the request itself.

**First-party collection** routes data collection requests through a domain that your organization controls (for example, `data.example.com`), using a CNAME that points to Adobe's Edge Network. Because the request stays on your domain, it is less likely to be blocked by ad blockers or browser network restrictions. First-party collection is also a prerequisite for setting [first-party device IDs](./first-party-device-ids.md) from your own server infrastructure, which is the most durable identity strategy available. Adobe recommends using the [Adobe-managed certificate program](https://experienceleague.adobe.com/en/docs/core-services/interface/data-collection/adobe-managed-cert) to configure first-party collection for your implementation.

**Third-party collection** sends requests directly to an Adobe-owned [`edgeDomain`](/help/collection/js/commands/configure/edgedomain.md) (such as `example.data.adobedc.net`). While identity cookies are still set as first-party on your domain, the request itself goes to a third-party domain, which some browsers and ad blockers can restrict.

## Choose the right identity pattern {#choose-your-path}

* **Strengthen identity persistence on owned properties**: Use [first-party device IDs](./first-party-device-ids.md) when browser restrictions shorten cookie life and you need stronger continuity for analytics and personalization on sites you control.
* **Hand off identity from an app to mobile web**: Use [mobile-to-web identity sharing](./mobile-to-web.md) when the visitor starts in your mobile app and continues in a WebView or mobile web page.
* **Keep identity continuous across your domains**: Use [cross-domain sharing](./cross-domain-sharing.md) when visitors move between web properties that your organization owns and you want consistent reporting and personalization.
* **Combine first-party persistence with third-party activation**: Use [Unified identity support](./unified-identity-support.md) when you need durable first-party identification alongside supported third-party activation flows.
* **Send person-level identifiers**: Use [`identityMap`](./identity-map.md) to send CRM IDs, hashed emails, and other person-level identifiers alongside the ECID so that downstream services can stitch activity to a known person.
* **Understand how consent affects identity**: Read [Consent and identity](./consent.md) to learn how `defaultConsent` and `setConsent` control when the Web SDK generates an ECID, sets cookies, and sends data.

For help diagnosing identity issues such as visitor inflation, ECID inconsistencies, or FPID problems, see [Troubleshooting identity](./troubleshooting.md).
