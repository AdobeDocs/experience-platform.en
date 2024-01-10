---
title: edgeBasePath
description: The base path of the endpoint used to interact with Adobe services.
---
# `edgeBasePath`

The `edgeBasePath` property alters the destination path when you interact with Adobe services. Most organizations do not need to set or alter this property.

## Edge base path using the Web SDK tag extension

Enter the desired text in the **[!UICONTROL Edge base path]** text field when [configuring the tag extension](/help/tags/extensions/client/web-sdk/web-sdk-extension-configuration.md).

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the [!UICONTROL Advanced Settings] section, then enter the desired value in the **[!UICONTROL Edge base path]** text field.
1. Click **[!UICONTROL Save]**, then publish your changes.

## Edge base path using the Web SDK JavaScript library

Set the `edgeBasePath` text field when running the `configure` command. If you omit this property, it defaults to the value of `ee`. Adobe recommends omitting this property from most configurations.

```js
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
  "edgeBasePath": "ee"
});
```
