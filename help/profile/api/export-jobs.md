---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
title: Profile Export Jobs API Endpoint
type: Documentation
description: Real-Time Customer Profile enables you to build a single view of individual customers within Adobe Experience Platform by bringing together data from multiple sources, including both attribute data and behavioral data. Profile data can then be exported to a dataset for further processing.
exl-id: d51b1d1c-ae17-4945-b045-4001e4942b67
---
# Profile export jobs endpoint

[!DNL Real-Time Customer Profile] enables you to build a single view of individual customers by bringing together data from multiple sources, including both attribute data and behavioral data. Profile data can then be exported to a dataset for further processing. For example, audience segments from [!DNL Profile] data can be exported for activation, and profile attributes can be exported for reporting.

This document provides step-by-step instructions for creating and managing export jobs using the [Profile API](https://www.adobe.com/go/profile-apis-en).

>[!NOTE]
>
>This guide covers the use of export jobs in the [!DNL Profile API]. For information on how to manage export jobs for Adobe Experience Platform Segmentation Service, see the guide on [export jobs in the Segmentation API](../../profile/api/export-jobs.md).

In addition to creating an export job, you can also access [!DNL Profile] data using the `/entities` endpoint, also known as "[!DNL Profile Access]". See the [entities endpoint guide](./entities.md) for more information. For steps on how to access [!DNL Profile] data using the UI, refer to the [user guide](../ui/user-guide.md).

## Getting started

The API endpoints used in this guide are part of the [!DNL Real-Time Customer Profile] API. Before continuing, please review the [getting started guide](getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any [!DNL Experience Platform] API.

## Create an export job

Exporting [!DNL Profile] data requires first creating a dataset into which the data will be exported, then initiating a new export job. Both of these steps can be achieved using Experience Platform APIs, with the former using the Catalog Service API and the latter using the Real-Time Customer Profile API. Detailed instructions for completing each step are outlined in the sections that follow.

### Create a target dataset

When exporting [!DNL Profile] data, a target dataset must first be created. It is important that the dataset be configured correctly to ensure the export is successful. 

One of the key considerations is the schema upon which the dataset is based (`schemaRef.id` in the API sample request below). In order to export profile data, the dataset must be based on the [!DNL XDM Individual Profile] Union Schema (`https://ns.adobe.com/xdm/context/profile__union`). A union schema is a system-generated, read-only schema that aggregates the fields of schemas which share the same class. In this case, that is the [!DNL XDM Individual Profile] class. For more information on union view schemas, please see the [union section in the basics of schema composition guide](../../xdm/schema/composition.md#union).

The steps that follow in this tutorial outline how to create a dataset that references the [!DNL XDM Individual Profile] Union Schema using the [!DNL Catalog] API. You may also use the [!DNL Platform] user interface to create a dataset that references the union schema. Steps for using the UI are outlined in [this UI tutorial for exporting segments](../../segmentation/tutorials/create-dataset-export-segment.md) but are applicable here as well. Once completed, you can return to this tutorial to proceed with the steps for [initiating a new export job](#initiate).

If you already have a compatible dataset and know its ID, you can proceed directly to the step for [initiating a new export job](#initiate).

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
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "name": "Profile Data Export",
        "schemaRef": {
          "id": "https://ns.adobe.com/xdm/context/profile__union",
          "contentType": "application/vnd.adobe.xed+json;version=1"
        }
      }'
```

| Property | Description |
| -------- | ----------- |
| `name` | A descriptive name for the dataset. |
| `schemaRef.id` | The ID of the union view (schema) that the dataset will be associated with. |

**Response**

A successful response returns an array containing the read-only, system-generated, unique ID of the newly created dataset. A properly configured dataset ID is required in order to successfully export Profile data.

```json
[
  "@/datasets/5b020a27e7040801dedba61b"
] 
```

### Initiate export job {#initiate}

Once you have a union-persisting dataset, you can create an export job to persist the Profile data to the dataset by making a POST request to the `/export/jobs` endpoint in the Real-Time Customer Profile API and providing the details of the data you wish to export in the body of the request.

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
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "fields": "identities.id,personalEmail.address",
    "mergePolicy": {
      "id": "e5bc94de-cd14-4cdf-a2bc-88b6e8cbfac2",
      "version": 1
    },
    "additionalFields": {
      "eventList": {
        "fields": "environment.browserDetails.name,environment.browserDetails.version",
        "filter": {
          "fromIngestTimestamp": "2018-10-25T13:22:04-07:00"
        }
      }
    }
    "destination": {
      "datasetId": "5b020a27e7040801dedba61b",
      "segmentPerBatch": false
    },
    "schema": {
      "name": "_xdm.context.profile"
    }
  }' 
```

| Property | Description |
| -------- | ----------- |
| `fields` | *(Optional)* Limits the data fields to be included in the export to only those provided in this parameter. Omitting this value will result in all fields being included in the exported data. |
| `mergePolicy` | *(Optional)* Specifies the merge policy to govern the exported data. Include this parameter when there are multiple segments being exported. |
| `mergePolicy.id` | The ID of the merge policy. |
| `mergePolicy.version` | The specific version of the merge policy to use. Omitting this value will default to the most recent version.|
| `additionalFields.eventList` | *(Optional)* Controls the time-series event fields exported for child or associated objects by providing one or more of the following settings:<ul><li>`eventList.fields`: Control the fields to export.</li><li>`eventList.filter`: Specifies criteria that limits the results included from associated objects. Expects a minimum value required for export, typically a date.</li><li>`eventList.filter.fromIngestTimestamp`: Filters time-series events to those that have been ingested after the provided timestamp. This is not the event time itself but the ingestion time for the events.</li></ul> |
| `destination` | **(Required)** Destination information for the exported data:<ul><li>`destination.datasetId`: **(Required)** The ID of the dataset where data is to be exported.</li><li>`destination.segmentPerBatch`: *(Optional)* A Boolean value that, if not provided, defaults to `false`. A value of `false` exports all segment IDs into a single batch ID. A value of `true` exports one segment ID into one batch ID. Note that setting the value to be `true` may affect batch export performance.</li></ul> |
| `schema.name` | **(Required)** The name of the schema associated with the dataset where data is to be exported. |

>[!NOTE]
>
>To export only Profile data and not include related time-series data, remove the "additionalFields" object from the request.

**Response**

A successful response returns a dataset populated with Profile data as specified in the request.

```json
{
    "profileInstanceId": "ups",
    "jobType": "BATCH",
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
      "dataSetId": "5cf6bcf79ecc7c14530fe436",
      "segmentPerBatch": false,
      "batchId": "da5cfb4de32c4b93a09f7e37fa53ad52"
    },
    "updateTime": 1559674261868,
    "imsOrgId": "{ORG_ID}",
    "creationTime": 1559674261657
}
```

## List all export jobs

You can return a list of all export jobs for a particular IMS Organization by performing a GET request to the `export/jobs` endpoint. The request also supports the query parameters `limit` and `offset`, as shown below.

**API format**

```http
GET /export/jobs
GET /export/jobs?{QUERY_PARAMETERS}
```

| Parameter | Description |
| -------- | ----------- |
| `start` | Offset the page of results returned, as per the create time of the request. Example: `start=4` |
| `limit` | Limit the number of results returned. Example: `limit=10` |
| `page` | Return a specific page of results, as per the create time of the request. Example: `page=2` |
| `sort` | Sort results by a specific field in ascending ( **`asc`** ) or descending ( **`desc`** ) order. The sort parameter does not work when returning multiple pages of results. Example: `sort=updateTime:asc` |

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/export/jobs/ \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}'
  -H 'x-sandbox-name: {SANDBOX_NAME}' 
```

**Response**

The response includes a `records` object containing the export jobs created by your IMS Organization.

```json
{
  "records": [
    {
      "profileInstanceId": "ups",
      "jobType": "BATCH",
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
      "imsOrgId": "{ORG_ID}",
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
      "imsOrgId": "{ORG_ID}",
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

| Parameter | Description |
| -------- | ----------- |
| `{EXPORT_JOB_ID}` | The `id` of the export job you want to access. |

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/export/jobs/24115 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

```json
{
    "profileInstanceId": "ups",
    "jobType": "BATCH",
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
      "dataSetId": "5cf6bcf79ecc7c14530fe436",
      "segmentPerBatch": false,
      "batchId": "da5cfb4de32c4b93a09f7e37fa53ad52"
    },
    "updateTime": 1559674261868,
    "imsOrgId": "{ORG_ID}",
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

| Parameter | Description |
| -------- | ----------- |
| `{EXPORT_JOB_ID}`| The `id` of the export job you want to access. |

**Request**

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/export/jobs/726 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful delete request returns HTTP Status 204 (No Content) and an empty response body, indicating the cancel operation was successful. 

## Next steps

Once the export has completed successfully, your data is available within the Data Lake in Experience Platform. You can then use the [Data Access API](https://www.adobe.io/experience-platform-apis/references/data-access/) to access the data using the `batchId` associated with the export. Depending on the size of the export, the data may be in chunks and the batch may consist of several files.

For step-by-step instructions on how to use the Data Access API to access and download batch files, follow the [Data Access tutorial](../../data-access/tutorials/dataset-data.md).

You can also access successfully exported Real-Time Customer Profile data using Adobe Experience Platform Query Service. Using the UI or RESTful API, Query Service allows you to write, validate, and run queries on data within the Data Lake.

For more information on how to query audience data, please review the [Query Service documentation](../../query-service/home.md).

## Appendix

The following section contains additional information regarding export jobs in the Profile API.

### Additional export payload examples

The example API call shown in the section on [initiating an export job](#initiate) creates a job that contains both profile (record) and event (time-series) data. This section provides additional request payload examples to limit your export to contain one data type or the other.

The following payload creates an export job that only contains profile data (no events):

```json
{
    "fields": "identities.id,personalEmail.address",
    "mergePolicy": {
      "id": "e5bc94de-cd14-4cdf-a2bc-88b6e8cbfac2",
      "version": 1
    },
    "destination": {
      "datasetId": "5b020a27e7040801dedba61b",
      "segmentPerBatch": false
    },
    "schema": {
      "name": "_xdm.context.profile"
    }
  }
```

To create an export job that only contains event data (no profile attributes), the payload may look similar to the following:

```json
{
    "fields": "identityMap",
    "mergePolicy": {
      "id": "e5bc94de-cd14-4cdf-a2bc-88b6e8cbfac2",
      "version": 1
    },
    "additionalFields": {
      "eventList": {
        "fields": "environment.browserDetails.name,environment.browserDetails.version",
        "filter": {
          "fromIngestTimestamp": "2018-10-25T13:22:04-07:00"
        }
      }
    },
    "destination": {
      "datasetId": "5b020a27e7040801dedba61b",
      "segmentPerBatch": false
    },
    "schema": {
      "name": "_xdm.context.profile"
    }
  }
```

### Exporting segments

You can also use the export jobs endpoint to export audience segments instead of [!DNL Profile] data. See the guide on [export jobs in the Segmentation API](../../segmentation/api/export-jobs.md) for more information.
