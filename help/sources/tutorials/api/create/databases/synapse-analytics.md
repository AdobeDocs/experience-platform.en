---
title: Connect Azure Synapse Analytics To Experience Platform Using The Flow Service API
description: Learn how to connect your Azure Synapse Analytics account to Experience Platform using APIs.
badgeUltimate: label="Ultimate" type="Positive"
exl-id: 8944ac3f-366d-49c8-882f-11cd0ea766e4
---
# Connect [!DNL Azure Synapse Analytics] to Experience Platform using the [!DNL Flow Service] API

>[!IMPORTANT]
>
>The [!DNL Azure Synapse Analytics] source is available in the sources catalog to users who have purchased Real-Time Customer Data Platform Ultimate.

Read this guide to learn how to connect your [!DNL Azure Synapse Analytics] account to Adobe Experience Platform using the [[!DNL Flow Service] API](https://developer.adobe.com/experience-platform-apis/references/flow-service/).

## Get started

This guide requires a working understanding of the following components of Experience Platform:

* [Sources](../../../../home.md): Expereince Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Expereince Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Expereince Platform provides virtual sandboxes which partition a single Expereince Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL Azure Synapse Analytics] using the [!DNL Flow Service] API.

### Gather required credentials

Read the [[!DNL Azure Synapse Analytics] overview](../../../../connectors/databases/synapse-analytics.md#prerequisites) for information on authentication.

### Using Experience Platform APIs

For information on how to successfully make calls to Experience Platform APIs, see the guide on [getting started with Experience Platform APIs](../../../../../landing/api-guide.md).

## Connect [!DNL Azure Synapse Analytics] to Experience Platform

Read the following to learn how to create a base connection and connection your [!DNL Azure Synapse Analytics] account to Experience Platform.

### Create a base connection

A **base connection** stores key information that links your source system to Adobe Experience Platform. This includes:

* Your source's authentication credentials
* The current status of the connection
* A unique **base connection ID**

The **base connection ID** allows you to browse and explore files from your source, helping you identify which items to ingest, along with their data types and formats.

To create a base connection ID, send a POST request to the `/connections` endpoint, including your [!DNL Azure Synapse Analytics] authentication credentials in the request parameters.

**API format**

```https
POST /connections
```

>[!BEGINTABS]

>[!TAB Connection String Based Authentication]

**Request**

The following request creates a base connection for [!DNL Azure Synapse Analytics] using connection string based authentication.

+++View example request

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Connection for Azure Synapse Analytics",
      "description": "Connection for Azure Synapse Analytics",
      "auth": {
          "specName": "Connection String Based Authentication",
          "params": {
              "connectionString": "Server=tcp:{SERVER_NAME}.database.windows.net,1433;Database={DATABASE};User ID={USERNAME}@{SERVER_NAME};Password={PASSWORD};Trusted_Connection=False;Encrypt=True;Connection Timeout=30"
          }
      },
      "connectionSpec": {
          "id": "a49bcc7d-8038-43af-b1e4-5a7a089a7d79",
          "version": "1.0"
      }
  }'
```

| Parameter | Description |
| --------- | ----------- |
| `auth.params.connectionString` | The connection string used to connect to [!DNL Azure Synapse Analytics]. The [!DNL Azure Synapse Analytics] connection string pattern is `Server=tcp:{SERVER_NAME}.database.windows.net,1433;Database={DATABASE};User ID={USERNAME}@{SERVER_NAME};Password={PASSWORD};Trusted_Connection=False;Encrypt=True;Connection Timeout=30`. |
| `connectionSpec.id` | The [!DNL Azure Synapse Analytics] connection specification ID is: `a49bcc7d-8038-43af-b1e4-5a7a089a7d79`. |

+++

**Response**

A successful response returns details of the newly created base connection, including its unique identifier (`id`).

+++View example response

```json
{
    "id": "6bc13a3b-3546-455f-813a-3b3546a55fb1",
    "etag": "\"3500866c-0000-0200-0000-5e83afa30000\""
}
```

+++

>[!TAB Service Principal Key Based Authentication]

The following request creates a base connection for [!DNL Azure Synapse Analytics] using service principal key based authentication.

**Request**

+++View example request

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Connection for Azure Synapse Analytics",
    "description": "Connection for Azure Synapse Analytics",
    "auth": {
      "specName": "Service Principal Key Based Authentication",
      "params": {
        "server": "yourworkspace.sql.azuresynapse.net",
        "database": "SalesDW",
        "tenant": "72f988bf-86f1-41af-91ab-2d7cd011db47",
        "servicePrincipalId": "e7b8c1f2-1234-4c9a-9f3e-abcdef123456",
        "servicePrincipalKey": "~XyZ1234abcDEF5678..."
      }
    },
    "connectionSpec": {
      "id": "a49bcc7d-8038-43af-b1e4-5a7a089a7d79",
      "version": "1.0"
    }
  }'

```

| Credential | Description |
| --- | --- |
| `auth.params.server` | The fully qualified domain name of your [!DNL Azure Synapse Analytics] SQL endpoint. |
| `auth.params.database` | The name of the specific database within your [!DNL Azure Synapse Analytics] workspace. |
| `auth.params.tenant` | The [!DNL Azure Active Directory] tenant ID associated with your [!DNL Azure] subscription. |
| `auth.params.servicePrincipalId` | The client ID of an [!DNL Azure Active Directory] application. |
| `auth.params.servicePrincipalKey` | The client secret or password associated with the service principal. |
| `connectSpec.id` | The connection spec ID of [!DNL Azure Synapse Analytics]. |

+++

**Response**

A successful response returns details of the newly created base connection, including its unique identifier (`id`).

+++View example response

```json
{
    "id": "6bc13a3b-3546-455f-813a-3b3546a55fb1",
    "etag": "\"3500866c-0000-0200-0000-5e83afa30000\""
}
```

+++

>[!ENDTABS]

## Next steps

By following this tutorial, you have created a [!DNL Azure Synapse Analytics] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring database data to Experience Platform using the [!DNL Flow Service] API](../../collect/database-nosql.md)
