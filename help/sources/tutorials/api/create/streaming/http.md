---
keywords: Experience Platform;home;popular topics;streaming connection;create streaming connection;api guide;tutorial;create a streaming connection;streaming ingestion;ingestion;
title: Create an HTTP API Streaming Connection Using the API
description: This tutorial will help you begin using streaming ingestion APIs, part of the Adobe Experience Platform Data Ingestion Service APIs.
exl-id: 9f7fbda9-4cd3-4db5-92ff-6598702adc34
---

# Create an [!DNL HTTP API] streaming connection using the [!DNL Flow Service] API

Flow Service is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/) to walk you through the steps to create a streaming connection using the [!DNL Flow Service] API.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [[!DNL Experience Data Model (XDM)]](../../../../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes experience data.
* [[!DNL Real-time Customer Profile]](../../../../../profile/home.md): Provides a unified, consumer profile in real time based on aggregated data from multiple sources.

Additionally, creating a streaming connection requires you to have a target XDM schema and a dataset. To learn how to create these, please read the tutorial on [streaming record data](../../../../../ingestion/tutorials/streaming-record-data.md) or the tutorial on [streaming time-series data](../../../../../ingestion/tutorials/streaming-time-series-data.md).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection specifies the source and contains the information required to make the flow compatible with streaming ingestion APIs. When creating a base connection, you have the option of creating a non-authenticated and an authenticated connection.

### Non-authenticated connection

Non-authenticated connections are the standard streaming connection you can create when you want to stream data into Platform.

**API format**

```http
POST /flowservice/connections
```

**Request**

To create a base connection, make a POST request to the `/connections` endpoint while providing a name for your connection, the data type, and HTTP API the connection specification ID. This ID is `bc7b00d6-623a-4dfc-9fdb-f1240aeadaeb`.

>[!BEGINTABS]

>[!TAB XDM]

```shell
curl -X POST https://platform.adobe.io/data/foundation/flowservice/connections \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '{
    "name": "ACME Streaming Connection XDM Data",
    "description": "ACME streaming connection for customer data",
    "connectionSpec": {
        "id": "bc7b00d6-623a-4dfc-9fdb-f1240aeadaeb",
        "version": "1.0"
    },
    "auth": {
      "specName": "Streaming Connection",
      "params": {
        "dataType": "xdm"
      }
    }
  }'
```

>[!TAB Raw data]

```shell
curl -X POST https://platform.adobe.io/data/foundation/flowservice/connections \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '{
    "name": "ACME Streaming Connection Raw Data",
    "description": "ACME streaming connection for customer data",
    "connectionSpec": {
        "id": "bc7b00d6-623a-4dfc-9fdb-f1240aeadaeb",
        "version": "1.0"
    },
    "auth": {
      "specName": "Streaming Connection",
      "params": {
        "dataType": "raw"
      }
    }
  }'
```

>[!ENDTABS]

| Property | Description |
| --- | --- |
| `name` | The name of your base connection. Ensure that the name of your base connection is descriptive as you can use this to look up information on your base connection. |
| `description` | (Optional) A property that you can include to provide more information on your base connection. |
| `connectionSpec.id` | The connection specification ID that corresponds with HTTP API. This ID is `bc7b00d6-623a-4dfc-9fdb-f1240aeadaeb`.  |
| `auth.params.dataType` | The data type for the streaming connection. This value must be `xdm`. |
| `auth.params.name` | The name of the streaming connection you want to create. |

**Response**

A successful response returns HTTP status 201 with details of the newly created connection, including its unique identifier (`id`).

```json
{
  "id": "a59d368a-1152-4673-a46e-bd52e8cdb9a9",
  "etag": "\"f50185ed-0000-0200-0000-637e8fad0000\""
}
```

| Property | Description |
| -------- | ----------- |
| `id` | The `id` of your newly created connection. |
| `etag` | An identifier assigned to the connection, specifying the revision of the connection. |

### Authenticated connection

Authenticated connections should be used when you need to differentiate between records coming from trusted and un-trusted sources. Users who want to send information with Personally Identifiable Information (PII) should create an authenticated connection when streaming information to Platform.

**API format**

```http
POST /flowservice/connections
```

**Request**

>[!BEGINTABS]

>[!TAB XDM]

```shell
curl -X POST https://platform.adobe.io/data/foundation/flowservice/connections \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '{
     "name": "ACME Streaming Connection XDM Data Authenticated",
     "description": "ACME streaming connection for customer data",
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

>[!TAB Raw data]

```shell
curl -X POST https://platform.adobe.io/data/foundation/flowservice/connections \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '{
     "name": "ACME Streaming Connection Raw Data Authenticated",
     "description": "ACME streaming connection for customer data",
     "connectionSpec": {
         "id": "bc7b00d6-623a-4dfc-9fdb-f1240aeadaeb",
         "version": "1.0"
     },
     "auth": {
         "specName": "Streaming Connection",
         "params": {
             "sourceId": "Sample connection",
             "dataType": "raw",
             "name": "Sample connection",
             "authenticationRequired": true
         }
     }
 }
```

>[!ENDTABS]

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
  "id": "a59d368a-1152-4673-a46e-bd52e8cdb9a9",
  "etag": "\"f50185ed-0000-0200-0000-637e8fad0000\""
}
```

| Property | Description |
| -------- | ----------- |
| `id` | The `id` of your newly created connection. This will herein be referred to as `{BASE_CONNECTION_ID}`. |
| `etag` | An identifier assigned to the connection, specifying the revision of the connection. |

## Get streaming endpoint URL

With the base connection created, you can now retrieve your streaming endpoint URL.

**API format**

```http
GET /flowservice/connections/{BASE_CONNECTION_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{BASE_CONNECTION_ID}` | The `id` value of the connection you previously created. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/flowservice/connections/{BASE_CONNECTION_ID} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with detailed information about the requested connection. The streaming endpoint URL is automatically created with the connection, and can be retrieved using the `inletUrl` value.

```json
{
  "items": [
    {
      "id": "a59d368a-1152-4673-a46e-bd52e8cdb9a9",
      "createdAt": 1669238699119,
      "updatedAt": 1669238699119,
      "createdBy": "28AF22BA5DE6B0B40A494036@AdobeID",
      "updatedBy": "28AF22BA5DE6B0B40A494036@AdobeID",
      "createdClient": "exc_app",
      "updatedClient": "exc_app",
      "sandboxId": "d537df80-c5d7-11e9-aafb-87c71c35cac8",
      "sandboxName": "prod",
      "imsOrgId": "DFAF48815CD097F30A494219@AdobeOrg",
      "name": "ACME Streaming Connection XDM Data",
      "description": "ACME streaming connection for customer data",
      "connectionSpec": {
        "id": "bc7b00d6-623a-4dfc-9fdb-f1240aeadaeb",
        "version": "1.0"
      },
      "state": "enabled",
      "auth": {
        "specName": "Streaming Connection",
        "params": {
          "sourceId": "ACME Streaming Connection XDM Data",
          "inletUrl": "https://dcs-int.adobedc.net/collection/667b41cf2dbf3509927da1ebf7e93c20afa727cc8d8373e51da18b62e1b985ec",
          "authenticationRequired": false,
          "inletId": "667b41cf2dbf3509927da1ebf7e93c20afa727cc8d8373e51da18b62e1b985ec",
          "dataType": "xdm",
          "name": "ACME Streaming Connection XDM Data"
        }
      },
      "version": "\"f50185ed-0000-0200-0000-637e8fad0000\"",
      "etag": "\"f50185ed-0000-0200-0000-637e8fad0000\""
    }
  ]
}
```

## Create a source connection {#source}

After creating your base connection, you will need to create a source connection. When creating a source connection, you'll need the `id` value from your created base connection.

**API format**

```http
POST /flowservice/sourceConnections
```

**Request**

>[!BEGINTABS]

>[!TAB XDM]

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
      "name": "ACME Streaming Source Connection for Customer Data",
      "description": "A streaming source connection for ACME XDM Customer Data",
      "baseConnectionId": "a59d368a-1152-4673-a46e-bd52e8cdb9a9",
      "connectionSpec": {
          "id": "bc7b00d6-623a-4dfc-9fdb-f1240aeadaeb",
          "version": "1.0"
      }
    }'
```

>[!TAB Raw data]

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
      "name": "<name>",
      "description": "<description>",
      "baseConnectionId": "<baseConnectionId>",
      "connectionSpec": {
          "id": "bc7b00d6-623a-4dfc-9fdb-f1240aeadaeb",
          "version": "1.0"
      }
    }'
```

>[!ENDTABS]

**Response**

A successful response returns HTTP status 201 with detailed of the newly created source connection, including its unique identifier (`id`). 

```json
{
  "id": "34ece231-294d-416c-ad2a-5a5dfb2bc69f",
  "etag": "\"d505125b-0000-0200-0000-637eb7790000\""
}
```

## Create a target XDM schema {#target-schema}

In order for the source data to be used in Platform, a target schema must be created to structure the source data according to your needs. The target schema is then used to create a Platform dataset in which the source data is contained.

A target XDM schema can be created by performing a POST request to the [Schema Registry API](https://www.adobe.io/experience-platform-apis/references/schema-registry/).

For detailed steps on how to create a target XDM schema, see the tutorial on [creating a schema using the API](../../../../../xdm/api/schemas.md).

### Create a target dataset {#target-dataset}

A target dataset can be created by performing a POST request to the [Catalog Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/catalog.yaml), providing the ID of the target schema within the payload.

For detailed steps on how to create a target dataset, see the tutorial on [creating a dataset using the API](../../../../../catalog/api/create-dataset.md).

## Create a target connection {#target}

A target connection represents the connection to the destination where the ingested data lands in. To create a target connection, you must provide the fixed connection spec ID associated to the Data Lake. This connection spec ID is: `c604ff05-7f1a-43c0-8e18-33bf874cb11c`.

You now have the unique identifiers a target schema a target dataset and the connection spec ID to the Data Lake. Using these identifiers, you can create a target connection using the [!DNL Flow Service] API to specify the dataset that will contain the inbound source data.

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
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
      "name": "ACME Streaming Target Connection",
      "description": "ACME Streaming Target Connection",
      "data": {
          "schema": {
              "id": "https://ns.adobe.com/aepstreamingservicesint/schemas/7f682c29f887512a897791e7161b90a1ae7ed3dd07a177b1",
              "version": "application/vnd.adobe.xed-full+json;version=1.0"
          }
      },
      "params": {
          "dataSetId": "637eb7fadc8a211b6312b65b"
      },
          "connectionSpec": {
          "id": "c604ff05-7f1a-43c0-8e18-33bf874cb11c",
          "version": "1.0"
      }
  }'
```

**Response**

A successful response returns HTTP status 201 with details of the newly created target connection, including its unique identifier (`id`).

```json
{
  "id": "07f2f6ff-1da5-4704-916a-c615b873cba9",
  "etag": "\"340680f7-0000-0200-0000-637eb8730000\""
}
```

## Create a mapping {#mapping}

In order for the source data to be ingested into a target dataset, it must first be mapped to the target schema that the target dataset adheres to.

To create a mapping set, make a POST request to the `mappingSets` endpoint of the [[!DNL Data Prep] API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/data-prep.yaml) while providing your target XDM schema `$id` and the details of the mapping sets you want to create.

**API format**

```http
POST /mappingSets
```

**Request**

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/mappingSets' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "version": 0,
      "xdmSchema": "https://ns.adobe.com/aepstreamingservicesint/schemas/7f682c29f887512a897791e7161b90a1ae7ed3dd07a177b1",
      "xdmVersion": "1.0",
      "mappings": [
          {
              "destinationXdmPath": "person.name.firstName",
              "sourceAttribute": "firstName",
              "identity": false,
              "version": 0
          },
          {
              "destinationXdmPath": "person.name.lastName",
              "sourceAttribute": "lastName",
              "identity": false,
              "version": 0
          }
      ]
  }'
```

| Property | Description |
| -------- | ----------- |
| `xdmSchema` | The `$id` of the target XDM schema. |

**Response**

A successful response returns details of the newly created mapping including its unique identifier (`id`). This ID is required in a later step to create a dataflow.

```json
{
  "id": "79a623960d3f4969835c9e00dc90c8df",
  "version": 0,
  "createdDate": 1669249214031,
  "modifiedDate": 1669249214031,
  "createdBy": "28AF22BA5DE6B0B40A494036@AdobeID",
  "modifiedBy": "28AF22BA5DE6B0B40A494036@AdobeID"
}
```

## Create a dataflow

With your source and target connections created, you can now create a dataflow. The dataflow is responsible for scheduling and collecting data from a source. You can create a dataflow by performing a POST request to the `/flows` endpoint. 

**API format**

```http
POST /flows
```

**Request**

>[!BEGINTABS]

>[!TAB Without transformations]

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/flows' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
      "name": "ACME Streaming Dataflow",
      "description": "ACME streaming dataflow for customer rdata",
      "flowSpec": {
        "id": "d8a6f005-7eaf-4153-983e-e8574508b877",
        "version": "1.0"
      },
      "sourceConnectionIds": [
        "34ece231-294d-416c-ad2a-5a5dfb2bc69f"
      ],
      "targetConnectionIds": [
        "07f2f6ff-1da5-4704-916a-c615b873cba9"
      ]
    }'
```

>[!TAB With transformations]

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/flows' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
      "name": "<name>",
      "description": "<description>",
      "flowSpec": {
        "id": "c1a19761-d2c7-4702-b9fa-fe91f0613e81",
        "version": "1.0"
      },
      "sourceConnectionIds": [
        "<sourceConnectionId>"
      ],
      "targetConnectionIds": [
        "<targetConnectionId>"
      ],
      "transformations": [
        {
          "name": "Mapping",
          "params": {
            "mappingId": "<mappingId>",
            "mappingVersion": <mappingVersion>
          }
        }
      ]
    }'
```

>[!ENDTABS]

| Property | Description |
| --- | --- |
| `flowSpec.id` | The flow specification ID for [!DNL HTTP API]. This ID is: `c1a19761-d2c7-4702-b9fa-fe91f0613e81`. |
| `sourceConnectionIds` | The [source connection ID](#source) retrieved in an earlier step. |
| `targetConnectionIds` | The [target connection ID](#target) retrieved in an earlier step. |
| `transformations.params.mappingId` | The [mapping ID](#mapping) retrieved in an earlier step.|

**Response**

A successful response returns HTTP status 201 with details of your newly created dataflow, including its unique identifier (`id`).

```json
{
  "id": "f2ae0194-8bd8-4a40-a4d9-f07bdc3e6ce2",
  "etag": "\"dc0459ae-0000-0200-0000-637ebaec0000\""
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

### Post data to be ingested to Platform {#ingest-data}

Now that you've creted your flow, you can send your JSON message to the streaming endpoint you previously created.

**API format**

```http
POST /collection/{BASE_CONNECTION_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{BASE_CONNECTION_ID}` | The `id` value of your newly created streaming connection. |

**Request**

The example request ingests raw data to the streaming endpoint that was previously created.

>[!BEGINTABS]

>[!TAB XDM]

```shell
curl -X POST https://dcs.adobedc.net/collection/2301a1f761f6d7bf62c5312c535e1076bbc7f14d728e63cdfd37ecbb4344425b \
  -H 'Content-Type: application/json' \
  -H 'x-adobe-flow-id: 1f086c23-2ea8-4d06-886c-232ea8bd061d' \
  -d '{
      "header": {
        "schemaRef": {
          "id": "<schemaRefId>",
          "contentType": "application/vnd.adobe.xed-full-notext+json; version=1.0"
        },
        "flowId": "<flowId>",
        "datasetId": "<dataSetId>"
      },
      "body": {
        "xdmMeta": {
          "schemaRef": {
            "id": "<schemaRefId>",
            "contentType": "application/vnd.adobe.xed-full-notext+json; version=1.0"
          }
        },
        "xdmEntity": {
          <json of mapping of xdm fields to their value>
        }
      }
    }'
```

>[!TAB Raw data]

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
    "inletId": "{BASE_CONNECTION_ID}",
    "xactionId": "1584479347507:2153:240",
    "receivedTimeMs": 1584479347507
}
```

| Property | Description |
| -------- | ----------- |
| `{BASE_CONNECTION_ID}` | The ID of the previously created streaming connection. |
| `xactionId` | A unique identifier generated server-side for the record you just sent. This ID helps Adobe trace this record's lifecycle through various systems and with debugging. |
| `receivedTimeMs` | A timestamp (epoch in milliseconds) that shows what time the request was received. |
