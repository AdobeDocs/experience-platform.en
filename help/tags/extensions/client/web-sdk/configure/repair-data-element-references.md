---
title: Repair data element references
description: Learn how to scan and repair stale data element references across all Web SDK extension actions in a tag property.
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
  - id: f9a2105e-7a47-4e85-9193-31a519a2cb83
    internal-label: Data collection tags data elements
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b4dd41a7-ccf8-4e9d-918e-acaab534a307
    internal-label: Data quality
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Repair data element references {#repair-data-element-references}

>[!CONTEXTUALHELP]
>id="platform_tags_websdk_repairreferences"
>title="Repair data element references"
>abstract="Scans every action in this property that belongs to the AEP Web SDK extension and updates any that reference a data element no longer present on this property."

The **[!UICONTROL Repair data element references]** feature scans every action in the current tag property and identifies any with stale data element references. If a data element with the same name exists in the property, the stale reference is replaced automatically. Actions that cannot be repaired automatically are reported so that you can fix them manually. Adobe recommends using this feature after copying an extension or rules containing **[!UICONTROL Update Data Element]** actions to another property, as the copied actions can still reference data elements from the source property that are no longer present in the destination. It is available starting with tag extension version 2.37.0.

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Expand the **[!UICONTROL Property actions]** accordion.
1. Under **[!UICONTROL Repair data element references]**, select **[!UICONTROL Run repair]**.
1. Review the description in the confirmation modal, then select **[!UICONTROL Confirm]**.

After the scan completes, the results show the total number of actions scanned. Any references that were automatically repaired are listed. Actions with stale references that could not be resolved automatically are listed separately so that you can fix them manually. Select **[!UICONTROL Run again]** to perform another scan, or **[!UICONTROL Close]** to dismiss the results.
