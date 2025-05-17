---
title: MySQL Source Connector Overview
description: Learn how to connect MySQL to Adobe Experience Platform using APIs or the user interface.
last-substantial-update: 2025-05-17
exl-id: a18e8e69-880f-4bee-b339-726091d6f858
---
# [!DNL MySQL]

[!DNL MySQL] is an open-source relational database management system used to store and manage structured data. It organizes data into tables and uses SQL (Structured Query Language) for querying and updating information. [!DNL MySQL] is widely used in web applications, supports multiple platforms, and is known for its speed, reliability, and ease of use. It's ideal for everything from small websites to large-scale enterprise systems.

You can use the [!DNL MySQL] source to connect your account and ingest data from your [!DNL MySQL] database to Adobe Experience Platform.

## Prerequisites {#prerequisites}

Read the following sections to complete the prerequisite setup before you connect your [!DNL MySQl] account to Experience Platform.

### IP address allowlist 

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform on either Azure or Amazon Web Services (AWS). For more information, read the guide on [allowlisting IP addresses to connect to Experience Platform on Azure and AWS](../../ip-address-allow-list.md) for more information.

### Authenticate to Experience Platform on Azure {#azure}

You can use either account key authentication or basic authentication to connect your [!DNL MySQL] database to Experience Platform on Azure.

>[!BEGINTABS]

>[!TAB Account key authentication]

Provide values for the following credentials to connect your [!DNL MySQL] database to Experience Platform using account key authentication.

| Credential | Description |
| --- | --- |
| `connectionString` | The [!DNL MySQL] connection string associated with your account. The [!DNL MySQL] connection string pattern is: `Server={SERVER};Port={PORT};Database={DATABASE};UID={USERNAME};PWD={PASSWORD}`. |
| `connectionSpec.id` | The connection spec returns a source's connector properties, including authentication specs related to creating the base and source connections. The connection spec ID for [!DNL MySQL] is `26d738e0-8963-47ea-aadf-c60de735468a`. |

For more information, read the [[!DNL MySQL] documentation on connection strings](https://dev.mysql.com/doc/connector-net/en/connector-net-connections-string.html).

>[!TAB Basic authentication]

Provide values for the following credentials to connect your [!DNL MySQL] database to Experience Platform using basic authentication.

| Credential | Description |
| --- | --- |
| `server` | The name or IP address of your [!DNL MySQL] database. |
| `database` | The name of the [!DNL MySQL] database that you want to connect to. |
| `username` | The username associated with your [!DNL MySQL] database authentication. |
| `password` | The password associated with your [!DNL MySQL] database authentication. |
| `sslMode` | The [!DNL Secure Sockets Layer] (SSL) method to be applied to your connection. The available values are: <ul><li>`DISABLED`: Use this option to disable SSL. If your server requires an SSL configuration, then the connection will fail</li><li>`PREFERRED`: Use this option to prefer SSL connections given that the server supports them. This option also allows for non-SSL connections.</li><li>`REQUIRED`: Use this option to make SSL connections mandatory. If the server does not support SSL, then the connections will fail.</li><li>`Verify-Ca`: Use this option to verify server certificates while failing connections if the server does not support SSL.</li><li>`Verify Identity`: Use this option to verify server certificates with the host's name while failing connections if the server does not support SSL.</li></ul> |

>[!ENDTABS]

## Connect [!DNL MySQL] to Experience Platform using APIs

- [Connect your [!DNL MySQL] database using the Flow Service API](../../tutorials/api/create/databases/mysql.md)
- [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
- [Create a dataflow for a database source using the Flow Service API](../../tutorials/api/collect/database-nosql.md)

## Connect MySQL to Experience Platform using the UI

- [Connect your [!DNL MySQL] database to Experience Platform using the UI](../../tutorials/ui/create/databases/mysql.md)
- [Create a dataflow for a database source connection in the UI](../../tutorials/ui/dataflow/databases.md)
