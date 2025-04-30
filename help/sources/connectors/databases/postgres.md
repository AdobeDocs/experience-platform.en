---
title: PostgreSQL Source Connector Overview
description: Learn about the PostgreSQL source on Adobe Experience Platform.
last-substantial-update: 2025-04-29
exl-id: 27b891c5-5fc5-4539-8f98-e3a53e2eefe3
---
# [!DNL PostgreSQL]

Read this document to learn about prerequisite steps that you need to complete before you can connect your [!DNL PostgreSQL] database to Adobe Experience Platform.

## Prerequisites {#prerequisites}

Read the following sections to complete the prerequisite setup before you connect your [!DNL PostgreSQL] database to Experience Platform.

### IP address allowlist 

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform on either Azure or Amazon Web Services (AWS). For more information, read the guide on [allowlisting IP addresses to connect to Experience Platform on Azure and AWS](../../ip-address-allow-list.md) for more information.

### Authenticate to Experience Platform on Azure {#azure}

You must provide values for the following authentication credentials to connect [!DNL PostgreSQL] to Experience Platform on Azure.

>[!BEGINTABS]

>[!TAB Account key authentication]

Provide values for the following credentials to connect your [!DNL PostgreSQL] database to Experience Platform on Azure using account key authentication.

| Credential | Description |
| --- | --- |
| `connectionString` | The connection string associated with your [!DNL PostgreSQL] account. The [!DNL PostgreSQL] connection string pattern is: `Server={SERVER};Database={DATABASE};Port={PORT};UID={USERNAME};Password={PASSWORD}`. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL PostgreSQL] is `74a1c565-4e59-48d7-9d67-7c03b8a13137`. |

Read the [[!DNL PostgreSQL] documentation](https://www.postgresql.org/docs/current/) for more information.

>[!TAB Basic authentication]

Provide values for the following credentials to connect your [!DNL PostgreSQL] database to Experience Platform on Azure using basic authentication.

| Credential | Description |
| --- | --- |
| `server` | The name or IP address of your [!DNL PostgreSQL] database. |
| `port` | The TCP port of your [!DNL PostgreSQL] server. |
| `username` | The username associated with your [!DNL PostgreSQL] database authentication. |
| `password` | The password associated with your [!DNL PostgreSQL] database authentication. |
| `database` | The name of the [!DNL PostgreSQL] database that you want to connect to. |
| `sslMode` | The [!DNL Secure Sockets Layer] (SSL) method to be applied to your connection. The available values are: <ul><li>`Disable`: Use this option to disable SSL. If your server requires an SSL configuration, then the connection will fail.</li><li>`Allow`: Use this option to allow SSL connections. Non-SSL connections may still be used if the server supports them.</li><li>`Prefer`: Use this option to prefer SSL connections given that the server supports them. This option also allows for non-SSL connections.</li><li>`Require`: Use this option to make SSL connections mandatory. If the server does not support SSL, then the connections will fail.</li><li>`Verify-Ca`: Use this option to verify server certificates while failing connections if the server does not support SSL.</li><li>`Verify-Full`: Use this option to verify server certificates with the host's name while failing connections if the server does not support SSL.</li></ul> |

Read the [[!DNL PostgreSQL] documentation](https://www.postgresql.org/docs/current/) for more information.

>[!ENDTABS]

### Authenticate to Experience Platform on Amazon Web Services (AWS) {#aws}

>[!AVAILABILITY]
>
>This section applies to implementations of Experience Platform running on Amazon Web Services (AWS). Experience Platform running on AWS is currently available to a limited number of customers. To learn more about the supported Experience Platform infrastructure, see the [Experience Platform multi-cloud overview](../../../landing/multi-cloud.md).

Provide values for the following credentials to connect your [!DNL PostgreSQL] database to Experience Platform on AWS using basic authentication.

| Credential | Description |
| --- | --- |
| `server` | The name or IP address of your [!DNL PostgreSQL] database. |
| `port` | The TCP port of your [!DNL PostgreSQL] server. |
| `username` | The username associated with your [!DNL PostgreSQL] database authentication. |
| `password` | The password associated with your [!DNL PostgreSQL] database authentication. |
| `database` | The name of the [!DNL PostgreSQL] database that you want to connect to. |
| `sslMode` | The [!DNL Secure Sockets Layer] (SSL) method to be applied to your connection. The available values are: <ul><li>`Disable`: Use this option to disable SSL. If your server requires an SSL configuration, then the connection will fail.</li><li>`Allow`: Use this option to allow SSL connections. Non-SSL connections may still be used if the server supports them.</li><li>`Prefer`: Use this option to prefer SSL connections given that the server supports them. This option also allows for non-SSL connections.</li><li>`Require`: Use this option to make SSL connections mandatory. If the server does not support SSL, then the connections will fail.</li><li>`Verify-Ca`: Use this option to verify server certificates while failing connections if the server does not support SSL.</li><li>`Verify-Full`: Use this option to verify server certificates with the host's name while failing connections if the server does not support SSL.</li></ul> |

Read the [[!DNL PostgreSQL] documentation](https://www.postgresql.org/docs/current/) for more information.

## Connect [!DNL PostgreSQL] to Experience Platform using APIs

* [Create a [!DNL PostgreSQL] base connection using the Flow Service API](../../tutorials/api/create/databases/postgres.md)
* [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
* [Create a dataflow for a database source using the Flow Service API](../../tutorials/api/collect/database-nosql.md)

## Connect [!DNL PostgreSQL] to Experience Platform using the UI

* [Create a [!DNL PostgreSQL] source connection in the UI](../../tutorials/ui/create/databases/postgres.md)
* [Create a dataflow for a database source connection in the UI](../../tutorials/ui/dataflow/databases.md)
