---
keywords: Experience Platform;home;popular topics;relational schema; schema;Schema;xdm;experience data model;
solution: Experience Platform
title: Relational schemas
description: Learn about relational schemas in Adobe Experience Platform, including features, required fields, relationships, ingestion methods, and limitations.
---
# Relational schemas

Relational schemas provide a flexible, governed modeling pattern for representing structured data in the Adobe Experience Platform data lake. They support enforced primary keys, schema-level relationships, and fine-grained control over records—all without relying on union schemas or full relational database systems.

Use relational schemas to:

* Ensure data integrity with enforced single-field or composite primary keys.
* Enable precise change tracking using versioning for inserts, updates, and deletes.
* Define reusable schema-level relationships to model real-world entity connections.
* Avoid duplicating schema structures across applications by supporting multiple data models.
* Bypass union schema constraints to streamline onboarding, reduce schema bloat, and simplify evolution.

Use this modeling approach for use cases such as change data capture (CDC), referential joins across datasets, and multi-entity campaign orchestration. With relational schemas you maintain explicit control over schema evolution, field structure, and data governance.

>[!AVAILABILITY]
>
>Currently, relational schemas are **record-based only** and available based on your license or feature enablement. This includes Adobe Journey Optimizer **Campaign Orchestration**, **Data Distiller**, and **Real-Time CDP B2B** editions.

## How relational schemas differ from standard XDM schemas

Standard XDM schemas in Experience Platform follow one of three data behaviors: Record, Time-series, or Ad-hoc. For definitions and details, see [XDM data behaviors](https://experienceleague.adobe.com/en/docs/experience-platform/xdm/home#data-behaviors).

In the traditional model, Record and Time-series schemas participate in [union schemas](https://experienceleague.adobe.com/en/docs/experience-platform/xdm/api/unions).md) (also see the [union schema UI guide](../../profile/ui/union-schema.md)), automatically evolve when shared [field groups](./composition.md#field-group) change, and require custom fields to be nested under a tenant namespace. While powerful, this model can slow onboarding, produce overly complex schemas with unused fields, and require additional data mapping or transformation. These factors increase the learning curve and ongoing maintenance effort.

Relational schemas remove union schema dependencies, eliminate auto-evolution from shared field groups, and allow direct field definitions without tenant namespace restrictions. You gain explicit control over primary keys, relationships, and schema evolution, making it easier to model data to fit your needs.

## Features of relational schemas

Use the following capabilities to model structured data in the data lake while maintaining governance, integrity, and interoperability.

* **Schema behavior support**: Currently, relational schemas support:
  * **Record behavior**: Captures the current state of an entity, such as a customer, account, or campaign.

  >[!NOTE]
  >
  > Support for **Time-series behavior** is not currently available in the UI or API.

* **Primary key enforcement**: Define a primary key to uniquely identify each record and prevent duplicates during ingestion.
* **Version control**: Use a **version descriptor** to ensure updates are applied in the correct order, even if records arrive out of sequence.
* **Relationship mapping**: Create one-to-many or many-to-one relationships between relational schemas or between relational and standard schemas. Relationship definitions are stored as descriptors to enable efficient joins.
* **Simplified evolution**: Relational schemas do not participate in union views and are not updated when shared field groups change, preventing unexpected downstream changes.
* **Flexible field definition**: Add fields directly without tenant-id namespacing. You may still use existing XDM field groups, but changes to them do not automatically propagate to your schema.
* **No dependency on union schemas**: Improves query performance and reduces the operational overhead of managing global schema views.

<!-- For Sept:
* **Schema behavior support**: Configure with:
  * **Record behavior**: Captures the current state of an entity, such as a customer, account, or campaign.
  * **Time-series behavior**: Captures events and the time they occur, useful for tracking sequences or changes over time.

* **Event-time ordering**: For time-series schemas, use a **timestamp descriptor** to order events by occurrence time instead of ingestion time. 
-->

## Required fields

Relational schemas require certain descriptors—metadata in the schema definition that controls key behaviors and constraints. Add the following descriptors as part of your schema definition.

### Primary key descriptor

Use a primary key descriptor to ensure each record is uniquely identifiable. The supported configurations are:

* **Single-field primary key**: Use one field with a unique value for each record.
* **Composite primary key**: Use multiple fields to form a unique identifier.

<!-- For Sept:
* **Composite primary key**: Use multiple fields to form a unique identifier. For time-series schemas, the composite key must include the timestamp field identified by the timestamp descriptor. 
-->

**Example (single-field):**

```json
{
  "xdm:descriptor": "xdm:descriptorPrimaryKey",
  "xdm:sourceProperty": "customerId"
}
```

<!-- To be included in September:
**Example (composite for time-series)**

```json
{
  "xdm:descriptor": "xdm:descriptorPrimaryKey",
  "xdm:sourceProperty": ["customerId", "eventTimestamp"]
}
``` -->

### Version descriptor

Define a version descriptor to maintain correct record state and ensure the latest update is applied. When multiple records share the same primary key, the record with the highest version value is considered the most recent.

**Example:**

```json
{
  "xdm:descriptor": "xdm:descriptorVersion",
  "xdm:sourceProperty": "lastModified"
}
```

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
>Descriptors are part of the schema definition metadata and are not stored in data rows.

For instructions on creating descriptors in the Schema Editor, see [Create descriptors in the Schema Editor](../tutorials/relationship-ui.md). For API-based creation, see [Create descriptors using the API](../tutorials/relationship-api.md).

## Relationship support {#relationship-support}

Relational schemas support relationship descriptors that define how datasets connect across schemas. These relationships improve referential integrity, enable reusable modeling patterns, and support connected queries across applications—without embedding foreign keys directly in data rows.

Relationship descriptors are defined at the schema level and resolved at query time. This allows for greater flexibility and governance across datasets.

Before you add relationship descriptors, determine the appropriate type and target:

* **One-to-many** – A single record in a schema maps to multiple related records in another schema.
* **Many-to-one** – Multiple records in a schema map to a single record in another schema.

>[!NOTE]
>
>You can define relationships between two relational schemas or between a relational schema and a standard schema. Relationships to ad-hoc schemas are not supported.

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

For a list of relationship descriptor types and syntax, see the [descriptors API reference](../api/descriptors.md).To learn how to apply these concepts in practice, follow the tutorials to [define a relationship in the API](../tutorials/relationship-api.md) or [create a relationship in the UI](../tutorials/relationship-ui.md).

>[!NOTE]
>
>As relationships are defined at the schema level, make sure to explicitly join related datasets in your queries. Use a tool like Data Distiller to resolve these relationships during query time.

>[!IMPORTANT]
>
>Relationship cardinality is informational and not enforced during ingestion. It is applied only when resolving relationships during query or analysis. Do not rely on cardinality settings to validate your data during ingestion. Check and clean your data yourself, and ensure the relationship rules you define match the way you intend to query or analyze the data.

>[!NOTE]
>
> Relational schemas can link to standard schemas, but cannot link to ad-hoc schemas.

## Ingestion methods {#ingestion-methods}

Use [change data capture](../../sources/tutorials/api/change-data-capture.md) in your data connections to keep relational datasets synchronized with source systems. You can also ingest data using SQL via Data Distiller or upload files manually. Choose the path that aligns with your operational model, then apply the CDC rules consistently.

Change data capture in Experience Platform captures and applies all changes—inserts, updates, and deletes—in real time, ensuring full alignment between source and destination data. Unlike incremental copy, which only tracks new or updated records using a timestamp column (such as `LastModified`) and cannot detect deletions, change data capture provides a complete change history.

Supported ingestion methods include:

* **Sources with CDC** – Include a `_change_request_type` column in the source data to indicate how each row should be processed:
  * `U` = upsert (default if column is missing)  
  * `D` = delete  
    This column is evaluated during ingestion only and is not stored in XDM or mapped to XDM fields.

  >[!IMPORTANT]
  >
  > For **file-based sources only**, each row in the data file must include a `_change_request_type` column with either `U` (upsert) or `D` (delete). Without this column, the system will not recognize the data as supporting change tracking. As a result, options such as the **Orchestrated Campaign** toggle will not appear, and the dataset cannot be selected for targeting.

  For step-by-step instructions on enabling CDC in the Sources workflow, see [Enable change data capture for source connections](link-to-sources-doc/PLACEHOLDER.md).

* **Data Distiller**: Ingest using SQL queries to write into relational datasets.
* **Local file upload**: Upload files manually when needed for non-source ingestion workflows.

## Data hygiene considerations {#data-hygiene-considerations}

When you need to remove records from relational datasets while keeping source systems intact, select a method that aligns with your governance and reconciliation processes. Then apply the relevant descriptors to ensure deterministic behavior.

Use these methods to maintain accurate records in the data lake without unwanted source data deletion:

* **Change data capture delete operation**: Include `_change_request_type` with `D` in the incoming data to delete matching records.
* **Safe-copy dataset**: Duplicate the production dataset and apply deletes to the copy for controlled testing or reconciliation.
* **Deletes-only batch upload**: Upload a file containing only deletes for targeted hygiene.

The following list of descriptors indicate their relevance to hygiene operations:

* **Primary key descriptor**: Identifies records for updates or deletes.
* **Version descriptor**: Ensures deletes and updates apply in the correct order.

<!-- For September:
* **Timestamp descriptor (time-series)**: Aligns deletes with event occurrence times. -->

>[!NOTE]
>
>Hygiene processes operate at the dataset level. For profile-enabled datasets, additional profile workflows may be required.

To delete records associated with an identity, create a record delete work order. For complete hygiene instructions, see Record Delete [UI](../../hygiene/ui/record-delete.md) and [API documentation](../../hygiene/api/workorder.md). For scheduled row-level retention in the data lake, see [Manage Experience Event dataset retention (TTL)](../../catalog/datasets/experience-event-dataset-retention-ttl-guide.md).

## Limitations and considerations {#limitations}

Review the following limitations before using relational schemas:

* Relational schemas do not participate in union schemas.
* Schema evolution is manual; they do not auto-update when field groups change.

  >[!IMPORTANT]
  >
  >Schema evolution is additive only. You can add new fields after publication, but cannot remove or alter existing ones.

* Relationships are limited to one-to-many and many-to-one.
* Availability depends on your license or feature enablement.

<!-- For sept:
* Composite primary keys are required for time-series schemas. -->

