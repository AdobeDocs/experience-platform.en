---
title: getVisitorId
description: Retrieve the Visitor ID Service tag extension instance.
exl-id: ecfd4325-1881-47a9-bc3c-abfc780ce52f
TQID: 'https://experienceleague.adobe.com/QphQk2-krztWgDLMsnqrcOVsWPleioQMEDRplRDp1LY'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: e1971122-7081-4556-9222-8a31bd71800c
    internal-label: Experience Cloud Services
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: a50ad69b-1331-40e9-b634-531a085a6a54
    internal-label: Identities
  - id: 6f307efa-2798-5b6d-8079-f765b66875c1
    internal-label: Cookies
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `getVisitorId()`

The `_satellite.getVisitorId()` method returns an instance of the [Visitor ID Service](https://experienceleague.adobe.com/en/docs/id-service/using/home) within your tag property, **if** you have the '[!UICONTROL Adobe Experience Cloud ID Service]' extension installed and published. This method is helpful when you want direct access to the Visitor ID Service for usage in custom code blocks, advanced data element configuration, or troubleshooting visitor identity issues.

>[!IMPORTANT]
>
>This method only applies to properties that include the standalone '[!UICONTROL Adobe Experience Cloud ID Service]' tag extension. It does not apply to the implicit identity capabilities available in the Web SDK tag extension. See the [`getIdentity`](/help/collection/js/commands/getidentity.md) command if you need to get a visitor identity using the Web SDK's implicit identity capabilities.

If you call this method with the '[!UICONTROL Adobe Experience Cloud ID Service]' extension installed and published, an object is returned similar to the object obtained after calling the [`Visitor.getInstance()`](https://experienceleague.adobe.com/en/docs/id-service/using/id-service-api/methods/getinstance) method. If you call this method when the '[!UICONTROL Adobe Experience Cloud ID Service]' tag extension is not installed or published, the method returns `null`.

```ts
_satellite.getVisitorId(): Visitor | null
```

## Available fields and methods

See the Visitor ID Service [Methods](https://experienceleague.adobe.com/en/docs/id-service/using/id-service-api/methods/get-set) documentation to see what fields and methods are available to you.

```js
// Retrieve a visitor's ECID
_satellite.getVisitorId().getMarketingCloudVisitorID();

// Retrieve a visitor's legacy Analytics ID
_satellite.getVisitorId().getAnalyticsVisitorID();

// Retrieve a visitor's Audience Manager blob for audience sharing
_satellite.getVisitorId().getAudienceManagerBlob();
```
