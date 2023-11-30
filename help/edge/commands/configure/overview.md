---
title: Configure the Adobe Experience Platform Web SDK
description: Use the configure command to set required settings when using the Web SDK.
exl-id: d1e95afc-0b8a-49c0-a20e-e2ab3d657e45
---
# Configure the Platform Web SDK

Configuration for the SDK is done with the `configure` command. Configuring the SDK is a vital and required step that must happen whenever the Web SDK is used.

## Configure the SDK in the extension

Navigate to the extension configuration page.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.

These configuration settings are set whenever you use the extension to send data to Adobe.

## Configure the SDK using alloy.js

Run the `configure` command. This command is required before you can call any other Web SDK commands, such as [`sendEvent`](../sendevent/overview.md). The properties [`edgeConfigId`](edgeconfigid.md) and [`orgId`](orgid.md) are required.

```js
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
});
```
