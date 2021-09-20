---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Activate audience segments to your destinations using the Adobe Experience Platform API
description: Activate audience segments to your destinations using the Adobe Experience Platform API
topic-legacy: tutorial
type: Tutorial
hidefromtoc: yes
hide: yes
---

# Activate audience segments through ad-hoc activation API

## Overview

The ad-hoc activation API allows you to programatically create audience segments and activate them to batch destinations, on the fly.

>[!NOTE]
>
>Ad-hoc audience activation is only supported by batch destinations.

## Getting started {#getting-started}

### Prerequisites {#prerequisites}

Before you can make calls to the Adobe Experience Platform APIs, make sure you meet the following prerequisites:

* You have an IMS Organization account with access to Adobe Experience Platform.
* Your Experience Platform account has the `developer` and `user` roles enabled for the Adobe Experience Platform API product profile. Contact your [Admin Console](../../access-control/home.md) administrator to enable these roles for your account.
* You have an Adobe ID. If you do not have an Adobe ID, go to the [Adobe Developer Console](https://developer.adobe.com/console) and create a new account.

### Gather required credentials {#credentials}

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

*   Authorization: Bearer `{ACCESS_TOKEN}`
*   x-api-key: `{API_KEY}`
*   x-gw-ims-org-id: `{IMS_ORG}`

Resources in Experience Platform can be isolated to specific virtual sandboxes. In requests to Platform APIs, you can specify the name and ID of the sandbox that the operation will take place in. These are optional parameters.

*   x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in Experience Platform, see the [sandbox overview documentation](../../sandboxes/home.md).

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

*   Content-Type: `application/json`

### Swagger documentation {#swagger-docs}

You can find accompanying reference documentation for all the API calls in this tutorial in Swagger. See the [Flow Service API documentation on Adobe I/O](https://www.adobe.io/experience-platform-apis/references/flow-service/). We recommend that you use this tutorial and the Swagger documentation page in parallel.

### Create activation flow in the Platform UI {#activation-flow}

To activate segments ad-hoc to a destination, you must first have an activation flow configured for the chosen destination.

See the following tutorial for detailed instructions on how to configure an activation flow for your destinations: [Activate audience data to batch profile export destinations](../ui/activate-batch-profile-destinations.md).

## Run the segmentation job {#segmentation-job}

You can create a new segment job by making a POST request to the `/segment/jobs` endpoint and including in the body the ID of the segment definition from which you would like to create a new audience.

### API format

```http
POST /segment/jobs
```

### Request

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
| `segmentId` | The ID of the segment definition that you want to create a segment job for. These segment definitions can belong to different merge policies. More information about segment definitions can be found in the [segment definition endpoint guide](../../segmentation/api/segment-definitions.md). |

### Response

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


## Run the segment export job {#export-job}

Once the segmentation job has completed successfully, run the segment export job.

You can create a new export job by making a POST request to the `/export/jobs` endpoint.

### API format

```http
POST /export/jobs
```

### Request

The following request creates a new export job, configured by the parameters provided in the payload.

```shell
curl -X POST https://platform.adobe.io/data/core/ups/export/jobs \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
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
                "segmentId": "4afe34ae-8c98-4513-8a1d-67ccaa54bc05",
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
    "id": 12345,
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
    "imsOrgId": "{IMS_ORG}",
    "status": "NEW",
    "filter": {
        "segments": [
            {
                "segmentId": "4afe34ae-8c98-4513-8a1d-67ccaa54bc05",
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
        "dataSetId" : "{DATASET_ID}",
        "segmentPerBatch": true,
        "batches" : [
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

## Run the ad-hoc activation job {#activation-job}

Once the segment export job has completed, you can trigger the activation.

You can activate any number of segments on a single activation job.

>[!NOTE]
>
>You can run up to 20 activation jobs per day.

### Request

```shell

curl -X POST https://platform.adobe.io/data/core/activation/disflowprovider/adhocrun \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -d '
{
   "activationInfo":{
      "destinationId1":[
         "segmentId1",
         "segmentId2"
      ],
      "destinationId2":[
         "segmentId2",
         "segmentId3"
      ]
   },
   "exportId":[
      "exportid11",
      "exportid12"
   ]
}
```
