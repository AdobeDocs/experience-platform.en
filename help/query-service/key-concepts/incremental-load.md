---
title: Incremental Load in Query Service
description: The incremental load feature uses both anonymous block and snapshot features to provide a near real-time solution for moving data from the data lake to your data warehouse whilst ignoring matching data.
exl-id: 1418d041-29ce-4153-90bf-06bd8da8fb78
---
# Incremental load in Query Service

The incremental load design pattern is a solution for managing data. The pattern only processes information in the dataset that has been created or modified since the last load execution. 

Incremental load uses various features provided by Adobe Experience Platform Query Service such as anonymous block and snapshots. This design pattern increases processing efficiency as any data already processed from the source is skipped. It can be used with both streaming and batch data processing.

This document provides a series of instructions to build a design pattern for incremental processing. These steps can be used as a template to create your own incremental data load queries.

## Getting started

The SQL examples throughout this document require you to have an understanding of the anonymous block and snapshot capabilities. It is recommended that you read the [sample anonymous block queries](./anonymous-block.md) documentation and also the [snapshot clause](../sql/syntax.md#snapshot-clause) documentation.

For guidance on any terminology used within this guide, refer to the [SQL syntax guide](../sql/syntax.md).

## Incrementally load data 

The steps below demonstrate how to create and incrementally load data using snapshots and the anonymous block feature. The design pattern can be used as a template for your own sequence of queries.

1. Create a `checkpoint_log` table to track the most recent snapshot used to process data successfully. The tracking table (`checkpoint_log` in this example) must first be initialized to `null` in order to incrementally process a dataset.

   ```SQL
   DROP TABLE IF EXISTS checkpoint_log;
   CREATE TABLE  checkpoint_log AS
   SELECT
      cast(NULL AS string) process_name,
      cast(NULL AS string) process_status,
      cast(NULL AS string) last_snapshot_id,
      cast(NULL AS TIMESTAMP) process_timestamp
      WHERE false;
   ```

1. Populate the `checkpoint_log` table with one empty record for the dataset that needs incremental processing. `DIM_TABLE_ABC` is the dataset to be processed in the example below. On the first occasion of processing `DIM_TABLE_ABC`, the `last_snapshot_id` is initialized as `null`. This allows you to process the entire dataset on the first occasion and incrementally thereafter.

   ```SQL
   INSERT INTO
      checkpoint_log
      SELECT
         'DIM_TABLE_ABC' process_name,
         'SUCCESSFUL' process_status,
         cast(NULL AS string) last_snapshot_id,
         CURRENT_TIMESTAMP process_timestamp;
   ```

1. Next, initialize `DIM_TABLE_ABC_Incremental` to contain processed output from `DIM_TABLE_ABC`. The anonymous block in the **required** execution section of the SQL example below, as described in steps one to four, is executed sequentially to process data incrementally.

   1. Set the `from_snapshot_id` which indicates where the processing starts from. The `from_snapshot_id` in the example is queried from the `checkpoint_log` table for use with `DIM_TABLE_ABC`. On the initial run, the snapshot ID will be `null` meaning that the entire dataset will be processed.
   1. Set the `to_snapshot_id` as the current snapshot ID of the source table (`DIM_TABLE_ABC`). In the example, this is queried from the metadata table of the source table. 
   1. Use the `CREATE` keyword to create `DIM_TABLE_ABC_Incremenal` as the destination table. The destination table persists the processed data from the source dataset (`DIM_TABLE_ABC`). This allows the processed data from the source table between `from_snapshot_id` and `to_snapshot_id`, to be incrementally appended to the destination table.
   1. Update the `checkpoint_log` table with the `to_snapshot_id` for the source data that `DIM_TABLE_ABC` processed successfully.
   1. If any of the sequentially executed queries of the anonymous block fail, the **optional** exception section is executed. This returns an error and ends the process.

   >[!NOTE]
   >
   >The `history_meta('source table name')` is a convenient method used to gain access to available snapshot in a dataset.

   ```SQL
   $$ BEGIN
       SET @from_snapshot_id = SELECT coalesce(last_snapshot_id, 'HEAD') FROM checkpoint_log a JOIN
                               (SELECT MAX(process_timestamp)process_timestamp FROM checkpoint_log
                                   WHERE process_name = 'DIM_TABLE_ABC' AND process_status = 'SUCCESSFUL' )b
                                   ON a.process_timestamp=b.process_timestamp;
       SET @to_snapshot_id = SELECT snapshot_id FROM (SELECT history_meta('DIM_TABLE_ABC')) WHERE  is_current = true;
       SET @last_updated_timestamp= SELECT CURRENT_TIMESTAMP;
       CREATE TABLE DIM_TABLE_ABC_Incremental AS
        SELECT  *  FROM DIM_TABLE_ABC SNAPSHOT BETWEEN @from_snapshot_id AND @to_snapshot_id ;
 
   INSERT INTO
      checkpoint_log
      SELECT
          'DIM_TABLE_ABC' process_name,
          'SUCCESSFUL' process_status,
         cast( @to_snapshot_id AS string) last_snapshot_id,
         cast( @last_updated_timestamp AS TIMESTAMP) process_timestamp;
 
   EXCEPTION
     WHEN OTHER THEN
       SELECT 'ERROR';
   END 
   $$;
   ```

1. Use the incremental data load logic in the anonymous block example below to allow any new data from the source dataset (since the most recent timestamp), to be processed and appended to the destination table at a regular cadence. In the example, data changes to `DIM_TABLE_ABC` will be processed and appended to `DIM_TABLE_ABC_incremental`.

   >[!NOTE]
   >
   > `_ID` is the Primary Key in both `DIM_TABLE_ABC_Incremental` and `SELECT history_meta('DIM_TABLE_ABC')`.

   ```SQL
   $$ BEGIN
       SET @from_snapshot_id = SELECT coalesce(last_snapshot_id, 'HEAD') FROM checkpoint_log a join
                               (SELECT MAX(process_timestamp)process_timestamp FROM checkpoint_log
                                   WHERE process_name = 'DIM_TABLE_ABC' AND process_status = 'SUCCESSFUL' )b
                                   ON a.process_timestamp=b.process_timestamp;
       SET @to_snapshot_id = SELECT snapshot_id FROM (SELECT history_meta('DIM_TABLE_ABC')) WHERE  is_current = true;
       SET @last_updated_timestamp= SELECT CURRENT_TIMESTAMP;
       INSERT INTO DIM_TABLE_ABC_Incremental
        SELECT  *  FROM DIM_TABLE_ABC SNAPSHOT BETWEEN @from_snapshot_id AND @to_snapshot_id WHERE NOT EXISTS (SELECT _id FROM DIM_TABLE_ABC_Incremental a WHERE _id=a._id);
 
   INSERT INTO
      checkpoint_log
      SELECT
          'DIM_TABLE_ABC' process_name,
          'SUCCESSFUL' process_status,
         cast( @to_snapshot_id AS string) last_snapshot_id,
         cast( @last_updated_timestamp AS TIMESTAMP) process_timestamp;
 
   EXCEPTION
     WHEN OTHER THEN
       SELECT 'ERROR';
   END
   $$;
   ```

This logic can be applied to any table to perform incremental loads.

## Expired Snapshots

>[!IMPORTANT]
>
>Snapshot metadata expires after **two** days. An expired snapshot invalidates the logic of the script provided above. 

To resolve the issue of an expired snapshot ID, insert the following command at the beginning of the anonymous block. The following line of code overrides the `@from_snapshot_id` with the earliest available `snapshot_id` from metadata.

```SQL
SET resolve_fallback_snapshot_on_failure=true;
```

The entire code block looks as follows:

```SQL
$$ BEGIN
    SET resolve_fallback_snapshot_on_failure=true;
    SET @from_snapshot_id = SELECT coalesce(last_snapshot_id, 'HEAD') FROM checkpoint_log a JOIN
                            (SELECT MAX(process_timestamp)process_timestamp FROM checkpoint_log
                                WHERE process_name = 'DIM_TABLE_ABC' AND process_status = 'SUCCESSFUL' )b
                                on a.process_timestamp=b.process_timestamp;
    SET @to_snapshot_id = SELECT snapshot_id FROM (SELECT history_meta('DIM_TABLE_ABC')) WHERE  is_current = true;
    SET @last_updated_timestamp= SELECT CURRENT_TIMESTAMP;
    INSERT INTO DIM_TABLE_ABC_Incremental
     SELECT  *  FROM DIM_TABLE_ABC SNAPSHOT BETWEEN @from_snapshot_id AND @to_snapshot_id WHERE NOT EXISTS (SELECT _id FROM DIM_TABLE_ABC_Incremental a WHERE _id=a._id);
 
Insert Into
   checkpoint_log
   SELECT
       'DIM_TABLE_ABC' process_name,
       'SUCCESSFUL' process_status,
      cast( @to_snapshot_id AS string) last_snapshot_id,
      cast( @last_updated_timestamp AS TIMESTAMP) process_timestamp;
EXCEPTION
  WHEN OTHER THEN
    SELECT 'ERROR';
END
$$;
```

## Next steps

By reading this document, you should have a better understanding of how to use anonymous block and snapshot features to perform incremental loads and can apply this logic to your own specific queries. For general guidance on query execution, please read the [guide on query execution in Query Service](../best-practices/writing-queries.md).
