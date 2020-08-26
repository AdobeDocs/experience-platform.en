---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Oracle connector
topic: overview
---

# (Beta) [!DNL Oracle] connector

>[!NOTE]
>
>The [!DNL Oracle] connector is in beta. See the [Sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

Adobe Experience Platform provides native connectivity for database providers like [!DNL Microsoft], MySQL, and [!DNL Azure]. You can bring your data from these systems into [!DNL Platform].

Different types of third-party databases are supported, including relational, NoSQL, or data warehouses. Support for database providers includes [!DNL Oracle].

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

The documentation below provides information on how to connect [!DNL Oracle] to [!DNL Platform] using APIs or the user interface:

## Connect [!DNL Oracle] to [!DNL Platform] using APIs

- [Create an Oracle connector using the Flow Service API](../../tutorials/api/create/databases/oracle.md)
- [Explore a database system using the Flow Service API](../../tutorials/api/explore/database-nosql.md)
- [Collect data from a database using the Flow Service API](../../tutorials/api/collect/database-nosql.md)

## Connect [!DNL Oracle] to [!DNL Platform] using the UI

- [Create an Oracle source connector in the UI](../../tutorials/ui/create/databases/oracle.md)
- [Configure a dataflow for a database connector in the UI](../../tutorials/ui/dataflow/databases.md)