---
title: PostgreSQL Source Connector Overview
description: Learn about the PostgreSQL source on Adobe Experience Platform.
exl-id: 27b891c5-5fc5-4539-8f98-e3a53e2eefe3
---
# [!DNL PostgreSQL] connector

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

[!DNL Experience Platform] provides support for ingesting data from a third-party database. [!DNL Experience Platform] can connect to different types of databases such as relational, NoSQL, or data warehouses. Support for database providers include [!DNL PostgreSQL].

## Prerequisites

### IP address allow list

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform on either Azure or Amazon Web Services (AWS). For more information, read the guide on [allowlisting IP addresses to connect to Experience Platform on Azure and AWS](../../ip-address-allow-list.md) for more information.

### Gather required credentials

>[!BEGINTABS]

>[!TAB Connect to Experience Platform on Azure]

| Credential | Description |
| --- | --- |
| `connectionString` | The connection string associated with your [!DNL PostgreSQL] account. The [!DNL PostgreSQL] connection string pattern is: `Server={SERVER};Database={DATABASE};Port={PORT};UID={USERNAME};Password={PASSWORD}`. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL PostgreSQL] is `74a1c565-4e59-48d7-9d67-7c03b8a13137`. |

For more information about obtaining a connection string, refer to this [[!DNL PostgreSQL] document](https://www.postgresql.org/docs/9.2/app-psql.html).

>[!TAB Connect to Experience Platform on AWS]

| Credential | Description |
| --- | --- |
| `server` |
| `port` |
| `database` |
| `password` |
| `sslMode` |

>[!ENDTABS]

## Connect [!DNL PostgreSQL] to [!DNL Experience Platform] using APIs

- [Create a [!DNL PostgreSQL] base connection using the Flow Service API](../../tutorials/api/create/databases/postgres.md)
- [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
- [Create a dataflow for a database source using the Flow Service API](../../tutorials/api/collect/database-nosql.md)

## Connect [!DNL PostgreSQL] to [!DNL Experience Platform] using the UI

- [Create a [!DNL PostgreSQL] source connection in the UI](../../tutorials/ui/create/databases/postgres.md)
- [Create a dataflow for a database source connection in the UI](../../tutorials/ui/dataflow/databases.md)
