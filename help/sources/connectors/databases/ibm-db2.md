---
keywords: Experience Platform;home;popular topics;IBM DB2;ibm db2;DB2;db2
solution: Experience Platform
title: IBM DB2 connector
topic: overview
description: The documentation below provides information on how to connect IBM DB2 to Platform using APIs or the user interface.
---

# (Beta) IBM DB2 connector

>[!NOTE]
>
>The IBM DB2 connector is in beta. See the [Sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

Adobe Experience Platform provides native connectivity for database providers like [!DNL Microsoft], MySQL, and [!DNL Azure]. You can bring your data from these systems into [!DNL Platform].

Different types of third-party databases are supported, including relational, NoSQL, or data warehouses. Support for database providers includes IBM DB2.

## IP address allow list

The following IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources.

### East US region

- `20.41.2.0/23`
- `20.41.4.0/26`
- `20.44.17.80/28`
- `20.49.102.16/29`
- `40.70.148.160/28`
- `52.167.107.224/28`

### West Europe region

- `13.69.67.192/28`
- `13.69.107.112/28`
- `13.69.112.128/28`
- `40.74.24.192/26`
- `40.74.26.0/23`
- `40.113.176.232/29`
- `52.236.187.112/28`

### Australia East

- `13.70.74.144/28`
- `20.37.193.0/25`
- `20.37.193.128/26`
- `20.37.198.224/29`
- `40.79.163.80/28`
- `40.79.171.160/28`

The documentation below provides information on how to connect IBM DB2 to [!DNL Platform] using APIs or the user interface:

## Connect IBM DB2 to [!DNL Platform] using APIs

- [Create an IBM DB2 connector using the Flow Service API](../../tutorials/api/create/databases/ibm-db2.md)
- [Explore a database system using the Flow Service API](../../tutorials/api/explore/database-nosql.md)
- [Collect data from a database using the Flow Service API](../../tutorials/api/collect/database-nosql.md)

## Connect IBM DB2 to [!DNL Platform] using the UI

- [Create an IBM DB2 source connector in the UI](../../tutorials/ui/create/databases/ibm-db2.md)
- [Configure a dataflow for a database connector in the UI](../../tutorials/ui/dataflow/databases.md)