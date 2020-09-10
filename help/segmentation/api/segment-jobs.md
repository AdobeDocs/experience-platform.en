---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;Segmentation Service;segment jobs;segment job;API;api;
solution: Experience Platform
title: Segment jobs
topic: developer guide
---

# Segment jobs endpoint

A segment job is an asynchronous process that creates a new audience segment. It references a [segment definition](./segment-definitions.md), as well as any [merge policies](../../profile/api/merge-policies.md) controlling how [!DNL Real-time Customer Profile] merges overlapping attributes across your profile fragments. When a segment job successfully completes, you can gather various information about the segment, such as any errors that may have occurred during processing and the ultimate size of your audience.

This guide provides information to help you better understand segment jobs and includes sample API calls for performing basic actions using the API.

## Getting started

The endpoints used in this guide are part of the [!DNL Adobe Experience Platform Segmentation Service] API. Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including required headers and how to read example API calls.

## Retrieve a list of segment jobs {#retrieve-list}

You can retrieve a list of all segment jobs for your IMS Organization by making a GET request to the `/segment/jobs` endpoint.

**API format**

The `/segment/jobs` endpoint supports several query parameters to help filter your results. While these parameters are optional, their use is strongly recommended to help reduce expensive overhead. Making a call to this endpoint with no parameters will retrieve all export jobs available for your organization. Multiple parameters can be included, separated by ampersands (`&`). 

```http
GET /segment/jobs
GET /segment/jobs?{QUERY_PARAMETERS}
```

**Query parameters**

| Parameter | Description | Example |
| --------- | ----------- | ------- |
| `start` | Specifies the starting offset for the segment jobs returned. | `start=1` |
| `limit` | Specifies the number of segment jobs returned per page. | `limit=20` |
| `status` | Filters the results based on status. The supported values are NEW, QUEUED, PROCESSING, SUCCEEDED, FAILED, CANCELLING, CANCELLED | `status=NEW` |
| `sort` | Orders the segment jobs returned. Is written in the format `[attributeName]:[desc|asc]`. | `sort=creationTime:desc` |
| `property` | Filters segment jobs and gets exact matches for the filter given. It can be written in either of the following formats: <ul><li>`[jsonObjectPath]==[value]` - filtering on the object key</li><li>`[arrayTypeAttributeName]~[objectKey]==[value]` - filtering within the array</li></ul> | `property=segments~segmentId==workInUS` |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/core/ups/segment/jobs?status=SUCCEEDED \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with a list of segment jobs for the specified IMS organization as JSON. The following response returns a list of all the successful segment jobs for the IMS organization.

>[!NOTE]
>
>The following response has been truncated for space, and will only show the first returned job.

```json
{
    "_page": {
        "totalCount": 14,
        "pageSize": 14
    },
    "children": [
        {
            "id": "b31aed3d-b3b1-4613-98c6-7d3846e8d48f",
            "imsOrgId": "E95186D65A28ABF00A495D82@AdobeOrg",
            "sandbox": {
                "sandboxId": "28e74200-e3de-11e9-8f5d-7f27416c5f0d",
                "sandboxName": "prod",
                "type": "production",
                "default": true
            },
            "profileInstanceId": "ups",
            "source": "scheduler",
            "status": "SUCCEEDED",
            "batchId": "678f53bc-e21d-4c47-a7ec-5ad0064f8e4c",
            "computeJobId": 8811,
            "computeGatewayJobId": "9ea97b25-a0f5-410e-ae87-b2d85e58f399",
            "segments": [
                {
                    "segmentId": "30230300-ccf1-48ad-8012-c5563a007069",
                    "segment": {
                        "id": "30230300-ccf1-48ad-8012-c5563a007069",
                        "expression": {
                            "type": "PQL",
                            "format": "pql/json",
                            "value": "{PQL_EXPRESSION}"
                        },
                        "mergePolicyId": "b83185bb-0bc6-489c-9363-0075eb30b4c8",
                        "mergePolicy": {
                            "id": "b83185bb-0bc6-489c-9363-0075eb30b4c8",
                            "version": 1
                        }
                    }
                }
            ],
            "metrics": {
                "totalTime": {
                    "startTimeInMs": 1573203617195,
                    "endTimeInMs": 1573204395655,
                    "totalTimeInMs": 778460
                },
                "profileSegmentationTime": {
                    "startTimeInMs": 1573204266727,
                    "endTimeInMs": 1573204395655,
                    "totalTimeInMs": 128928
                },
                "totalProfiles": 0,
                "segmentedProfileCounter": {
                    "30230300-ccf1-48ad-8012-c5563a007069": 0,
                    "ca763983-5572-4ea4-809c-b7dff7e0d79b": 0
                },
                "segmentedProfileByNamespaceCounter": {
                    "30230300-ccf1-48ad-8012-c5563a007069": {},
                    "ca763983-5572-4ea4-809c-b7dff7e0d79b": {}
                }
            },
            "requestId": "4e538382-dbd8-449e-988a-4ac639ebe72b-1573203600264",
            "schema": {
                "name": "_xdm.context.profile"
            },
            "properties": {
                "scheduleId": "4e538382-dbd8-449e-988a-4ac639ebe72b",
                "runId": "e6c1308d-0d4b-4246-b2eb-43697b50a149"
            },
            "_links": {
                "cancel": {
                    "href": "/segment/jobs/b31aed3d-b3b1-4613-98c6-7d3846e8d48f",
                    "method": "DELETE"
                },
                "checkStatus": {
                    "href": "/segment/jobs/b31aed3d-b3b1-4613-98c6-7d3846e8d48f",
                    "method": "GET"
                }
            },
            "updateTime": 1573204395000,
            "creationTime": 1573203600535,
            "updateEpoch": 1573204395
        }
    ],
    "_links": {
        "next": {}
    }
}
```

| Property | Description |
| -------- | ----------- |
| `id` | A system-generated read-only identifier for the segment job. | 
| `status` | The current status for the segment job. Potential values for the status include "NEW", "PROCESSING", "CANCELLING", "CANCELLED", "FAILED", and "SUCCEEDED". |
| `segments` | An object that contains information about the segment definitions returned within the segment job. |
| `segments.segment.id` | The ID of the segment definition. |
| `segments.segment.expression` | An object that contains information about the segment definition's expression, written in PQL. |
| `metrics` | An object that contains diagnostic information about the segment job. |

## Create a new segment job {#create}

You can create a new segment job by making a POST request to the `/segment/jobs` endpoint and including in the body the ID of the segment definition from which you would like to create a new audience.

**API format**

```http
POST /segment/jobs
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/core/ups/segment/jobs \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
[
  {
    "segmentId": "4afe34ae-8c98-4513-8a1d-67ccaa54bc05",
  }
]'
```

| Property | Description |
| -------- | ----------- |
| `segmentId` | The ID of the segment definition that you want to create a segment job for. These segment definitions can belong to different merge policies. More information about segment definitions can be found in the [segment definition endpoint guide](./segment-definitions.md). |

**Response**

A successful response returns HTTP status 200 with details of your newly created segment job.

```json
{
    "id": "d3b4a50d-dfea-43eb-9fca-557ea53771fd",
    "imsOrgId": "{IMS_ORG}",
    "sandbox": {
        "sandboxId": "28e74200-e3de-11e9-8f5d-7f27416c5f0d",
        "sandboxName": "prod",
        "type": "production",
        "default": true
    },
    "profileInstanceId": "ups",
    "source": "api",
    "status": "NEW",
    "segments": [
        {
            "segmentId": "4afe34ae-8c98-4513-8a1d-67ccaa54bc05",
            "segment": {
                "id": "4afe34ae-8c98-4513-8a1d-67ccaa54bc05",
                "expression": {
                    "type": "PQL",
                    "format": "pql/text",
                    "value": "workAddress.country = \"US\""
                },
                "mergePolicyId": "e161dae9-52f0-4c7f-b264-dc43dd903d56",
                "mergePolicy": {
                    "id": "e161dae9-52f0-4c7f-b264-dc43dd903d56",
                    "version": 1
                }
            }
        }
    ],
    "requestId": "Hw1jdAHeuWHVKVxcAPFrLCbbjkriDl9v",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "_links": {
        "cancel": {
            "href": "/segment/jobs/d3b4a50d-dfea-43eb-9fca-557ea53771fd",
            "method": "DELETE"
        },
        "checkStatus": {
            "href": "/segment/jobs/d3b4a50d-dfea-43eb-9fca-557ea53771fd",
            "method": "GET"
        }
    },
    "updateTime": 1579304260000,
    "creationTime": 1579304260897,
    "updateEpoch": 1579304260
}
```

| Property | Description |
| -------- | ----------- |
| `id` | A system-generated read-only identifier for the newly created segment job. | 
| `status` | The current status for the segment job. Since the segment job is newly created, the status will always be "NEW". |
| `segments` | An object that contains information about the segment definitions that this segment job is running for. |
| `segments.segment.id` | The ID of the segment definition that you provided. |
| `segments.segment.expression` | An object that contains information about the segment definition's expression, written in PQL. |

## Retrieve a specific segment job {#get}

You can retrieve detailed information about a specific segment job by making a GET request to the `/segment/jobs` endpoint and providing the ID of the segment job you wish to retrieve in the request path.

**API format**

```http
GET /segment/jobs/{SEGMENT_JOB_ID}
```

| Property | Description |
| -------- | ----------- | 
| `{SEGMENT_JOB_ID}` | The `id` value of the segment job you want to retrieve. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/core/ups/segment/jobs/d3b4a50d-dfea-43eb-9fca-557ea53771fd \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with detailed information about the specified segment job.

```json
{
    "id": "d3b4a50d-dfea-43eb-9fca-557ea53771fd",
    "imsOrgId": "{IMS_ORG}",
    "sandbox": {
        "sandboxId": "28e74200-e3de-11e9-8f5d-7f27416c5f0d",
        "sandboxName": "prod",
        "type": "production",
        "default": true
    },
    "profileInstanceId": "ups",
    "source": "api",
    "status": "SUCCEEDED",
    "batchId": "651fc109-3963-48d2-aa98-9e3cc2003bac",
    "computeJobId": 39312,
    "computeGatewayJobId": "a0099ab6-11ab-4c2b-a0ea-6162e16806bd",
    "segments": [
        {
            "segmentId": "4afe34ae-8c98-4513-8a1d-67ccaa54bc05",
            "segment": {
                "id": "4afe34ae-8c98-4513-8a1d-67ccaa54bc05",
                "expression": {
                    "type": "PQL",
                    "format": "pql/text",
                    "value": "workAddress.country = \"US\""
                },
                "mergePolicyId": "e161dae9-52f0-4c7f-b264-dc43dd903d56",
                "mergePolicy": {
                    "id": "e161dae9-52f0-4c7f-b264-dc43dd903d56",
                    "version": 1
                }
            }
        }
    ],
    "metrics": {
        "totalTime": {
            "startTimeInMs": 1579304313411
        },
        "profileSegmentationTime": {}
    },
    "requestId": "Hw1jdAHeuWHVKVxcAPFrLCbbjkriDl9v",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "_links": {
        "cancel": {
            "href": "/segment/jobs/d3b4a50d-dfea-43eb-9fca-557ea53771fd",
            "method": "DELETE"
        },
        "checkStatus": {
            "href": "/segment/jobs/d3b4a50d-dfea-43eb-9fca-557ea53771fd",
            "method": "GET"
        }
    },
    "updateTime": 1579304339000,
    "creationTime": 1579304260897,
    "updateEpoch": 1579304339
}
```

| Property | Description |
| -------- | ----------- |
| `id` | A system-generated read-only identifier for the segment job. | 
| `status` | The current status for the segment job. Potential values for the status include "NEW", "PROCESSING", "CANCELLING", "CANCELLED", "FAILED", and "SUCCEEDED". |
| `segments` | An object that contains information about the segment definitions returned within the segment job. |
| `segments.segment.id` | The ID of the segment definition. |
| `segments.segment.expression` | An object that contains information about the segment definition's expression, written in PQL. |
| `metrics` | An object that contains diagnostic information about the segment job. |

## Bulk retrieve segment jobs {#bulk-get}

You can retrieve detailed information about multiple segment jobs by making a POST request to the `/segment/jobs/bulk-get` endpoint and providing the  `id` values of the segment jobs in the request body.

**API format**

```http
POST /segment/jobs/bulk-get
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/core/ups/segment/jobs/bulk-get \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "ids": [
            {
                "id": "cc3419d3-0389-47f1-b174-fead6b3c830d"
            },
            {
                "id": "c527dc3f-07fe-4b96-be4e-23f38e734ff8"
            }
        ]
    }'
```

**Response**

A successful response returns HTTP status 207 with the requested segment jobs.

>[!NOTE]
>
>The following response has been truncated for space, only showing partial details of each segment job. The full response will list the full details for the segment jobs requested.

```json
{
    "results": {
        "cc3419d3-0389-47f1-b174-fead6b3c830d": {
            "id": "cc3419d3-0389-47f1-b174-fead6b3c830d",
            "imsOrgId": "{IMS_ORG}",
            "status": "SUCCEEDED",
            "segments": [
                {
                    "segmentId": "30230300-ccf1-48ad-8012-c5563a007069",
                    "segment": {
                        "id": "30230300-ccf1-48ad-8012-c5563a007069",
                        "expression": {
                            "type": "PQL",
                            "format": "pql/json",
                            "value": "{PQL_EXPRESSION}"
                        },
                        "mergePolicyId": "b83185bb-0bc6-489c-9363-0075eb30b4c8",
                        "mergePolicy": {
                            "id": "b83185bb-0bc6-489c-9363-0075eb30b4c8",
                            "version": 1
                        }
                    }
                }
            ],
            "updateTime": 1573204395000,
            "creationTime": 1573203600535,
            "updateEpoch": 1573204395
        },
        "c527dc3f-07fe-4b96-be4e-23f38e734ff8": {
            "id": "c527dc3f-07fe-4b96-be4e-23f38e734ff8",
            "imsOrgId": "{IMS_ORG}",
            "status": "SUCCEEDED",
            "segments": [
                {
                    "segmentId": "4afe34ae-8c98-4513-8a1d-67ccaa54bc05",
                    "segment": {
                        "id": "4afe34ae-8c98-4513-8a1d-67ccaa54bc05",
                        "expression": {
                            "type": "PQL",
                            "format": "pql/json",
                            "value": "{PQL_EXPRESSION}"
                        },
                        "mergePolicyId": "b83185bb-0bc6-489c-9363-0075eb30b4c8",
                        "mergePolicy": {
                            "id": "b83185bb-0bc6-489c-9363-0075eb30b4c8",
                            "version": 1
                        }
                    }
                }
            ],
            "updateTime": 1573204395000,
            "creationTime": 1573203600535,
            "updateEpoch": 1573204395
        }
    }
}
```

| Property | Description |
| -------- | ----------- |
| `id` | A system-generated read-only identifier for the segment job. | 
| `status` | The current status for the segment job. Potential values for the status include "NEW", "PROCESSING", "CANCELLING", "CANCELLED", "FAILED", and "SUCCEEDED". |
| `segments` | An object that contains information about the segment definitions returned within the segment job. |
| `segments.segment.id` | The ID of the segment definition. |
| `segments.segment.expression` | An object that contains information about the segment definition's expression, written in PQL. |

## Cancel or delete a specific segment job {#delete}

You can delete a specific segment job by making a DELETE request to the `/segment/jobs` endpoint and providing the ID of the segment job you wish to delete in the request path.

>[!NOTE]
>
>The API response to the delete request is immediate. However, the actual deletion of the segment job is asynchronous. In other words, there is a time difference between when the delete request to the segment job is made and when it is applied.

**API format**

```http
DELETE /segment/jobs/{SEGMENT_JOB_ID}
```

| Property | Description |
| -------- | ----------- | 
| `{SEGMENT_JOB_ID}` | The `id` value of the segment job you want to delete. |

**Request**

```shell
curl -X DELETE https://platform.adobe.io/data/core/ups/segment/jobs/d3b4a50d-dfea-43eb-9fca-557ea53771fd \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 204 with the following information.

```json
{
    "status": true,
    "message": "Segment job with id 'd3b4a50d-dfea-43eb-9fca-557ea53771fd' has been marked for cancelling"
}
```

## Next steps

After reading this guide you now have a better understanding of how segment jobs work.