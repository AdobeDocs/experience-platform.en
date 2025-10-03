---
title: Define Map Fields in the UI
description: Learn how to define a map field in the Experience Platform user interface.
exl-id: 657428a2-f184-4d7c-b657-4fc60d77d5c6
---
# Define map fields in the UI

Adobe Experience Platform allows you to fully customize the structure of your custom Experience Data Model (XDM) classes, schema field groups, and data types. 

You can also define map fields in the Schema Editor to store a collection of key-value pairs with flexible, dynamic keys.

When defining a new field in the Experience Platform user interface (UI), use the **[!UICONTROL Type]** dropdown and select "**[!UICONTROL Map]**" from the list.

![The Schemas Editor with the Type dropdown and Map value highlighted.](../../images/ui/fields/special/map.png)

A [!UICONTROL Map value type] property appears. This value is required for [!UICONTROL Map] data types. Available values for the map are [!UICONTROL String] and [!UICONTROL Integer]. Select a value from the drop-down list of available options.

![The Schemas Editor with the [!UICONTROL Map value type] dropdown highlighted.](../../images/ui/fields/special/map-value-type.png)

Once you have configured the subfield, you must assign it to a field group. Use the **[!UICONTROL Field Group]** drop down menu, or search field, and select **[!UICONTROL Apply]**. You can continue to add fields to the object using the same process, or select **[!UICONTROL Save]** to confirm your settings. 

![A recording of the field group selection and settings being applied.](../../images/ui/fields/special/assign-to-field-group.gif)

## Usage restrictions {#restrictions}

XDM places the following restrictions on the use of this data type:

* Map types MUST be of type `object`.
* Map types MUST NOT have properties defined (in other words, they define "empty" objects).
* Map types MUST include an `additionalProperties.type` field that describes the values that may be placed within the map, either `string` or `integer`.
* Multi-entity segmentation can only be defined based on the map keys and not the values.     
* Maps are not supported for account audiences.
* Maps defined in custom XDM objects are limited to a single level. Nested maps cannot be created. This restriction does not apply to maps defined in standard XDM objects.
* Arrays of maps are not supported. Each map must be defined as a standalone field.

Ensure that you are only using map-type fields when absolutely necessary, as they carry the following performance drawbacks:

* Response time from [Adobe Experience Platform Query Service](../../../query-service/home.md) degrades from three seconds to ten seconds for 100 million records.
* Maps must have fewer than 16 keys or else risk further degradation.

>[!NOTE]
>
>The Experience Platform UI has limitations in how it can extract the keys of map-type fields. Whereas object-type fields can be expanded, maps are displayed as a single field instead. Map fields created through the Schema Registry API that are not string or integer data types are displayed as "[!UICONTROL Complex]" data types.

## Next steps

After reading this document, you are now able to define map fields in the Experience Platform UI. Remember that you can only use classes and field groups to add fields to schemas. To learn more about how to manage these resources in the UI, see the guides on creating and editing [classes](../resources/classes.md) and [field groups](../resources/field-groups.md).

For more information on the capabilities of the [!UICONTROL Schemas] workspace, see the [[!UICONTROL Schemas] workspace overview](../overview.md).
