---
title: targetMigrationEnabled
description: Allow the Web SDK to read and write Adobe Target cookies.
---
# `targetMigrationEnabled`

The `targetMigrationEnabled` property is a boolean that allows the Web SDK to read and write the mbox and mboxEdgeCluster cookies that the Adobe Target 1.x and 2.x libraries use. This option allows you to preserve the visitor profile between pages using previous Adobe Target implementations and pages using the Web SDK.

## Enable Target migration from at.js using the Web SDK tag extension

Select the **[!UICONTROL Migrate Target from at.js to the Web SDK]** checkbox when [configuring the tag extension](/help/tags/extensions/client/web-sdk/web-sdk-extension-configuration.md).

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the [!UICONTROL Personalization] section, then select the checkbox **[!UICONTROL Migrate Target from at.js to the Web SDK]**.
1. Click **[!UICONTROL Save]**, then publish your changes.

## Enable Target migration from at.js using the Web SDK JavaScript library

Set the `targetMigrationEnabled` boolean when running the `configure` command. If you omit this property when configuring the Web SDK, it defaults to `false`. Set this value to `true` if you have some pages that still use the Adobe Target 1.x or 2.x libraries.

```js
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
  "targetMigrationEnabled": true
});
```
