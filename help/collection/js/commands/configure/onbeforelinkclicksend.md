---
title: onBeforeLinkClickSend
description: Callback that runs just before link tracking data is sent.
exl-id: 8c73cb25-2648-4cf7-b160-3d06aecde9b4
---

# `onBeforeLinkClickSend`

>[!IMPORTANT]
>
>This callback is deprecated. Use [`filterClickDetails`](clickcollection.md) instead.

The `onBeforeLinkClickSend` callback allowed you to register a JavaScript function that can alter link tracking data you send just before that data is sent to Adobe. This callback allows you to manipulate the `xdm` or `data` object, including the ability to add, edit, or remove elements. You can also conditionally cancel the sending of data altogether, such as with detected client-side bot traffic.

This callback only runs when [`clickCollectionEnabled`](clickcollectionenabled.md) is enabled and [`filterClickDetails`](clickcollection.md) does not contain a registered function. If `clickCollectionEnabled` is disabled, or if `filterClickDetails` contains a registered function, then this callback does not execute. If `onBeforeEventSend` and `onBeforeLinkClickSend` both contain registered functions, `onBeforeLinkClickSend` is executed first.

>[!WARNING]
>
>This callback allows the use of custom code. If any code that you include in the callback throws an uncaught exception, processing for the event halts. Data is not sent to Adobe.

Register the `onBeforeLinkClickSend` callback when running the `configure` command. You can change the `content` variable name to any value that you would like by changing the parameter variable inside the inline function.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  onBeforeLinkClickSend: function(content) {
    // Add, modify, or delete values
    content.xdm.web.webPageDetails.URL = "https://example.com/current.html";
    
    // Return true to complete the function immediately
    if (sendImmediate == true) {
      return true;
    }
    
    // Return false to cancel sending data immediately
    if(myBotDetector.isABot()){
      return false;
    }
  }
});
```

You can also register your own function instead of an inline function.

```js
function lastChanceLinkLogic(content) {
  content.xdm.application ??= {};
  content.xdm.application.name = "App name";
}

alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  onBeforeLinkClickSend: lastChanceLinkLogic
});    
```
