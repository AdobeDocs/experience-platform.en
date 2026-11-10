---
title: onBeforeEventSend (Web SDK)
description: Learn how to configure the Web SDK to register a JavaScript function that can alter the data you send just before that data is sent to Adobe.
exl-id: 945f4fa1-380c-46aa-a92a-bbcfd6644751
TQID: 'https://experienceleague.adobe.com/v-IDNkSGDKx7Bkv8ciUc5pf3bELnfGAFoWp7m6ofdu4'
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b4dd41a7-ccf8-4e9d-918e-acaab534a307
    internal-label: Data quality
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `onBeforeEventSend` (Web SDK)

>[!BEGINSHADEBOX]

*This page describes `onBeforeEventSend` in the Web SDK `configure` command. For the Server SDK, see [`onBeforeEventSend`](/help/collection/server-js/methods/configure/onbeforeeventsend.md).*

>[!ENDSHADEBOX]

The `onBeforeEventSend` callback allows you to register a JavaScript function that can alter the data you send just before that data is sent to Adobe. This callback allows you to manipulate the `xdm` or `data` object, including the ability to add, edit, or remove elements. You can also conditionally cancel the sending of data altogether, such as with detected client-side bot traffic.

>[!WARNING]
>
>This callback allows the use of custom code. If any code that you include in the callback throws an uncaught exception, processing for the event halts and **data is not sent to Adobe.**

Register the `onBeforeEventSend` callback when running the `configure` command. You can change the `content` variable name to any value that you would like by changing the parameter variable inside the inline function.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  onBeforeEventSend: function(content) {
    // Use nullish coalescing assignments to add a new value
    content.xdm._experience ??= {};
    content.xdm._experience.analytics ??= {};
    content.xdm._experience.analytics.customDimensions ??= {};
    content.xdm._experience.analytics.customDimensions.eVars ??= {};
    content.xdm._experience.analytics.customDimensions.eVars.eVar1 = "Analytics custom value";
    
    // Use optional chaining to change an existing value
    if(content.xdm.web?.webPageDetails) content.xdm.web.webPageDetails.URL = content.xdm.web.webPageDetails.URL.toLowerCase();
    
    // Remove an existing value
    if(content.xdm.web?.webReferrer) delete content.xdm.web.webReferrer.URL;
    
    // Return true to immediately send data
    if (sendImmediate == true) {
      return true;
    }
    
    // Return false to immediately cancel sending data
    if(myBotDetector.isABot()){
      return false;
    }
    
    // Assign the value in the 'cid' query string to the tracking code XDM element
    content.xdm.marketing ??= {};
    content.xdm.marketing.trackingCode = new URLSearchParams(window.location.search).get('cid');
  }
});
```

You can also register your own function instead of an inline function.

```js
function lastChanceLogic(content) {
  content.xdm.application ??= {};
  content.xdm.application.name = "App name";
}

alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  onBeforeEventSend: lastChanceLogic
});    
```

## Configure on before event send callback using the Web SDK tag extension

These settings can be configured in the Web SDK tag extension using [Data collection configuration settings](/help/tags/extensions/client/web-sdk/configure/data-collection.md#on-before-event-send-callback).
