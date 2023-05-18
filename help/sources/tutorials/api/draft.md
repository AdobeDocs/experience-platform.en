---
title: Create Drafts Of Your Flow Service Entities API
description: Learn how to create drafts of your base connection, source connection, target connection, and dataflow using the Flow Service API
exl-id: aad6a302-1905-4a23-bc3d-39e76c9a22da
---
# Create drafts of your [!DNL Flow Service] entities using the API

You can use the `mode=draft` query parameter in the [[!DNL Flow Service] API](<https://www.adobe.io/experience-platform-apis/references/flow-service/>) to set your [!DNL Flow Service] entities such as your base connections, source connections, target connections, and dataflows to a draft state. 

Drafts can be updated later with new information and then published once they are ready, by using the `op=publish` query parameter. 

This tutorial provides steps on how to set your [!DNL Flow Service] entities to a draft state and allow you to pause and save your workflows for completion at a later time.

## Getting started

This tutorial requires you to have a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../landing/api-guide.md).

## Create a draft base connection {#create-a-draft-base-connection}

To create a draft base connection, make a POST request to the `/connections` endpoint of the [!DNL Flow Service] API and provide `mode=draft` as a query parameter.

**API format**

```http
POST /connections?mode=draft
```

| Parameter | Description |
| --- | --- |
| `mode` | A user-supplied query parameter that decides the state of the base connection. To set a base connection as a draft, set `mode` to `draft`. |

**Request**

The following request creates draft base connection for the [!DNL Azure File Storage] source:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "name": "ACME Azure File Storage Base Connection",
        "description": "Azure File Storage base connection for ACME data (DRAFT)",
        "auth": {
            "specName": "Basic Authentication",
            "params": {
                    "host": "{HOST}",
                    "userId": "{USER_ID}",
                    "password": "{PASSWORD}"
                }
        },
        "connectionSpec": {
            "id": "be5ec48c-5b78-49d5-b8fa-7c89ec4569b8",
            "version": "1.0"
        }
      }'
```

**Response**

A successful response returns the base connection ID and corresponding etag for your draft base connection. You can use this ID later to update and publish your base connection.

```json
{
    "id": "f9377f50-607a-4818-b77f-50607a181860",
    "etag": "\"2f0276fa-0000-0200-0000-5eab3abb0000\""
}
```

## Publish your draft base connection {#publish-your-draft-base-connection}

Once your draft is ready to be published, make a POST request to the `/connections` endpoint and provide the ID of the draft base connection that you want to publish, as well as an action operation for publishing.

**API format**

```http
POST /connections/{BASE_CONNECTION_ID}/action?op=publish
```

| Parameter | Description |
| --- | --- |
| `op` | An action operation that updates the state of the queried base connection. To publish a draft base connection, set `op` to `publish`. |

**Request**

The following request publishes the draft base connection for [!DNL Azure File Storage] that was created in an earlier step.

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections/f9377f50-607a-4818-b77f-50607a181860/action?op=publish' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

A successful response returns the ID and corresponding etag for your published base connection.

```json
{
    "id": "f9377f50-607a-4818-b77f-50607a181860",
    "etag": "\"2f0276fa-0000-0200-0000-5eab3abb0000\""
}
```

## Create a draft source connection {#create-a-draft-source-connection}

To create a draft source connection, make a POST request to the `/sourceConnections` endpoint of the [!DNL Flow Service] API and provide `mode=draft` as a query parameter.

**API format**

```http
POST /sourceConnections?mode=draft
```

| Parameter | Description |
| --- | --- |
| `mode` | A user-supplied query parameter that decides the state of the source connection. To set a source connection as a draft, set `mode` to `draft`. |

**Request**

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/sourceConnections?mode=draft' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
      "name": "ACME Azure File Storage Source Connection",
      "description: "Azure File Storage source connection for ACME data (DRAFT)",
      "baseConnectionId": "f9377f50-607a-4818-b77f-50607a181860",
      "data": {
          "format": "delimited",
      },
      "params": {
          "path": "/acme/summerCampaign/account.csv",
          "type": "file"
      },
      "connectionSpec": {
          "id": "be5ec48c-5b78-49d5-b8fa-7c89ec4569b8",
          "version": "1.0"
      }
  }'
```

**Response**

A successful response returns the source connection ID and corresponding etag for your draft source connection. You can use this ID later to update and publish your source connection.

```json
{
    "id": "26b53912-1005-49f0-b539-12100559f0e2",
    "etag": "\"11004d97-0000-0200-0000-5f3c3b140000\""
}
```

## Publish your draft source connection {#publish-your-draft-source-connection}

>[!NOTE]
>
>You cannot publish a source connection if its associated base connection is still in draft state. Please ensure that your base connection is published first, before publishing your source connection.

Once your draft is ready to be published, make a POST request to the `/sourceConnections` endpoint and provide the ID of the draft source connection that you want to publish, as well as an action operation for publishing.

**API format**

```http
POST /sourceConnections/{SOURCE_CONNECTION_ID}/action?op=publish
```

| Parameter | Description |
| --- | --- |
| `op` | An action operation that updates the state of the queried source connection. To publish a draft source connection, set `op` to `publish`. |

**Request**

The following request publishes the draft source connection for [!DNL Azure File Storage] that was created in an earlier step.

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections/26b53912-1005-49f0-b539-12100559f0e2/action?op=publish' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

A successful response returns the ID and corresponding etag for your published source connection.

```json
{
    "id": "26b53912-1005-49f0-b539-12100559f0e2",
    "etag": "\"11004d97-0000-0200-0000-5f3c3b140000\""
}
```

## Create a draft target connection {#create-a-draft-target-connection}

To create a draft target connection, make a POST request to the `/targetConnections` endpoint of the [!DNL Flow Service] API and provide `mode=draft` as a query parameter.

**API format**

```http
POST /targetConnections?mode=draft
```

| Parameter | Description |
| --- | --- |
| `mode` | A user-supplied query parameter that decides the state of the target connection. To set a target connection as a draft, set `mode` to `draft`. |

**Request**

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/targetConnections?mode=draft' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
      "name": "ACME Azure File Storage Target Connection",
      "description": "Azure File Storage target connection ACME data (DRAFT)",
      "data": {
          "schema": {
              "id": "{SCHEMA_ID}",
              "version": "application/vnd.adobe.xed-full+json;version=1"
          }
      },
      "params": {
          "dataSetId": "{DATASET_ID}"
      },
          "connectionSpec": {
          "id": "c604ff05-7f1a-43c0-8e18-33bf874cb11c",
          "version": "1.0"
      }
  }'
```

**Response**

A successful response returns the target connection ID and corresponding etag for your draft target connection. You can use this ID later to update and publish your target connection.

```json
{
    "id": "dbc5c132-bc2a-4625-85c1-32bc2a262558",
    "etag": "\"8e000533-0000-0200-0000-5f3c40fd0000\""
}
```

## Publish your draft target connection {#publish-your-draft-target-connection}

>[!NOTE]
>
>You cannot publish a target connection if its associated base connection is still in draft state. Please ensure that your base connection is published first, before publishing your target connection.

Once your draft is ready to be published, make a POST request to the `/targetConnections` endpoint and provide the ID of the draft target connection that you want to publish, as well as an action operation for publishing.

**API format**

```http
POST /targetConnections/{TARGET_CONNECTION_ID}/action?op=publish
```

| Parameter | Description |
| --- | --- |
| `op` | An action operation that updates the state of the queried target connection. To publish a draft target connection, set `op` to `publish`. |

**Request**

The following request publishes the draft target connection for [!DNL Azure File Storage] that was created in an earlier step.

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections/dbc5c132-bc2a-4625-85c1-32bc2a262558/action?op=publish' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

A successful response returns the ID and corresponding etag for your published target connection.

```json
{
    "id": "dbc5c132-bc2a-4625-85c1-32bc2a262558",
    "etag": "\"8e000533-0000-0200-0000-5f3c40fd0000\""
}
```

## Create a draft dataflow {#create-a-draft-dataflow}

To set a dataflow as a draft, make a POST request to the `/flows` endpoint while adding the `mode=draft` as a query parameter. This allows you to create a dataflow and save it as a draft.

**API format**

```http
POST /flows?mode=draft
```

| Parameter | Description |
| --- | --- |
| `mode` | A user-supplied query parameter that decides the state of the dataflow. To set a dataflow as a draft, set `mode` to `draft`. |

**Request**

The following request creates a draft dataflow.

```shell
  'https://platform.adobe.io/data/foundation/flowservice/flows?mode=draft' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "name": "ACME Azure File Storage Dataflow",
    "description": "Azure File Storage dataflow for ACME data (DRAFT)",
    "sourceConnectionIds": [
        "26b53912-1005-49f0-b539-12100559f0e2"
    ],
    "targetConnectionIds": [
        "dbc5c132-bc2a-4625-85c1-32bc2a262558"
    ],
    "flowSpec": {
        "id": "9753525b-82c7-4dce-8a9b-5ccfce2b9876",
        "version": "1.0"
    }
  }'
```

**Response**

A successful response returns the flow ID and corresponding etag for your draft dataflow. You can use this ID later to update and publish your dataflow.

```json
{
  "id": "c9751426-dff8-49b0-965f-50defcf4187b",
  "etag": "\"69057131-0000-0200-0000-640f48320000\""
}
```

## Publish your draft dataflow {#publish-your-draft-dataflow}

>[!NOTE]
>
>You cannot publish a dataflow if its associated source and target connections are still in draft state. Please ensure that your source and target connections are published first, before publishing your dataflow.

Once your draft is ready to be published, make a POST request to the `/flows` endpoint while providing the ID of the draft dataflow that you want to publish, as well as an action operation for publishing.

**API format**

```http
POST /flows/{FLOW_ID}/action?op=publish
```

| Parameter | Description |
| --- | --- |
| `op` | An action operation that updates the state of the queried dataflow. To publish a draft dataflow, set `op` to `publish`. |

**Request**

The following request publishes your draft dataflow.

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/flows/c9751426-dff8-49b0-965f-50defcf4187b/action?op=publish' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

A successful response returns the ID and corresponding `etag` of your dataflow.

```json
{
  "id": "c9751426-dff8-49b0-965f-50defcf4187b",
  "etag": "\"69057131-0000-0200-0000-640f48320000\""
}
```

## Next steps

By following this tutorial, you have learned how to create drafts of your [!DNL Flow Service] entities as well as publish these drafts. For more information on sources, please read the [sources overview](../../home.md).