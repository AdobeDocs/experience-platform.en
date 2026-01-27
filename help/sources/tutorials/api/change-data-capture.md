---
title: Enable change data capture for source connections in the API
description: Learn how to enable change data capture for source connections in the API
exl-id: 362f3811-7d1e-4f16-b45f-ce04f03798aa
---
# Enable change data capture for source connections in the API

Use change data capture in Adobe Experience Platform sources to keep your source and destination systems synchronized in near real-time.

Experience Platform currently supports **incremental data copy**, which periodically transfers newly created or updated records from the source system to the ingested datasets. This method relies on a **timestamp column** to track changes, but it does not detect deletions, which can lead to data inconsistencies over time.

In contrast, change data capture captures and applies inserts, updates, and deletes in near real-time. This comprehensive change tracking ensures that datasets stay fully aligned with the source system and provides a complete change history, beyond what incremental copy supports. However, delete operations require special consideration as they affect all applications using the target datasets.

Change data capture in Experience Platform requires **[Data Mirror](../../../xdm/data-mirror/overview.md)** with [relational schemas](../../../xdm/schema/relational.md). You can provide change data to Data Mirror in two ways:

* **[Manual change tracking](#file-based-sources)**: Include a `_change_request_type` column in your dataset for sources that don't natively generate change data capture records
* **[Native change data capture exports](#database-sources)**: Use change data capture records exported directly from your source system

Both approaches require Data Mirror with relational schemas to preserve relationships and enforce uniqueness.

## Data Mirror with relational schemas

>[!AVAILABILITY]
>
>Data Mirror and relational schemas are available to Adobe Journey Optimizer **Orchestrated campaigns** license holders. They are also available as a **limited release** for Customer Journey Analytics users, depending on your license and feature enablement. Contact your Adobe representative for access.

>[!NOTE]
>
>**Orchestrated campaigns users**: Use the Data Mirror capabilities described in this document to work with customer data that maintains referential integrity. Even if your source does not use change data capture formatting, Data Mirror supports relational features such as primary key enforcement, record-level upserts, and schema relationships. These features ensure consistent and reliable data modeling across connected datasets.

Data Mirror uses relational schemas to extend change data capture and enable advanced database synchronization capabilities. For an overview of Data Mirror, see [Data Mirror overview](../../../xdm/data-mirror/overview.md).

Relational schemas extend Experience Platform to enforce primary key uniqueness, track row-level changes, and define schema-level relationships. With change data capture, they apply inserts, updates, and deletes directly in the data lake, reducing the need for Extract, Transform, Load (ETL) or manual reconciliation.

See [Relational schemas overview](../../../xdm/schema/relational.md) for more information.

### Relational schema requirements for change data capture

Before you use a relational schema with change data capture, configure the following identifiers:

* Uniquely identify each record with a primary key.  
* Apply updates in sequence using a version identifier.  
* For time-series schemas, add a timestamp identifier.

### Control column handling {#control-column-handling}

Use the `_change_request_type` column to specify how each row should be processed:

* `u` — upsert (default if the column is absent)  
* `d` — delete  

This column is evaluated only during ingestion and is not stored or mapped to XDM fields.  

### Workflow {#workflow}

To enable change data capture with a relational schema:

1. Create a relational schema.
2. Add the required descriptors:
   * [Primary key descriptor](../../../xdm/api/descriptors.md#primary-key-descriptor)
   * [Version descriptor](../../../xdm/api/descriptors.md#version-descriptor)
   * [Timestamp descriptor](../../../xdm/api/descriptors.md#timestamp-descriptor) (time-series only)
3. Create a dataset from the schema and enable change data capture.  
4. For file-based ingestion only: Add the `_change_request_type` column to your source files if you need to explicitly specify delete operations. CDC export configurations handle this automatically for database sources.  
5. Complete the source connection setup to enable ingestion.  

>[!NOTE]
>
>The `_change_request_type` column is only required for file-based sources (Amazon S3, Azure Blob, Google Cloud Storage, SFTP) when you want to explicitly control row-level change behavior. For database sources with native CDC capabilities, change operations are handled automatically through CDC export configurations. File-based ingestion assumes upsert operations by default—you only need to add this column if you want to specify delete operations in your file uploads.

>[!IMPORTANT]
>
>**Data deletion planning is required**. All applications that use relational schemas must understand deletion implications before implementing change data capture. Plan for how deletions will affect related datasets, compliance requirements, and downstream processes. See [data hygiene considerations](../../../hygiene/ui/record-delete.md#relational-record-delete) for guidance.

## Providing change data for file-based sources {#file-based-sources}

>[!IMPORTANT]
>
>File-based change data capture requires Data Mirror with relational schemas. Before following the file formatting steps below, ensure you have completed the [Data Mirror setup workflow](#workflow) described earlier in this document. The steps below describe how to format your data files to include change tracking information that will be processed by Data Mirror.

For file-based sources ([!DNL Amazon S3], [!DNL Azure Blob], [!DNL Google Cloud Storage], and [!DNL SFTP]), include a `_change_request_type` column in your files.

Use the `_change_request_type` values defined in the [Control column handling](#control-column-handling) section above.  

>[!IMPORTANT]
>
>For **file-based sources only**, certain applications may require a `_change_request_type` column with either `u` (upsert) or `d` (delete) to validate change tracking capabilities. For example, Adobe Journey Optimizer's **Orchestrated campaigns** feature requires this column to enable the "Orchestrated campaign" toggle and allow dataset selection for targeting. Application-specific validation requirements may vary.

Follow the source-specific steps below.

### Cloud Storage Sources {#cloud-storage-sources}

Enable change data capture for cloud storage sources by following these steps:

1. Create a base connection for your source:

   | Source | Base Connection Guide |
   |---|---|
   | [!DNL Amazon S3] | [Create a [!DNL Amazon S3] base connection](../api/create/cloud-storage/s3.md) |
   | [!DNL Azure Blob] | [Create a [!DNL Azure Blob] base connection](../api/create/cloud-storage/blob.md) |
   | [!DNL Google Cloud Storage] | [Create a [!DNL Google Cloud Storage] base connection](../api/create/cloud-storage/google.md) |
   | [!DNL SFTP] | [Create a [!DNL SFTP] base connection](../api/create/cloud-storage/sftp.md) |

2. [Create a source connection for a cloud storage](../api/collect/cloud-storage.md#create-a-source-connection).

All cloud storage sources use the same `_change_request_type` column format described in the [File-based sources](#file-based-sources) section above.

## Database sources {#database-sources}

### [!DNL Azure Databricks]

To use change data capture with [!DNL Azure Databricks], you must both enable **change data feed** in your source tables and configure Data Mirror with relational schemas in Experience Platform.

Use the following commands to enable change data feed on your tables:

**New table**

To apply change data feed to a new table, you must set the table property `delta.enableChangeDataFeed` to `TRUE` in the  `CREATE TABLE` command.

```sql
CREATE TABLE student (id INT, name STRING, age INT) TBLPROPERTIES (delta.enableChangeDataFeed = true)
```

**Existing table**

To apply change data feed to an existing table, you must set the table property `delta.enableChangeDataFeed` to `TRUE` in the  `ALTER TABLE` command.

```sql
ALTER TABLE myDeltaTable SET TBLPROPERTIES (delta.enableChangeDataFeed = true)
```

**All new tables**

To apply change data feed to all new tables, you must set your default properties to `TRUE`.

```sql
set spark.databricks.delta.properties.defaults.enableChangeDataFeed = true;
```

For more information, read the [[!DNL Azure Databricks] guide on enabling change data feed](https://docs.databricks.com/aws/en/delta/delta-change-data-feed#enable-change-data-feed).

Read the following documentation for steps on how to enable change data capture for your [!DNL Azure Databricks] source connection:

* [Create a [!DNL Azure Databricks] base connection](../api/create/databases/databricks.md).
* [Create a source connection for a database](../api/collect/database-nosql.md#create-a-source-connection).

### [!DNL Data Landing Zone]

To use change data capture with [!DNL Data Landing Zone], you must both enable **change data feed** in your source tables and configure Data Mirror with relational schemas in Experience Platform.

Read the following documentation for steps on how to enable change data capture for your [!DNL Data Landing Zone] source connection:

* [Create a [!DNL Data Landing Zone] base connection](../api/create/cloud-storage/data-landing-zone.md).
* [Create a source connection for a cloud storage](../api/collect/cloud-storage.md#create-a-source-connection).

### [!DNL Google BigQuery]

To use change data capture with [!DNL Google BigQuery], you must both enable change history in your source tables and configure Data Mirror with relational schemas in Experience Platform.

To enable change history in your [!DNL Google BigQuery] source connection, navigate to your [!DNL Google BigQuery] page in the [!DNL Google Cloud] console and set `enable_change_history` to `TRUE`. This property enables change history for your data table.

For more information, read the guide on [data definition language statements in [!DNL GoogleSQL]](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#table_option_list).

Read the following documentation for steps on how to enable change data capture for your [!DNL Google BigQuery] source connection:

* [Create a [!DNL Google BigQuery] base connection](../api/create/databases/bigquery.md).
* [Create a source connection for a database](../api/collect/database-nosql.md#create-a-source-connection).

### [!DNL Snowflake]

To use change data capture with [!DNL Snowflake], you must both enable **change tracking** in your source tables and configure Data Mirror with relational schemas in Experience Platform.

In [!DNL Snowflake], enable change tracking by using the `ALTER TABLE` and setting `CHANGE_TRACKING` to `TRUE`.

```sql
ALTER TABLE mytable SET CHANGE_TRACKING = TRUE
```

For more information, read the [[!DNL Snowflake] guide on using the changes clause](https://docs.snowflake.com/en/sql-reference/constructs/changes#usage-notes).

Read the following documentation for steps on how to enable change data capture for your [!DNL Snowflake] source connection:

* [Create a [!DNL Snowflake] base connection](../api/create/databases/snowflake.md).
* [Create a source connection for a database](../api/collect/database-nosql.md#create-a-source-connection).
