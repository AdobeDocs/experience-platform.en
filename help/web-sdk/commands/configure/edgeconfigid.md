---
title: edgeConfigId
description: Determine the datastream ID that you want to send data to.
exl-id: 2d709f70-c014-4868-b2f5-17e8b88343d1
---
# `edgeConfigId`

The `edgeConfigId` property is a string that determines which [datastream](../../../datastreams/overview.md) in Adobe Experience Platform you want to send data to. This property is required when sending data to Adobe.

To locate a datastream ID:

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Datastreams]**.
1. Use the search field to locate the desired datastream, then select **[!UICONTROL Copy]** ![Copy](../../assets/copy.png) next to the datastream ID.

You can also select the desired datastream name, and the datastream ID appears in the right column for you to copy.

## Select the datastream ID using the Web SDK tag extension

Choose from a list of available datastreams, or enter a datastream ID directly when [configuring the tag extension](/help/tags/extensions/client/web-sdk/web-sdk-extension-configuration.md).

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Locate the [!UICONTROL Datastreams] section, then select the desired method of determining datastream.
   * If choosing from a list, select the sandbox and datastream from each respective dropdown list.
   * If entering values, enter the desired datastream ID.
1. Click **[!UICONTROL Save]**, then publish your changes.

You can send data to different datastreams for production, staging, and development tag environments.

## Select the datastream ID using the Web SDK JavaScript library

Set the `edgeConfigId` string property when running the `configure` command. This property is required for all Web SDK implementations. If you omit this property, the Web SDK does not know which datastream to send data to, causing that data to be permanently lost.

```js
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
});
```

If you configure multiple instances of the Web SDK on a single page, you must configure a different `edgeConfigId` for each instance.
