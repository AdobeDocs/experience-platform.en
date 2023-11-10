### `onBeforeLinkClickSend` {#onBeforeLinkClickSend}

| Type | Required | Default Value |
| -------- | ------------ | ----------------- |
| Function | No           | () => undefined   |

{style="table-layout:auto"}

Configure a callback that is called for every link click tracking event just before it is sent. The callback sends an object with the `xdm`, `clickedElement`, and `data` fields.

When filtering the link tracking by using the DOM elements structure, you can use the `clickElement` command. `clickedElement` is the DOM element node that was clicked and has encapsulated the parent nodes tree.

To change what data gets sent, modify the `xdm` and/or `data` objects. Inside the callback, the `xdm` object already has the data passed in the event command, and the automatically collected information.

* Any value other than `false` will allow the event to process and the callback to be sent.
* If the callback returns the `false` value, event processing is stopped, without an error, and the event is not sent. This mechanism allows for certain events to be filtered out by examining the event data and returning `false` if the event should not be sent.
* If the callback throws an exception, processing for the event is stopped and the event is not sent.

Starting with Web SDK version 2.15.0, the data collected with automatic link tracking can be inspected, augmented or filtered by providing an [onBeforeLinkClickSend callback function](../fundamentals/configuring-the-sdk.md#onBeforeLinkClickSend).

This callback function is executed only when an automatic link click event occurs.

```javascript
alloy("configure", {
  onBeforeLinkClickSend: function(options) {
    if (options.xdm.web.webInteraction.type === "download") {
      options.xdm.web.webInteraction.name = undefined;
    }
  }
});
```

When filtering the link tracking events using the `onBeforeLinkClickSend` command, Adobe recommends returning `false` for the link clicks that should not be tracked. Any other response will make Web SDK send the data to the Edge Network.


>[!NOTE]
>
>** When both the `onBeforeEventSend` and `onBeforeLinkClickSend` callback functions are set, the Web SDK runs the `onBeforeLinkClickSend` callback function to filter and augment the link click interaction event, followed by the `onBeforeEventSend` callback function.


### How can link-tracking values be filtered?

The data collected with automatic link tracking can be inspected and filtered by providing an [onBeforeEventSend callback function](../fundamentals/tracking-events.md#modifying-events-globally).

Filtering link tracking data can be useful when preparing data for Analytics reporting. Automatic link tracking captures both the link name and link URL. In Analytics reports, the link name takes priority over link URL. If you wish to report the link URL, the link name needs to be removed. The following example shows an `onBeforeEventSend` function that removes the link name for download links:

```javascript
alloy("configure", {
  onBeforeEventSend: function(options) {
    if (options
      && options.xdm
      && options.xdm.web
      && options.xdm.web.webInteraction) {
        if (options.xdm.web.webInteraction.type === "download") {
          options.xdm.web.webInteraction.name = undefined;
        }
    }
  }
});
```