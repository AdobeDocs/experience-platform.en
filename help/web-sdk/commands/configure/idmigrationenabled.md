---
title: idMigrationEnabled
description: Allows the Web SDK to read AMCV cookies.
exl-id: 33b9d645-0fbe-4fe4-8847-e6f9e78557b6
---
# `idMigrationEnabled`

The `idMigrationEnabled` property allows the Web SDK to read AMCV cookies set by previous Adobe Experience Cloud implementations. If your organization upgrades your implementation to the Web SDK, this setting allows a smoother transition to the current Adobe Experience Cloud ID service. This setting is valuable so that you don't see a sharp increase in unique visitors when upgrading to the Web SDK.

If your organization runs a fresh Web SDK implementation, enabling this setting has no impact on data collection or visitor identification. There are no downsides to leaving it enabled for all implementations.

## Enable ID migration using the Web SDK tag extension

Select the **[!UICONTROL Migrate ECID from VisitorAPI to the web SDK]** checkbox when [configuring the tag extension](/help/tags/extensions/client/web-sdk/web-sdk-extension-configuration.md).

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Locate the [!UICONTROL Identity] section, then select the checkbox **[!UICONTROL Migrate ECID from VisitorAPI to the web SDK]**.
1. Click **[!UICONTROL Save]**, then publish your changes.

## Enable ID migration using the Web SDK JavaScript library

Set the `idMigrationEnabled` boolean when running the `configure` command. If you omit this property when configuring the Web SDK, it defaults to `true`. Set this property if you want to disable the ability to read AMCV cookies set by the Visitor API. Most organizations do not need to set this property.

```js
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
  "idMigrationEnabled": false
});
```
