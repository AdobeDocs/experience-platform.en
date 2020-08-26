---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Phoenix connector
topic: overview
---

# (Beta) [!DNL Phoenix] connector

>[!NOTE]
>
>The [!DNL Phoenix] connector is in beta. See the [Sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using [!UICONTROL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

[!DNL Experience Platform] provides support for ingesting data from a third-party database. [!DNL Platform] can connect to different types of databases such as relational, NoSQL, or data warehouses. Support for database providers include [!DNL Phoenix].

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

The documentation below provides information on how to connect [!DNL Phoenix] to [!DNL Platform] using APIs or the user interface:

## Connect [!DNL Phoenix] to [!DNL Platform] using APIs

- [Create a Phoenix connector using the Flow Service API](../../tutorials/api/create/databases/phoenix.md)
- [Explore a database system using the Flow Service API](../../tutorials/api/explore/database-nosql.md)
- [Collect data from a database using the Flow Service API](../../tutorials/api/collect/database-nosql.md)

## Connect [!DNL Phoenix] to [!DNL Platform] using the UI

- [Create a Phoenix source connector in the UI](../../tutorials/ui/create/databases/phoenix.md)
- [Configure a dataflow for a database connector in the UI](../../tutorials/ui/dataflow/databases.md)