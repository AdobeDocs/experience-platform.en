---
title: Restrict Access To Fields Of An Ad Hoc Schema
description: An overview of how to restrict access to data fields in ad hoc schemas generated through Adobe Experience Platform Query Service.
---
# Restrict access to ad hoc schema data fields 

Any data that is brought into Adobe Experience Platform is encapsulated by Experience Data Model (XDM) schemas and may be subject to usage restrictions defined by your organization or by legal regulations. 

Executing a CTAS query through Query Service automatically generates an ad hoc schema. Since ad hoc schemas do not use standard classes and field groups, they do not inherit labels through propagation. As a result, it is often necessary to restrict the usage of certain fields, or datasets, of ad hoc schemas through the application of data usage labels.

Labels can be applied at any time, providing flexibility in how you choose to govern data. Although, it is best practice to label data as soon as it is ingested into Platform, or as soon as the data becomes available for use in Platform.

Schema based labelling is an important component of Attribute Based Access Control (ABAC) to better manage the access given to users or groups of users. Adobe Experience Platform enables you to restrict access to any field of an ad hoc schema by creating and applying labels through the UI.

This document provides an overview of how to manage access to sensative data by applying labels to data fields of ad hoc schemas generated through Query Service.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Experience Data Model (XDM) System](https://experienceleague.adobe.com/docs/experience-platform/xdm/home.html): The standardized framework by which Experience Platform organizes customer experience data.
  * [[!DNL Schema Editor]](https://experienceleague.adobe.com/docs/experience-platform/xdm/ui/overview.html): Learn how to create and manage schemas and other resources in the Platform UI.
* [[!DNL Data Governance]](../../data-governance/home.md): Learn how [!DNL Data Governance] allows you to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data use. 
* [Attribute-based access control](../../access-control/abac/overview.md): A capability of Adobe Experience Platform that enables administrators to control access to specific objects and/or capabilities based on attributes.

## Create an ad hoc schema

Once your query has executed and results have been generated, an ad hoc schema is automatically generated and added to the schema inventory. 

To add a data label, navigate to [!UICONNTROL Schemas] dashboard browse tab by selecting [!UICONNTROL Schemas] in the left rail of the Platform UI. The schema inventory is displayed.

>[!NOTE]
>
>Ad hoc schemas are not displayed by default in the schema inventory.

## Discover ad hoc schemas in schema inventory

To enable the display of ad hoc schemas in the Platform UI, select the filter icon () to the left of the search field. A left rail appears with filter options. Enable "Show adhoc schemas" by selecting the toggle.

![The Schema dashboard filter options left rail with 'Show adhoc schema' toggle enabled.]()

Select the name of the recently created ad hoc schema from the available list. A visualization of the ad hoc schema structure appears.

![The example ad hoc schema structure diagram.]()

## Edit labels

To edit data labels for your ad hoc schema, select the [!UICONNTROL Labels] tab. This labels workspace allows you to apply and edit labels to your ad hoc schema fields and control access permissions through the UI. All fields within the ad hoc schema are represented here.

To edit the labels for the entire schema, select the pencil icon () to the side of the schema’s name under the [!UICONNTROL Labels] tab.

![PLACEHOLDER IMAGE - The labels view in the schemas workspace with the pencil icon highlighted.](../images/data-governance/edit-entire-schema-labels.png)

## Edit labels for the schema or field

To apply a label to an existing filed, select one or more fields from the list followed by [!UICONNTROL Edit governance labels] in the right sidebar.

![The labels view in the schemas workspace with the 'Edit governance labels' option highlighted in the rights hand sidebar.]() 

The [!UICONTROL Edit labels] popover appears.

Select "Custom labels" from the type column. If you have admin credentials, select "Create label" from the top right of the popover to create a new label for your data governance or business needs. If you do not have admin privileges please contact your system administrator to arrange access.

<!-- In theory we should document the creating a new label process here. -->

Alternatively, select one of the available custom labels should you already have a label appropriate for your needs.

>[!NOTE]
>
> Labels can also can be created using the admin console if you have the appropriate permissions. See the [attribute-based access control manage labels documentation](../../access-control/abac/ui/labels.md) for instructions on creating labels through admin console.

Select [!UICONTROL Save] after completing the process.

Once the label has been applied, the filed will no longer be visible to any who do not have the required permissions.

Any subsequent queries that reference the restricted field will result in an error and will not acknowledge the existence of the restricted field. Equally, if the results of an executed query would include the restricted filed, this data is omitted from the returned results.

## Next steps

After reading this document you have a better understanding of how to add data usage labels to ad hoc schemas created through Query Service CTAS queries. If you have not done so already, the following documents are useful to improve your understanding of data governance in Query Service:

* [Ad hoc schema identities](./ad-hoc-schema-identities.md)
* [Data governance](https://experienceleague.adobe.com/docs/experience-platform/data-governance/home.html) 
