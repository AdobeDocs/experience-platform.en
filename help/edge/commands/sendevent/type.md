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