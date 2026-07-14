---
title: datastreamId
description: Determine the datastream ID that you want to send data to.
exl-id: 2d709f70-c014-4868-b2f5-17e8b88343d1
TQID: https://experienceleague.adobe.com/mKVKjTc3GpTx-AYw54rFETXaFRRoGA0l5EYtqy-UtBw
product_v2:
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
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
