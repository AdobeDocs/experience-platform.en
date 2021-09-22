---
title: Define a Relationship Between Two Schemas in Real-time Customer Data Platform B2B Edition
description: Learn how to define a many-to-one relationship between two schemas in Real-time Customer Data Platform B2B Edition.
---
# Define a relationship between two schemas in Real-time Customer Data Platform B2B Edition

>[!NOTE]
>
>If you are not using Real-time Customer Data Platform B2B Edition, see the guide on [creating a non-B2B relationship](./relationship-ui.md) instead.

Real-time Customer Data Platform B2B Edition provides several Experience Data Model (XDM) classes that capture fundamental B2B data entities, including accounts, opportunities, campaigns, and more. By building schemas based on these classes and enabling them for use in [Real-time Customer Profile](../../profile/home.md), you can merge data from disparate sources into a unified representation called a union schema.

However, union schemas can only contain fields captured by schemas that share the same class. This is where schema relationships come in. By implementing relationships in your B2B schemas, you can describe how these business entities relate to each other and can include attributes from multiple classes in downstream segmentation use cases.

The following diagram provides an example of how the different B2B classes can relate to each other in a basic implementation:

![B2B class relationships](../images/tutorials/relationship-b2b/classes.png)

This tutorial covers the steps to define a many-to-one relationship between two schemas in Real-time CDP B2B Edition.

>[!NOTE]
>
>This tutorial focuses on how to manually establish relationships between B2B schemas in the Platform UI. If you are bringing in data from a B2B source connection, you can use an auto-generation utility to create the required schemas, identities, and relationships instead. See the Marketo Engage source connector documentation for more information on [using the auto-generation utility](../../sources/connectors/adobe-applications/marketo/marketo-namespaces.md#auto-generation).

## Getting started

This tutorial requires a working understanding of [!DNL XDM System] and the Schema Editor in the [!DNL Experience Platform] UI. Before beginning this tutorial, please review the following documentation:

* [XDM System in Experience Platform](../home.md): An overview of XDM and its implementation in [!DNL Experience Platform].
* [Basics of schema composition](../schema/composition.md): An introduction of the building blocks of XDM schemas.
* [Create a schema using the [!DNL Schema Editor]](create-schema-ui.md): A tutorial covering the basics of how to build and edit schemas in the UI.

## Define a source and destination schema

It is expected that you have already created the two schemas that will be defined in the relationship. For demonstration purposes, this tutorial creates a relationship between business opportunities (defined in an "[!DNL Opportunities]" schema) and their associated business account (defined in an "[!DNL Accounts]" schema).

Schema relationships are represented by a dedicated field within a **source schema** that references the primary identity field of a **destination schema**. In the steps that follow, "[!DNL Opportunities]" serves as the source schema, while "[!DNL Accounts]" acts as the destination schema.

### Understanding identities in B2B relationships

In order to establish a relationship, both schemas must have defined primary identities and be enabled for [!DNL Real-time Customer Profile]. When setting a primary identity for a B2B entity, keep in mind that string-based entity IDs may overlap if you are collecting them across different systems or locations, which could lead to data conflicts in Platform.

To account for this, all standard B2B classes contain "key" fields that conform to the [!UICONTROL B2B Source] data type. This data type provides fields for a string identifier for the B2B entity along with other contextual information about the identifier's source. One of these fields, `sourceKey`, concatenates the values of the other fields in the data type to produce a wholly unique identifier for the entity. This field should always be used as the primary identity for B2B entity schemas.

![sourceKey field](../images/tutorials/relationship-b2b/sourcekey.png)

>[!NOTE]
>
>When [setting an XDM field as an identity](../ui/fields/identity.md), you must provide an identity namespace to define the identity under. This can be a standard namespace provided by Adobe, or a custom namespace defined by your organization. In practice, the namespace is simply a contextual string and can be set to any value you like, provided that it is meaningful to your organization for categorizing the identity type. See the overview on [identity namespaces](../../identity-service/namespaces.md) for more information.

For reference purposes, the following sections describe the structure of each schema used in this tutorial before a relationship has been defined. Take note of where the primary identities have been defined in the schema structure and the custom namespaces they use.

### [!DNL Opportunities] schema

The source schema "[!DNL Opportunities]" is based on the [!UICONTROL XDM Business Opportunity] class. One of the fields provided by the class, `opportunityKey`, serves as the identifier for the schema. Specifically, the `sourceKey` field under the `opportunityKey` object is set as the schema's primary identity under a custom namespace called [!DNL B2B Opportunity]. 
As seen under **[!UICONTROL Schema Properties]**, this schema has been enabled for use in [!DNL Real-time Customer Profile].

![Opportunities Schema](../images/tutorials/relationship-b2b/opportunities.png)

### [!DNL Accounts] schema

The destination schema "[!DNL Accounts]" is based on the [!UICONTROL XDM Account] class. The root-level `accountKey` field contains the `sourceKey` that acts as its primary identity under a custom namespace called [!DNL B2B Account]. This schema has also been enabled for use in Profile.

![Accounts Schema](../images/tutorials/relationship-b2b/accounts.png)

## Define a relationship field for the source schema {#relationship-field}

In order to define a relationship between two schemas, the source schema must have a dedicated field that references the primary identity of the destination schema. Standard B2B classes include dedicated source key fields for commonly related business entities. For example, the [!UICONTROL XDM Business Opportunity] class contains source key fields for a related account (`accountKey`) and a related campaign (`campaignKey`). However, you can also add other [!UICONTROL B2B Source] fields to the schema by using custom field groups if you require more than the default components.

>[!NOTE]
>
>Currently, only many-to-one relationships can be defined from a source schema to a destination schema. For one-to-many relationships, you must define the relationship field in the schema that represents the "many".

To set a relationship field, select the arrow icon (![Arrow Icon](../images/tutorials/relationship-b2b/arrow.png)) next to the field in question within the canvas. In the case of the [!DNL Opportunities] schema, this is the `accountKey.sourceKey` field since the goal is to establish a many-to-one relationship with an account.

![Relationship Button](../images/tutorials/relationship-b2b/relationship-button.png)

A dialog appears that allows you to specify the details about the relationship. The relationship type is automatically set to **[!UICONTROL Many-to-one]**.

![Relationship Dialog](../images/tutorials/relationship-b2b/relationship-dialog.png)

Under **[!UICONTROL Reference Schema]**, use the search bar to find the name of the destination schema. When you highlight the destination schema's name, the **[!UICONTROL Reference Identity Namespace]** field automatically updates to the namespace of the schema's primary identity.

![Reference Schema](../images/tutorials/relationship-b2b/reference-schema.png)

Under **[!UICONTROL Relationship Name From Current Schema]** and **[!UICONTROL Relationship Name From Reference Schema]**, provide friendly names for the relationship in the context of the source and destination schemas, respectively. When finished, select **[!UICONTROL Save]** to apply the changes and save the schema.

![Relationship Name](../images/tutorials/relationship-b2b/relationship-name.png)

The canvas reappears, with the relationship field now marked with the friendly name you provided earlier. The relationship name is also listed under the left rail for easy reference.

![Relationship Applied](../images/tutorials/relationship-b2b/relationship-applied.png)

If you view the structure of the destination schema, the relationship marker appears next to the schema's primary identity field and in the left rail.

![Destination Schema Relationship Marker](../images/tutorials/relationship-b2b/destination-relationship.png)

## Next steps

By following this tutorial, you have successfully created a many-to-one relationship between two schemas using the [!DNL Schema Editor]. Once data has been ingested using datasets based on these schemas and that data has been activated in the Profile data store, you can use attributes from both schemas for multi-class segmentation use cases. See the documentation on Real-time CDP B2B Edition for more information.
