---
title: Sample Incremental Load Queries
description: The incremental load feature uses both anonymous block and snapshot features to provide a near real-time solution for moving data from the data lake to your data warehouse whilst ignoring matching .
---
# Sample incremental data load queries

The incremental load method is an ideal solution for near real-time movement of data from relational databases to data warehouses, data lakes or other databases. 

Using other features such as anonymous block and the snapshot clause, the process only transfers data that has been newly created or modified since the previous data load. This increases efficiency of xxxx as matching data already available at the destination is ignored. 

It can be used with both streaming and batch data.

This document provides a series of examples that can be used as a template to create your own incremental data load queries.

## Getting Started

The SQL examples throughout this document require you to have an understanding of anonymous block and snapshot capabilities. Before using the Incremental data load capability it is recommended that you read the [Sample anonymous block queries](./anonymous-block.md) documentation and also the [SNAPSHOT clause](https://experienceleague.adobe.com/docs/experience-platform/query/sql/syntax.html?lang=en#snapshot-clause) documentation.

For guidance on any terminolgy used within this guide please refer to the [SQL syntax guide](../sql/syntax.md).

## Steps

The steps below demonstrate how to create an incremental data load process using SNAPSHOTS and the anonymous block feature.

1. Create a delta log table as displayed below.

A delta log table is a collective term for the tables responsible for storing changes made to the dataset and support a number of utility commands.

1. Populate the delta log table with one empty record

1. Build an anonymous block and create an initial dataset using logic provided below.

1. Build another anonymous block and insert data into the dataset using the incremental data load logic.

<!-- select  *  from Live SNAPSHOT BETWEEN @from_snapshot_id AND @to_snapshot_id WHERE NOT EXISTS (SELECT _id FROM DIM_TABLE_ABC_Incremental a where _id=a._id); -->

>[!IMPORTANT]
>
>Snapshot metadata expires after 7 days. This would invalidate the logic of the script provided above. To resolve teh issue of an expired SNAPHOT ID the following command must be placed at the beginning of the anonymous block. The following line of code overrides the `@from_snapshot_id` with the earliest available `Snapshot_id` from metadata.

```SQL
SET resolve_fallback_snapshot_on_failure=true;
```

