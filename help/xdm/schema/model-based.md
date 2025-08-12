---
keywords: Experience Platform;home;popular topics;model-based schema; schema;Schema;xdm;experience data model;
solution: Experience Platform
title: Model-based Schemas
description: Learn how to create and use model-based schemas in Adobe Experience Platform, including required fields, ingestion methods, supported applications, and limitations.
---
# Model-based schemas

<!-- Explain what a model-based schema is, its purpose in Experience Platform, and how it differs from other schema types. Include a brief value proposition. -->
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

## Relationship support

You can define primary/foreign key relationships between schemas to enable one-to-many and many-to-one relationships. These relationships are enforced at the schema level and improve query accuracy and data integrity across linked datasets.

## Ingestion methods

The following are supported methods for writing data to model-based datasets:

* **Sources with change data capture (CDC)** – Requires a `_change_request_type` column:
  * `U` = upsert (default if the column is missing)
  * `D` = delete

>[!NOTE]
>
> `_change_request_type` is read during ingestion only and is **not stored or mapped** in XDM.

### Other available methods

These methods are supported but are not the primary ingestion workflows:

* **Data Distiller**
* **Local file upload**

## Workflow

Follow these steps to create and use a model-based schema:

1. In the Schema Editor, select **Model-Based** as the schema type.
2. Assign the required fields (Primary key, Version descriptor, and Timestamp descriptor if applicable).
3. *(Optional)* Define relationships with other schemas.
4. Create a dataset from the schema.
5. In the Sources UI, configure a dataflow to write to this dataset.
6. If using CDC, include a `_change_request_type` column in the incoming data.

>[!NOTE]
>
> Use a consistent naming convention for your schemas and datasets to ensure they can be easily identified later in the workflow.

## Links to related documentation

* [Model-based schema API reference](../api/schemas.md)
* [Create a schema in the UI](../tutorials/create-schema-ui.md)
* [Record delete hygiene for model-based datasets](../../hygiene/ui/record-delete.md)

## Limitations and considerations

* Only record-based schemas are currently supported for model-based schemas.
* Availability depends on your license or feature enablement.
* CDC is required for core ingestion workflows.
* Relationships are currently limited to one-to-many and many-to-one.
* Hygiene considerations apply when deleting records in Adobe while retaining them in the source.
