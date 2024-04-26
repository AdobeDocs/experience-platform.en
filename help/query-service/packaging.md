---
title: Query Service Packaging
description: The following document outlines the packaging of capabilities and products available for Query Service and highlights the differences between ad hoc and batch queries.
exl-id: ba472d9e-afe6-423d-9abd-13ecea43f04f
---
# Query Service packaging

This document outlines the different types of packaging and query execution capabilities available in Query Service.

Adobe Experience Platform Query Service can be divided into two capabilities based on the query patterns that can be executed:

- **Ad hoc queries** are SQL queries used to explore ingested datasets for verification, validation, experimentation, and so on. These queries do not write data back into the Platform data lake.
- **Batch queries** are SQL queries used to perform the post-ingestion processing of ingested datasets. These queries clean, shape, manipulate, and enrich data, the results of which are written back to the Platform data lake. These queries can be scheduled, managed, and monitored as batch jobs.

Query Service capabilities are packaged with the following products and add-ons:  

- **Platform-based applications** (Adobe Real-Time Customer Data Platform, Adobe Customer Journey Analytics, and Adobe Journey Optimizer): Query Service access to execute ad hoc queries is provided from the outset with every variation and tier of Platform-based applications. 
- **[!DNL Data Distiller]** (add-on package that can be purchased with Adobe Real-Time CDP, Customer Journey Analytics and Adobe Journey Optimizer): Query Service access to execute batch queries is provided with [!DNL Data Distiller].

## Entitlements {#entitlements}

The following table outlines the key Query Service entitlements based on how they are packaged:

| Query Service Entitlement | Packaged with Platform-based applications | Packaged with [!DNL Data Distiller] |
|---|---|---|
| Query Pattern Supported | Ad hoc queries only | Batch query |
| Use Case Supported | <ul><li>Exploration​</li><li>Data Discovery​</li><li>Data Validation</li><li>Experimentation</li></ul> | <ul><li>Cleaning</li><li>Shaping</li><li>Manipulating</li><li>Enriching</li></ul> |
| Semantics Supported | <ul><li>SELECT queries</li></ul> | <ul><li>CTAS and ITAS queries</li></ul> |
| Maximum Execution Time  | 10 minutes  | 24 hours |
| License Metric | **Query User Concurrency**: <ul><li>1 concurrent user (Real-Time CDP, Adobe Journey Optimizer)​</li><li>5 concurrent users (Customer Journey Analytics)​</li></ul> **Query Concurrency**: <ul><li>1 concurrent running query (all applications)​</li></ul> **An additional ad hoc query users pack add-on** can be purchased to increase your authorized ad hoc query entitlement. <ul><li>+5 additional concurrent users per pack</li><li>+1 additional concurrent running query per pack</li></ul> | **Compute Hours**: <ul><li>Variable (scoped based on your application entitlement)</li></ul> **Compute Hours** is a measure of the amount of time taken by the Query Service engine to read, process, and write data back into the data lake when a batch query is executed. <br>With the Data Distiller SKU, you also get an additional user and query concurrency, which can be used towards the execution of ad hoc queries.  The Data Distiller SKU includes:<br><ul><li>+5 additional concurrent users</li><li>+1 additional concurrent running query</li></ul> |
| Accelerated query and reporting usage | No | Yes - Concurrent accelerated queries allow you to read data from the accelerated store and display within your dashboards. A dedicated entitlement for storing reporting models and datasets in the accelerated store is also provided.|
| Data lake storage capacity | Your total storage entitlement is dependant on your platform-based applications licenses. For example, Real-Time CDP, AJO, CJA, and so on. | Yes - An additional storage entitlement is provided to persist your raw and derived datasets for Data Distiller use cases beyond a seven-day data expiration date.<br>Your data lake storage capacity is measured in terabytes (TB) and depends on the quantity of Compute hours that you have bought. Check the product description for more details. |
| Data export allowance | Your total export entitlement is dependant on your platform-based applications licenses. For example, Real-Time CDP, AJO, CJA, and so on. | Yes - An additional export entitlement is provided to allow for the export of derived datasets created using Data Distiller.<br>Your annual data export allowance is measured in terabytes (TB) and depends on the quantity of Compute hours that you have bought. Please check product description for more details. |
| Query Execution Interface | <ul><li>Query Service UI</li><li>Third-party client UI</li><li>[!DNL PostgresSQL] client UI</li></ul> | <ul><li>Query Service UI </li><li>Third-party client UI</li><li>[!DNL PostgresSQL] client UI</li><li>REST APIs</li></ul> |
| Query Results Returned Via | Client UI | Derived dataset stored in data lake |
| Result Limit | <ul><li>Query Service UI - The number of output rows can be [configured with a UI setting](./ui/user-guide.md#result-count) to between 50-500 rows.</li><li>Third-party clients - 50,000</li><li>[!DNL PostgresSQL] client - 50,000</li></ul> | CTAS and ITAS queries only generate success messages as the query output is stored in derived datasets. |
| Read Dataset Capacity | Yes | Yes |
| Write Dataset Capacity | No  | Yes |
| Scheduling Capacity | No  | Yes |
| Monitoring Capacity | Yes | Yes |
| Query Alert Setup Capacity | No | Yes |

{style="table-layout:auto"}

## Access control {#access-control}

Access control for Experience Platform is administered through the [Adobe Admin Console](https://adminconsole.adobe.com/) where product profiles link users with permissions and sandboxes. See the [access control overview](../access-control/home.md) for more information. 

See the [Manage permissions for a product profile](../access-control/ui/permissions.md) and [Manage users for a product profile](../access-control/ui/users.md) documents for detailed instructions on requesting access to the product profile permissions

### Relevant Query Service permissions {#query-service-permissions}

To use Query Service, the **[!DNL Manage Queries]** permission must be enabled within Admin Console. This permission allows users to execute ad hoc and batch queries. 

The following table outlines the effects of the [!DNL Manage Queries] permission:

| Permission | Function |
|---|---|
| [!DNL Manage Queries] (without write data permission)| Provides access to execute ad hoc queries |
| [!DNL Manage Queries] (with write data permission) | Provides access to execute batch queries |

{style="table-layout:auto"}

### Relevant Customizable Insights permissions {#customizable-insights-permissions}

To create Data Distiller [Customizable Insights](./data-distiller/customizable-insights/overview.md) within dashboards, the following permissions **must** be enabled within Admin Console.

| Permission | Function |
|---|---|
| [!DNL View Custom Dashboard] | Provides view access to user-defined dashboards |
| [!DNL Manage Custom Dashboard] | Provides manage access for user-defined dashboards |

{style="table-layout:auto"}

## Sandbox support {#sandbox-support}

Sandboxes are virtual partitions within a single instance of Experience Platform. Each Platform instance supports multiple production and non-production sandboxes, each maintaining its own library of Platform resources. Non-production sandboxes allow you to test features, run experiments, and make custom configurations without impacting your production sandboxes. For more information on sandboxes, see the [sandboxes overview](../sandboxes/home.md). All Query Service entitlements are shared across all sandboxes.

## Next steps

By reading this document, you should have a better understanding of the different packaging types and query execution capabilities available in Query Service. To learn more about Query Service, such as well-known industry use cases, read the [use case documentation](./use-cases/abandoned-browse.md). For more general information, visit the [Query Service overview](./home.md).

