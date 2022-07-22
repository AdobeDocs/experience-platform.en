---
keywords: Experience Platform;query;query service;troubleshooting;guardrails;guidelines;limit;
title: Guardrails for Query Service
description: This document provides information on use and rate limits for Query Service data to help you optimize your query use.
---
# Guardrails for Query Service data

Guardrails are thresholds that provide guidance for data and system usage, performance optimization, and avoidance of errors or unexpected results in Adobe Experience Platform.

This document provides default use and rate limits for Query Service data to help you optimize system performance when querying data in relation to your licensing entitlements.

## Prerequisites

Before continuing with this document, you are recommended to have a good understanding of the two key Query Service capabilities described below:

1. Ad hoc queries: For executing `SELECT` queries to explore, experiment, and validate data where the results of the queries **are not stored** on the data lake.

1. Batch queries: For executing `INSERT TABLE AS SELECT` and `CREATE TABLE AS SELECT` queries to clean, shape, manipulate, and enrich data. The results of these queries **are stored** on the data lake. The metric for measuring the consumption of this functionality is computational hours.

The illustration below summarizes how Query Service capabilities are currently packaged and licensed:

![A diagram to explain the distribution and packaging of Query Service capabilities in relation to licencing.](./images/guardrails/query-capabilities.png)

## Limit types

There are two types of default limits within this document:

* **Soft limit**: It is possible to go beyond a soft limit, however soft limits provide a recommended guideline for system performance.

* **Hard limit**: A hard limit provides an absolute maximum.

>[!NOTE]
>
>The limits outlined in this document are constantly being improved. Please check back regularly for updates. If you would like to learn about custom limits, please contact your customer care representative.

## Primary entity performance guardrails

The tables below provide the recommended guardrail limits and descriptions for query execution when using a particular query pattern.

**Ad hoc**

| **Guardrail**| **Limit** | **Limit type** | **Description** |
|---|---|---|---|
| Maximum Execution Time  | 10 minutes  | Hard  |   |
| Query Concurrency | <ul><li>As specified in the application product description.</li><li>+1 (with every additional ad hoc query users add-on SKU pack purchased)</li></ul>  | Hard | This defines how many queries can be executed concurrently for a particular organization. If the concurrency limit is exceeded, the queries will be queued.  |
| Client Connector and Result Output Limit | <ul>Client Connector<li>Query UI (100 rows)</li><li>Third-party client (50,000)</li><li>[!DNL PostgresSQL] client (50,000)</li></ul> | Hard | <ul>The result of a query can be received via the following:<li>Query UI</li><li>Third-party client</li><li>[!DNL PostgresSQL] client</li>Note: Adding a limitation to the count of output may return results faster. For example, LIMIT 5, LIMIT 10, and so on.</li></ul> |
| Results Returned Via | Client UI  | N/A  | This defines how the results will be available to the users. |

**Batch**

| **Guardrail**| **Limit** | **Limit type** | **Description** |
|---|---|---|---|
| Maximum Execution Time| 24 hours  | Hard | This defines the maximum execution time for a batch SQL query. The processing time of a query is dependent on the volume of data to be processed and query complexity.  |
| User Concurrency  | No user limitation | N/A | Scheduled Batch Queries are asynchronous jobs so there is no user limitation.  |
| Compute hours for Batch Data Processing | As specified in the Customer's Adobe Experience Platform Intelligence Query Custom SKU Sales order.| Soft  | This defines the scoped amount of compute time per year a customer is allowed for executing batch queries to scan, process and write data back into the data lake. |
| Query Concurrency  | Supported | N/A | Scheduled Batch Queries are asynchronous jobs, therefore concurrent queries are supported. |
| Client Connector and Result Output Limit | <ul>Client Connector<li>Query UI (no upper limit to rows)</li><li>Third-party client (no upper limit to rows)</li><li>[!DNL PostgresSQL] client (no upper limit to rows)</li><li>REST APIs (no upper limit to rows)</li></ul> | Hard  | <ul>The result of a query can be made available via the following:<li>Can be stored as derived datasets</li><li>Can be inserted into the existing derived datasets</li>Note: There is no upper limit to the record count number from the query result.</ul> |
| Results Returned Via | Dataset | N/A | This defines how the results are made available to the users. |

## Next steps

After reading this document you should have a better understanding of the default limits for query execution with the available query patterns. 

See the following documentation for more information on Query Service:

* [Query Service API](./api/getting-started.md)
* [Query Service UI](./ui/overview.md)
