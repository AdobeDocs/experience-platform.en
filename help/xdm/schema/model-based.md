---
keywords: Experience Platform;home;popular topics;model-based schema; schema;Schema;xdm;experience data model;
solution: Experience Platform
title: Model-based schemas
description: Learn about model-based schemas in Adobe Experience Platform, including features, required fields, relationships, ingestion methods, and limitations.
---
# Model-based schemas

A model-based schema is a type of schema in Adobe Experience Platform (AEP) designed for structured, relational-style data stored in the Data Lake. Model-based schemas simplify schema creation by reducing complexity, enforcing key constraints, and supporting relationships between datasets. They are designed to overcome limitations in standard XDM schemas by removing dependency on union schemas, streamlining evolution, and allowing more flexibility in field definitions.

>[!AVAILABILITY]
>
>Currently, model-based schemas are **record-based only** and available based on your license or feature enablement. This includes Adobe Journey Optimizer **Campaign Orchestration**, **Data Distiller**, and Real-Time CDP **B2B** editions.

## Background

Standard XDM schemas in Experience Platform are classified into three behaviors:

* **Record** – Describes attributes of a subject, such as a person or organization.  
* **Time-series** – Captures a snapshot of the system when an event occurs, including both the event and the time it happened.  
* **Ad-hoc** – Captures namespaced fields for single-dataset use cases, such as CSV ingestion or temporary query results.

In the traditional model, record and time-series schemas participate in union views, auto-evolve when shared field groups change, and require custom fields to be nested under a tenant namespace. This model is powerful, but it adds complexity, increases schema size over time, and can slow down ingestion workflows.

Model-based schemas address these challenges by:

* Removing union schema participation.
* Eliminating auto-evolution from shared field groups.
* Allowing custom fields to be defined directly without tenant namespace restrictions.
* Providing simpler control over required fields and relationships.

<!-- CONFLICT: KT wiki frames background around technical constraints and union schema removal; Adam emphasized a UI terminology change from "relational" to "model-based" and licensing scope. -->

## Features of model-based schemas

Model-based schemas are designed to simplify the process of modeling structured, relational-style data in the Data Lake while retaining essential capabilities for data governance, data integrity, and interoperability.

The key features include:

* **Schema behavior support** – Can be configured with either:
  * **Record behavior** – Captures the current state of an entity, such as a customer, account, or campaign.
  * **Time-series behavior** – Captures events and the time they occur, useful for tracking sequences or changes over time.
<!-- CONFLICT: KT wiki states both record and time-series are supported; Adam stated only record-based schemas are currently available. -->

* **Primary key enforcement** – Ensures that each record in the dataset is uniquely identifiable. This constraint prevents duplicate records from being created during ingestion.

* **Version control** – The **version descriptor** allows the system to correctly apply updates to existing records, even if updates arrive out of order. For example, if an earlier update is received after a later one, the system can use the version descriptor to determine which is the most recent.

* **Event-time ordering** – For time-series schemas, the **timestamp descriptor** allows ingestion and queries to order events based on the actual time of occurrence rather than ingestion time.

* **Relationship mapping** – Supports both one-to-many and many-to-one relationships. These can be:
  * Between two model-based schemas.
  * Between a model-based schema and a standard schema.
  Relationships are stored as descriptors within the schema and allow linked datasets to be joined more efficiently.

* **Simplified evolution** – Model-based schemas are excluded from union views and are not automatically updated when a shared field group changes. This prevents unexpected changes in downstream workflows.

* **Flexible field definition** – Fields can be added directly to the schema without tenant-id namespacing, reducing complexity for custom modeling.

* **No dependency on union schemas** – Improves query performance and reduces the operational overhead of managing global schema views.

## Required fields

Model-based schemas require specific descriptors to be defined. These descriptors are metadata elements in the schema definition that inform the system about key behaviors and constraints.

### Primary key descriptor

* **Purpose** – Uniquely identifies each record within a dataset.
* **Supported configurations**:
  * **Single-field primary key** – One field contains a unique value for each record.
  * **Composite primary key** – Combines multiple fields to form a unique identifier.  
    For time-series schemas, the composite key must include the timestamp field identified by the timestamp descriptor.
<!-- CONFLICT: KT wiki supports both single and composite primary keys; Adam stated only a single primary key field is required, with timestamp handled separately for time-series. -->
**Example**

```json
    {
    "xdm:descriptor": "xdm:descriptorPrimaryKey",
    "xdm:sourceProperty": "customerId"
    }
```

**Composite key example for time-series**:

```json
{
  "xdm:descriptor": "xdm:descriptorPrimaryKey",
  "xdm:sourceProperty": ["customerId", "eventTimestamp"]
}
```

### Version descriptor

Purpose – Maintains correct record state by determining the most recent update for a given primary key.

Behavior – When multiple records with the same primary key are ingested, the record with the highest version value is considered the latest. This allows updates to be applied even if ingestion order is incorrect.

**Example**:

```json
{
  "xdm:descriptor": "xdm:descriptorVersion",
  "xdm:sourceProperty": "lastModified"
}
```

<!-- NOTE: unsure whether this descriptor is labeled as "version identifier." -->

### Timestamp descriptor 

Purpose – Used for time-series schemas to establish the event time for ordering.

Behavior – Ingestion and query operations can use this value to sort events chronologically, independent of ingestion time.

**Example**:

```json
{
  "xdm:descriptor": "xdm:descriptorTimestamp",
  "xdm:sourceProperty": "eventTimestamp"
}
```

>[!NOTE]
>
>These descriptors are not stored in data rows; they are part of the schema definition metadata.

For instructions on creating descriptors in the Schema Editor, see [PLACEHOLDER for UI doc](). For API-based creation, see [PLACEHOLDER for API doc]().

## Relationship support

Model-based schemas support relationship descriptors that define how datasets connect to each other. These descriptors enable more efficient joins, improve referential integrity, and allow related records to be queried as a connected set.

Relationships can be:

* **One-to-many** – A single record in one schema relates to multiple records in another schema.  
* **Many-to-one** – Multiple records in one schema relate to a single record in another schema.

You can define relationships between:

* Two model-based schemas.
* A model-based schema and a standard schema.

Each relationship is defined in the schema as a **relationship descriptor**. The descriptor specifies the **source field** in the referencing schema and the **target field** in the referenced schema.

**Example: One-to-many relationship**

```json
{
  "xdm:descriptor": "xdm:descriptorRelationship",
  "xdm:sourceProperty": "accountId",
  "xdm:destinationSchema": "https://ns.adobe.com/xdm/context/account",
  "xdm:destinationProperty": "accountId"
}
```

In this example:

* The source schema contains the accountId field, which links to the accountId field in the destination schema.

* Multiple records in the source schema can reference the same account in the destination schema.

**Example: Many-to-one relationship**

```json
{
  "xdm:descriptor": "xdm:descriptorRelationship",
  "xdm:sourceProperty": "customerId",
  "xdm:destinationSchema": "https://ns.adobe.com/xdm/context/customer",
  "xdm:destinationProperty": "customerId"
}
```

In this example:

* Multiple records in the source schema share the same customerId that exists in the destination schema.

* This allows queries to aggregate information about the customer from multiple related records.

>[!NOTE]
>
>Relationships are defined at the schema level and are enforced in the data model. They do not automatically create joins at query time, but they allow query tools such as Data Distiller to resolve relationships more easily.

For step-by-step instructions on creating relationships in the Schema Editor UI, see [PLACEHOLDER].
For API-based relationship creation, see [PLACEHOLDER for API doc].

<!-- CONFLICT: KT wiki describes both model-based to model-based and model-based to standard schema relationships; Adam's notes only mention primary/foreign key relationships in general without detailing interoperability. -->

## Ingestion methods

You can write data to model-based schema datasets using:

* **Sources with change data capture (CDC)** – The incoming data must include a `_change_request_type` column:
  * `U` = upsert (default if column is missing)
  * `D` = delete

>[!NOTE]
>
> `_change_request_type` is evaluated during ingestion only and is not stored or mapped in XDM.

* **Data Distiller** – Supports ingestion using SQL queries. See [PLACEHOLDER].
* **Local file upload** – Supports ingestion via manual file uploads to datasets. See [PLACEHOLDER].

<!-- CONFLICT: KT wiki lists CDC, Data Distiller, and local file upload as options; Adam stated CDC is currently the primary supported workflow for model-based schemas. -->

## Hygiene considerations

When deleting records in Adobe while retaining them in the source system, you can:

* Send a CDC delete operation (`_change_request_type = D`).
* Use a safe-copy dataset and apply deletes there.
* Upload a batch containing only deletes.

For complete guidance, see [PLACEHOLDER] in the Record Delete documentation.

## Limitations and considerations

* Model-based schemas do not participate in union schemas.
* Schema evolution is manual; they do not auto-update when field groups change.
* Composite primary keys are required for time-series schemas.
* Relationships are currently limited to one-to-many and many-to-one.
* Availability depends on your license or feature enablement.
<!-- CONFLICT: KT wiki supports both record and time-series; Adam stated only record-based schemas are currently available. -->
