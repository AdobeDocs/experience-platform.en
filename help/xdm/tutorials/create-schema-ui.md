---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create a schema using the Schema Editor
topic: tutorials
---

# Create a schema using the Schema Editor

The Schema Registry provides a user interface and RESTful API from which you can view and manage all resources in the Adobe Experience Platform Schema Library. The Schema Library contains resources made available to you by Adobe, Experience Platform partners, and vendors whose applications you use, as well as resources that you define and save to the Schema Registry.

This tutorial covers the steps for creating a schema using the Schema Editor within Experience Platform. If you would prefer to compose a schema using the Schema Registry API, please begin by reading the [Schema Registry developer guide](../api/getting-started.md) before attempting the tutorial [creating a schema using the API](create-schema-api.md).

This tutorial also includes steps to [define a new class](#create-new-class) that you could then use to compose a schema.

## Getting started

This tutorial requires a working understanding of the various aspects of Adobe Experience Platform involved in using the Schema Editor. Before beginning this tutorial, please review the documentation for the following concepts:

* [Experience Data Model (XDM)](../home.md): The standardized framework by which Platform organizes customer experience data.
* [Basics of schema composition](../schema/composition.md): An overview of XDM schemas and their building blocks, including classes, mixins, data types, and fields.
* [Real-time Customer Profile](../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

This tutorial requires you to have access to Experience Platform. If you do not have access to an IMS Organization in Experience Platform, please speak to your system administrator before proceeding. 

## Browse existing schemas in the Schemas workspace

The Schemas workspace within Experience Platform provides a visualization of the Schema Library, allowing you to view and manage all of the schemas available to you, as well as compose new ones. The workspace also includes the Schema Editor, the canvas on which you will compose a schema throughout this tutorial.

After logging into Experience Platform, click **Schemas** in the left-hand navigation and you will be taken to the Schemas workspace. You will see a list of schemas (a representation of the Schema Library) where you can view, manage, and customize all schemas available to you. The list includes the name, type, class, and behavior (record or time-series) on which the schema is based, as well as the date and time the schema was last modified. 

Click the filter icon next to the Search bar to use filtering capabilities for all resources in the registry, including classes, mixins, and data types.

![View the Schema Library](../images/tutorials/create-schema/schemas_filter.png "View the Schema Library containing a list of all available schemas.")

## Create and name a schema

To begin composing a schema, click **Create Schema** in the top right corner of the Schemas workspace. 

![Create Schema button](../images/tutorials/create-schema/create_schema_button.png)

The *Schema Editor* appears. This is the canvas upon which you will compose your schema. When you arrive at the editor, an "Untitled Schema" in the *Structure* section of the canvas is automatically created for you to begin customizing.

![Schema Editor](../images/tutorials/create-schema/schema_editor.png "The editor will contain an 'untitled schema' ready for you to customize.")

On the right-hand side of the editor are *Schema Properties* where you can provide a name for the schema (using the **Display Name** field). Once a name is entered, the canvas updates to reflect the new name of the schema.

![Schema Canvas](../images/tutorials/create-schema/name_schema.png)

There are several important considerations to make when deciding on a name for your schema:

* Schema names should be short and descriptive so that the schema can be easily found in the library later. 
* Schema names must be unique, meaning it should also be specific enough that it will not be reused in the future. For example, if your organization had separate loyalty programs for different brands, it would be wise to name your schema "Brand A Loyalty Members" to make it easy to distinguish from other loyalty-related schemas you might define later.
* Optionally, you can provide additional information about the schema using the **Description** field.

This tutorial composes a schema to ingest data related to the members of a loyalty program, therefore the schema is named "Loyalty Members".

## Assign a class

On the left-hand side of the editor is the *Composition* section. It currently contains two sub-sections: *Schema* and *Class*. 

Now that the schema has a name, it is time to assign the class that the schema will implement. Click **Assign** next to *Class*.

![](../images/tutorials/create-schema/assign_class_button.png)

The *Assign Class* dialog appears. This window displays a list of all available classes, including any defined by your organization (the owner being "Customer") as well as standard classes defined by Adobe. 

Click on the class name to display the description of the class. You can also choose to **Preview Class Structure** to see the fields and metadata associated with the class.

This tutorial uses the XDM Individual Profile class. Click the radio button beside the class to select it, then click **Assign Class**.

![Assign Class Dialog](../images/tutorials/create-schema/assign_class.png "Select the class your schema will implement.")

The canvas reappears. The *Class* section now contains the class you selected (XDM Individual Profile) and the fields contributed by the XDM Individual Profile class are now visible within the *Structure* section.

![XDM Individual Profile Class Assigned](../images/tutorials/create-schema/class_assigned_structure.png "The XDM Individual Profile class now appears in the Schema Editor.")

The fields appear in the format "fieldName | Data Type". Steps for defining schema fields in the UI are provided later in this tutorial.

>[!NOTE] You can [change the class of a schema](#change-the-class-of-a-schema) at any point during the initial composition process before the schema has been saved, but this should be done with extreme caution. Mixins are only compatible with certain classes, therefore changing the class will reset the canvas and any fields you have added. 

## Add a mixin

Now that a class has been assigned, the *Composition* section contains a third sub-section: *Mixins*. 

You can now begin to add fields to your schema by adding mixins. A mixin is a group of one or more fields that describe a particular concept. This tutorial uses mixins to describe the members of the loyalty program and capture key information such as name, birthday, phone number, address, and more.

To add a mixin, click **Add** in the *Mixins* sub-section.

![](../images/tutorials/create-schema/add_mixin_button.png)

The *Add Mixin* dialog appears. Mixins are only intended for use with specific classes, therefore the list of mixins shows only those compatible with the class you selected (in this case, the XDM Individual Profile class).

Selecting the radio button next to a mixin will give you the option to **Preview Mixin Structure**. Select the "Profile Person Details" mixin, then click **Add Mixin**.

![](../images/tutorials/create-schema/add_mixin_person_details.png)

The schema canvas reappears. The *Mixins* section now lists the "Profile Person Details" mixin and the *Structure* section includes the fields contributed by the mixin. 

![](../images/tutorials/create-schema/person_details_structure.png)

This mixin contributes several fields under the top-level name "person" with the data type "Person". This group of fields describes information about an individual, including name, birth date, and gender. 

>[!NOTE] Remember that fields may use scalar types (such as string, integer, array, or date) as their data type, as well as any "data type" (a group of fields representing a common concept) in the Schema Registry. 

Notice that the "name" field has a data type of "Person Name", meaning it too describes a common concept and contains name-related sub-fields such as first name, last name, and full name.

Click on different fields within the canvas to see any additional fields they contribute to the schema structure.

## Add another mixin

You can now repeat the same steps to add another mixin. When you view the *Add Mixin* dialog this time, notice that the "Profile Person Details" mixin has been greyed out and the radio button next to it cannot be selected. This prevents you from accidentally duplicating mixins that you have already included in the current schema.

You can now add the "Profile Personal Details" mixin from the *Add Mixin* dialog.

![](../images/tutorials/create-schema/add_mixin_personal_details.png)

Once added, the canvas reappears. The "Profile Personal Details" is now listed under *Mixins* in the *Composition* section, and fields for home address, mobile phone, and more have been added under *Structure*.

Similar to the "name" field, the fields you just added represent multi-field concepts. For example, "homeAddress" has a data type of "Address" and "mobilePhone" has a data type of "Phone Number". You can click on each of these fields to expand them and see the additional fields included in the data type.

![](../images/tutorials/create-schema/personal_details_structure.png)

## Define a new mixin

The "Loyalty Members" schema is meant to capture data related to the members of a loyalty program, so it will require some specific loyalty-related fields. There are no standard mixins available that contain the necessary fields, therefore you will need to define a new mixin.

This time, when you open the *Add Mixin* dialog, select **Create New Mixin**. You will then be asked to provide a **Display Name** and **Description** for your mixin. 

![](../images/tutorials/create-schema/mixin_create_new.png)

As with class names, the mixin name should be short and simple, describing what the mixin will contribute to the schema. These too are unique, so you will not be able to reuse the name and must therefore ensure it is specific enough. 

For this tutorial, name the new mixin "Loyalty Details".

Click **Add Mixin** to return to the schema editor. "Loyalty Details" should now appear under *Mixins* on the left-side of the canvas, but there are no fields associated with it yet and therefore no new fields appear under *Structure*.

## Add fields to the mixin

Now that you have created the "Loyalty Details" mixin, it is time to define the fields that the mixin will contribute to the schema.

To begin, click on the mixin name in the *Mixins* section. Once you do this, *Mixin Properties* will appear on the right-hand side of the editor and an **Add Field** button will appear next to the name of the schema under *Structure*.

![](../images/tutorials/create-schema/loyalty_details_structure.png)

Click **Add Field** next to "Loyalty Members" to create a new node in the structure. This node (called "_tenantId" in this example) represents your IMS Organization's tenant ID, preceded by an underscore. The presence of the tenant ID indicates that the fields you are adding are contained in your organization's namespace. 

In other words, the fields you are adding are unique to your organization and are going to be saved in the Schema Registry in a specific area accessible only to your IMS Org. Fields you define must always be added to your namespace to prevent collisions with names from other standard classes, mixins, data types, and fields.

Inside that namespaced node is a "New Field". This is the beginning of the "Loyalty Details" mixin.

![](../images/tutorials/create-schema/new_field_loyalty.png)

Using *Field Properties* on the right-hand side of the editor, start by creating a "loyalty" field with type "Object" that will be used to hold your loyalty-related fields. When finished, click **Apply**.

![](../images/tutorials/create-schema/loyalty_object.png)

The changes are applied and the newly created "loyalty" object appears. Click **Add Field** next to the object to add additional loyalty-related fields. A "New Field" appears and the *Field Properties* section is visible on the right-hand side of the canvas.

![](../images/tutorials/create-schema/new_field_in_loyalty_object.png)

Each field requires the following information:

* **Field Name:** The name of the field, written in camel case. Example: loyaltyLevel
* **Display Name:** The name of the field, written in title case. Example: Loyalty Level
* **Type:** The data type of the field. This includes basic scalar types and any data types defined in the Schema Registry. Examples: string, integer, boolean, Person, Address, Phone Number, etc.
* **Description:** An optional description of the field should be included, written in sentence case. (200 character max.)

The first field for the Loyalty object will be a string called "loyaltyId". When setting the new field's type to "String", the *Field Properties* window becomes populated with several options for applying constraints, including **Default Value**, **Format**, and **Maximum Length**.

![](../images/tutorials/create-schema/string_constraints.png)

Different constraint options are available depending on the data type selected. Since "loyaltyId" will be an email address, select "email" from the **Format** dropdown menu. Select **Apply** to apply your changes.

![](../images/tutorials/create-schema/loyaltyId_field.png)

## Add more fields to mixin

Now that you have added the "loyaltyId" field, you can add additional fields to capture loyalty-related information such as:

* Points (Integer)
* Member Since (Date)

Each field is added by clicking **Add Field** on the loyalty object and filling in the required information.

When complete, the Loyalty object will contain fields for: Loyalty ID, Points, and Member Since.

![](../images/tutorials/create-schema/loyalty_object_fields.png)

## Add 'enum' field to mixin

When defining fields in the Schema Editor, there are some additional options that you can apply to basic field types in order to provide further constraints on the data the field can contain. 

An example of this would be a "Loyalty Level" field, where the value can only be one of four possible options. To add this field to the schema, click **Add Field** beside the "loyalty" object and fill in the required fields under *Field Properties*. 

For **Type**, select "String" and you will see additional checkboxes appear for **Array**, **Enum**, and **Identity**. 

Select the **Enum** checkbox to open the *Enum Values* section below. Here you can input the **Value** (in camelCase) and **Label** (an optional, reader-friendly name in Title Case) for each acceptable loyalty level.

When you have completed all field properties, click **Apply** and the "loyaltyLevel" field will be added to the "loyalty" object.

![](../images/tutorials/create-schema/loyalty_level_enum.png)

More information about available additional constraints:

* **Required:** Indicates that the field is required for data ingestion. Any data uploaded to a dataset based on this schema that does not contain this field will fail upon ingestion.
* **Array:** Indicates that the field contains an array of values, each with the data type specified. For example, selecting a data type of "String" and checking the "Array" checkbox means that the field will contain an array of strings.
* **Enum:** Indicates that this field must contain one of the values from an enumerated list of possible values.  
* **Identity:** Indicates that this field is an identity field. More information regarding identity fields is provided [later in this tutorial](#identity-field).

## Convert a multi-field object into a data type

After adding several loyalty-specific fields, the "loyalty" object now contains a common data structure that could be useful in other schemas. 

When you feel that a multi-field structure might be reusable, and you would like to have the flexibility to use that same data structure elsewhere, the Schema Editor makes it possible to convert that structure into a data type. 

Data types allow for the consistent use of multi-field structures and provide more flexibility than a mixin because they can be used anywhere within a schema. This is done by setting the **Type** of a field in a mixin to that of any data type defined in the registry.

To convert the "loyalty" object to a data type, click on the "loyalty" field under *Structure* and select **Convert to New Data Type** on the right-hand-side of the editor under *Field Properties*. A small green pop-up appears confirming "Object Converted to Data Type". 

Now, when you look under *Structure*, you can see that the "loyalty" field has a data type of "Loyalty" and the fields have small lock icons beside them indicating they are no longer individual fields, but rather part of a multi-field structure.

In a future schema, you could now assign a field the **Type** of "Loyalty" and it would automatically include Loyalty Level, Points, Member Since, and Loyalty ID fields.

![](../images/tutorials/create-schema/loyalty_data_type.png)

## Set a schema field as an identity field {#identity-field}

Schemas are used for ingesting data into Experience Platform, and that data is ultimately used to identify individuals and stitch together information coming from multiple sources. To help with this process, key fields can be marked as "Identity" fields. 

Experience Platform makes it easy to denote an identity field through the use of an **Identity** checkbox in the Schema Editor.

For example, there may be thousands of members of the loyalty program belonging to the same "level", but each member of the loyalty program has a unique "loyaltyId" (which in this instance is the individual member's email address). The fact that "loyaltyId" is a unique identifier for each member makes it a good candidate for an identity field, whereas "level" is not.

In the *Structure* section of the editor, click on the "loyaltyId" field that you created and you will see the **Identity** checkbox appear under *Field Properties*. Check the box and you will have the option to set this as the **Primary Identity**. Check that box as well. 

Next, you must provide an **Identity Namepsace**. There are several pre-defined namespaces, but since the "loyaltyId" is the member's email address, select "Email" from the dropdown list. You can now click **Apply** to confirm the updates to the "loyaltyId" field.

Now all data ingested into the "loyaltyId" field will be used to help identify that individual and stitch together a single view of that customer.

![](../images/tutorials/create-schema/loyaltyId_primary_identity.png)

>[!NOTE] Once a schema field has been set as the primary identity, you will receive an error message if you later attempt to set another field in the schema as the primary. Each schema may contain only one primary identity field.

To learn more about working with identities, please review the [Identity Service](../../technical_overview/identity_services_architectural_overview/identity_services_architectural_overview.md) documentation.

<!-- ## Relationship

Schemas define a static view of a concept, but do not provide specific details on how data based on these schemas (datasets, etc) may relate to one another. Adobe Experience Platform allows you to describe these relationships through the **Relationship** checkbox in the schema editor. 

In order to define a relationship, click on the field and check the **Relationship** checkbox on the right-side of the canvas. 

![](../images/tutorials/create-schema/relationship.png)

More information about relationships and other schema metadata can be found in the [Schema Registry API Developer Guide](../schema_registry_developer_guide.md). -->

## Enable the schema for use in Real-time Customer Profile

The Schema Editor provides the ability to enable a schema for use with [Real-time Customer Profile](../../profile/home.md). Profile provides a holistic view of each individual customer by building a robust, 360&deg; profile of customer attributes as well as a timestamped account of every interaction that customer has had across any system integrated with Experience Platform. 

In order for a schema to be enabled for use with Real-time Customer Profile, it must have a primary identity defined. You will receive a "Missing Primary Identity" error message if you attempt to enable a schema without first defining a primary identity.

![](../images/tutorials/create-schema/missing_primary_identity.png)

To enable the "Loyalty Members" schema for use in Profile, begin by clicking on "Loyalty Members" in the *Structure* section of the editor. 

On the right-hand side of the editor, under *Schema Properties*, information is shown about the schema including its display name, description, and type. In addition to this information, there is a toggle button entitled **Profile**.

![](../images/tutorials/create-schema/unified_profile_toggle.png)

Click **Profile** and a pop-up appears, asking you to confirm that you wish to enable the schema for Profile. 

![](../images/tutorials/create-schema/enable_unified_profile.png)

>[!NOTE] Once a schema has been enabled for Real-time Customer Profile and saved, it cannot be disabled.

## Next steps

Now that you have finished composing a "Loyalty Members" schema, you can see the complete schema in the *Structure* section of the editor. Click **Save** and the schema will be saved to the Schema Library, making it accessible by the Schema Registry.

Your new schema is now able to be used to ingest data into Platform. Remember that once the schema has been used to ingest data, only additive changes may be made. See the [basics of schema composition](../schema/composition.md) for more information on schema versioning.

The "Loyalty Members" schema is also available to be viewed and managed using the Schema Registry API. To begin working with the API, start by reading the [Schema Registry API developer guide](../api/getting-started.md).

## Appendix

The following information is supplemental to the Schema Editor Tutorial.

### Create a new class {#create-new-class}

Experience Platform provides the flexibility to define a schema based on a class that is unique to your organization. 

Open the *Assign Class* dialog by clicking **Assign** in the *Class* section of the Schema Editor. Within the dialog, select **Create New Class**.

You can then give your new class a **Display Name** (a short, descriptive, unique, and user-friendly name for the class), a **Description**, and a **Behavior** ("Record" or "Time Series") for the data the schema will define. 

![New Class Details](../images/tutorials/create-schema/create_new_class.png)

>[!NOTE] When building a schema that implements a class defined by your organization, remember that mixins are available for use only with compatible classes. Since the class you defined is new, there are no compatible mixins listed in the *Add Mixin* dialog. Instead, you will need to select **Create New Mixin** and define a mixin for use with that class. The next time you compose a schema that implements the new class, the mixin that you defined will be listed and available for use.

### Change the class of a schema

At any time during the initial schema composition process, before the schema is saved, you can change the class upon which the schema is based. 

> **Warning:** Please exercise caution before changing the class. Mixins are only compatible with certain classes, therefore changing the class resets the canvas and removes any fields you have added to that point. 

To change the class, click **Assign** next to *Class* in the *Composition* section of the editor. 

When the *Assign Class* dialog opens, you can choose a new class from the available list. Click **Assign Class** and a new dialog opens asking you to confirm that you wish to assign a new class. 

![Change Class](../images/tutorials/create-schema/assign_new_class_warning.png)

If you confirm the class change, the canvas will be reset and all composition progress will be lost.