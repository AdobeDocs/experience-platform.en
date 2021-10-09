---
title: Sample Incremental Load Queries
description: The incremental load feature uses both anonymous block and snapshot features to provide a near real-time solution for moving data from the data lake to your data warehouse whilst ignoring matching .
---
# Sample incremental data load queries

The incremental load design pattern is a solution for managing data. The pattern only processes information in the dataset that has been created or modified since the last load execution. 

Incremental load uses various features provided by Experience Platform Query Service such as anonymous block and snapshots among others. This design pattern increases processing efficiency as any data already processed from the source is skipped. It can be used with both streaming and batch data processing.

This document provides a series of instructions to build a design pattern for incremental processing. These steps can be used as a template to create your own incremental data load queries.

## Getting Started

The SQL examples throughout this document require you to have an understanding of anonymous block and snapshot capabilities. Before using the incremental data load capability it is recommended that you read the [Sample anonymous block queries](./anonymous-block.md) documentation and also the [SNAPSHOT clause](https://experienceleague.adobe.com/docs/experience-platform/query/sql/syntax.html?lang=en#snapshot-clause) documentation.

For guidance on any terminology used within this guide please refer to the [SQL syntax guide](../sql/syntax.md).

## Steps

The steps below demonstrate how to create an incremental data load process using SNAPSHOTS and the anonymous block feature. The design pattern can be used as a template for your own sequence of queries.

1. Create a checkpoint_log table. A checkpoint log table is responsible for keeping a record of the changes made to the dataset.

```SQL
DROP TABLE IF EXISTS checkpoint_log;
CREATE TABLE  checkpoint_log AS
SELECT
   cast(null as string) process_name,
   cast(null as string) process_status,
   cast(null as string) last_snapshot_id,
   cast(null as timestamp) process_timestamp
   where false;
```

1. Populate the `checkpoint_log` table with one empty record for the table or dataset that needs incremental processing. This is demonstrated with `DIM_TABLE_ABC` in the example below. The empty record provides an initial timestamp as a baseline for the snapshot feature to compare against future changes to the dataset.

```SQL
Insert Into
   checkpoint_log
   SELECT
       'DIM_TABLE_ABC' process_name,
       'SUCCESSFUL' process_status,
       cast(null as string) last_snapshot_id,
       CURRENT_TIMESTAMP process_timestamp;
```

1. Create a destination dataset within the execution section of an anonymous block. `DIM_TABLE_ABC_Incremental` is the destination table in the example below. Next, using the `DIM_TABLE_ABC` source table you can begin processing on the source table and append it to destination table. If any one of the queries fails then the exception block is executed which returns an error and ends the process.

>[!NOTE]
>
>`SELECT history_meta('Source Table Name')`

```SQL
$$
BEGIN
    SET @from_snapshot_id = SELECT coalesce(last_snapshot_id, 'HEAD') from checkpoint_log a join
                            (SELECT MAX(process_timestamp)process_timestamp FROM checkpoint_log
                                WHERE process_name = 'DIM_TABLE_ABC' AND process_status = 'SUCCESSFUL' )b
                                on a.process_timestamp=b.process_timestamp;
    SET @to_snapshot_id = SELECT snapshot_id from (SELECT history_meta('Source Table Name')) WHERE  is_current = true;
    SET @last_updated_timestamp= Select CURRENT_TIMESTAMP;
    Create Table DIM_TABLE_ABC_Incremental as
     select  *  from DIM_TABLE_ABC SNAPSHOT BETWEEN @from_snapshot_id AND @to_snapshot_id ;
 
Insert Into
   checkpoint_log
   SELECT
       'DIM_TABLE_ABC' process_name,
       'SUCCESSFUL' process_status,
      cast( @to_snapshot_id as string) last_snapshot_id,
      cast( @last_updated_timestamp as timestamp) process_timestamp;
 
EXCEPTION
  WHEN OTHER THEN
    SELECT 'ERROR';
 END$$;
```

1. Use the incremental data load logic in the anonymous block example below to allow any new data from the source dataset (since the most recent timestamp), to be processed and appended to the destination table at a regular cadence. In the example, data changes to `DIM_TABLE_ABC` will be processed and appended to `DIM_TABLE_ABC_incremental`.

>[!NOTE]
>
> `_ID` is the Primary Key in both `DIM_TABLE_ABC_Incremental` and `SELECT history_meta('Source Table Name')`.

```SQL
$$
BEGIN
    SET @from_snapshot_id = SELECT coalesce(last_snapshot_id, 'HEAD') from checkpoint_log a join
                            (SELECT MAX(process_timestamp)process_timestamp FROM checkpoint_log
                                WHERE process_name = 'DIM_TABLE_ABC' AND process_status = 'SUCCESSFUL' )b
                                on a.process_timestamp=b.process_timestamp;
    SET @to_snapshot_id = SELECT snapshot_id from (SELECT history_meta('Source Table Name')) WHERE  is_current = true;
    SET @last_updated_timestamp= Select CURRENT_TIMESTAMP;
    Insert Into DIM_TABLE_ABC_Incremental
     select  *  from DIM_TABLE_ABC SNAPSHOT BETWEEN @from_snapshot_id AND @to_snapshot_id WHERE NOT EXISTS (SELECT _id FROM DIM_TABLE_ABC_Incremental a where _id=a._id);
 
Insert Into
   checkpoint_log
   SELECT
       'DIM_TABLE_ABC' process_name,
       'SUCCESSFUL' process_status,
      cast( @to_snapshot_id as string) last_snapshot_id,
      cast( @last_updated_timestamp as timestamp) process_timestamp;
 
EXCEPTION
  WHEN OTHER THEN
    SELECT 'ERROR';
 END$$;
```

This logic can be applied to any table to perform incremental loads.

>[!IMPORTANT]
>
>Snapshot metadata expires after **two** days. This would invalidate the logic of the script provided above. 

To resolve the issue of an expired SNAPHOT ID, insert the following command at the beginning of the anonymous block. The following line of code overrides the `@from_snapshot_id` with the earliest available `Snapshot_id` from metadata.

```SQL
SET resolve_fallback_snapshot_on_failure=true;
```

The entire code block would look as follows.

```SQL
$$
BEGIN
    SET @from_snapshot_id = SELECT coalesce(last_snapshot_id, 'HEAD') from checkpoint_log a join
                            (SELECT MAX(process_timestamp)process_timestamp FROM checkpoint_log
                                WHERE process_name = 'DIM_TABLE_ABC' AND process_status = 'SUCCESSFUL' )b
                                on a.process_timestamp=b.process_timestamp;
    SET @to_snapshot_id = SELECT snapshot_id from (SELECT history_meta('Source Table Name')) WHERE  is_current = true;
    SET @last_updated_timestamp= Select CURRENT_TIMESTAMP;
    SET resolve_fallback_snapshot_on_failure=true;
    Insert Into DIM_TABLE_ABC_Incremental
     select  *  from DIM_TABLE_ABC SNAPSHOT BETWEEN @from_snapshot_id AND @to_snapshot_id WHERE NOT EXISTS (SELECT _id FROM DIM_TABLE_ABC_Incremental a where _id=a._id);
 
Insert Into
   checkpoint_log
   SELECT
       'DIM_TABLE_ABC' process_name,
       'SUCCESSFUL' process_status,
      cast( @to_snapshot_id as string) last_snapshot_id,
      cast( @last_updated_timestamp as timestamp) process_timestamp;
EXCEPTION
  WHEN OTHER THEN
    SELECT 'ERROR';
 END$$;
```

## Next steps

By reading this document you better understand how to use anonymous block and snapshot features to perform incremental loads and can apply this logic to your own specific queries. For general guidance on query execution, please read the [guide on query execution in Query Service](./writing-queries.md).
