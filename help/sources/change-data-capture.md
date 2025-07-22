---
title: Change data capture in Experience Platform Sources
description: Learn about change data capture in Experience Platform sources.
---
# Change data capture in sources

Change data capture in Adobe Experience Platform sources is a capability that you can use to maintain real-time data synchronization between your source and destination systems.

Currently, Experience Platform supports **incremental data copy**, which ensures that newly created or updated records in the source system are periodically copied to the ingested datasets. This process relies on usage of the **timestamp column**, such as `LastModified` in order to track changes and capture **only the newly inserted or updated data**. However, this method does not account for deleted records, which can lead to data inconsistencies over time.

With change data capture, a given flow captures and applies all changes, including inserts, updates, and deletes. Similarly, Experience Platform datasets remain fully synchronized with the source system.

You can use change data capture for the following sources:

## [!DNL Amazon S3]

Ensure that `_change_request_type` is present in the [!DNL Amazon S3] file that you intend to ingest to Experience Platform. Additionally, you must ensure that the following valid values are included in the file:

* `u`: for inserts and updates
* `d`: for deletions.

If `_change_request_type` is not present in your file, then the default value of `u` will be used.

## [!DNL Azure Blob]

Ensure that `_change_request_type` is present in the [!DNL Azure Blob] file that you intend to ingest to Experience Platform. Additionally, you must ensure that the following valid values are included in the file:

* `u`: for inserts and updates
* `d`: for deletions.

If `_change_request_type` is not present in your file, then the default value of `u` will be used.


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

## [!DNL Data Landing Zone]

You must enable **change data feed** in your [!DNL Data Landing Zone] table in order to use change data capture in your source connection.

Use the following commands to explicitly enable the change data feed option in [!DNL Data Landing Zone].

## [!DNL Google BigQuery]

To use change data capture in your [!DNL Google BigQuery] source connection. Navigate to your [!DNL Google BigQuery] page in the [!DNL Google Cloud] console and set `enable_change_history` to `TRUE`. This property enables change history for your data table.

For more information, read the guide on [data definition language statements in [!DNL GoogleSQL]](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#table_option_list)

## [!DNL Google Cloud Storage]

Ensure that `_change_request_type` is present in the [!DNL Google Cloud Storage] file that you intend to ingest to Experience Platform. Additionally, you must ensure that the following valid values are included in the file:

* `u`: for inserts and updates
* `d`: for deletions.

If `_change_request_type` is not present in your file, then the default value of `u` will be used.

## [!DNL SFTP]

Ensure that `_change_request_type` is present in the [!DNL SFTP] file that you intend to ingest to Experience Platform. Additionally, you must ensure that the following valid values are included in the file:

* `u`: for inserts and updates
* `d`: for deletions.

If `_change_request_type` is not present in your file, then the default value of `u` will be used.


## [!DNL Snowflake]

You must enable **change tracking** in your [!DNL Snowflake] tables in order to use change data capture in your source connections.

In [!DNL Snowflake], enable change tracking by using the `ALTER TABLE` and setting `CHANGE_TRACKING` to `TRUE`.

```sql
ALTER TABLE mytable SET CHANGE_TRACKING = TRUE
```

For more information, read the [[!DNL Snowflake] guide on using the changes clause](https://docs.snowflake.com/en/sql-reference/constructs/changes#usage-notes).

