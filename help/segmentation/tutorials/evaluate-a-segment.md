---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Evaluate a segment
topic: tutorial
---

# Evaluate and access segment results

This document provides a tutorial for evaluating segments and accessing segment results using the [Segmentation API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/segmentation.yaml). 

## Getting started

This tutorial requires a working understanding of the various Adobe Experience Platform services involved in creating audience segments. Before beginning this tutorial, please review the documentation for the following services:

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

> [!NOTE] For more information on sandboxes in Platform, see the [sandbox overview documentation](../../sandboxes/home.md). 

All POST, PUT, and PATCH requests require an additional header:

- Content-Type: application/json

## Evaluate a segment

Once you have developed, tested, and saved your segment definition, you can then evaluate the segment through either scheduled evaluation or on-demand evaluation.

[Scheduled evaluation](#scheduled-evaluation) (also known as 'scheduled segmentation') allows you to create a recurring schedule for running an export job at a specific time, whereas [on-demand evaluation](#on-demand-evaluation) involves creating a segment job to build the audience immediately. Steps for each are outlined below.

If you have not yet completed the [Create a segment using the Real-time Customer Profile API](./create-a-segment.md) tutorial or created a segment definition using [Segment Builder](../ui/overview.md), please do so before proceeding with this tutorial.

## Scheduled evaluation

Through scheduled evaluation, your IMS Org can create a recurring schedule to automatically run export jobs.

> [!NOTE] Scheduled evaluation can be enabled for sandboxes with a maximum of five (5) merge policies for XDM Individual Profile. If your organization has more than five merge policies for XDM Individual Profile within a single sandbox environment, you will not be able to use scheduled evaluation.

### Create a schedule

By making a POST request to the `/config/schedules` endpoint, you can create a schedule and include the specific time when the schedule should be triggered.

**API format**

```http
POST /config/schedules
```

**Request**

The following request creates a new schedule based on the specifications provided in the payload.

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/config/schedules \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "name": "{SCHEDULE_NAME}",
        "type": "batch_segmentation",
        "properties": {
            "segments": ["*"]
        },
        "schedule": "0 0 1 * * ?",
        "state": "inactive"
        }'
```

| Property | Description |
| -------- | ----------- |
| `name` | **(Required)** The name of schedule. Must be a string. |
| `type` | **(Required)** The job type in string format. The supported types are `batch_segmentation` and `export`. |
| `properties` | **(Required)** An object containing additional properties related to the schedule. |
| `properties.segments` | **(Required when `type` equals `batch_segmentation`)** Using `["*"]` ensures all segments are included. |
| `schedule` | **(Required)** A string containing the job schedule. Jobs can only be scheduled to run once a day, meaning you cannot schedule a job to run more than once during a 24 hour period. The example shown (`0 0 1 * * ?`) means the job is triggered every day at 1:00:00 UTC. For more information, please review the [cron expression format](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) documentation. |
| `state` | *(Optional)* String containing the schedule state. Available values: `active` and `inactive`. Default value is `inactive`. An IMS Organization can only create one schedule. Steps for updating the schedule are available later in this tutorial. |

**Response**

A successful response returns the details of the newly created schedule.

```json
{
    "id": "cd585edf-962d-420d-94ad-3be03e619ac2",
    "imsOrgId": "{IMS_ORG}",
    "sandbox": {
        "sandboxId": "e7e17720-c5bb-11e9-aafb-87c71c35cac8",
        "sandboxName": "prod",
        "type": "production",
        "default": true
    },
    "name": "{SCHEDULE_NAME}",
    "state": "inactive",
    "type": "batch_segmentation",
    "schedule": "0 0 1 * * ?",
    "properties": {
        "segments": [
            "*"
        ]
    },
    "createEpoch": 1568267948,
    "updateEpoch": 1568267948
}
```

### Enable a schedule

By default, a schedule is inactive when created unless the `state` property is set to `active` in the create (POST) request body. You can enable a schedule (set the `state` to `active`) by making a PATCH request to the `/config/schedules` endpoint and including the ID of the schedule in the path.

**API format**

```http
POST /config/schedules/{SCHEDULE_ID}
```

**Request**

The following request uses [JSON Patch formatting](http://jsonpatch.com/) in order to update the `state` of the schedule to `active`.

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/config/schedules/cd585edf-962d-420d-94ad-3be03e619ac2 \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '[
        {
          "op": "add",
          "path": "/state",
          "value": "active"
        }
      ]'
```

**Response**

A successful update returns an empty response body and HTTP Status 204 (No Content).

The same operation can be used to disable a schedule by replacing the "value" in the previous request with "inactive".

### Update the schedule time

Schedule timing can be updated by making a PATCH request to the `/config/schedules` endpoint and including the ID of the schedule in the path.

**API format**

```http
POST /config/schedules/{SCHEDULE_ID}
```

**Request**

The following request uses [JSON Patch formatting](http://jsonpatch.com/) in order to update the [cron expression](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) for the schedule. In this example, the schedule would now be triggered at 10:15:00 UTC.

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/config/schedules/cd585edf-962d-420d-94ad-3be03e619ac2 \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '[
        {
          "op": "add",
          "path": "/schedule",
          "value": "0 15 10 * * ?"
        }
      ]'
```

**Response**

A successful update returns an empty response body and HTTP Status 204 (No Content).

## On-demand evaluation

On-demand evaluation allows you to create a segment job in order to generate an audience segment whenever you require it. Unlike scheduled evaluation, this will happen only when requested and is not recurring.

### Create a segment job

A segment job is an asynchronous process that creates a new audience segment. It references a segment definition, as well as any merge policies controlling how Real-time Customer Profile merges overlapping attributes across your profile fragments. When a segment job successfully completes, you can gather various information about the segment, such as any errors that may have occurred during processing and the ultimate size of your audience.

You can create a new segment job by making a POST request to the `/segment/jobs` endpoint in the Real-time Customer Profile API.

**API format**

```http
POST /segment/jobs
```

**Request**

The following request creates a new segment job based on the two segment definitions provided in the payload.

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/segment/jobs \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '[
        {
          "segmentId" : "42f49f2d-edb0-474f-b29d-2799d89cd5a6"
        },
        {
          "segmentId" : "54a20f19-9a0w-293a-9b82-409b1p3v0192"
        }
    ]'
```

| Property | Description |
| -------- | ----------- |
| `segmentId` | The identifier of a segment definition from which to build the audience. At least one segment ID must be supplied in the payload array. |

**Response**

A successful response returns the details of the newly created segment job, including its `id`, a read-only, system-generated value that is unique to this segment job.

```json
{
    "profileInstanceId": "ups",
    "computeJobId": 1,
    "id": "b0f99dde-6d3b-4d92-aa92-28072ded71a0",
    "status": "PROCESSING",
    "segments": [
        {
            "segmentId": "42f49f2d-edb0-474f-b29d-2799d89cd5a6",
            "segment": {
                "id": "42f49f2d-edb0-474f-b29d-2799d89cd5a6",
                "version": 1,
                "expression": {
                    "type": "PQL",
                    "format": "pql/text",
                    "value": "homeAddress.country = \"US\""
                },
                "mergePolicy": {
                    "id": "mpid1",
                    "version": 1
                }
            }
        },
        {
            "segmentId": "54a20f19-9a0w-293a-9b82-409b1p3v0192",
            "segment": {
                "id": "54a20f19-9a0w-293a-9b82-409b1p3v0192",
                "version": 1,
                "expression": {
                    "type": "PQL",
                    "format": "pql/text",
                    "value": "homeAddress.country = \"US\""
                },
                "mergePolicy": {
                    "id": "mpid1",
                    "version": 1
                }
            }
        }
    ],
    "updateTime": 1533581808162,
    "imsOrgId": "{IMS_ORG}",
    "creationTime": 1533581808162,
    "_links": {
        "cancel": {
            "href": "/segment/jobs/b0f99dde-6d3b-4d92-aa92-28072ded71a0",
            "method": "DELETE"
        },
        "checkStatus": {
            "href": "/segment/jobs/b0f99dde-6d3b-4d92-aa92-28072ded71a0",
            "method": "GET"
        }
    }
}
```

| Property | Description |
| -------- | ----------- |
| `id` | The identifier of the new segment job, used for lookup purposes. |
| `status` | The current status of the segment job. Will be "PROCESSING" until processing is complete, at which point it becomes "SUCCEEDED" or "FAILED". |

### Look up segment job status

You can use the `id` for a specific segment job to perform a lookup request (GET) in order to view the current status of the job.

**API format**

```http
GET /segment/jobs/{SEGMENT_JOB_ID}
```

| Property | Description |
| -------- | ----------- |
| `{SEGMENT_JOB_ID}` | The `id` of the segment job you want to access. |

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/segment/jobs/80388706-29fa-40d3-81cf-a297d0224ad9 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

A successful response returns the details of the segmentation job, and will provide different information depending on the job's current status. You can repeat the lookup request until the `status` reaches "SUCCEEDED", at which time you can export the segment to a dataset.


```json
{
    "profileInstanceId": "ups",
    "errors": [],
    "computeJobId": 13377,
    "modelName": "_xdm.context.profile",
    "id": "80388706-29fa-40d3-81cf-a297d0224ad9",
    "status": "SUCCEEDED",
    "segments": [
        {
            "segmentId": "b560a09a-de85-4a1c-8477-2f3da1d9e86b",
            "segment": {
                "id": "b560a09a-de85-4a1c-8477-2f3da1d9e86b",
                "version": 1,
                "expression": {
                    "type": "PQL",
                    "format": "pql/json",
                    "value": "homeAddress.country = \"US\""
                },
                "mergePolicy": {
                    "id": "0bf16e61-90e9-4204-b8fa-ad250360957b",
                    "version": 1
                }
            }
        }
    ],
    "requestId": "prgu92v4VNvsGuuXticcsqX96UXGjXtS",
    "computeGatewayJobId": "a7c33b77-3aeb-497f-bc88-807915c57b5f",
    "metrics": {
        "totalTime": {
            "startTimeInMs": 1547063631503,
            "endTimeInMs": 1547063731181,
            "totalTimeInMs": 99678
        },
        "profileSegmentationTime": {
            "startTimeInMs": 1547063669001,
            "endTimeInMs": 1547063720887,
            "totalTimeInMs": 51886
        },
        "segmentedProfileCounter": {
            "ca763983-5572-4ea4-809c-b7dff7e0d79b": 4195,
            "251e3a1f-645c-4444-836b-18e6b668bdf8": 0,
            "3da8bad9-29fb-40e0-b39e-f80322e964de": 0,
            "30230300-ccf1-48ad-8012-c5563a007069": 0
        },
        "segmentedProfileByNamespaceCounter": {
            "ca763983-5572-4ea4-809c-b7dff7e0d79b": {
                "email": 4195
            },
            "251e3a1f-645c-4444-836b-18e6b668bdf8": {},
            "3da8bad9-29fb-40e0-b39e-f80322e964de": {},
            "30230300-ccf1-48ad-8012-c5563a007069": {}
        }     
    },
    "updateTime": 1547063731181,
    "imsOrgId": "{IMS_ORG}",
    "creationTime": 1547063631503,
    "_links": {
        "cancel": {
            "href": "/segment/jobs/80388706-29fa-40d3-81cf-a297d0224ad9",
            "method": "DELETE"
        },
        "checkStatus": {
            "href": "/segment/jobs/80388706-29fa-40d3-81cf-a297d0224ad9",
            "method": "GET"
        }
    }
}
```

| Property | Description |
| -------- | ----------- |
| `segmentedProfileCounter` | The total number of merged profiles which qualify for the segment. |
| `segmentedProfileByNamespaceCounter` | A breakdown of the profiles that qualify for the segment by identity namespace code. A list of identity namespace codes can be found in the [identity namespace overview](../../identity-service/namespaces.md). |

## Interpret segment results

When segment jobs are successfully run, the `segmentMembership` map is updated for each profile included within the segment. `segmentMembership` also stores any pre-evaluated audience segments that are ingested into Platform, allowing for integration with other solutions like Adobe Audience Manager.

The following example shows what the `segmentMembership` attribute looks like for each individual profile record:

```json
{
  "segmentMembership": {
    "UPS": {
      "04a81716-43d6-4e7a-a49c-f1d8b3129ba9": {
        "timestamp": "2018-04-26T15:52:25+00:00",
        "status": "existing"
      },
      "53cba6b2-a23b-454a-8069-fc41308f1c0f": {
        "lastQualificationTime": "2018-04-26T15:52:25+00:00",
        "status": "realized"
      }
    },
    "Email": {
      "abcd@adobe.com": {
        "lastQualificationTime": "2017-09-26T15:52:25+00:00",
        "status": "exited"
      }
    }
  }
}
```

| Property | Description |
| -------- | ----------- |
| `lastQualificationTime` | The timestamp when the assertion of segment membership was made and the profile entered or exited the segment. |
| `status` | The status of segment participation as part of the current request. Must be equal to one of the following known values: <ul><li>`existing`: Entity continues to be in the segment.</li><li>`realized`: Entity is entering the segment.</li><li>`exited`: Entity is exiting the segment.</li></ul> |

## Access segment results

The results of a segment job can be accessed in one of two ways: you can access individual profiles or export an entire audience to a dataset.

The following sections outline these options in more detail.

## Look up a profile 

If you know the specific profile that you would like to access, you can do so using the Real-time Customer Profile API. The complete steps for accessing individual profiles are available in the [Access Real-time Customer Profile data using the Profile API](../../profile/api/entities.md) tutorial.

## Export a segment

After a segmentation job has successfully completed (the value of the `status` attribute is "SUCCEEDED"), you can export your audience to a dataset where it can be accessed and acted upon. 

The following steps are required to export your audience:

- [Create a target dataset](#create-a-target-dataset) - Create the dataset to hold audience members.
- [Generate audience profiles in the dataset](#generate-profiles-for-audience-members) - Populate the dataset with XDM Individual Profiles based on the results of a segment job.
- [Monitor export progress](#monitor-export-progress) - Check the current progress of the export process. 
- [Read audience data](#next-steps) - Retrieve the resulting XDM Individual Profiles representing the members of your audience.

### Create a target dataset

When exporting an audience, a target dataset must first be created. It is important that the dataset be configured correctly to ensure the export is successful. 

One of the key considerations is the schema upon which the dataset is based (`schemaRef.id` in the API sample request below). In order to export a segment, the dataset must be based on the XDM Individual Profile Union Schema (`https://ns.adobe.com/xdm/context/profile__union`). A union schema is a system-generated, read-only schema that aggregates the fields of schemas which share the same class, in this case that is the XDM Individual Profile class. For more information on union view schemas, please see the [Real-time Customer Profile section of the Schema Registry developer guide](../../xdm/api/getting-started.md).

There are two ways to create the necessary dataset:

- **Using APIs:** The steps that follow in this tutorial outline how to create a dataset that references the XDM Individual Profile Union Schema using the Catalog API. 
- **Using the UI:** To use the Adobe Experience Platform user interface to create a dataset that references the union schema, follow the steps in the [UI tutorial](../ui/overview.md) and then return to this tutorial to proceed with the steps for [generating audience profiles](#generate-xdm-profiles-for-audience-members).

If you already have a compatible dataset and know its ID, you can proceed directly to the step for [generating audience profiles](#generate-xdm-profiles-for-audience-members).

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
    "name": "Segment Export",
    "schemaRef": {
        "id": "https://ns.adobe.com/xdm/context/profile__union",
        "contentType": "application/vnd.adobe.xed+json;version=1"
    },
    "fileDescription": {
        "persisted": true,
        "containerFormat": "parquet",
        "format": "parquet"
    }
}'
```

| Property | Description |
| -------- | ----------- |
| `name` | A descriptive name for the dataset. |
| `schemaRef.id` | The ID of the union view (schema) that the dataset will be associated with. |
| `fileDescription.persisted` | A Boolean value that when set to `true`, enables the dataset to persist in the union view. |

**Response**

A successful response returns an array containing the read-only, system-generated unique ID of the newly created dataset. A properly configured dataset ID is required in order to successfully export audience members.

```json
[
  "@/datasets/5b020a27e7040801dedba61b"
] 
```

### Generate profiles for audience members

Once you have a union-persisting dataset, you can create an export job to persist the audience members to the dataset by making a POST request to the `/export/jobs` endpoint in the Real-time Customer Profile API and providing the dataset ID and the segment information for the segments that you wish to export.

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
| `fields` | *(Optional)* Limits the data fields to be included in the export to only those provided in this parameter. The same parameter is also available when creating a segment, therefore the fields in the segment may have already been filtered. Omitting this value will result in all fields being included in the exported data |
| `mergePolicy` | *(Optional)* Specifies the merge policy to govern the exported data. Include this parameter when there are multiple segments being exported. Omitting this value will cause the Export Service to use the merge policy provided by the segment. |
`mergePolicy.id` | The ID of the merge policy |
| `mergePolicy.version` | The specific version of the merge policy to use. Omitting this value will default to the most recent version. |
| `filter` | *(Optional)* Specifies one or more of the following filters to apply to the segment before export: |
| `filter.segments` | *(Optional)* Specifies the segments to export. Omitting this value will result in all data from all profiles being exported. Accepts an array of segment objects, each containing the following fields: |
| `filter.segments.segmentId` | **(Required if using `segments`)** Segment ID for profiles to be exported. |
| `filter.segments.segmentNs` | *(Optional)* Segment namespace for the given `segmentID`. |
| `filter.segments.status` | *(Optional)* An array of strings providing a status filter for the `segmentID`. By default, `status` will have the value `["realized", "existing"]` which represents all profiles that fall into the segment at the current time. Possible values include: `"realized"`, `"existing"`, and `"exited"`. |
| `filter.segmentQualificationTime` | *(Optional)* Filter based on segment qualification time. The start time and/or end time can be provided. |
| `filter.segmentQualificationTime.startTime` | *(Optional)* Segment qualification start time for a segment ID for a given status. It not provided, there will be no filter on the start time for a segment ID qualification. The timestamp must be provided in [RFC 3339](https://tools.ietf.org/html/rfc3339) format. |
| `filter.segmentQualificationTime.endTime` | *(Optional)* Segment qualification end time for a segment ID for a given status. It not provided, there will be no filter on the end time for a segment ID qualification. The timestamp must be provided in [RFC 3339](https://tools.ietf.org/html/rfc3339) format. |
| `filter.fromIngestTimestamp` | *(Optional)* Limits exported profiles to only include those that have been updated after this timestamp. The timestamp must be provided in [RFC 3339](https://tools.ietf.org/html/rfc3339) format. |
| `filter.fromIngestTimestamp` for **profiles**, if provided | Includes all the merged profiles where merged updated timestamp is greater than the given timestamp. Supports `greater_than` operand. |
| `filter.fromTimestamp` for events | All events ingested after this timestamp will be exported corresponding to resultant profile result. This is not the event time itself but the ingestion time for the events. |
| `filter.emptyProfiles` | *(Optional)* Boolean. Profiles can contain Profile records, ExperienceEvent records, or both. Profiles with no Profile records and only ExperienceEvent records are referred to as "emptyProfiles". To export all profiles in the Profile store, including the "emptyProfiles", set the value of `emptyProfiles` to `true`. If `emptyProfiles` is set to `false`, only profiles with Profile records in the store are exported. By default, if `emptyProfiles` attribute is not included, only profiles containing Profile records are exported. |
| `additionalFields.eventList` | *(Optional)* Controls the time series event fields exported for child or associated objects by providing one or more of the following settings: |
| `additionalFields.eventList.fields` | Control the fields to export. |
| `additionalFields.eventList.filter` | Specifies criteria that limits the results included from associated objects. Expects a minimum value required for export, typically a date. |
| `additionalFields.eventList.filter.fromIngestTimestamp` | Filters time series events to those that have been ingested after the provided timestamp. This is not the event time itself but the ingestion time for the events. |
| `destination` | **(Required)** Destination information for the exported data |
| `destination.datasetId` | **(Required)** The ID of the dataset where data is to be exported. |
| `destination.segmentPerBatch` | *(Optional)* A Boolean value that, if not provided, defaults to `false`. A value of `false` exports all segment IDs into a single batch ID. A value of `true` exports one segment ID into one batch ID. Note that setting the value to be `true` may affect batch export performance. |
| `schema.name` | **(Required)** The name of the schema associated with the dataset where data is to be exported. |

**Response**

A successful response returns a dataset populated with profiles that qualified for the last completed run of the segment job. Any profiles that may have previously existed in the dataset but did not qualify for the segment during the last completed run of the segment job, have been removed.

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

### List all export jobs

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

### Monitor export progress

As an export job processes, you can monitor its status by making a GET request to the `/export/jobs` endpoint and including the `id` of the export job in the path. The export job is complete once the `status` field returns the value "SUCCEEDED".

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
| `batchId` | The identifier of the batches created from a successful export, to be used for lookup purposes when reading audience data. |

## Next steps

Once the export has completed successfully, your data is available within the Data Lake in Experience Platform. You can then use the [Data Access API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/data-access-api.yaml) to access the data using the `batchId` associated with the export. Depending on the size of the segment, the data may be in chunks and the batch may consist of several files.

For step-by-step instructions on how to use the Data Access API to access and download batch files, follow the [Data Access tutorial](../../data-access/tutorials/dataset-data.md).

You can also access successfully exported segment data using Adobe Experience Platform Query Service. Using the UI or RESTful API, Query Service allows you to write, validate, and run queries on data within the Data Lake.

For more information on how to query audience data, please review the [Query Service documentation](../../query-service/home.md).
