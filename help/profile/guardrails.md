---
title: Default Guardrails for Real-Time Customer Profile Data and segmentation
solution: Experience Platform
product: experience platform
type: Documentation
description: Learn about performance and system-enforced guardrails for profile data and segmentation to ensure an optimal use of Real-Time CDP functionality.
exl-id: 33ff0db2-6a75-4097-a9c6-c8b7a9d8b78c
---
# Default guardrails for [!DNL Real-Time Customer Profile] data and segmentation

Adobe Experience Platform enables you to deliver personalized cross-channel experiences based on behavioral insights and customer attributes in the form of Real-Time Customer Profiles. To support this new approach to profiles, Experience Platform uses a highly denormalized hybrid data model that differs from the traditional relational data model.

>[!IMPORTANT]
>
>Check your license entitlements in your Sales Order and corresponding [Product Description](https://helpx.adobe.com/legal/product-descriptions.html) on actual usage limits in addition to this guardrails page.

This document provides default use and rate limits to help you model your Profile data for optimal system performance. When reviewing the following guardrails, it is assumed that you have modeled the data correctly. If you have questions on how to model your data, please contact your customer service representative.

>[!NOTE]
>
>Most customers do not exceed these default limits. If you would like to learn about custom limits, please contact your customer care representative.

## Getting started

The following Experience Platform services are involved with modeling Real-Time Customer Profile data: 

* [[!DNL Real-Time Customer Profile]](home.md): Create unified consumer profiles using data from multiple sources.
* [Identities](../identity-service/home.md): Bridge identities from disparate data sources as they are ingested into Experience Platform.
* [Schemas](../xdm/home.md): Experience Data Model (XDM) schemas are the standardized framework by which Experience Platform organizes customer experience data.
* [Audiences](../segmentation/home.md): The segmentation engine within Experience Platform is used to create audiences from your customer profiles based on customer behaviors and attributes.

## Limit types

There are two types of default limits within this document:

| Guardrail type | Description |
| -------------- | ----------- |
| **Performance guardrail (Soft limit)** | Performance guardrails are usage limits that relate to the scoping of your use cases. When exceeding performance guardrails, you may experience performance degradation and latency. Adobe is not responsible for such performance degradation. Customers who consistently exceed a performance guardrail may elect to license additional capacity to avoid performance degradation.|
| **System-enforced guardrails (Hard limit)** | System-enforced guardrails are enforced by the Real-Time CDP UI or API. These are limits that you cannot exceed as the UI and API will block you from doing so or will return an error.|

{style="table-layout:auto"}

>[!NOTE]
>
>The limits outlined in this document are constantly being improved. Please check back regularly for updates. If you are interested in learning about custom limits, please contact your customer care representative.

## Data model limits

The following guardrails provide recommended limits when modeling Real-Time Customer Profile data. To learn more about primary entities and dimension entities, see the section on [entity types](#entity-types) in the Appendix.

![A diagram showing the different guardrails for Profile data in Adobe Experience Platform.](./images/guardrails/profile-guardrails.png)

### Primary entity guardrails

| Guardrail | Limit | Limit Type | Description |
| --------- | ----- | ---------- | ----------- |
| XDM Individual Profile class datasets | 20 | Performance guardrail | A maximum of 20 datasets that leverage the XDM Individual Profile class is recommended. |
| XDM ExperienceEvent class datasets | 20 | Performance guardrail | A maximum of 20 datasets that leverage the XDM ExperienceEvent class is recommended. |
| Adobe Analytics report suite datasets enabled for Profile | 1 | Performance guardrail | A maximum of one (1) Analytics report suite dataset should be enabled for Profile. Attempting to enable multiple Analytics report suite datasets for Profile may have unintended consequences for data quality. For more information, see the section on [Adobe Analytics datasets](#aa-datasets) in the Appendix. |
| Multi-entity relationships | 5 | Performance guardrail | A maximum of 5 multi-entity relationships defined between primary entities and dimension entities is recommended. Additional relationship mappings should not be made until an existing relationship is removed or disabled. | 
| JSON depth for ID field used in multi-entity relationship| 4 | Performance guardrail | The recommended maximum JSON depth for an ID field used in multi-entity relationships is 4. This means that in a highly nested schema, fields that are nested more than 4 levels deep should not be used as an ID field in a relationship.|
| Array cardinality in a profile fragment|<=500|Performance guardrail|The optimal array cardinality in a profile fragment (time-independent data) is <=500. |
| Array cardinality in ExperienceEvent | <=10 | Performance guardrail | The optimal array cardinality in an ExperienceEvent (time series data) is <=10. |
| Identity count for individual profile Identity Graph | 50 | System-enforced guardrail | **The maximum number of identities in an Identity Graph for an individual profile is 50.** Any profiles with more than 50 identities are excluded from segmentation, exports, and lookups. For more information, read the guide on [understanding identity deletion logic](../identity-service/guardrails.md#understanding-the-deletion-logic-when-an-identity-graph-at-capacity-is-updated). | 

{style="table-layout:auto"}

### Dimension entity guardrails

| Guardrail | Limit | Limit Type | Description |
| --------- | ----- | ---------- | ----------- |
| No time-series data permitted for non-[!DNL XDM Individual Profile] entities | 0 | System-enforced guardrail | **Time-series data is not permitted for non-[!DNL XDM Individual Profile] entities in Profile Service.** If a time-series dataset is associated with a non-[!DNL XDM Individual Profile] ID, the dataset should not be enabled for [!DNL Profile]. |
| No nested relationships | 0 | Performance guardrail | You should not create a relationship between two non-[!DNL XDM Individual Profile] schemas. The ability to create relationships is not recommended for any schemas which are not part of the [!DNL Profile] union schema.|
| JSON depth for primary ID field | 4 | Performance guardrail | The recommended maximum JSON depth for the primary ID field is 4. This means that in a highly nested schema, you should not select a field as a primary ID if it is nested more than 4 levels deep. A field that is on the 4th nested level can be used as a primary ID. |

{style="table-layout:auto"}

## Data size limits

The following guardrails refer to data size and provide recommended limits for data that can be ingested, stored, and queried as intended. To learn more about primary entities and dimension entities, see the section on [entity types](#entity-types) in the Appendix.

>[!NOTE]
>
>Data size is measured as uncompressed data in JSON at time of ingestion.

### Primary entity guardrails

| Guardrail | Limit | Limit Type | Description |
| --------- | ----- | ---------- | ----------- |
| Maximum ExperienceEvent size | 10KB | System-enforced guardrail | **The maximum size of an event is 10KB.** Ingestion will continue, however any events larger than 10KB will be dropped.|
| Maximum profile record size | 100KB | System-enforced guardrail | **The maximum size of a profile record is 100KB.** Ingestion will continue, however profile records larger than 100KB will be dropped.|
| Maximum profile fragment size | 50MB | System-enforced guardrail | **The maximum size of a single profile fragment is 50MB.** Segmentation, exports, and lookups may fail for any [profile fragment](#profile-fragments) that is larger than 50MB.|
| Maximum profile storage size | 50MB | Performance guardrail | **The maximum size of a stored profile is 50MB.** Adding new [profile fragments](#profile-fragments) into a profile that is larger than 50MB will affect system performance. For example, a profile could contain a single fragment that is 50MB or it could contain multiple fragments across multiple datasets with a combined total size of 50MB. Attempting to store a profile with a single fragment larger than 50MB, or multiple fragments that total more than 50MB in combined size, will affect system performance.|
| Number of Profile or ExperienceEvent batches ingested per day | 90 | Performance guardrail | **The maximum number of Profile or ExperienceEvent batches ingested per day is 90.** This means that the combined total of Profile and ExperienceEvent batches ingested each day cannot exceed 90. Ingesting additional batches will affect system performance.|
| Number of ExperienceEvents per profile record | 5000 | Performance guardrail | **The maximum number of ExperienceEvents per profile record is 5000.** Profiles with more than 5000 ExperienceEvents will only use the **latest** 5000 ExperienceEvents when used with segmentation. | 

{style="table-layout:auto"}

### Dimension entity guardrails

| Guardrail | Limit | Limit Type | Description |
| --------- | ----- | ---------- | ----------- |
| Total size for all dimensional entities | 5GB | Performance guardrail | The recommended total size for all dimensional entities is 5GB. Ingesting large dimension entities may affect system performance. For example, attempting to load a 10GB product catalog as a dimension entity is not recommended.|
| Datasets per dimensional entity schema | 5 | Performance guardrail | A maximum of 5 datasets associated with each dimensional entity schema is recommended. For example, if you create a schema for "products" and add five contributing datasets, you should not create a sixth dataset tied to the products schema.|
| Dimension entity batches ingested per day | 4 per entity | Performance guardrail | The recommended maximum number of dimension entity batches ingested per day is 4 per entity. For example, you could ingest updates to a product catalog up to 4 times per day. Ingesting additional dimension entity batches for the same entity may affect system performance. |

{style="table-layout:auto"}

## Segmentation guardrails {#segmentation-guardrails}

The guardrails outlined in this section refer to the number and nature of audiences an organization can create within Experience Platform, as well as mapping and activating audiences to destinations.

| Guardrail | Limit | Limit Type | Description |
| --------- | ----- | ---------- | ----------- |
| Audiences per sandbox | 4000 | Performance guardrail | You can have up to 4000 **active** audiences per sandbox. You can have more than 4000 audiences per organization, as long as there are less than 4000 audiences in each **individual** sandbox. This is inclusive of batch, streaming, and edge audiences. Attempting to create additional audiences may affect system performance. Read more about [creating audiences](/help/segmentation/ui/segment-builder.md) through the segment builder.|
| Edge audiences per sandbox | 150 | Performance guardrail | You can have up to 150 **active** edge audiences per sandbox. You can have more than 150 edge audiences per organization, as long as there are less than 150 edge audiences in each **individual** sandbox. Attempting to create additional edge audiences may affect system performance. Read more about [edge audiences](/help/segmentation/methods/edge-segmentation.md).| 
| Edge throughput across all sandboxes | 1500 RPS | Performance guardrail | Edge segmentation supports a peak value of 1500 inbound events per second entering the Adobe Experience Platform Edge Network. Edge segmentation may take up to 350 milliseconds to process an inbound event after it enters the Adobe Experience Platform Edge Network. Read more about [edge audiences](/help/segmentation/methods/edge-segmentation.md). |
| Streaming audiences per sandbox | 500 | Performance guardrail | You can have up to 500 **active** streaming audiences per sandbox. You can have more than 500 streaming audiences per organization, as long as there are less than 500 streaming audiences in each **individual** sandbox. This is inclusive of both streaming and edge audiences. Attempting to create additional streaming audiences may affect system performance. Read more about [streaming audiences](/help/segmentation/methods/streaming-segmentation.md).|
| Streaming throughput across all sandboxes | 1500 RPS | Performance guardrail | Streaming segmentation supports a peak value of 1500 inbound events per second. Streaming segmentation may take up to 5 minutes to qualify a profile for segment membership. Read more about [streaming audiences](/help/segmentation/methods/streaming-segmentation.md). |
| Batch audiences per sandbox | 4000 | Performance guardrail | You can have up to 4000 **active** batch audiences per sandbox. You can have more than 4000 batch audiences per organization, as long as there are less than 4000 batch audiences in each **individual** sandbox. Attempting to create additional batch audiences may affect system performance.|
| Account audiences per sandbox | 50 | System-enforced guardrail | You can create a maximum of 50 account audiences in a sandbox. After you reach 50 audiences in a sandbox, the **[!UICONTROL Create audience]** control is disabled when trying to create a new account audience. Read more about [account audiences](/help/segmentation/types/account-audiences.md). |
| Published compositions per sandbox | 10 | Performance guardrail | You can have a maximum of  10 published compositions in a sandbox. Read more about [audience composition in the UI guide](/help/segmentation/ui/audience-composition.md). |
| Maximum audience size | 30 percent | Performance guardrail | The recommended maximum membership of an audience is 30 percent of the total number of profiles in the system. Creating audiences with more than 30% of the profiles as members or multiple large audiences is possible but will impact system performance. |
| Flexible audience evaluation runs | 50 per year (production sandbox)<br/>100 per year (development sandbox) | System-enforced guardrail | You have a maximum of 50 flexible audience evaluation runs per year per **production** sandbox. You have a maximum of 100 flexible audience evaluation runs per year per **development** sandbox. |
| Flexible audience evaluation runs | 2 per day | System-enforced guardrail | You have a maximum of 2 runs per day per sandbox. |
| Audiences per flexible audience evaluation run | 20 | System-enforced guardrail | You can have a maximum of 20 audiences per flexible audience evaluation run. |

{style="table-layout:auto"}

## Expected availability

The following section outlines the **expected** availability for audiences and merge policies in downstream services such as Real-Time CDP destinations:

| Sandbox type | Time |
| ------------ | ---- |
| Existing sandboxes | 1 hour |
| New sandboxes | 2 hours |
| Newly reset sandboxes | 2 hours |

{style="table-layout:auto"}

## Appendix

This section provides additional details for the limits in this document.

### Entity types

The [!DNL Profile] store data model consists of two core entity types: [primary entities](#primary-entity) and [dimension entities](#dimension-entity).

#### Primary entity

A primary entity, or profile entity, merges data together to form a "single source of truth" for an individual. This unified data is represented using what is known as a "union view". A union view aggregates the fields of all schemas that implement the same class into a single union schema. The union schema for [!DNL Real-Time Customer Profile] is a denormalized hybrid data model that acts as a container for all profile attributes and behavioral events. 

Time-independent attributes, also known as "record data" are modeled using [!DNL XDM Individual Profile], while time-series data, also known as "event data" is modeled using [!DNL XDM ExperienceEvent]. As record and time-series data is ingested in Adobe Experience Platform, it triggers [!DNL Real-Time Customer Profile] to begin ingesting data that has been enabled for its use. The more interactions and details that are ingested, the more robust individual profiles become.

![An infographic outlining the differences between record data and time-series data.](images/guardrails/profile-entity.png) 

#### Dimension entity

While the Profile data store maintaining profile data is not a relational store, Profile permits integration with small dimension entities in order to create audiences in a simplified and intuitive manner. This integration is known as [multi-entity segmentation](../segmentation/tutorials/multi-entity-segmentation.md).

Your organization may also define XDM classes to describe things other than individuals, such as stores, products, or properties. These schemas, which are modeled using XDM classes other than the XDM Individual Profile class, are called "dimension entities" (also known as "lookup entities") and do not contain time-series data. Schemas that represent dimension entities are linked to profile entities through the use of [schema relationships](../xdm/tutorials/relationship-ui.md).

Dimension entities provide lookup data which aids and simplifies multi-entity segment definitions and must be small enough that the segmentation engine can load the entire data set into memory for optimal processing (fast point lookup).

![An infographic that shows that a profile entity is comprised of dimension entities.](images/guardrails/profile-and-dimension-entities.png)

### Profile fragments

In this document, there are several guardrails that refer to "profile fragments." In Experience Platform, multiple profile fragments are merged together to form the Real-Time Customer Profile. Each fragment represents a unique primary identity and the corresponding record or complete set of event data for that ID within a given dataset. To learn more about profile fragments, refer to the [Profile overview](home.md#profile-fragments-vs-merged-profiles).

### Merge policies {#merge-policies}

When bringing data together from multiple sources, merge policies are the rules that Experience Platform uses to determine how data will be prioritized and what data will be combined to create that unified view. For example, if a customer interacts with your brand across several channels, your organization will have multiple profile fragments related to that single customer appearing in multiple datasets. When these fragments are ingested into Experience Platform, they are merged together in order to create a single profile for that customer. When the data from multiple sources conflicts the merge policy determines which information to include in the profile for the individual. A maximum of five (5) merge policies that use the `_xdm.context.profile` schema are allowed per sandbox. To learn more about merge policies, please read the [merge policies overview](merge-policies/overview.md).

### Adobe Analytics report suite datasets in Experience Platform {#aa-datasets}

Multiple report suites can be enabled for Profile as long as all data conflicts are resolved. You can use the Data Prep functionality to resolve data conflicts across eVars, Lists, and Props. To learn more about how to use the Data Prep functionality, please read the [Adobe Analytics connector UI guide](../sources/tutorials/ui/create/adobe-applications/analytics.md). 

## Next steps

See the following documentation for more information on other Experience Platform services guardrails, on end-to-end latency information, and licensing information from Real-Time CDP Product Description documents:

* [Real-Time CDP guardrails](/help/rtcdp/guardrails/overview.md)
* [End-to-end latency diagrams](https://experienceleague.adobe.com/docs/blueprints-learn/architecture/architecture-overview/deployment/guardrails.html?lang=en#end-to-end-latency-diagrams) for various Experience Platform services.
* [Real-Time Customer Data Platform (B2C Edition - Prime and Ultimate Packages)](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2c-edition-prime-and-ultimate-packages.html)
* [Real-Time Customer Data Platform (B2P - Prime and Ultimate Packages)](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2p-edition-prime-and-ultimate-packages.html)
* [Real-Time Customer Data Platform (B2B - Prime and Ultimate Packages)](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2b-edition-prime-and-ultimate-packages.html)
