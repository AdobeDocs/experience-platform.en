---
title: Sample Anonymous Block Queries
description: The Anonymous Block is a tool provided by Adobe Experience Platform Query Service, which allows you to schedule the execution of a sequence of queries on a to efficently 
---
# Sample queries for Anonymous block

https://jira.corp.adobe.com/browse/PLAT-104217

Adobe Experience Platform Query Service supports anonymous blocks. Anonymous blocks are used for chaining the queries where you have a dependency. These are batch queries that will essentially write the data, append the data, and create a new data set. As they are sequential, the next query will not execute until the first query in that sequence has completed.

A block is comprised of three sections: decleration, executable and exception-handling. The sections are defined by the keywords `DECLARE`, `BEGIN`, `EXCEPTION`, and `END`.
An anonymous block can have its own declaration and exception-handling sections.

A declaration section is where variables are declared, data types are defined, and memory is allocated. 

An executable section starts with the keyword `BEGIN` and ends with the keyword `END`. Any set of statements included within the `BEGIN` and `END` keywords will be executed in sequence. All the queries are executed in sequence.

The exception-handling section starts with the keyword `EXCEPTION` and contains the code to catch and handle exceptions raised by the code in the execution section. The exception clause means that if any of the queries fail, the entire block is stopped.

It is worth noting that a block is an executable statement and can therefore be nested within other blocks.

>[!NOTE]
>
>If one of the queries has a syntax error then the exception will be thrown and the entire block will be aborted. For this reason it is reccomended to test your queries on smaller datasets and ensure that they work as expected. Then begin to chain them query by query to ensure the block works as expected before you start operationalizing them.

The anonymous block feature is a very efficient way to perform a sequence of operations or queries. This chain of queries can be saved as a template and scheduled to run the entire sequence at a particular time or interval.

<!-- Anonymous block cna be used with the Incremental load feature as an ideal solution for near real-time movement of data from relational databases to data warehouses, data lakes or other databases. It can be used with both streaming and batch data. -->

## Example use case

You can create a set of sequenced queries because you want to write or append new datasets to the data lake. You create templates for the the queries. For ths reason you want the exception-handling section to fail if there is an error to preserve the integrity of the process.

If the sequence of queries were executed manually one by one, this would require the clusters to be spun up one after the other. However the autonomous block reuses the same cluster to execute the queries and is therefore much faster more efficient process. The cluster is essentially being reused across all of the chained queries which is highly efficient.

The executable section of the anonymous block can contain a collection of queries. These queries can test, write or append datasets in sequence. You can also create query templates for ease of reuse. If any of the queries fail due to the exceptions in place, the execution is stopped. 

<!-- This chain of events is more efficinet than executing the queries one after the other because we reuse the cluster resources -->

This sequential execution can also be scheduled to occur at a set time or intervals.

<!-- so we've got the beginning and the end clause you can put in a bunch of a batch queries in there. Essentially see tests queries that right or append datasets in sequence. Any of them fails. You can stop the execution. You can create templates, query templates out of this query like you know, begin and end, you save it as a query template and you can schedule it and you can schedule it based on whatever the schedule is and it will execute on schedule and the advantage of executing these queries in sequence is that first of all their executive one after the other. -->

Secondly, execution can be stopped if there is an exception clause and thirdly from a resource point of view, the queries as a chain will be more efficient than you executing the queries one after the other because we reuse the cluster resources

The cluster of resources helps Because every query what we do, every batch query that we get Jordan what we do is that we spin up a cluster, will load the query we execute the query and then we spin down the cluster. -->

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
