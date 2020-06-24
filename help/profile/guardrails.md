---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
solution: Adobe Experience Platform
title: Experience Platform guidelines
topic: guide
---

# Platform guardrails for Real-time Customer Profile

Adobe Experience Platform provides a series of guardrails to help you avoid creating data models which Real-time Customer Profile cannot support.

## Getting started

It is recommended that you read the following Experience Platform services documentation before attempting to build data models for use in Real-time Customer Profile. Working data models, and the guardrails outlined in this document, requires an understanding of the various Experience Platform services involved with managing Real-time Customer Profile entities: 

* [Real-time Customer Profile](../home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
* [Identity Service](../../identity-service/home.md): Enables Real-time Customer Profile by bridging identities from disparate data sources as they are ingested into Platform.
* [Experience Data Model (XDM)](../../xdm/home.md): The standardized framework by which Platform organizes customer experience data.

## Entity types

Real-time Customer Profile utilizes a highly-denormalized hybrid data model that consists of two core entity types:

* **Primary entity:** A primary entity, or Profile entity, merges data together to form a "single source of truth" for an individual. This unified data is represented using what is known as a "union view". A union view aggregates the fields of all schemas that implement the same class into a single union schema. The union schema for Real-time Customer Profile is a denormalized hybrid data model that acts as a container for all profile attributes and behavioral events. 

  As XDM Individual Profile and XDM ExperienceEvent data is ingested and managed by Catalog, it triggers Real-time Customer Profile to begin ingesting data that has been enabled for its use. The more interactions and details that are ingested, the more robust individual profiles become.

  ![](images/guardrails/profile-entity.png) 

* **Dimension entity:** Your organization may also define XDM classes to describe things other than individuals, such as stores, products, or properties. These non-people schemas are known as "dimension entities" and do not contain time-series data. They must also be small enough that the segmentation engine powered by Adobe Experience Platform Segmentation Service can load the entire data set into memory for optimal processing through a fast point lookup.

  ![](images/guardrails/profile-and-dimension-entities.png)

## Limit types

When defining XDM schemas, it is recommended to stay within the provided guardrails to ensure proper performance and avoid system errors. The guardrails provided in this document include two limit types:

* **Soft limit:** A soft limit means that it is possible to go beyond the limit without breaking the system or receiving error messages, however going beyond a soft limit will result in performance degradation. It is recommended to stay within the soft limit to avoid decreases in overall performance.

* **Hard limit:** A hard limit should be considered an absolute maximum for the system. Going beyond a hard limit will result in system breakages and error messages, preventing the system from functioning as expected.

## Data model guardrails

Adhering to the following guardrails is recommended when creating an XDM schema for use with Real-time Customer Profile.

### Primary entity Guardrails

| Guardrail | Boundary | Limit Type | Description |
| --- | --- | --- | --- |
| Number of datasets permitted to contribute to the Profile union schema | 20 |  | **A maximum of 20 profile-enabled datasets are permitted.** To enable another dataset for profile, an existing dataset must first be removed or disabled.|
| Number of multi-entity relationships permitted| 5 |  | **A maximum of 5 multi-entity relationships can be defined between primary entities and dimension entities.** Additional relationship mappings cannot be saved until an existing relationship is removed or disabled. | 
| Maximum JSON depth for ID field used in multi-entity relationship| 4 | | **The maximum JSON depth for an ID field used in multi-entity relationships is 4.** This means that in a highly-nested schema, the relationship selector is disabled for fields that are nested more than 4 levels deep. |

### Dimension entity Guardrails

| Guardrail | Boundary | Limit Type | Description |
| --- | --- | --- | --- |
| No time-series data permitted in profile for non-people entities| 0 | | **Time-series data is not permitted in Profile for non-people entities.** If a time-series dataset is associated with a non-people ID, the dataset cannot be enabled for Profile. |
| No nested relationships permitted | 0 | | **You cannot create a relationship between two non-people schemas.** The ability to create relationships is not supported for any schemas which are not part of the Profile union schema.
| Maximum JSON depth for primary ID field | 4 | | **The maximum JSON depth for the primary ID field is 4.** This means that in a highly-nested schema, you cannot select a field as a primary ID if it is nested more than 4 levels deep. A field that is on the 4th nested level can be used as a primary ID.  |

## Data size guardrails

The following guardrails refer to data size and are recommended to ensure data can be ingested, stored, and queried as intended.

### Primary entity guardrails

| Guardrail | Boundary | Limit Type | Description|
| --- | --- | --- | --- |
| Maximum size per profile fragment | 10KB | Soft | **The recommended maximum size of a profile fragment is 10kB.** Ingesting larger profile fragments will affect system performance. For example, loading a heavy CRM dataset where some profile fragments are 50kB in size will result in degraded system performance.|
| Absolute maximum size per profile fragment | 1MB | Hard | **The absolute maximum size of a profile fragment is 1MB.** Ingestion will fail when attempting to upload a profile fragment that is larger than 1MB. |

### Dimension entity guardrails

| Guardrail | Boundary | Limit Type | Description|
| --- | --- | --- | --- |
| Maximum total size for a single dimension entity | 200MB | | **The maximum total size for a single non-person entity is 200MB.** Ingesting larger dimension entities will result in degraded system performance.|
| Datasets per dimensional entity schema | 1 | | **A maximum of 1 dataset can be associated with each dimensional entity schema.** For example, if you create a schema for "products" and add a contributing dataset, you are unable to create a second dataset tied to the products schema. |