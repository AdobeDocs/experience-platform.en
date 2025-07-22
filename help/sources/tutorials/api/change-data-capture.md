---
title: Enable change data capture for source connections in the API
description: Learn how to enable change data capture for source connections in the API
---
# Enable change data capture for source connections in the API

Change data capture in Adobe Experience Platform sources is a capability that you can use to maintain real-time data synchronization between your source and destination systems.

Currently, Experience Platform supports **incremental data copy**, which ensures that newly created or updated records in the source system are periodically copied to the ingested datasets. This process relies on usage of the **timestamp column**, such as `LastModified` in order to track changes and capture **only the newly inserted or updated data**. However, this method does not account for deleted records, which can lead to data inconsistencies over time.

With change data capture, a given flow captures and applies all changes, including inserts, updates, and deletes. Similarly, Experience Platform datasets remain fully synchronized with the source system.

You can use change data capture for the following sources:

## [!DNL Amazon S3]

Ensure that `_change_request_type` is present in the [!DNL Amazon S3] file that you intend to ingest to Experience Platform. Additionally, you must ensure that the following valid values are included in the file:

* `u`: for inserts and updates
* `d`: for deletions.

If `_change_request_type` is not present in your file, then the default value of `u` will be used.

Read the following documentation for steps on how to enable change data capture for your [!DNL Amazon S3] source connection:

* [Create a [!DNL Amazon S3] base connection](../api/create/cloud-storage/s3.md).
* [Create a source connection for a cloud storage](../api/collect/cloud-storage.md#create-a-source-connection).

## [!DNL Azure Blob]

Ensure that `_change_request_type` is present in the [!DNL Azure Blob] file that you intend to ingest to Experience Platform. Additionally, you must ensure that the following valid values are included in the file:

* `u`: for inserts and updates
* `d`: for deletions.

If `_change_request_type` is not present in your file, then the default value of `u` will be used.

Read the following documentation for steps on how to enable change data capture for your [!DNL Azure Blob] source connection:

* [Create a [!DNL Azure Blob] base connection](../api/create/cloud-storage/blob.md).
* [Create a source connection for a cloud storage](../api/collect/cloud-storage.md#create-a-source-connection).

## [!DNL Azure Databricks]

You must enable **change data feed** in your [!DNL Azure Databricks] table in order to use change data capture in your source connection.

Use the following commands to explicitly enable the change data feed option in [!DNL Azure Databricks]

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

You must enable **change data feed** in your [!DNL Data Landing Zone] table in order to use change data capture in your source connection.

Use the following commands to explicitly enable the change data feed option in [!DNL Data Landing Zone].

Read the following documentation for steps on how to enable change data capture for your [!DNL Data Landing Zone] source connection:

* [Create a [!DNL Data Landing Zone] base connection](../api/create/cloud-storage/data-landing-zone.md).
* [Create a source connection for a cloud storage](../api/collect/cloud-storage.md#create-a-source-connection).

## [!DNL Google BigQuery]

To use change data capture in your [!DNL Google BigQuery] source connection. Navigate to your [!DNL Google BigQuery] page in the [!DNL Google Cloud] console and set `enable_change_history` to `TRUE`. This property enables change history for your data table.

For more information, read the guide on [data definition language statements in [!DNL GoogleSQL]](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#table_option_list).

Read the following documentation for steps on how to enable change data capture for your [!DNL Google BigQuery] source connection:

* [Create a [!DNL Google BigQuery] base connection](../api/create/databases/bigquery.md).
* [Create a source connection for a database](../api/collect/database-nosql.md#create-a-source-connection).

## [!DNL Google Cloud Storage]

Ensure that `_change_request_type` is present in the [!DNL Google Cloud Storage] file that you intend to ingest to Experience Platform. Additionally, you must ensure that the following valid values are included in the file:

* `u`: for inserts and updates
* `d`: for deletions.

If `_change_request_type` is not present in your file, then the default value of `u` will be used.

Read the following documentation for steps on how to enable change data capture for your [!DNL Google Cloud Storage] source connection:

* [Create a [!DNL Google Cloud Storage] base connection](../api/create/cloud-storage/google.md).
* [Create a source connection for a cloud storage](../api/collect/cloud-storage.md#create-a-source-connection).


## [!DNL SFTP]

Ensure that `_change_request_type` is present in the [!DNL SFTP] file that you intend to ingest to Experience Platform. Additionally, you must ensure that the following valid values are included in the file:

* `u`: for inserts and updates
* `d`: for deletions.

If `_change_request_type` is not present in your file, then the default value of `u` will be used.

Read the following documentation for steps on how to enable change data capture for your [!DNL SFTP] source connection:

* [Create a [!DNL SFTP] base connection](../api/create/cloud-storage/sftp.md).
* [Create a source connection for a cloud storage](../api/collect/cloud-storage.md#create-a-source-connection).


## [!DNL Snowflake]

You must enable **change tracking** in your [!DNL Snowflake] tables in order to use change data capture in your source connections.

In [!DNL Snowflake], enable change tracking by using the `ALTER TABLE` and setting `CHANGE_TRACKING` to `TRUE`.

```sql
ALTER TABLE mytable SET CHANGE_TRACKING = TRUE
```

For more information, read the [[!DNL Snowflake] guide on using the changes clause](https://docs.snowflake.com/en/sql-reference/constructs/changes#usage-notes).

Read the following documentation for steps on how to enable change data capture for your [!DNL Snowflake] source connection:

* [Create a [!DNL Snowflake] base connection](../api/create/databases/snowflake.md).
* [Create a source connection for a database](../api/collect/database-nosql.md#create-a-source-connection).

