---
title: External Audiences API Endpoint
description: Learn how to use the external audiences API to
---

# External audiences endpoint

intro blurb

## Getting started

>[!IMPORTANT]
>
>The endpoints in this guide are prefixed with `/core/ais`, as opposed to `/core/ups`.

## Create submit request {#create-submit}

You can create a submit request by making a POST request to the `/external-audience/submit` endpoint. A submit request is used to create the external audience, and contains details of the location of the external audience through the source specification.

**API format**

```http
POST /external-audience/submit
```

**Request**

+++ A sample request to create a submit request.

```shell
curl -X POST https://platform.adobe.io/data/core/ais/external-audience/submit \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
        "name": "Sample external audience",
        "description": "A sample version of an external audience",
        "fields": [
            {
                "name": "ppid",
                "type": "string",
                "identityNs": "email"
            },
            {
                "name": "list_id",
                "type": "string",
                "labels": ["core/C2", "custom/deep"]
            },
            {
                "name": "delete",
                "type": "number"
            },
            {
                "name": "process_consent",
                "type": "string"
            }
        ],
        "sourceSpec": {
            "path": "activation/sample-source/example.csv",
            "type": "file",
            "sourceType": "Cloud Storage",
            "baseConnectionId": "1d1d4bc5-b527-46a3-9863-530246a61b2b"
        },
        "ttlInDays": "string",
        "labels": [],
        "audienceType": "",
        "originName": "CUSTOM_UPLOAD"
    }'
```

| Property | Type | Description |
| -------- | ---- | ----------- |
| `name` | String | The name for the external audience. |
| `description` | String | An optional description for the external audience. |
| `fields` | Array of objects | The list of fields and their data types.  |

+++

**Response**

A successful response returns HTTP status 200 with details of your submit request.

+++ A sample response when creating a submit request.

+++

## Retrieve audience task status {#retrieve-status}

You can retrieve the status of your external audience submission by making a GET request to the `/external-audiences/task` endpoint and providing the ID of the task you received from the submit request response.

**API format**

```http
GET /external-audiences/task/{TASK_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{TASK_ID}` | The `id` value of the task you want to retrieve. |

**Request**

+++ A sample request to retrieve an external audience's task status.

```shell

```

+++

**Response**

+++ A sample response when you retrieve an external audience's task status.

```json

```

+++

## Update an external audience {#update-audience}

You can update fields of your external audience by making a PATCH request to the `/external-audience` endpoint and providing the ID Of the audience in the request path.

When using this endpoint, you can update the following fields:

- Audience description
- Field-level access control labels
- Audience-level access control labels

**API format**

```http
PATCH /external-audience/{AUDIENCE_ID}
```

**Request**

+++ A sample request to update the external audience's description.

```shell

```

+++

**Response**

+++ A sample response when updating the external audience's description.

```json

```

+++

## Start audience ingestion {#start-audience-ingestion}

>[!IMPORTANT]
>
>You will **not** be able to start a new ingestion for the external audience if a previous audience ingestion is already in progress.

You can start an audience ingestion by making a POST request to the following endpoint while providing the audience ID.

**API format**

```http
POST /external-audience/{AUDIENCE_ID}/run
```

**Request**

The following request triggers an ingestion run for the selected external audience.

+++ A sample request to start an audience ingestion.

+++

**Response**

A successful response returns HTTP status 200 with details about the ingestion run.

+++ A sample response when starting the audience ingestion.

+++

## Retrieve specific audience ingestion status {#retrieve-ingestion-status}

You can retrieve the status of an audience ingestion by making a GET request to the following endpoint while providing both the audience and run IDs.

**API format**

```http
GET /external-audience/{AUDIENCE_ID}/run/{RUN_ID}
```

**Request**

The following request retrieves the ingestion status for the external audience.

+++ A sample request to retrieve the external audience's ingestion status.

+++

**Response**

A successful response returns HTTP status 200 with details of the external audience ingestion.

+++ A sample response when retrieving the external audience's ingestion.

+++

## List audience ingestion statuses {#list-ingestion-statuses}

You can retrieve all the ingestion statuses for the selected external audience by making a GET request to the following endpoint while providing the audience ID.

**API format**

```http
GET /external-audience/{AUDIENCE_ID}/runs
```

**Request**

The following request retrieves all the ingestion statuses for the external audience.

+++ A sample request to get a list of audience ingestion statuses.

+++

**Response**

A successful response returns HTTP status 200 with a list of ingestion statuses for the specified external audience.

+++ A sample response when you retrieve a list of the audience ingestion statuses.

+++

## Delete an external audience {#delete-audience}

You can delete an external audience by making a DELETE request to the following endpoint while providing the audience ID.

**API format**

```http
DELETE /external-audience/{AUDIENCE_ID}
```

**Request**

The following request deletes the specified external audience.

+++ A sample request to delete the external audience.

+++

**Response**

A successful response returns HTTP status ??? with an empty response body.

## Next steps {#next-steps}

next steps blurb