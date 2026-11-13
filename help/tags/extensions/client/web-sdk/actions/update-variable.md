---
title: Update variable
description: Modifies the contents of a variable data element.
exl-id: 6c558d1e-85b4-45f9-ba4d-5fed1ec6e308
TQID: 'https://experienceleague.adobe.com/FHWcaLTAxIT4OeOvFzTnw5Jd3GT3ngHeqAN6ntPJ2uo'
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
  - id: 1a2b3c4d-0006-4006-8006-000000000006
    internal-label: Data collection tags rules
  - id: f9a2105e-7a47-4e85-9193-31a519a2cb83
    internal-label: Data collection tags data elements
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b23e006f-0a29-4f1d-8fd0-77aa56f3d12b
    internal-label: Data modeling
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Update variable

The **[!UICONTROL Update variable]** action allows you to make partial or incremental changes to a [variable data element](../data-element-types.md#variable). You can use this action to build up an object that can later be referenced in a [[!UICONTROL Send event]](send-event.md) action. Populating data elements and assigning them to properties within an XDM object fits most use cases; this action provides more flexibility to allow you to conditionally set properties to different data elements based on rule conditions.

If you use the Adobe Client Data Layer, you can fill in a variable from data layer pushes. See [Send Adobe Client Data Layer data with the Web SDK](/help/collection/acdl/web-sdk.md).

Before using this action, you must already have a variable data element created. Once you select a variable data element to modify, an editor appears, allowing you to set any desired fields for this action.

![Screenshot of the update variable action within the action configuration interface](../assets/update-variable.png)

The XDM schema used in the editor matches the schema selected within the variable data element. You can set one or more properties of the object by expanding objects and selecting desired properties. For example, in the screenshot below, the `producedBy` property is set to the data element `%Produced by data element%`.

![Screenshot of the action configuration interface showing an updated property](../assets/update-variable-set-property.png)

If you select a variable data element that uses a data object instead of an XDM object, available fields depend on the products selected when configuring the data element. For example, if you create a data object that includes Adobe Analytics, fields, then selecting the variable data element in this UI would provide fields that you can fill out specific to Adobe Analytics.

![Screenshot of the action configuration interface showing a variable data element based on a data object](../assets/variable-data-element-data.png)
