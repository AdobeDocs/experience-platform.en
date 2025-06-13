---
title: Azure Synapse Analytics Source Connector Overview
description: Learn how to connect Azure Synapse Analytics to Adobe Experience Platform using APIs or the user interface.
badgeUltimate: label="Ultimate" type="Positive"
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

### Authenticate to Experience Platform

You can use either account key authentication or service-principal key authentication to connect your [!DNL Azure Synapse Analytics] to Experience Platform.

>[!BEGINTABS]

>[!TAB Account key authentication]

Provide values for the following credentials to connect your [!DNL Azure Synapse Analytics] database to Experience Platform using account key authentication.

| Credential | Description |
| --- | --- |
| `connectionString` | |
| `connectionSpec.id` | |

>[!TAB Service-principal key authentication]

Provide values for the following credentials to connect your [!DNL Azure Synapse Analytics] database to Experience Platform using service-principal key authentication.

| Credential | Description |
| --- | --- |
| Server |
| Database |
| Tenant |
| Service principal ID |
| Service principal key |

>[!ENDTABS]

## Connect [!DNL Azure Synapse Analytics] to [!DNL Experience Platform] using APIs

* [Create an Azure Synapse Analytics base connection using the Flow Service API](../../tutorials/api/create/databases/synapse-analytics.md)
* [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
* [Create a dataflow for a database source using the Flow Service API](../../tutorials/api/collect/database-nosql.md)

## Connect [!DNL Azure Synapse Analytics] to [!DNL Experience Platform] using the UI

* [Create a Azure Synapse Analytics source connection in the UI](../../tutorials/ui/create/databases/synapse-analytics.md)
* [Create a dataflow for a database source connection in the UI](../../tutorials/ui/dataflow/databases.md)
