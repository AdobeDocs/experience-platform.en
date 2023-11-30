---
title: prehidingStyle
description: Create a CSS definition that allows personalized content to load without flickering.
---
# `prehidingStyle`

The `prehidingStyle` property allows you to define a CSS selector to hide parts of your site that haven't loaded yet. This property is valuable in synchronous Web SDK implementations to avoid flickering while personalized content loads.

>[!IMPORTANT]
>
>If you load the Web SDK library or tags asynchronously, using this property does nothing. See [Manage flicker](../../personalization/manage-flicker.md) for information around using the prehiding snippet instead.

## Prehiding style in the Web SDK extension

Select the **[!UICONTROL Provide prehiding style]** button when configuring the extension.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the [!UICONTROL Personalization] section, then select the button **[!UICONTROL Provide prehiding style]**.
1. This button opens a modal window with a CSS editor. Insert the desired CSS selector and declaration block, then click **[!UICONTROL Save]** to close the modal window.
1. Click **[!UICONTROL Save]** under extension settings, then publish your changes.

## Prehiding style using alloy.js

Set the `prehidingStyle` string when running the `configure` command. If you omit this property when configuring the Web SDK, nothing is hidden when loading personalized content. Set this value to the desired CSS selector and declaration block for synchronous libraries.

```js
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
  "prehidingStyle": "#container { opacity: 0 !important }"
});
```
