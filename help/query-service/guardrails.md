---
keywords: Experience Platform;query;query service;troubleshooting;guardrails;guidelines;limit;
title: Guardrails for Query Service
description: This document provides information on usage limits for Query Service data to help you optimize your query use.
exl-id: 1ad5dcf4-d048-49ff-97e3-07040392b65b
---
# Guardrails for Query Service

Guardrails are thresholds that guide data and system usage, performance optimization, and avoidance of errors or unexpected results in Adobe Experience Platform.

This document provides default usage limits for Query Service data to help you optimize system performance when querying data in relation to your licensing entitlements.

## Prerequisites

Before continuing with this document, you should have a good understanding of the key Query Service definitions and capabilities. They are described below:

* **Ad hoc queries**: For executing `SELECT` queries to explore, experiment, and validate data where the results of the queries **are not stored** on the data lake.

* **Batch queries**: For executing `INSERT TABLE AS SELECT` and `CREATE TABLE AS SELECT` queries to clean, shape, manipulate, and enrich data. The results of these queries **are stored** on the data lake. The metric for measuring the consumption of this functionality is computational hours.

* **Query Service users**: Query Service users provided within your current license for Customer Journey Analytics, Adobe Real-Time Customer Data Platform, and/or Adobe Journey Optimizer may also be used with Data Distiller. Query Service users are shared between features. 

* **Ad hoc users**: Ad hoc users are the ones executing ad hoc queries.

* **Batch users**: Batch users are the ones executing batch Queries.

* **Reporting API**: An API for making data fetch calls (internally or externally). Extended reporting data models are derived from the native reporting data models in Adobe Experience Platform such as the Real-Time CDP dashboards data model.

The illustration below summarizes how Query Service capabilities are currently packaged and licensed:

## Guardrail types

There are two types of default limits within this document:

| Guardrail type | Description|
|----------|---------|
| **Performance guardrail (Soft limit)** | Performance guardrails are usage limits that relate to the scoping of your use cases. When exceeding performance guardrails, you may experience performance degradation and latency. Adobe is not responsible for such performance degradation. Customers who consistently exceed a performance guardrail may elect to license additional capacity to avoid performance degradation.|
| **System-enforced guardrails (Hard limit)** | System-enforced guardrails are enforced by the Real-Time CDP UI or API. These are limits that you cannot exceed as the UI and API will block you from doing so or will return an error.|

{style="table-layout:auto"}

>[!NOTE]
>
>The default limits outlined in this document are constantly being improved. Please check back regularly for updates.

## Primary entity performance guardrails

The tables below provide the recommended guardrail limits and descriptions for query execution when using a particular query pattern.

**Ad hoc queries**

| Guardrail| Limit | Limit type | Description |
|---|---|---|---|
| Maximum execution time  | 10 minutes  | System-enforced guardrail  | This defines the maximum output time for an ad-hoc SQL query. Exceeding the time limit to return a result throws the error code 53400.  |
| Concurrent Query Service users | <ul><li>As specified in the application product description.</li><li>+5 (with every additional Ad hoc query users add-on pack purchased)</li></ul> | System-enforced guardrail | This defines how many users can create sessions concurrently for a particular organization. If the concurrency limit is exceeded, the user receives a `Session Limit Reached` error. |
| Query concurrency | <ul><li>As specified in the application product description.</li><li>+1 (with every additional Ad hoc query user add-on SKU pack purchased)</li></ul> | System-enforced guardrail | This defines how many queries can be executed concurrently for a particular organization. If the concurrency limit is exceeded, the queries are queued.  |
| Client connector and result output Limit | Client Connector<ul><li>Query UI (100 rows)</li><li>Third-party client (50,000)</li><li>[!DNL PostgresSQL] client (50,000)</li></ul> | System-enforced guardrail | The result of a query can be received through the following means:<ul><li>Query Service UI</li><li>Third-party client</li><li>[!DNL PostgresSQL] client</li></ul>Note: Adding a limitation to the output count may return results faster. For example, `LIMIT 5`, `LIMIT 10`, and so on. |
| Results returned via | Client UI  | N/A  | This defines how the results are made available to the users. |

{style="table-layout:auto"}

**Batch queries**

| **Guardrail**| **Limit** | **Limit type** | **Description** |
|---|---|---|---|
| Maximum execution time| 24 hours  | System-enforced guardrail | This defines the maximum execution time for a batch SQL query.<br>The processing time of a query is dependent on the volume of data to be processed and query complexity.  |
|Concurrent Query Service Users for Unscheduled Batch | <ul><li>As specified in the application product description.</li><li>+5 (with every additional Ad hoc query users add-on pack purchased)</li></ul> | System-enforced guardrail | For unscheduled batch queries (for example CTAS/ITAS queries in interactive mode), this defines how many users can create sessions concurrently for a particular organization. If the concurrency limit is exceeded, the user receives a `Session Limit Reached` error. |
|Concurrent Query Service Users for scheduled Batch |  No user limitation |  N/A | Scheduled batch queries are asynchronous jobs so there is no user limitation. |
| Computational hours for batch data processing | As specified in the Customer's Adobe Experience Platform Intelligence Query Custom SKU Sales order| Performance guardrail | This defines the scoped amount of computational time per year a customer is allowed for executing batch queries to scan, process, and write data back into the data lake. |
| Query concurrency  | Supported | N/A | Scheduled batch queries are asynchronous jobs, therefore concurrent queries are supported. |
| Client connector and result output limit | Client Connector<ul><li>Query UI (no upper limit to rows)</li><li>Third-party client (no upper limit to rows)</li><li>[!DNL PostgresSQL] client (no upper limit to rows)</li><li>REST APIs (no upper limit to rows)</li></ul> | System-enforced guardrail  | The result of a query can be made available using the following methods:<ul><li>Can be stored as derived datasets</li><li>Can be inserted into the existing derived datasets</li></ul>Note: There is no upper limit to the record count number from the query result. |
| Results returned via | Dataset | N/A | This defines how the results are made available to the users. |

{style="table-layout:auto"}

## Query accelerated store {#query-accelerated-store}

The table below provides the recommended guardrail limits and description for the query accelerated store.

| Guardrail| Limit | Limit type | Description |
|---|---|---|---|
| Query concurrency | 4  | System-enforced guardrail | To ensure that queries on aggregated data via the reporting API (including queries that enhance data models such as the Real-Time CDP data models) have the resources to execute efficiently, the reporting API tracks resource utilization by assigning concurrency slots to each query. The system puts queries into a queue and waits until concurrency slots become available or they can be served from the cache. A maximum of four concurrent query slots are available at any given time.<br>If you access the reporting API through a BI tool and need more concurrency, a BI server is required. |

{style="table-layout:auto"}

## Next steps

After reading this document you should have a better understanding of the default limits for query execution with the available query patterns. 

See the following documentation for more information on Query Service:

* [Query Service API](./api/getting-started.md)
* [Query Service UI](./ui/overview.md)

See the following documentation for more information on other Experience Platform services guardrails, on end-to-end latency information, and licensing information from Real-Time CDP Product Description documents:

* [Real-Time CDP guardrails](/help/rtcdp/guardrails/overview.md)
* [End-to-end latency diagrams](https://experienceleague.adobe.com/docs/blueprints-learn/architecture/architecture-overview/deployment/guardrails.html?lang=en#end-to-end-latency-diagrams) for various Experience Platform services.
* [Real-Time Customer Data Platform (B2C Edition - Prime and Ultimate Packages)](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2c-edition-prime-and-ultimate-packages.html)
* [Real-Time Customer Data Platform (B2P - Prime and Ultimate Packages)](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2p-edition-prime-and-ultimate-packages.html)
* [Real-Time Customer Data Platform (B2B - Prime and Ultimate Packages)](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2b-edition-prime-and-ultimate-packages.html)