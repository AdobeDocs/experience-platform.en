---
keywords: Experience Platform;home;popular topics;model-based schema;relational schema;relational schemas;schema;Schema;xdm;experience data model;
solution: Experience Platform
title: Model-based schemas
description: Learn about model-based schemas (also called relational schemas) in Adobe Experience Platform, including features, required fields, relationships, and limitations.
badge: Limited Availability
---
# Model-based schemas

>[!AVAILABILITY]
>
>Data Mirror and model-based schemas are available to Adobe Journey Optimizer **Orchestrated campaigns** license holders. They are also available as a **limited release** for Customer Journey Analytics users, depending on your license and feature enablement. Contact your Adobe representative for access.

Model-based schemas provide a flexible, controlled modeling pattern for representing structured data in the Adobe Experience Platform data lake. They support enforced primary keys, schema-level relationships, and fine-grained control over records—all without relying on union schemas or full relational database systems.

>[!IMPORTANT]
>
>Data deletion considerations apply to all model-based schema implementations. Applications using these schemas must understand how deletions affect related datasets, compliance requirements, and downstream processes. Plan for deletion scenarios and review [data hygiene guidance](../../hygiene/ui/record-delete.md#model-based-record-delete) before implementation.

>[!NOTE]
>
>Applications may refer to model-based schemas as "relational schemas" when requesting schema creation for relational data modeling use cases.

Use model-based schemas to:

* Ensure data integrity with enforced single-field or composite primary keys.
* Enable precise change tracking using versioning for inserts, updates, and deletes.
* Define reusable schema-level relationships to model real-world entity connections.
* Avoid duplicating schema structures across applications by supporting multiple data models.
* Bypass union schema constraints to streamline onboarding, reduce schema bloat, and avoid unwanted schema changes.

## How model-based schemas differ from standard XDM schemas

Standard XDM schemas in Experience Platform follow one of three data behaviors: Record, Time-series, or Ad-hoc. For definitions and details, see [XDM data behaviors](https://experienceleague.adobe.com/en/docs/experience-platform/xdm/home#data-behaviors).

In the traditional model, record and time-series schemas participate in [union schemas](../api/unions.md) (also see the [union schema UI guide](../../profile/ui/union-schema.md)). These schemas automatically evolve as shared [field groups](./composition.md#field-group) are updated and custom fields must be nested under a tenant namespace. While powerful, this model can slow onboarding, produce overly complex schemas with unused fields, and require additional data mapping or transformation. These factors increase the learning curve and ongoing maintenance effort.

Model-based schemas remove union schema dependencies, which eliminate automatic updates from shared field groups and allows direct field definitions without tenant namespace restrictions. You gain explicit control over primary keys, relationships, and initial schema design, making it easier to model data to fit your needs at creation time.

## Features of model-based schemas

Use the following capabilities to model structured data in the data lake while maintaining governance, integrity, and interoperability.

* **Schema behavior support**: Configure with:
  * **Record behavior**: Captures the current state of an entity, such as a customer, account, or campaign.
  * **Time-series behavior**: Captures events and the time they occur, useful for tracking sequences or changes over time.
* **Primary key enforcement**: Define a primary key to uniquely identify each record and prevent duplicates during ingestion.
* **Version control**: Use a **version identifier** (a descriptor) to ensure updates are applied in the correct order, even if records arrive out of sequence.
* **Relationship mapping**: Create one-to-one or many-to-one relationships between model-based schemas or between model-based and standard schemas. Relationship definitions are stored as descriptors to enable efficient joins.
* **Simplified evolution**: Model-based schemas do not participate in union views and are not updated when shared field groups change, preventing unexpected downstream changes.
* **Flexible field definition**: Add fields directly without tenant-id namespacing. Model-based schemas do not support XDM field groups.
* **No dependency on union schemas**: Improves query performance and reduces the operational overhead of managing global schema views.
* **Event-time ordering**: For time-series schemas, use a **timestamp identifier** to order events by occurrence time instead of ingestion time.

## Required fields

Model-based schemas require certain descriptors—metadata in the schema definition that controls key behaviors and constraints. Add the following descriptors as part of your schema definition.

### Primary key descriptor

Use a primary key descriptor to ensure each record is uniquely identifiable. The supported configurations are:

* **Single-field primary key**: Use one field with a unique value for each record.
* **Composite primary key**: Use multiple fields to form a unique identifier. For time-series schemas, the composite key must include the timestamp field identified by the timestamp descriptor.

>[!NOTE]
>
>In the UI Schema Editor, the version descriptor and timestamp descriptors appears as "[!UICOTRNOL Version identifier]" and "[!UICOTRNOL Timestamp identifier]" respectively.

**Example (single-field):**

```json
{
  "xdm:descriptor": "xdm:descriptorPrimaryKey",
  "xdm:sourceProperty": "customerId"
}
```

**Example (composite for time-series)**

```json
{
  "xdm:descriptor": "xdm:descriptorPrimaryKey",
  "xdm:sourceProperty": ["customerId", "eventTimestamp"]
}
```

### Version descriptor (identifier)

Define a version descriptor (identifier) to maintain correct record state and ensure the latest update is applied. When multiple records share the same primary key, the record with the highest version value is considered the most recent.

**Example:**

```json
{
  "xdm:descriptor": "xdm:descriptorVersion",
  "xdm:sourceProperty": "lastModified"
}
```

### Timestamp descriptor (identifier)

For time-series schemas, define a timestamp descriptor (identifier) to set the event time for ordering.

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

Relational data modeling is a primary use of model-based schemas. Application use cases may even refer to these schemas as 'relational schemas'. Relationship descriptors enable these connections by linking datasets across schemas without embedding foreign keys in data rows. They improve referential integrity, enable reusable modeling patterns, and support connected queries across applications. 

Create relationship descriptors at the schema level for dynamic resolution at query time. Cardinality values (1:1, many-to-one) provide guidance but do not enforce constraints during ingestion, supporting flexible data modeling across connected datasets.

Before you add relationship descriptors, determine the appropriate type and target:

* **One-to-one** – Each record in the source schema corresponds to at most one record in the destination schema.
* **Many-to-one** – Multiple records in the source schema may reference the same record in the destination schema.

>[!NOTE]
>
>You can define relationships between two model-based schemas or between a model-based schema and a standard schema. Relationships to ad-hoc schemas are not supported.

<!-- Q) 
Madeline commented: "model-based schema to standard might only be offered for b2b customers; that's how it will be on the UI" - is that still accurate? -->

**Example: One-to-one relationship**

```json
{
  "xdm:descriptor": "xdm:descriptorRelationship",
  "xdm:sourceProperty": "accountId",
  "xdm:destinationSchema": "https://ns.adobe.com/xdm/context/account",
  "xdm:destinationProperty": "accountId"
}
```

<!-- Q) 
Should these be `@type: "xdm:descriptorRelationship",` This could be a copy-pasting error? -->

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
> Model-based schemas can link to standard schemas, but cannot link to ad-hoc schemas.

## Data deletion and hygiene considerations {#data-hygiene-support}

Model-based schemas enable precise record-level deletions that have universal implications for all applications and use cases. Primary key, version, and timestamp descriptors provide the foundation for accurate record identification during deletion operations.

### Universal deletion impacts

All applications using model-based schemas must consider:

* **Referential integrity**: Deletions can affect related records across connected datasets
* **Compliance requirements**: Some industries require specific deletion behaviors and audit trails
* **Application behavior**: Downstream systems may need to handle deletion events appropriately
* **Data consistency**: Related datasets must maintain consistency during deletion operations
* **Deletion planning**: Account for downstream impacts across all connected datasets and applications during the design phase

For implementation guidance, see [Deleting records from model-based datasets](../../hygiene/ui/record-delete.md#model-based-record-delete).

## Limitations and considerations {#limitations}

Review the following limitations before using model-based schemas:

* Model-based schemas do not participate in union schemas.
* Schema evolution is manual; they do not auto-update when field groups change.

>[!IMPORTANT]
>
>Schema evolution becomes restricted after a dataset is initialized using the schema. Plan field names and types carefully beforehand as once data has been ingested, fields cannot be deleted or modified.

* Relationships are limited to one-to-one and many-to-one.
* Availability depends on your license or feature enablement.
* Composite primary keys are required for time-series schemas.

