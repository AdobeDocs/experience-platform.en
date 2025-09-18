---
keywords: Experience Platform;data mirror;model-based schema;change data capture;database sync;primary key;relationships
solution: Experience Platform
title: Data Mirror overview
description: Learn how Data Mirror enables row-level change ingestion from external databases into Adobe Experience Platform using model-based schemas with enforced uniqueness, relationships, and versioning.
---
# Data Mirror overview

Data Mirror is a data ingestion capability in Adobe Experience Platform that enables the ingestion of row-level changes from external databases into the data lake using model-based schemas. This capability preserves data relationships, enforces uniqueness, and supports versioning without requiring upstream ETL processes.

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

## How Data Mirror works

Data Mirror operates through model-based schemas, which differ from standard XDM schemas by providing explicit control over data structure and relationships. The process involves:

1. **Schema definition**: Create model-based schemas with required descriptors (primary key, version, and optionally timestamp).
2. **Relationship mapping**: Define connections between datasets using relationship descriptors.
3. **Source configuration**: Set up change data capture connections with cloud data warehouses or other sources.
4. **Change ingestion**: Ingest row-level changes while maintaining uniqueness and applying updates in correct order.

Unlike standard ingestion approaches, Data Mirror respects your database model structure within the Experience Platform data lake, eliminating the need for external preprocessing.

## Prerequisites and requirements

Before implementing Data Mirror, ensure you have:

### Technical requirements

* **Model-based schemas**: Data Mirror is exclusive to model-based schemas and cannot be used with standard XDM schemas.
* **Schema descriptors**: All schemas must include primary key and version descriptors; time-series schemas additionally require timestamp descriptors.
* **Source system support**: Your external database must support change data capture or provide change metadata.

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

* **Warehouse-to-lake synchronization**: Mirror event data, customer interaction logs, campaign events, and auxiliary data from cloud data warehouses like Snowflake, BigQuery, or Databricks directly into Experience Platform. This capability supports campaign eligibility, targeting precision, and message sequencing by ensuring lake data reflects the most recent changes from the warehouse. Adobe Journey Optimizer and Real-Time CDP B2B benefit directly, as both rely on near-real-time lake data for segmentation and orchestration logic.

* **Customer Journey Analytics integration**: Sync time-series events such as web clicks, support interactions, product views, purchases, and behavioral engagement data from secondary systems like call centers or chat logs. Having complete change history enables accurate trend analysis, funnel performance, and behavioral segmentation by accounting for updates or corrections to event data over time. CJA's Warehouse Sync feature specifically relies on this capability to reflect upserts and deletes, ensuring event datasets mirror the current state of external sources.

* **B2B relationship modeling**: Maintain critical relationships such as account-to-contact, opportunity-to-account, subscription-to-account, and contact-to-region hierarchies across datasets. These preserved relationships support B2B workflows including segmentation, lead scoring, opportunity pipeline tracking, and coordinated multichannel outreach across teams or territories. Unlike standard B2B data ingestion that flattens relationships, Data Mirror preserves them natively using primary and foreign key descriptors, enabling more accurate and reusable data modeling in-platform.

* **Subscription management**: Track critical subscription events including renewals, upgrades/downgrades, cancellations, pause/resume events, and changes in billing status or plan details with complete change history. This comprehensive tracking supports retention campaigns, churn prediction models, lifecycle-based segmentation, and billing/revenue analytics. Having full change history allows organizations to identify behavioral patterns leading to churn, predict at-risk accounts, and personalize offers based on precise lifecycle stage data.

* **Data hygiene operations**: Enable precise record-level deletions via change data capture for compliance requirements, such as deleting specific customer data while preserving it in source systems, and for general platform cleanup workflows. This capability supports regulated industries including healthcare, finance, and government that require granular data control. Data Mirror's change tracking ensures deletions are applied accurately without affecting related records or compromising data integrity across connected datasets.

## Important considerations

### Schema behavior selection

Model-based schemas default to **record behavior**, which captures entity states (customers, accounts, campaigns). If your use case requires **time-series behavior** for event tracking, you must explicitly configure this during schema creation.

### Change data capture vs. Data Distiller

* **Sources with CDC**: Use for real-time synchronization from supported cloud warehouses
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

* **Change data capture**: [Enable CDC in source connections](../../sources/tutorials/api/change-data-capture.md)
* **SQL ingestion**: Use Data Distiller for SQL-based data loading
* **File upload**: Manual upload for batch processing workflows

### Relationship and data management

* **Schema relationships**: [Define relationships between datasets](../tutorials/relationship-ui.md)
* **Record hygiene**: [Manage precision record deletes](../../hygiene/ui/record-delete.md)

## Next steps

After reviewing this overview, you should be able to determine if Data Mirror fits your use case and understand the requirements for implementation. To get started:

1. **Assess your data model**: Ensure your source data can support primary keys, versioning, and change tracking.
2. **Review technical requirements**: Confirm your licensing includes model-based schema support.
3. **Plan your schema design**: Identify required descriptors and relationships for your use case.
4. **Choose your ingestion method**: Select the appropriate pathway based on your source systems and operational requirements.

For detailed implementation guidance, see [Data Mirror use cases](./use-cases.md) and the technical documentation for [model-based schemas](../schema/model-based.md).
