---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Export data using APIs
topic: tutorial
---

# Export Profile data using APIs

Real-time Customer Profile enables you to build a single view of individual customers by bringing together data from multiple sources, including both attribute data and behavioral data. Data available within Profile can then be exported to a dataset for further processing. This tutorial provides step-by-step instructions for creating and managing export jobs using the [Real-time Customer Profile API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/real-time-customer-profile.yaml). 

In addition to creating an export job, you can also access Profile data using the Profile Access API and through projections. Please see the [Profile Access API tutorial](../../profile/api/entities.md) or the tutorial on [configuring edge destinations and projections](../../profile/api/edge-projections.md) for more information on these other access patterns.

## Getting started

This tutorial requires a working understanding of the various Adobe Experience Platform services involved in working with Profile data. Before beginning this tutorial, please review the documentation for the following services:

- [Real-time Customer Profile](../../profile/home.md): Provides a unified, customer profile in real-time based on aggregated data from multiple sources.
- [Adobe Experience Platform Segmentation Service](../home.md): Allows you to build audience segments from Real-time Customer Profile data.
- [Experience Data Model (XDM)](../../xdm/home.md): The standardized framework by which Platform organizes customer experience data.
- [Sandboxes](../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

### Required headers

This tutorial also requires you to have completed the [authentication tutorial](../../tutorials/authentication.md) in order to successfully make calls to Platform APIs. Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{IMS_ORG}`

All resources in Experience Platform are isolated to specific virtual sandboxes. Requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE] For more information on sandboxes in Platform, see the [sandbox overview documentation](../../sandboxes/home.md). 

All POST, PUT, and PATCH requests require an additional header:

- Content-Type: application/json

## Create an export job

Exporting Profile data requires first creating a dataset into which the data will be exported, then initiating a new export job. Both of these steps can be achieved using Experience Platform APIs, with the former using the Catalog Service API and the latter using the Real-time Customer Profile API. Detailed instructions for completing each step are outlined in the sections that follow.

- [Create a target dataset](#create-a-target-dataset) - Create a dataset to hold exported data.
- [Initiate a new export job](#initiate-export-job) - Populate the dataset with XDM Individual Profile data.

### Create a target dataset

When exporting Profile data, a target dataset must first be created. It is important that the dataset be configured correctly to ensure the export is successful. 

One of the key considerations is the schema upon which the dataset is based (`schemaRef.id` in the API sample request below). In order to export a segment, the dataset must be based on the XDM Individual Profile Union Schema (`https://ns.adobe.com/xdm/context/profile__union`). A union schema is a system-generated, read-only schema that aggregates the fields of schemas which share the same class, in this case that is the XDM Individual Profile class. For more information on union view schemas, please see the [Real-time Customer Profile section of the Schema Registry developer guide](../../xdm/schema/composition.md#union).

The steps that follow in this tutorial outline how to create a dataset that references the XDM Individual Profile Union Schema using the Catalog API. You may also use the Adobe Experience Platform user interface to create a dataset that references the union schema. Steps for using the UI are outlined in [this UI tutorial for exporting segments](./segment-export-dataset.md) but are applicable here as well. Once completed, you can return to this tutorial to proceed with the steps for [initiating a new export job](#initiate-export-job).

If you already have a compatible dataset and know its ID, you can proceed directly to the step for [initiating a new export job](#initiate-export-job).

**API format**

```http
POST /dataSets
```

**Request**

The following request creates a new dataset, providing configuration parameters in the payload.

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/catalog/dataSets \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "name": "Profile Data Export",
        "schemaRef": {
          "id": "https://ns.adobe.com/xdm/context/profile__union",
          "contentType": "application/vnd.adobe.xed+json;version=1"
        },
        "fileDescription": {
          "persisted": true,
          "containerFormat": "parquet",
          "format": "parquet"
        },
        "aspect": "production"
      }'
```

| Property | Description |
| -------- | ----------- |
| `name` | A descriptive name for the dataset. |
| `schemaRef.id` | The ID of the union view (schema) that the dataset will be associated with. |
| `fileDescription.persisted` | A Boolean value that when set to `true`, enables the dataset to persist in the union view. |

**Response**

A successful response returns an array containing the read-only, system-generated, unique ID of the newly created dataset. A properly configured dataset ID is required in order to successfully export Profile data.

```json
[
  "@/datasets/5b020a27e7040801dedba61b"
] 
```

### Initiate export job

Once you have a union-persisting dataset, you can create an export job to persist the Profile data to the dataset by making a POST request to the `/export/jobs` endpoint in the Real-time Customer Profile API and providing the details of the data you wish to export in the body of the request.

**API format**

```http
POST /export/jobs
```

**Request**

The following request creates a new export job, providing configuration parameters in the payload.

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/export/jobs \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "fields": "identities.id,personalEmail.address",
    "mergePolicy": {
      "id": "e5bc94de-cd14-4cdf-a2bc-88b6e8cbfac2",
      "version": 1
    },
    "filter": {
      "segments": [
        {
          "segmentId": "4edc8488-2c35-4f6d-b4c6-9075c68d2df4",
          "segmentNs": "AAM",
          "status": ["realized"]
        },
        {
          "segmentId": "1rfe8422-334d-12f4-3sd4-12cf6g990g51",
          "segmentNs": "UPS",
          "status": ["exited"]
        }
      ],
      "segmentQualificationTime": {
            "startTime": "2019-09-01T00:00:00Z",
            "endTime": "2019-09-02T00:00:00Z"
        },
      "fromIngestTimestamp": "2018-10-25T13:22:04-07:00",
      "emptyProfiles": false
    },
    "additionalFields" : {
      "eventList": {
        "fields": "environment.browserDetails.name,environment.browserDetails.version",
        "filter": {
          "fromIngestTimestamp": "2018-10-25T13:22:04-07:00"
        }
      }
    },
    "destination": {
      "datasetId": "5b020a27e7040801dedba61b",
      "segmentPerBatch": true
    },
    "schema": {
      "name": "_xdm.context.profile"
    }
  }'
```

| Property | Description |
| -------- | ----------- |
| `fields` | *(Optional)* Limits the data fields to be included in the export to only those provided in this parameter. The same parameter is also available when creating a segment, therefore the fields in the segment may have already been filtered. Omitting this value will result in all fields being included in the exported data. |
| `mergePolicy` | *(Optional)* Specifies the merge policy to govern the exported data. Include this parameter when there are multiple segments being exported. Omitting this value will cause the Export Service to use the merge policy provided by the segment. |
| `mergePolicy.id` | The ID of the merge policy. |
| `mergePolicy.version` | The specific version of the merge policy to use. Omitting this value will default to the most recent version.|
| `filter` | *(Optional)* Specifies one or more of the following filters to apply to the segment before export. |
| `filter.segments` | *(Optional)* Specifies the segments to export. Omitting this value will result in all data from all profiles being exported. Accepts an array of segment objects, each containing the following fields:<ul><li>`segmentId`: **(Required if using `segments`)** Segment ID for profiles to be exported.</li><li>`segmentNs` *(Optional)* Segment namespace for the given `segmentID`.</li><li>`status` *(Optional)* An array of strings providing a status filter for the `segmentID`. By default, `status` will have the value `["realized", "existing"]` which represents all profiles that fall into the segment at the current time. Possible values include: `"realized"`, `"existing"`, and `"exited"`.</br></br>For more information, see the [creating segments tutorial](./create-a-segment.md).</li></ul> |
| `filter.segmentQualificationTime` | *(Optional)* Filter based on segment qualification time. The start time and/or end time can be provided. |
| `filter.segmentQualificationTime.startTime` | *(Optional)* Segment qualification start time for a segment ID for a given status. It not provided, there will be no filter on the start time for a segment ID qualification. The timestamp must be provided in [RFC 3339](https://tools.ietf.org/html/rfc3339) format. |
| `filter.segmentQualificationTime.endTime` | *(Optional)* Segment qualification end time for a segment ID for a given status. It not provided, there will be no filter on the end time for a segment ID qualification. The timestamp must be provided in [RFC 3339](https://tools.ietf.org/html/rfc3339) format. |
| `filter.fromIngestTimestamp `| *(Optional)* Limits exported profiles to only include those that have been updated after this timestamp. The timestamp must be provided in [RFC 3339](https://tools.ietf.org/html/rfc3339) format. <ul><li>`fromIngestTimestamp` for **profiles**, if provided: Includes all the merged profiles where merged updated timestamp is greater than the given timestamp. Supports `greater_than` operand.</li><li>`fromTimestamp` for **events**: All events ingested after this timestamp will be exported corresponding to resultant profile result. This is not the event time itself but the ingestion time for the events.</li> |
| `filter.emptyProfiles` | - *(Optional)* Boolean. Profiles can contain Profile records, ExperienceEvent records, or both. Profiles with no Profile records and only ExperienceEvent records are referred to as "emptyProfiles". To export all profiles in the Profile store, including the "emptyProfiles", set the value of `emptyProfiles` to `true`. If `emptyProfiles` is set to `false`, only profiles with Profile records in the store are exported. By default, if `emptyProfiles` attribute is not included, only profiles containing Profile records are exported. |
| `additionalFields.eventList` | *(Optional)* Controls the time series event fields exported for child or associated objects by providing one or more of the following settings:<ul><li>`eventList.fields`: Control the fields to export.</li><li>`eventList.filter`: Specifies criteria that limits the results included from associated objects. Expects a minimum value required for export, typically a date.</li><li>`eventList.filter.fromIngestTimestamp`: Filters time series events to those that have been ingested after the provided timestamp. This is not the event time itself but the ingestion time for the events.</li></ul> |
| `destination` | **(Required)** Destination information for the exported data:<ul><li>`destination.datasetId`: **(Required)** The ID of the dataset where data is to be exported.</li><li>`destination.segmentPerBatch`: *(Optional)* A Boolean value that, if not provided, defaults to `false`. A value of `false` exports all segment IDs into a single batch ID. A value of `true` exports one segment ID into one batch ID. Note that setting the value to be `true` may affect batch export performance.</li></ul> |
| `schema.name` | **(Required)** The name of the schema associated with the dataset where data is to be exported. |

>[!NOTE] To export only Profile data, and not include related ExperienceEvent data, remove the "additionalFields" object from the request.

**Response**

A successful response returns a dataset populated with Profile data as specified in the request.

```json
{
    "profileInstanceId": "ups",
    "jobType": "BATCH",
    "filter": {
      "segments": [
        {
          "segmentId": "4edc8488-2c35-4f6d-b4c6-9075c68d2df4",
          "segmentNs": "AAM",
          "status": ["realized"]
        },
        {
          "segmentId": "1rfe8422-334d-12f4-3sd4-12cf6g990g51",
          "segmentNs": "UPS",
          "status": ["exited"]
        }
      ]
    },
    "id": 24115,
    "schema": {
        "name": "_xdm.context.profile"
    },
    "mergePolicy": {
        "id": "0bf16e61-90e9-4204-b8fa-ad250360957b",
        "version": 1
    },
    "status": "NEW",
    "requestId": "IwkVcD4RupdSmX376OBVORvcvTdA4ypN",
    "computeGatewayJobId": {},
    "metrics": {
        "totalTime": {
            "startTimeInMs": 1559674261657
        }
    },
    "destination": {
      "dataSetId" : "5cf6bcf79ecc7c14530fe436",
      "segmentPerBatch": true,
      "batches" : [
        {
          "segmentId": "4edc8488-2c35-4f6d-b4c6-9075c68d2df4",
          "segmentNs": "AAM",
          "status": ["realized"],
          "batchId": "da5cfb4de32c4b93a09f7e37fa53ad52"
        },
        {
          "segmentId": "1rfe8422-334d-12f4-3sd4-12cf6g990g51",
          "segmentNs": "UPS",
          "status": ["exited"],
          "batchId": "df4gssdfb93a09f7e37fa53ad52"
        }
      ]
    },
    "updateTime": 1559674261868,
    "imsOrgId": "{IMS_ORG}",
    "creationTime": 1559674261657
}
```

If `destination.segmentPerBatch` had not been included in the request (if not present, it defaults to `false`) or the value had been set to `false`, the `destination` object in the response above would not have a `batches` array and instead would include only one `batchId`, as shown below. That single batch would include all segment IDs, whereas the response above shows a single segment ID per batch ID.

```json
  "destination": {
    "datasetId": "5cf6bcf79ecc7c14530fe436",
    "segmentPerBatch": false,
    "batchId": "da5cfb4de32c4b93a09f7e37fa53ad52"
  }
```

## List all export jobs

You can return a list of all export jobs for a particular IMS Organization by performing a GET request to the `export/jobs` endpoint. The request also supports the query parameters `limit` and `offset`, as shown below.

**API format**

```http
GET /export/jobs
GET /export/jobs?limit=4
GET /export/jobs?offset=2
```

| Property | Description |
| -------- | ----------- |
| `limit` | Specify the number of records to be returned. |
| `offset` | Offset the page of results to be returned by the number provided. |

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/export/jobs/ \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

The response includes a `records` object containing the export jobs created by your IMS Organization.

```json
{
  "records": [
    {
      "profileInstanceId": "ups",
      "jobType": "BATCH",
      "filter": {
          "segments": [
              {
                  "segmentId": "52c26d0d-45f2-47a2-ab30-ed06abc981ff"
              }
          ]
      },
      "id": 726,
      "schema": {
          "name": "_xdm.context.profile"
      },
      "mergePolicy": {
          "id": "timestampOrdered-none-mp",
          "version": 1
      },
      "status": "SUCCEEDED",
      "requestId": "d995479c-8a08-4240-903b-af469c67be1f",
      "computeGatewayJobId": {
          "exportJob": "f3058161-7349-4ca9-807d-212cee2c2e94",
          "pushJob": "feaeca05-d137-4605-aa4e-21d19d801fc6"
      },
      "metrics": {
          "totalTime": {
              "startTimeInMs": 1538615973895,
              "endTimeInMs": 1538616233239,
              "totalTimeInMs": 259344
          },
          "profileExportTime": {
              "startTimeInMs": 1538616067445,
              "endTimeInMs": 1538616139576,
              "totalTimeInMs": 72131
          },
          "aCPDatasetWriteTime": {
              "startTimeInMs": 1538616195172,
              "endTimeInMs": 1538616195715,
              "totalTimeInMs": 543
          }
      },
      "destination": {
          "datasetId": "5b7c86968f7b6501e21ba9df",
          "batchId": "da5cfb4de32c4b93a09f7e37fa53ad52"
      },
      "updateTime": 1538616233239,
      "imsOrgId": "{IMS_ORG}",
      "creationTime": 1538615973895
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
                "segmentId": "7a93d2ff-a220-4bae-9a4e-5f3c35032be3"
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
          "batchId": ""
      },
      "updateTime": 1538573922551,
      "imsOrgId": "{IMS_ORG}",
      "creationTime": 1538573416687
    }
  ],
  "page": {
      "sortField": "createdTime",
      "sort": "desc",
      "pageOffset": "1538573416687_722",
      "pageSize": 2
  },
  "link": {
      "next": "/export/jobs/?limit=2&offset=1538573416687_722"
  }
}
```

## Monitor export progress

To view the details of a specific export job, or monitor its status as it processes, you can make a GET request to the `/export/jobs` endpoint and include the `id` of the export job in the path. The export job is complete once the `status` field returns the value "SUCCEEDED".

**API format**

```http
GET /export/jobs/{EXPORT_JOB_ID}
```

| Property | Description |
| -------- | ----------- |
| `{EXPORT_JOB_ID}` | The `id` of the export job you want to access. |

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/export/jobs/24115 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

```json
{
    "profileInstanceId": "ups",
    "jobType": "BATCH",
    "filter": {
      "segments": [
        {
          "segmentId": "4edc8488-2c35-4f6d-b4c6-9075c68d2df4",
          "segmentNs": "AAM",
          "status": ["realized"]
        },
        {
          "segmentId": "1rfe8422-334d-12f4-3sd4-12cf6g990g51",
          "segmentNs": "UPS",
          "status": ["exited"]
        }
      ]
    },
    "id": 24115,
    "schema": {
        "name": "_xdm.context.profile"
    },
    "mergePolicy": {
        "id": "0bf16e61-90e9-4204-b8fa-ad250360957b",
        "version": 1
    },
    "status": "SUCCEEDED",
    "requestId": "YwMt1H8QbVlGT2pzyxgwFHTwzpMbHrTq",
    "computeGatewayJobId": {
      "exportJob": "305a2e5c-2cf3-4746-9b3d-3c5af0437754",
      "pushJob": "963f275e-91a3-4fa1-8417-d2ca00b16a8a"
    },
    "metrics": {
      "totalTime": {
        "startTimeInMs": 1547053539564,
        "endTimeInMs": 1547054743929,
        "totalTimeInMs": 1204365
      },
      "profileExportTime": {
        "startTimeInMs": 1547053667591,
        "endTimeInMs": 1547053778195,
        "totalTimeInMs": 110604
      },
      "aCPDatasetWriteTime": {
        "startTimeInMs": 1547054660416,
        "endTimeInMs": 1547054698918,
        "totalTimeInMs": 38502
      }
    },
    "destination": {
      "dataSetId" : "5cf6bcf79ecc7c14530fe436",
      "segmentPerBatch": true,
      "batches" : [
        {
          "segmentId": "4edc8488-2c35-4f6d-b4c6-9075c68d2df4",
          "segmentNs": "AAM",
          "status": ["realized"],
          "batchId": "da5cfb4de32c4b93a09f7e37fa53ad52"
        },
        {
          "segmentId": "1rfe8422-334d-12f4-3sd4-12cf6g990g51",
          "segmentNs": "UPS",
          "status": ["exited"],
          "batchId": "df4gssdfb93a09f7e37fa53ad52"
        }
      ]
    },
    "updateTime": 1559674261868,
    "imsOrgId": "{IMS_ORG}",
    "creationTime": 1559674261657
}
```

| Property | Description |
| -------- | ----------- |
| `batchId` | The identifier of the batches created from a successful export, to be used for lookup purposes when reading Profile data. |

## Cancel an export job

Experience Platform allows you to cancel an existing export job, which may be useful for a number of reasons including if the export job did not complete or became stuck in the processing stage. In order to cancel an export job, you can perform a DELETE request to the `/export/jobs` endpoint and include the `id` of the export job that you wish to cancel to the request path.

**API format**

```http
DELETE /export/jobs/{EXPORT_JOB_ID}
```

| Property | Description |
| -------- | ----------- |
| `{EXPORT_JOB_ID}`| The `id` of the export job you want to access. |

**Request**

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/export/jobs/726 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

A successful delete request returns HTTP Status 204 (No Content) and an empty response body, indicating the cancel operation was successful. 

## Next Steps

Once the export has completed successfully, your data is available within the Data Lake in Experience Platform. You can then use the [Data Access API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/data-access-api.yaml) to access the data using the `batchId` associated with the export. Depending on the size of the export, the data may be in chunks and the batch may consist of several files.

For step-by-step instructions on how to use the Data Access API to access and download batch files, follow the [Data Access tutorial](../../data-access/tutorials/dataset-data.md).

You can also access successfully exported Real-time Customer Profile data using Adobe Experience Platform Query Service. Using the UI or RESTful API, Query Service allows you to write, validate, and run queries on data within the Data Lake.

For more information on how to query audience data, please review the [Query Service documentation](../../query-service/home.md).