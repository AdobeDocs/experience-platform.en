---
keywords: Experience Platform;home;popular topics;ui;XDM;XDM system;experience data model;Experience data model;Experience Data Model;data model;Data Model;schema registry;Schema Registry;schema;Schema;schemas;Schemas;create;data type;data types;
solution: Experience Platform
title: Create and Edit Data Types Using the UI
type: Tutorial
description: Learn how to create and edit data types in the Experience Platform user interface.
exl-id: 2c917154-c425-463c-b8c8-04ba37d9247b
---
# Create and edit data types using the UI {#ui-create-and-edit}

>[!CONTEXTUALHELP]
>id="platform_schemas_datatype_filter"
>title="Standard or custom data type filter"
>abstract="The list of available data types is pre-filtered based on how they were created. Select the radio button to choose between the Standard and Custom options. The Standard option shows entities created by Adobe and the Custom option displays entities created within your organization. See the documentation to learn more about creating and editing data types."

In Experience Data Model (XDM), data types are reusable fields that contain multiple sub-fields. While similar to schema field groups in that they allow for the consistent use of a multi-field structure, data types are more flexible because they can be included anywhere in the schema structure whereas field groups can only be added at the root level.

Adobe Experience Platform provides many standard data types that can be used to cover a wide variety of common experience management use cases. However, you can also define your own custom data types in order to serve your unique business needs.

>[!NOTE]
>
>If a field is defined as a specific data type, you cannot create the same field with a different datatype in another schema. This constraint applies across your organization's tenant.

This tutorial covers the steps for creating and editing custom data types in the Platform user interface.

## Prerequisites {#prerequisites}

This guide requires a working understanding of XDM System. Refer to the [XDM overview](../../home.md) for an introduction to the role of XDM within the Experience Platform ecosystem, and the [basics of schema composition](../../schema/composition.md) for how data types contribute to XDM schemas.

While not required for this guide, it is recommended that you also follow the tutorial on [composing a schema in the UI](../../tutorials/create-schema-ui.md) to familiarize yourself with the various capabilities of the [!DNL Schema Editor].

## Open the [!DNL Schema Editor] for a data type {#data-type}

In the Platform UI, select **[!UICONTROL Schemas]** in the left navigation to open the [!UICONTROL Schemas] workspace, then select the **[!UICONTROL Data types]** tab. A list of available data types is displayed. The list of data types is automatically filtered based on how they were created. The default setting displays the data types defined by Adobe. You can also filter the list to show those created by your organization. 

![The [!UICONTROL Schemas] workspace with [!UICONTROL Schemas] in the left navigation and [!UICONTROL Data types] highlighted.](../../images/ui/resources/data-types/data-types-tab.png)

From here, you have the following options:

- [Create a new data type](#create)
- [Filter data types](#filter)
- [Select an existing data type to edit](#edit)

### Create a new data type {#create}

From the **[!UICONTROL Data types]** tab, select **[!UICONTROL Create data type]**.

![The [!UICONTROL Schemas] workspace [!UICONTROL Data types] tab with [!UICONTROL Create data type] highlighted.](../../images/ui/resources/data-types/create.png)

The [!DNL Schema Editor] appears, showing the current structure of the new data type in the canvas. On the right-hand side of the editor, you can provide a display name and optional description for the data type. Ensure that you provide a unique and concise name for your data type, as that is how it will be identified when adding it to a schema.

This tutorial creates a data type that describes a restaurant property, so the data type is given a display name of "Restaurant".

![](../../images/ui/resources/data-types/data-type-properties.png)

From here, you can skip ahead to the [next section](#add-fields) to start adding fields to the new data type.

### Filter data types {#filter}

The list of available data types is pre-filtered based on how they were created. Select the radio button to choose between the [!UICONTROL Standard] and [!UICONTROL Custom] options. The [!UICONTROL Standard] option shows entities created by Adobe and the [!UICONTROL Custom] option displays entities created within your organization.

![The [!UICONTROL Data types] tab of the [!UICONTROL Schemas] workspace with [!UICONTROL Standard] and [!UICONTROL Custom] highlighted.](../../images/ui/resources/data-types/standard-and-custom-data-types.png)

### Edit an existing data type {#edit}

>[!NOTE]
>
>Once an existing data type is used in a schema that has been enabled for use in Real-Time Customer Profile, only non-destructive changes can be made to that data type thereafter. See the [rules of schema evolution](../../schema/composition.md#evolution) for more information.

Only custom data types defined by your organization can be edited. Select **[!UICONTROL Custom]** to show only custom data types owned by your organization.

Select the data type you want to edit from the list to open the right rail, showing the details of the data type. From the details panel you can also download a sample file, copy the JSON structure or add the data type to a package. 

Select the name of the data type in the right rail to open its structure in the [!DNL Schema Editor].

![The [!UICONTROL Data types] tab of the [!UICONTROL Schemas] workspace, with a data type, [!UICONTROL Custom] and the data type [!UICONTROL Name] highlighted.](../../images/ui/resources/data-types/edit.png)

## Add fields to the data type {#add-fields}

To start adding fields to the data type, select the **plus (+)** icon next to the root-level field in the canvas. A new field appears below, and the right rail updates to display controls for the new field.

![](../../images/ui/resources/data-types/new-field.png)

Use the controls in the right rail to configure the details of the new field. See the guide on [defining fields in the UI](../fields/overview.md#define) for specific steps on how to configure and add the field to the data type.

The Restaurant data type requires a string field to represent the restaurant's name. As such, the [!UICONTROL Field name] is set as "name" and the [!UICONTROL Type] is set as "[!UICONTROL String]". Select **[!UICONTROL Apply]** to apply the changes to the field.

![](../../images/ui/resources/data-types/name-field.png)

Continue adding more fields to the data type as needed. The example Restaurant data type now has additional fields for brand, seating capacity, and floor space.

![](../../images/ui/resources/data-types/more-fields.png)

In addition to basic fields, you can also nest additional data types within your custom data type. For example, the Restaurant data type requires a field that represents the property's physical address. In this scenario, you can add a new "address" field which is assigned the standard data type "[!UICONTROL Postal address]".

![](../../images/ui/resources/data-types/address-field.png)

This demonstrates how flexible data types can be in terms of describing your data: data types can employ fields which are also data types, which themselves can contain further data types, and so on. This allows you to abstract and reuse common data patterns throughout your XDM schemas, making it easier to represent complex data structures.

Once you have finished adding fields to the data type, select **[!UICONTROL Save]** to save your changes and add the data type to the [!DNL Schema Library].

## Add the data type to a schema {#add-data-type}

Once you have created a data type, you can start using it in your schemas. Since XDM schemas are composed of a class and zero or more field groups, fields provided by a data type cannot be added to a schema directly. Instead, they must be included in a class or a field group.

Start by following the steps involved with [adding a field to a class](./classes.md#add-fields) or [adding a field to a field group](./field-groups.md#add-fields). Alternatively, you can start [adding a field directly to a schema](./schemas.md#add-individual-fields) and choose the parent class or field group from there. When you choose the **[!UICONTROL Type]** for the new field, select the name of your data type from the dropdown menu.

## Convert a multi-field object into a data type {#convert}

When you create an object-type field with multiple sub-fields in the [!DNL Schema Editor], you can convert that field into a data type so you can use that same field structure in a different class or field group.

To convert an object-type field to a data type, select the field in the canvas. Before you convert the field, ensure that the **[!UICONTROL Display name]** is descriptive of the data that the object will contain, as this will become the name of the data type. When you are ready to convert the field, select **[!UICONTROL Convert to new data type]** in the right rail.

![](../../images/ui/resources/data-types/convert-object.png)

The canvas updates the data type of the field from "[!UICONTROL Object]" to the new data type. This structure can now be reused in other classes and field groups by selecting this data type from the **[!UICONTROL Type]** dropdown when defining a new field.

![](../../images/ui/resources/data-types/converted.png)

## Next steps {#next-steps}

This guide covered how to create and edit data types using the Platform UI. For more information on the capabilities of the [!UICONTROL Schemas] workspace, see the [[!UICONTROL Schemas] workspace overview](../overview.md).

To learn how to manage data types using the [!DNL Schema Registry] API, see the [data types endpoint guide](../../api/data-types.md).
