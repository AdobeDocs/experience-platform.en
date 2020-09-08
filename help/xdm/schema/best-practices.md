---
keywords: Experience Platform;home;popular topics;schema;Schema;enum;;primary identity;primary identity;XDM individual profile;Experience event;XDM Experience Event;XDM ExperienceEvent;experienceEvent;experienceevent;XDM Experienceevenet;schema design
solution: Experience Platform
title: Best practices for data modeling in Adobe Experience Platform
topic: overview
description: This document provides an introduction to Experience Data Model (XDM) schemas and the building blocks, principles, and best practices for composing schemas to be used in Adobe Experience Platform.
---

# Best practices for data modeling in Adobe Experience Platform

[!DNL Experience Data Model] (XDM) is the core framework that standardizes customer experience data by providing common structures and definitions for use in downstream Adobe Experience Platform services. By adhering to XDM standards, all customer experience data can be incorporated into a common representation that allows you to gain valuable insights from customer actions, define customer audiences through segments, and express customer attributes for personalization purposes.

Due to the fact that XDM is extremely versatile and customizable by design, it is therefore important to follow best practices for data modeling when designing your schemas. This document covers the key decisions and considerations you must make when mapping your customer experience data to XDM.

## Getting started

Before reading this guide, please review the [XDM System overview](../home.md) for a high-level introduction to XDM and its role within Experience Platform.

This guide focuses exclusively on key considerations regarding schema design. It is therefore strongly recommended that you refer to the [basics of schema composition](./composition.md) for detailed explanations of the individual schema elements mentioned throughout this guide.

## Best practices summary

The recommended approach for designing your data model for use in Experience Platform can be summarized as follows:

1. Understand the business use cases for your data.
1. Identify the primary data sources that should be brought into Platform to address those use cases.
1. Identify any secondary data sources that could also be of interest. For example, if currently only one business unit in your organization is interested in porting their data to Platform, a similar business unit might also be interested in porting similar data in the future. Considering these secondary sources helps standardize the data model across your entire organization.
1. Create a high-level entity relationship diagram (ERD) for the data sources that have been identified.
1. Convert the high-level ERD into a Platform-centric ERD (including profiles, Experience Events, and lookup entities).

The steps related to identifying the applicable data sources required to carry out your business use cases will vary from organization to organization. While the remainder of sections throughout this document focus on the latter steps of organizing and constructing an ERD after the data sources have been identified, the explanations of the diagram's various components may inform your decisions as to which of your data sources should be migrated to Platform.

## Create a high-level ERD

Once you have determined the data sources you wish to bring into [!DNL Platform], create a high-level ERD to help guide the process of mapping your data to XDM schemas.

The example below represents a simplified ERD for a company who wants to bring data into [!DNL Platform]. The diagram highlights the essential entities that should be sorted into XDM classes, including customer accounts, hotels, addresses, and several common e-commerce events.

![](../images/best-practices/erd.png)

## Sort entities into profile, lookup, and event categories

Once you have created an ERD to identify the essential entities you would like to bring into [!DNL Platform], these entities must be sorted into profile, lookup, and event categories:

| Category | Description |
| --- | --- |
| Profile entities | Profile entities represent attributes relating to an individual person, typically a customer. Entities that fall under this category should be represented by schemas based on the **[!DNL XDM Individual Profile] class**. |
| Lookup entities | Lookup entities represent concepts that can relate to an individual person, but cannot be directly used to identify the individual. Entities that fall under this category should be represented by schemas based on **custom classes**. |
| Event entities | Event entities represent concepts related to actions a customer can take, system events, or any other concept where you may want to track changes over time. Entities that fall under this category should be represented by schemas based on the **[!DNL XDM ExperienceEvent] class**. |

### Considerations for entity sorting

The sections below provide further guidance for how to sort your entities into the above categories.

#### Customer attributes

If an entity contains any attributes related to an individual customer, it is most likely a profile entity. Examples of customer attributes include:

* Personal details such as name, birth date, gender, and account ID(s).
* Location information such as addresses and GPS information.
* Contact information such as phone numbers and email addresses.

#### Tracking data over time

If you want to analyze how certain attributes within an entity change over time, it is most likely an event entity. For example, adding product items to a cart can be tracked as add-to-cart events in [!DNL Platform]:

| Customer ID | Type | Product ID | Quantity | Timestamp |
| --- | --- | --- | --- | --- |
| 1234567 | Add | 275098 | 2 | Oct 1, 10:32 AM |
| 1234567 | Remove | 275098 | 1 | Oct 1, 10:33 AM |
| 1234567 | Add | 486502 | 1 | Oct 1, 10:41 AM |
| 1234567 | Add | 910482 | 5 | Oct 3, 2:15 PM |

#### Segmentation use cases

When categorizing your entities, it is important to think about the audience segments you may want to build to address your particular business use cases.

For example, a company wants to know all of the "Gold" or "Platinum" members of their loyalty program that have made more than five purchases in the last year. Based on this segment logic, the following conclusions can be made regarding how relevant entities should be represented:

* "Gold" and "Platinum" represent loyalty statuses applicable to an individual customer. Since the segment logic is only concerned with the current loyalty status of customers, this data can be modeled as a profile schema. If you wished to track changes in loyalty status over time, you could also create an additional event schema for loyalty status changes.
* Purchases are events which occur at a particular time, and the segment logic is concerned with purchase events within a specified time window. This data should therefore be modeled as an event schema.

#### Activation use cases

In addition to considerations regarding segmentation use cases, you should also review the activation use cases for those segments in order to identify additional relevant attributes.

For example, a company has built an audience segment based on the rule that `country = US`. Then, when activating that segment to certain downstream targets, the company wants to filter all exported profiles based on home state. Therefore, a `state` attribute should be captured in the applicable profile entity.

#### Aggregated values

Based on the use case and granularity of your data, you should decide whether certain values need to be pre-aggregated before being included in a profile or event entity.

For example, a company wants to build a segment based on the number of cart purchases. You can choose to incorporate this data at the lowest granularity by including each timestamped purchase event as its own entity. However, this can sometimes increase the number of recorded events exponentially. To reduce the number of ingested events, you can choose to create an aggregate value `numberOfPurchases` over a weeklong or monthlong period. Other aggregate functions like MIN and MAX can also apply to these situations.

Experience Platform does not currently perform automatic value aggregation, although this is planned for future releases. If you choose to use aggregated values, you must perform the calculations externally before sending the data to [!DNL Platform].

#### Cardinality

The cardinalities established in your ERD can also provide some clues as to how to categorize your entities. If there is a one-to-many relationship between two entities, the entity that represents the "many" will likely be an event entity. However, there are also cases where the "many" is a set of lookup entities that are provided as an array within a profile entity.

Since there is no universal approach to fit all use cases, it is important to consider the pros and cons of each situation when categorizing entities based on cardinality.

The following table outlines some common entity relationships and the categories that can be derived from them:

| Relationship | Cardinality | Entity categories |
| --- | --- | --- |
| Customers and Cart Checkouts | One to many | A single customer may have many cart checkouts, which are events that can be tracked over time. Customers would therefore be a profile entity, while Cart Checkouts would be an event entity. |
| Customers and Loyalty Accounts | One to one | A single customer can only have one loyalty account, and vice versa. Since the relationship is one-to-one, both Customers and Loyalty Accounts represent profile entities. |
| Customers and Subscriptions | One to many | A single customer may have many subscriptions. Since the company is only concerned with a customer's current subscriptions, Customers is a profile entity, while Subscriptions is a lookup entity. |

### Pros and cons of different entity classes

While the previous section provided some general guidelines for deciding how to categorize your entities, it is important to understand that there can often be pros and cons for choosing one entity category over the other. The following case study is intended to illustrate how you might consider your options in these situations:

A company tracks active subscriptions for their customers, where one customer can have many subscriptions. The company also wants to include subscriptions for segmentation use cases, such as finding "all users with active subscriptions".

In this scenario, the company has two potential options for representing a customer's subscriptions in their data model:

1. [Use profile attributes](#profile-approach)
1. [Use event entities](#event-approach)

#### Approach 1: Use profile attributes {#profile-approach}

The first approach would be to include an array of subscriptions as attributes within the profile entity for Customers. Objects in this array would contain fields for `category`, `status`, `planName`, `startDate`, and `endDate`.

![](../images/best-practices/profile-schema.png)

**Pros**

* Segmentation is feasible for the intended use case.
* The schema will only preserve the latest subscription records for a customer.

**Cons**

* The entire array must be restated every time changes occur to any field in the array.
* If different BUs and sources are feeding data into the array, it will become challenging to keep the latest updated array synced across all BUs and sources.

#### Approach 2: Use event entities {#event-approach}

The second approach would be to use event schemas to represent subscriptions. This entails ingesting the same subscription fields as the first approach, with addition of a subscription ID, a customer ID, and a timestamp of when the subscription event occurred.

<img src="../images/best-practices/event-schema.png" width=800>

**Pros**

* Segmentation is overall flexible (e.g. those who changed their state in the last x days and then did y event).
* It didn’t require us to update the Array all at once (which is problematic if you have 30 different product/newsletter combinations sending in events at different times).

**Cons**

* Segmentation is a little complex for the intended use case ( we needed to be able to identifywhat the current subscription status is (i.e. the most recent event), for each user persubscription) . The segment needs to flag last event of a subscription of a user and check thestatus on it.

## Create schemas based on your categorized entities

Once you have sorted your entities into profile, lookup, and event categories, you can start converting your data model into XDM schemas. For demonstration purposes, the example data model shown earlier has been sorted into appropriate categories in the following diagram:

<img src="../images/best-practices/erd-sorted.png" width=800>

The category that an entity has been sorted under should determine the XDM class you base its schema on. To reiterate:

* Profile entities should use the [!DNL XDM Individual Profile] class.
* Event entities should use the [!DNL XDM ExperienceEvent] class.
* Lookup entities should use custom XDM classes defined by your organization.

>[!NOTE]
>
>While event entities will almost always be represented by separate schemas, entities in the profile or lookup categories may be combined together in a single XDM schema, depending on their cardinality. For example, since the Customers entity has a one-to-one relationship with the LoyaltyAccounts entity, the schema for the Customers entity could also include a `LoyaltyAccount` object to contains the appropriate loyalty fields for each customer. If the relationship is one to many, however, the entity that represents the "many" should be represented by a separate schema.

See the tutorial on [creating a schema in the UI](../tutorials/create-schema-ui.md) for step-by-step instructions on how to create a schema, assign the appropriate class for the entity, and add fields to map your data to.

### Adopt an iterative modeling approach

The rules of schema evolution dictate that only non-destructive changes can be made to schemas once they have been implemented. In other words, once you add a field to a schema, the field cannot be removed. It is therefore essential to adopt an iterative modeling approach when you are first creating your schemas, starting with a simplified implementation which progressively gains complexity over time.

If you are not sure whether a particular field is necessary to include in a schema, the best practice is to leave it out. If it is later determined that the field is necessary, it can always be added in the next iteration of the schema.

## Next steps

This document covered the general guidelines and best practices for designing your data model for Experience Platform. To summarize:

* There are always multiple approaches and options for schema design.
* Your data model should support segmentation use cases.
