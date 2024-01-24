---
keywords: profile;real-time customer profile;troubleshooting;guardrails;guidelines;limit;entity;primary entity;dimension entity;RTCDP;CDP;B2B Edition;Real-Time Customer Data Platform;real time customer data platform;real time cdp;b2b;cdp;
title: Default Guardrails for Real-Time Customer Data Platform B2B Edition
type: Documentation
description: Adobe Experience Platform uses a highly denormalized hybrid data model that differs from the traditional relational data model. This document provides default use and rate limits to help you model your data for optimal system performance using Adobe Real-Time Customer Data Platform B2B Edition.
badgeB2B: label="B2B Edition" type="Informative" url="https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2b-edition-prime-and-ultimate-packages.html newtab=true"
feature: Guardrails, B2B
exl-id: 8eff8c3f-a250-4aec-92a1-719ce4281272
---
# Default Guardrails for Real-Time Customer Data Platform B2B Edition

>[!NOTE]
>
>The limits outlined in this document represent the changes enabled by Real-Time Customer Data Platform B2B Edition. For a complete list of default limits for Real-Time CDP B2B Edition, combine these limits with the general Adobe Experience Platform limits outlined in the [guardrails for Real-Time Customer Profile data documentation](../profile/guardrails.md).

Real-Time Customer Data Platform B2B Edition enables you to deliver personalized cross-channel experiences based on behavioral insights and customer attributes in the form of Real-Time Customer Profiles and Account Profiles. To support this new approach to profiles, Experience Platform uses a highly denormalized hybrid data model that differs from the traditional relational data model.

This document provides default use and rate limits to help you model your data for optimal system performance. When reviewing the following guardrails, it is assumed that you have modeled the data correctly. If you have questions on how to model your data, please contact your customer service representative.

>[!INFO]
>
>Most customers do not exceed these default limits. If you would like to learn about custom limits, please contact your customer care representative.

## Limit types

There are two types of default limits within this document:

| Guardrail type | Description |
| -------------- | ----------- |
| **Performance guardrail (Soft limit)** | Performance guardrails are usage limits that relate to the scoping of your use cases. When exceeding performance guardrails, you may experience performance degradation and latency. Adobe is not responsible for such performance degradation. Customers who consistently exceed a performance guardrail may elect to license additional capacity to avoid performance degradation.|
| **System-enforced guardrails (Hard limit)** | System-enforced guardrails are enforced by the Real-Time CDP UI or API. These are limits that you cannot exceed as the UI and API will block you from doing so or will return an error.|

>[!INFO]
>
>The limits outlined in this document are constantly being improved. Please check back regularly for updates. If you are interested in learning about custom limits, please contact your customer care representative.

## Data model limits

The following guardrails provide recommended limits when modeling Real-Time Customer Profile data. To learn more about primary entities and dimension entities, see the section on [entity types](#entity-types) in the Appendix.

### Primary entity guardrails

>[!NOTE]
>
>The data model limits outlined in this section represent the changes enabled by Real-Time Customer Data Platform B2B Edition. For a complete list of default limits for Real-Time CDP B2B Edition, combine these limits with the general Adobe Experience Platform limits outlined in the [guardrails for Real-Time Customer Profile data documentation](../profile/guardrails.md).

| Guardrail | Limit | Limit Type | Description |
| --------- | ----- | ---------- | ----------- |
| Real-Time CDP B2B Edition standard XDM class datasets | 60 | Performance guardrail| A maximum of 60 datasets that leverage the standard Experience Data Model (XDM) classes provided by Real-Time CDP B2B Edition is recommended. For a complete list of standard XDM classes for B2B use cases, refer to the [schemas in Real-Time CDP B2B Edition documentation](schemas/b2b.md). <br/><br/>*Note: Due to the nature of Experience Platform's denormalized hybrid data model, most customers do not exceed this limit. For questions about how to model your data, or if you would like to learn more about custom limits, please contact your customer care representative.* |
| Identity count for individual account in an Identity Graph | 50 | Performance guardrail | The maximum number of identities in an Identity Graph for an individual account is 50. Any profiles with more than 50 identities are excluded from segmentation, exports, and lookups. | 
| Legacy multi-entity relationships| 20 | Performance guardrail | A maximum of 20 multi-entity relationships defined between primary entities and dimension entities is recommended. Additional relationship mappings should not be made until an existing relationship is removed or disabled. | 
| Many-to-one relationships per XDM class | 2 | Performance guardrail | A maximum of 2 many-to-one relationships defined per XDM class is recommended. Additional relationship should not be made until an existing relationship is removed or disabled. For steps on how to create a relationship between two schemas, refer to the tutorial on [defining B2B schema relationships](../xdm/tutorials/relationship-b2b.md). |

### Dimension entity guardrails

>[!NOTE]
>
>The data model limits outlined in this section represent the changes enabled by Real-Time Customer Data Platform B2B Edition. For a complete list of default limits for Real-Time CDP B2B Edition, combine these limits with the general Adobe Experience Platform limits outlined in the [guardrails for Real-Time Customer Profile data documentation](../profile/guardrails.md).

| Guardrail | Limit | Limit Type | Description |
| --------- | ----- | ---------- | ----------- |
| No nested legacy relationships | 0 | Performance guardrail | You should not create a relationship between two non-[!DNL XDM Individual Profile] schemas. Creating relationships is **not** recommended for any schemas which are not part of the [!DNL Profile] union schema. |
| Only B2B objects may participate in many-to-one relationships | 0 | System-enforced guardrail | The system only supports many-to-one relationships between B2B objects. For more information on many-to-one relationships, refer to the tutorial on [defining B2B schema relationships](../xdm/tutorials/relationship-b2b.md). |
| Maximum depth of nested relationships between B2B objects | 3 | System-enforced guardrail | The maximum depth of nested relationships between B2B objects is 3. This means that in a highly nested schema, you should not have a relationship between B2B objects nested more than 3 levels deep. |
| Single schema for each dimension entity | 1 | System-enforced guardrail | Each dimension entity must have a single schema. Attempting to use dimension entities created from more than one schema may impact segmentation results. Different dimension entities are expected to have separate schemas. |

## Data size limits

The following guardrails refer to data size and provide recommended limits for data that can be ingested, stored, and queried as intended. To learn more about primary entities and dimension entities, see the section on [entity types](#entity-types) in the Appendix.

>[!INFO]
>
>Data size is measured as uncompressed data in JSON at time of ingestion.

### Primary entity guardrails

>[!NOTE]
>
>The data size limits outlined in this section represent the changes enabled by Real-Time Customer Data Platform B2B Edition. For a complete list of default limits for Real-Time CDP B2B Edition, combine these limits with the general Adobe Experience Platform limits outlined in the [guardrails for Real-Time Customer Profile data documentation](../profile/guardrails.md).

| Guardrail | Limit | Limit Type | Description |
| --------- | ----- | ---------- | ----------- |
| Batches ingested per XDM class per day | 45 | Performance guardrail | The total number of batches ingested each day per XDM class should not exceed 45. Ingesting additional batches may prevent optimal performance. |

### Dimension entity guardrails

>[!NOTE]
>
>The data size limits outlined in this section represent the changes enabled by Real-Time Customer Data Platform B2B Edition. For a complete list of default limits for Real-Time CDP B2B Edition, combine these limits with the general Adobe Experience Platform limits outlined in the [guardrails for Real-Time Customer Profile data documentation](../profile/guardrails.md).

| Guardrail | Limit | Limit Type | Description |
| --------- | ----- | ---------- | ----------- |
| Total size for all dimensional entities | 5GB | Performance guardrail | The recommended total size for all dimensional entities is 5GB. Ingesting large dimension entities may affect system performance. For example, attempting to load a 10GB product catalog as a dimension entity is not recommended. |
| Datasets per dimensional entity schema | 5 | Performance guardrail | A maximum of 5 datasets associated with each dimensional entity schema is recommended. For example, if you create a schema for "products" and add five contributing datasets, you should not create a sixth dataset tied to the products schema. |
| Dimension entity batches ingested per day | 4 per entity |Performance guardrail|The recommended maximum number of dimension entity batches ingested per day is 4 per entity. For example, you could ingest updates to a product catalog up to 4 times per day. Ingesting additional dimension entity batches for the same entity may affect system performance. |

## Segmentation guardrails

The guardrails outlined in this section refer to the number and nature of segments an organization can create within Experience Platform, as well as mapping and activating segments to destinations.

>[!NOTE]
>
>The segmentation limits outlined in this section represent the changes enabled by Real-Time Customer Data Platform B2B Edition. For a complete list of default limits for Real-Time CDP B2B Edition, combine these limits with the general Adobe Experience Platform limits outlined in the [guardrails for Real-Time Customer Profile data documentation](../profile/guardrails.md).

| Guardrail | Limit | Limit Type | Description |
| --------- | ----- | ---------- | ----------- |
| Segment definitions per B2B sandbox | 400 | Performance guardrail | An organization can have more than 400 segment definitions in total, as long as there are less than 400 segment definitions in each individual B2B sandbox. Attempting to create additional segment definitions may affect system performance. |

## Next steps

The limits outlined in this document represent the changes enabled by Real-Time Customer Data Platform B2B Edition. For a complete list of default limits for Real-Time CDP B2B Edition, combine these limits with the general Adobe Experience Platform limits outlined in the [guardrails for Real-Time Customer Profile data documentation](../profile/guardrails.md).

## Appendix

This section provides additional details for the limits in this document.

### Entity types

The [!DNL Profile] store data model consists of two core entity types: [primary entities](#primary-entity) and [dimension entities](#dimension-entity).

#### Primary entity

A primary entity, or profile entity, merges data together to form a "single source of truth" for an individual. This unified data is represented using what is known as a "union view". A union view aggregates the fields of all schemas that implement the same class into a single union schema. The union schema for [!DNL Real-Time Customer Profile] is a denormalized hybrid data model that acts as a container for all profile attributes and behavioral events. 

Time-independent attributes, also known as "record data" are modeled using [!DNL XDM Individual Profile], while time-series data, also known as "event data" is modeled using [!DNL XDM ExperienceEvent]. As record and time-series data is ingested in Adobe Experience Platform, it triggers [!DNL Real-Time Customer Profile] to begin ingesting data that has been enabled for its use. The more interactions and details that are ingested, the more robust individual profiles become.

![An infographic outlining the differences between record data and time-series data.](../profile/images/guardrails/profile-entity.png) 

#### Dimension entity

While the Profile data store maintaining profile data is not a relational store, Profile permits integration with small dimension entities in order to create segments in a simplified and intuitive manner. This integration is known as [multi-entity segmentation](../segmentation/multi-entity-segmentation.md).

Your organization may also define XDM classes to describe things other than individuals, such as stores, products, or properties. These non-[!DNL XDM Individual Profile] schemas are called "dimension entities" (also known as "lookup entities") and do not contain time-series data. Schemas that represent dimension entities are linked to profile entities through the use of [schema relationships](../xdm/tutorials/relationship-ui.md).

Dimension entities provide lookup data which aids and simplifies multi-entity segment definitions and must be small enough that the segmentation engine can load the entire data set into memory for optimal processing (fast point lookup).

![An infographic that shows that a profile entity is comprised of dimension entities.](../profile/images/guardrails/profile-and-dimension-entities.png)
