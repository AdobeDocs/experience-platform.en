---
title: Tracking events
seo-title: Tracking Adobe Experience Platform Web SDK events
description: Learn how to track Experience Platform Web SDK events
seo-description: Learn how to track Experience Platform Web SDK events
keywords: sendEvent;xdm;eventType;datasetId;sendBeacon;send Beacon;documentUnloading;document Unloading;onBeforeEventSend;
---

# Tracking events

To send event data to the Adobe Experience Cloud, use the `sendEvent` command. The `sendEvent` command is the primary way to send data to the [!DNL Experience Cloud], and to retrieve personalized content, identities, and audience destinations.

Data sent to Adobe Experience Cloud falls into two categories:

* XDM data
* Non-XDM data (currently unsupported)

## Sending XDM data

XDM data is an object whose content and structure matches a schema you have created within Adobe Experience Platform. [Learn more about how to create a schema.](../../xdm/tutorials/create-schema-ui.md)

Any XDM data that you would like to be part of your analytics, personalization, audiences, or destinations should be sent using the `xdm` option.

```javascript
alloy("sendEvent", {
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
});
```

>[!NOTE]
>
>There is a 32 KB limit on the data that can be sent in each event in the XDM field.

### Sending non-XDM data

Currently, sending data that does not match an XDM schema is unsupported. Support is planned for a future date.

### Setting `eventType`

In an XDM experience event, there is an `eventType` field. This holds the primary event type for the record. This can be passed in as part of the `xdm` option.

```javascript
alloy("sendEvent", {
  "xdm": {
    "eventType": "commerce.purchases",
    "commerce": {
      "order": {
        "purchaseID": "a8g784hjq1mnp3",
        "purchaseOrderNumber": "VAU3123",
        "currencyCode": "USD",
        "priceTotal": 999.98
      }
    }
  }
});
```

Alternatively, the `eventType` can be passed into the event command using the `type` option. Behind the scenes, this is added to the XDM data. Having the `type` as an option allows you to more easily set the `eventType` without having to modify the XDM payload.

```javascript
var myXDMData = { ... };

alloy("sendEvent", {
  "xdm": myXDMData,
  "type": "commerce.purchases"
});
```

### Overriding the dataset ID

In some use cases, you might want to send an event to a dataset other than the one configured in the Configuration UI. For that you need to set the `datasetId` option on the `sendEvent` command:

```javascript
var myXDMData = { ... };

alloy("sendEvent", {
  "xdm": myXDMData,
  "type": "commerce.checkout",
  "datasetId": "YOUR_DATASET_ID"
});
```

### Adding identity information

Custom identity information can also be added to the event. See [Retrieving Experience Cloud ID](./identity.md)

## Using the sendBeacon API

It can be tricky to send event data just before the web page user has navigated away. If the request takes too long, the browser might cancel the request. Some browsers have implemented a web standard API called `sendBeacon` to allow data to be more easily collected during this time. When using `sendBeacon`, the browser makes the web request in the global browsing context. This means the browser makes the beacon request in the background and does not hold up the page navigation. To tell Adobe Experience Platform [!DNL Web SDK] to use `sendBeacon`, add the option `"documentUnloading": true` to the event command.  Here is an example:

```javascript
alloy("sendEvent", {
  "documentUnloading": true,
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
});
```

Browsers have imposed limits to the amount of data that can be sent with `sendBeacon` at one time. In many browsers, the limit is 64K. If the browser rejects the event because the payload is too large, Adobe Experience Platform [!DNL Web SDK] falls back to using its normal transport method (for example, fetch).

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
}).then(function(results) {
    // Tracking the event succeeded.
  })
  .catch(function(error) {
    // Tracking the event failed.
  });
```

## Modifying events globally {#modifying-events-globally}

If you want to add, remove, or modify fields from the event globally, you can configure an `onBeforeEventSend` callback.  This callback is called every time an event is sent.  This callback is passed in an event object with an `xdm` field.  Modify `event.xdm` to change the data that is sent in the event.

```javascript
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
  "onBeforeEventSend": function(event) {
    // Change existing values
    event.xdm.web.webPageDetails.URL = xdm.web.webPageDetails.URL.toLowerCase();
    // Remove existing values
    delete event.xdm.web.webReferrer.URL;
    // Or add new values
    event.xdm._adb3lettersandnumbers.mycustomkey = "value";
  }
});
```

`xdm` fields are set in this order:

1. Values passed in as options to the event command `alloy("sendEvent", { xdm: ... });`
2. Automatically collected values.  (See [Automatic Information](../reference/automatic-information.md).)
3. The changes made in the `onBeforeEventSend` callback.

If the `onBeforeEventSend` callback throws an exception, the event is still sent; however, none of the changes that were made inside the callback are applied to the final event.

## Potential actionable errors

When sending an event, an error might be thrown if the data being sent is too large (over 32KB for the full request). In this case, you need to reduce the amount of data being sent.

When debugging is enabled, the server synchronously validates event data being sent against the configured XDM schema. If the data does not match the schema, details about the mismatch are returned from the server and an error is thrown. In this case, modify the data to match the schema. When debugging is not enabled, the server validates data asynchronously and, therefore, no corresponding error is thrown.
