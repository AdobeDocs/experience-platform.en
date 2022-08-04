---
title: Query Service Packages
description: The following document outlines the packages of capabilities and products available for Query Service and highlights the differences for ad hoc and batch queries.
---
# Query Service packages

This document outlines the different types of packaging and query execution capabilities available in Query Service.

Adobe Experience Platform Query Service can be divided into two capabilities based on the query patterns that can be executed:

- **Ad hoc queries** are SQL queries used to explore ingested datasets for verification, validation, experimentation, and so on. These queries do not write data back into the Platform data lake.
- **Batch queries** are SQL queries used to perform the post-ingestion processing of ingested datasets. These queries clean, shape, manipulate, and enrich data, the results of which are written back to the Platform data lake. These queries can be scheduled, managed, and monitored as batch jobs.

Query Service capabilities are packaged with the following products and add-ons:  

- Platform-based applications such as Real-Time Customer Data Platform, Customer Journey Analytics, and Adobe Journey Optimizer, provide a pre-configured setup for Query Service to execute ad hoc queries with all types and tiers of Platform-based applications. 
- [!DNL Data Distiller] is included as an add-on package that can be purchased with Real-time CDP, Customer Journey Analytics, and Adobe Journey Optimizer. Query Service access to execute batch queries is provided by default with [!DNL Data Distiller].

The following table outlines the key Query Service entitlements based on how they are packaged:

| Query Service Entitlement | Packaged with Platform-based applications | Packaged with [!DNL Data Distiller] |
|---|---|---|
| Maximum Execution Time  | 10 minutes  | 24 hours |
| Query Pattern Supported | Ad hoc query only | Batch query |
| Use Case Supported | <ul><li>Exploration​</li><li>Data Discovery​</li><li>Data Validation</li><li>Experimentation</li></ul> | <ul><li>Cleaning</li><li>Shaping</li><li>Manipulating</li><li>Enriching</li></ul> |
| License Metric | **Query User Concurrency**: <ul><li>1 concurrent user (Real-time CDP, Adobe Journey Optimizer)​</li><li>5 concurrent user (Customer Journey Analytics)​</li></ul> **Query Concurrency**: <ul><li>1 concurrent running query (all applications)​</li></ul> **Additional ad hoc query users pack add-on** can be purchased to increase customers' authorized ad hoc query entitlements. <ul><li>+5 additional concurrent users per pack</li><li>+1 additional concurrent running query per pack</li></ul> | **Compute Hours**: <ul><li>Variable (scoped based on customer's application entitlements)</li></ul> **Compute Hours** is a measure of the amount of time taken by the Query Service engine to read, process, and write data back into the data lake when a batch query is executed. |
| Query Results Returned Via | Client UI | Derived dataset stored in data lake |
| Result Limit | <ul><li>Query UI - 100 rows</li><li>Third-party client - 50,000</li><li>[!DNL PostgresSQL] client - 50,000</li></ul> | <ul><li>Query UI (no upper limit to rows)</li><li>Third-party clients  (no upper limit to rows)</li><li>[!DNL PostgresSQL] client  (no upper limit to rows)</li><li>REST APIs (no upper limit to rows)</li></ul> |
| Query Execution Interface | <ul><li>Query Service UI</li><li>Third-party client UI</li><li>[!DNL PostgresSQL] client UI</li></ul> | <ul><li>Query UI </li><li>Third-party client UI</li><li>[!DNL PostgresSQL] client UI</li><li>REST APIs</li></ul> |
| Read Dataset Capacity | Yes | Yes |
| Write Dataset Capacity | No  | Yes |
| Scheduling Capacity | No  | Yes |
| Monitoring Capacity | Yes | Yes |
| Query Alert Setup Capacity | No | Yes |
| Semantics Supported | <ul><li>SELECT queries</li></ul> | <ul><li>CTAS and ITAS queries</li></ul> |

{style="table-layout:auto"}

## Access control

Access control for Experience Platform is administered through the [Adobe Admin Console](https://adminconsole.adobe.com/) where product profiles link users with permissions and sandboxes. See the [access control overview](../access-control/home.md) for more information.

The [!DNL Manage Queries] permission must be enabled within admin console for users to access Query Service. This permission allows users to execute ad hoc and batch queries. 
See the documentation for detailed instructions on how to [manage permissions for a product profile](../access-control/ui/permissions.md) and to [manage users for a product profile](../access-control/ui/users.md).

The [!DNL Write Dataset] permission must be granted from the admin console for users who have purchased the [!DNL Data Distiller] add-on. This permission allows [!DNL Data Distiller] users to execute batch queries.

The following table outlines the effects of the [!DNL Manage Queries] permission:

| Permission | Function |
|---|---|
| [!DNL Manage Queries] (with write data permission) | Provides access to execute batch queries |
| [!DNL Manage Queries] (without write data permission)| Provides access to execute ad hoc queries |

{style="table-layout:auto"}

## Sandbox support

Sandboxes are virtual partitions within a single instance of Experience Platform, which allow for seamless integration with the development process of your digital experience applications. All content and actions taken within a sandbox are confined to only that sandbox and do not affect any other sandboxes. See the [sandboxes overview](../sandboxes/home.md) for more information. The entirety of Query Service entitlements is shared across all sandboxes. 

## Next steps

By reading this document you should have a better understanding of the different packaging types and query execution capabilities available in Query Service. To learn more about Query Service, such as well-known industry use cases, please read the [use case documentation](./use-cases/abandoned-browse.md). For more general information, visit the [Query Service overview](./home.md).
