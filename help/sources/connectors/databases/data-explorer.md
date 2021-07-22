---
keywords: Experience Platform;home;popular topics;Azure Data Explorer;azure data explorer
solution: Experience Platform
title: Azure Data Explorer Source Connector Overview
topic-legacy: overview
description: Learn how to connect Azure Data Explorer to Adobe Experience Platform using APIs or the user interface.
exl-id: 869bd8bb-51e6-4e0c-a3ec-ff083dda5789
---
# (Beta) [!DNL Azure Data Explorer] connector

>[!NOTE]
>
>The [!DNL Azure Data Explorer] connector is in beta. See the [Sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

Adobe Experience Platform provides native connectivity for database providers like [!DNL Microsoft], MySQL, and [!DNL Azure]. You can bring your data from these systems into [!DNL Platform].

Different types of third-party databases are supported, including relational, NoSQL, or data warehouses. Support for database providers includes [!DNL Azure Data Explorer].

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

>[!IMPORTANT]
>
>The [!DNL Azure Data Explorer] source connector currently does not support same-region connectivity to Platform. This means that if your Azure instance is using the same network region as Platform, then a connection to Platform sources cannot be established. Currently, only cross-region connectivity is supported. Please contact your Adobe account manager for more information.

The documentation below provides information on how to connect [!DNL Azure Data Explorer] to [!DNL Platform] using APIs or the user interface:

## Connect [!DNL Azure Data Explorer] to [!DNL Platform] using APIs

- [Create an Azure Data Explorer base connection using the Flow Service API](../../tutorials/api/create/databases/data-explorer.md)
- [Explore the data structure and contents of a database source using the Flow Service API](../../tutorials/api/explore/database-nosql.md)
- [Create a dataflow for a database source using the Flow Service API](../../tutorials/api/collect/database-nosql.md)

## Connect [!DNL Azure Data Explorer] to [!DNL Platform] using the UI

- [Create an Azure Data Explorer source connection in the UI](../../tutorials/ui/create/databases/data-explorer.md)
- [Create a dataflow for a database source connection in the UI](../../tutorials/ui/dataflow/databases.md)
