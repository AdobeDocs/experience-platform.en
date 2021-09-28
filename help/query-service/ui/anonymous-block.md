---
title: Sample Anonymous Block Queries
description: The Anonymous Block is a tool provided by Adobe Experience Platform Query Service, which allows you to schedule the execution of a sequence of queries on a to efficently 
---
# Sample queries for Anonymous block

<!-- https://jira.corp.adobe.com/browse/PLAT-104217 -->

Adobe Experience Platform Query Service supports anonymous blocks. Anonymous blocks allow you to chain one or more SQL statements that are executed in sequence. They also allow for optional declaration and exception-handling.

The anonymous block feature is an efficient way to perform a sequence of operations or queries. This chain of queries can be saved as a template and scheduled to run at a particular time or interval. These queries can be used to write and append data to create a new data set and are typically used where you have a dependency.

A block is comprised of three sections: decleration, execution, and exception-handling. The sections are defined by the keywords `DECLARE`, `BEGIN`, `EXCEPTION`, and `END`. 

- The optional declaration section is where variables are declared, data types are defined, and memory is allocated. 
- An executable section starts with the keyword `BEGIN` and ends with the keyword `END`. Any set of statements included within the `BEGIN` and `END` keywords will be executed in sequence and ensures that subsequent queries will not execute until the previous query in the sequence has completed.
- The exception-handling section starts with the keyword `EXCEPTION` and contains the code to catch and handle exceptions should any of the SQL statements in the execution section fail. The exception clause means that if any of the queries fail, the entire block is stopped.

It is worth noting that a block is an executable statement and can therefore be nested within other blocks.

>[!NOTE]
>
> It is strongly reccomended to test your queries on smaller datasets and ensure that they work as expected. If a query has a syntax error then the exception will be thrown and the entire block will be aborted. Once you have verified the integrity of the queries you may begin to chain them. This will ensure that the block works as expected before you start operationalizing them.

<!-- Anonymous block cna be used with the Incremental load feature as an ideal solution for near real-time movement of data from relational databases to data warehouses, data lakes or other databases. It can be used with both streaming and batch data. -->

This document outlines how to use anonymous blocks in the following use cases. 

```SQL
$$BEGIN                                             
  set @current_sid = SELECT parent_id  from (SELECT history_meta('your_table_name')) WHERE  is_current = true;
  create temp table abcd_temp_table AS select count(1) from your_table_name  SNAPSHOT SINCE @current_sid;                                                                                                     
END$$;

```

## Example use case - write or append new datasets to the data lake

You can create a set of sequenced queries because you want to write or append new datasets to the data lake. You create templates for the the queries. For ths reason you want the exception-handling section to fail if there is an error to preserve the integrity of the process.

If the sequence of queries were executed manually one by one, this would require the clusters to be spun up one after the other. However the autonomous block reuses the same cluster to execute the queries and is therefore much faster more efficient process. The cluster is essentially being reused across all of the chained queries which is highly efficient.

The executable section of the anonymous block can contain a collection of queries. These queries can test, write or append datasets in sequence. You can also create query templates for ease of reuse. If any of the queries fail due to the exceptions in place, the execution is stopped. 

<!-- This chain of events is more efficinet than executing the queries one after the other because we reuse the cluster resources -->

This sequential execution can also be scheduled to occur at a set time or intervals.

<!-- so we've got the beginning and the end clause you can put in a bunch of a batch queries in there. Essentially see tests queries that right or append datasets in sequence. Any of them fails. You can stop the execution. You can create templates, query templates out of this query like you know, begin and end, you save it as a query template and you can schedule it and you can schedule it based on whatever the schedule is and it will execute on schedule and the advantage of executing these queries in sequence is that first of all their executive one after the other. -->

Secondly, execution can be stopped if there is an exception clause and thirdly from a resource point of view, the queries as a chain will be more efficient than you executing the queries one after the other because we reuse the cluster resources

The cluster of resources helps because every query what we do, every batch query that we get Jordan what we do is that we spin up a cluster, will load the query we execute the query and then we spin down the cluster. -->

## How to use anonymous block with snapshot to create streams

Whenever there is a change in the data set, iceberg will create a new snapshot ID.

Snapshot is a feature that is built into the dataset layer itself. When you run a chained series of queries on a schedule, it creates a snapshot in the data set at the last point where it was successful. That data is stored in the Delta log table as the snapshot ID.

This is the first part of the anonymous block feature [highlighted in 15:25 of the meeting video].

```
SET @from_snapshot_id = SELECT coalesce(last_snapshot_id, 'HEAD') from lookup_delta_log a join
                            (SELECT MAX(process_timestamp)process_timestamp FROM lookup_delta_log
                                WHERE process_name = 'DIM_TABLE_ABC' AND process_status = 'SUCCESSFUL' )b
                                on a.process_timestamp=b.process_timestamp;
```

## Up to 15:28

then the second statement stores the snapshot ID as a varaible for use:

```
SET @to_snapshot_id = SELECT snapshot_id from (SELECT history_meta('Source Table Name')) WHERE  is_current = true;
```

By keeping track of the last snapshot ID that was successful and comparing this to the current snapshot ID, the system knows that with respect to the last success that was done and the current success that that has happened, how many incremental rows are required for processing.

this is captured in the line :

```
select  *  from Live SNAPSHOT BETWEEN @from_snapshot_id AND @to_snapshot_id WHERE NOT EXISTS (SELECT _id FROM DIM_TABLE_ABC_Incremental a where _id=a._id);
```

## New use case

Whenever a data set is getting appended with new datasets, this query pattern provides a method for the end user to do incremental loading. Which is a big optimization to improve performance and save costs.

If new data is being added to the dataset via a pipeline and I need to update the resultant dataset. This feature allows you to only process the deltas and propagate the deltas in rather than the entire data set.

The system takes deltas on input goes through a sequence of operations and delta on output, and then that is appended to the output dataset.
 
## use case summary

if you have gotten input data set and you're adding new rows to that data set, the output dataset that is to be processed (like the results) depend on these extra rows that were added, not the entire row dataset. In that case it won't work. This won't work, it will not be enough, it's only deltas.

Each of the rows are disjointed from each other.
And in that case, the incremental load and the incremental processing is a very valuable tool as you will only be processing a fraction of the records that you otherwise would.


The anonymous block does not need to be used with the snaphot feature, it can be used for other processing goals. It can be used for other purposes beyond incremental loading.

(Incremental load is a design pattern)

### differnt tangent

`SET` is for setting a local variable.
It is used in the anonymus block to set the response from a query as a local variable.

{I can put in Cetus statements like I can create datasets where I purchased the results on the lake. But what you're saying is that I can also take the results of a select query and temporarily assign it to a local variable called. As you know this snapshot ID for example right and then I can reuse it. I can reuse it in the in the beginning thing,}

`SET` is used to persist the result of a select query with a variable.

**NOTE** The Examples are technically accurate but the table names will need to be replaced with placeholders.

PK might be able to build a simple example in one of the sandboxes and show that - MSG PK and ask
