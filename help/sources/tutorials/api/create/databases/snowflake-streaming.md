---
title: Connect Your Snowflake Streaming Account to Adobe Experience Platform
description: Learn how to connect Adobe Experience Platform to Snowflake Streaming using the Flow Service API.
---
# Stream [!DNL Snowflake] data to Experience Platform using the [!DNL Flow Service] API

This tutorial provides steps on how to connect and stream data from your [!DNL Snowflake] account to Adobe Experience Platform using the [[!DNL Flow Service] API](<https://www.adobe.io/experience-platform-apis/references/flow-service/>).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

The following section provides additional information that you will need to know in order to successfully connect to [!DNL Snowflake] using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL Snowflake], you must provide the following connection properties:

| Credential | Description |
| --- | --- |
| `account` | The full account name associated with your [!DNL Snowflake] account. A fully qualified [!DNL Snowflake] account name includes your account name, region, and cloud platform. For example, `cj12345.east-us-2.azure`. For more information on account names, refer to this [[!DNL Snowflake document on account identifiers]](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html).  |
| `warehouse` | The [!DNL Snowflake] warehouse manages the query execution process for the application. Each [!DNL Snowflake] warehouse is independent from one another and must be accessed individually when bringing data over to Platform. |
| `database` | The [!DNL Snowflake] database contains the data you want to bring the Platform. |
| `username` | The username for the [!DNL Snowflake] account. |
| `password` | The password for the [!DNL Snowflake] user account. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Snowflake] is `51ae16c2-bdad-42fd-9fce-8d5dfddaf140`. |

For more information about getting started, refer to this [[!DNL Snowflake] document](https://docs.snowflake.com/en/user-guide/key-pair-auth.html).

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
| `auth.params.account` |
| `auth.params.database` |
| `auth.params.warehouse` |
| `auth.params.schema` |
| `auth.params.password` |
| `auth.params.role` |
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
      "name": "Snowflake Streaming",
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

**Response**

A successful response returns your flow ID and its corresponding etag.

```json
{
    "id": "2edc08ac-4df5-4fe6-936f-81a19ce92f5c",
    "etag": "\"770029f8-0000-0200-0000-6019e7d40000\""
}
```