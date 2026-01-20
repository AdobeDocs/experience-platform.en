---
title: documentUnloading
description: Use the JavaScript sendBeacon API to send data to Adobe.
exl-id: 7683c0c4-ae2e-46ec-8471-628a10e17afc
---
# `documentUnloading`

The `documentUnloading` property allows you to use JavaScript's [`sendBeacon`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon) method to send data to Adobe. If a typical request takes too long, the browser can cancel the request. You can tell the Web SDK to use `sendBeacon` so that the request runs in the background after you navigate away from the page. Enable this property to help prevent data requests from getting canceled by the browser when unloading.

Several browsers impose a limit of 64 KB to the amount of data that can be sent with `sendBeacon` at one time. If the browser rejects the event because the payload is too large, the Web SDK falls back to using its normal transport method. Even if a given browser allows larger payloads, Adobe data collection servers truncate payloads down to 64 KB.

Set the `documentUnloading` boolean when running the `sendEvent` command. Its default value is `false`. Set this property to `true` if you want to use the `sendBeacon` method to send data to Adobe.

>[!IMPORTANT]
>
>The `documentUnloading` property is incompatible with the [`renderDecisions`](renderdecisions.md) property. Avoid setting both properties to `true` simultaneously.

```js
alloy("sendEvent", {
  "xdm": adobeDataLayer.getState(reference),
  "documentUnloading": true
});
```

## Document unloading using the Web SDK tag extension

The **[!UICONTROL Document will unload]** checkbox is available when configuring a [**[!UICONTROL Send event]**](/help/tags/extensions/client/web-sdk/actions/send-event.md#data-fields) action when using the Web SDK tag extension.
