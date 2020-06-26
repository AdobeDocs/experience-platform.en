---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Estimates and previews endpoints guide
topic: developer guide
---

# Estimates and previews endpoints guide

As you develop your segment definition, you can use the estimate and preview tools within [!DNL Adobe Experience Platform] to view summary-level information to help ensure you are isolating the expected audience. Estimates provide statistical information on a segment definition, such as the projected audience size and confidence interval. Previews provide paginated lists of qualifying profiles for a segment definition, allowing you to compare the results against what you expect.

## Getting started

The endpoints used in this guide are part of the [!DNL Adobe Experience Platform] Segmentation Service API. Before continuing, please review the [getting started section of Segmentation developer guide](./getting-started.md#getting-started), as it includes a guide to reading the sample API calls in the document and important information regarding required headers that are needed to successfully make calls to Experience Platform APIs.

## How estimates are generated

The method of data sampling getting triggered is dependant on the method of ingestion.

For batch ingestion, every fifteen minutes, the profile store is automatically scanned to see if a newly successful batch was ingested since the last sampling job was run. If that is the case, the profile store is subsequently scanned to see if there's been at least a 5% change in the number of records. If these conditions are met, a new sampling job is triggered.

For streaming ingestion, every hour, the profile store is automatically scanned to see if there's been at least a 5% change in the number of records. If this condition is met, a new sampling job is triggered.

The sample size depends on the overall number of entities in your profile store. These sample sizes are represented in the following table:

| Entities in profile store | Sample size |
| ------------------------- | ----------- |
| Less than 1 million | Full data set |
| 1 to 20 million | 1 million |
| Over 20 million | 5% of total |

Estimates generally run over 10-15 seconds, beginning with a rough estimate and refining as more records are read.

## Create a new preview {#create-preview}

You can create a new preview by making a POST request to the `/preview` endpoint.

**API format**

```http
POST /preview
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/core/ups/preview \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '
    {
        "predicateExpression": "xEvent.metrics.commerce.abandons.value > 0",
        "predicateType": "pql/text",
        "predicateModel": "_xdm.context.profile"
    }'
```

| Property | Description |
| -------- | ----------- |
| `predicateExpression` | The PQL expression to query the data by. |
| `predicateType` | The predicate type for the query expression under `predicateExpression`. Currently, the only accepted value for this property is "pql/text". |
| `predicateModel` | The name of the XDM schema the Profile data is based on. |

**Response**

A successful response returns HTTP status 201 (Created) with details of your newly created preview.

```json
{
    "state": "NEW",
    "previewQueryId": "e890068b-f5ca-4a8f-a6b5-af87ff0caac3",
    "previewQueryStatus": "NEW",
    "previewId": "MDphcHAtMzJiZTAzMjgtM2YzMS00YjY0LThkODQtYWNkMGM0ZmJkYWQzOmU4OTAwNjhiLWY1Y2EtNGE4Zi1hNmI1LWFmODdmZjBjYWFjMzow",
    "previewExecutionId": 0
}
```

| Property | Description |
| -------- | ----------- |
| `state` | The current state of the preview job. When initially created, it will be in the "NEW" state. Subsequently, it will be in the "RUNNING" state until processing is complete, at which point it becomes "RESULT_READY" or "FAILED". |
| `previewId` | The ID of the preview job, to be used for lookup purposes when viewing an estimate or preview, as outlined in the next section. |

## Retrieve a specific preview's results {#get-preview}

You can retrieve detailed information about a specific preview by making a GET request to the `/preview` endpoint and providing the preview ID in the request path.

**API format**

```http
GET /preview/{PREVIEW_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{PREVIEW_ID}` | The `previewId` value of the preview you want to retrieve. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/core/ups/preview/MDphcHAtMzJiZTAzMjgtM2YzMS00YjY0LThkODQtYWNkMGM0ZmJkYWQzOmU4OTAwNjhiLWY1Y2EtNGE4Zi1hNmI1LWFmODdmZjBjYWFjMzow \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with detailed information about the specified preview.

```json
{
   "results": [{
        "XID_ADOBE-MARKETING-CLOUD-ID-1": {
            "_href": "https://platform.adobe.io/data/core/ups/models/profile/XID_ADOBE-MARKETING-CLOUD-ID-1",
            "endCustomerIds": {
                "XID_COOKIE_ID_1": {
                    "_href": "https://platform.adobe.io/data/core/ups/models/profile/XID_COOKIE_ID_1"
                },
                "XID_PROFILE_ID_1": {
                    "_href": "https://platform.adobe.io/data/core/ups/models/profile/XID_PROFILE_ID_1"
                }
            }
        }
    },
    {
        "XID_COOKIE-ID-2": {
            "_href": "https://platform.adobe.io/data/core/ups/models/profile/XID_COOKIE-ID-2",
            "endCustomerIds": {
                "XID_COOKIE_ID_2-1": {
                    "_href": "https://platform.adobe.io/data/core/ups/models/profile/XID_COOKIE_ID_2-1"

                },
                "XID_PROFILE_ID_2": {
                    "_href": "https://platform.adobe.io/data/core/ups/models/profile/XID_PROFILE_ID_2"
                }
            }
        },
        "XID_ADOBE-MARKETING-CLOUD-ID-3": {
            "_href": "https://platform.adobe.io/data/core/ups/models/profile/XID_ADOBE-MARKETING-CLOUD-ID-1000"
        },
        "state": "RESULT_READY",
        "links": {
            "_self": "https://platform.adobe.io/data/core/ups/preview?expression=<expr-1>&limit=1000",
            "next": "",
            "prev": ""
        }
    }],
    "page": {
        "offset": 0,
        "size": 3
    }
}
```

| Property | Description | 
| -------- | ----------- |
| `results` | A list of entity IDs, along with the related identities. |

## Retrieve the results of a specific estimate job {#get-estimate}

You can retrieve the details of a specific estimate job by making a GET request to the `/estimate` endpoint and providing the ID of a previously created preview job in the request path.

**API format**

```http
GET /estimate/{PREVIEW_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{PREVIEW_ID}` | The `id` value of the estimate job you want to retrieve. |

**Request**

The following request retrieves the results of a specific estimate job.

```shell
curl -X GET https://platform.adobe.io/data/core/ups/estimate/MDoyOjRhNDVlODUzLWFjOTEtNGJiNy1hNDI2LTE1MDkzN2I2YWY1Yzo0Mg \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with details of the estimate job.

```json
{
    "estimatedSize": 0,
    "numRowsToRead": 1,
    "state": "RESULT_READY",
    "profilesReadSoFar": 1,
    "standardError": 0,
    "error": {
        "description": "",
        "traceback": ""
    },
    "profilesMatchedSoFar": 0,
    "totalRows": 1,
    "confidenceInterval": "95%",
    "_links": {
        "preview": "https://platform.adobe.io/data/core/ups/preview/app-32be0328-3f31-4b64-8d84-acd0c4fbdad3/execution/0?previewQueryId=e890068b-f5ca-4a8f-a6b5-af87ff0caac3"
    }
}
```

| Property | Description |
| -------- | ----------- |
| `state` | The current state of the preview job. Will be "RUNNING" until processing is complete, at which point it becomes "RESULT_READY" or "FAILED". |
| `_links.preview` | When the preview job's current state is "RESULT_READY", this attribute provides a URL to view the estimate. |

## Cancel or delete a specific preview {#delete-preview}

You can delete a specific preview by making a DELETE request to the `/preview` endpoint and by providing the ID of the preview you wish to delete in the request path.

**API format**

```http
DELETE /preview/{PREVIEW_ID}
```

| Property | Description |
| -------- | ----------- |
| `{PREVIEW_ID}` | The `previewId` value of the preview you want to delete. |

**Request**

```shell
curl -X DELETE https://platform.adobe.io/data/core/ups/preview/MDphcHAtMzJiZTAzMjgtM2YzMS00YjY0LThkODQtYWNkMGM0ZmJkYWQzOmU4OTAwNjhiLWY1Y2EtNGE4Zi1hNmI1LWFmODdmZjBjYWFjMzow \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with the following message:

```json
{
    "status": true,
    "message": "KILLED"
}
```

## Next steps

After reading this guide you now have a better understanding of how estimates and previews work. For more information on other Segmentation API endpoints, please read the [Segmentation developer guide](./getting-started.md). 