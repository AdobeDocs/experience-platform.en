---
title: Segmentation Use Cases for Real-Time Customer Data Platform B2B Edition
description: An overview of the various available Adobe Real-Time Customer Data Platform B2B Edition use cases.
feature: Get Started, Audiences, Segments, B2B
badgeB2B: label="B2B Edition" type="Informative" url="https://experienceleague.adobe.com/docs/experience-platform/rtcdp/intro/rtcdp-intro/overview.html#rtcdp-editions" newtab=true
exl-id: 2a99b85e-71b3-4781-baf7-a4d5436339d3
---
# Segmentation use cases for Real-Time Customer Data Platform B2B Edition

>[!IMPORTANT]
>
>Audiences that include Experience Events referencing B2B entities (such as Campaigns and Marketing Lists) are no longer supported. For more information, read the overview of the [Real-Time CDP B2B Edition architecture upgrades](../../rtcdp/b2b-architecture-upgrade.md).

This document provides examples of segment definitions in Adobe Real-Time Customer Data Platform B2B Edition and how different types of attributes can be combined for common B2B use cases. To understand how destinations fit into your B2B workflow, please see the [end-to-end tutorial](../b2b-tutorial.md#create-a-segment-to-evaluate-your-data).

>[!NOTE]
>
>The attributes required for these segmentation use cases are only available to Real-Time Customer Data Platform B2B Edition customers. If you are not using Real-Time Customer Data Platform B2B Edition, see the [segmentation overview](./segmentation-overview.md) instead.

>[!BEGINSHADEBOX]

## Merge policy change

As part of the upgrades to the Real-Time CDP B2B Edition architecture, multi-entity audiences with B2B attributes now support only a single merge policy (the default merge policy), instead of multiple merge policies. Additionally, the changes in which profiles can qualify for audiences may affect downstream workflows such as activation, journey orchestration, and campaign targeting. You are recommended to conduct the following to ensure that your data is working as expected:

- Review and test any audiences that rely on non-default merge logic to understand potential impacts of this update.
- Re-evaluate audience qualification criteria for key audiences to understand if the changes in the merge logic may impact qualifications.
- Monitor  your activation results to detect any shifts in audience results caused by the change in merge policy.

>[!ENDSHADEBOX]

## Prerequisites {#prerequisites}

Before you can use the segmentation attributes for B2B classes, you must complete the following steps:

1. Create schemas that use the B2B classes. The B2B Edition classes include Account, Campaign, Opportunity, Marketing List, and more. For information on [how to set up schemas for use with B2B classes](../schemas/b2b.md) please see the schema documentation.
2. Create relationships between your Experience Data Model (XDM) B2B schemas. Audiences based on B2B Edition attributes require relationships between the classes to fully use the extended B2B Segmentation functionality. See the documentation on [how to define a relationship between two B2B schemas](../../xdm/tutorials/relationship-b2b.md) for more information.
3. Ingest data using datasets based on your B2B schemas. See the sources documentation for [information on how to ingest data](../../sources/connectors/adobe-applications/marketo/marketo.md).
4. Read the [Segment Builder user guide](../../segmentation/ui/segment-builder.md) for a more detailed guidance on how to build audiences.

Once these requirements have been met you are able to combine these attributes for common B2B use cases.

## Getting started {#getting-started}

Once the union schemas for the B2B classes have relationships established and have been used to ingest data, their attributes are made available in the left rail of the Segment Builder. 

B2B classes and their attributes are appended with a `B2B` label within the Segmentation workspace to differentiate them from those available as standard within Real-Time Customer Data Platform. 

In order to effectively create audiences for B2B use cases, it is important to have an intimate knowledge of the schema and understand what the data model looks like. It is also useful to be aware of the path that the data takes from one data object to another.

The image below illustrates the relationships between the B2B classes available within Real-Time CDP B2B Edition.

![B2B class ERD](../assets/segmentation/b2b/b2b-classes.png)

Since your data model can be complicated, you can use the Platform UI to view a more detailed visual representation of your data model in order to help find the relevant attributes for your use case. To start, go to the Platform UI and select Schemas in the left navigation.

Select the appropriate schema from the available list and select the appropriate relationship from the [!UICONTROL Composition] side rail. In the example below, selecting the "Person" relationship reveals which attribute in the current schema references the related "Person" schema (if it is the source schema in the relationship), or is referenced by the "Person" schema (if it is the reference schema in the relationship).

![source-key example using the people relationship in the schema workspace](../assets/segmentation/b2b/source-key-schema-relationship-example.png)

This relationship is reflected within the Segment Builder through the use of `Key` folders as shown in the image below.

![source-key example using the segment builder in the segmentation workspace](../assets/segmentation/b2b/source-key-segmentation-example.png)

Please refer to the [schemas in Real-Time Customer Data Platform B2B Edition documentation](../schemas/b2b.md) for more information on the available B2B classes.

The use cases below provide information on which classes are used to establish relationships between the different schemas to achieve these results. These examples can be used to help you create your own audiences.

## Examples of different segmentation use cases {#use-cases}

The following use cases are available for segmentation with the B2B Edition. Each example provides a description of what the audience does and a description of the classes used to create them. The images provided highlight the file path in the [!UICONTROL Attributes] side rail which reflects the structure of the schema. The [!UICONTROL Segment properties] section on the right of the display contains a written breakdown of the audience's attributes. 

### Example 1: Find "decision-makers" for B2B opportunities {#find-decision-maker}

Find all the people who are the "Decision Maker" of any opportunity. This audience requires a link between the [!UICONTROL XDM Individual Profile] class and the [!UICONTROL XDM Business Opportunity Person Relation] class. 

![UI displaying example 1 settings](../assets/segmentation/b2b/example-1.png)

### Example 2: Find B2B profiles assigned to opportunities over a certain dollar amount {#find-opportunities-amount}

Find all the people who are directly assigned to any opportunities of which the opportunity amount is more than the given amount ($1 million). This audience requires a link between the [!UICONTROL XDM Individual Profile] class, [!UICONTROL XDM Business Opportunity Person Relation] class, and [!UICONTROL XDM Business Opportunity] class.

![UI displaying example 2 settings](../assets/segmentation/b2b/example-2.png)

### Example 3: Find B2B profiles assigned to opportunities by location {#find-opportunities-location} 

Find all the people who are directly assigned to any opportunities where the account is located in a given location (Canada). This audience requires a link between the [!UICONTROL XDM Individual Profile] class, [!UICONTROL XDM Business Opportunity Person Relation] class, [!UICONTROL XDM Business Opportunity] class, and [!UICONTROL XDM Business Account] class.

![UI displaying example 3 settings](../assets/segmentation/b2b/example-3.png)

### Example 4: Find "decision-makers" for opportunities by industry and browsing behavior {#find-industry-browsing-behavior}

Find all the people who are a "Decision Maker" of any opportunity where the account is in the "Finance" industry, and visited the pricing page in the last three days. 

To create this audience, you must use "segments of segments" by creating a base audience of all the people who visited the pricing page in the last three days. 

![Segment Builder displaying the base audience.](../assets/segmentation/b2b/example-4-base.png)

After creating the first audience, you can combine that with another audience of people who are a "Decision Maker" of any opportunity where the account is in the "Finance" industry.

![UI displaying example 4 settings](../assets/segmentation/b2b/example-4.png)

### Example 5: Find B2B profiles for opportunities by department name and opportunity amount {#find-department-opportunity-amount}

Find all the people who work in a Human Resources (HR) department and have any account that has at least one open opportunity worth the given amount ($1 million) or more. This audience requires a link between the [!UICONTROL XDM Individual Profile] class, [!UICONTROL XDM Business Account] class, and [!UICONTROL XDM Business Opportunity] class.

![UI displaying example 5 settings](../assets/segmentation/b2b/example-5.png)

### Example 6: Find B2B profiles by job title and annual account revenue {#find-by-job-title-and-revenue}

Find all the people whose job title is Vice President and have any account with annual revenue of the given amount ($100 million) or more, and have visited the pricing page at least 3 times in the last month. This audience requires a link between the [!UICONTROL XDM Individual Profile] class, [!UICONTROL XDM Business Account] class, and [!UICONTROL XDM ExperienceEvent] class.

![UI displaying example 6 settings](../assets/segmentation/b2b/example-6.png)

### Example 7: Find "decision-makers" by opportunity status and browsing behavior {#find-by-opportunity-status-and-browsing-behavior}

Find all the people who are a "Decision Maker" of any closed-lost opportunity, and visited the pricing page in the last three days. 

To create this audience, you must use "segments of segments" by creating a base audience of all the people who visited the pricing page in the last three days. 

![Segment Builder displaying the base audience.](../assets/segmentation/b2b/example-7-base.png)

After creating the first audience, you can combine that with another audience of people who are a "Decision Maker" of any opportunity where both the "Closed Flag" is set to true and the "Lost Flag" is set to false.

![UI displaying example 7 settings](../assets/segmentation/b2b/example-7.png)

### Example 8: Use related accounts to expand segmentation reach {#related-accounts}

Find all the people who work in a Human Resources (HR) department and are related to any account *or any one of the account's related accounts* that has at least one open opportunity worth the given amount ($1 million) or more. This audience requires a link between the [!UICONTROL XDM Individual Profile] class, [!UICONTROL XDM Business Account] class, and [!UICONTROL XDM Business Opportunity] class.

![UI displaying segmentation for related accounts](../assets/segmentation/b2b/example-8.png)

### Example 9: Use lead scores and/or account scores to qualify profile {#account-scoring}

Find all profiles with the lead score over 80. 

![UI displaying segmentation for predictive lead and account scoring](../assets/segmentation/b2b/example-9.png)

### Example 10: Find B2B profiles associated with accounts whose parent org have revenue over a certain dollar amount {#find-parent-org-amount}

Find all people that are associated with accounts whose Parent Org has a revenue more than the given amount ($100,000,000).

![UI displaying segmentation parent org](../assets/segmentation/b2b/example-10.png)

### Example 11: Find B2B profiles by job title and account name with an active relationship {#find-by-job-title-and-account-name}

Find all the people who are a "Manager" on the account "Acme", where the account relationship is "Active". 

![UI displaying segmentation parent org](../assets/segmentation/b2b/example-11.png)

### Example 12: Find B2B profiles targeted for campaigns where the actualCost exceeds the budgetedCost {#find-actualcost-exceed-budgetcost}

Find all the people who are targeted for campaigns where the actualCost exceeded the budgetedCost.

![UI displaying segmentation parent org](../assets/segmentation/b2b/example-12.png)

### Example 13: Find B2B profiles belonging to a Marketo Static list and isDeleted=false {#find-marketo-static-list}

Find all the people belonging to the Marketo Static list "Anniversary users" where isDeleted=false.

![UI displaying segmentation parent org](../assets/segmentation/b2b/example-13.png)
<!-- 
### Example 14: Find "decision makers" by opportunity status using streaming or edge segmentation {#find-decision-makers-personalization}

>[!NOTE]
>
>This example uses **streaming or edge** segmentation, as opposed to batch segmentation.

Find all the people who are a "Decision Maker" of any closed-lost opportunity and visited the pricing page in the last 24 hours. This example can be evaluated using streaming or edge segmentation, to support more real-time use cases.

To create this audience, you must use "segment of segments" by creating a base audience of all the people who visited the pricing page in the last 24 hours.

![Segment Builder displaying the base audience.](../assets/segmentation/b2b/example-14-base.png)

After creating the first audience, you can combine that with another audience of  people who are a "Decision Maker" of any opportunity where both the "Closed Flag" is set to true and the "Lost Flag" is set to false.

![UI displaying example 14 settings](../assets/segmentation/b2b/example-14.png) -->

## Next steps {#next-steps}

After reading this overview, you now have an understanding of the segmentation possibilities that are available using Real-Time CDP, B2B Edition. For more information about the Segmentation Service, please read the [Segmentation documentation](../../segmentation/home.md).
