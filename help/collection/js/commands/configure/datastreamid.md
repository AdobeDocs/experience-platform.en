---
title: datastreamId (Web SDK)
description: Determine the datastream ID that you want to send data to.
exl-id: 2d709f70-c014-4868-b2f5-17e8b88343d1
TQID: 'https://experienceleague.adobe.com/mKVKjTc3GpTx-AYw54rFETXaFRRoGA0l5EYtqy-UtBw'
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `datastreamId` (Web SDK)

>[!BEGINSHADEBOX]

*This page describes `datastreamId` in the Web SDK `configure` command. For the Server SDK, see [`datastreamId`](/help/collection/server-js/methods/configure/datastreamid.md).*

>[!ENDSHADEBOX]

The `datastreamId` property is a string that determines which [datastream](/help/datastreams/overview.md) in Adobe Experience Platform you want to send data to. This property is required when sending data to Adobe. Web SDK versions 2.20.0 or earlier use `edgeConfigId` instead.

To locate a datastream ID:

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
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
