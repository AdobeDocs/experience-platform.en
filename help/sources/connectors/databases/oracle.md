---
title: Oracle DB Source Connector Overview
description: Learn how to connect Oracle to Adobe Experience Platform using APIs or the user interface.
last-substantial-update: 2025-08-06
exl-id: be422cf8-fb24-48c7-8369-34f0f2ec95fc
---
# [!DNL Oracle DB]

[!DNL Oracle DB] is a powerful relational database management system developed by [!DNL Oracle Corporation]. You can use [!DNL Oracle DB] to store, manage, and retrieve large volumes of structured data efficiently and securely.

Use the [!DNL Oracle DB] source in the Adobe Experience Platform sources catalog to connect your database and ingest data into Experience Platform.

## Prerequisites {#prerequisites}

Read the following sections to complete the prerequisite setup before you connect your [!DNL Oracle DB] account to Experience Platform.

### IP address allowlist 

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform on either Azure or Amazon Web Services (AWS). For more information, read the guide on [allowlisting IP addresses to connect to Experience Platform on Azure and AWS](../../ip-address-allow-list.md) for more information.

### Authenticate to Experience Platform on Azure {#azure}

Provide a connection string to authenticate and connect your [!DNL Oracle DB] account to Experience Platform on Azure.

| Credential | Description |
| --- | --- |
| Connection string | A connection string is a string of text used by applications to connect to a database. The [!DNL Oracle DB] connection string pattern is: `Host={HOST};Port={PORT};Sid={SID};User Id={USERNAME};Password={PASSWORD}`. |
| Connection spec ID | The connection spec ID returns a source's connector properties, including authentication specs related to creating the base and source connections. The connection spec ID for [!DNL Oracle] is `d6b52d86-f0f8-475f-89d4-ce54c8527328`. **Note**: This credential is only required when connecting through the [!DNL Flow Service] API.|

### Authenticate to Experience Platform on Amazon Web Services {#aws}

>[!AVAILABILITY]
>
>This section applies to implementations of Experience Platform running on Amazon Web Services (AWS). Experience Platform running on AWS is currently available to a limited number of customers. To learn more about the supported Experience Platform infrastructure, see the [Experience Platform multi-cloud overview](../../../landing/multi-cloud.md).

Provide values for the following credentials to authenticate and connect your [!DNL Oracle DB] account to Experience Platform on AWS.

| Credential | Description |
| --- | --- |
| Server | The IP address or host mane of your [!DNL Oracle DB] server. |
| Port | The port number of the database server. The default port number is `1521`. |
| Username | The [!DNL Oracle DB] user account used to authenticate and access the database. |
| Password | The secret key associated with your username, used for authentication. |
| Database | The specific [!DNL Oracle] database instance that you want to connect to. |
| Schema | The container for database objects, such as tables, views, or procedures. |
| SSL Mode | A boolean value that controls whether SSL is enforced or not. This configuration depends on your server support and defaults to `false`. |
| Connection spec ID | The connection spec ID returns a source's connector properties, including authentication specs related to creating the base and source connections. The connection spec ID for [!DNL Oracle] is `d6b52d86-f0f8-475f-89d4-ce54c8527328`. **Note**: This credential is only required when connecting through the [!DNL Flow Service] API.|


## Connect [!DNL Oracle] to [!DNL Experience Platform] using APIs

- [Connect Oracle DB using the Flow Service API](../../tutorials/api/create/databases/oracle.md)
- [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
- [Create a dataflow for a database source using the Flow Service API](../../tutorials/api/collect/database-nosql.md)

## Connect [!DNL Oracle] to [!DNL Experience Platform] using the UI

- [Connect Oracle DB using the Experience Platform UI workspace.](../../tutorials/ui/create/databases/oracle.md)
- [Create a dataflow for a database source connection in the UI](../../tutorials/ui/dataflow/databases.md)
