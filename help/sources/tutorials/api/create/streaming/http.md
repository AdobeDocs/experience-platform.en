---
keywords: Experience Platform;home;popular topics;streaming connection;create streaming connection;api guide;tutorial;create a streaming connection;streaming ingestion;ingestion;
solution: Experience Platform
title: Create a Streaming Connection Using the API
topic-legacy: tutorial
type: Tutorial
description: This tutorial will help you begin using streaming ingestion APIs, part of the Adobe Experience Platform Data Ingestion Service APIs.
exl-id: 9f7fbda9-4cd3-4db5-92ff-6598702adc34
---

# Creating a streaming connection using the API

Flow Service is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the [!DNL Flow Service] API to walk you through the steps to create a streaming connection using the Flow Service API.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

- [[!DNL Experience Data Model (XDM)]](../../../../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes experience data.
- [[!DNL Real-time Customer Profile]](../../../../../profile/home.md): Provides a unified, consumer profile in real time based on aggregated data from multiple sources.

Additionally, creating a streaming connection requires you to have a target XDM schema and a dataset. To learn how to create these, please read the tutorial on [streaming record data](../../../../../ingestion/tutorials/streaming-record-data.md) or the tutorial on [streaming time-series data](../../../../../ingestion/tutorials/streaming-time-series-data.md).

The following sections provide additional information that you will need to know in order to successfully make calls to streaming ingestion APIs.

### Reading sample API calls

This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{IMS_ORG}`

All resources in [!DNL Experience Platform], including those belonging to [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../../../../sandboxes/home.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

- Content-Type: application/json

## Create a base connection

A base connection specifies the source and contains the information required to make the flow compatible with streaming ingestion APIs. When creating a base connection, you have the option of creating a non-authenticated and an authenticated connection.

### Non-authenticated connection

Non-authenticated connections are the standard streaming connection you can create when you want to stream data into Platform.

**API format**

```http
POST /flowservice/connections
```

**Request**

In order to create a streaming connection, the provider ID and connection specification ID must be provided as part of the POST request. The provider ID is `521eee4d-8cbe-4906-bb48-fb6bd4450033` and the connection specification ID is `bc7b00d6-623a-4dfc-9fdb-f1240aeadaeb`.

```shell
curl -X POST https://platform.adobe.io/data/foundation/flowservice/connections \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '{
     "name": "Sample streaming connection",
     "providerId": "521eee4d-8cbe-4906-bb48-fb6bd4450033",
     "description": "Sample description",
     "connectionSpec": {
         "id": "bc7b00d6-623a-4dfc-9fdb-f1240aeadaeb",
         "version": "1.0"
     },
     "auth": {
         "specName": "Streaming Connection",
         "params": {
             "sourceId": "Sample connection",
             "dataType": "xdm",
             "name": "Sample connection"
         }
     }
 }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.sourceId` | The ID of the streaming connection you want to create. |
| `auth.params.dataType` | The data type for the streaming connection. This value must be `xdm`. |
| `auth.params.name` | The name of the streaming connection you want to create. |
| `connectionSpec.id` | The connection specification `id` for streaming connections. |

**Response**

A successful response returns HTTP status 201 with details of the newly created connection, including its unique identifier (`id`).

```json
{
    "id": "77a05521-91d6-451c-a055-2191d6851c34",
    "etag": "\"a500e689-0000-0200-0000-5e31df730000\""
}
```

| Property | Description |
| -------- | ----------- |
| `id` | The `id` of your newly created connection. This will herein be referred to as `{CONNECTION_ID}`. |
| `etag` | An identifier assigned to the connection, specifying the revision of the connection. |

### Authenticated connection

Authenticated connections should be used when you need to differentiate between records coming from trusted and un-trusted sources. Users who want to send information with Personally Identifiable Information (PII) should create an authenticated connection when streaming information to Platform.

**API format**

```http
POST /flowservice/connections
```

**Request**

In order to create a streaming connection, the provider ID and connection specification ID must be provided as part of the POST request. The provider ID is `521eee4d-8cbe-4906-bb48-fb6bd4450033` and the connection specification ID is `bc7b00d6-623a-4dfc-9fdb-f1240aeadaeb`.

```shell
curl -X POST https://platform.adobe.io/data/foundation/flowservice/connections \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '{
     "name": "Sample streaming connection",
     "providerId": "521eee4d-8cbe-4906-bb48-fb6bd4450033",
     "description": "Sample description",
     "connectionSpec": {
         "id": "bc7b00d6-623a-4dfc-9fdb-f1240aeadaeb",
         "version": "1.0"
     },
     "auth": {
         "specName": "Streaming Connection",
         "params": {
             "sourceId": "Sample connection",
             "dataType": "xdm",
             "name": "Sample connection",
             "authenticationRequired": true
         }
     }
 }
```


| Property | Description |
| -------- | ----------- |
| `auth.params.sourceId` | The ID of the streaming connection you want to create. |
| `auth.params.dataType` | The data type for the streaming connection. This value must be `xdm`. |
| `auth.params.name` | The name of the streaming connection you want to create. |
| `auth.params.authenticationRequired` | The parameter that specifies that the created streaming connection |
| `connectionSpec.id` | The connection specification `id` for streaming connections. |

**Response**

A successful response returns HTTP status 201 with details of the newly created connection, including its unique identifier (`id`).

```json
{
    "id": "77a05521-91d6-451c-a055-2191d6851c34",
    "etag": "\"a500e689-0000-0200-0000-5e31df730000\""
}
```

| Property | Description |
| -------- | ----------- |
| `id` | The `id` of your newly created connection. This will herein be referred to as `{CONNECTION_ID}`. |
| `etag` | An identifier assigned to the connection, specifying the revision of the connection. |

## Get streaming endpoint URL

With the base connection created, you can now retrieve your streaming endpoint URL.

**API format**

```http
GET /flowservice/connections/{CONNECTION_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{CONNECTION_ID}` | The `id` value of the connection you previously created. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/flowservice/connections/{CONNECTION_ID} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with detailed information about the requested connection. The streaming endpoint URL is automatically created with the connection, and can be retrieved using the `inletUrl` value.

```json
{
    "items": [
        {
            "createdAt": 1583971856947,
            "updatedAt": 1583971856947,
            "createdBy": "{API_KEY}",
            "updatedBy": "{API_KEY}",
            "createdClient": "{USER_ID}",
            "updatedClient": "{USER_ID}",
            "id": "77a05521-91d6-451c-a055-2191d6851c34",
            "name": "Another new sample connection (Experience Event)",
            "description": "Sample description",
            "connectionSpec": {
                "id": "bc7b00d6-623a-4dfc-9fdb-f1240aeadaeb",
                "version": "1.0"
            },
            "state": "enabled",
            "auth": {
                "specName": "Streaming Connection",
                "params": {
                    "sourceId": "Sample connection (ExperienceEvent)",
                    "inletUrl": "https://dcs.adobedc.net/collection/a868e1ce678a911ef1482b083329af3cafa4bafdc781285f25911eaae9e00eb2",
                    "inletId": "a868e1ce678a911ef1482b083329af3cafa4bafdc781285f25911eaae9e00eb2",
                    "dataType": "xdm",
                    "name": "Sample connection (ExperienceEvent)"
                }
            },
            "version": "\"56008aee-0000-0200-0000-5e697e150000\"",
            "etag": "\"56008aee-0000-0200-0000-5e697e150000\""
        }
    ]
}
```

## Create a source connection

After creating your base connection, you will need to create a source connection. When creating a source connection, you'll need the `id` value from your created base connection.

**API format**

```http
POST /flowservice/sourceConnections
```

**Request**

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "name": "Sample source connection",
    "description": "Sample source connection description",
    "baseConnectionId": "{BASE_CONNECTION_ID}",
    "connectionSpec": {
        "id": "bc7b00d6-623a-4dfc-9fdb-f1240aeadaeb",
        "version": "1.0"
    }
}'
```

**Response**

A successful response returns HTTP status 201 with detailed of the newly created source connection, including its unique identifier (`id`). 

```json
{
    "id": "63070871-ec3f-4cb5-af47-cf7abb25e8bb",
    "etag": "\"28000b90-0000-0200-0000-6091b0150000\""
}
```

## Create a target connection

After creating your source connection, you can create a target connection. When creating your target connection, you'll need the `id` value of your previously created dataset.

**API format**

```http
POST /flowservice/targetConnections
```

**Request**

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/targetConnections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "name": "Sample target connection",
    "description": "Sample target connection description",
    "connectionSpec": {
        "id": "c604ff05-7f1a-43c0-8e18-33bf874cb11c",
        "version": "1.0"
    },
    "data": {
        "format": "parquet_xdm"
    },
    "params": {
        "dataSetId": "{DATASET_ID}"
    }
}'
```

**Response**

A successful response returns HTTP status 201 with details of the newly created target connection, including its unique identifier (`id`).

```json
{
    "id": "98a2a72e-a80f-49ae-aaa3-4783cc9404c2",
    "etag": "\"0500b73f-0000-0200-0000-6091b0b90000\""
}
```

## Create a dataflow

With your source and target connections created, you can now create a dataflow. The dataflow is responsible for scheduling and collecting data from a source. You can create a dataflow by performing a POST request to the `/flows` endpoint. 

**API format**

```http
POST /flows
```

**Request**

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/flows' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "name": "Sample flow",
    "description": "Sample flow description",
    "flowSpec": {
        "id": "d8a6f005-7eaf-4153-983e-e8574508b877",
        "version": "1.0"
    },
    "sourceConnectionIds": [
        "{SOURCE_CONNECTION_ID}"
    ],
    "targetConnectionIds": [
        "{TARGET_CONNECTION_ID}"
    ]
}'
```

**Response**

A successful response returns HTTP status 201 with details of your newly created dataflow, including its unique identifier (`id`).

```json
{
    "id": "ab03bde0-86f2-45c7-b6a5-ad8374f7db1f",
    "etag": "\"1200c123-0000-0200-0000-6091b1730000\""
}
```

## Next steps

By following this tutorial, you have created a streaming HTTP connection, enabling you to use the streaming endpoint to ingest data into Platform. For instructions to create a streaming connection in the UI, please read the [creating a streaming connection tutorial](../../../ui/create/streaming/http.md).

To learn how to stream data to Platform, please read either the tutorial on [streaming time series data](../../../../../ingestion/tutorials/streaming-time-series-data.md) or the tutorial on [streaming record data](../../../../../ingestion/tutorials/streaming-record-data.md).

## Appendix

This section provides supplemental information on creating streaming connections using the API.

### Sending messages to an authenticated streaming connection

If a streaming connection has authentication enabled, the client will be required to add the `Authorization` header to their request. 

If the `Authorization` header is not present, or an invalid/expired access token is sent, an HTTP 401 Unauthorized response will be returned, with a similar response as below:

**Response**

```json
{
    "type": "https://ns.adobe.com/adobecloud/problem/data-collection-service-authorization",
    "status": "401",
    "title": "Authorization",
    "report": {
        "message": "[id] Ims service token is empty"
    }
}
```

### Post raw data to be ingested to Platform {#ingest-data}

Now that you've created your flow, you can send your JSON message to the streaming endpoint you previously created.

**API format**

```http
POST /collection/{CONNECTION_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{CONNECTION_ID}` | The `id` value of your newly created streaming connection. |

**Request**

The example request ingests raw data to the streaming endpoint that was previously created.

```shell
curl -X POST https://dcs.adobedc.net/collection/2301a1f761f6d7bf62c5312c535e1076bbc7f14d728e63cdfd37ecbb4344425b \
  -H 'Content-Type: application/json' \
  -H 'x-adobe-flow-id: 1f086c23-2ea8-4d06-886c-232ea8bd061d' \
  -d '{
      "name": "Johnson Smith",
      "location": {
          "city": "Seattle",
          "country": "United State of America",
          "address": "3692 Main Street"
      },
      "gender": "Male",
      "birthday": {
          "year": 1984,
          "month": 6,
          "day": 9
      }
  }'
```

**Response**

A successful response returns HTTP status 200 with details of the newly ingested information.

```json
{
    "inletId": "{CONNECTION_ID}",
    "xactionId": "1584479347507:2153:240",
    "receivedTimeMs": 1584479347507
}
```

| Property | Description |
| -------- | ----------- |
| `{CONNECTION_ID}` | The ID of the previously created streaming connection. |
| `xactionId` | A unique identifier generated server-side for the record you just sent. This ID helps Adobe trace this record's lifecycle through various systems and with debugging. |
| `receivedTimeMs` | A timestamp (epoch in milliseconds) that shows what time the request was received. |
