---
keywords: Experience Platform;data mirror;model-based schema;change data capture;database sync;primary key;relationships
solution: Experience Platform
title: Data Mirror overview
description: Learn how Data Mirror enables row-level change ingestion from external databases into Adobe Experience Platform using model-based schemas with enforced uniqueness, relationships, and versioning.
badge: Limited Availability
---
# Data Mirror overview

>[!AVAILABILITY]
>
>Data Mirror is in **limited availability**. It is currently offered through Adobe Journey Optimizer (**Orchestrated campaigns**), **Customer Journey Analytics**, and **Real-Time CDP B2B**, based on license or feature enablement. Contact your Adobe representative to request access.

Data Mirror is an Adobe Experience Platform capability that enables row-level change ingestion from external databases into the data lake using model-based schemas. It preserves data relationships, enforces uniqueness, and supports versioning without requiring upstream extract, transform, load (ETL) processes.

Use Data Mirror to synchronize inserts, updates, and deletes (mutable data) from external systems such as [!DNL Snowflake], [!DNL Databricks], or [!DNL BigQuery] directly into Experience Platform. This helps you preserve your existing database model structure and data integrity as you bring data into Platform.

## Capabilities and benefits

Data Mirror provides the following essential capabilities for database synchronization:

* **Primary key enforcement**: Ensures uniqueness within datasets and prevents duplicate records during ingestion.
* **Row-level change ingestion**: Supports granular data changes including upserts and deletes with precision control.
* **Schema relationships**: Enables foreign and primary key relationships between datasets through descriptors.
* **Out-of-order event handling**: Processes change events using version and timestamp descriptors, even when they arrive out of sequence.
* **Direct warehouse integration**: Connects with supported cloud data warehouses for real-time change synchronization.

Use Data Mirror to ingest changes directly from your source systems, enforce schema integrity, and activate data for analytics, journey orchestration, and governance workflows. Data Mirror eliminates complex upstream ETL processes and accelerates implementation by enabling direct mirroring of existing database models. This can enhance data governance through precise control over deletions and data hygiene operations.

## Prerequisites {#prerequisites}

Before getting started, you should understand the following components of Adobe Experience Platform and confirm your environment meets the technical and structural requirements:

* [Create schemas in Experience Platform UI](../ui/resources/schemas.md) or [API](../api/schemas.md)
* [Configure cloud source connections](../../sources/home.md#cloud-storage)
* [Apply change data capture concepts](../../sources/tutorials/api/change-data-capture.md) (upserts, deletes)
* Distinguish between [standard](../schema/composition.md) and [model-based schemas](../schema/model-based.md)
* [Define structural relationships with descriptors](../api/descriptors.md)

### Implementation requirements

Your Platform instance and source data must meet specific requirements for Data Mirror to function properly. Data Mirror exclusively requires **model-based schemas**, which are flexible data structures with enforced constraints, and cannot work with standard XDM schemas. Include a **primary key and version descriptor** in all schemas, with **timestamp descriptors** additionally required for time-series schemas. Your **external database** must support change data capture or provide change metadata. Source data must contain **unique identifiers** (single field or composite primary keys) and **version information** to ensure updates apply in the correct order. For delete operations, include a **`_change_request_type` column** with values to distinguish upserts from deletes.

## Implement Data Mirror

Unlike standard ingestion approaches, Data Mirror preserves your database model structure within the Experience Platform data lake. This data structure consistency eliminates the need for external preprocessing. The following is a high level Data Mirror implementation workflow:

1. **Define your schema structure**: Create [model-based schemas](../schema/model-based.md) with required descriptors (metadata that define schema behavior and constraints).
2. **Map schema relationships**: Define connections between datasets using relationship descriptors.
3. **Configure your source connection**: Set up change data capture connections with supported cloud data warehouses.
4. **Ingest data changes**: Ingest row-level changes while maintaining uniqueness and applying updates in the correct order.

## Choose your implementation method

Based on your team's workflow and source system, choose from the following implementation methods:

### Schema creation

Define the structure of your data using model-based schemas. Choose a method that fits your team's workflow, either through the UI or directly through the API.

* **UI approach**: [Create model-based schemas in the Schema Editor](../ui/resources/schemas.md)
* **API approach**: [Create schemas via Schema Registry API](../api/schemas.md)

### Data ingestion

Select an ingestion method based on your source system and use case. Each option supports different levels of automation, transformation, and scalability.

* **Change data capture**: [Enable change data capture in source connections](../../sources/tutorials/api/change-data-capture.md)
* **SQL ingestion**: Use Data Distiller to write into relational datasets
* **File upload**: Upload files manually for batch or one-time ingestion

### Relationship and data management

Manage relationships and maintain data quality across datasets. These tasks ensure consistent joins and support compliance with data hygiene requirements.

* **Schema relationships**: [Define relationships between datasets](../tutorials/relationship-ui.md)
* **Record hygiene**: [Manage precision record deletes](../../hygiene/ui/record-delete.md)

## Common use cases

Review the common use cases listed below where Data Mirror supports precise data synchronization and relationship preservation. Each scenario demonstrates how these capabilities can help meet your business needs across analytics, orchestration, and compliance.

### Warehouse-to-lake synchronization

Mirror event data, customer interaction logs, campaign events, and auxiliary data from supported cloud data warehouses into Experience Platform. This supports campaign eligibility, targeting precision, and message sequencing. Journey Optimizer and Real-Time CDP B2B rely on this for near-real-time orchestration logic.

### Customer Journey Analytics integration

Synchronize time-series events such as web clicks, product views, purchases, and support interactions from systems like call centers or chat logs. A complete change history supports accurate trend analysis and behavioral segmentation. Customer Journey Analytics's Warehouse synchronization feature uses this to reflect upserts and deletes from source systems.

### B2B relationship modeling

Preserve relationships such as account-to-contact, subscription-to-account, or contact-to-region hierarchies. These support segmentation, lead scoring, opportunity tracking, and multichannel coordination. Unlike standard ingestion that flattens relationships, Data Mirror maintains them natively using descriptors for more accurate modeling.

### Subscription management

Track events such as renewals, cancellations, upgrades, downgrades, and plan changes with complete version history. This supports retention campaigns, churn prediction, and lifecycle-based segmentation. Full history enables behavioral insights and precise targeting.

### Data hygiene operations

Use change data capture to enable precise record-level deletions for compliance (e.g., regulated industries) and cleanup workflows. Data Mirror applies deletions accurately while preserving related data across connected datasets.

## Important considerations

Review these key considerations to ensure your implementation aligns with supported schema behaviors, ingestion methods, and relationship patterns. Proper planning helps avoid integration issues and ensures accurate data modeling.

### Schema behavior selection

Model-based schemas default to **record behavior**, which captures entity state (customers, accounts, etc.). If you need **time-series behavior** for event tracking, you must configure it explicitly.

### Change data capture vs. Data Distiller

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
2. **Business stakeholders** should confirm your license includes model-based schema support and required Experience Platform editions.
3. **Schema designers** should plan your schema structure to identify required descriptors, field relationships, and data governance needs.
4. **Implementation teams** should choose an ingestion method based on your source systems, real-time requirements, and operational workflows.

For implementation details, see the [model-based schemas documentation](../schema/model-based.md).

<!-- 
---
keywords: Experience Platform;data mirror;model-based schema;change data capture;database sync;primary key;relationships
solution: Experience Platform
title: Data Mirror overview
description: Learn how Data Mirror enables row-level change ingestion from external databases into Adobe Experience Platform using model-based schemas with enforced uniqueness, relationships, and versioning.
badge: Limited Availability
---
# Data Mirror overview

>[!AVAILABILITY]
>
>Currently, Data Mirror is only available through Adobe Journey Optimizer **Orchestrated campaigns** and the limited release based on your license or feature enablement. This includes **Customer Journey Analytics**, and **Real-Time CDP B2B** editions. Contact your Adobe representative for inclusion in this limited release.

Data Mirror is a capability in Adobe Experience Platform that enables row-level change ingestion from external databases into the data lake using model-based schemas. This capability preserves data relationships, enforces uniqueness, and supports versioning without requiring upstream ETL processes.

Use Data Mirror to synchronize mutable data (inserts, updates, and deletes) from external systems—such as Snowflake, Databricks, or BigQuery—directly into Experience Platform while maintaining the integrity and structure of your existing database models.

## Key capabilities

Data Mirror provides the following essential capabilities for database synchronization:

* **Primary key enforcement**: Ensures uniqueness within datasets and prevents duplicate records during ingestion.
* **Row-level change ingestion**: Supports granular data changes including upserts and deletes with precision control.
* **Schema relationships**: Enables foreign and primary key relationships between datasets through descriptors.
* **Out-of-order event handling**: Processes change events using version and timestamp descriptors, even when they arrive out of sequence.
* **Direct warehouse integration**: Connects with cloud data warehouse sources for real-time change synchronization.

## Benefits

Data Mirror addresses common data integration challenges and unlocks new platform capabilities:

### Operational efficiency

* **Reduces ETL complexity**: Eliminates the need for upstream data transformation, flattening, or pruning processes.
* **Accelerates implementation**: Allows direct mirroring of existing database models without extensive remapping.
* **Improves data governance**: Provides precision control for record deletions and data hygiene workflows.

### Platform enablement

* **Unlocks app capabilities**: Enables advanced use cases in Customer Journey Analytics, Journey Optimizer, and Real-Time CDP B2B Edition through native data modeling.
* **Preserves data integrity**: Maintains relationships and constraints that support complex analytical and operational workflows.
* **Supports real-time sync**: Keeps Experience Platform data current with source system changes.

## Implement Data Mirror

Data Mirror operates through model-based schemas (flexible data structures with enforced constraints), which differ from standard XDM schemas by providing explicit control over data structure and relationships. To implement Data Mirror:

1. **Schema definition**: Create model-based schemas with required descriptors (metadata that define schema behavior and constraints).
1. **Relationship mapping**: Define connections between datasets using relationship descriptors.
1. **Source configuration**: Set up change data capture connections with cloud data warehouses or other sources.
1. **Change ingestion**: Ingest row-level changes while maintaining uniqueness and applying updates in correct order.

Unlike standard ingestion approaches, Data Mirror respects your database model structure within the Experience Platform data lake, eliminating the need for external preprocessing.

## Prerequisites and requirements

Before you implement Data Mirror, ensure you have:

### Technical requirements

* **Model-based schemas**: Use model-based schemas exclusively; Data Mirror cannot be used with standard XDM schemas.
* **Schema descriptors**: Include primary key and version descriptors in all schemas; time-series schemas additionally require timestamp descriptors.
* **Source system support**: Ensure your external database supports change data capture or provides change metadata.

### Knowledge prerequisites

* Understanding of schema creation in Experience Platform
* Familiarity with cloud source connection configuration
* Knowledge of change data capture concepts (upserts, deletes)
* Understanding of the difference between standard and model-based schemas

### Data structure requirements

* **Primary key definition**: Each record must have a unique identifier (single field or composite).
* **Version tracking**: Source data should include version information for proper change ordering.
* **Change type metadata**: For delete operations, include a `_change_request_type` column with values `U` (upsert) or `D` (delete).

## Common use cases

Data Mirror is designed for scenarios requiring precise data synchronization and relationship preservation:

### Warehouse-to-lake synchronization

Mirror event data, customer interaction logs, campaign events, and auxiliary data from cloud data warehouses like Snowflake, BigQuery, or Databricks directly into Experience Platform. This capability supports campaign eligibility, targeting precision, and message sequencing to ensure lake data reflects the most recent changes from the warehouse. Adobe Journey Optimizer and Real-Time CDP B2B benefit directly, as both rely on near-real-time lake data for segmentation and orchestration logic.

### Customer Journey Analytics integration

Sync time-series events such as web clicks, support interactions, product views, purchases, and behavioral engagement data from secondary systems like call centers or chat logs. Having complete change history enables accurate trend analysis, funnel performance, and behavioral segmentation by accounting for updates or corrections to event data over time. CJA's Warehouse Sync feature specifically relies on this capability to reflect upserts and deletes, to ensure event datasets mirror the current state of external sources.

### B2B relationship modeling

Maintain critical relationships such as account-to-contact, opportunity-to-account, subscription-to-account, and contact-to-region hierarchies across datasets. These preserved relationships support B2B workflows including segmentation, lead scoring, opportunity pipeline tracking, and coordinated multichannel outreach across teams or territories. Unlike standard B2B data ingestion that flattens relationships, Data Mirror preserves them natively using primary and foreign key descriptors (metadata that define schema behavior and constraints), enabling more accurate and reusable data modeling in-platform.

### Subscription management

Track critical subscription events including renewals, upgrades/downgrades, cancellations, pause/resume events, and changes in billing status or plan details with complete change history. This comprehensive tracking supports retention campaigns, churn prediction models, lifecycle-based segmentation, and billing/revenue analytics. Having full change history allows organizations to identify behavioral patterns leading to churn, predict at-risk accounts, and personalize offers based on precise lifecycle stage data.

### Data hygiene operations

Enable precise record-level deletions via change data capture for compliance requirements, such as deleting specific customer data while preserving it in source systems, and for general platform cleanup workflows. This capability supports regulated industries including healthcare, finance, and government that require granular data control. Data Mirror's change tracking ensures deletions are applied accurately without affecting related records or compromising data integrity across connected datasets.

## Important considerations

### Schema behavior selection

Model-based schemas default to **record behavior**, which captures entity states (customers, accounts, campaigns). If your use case requires **time-series behavior** for event tracking, you must explicitly configure this during schema creation.

### Change data capture vs. Data Distiller

* **Sources with change data capture**: Use for real-time synchronization from supported cloud warehouses
* **Data Distiller**: Use for SQL-based ingestion and complex transformation workflows
* **File upload**: Use for manual or batch-based change ingestion

### Relationship limitations

Data Mirror supports one-to-one and many-to-one relationships. Many-to-many relationships require additional modeling considerations and are not directly supported.

## Implementation pathways

Choose your implementation approach based on your specific requirements:

### Schema creation

* **UI approach**: [Create model-based schemas in the Schema Editor](../ui/resources/schemas.md)
* **API approach**: [Create schemas via Schema Registry API](../api/schemas.md)

### Data ingestion

* **Change data capture**: [Enable change data capture in source connections](../../sources/tutorials/api/change-data-capture.md)
* **SQL ingestion**: Use Data Distiller to ingest data using SQL queries to write into relational datasets
* **File upload**: Upload files manually when needed for non-source ingestion workflows, particularly useful for batch processing or one-time data loads

### Relationship and data management

* **Schema relationships**: [Define relationships between datasets](../tutorials/relationship-ui.md)
* **Record hygiene**: [Manage precision record deletes](../../hygiene/ui/record-delete.md)

## Next steps

After reviewing this overview, you should be able to determine if Data Mirror fits your use case and understand the requirements for implementation. To get started:

1. **Assess your data model**: Ensure your source data can support primary keys, versioning, and change tracking.
2. **Review technical requirements**: Confirm your licensing includes model-based schema support.
3. **Plan your schema design**: Identify required descriptors and relationships for your use case.
4. **Choose your ingestion method**: Select the appropriate pathway based on your source systems and operational requirements.

For detailed implementation guidance, see the technical documentation for [model-based schemas](../schema/model-based.md). -->
