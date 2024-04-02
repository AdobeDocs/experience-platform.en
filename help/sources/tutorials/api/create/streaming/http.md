---
keywords: Experience Platform;home;popular topics;streaming connection;create streaming connection;api guide;tutorial;create a streaming connection;streaming ingestion;ingestion;
title: Create an HTTP API Streaming Connection Using The Flow Service API
description: This tutorial provides steps on how to create a streaming connection using the HTTP API source for both raw and XDM data using the Flow Service API
exl-id: 9f7fbda9-4cd3-4db5-92ff-6598702adc34
---

# Create an HTTP API streaming connection using the [!DNL Flow Service] API

Flow Service is used to collect and centralize customer data from different sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/) to walk you through the steps to create a streaming connection using the [!DNL Flow Service] API.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [[!DNL Experience Data Model (XDM)]](../../../../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes experience data.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, consumer profile in real time based on aggregated data from multiple sources.

Additionally, creating a streaming connection requires you to have a target XDM schema and a dataset. To learn how to create these, please read the tutorial on [streaming record data](../../../../../ingestion/tutorials/streaming-record-data.md) or the tutorial on [streaming time-series data](../../../../../ingestion/tutorials/streaming-time-series-data.md).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection specifies the source and contains the information required to make the flow compatible with streaming ingestion APIs. When creating a base connection, you have the option of creating a non-authenticated and an authenticated connection.

### Non-authenticated connection

Non-authenticated connections are the standard streaming connection you can create when you want to stream data into Platform.

To create a non-authenticated base connection, make a POST request to the `/connections` endpoint while providing a name for your connection, the data type, and the HTTP API connection specification ID. This ID is `bc7b00d6-623a-4dfc-9fdb-f1240aeadaeb`.

**API format**

```http
POST /flowservice/connections
```

**Request**

The following request creates a base connection for HTTP API.

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
| `name` | The name of your base connection. Ensure that the name is descriptive as you can use this to look up information on your base connection. |
| `description` | (Optional) A property that you can include to provide more information on your base connection. |
| `connectionSpec.id` | The connection specification ID that corresponds with HTTP API. This ID is `bc7b00d6-623a-4dfc-9fdb-f1240aeadaeb`.  |
| `auth.params.dataType` | The data type for the streaming connection. Supported values include: `xdm` and `raw`. |
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
| `id` | The `id` of your newly created base connection. |
| `etag` | An identifier assigned to the connection, specifying the version of the base connection. |

### Authenticated connection

Authenticated connections should be used when you need to differentiate between records coming from trusted and un-trusted sources. Users who want to send information with Personally Identifiable Information (PII) should create an authenticated connection when streaming information to Platform.

To create an authenticated base connection, you must include the `authenticationRequired` parameter in your request and specify its value as `true`. During this step, you can also provide a source ID for your authenticated base connection. This parameter is optional and will use the same value as the `name` attribute, if it is not provided. 


**API format**

```http
POST /flowservice/connections
```

**Request**

The following request creates an authenticated base connection for HTTP API.

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
             "sourceId": "Authenticated XDM streaming connection",
             "dataType": "xdm",
             "name": "Authenticated XDM streaming connection",
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
             "sourceId": "Authenticated raw streaming connection",
             "dataType": "raw",
             "name": "Authenticated raw streaming connection",
             "authenticationRequired": true
         }
     }
 }
```

>[!ENDTABS]

| Property | Description |
| -------- | ----------- |
| `auth.params.sourceId` | An additional identifier that can be used when creating an authenticated base connection. This parameter is optional and will use the same value as the `name` attribute, if it is not provided. |
| `auth.params.authenticationRequired` | This parameter specifies whether the streaming connection requires authentication or not. If `authenticationRequired` is set to `true` then authentication must be provided for the streaming connection. If `authenticationRequired` is set to `false` then authentication is not required. |

**Response**

A successful response returns HTTP status 201 with details of the newly created connection, including its unique identifier (`id`).

```json
{
  "id": "a59d368a-1152-4673-a46e-bd52e8cdb9a9",
  "etag": "\"f50185ed-0000-0200-0000-637e8fad0000\""
}
```

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
      "createdBy": "acme@AdobeID",
      "updatedBy": "acme@AdobeID",
      "createdClient": "{CREATED_CLIENT}",
      "updatedClient": "{UPDATED_CLIENT}",
      "sandboxId": "{SANDBOX_ID}",
      "sandboxName": "{SANDBOX_NAME}",
      "imsOrgId": "{ORG_ID}",
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
          "inletUrl": "https://dcs.adobedc.net/collection/667b41cf2dbf3509927da1ebf7e93c20afa727cc8d8373e51da18b62e1b985ec",
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

To create a source connection, make a POST request to the `/sourceConnections` endpoint while providing your base connection ID.

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

A target connection represents the connection to the destination where the ingested data lands in. To create a target connection, make POST request to `/targetConnections` while providing IDs for your target dataset and target XDM schema. During this step, you must also provide the data lake connection specification ID. This ID is `c604ff05-7f1a-43c0-8e18-33bf874cb11c`.

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
              "id": "https://ns.adobe.com/{TENANT}/schemas/7f682c29f887512a897791e7161b90a1ae7ed3dd07a177b1",
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
      "xdmSchema": "https://ns.adobe.com/{TENANT}/schemas/7f682c29f887512a897791e7161b90a1ae7ed3dd07a177b1",
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
  "createdBy": "acme@AdobeID",
  "modifiedBy": "acme@AdobeID"
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

The following request creates a streaming dataflow for HTTP API without data transformations.

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
      "description": "ACME streaming dataflow for customer data",
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

The following requests creates a streaming dataflow for HTTP API with mapping transformations applied to your data.

When creating a dataflow with transformations, the `name` parameter cannot be changed. This value must always be set to `Mapping`.

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
        "34ece231-294d-416c-ad2a-5a5dfb2bc69f"
      ],
      "targetConnectionIds": [
        "07f2f6ff-1da5-4704-916a-c615b873cba9"
      ],
      "transformations": [
        {
          "name": "Mapping",
          "params": {
            "mappingId": "79a623960d3f4969835c9e00dc90c8df",
            "mappingVersion": 0
          }
        }
      ]
    }'
```

>[!ENDTABS]

| Property | Description |
| --- | --- |
| `name` | The name of your dataflow. Ensure that the name of your dataflow is descriptive as you can use this to look up information on your dataflow. |
| `description` | (Optional) A property that you can include to provide more information on your dataflow. |
| `flowSpec.id` | The flow specification ID for [!DNL HTTP API]. To create a dataflow with transformations, you must use  `c1a19761-d2c7-4702-b9fa-fe91f0613e81`. To create a dataflow without transformations, use `d8a6f005-7eaf-4153-983e-e8574508b877`. |
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

## Post data to be ingested to Platform {#ingest-data}

>[!NOTE]
>
>You must add a delay of at least ~5 minutes between creation of dataflow and ingesting any streaming data. This allows the dataflow to be fully enabled, before any data is ingested.

Now that you've created your flow, you can send your JSON message to the streaming endpoint you previously created.

**API format**

```http
POST /collection/{INLET_URL}
```

| Parameter | Description |
| --------- | ----------- |
| `{INLET_URL}` | Your streaming endpoint URL. You can retrieve this URL by making a GET request to the `/connections` endpoint while providing your base connection ID. |
| `{FLOW_ID}` | The ID of your HTTP API streaming dataflow. This ID is required for both XDM and RAW data. |

**Request**

>[!BEGINTABS]

>[!TAB Send XDM data]

```shell
curl -X POST https://dcs.adobedc.net/collection/667b41cf2dbf3509927da1ebf7e93c20afa727cc8d8373e51da18b62e1b985ec \
  -H 'Content-Type: application/json' \
  -d '{
        "header": {
          "schemaRef": {
            "id": "https://ns.adobe.com/{TENANT}/schemas/7f682c29f887512a897791e7161b90a1ae7ed3dd07a177b1",
            "contentType": "application/vnd.adobe.xed-full-notext+json; version=1.0"
          },
          "flowId": "f2ae0194-8bd8-4a40-a4d9-f07bdc3e6ce2",
          "datasetId": "604a18a3bae67d18db6d258c"
        },
        "body": {
          "xdmMeta": {
            "schemaRef": {
              "id": "https://ns.adobe.com/{TENANT}/schemas/7f682c29f887512a897791e7161b90a1ae7ed3dd07a177b1",
              "contentType": "application/vnd.adobe.xed-full-notext+json; version=1.0"
            }
          },
          "xdmEntity": {
            "_id": "http-source-connector-acme-01",
            "person": {
              "name": {
                "firstName": "suman",
                "lastName": "nolan"
              }
            },
            "workEmail": {
              "primary": true,
              "address": "suman@acme.com",
              "type": "work",
              "status": "active"
            }
          }
        }
      }'
```

>[!TAB Send Raw data with flow ID as an HTTP header]

When sending raw data, you can specify your flow ID as either a query parameter or as part of your HTTP header. The following example specifies flow ID as an HTTP header.

```shell
curl -X POST https://dcs.adobedc.net/collection/667b41cf2dbf3509927da1ebf7e93c20afa727cc8d8373e51da18b62e1b985ec \
  -H 'Content-Type: application/json' 
  -H 'x-adobe-flow-id=f2ae0194-8bd8-4a40-a4d9-f07bdc3e6ce2' \
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

>[!TAB Send Raw data with flow ID as a query parameter]

When sending raw data, you can specify your flow ID as either a query parameter or as an HTTP header. The following example specifies flow ID as a query parameter.

```shell
curl -X POST https://dcs.adobedc.net/collection/667b41cf2dbf3509927da1ebf7e93c20afa727cc8d8373e51da18b62e1b985ec?x-adobe-flow-id=f2ae0194-8bd8-4a40-a4d9-f07bdc3e6ce2 \
  -H 'Content-Type: application/json' \
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

>[!ENDTABS]

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

