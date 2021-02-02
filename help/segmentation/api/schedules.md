---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;Segmentation Service;schedules;schedule;api;API;
solution: Experience Platform
title: Schedules Endpoint
topic: developer guide
description: Schedules are a tool that can be used to automatically run batch segmentation jobs once a day.
---

# Schedules endpoint

Schedules are a tool that can be used to automatically run batch segmentation jobs once a day. You can use the `/config/schedules` endpoint to retrieve a list of schedules, create a new schedule, retrieve details of a specific schedule, update a specific schedule, or delete a specific schedule. 

## Getting started

The endpoints used in this guide are part of the [!DNL Adobe Experience Platform Segmentation Service] API. Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including required headers and how to read example API calls.

## Retrieve a list of schedules {#retrieve-list}

You can retrieve a list of all schedules for your IMS Organization by making a GET request to the `/config/schedules` endpoint.

**API format**

The `/config/schedules` endpoint supports several query parameters to help filter your results. While these parameters are optional, their use is strongly recommended to help reduce expensive overhead. Making a call to this endpoint with no parameters will retrieve all schedules available for your organization. Multiple parameters can be included, separated by ampersands (`&`). 

```http
GET /config/schedules
GET /config/schedules?start={START}
GET /config/schedules?limit={LIMIT}
```

| Parameter | Description |
| --------- | ----------- |
| `{START}` | Specifies which page the offset will start from. By default, this value will be 0. |
| `{LIMIT}` | Specifies the number of schedules returned. By default, this value will be 100. |

**Request**

The following request will retrieve the last ten schedules posted within your IMS Organization.

```shell
curl -X GET https://platform.adobe.io/data/core/ups/config/schedules?limit=10 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with a list of schedules for the specified IMS organization as JSON. 

>[!NOTE]
>
>The following response has been truncated for space, and shows only the first schedule returned.

```json
{
    "_page": {
        "totalCount": 10,
        "pageSize": 1
    },
    "children": [
        {
            "id": "4e538382-dbd8-449e-988a-4ac639ebe72b",
            "imsOrgId": "{IMS_ORG}",
            "sandbox": {
                "sandboxId": "28e74200-e3de-11e9-8f5d-7f27416c5f0d",
                "sandboxName": "prod",
                "type": "production",
                "default": true
            },
            "name": "Batch Segmentation",
            "state": "active",
            "type": "batch_segmentation",
            "schedule": "0 0 1 * * ?",
            "properties": {
                "segments": []
            },
            "createEpoch": 1573158851,
            "updateEpoch": 1574365202
        }
    ],
    "_links": {
        "next": {}
    }
}
```

| Property | Description  |
| -------- | ------------ |
| `_page.totalCount` | The total number of schedules returned. |
| `_page.pageSize` | The size of the page of schedules. |
| `children.name` | The name of the schedule as a string. |
| `children.type` | The type of job as a string. The two supported types are "batch_segmentation" and "export". |
| `children.properties` | An object containing additional properties related to the schedule. |
| `children.properties.segments` | Using `["*"]` ensures all segments are included. |
| `children.schedule` | A string containing the job schedule. Jobs can only be scheduled to run once a day, meaning you cannot schedule a job to run more than once during a 24-hour period. For more information about cron schedules, please read the [cron expression format](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) documentation. In this example, "0 0 1 * *" means that this schedule will run at midnight on the first of every month. |
| `children.state` | A string containing the schedule state. The two supported states are "active" and "inactive". By default, the state is set to "inactive". |

## Create a new schedule {#create}

You can create a new schedule by making a POST request to the `/config/schedules` endpoint.

**API format**

```http
POST /config/schedules
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/core/ups/config/schedules \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '
{
    "name":"profile-default",
    "type":"batch_segmentation",
    "properties":{
        "segments":[
            "*"
        ]
    },
    "schedule":"0 0 1 * * ?",
    "state":"inactive"
}'
```

| Property | Description  |
| -------- | ------------ |
| `name` | **Required.** The name of the schedule as a string. |
| `type` | **Required.** The type of job as a string. The two supported types are "batch_segmentation" and "export". |
| `properties` | **Required.** An object containing additional properties related to the schedule. |
| `properties.segments` | **Required when `type` equals "batch_segmentation".** Using `["*"]` ensures all segments are included. |
| `schedule` | *Optional.* A string containing the job schedule. Jobs can only be scheduled to run once a day, meaning you cannot schedule a job to run more than once during a 24-hour period. For more information about cron schedules, please read the [cron expression format](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) documentation. In this example, "0 0 1 * *" means that this schedule will run at midnight on the first of every month. <br><br>If this string is not supplied, a system-generated schedule will be automatically generated. |
| `state` | *Optional.* A string containing the schedule state. The two supported states are "active" and "inactive". By default, the state is set to "inactive". |

**Response**

A successful response returns HTTP status 200 with details of your newly created schedule.

```json
{
    "id": "4e538382-dbd8-449e-988a-4ac639ebe72b",
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

## Retrieve a specific schedule {#get}

You can retrieve detailed information about a specific schedule by making a GET request to the `/config/schedules` endpoint and providing the ID of the schedule you wish to retrieve in the request path.

**API format**

```http
GET /config/schedules/{SCHEDULE_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{SCHEDULE_ID}` | The `id` value of the schedule you want to retrieve. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/core/ups/config/schedules/4e538382-dbd8-449e-988a-4ac639ebe72b
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with detailed information about the specified schedule.

```json
{
    "id": "4e538382-dbd8-449e-988a-4ac639ebe72b",
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

| Property | Description  |
| -------- | ------------ |
| `name` | The name of the schedule as a string. |
| `type` | The type of job as a string. The two supported types are `batch_segmentation` and `export`. |
| `properties` | An object containing additional properties related to the schedule. |
| `properties.segments` | Using `["*"]` ensures all segments are included. |
| `schedule` | A string containing the job schedule. Jobs can only be scheduled to run once a day, meaning you cannot schedule a job to run more than once during a 24 hour period. For more information about cron schedules, please read the [cron expression format](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) documentation. In this example, "0 0 1 * *" means that this schedule will run at midnight on the first of every month. |
| `state` | A string containing the schedule state. The two supported states are `active` and `inactive`. By default, the state is set to `inactive`. |

## Update details for a specific schedule {#update}

You can update a specific schedule by making a PATCH request to the `/config/schedules` endpoint and providing the ID of the schedule you are trying to update in the request path.

The PATCH request allows you to update either the [state](#update-state) or the [cron schedule](#update-schedule) for an individual schedule.

### Update schedule state {#update-state}

You can use a JSON Patch operation to update the state of the schedule. To update the state, you declare the `path` property as `/state` and set the `value` to either `active` or `inactive`. For more information about JSON Patch, please read the [JSON Patch](http://jsonpatch.com/) documentation.

**API format**

```http
PATCH /config/schedules/{SCHEDULE_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{SCHEDULE_ID}` | The `id` value of the schedule you want to update. |

**Request**

```shell
curl -X DELETE https://platform.adobe.io/data/core/ups/config/schedules/4e538382-dbd8-449e-988a-4ac639ebe72b \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '
[
    {
        "op": "add",
        "path": "/state",
        "value": "active"
    }
]'
```

| Property | Description |
| -------- | ----------- |
| `path` | The path of the value you want to patch. In this case, since you are updating the schedule's state, you need to set the value of `path` to "/state". |
| `value` | The updated value of the schedule's state. This value can either be set as "active" or "inactive" to activate or deactivate the schedule. |

**Response**

A successful response returns HTTP status 204 (No Content).

### Update cron schedule {#update-schedule}

You can use a JSON Patch operation to update the cron schedule. To update the schedule, you declare the `path` property as `/schedule` and set the `value` to a valid cron schedule. For more information about JSON Patch, please read the [JSON Patch](http://jsonpatch.com/) documentation. For more information about cron schedules, please read the [cron expression format](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) documentation.

**API format**

```http
PATCH /config/schedules/{SCHEDULE_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{SCHEDULE_ID}` | The `id` value of the schedule you want to update. |

**Request**

```shell
curl -X PATCH https://platform.adobe.io/data/core/ups/config/schedules/4e538382-dbd8-449e-988a-4ac639ebe72b \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '
[
    {
        "op":"add",
        "path":"/schedule",
        "value":"0 0 2 * *"
    }
]'
```

| Property | Description |
| -------- | ----------- |
| `path` | The path of the value you want to updated. In this case, since you are updating the cron schedule, you need to set the value of `path` to `/schedule`. |
| `value` | The updated value of the cron schedule. This value needs to be in the form of a cron schedule. In this example, the schedule will run on the second of every month. |

**Response**

A successful response returns HTTP status 204 (No Content).

## Delete a specific schedule

You can request to delete a specific schedule by making a DELETE request to the `/config/schedules` endpoint and providing the ID of the schedule you wish to delete in the request path.

**API format**

```http
DELETE /config/schedules/{SCHEDULE_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{SCHEDULE_ID}` | The `id` value of the schedule you want to delete. |

**Request**

```shell
curl -X DELETE https://platform.adobe.io/data/core/ups/config/schedules/4e538382-dbd8-449e-988a-4ac639ebe72b \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 204 (No Content).

## Next steps

After reading this guide you now have a better understanding of how schedules work.