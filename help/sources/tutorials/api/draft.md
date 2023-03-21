---
keywords: Experience Platform;home;popular topics;flow service;
title: 
description: This tutorial covers steps on how to set your dataflows in a draft state using the Flow Service API
badge: label="New Feature" type="Positive"
---
# Draft dataflows using the Flow Service API

Save your dataflows as drafts when using the Flow Service API by supplying the `mode=draft` query parameter during the flow creation call. Drafts can be updated later with new information and then published once they are ready.

This tutorial covers steps on how to set your dataflows in a draft state using the Flow Service API.

## Getting started

This tutorial requires you to have a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

This tutorial also requires you to have already generated the assets needed in order to create a dataflow. This includes the following:

* An authenticated base connection
* A source connection 
* A target XDM schema
* A target dataset
* A target connection
* A mapping

If you do not yet have these values, then select a source from [the catalog in the sources overview](../../home.md). Then, follow the instructions of that given source to generate the assets required in order to draft a dataflow.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../landing/api-guide.md).

## Set a dataflow to draft state

The following outlines the steps on how to set a dataflow as a draft, update the dataflow, publish the dataflow, and eventually delete the dataflow.

### Draft a dataflow

To set a dataflow as a draft, make a POST request to the `/flows` endpoint while adding the `mode=draft` as a query parameter. This allows you to create a dataflow and save it as a draft.

**API format**

```http
POST /flows?mode=draft
```

| Parameter | Description |
| --- | --- |
| `mode` | A user-supplied query parameter that updates the state of the dataflow. To set a dataflow as a draft, set `mode` to `draft`. |

**Request**

The following request creates a draft dataflow.

```shell
  'https://platform-int.adobe.io/data/foundation/flowservice/flows?mode=draft' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "HTTP source dataflow for ACME data",
    "sourceConnectionIds": [
        "61c0c5f1-bfe5-40f7-8f8c-a4dc175ddac6"
    ],
    "targetConnectionIds": [
        "78f41c31-3652-4a5e-b264-74331226dcf3"
    ],
    "flowSpec": {
        "id": "c1a19761-d2c7-4702-b9fa-fe91f0613e81",
        "version": "1.0"
    }
  }'
```

**Response**

A successful response returns the `id` and the corresponding `etag` of your dataflow.

```json
{
  "id": "c9751426-dff8-49b0-965f-50defcf4187b",
  "etag": "\"69057131-0000-0200-0000-640f48320000\""
}
```

### Update a dataflow

To update your draft, make a PATCH request to the `/flows` endpoint while providing the ID of the dataflow that you want to update. During this step, you must also supply an `If-Match` header parameter, which corresponds with the `etag` of the dataflow that you want to update.

**API format**

```http
PATCH /flows/{FLOW_ID}
```

**Request**

The following requests adds mapping transformations to the drafted dataflow.

```shell
curl -X PATCH \
  'https://platform.adobe.io/data/foundation/flowservice/flows/c9751426-dff8-49b0-965f-50defcf4187b' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
  -H 'If-Match: "69057131-0000-0200-0000-640f48320000"' \
  -d '[
        {
          "op": "add",
          "path": "/transformations",
          "value": [
              {
                  "name": "Mapping",
                  "params": {
                      "mappingId": "44d42ed27c46499a80eb0c0705c38cbd",
                      "mappingVersion": 0
                  }
              }
          ]
      }
  ]'
```

**Response**

A successful response returns your flow ID and etag. To verify the change, you can make a GET request to the `/flows` endpoint while providing your flow ID.

```json
{
  "id": "c9751426-dff8-49b0-965f-50defcf4187b",
  "etag": "\"69057131-0000-0200-0000-640f48320000\""
}
```

### Publish a dataflow

Once your draft is ready to be published, make a POST request to the `/flows` endpoint while providing the ID of the draft dataflow that you want to publish, as well as an action operation for publishing.

**API format**

```http
POST /flows/{FLOW_ID}/action?op=publish
```

| Parameter | Description |
| --- | --- |
| `op` | An action operation that updates the state of the queried dataflow. To publish a draft dataflow, set `op` to `publish`.

**Request**

The following request publishes your draft dataflow.

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/flows/c9751426-dff8-49b0-965f-50defcf4187b/action?op=publish' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

A successful response returns the ID and corresponding etag of your dataflow.

```json
{
  "id": "c9751426-dff8-49b0-965f-50defcf4187b",
  "etag": "\"69057131-0000-0200-0000-640f48320000\""
}
```

### Delete a dataflow

To delete your dataflow, make a DELETE request to the `/flows` endpoint while providing the ID of the dataflow that you want to delete.

For detailed steps on how to delete a dataflow using the Flow Service API, read the guide on [deleting a dataflow in the API](./delete-dataflows.md).