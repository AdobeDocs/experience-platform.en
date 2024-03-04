---
title: orgId
description: The orgId property is a string that tells Adobe which organization that data is sent to.
---
# `orgId`

The `orgId` property is a string that tells Adobe which organization that data is sent to. **This property is required for all data sent using the Web SDK.**

To locate your `orgID`:

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Anywhere within the Adobe Experience Cloud, press **`[Ctrl]`** + **`[I]`**. A [!UICONTROL User Data Debugger] window opens.
1. Click **[!UICONTROL Copy]** ![Copy](../../assets/copy.png) next to the [!UICONTROL Current Org ID], or click the **[!UICONTROL Assigned Orgs]** tab to see other org IDs that you can access.
1. When you're finished locating the desired information, click **[!UICONTROL Close]**.

Org IDs are always 24-character alpha-numeric strings, and always end in `@AdobeOrg`.

## Configure an `orgID` using the Web SDK tag extension

Enter the org ID in the **[!UICONTROL IMS organization ID]** text field when [configuring the tag extension](/help/tags/extensions/client/web-sdk/web-sdk-extension-configuration.md).

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Input the desired org ID into the [!UICONTROL IMS organization ID] text field near the top.
1. Click **[!UICONTROL Save]**, then publish your changes.

## Configure an `orgID` using the Web SDK JavaScript library

Set the `orgId` string when running the `configure` command. If you omit this property when configuring the Web SDK, the Web SDK throws a console error and data is not sent to Adobe.

```js
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
});
```
