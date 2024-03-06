---
title: documentUnloading
description: Use the JavaScript sendBeacon API to send data to Adobe.
---
# `documentUnloading`

The `documentUnloading` property allows you to use JavaScript's [`sendBeacon`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon) method to send data to Adobe. If a typical request takes too long, the browser can cancel the request. You can tell the Web SDK to use `sendBeacon` so that the request runs in the background after you navigate away from the page. Enable this property to help prevent data requests from getting canceled by the browser when unloading.

Several browsers impose a limit of 64 KB to the amount of data that can be sent with `sendBeacon` at one time. If the browser rejects the event because the payload is too large, the Web SDK falls back to using its normal transport method.

## Configure document unloading using the Web SDK tag extension

Enable the **[!UICONTROL Document will unload]** checkbox within the actions of a tag rule.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, and set the [!UICONTROL Action Type] to **[!UICONTROL Send event]**.
1. Enable the **[!UICONTROL Document will unload]** checkbox in the [!UICONTROL Data] section.
1. Click **[!UICONTROL Keep Changes]**, then run your publishing workflow.

## Configure document unloading using the Web SDK JavaScript library

Set the `documentUnloading` boolean when running the `sendEvent` command. Its default value is `false`. Set this property to `true` if you want to use the `sendBeacon` method to send data to Adobe.

```js
alloy("sendEvent", {
  "xdm": adobeDataLayer.getState(reference),
  "documentUnloading": true
});
```
