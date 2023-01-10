---
keywords: Experience Platform;profile;real-time customer profile;unified profile;Unified Profile;unified;Profile;rtcp;enable profile;Enable profile;Union schema;UNION PROFILE;union profile
title: Union Schema UI Guide
type: Documentation
description: In the Adobe Experience Platform user interface (UI) you can easily view any union schema within your organization and preview the fields, identities, relationships, and contributing schemas for a specific class. This guide provides detailed information on how to view and explore union schemas using the Platform UI.
exl-id: 52af0d77-e37d-4ed8-9dee-71a50b337b4e
---
# [!UICONTROL Union schema] UI guide

In the Adobe Experience Platform user interface (UI) you can easily view any union schema within your organization and preview the fields, identities, relationships, and contributing schemas for a specific class. This guide provides detailed information on how to view and explore union schemas using the Platform UI.

## Getting started

This UI guide requires an understanding of the various [!DNL Experience Platform] services involved with managing Real-Time Customer Profile data. Before reading this guide, or working in the UI, please review the documentation for the following services:

* [[!DNL Real-Time Customer Profile]](../home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
* [[!DNL Identity Service]](../../identity-service/home.md): Enables [!DNL Real-Time Customer Profile] by bridging identities from disparate data sources as they are ingested into [!DNL Platform].
* [[!DNL Experience Data Model (XDM)]](../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes customer experience data.

## Understanding union schemas

Real-Time Customer Profile enables you to create robust, centralized profiles containing customer attributes and timestamped events each customer interaction across systems integrated with Adobe Experience Platform. The format and structure of this data is provided by Experience Data Model (XDM) schemas, with each schema being based upon an XDM class and containing fields that are compatible with that class.

Schemas can be created for multiple use cases, referencing the same class but containing fields specific to their use. When a schema is enabled for Profile, it becomes part of a union schema. In other words, union schemas are composed of multiple schemas that share the same class and have been enabled for Profile. The union schema enables you to see an amalgamation of all of the fields contained within schemas sharing the same class. Real-Time Customer Profile uses the union schema to create a holistic view of each individual customer.

Working with union schemas requires a deep understanding of XDM schemas. For more information, please begin by reading the [basics of schema composition](../../xdm/schema/composition.md).

## View union schemas

To navigate to union schemas within the Platform UI, select **[!UICONTROL Profiles]** from the left navigation, then select the **[!UICONTROL Union Schema]** tab. The [!UICONTROL Union Schema] tab opens to display the union schema for the currently selected class. 

![The Union Schema page is displayed, with the Profile and Union Schema tab highlighted.](../images/union-schema/landing.png)

## Select a class

To display the union schema for a specific XDM class, select the class from the **[!UICONTROL Class]** dropdown. Due to the fact that not all classes have union schemas, only classes with union schemas (meaning classes with schemas that have been enabled for Profile) are available in the dropdown. 

After a class has been selected, the schema that is displayed updates to reflect the union schema for the selected class. For example, you can select **[!UICONTROL XDM Individual Profile]** to view the union schema for that class.

![A dropdown containing the union schema's classes are highlighted.](../images/union-schema/class.png)

## Explore union schemas

You can explore the union schema by scrolling up and down to view the complete schema structure and by selecting a right angle bracket (`>`) to expand nested fields.

![A set of nested fields within the union schema is expanded.](../images/union-schema/explore.png)

Select any field to view its details, including display name, data type, description, path, created date, and last modified date. You can also view a list of contributing schemas containing the field you selected.

![A union schema field is highlighted. Details about the highlighted field are displayed on the right sidebar.](../images/union-schema/explore-field.png)

Selecting the name of a contributing schema reveals the names of datasets related to that schema which are ingesting data into the selected field. Each dataset name appears as a link. Selecting a dataset name opens the activity tab for that dataset in a new window.

For more information on datasets, including viewing dataset activity and previewing dataset data in the UI, please visit the [datasets UI guide](../../catalog/datasets/user-guide.md).

![The list of datasets related to the schema are highlighted.](../images/union-schema/datasets.png)

## View contributing schemas

You can also view which specific schemas are contributing to the union schema by selecting **[!UICONTROL All contributing schemas]** to expand the list of schemas. Depending on the class you have selected and the number of schemas that your organization has created within Platform, this could be a short list containing a single schema or a long list containing many schemas.

![The list of schemas that contribute to the union schema is highlighted.](../images/union-schema/contributing-schemas.png)

Selecting the name of a specific schema highlights the fields within the union schema that are part of the schema you selected. After a schema is selected, the union schema appears greyed out with black bars indicating the fields that are a part of the contributing schema.

![The selected contributing schema is highlighted. The fields that are part of the contributing schema remain in black, while the fields that are not part of the contributing schema are greyed out.](../images/union-schema/select-schema.png)

## View identities

Through the UI you can view a list of identities that are included in the union schema by selecting **[!UICONTROL Identities]** to expand the list. 

![The identities that belong to the union schema are highlighted.](../images/union-schema/identities.png)

Selecting an individual identity from the list causes the displayed schema to automatically update as needed to display the identity field. This could include expanding multiple fields if the identity field is nested.

The identity field is highlighted within the union schema and the details of the identity are displayed on the right-hand side of the screen. The details include a list of contributing schemas containing the identity field and you can drill down to find links to the datasets related to that schema which are ingesting data into the selected identity field.  

![The selected identity is highlighted. Details about the selected identity are displayed on the right sidebar.](../images/union-schema/select-identity.png)

## View relationships

The union schema UI also enables you to see relationships that have been defined for schemas based on the selected schema class. Defining a relationship is a way of connecting two schemas belonging to different classes in order to gain more complex insights into customer data.

If relationships have been established for the selected class, selecting **[!UICONTROL Relationships]** displays a list of fields used to create relationships. Not all schemas use or need relationships defined, so it is common for the relationships section to not contain any fields.

To learn more about schema relationships, including how to define them using the UI, visit [this document on schema relationships](../../xdm/tutorials/relationship-ui.md).

![The relationships that belong to the union schema are highlighted.](../images/union-schema/relationships.png)

Selecting a relationship field from the list causes the displayed schema to update as needed to display the highlighted relationship field. This could include expanding multiple fields if the relationship field is nested.

![The selected relationship is highlighted. The corresponding field for the relationship is also highlighted.](../images/union-schema/select-relationship.png)

## Next steps

By reading this guide, you now know how to view and navigate union schemas using the [!DNL Experience Platform] UI. For more information on schemas, including how they are used throughout Platform, please begin by reading the [XDM System overview](../../xdm/home.md).
