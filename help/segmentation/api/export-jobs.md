---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;Segmentation Service;export jobs;api;
solution: Experience Platform
title: Segment Export Jobs API Endpoint
description: Export jobs are asynchronous processes that are used to persist audience segment members to datasets. You can use the /export/jobs endpoint in the Adobe Experience Platform Segmentation Service API, which allows you to programmatically retrieve, create, and cancel export jobs.
exl-id: 5b504a4d-291a-4969-93df-c23ff5994553
---
# Segment export jobs endpoint

Export jobs are asynchronous processes that are used to persist audience segment members to datasets. You can use the `/export/jobs` endpoint in the Adobe Experience Platform Segmentation API, which allows you to programmatically retrieve, create, and cancel export jobs.

>[!NOTE]
>
>This guide covers the use of export jobs in the [!DNL Segmentation API]. For information on how to manage export jobs for [!DNL Real-Time Customer Profile] data, see the guide on [export jobs in the Profile API](../../profile/api/export-jobs.md)

## Getting started

The endpoints used in this guide are part of the [!DNL Adobe Experience Platform Segmentation Service] API. Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including required headers and how to read example API calls.

## Retrieve a list of export jobs {#retrieve-list}

You can retrieve a list of all export jobs for your IMS Organization by making a GET request to the `/export/jobs` endpoint.

**API format**

The `/export/jobs` endpoint supports several query parameters to help filter your results. While these parameters are optional, their use is strongly recommended to help reduce expensive overhead. Making a call to this endpoint with no parameters will retrieve all export jobs available for your organization. Multiple parameters can be included, separated by ampersands (`&`). 

```http
GET /export/jobs
GET /export/jobs?limit={LIMIT}
GET /export/jobs?offset={OFFSET}
GET /export/jobs?status={STATUS}
```

| Parameter | Description |
| --------- | ----------- |
| `{LIMIT}` | Specifies the number of export jobs returned. |
| `{OFFSET}` | Specifies the offset of the pages of results. | 
| `{STATUS}` | Filters the results based on status. The supported values are "NEW", "SUCCEEDED", and "FAILED". |

**Request**

The following request will retrieve the last two export jobs within your IMS Organization.

```shell
curl -X GET https://platform.adobe.io/data/core/ups/export/jobs?limit=2 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

The following response returns HTTP status 200 with a list of successfully completed export jobs, based on the query parameter provided in the request path.

```json
{
    "records": [
        {
            "id": 100,
            "jobType": "BATCH",
            "destination": {
                "datasetId": "5b7c86968f7b6501e21ba9df",
                "segmentPerBatch": false,
                "batchId": "da5cfb4de32c4b93a09f7e37fa53ad52",
            },
            "fields": "identities.id,personalEmail.address",
            "schema": {
                "name": "_xdm.context.profile"
            },
            "imsOrgId": "1BD6382559DF0C130A49422D@AdobeOrg",
            "status": "SUCCEEDED",
            "filter": {
                "segments": [
                    {
                        "segmentId": "52c26d0d-45f2-47a2-ab30-ed06abc981ff",
                        "segmentNs": "ups",
                        "status": [
                            "realized"
                        ]
                    }
                ]
            },
            "mergePolicy": {
                "id": "timestampOrdered-none-mp",
                "version": 1
            },
            "profileInstanceId": "ups",
            "errors": [
                {
                    "code": "0100000003",
                    "msg": "Error in Export Job",
                    "callStack": "com.adobe.aep.unifiedprofile.common.logging.Logger"
                }
            ],
            "metrics": {
                "totalTime": {
                    "startTimeInMs": 123456789000,
                    "endTimeInMs": 123456799000,
                    "totalTimeInMs": 10000
                },
                "profileExportTime": {
                    "startTimeInMs": 123456789000,
                    "endTimeInMs": 123456799000,
                    "totalTimeInMs": 10000
                },
                "totalExportedProfileCounter": 20,
                "exportedProfileByNamespaceCounter": {
                    "namespace1": 10,
                    "namespace2": 5
                }
            },
            "computeGatewayJobId": {
                "exportJob": "f3058161-7349-4ca9-807d-212cee2c2e94"
            },
            "creationTime": 1538615973895,
            "updateTime": 1538616233239,
            "requestId": "d995479c-8a08-4240-903b-af469c67be1f"
        },
        {
            "profileInstanceId": "test_xdm_latest_profile_20_e2e_1538573005395",
            "errors": [
                {
                    "code": "0090000009",
                    "msg": "Error writing profiles to output path 'adl://va7devprofilesnapshot.azuredatalakestore.net/snapshot/722'",
                    "callStack": "com.adobe.aep.unifiedprofile.common.logging.Logger" 
                },
                {
                    "code": "unknown",
                    "msg": "Job aborted.",
                    "callStack": "org.apache.spark.SparkException: Job aborted."
                }
            ],
            "jobType": "BATCH",
            "filter": {
                "segments": [
                    {
                        "segmentId": "52c26d0d-45f2-47a2-ab30-ed06abc981ff",
                        "segmentNs": "AAM",
                        "status": ["realized", "existing"]
                    }
                ]
            },
            "id": 722,
            "schema": {
                "name": "_xdm.context.profile"
            },
            "mergePolicy": {
                "id": "7972e3d6-96ea-4ece-9627-cbfd62709c5d",
                "version": 1
            },
            "status": "FAILED",
            "requestId": "KbOAsV7HXmdg262lc4yZZhoml27UWXPZ",
            "computeGatewayJobId": {
                "exportJob": "15971e0f-317c-4390-9038-1a0498eb356f"
            },
            "metrics": {
                "totalTime": {
                    "startTimeInMs": 1538573416687,
                    "endTimeInMs": 1538573922551,
                    "totalTimeInMs": 505864
                },
                "profileExportTime": {
                    "startTimeInMs": 1538573872211,
                    "endTimeInMs": 1538573918809,
                    "totalTimeInMs": 46598
                }
            },
            "destination": {
                "datasetId": "5bb4c46757920712f924a3eb",
                "segmentPerBatch": false,
                "batchId": "IWEQ6920712f9475762D"
            },
            "updateTime": 1538573922551,
            "imsOrgId": "1BD6382559DF0C130A49422D@AdobeOrg",
            "creationTime": 1538573416687
        }
    ],
    "page":{
        "sortField": "createdTime",
        "sort": "desc",
        "pageOffset": "1540974701302_96",
        "pageSize": 2
    },
    "link":{
        "next": "/export/jobs/?limit=2&offset=1538573416687_722"
    }
}
```

| Property | Description |
| -------- | ----------- |
| `destination` | Destination information for the exported data:<ul><li>`datasetId`: The ID of the dataset where data was exported.</li><li>`segmentPerBatch`: A Boolean value that shows whether or not segment IDs are consolidated. A value of "false" means all the segment IDs are exported into a single batch ID. A value of "true" means that one segment ID is exported into one batch ID. **Note:** Setting the value to true may affect batch export performance.</li></ul> |
| `fields` | A list of the exported fields, separated by commas. |
| `schema.name` | The name of the schema associated with the dataset where data is to be exported. |
| `filter.segments` | The segments that are exported. The following fields are included:<ul><li>`segmentId`: The segment ID that profiles will be exported to.</li><li>`segmentNs`: Segment namespace for the given `segmentID`.</li><li>`status`: An array of strings providing a status filter for the `segmentID`. By default, `status` will have the value `["realized", "existing"]` which represents all profiles that fall into the segment at the current time. Possible values include: "realized", "existing", and "exited". A value of "realized" means the profile is entering the segment. A value of "existing" means the profile continues to be in the segment. A value of "exiting" means the profile is exiting the segment.</li></ul> |
| `mergePolicy` | Merge policy information for the exported data. | 
| `metrics.totalTime` | A field indicating the total time that export job took to run. |
| `metrics.profileExportTime` | A field indicating the time it took for the profiles to export. |
| `page` | Information about the pagination of the requested export jobs. | 
| `link.next` | A link to the next page of export jobs. | 

## Create a new export job {#create}

You can create a new export job by making a POST request to the `/export/jobs` endpoint.

**API format**

```http
POST /export/jobs
```

**Request**

The following request creates a new export job, configured by the parameters provided in the payload.

```shell
curl -X POST https://platform.adobe.io/data/core/ups/export/jobs \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
    "fields": "identities.id,personalEmail.address",
    "mergePolicy": {
        "id": "timestampOrdered-none-mp",
        "version": 1
    },
    "filter": {
        "segments": [
            {
                "segmentId": "52c26d0d-45f2-47a2-ab30-ed06abc981ff",
                "segmentNs": "ups",
                "status": [
                    "realized"
                ]
            }
        ],
        "segmentQualificationTime": {
            "startTime": "2018-01-01T00:00:00Z",
            "endTime": "2018-02-01T00:00:00Z"
        },
        "fromIngestTimestamp": "2018-01-01T00:00:00Z",
        "emptyProfiles": true
    },
    "additionalFields": {
        "eventList": {
            "fields": "string",
            "filter": {
                "fromIngestTimestamp": "2018-01-01T00:00:00Z",
                "toIngestTimestamp": "2020-01-01T00:00:00Z"
            }
        }
    },
    "destination":{
        "datasetId": "5b7c86968f7b6501e21ba9df",
        "segmentPerBatch": false
    },
    "schema":{
        "name": "_xdm.context.profile"
    },
    "evaluationInfo": {
        "segmentation": true
    }
}'
```

| Property | Description |
| -------- | ----------- |
| `fields` | A list of the exported fields, separated by commas. If left blank, all fields will be exported. |
| `mergePolicy` | Specifies the merge policy to govern the exported data. Include this parameter when there are multiple segments being exported. If not provided, the export will take the same merge policy as the given segment. |
| `filter` | An object that specifies the segments that are going to be included in the export job by ID, qualification time, or ingest time, depending on the subproperties listed below. If left blank, all the data will be exported. |
| `filter.segments` | Specifies the segments to export. Omitting this value will result in all data from all profiles being exported. Accepts an array of segment objects, each containing the following fields:<ul><li>`segmentId`: **(Required if using `segments`)** Segment ID for profiles to be exported.</li><li>`segmentNs` *(Optional)* Segment namespace for the given `segmentID`.</li><li>`status` *(Optional)* An array of strings providing a status filter for the `segmentID`. By default, `status` will have the value `["realized", "existing"]` which represents all profiles that fall into the segment at the current time. Possible values include: `"realized"`, `"existing"`, and `"exited"`.  A value of "realized" means the profile is entering the segment. A value of "existing" means the profile continues to be in the segment. A value of "exiting" means the profile is exiting the segment.</li></ul> |
| `filter.segmentQualificationTime` | Filter based on segment qualification time. The start time and/or end time can be provided. |
| `filter.segmentQualificationTime.startTime` | Segment qualification start time for a segment ID for a given status. It not provided, there will be no filter on the start time for a segment ID qualification. The timestamp must be provided in [RFC 3339](https://tools.ietf.org/html/rfc3339) format. |
| `filter.segmentQualificationTime.endTime` | Segment qualification end time for a segment ID for a given status. It not provided, there will be no filter on the end time for a segment ID qualification. The timestamp must be provided in [RFC 3339](https://tools.ietf.org/html/rfc3339) format. |
| `filter.fromIngestTimestamp `| Limits exported profiles to only include those that have been updated after this timestamp. The timestamp must be provided in [RFC 3339](https://tools.ietf.org/html/rfc3339) format. <ul><li>`fromIngestTimestamp` for **profiles**, if provided: Includes all the merged profiles where merged updated timestamp is greater than the given timestamp. Supports `greater_than` operand.</li><li>`fromIngestTimestamp` for **events**: All events ingested after this timestamp will be exported corresponding to resultant profile result. This is not the event time itself but the ingestion time for the events.</li> |
| `filter.emptyProfiles` | A boolean value that indicates whether to filter for empty profiles. Profiles can contain profile records, ExperienceEvent records, or both. Profiles with no profile records and only ExperienceEvent records are referred to as "emptyProfiles". To export all profiles in the profile store, including the "emptyProfiles", set the value of `emptyProfiles` to `true`. If `emptyProfiles` is set to `false`, only profiles with profile records in the store are exported. By default, if `emptyProfiles` attribute is not included, only profiles containing profile records are exported. |
| `additionalFields.eventList` | Controls the time-series event fields exported for child or associated objects by providing one or more of the following settings:<ul><li>`fields`: Control the fields to export.</li><li>`filter`: Specifies criteria that limits the results included from associated objects. Expects a minimum value required for export, typically a date.</li><li>`filter.fromIngestTimestamp`: Filters time-series events to those that have been ingested after the provided timestamp. This is not the event time itself but the ingestion time for the events.</li><li>`filter.toIngestTimestamp`: Filters the timestamp to those that have been ingested before the provided timestamp. This is not the event time itself but the ingestion time for the events.</li></ul> |
| `destination` | **(Required)** Information about the exported data:<ul><li>`datasetId`: **(Required)** The ID of the dataset where data is to be exported.</li><li>`segmentPerBatch`: *(Optional)* A Boolean value that, if not provided, defaults to "false". A value of "false" exports all segment IDs into a single batch ID. A value of "true" exports one segment ID into one batch ID. Note that setting the value to be "true" may affect batch export performance.</li></ul> |
| `schema.name` | **(Required)** The name of the schema associated with the dataset where data is to be exported. |
| `evaluationInfo.segmentation` | *(Optional)* A boolean value that, if not provided, defaults to `false`. A value of `true` indicates that segmentation needs to be done on the export job. |

**Response**

A successful response returns HTTP status 200 with details of your newly created export job.

```json
{
    "id": 100,
    "jobType": "BATCH",
    "destination": {
        "datasetId": "5b7c86968f7b6501e21ba9df",
        "segmentPerBatch": false,
        "batchId": "da5cfb4de32c4b93a09f7e37fa53ad52"
    },
    "fields": "identities.id,personalEmail.address",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "imsOrgId": "{ORG_ID}",
    "status": "NEW",
    "filter": {
        "segments": [
            {
                "segmentId": "52c26d0d-45f2-47a2-ab30-ed06abc981ff",
                "segmentNs": "ups",
                "status": [
                    "realized"
                ]
            }
        ],
        "segmentQualificationTime": {
            "startTime": "2018-01-01T00:00:00Z",
            "endTime": "2018-02-01T00:00:00Z"
        },
        "fromIngestTimestamp": "2018-01-01T00:00:00Z",
        "emptyProfiles": true
    },
    "additionalFields": {
        "eventList": {
            "fields": "_id, _experience",
            "filter": {
                "fromIngestTimestamp": "2018-01-01T00:00:00Z"
            }
        }
    },
    "mergePolicy": {
        "id": "timestampOrdered-none-mp",
        "version": 1
    },
    "profileInstanceId": "ups",
    "metrics": {
        "totalTime": {
            "startTimeInMs": 123456789000,
        }
    },
    "computeGatewayJobId": {
        "exportJob": ""    
    },
    "creationTime": 1538615973895,
    "updateTime": 1538616233239,
    "requestId": "d995479c-8a08-4240-903b-af469c67be1f"
}
```

| Property | Description |
| -------- | ----------- |
| `id` | A system-generated read-only value identifying the export job that was just created. |

Alternatively, if `destination.segmentPerBatch` had been set to `true`, the `destination` object above would have a `batches` array, as shown below:

```json
    "destination": {
        "dataSetId": "{DATASET_ID}",
        "segmentPerBatch": true,
        "batches": [
            {
                "segmentId": "segment1",
                "segmentNs": "ups",
                "status": ["realized"],
                "batchId": "da5cfb4de32c4b93a09f7e37fa53ad52"
            },
            {
                "segmentId": "segment2",
                "segmentNs": "AdCloud",
                "status": "exited",
                "batchId": "df4gssdfb93a09f7e37fa53ad52"
            }
        ]
    }
```

## Retrieve a specific export job {#get}

You can retrieve detailed information about a specific export job by making a GET request to the `/export/jobs` endpoint and providing the ID of the export job you wish to retrieve in the request path.

**API format**

```http
GET /export/jobs/{EXPORT_JOB_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{EXPORT_JOB_ID}` | The `id` of the export job you want to access. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/core/ups/export/jobs/11037 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with detailed information about the specified export job.

```json
{
    "id": 11037,
    "jobType": "BATCH",
    "destination": {
        "datasetId": "5b7c86968f7b6501e21ba9df",
        "segmentPerBatch": false,
        "batchId": "da5cfb4de32c4b93a09f7e37fa53ad52"
    },
    "fields": "identities.id,personalEmail.address",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "imsOrgId": "{ORG_ID}",
    "status": "SUCCEEDED",
    "filter": {
        "segments": [
            {
                "segmentId": "52c26d0d-45f2-47a2-ab30-ed06abc981ff",
                "segmentNs": "ups",
                "status":[
                    "realized"
                ]
            }
        ]
    },
    "mergePolicy": {
        "id": "timestampOrdered-none-mp",
        "version": 1
    },
    "profileInstanceId": "ups",
    "metrics": {
        "totalTime": {
            "startTimeInMs": 123456789000,
            "endTimeInMs": 123456799000,
            "totalTimeInMs": 10000
        },
        "profileExportTime": {
            "startTimeInMs": 123456789000,
            "endTimeInMs": 123456799000,
            "totalTimeInMs": 10000
        },
        "totalExportedProfileCounter": 20,
        "exportedProfileByNamespaceCounter": {
            "namespace1": 10,
            "namespace2": 5
        }
    },
    "computeGatewayJobId": {
        "exportJob": "f3058161-7349-4ca9-807d-212cee2c2e94"
    },
    "creationTime": 1538615973895,
    "updateTime": 1538616233239,
    "requestId": "d995479c-8a08-4240-903b-af469c67be1f"
}
```

| Property | Description |
| -------- | ----------- |
| `destination` | Destination information for the exported data:<ul><li>`datasetId`: The ID of the dataset where the data was exported.</li><li>`segmentPerBatch`: A Boolean value that shows whether or not segment IDs are consolidated. A value of `false` means all the segment IDs were into a single batch ID. A value of `true` means that one segment ID is exported into one batch ID.</li></ul> |
| `fields` | A list of the exported fields, separated by commas.  |
| `schema.name` | The name of the schema associated with the dataset where data is to be exported. |
| `filter.segments` | The segments that are exported. The following fields are included:<ul><li>`segmentId`: Segment ID for profiles to be exported.</li><li>`segmentNs`: Segment namespace for the given `segmentID`.</li><li>`status`: An array of strings providing a status filter for the `segmentID`. By default, `status` will have the value `["realized", "existing"]` which represents all profiles that fall into the segment at the current time. Possible values include: "realized", "existing", and "exited".  A value of "realized" means the profile is entering the segment. A value of "existing" means the profile continues to be in the segment. A value of "exiting" means the profile is exiting the segment.</li></ul> |
| `mergePolicy` | Merge policy information for the exported data. | 
| `metrics.totalTime` | A field indicating the total time that export job took to run. |
| `metrics.profileExportTime` | A field indicating the time it took for the profiles to export. |
| `totalExportedProfileCounter` | The total number of profile exported across all batches. |

## Cancel or delete a specific export job {#delete}

You can request to delete the specified export job by making a DELETE request to the `/export/jobs` endpoint and providing the ID of the export job you wish to delete in the request path.

**API format**

```http
DELETE /export/jobs/{EXPORT_JOB_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{EXPORT_JOB_ID}` | The `id` of the export job you want to delete. |

**Request**

```shell
curl -X DELETE https://platform.adobe.io/data/core/ups/export/jobs/{EXPORT_JOB_ID} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 204 with the following message:

```json
{
  "status": true,
  "message": "Export job has been marked for cancelling"
}
```

## Next steps

After reading this guide you now have a better understanding of how export jobs work.
