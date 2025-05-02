---
title: Connect Azure Databricks To Experience Platform Using The Flow Service API
description: Learn how to connect Azure Databricks to Experience Platform using APIs.
badgeUltimate: label="Ultimate" type="Positive"
badgeBeta: label="Beta" type="Informative"
exl-id: c3974bab-8e67-49a1-b1a5-d453cf7bfd1d
---
# Connect [!DNL Azure Databricks] to Experience Platform using the [!DNL Flow Service] API

>[!IMPORTANT]
>
>The [!DNL Azure Databricks] source is available in the sources catalog to users who have purchased Real-Time CDP Ultimate.

Read this guide to learn how to connect your [!DNL Azure Databricks] account to Adobe Experience Platform using the [[!DNL Flow Service] API](https://developer.adobe.com/experience-platform-apis/references/flow-service/).

## Get started

This guide requires a working understanding of the following components of Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Experience Platform instance into separate virtual environments to help develop and evolve digital experience applications.

### Use Experience Platform APIs

Read the guide on [how to get started with Experience Platform APIs](../../../../../landing/api-guide.md) for information on how to successfully make calls to Experience Platform APIs.

### Configure prerequisite setup

Read the [[!DNL Databricks] overview](../../../../connectors/databases/databricks.md) to learn about the prerequisite configurations that must be completed before you can connect your account to Experience Platform.

### Gather required credentials

Provide values for the following credentials to connect [!DNL Databricks] to Experience Platform.

| Credential | Description |
| --- | --- |
| `domain` | The URL of your [!DNL Databricks] workspace. For example, `https://adb-1234567890123456.7.azuredatabricks.net`. |
| `clusterId` | The ID of your cluster in [!DNL Databricks]. This cluster must already be an existing cluster and should be an interactive cluster. |
| `accessToken` | The access token that authenticates your [!DNL Databricks] account. You can generate your access token using the [!DNL Databricks] workspace. |
| `database` | The name of your database in the delta lake. |
| `connectionSpec.Id` | The connection spec ID returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection spec ID for [!DNL Databricks] is `e9d7ec6b-0873-4e57-ad21-b3a7c65e310b`. |

## Create a base connection

A base connection retains information between your source and Experience Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint and provide the appropriate authentication credentials for your [!DNL Databricks] account.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for a [!DNL Databricks] source using access token authentication.

+++View request example

```shell
curl -X POST \
'https://platform.adobe.io/data/foundation/flowservice/connections' \
-H 'Authorization: Bearer {ACCESS_TOKEN}' \
-H 'x-api-key: {API_KEY}' \
-H 'x-gw-ims-org-id: {ORG_ID}' \
-H 'x-sandbox-name: {SANDBOX_NAME}' \
-H 'Content-Type: application/json' \
-d '{
    "name": "Databricks connection to Experience Platform",
    "description": "A Databricks base connection to Experience Platform",
    "auth": {
        "specName": "Access Token Authentication",
        "params": {
          "domain": "https://adb-1234567890123456.7.azuredatabricks.net",
          "clusterId": "xxxx",
          "accessToken": "xxxx",
          "database": "acme-db"
        }
    },
    "connectionSpec": {
        "id": "e9d7ec6b-0873-4e57-ad21-b3a7c65e310b",
        "version": "1.0"
    }
}'
```

| Property | Description |
| --- | --- |
| `auth.params.domain` | The URL of your [!DNL Databricks] workspace. |
| `auth.params.clusterId` | The ID of your cluster in [!DNL Databricks]. This cluster must already be an existing cluster and should be an interactive cluster |
| `auth.params.accessToken` | The access token that authenticates your [!DNL Databricks] account. |
| `auth.params.database` | The name of your database in the delta lake. |
| `connectionSpec.id` | The [!DNL Databricks] connection spec ID. |

+++

**Response**

A successful response returns your newly created connection, including your base connection ID.

+++View response example

```json
{
    "id": "f847950c-1c12-4568-a550-d5312b16fdb8",
    "etag": "\"0c0099f4-0000-0200-0000-67da91710000\""
}
```

+++

## Next steps

By following this tutorial, you have successfully created a connection between your [!DNL Databricks] account and Experience Platform. You can use your newly generated base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring database data to Experience Platform using the [!DNL Flow Service] API](../../collect/database-nosql.md)
