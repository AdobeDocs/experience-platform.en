---
title: Enable change data capture for source connections in the API
description: Learn how to enable change data capture for source connections in the API
exl-id: 362f3811-7d1e-4f16-b45f-ce04f03798aa
---
# Enable change data capture for source connections in the API

Change data capture in Adobe Experience Platform sources is a capability that you can use to maintain real-time data synchronization between your source and destination systems.

Currently, Experience Platform supports **incremental data copy**, which ensures that newly created or updated records in the source system are periodically copied to the ingested datasets. This process relies on usage of the **timestamp column**, such as `LastModified` in order to track changes and capture **only the newly inserted or updated data**. However, this method does not account for deleted records, which can lead to data inconsistencies over time.

With change data capture, a given flow captures and applies all changes, including inserts, updates, and deletes. Similarly, Experience Platform datasets remain fully synchronized with the source system.

You can use change data capture for the following sources:

<!-- TODO: PLAT-240919 Add Model-Based Schema CDC Integration Section
Requirements for update:

1. ADD NEW SECTION with heading "## Using CDC with model-based schemas"

2. ADD OVERVIEW PARAGRAPH:
"Change data capture works seamlessly with model-based schemas to maintain data synchronization between source systems and Experience Platform datasets. Model-based schemas enable support for multiple data models beyond standard XDM, including Campaign Orchestration, Data Distiller, and B2B use cases."

3. ADD REQUIREMENTS SUBSECTION with heading "### Model-based schema requirements"
Content: "When using CDC with model-based schemas, ensure your schema includes the following required fields:
- **Primary key**: Uniquely identifies each record
- **Version descriptor**: Tracks schema version changes  
- **Timestamp descriptor**: Required only for time-series schemas to track when events occurred"

4. ADD CONTROL COLUMN BEHAVIOR SUBSECTION with heading "### Control column handling"
Content: "Model-based schemas use the `_change_request_type` control column for CDC operations:
- The column contains values `u` (upsert) or `d` (delete) 
- This control column is read during ingestion time only
- The `_change_request_type` column is NOT stored in the target XDM schema
- The column is NOT mapped to any XDM fields in model-based schemas
- If the column is missing from source data, the default value `u` (upsert) is applied"

5. ADD RELATIONSHIPS SUBSECTION with heading "### Schema relationships"
Content: "Model-based schemas support relationships between schemas through primary and foreign key mappings, enabling normalized data structures across multiple related datasets."

6. ADD DATASET REQUIREMENTS SUBSECTION with heading "### Target dataset requirements"
Content: "When configuring CDC with model-based schemas:
- The target dataset must be based on a model-based schema
- Verify that all required fields (primary key, version descriptor) are present in your schema
- Ensure proper field mappings from source to target schema"

7. ADD CROSS-REFERENCE: "For comprehensive information on creating and configuring model-based schemas, see [Model-Based Schema overview](../../../xdm/schema/model-based.md)."

8. ADD AVAILABILITY NOTE: "Model-based schemas are available with appropriate Experience Platform entitlements."

9. FORMATTING REQUIREMENTS:
- Use sentence case for all headings
- Apply imperative voice for instructional content
- Follow Adobe Style Guide v3 principles
- Maintain consistent terminology: "model-based schemas" (not "Model-Based Schemas")
- Use "dataset" not "data set"

10. POSITION: Insert this entire section immediately after line 14, before the first source-specific section (## [!DNL Amazon S3])
-->

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
