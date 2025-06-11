---
title: Snowflake Source Connector Overview
description: Learn how to connect Snowflake to Adobe Experience Platform using APIs or the user interface.
badgeUltimate: label="Ultimate" type="Positive"
exl-id: df066463-1ae6-4ecd-ae0e-fb291cec4bd5
---
# [!DNL Snowflake] source

>[!IMPORTANT]
>
>* The [!DNL Snowflake] source is available in the sources catalog to users who have purchased Real-Time Customer Data Platform Ultimate.
>* By default, the [!DNL Snowflake] source interprets `null` as an empty string. Contact your Adobe representative to ensure that your `null` values are correctly written as `null` in Adobe Experience Platform.
>* For Experience Platform to ingest data, timezones for all table-based batch sources must be configured to UTC. The only time stamp that is supported for the [!DNL Snowflake] source is TIMESTAMP_NTZ with UTC time.

>[!WARNING]
>
>Basic authentication (or account key authentication) for the [!DNL Snowflake] source will be deprecated on November 2025. You must move to key-pair based authentication in order to continue using the source and ingesting data from your database to Experience Platform. For more information on the deprecation, read the [[!DNL Snowflake] best practices guide on mitigating the risks of credential compromise](https://www.snowflake.com/en/resources/white-paper/best-practices-to-mitigate-the-risk-of-credential-compromise/).

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from a third-party database. Experience Platform can connect to different types of databases such as relational, NoSQL, or data warehouses. Support for database providers include [!DNL Snowflake].

## Prerequisites {#prerequisites}

This section outlines the setup tasks that you need to complete before you can connect your [!DNL Snowflake] source to Experience Platform.

### Retrieve your account identifier {#retrieve-your-account-identifier}

You must retrieve your account identifier from the [!DNL Snowflake] UI dashboard because you will be using the account identifier to authenticate your [!DNL Snowflake] instance on Experience Platform.

To retrieve your account identifier:

* Navigate to your account on the [[!DNL Snowflake] application UI dashboard](https://app.snowflake.com/).
* In the left navigation, select **[!DNL Accounts]**, followed by **[!DNL Active Accounts]** from the header.
* Next, select the information icon and then select and copy the domain name of the current URL.

![The Snowflake UI dashboard with the domain name selected.](../../images/tutorials/create/snowflake/snowflake-dashboard.png)

### Retrieve your private key {#retrieve-your-private-key}

If you are using key-pair authentication for your [!DNL Snowflake] connection, then you must also generate your private key before connecting to Experience Platform.

>[!BEGINTABS]

>[!TAB Create an encrypted private key]

To generate your encrypted [!DNL Snowflake] private key, run the following command on your terminal:

```shell
openssl genrsa 2048 | openssl pkcs8 -topk8 -v2 des3 -inform PEM -out rsa_key.p8
```

If successful, you should receive your private key in PEM format.

```shell
-----BEGIN ENCRYPTED PRIVATE KEY-----
MIIE6T...
-----END ENCRYPTED PRIVATE KEY-----
```

>[!TAB Create an unencrypted private key]

To generate your unencrypted [!DNL Snowflake] private key, run the following command on your terminal:

```shell
openssl genrsa 2048 | openssl pkcs8 -topk8 -inform PEM -out rsa_key.p8 -nocrypt
```

If successful, you should receive your private key in PEM format.

```shell
-----BEGIN PRIVATE KEY-----
MIIE6T...
-----END PRIVATE KEY-----
```

>[!ENDTABS]

Next, take your private key and encode it in [!DNL Base64]. Ensure that you do not do any transformations or format conversions on your [!DNL Snowflake] private key. Additionally, you must ensure that there are no trailing newline characters at the end of your private key, before encoding it in [!DNL Base64].

### Verify configurations

Before you can create a source connection for your [!DNL Snowflake] data, you must also ensure that the following configurations are met:

* The default warehouse assigned to a given user must be the same as the warehouse that you input when authenticating to Experience Platform.
* The default role assigned to a given user must have access to the same database that you input when authenticating to Experience Platform.

To verify your role and warehouse:

* Select **[!DNL Admin]** on the left navigation and then select **[!DNL Users & Roles]**.
* Select the appropriate user and then select the ellipses (`...`) on the top-right corner.
* In the [!DNL Edit user] window that appears, navigate to [!DNL Default Role] to view the role associated with the given user.
* In the same window, navigate to [!DNL Default Warehouse] to view the warehouse associated with the given user.

![The Snowflake UI where you can verify your role and warehouse.](../../images/tutorials/create/snowflake/snowflake-configs.png)

Once successfully encoded, you may then used that [!DNL Base64]-encoded private key on Experience Platform to authenticate your [!DNL Snowflake] account.

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

The documentation below provides information on how to connect [!DNL Snowflake] to Experience Platform using APIs or the user interface:

## Connect [!DNL Snowflake] to Experience Platform using APIs

* [Create an Snowflake base connection using the Flow Service API](../../tutorials/api/create/databases/snowflake.md)
* [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
* [Create a dataflow for a database source using the Flow Service API](../../tutorials/api/collect/database-nosql.md)

## Connect [!DNL Snowflake] to Experience Platform using the UI

* [Create a Snowflake source connection in the UI](../../tutorials/ui/create/databases/snowflake.md)
* [Create a dataflow for a database source connection in the UI](../../tutorials/ui/dataflow/databases.md)
