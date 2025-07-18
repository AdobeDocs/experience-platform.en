---
title: Change data capture in Experience Platform Sources
description: Learn about change data capture in Experience Platform sources.
---
# Change data capture in sources

Change data capture in Adobe Experience Platform sources is a capability that you can use to maintain real-time data synchronization between your source and destination systems.

Currently, Experience Platform supports **incremental data copy**, which ensures that newly created or updated records in the source system are periodically copied to the ingested datasets. This process relies on usage of the **timestamp column**, such as `LastModified` in order to track changes and capture **only the newly inserted or updated data**. However, this method does not account for deleted records, which can lead to data inconsistencies over time.

With change data capture, a given flow captures and applies all changes, including inserts, updates, and deletes. Similarly, Experience Platform datasets remain fully synchronized with the source system.

As of today, the following sources support change data capture:

| Source | Prerequisite |
| --- | --- |
| [!DNL Amazon S3] |
| [!DNL Azure Blob] |
| [!DNL Azure Databricks] | You must enable change data feed for your [!DNL Azure Databricks] datable. Your commands may change depending on your use case: <ul><li>**New table**: Set the table property `delta.enableChangeDataFeed` to `TRUE` in the `CREATE TABLE` command. For example: `CREATE TABLE student (id INT, name STRING, age INT) TBLPROPERTIES (delta.enableChangeDataFeed = true)`|
| [!DNL Data Landing Zone] |
| [!DNL Google BigQuery] | Navigate to your [!DNL Google BigQuery] page in the [!DNL Google Cloud] console and set `enable_change_history` to `TRUE`. This property enables change history for your data table. For more information, read the guide on [data definition language statements in [!DNL GoogleSQL]](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#table_option_list). |
| [!DNL Google Cloud Storage] |
| [!DNL SFTP] |
| [!DNL Snowflake] | In [!DNL Snowflake], you must enable change tracking for your table using the following command: `ALTER TABLE mytable SET CHANGE_TRACKING = TRUE`. For more information, read the [[!DNL Snowflake] guide on using the changes clause](https://docs.snowflake.com/en/sql-reference/constructs/changes#usage-notes).|

{style="table-layout:auto"}