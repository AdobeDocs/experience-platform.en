---
keywords: Experience Platform;data mirror;relational schema;change data capture;database sync;primary key;relationships
solution: Experience Platform
title: Data Mirror overview
description: Learn how Data Mirror enables row-level change ingestion from external databases into Adobe Experience Platform using relational schemas with enforced uniqueness, relationships, and versioning.
badge: Limited Availability
exl-id: bb92c77a-6c7a-47df-885a-794cf55811dd
---
# Data Mirror overview

>[!AVAILABILITY]
>
>Data Mirror and relational schemas are available to Adobe Journey Optimizer **Orchestrated campaigns** license holders. They are also available as a **limited release** for Customer Journey Analytics users, depending on your license and feature enablement. Contact your Adobe representative for access.

Data Mirror is an Adobe Experience Platform capability that enables row-level change ingestion from external databases into the data lake using relational schemas. It preserves data relationships, enforces uniqueness, and supports versioning without requiring upstream extract, transform, load (ETL) processes.

Use Data Mirror to synchronize inserts, updates, and deletes (mutable data) from external systems such as [!DNL Snowflake], [!DNL Databricks], or [!DNL BigQuery] directly into Experience Platform. This helps you preserve your existing database model structure and data integrity as you bring data into Platform.

## Capabilities and benefits

Data Mirror provides the following essential capabilities for database synchronization:

* **Primary key enforcement**: Ensures uniqueness within datasets and prevents duplicate records during ingestion.
* **Row-level change ingestion**: Supports granular data changes including upserts and deletes with precision control.
* **Schema relationships**: Enables foreign and primary key relationships between datasets through descriptors.
* **Out-of-order event handling**: Processes change events using version and timestamp descriptors, even when they arrive out of sequence.
* **Direct warehouse integration**: Connects with supported cloud data warehouses for near real-time change synchronization.

Use Data Mirror to ingest changes directly from your source systems, enforce schema integrity, and make the data available for analytics, journey orchestration, and compliance workflows. Data Mirror eliminates complex upstream ETL processes and accelerates implementation by enabling direct mirroring of existing database models.

Plan for deletion and data hygiene requirements when implementing relational schemas with Data Mirror. All applications must consider how deletions affect related datasets, compliance workflows, and downstream processes before deployment.

## Prerequisites {#prerequisites}

Before getting started, you should understand the following components of Experience Platform and confirm your environment meets the technical and structural requirements:

* [Create schemas in Experience Platform UI](../ui/resources/schemas.md) or [API](../api/schemas.md)
* [Configure cloud source connections](../../sources/home.md#cloud-storage)
* [Apply change data capture concepts](../../sources/tutorials/api/change-data-capture.md) (upserts, deletes)
* Distinguish between [standard](../schema/composition.md) and [relational schemas](../schema/relational.md)
* [Define structural relationships with descriptors](../api/descriptors.md)

### Implementation requirements

Your Platform instance and source data must meet specific requirements for Data Mirror to function properly. Data Mirror requires **relational schemas**, which are flexible data structures with enforced constraints. 

Include a **primary key and version descriptor** in all schemas. If you're working with a time-series schema, a **timestamp descriptor** is also required.

Your external database must support change data capture or provide metadata that identifies inserts, updates, and deletes. Source data must include **unique identifiers**, either a single field or a composite primary key and **version information** so the system can apply updates in the correct order.

To detect deletes, add a `_change_request_type` column that specifies whether each record is an upsert or a delete.

## Implement Data Mirror {#implementation-workflow}

Unlike standard ingestion approaches, Data Mirror preserves your database model structure within the Experience Platform data lake. This data structure consistency eliminates the need for external preprocessing. The following is a high level Data Mirror implementation workflow. Choose your implementation method based on your team's workflow and source system.

### Define your schema structure

Create [relational schemas](../schema/relational.md) with required descriptors (metadata that define schema behavior and constraints). Choose a method that fits your team's workflow, either through the UI or directly through the API.

* **UI approach**: [Create relational schemas in the Schema Editor](../ui/resources/schemas.md#create-relational-schema)
* **API approach**: [Create schemas via Schema Registry API](../api/schemas.md#create-relational-schema)
  
### Map relationships and define data management

Define connections between datasets using relationship descriptors. Manage relationships and maintain data quality across datasets. These tasks ensure consistent joins and support compliance with data hygiene requirements.

* **Schema relationships**: [Define relationships between datasets using descriptors](../api/descriptors.md)
* **Record hygiene**: [Manage precision record deletes for datasets based on relational schemas](../../hygiene/ui/record-delete.md#relational-record-delete)

### Configure your source connection

Select an ingestion method based on your source system and use case. Each option supports different levels of automation, transformation, and scalability.

* [**Configure cloud source connections**](../../sources/home.md#cloud-storage)
* **SQL ingestion**: Use Data Distiller to write into relational datasets
* [**File upload**](../ui/resources/schemas.md#upload-ddl-file): Upload files manually for batch or one-time ingestion

### Enable change data capture ingestion

Set up change data capture connections with supported cloud data warehouses. Ingest row-level changes while maintaining uniqueness and applying updates in the correct order.

* **Change data capture**: [Enable change data capture in source connections](../../sources/tutorials/api/change-data-capture.md)

## Common use cases {#use-cases}

Review the common use cases listed below where Data Mirror supports precise data synchronization and relationship preservation. Each scenario shows how Data Mirror supports common business needs across analytics, orchestration, and compliance.

### Relational data modeling 

Use [relational schemas](../schema/relational.md) in Data Mirror to represent entities, process inserts, updates, and deletes at the row level, and maintain the primary and foreign key relationships that exist in your data sources. This approach brings relational data modeling principles to Experience Platform and ensures structural consistency across datasets.

### Warehouse-to-lake synchronization

Mirror event data, customer interaction logs, campaign events, and auxiliary data from supported cloud data warehouses into Experience Platform. This supports campaign eligibility, targeting precision, and message sequencing. Journey Optimizer and Real-Time CDP B2B rely on this for near-real-time orchestration logic.

### Customer Journey Analytics integration

Synchronize time-series events such as web clicks, product views, purchases, and support interactions from systems like call centers or chat logs. A complete change history supports accurate trend analysis and behavioral segmentation. Experience Platform Data Mirror for Customer Journey Analytics uses this to reflect upserts and deletes from source systems.

### B2B relationship modeling

Preserve relationships such as account-to-contact, subscription-to-account, or contact-to-region hierarchies. These support segmentation, lead scoring, opportunity tracking, and multichannel coordination. Unlike standard ingestion that flattens relationships, Data Mirror maintains them natively using descriptors for more accurate modeling.

### Subscription management

Track events such as renewals, cancellations, upgrades, downgrades, and plan changes with complete version history. This supports retention campaigns, churn prediction, and lifecycle-based segmentation. Full history enables behavioral insights and precise targeting.

### Data hygiene operations

Use change data capture to enable precise record-level deletions for compliance (e.g., regulated industries) and cleanup workflows. Data Mirror applies deletions accurately while preserving related data across connected datasets.

## Important considerations {#considerations}

Review these key considerations to ensure your implementation aligns with supported schema behaviors, ingestion methods, and relationship patterns. Proper planning helps avoid integration issues and ensures accurate data modeling.

### Data deletion and hygiene requirements

All applications using relational schemas and Data Mirror must understand data deletion implications. Relational schemas enable precise record-level deletions that can impact related data across connected datasets. These deletion capabilities affect data integrity, compliance, and downstream application behavior regardless of your specific use case. Review [data hygiene requirements for datasets based on relational schemas](../../hygiene/ui/record-delete.md#relational-record-delete) and plan for deletion scenarios before implementation.

### Schema behavior selection

Relational schemas default to **record behavior**, which captures entity state (customers, accounts, etc.). If you need **time-series behavior** for event tracking, you must configure it explicitly.

### Ingestion method comparison

Use this comparison table to choose the best ingestion method for your data needs, whether you require real-time synchronization, SQL-based transformation, or manual file uploads.

| Ingestion Method        | Use Case                                                       |
| ----------------------- | -------------------------------------------------------------- |
| **Change data capture** | Real-time sync from supported cloud warehouses                 |
| **Data Distiller**      | SQL-based ingestion and transformation workflows               |
| **File upload**         | Batch/manual ingestion when source integration isn't available |

### Relationship limitations

Data Mirror supports **one-to-one** and **many-to-one** relationships using descriptors. **Many-to-many** relationships require additional modeling and are not directly supported.

## Next steps

After reviewing this overview, you should be able to determine if Data Mirror fits your use case and understand the requirements for implementation. To get started:

1. **Data architects** should assess your data model to ensure it supports primary keys, versioning, and change tracking capabilities.
2. **Business stakeholders** should confirm your license includes relational schema support and required Experience Platform editions.
3. **Schema designers** should plan your schema structure to identify required descriptors, field relationships, and data governance needs.
4. **Implementation teams** should choose an ingestion method based on your source systems, real-time requirements, and operational workflows.

For implementation details, see the [relational schemas documentation](../schema/relational.md).
