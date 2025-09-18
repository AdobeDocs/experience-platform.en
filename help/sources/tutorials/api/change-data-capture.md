---
title: Enable change data capture for source connections in the API
description: Learn how to enable change data capture for source connections in the API
exl-id: 362f3811-7d1e-4f16-b45f-ce04f03798aa
---
# Enable change data capture for source connections in the API

Use change data capture in Adobe Experience Platform sources to keep your source and destination systems synchronized in real time.

Currently, Experience Platform supports **incremental data copy**, which ensures that newly created or updated records in the source system are periodically copied to the ingested datasets. This process relies on usage of the **timestamp column**, such as `LastModified` in order to track changes and capture **only the newly inserted or updated data**. However, this method does not account for deleted records, which can lead to data inconsistencies over time.

With change data capture, each flow captures and applies inserts, updates, and deletes. As a result, datasets remain aligned with the source system.

You can use change data capture with the following sources:

## Using change data capture with Model-based schemas

>[!AVAILABILITY]
>
>Currently, model-based schemas are available depending on your license or feature enablement.

Model-based schemas extend Experience Platform to enforce primary keys, track row-level changes, and define schema-level relationships. With change data capture, they apply inserts, updates, and deletes directly in the data lake, reducing the need for Extract, Transform, Load (ETL) or manual reconciliation.

### Model-based schema requirements for change data capture

Before you use a model-based schema with change data capture, configure the following identifiers:

* Uniquely identify each record with a primary key.  
* Apply updates in sequence using a version identifier.  
* For time-series schemas, add a timestamp identifier.

### Control column handling

Use the `_change_request_type` column to specify how each row should be processed:

* `u` — upsert (default if the column is absent)  
* `d` — delete  

This column is evaluated only during ingestion and is not stored or mapped to XDM fields.  

### Workflow

To enable change data capture with a model-based schema:

1. [Create a model-based schema](../../../xdm/ui/resources/schemas#create-a-relational-schema).  
2. Add the [required descriptors](../../../xdm/api/descriptors.md#relationship-descriptor):  
   * Primary key  
   * Version identifier  
   * Timestamp identifier (time-series only)
3. Create a dataset from the schema and enable change data capture.  
4. Add the `_change_request_type` column to your source files or tables.  
5. Complete the source connection setup to enable ingestion.  

## File-based sources {#file-based-sources}

For file-based sources ([!DNL Amazon S3], [!DNL Azure Blob], [!DNL Google Cloud Storage], and [!DNL SFTP]), include a `_change_request_type` column in your files:

* `u`— upsert (default if omitted)  
* `d`— delete  

Follow the source-specific steps below.

### [!DNL Amazon S3]

Read the following documentation for steps on how to enable change data capture for your [!DNL Amazon S3] source connection:

* [Create a [!DNL Amazon S3] base connection](../api/create/cloud-storage/s3.md).  
* [Create a source connection for a cloud storage](../api/collect/cloud-storage.md#create-a-source-connection).  

See [File-based sources](#file-based-sources) for details on using `_change_request_type` with [!DNL Amazon S3].

### [!DNL Azure Blob]

Read the following documentation for steps on how to enable change data capture for your [!DNL Azure Blob] source connection:

* [Create a [!DNL Azure Blob] base connection](../api/create/cloud-storage/blob.md).  
* [Create a source connection for a cloud storage](../api/collect/cloud-storage.md#create-a-source-connection).

See [File-based sources](#file-based-sources) for details on using `_change_request_type` with [!DNL Azure Blob].

### [!DNL Google Cloud Storage]

Read the following documentation for steps on how to enable change data capture for your [!DNL Google Cloud Storage] source connection:

* [Create a [!DNL Google Cloud Storage] base connection](../api/create/cloud-storage/google.md).  
* [Create a source connection for a cloud storage](../api/collect/cloud-storage.md#create-a-source-connection).

See [File-based sources](#file-based-sources) for details on using `_change_request_type` with [!DNL Google Cloud Storage].

### [!DNL SFTP]

Read the following documentation for steps on how to enable change data capture for your [!DNL SFTP] source connection:

* [Create a [!DNL SFTP] base connection](../api/create/cloud-storage/sftp.md).  
* [Create a source connection for a cloud storage](../api/collect/cloud-storage.md#create-a-source-connection).

See [File-based sources](#file-based-sources) for details on using `_change_request_type` with [!DNL SFTP].

## [!DNL Azure Databricks]

You must enable **change data feed** in your [!DNL Azure Databricks] tables to use change data capture in your source connection.

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

## [!DNL Data Landing Zone]

You must enable **change data feed** in your [!DNL Data Landing Zone] tables to use change data capture in your source connection.

Read the following documentation for steps on how to enable change data capture for your [!DNL Data Landing Zone] source connection:

* [Create a [!DNL Data Landing Zone] base connection](../api/create/cloud-storage/data-landing-zone.md).
* [Create a source connection for a cloud storage](../api/collect/cloud-storage.md#create-a-source-connection).

## [!DNL Google BigQuery]

To use change data capture in your [!DNL Google BigQuery] source connection. Navigate to your [!DNL Google BigQuery] page in the [!DNL Google Cloud] console and set `enable_change_history` to `TRUE`. This property enables change history for your data table.

For more information, read the guide on [data definition language statements in [!DNL GoogleSQL]](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#table_option_list).

Read the following documentation for steps on how to enable change data capture for your [!DNL Google BigQuery] source connection:

* [Create a [!DNL Google BigQuery] base connection](../api/create/databases/bigquery.md).
* [Create a source connection for a database](../api/collect/database-nosql.md#create-a-source-connection).

## [!DNL Snowflake]

You must enable **change tracking** in your [!DNL Snowflake] tables to use change data capture in your source connections.

In [!DNL Snowflake], enable change tracking by using the `ALTER TABLE` and setting `CHANGE_TRACKING` to `TRUE`.

```sql
ALTER TABLE mytable SET CHANGE_TRACKING = TRUE
```

For more information, read the [[!DNL Snowflake] guide on using the changes clause](https://docs.snowflake.com/en/sql-reference/constructs/changes#usage-notes).

Read the following documentation for steps on how to enable change data capture for your [!DNL Snowflake] source connection:

* [Create a [!DNL Snowflake] base connection](../api/create/databases/snowflake.md).
* [Create a source connection for a database](../api/collect/database-nosql.md#create-a-source-connection).
