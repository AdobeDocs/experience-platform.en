---
title: documentUnloading
description: Use the browser's sendBeacon method to send data to Adobe.
exl-id: 7683c0c4-ae2e-46ec-8471-628a10e17afc
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# `documentUnloading`

The `documentUnloading` property allows you to use the browser's [`sendBeacon`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon) method to send data to Adobe. This method is part of the browser's Web APIs, not the JavaScript language itself. If a typical request takes too long, the browser can cancel the request. You can tell the Web SDK to use `sendBeacon` so that the request runs in the background after you navigate away from the page. Enable this property to help prevent data requests from getting canceled by the browser when unloading.

Web SDK uses `sendBeacon` only after a visitor identity is established. Before an identity is established (for example, on a new visitor's first event), Web SDK sends the event to the Edge Network using `fetch` so that it can receive the identity in the response. Starting in [version 2.36.1](/help/collection/js/release-notes.md), these `fetch` requests use the [`keepalive`](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit#keepalive) option so that the browser finishes sending the request even if the visitor navigates away from the page.

Several browsers impose a limit of 64 KB to the amount of data that can be sent with `sendBeacon` at one time. The same limit applies to `fetch` requests that use `keepalive`. If the browser rejects the event because the payload is too large, the Web SDK falls back to using its normal transport method. Even if a given browser allows larger payloads, Adobe data collection servers truncate payloads down to 64 KB.

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
