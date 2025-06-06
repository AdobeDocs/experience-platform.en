---
keywords: Experience Platform;home;popular topics;schema;Schema;enum;primary identity;primary identity;XDM individual profile;Experience event;XDM Experience Event;XDM ExperienceEvent;experienceEvent;experienceevent;XDM Experienceevenet;schema design;best practices
solution: Experience Platform
title: Best Practices For Data Modeling
description: This document provides an introduction to Experience Data Model (XDM) schemas and the building blocks, principles, and best practices for composing schemas to be used in Adobe Experience Platform.
exl-id: 2455a04e-d589-49b2-a3cb-abb5c0b4e42f
---
# Best practices for data modeling

[!DNL Experience Data Model] (XDM) is the core framework that standardizes customer experience data by providing common structures and definitions for use in downstream Adobe Experience Platform services. By adhering to XDM standards, all customer experience data can be incorporated into a common representation and used to gain valuable insights from customer actions, define customer audiences, and express customer attributes for personalization purposes.

Since XDM is extremely versatile and customizable by design, it is important to follow best practices for data modeling when designing your schemas. This document covers the key decisions and considerations that you must make when mapping your customer experience data to XDM.

## Getting started

Before reading this guide, review the [XDM System overview](../home.md) for a high-level introduction to XDM and its role within Experience Platform.

As this guide focuses exclusively on key considerations regarding schema design, you are strongly recommended to read the [basics of schema composition](./composition.md) for detailed explanations of the individual schema elements mentioned throughout this guide.

## Best practices summary {#summary}

The recommended approach for designing your data model for use in Experience Platform can be summarized as follows:

1. Understand the business use cases for your data.
1. Identify the primary data sources that should be brought into Experience Platform to address those use cases.
1. Identify any secondary data sources that could also be of interest. For example, if currently only one business unit in your organization is interested in porting their data to Experience Platform, a similar business unit might also be interested in porting similar data in the future. Considering these secondary sources helps standardize the data model across your entire organization.
1. Create a high-level entity relationship diagram (ERD) for the data sources that have been identified.
1. Convert the high-level ERD into an Experience Platform-centric ERD (including profiles, Experience Events, and lookup entities).

The steps related to identifying the applicable data sources required to carry out your business use cases vary from organization to organization. While the remainder of sections throughout this document focus on the latter steps of organizing and constructing an ERD after the data sources have been identified, the explanations of the diagram's various components may inform your decisions as to which of your data sources should be migrated to Experience Platform.

## Create a high-level ERD {#create-an-erd}

Once you have determined the data sources that you wish to bring into Experience Platform, create a high-level ERD to help guide the process of mapping your data to XDM schemas.

The example below represents a simplified ERD for a company who wants to bring data into Experience Platform. The diagram highlights the essential entities that should be sorted into XDM classes, including customer accounts, hotels, and several common e-commerce events.

![A entity relational diagram that highlights the essential entities that should be sorted into XDM classes for data ingestion.](../images/best-practices/erd.png)

## Sort entities into profile, lookup, and event categories {#sort-entities}

Once you have created an ERD to identify the essential entities you would like to bring into Experience Platform, these entities must be sorted into profile, lookup, and event categories:

| Category | Description |
| --- | --- |
| Profile entities | Profile entities represent attributes relating to an individual person, typically a customer. Entities that fall under this category should be represented by schemas based on the **[!DNL XDM Individual Profile] class**. |
| Lookup entities | Lookup entities represent concepts that can relate to an individual person, but cannot be directly used to identify the individual. Entities that fall under this category should be represented by schemas based on **custom classes**, and are linked to profiles and events through [schema relationships](../tutorials/relationship-ui.md). |
| Event entities | Event entities represent concepts related to actions that a customer can take, system events, or any other concepts where you may want to track changes over time. Entities that fall under this category should be represented by schemas based on the **[!DNL XDM ExperienceEvent] class**. |

{style="table-layout:auto"}

### Considerations for entity sorting {#considerations}

The sections below provide further guidance for how to sort your entities into the above categories.

#### Mutable and immutable data {#mutable-and-immutable-data}

A primary way of sorting between entity categories is whether the data being captured is mutable or not.

Attributes belonging to profiles or lookup entities are typically mutable. For example, a customer's preferences might change over time, and the parameters of a subscription plan can be updated depending on market trends.

By contrast, event data is typically immutable. Since events are attached to a specific timestamp, the "system snapshot" that an event provides does not change. For example, an event can capture a customer's preferences when they checkout a cart, and does not change even if the customer's preferences end up changing later on. Event data cannot be changed after it has been recorded.

To summarize, profiles and lookup entities contain mutable attributes and represent the most current information about the subjects they capture, while events are immutable records of the system at a specific time.

#### Customer attributes {#customer-attributes}

If an entity contains any attributes related to an individual customer, it is most likely a profile entity. Examples of customer attributes include:

* Personal details such as name, birth date, gender, and account ID(s).
* Location information such as addresses and GPS information.
* Contact information such as phone numbers and email addresses.

#### Tracking data over time {#track-data}

If you want to analyze how certain attributes within an entity change over time, it is most likely an event entity. For example, adding product items to a cart can be tracked as add-to-cart events in Experience Platform:

| Customer ID | Type | Product ID | Quantity | Timestamp |
| --- | --- | --- | --- | --- |
| 1234567 | Add | 275098 | 2 | Oct 1, 10:32 AM |
| 1234567 | Remove | 275098 | 1 | Oct 1, 10:33 AM |
| 1234567 | Add | 486502 | 1 | Oct 1, 10:41 AM |
| 1234567 | Add | 910482 | 5 | Oct 3, 2:15 PM |

{style="table-layout:auto"}

#### Segmentation use cases {#segmentation-use-cases}

When categorizing your entities, it is important to think about the audiences you may want to build to address your particular business use cases.

For example, a company wants to know all of the "Gold" or "Platinum" members of their loyalty program that have made more than five purchases in the last year. Based on this segmentation logic, the following conclusions can be made regarding how relevant entities should be represented:

* "Gold" and "Platinum" represent loyalty statuses applicable to an individual customer. Since the segmentation logic is only concerned with the current loyalty status of customers, this data can be modeled as part of a profile schema. If you wished to track changes in loyalty status over time, you could also create an additional event schema for loyalty status changes.
* Purchases are events which occur at a particular time, and the segmentation logic is concerned with purchase events within a specified time window. This data should therefore be modeled as an event schema.

#### Activation use cases {#activation-use-cases}

In addition to considerations regarding segmentation use cases, you should also review the activation use cases for those audiences to identify additional relevant attributes.

For example, a company has built an audience based on the rule that `country = US`. Then, when activating that audience to certain downstream targets, the company wants to filter all exported profiles based on home state. Therefore, a `state` attribute should also be captured in the applicable profile entity.

#### Aggregated values {#aggregated-values}

Based on the use case and granularity of your data, you should decide whether certain values need to be pre-aggregated before being included in a profile or event entity.

For example, a company wants to build an audience based on the number of cart purchases. You can choose to incorporate this data at the lowest granularity by including each timestamped purchase event as its own entity. However, this can sometimes increase the number of recorded events exponentially. To reduce the number of ingested events, you can choose to create an aggregate value `numberOfPurchases` over a week long or month long period. Other aggregate functions like MIN and MAX can also apply to these situations.

>[!CAUTION]
>
>Experience Platform does not currently perform automatic value aggregation, although this is planned for future releases. If you choose to use aggregated values, you must perform the calculations externally before sending the data to Experience Platform.

#### Cardinality {#cardinality}

The cardinalities established in your ERD can also provide some clues as to how to categorize your entities. If there is a one-to-many relationship between two entities, the entity that represents the "many" is likely to be an event entity. However, there are also cases where the "many" is a set of lookup entities that are provided as an array within a profile entity.

>[!NOTE]
>
>Since there is no universal approach to fit all use cases, it is important to consider the pros and cons of each situation when categorizing entities based on cardinality. See the [next section](#pros-and-cons) for more information.

The following table outlines some common entity relationships and the categories that can be derived from them:

| Relationship | Cardinality | Entity categories |
| --- | --- | --- |
| Customer and Cart Checkout | One to many | A single customer may have many cart checkouts, which are events that can be tracked over time. Customer would therefore be a profile entity, while Cart Checkout would be an event entity. |
| Customer and Loyalty Account | One to one | A single customer can only have one loyalty account, and a loyalty account can only belong to one customer. Since the relationship is one-to-one, both Customer and Loyalty Account represent profile entities. |
| Customer and Subscription | One to many | A single customer may have many subscriptions. Since the company is only concerned with a customer's current subscriptions, Customer is a profile entity, while Subscription is a lookup entity. |

{style="table-layout:auto"}

### Pros and cons of different entity classes {#pros-and-cons}

While the previous section provided some general guidelines for deciding how to categorize your entities, it is important to understand that there can often be pros and cons for choosing one entity category over another. The following case study is intended to illustrate how you might consider your options in these situations.

A company tracks active subscriptions for their customers, where one customer can have many subscriptions. The company also wants to include subscriptions for segmentation use cases, such as finding all users with active subscriptions.

In this scenario, the company has two potential options for representing a customer's subscriptions in their data model:

1. [Use profile attributes](#profile-approach)
1. [Use event entities](#event-approach)

#### Approach 1: Use profile attributes {#profile-approach}

The first approach would be to include an array of `subscriptionID` within the profile entity for Customer.

![The Customer schema in the Schema Editor with the class and structure highlighted](../images/best-practices/profile-schema.png)

**Pros**

* Segmentation is feasible for the intended use case.
* The schema only preserves the latest subscription records for a customer.

**Cons**

* The entire array must be restated every time changes occur to any field in the array.
* If different data sources or business units are feeding data into the array, it becomes challenging to keep the latest updated array synced across all channels.

#### Approach 2: Use event entities {#event-approach}

The second approach would be to use event schemas to represent a subscription event. This would include the subscription ID alongside a customer ID and a timestamp of when the subscription event occurred.

![A diagram of the Subscription Event schema with the XDM Experience Event class and subscriptions structure highlighted.](../images/best-practices/event-schema.png)

**Pros**

* Segmentation rules can be more flexible (such as finding all customers those who changed their subscriptions in the last 30 days).
* When a customer's subscription status changes, you no longer have to update a long, potentially complex array within the customer's profile attributes. This is especially useful if simultaneous changes to the customer's subscription list are occurring from multiple sources.

**Cons**

* Segmentation becomes more complex for the original intended use case (identifying the status of customers' most recent subscriptions). The audience now needs additional logic to flag the last subscription event for a customer to check its status.
* Events have a higher risk of automatically expiring and being purged from the Profile store. See the guide on [Experience Event expirations](../../profile/event-expirations.md) for more information.

## Create schemas based on your categorized entities {#schemas-for-categorized-entities}

Once you have sorted your entities into profile, lookup, and event categories, you can start converting your data model into XDM schemas. For demonstration purposes, the example data model shown earlier has been sorted into appropriate categories in the following diagram:

![A diagram of the schemas contained in the profile, lookup, and event entities](../images/best-practices/erd-sorted.png)

The category that an entity has been sorted under should determine the XDM class you base its schema on. To reiterate:

* Profile entities should use the [!DNL XDM Individual Profile] class.
* Event entities should use the [!DNL XDM ExperienceEvent] class.
* Lookup entities should use custom XDM classes defined by your organization. Profile and event entities can then reference these lookup entities through schema relationships.

>[!NOTE]
>
>While event entities are almost always represented by separate schemas, entities in the profile or lookup categories may be combined together in a single XDM schema, depending on their cardinality.
>
>For example, since the Customer entity has a one-to-one relationship with the LoyaltyAccount entity, the schema for the Customer entity could also include a `LoyaltyAccount` object to contain the appropriate loyalty fields for each customer. If the relationship is one to many, however, the entity that represents the "many" could be represented by a separate schema or an array of profile attributes, depending on its complexity.

The sections below provide general guidance on constructing schemas based on your ERD.

### Adopt an iterative modeling approach {#iterative-modeling}

The [rules of schema evolution](./composition.md#evolution) dictate that only non-destructive changes can be made to schemas once they have been implemented. In other words, once you add a field to a schema and data has been ingested against that field, the field can no longer be removed. It is therefore essential to adopt an iterative modeling approach when you are first creating your schemas, starting with a simplified implementation which progressively gains complexity over time.

If you are not sure whether a particular field is necessary to include in a schema, the best practice is to leave it out. If it is later determined that the field is necessary, it can always be added in the next iteration of the schema.

### Identity fields {#identity-fields}

In Experience Platform, XDM fields marked as identities are used to stitch together information about individual customers coming from multiple data sources. Although a schema can have multiple fields marked as identities, a single primary identity must be defined for the schema to be enabled for use in [!DNL Real-Time Customer Profile]. See the section on [identity fields](./composition.md#identity) in the basics of schema composition for more detailed information on the use case of these fields.

When designing your schemas, any primary keys in your relational database tables are likely candidates for primary identities. Other examples of applicable identity fields are customer email addresses, phone numbers, account IDs, and [ECID](../../identity-service/features/ecid.md).

### Adobe application schema field groups {#adobe-application-schema-field-groups}

Experience Platform provides several out-of-the-box XDM schema field groups for capturing data related to the following Adobe applications:

* Adobe Analytics
* Adobe Audience Manager
* Adobe Campaign
* Adobe Target

For example, you can use the [[!UICONTROL Adobe Analytics ExperienceEvent Template] field group](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/analytics/experienceevent-all.schema.json) to map [!DNL Analytics]-specific fields to your XDM schemas. Depending on the Adobe applications you are working with, you should be using these Adobe-provided field groups in your schemas.

![A schema diagram of the [!UICONTROL Adobe Analytics ExperienceEvent Template].](../images/best-practices/analytics-field-group.png)

Adobe application field groups automatically assign a default primary identity through the use of the `identityMap` field, which is a system-generated, read-only object that maps standard identity values for an individual customer.

For Adobe Analytics, ECID is the default primary identity. If an ECID value is not provided by a customer, the primary identity instead defaults to AAID.

>[!IMPORTANT]
>
>When using Adobe application field groups, no other fields should be marked as the primary identity. If there are additional properties that need to be marked as identities, these fields must be assigned as secondary identities instead.

## Data validation fields {#data-validation-fields}

When you ingest data into the data lake, data validation is only enforced for constrained fields. To validate a particular field during a batch ingestion, you must mark the field as constrained in the XDM schema. To prevent bad data from being ingested into Experience Platform, you are recommended to define the criteria for field level validation when you create your schemas.

>[!IMPORTANT]
>
>Validation does not apply to nested columns. If the field format is located within an array column, the data will not be validated.

To set constraints on a particular field, select the field from the Schema Editor to open the **[!UICONTROL Field properties]** sidebar. See the documentation on [type-specific field properties](../ui/fields/overview.md#type-specific-properties) for exact descriptions of the available fields.

![The Schema Editor with the constraint fields highlighted in the [!UICONTROL Field properties] sidebar.](../images/best-practices/data-validation-fields.png)

### Tips to maintain data integrity {#data-integrity-tips}

The following are a collection of suggestions to maintain data integrity when you create a schema.

* **Consider primary identities**: For Adobe products like web SDK, mobile SDK, Adobe Analytics, and Adobe Journey Optimizer, the `identityMap` field often serves as the primary identity. Avoid designating additional fields as primary identities for that schema.
* **Ensure `_id` is not used as an identity**: The `_id` field in Experience Event schemas cannot be used as an identity as it is meant for record uniqueness.
* **Set length constraints**: It is best practice to set minimum and maximum lengths on fields marked as identities. A warning triggers if you try to assign a custom namespace to an identity field without meeting the minimum and maximum length constraints. These limitations help maintain consistency and data quality.
* **Apply patterns for consistent values**: If your identity values follow a specific pattern, you should use the **[!UICONTROL Pattern]** setting to enforce this constraint. This setting can include rules like digits only, uppercase or lowercase, or specific character combinations. Use regular expressions to match patterns in your strings.
* **Limit eVars in Analytics schemas**: Typically, an Analytics schema should have only one eVar designated as an identity. If you intend to use more than one eVar as an identity, you should double-check whether the data structure can be optimized.
* **Ensure uniqueness of a selected field**: Your chosen field should be unique compared to the primary identity in the schema. If it is not, do not mark it as an identity. For instance, if multiple customers can provide the same email address, then that namespace is not a suitable identity. This principle also applies to other identity namespaces like phone numbers. Marking a non-unique field as an identity could cause unwanted profile collapse. 
* **Verify minimum string lengths**: All string fields should be at least one character in length, as string values should never be empty. Null values for non-required fields, however, are acceptable. New string fields are given a minimum length of one by default.

## Next steps

This document covered the general guidelines and best practices for designing your data model for Experience Platform. To summarize:

* Use a top-down approach by sorting your data tables into profile, lookup, and event categories before constructing your schemas.
* There are often multiple approaches and options when it comes to designing schemas for different purposes.
* Your data model should support your business use cases such as segmentation or customer journey analysis.
* Make your schemas as simple as possible, and only add new fields when absolutely necessary.

Once you are ready, see the tutorial on [creating a schema in the UI](../tutorials/create-schema-ui.md) for step-by-step instructions on how to create a schema, assign the appropriate class for the entity, and add fields to map your data to.
