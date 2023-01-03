---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;Segmentation Service;previews;estimates;previews and estimates;estimates and previews;api;API;
solution: Experience Platform
title: Previews and Estimates API Endpoints
topic-legacy: developer guide
description: As segment definition are developed, you can use the estimate and preview tools within Adobe Experience Platform to view summary-level information to help ensure you are isolating the expected audience.
exl-id: 2c204f29-825f-4a5e-a7f6-40fc69263614
---
# Previews and estimates endpoints

As you develop a segment definition, you can use the estimate and preview tools within Adobe Experience Platform to view summary-level information to help ensure that you are isolating the audience you expect. 

* **Previews** provide paginated lists of qualifying profiles for a segment definition, allowing you to compare the results against what you expect. 

* **Estimates** provide statistical information on a segment definition, such as the projected audience size, confidence interval, and error standard deviation. 

>[!NOTE]
>
>To access similar metrics related to Real-Time Customer Profile data, such as the total number of profile fragments and merged profiles within specific namespaces or the Profile data store as a whole, please refer to the [profile preview (preview sample status) endpoint guide](../../profile/api/preview-sample-status.md), part of the Profile API developer guide.

## Getting started

The endpoints used in this guide are part of the [!DNL Adobe Experience Platform Segmentation Service] API. Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including required headers and how to read example API calls.

## How estimates are generated

When the ingestion of records into the Profile store increases or decreases the total profile count by more than 5%, a sampling job is triggered to update the count. The way data sampling is triggered depends on the method of ingestion:

* **Batch ingestion:** For batch ingestion, within 15 minutes of successfully ingesting a batch into the Profile store, if the 5% increase or decrease threshold is met, a job is run to update the count.
* **Streaming ingestion:** For streaming data workflows, a check is done on an hourly basis to determine if the 5% increase or decrease threshold has been met. If it has, a job is automatically triggered to update the count.

The sample size of the scan depends on the overall number of entities in your profile store. These sample sizes are represented in the following table:

| Entities in profile store | Sample size |
| ------------------------- | ----------- |
| Less than 1 million | Full data set |
| 1 to 20 million | 1 million |
| Over 20 million | 5% of total |

>[!NOTE]
>
>Estimates generally take 10 to 15 seconds to run, beginning with a rough estimate and refining as more records are read.

## Create a new preview {#create-preview}

You can create a new preview by making a POST request to the `/preview` endpoint.

>[!NOTE]
>
>An estimate job is automatically created when a preview job is created. These two jobs will share the same ID.

**API format**

```http
POST /preview
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/core/ups/preview \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '
    {
        "predicateExpression": "xEvent.metrics.commerce.abandons.value > 0",
        "predicateType": "pql/text",
        "predicateModel": "_xdm.context.profile",
        "graphType": "none"
    }'
```

| Property | Description |
| -------- | ----------- |
| `predicateExpression` | The PQL expression to query the data by. |
| `predicateType` | The predicate type for the query expression under `predicateExpression`. Currently, the only accepted value for this property is `pql/text`. |
| `predicateModel` | The name of the [!DNL Experience Data Model] (XDM) schema class the profile data is based on. |
| `graphType` | The graph type that you want to get the cluster from. The supported values are `none` (performs no identity stitching) and `pdg` (performs identity stitching based on your private identity graph). |

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

## Retrieve the results of a specific preview {#get-preview}

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
 -H 'x-gw-ims-org-id: {ORG_ID}' \
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
        }
    }],
    "state": "RESULT_READY",
    "links": {
        "_self": "https://platform.adobe.io/data/core/ups/preview?expression=<expr-1>&limit=1000",
        "next": "",
        "prev": ""
    },
    "page": {
        "offset": 0,
        "size": 3
    }
}
```

| Property | Description | 
| -------- | ----------- |
| `results` | A list of entity IDs, along with their related identities. The links provided can be used to look up the specified entities, using the [profile access API endpoint](../../profile/api/entities.md). |

## Retrieve the results of a specific estimate job {#get-estimate}

Once you have created a preview job, you can use its `previewId` in the path of a GET request to the `/estimate` endpoint to view statistical information about the segment definition, including projected audience size, confidence interval, and error standard deviation.

**API format**

```http
GET /estimate/{PREVIEW_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{PREVIEW_ID}` | An estimate job is only triggered when a preview job is created, and the two jobs share the same ID value for lookup purposes. Specifically, this is the `previewId` value returned when the preview job was created. |

**Request**

The following request retrieves the results of a specific estimate job.

```shell
curl -X GET https://platform.adobe.io/data/core/ups/estimate/MDoyOjRhNDVlODUzLWFjOTEtNGJiNy1hNDI2LTE1MDkzN2I2YWY1Yzo0Mg \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with details of the estimate job.

```json
{
    "estimatedSize": 4275,
    "numRowsToRead": 4275,
    "estimatedNamespaceDistribution": [
        {
            "namespaceId": "4",
            "profilesMatchedSoFar": 35
        },
        {
            "namespaceId": "6",
            "profilesMatchedSoFar": 4275
        }
    ],
    "state": "RESULT_READY",
    "profilesReadSoFar": 4275,
    "standardError": 0,
    "error": {
        "description": "",
        "traceback": ""
    },
    "profilesMatchedSoFar": 4275,
    "totalRows": 4275,
    "confidenceInterval": "95%",
    "_links": {
        "preview": "https://platform.adobe.io/data/core/ups/preview/app-32be0328-3f31-4b64-8d84-acd0c4fbdad3/execution/0?previewQueryId=e890068b-f5ca-4a8f-a6b5-af87ff0caac3"
    }
}
```

| Property | Description |
| -------- | ----------- |
|`estimatedNamespaceDistribution`|An array of objects showing the number of profiles within the segment broken down by identity namespace. The total number of profiles by namespace (adding together the values shown for each namespace) may be higher than the profile count metric because one profile could be associated with multiple namespaces. For example, if a customer interacts with your brand on more than one channel, multiple namespaces will be associated with that individual customer.|
| `state` | The current state of the preview job. The state will be "RUNNING" until processing is complete, at which point it becomes "RESULT_READY" or "FAILED". |
| `_links.preview` | When the `state` is "RESULT_READY", this field provides a URL to view the estimate. |

## Next steps

After reading this guide you should have a better understanding of how to work with  previews and estimates using the Segmentation API. To learn how to access metrics related to your Real-Time Customer Profile data, such as the total number of profile fragments and merged profiles within specific namespaces or the Profile data store as a whole, please visit the [profile preview (`/previewsamplestatus`) endpoint guide](../../profile/api/preview-sample-status.md).
