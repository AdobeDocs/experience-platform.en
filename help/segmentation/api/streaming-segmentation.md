---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;Segmentation Service;streaming segmentation;Streaming segmentation;Continuous evaluation;
solution: Experience Platform
title: Streaming segmentation
topic: developer guide
description: This document contains examples on how to use streaming segmentation with the Streaming Segmentation API.
---

# Evaluate events in near real-time with streaming segmentation 

>[!NOTE]
>
>The following document states how to use streaming segmentation using the API. For information on using streaming segmentation using the UI, please read the [streaming segmentation UI guide](../ui/streaming-segmentation.md).

Streaming segmentation on [!DNL Adobe Experience Platform] allows customers to do segmentation in near real-time while focusing on data richness. With streaming segmentation, segment qualification now happens as streaming data lands into [!DNL Platform], alleviating the need to schedule and run segmentation jobs. With this capability, most segment rules can now be evaluated as the data is passed into [!DNL Platform], meaning segment membership will be kept up-to-date without running scheduled segmentation jobs.

![](../images/api/streaming-segment-evaluation.png)

>[!NOTE]
>
>Streaming segmentation can only be used to evaluate data that is streamed into Platform. In other words, data ingested through batch ingestion will not be evaluated through streaming segmentation, and will be evaluated along with the nightly scheduled segmented job.

## Getting started

This developer guide requires a working understanding of the various [!DNL Adobe Experience Platform] services involved with streaming segmentation. Before beginning this tutorial, please review the documentation for the following services:

- [[!DNL Real-time Customer Profile]](../../profile/home.md): Provides a unified consumer profile in real-time, based on aggregated data from multiple sources.
- [[!DNL Segmentation]](../home.md): Provides the ability to create segments and audiences from your [!DNL Real-time Customer Profile] data.
- [[!DNL Experience Data Model (XDM)]](../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes customer experience data.

The following sections provide additional information that you will need to know in order to successfully make calls to [!DNL Platform] APIs.

### Reading sample API calls

This developer guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{IMS_ORG}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

- Content-Type: application/json

Additional headers may be required to complete specific requests. The correct headers are shown in each of the examples within this document. Please pay special attention to the sample requests in order to ensure that all required headers are included.

### Streaming segmentation enabled query types {#streaming-segmentation-query-types}

>[!NOTE]
>
>You will need to enable scheduled segmentation for the organization in order for streaming segmentation to work. Information about enabling scheduled segmentation can be found in the [enable scheduled segmentation section](#enable-scheduled-segmentation)

In order for a segment to be evaluated using streaming segmentation, the query must conform to the following guidelines.

| Query type | Details |
| ---------- | ------- |
| Incoming hit | Any segment definition that refers to a single incoming event with no time restriction. |
| Incoming hit within a relative time window | Any segment definition that refers to a single incoming event. |
| Profile only | Any segment definition that refers to only a profile attribute. |
| Incoming hit that refers to a profile | Any segment definition that refers to a single incoming event, with no time restriction, and one or more profile attributes. |
| Incoming hit that refers to a profile within a relative time window | Any segment definition that refers to a single incoming event and one or more profile attributes. |
| Multiple events that refer to a profile | Any segment definition that refers to multiple events **within the last 24 hours** and (optionally) has one or more profile attributes. |

A segment definition will **not** be enabled for streaming segmentation in the following scenarios:

- The segment definition includes Adobe Audience Manager (AAM) segments or traits.
- The segment definition includes multiple entities (multi-entity queries).

Additionally, some guidelines apply when doing streaming segmentation:

| Query type | Guideline |
| ---------- | -------- |
| Single event query | There are no limits to the lookback window. |
| Query with event history | <ul><li>The lookback window is limited to **one day**.</li><li>A strict time-ordering condition **must** exist between the events.</li><li>Queries with at least one negated event are supported. However, the entire event **cannot** be a negation.</li></ul>|

## Retrieve all segments enabled for streaming segmentation

You can retrieve a list of all your segments that are enabled for streaming segmentation within your IMS Organization by making a GET request to the `/segment/definitions` endpoint.

**API format**

To retrieve streaming-enabled segments, you must include the query parameter `evaluationInfo.continuous.enabled=true` in the request path.

```http
GET /segment/definitions?evaluationInfo.continuous.enabled=true
```

**Request**

```shell
curl -X GET \
  'https://platform.adobe.io/data/core/ups/segment/definitions?evaluationInfo.continuous.enabled=true' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns an array of segments in your IMS Organization that are enabled for streaming segmentation.

```json
{
    "segments": [
        {
            "id": "15063cb-2da8-4851-a2e2-bf59ddd2f004",
            "schema": {
                "name": "_xdm.context.profile"
            },
            "ttlInDays": 30,
            "imsOrgId": "{IMS_ORG_ID}",
            "sandbox": {
                "sandboxId": "",
                "sandboxName": "",
                "type": "production",
                "default": true
            },
            "name": " People who are NOT on their homepage ",
            "expression": {
                "type": "PQL",
                "format": "pql/text",
                "value": "select var1 from xEvent where var1._experience.analytics.endUser.firstWeb.webPageDetails.isHomePage = false"
            },
            "evaluationInfo": {
                "batch": {
                    "enabled": false
                },
                "continuous": {
                    "enabled": true
                },
                "synchronous": {
                    "enabled": false
                }
            },
            "creationTime": 1572029711000,
            "updateEpoch": 1572029712000,
            "updateTime": 1572029712000
        },
        {
            "id": "f15063cb-2da8-4851-a2e2-bf59ddd2f004",
            "schema": {
                "name": "_xdm.context.profile"
            },
            "ttlInDays": 30,
            "imsOrgId": "{IMS_ORG_ID}",
            "sandbox": {
                "sandboxId": "",
                "sandboxName": "",
                "type": "production",
                "default": true
            },
            "name": "Homepage_continuous",
            "description": "People who are on their homepage - continuous",
            "expression": {
                "type": "PQL",
                "format": "pql/text",
                "value": "select var1 from xEvent where var1._experience.analytics.endUser.firstWeb.webPageDetails.isHomePage = true"
            },
            "evaluationInfo": {
                "batch": {
                    "enabled": true
                },
                "continuous": {
                    "enabled": true
                },
                "synchronous": {
                    "enabled": false
                }
            },
            "creationTime": 1572021085000,
            "updateEpoch": 1572021086000,
            "updateTime": 1572021086000
        }
    ],
    "page": {
        "totalCount": 2,
        "totalPages": 1,
        "sortField": "creationTime",
        "sort": "desc",
        "pageSize": 2,
        "limit": 100
    },
    "link": {}
}
```

## Create a streaming-enabled segment

A segment will automatically be streaming-enabled if it matches one of the [streaming segmentation types listed above](#streaming-segmentation-query-types).

**API format**

```http
POST /segment/definitions
```

**Request**

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/segment/definitions \
  -H 'Authorization: Bearer {ACCESS_TOKEN}'  \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "schema": {
        "name": "_xdm.context.profile"
    },
    "ttlInDays": 30,
    "name": "Homepage_continuous",
    "description": "People who are on their homepage - continuous",
    "expression": {
        "type": "PQL",
        "format": "pql/text",
        "value": "select var1 from xEvent where var1._experience.analytics.endUser.firstWeb.webPageDetails.isHomePage = true"
    }
}'
```

>[!NOTE]
>
>This is a standard "create a segment" request. For more information about creating a segment definition, please read the tutorial on [creating a segment](../tutorials/create-a-segment.md).

**Response**

A successful response returns the details of the newly created streaming-enabled segment definition.

```json
{
    "id": "f15063cb-2da8-4851-a2e2-bf59ddd2f004",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "ttlInDays": 30,
    "imsOrgId": "{IMS_ORG}",
    "sandbox": {
        "sandboxId": "{SANDBOX_ID}",
        "sandboxName": "{SANDBOX_NAME}",
        "type": "production",
        "default": true
    },
    "name": "Homepage_continuous",
    "description": "People who are on their homepage - continuous",
    "expression": {
        "type": "PQL",
        "format": "pql/text",
        "value": "select var1 from xEvent where var1._experience.analytics.endUser.firstWeb.webPageDetails.isHomePage = true"
    },
    "evaluationInfo": {
        "batch": {
            "enabled": false
        },
        "continuous": {
            "enabled": true,
                   },
        "synchronous": {
            "enabled": false
        }
    },
    "creationTime": 1572021085000,
    "updateEpoch": 1572021086000,
    "updateTime": 1572021086000
}
```

## Enable scheduled evaluation {#enable-scheduled-segmentation}

Once streaming evaluation has been enabled, a baseline must be created (after which the segment will always be up-to-date). Scheduled evaluation (also known as scheduled segmentation) must first be enabled in order for the system to automatically perform baselining. With scheduled segmentation, your IMS Org can adhere to a recurring schedule to automatically run export jobs to evaluate segments.

>[!NOTE]
>
>Scheduled evaluation can be enabled for sandboxes with a maximum of five (5) merge policies for [!DNL XDM Individual Profile]. If your organization has more than five merge policies for [!DNL XDM Individual Profile] within a single sandbox environment, you will not be able to use scheduled evaluation.

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

## Next steps

Now that you have enabled both new and existing segments for streaming segmentation, and enabled scheduled segmentation to develop a baseline and perform recurring evaluations, you can begin to create segments for your organization. 

To learn how to perform similar actions and work with segments using the Adobe Experience Platform user interface, please visit the [Segment Builder user guide](../ui/segment-builder.md).