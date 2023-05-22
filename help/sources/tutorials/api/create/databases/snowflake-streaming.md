---
title: Connect Your Snowflake Streaming Account to Adobe Experience Platform
description: Learn how to connect Adobe Experience Platform to Snowflake Streaming using the Flow Service API.
badgeBeta: label="Beta" type="Informative"
badgeUltimate: label="Ultimate" type="Positive"
---
# Stream [!DNL Snowflake] data to Experience Platform using the [!DNL Flow Service] API

>[!IMPORTANT]
>
>* The [!DNL Snowflake] streaming source is in beta. Please read the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled sources.
>* The [!DNL Snowflake] streaming source is available in the sources catalog for customers who have purchased Real-Time CDP Ultimate.

This tutorial provides steps on how to connect and stream data from your [!DNL Snowflake] account to Adobe Experience Platform using the [[!DNL Flow Service] API](<https://www.adobe.io/experience-platform-apis/references/flow-service/>).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection {#create-a-base-connection}

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Snowflake] authentication credentials as part of the request body.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Snowflake]:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Snowflake base connection",
      "description": "Snowflake base connection",
      "auth": {
          "specName": "Basic Authentication for Snowflake",
          "params": {
              "account": "wixnnnd-ui60793.snowflakecomputing.com",
              "database": "ACME_DB",
              "warehouse": "ACME_WH",
              "username": "nikola15",
              "schema": "PUBLIC",
              "password": "xxxx",
              "role": "ACCOUNTADMIN"
          }
      },
      "connectionSpec": {
          "id": "51ae16c2-bdad-42fd-9fce-8d5dfddaf140",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| --- | --- |
| `auth.params.account` | The name of your [!DNL Snowflake] streaming account. |
| `auth.params.database` | The name of your [!DNL Snowflake] database where data will be pulled from. |
| `auth.params.warehouse` | The name of your [!DNL Snowflake] warehouse. The [!DNL Snowflake] warehouse manages the query execution process for the application. Each warehouse is independent from one another and must be accessed individually when bringing data over to Platform. |
| `auth.params.username` | The username for your [!DNL Snowflake] streaming account. |
| `auth.params.schema` | (Optional) The database schema associated with your [!DNL Snowflake] streaming account. |
| `auth.params.password` | The password for your [!DNL Snowflake] streaming account. |
| `auth.params.role` | (Optional) The role of the user for this [!DNL Snowflake] connection. If unprovided, this value defaults to `public`. |
| `connectionSpec.id` | The [!DNL Snowflake] connection specification ID: `51ae16c2-bdad-42fd-9fce-8d5dfddaf140`. |

**Response**

A successful response returns the newly created base connection and its corresponding etag.

```json

{
    "id": "1b614dc0-b76e-41e1-b25f-09f4a9d3f111",
    "etag": "\"d300cf4e-0000-0200-0000-6447a7750000\""
}
```

## Explore your data tables {#explore-your-data-tables}

Next, use the base connection ID to explore and navigate through your source's data tables by making a GET request to the `/connections/{BASE_CONNECTION_ID}/explore?objectType=root` endpoint while providing your base connection ID as a parameter.

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=root
```

| Parameter | Description |
| --- | --- |
| `{BASE_CONNECTION_ID}` | The base connection ID of your [!DNL Snowflake] streaming source. |


**Request**

The following request retrieves the structure and contents of your [!DNL Snowflake] streaming account.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/flowservice/connections/1b614dc0-b76e-41e1-b25f-09f4a9d3f111/explore?objectType=root' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the structure and contents of your source's data at the root-level.

```json
{
    "items": [
        {
            "type": "table",
            "name": "ACME"
        }
    ]
}
```

## Create a source connection {#create-a-source-connection}

A source connection creates and manages the connection to the external source from where data is ingested.

To create a source connection, make a POST request to the `/sourceConnections` endpoint of the [!DNL Flow Service] API.

**API format**

```http
POST /sourceConnections
```

**Request**

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
  -H 'authorization: Bearer {ACCESS_TOKEN}' \
  -H 'content-type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
      "name": "Snowflake Streaming Source Connection",
      "description": "A source connection for Snowflake Streaming data",
      "baseConnectionId": "1b614dc0-b76e-41e1-b25f-09f4a9d3f111",
      "connectionSpec": {
          "id": "51ae16c2-bdad-42fd-9fce-8d5dfddaf140",
          "version": "1.0"
      },
      "params": {
          "tableName": "ACME",
          "timestampColumn": "ts"
      }
  }'
```

| Property | Description |
| --- | --- |
| `baseConnectionId` | The authenticated base connection ID for your [!DNL Snowflake] streaming source. This ID was generated in an earlier step. |
| `connectionSpec.id` | The connection spec ID for the [!DNL Snowflake] streaming source. |
| `params.tableName` | The name of the table in your [!DNL Snowflake] database that you want to bring to Platform. |
| `params.timestampColumn` | The name of the timestamp column that will be used to fetch incremental values. |

**Response**

A successful response returns your source connection ID and its corresponding etag. The source connection ID will be used in a later step to create a dataflow.

```json

{
    "id": "61c0c5f1-bfe5-40f7-8f8c-a4dc175ddac6",
    "etag": "\"d300cf4e-0000-0200-0000-6447a7750000\""
}
```

## Create a dataflow

To create a dataflow to stream data from tour [!DNL Snowflake] account to Platform, you must make a POST request to the `/flows` endpoint while providing the following values:

>[!TIP]
>
>Follow the links below for step-by-step guides on how to retrieve the following IDs.

* [Source connection ID](#create-a-source-connection)
* [Target connection ID](../../collect/database-nosql.md#create-a-target-connection)
* [Flow spec ID](../../collect/database-nosql.md#retrieve-dataflow-specifications)
* [Mapping ID](../../collect/database-nosql.md#create-a-mapping)

**API format**

```http
POST /flows
```

**Request**

The following request creates a streaming dataflow for your [!DNL Snowflake] account.

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/flows' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Snowflake Streaming Dataflow",
      "description": "A dataflow for Snowflake streaming data",
      "sourceConnectionIds": [
        "61c0c5f1-bfe5-40f7-8f8c-a4dc175ddac6"
      ],
      "targetConnectionIds": [
        "78f41c31-3652-4a5e-b264-74331226dcf3"
      ],
      "flowSpec": {
        "id": "c1a19761-d2c7-4702-b9fa-fe91f0613e81",
        "version": "1.0"
      },
      "transformations": [
        {
          "name": "Mapping",
          "params": {
            "mappingId": "44d42ed27c46499a80eb0c0705c38cbd",
            "mappingVersion": 0
          }
        }
      ]
    }'
```

| Property | Description |
| --- | --- |
| `sourceConnectionIds` | The source connection ID for your [!DNL Snowflake] streaming source. |
| `targetConnectionIds` | The target connection ID for your [!DNL Snowflake] streaming source. |
| `flowSpec.id` | The flow spec ID to create a dataflow for a [!DNL Snowflake] streaming source. This flow spec ID allows you to create a streaming dataflow with mapping transformations. This ID is fixed and is: `c1a19761-d2c7-4702-b9fa-fe91f0613e81`. |
| `transformations.params.mappingId` | The mapping ID for your dataflow. |

**Response**

A successful response returns your flow ID and its corresponding etag.

```json
{
    "id": "2edc08ac-4df5-4fe6-936f-81a19ce92f5c",
    "etag": "\"770029f8-0000-0200-0000-6019e7d40000\""
}
```

## Next steps

By following this tutorial, you have created a streaming dataflow for your [!DNL Snowflake] data using the [!DNL Flow Service] API. Visit the following documentation for additional information on Adobe Experience Platform Sources:

* [Sources overview](../../../../home.md)
* [Monitor your dataflow using APIs](../../monitor.md)