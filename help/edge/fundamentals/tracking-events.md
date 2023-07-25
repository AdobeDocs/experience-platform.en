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

Some time may pass between when the `sendEvent` command is executed and when the data is sent to the server (for example, if the Web SDK library has not fully loaded or consent has not yet been received). If you intend to modify any part of the `xdm` object after executing the `sendEvent` command, it is highly recommended that you clone the `xdm` object _before_ executing the `sendEvent` command. For example:

```javascript
var clone = function(value) {
  return JSON.parse(JSON.stringify(value));
};

var dataLayer = {
  "commerce": {
    "order": {
      "purchaseID": "a8g784hjq1mnp3",
      "purchaseOrderNumber": "VAU3123",
      "currencyCode": "USD",
      "priceTotal": 999.98
    }
  }
};

alloy("sendEvent", {
  "xdm": clone(dataLayer)
});

// This change will not be reflected in the data sent to the 
// server for the prior sendEvent command.
dataLayer.commerce = null;
```

In this example, the data layer is cloned by serializing it to JSON, then deserializing it. Next, the cloned result is passed into the `sendEvent` command. Doing so ensures that the `sendEvent` command has a snapshot of the data layer as it existed when the `sendEvent` command was executed so that later modifications to the original data layer object will not be reflected in the data sent to the server. If you are using an event-driven data layer, cloning your data is likely already handled automatically. For example, if you are using the [Adobe Client Data Layer](https://github.com/adobe/adobe-client-data-layer/wiki), the `getState()` method provides a computed, cloned snapshot of all prior changes. This is also handled for you automatically if you are using the Adobe Experience Platform Web SDK tag extension.

>[!NOTE]
>
>There is a 32 KB limit on the data that can be sent in each event in the XDM field.


## Sending non-XDM data

Data that does not match an XDM schema should be sent using the `data` option of the `sendEvent` command. This feature is supported in versions 2.5.0 and higher of the Web SDK.

This is useful if you need to update an Adobe Target profile or send Target Recommendations attributes. [Read more about these Target features.](../personalization/adobe-target/target-overview.md#single-profile-update)

In the future, you will be able to send your full data layer under the `data` option and map it to XDM server-side.

**How to send Profile and Recommendations attributes to Adobe Target:**

```javascript
alloy("sendEvent", {
  data: {
    __adobe: {
      target: {
        "profile.gender": "female",
        "profile.age": 30,
        "entity.id": "123",
        "entity.genre": "Drama"
      }
    }
  }
});
```


### Setting `eventType` {#event-types}

In XDM ExperienceEvent schemas, there is an optional `eventType` field. This holds the primary event type for the record. Setting an event type can help you differentiate between the different events you will be sending in. XDM provides several predefined event types that you can use or you always create your own custom event types for your use cases. Refer to the XDM documentation for a [list of all the predefined event types](../../xdm/classes/experienceevent.md#eventType).

These event types will be shown in a dropdown if using the tag extension or you can always pass them in without tags. They can be passed in as part of the `xdm` option.


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

>[!IMPORTANT]
>
>The `datasetId` option supported by the `sendEvent` command was deprecated. To override a dataset ID, use [configuration overrides](../../datastreams/overrides.md) instead.

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

Custom identity information can also be added to the event. See [Retrieving Experience Cloud ID](../identity/overview.md).

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

**destinations**: Segments from Adobe Experience Platform that can be shared with external personalization platforms, content management systems, ad servers, and other applications that are running on customer websites. [Learn more about destinations.](https://experienceleague.adobe.com/docs/experience-platform/destinations/catalog/personalization/custom-personalization.html?lang=en)

>[!WARNING]
>
>`destinations` is currently in Beta. The documentation and functionality are subject to change.

## Modifying events globally {#modifying-events-globally}

If you want to add, remove, or modify fields from the event globally, you can configure an `onBeforeEventSend` callback.  This callback is called every time an event is sent.  This callback is passed in an event object with an `xdm` field.  Modify `content.xdm` to change the data that is sent with the event.


```javascript
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
  "onBeforeEventSend": function(content) {
    // Change existing values
    content.xdm.web.webPageDetails.URL = xdm.web.webPageDetails.URL.toLowerCase();
    // Remove existing values
    delete content.xdm.web.webReferrer.URL;
    // Or add new values
    content.xdm._adb3lettersandnumbers.mycustomkey = "value";
  }
});
```

`xdm` fields are set in this order:

1. Values passed in as options to the event command `alloy("sendEvent", { xdm: ... });`
2. Automatically collected values.  (See [Automatic Information](../data-collection/automatic-information.md).)
3. The changes made in the `onBeforeEventSend` callback.

A few notes on the `onBeforeEventSend` callback:

* Event XDM can be modified during the callback. After the callback has returned, any modified fields and values of 
the content.xdm and content.data objects are sent with the event.

    ```javascript
    onBeforeEventSend: function(content){
      //sets a query parameter in XDM
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      content.xdm.marketing.trackingCode = urlParams.get('cid')
    }
    ```

* If the callback throws an exception, processing for the event discontinues and the event is not sent.
* If the callback returns the boolean value of `false`, event processing discontinues, 
without an error, and the event is not sent. This mechanism allows for certain events to be easily ignored by 
examining the event data and returning `false` if the event should not be sent. 

  >[!NOTE]
  >Care should be taken to avoid returning false on the first event on a page. Returning false on the first event can negatively impact personalization.

```javascript
   onBeforeEventSend: function(content) {
     // ignores events from bots
     if (MyBotDetector.isABot()) {
       return false;
     }
   }
```

   Any return value other than the boolean `false` will allow the event to process and send after the callback.

* Events can be filtered by examining the event type (See [Event Types](#event-types).):

```javascript
    onBeforeEventSend: function(content) {  
      // augments XDM if link click event is to a partner website
      if (
        content.xdm.eventType === "web.webinteraction.linkClicks" &&
        content.xdm.web.webInteraction.URL ===
          "http://example.com/partner-page.html"
      ) {
        content.xdm.partnerWebsiteClick = true;
      }
   }
```

## Potential actionable errors

When sending an event, an error might be thrown if the data being sent is too large (over 32KB for the full request). In this case, you need to reduce the amount of data being sent.
