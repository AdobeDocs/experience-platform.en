### `onBeforeEventSend`

| Type | Required | Default Value |
| -------- | ------------ | ----------------- |
| Function | No           | () => undefined   |

{style="table-layout:auto"}

Configure a callback that is called for every event just before it is sent. An object with the field `xdm` is sent in to the callback. To change what is sent, modify the `xdm` object. Inside the callback, the `xdm` object already has the data passed in the event command, and the automatically collected information. For more information on the timing of this callback and an example, see [Modifying Events Globally](tracking-events.md#modifying-events-globally).

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