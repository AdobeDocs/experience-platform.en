---
keywords: Experience Platform;home;popular topics;ui;UI;XDM;XDM system;;experience data model;Experience data model;Experience Data Model;data model;Data Model;schema editor;Schema Editor;schema;Schema;schemas;Schemas;create;relationship;Relationship;reference;Reference;
solution: Experience Platform
title: Define a relationship between two schemas using the Schema Schema Editor
description: This document provides a tutorial for defining a relationship between two schemas using the Schema Editor in the Experience Platform user interface.
topic: tutorials
---

# Define a relationship between two schemas using the [!DNL Schema Editor]

The ability to understand the relationships between your customers and their interactions with your brand across various channels is an important part of Adobe Experience Platform. Defining these relationships within the structure of your [!DNL Experience Data Model] (XDM) schemas allows you to gain complex insights into your customer data.

While schema relationships can be inferred through the use of the union schema and [!DNL Real-time Customer Profile], this only applies to schemas that share the same class. To establish a relationship between two schemas belonging to different classes, a dedicated **relationship field** must be added to a source schema, which references the identity of a destination schema.

This document provides a tutorial for defining a relationship between two schemas using the Schema Editor in the [!DNL Experience Platform] user interface. For steps on defining schema relationships using the API, see the tutorial on [defining a relationship using the Schema Registry API](relationship-api.md).

## Getting started

This tutorial requires a working understanding of [!DNL XDM System] and the Schema Editor in the [!DNL Experience Platform] UI. Before beginning this tutorial, please review the following documentation:

* [XDM System in Experience Platform](../home.md): An overview of XDM and its implementation in [!DNL Experience Platform].
* [Basics of schema composition](../schema/composition.md): An introduction of the building blocks of XDM schemas.
* [Create a schema using the Schema Editor](create-schema-ui.md): A tutorial covering the basics of working with the [!DNL Schema Editor].

## Define a source and destination schema

It is expected that you have already created the two schemas that will be defined in the relationship. For demonstration purposes, this tutorial creates a relationship between members of an organization's loyalty program (defined in a "[!UICONTROL Loyalty Members]" schema) and their favorite hotels (defined in a "[!DNL Hotels]" schema).

>[!IMPORTANT]
>
>In order to establish a relationship, both schemas must have defined primary identities and be enabled for [!DNL Real-time Customer Profile]. See the section on [enabling a schema for use in Profile](./create-schema-ui.md#profile) in the schema creation tutorial if you require guidance on how to configure your schemas accordingly.

Schema relationships are represented by a dedicated field within a **source schema** that refers to another field within a **destination schema**. In the steps that follow, "[!UICONTROL Loyalty Members]" will be the source schema, while "[!DNL Hotels]" will act as the destination schema.

For reference purposes, the following sections describe the structure of each schema used in this tutorial before a relationship has been defined.

### [!UICONTROL Loyalty Members] schema

The source schema "[!UICONTROL Loyalty Members]" is based on the XDM [!DNL Individual Profile] class, and is the schema that was constructed in the tutorial for [creating a schema in the UI](create-schema-ui.md). It includes a "[!UICONTROL loyalty]" object under its "\_tenantId" namespace, which includes several loyalty-specific fields. One of these fields, "loyaltyId", serves as the primary identity for the schema under the "[!UICONTROL Email]" namespace. As seen under **[!UICONTROL Schema Properties]**, this schema has been enabled for use in [!DNL Real-time Customer Profile].

![](../images/tutorials/relationship/loyalty-members.png)

### Hotels schema

The destination schema "[!UICONTROL Hotels]" is based on a custom "[!UICONTROL Hotels]" class, and contains fields that describe a hotel. The "[!DNL hotelId]" field serves as the primary identity for the schema under a custom "[!DNL hotelId]" namespace. Like "[!UICONTROL Loyalty Members]", this schema has also been enabled for [!DNL Real-time Customer Profile].

![](../images/tutorials/relationship/hotels.png)

## Create a relationship mixin

>[!NOTE]
>
>This step is only required if your source schema does not have a dedicated string-type field to be used as a reference to another schema. If this field is already defined in your source schema, skip to the next step of [defining a relationship field](#relationship-field).

In order to define a relationship between two schemas, the source schema must have a dedicated field to be used as a reference to the destination schema. You can add this field to the source schema by creating a new mixin.

Start by clicking **[!UICONTROL Add]** in the **[!UICONTROL Mixins]** section.

![](../images/tutorials/relationship/loyalty-add-mixin.png)

The **[!UICONTROL Add Mixin]** dialog appears. From here, click **[!UICONTROL Create New Mixin]**. In the text fields that appear, enter a display name and description for the new mixin. Click **[!UICONTROL Add Mixin]** when finished.

<img src="../images/tutorials/relationship/loyalty-create-new-mixin.png" width=750><br>

The canvas reappears with "[!UICONTROL Loyalty Relationship]" appearing in the **[!UICONTROL Mixins]** section. Click the mixin name, then click **[!UICONTROL Add Field]** next to the root-level "[!UICONTROL Loyalty Members]" field.

![](../images/tutorials/relationship/loyalty-add-field.png)

A new field appears in the canvas under the "\_tenantId" namespace. Under **[!UICONTROL Field Properties]**, provide a field name and display name for the field, and set its type to "[!UICONTROL String]".

![](../images/tutorials/relationship/relationship-field-details.png)

When finished, click **[!UICONTROL Apply]**.

![](../images/tutorials/relationship/relationship-field-apply.png)

The updated "[!UICONTROL favoriteHotel]" field appears in the canvas. Click **[!UICONTROL Save]** to finalize your changes to the schema.

![](../images/tutorials/relationship/relationship-field-save.png)

## Define a relationship field for the source schema {#relationship-field}

Once your source schema has a dedicated reference field defined, you can designate it as a relationship field.

Select the reference field in the canvas, then scroll down under **[!UICONTROL Field Properties]** until the **[!UICONTROL Relationship]** checkbox appears. Select the checkbox to reveal the required parameters for configuring a relationship field.

![](../images/tutorials/relationship/relationship-checkbox.png)

Select the dropdown for **[!UICONTROL Reference Schema]** and select the destination schema for the relationship ("[!UICONTROL Hotels]" in this example). If the destination schema is enabled for Profile, the **[!UICONTROL Reference Identity Namespace]** field is automatically set to the namespace of the destination schema's primary identity. If the schema does not have a primary identity defined, you must manually select the namespace that you plan to use from the dropdown menu. Click **[!UICONTROL Apply]** when finished.

![](../images/tutorials/relationship/reference-schema-id-namespace.png)

The field appears as a relationship in the canvas, displaying the name and reference identity namespace of the destination schema. Click **[!UICONTROL Save]** to save your changes and complete the workflow.

![](../images/tutorials/relationship/relationship-save.png)

## Next steps

By following this tutorial, you have successfully created a one-to-one relationship between two schemas using the [!DNL Schema Editor]. For steps on how to define relationships using the API, see the tutorial on [defining a relationship using the Schema Registry API](relationship-api.md).