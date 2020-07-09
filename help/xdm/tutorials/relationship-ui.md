---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Define a relationship between two schemas using the Schema Schema Editor
topic: tutorials
---

# Define a relationship between two schemas using the Schema Editor

The ability to understand the relationships between your customers and their interactions with your brand across various channels is an important part of Adobe Experience Platform. Defining these relationships within the structure of your Experience Data Model (XDM) schemas allows you to gain complex insights into your customer data.

This document provides a tutorial for defining a one-to-one relationship between two schemas defined by your organization using the Schema Editor in the Experience Platform user interface. For steps on defining schema relationships using the API, see the tutorial on [defining a relationship using the Schema Registry API](relationship-api.md).

## Getting started

This tutorial requires a working understanding of XDM System and the Schema Editor in the Experience Platform UI. Before beginning this tutorial, please review the following documentation:

* [XDM System in Experience Platform](../home.md): An overview of XDM and its implementation in Experience Platform.
* [Basics of schema composition](../schema/composition.md): An introduction of the building blocks of XDM schemas.
* [Create a schema using the Schema Editor](create-schema-ui.md): A tutorial covering the basics of working with the Schema Editor.

## Define a source and destination schema

It is expected that you have already created the two schemas that will be defined in the relationship. For demonstration purposes, this tutorial creates a relationship between members of an organization's loyalty program (defined in a "Loyalty Members" schema) and their favorite hotels (defined in a "Hotels" schema).

Schema relationships are represented by a **source schema** having a field that refers to another field within a **destination schema**. In the steps that follow, "Loyalty Members" will be the source schema, while "Hotels" will act as the destination schema.

For reference purposes, the following sections describe the structure of each schema used in this tutorial before a relationship has been defined.

### Loyalty Members schema

The source schema "Loyalty Members" is the schema that was constructed in the tutorial for [creating a schema in the UI](create-schema-ui.md). It includes a "loyalty" object under its "\_tenantId" namespace, which includes several loyalty-specific fields. One of these fields, "loyaltyId", serves as the primary identity for the schema under the "Email" namespace. As seen under _Schema Properties_, this schema has been enabled for use in [Real-time Customer Profile](../../profile/home.md).

![](../images/tutorials/relationship/loyalty-members.png)

### Hotels schema

The destination schema "Hotels" contains fields that describe a hotel, include its address, brand, number of rooms, and star rating. The "hotelId" field serves as the primary identity for the schema under the "ECID" namespace. Unlike "Loyalty Members", this schema has not been enabled for Real-time Customer Profile.

![](../images/tutorials/relationship/hotels.png)

## Create a relationship mixin

>[!NOTE]
>
>This step is only required if your source schema does not have a dedicated string-type field to be used as a reference to another schema. If this field is already defined in your source schema, skip to the next step of [defining a relationship field](#relationship-field).

In order to define a relationship between two schemas, the source schema must have a dedicated field to be used as a reference to the destination schema. You can add this field to the source schema by creating a new mixin.

Start by clicking **Add** in the _Mixins_ section.

![](../images/tutorials/relationship/loyalty-add-mixin.png)

The _Add Mixin_ dialog appears. From here, click **Create New Mixin**. In the text fields that appear, enter a display name and description for the new mixin. Click **Add Mixin** when finished.

<img src="../images/tutorials/relationship/loyalty-create-new-mixin.png" width=750><br>

The canvas reappears with "Loyalty Relationship" appearing in the _Mixins_ section. Click the mixin name, then click **Add Field** next to the root-level "Loyalty Members" field.

![](../images/tutorials/relationship/loyalty-add-field.png)

A new field appears in the canvas under the "\_tenantId" namespace. Under _Field Properties_, provide a field name and display name for the field, and set its type to "String".

![](../images/tutorials/relationship/relationship-field-details.png)

When finished, click **Apply**.

![](../images/tutorials/relationship/relationship-field-apply.png)

The updated "loyaltyRelationship" field appears in the canvas. Click **Save** to finalize your changes to the schema.

![](../images/tutorials/relationship/relationship-field-save.png)

## Define a relationship field for the source schema {#relationship-field}

Once your source schema has a dedicated reference field defined, you can designate it as a relationship field.

Click the reference field in the canvas, then scroll down under _Field Properties_ until the **Relationship** checkbox appears. Select the checkbox to reveal the required parameters for configuring a relationship field.

![](../images/tutorials/relationship/relationship-checkbox.png)

Click the dropdown for **Reference Schema** and select the destination schema for the relationship ("Hotels" in this example). If the destination schema is union-enabled, the **Reference Identity Namespace** field is automatically set to the namespace of the destination schema's primary identity. If the schema does not have a primary identity defined, you must manually select the namespace that you plan to use from the dropdown menu. Click **Apply** when finished.

![](../images/tutorials/relationship/reference-schema-id-namespace.png)

The field appears as a relationship in the canvas, displaying the name and reference identity namespace of the destination schema. Click **Save** to save your changes and complete the workflow.

![](../images/tutorials/relationship/relationship-save.png)

## Next steps

By following this tutorial, you have successfully created a one-to-one relationship between two schemas using the Schema Editor. For steps on how to define relationships using the API, see the tutorial on [defining a relationship using the Schema Registry API](relationship-api.md).