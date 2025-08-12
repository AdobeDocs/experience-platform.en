---
keywords: Experience Platform;home;popular topics;model-based schema; schema;Schema;xdm;experience data model;
solution: Experience Platform
title: Model-based Schemas
description: Learn how to create and use model-based schemas in Adobe Experience Platform, including required fields, ingestion methods, supported applications, and limitations.
---
# Model-based schemas

A model-based schema is a type of schema in Adobe Experience Platform designed for structured, relational-style data stored in the Data Lake. It supports primary key enforcement, version tracking, and relationships between datasets.

>[!AVAILABILITY]
>
>Currently, model-based schemas are **record-based only** and available based on your license or feature enablement. This includes customers with **Campaign Orchestration**, **Data Distiller**, and **B2B** capabilities.

## Required fields

Model-based schemas require specific fields to support primary key enforcement and record-level changes:

* **Primary key** – Required to ensure uniqueness of records.
* **Version descriptor** – Required to handle out-of-order updates.  
  >[!NOTE]
  >
  > In some UI versions, this field may appear as "version identifier."
* **Timestamp descriptor** – Required for time-series schemas only; tracks event time versus update time.

For detailed guidance on adding these fields when creating a schema, see [Create a schema in the UI](PLACEHOLDER).

## Relationship support

You can define primary/foreign key relationships between schemas to enable one-to-many and many-to-one relationships. These relationships are enforced at the schema level and improve query accuracy and data integrity across linked datasets.

For step-by-step instructions on adding relationships, see [Define a schema relationship in the UI](PLACEHOLDER).

## Ingestion methods

The following are supported methods for writing data to model-based datasets:

* **Sources with change data capture (CDC)** – Requires a `_change_request_type` column:
  * `U` = upsert (default if the column is missing)
  * `D` = delete

>[!NOTE]
>
> `_change_request_type` is read during ingestion only and is **not stored or mapped** in XDM.

For detailed instructions on using CDC during ingestion, see [Create a dataflow with CDC in the Sources UI](PLACEHOLDER).

### Other available methods

These methods are supported but are not the primary ingestion workflows:

* **Data Distiller** — See [Ingest data with Data Distiller](PLACEHOLDER).
* **Local file upload** — See [Upload a file to the Data Lake](PLACEHOLDER).

## Workflow

Follow these steps to create and use a model-based schema:

1. In the [Schema Editor UI](PLACEHOLDER), select **Model-Based** as the schema type.
2. Assign the required fields (Primary key, Version descriptor, and Timestamp descriptor if applicable).
3. *(Optional)* Define relationships with other schemas as described in [Define a schema relationship in the UI](PLACEHOLDER).
4. Create a dataset from the schema.
5. In the [Sources UI](PLACEHOLDER), configure a dataflow to write to this dataset.
6. If using CDC, include a `_change_request_type` column in the incoming data.

>[!NOTE]
>
> Use a consistent naming convention for your schemas and datasets to ensure they can be easily identified later in the workflow.

For information on how to delete records from model-based datasets while retaining them in the source, see [Record delete hygiene for model-based datasets](PLACEHOLDER).

## Limitations and considerations

* Only record-based schemas are currently supported for model-based schemas.
* Availability depends on your license or feature enablement.
* CDC is required for core ingestion workflows.
* Relationships are currently limited to one-to-many and many-to-one.
* Hygiene considerations apply when deleting records in Adobe while retaining them in the source.
