## XDM schema

Adobe Experience Platform uses schemas to describe the structure of data in a consistent and reusable way. By defining data consistently across systems, it becomes easier to retain meaning and, therefore, gain value from data. [!DNL Analytics] context data works with the structure defined by the schema. 

The following example shows how the [`event` command](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/tracking-events.html) can be used with the `xdm` option to send and retrieve data with Adobe Experience Platform Web SDK. In this example, the `event` command matches the [ExperienceEvent Commerce Details Schema](https://github.com/adobe/xdm/blob/1c22180490558e3c13352fe3e0540cb7e93c69ca/docs/reference/context/experienceevent-commerce.schema.md) so that the productListItems `name` and `SKU` values are tracked:


```javascript
alloy("event",{
  "xdm":{
    "commerce":{
      "productViews":{
        "value":1
      }
    },
    "productListItems":[
      {
        "SKU":"HT105",
        "name":"Large Field Hat",
      },
      {
        "SKU":"HT104",
        "name":"Small Field Hat",
      }
    ]
  }
});
```

For more information on tracking events with Adobe Experience Platform [!DNL Web SDK], see [Tracking events](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/tracking-events.html).


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