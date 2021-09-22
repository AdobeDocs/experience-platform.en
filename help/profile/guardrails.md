---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;guardrails;guidelines;limit;entity;primary entity;dimension entity;
title: Guardrails for Real-time Customer Profile Data
solution: Experience Platform
product: experience platform
type: Documentation
description: Adobe Experience Platform provides a series of guardrails to help you avoid creating data models which Real-time Customer Profile cannot support. This document outlines best practices and constraints to keep in mind when modeling Profile data.
exl-id: 33ff0db2-6a75-4097-a9c6-c8b7a9d8b78c
---
# Guardrails for [!DNL Real-time Customer Profile] data

[!DNL Real-time Customer Profile] provides individual profiles that enable you to deliver personalized cross-channel experiences based on behavioral insights and customer attributes. In order to achieve this targeting, [!DNL Profile], and the segmentation engine within Adobe Experience Platform use a highly denormalized hybrid data model which offers a new approach to developing customer profiles. Use of this hybrid data model makes it important that the data being collected is modeled correctly. While the [!DNL Profile] data store maintaining profile data is not a relational store, [!DNL Profile] permits integration with small dimension entities in order to create segments in a simplified and intuitive manner. This integration is known as multi-entity segmentation. 

Adobe Experience Platform provides a series of guardrails to help you avoid creating data models which [!DNL Real-time Customer Profile] cannot support. This document outlines these guardrails and best practices and constraints when using Profile data for segmentation. 

>[!NOTE]
>
>The guardrails and limits outlined in this document are constantly being improved. Please check back regularly for updates.

## Getting started

It is recommended that you read the following Experience Platform services documentation before attempting to build data models for use in [!DNL Real-time Customer Profile]. Working with data models, and the guardrails outlined in this document, require an understanding of the various Experience Platform services involved with managing [!DNL Real-time Customer Profile] entities: 

* [[!DNL Real-time Customer Profile]](home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
* [Adobe Experience Platform Identity Service](../identity-service/home.md): Supports the creation of a "single view of the customer" by bridging identities from disparate data sources as they are ingested into [!DNL Platform].
* [[!DNL Experience Data Model (XDM)]](../xdm/home.md): The standardized framework by which Platform organizes customer experience data.
  * [Basics of schema composition](../xdm/schema/composition.md): An introduction to schemas and data modeling within Experience Platform.
* [Adobe Experience Platform Segmentation Service](../segmentation/home.md): The segmentation engine within [!DNL Platform] used to create audience segments from your customer profiles based on customer behaviors and attributes.
  * [Multi-entity segmentation](../segmentation/multi-entity-segmentation.md): A guide to creating segments that integrate dimension entities with profile data.

## Entity types

The [!DNL Profile] store data model consists of two core entity types:

* **Primary entity:** A primary entity, or profile entity, merges data together to form a "single source of truth" for an individual. This unified data is represented using what is known as a "union view". A union view aggregates the fields of all schemas that implement the same class into a single union schema. The union schema for [!DNL Real-time Customer Profile] is a denormalized hybrid data model that acts as a container for all profile attributes and behavioral events. 

  Time-independent attributes, also known as "record data" are modeled using [!DNL XDM Individual Profile], while time-series data, also known as "event data" is modeled using [!DNL XDM ExperienceEvent]. As record and time-series data is ingested in Adobe Experience Platform, it triggers [!DNL Real-time Customer Profile] to begin ingesting data that has been enabled for its use. The more interactions and details that are ingested, the more robust individual profiles become.

  ![](images/guardrails/profile-entity.png) 

* **Dimension entity:** Your organization may also define XDM classes to describe things other than individuals, such as stores, products, or properties. These non-[!DNL XDM Individual Profile] schemas are known as "dimension entities" and do not contain time-series data. Dimension entities provide lookup data which aids and simplifies multi-entity segment definitions and must be small enough that the segmentation engine can load the entire data set into memory for optimal processing (fast point lookup).

  ![](images/guardrails/profile-and-dimension-entities.png)

## Limit types

When defining your data model, it is recommended to stay within the provided guardrails to ensure proper performance and avoid system errors. 

The guardrails provided in this document include two limit types:

* **Soft limit:** A soft limit provides a recommended maximum for optimal system performance. It is possible to go beyond a soft limit without breaking the system or receiving error messages, however going beyond a soft limit will result in performance degradation. It is recommended to stay within the soft limit to avoid decreases in overall performance.

* **Hard limit:** A hard limit provides an absolute maximum for the system. Going beyond a hard limit will result in breakages and errors, preventing the system from functioning as expected.

## Profile fragments

In this document, there are several guardrails that refer to "profile fragments." In Experience Platform, multiple profile fragments are merged together to form the Real-time Customer Profile. Each fragment represents a unique primary identity and the corresponding record or event data for that ID within a given dataset. To learn more about profile fragments, refer to the [Profile overview](home.md#profile-fragments-vs-merged-profiles).

## Data model guardrails

Adhering to the following guardrails is recommended when creating a data model for use with [!DNL Real-time Customer Profile].

### Primary entity guardrails

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
| Number of Profile-enabled datasets | 20 | Soft | **A maximum of 20 datasets may contribute to the [!DNL Profile] union schema.** To enable another dataset for [!DNL Profile], an existing dataset should first be removed or disabled. The 20 dataset limit includes datasets from other Adobe solutions (for example, Adobe Analytics).|
|Number of Adobe Analytics report suite datasets enabled for Profile| 1 | Soft | **A maximum of one (1) Analytics report suite dataset should be enabled for Profile.** Attempting to enable multiple Analytics report suite datasets for Profile may have unintended consequences to data quality. For more information, see the section on [Adobe Analytics datasets](#aa-datasets) in the Appendix to this document.|
| Number of multi-entity relationships recommended| 5 | Soft | **A maximum of 5 multi-entity relationships defined between primary entities and dimension entities is recommended.** Additional relationship mappings should not be made until an existing relationship is removed or disabled. | 
| Maximum JSON depth for ID field used in multi-entity relationship| 4 | Soft | **The recommended maximum JSON depth for an ID field used in multi-entity relationships is 4.** This means that in a highly nested schema, fields that are nested more than 4 levels deep should not be used as an ID field in a relationship.|
|Array cardinality in a profile fragment|<=500|Soft|**The optimal array cardinality in a profile fragment (time-independent data) is <=500.**|
|Array cardinality in ExperienceEvent|<=10|Soft|**The optimal array cardinality in an ExperienceEvent (time series data) is <=10.**|
|Identity count limit for individual profile Identity Graph | 50 | Hard | **The maximum number of identities in an Identity Graph for an individual profile is 50.** Any profiles with more than 50 identities are excluded from segmentation, exports, and lookups.| 

### Dimension entity guardrails

| Guardrail | Limit | Limit Type | Description |
| --- | --- | --- | --- |
| No time-series data permitted for non-[!DNL XDM Individual Profile] entities| 0 | Hard | **Time-series data is not permitted for non-[!DNL XDM Individual Profile] entities in Profile Service.** If a time-series dataset is associated with a non-[!DNL XDM Individual Profile] ID, the dataset should not be enabled for [!DNL Profile]. |
| No nested relationships | 0 | Soft | **You should not create a relationship between two non-[!DNL XDM Individual Profile] schemas.** The ability to create relationships is not recommended for any schemas which are not part of the [!DNL Profile] union schema.|
| Maximum JSON depth for primary ID field | 4 | Soft | **The recommended maximum JSON depth for the primary ID field is 4.** This means that in a highly nested schema, you should not select a field as a primary ID if it is nested more than 4 levels deep. A field that is on the 4th nested level can be used as a primary ID.|

## Data size guardrails

The following guardrails refer to data size and are recommended to ensure that data can be ingested, stored, and queried as intended. 

>[!NOTE]
>
>Data size is measured as uncompressed data in JSON at time of ingestion.

### Primary entity guardrails

| Guardrail | Limit| Limit Type | Description|
| --- | --- | --- | --- |
| Maximum ExperienceEvent size | 10KB | Hard | **The maximum size of an event is 10KB.** Ingestion will continue, however any events larger than 10KB will be dropped.|
| Maximum profile record size | 100KB | Hard | **The maximum size of a profile record is 100KB.** Ingestion will continue, however profile records larger than 100KB will be dropped.|
| Maximum profile fragment size across all datasets | 50MB | Hard | **The maximum size of a profile fragment across all datasets is 50MB.** Segmentation, exports, and lookups may fail for any [profile fragment](#profile-fragments) that is larger than 50MB across all datasets. In other words, the sum of a unique primary identity fragment, across all datasets cannot exceed 50MB. |
| Maximum profile storage size | 50MB | Soft | **The maximum size of a stored profile is 50MB.** Adding new [profile fragments](#profile-fragments) into a profile that is larger than 50MB will affect system performance. In other words, if a profile contained a single fragment that was 50MB, adding additional fragments would affect system performance.|
| Number of Profile or ExperienceEvent batches ingested per day | 90 | Soft | **The maximum number of Profile or ExperienceEvent batches ingested per day is 90.** This means that the combined total of Profile and ExperienceEvent batches ingested each day cannot exceed 90. Ingesting additional batches will affect system performance.|

### Dimension entity guardrails

| Guardrail | Limit | Limit Type | Description|
| --- | --- | --- | --- |
| Maximum total size for all dimensional entities | 5GB | Soft | **The maximum recommended total size for all dimensional entities is 5GB.** Ingesting large dimension entities will result in degraded system performance. For example, attempting to load a 10GB product catalog as a dimension entity is not recommended.|
| Datasets per dimensional entity schema | 5 | Soft | **A maximum of 5 datasets associated with each dimensional entity schema is recommended.** For example, if you create a schema for "products" and add five contributing datasets, you should not create a sixth dataset tied to the products schema.|
|Number of dimension entity batches ingested per day |4 per entity|Soft|**The maximum number of dimension entity batches ingested per day is 4 per entity.** For example, you could ingest updates to a product catalog up to 4 times per day. Ingesting additional dimension entity batches for the same entity will affect system performance.|

## Segmentation guardrails

The guardrails outlined in this section refer to the number and nature of segments an organization can create within Experience Platform, as well as mapping and activating segments to destinations.

| Guardrail | Limit | Limit Type | Description|
| --- | --- | --- | --- |
| Maximum number of segments per sandbox | 10K | Soft | **The maximum number of segments an organization can create is 10K per sandbox.** An organization can have more than 10K segments in total, as long as there are less than 10,000 segments in each individual sandbox. Attempting to create additional segments will result in degraded system performance.|
| Maximum number of streaming segments per sandbox | 500 | Soft | **The maximum number of streaming segments an organization can create is 500 per sandbox.** An organization can have more than 500 streaming segments in total, as long as there are less than 500 streaming segments in each individual sandbox. Attempting to create additional streaming segments will result in degraded system performance.|
| Maximum number of batch segments per sandbox | 10K | Soft | **The maximum number of batch segments an organization can create is 10K per sandbox.** An organization can have more than 10K batch segments in total, as long as there are less than 10,000 batch segments in each individual sandbox. Attempting to create additional batch segments will result in degraded system performance.|

## Appendix

This section provides additional details for individual guardrails.

## Adobe Analytics report suite datasets in Platform {#aa-datasets}

A maximum of one (1) Adobe Analytics report suite dataset should be enabled for Profile. This is a soft limit, meaning that you are able to enable more than one Analytics dataset for Profile, but it is not recommended as it may have unintended consequences for your data. This is due to the differences between Experience Data Model (XDM) schemas, which provide the semantic structure for data in Experience Platform and allow for consistency in data interpretation, and the customizable nature of eVars and conversion variables in Adobe Analytics. 

For example, in Adobe Analytics a single organization may have multiple report suites. If report suite A designates eVar 4 as "internal search term" and report suite B designates eVar 4 as "referring domain", these values will both be ingested into the same field in Profile, causing confusion and degrading data quality.
