---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API;unified profile;Unified Profile;unified;Profile;rtcp;XDM graphs
solution: Adobe Experience Platform
title: Real-time Customer Profile overview
topic: guide
description: Real-time Customer Profile is a generic lookup entity store that merges data from various enterprise data assets, and then provides access to that data in the form of individual customer profiles and related time series events. This feature enables marketers to drive coordinated, consistent and relevant experiences with their audiences across multiple channels.
---

# [!DNL Real-time Customer Profile] overview

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With [!DNL Real-time Customer Profile], you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data. [!DNL Profile] allows you to consolidate your disparate customer data into a unified view offering an actionable, timestamped account of every customer interaction. This overview will help you understand the role and use of [!DNL Real-time Customer Profile] in [!DNL Experience Platform].

## Understanding [!DNL Real-time Customer Profile]

[!DNL Real-time Customer Profile] is a generic lookup entity store that merges data from various enterprise data assets, and then provides access to that data in the form of individual customer profiles and related time series events. This feature enables marketers to drive coordinated, consistent and relevant experiences with their audiences across multiple channels.

### [!DNL Profile] data store

Although [!DNL Real-time Customer Profile] processes ingested data and uses Adobe Experience Platform [!DNL Identity Service] to merge related data through identity mapping, it maintains its own data in the [!DNL Profile] store. In other words, the [!DNL Profile] store is separate from [!DNL Catalog] data ([!DNL Data Lake]) and [!DNL Identity Service] data (identity graph).

### [!DNL Profile] and [!DNL Platform] services

The relationship between [!DNL Real-time Customer Profile] and other services within [!DNL Experience Platform] is highlighted in the following diagram:

![The relationship between Profile and other Experience Platform services.](images/profile-overview/profile-in-platform.png) 

### Profiles and record data

A profile is a representation of a subject, an organization or an individual, also referred to as record data. For example, the profile of a product may include a SKU and description, whereas the profile of a person contains information like first name, last name, and email address. Using [!DNL Experience Platform], you can customize profiles to use types of data relevant to your business. The standard [!DNL Experience Data Model] (XDM) [!DNL Individual Profile] class is the preferred class upon which to build a schema when describing customer record data, and supplies the data integral to many interactions between Platform services. For more information on working with schemas in [!DNL Experience Platform], please begin by reading the [XDM System overview](../xdm/home.md).

### Time series events

Time series data provides a snapshot of the system at the time an action was taken either directly or indirectly by a subject, as well as data detailing the event itself. Represented by the standard schema class XDM ExperienceEvent, time series data can describe events such as items being added to a cart, links being clicked, and videos viewed. Time series data can be used to base segmentation rules on, and events can be accessed individually in the context of a profile. 

### Identities

Every business wants to communicate with their customers in a way that feels personal. However, one of the challenges of delivering relevant digital experiences to customers is understanding how to tie their disconnected data together, which is often spread across different digital channels such as tablets, mobile phones and laptops. [!DNL Identity Service] allows you to piece together the complete picture of your customer by linking identities from multiple channels, creating an identity graph for each customer, allowing you to better understand them. Visit the [Identity Service overview](../identity-service/home.md) for more information.

### Segmentation

Adobe Experience Platform [!DNL Segmentation Service] produces the audiences needed to power experiences for your individual customers. When an audience segment is created, the ID of that segment is added to the list of segment memberships for all qualifying profiles. Segment rules are built and applied to [!DNL Real-time Customer Profile] data using RESTful APIs and the Segment Builder user interface. To learn more about segmentation, please begin by reading the [Segmentation Service overview](../segmentation/home.md). 

### Profile fragments and union schemas {#profile-fragments-and-union-schemas}

One of the key features of [!DNL Real-time Customer Profile] is the ability to unify multi-channel data. When [!DNL Real-time Customer Profile] is used to access an entity, it can supply you with a merged view of all profile fragments for that entity across datasets, referred to as the union view and made possible through what is known as a union schema. [!DNL Real-time Customer Profile] data is merged across sources when an entity or profile is accessed by its ID or exported as a segment. To learn more about accessing profiles and union views using the [!DNL Real-time Customer Profile] API, visit the [entities endpoint guide](api/entities.md).

### Merge policies

When bringing data together from multiple sources and combining it in order to see a complete view of each of your individual customers, merge policies are the rules that [!DNL Platform] uses to determine how data will be prioritized and what data will be combined to create that unified view. Using RESTful APIs or the user interface, you can create new merge policies, manage existing policies, and set a default merge policy for your organization. For more information on working with merge policies using the [!DNL Real-time Customer Profile] API, please see the [merge policies endpoint guide](api/merge-policies.md). To work with merge policies using the [!DNL Experience Platform] UI, refer to the [merge policies user guide](ui/merge-policies.md). 

### (Alpha) Configure computed attributes

>[!IMPORTANT]
>
>The computed attribute functionality outlined in this document is in alpha. The documentation and the functionality are subject to change.

Computed attributes enable you to automatically compute the value of fields based on other values, calculations, and expressions. Computed attributes operate on the profile level, meaning you can aggregate values across all records and events. Each computed attribute contains an expression, or "rule", that evaluates incoming data and stores the resulting value in a profile attribute or into an event. These computations help you to easily answer questions related to things like lifetime purchase value, time between purchases, or number of application opens, without requiring you to manually perform complex calculations each time the information is needed. For more information on computed attributes, and step-by-step instructions for working with them using the [!DNL Real-time Customer Profile] API, please see the [computed attributes endpoint guide](api/computed-attributes.md). This guide will help you better understand the role computed attributes play within Adobe Experience Platform, and it includes sample API calls for performing basic CRUD operations.

## Real-time components

This section introduces the components that allow [!DNL Real-time Customer Profile] to update and monitor record and time series data in real-time.
  
### Streaming ingestion and streaming segmentation

Real-time input is made possible through a process called streaming ingestion. As profile and time series data is ingested, [!DNL Real-time Customer Profile] automatically decides to include or exclude that data from segments through an ongoing process called streaming segmentation, before merging it with existing data and updating the union view. As a result, you can instantaneously perform computations and make decisions to deliver enhanced, individualized experiences to customers as they interact with your brand. While being ingested, the data also undergoes validation to ensure it being ingested properly and conforming to the schema upon which the dataset is based. For more information about what validation is done during ingestion, please begin by reading the [data ingestion quality overview](../ingestion/quality/overview.md).

### Edge projection configurations and destinations

In order to drive coordinated, consistent, and personalized experiences for your customers across multiple channels in real-time, the right data needs to be readily available and continuously updated as changes happen. Adobe Experience Platform enables this real-time access to data through the use of what are known as edges. An edge is a geographically placed server that stores data and makes it readily accessible to applications. For example, Adobe applications such as Adobe Target and Adobe Campaign use edges in order to provide personalized customer experiences in real-time. Data is routed to an edge by a projection, with a projection destination defining the edge to which data will be sent, and a projection configuration defining the specific information that will be made available on the edge. To learn more and begin working with projections using the [!DNL Real-time Customer Profile] API, refer to the [edge projection endpoints guide](api/edge-projections.md). 

## Add data to [!DNL Real-time Customer Profile]

[!DNL Platform] can be configured to send your record and time-series data to [!DNL Profile], supporting real-time streaming ingestion and batch ingestion. For more information, see the tutorial outlining how to [add data to Real-time Customer Profile](tutorials/add-profile-data.md). 

>[!NOTE]
>
>Data collected through Adobe solutions, including [!DNL Analytics Cloud], [!DNL Marketing Cloud], and [!DNL Advertising Cloud], flows into [!DNL Experience Platform] and is ingested into [!DNL Profile].

### [!DNL Profile] ingestion metrics

Observability Insights allows you to expose key metrics in Adobe Experience Platform. In addition to [!DNL Platform] usage statistics and performance indicators for various [!DNL Platform] functionalities, there are specific [!DNL Profile]-related metrics that allow you to gain insight into incoming request rates, successful ingestion rates, ingested record sizes, and more. To learn more, begin by reading the [Observability Insights overview](../observability/home.md), and for a complete list of [!DNL Profile] metrics, see the documentation on [available metrics](../observability/metrics.md).

## [!DNL Data governance] and [!DNL Privacy]

[!DNL Data governance] is a series of strategies and technologies used to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data use. 

As it relates to accessing data, data governance plays a key role within [!DNL Experience Platform] at various levels: 
*   Data usage labeling 
*   Data access policies 
*   Access control on data for marketing actions

[!DNL Data governance] is managed at several points. These include deciding what data is ingested into [!DNL Platform] and what data is accessible after ingestion for a given marketing action. For more information, begin by reading the [data governance overview](../data-governance/home.md).

### Handling opt-out and data privacy requests

[!DNL Experience Platform] enables your customers to send opt-out requests related to the usage and storage of their data within [!DNL Real-time Customer Profile]. For more information on how opt-out requests are handled, please see the documentation on [honoring opt-out requests](../segmentation/honoring-opt-outs.md).

## [!DNL Profile] guidelines

[!DNL Experience Platform] has a series of guidelines to follow in order to effectively use [!DNL Profile].

| Section | Boundary | 
| ------- | -------- |
| [!DNL Profile] union schema | A maximum of **20** datasets can contribute to the [!DNL Profile] union schema. |
| Multi-entity relationships | A maximum of **5** multi-entity relationship can be created. | 
| JSON depth for multi-entity association | The maximum JSON depth is **4**. |
| Time series data | Time-series data is **not** permitted in [!DNL Profile] for non-people entities. |
| Non-people schema relationships | Non-people schema relationships are **not** permitted. |
| Profile fragment | The recommended maximum size of a profile fragment is **10kB**.<br><br> The absolute maximum size of a profile fragment is **1MB**. |
| Non-person entity | The maximum total size for a single non-person entity is **200MB**. |
| Datasets per non-person entity | A maximum of **1** dataset can be associated to a non-person entity. |

<!--
| Section | Boundary | Enforcement |
| ------- | -------- | ----------- |
| Profile union schema | A maximum of **20** datasets can contribute to the Profile union schema. | A message stating you've reached the maximum number of datasets appears. You must either disable or clean up other obsolete datasets in order to create a new dataset. |
| Multi-entity relationships | A maximum of **5** multi-entity relationship can be created. | A message stating all available mappings have been used appears when the fifth relationship is mapped. An error message letting you know you have exceeded the number of available mappings appears when attempting to map a sixth relationship. | 
| JSON depth for multi-entity association | The maximum JSON depth is **4**. | When trying to use the relationship selector with a field that is more than four levels deep, an error message appears, stating it is ineligible for multi-entity association. |
| Time series data | Time-series data is **not** permitted in Profile for non-people entities. | A message stating that this data cannot be enabled for Profile because it is of an unsupported type appears. |
| Non-people schema relationships | Non-people schema relationships are **not** permitted. | Relationships between two non-people schemas cannot be created. The relationships checkbox will be disabled. |
| Profile fragment | The recommended maximum size of a profile fragment is **10kB**.<br><br> The absolute maximum size of a profile fragment is **1MB**. | If you upload a fragment that is larger than 10kB, a warning appears, stating that performance may be degraded since the fragment exceeds the recommended maximum working size.<br><br> If you upload a fragment that is larger than 1MB, ingestion will fail, and an alert letting you know that records have failed will be sent. |
| Non-person entity | The maximum total size for a single non-person entity is **200MB**. | If you load an object as a non-person entity that is larger than 200MB, an alert will appear, stating that the entity has exceeded the maximum allowable size and will not be useable for segmentation. |
| Datasets per non-person entity | A maximum of **1** dataset can be associated to a non-person entity. | If you try to create a second dataset that is associated to the same non-person entity, an error appears, stating that only one dataset can be active per non-person entity. |

--->

>[!NOTE]
>
>A non-person entity refers to any XDM class that is **not** part of [!DNL Profile].

## Next steps and additional resources

To learn more about [!DNL Real-time Customer Profile], please continue reading the documentation and supplement your learning by watching the video below or exploring other [Experience Platform video tutorials](https://docs.adobe.com/content/help/en/platform-learn/tutorials/overview.html).

>[!WARNING]
>
>The [!DNL Platform] UI shown in the following video is out of date. Please refer to the [Real-time Customer Profile user guide](ui/user-guide.md) for the latest UI screenshots and functionality. 

>[!VIDEO](https://video.tv.adobe.com/v/27251?quality=12)