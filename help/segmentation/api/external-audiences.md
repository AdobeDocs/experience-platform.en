---
title: External Audiences API Endpoint
description: Learn how to use the external audiences API to create, update, activate, and delete your external audiences from Adobe Experience Platform.
exl-id: eaa83933-d301-48cb-8a4d-dfeba059bae1
---
# External audiences endpoint

External audiences let you upload profile data from your external sources into Adobe Experience Platform. You can use the `/external-audience` endpoint in the Segmentation Service API to ingest an external audience to Experience Platform, view details and update your external audiences, as well as delete your external audiences.

## Getting started

>[!IMPORTANT]
>
>The endpoints in this guide are prefixed with `/core/ais`, as opposed to `/core/ups`.

In order to use Experience Platform APIs, you must have completed the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in Experience Platform API calls, as shown below:

- Authorization: `Bearer {ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{ORG_ID}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Experience Platform] APIs require a header that specifies the name of the sandbox in which the operation will take place:

- x-sandbox-name: `{SANDBOX_NAME}`
  
>[!NOTE]
>
>For more information on working with sandboxes in [!DNL Experience Platform], see the [sandboxes overview documentation](../../sandboxes/home.md).

## Create external audience {#create-audience}

You can create an external audience by making a POST request to the `/external-audience/` endpoint. 

**API format**

```http
POST /external-audience/
```

**Request**

+++ A sample request to create an external audience.

```shell
curl -X POST https://platform.adobe.io/data/core/ais/external-audience/ \
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
            "params": {
                "path": "activation/sample-source/example.csv",
                "type": "file",
                "sourceType": "Cloud Storage",
                "baseConnectionId": "1d1d4bc5-b527-46a3-9863-530246a61b2b"
            }
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
| `customAudienceId` | String | An optional identifier for your external audience. |
| `fields` | Array of objects | The list of fields and their data types. When creating the list of fields, you can add the following items: <ul><li>`name`: **Required** The name of the field that is part of the external audience specification.</li><li>`type`: **Required** The type of data that goes into the field. Supported values include `string`, `number`, `long`, `integer`, `date` (`2025-05-13`), `datetime` (`2025-05-23T20:19:00+00:00`), and `boolean`.</li><li>`identityNs`: **Required for identity field** The namespace that is used by the identity field. Supported values include all valid namespaces, such as `ECID` or `email`.</li><li>`labels`: *Optional* An array of access control labels for the field. More information about the available access control labels can be found in the [data usage labels glossary](/help/data-governance/labels/reference.md). </li></ul> |
| `sourceSpec` | Object | An object that contains the information where the external audience is located. When using this object, you **must** include the following information: <ul><li>`path`: **Required**: The location of the external audience or the folder that contains the external audience within the source.</li><li>`type`: **Required** The type of the object you're retrieving from the source. This value can either be `file` or `folder`.</li><li>`sourceType`: *Optional* The type of source you're retrieving from. Currently, the only supported value is `Cloud Storage`.</li><li>`cloudType`: *Optional* The type of cloud storage, based off of the source type. Supported values include `S3`, `DLZ`, `GCS`, and `SFTP`.</li><li>`baseConnectionId`: The ID of the base connection, and is provided from your source provider. This value is **required** if using a `cloudType` value of `S3`, `GCS`, or `SFTP`. For more information, please read the [source connectors overview](../../sources/home.md)</li></ul> |
| `ttlInDays` | Integer | The data expiration for the external audience, in days. This value can be set from 1 to 90. By default, the data expiration is set to 30 days. |
| `audienceType` | String | The audience type for the external audience. Currently, only `people` is supported. |
| `originName` | String | **Required** The origin of the audience. This states where the audience comes from. For external audiences, you should use `CUSTOM_UPLOAD`. |
| `namespace` | String | The namespace for the audience. By default, this value is set to `CustomerAudienceUpload`. |
| `labels` | Array of strings | The access control labels that apply to the external audience. More information about the available access control labels can be found in the [data usage labels glossary](/help/data-governance/labels/reference.md). |
| `tags` | Array of strings | The tags you want to apply to the external audience. More information about tags can be found in the [managing tags guide](/help/administrative-tags/ui/managing-tags.md). |

+++

**Response**

A successful response returns HTTP status 202 with details of your newly created external audience.

+++ A sample response when creating an external audience.

```json
{
    "operationId": "df8cd82f-a214-4b72-b549-d6ee23f1ff1a",
    "operationDetails": {
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
            "params": {
                "path": "activation/sample-source/example.csv",
                "type": "file",
                "sourceType": "Cloud Storage",
                "baseConnectionId": "1d1d4bc5-b527-46a3-9863-530246a61b2b"
            }
        },
        "ttlInDays": 40,
        "labels": ["core/C1"],
        "audienceType": "people",
        "originName": "CUSTOM_UPLOAD"
    }   
}
```

| Property | Type | Description |
| -------- | ---- | ----------- |
| `operationId` | String | The ID of the operation. You can subsequently use this ID to retrieve the status of your audience's creation. |
| `operationDetails` | Object | An object that contains the details of the request you submitted to create the external audience. |
| `name` | String | The name for the external audience. |
| `description` | String | The description for the external audience. |
| `fields` | Array of objects | The list of fields and their data types. This array determines what fields you need in your external audience. |
| `sourceSpec` | Object | An object that contains the information where the external audience is located.  |
| `ttlInDays` | Integer | The data expiration for the external audience, in days. This value can be set from 1 to 90. By default, the data expiration is set to 30 days. |
| `audienceType` | String | The audience type for the external audience. |
| `originName` | String | **Required** The origin of the audience. This states where the audience comes from.  |
| `namespace` | String | The namespace for the audience. |
| `labels` | Array of strings | The access control labels that apply to the external audience. More information about the available access control labels can be found in the [data usage labels glossary](/help/data-governance/labels/reference.md). |


+++

## Retrieve audience creation status {#retrieve-status}

You can retrieve the status of your external audience submission by making a GET request to the `/external-audiences/operations` endpoint and providing the ID of the operation you received from the create external audience response.

**API format**

```http
GET /external-audiences/operations/{OPERATION_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{OPERATION_ID}` | The `id` value of the operation you want to retrieve. |

**Request**

+++ A sample request to retrieve an external audience's operation status.

```shell
curl -X GET https://platform.adobe.io/data/core/ais/external-audience/operations/df8cd82f-a214-4b72-b549-d6ee23f1ff1a \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status 200 with details of the external audience's task status.

+++ A sample response when you retrieve an external audience's task status.

```json
{
    "operationId": "df8cd82f-a214-4b72-b549-d6ee23f1ff1a",
    "status": "SUCCESS",
    "operationDetails": {
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
            "params": {
                "path": "activation/sample-source/example.csv",
                "type": "file",
                "sourceType": "Cloud Storage",
                "baseConnectionId": "1d1d4bc5-b527-46a3-9863-530246a61b2b"
            }
        },
        "ttlInDays": 40,
        "labels": ["core/C1"],
        "audienceType": "people",
        "originName": "CUSTOM_UPLOAD"
    },
    "audienceName": "Sample external audience",
    "audienceId": "60ccea95-1435-4180-97a5-58af4aa285ab",
    "createdBy": "{USER_ID}",
    "createdAt": 1749324248,
    "updatedBy": "{USER_ID}",
    "updatedAt": 1749624273
}
```

| Property | Type | Description |
| -------- | ---- | ----------- |
| `operationId` | String | The ID of the operation you're retrieving. |
| `status` | String | The status of the operation. This can be one of the following values: `SUCCESS`, `FAILED`, `PROCESSING`. |
| `operationDetails` | Object | An object containing details of the audience. |
| `audienceId` | String | The ID of the external audience that is being submitted by the operation. |
| `createdBy` | String | The ID of the user who created the external audience. |
| `createdAt` | Long epoch timestamp | The timestamp, in seconds, when the request to create the external audience was submitted. |
| `updatedBy` | String | The ID of the user who last updated the audience. |
| `updatedAt` | Long epoch timestamp | The timestamp, in seconds, when the audience was last updated. |

+++

## Update an external audience {#update-audience}

>[!NOTE]
>
>To use the following endpoint, you need to have the `audienceId` of your external audience. You can get your `audienceId` from a successful call to the `GET /external-audiences/operations/{OPERATION_ID}` endpoint.

You can update fields of your external audience by making a PATCH request to the `/external-audience` endpoint and providing the ID Of the audience in the request path.

When using this endpoint, you can update the following fields:

- Audience description
- Field-level access control labels
- Audience-level access control labels
- The audience's data expiration

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

A successful response returns HTTP status 200 with details of the updated external audience.

+++ A sample response when updating the external audience's description.

```json
{
    "audienceId": "60ccea95-1435-4180-97a5-58af4aa285ab",
    "audienceName": "Sample external audience",
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

>[!NOTE]
>
>To use the following endpoint, you need to have the `audienceId` of your external audience. You can get your `audienceId` from a successful call to the `GET /external-audiences/operations/{OPERATION_ID}` endpoint.

You can start an audience ingestion by making a POST request to the following endpoint while providing the audience ID.

**API format**

```http
POST /external-audience/{AUDIENCE_ID}/runs
```

**Request**

The following request triggers an ingestion run for the external audience.

+++ A sample request to start an audience ingestion.

```shell
curl -X POST https://platform.adobe.io/data/core/ais/external-audience/60ccea95-1435-4180-97a5-58af4aa285ab/runs \
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
| `dataFilterStartTime` | Epoch timestamp | **Required** The range specifying the starting time which the flow will run to select which files will be processed. |
| `dataFilterEndTime` | Epoch timestamp | The range specifying the ending time which the flow will run to select which files will be processed. |

+++

**Response**

A successful response returns HTTP status 200 with details about the ingestion run.

+++ A sample response when starting the audience ingestion.

```json
{
    "audienceName": "Sample external audience",
    "audienceId": "60ccea95-1435-4180-97a5-58af4aa285ab",
    "runId": "fb342311-725d-4b48-ab7d-c6105fbc2b8b",
    "differentialIngestion": true,
    "dataFilterStartTime": 764245635,
    "dataFilterEndTime": 4565657575,
    "createdAt": 4565657575,
    "createdBy:" "{USER_ID}"
}
```

| Property | Type | Description |
| -------- | ---- | ----------- |
| `audienceName` | String | The name of the audience you're starting an ingestion run for. |
| `audienceId` | String | The ID of the audience. |
| `runId` | String | The ID of the ingestion run you started. |
| `differentialIngestion` | Boolean | A field that determines if the ingestion is a partial ingestion based off of the difference since the last ingestion or a full audience ingestion. |
| `dataFilterStartTime` | Epoch timestamp | The range specifying the starting time the flow runs to select which files were processed. |
| `dataFilterEndTime` | Epoch timestamp | The range specifying the ending time the flow runs to select which files were processed. |
| `createdAt` | Long epoch timestamp | The timestamp, in seconds, when the request to create the external audience was submitted. |
| `createdBy` | String | The ID of the user who created the external audience. |

+++

## Retrieve specific audience ingestion status {#retrieve-ingestion-status}

>[!NOTE]
>
>To use the following endpoint, you need to have both the `audienceId` of your external audience and the `runId` of your ingestion run ID. You can get your `audienceId` from a successful call to the `GET /external-audiences/operations/{OPERATION_ID}` endpoint and your `runId` from a previous successful call of the `POST /external-audience/{AUDIENCE_ID}/runs` endpoint.

You can retrieve the status of an audience ingestion by making a GET request to the following endpoint while providing both the audience and run IDs.

**API format**

```http
GET /external-audience/{AUDIENCE_ID}/runs/{RUN_ID}
```

**Request**

The following request retrieves the ingestion status for the external audience.

+++ A sample request to retrieve the external audience's ingestion status.

```shell
curl -X GET https://platform.adobe.io/data/core/ais/external-audience/60ccea95-1435-4180-97a5-58af4aa285ab/runs/fb342311-725d-4b48-ab7d-c6105fbc2b8b \
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
    "audienceName": "Sample external audience",
    "audienceId": "60ccea95-1435-4180-97a5-58af4aa285ab",
    "runId": "fb342311-725d-4b48-ab7d-c6105fbc2b8b",
    "status": "SUCCESS",
    "differentialIngestion": true,
    "dataFilterStartTime": 764245635,
    "dataFilterEndTime": 3456788568,
    "createdAt": 1749324248,
    "createdBy": "{USER_ID}",
    "details": [
        {
            "stage": "DATASET_INGEST",
            "status": "SUCCESS",
            "flowRunId": "{FLOW_RUN_ID}"
        },
        {
            "stage": "PROFILE_STORE_INGEST",
            "status": "SUCCESS",
            "flowRunId": "{FLOW_RUN_ID}"
        }
    ]
}
```

| Property | Type | Description |
| -------- | ---- | ----------- |
| `audienceName` | String | The name of the audience. |
| `audienceId` | String | The ID of the audience. |
| `runId` | String | The ID of the ingestion run. |
| `status` | String | The status of the ingestion run. Possible statuses include `SUCCESS` and `FAILED`. |
| `differentialIngestion` | Boolean | A field that determines if the ingestion is a partial ingestion based off of the difference since the last ingestion or a full audience ingestion. |
| `dataFilterStartTime` | Epoch timestamp | The range specifying the starting time the flow runs to select which files were processed. |
| `dataFilterEndTime` | Epoch timestamp | The range specifying the ending time the flow runs to select which files were processed. |
| `createdAt` | Long epoch timestamp | The timestamp, in seconds, when the request to create the external audience was submitted. |
| `createdBy` | String | The ID of the user who created the external audience. |
| `details` | Array of objects | An object containing the details of the ingestion run. <ul><li>`stage`: The stage of the ingestion run. This can either be `DATASET_INGEST` or `PROFILE_STORE_INGEST`, which represent the data lake ingestion and the profile ingestion.</li><li>`status`: The status of the ingestion on the stage. Possible statuses include `SUCCESS` and `FAILED`.</li><li>`flowRunId`: The ID of the stage's ingestion flow run.</li></ul> |

+++

## List audience ingestion runs {#list-ingestion-runs}

>[!NOTE]
>
>To use the following endpoint, you need to have the `audienceId` of your external audience. You can get your `audienceId` from a successful call to the `GET /external-audiences/operations/{OPERATION_ID}` endpoint.

You can retrieve all the ingestion runs for the selected external audience by making a GET request to the following endpoint while providing the audience ID. Multiple parameters can be included, separated by ampersands (`&`). 

**API format**

<!-- The following endpoint supports several query parameters to help filter your results. While these parameters are optional, their use is strongly recommended to help focus your results. -->

```http
GET /external-audience/{AUDIENCE_ID}/runs
```

<!-- **Query parameters**

+++ A list of available query parameters. 

| Parameter | Description | Example |
| --------- | ----------- | ------- |
| `limit` | The maximum number of items returned in the response. This value can range from 1 to 40. By default, the limit is set to 20. | `limit=30` |
| `sortBy` | The order in which the returned items are sorted. You can sort by either `name` or by `createdAt`. Additionally, you can add a `-` sign to sort by **descending** order instead of **ascending** order. By default, the items are sorted by `createdAt` in descending order. | `sortBy=name` |
| `property` | A filter to determine which audience ingestion runs are displayed. You can filter on the following properties: <ul><li>`name`: Lets you filter by the audience name. If using this property, you can compare by using `=`, `!=`, `=contains`, or `!=contains`. </li><li>`createdAt`: Lets you filter by the ingestion time. If using this property, you can compare by using `>=` or `<=`.</li><li>`status`: Lets you filter by the ingestion run's status. If using this property, you can compare by using `=`, `!=`, `=contains`, or `!=contains`. </li></ul>  | `property=createdAt<1683669114845`<br/>`property=name=demo_audience`<br/>`property=status=SUCCESS` |

+++ -->

**Request**

The following request retrieves all the ingestion runs for the external audience.

+++ A sample request to get a list of audience ingestion runs.

```shell
curl -X GET https://platform.adobe.io/data/core/ais/external-audience/60ccea95-1435-4180-97a5-58af4aa285ab/runs \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status 200 with a list of ingestion runs for the specified external audience.

+++ A sample response when you retrieve a list of the audience ingestion runs.

```json
{
    "runs": [
        {
            "audienceName": "Sample external audience",
            "audienceId": "60ccea95-1435-4180-97a5-58af4aa285ab",
            "runId": "fb342311-725d-4b48-ab7d-c6105fbc2b8b",
            "status": "SUCCESS",
            "differentialIngestion": true,
            "dataFilterStartTime": 764245635,
            "dataFilterEndTime": 3456788568,
            "createdAt": 1785678909,
            "createdBy": "{USER_NAME}"
        },
        {
            "audienceName": "Sample external audience 2",
            "audienceId": "60ccea95-1435-4180-97a5-58af4aa285ab",
            "runId": "406e38e4-fbd5-43e1-8d0c-01ccb3f9ad10",
            "status": "SUCCESS",
            "differentialIngestion": true,
            "dataFilterStartTime": 764245635,
            "dataFilterEndTime": 3456788568,
            "createdAt": 1749324248,
            "createdBy": "{USER_ID}"
        }
    ]
}
```

<!-- ,
    "_page": {
        "limit": 20,
        "count": 2,
        "totalCount": 2
    }
    
| `_page` | Object | An object that contains the pagination information about the list of results. |
     -->

| Property | Type | Description |
| -------- | ---- | ----------- |
| `runs` | Object | An object that contains the list of ingestion runs that belongs to the audience. More information about this object can be found in the [retrieve ingestion status section](#retrieve-ingestion-status). |

+++

## Delete an external audience {#delete-audience}

>[!NOTE]
>
>To use the following endpoint, you need to have the `audienceId` of your external audience. You can get your `audienceId` from a successful call to the `GET /external-audiences/operations/{OPERATION_ID}` endpoint.

You can delete an external audience by making a DELETE request to the following endpoint while providing the audience ID.

**API format**

```http
DELETE /external-audience/{AUDIENCE_ID}
```

**Request**

The following request deletes the specified external audience.

+++ A sample request to delete the external audience.

```shell
curl -X DELETE https://platform.adobe.io/data/core/ais/external-audience/60ccea95-1435-4180-97a5-58af4aa285ab/ \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status 204 with an empty response body.

## Next steps {#next-steps}

After reading this guide, you now have a better understanding of how to create, manage, and delete your external audiences using the Experience Platform APIs. To learn how to use external audiences with the Experience Platform UI, please read the [Audience Portal documentation](../ui/audience-portal.md).

## Appendix {#appendix}

The following section lists the available error codes when using the external audiences API.

| Platform error code | Status code | Message | Description |
| ------------------- | ----------- | ------- | ----------- |
| 100910-400 | 400 | `BAD_REQUEST` | A bad request has occurred, due to a failure occurring while validating the requests. | 
| 100911-400 | 400 | `BAD_REQUEST` | An invalid token is provided. |
| 100920-401 | 401 | `UNAUTHORIZED` | A header is missing. |
| 100921-401 | 401 | `UNAUTHORIZED` | An invalid `imsOrgId` is provided. |
| 100922-401 | 401 | `UNAUTHORIZED` | You are not authorized to use the external audiences APIs. |
| 100940-404 | 404 | `NOT_FOUND` | The requested audience was not found. |
| 100950-409 | 409 | `DUPLICATE_RESOURCE` | The audience already exists. |
| 100960-422 | 422 | `UNPROCESSABLE_ENTITY` | The request structure is valid, but it cannot be processed due to logical or semantic errors. |
| 100970-500 | 500 | `INTERNAL_SERVER_ERROR` | There was an issue processing the request in the system. |
| 100970-502 | 502 | `BAD_GATEWAY` | There are downstream dependency issues. |