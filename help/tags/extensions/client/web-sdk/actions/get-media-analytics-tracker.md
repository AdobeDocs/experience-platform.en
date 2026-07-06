---
title: Get Media Analytics tracker
description: Exports the Legacy Media API to a window object.
exl-id: 45124032-efbf-4b38-8c96-59abc30af5bc
TQID: https://experienceleague.adobe.com/FFNRnk9K4IQhadiOIEtlMyZ4Twye3dXnPkyRbU56rH4
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: fd307ce7-56f5-4ee3-af68-a7833ff6e85e
    internal-label: API
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
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
