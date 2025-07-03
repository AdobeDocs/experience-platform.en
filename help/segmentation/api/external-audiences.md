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
        "ttlInDays": "40",
        "labels": ["core/C1"],
        "audienceType": "people",
        "originName": "CUSTOM_UPLOAD"
    }'
```

| Property | Type | Description |
| -------- | ---- | ----------- |
| `name` | String | The name for the external audience. |
| `description` | String | An optional description for the external audience. |
| `fields` | Array of objects | The list of fields and their data types. When creating the list of fields, you can add the following items: <ul><li>`name`: **Required** The name of the field that is part of the external audience specification.</li><li>`type`: **Required** The type of data that goes into the field. Supported values include `string`, `number`, `long`, `integer`, `date`, `datetime`, and `boolean`.</li>`identityNs`: **Required for identity field** The namespace that is used by the identity field. Supported values include ???.<li><li>`labels`: *Optional* An array of access control labels for the field. More information about the available access control labels can be found in the [data usage labels glossary](/help/data-governance/labels/reference.md). </li></ul> |
| `sourceSpec` | Object | An object that contains the information where the external audience is located. When using this object, you **must** include the following information: <ul><li>`path`: **Required**: The location of the external audience or the folder that contains the external audience within the source.</li><li>`type`: **Required** The type of the object you're retrieving from the source. This value can either be `file` or `folder`.</li><li>`sourceType`: **Required** The type of source you're retrieving from. Currently, the only supported value is `Cloud Storage`.</li><li>`baseConnectionId`: **Required** The ID of the base connection. This is provided from your source provider. For more information, please read ???</li></ul> |
| `ttlInDays` | Integer | The data expiration for the external audience, in days. This value can be set from 1 to 90. By default, the data expiration is set to 30 days. |
| `audienceType` | String | The audience type for the external audience. Currently, only `people` is supported. |
| `originName` | String | **Required** The origin of the audience. This states where the audience comes from. For external audiences, you should use `CUSTOM_UPLOAD`. |
| `namespace` | String | The namespace for the audience. By default, this value is set to `CustomerAudienceUpload`. |
| `labels` | Array of strings | The access control labels that apply to the external audience. More information about the available access control labels can be found in the [data usage labels glossary](/help/data-governance/labels/reference.md). |
| `tags` | Array of strings | The tags you want to apply to the external audience. More information about tags can be found in the [managing tags guide](/help/administrative-tags/ui/managing-tags.md). |
| `profileIngestion` | Boolean | A boolean value that determines if the external audience will be ingested into Segmentation Service. By default, this value is set to `true`. |

+++

**Response**

A successful response returns HTTP status 200 with details of your submit request.

+++ A sample response when creating a submit request.

```json
{
    "taskId": "df8cd82f-a214-4b72-b549-d6ee23f1ff1a",
    "name": "Sample external audience",
    "description": "A sample version of an external audience",
    "fields": [
        {
            "name": "ppid",
            "type": "string",
            "identityNs": "Email"
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
    "ttlInDays": 40,
    "labels": ["core/C1"],
    "audienceType": "people",
    "originName": "CUSTOM_UPLOAD",
    "createdBy": "{USER_ID}",
    "createdAt": 1749324248,
    "updatedBy": "{USER_ID}",
    "updatedAt": 1749324248
}
```

| Property | Type | Description |
| -------- | ---- | ----------- |
| `taskId` | String | The ID of the submission request. You can subsequently use this ID to retrieve the status of your audience's submission request. |
| `name` | String | The name for the external audience. |
| `description` | String | The description for the external audience. |
| `fields` | Array of objects | The list of fields and their data types. This array determines what fields you need in your external audience. |
| `sourceSpec` | Object | An object that contains the information where the external audience is located.  |
| `ttlInDays` | Integer | The data expiration for the external audience, in days. This value can be set from 1 to 90. By default, the data expiration is set to 30 days. |
| `audienceType` | String | The audience type for the external audience. |
| `originName` | String | **Required** The origin of the audience. This states where the audience comes from.  |
| `namespace` | String | The namespace for the audience. |
| `labels` | Array of strings | The access control labels that apply to the external audience. More information about the available access control labels can be found in the [data usage labels glossary](/help/data-governance/labels/reference.md). |
| `createdBy` | String | The ID of the user who created the external audience. |
| `createdAt` | Long epoch timestamp | The timestamp when the external audience was created. |
| `updatedBy` | String | The ID of the user who last updated the audience. |
| `updatedAt` | Long epoch timestamp | The timestamp when the audience was last updated. |

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
curl -X GET https://platform.adobe.io/data/core/ais/external-audience/task/df8cd82f-a214-4b72-b549-d6ee23f1ff1a \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

+++ A sample response when you retrieve an external audience's task status.

```json
{
    "taskId": "df8cd82f-a214-4b72-b549-d6ee23f1ff1a",
    "audienceId": "60ccea95-1435-4180-97a5-58af4aa285ab",
    "status": "SUCCESS"
}
```

| Property | Type | Description |
| -------- | ---- | ----------- |
| `taskId` | String | The ID of the task you're retrieving. |
| `audienceId` | String | The ID of the external audience that is being submitted by the task. |
| `status` | String | The status of the task. This can be one of the following values: `SUCCESS`, `FAILED`, `PROCESSING`. |

+++

## Update an external audience {#update-audience}

You can update fields of your external audience by making a PATCH request to the `/external-audience` endpoint and providing the ID Of the audience in the request path.

When using this endpoint, you can update the following fields:

- Audience description
- Field-level access control labels
- Audience-level access control labels

Updating the field using this endpoint **replaces** the content of the field you requested.

**API format**

```http
PATCH /external-audience/{AUDIENCE_ID}
```

**Request**

+++ A sample request to update the external audience's description.

```shell
curl -X PATCH https://platform.adobe.io/data/core/ais/external-audience/60ccea95-1435-4180-97a5-58af4aa285ab\
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
    "description": "New sample description"
 }'
```

| Property | Type | Description |
| -------- | ---- | ----------- |
| `description` | String | The updated description for the external audience. |

Additionally, you can update the following parameters:

| Property | Type | Description |
| -------- | ---- | ----------- |
| `labels` | Array | An array containing the updated list of access labels for the audience. More information about the available access control labels can be found in the [data usage labels glossary](/help/data-governance/labels/reference.md). |
| `fields` | Array of objects | An array containing the fields and their associated labels for the external audience. Only the fields that are listed in the PATCH request will be updated. More information about the available access control labels can be found in the [data usage labels glossary](/help/data-governance/labels/reference.md). |
| `ttlInDays` | Integer | The data expiration for the external audience, in days. This value can be set from 1 to 90. |

+++

**Response**

+++ A sample response when updating the external audience's description.

```json
{
    "audienceId": "60ccea95-1435-4180-97a5-58af4aa285ab",
    "name": "Sample external audience",
    "description": "New sample description",
    "fields": [
        {
            "name": "ppid",
            "type": "string",
            "identityNs": "Email"
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
    "ttlInDays": 40,
    "labels": ["core/C1"],
    "audienceType": "people",
    "originName": "CUSTOM_UPLOAD",
    "createdBy": "{USER_ID}",
    "createdAt": 1749324248,
    "updatedBy": "{USER_ID}",
    "updatedAt": 1749624273
}
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

The following request triggers an ingestion run for the external audience.

+++ A sample request to start an audience ingestion.

```shell
curl -X POST https://platform.adobe.io/data/core/ais/external-audience/60ccea95-1435-4180-97a5-58af4aa285ab/run \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
    "dataFilterStartTime": 764245635
 }' 
```

| Property | Type | Description |
| -------- | ---- | ----------- |
| `dataFilterStartTime` | Epoch timestamp | The range specifying the starting time which the flow will run to select which files will be processed. |
| `dataFilterEndTime` | Epoch timestamp | The range specifying the ending time which the flow will run to select which files will be processed. |
| `differentialIngestion` | Boolean | A field that determines if the ingestion will be a partial ingestion based off of the difference since the last ingestion or a full audience ingestion. By default, this value is `true`. |

+++

**Response**

A successful response returns HTTP status 200 with details about the ingestion run.

+++ A sample response when starting the audience ingestion.

```json
{
    "name": "Sample external audience",
    "audienceId": "60ccea95-1435-4180-97a5-58af4aa285ab",
    "runId": "fb342311-725d-4b48-ab7d-c6105fbc2b8b",
    "differentialIngestion": true,
    "dataFilterStartTime": 764245635,
    "dataFilterEndTime": 4565657575
}
```

| Property | Type | Description |
| -------- | ---- | ----------- |
| `name` | String | The name of the audience you're starting an ingestion run for. |
| `audienceId` | String | The ID of the audience. |
| `runId` | String | The ID of the ingestion run you started. |
| `differentialIngestion` | Boolean | A field that determines if the ingestion is a partial ingestion based off of the difference since the last ingestion or a full audience ingestion. |
| `dataFilterStartTime` | Epoch timestamp | The range specifying the starting time the flow runs to select which files were processed. |
| `dataFilterEndTime` | Epoch timestamp | The range specifying the ending time the flow runs to select which files were processed. |

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

```shell
curl -X GET https://platform.adobe.io/data/core/ais/external-audience/60ccea95-1435-4180-97a5-58af4aa285ab/run/fb342311-725d-4b48-ab7d-c6105fbc2b8b \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status 200 with details of the external audience ingestion.

+++ A sample response when retrieving the external audience's ingestion.

```json
{
    "audienceId": "60ccea95-1435-4180-97a5-58af4aa285ab",
    "runId": "fb342311-725d-4b48-ab7d-c6105fbc2b8b",
    "status": "SUCCESS",
    "differentialIngestion": true,
    "dataFilterStartTime": 764245635,
    "dataFilterEndTime": 3456788568,
    "ingestionTime": 1785678909,
    "details": [
        {
            "stage": "DATASET_INGEST",
            "status": "SUCCESS",
            "flowId" : "{FLOW_ID}",
            "flowRunId": "{FLOW_RUN_ID}"
        },
        {
            "stage": "PROFILE_STORE_INGEST",
            "status": "SUCCESS",
            "flowId" : "{FLOW_ID}",
            "flowRunId": "{FLOW_RUN_ID}"
        }
    ]
}
```

| Property | Type | Description |
| -------- | ---- | ----------- |
| `audienceId` | String | The ID of the audience. |
| `runId` | String | The ID of the ingestion run. |
| `status` | String | The status of the ingestion run. Possible statuses include `SUCCESS` and `FAILED`. |
| `differentialIngestion` | Boolean | A field that determines if the ingestion is a partial ingestion based off of the difference since the last ingestion or a full audience ingestion. |
| `dataFilterStartTime` | Epoch timestamp | The range specifying the starting time the flow runs to select which files were processed. |
| `dataFilterEndTime` | Epoch timestamp | The range specifying the ending time the flow runs to select which files were processed. |
| `ingestionTime` | Epoch timestamp | The time which the ingestion run was triggered. |
| `details` | Array of objects | An object containing the details of the ingestion run. <ul><li>`stage`: The stage of the ingestion run. This can either be `DATASET_INGEST` or `PROFILE_STORE_INGEST`, which represent the data lake ingestion and the profile ingestion.</li><li>`status`: The status of the ingestion on the stage. Possible statuses include `SUCCESS` and `FAILED`.</li><li>`flowId`: The ID of the corresponding flow for the audience.</li><li>`flowRunId`: The ID of the stage's ingestion flow run.</li></ul> |

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

```shell
curl -X GET https://platform.adobe.io/data/core/ais/external-audience/60ccea95-1435-4180-97a5-58af4aa285ab/runs \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

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