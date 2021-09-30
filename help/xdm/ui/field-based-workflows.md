---
title: Field-based workflows in the Schema Editor
description: Learn how to individually add standard fields from Adobe-defined field groups to your Experience Data Model (XDM) schemas.
hide: true
hidefromtoc: true
---
# Field-based workflows in the Schema Editor

Adobe Experience Platform provides a robust set of standardized [field groups](../../schema/composition.md#field-group) for use in Experience Data Model (XDM) schemas. The structure and semantics behind these field groups are carefully tailored to meet a wide variety of segmentation use cases and other downstream applications in Platform. You can also define your own custom field groups to address unique business needs.

When you add a field group to a schema, that schema inherits all the fields contained in that group. However, you can now add individual fields to your schema without needing to include other fields from the group that you may not necessarily use.

This guide covers the different methods for adding individual fields to a schema in the Platform UI.

## Prerequisites

This tutorial assumes that you are familiar with the [composition of XDM schemas](../../schema/composition.md) and how to use the Schema Editor in the Platform UI. To follow along, you should start the process of [creating a new schema](./schemas.md) and assigning it to a standard class before continuing with this guide.

## Remove fields added from standard field groups

After you have added a standard field group to a schema, you can remove any standard fields that you do not need. 

>[!NOTE]
>
>Removing fields from a standard field group only affects the schema being worked on and does not affect the field group itself. If you remove standard fields in one schema, those fields are still available in all other schemas that employ the same field group.

In the following example, the standard field group **[!UICONTROL Demographic Details]** has been added to a schema. To remove a single field such as `taxId`, select the field in the canvas and then select **[!UICONTROL Remove]** in the right rail.

![Remove single field](../images/ui/field-based-workflows/remove-single-field.png)

If there are multiple fields you wish to remove, you can manage the field group as a whole. Select a field belonging to the group in the canvas, then select **[!UICONTROL Manage related fields]** in the right rail.

![Manage related fields](../images/ui/field-based-workflows/manage-related-fields.png)

A dialog appears, showing the structure of the field group in question. From here you can use the provided checkboxes to select or deselect the fields that you require. When you are satisfied, select **[!UICONTROL Add fields]**.

![Select fields from field group](../images/ui/field-based-workflows/select-fields.png)

The canvas reappears with only the selected fields present in the schema structure.

![Fields added](../images/ui/field-based-workflows/fields-added.png)

## Add custom fields directly to a schema

If you have previously [created custom field groups](./resources/field-groups.md#create), add custom fields directly to the schema without needing to separately add them to a custom field group beforehand.

>[!WARNING]
>
>When you add a custom field to a schema, you must still select an existing custom field group for it to be associated with. This means that in order to add custom fields directly to a schema, you must have at least one custom field group previously defined in the sandbox you are working in. In addition, any other schemas that employ that custom field group will also inherit the newly added field after you save your changes.

To add fields to the root level of a schema, select the plus (**+**) icon next to the schema's name in the canvas.

![Root custom field](../images/ui/field-based-workflows/root-custom-field.png)

Use the controls in the right rail to provide a name, display name, and data type for the field. Under **[!UICONTROL Assign field group]**, select the custom field group that you want the new field to be associated with.

![Select field group](../images/ui/field-based-workflows/select-field-group.png)

When finished, select **[!UICONTROL Apply]**.

![Apply field](../images/ui/field-based-workflows/apply-field.png)

The new field is added to the canvas, and is namespaced under your [tenant ID](../api/getting-started.md#know-your-tenant_id) to avoid conflicts with standard XDM fields. The field group that you associated the new field with also appears under **[!UICONTROL Field groups]** in the left rail. 

![Tenant ID](../images/ui/field-based-workflows/tenantId.png)

### Add fields to the structure of standard field groups

If the schema you are working on has an object-typ fields provided by a standard field group, you can add your own custom fields to that standard object. Select the plus (**+**) icon next to the root of the object and provide the details of the custom field in the right rail.

![Add field to standard object](../images/ui/field-based-workflows/add-field-to-standard-object.png)

After applying your changes, the new field appears under your tenant ID namespace within the standard object. This nested namespace prevents field-name conflicts within the field group itself in order to avoid breaking changes in other schemas that use the same field group.

## Next steps

This guide covered the new field-based workflows for the Schema Editor in the Platform UI. For more information about managing schemas in the UI, see the [UI overview](./overview.md).
