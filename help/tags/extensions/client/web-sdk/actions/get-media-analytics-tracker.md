---
title: Get Media Analytics tracker
description: Exports the Legacy Media API to a window object.
exl-id: 45124032-efbf-4b38-8c96-59abc30af5bc
TQID: 'https://experienceleague.adobe.com/FFNRnk9K4IQhadiOIEtlMyZ4Twye3dXnPkyRbU56rH4'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
  - id: e9dbdbc5-3e52-40f0-a7bc-e18542967b7a
    internal-label: Implementations
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
  - id: 1a2b3c4d-0006-4006-8006-000000000006
    internal-label: Data collection tags rules
  - id: bcc784b7-4ade-4c84-96fa-2f7631b1e5fd
    internal-label: Media Analytics
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: c2be0313-b3ae-45e0-b454-d20bf54b23f2
    internal-label: Measurement
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Get Media Analytics Tracker

The **[!UICONTROL Get Media Analytics tracker]** action is used to get the Legacy Media Analytics API. When configuring the action and an object name is provided, then the legacy Media Analytics API is be exported to that window object. This action is useful for moving from legacy Media Analytics to Streaming Media Analytics.

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, then set the [!UICONTROL Action type] to **[!UICONTROL Get Media Analytics tracker]**.

![Experience Platform UI image showing the Get Media Analytics Tracker action type.](../assets/get-media-analytics-tracker.png)

This action contains a single field that you can configure:

* **[!UICONTROL Export the Media Legacy API to this window object]**: Selects the desired object to export the Media Legacy API to. If none is provided, the action exports the API to `window.Media`.
