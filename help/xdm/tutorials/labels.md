---
title: Manage Data Usage Labels for a Schema
description: Learn how to add data usage labels to Experience Data Model (XDM) schema fields in the Adobe Experience Platform UI.
---
# Manage data usage labels for a schema (Beta)

>[!IMPORTANT]
>
>This feature is currently in beta and your organization may not have access to it yet. The functionality described in this documentation is subject to change.

All data that is brought into Adobe Experience Platform is constrained by Experience Data Model (XDM) schemas. This data may be subject to usage restrictions defined by your organization or by legal regulations. To account for this, the Platform allows you to restrict the usage of certain datasets and fields through the use of [data usage labels](../../data-governance/labels/overview.md).

A label applied to a schema field indicates the usage policies that apply to the data contained in that specific field. 

While labels can be applied to applied to individual datasets (and fields within those datasets), you can also apply labels at the schema level. When labels are applied directly to a schema, those labels are propagated to all existing and future datasets that are based on that schema.

This tutorial covers the steps for adding labels to a schema using the Schema Editor in the Platform UI.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [[!DNL Experience Data Model (XDM) System]](../home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
  * [Schema Editor](../ui/overview.md): Learn how to create and manage schemas and other resources in the Platform UI.
* [[!DNL Adobe Experience Platform Data Governance]](../../data-governance/home.md): Provides the infrastructure for enforcing data usage restrictions on Platform operations, using policies that define which marketing actions can (or cannot) be performed on labeled data.

## Select a schema or field to add labels to

Labels can only be applied to schemas, and cannot be added to the components that make up those schemas (classes, field groups, and data types). To start adding labels, you must first [select an existing schema to edit](../ui/resources/schemas.md#edit) or [create a new schema](../ui/resources/schemas.md#create) to view its structure in the Schema Editor.

To edit the labels for an individual field, you can select the field in the canvas and then select **[!UICONTROL Manage access]** in the right rail.

![Select a field from the Schema Editor canvas](../images/tutorials/labels/manage-access.png)

You can also select the **[!UICONTROL Labels]** tab, choose the desired field from the list, and select **[!UICONTROL Edit governance labels]** in the right rail.

![Select a field from the [!UICONTROL Labels] tab](../images/tutorials/labels/select-field-on-labels-tab.png)

To edit the labels for the entire schema, select the pencil icon (![](../images/tutorials/labels/pencil-icon.png)) next to the schema's name under the **[!UICONTROL Labels]** tab.

![Select the schema name from the [!UICONTROL Labels] tab](../images/tutorials/labels/select-schema-on-labels-tab.png)

## Edit the labels for the schema or field

A dialog appears that allows you to edit the labels for the selected field. If you selected an individual object-type field, the right rail lists the sub-fields that the applied labels will propagate to.

![Selected fields displayed](../images/tutorials/labels/edit-labels.png)

>[!NOTE]
>
>If you are editing fields for the whole schema, the right rail does not list the applicable fields and displays the schema name instead.

Use the displayed list to select the labels you want to add to the schema or field. As labels are chosen, the **[!UICONTROL Applied labels]** section updates to show the labels that have been selected so far.

![Applied labels displayed](../images/tutorials/labels/applied-labels.png)

To filter the displayed labels by type, select the desired category in the left rail. To create a new custom label, select **[!UICONTROL Create label]**.

![Filter displayed labels or create a new label](../images/tutorials/labels/filter-and-create-custom.png)

Once you are satisfied with your chosen labels, select **[!UICONTROL Save]** to apply them to the field or schema.

![Save the selected labels](../images/tutorials/labels/save-labels.png)

The **[!UICONTROL Labels]** tab reappears, showing the applied labels for the schema.

![Field labels applied](../images/tutorials/labels/field-labels-added.png)

## Next steps

This guide covered how to manage data usage labels for schemas and fields. For information on managing data usage labels, including how to add them to specific datasets rather than at the schema level, see the [data usage labels UI guide](../../data-governance/labels/user-guide.md).
