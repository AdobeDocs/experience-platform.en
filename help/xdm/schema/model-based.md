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

Model-based schemas offer the following capabilities:

* Support for both record and time-series schema behaviors.
<!-- CONFLICT: KT wiki states both record and time-series are supported; Adam stated only record-based schemas are currently available. -->
* Primary key enforcement to ensure uniqueness of each record.
* Version control using a version descriptor to correctly apply updates, even if data arrives out of order.
* Timestamp tracking for time-series data to distinguish event time from processing time.
* Support for one-to-many and many-to-one relationships between schemas.
* Flexible custom field creation without tenant-id namespacing.
* Simplified schema evolution, with no automatic updates when unrelated field groups change.

## Required fields

Model-based schemas include specific descriptors to ensure reliable data operations:

* **Primary key** – Ensures each record is uniquely identified. Supports single-field and composite keys. For time-series schemas, the composite key must include the timestamp column identified by the timestamp descriptor.
<!-- CONFLICT: KT wiki supports single and composite PKs; Adam indicated only a single primary key field is required, with timestamp handled separately for time-series. -->
* **Version descriptor** – Required to manage out-of-order updates and maintain correct record state. May appear as "version identifier" in some UI versions.
* **Timestamp descriptor** – Required for time-series schemas to distinguish event time from ingestion or update time.

For more detail on creating descriptors in the API, see [PLACEHOLDER].

## Relationship support

Model-based schemas allow you to define relationships between datasets, improving join operations and maintaining referential integrity:

* One-to-many relationships.
* Many-to-one relationships.

These relationships can exist between two model-based schemas or between a model-based schema and a standard schema.  
For workflow details, see [PLACEHOLDER] in the Schema Editor documentation.

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
