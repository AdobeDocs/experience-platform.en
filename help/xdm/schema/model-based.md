---
keywords: Experience Platform;home;popular topics;model-based schema; schema;Schema;xdm;experience data model;
solution: Experience Platform
title: Model-based schemas
description: Learn about model-based schemas in Adobe Experience Platform, including features, required fields, relationships, ingestion methods, and limitations.
---
# Model-based schemas

Use model-based schemas in Adobe Experience Platform to represent structured, relational-style data in the data lake, with enforced primary keys and relationships without the constraints of a full relational database. 

<!-- Define enforced primary keys to maintain data integrity and prevent duplicates, enable row- and record-level change tracking for precise updates and deletes, and create schema-level relationships you can reference across applications. Work with multiple data models beyond the standard Experience Platform schema to avoid duplicating modeling work, define relationships once and reuse them, and maintain consistent data structures across Adobe applications. 

or  -->

With model-based schemas, you can:

* Define enforced primary keys to maintain data integrity and prevent duplicates.
* Enable row- and record-level change tracking for precise updates and deletes.
* Create schema-level relationships that can be referenced across applications.
* Work with multiple data models beyond the standard Experience Platform schema to avoid duplicating modeling work.
* Define relationships once and reuse them across projects.
* Maintain consistent data structures across Adobe applications.

This approach removes dependencies on union schemas, streamlines schema evolution, and gives you more flexibility when configuring fields to match your data needs.

>[!AVAILABILITY]
>
>Currently, model-based schemas are **record-based only** and available based on your license or feature enablement. This includes Adobe Journey Optimizer **Campaign Orchestration**, **Data Distiller**, and **Real-Time CDP B2B** editions.

## How model-based schemas differ from standard XDM schemas

Standard XDM schemas in Experience Platform follow one of three data behaviors: Record, Time-series, or Ad-hoc. For definitions and details, see [XDM data behaviors](https://experienceleague.adobe.com/en/docs/experience-platform/xdm/home#data-behaviors).

In the traditional model, Record and Time-series schemas participate in [union views](https://experienceleague.adobe.com/en/docs/experience-platform/xdm/api/unions).md), automatically evolve when shared [field groups](./composition.md#field-group) change, and require custom fields to be nested under a tenant namespace. While powerful, this approach can slow onboarding, produce overly complex schemas with unused fields, and require additional data mapping or transformation. These factors increase the learning curve and ongoing maintenance effort.

<!-- Also see the [Union Schema UI guide](../../profile/ui/union-schema.md). -->

Model-based schemas remove union schema dependencies, eliminate auto-evolution from shared field groups, and allow direct field definitions without tenant namespace restrictions. This gives you explicit control over primary keys, relationships, and schema evolution, making it easier to model data to fit your needs.

<!-- CONFLICT: KT wiki frames background around technical constraints and union schema removal; Adam emphasized a UI terminology change from "relational" to "model-based" and licensing scope. -->

## Features of model-based schemas

Model-based schemas simplify the process of modeling structured data in the data lake while retaining essential capabilities for governance, integrity, and interoperability.

**Key features:**

* **Schema behavior support** – Configure with:
  * **Record behavior** – Captures the current state of an entity, such as a customer, account, or campaign.
  * **Time-series behavior** – Captures events and the time they occur, useful for tracking sequences or changes over time.
<!-- CONFLICT: KT wiki states both record and time-series are supported; Adam stated only record-based schemas are currently available. -->

* **Primary key enforcement** – Define a primary key to uniquely identify each record in the dataset. This prevents duplicate records during ingestion.

* **Version control** – Use a **version descriptor** to ensure updates are applied in the correct order, even if records arrive out of sequence.

* **Event-time ordering** – For time-series schemas, use a **timestamp descriptor** to order events by occurrence time instead of ingestion time.

* **Relationship mapping** – Create one-to-many or many-to-one relationships:
  * Between two model-based schemas.
  * Between a model-based schema and a standard schema.
  Relationships are stored as descriptors to enable efficient joins.

* **Simplified evolution** – Model-based schemas do not participate in union views and are not updated when shared field groups change, preventing unexpected downstream changes.

* **Flexible field definition** – Add fields directly without tenant-id namespacing. You may still use existing XDM field groups, but changes to them do not automatically propagate to your schema.

* **No dependency on union schemas** – Improves query performance and reduces the operational overhead of managing global schema views.

## Required fields

Model-based schemas require certain descriptors—metadata in the schema definition that controls key behaviors and constraints.

### Primary key descriptor

Use a primary key descriptor to ensure each record is uniquely identifiable.

**Supported configurations:**

* **Single-field primary key** – Use one field with a unique value for each record.
* **Composite primary key** – Use multiple fields to form a unique identifier.  
  For time-series schemas, the composite key must include the timestamp field identified by the timestamp descriptor.

<!-- CONFLICT: KT wiki supports both single and composite primary keys; Adam stated only a single primary key field is required, with timestamp handled separately for time-series. -->

**Example:**

```json
{
  "xdm:descriptor": "xdm:descriptorPrimaryKey",
  "xdm:sourceProperty": "customerId"
}
```

**Composite key example for time-series:**

```json
{
  "xdm:descriptor": "xdm:descriptorPrimaryKey",
  "xdm:sourceProperty": ["customerId", "eventTimestamp"]
}
```

### Version descriptor

Define a version descriptor to maintain correct record state and ensure the latest update is applied.

When multiple records share the same primary key, the record with the highest version value is considered the most recent.

**Example:**

```json
{
  "xdm:descriptor": "xdm:descriptorVersion",
  "xdm:sourceProperty": "lastModified"
}
```

<!-- NOTE: unsure whether this descriptor is labeled as "version identifier." -->

### Timestamp descriptor

For time-series schemas, define a timestamp descriptor to set the event time for ordering.

**Example:**

```json
{
  "xdm:descriptor": "xdm:descriptorTimestamp",
  "xdm:sourceProperty": "eventTimestamp"
}
```

>[!NOTE]
>
> Descriptors are part of the schema definition metadata and are not stored in data rows.

For instructions on creating descriptors in the Schema Editor, see [Create descriptors in the Schema Editor](../tutorials/relationship-ui.md). For API-based creation, see [Create descriptors using the API](../tutorials/relationship-api.md).

## Relationship support

Model-based schemas support relationship descriptors that define dataset connections. These improve referential integrity and enable connected queries.

**Relationship types:**

* **One-to-many** – One record in a schema relates to multiple records in another schema.
* **Many-to-one** – Multiple records in a schema relate to one record in another schema.

You can define relationships between:

* Two model-based schemas.
* A model-based schema and a standard schema.

**Example: One-to-many relationship**

```json
{
  "xdm:descriptor": "xdm:descriptorRelationship",
  "xdm:sourceProperty": "accountId",
  "xdm:destinationSchema": "https://ns.adobe.com/xdm/context/account",
  "xdm:destinationProperty": "accountId"
}
```

**Example: Many-to-one relationship**

```json
{
  "xdm:descriptor": "xdm:descriptorRelationship",
  "xdm:sourceProperty": "customerId",
  "xdm:destinationSchema": "https://ns.adobe.com/xdm/context/customer",
  "xdm:destinationProperty": "customerId"
}
```

For a full list of relationship descriptor types and syntax, see the [relationship descriptors reference](../api/descriptors.md) and the [tutorial for defining a one-to-one relationship between two schemas using the Schema Registry API](../tutorials/relationship-api.md) or the [UI](../tutorials/relationship-ui.md).

>[!NOTE]
>
>As relationships are defined at the schema level, make sure to explicitly join related datasets in your queries. Use a tool like Data Distiller to resolve these relationships during query time.

For UI instructions, see [Create relationships in the Schema Editor](link-to-ui-doc/PLACEHOLDER.md). For API instructions, see [Create relationships using the API](link-to-api-doc/PLACEHOLDER.md).

>[!IMPORTANT]
>
>Relationship cardinality is informational and not enforced during ingestion. It is applied only when resolving relationships during query or analysis. Do not rely on cardinality settings to validate your data during ingestion. Check and clean your data yourself, and ensure the relationship rules you define match the way you intend to query or analyze the data.

>[!NOTE]
>
> Model-based schemas can link to standard schemas, but cannot link to ad-hoc schemas.

<!-- CONFLICT: KT wiki describes both model-based to model-based and model-based to standard schema relationships; Adam's notes only mention primary/foreign key relationships in general without detailing interoperability. -->

## Ingestion methods

Use [change data capture](../../sources/tutorials/api/change-data-capture.md) in your dataflow to keep model-based datasets synchronized with source systems. You can also ingest data using SQL via Data Distiller or upload files manually.

Change data capture in Experience Platform captures and applies all changes—inserts, updates, and deletes—in real time, ensuring full alignment between source and destination data. Unlike incremental copy, which only tracks new or updated records using a timestamp column (such as `LastModified`) and cannot detect deletions, change data capture provides a complete change history.

**Supported ingestion methods:**

* **Sources with CDC** – Include a `_change_request_type` column in the source data to indicate how each row should be processed:
  * `U` = upsert (default if column is missing)  
  * `D` = delete  
    This column is evaluated during ingestion only and is not stored in XDM.

  >[!IMPORTANT]
  >
  > For **file-based sources only**, each row in the data file must include a `_change_request_type` column with either `U` (upsert) or `D` (delete). Without this column, the system will not recognize the data as supporting change tracking. As a result, options such as the **Orchestrated Campaign** toggle will not appear, and the dataset cannot be selected for targeting.

  For step-by-step instructions on enabling CDC in the Sources workflow, see [Enable change data capture for source connections](link-to-sources-doc/PLACEHOLDER.md).

* **Data Distiller** – Ingest using SQL queries.

* **Local file upload** – Upload files manually to datasets.

<!-- CONFLICT: KT wiki lists CDC, Data Distiller, and local file upload as options; Adam stated CDC is currently the primary supported workflow for model-based schemas. -->

## Data hygiene considerations

Use these methods to maintain accurate records in the data lake without unwanted source data deletion:

* **CDC delete operation** – Include `_change_request_type` with `D` in the incoming dataset.
* **Safe-copy dataset** – Duplicate the production dataset and apply deletes to the copy.
* **Deletes-only batch upload** – Upload a file containing only deletes for targeted hygiene.

**Descriptor relevance to hygiene:**

* **Primary key descriptor** – Identifies records for updates or deletes.
* **Version descriptor** – Ensures deletes/updates apply in the correct order.
* **Timestamp descriptor (time-series)** – Aligns deletes with event occurrence times.

>[!NOTE]
>
> Hygiene processes operate at the dataset level. For profile-enabled datasets, additional profile workflows may be required.

For complete hygiene instructions, see Record Delete [UI](../../hygiene/ui/record-delete.md) and [API documentation](../../hygiene/api/workorder.md).
Alternatively, see the guide on how to [Manage Experience Event Dataset Retention in the data lake using TTL](../../catalog/datasets/experience-event-dataset-retention-ttl-guide.md).
<!-- CONFLICT: KT wiki describes hygiene in relation to all schema behaviors; Adam emphasized hygiene guidance in the context of record-based model-based schemas and CDC deletes as the main supported approach. -->

## Limitations and considerations

Review the following limitations before using model-based schemas:

* Model-based schemas do not participate in union schemas.
* Schema evolution is manual; they do not auto-update when field groups change.

  >[!IMPORTANT]
  >
  > Schema evolution is additive only. You can add new fields after publication, but cannot remove or alter existing ones.
* Composite primary keys are required for time-series schemas.
* Relationships are limited to one-to-many and many-to-one.
* Availability depends on your license or feature enablement.

<!-- CONFLICT: KT wiki supports both record and time-series; Adam stated only record-based schemas are currently available. -->
