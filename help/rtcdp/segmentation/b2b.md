---
title: Overview of Segmentation Use Cases for Real-time CDP B2B Edition.
description: Overview of the various Real-time CDP B2B Edition use cases available.
---
# Overview of Segmentation use cases for Real-time Customer Data Platform B2B Edition (Beta)

<!-- This document relates to this [ticket](https://jira.corp.adobe.com/browse/PLAT-100468) -->

>[!IMPORTANT]
>
>Real-time CDP B2B Edition is currently in beta. The documentation and the functionality are subject to change.

This document provides examples regarding the segmentation available for Real-time CDP B2B Edition and how the different types of attributes can be combined for common B2B use cases.

>[!NOTE]
>
>The attributes required for these segmentation use cases are only available to Real-time Customer Data Platform B2B Edition customers. To learn more about Real-time CDP, including the features and functionality available to each license type, please begin by reading the [Real-time CDP overview](../overview.md).

## Prerequisites

Before you can use the segmentation attributes for B2B classes, you must complete the following steps:

1. Create schemas that use the B2B classes. The B2B Edition classes include Account, Campaign, Opportunity, Marketing List, and more. For information on [how to set up schemas for use with B2B classes](../schemas/b2b.md) please see the schema documentation.
1. Create relationships between your Experience Data Model (XDM) B2B schemas. Segments based on B2B Edition attributes require relationships between the classes to fully use the extended B2B Segmentation functionality. See the documentation on [how to define a relationship between two B2B schemas](../../xdm/tutorials/relationship-b2b.md) for more information.
1. Ingest data using datasets based on your B2B schemas. See the sources documentation for [information on how to ingest data](../../sources/connectors/adobe-applications/marketo/marketo.md).
1. Read the [Segment builder user guide](./help/segmentation/ui/segment-builder.md) for a more detailed guidance on how to build segments.

Once these requirements have been met you are able to combine these attributes for common B2B use cases.

## Getting started

Once the union schemas that use B2B classes have data ingested and relationships established between them, the segmentation attributes are made available in the left rail. 

B2B attributes are appended with a `B2B` label within the Segmentation workspace to differentiate them from those available as standard within Real-time Customer Data Platform. 

In order to effectively create segments for B2B use cases, it is important to have an intimate knowledge of the schema and understand what the data structure looks like. It is also useful to be aware of the path that the data takes from one data object to another.

The image below illustrates the relationships between the B2B classes available within the Real-time CDP B2B Edition.

![B2B class ERD](../assets/segmentation/b2b-classes.md)

Finding the correct attribute by browsing attributes within the schema builder can be complicated. 

To view a more visual representation of the data structure, navigate to the Schema UI. Select the appropriate schema from the available list and select the appropriate relationship from the [!UICONTROL Composition] side rail.

![source-key example using the people relationship in the schema workspace](../assets/segmentation/source-key-schema-relationship-example.png)

This is relationship is reflected within the segment builder UI through the use of `Key` folders as shown in the image below.

![source-key example using the segment builder in the segmentation workspace](../assets/segmentation/source-key-segmentation-example.md)

Please refer to the XDM documentation for more information on the [XDM Business Opportunity Person Relation class](../../xdm/classes/b2b/business-opportunity-person-relation.md) used in this example.

The use cases below provide information on which classes are used to establish relationships between the different schemas to achieve these results. These examples can be used to help you create your own segments.

## Examples of different use cases

The following use cases are available for segmentation with the B2B Edition. Each example provides a description of what the segment does and a description of the classes used to create them. The images provided highlight the file path in the [!UICONTROL Attributes] side rail which reflects the structure of the schema. The [!UICONTROL Segment properties] section on the right of the display contains a written breakdown of the segment's attributes. 

If you are using a B2B source connection, see the documentation on the schema auto-generation utility for use cases that require [relations between schemas](../../sources/connectors/adobe-applications/marketo/marketo-namespaces.md).

### Example 1

Find all the people who are the "Decision Maker" of any opportunity. This segment requires a link between the [!UICONTROL Person] class and the [!UICONTROL Opportunity Person Relation] class. 

![UI displaying example 1 settings](../assets/segmentation/example-1.png)

### Example 2

Find all the people who are directly assigned to any opportunities of which the opportunity amount is more than the given amount ($1 million). This segment requires a link between the [!UICONTROL Person] class, [!UICONTROL Opportunity Person Relation] class, and [!UICONTROL Opportunity] class.

![UI displaying example 2 settings](../assets/segmentation/example-2.png)

### Example 3

Find all the people who are directly assigned to any opportunities where the account is located in a given location (Canada). This segment requires a link between the [!UICONTROL Person] class, [!UICONTROL Opportunity Person Relation] class, [!UICONTROL Opportunity] class, and [!UICONTROL Account] class.

![UI displaying example 3 settings](../assets/segmentation/example-3.png)

### Example 4

Find all the people who are a "Decision Maker" of any opportunity where the account is in the "Finance" industry, and visited the pricing page in the last three days. This segment requires a link between the [!UICONTROL Person] class, [!UICONTROL Opportunity Person Relation] class, [!UICONTROL Opportunity] class, and [!UICONTROL Account] class, and [!UICONTROL XDM ExperienceEvent] class.

![UI displaying example 4 settings](../assets/segmentation/example-4.png)

### Example 5

Find all the people who work in a Human Resources (HR) department and are related to any account that has at least one open opportunity worth the given amount ($1 million) or more. This segment requires a link between the [!UICONTROL Person] class, [!UICONTROL Account] class, and [!UICONTROL Opportunity] class.

![UI displaying example 5 settings](../assets/segmentation/example-5.png)

### Example 6

Find all the people whose job title is Vice President and are related to any account with annual revenue of the given amount ($100 million) or more, and have visited the pricing page at least 3 times in the last month. This segment requires a link between the [!UICONTROL Person] class, [!UICONTROL Account] class, and [!UICONTROL XDM ExperienceEvent] class.

![UI displaying example 6 settings](../assets/segmentation/example-6.png)

### Example 7

Find all the people who are a "Decision Maker" of any closed-lost opportunity, and visited the pricing page in the last week. This segment requires a link between the [!UICONTROL Person] class, [!UICONTROL Opportunity Person Relation] class, [!UICONTROL Opportunity] class, and [!UICONTROL XDM ExperienceEvent] class.

![UI displaying example 7 settings](../assets/segmentation/example-7.png)

## Next steps

After reading this overview, you now have an understanding of the segmentation possibilities that are available using Real-time CDP, B2B Edition. For more information about the Segmentation Service, please read the [Segmentation documentation](../../segmentation/home.md).
