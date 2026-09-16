---
title: getVisitorId
description: Retrieve the Visitor ID Service tag extension instance.
exl-id: ecfd4325-1881-47a9-bc3c-abfc780ce52f
TQID: https://experienceleague.adobe.com/QphQk2-krztWgDLMsnqrcOVsWPleioQMEDRplRDp1LY
product_v2:
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: df80eeb1-8d72-467e-b0df-9d51c7d3a0a1
    internal-label: Audience Manager
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: fd307ce7-56f5-4ee3-af68-a7833ff6e85e
    internal-label: API
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
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
