---
title: Update variable
description: Modifies the contents of a variable data element.
exl-id: 6c558d1e-85b4-45f9-ba4d-5fed1ec6e308
TQID: https://experienceleague.adobe.com/FHWcaLTAxIT4OeOvFzTnw5Jd3GT3ngHeqAN6ntPJ2uo
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
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
# Update variable

The **[!UICONTROL Update variable]** action allows you to make partial or incremental changes to a [variable data element](../data-element-types.md#variable). You can use this action to build up an object that can later be referenced in a [[!UICONTROL Send event]](send-event.md) action. Populating data elements and assigning them to properties within an XDM object fits most use cases; this action provides more flexibility to allow you to conditionally set properties to different data elements based on rule conditions.

Before using this action, you must already have a variable data element created. Once you select a variable data element to modify, an editor appears, allowing you to set any desired fields for this action.

![Screenshot of the update variable action within the action configuration interface](../assets/update-variable.png)

The XDM schema used in the editor matches the schema selected within the variable data element. You can set one or more properties of the object by expanding objects and selecting desired properties. For example, in the screenshot below, the `producedBy` property is set to the data element `%Produced by data element%`.

![Screenshot of the action configuration interface showing an updated property](../assets/update-variable-set-property.png)

If you select a variable data element that uses a data object instead of an XDM object, available fields depend on the products selected when configuring the data element. For example, if you create a data object that includes Adobe Analytics, fields, then selecting the variable data element in this UI would provide fields that you can fill out specific to Adobe Analytics.

![Screenshot of the action configuration interface showing a variable data element based on a data object](../assets/variable-data-element-data.png)
