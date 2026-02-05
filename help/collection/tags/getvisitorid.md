---
title: getVisitorId
description: Retrieve the Experience Cloud Visitor ID service tag extension instance.
exl-id: ecfd4325-1881-47a9-bc3c-abfc780ce52f
---
# `getVisitorId()`

The `_satellite.getVisitorId()` method returns an instance of the [Adobe Experience Cloud ID service](https://experienceleague.adobe.com/en/docs/id-service/using/home) within your tag property, **if** you have the ID service extension installed and published. This method is helpful when you want direct access to the visitor ID instance for usage in custom code blocks, advanced data element configuration, or troubleshooting visitor identity issues.

>[!IMPORTANT]
>
>This method only applies to properties that include the standalone Experience Cloud ID service tag extension. It does not apply to the implicit ID service capabilities available in the Web SDK tag extension. See the [`getIdentity`](/help/collection/js/commands/getidentity.md) command if you need to get a visitor identity using the Web SDK's implicit ID service capabilities.

If you call this method with the ID service extension installed and published, an object is returned similar to the object obtained after calling the [`Visitor.getInstance()`](https://experienceleague.adobe.com/en/docs/id-service/using/id-service-api/methods/getinstance) method. If you call this method when the ID service extension is not installed or published, the method returns `null`.

```ts
_satellite.getVisitorId(): Visitor | null
```

## Available fields and methods

See the Experience Cloud ID service [Methods](https://experienceleague.adobe.com/en/docs/id-service/using/id-service-api/methods/get-set) in the Experience Cloud Visitor ID service documentation to see what fields and methods are available to you.

```js
// Retrieve a visitor's ECID
_satellite.getVisitorId().getMarketingCloudVisitorID();

// Retrieve a visitor's legacy Analytics ID
_satellite.getVisitorId().getAnalyticsVisitorID();

// Retrieve a visitor's Audience Manager blob for audience sharing
_satellite.getVisitorId().getAudienceManagerBlob();
```
