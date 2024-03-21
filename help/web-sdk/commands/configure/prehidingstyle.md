---
title: prehidingStyle
description: Create a CSS definition that allows personalized content to load without flickering.
exl-id: 3693542a-69d3-4ad8-bea4-4cabf7d80563
---
# `prehidingStyle`

The `prehidingStyle` property allows you to define a CSS selector to hide personalized content until it loads. This property is valuable in synchronous Web SDK implementations to avoid flickering. Adobe recommends using the [prehiding snippet](../../personalization/manage-flicker.md) for asynchronous Web SDK implementations.

The CSS selectors that you define in this property begin hiding content when you run the first [`sendEvent`](../sendevent/overview.md) command on a page. Content is unhidden when a response from Adobe is received, which typically includes personalized content. Content is also unhidden if the `sendEvent` command fails or times out.

If you include both `prehidingStyle` and the prehiding snippet in your implementation, the prehiding snippet takes priority over this configuration property.

## Prehiding style using the Web SDK tag extension

Select the **[!UICONTROL Provide prehiding style]** button when [configuring the tag extension](/help/tags/extensions/client/web-sdk/web-sdk-extension-configuration.md).

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the [!UICONTROL Personalization] section, then select the button **[!UICONTROL Provide prehiding style]**.
1. This button opens a modal window with a CSS editor. Insert the desired CSS selector and declaration block, then click **[!UICONTROL Save]** to close the modal window.
1. Click **[!UICONTROL Save]** under extension settings, then publish your changes.

## Prehiding style using the Web SDK JavaScript library

Set the `prehidingStyle` string when running the `configure` command. If you omit this property when configuring the Web SDK, nothing is hidden when running the first `sendEvent` command on a page. Set this value to the desired CSS selector and declaration block for synchronously loaded libraries.

```js
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
  "prehidingStyle": "#container { opacity: 0 !important }"
});
```
