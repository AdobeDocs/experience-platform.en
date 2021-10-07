---
title: Sample Incremental Load Queries
description: The incremental load feature uses both anonymous block and snapshot features to provide a near real-time solution for moving data from the data lake to your data warehouse whilst ignoring matching .
---
# Sample incremental data load queries

The incremental load method is an ideal solution for near real-time movement of data from relational databases to data warehouses, data lakes or other databases. 

Using other features such as anonymous block and the snapshot clause, the process only transfers data that has been newly created or modified since the previous data load. This increases processing efficiency as the matching data already available at the destination is ignored. 

This method can be used with both streaming and batch data.

This document provides a series of examples that can be used as a template to create your own incremental data load queries.

## Getting Started

The SQL examples throughout this document require you to have an understanding of anonymous block and snapshot capabilities. Before using the Incremental data load capability it is recommended that you read the [Sample anonymous block queries](./anonymous-block.md) documentation and also the [SNAPSHOT clause](https://experienceleague.adobe.com/docs/experience-platform/query/sql/syntax.html?lang=en#snapshot-clause) documentation.

For guidance on any terminolgy used within this guide please refer to the [SQL syntax guide](../sql/syntax.md).

## Steps

The steps below demonstrate how to create an incremental data load process using SNAPSHOTS and the anonymous block feature.

1. Create a delta log table as displayed below (A delta log table is a collective term for the tables responsible for storing changes made to the dataset and support a number of utility commands).

```SQL
DROP TABLE IF EXISTS lookup_delta_log;
CREATE TABLE  lookup_delta_log AS
SELECT
   cast(null as string) process_name,
   cast(null as string) process_status,
   cast(null as string) last_snapshot_id,
   cast(null as timestamp) process_timestamp
   where false;
```

1. Populate the delta log table with one empty record.

```SQL
Insert Into
   lookup_delta_log
   SELECT
       'DIM_TABLE_ABC' process_name,
       'SUCCESSFUL' process_status,
       cast(null as string) last_snapshot_id,
       CURRENT_TIMESTAMP process_timestamp;
```

1. Build an anonymous block and create an initial dataset using logic provided below.

>[!NOTE]
>
>`SELECT history_meta('Source Table Name')`

```SQL
$$
BEGIN
    SET @from_snapshot_id = SELECT coalesce(last_snapshot_id, 'HEAD') from lookup_delta_log a join
                            (SELECT MAX(process_timestamp)process_timestamp FROM lookup_delta_log
                                WHERE process_name = 'DIM_TABLE_ABC' AND process_status = 'SUCCESSFUL' )b
                                on a.process_timestamp=b.process_timestamp;
    SET @to_snapshot_id = SELECT snapshot_id from (SELECT history_meta('Source Table Name')) WHERE  is_current = true;
    SET @last_updated_timestamp= Select CURRENT_TIMESTAMP;
    Create Table DIM_TABLE_ABC_Incremental as
     select  *  from Live SNAPSHOT BETWEEN @from_snapshot_id AND @to_snapshot_id ;
 
Insert Into
   lookup_delta_log
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

1. Build another anonymous block and insert data into the dataset using the incremental data load logic.

>[!NOTE]
>
> `_ID` is the Primary Key in both `DIM_TABLE_ABC_Incremental` and `SELECT history_meta('Source Table Name')`.


This logic can be applied to any table to perform incremental loads.

<!-- select  *  from Live SNAPSHOT BETWEEN @from_snapshot_id AND @to_snapshot_id WHERE NOT EXISTS (SELECT _id FROM DIM_TABLE_ABC_Incremental a where _id=a._id); -->

>[!IMPORTANT]
>
>Snapshot metadata expires after 7 days. This would invalidate the logic of the script provided above. 

To resolve the issue of an expired SNAPHOT ID the following command must be placed at the beginning of the anonymous block. The following line of code overrides the `@from_snapshot_id` with the earliest available `Snapshot_id` from metadata.

```SQL
SET resolve_fallback_snapshot_on_failure=true;
```

The entire code block would look as follows.

```SQL
$$
BEGIN
    SET @from_snapshot_id = SELECT coalesce(last_snapshot_id, 'HEAD') from lookup_delta_log a join
                            (SELECT MAX(process_timestamp)process_timestamp FROM lookup_delta_log
                                WHERE process_name = 'DIM_TABLE_ABC' AND process_status = 'SUCCESSFUL' )b
                                on a.process_timestamp=b.process_timestamp;
    SET @to_snapshot_id = SELECT snapshot_id from (SELECT history_meta('Source Table Name')) WHERE  is_current = true;
    SET @last_updated_timestamp= Select CURRENT_TIMESTAMP;
    SET resolve_fallback_snapshot_on_failure=true;
    Insert Into DIM_TABLE_ABC_Incremental
     select  *  from Live SNAPSHOT BETWEEN @from_snapshot_id AND @to_snapshot_id WHERE NOT EXISTS (SELECT _id FROM DIM_TABLE_ABC_Incremental a where _id=a._id);
 
Insert Into
   lookup_delta_log
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
