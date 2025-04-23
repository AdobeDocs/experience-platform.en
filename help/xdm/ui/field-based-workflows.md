---
title: Field-based workflows in the Schema Editor
description: Learn how to individually add fields from existing field groups to your Experience Data Model (XDM) schemas.
exl-id: 0499ff30-a602-419b-b9d3-2defdd4354a7
---
# Field-based workflows in the Schema Editor

Adobe Experience Platform provides a robust set of standardized [field groups](../schema/composition.md#field-group) for use in Experience Data Model (XDM) schemas. The structure and semantics behind these field groups are carefully tailored to meet a wide variety of segmentation use cases and other downstream applications in Experience Platform. You can also define your own custom field groups to address unique business needs.

When you add a field group to a schema, that schema inherits all the fields contained in that group. However, you can now add individual fields to your schema without needing to include other fields from the associated field group that you may not necessarily use.

This guide covers the different methods for adding individual fields to a schema in the Experience Platform UI.

## Prerequisites

This tutorial assumes that you are familiar with the [composition of XDM schemas](../schema/composition.md) and how to use the Schema Editor in the Experience Platform UI. To follow along, you should start the process of [creating a new schema](./resources/schemas.md) and assigning it to a standard class before continuing with this guide.

## Remove fields added from standard field groups {#remove-field-group}

After you have added a standard field group to a schema, you can remove any standard fields that you do not need. 

>[!NOTE]
>
>Removing fields from a standard field group only affects the schema being worked on and does not affect the field group itself. If you remove standard fields in one schema, those fields are still available in all other schemas that employ the same field group.

In the following example, the standard field group **[!UICONTROL Demographic Details]** has been added to a schema. To remove a single field such as `maritalStatus`, select the field in the canvas and then select **[!UICONTROL Remove]** in the right rail.

![The Schema Editor with the field group, Marital Status field, and Remove highlighted.](../images/ui/field-based-workflows/remove-single-field.png)

If there are multiple fields you wish to remove, you can manage the field group as a whole. Select a field belonging to the group in the canvas, then select **[!UICONTROL Manage related fields]** in the right rail.

![The Schema Editor with a field and Manage related fields highlighted.](../images/ui/field-based-workflows/manage-related-fields.png)

A dialog appears showing the structure of the field group in question. From here you can use the provided checkboxes to select or deselect the fields that you require. When you are satisfied, select **[!UICONTROL Confirm]**.

![The Manage related fields dialog with the field group diagram and Confirm highlighted.](../images/ui/field-based-workflows/select-fields.png)

The canvas reappears with only the selected fields present in the schema structure.

![The Schema Editor with the newly edited field group highlighted.](../images/ui/field-based-workflows/fields-added.png)

## Add standard fields directly to a schema

You can add fields from standard field groups directly to a schema without needing to know their corresponding field group beforehand. To add a standard field to a schema, select the plus (**+**) icon next to the schema's name in the canvas. An **[!UICONTROL Untitled Field]** placeholder appears in the schema structure and the right rail updates to reveal controls to configure the field.

![The Schema Editor with a root field placeholder highlighted.](../images/ui/field-based-workflows/root-custom-field.png)

Under **[!UICONTROL Field name]**, start typing the name of the field you wish to add. The system automatically searches for standard fields that match the query and lists them under **[!UICONTROL Recommended Standard Fields]**, including the field groups that they belong to.

![The Field name highlighted and a list of recommended standard fields displayed within the field properties of the Schema Editor.](../images/ui/field-based-workflows/standard-field-search.png)

While some standard fields share the same name, their structure may vary depending on the field group they come from. If a standard field is nested within a parent object in the field group structure, the parent field will also be included in the schema if the child field is added.

Select the preview icon (![Preview icon](/help/images/icons/preview.png)) next to a standard field to view the structure of its field group and better understand how it might be nested. To add the standard field to the schema, select the plus icon (![Plus icon](/help/images/icons/add-circle.png)).

![The add icon highlighted on an item of the suggested standard fields.](../images/ui/field-based-workflows/add-standard-field.png)

The canvas updates to show the standard field added to the schema, including any parent fields that it is nested under within the field group structure. The name of the field group is also listed under **[!UICONTROL Field groups]** in the left rail. If you want to add more fields from the same field group, select **[!UICONTROL Manage related fields]** in the right rail.

![The Schema Editor with the Field group, standard field, and Manage related fields highlighted.](../images/ui/field-based-workflows/standard-field-added.png)

## Add custom fields directly to a schema

Similar to the workflow for standard fields, you can also add your own custom fields directly to a schema. 

To add fields to the root level of a schema, select the plus (**+**) icon next to the schema's name in the canvas. An **[!UICONTROL Untitled Field]** placeholder appears in the schema structure and the right rail updates to reveal controls to configure the field.

![The Schema Editor with the add icon and an untitled root level field highlighted.](../images/ui/field-based-workflows/root-custom-field.png)

Start typing in the name of the field you wish to add, and the system automatically starts searching for matching standard fields. To create a new custom field instead, select the top option appended with **([!UICONTROL New Field])**.

![The Field name and New Field suggestion highlighted within the field properties of the Schema Editor.](../images/ui/field-based-workflows/custom-field-search.png)

From here, provide a display name and data type for the field. Under **[!UICONTROL Assign field group]**, you must select a field group for the new field to be associated with. Start typing in the name of the field group, and if you have previously [created custom field groups](./resources/field-groups.md#create) they will appear in the dropdown list. Alternatively, you can type a unique name into the field to create a new field group instead.

![The Display name, Type, and Assign to field property settings highlighted in the Schema Editor.](../images/ui/field-based-workflows/select-field-group.png)

>[!WARNING]
>
>If you select an existing custom field group, any other schemas that employ that field group will also inherit the newly added field after you save your changes. For this reason, only select an existing field group if you want this type of propagation. Otherwise, you should opt to create a new custom field group instead.

When finished, select **[!UICONTROL Apply]**.

![Apply is highlighted in the field properties of the Schema Editor.](../images/ui/field-based-workflows/apply-field.png)

The new field is added to the canvas, and is namespaced under your [tenant ID](../api/getting-started.md#know-your-tenant_id) to avoid conflicts with standard XDM fields. The field group that you associated the new field with also appears under **[!UICONTROL Field groups]** in the left rail. 

![The Schema Editor with the new field added to the canvas, and namespaced under your tenant ID. The Field group and field are highlighted.](../images/ui/field-based-workflows/tenantId.png)

>[!NOTE]
>
>The rest of the fields provided by the selected custom field group are removed from the schema by default. If you want to add some of these fields to the schema, select a field belonging to the group and then select **[!UICONTROL Manage related fields]** in the right rail.

### Add custom fields to the structure of standard field groups

If the schema you are working on has an object-type field provided by a standard field group, you can add your own custom fields to that standard object. Select the plus (**+**) icon next to the root of the object. 

>[!IMPORTANT]
>
>Any fields added to a field group in one schema will also appear in all other schemas that employ that same field group.

![The Schema Editor with the plus icon next to a standard object highlighted.](../images/ui/field-based-workflows/add-field-to-standard-object.png)

See the [Create and edit schemas in the UI guide](./resources/schemas.md#custom-fields-for-standard-groups) for more information on adding custom fields.

## Next steps

This guide covered the new field-based workflows for the Schema Editor in the Experience Platform UI. For more information about managing schemas in the UI, see the [UI overview](./overview.md).
