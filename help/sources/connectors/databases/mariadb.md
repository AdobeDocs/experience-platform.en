---
title: MariaDB Source Connector Overview
description: Learn how to connect MariaDB to Adobe Experience Platform using APIs or the user interface.
exl-id: 37b8f991-dca9-4f85-9bdd-4927a015e4c0
---
# [!DNL MariaDB]

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Experience Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from a third-party database. [!DNL Experience Platform] can connect to different types of databases such as relational, NoSQL, or data warehouses. Support for database providers include [!DNL MariaDB].

## Prerequisites {#prerequisites}

Read the following sections for prerequisite set up that you must complete before you can connect your [!DNL MariaDB] account to Experience Platform.

### IP address allowlist 

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform on either Azure or Amazon Web Services (AWS). For more information, read the guide on [allowlisting IP addresses to connect to Experience Platform on Azure and AWS](../../ip-address-allow-list.md) for more information.

### Authenticate to Experience Platform on Azure {#azure}

You must provide values for the following credentials to connect [!DNL MariaDB] to Experience Platform on Azure.

>[!BEGINTABS]

>[!TAB Account key authentication]

To use account key authentication, provide the appropriate values for the following credentials.

| Credential | Description |
| --- | --- |
| `connectionString` | The connection string associated with your [!DNL MariaDB] authentication. The [!DNL MariaDB] connection string pattern is: `Server={HOST};Port={PORT};Database={DATABASE};UID={USERNAME};PWD={PASSWORD}`. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL MariaDB] is `3000eb99-cd47-43f3-827c-43caf170f015`. **Note**: This credential is only required when connecting through the [!DNL Flow Service] API. |

For more information about obtaining a connection string, refer to this [[!DNL MariaDB] document](https://mariadb.com/kb/en/about-mariadb-connector-odbc/).

>[!TAB Basic authentication]

To use basic authentication, provide the appropriate values for the following credentials.

| Credential | Description |
| --- | --- |
| `server` | The name or IP of your [!DNL MariaDB] database. |
| `username` | The name of your database. |
| `password` | The username that corresponds with your database. |
| `database` | The password that corresponds with your database. |
| `sslMode` | The method by which data is encrypted during data transfer. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL MariaDB] is `3000eb99-cd47-43f3-827c-43caf170f015`. **Note**: This credential is only required when connecting through the [!DNL Flow Service] API. |

For more information about obtaining a connection string, refer to this [[!DNL MariaDB] document](https://mariadb.com/kb/en/about-mariadb-connector-odbc/).

>[!ENDTABS]

### Authenticate to Experience Platform on Amazon Web Services (AWS) {#aws}

>[!AVAILABILITY]
>
>This section applies to implementations of Experience Platform running on Amazon Web Services (AWS). Experience Platform running on AWS is currently available to a limited number of customers. To learn more about the supported Experience Platform infrastructure, see the [Experience Platform multi-cloud overview](../../../landing/multi-cloud.md).

You must provide values for the following credentials to connect [!DNL MariaDB] to Experience Platform on AWS.

| Credential | Description |
| --- | --- |
| `server` | The name or IP of your [!DNL MariaDB] database. |
| `username` | The name of your database. |
| `password` | The username that corresponds with your database. |
| `database` | The password that corresponds with your database. |
| `sslMode` | The method by which data is encrypted during data transfer. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL MariaDB] is `3000eb99-cd47-43f3-827c-43caf170f015`. **Note**: This credential is only required when connecting through the [!DNL Flow Service] API. |

For more information about obtaining a connection string, refer to this [[!DNL MariaDB] document](https://mariadb.com/kb/en/about-mariadb-connector-odbc/).

## Connect [!DNL MariaDB] to Experience Platform using APIs

- [Create a MariaDB base connection using the Flow Service API](../../tutorials/api/create/databases/mariadb.md)
- [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
- [Create a dataflow for a database source using the Flow Service API](../../tutorials/api/collect/database-nosql.md)

## Connect [!DNL MariaDB] to Experience Platform using the UI

- [Create a MariaDB source connection in the UI](../../tutorials/ui/create/databases/mariadb.md)
- [Create a dataflow for a database source connection in the UI](../../tutorials/ui/dataflow/databases.md)
