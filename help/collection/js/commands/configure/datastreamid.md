---
title: datastreamId
description: Determine the datastream ID that you want to send data to.
exl-id: 2d709f70-c014-4868-b2f5-17e8b88343d1
---
# `datastreamId`

The `datastreamId` property is a string that determines which [datastream](/help/datastreams/overview.md) in Adobe Experience Platform you want to send data to. This property is required when sending data to Adobe. Web SDK versions 2.20.0 or earlier use `edgeConfigId` instead.

To locate a datastream ID:

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Datastreams]**.
1. Use the search field to locate the desired datastream, then select **[!UICONTROL Copy]** ![Copy](../../assets/copy.png) next to the datastream ID.

Alternatively, you can select the desired datastream name and the datastream ID appears in the right column for you to copy.

## Code example

Set the `datastreamID` string property when running the `configure` command. This property is required for all Web SDK implementations. If you omit this property, the Web SDK does not know which datastream to send data to, causing that data to be permanently lost.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
});
```

>[!NOTE]
>
>If you configure multiple instances of the Web SDK on a single page, you must configure a different `datastreamId` for each instance.

## Select the datastream ID using the Web SDK tag extension

See [Datastream configuration settings](/help/tags/extensions/client/web-sdk/configure/datastreams.md) in the Web SDK tag extension documentation to learn how to set the desired datastream for each environment using tags. You can send data to different datastreams for production, staging, and development tag environments.
