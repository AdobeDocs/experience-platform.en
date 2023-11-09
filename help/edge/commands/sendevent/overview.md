---
title: Track Events Using the Adobe Experience Platform Web SDK
description: Learn how to track Adobe Experience Platform Web SDK events.
keywords: sendEvent;xdm;eventType;datasetId;sendBeacon;send Beacon;documentUnloading;document Unloading;onBeforeEventSend;
exl-id: 8b221cae-3490-44cb-af06-85be4f8d280a
---
# Track events

To send event data to Adobe Experience Cloud, use the `sendEvent` command. The `sendEvent` command is the primary way to send data to the [!DNL Experience Cloud], and to retrieve personalized content, identities, and audience destinations.

Data sent to Adobe Experience Cloud falls into two categories:

* XDM data
* Non-XDM data

## Handling responses from events

If you want to handle a response from an event, you can be notified of a success or failure as follows:


```javascript
alloy("sendEvent", {
  "renderDecisions": true,
  "xdm": {
    "commerce": {
      "order": {
        "purchaseID": "a8g784hjq1mnp3",
        "purchaseOrderNumber": "VAU3123",
        "currencyCode": "USD",
        "priceTotal": 999.98
      }
    }
  }
}).then(function(result) {
    // Tracking the event succeeded.
  })
  .catch(function(error) {
    // Tracking the event failed.
  });
```


### The `result` object

The `sendEvent` command returns a promise that is resolved with a `result` object. The `result` object contains the following properties:

**propositions**: The Personalization offers that the visitor has qualified for. [Learn more about propositions.](../personalization/rendering-personalization-content.md#manually-rendering-content)

**decisions**: This property is deprecated. Please use `propositions` instead.

**destinations**: Segments from Adobe Experience Platform that can be shared with external personalization platforms, content management systems, ad servers, and other applications that are running on customer websites. [Learn more about destinations.](https://experienceleague.adobe.com/docs/experience-platform/destinations/catalog/personalization/custom-personalization.html)