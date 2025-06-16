---
title: Azure Synapse Analytics Source Connector Overview
description: Learn how to connect Azure Synapse Analytics to Adobe Experience Platform using APIs or the user interface.
badgeUltimate: label="Ultimate" type="Positive"
last-substantial-update: 2025-06-17
exl-id: 5b94ae74-e5a7-40e9-a952-41eddf06dcde
---
# [!DNL Azure Synapse Analytics] source

>[!IMPORTANT]
>
>The [!DNL Azure Synapse Analytics] source is available in the sources catalog to users who have purchased Real-Time Customer Data Platform Ultimate.

[!DNL Azure Synapse Analytics] is a cloud-based analytics service that unifies big data and data warehousing. You can ingest, explore, prepare, and analyze data using SQL, Spark, or real-time tools—all without moving your data.

You can use the [!DNL Azure Synapse Analytics] source to connect your account and ingest data from your [!DNL Azure Synapse Analytics] account to Adobe Experience Platform.

## Prerequisites {#prerequisites}

Read the following sections to complete the prerequisite setup before you connect your [!DNL Azure Synapse Analytics] account to Experience Platform.

### IP address allowlist 

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform. For more information, read the guide on [allowlisting IP addresses to connect to Experience Platform](../../ip-address-allow-list.md) for more information.

### Configure permissions

To connect your source account to Adobe Experience Platform, your account must have both of the following permissions enabled:

* **View Sources**
* **Manage Sources**

If you don't have these permissions, contact your product administrator to request access. For more information, read the [access control UI guide](../../../access-control/ui/overview.md).

### Authenticate to Experience Platform

You can use either account key authentication or service-principal key authentication to connect your [!DNL Azure Synapse Analytics] to Experience Platform.

>[!BEGINTABS]

>[!TAB Account key authentication]

Provide values for the following credentials to connect your [!DNL Azure Synapse Analytics] database to Experience Platform using account key authentication.

| Credential | Description |
| --- | --- |
| `connectionString` | This is the **connection string** used for authenticating with [!DNL Azure Synapse Analytics]. The standard format is: `Server=tcp:{SERVER_NAME}.database.windows.net,1433;Database={DATABASE};User ID={USERNAME}@{SERVER_NAME};Password={PASSWORD};Trusted_Connection=False;Encrypt=True;Connection Timeout=30`. You must replace the placeholders with your actual connection details. |
| `connectionSpec.id` | The **connection spec** provides the connector properties of a data source. This includes details such as authentication specifications and requirements for creating both **base** and **source** connections. For [!DNL Azure Synapse Analytics], the connection spec ID is: `a49bcc7d-8038-43af-b1e4-5a7a089a7d79`. **Note:** This credential is only necessary when connecting via APIs.  |

>[!TAB Service-principal key authentication]

Provide values for the following credentials to connect your [!DNL Azure Synapse Analytics] database to Experience Platform using service-principal key authentication.

| Credential | Description |
| --- | --- |
| Server | The fully qualified domain name of your [!DNL Azure Synapse Analytics] SQL endpoint. |
| Database | The name of the specific database within your [!DNL Azure Synapse Analytics] workspace. |
| Tenant | The [!DNL Azure Active Directory] tenant ID associated with your [!DNL Azure] subscription. |
| Service principal ID | The client ID of an [!DNL Azure Active Directory] application. |
| Service principal key | The client secret or password associated with the service principal. |
| `connectionSpec.id` | The **connection spec** provides the connector properties of a data source. This includes details such as authentication specifications and requirements for creating both **base** and **source** connections. For [!DNL Azure Synapse Analytics], the connection spec ID is: `a49bcc7d-8038-43af-b1e4-5a7a089a7d79`. **Note:** This credential is only necessary when connecting via APIs.  |

For more information, read the [[!DNL Azure] documentation on managing identities for [!DNL Azure Synapse Analytics]](https://learn.microsoft.com/en-us/azure/synapse-analytics/synapse-service-identity).

>[!ENDTABS]

## Connect [!DNL Azure Synapse Analytics] to Experience Platform using APIs

* [Connect [!DNL Azure Synapse Analytics] to Experience Platform using the Flow Service API](../../tutorials/api/create/databases/synapse-analytics.md)
* [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
* [Create a dataflow for a database source using the Flow Service API](../../tutorials/api/collect/database-nosql.md)

## Connect [!DNL Azure Synapse Analytics] to Experience Platform using the UI

* [Connect [!DNL Azure Synapse Analytics] to Experience Platform in the UI](../../tutorials/ui/create/databases/synapse-analytics.md)
* [Create a dataflow for a database source connection in the UI](../../tutorials/ui/dataflow/databases.md)

