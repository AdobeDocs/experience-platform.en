---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;experience data model;data model;ui;workspace;schema;schemas;
solution: Experience Platform
title: Create and Edit Schemas in the UI
description: Learn the basics of how to create and edit schemas in the Experience Platform user interface.
exl-id: be83ce96-65b5-4a4a-8834-16f7ef9ec7d1
---
# Create and edit schemas in the UI

This guide provides an overview of how to create, edit, and manage Experience Data Model (XDM) schemas for your organization in the Adobe Experience Platform UI.

>[!IMPORTANT]
>
>XDM schemas are extremely customizable, and therefore the steps involved in creating a schema can vary depending on what kind of data you want the schema to capture. As a result, this document only covers the basic interactions you can make with schemas in the UI, and excludes related steps such as customizing classes, schema field groups, data types, and fields.
>
>For a full tour of the schema creation process, follow along with the [schema creation tutorial](../../tutorials/create-schema-ui.md) to create a complete example schema and familiarize yourself with the many capabilities of the [!DNL Schema Editor].

## Prerequisites {#prerequisites}

This guide requires a working understanding of XDM System. Refer to the [XDM overview](../../home.md) for an introduction to the role of XDM within the Experience Platform ecosystem, and the [basics of schema composition](../../schema/composition.md) for an overview of how schemas are constructed.

## Create a new schema {#create}

>[!NOTE]
>
>This section covers how to manually create a new schema in the UI. If you are ingesting CSV data into Platform, you can opt to [map that data to an XDM schema created by AI-generated recommendations](../../../ingestion/tutorials/map-csv/recommendations.md) (currently in beta) without having to manually create the schema yourself.

In the [!UICONTROL Schemas] workspace, select **[!UICONTROL Create schema]** in the top-right corner.

![The Schemas workspace with [!UICONTROL Create Schema] highlighted.](../../images/ui/resources/schemas/create-schema.png)

The [!UICONTROL Create schema] workflow appears. You can choose a base class for the schema by selecting either **[!UICONTROL Individual Profile]**, **[!UICONTROL Experience Event]**, or **[!UICONTROL Other]**, followed by **[!UICONTROL Next]** to confirm your choice. See the [XDM individual profile](../../classes/individual-profile.md) and [XDM ExperienceEvent](../../classes/experienceevent.md) documentation for more information on these classes.

![The [!UICONTROL Create schema] workflow with the three class options and [!UICONTROL Next] highlighted.](../../images/ui/resources/schemas/schema-class-options.png)

After you have selected a class, the [!UICONTROL Name and review] section appears. In this section, you provide a name and description to identify your schema. ​The schema's base structure (provided by the class) is shown in the canvas for you to review and verify your selected class and schema structure.

Enter a human-friendly [!UICONTROL Schema display name] in the text field. Next, enter a suitable description to help identify your schema. When you have reviewed your schema structure and are happy with your settings, select **[!UICONTROL Finish]** to create your schema. 

![The [!UICONTROL Name and review] section of the [!UICONTROL Create schema] workflow with the [!UICONTROL Schema display name], [!UICONTROL Description], and [!UICONTROL Finish] highlighted.](../../images/ui/resources/schemas/name-and-review.png)

The [!UICONTROL Schema] [!UICONTROL Browse] tab appears. Your recently created schema is now listed in the Schema Library and available to edit in the the [!DNL Schema Editor].

![The Schemas workspace Browse tab displaying your recently created schema.](../../images/ui/resources/schemas/example-schema.png)

## Edit an existing schema {#edit}

>[!NOTE]
>
>Once a schema has been saved and used in data ingestion, only additive changes can be made to it. See the [rules of schema evolution](../../schema/composition.md#evolution) for more information.

To edit an existing schema, select the **[!UICONTROL Browse]** tab, and then select the name of the schema you want to edit. You can also use the search bar to narrow the list of available options.

![The Schema workspace with a schema highlighted.](../../images/ui/resources/schemas/edit-schema.png)

>[!TIP]
>
>You can use the workspace's search and filtering capabilities to help find the schema easier. See the guide on [exploring XDM resources](../explore.md) for more information.

Once you select a schema, the [!DNL Schema Editor] appears with the schema's structure shown in the canvas. You can now [add field groups](#add-field-groups) to the schema (or [add individual fields](#add-individual-fields) from those groups), [edit field display names](#display-names), or [edit existing custom field groups](./field-groups.md#edit) if the schema employs any.

## More actions {#more}

Within the Schema Editor you can also conduct quick actions to copy the JSON structure of the schema or delete the schema if it has not been enabled for Real-Time Customer Profile or has associated datasets. Select [!UICONTROL More] at the top of the view to display a drop down with quick actions. 

The Copy JSON structure functionality allows you to see what a sample payload would look like while you are still building the schema and your data pipelines. It is especially helpful for situations where there are complex object map structures in the schema such as an identity map.

![The Schema Editor with the More button highlighted and the drop down options displayed.](../../images/tutorials/create-schema/more-actions.png)

## Display name toggle {#display-name-toggle}

For your convenience, the Schema Editor provides a toggle to change between the original field names and the more human-readable display names. This flexibility allows for improved field discoverability and editing of your schemas. The toggle is found at the top right of the Schema Editor view.

>[!NOTE]
>
>The change from field names to display names is purely cosmetic and does not change any downstream resources. 

![The Schema Editor with [!UICONTROL Show display names for fields] highlighted.](../../images/ui/resources/schemas/display-name-toggle.png)

The display names for standard field groups are system generated but can be customized, as described in the [display names](#display-names) section. Display names are reflected across multiple UI views, including mapping and dataset previews. The default setting is off, and shows field names by their original values.

## Add field groups to a schema {#add-field-groups}

>[!NOTE]
>
>This section covers how to add existing field groups to a schema. If you want to create a new custom field group, see the guide on [creating and editing field groups](./field-groups.md#create) instead.

Once you have opened a schema within the [!DNL Schema Editor], you can add fields to the schema through the use of field groups. To start, select **[!UICONTROL Add]** next to **[!UICONTROL Field groups]** in the left rail.

![The Schema Editor with the [!UICONTROL Add] from the [!UICONTROL Field groups] section highlighted.](../../images/ui/resources/schemas/add-field-group-button.png)

A dialog appears, showing a list of field groups that you can select for the schema. Since field groups are only compatible with one class, only those field groups that are associated with the schema's selected class will be listed. By default, listed field groups are sorted based on their usage popularity within your organization.

![The [!UICONTROL Add field groups] dialog highlighted with the [!UICONTROL Popularity] column highlighted.](../../images/ui/resources/schemas/field-group-popularity.png)

If you know the general activity or business area of the fields you want to add, select one or more of the industry-vertical categories in the left rail to filter the displayed list of field groups.

![The [!UICONTROL Add field groups] dialog highlighted with the [!UICONTROL Industry] filters and the [!UICONTROL Industry] column highlighted.](../../images/ui/resources/schemas/industry-filter.png)

>[!NOTE]
>
>For more information on best practices for industry-specific data modeling in XDM, see the documentation on [industry data models](../../schema/industries/overview.md).

You can also use the search bar to help locate your desired field group. Field groups whose name matches the query appear at the top of the list. Under **[!UICONTROL Standard Fields]**, field groups containing fields that describe desired data attributes are displayed.

![The [!UICONTROL Add field groups] dialog with the [!UICONTROL Standard fields] search function highlighted.](../../images/ui/resources/schemas/field-group-search.png)

Select the checkbox next to the name of the field group that you wish to add to the schema. You can select multiple field groups from the list, with each selected field group appearing in the right rail.

![The [!UICONTROL Add field groups] dialog with the checkbox selection feature highlighted.](../../images/ui/resources/schemas/add-field-group.png)

>[!TIP]
>
>For any listed field group, you can hover or focus on the information icon (![](../../images/ui/resources/schemas/info-icon.png)) to view a brief description of the kind of data the field group captures. You can also select the preview icon (![](../../images/ui/resources/schemas/preview-icon.png)) to view the structure of the fields that the field group provides before you decide to add it to the schema.

Once you have chosen your field groups, select **[!UICONTROL Add field groups]** to add them to the schema.

![The [!UICONTROL Add field groups] dialog with field groups selected and [!UICONTROL Add field groups] highlighted.](../../images/ui/resources/schemas/add-field-group-finish.png)

The [!DNL Schema Editor] reappears with the field-group-provided fields represented in the canvas.

![The [!DNL Schema Editor] with an example schema displayed.](../../images/ui/resources/schemas/field-groups-added.png)

After adding a field group to a schema, you can optionally [remove existing fields](#remove-fields) or [add new custom fields](#add-fields) to those groups, depending on your needs.

### Remove fields added from field groups {#remove-fields}

After you have added a field group to a schema, you can remove any fields that you do not need. 

>[!NOTE]
>
>Removing fields from a field group only affects the schema being worked on and does not affect the field group itself. If you remove fields in one schema, those fields are still available in all other schemas that employ the same field group.

In the following example, the standard field group **[!UICONTROL Demographic Details]** has been added to a schema. To remove a single field such as `taxId`, select the field in the canvas and then select **[!UICONTROL Remove]** in the right rail.

![The [!DNL Schema Editor] with [!UICONTROL Remove] highlighted. This action removes a single field.](../../images/ui/resources/schemas/remove-single-field.png)

If there are multiple fields you wish to remove, you can manage the field group as a whole. Select a field belonging to the group in the canvas, then select **[!UICONTROL Manage related fields]** in the right rail.

![The [!DNL Schema Editor] with [!UICONTROL Manage related fields] highlighted.](../../images/ui/resources/schemas/manage-related-fields.png)

A dialog appears showing the structure of the field group in question. From here you can use the provided checkboxes to select or deselect the fields that you require. When you are satisfied, select **[!UICONTROL Confirm]**.

![The [!UICONTROL Manage related fields] dialog with selected fields and [!UICONTROL Confirm] highlighted.](../../images/ui/resources/schemas/select-fields.png)

The canvas reappears with only the selected fields present in the schema structure.

![Fields added](../../images/ui/resources/schemas/fields-added.png)

### Add custom fields to field groups {#add-fields}

After you have added a field group to a schema, you can define additional fields for that group. However, any fields added to a field group in one schema will also appear in all other schemas that employ that same field group.

In addition, if a custom field is added to a standard field group, that field group will be converted to a custom field group and the original standard field group will no longer be available.

If you want to add a custom field to a standard field group, refer to the [section below](#custom-fields-for-standard-groups) for specific instructions. If you are adding fields to a custom field group, refer to section on [editing custom field groups](./field-groups.md) in the field groups UI guide.

If you do not want to alter any existing field groups, you can [create a new custom field group](./field-groups.md#create) to define additional fields instead.

## Add individual fields to a schema {#add-individual-fields}

The Schema Editor allows you to add individual fields directly to a schema if you want to avoid adding an entire field group for a specific use case. You can [add individual fields from standard field groups](#add-standard-fields) or [add your own custom fields](#add-custom-fields) instead.

>[!IMPORTANT]
>
>Even though the Schema Editor functionally allows you to add individual fields directly to a schema, this does not change the fact that all fields in an XDM schema must be provided by its class or a field group that is compatible with that class. As the sections below explain, all individual fields are still associated with a class or field group as a key step when they are added to a schema.

### Add standard fields {#add-standard-fields}

You can add fields from standard field groups directly to a schema without needing to know their corresponding field group beforehand. To add a standard field to a schema, select the plus (**+**) icon next to the schema's name in the canvas. An **[!UICONTROL Untitled Field]** placeholder appears in the schema structure and the right rail updates to reveal controls to configure the field.

![Field placeholder](../../images/ui/resources/schemas/root-custom-field.png)

Under **[!UICONTROL Field name]**, start typing the name of the field you wish to add. The system automatically searches for standard fields that match the query and lists them under **[!UICONTROL Recommended Standard Fields]**, including the field groups that they belong to.

![Recommended Standard Fields](../../images/ui/resources/schemas/standard-field-search.png)

While some standard fields share the same name, their structure may vary depending on the field group they come from. If a standard field is nested within a parent object in the field group structure, the parent field will also be included in the schema if the child field is added.

Select the preview icon (![Preview icon](../../images/ui/resources/schemas/preview-icon.png)) next to a standard field to view the structure of its field group and better understand how it might be nested. To add the standard field to the schema, select the plus icon (![Plus icon](../../images/ui/resources/schemas/add-icon.png)).

![Add standard field](../../images/ui/resources/schemas/add-standard-field.png)

The canvas updates to show the standard field added to the schema, including any parent fields that it is nested under within the field group structure. The name of the field group is also listed under **[!UICONTROL Field groups]** in the left rail. If you want to add more fields from the same field group, select **[!UICONTROL Manage related fields]** in the right rail.

![Standard field added](../../images/ui/resources/schemas/standard-field-added.png)

### Add custom fields {#add-custom-fields}

Similar to the workflow for standard fields, you can also add your own custom fields directly to a schema.

To add fields to the root level of a schema, select the plus (**+**) icon next to the schema's name in the canvas. An **[!UICONTROL Untitled Field]** placeholder appears in the schema structure and the right rail updates to reveal controls to configure the field.

![Root custom field](../../images/ui/resources/schemas/root-custom-field.png)

Start typing in the name of the field you wish to add, and the system automatically starts searching for matching standard fields. To create a new custom field instead, select the top option appended with **([!UICONTROL New Field])**.

![New field](../../images/ui/resources/schemas/custom-field-search.png)

After providing a display name and data type for the field, the next step is to assign the field to a parent XDM resource. If your schema uses a custom class, you can choose to [add the field to the assigned class](#add-to-class) or a [field group](#add-to-field-group) instead. If your schema uses a standard class, however, you can only assign the custom field to a field group.

#### Assign the field to a custom field group {#add-to-field-group}

>[!NOTE]
>
>This section only covers how to assign the field to a custom field group. If you want to extend a standard field group with the new custom field instead, see the section on [adding custom fields to standard field groups](#custom-fields-for-standard-groups).

Under **[!UICONTROL Assign to]**, select **[!UICONTROL Field Group]**. If your schema uses a standard class, this is the only available option and is selected by default.

Next, you must select a field group for the new field to be associated with. Start typing in the name of the field group in the provided text input. If you have any existing custom field groups that match the input, they will appear in the dropdown list. Alternatively, you can type a unique name to create a new field group instead.

![Select field group](../../images/ui/resources/schemas/select-field-group.png)

>[!WARNING]
>
>If you select an existing custom field group, any other schemas that employ that field group will also inherit the newly added field after you save your changes. For this reason, only select an existing field group if you want this type of propagation. Otherwise, you should opt to create a new custom field group instead.

After selecting the field group from the list, select **[!UICONTROL Apply]**.

![Apply field](../../images/ui/resources/schemas/apply-field.png)

The new field is added to the canvas, and is namespaced under your [tenant ID](../../api/getting-started.md#know-your-tenant_id) to avoid conflicts with standard XDM fields. The field group that you associated the new field with also appears under **[!UICONTROL Field groups]** in the left rail. 

![Tenant ID](../../images/ui/resources/schemas/tenantId.png)

>[!NOTE]
>
>The rest of the fields provided by the selected custom field group are removed from the schema by default. If you want to add some of these fields to the schema, select a field belonging to the group and then select **[!UICONTROL Manage related fields]** in the right rail.

#### Assign the field to a custom class {#add-to-class}

Under **[!UICONTROL Assign to]**, select **[!UICONTROL Class]**. The input field below is replaced with the name of the current schema's custom class, indicating that the new field will be assigned to this class.

![The [!UICONTROL Class] option being selected for the new field assignment.](../../images/ui/resources/schemas/assign-field-to-class.png)

Continue configuring the field as desired and select **[!UICONTROL Apply]** when finished.

![[!UICONTROL Apply] being selected for the new field.](../../images/ui/resources/schemas/assign-field-to-class-apply.png)

The new field is added to the canvas, and is namespaced under your [tenant ID](../../api/getting-started.md#know-your-tenant_id) to avoid conflicts with standard XDM fields. Selecting the class name in the left rail reveals the new field as part of the class' structure.

![The new field applied to the custom class' structure, represented in the canvas.](../../images/ui/resources/schemas/assign-field-to-class-applied.png)

### Add custom fields to the structure of standard field groups {#custom-fields-for-standard-groups}

If the schema you are working on has an object-type field provided by a standard field group, you can add your own custom fields to that standard object.

>[!WARNING]
>
>Any fields added to a field group in one schema will also appear in all other schemas that employ that same field group. In addition, if a custom field is added to a standard field group, that field group will be converted to a custom field group and the original standard field group will no longer be available.
>
>If you participated in the beta for this feature, you will receive a dialog informing you of the standard field groups that you have previously customized. Once you select **[!UICONTROL Acknowledge]**, the listed resources are converted to custom field groups.
>
>![Confirmation dialog to convert standard field groups](../../images/ui/resources/schemas/beta-extension-confirmation.png)

To start, select the plus (**+**) icon next to the root of the object provided by the standard field group.

![Add field to standard object](../../images/ui/resources/schemas/add-field-to-standard-object.png)

A warning message appears, prompting you to confirm whether you want to convert the standard field group. Select **[!UICONTROL Continue creating field group]** to proceed.

![Confirm field group conversion](../../images/ui/resources/schemas/confirm-field-group-conversion.png)

The canvas reappears with an untitled placeholder for the new field. Note that the name of the standard field group has been appended with "([!UICONTROL Extended])" to indicate that it has been modified from the original version. From here, use the controls in the right rail to define the field's properties.

![Field added to standard object](../../images/ui/resources/schemas/standard-field-group-converted.png)

After applying your changes, the new field appears under your tenant ID namespace within the standard object. This nested namespace prevents field-name conflicts within the field group itself in order to avoid breaking changes in other schemas that use the same field group.

![Field added to standard object](../../images/ui/resources/schemas/added-to-standard-object.png)

## Enable a schema for Real-Time Customer Profile {#profile}

>[!CONTEXTUALHELP]
>id="platform_schemas_enableforprofile"
>title="Enable a schema for Profile"
>abstract="When a schema is enabled for Profile, any datasets created from this schema participate in Real-Time Customer Profile, which merges data from disparate sources to construct a complete view of each customer. Once a schema is used to ingest data into Profile, it cannot be disabled. See the documentation for more information."

[Real-Time Customer Profile](../../../profile/home.md) merges data from disparate sources to construct a complete view of each individual customer. If you want the data captured by a schema to participate in this process, you must enable the schema for use in [!DNL Profile].

>[!IMPORTANT]
>
>In order to enable a schema for [!DNL Profile], it must have a primary identity field defined. See the guide on [defining identity fields](../fields/identity.md) for more information.

To enable the schema, start by selecting the schema's name in the left rail, then select the **[!UICONTROL Profile]** toggle in the right rail.

![](../../images/ui/resources/schemas/profile-toggle.png)

A popover appears, warning you that once a schema has been enabled and saved, it cannot be disabled. Select **[!UICONTROL Enable]** to continue.

![](../../images/ui/resources/schemas/profile-confirm.png)

The canvas reappears with the [!UICONTROL Profile] toggle enabled.

>[!IMPORTANT]
>
>Since the schema is not saved yet, this is the point of no return if you change your mind about letting the schema participate in Real-Time Customer Profile: once you save an enabled schema, it can no longer be disabled. Select the **[!UICONTROL Profile]** toggle again to disable the schema.

To finish the process, select **[!UICONTROL Save]** to save the schema.

![](../../images/ui/resources/schemas/profile-enabled.png)

The schema is now enabled for use in Real-Time Customer Profile. When Platform ingests data into datasets based on this schema, that data will be incorporated into your amalgamated Profile data.

## Edit display names for schema fields {#display-names}

Once you have assigned a class and added field groups to a schema, you can edit the display names of any of the schema's fields, regardless of whether those fields have been provided by standard or custom XDM resources.

>[!NOTE]
>
>Keep in mind that the display names of fields that belong to standard classes or field groups can only be edited in the context of a specific schema. In other words, changing the display name of a standard field in one schema does not affect other schemas that employ the same associated class or field group.
>
>Once you make changes the display names for a schema's fields, those changes are immediately reflected in any existing datasets based on that schema.

To edit the display name of a schema field, select the field in the canvas. In the right rail, provide the new name under **[!UICONTROL Display name]**.

![](../../images/ui/resources/schemas/display-name.png)

Select **[!UICONTROL Apply]** in the right rail, and the canvas updates to show the field's new display name. Select **[!UICONTROL Save]** to apply the changes to the schema.

![](../../images/ui/resources/schemas/display-name-changed.png)

## Change a schema's class {#change-class}

You can change the class of a schema at any point during the initial composition process before the schema has been saved.

>[!WARNING]
>
>Reassigning the class for a schema should be done with extreme caution. Field groups are only compatible with certain classes, and therefore changing the class will reset the canvas and any fields you have added. 

To reassign a class, select **[!UICONTROL Assign]** in the left-hand side of the canvas.

![](../../images/ui/resources/schemas/assign-class-button.png)

A dialog appears that displays a list of all available classes, including any defined by your organization (the owner being "[!UICONTROL Customer]") as well as standard classes defined by Adobe. 

Select a class from the list to display its description on the right-hand side of the dialog. You can also select **[!UICONTROL Preview class structure]** to see the fields and metadata associated with the class. Select **[!UICONTROL Assign class]** to continue.

![](../../images/ui/resources/schemas/assign-class.png)

A new dialog opens, asking you to confirm that you wish to assign a new class. Select **[!UICONTROL Assign]** to confirm.

![](../../images/ui/resources/schemas/assign-confirm.png)

After confirming the class change, the canvas will be reset and all composition progress will be lost.

## Next steps {#next-steps}

This document covered the basics of creating and editing schemas in the Platform UI. It is strongly recommended that you review the [schema creation tutorial](../../tutorials/create-schema-ui.md) for a comprehensive workflow for building a complete schema in the UI, including creating custom field groups and data types for unique use cases.

For more information on the capabilities of the [!UICONTROL Schemas] workspace, see the [[!UICONTROL Schemas] workspace overview](../overview.md).

To learn how to manage schemas in the [!DNL Schema Registry] API, see the [schemas endpoint guide](../../api/schemas.md).
