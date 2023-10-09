---
solution: Experience Platform
title: Schedules API Endpoint
description: Schedules are a tool that can be used to automatically run batch segmentation jobs once a day.
exl-id: 92477add-2e7d-4d7b-bd81-47d340998ff1
---
# Schedules endpoint

Schedules are a tool that can be used to automatically run batch segmentation jobs once a day. You can use the `/config/schedules` endpoint to retrieve a list of schedules, create a new schedule, retrieve details of a specific schedule, update a specific schedule, or delete a specific schedule. 

## Getting started

The endpoints used in this guide are part of the [!DNL Adobe Experience Platform Segmentation Service] API. Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including required headers and how to read example API calls.

## Retrieve a list of schedules {#retrieve-list}

You can retrieve a list of all schedules for your organization by making a GET request to the `/config/schedules` endpoint.

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

The following request will retrieve the last ten schedules posted within your organization.

```shell
curl -X GET https://platform.adobe.io/data/core/ups/config/schedules?limit=10 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with a list of schedules for the specified organization as JSON. 

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
            "imsOrgId": "{ORG_ID}",
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
| `children.schedule` | A string containing the job schedule. Jobs can only be scheduled to run once a day, meaning you cannot schedule a job to run more than once during a 24-hour period. For more information about cron schedules, please read the appendix on the [cron expression format](#appendix). In this example, "0 0 1 * *" means that this schedule will run at 1AM every day. |
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
 -H 'x-gw-ims-org-id: {ORG_ID}' \
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
| `schedule` | *Optional.* A string containing the job schedule. Jobs can only be scheduled to run once a day, meaning you cannot schedule a job to run more than once during a 24-hour period. For more information about cron schedules, please read the appendix on the [cron expression format](#appendix). In this example, "0 0 1 * *" means that this schedule will run at 1AM every day. <br><br>If this string is not supplied, a system-generated schedule will be automatically generated. |
| `state` | *Optional.* A string containing the schedule state. The two supported states are "active" and "inactive". By default, the state is set to "inactive". |

**Response**

A successful response returns HTTP status 200 with details of your newly created schedule.

```json
{
    "id": "4e538382-dbd8-449e-988a-4ac639ebe72b",
    "imsOrgId": "{ORG_ID}",
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
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with detailed information about the specified schedule.

```json
{
    "id": "4e538382-dbd8-449e-988a-4ac639ebe72b",
    "imsOrgId": "{ORG_ID}",
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
| `schedule` | A string containing the job schedule. Jobs can only be scheduled to run once a day, meaning you cannot schedule a job to run more than once during a 24 hour period. For more information about cron schedules, please read the appendix on the [cron expression format](#appendix). In this example, "0 0 1 * *" means that this schedule will run at 1AM every day.|
| `state` | A string containing the schedule state. The two supported states are `active` and `inactive`. By default, the state is set to `inactive`. |

## Update details for a specific schedule {#update}

You can update a specific schedule by making a PATCH request to the `/config/schedules` endpoint and providing the ID of the schedule you are trying to update in the request path.

The PATCH request allows you to update either the [state](#update-state) or the [cron schedule](#update-schedule) for an individual schedule.

### Update schedule state {#update-state}

You can use a JSON Patch operation to update the state of the schedule. To update the state, you declare the `path` property as `/state` and set the `value` to either `active` or `inactive`. For more information about JSON Patch, please read the [JSON Patch](https://datatracker.ietf.org/doc/html/rfc6902) documentation.

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
 -H 'x-gw-ims-org-id: {ORG_ID}' \
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
| `value` | The updated value of the schedule's state. This value can either be set as "active" or "inactive" to activate or deactivate the schedule. Please note that you **cannot** disable a schedule if the organization has been enabled for streaming. |

**Response**

A successful response returns HTTP status 204 (No Content).

### Update cron schedule {#update-schedule}

You can use a JSON Patch operation to update the cron schedule. To update the schedule, you declare the `path` property as `/schedule` and set the `value` to a valid cron schedule. For more information about JSON Patch, please read the [JSON Patch](https://datatracker.ietf.org/doc/html/rfc6902) documentation. For more information about cron schedules, please read the appendix on the [cron expression format](#appendix).

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
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '
[
    {
        "op":"add",
        "path":"/schedule",
        "value":"0 0 2 * * ?"
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
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 204 (No Content).

## Next steps

After reading this guide you now have a better understanding of how schedules work.

## Appendix {#appendix}

The following appendix explains the format of cron expressions used in schedules.

### Format

A cron expression is a string that is made up of 6 or 7 fields. The expression would look something similar to the following:

`0 0 12 * * ?`

In a cron expression string, the first field represents the seconds, the second field represents the minutes, the third field represents the hours, the fourth field represents the day of the month, the fifth field represents the month, and the sixth field represents the day of the week. You can also optionally include a seventh field, which represents the year.

| Field name | Required | Possible values | Allowed special characters |
| ---------- | -------- | --------------- | -------------------------- |
| Seconds | Yes | 0-59 | `, - * /` |
| Minutes | Yes | 0-59 | `, - * /` |
| Hours | Yes | 0-23 | `, - * /` |
| Day of month | Yes | 1-31 | `, - * ? / L W` |
| Month | Yes | 1-12, JAN-DEC | `, - * /` |
| Day of week | Yes | 1-7, SUN-SAT | `, - * ? / L #` |
| Year | No | Empty, 1970-2099 | `, - * /` |

>[!NOTE]
>
>The names of the months and the names of the days of the week are **not** case sensitive. Therefore, `SUN` is equivalent to using `sun`.

The special characters allowed represent the following meanings:

| Special character | Description |
| ----------------- | ----------- |
| `*` | This value is used to select **all** values in a field. For example, putting `*` in the hours field would mean **every** hour. |
| `?` | This value means no specific value is required. This generally is used to specify something in one field where the character is allowed, but not specify it in the other. For example, if you want to have an event triggered every 3rd of the month, but don't care about what day of the week it is, you would put `3` in the day of the month field and `?` in the day of the week field. |
| `-` | This value is used to specify **inclusive** ranges for the field. For example, if you put `9-15` in the hours field, this would mean the hours would include 9, 10, 11, 12, 13, 14, and 15. |
| `,` | This value is used to specify additional values. For example, if you put `MON, FRI, SAT` in the day of the week field, this would mean the days of the week would include Monday, Friday, and Saturday. |
| `/` | This value is used to specify increments. The value placed before the `/` determines where it increments from, while the value placed after the `/` determines how much it increments by. For example, if you put `1/7` in the minutes field, this would mean that the minutes would include 1, 8, 15, 22, 29, 36, 43, 50, and 57. |
| `L` | This value is used to specify `Last`, and has a different meaning depending on which field it is used by. If it is used with the day of the month field, it represents the last day of the month. If it is used with the day of the week field by itself, it represents the last day of the week, which is Saturday (`SAT`). If it is used with the day of the week field, in conjunction with another value, it represents the last day of that type for the month. For example, if you put `5L` in the day of the week field, it would **only** include the last Friday of the month. |
| `W` | This value is used to specify the closest weekday to the given day. For example, if you put `18W` in the day of the month field, and the 18th of that month was a Saturday, it would trigger on Friday the 17th, which is the closest weekday. If the 18th of that month was a Sunday, it would trigger on Monday the 19th, which is the closest weekday. Please note that if you put `1W` in the day of the month field, and the closest weekday would be in the previous month, the event will still trigger on the closest weekday of the **current** month.</br></br>Additionally, you can combine `L` and `W` to make `LW`, which would specify the last weekday of the month. |
| `#` | This value is used to specify the nth day of the week in a month. The value placed before the `#` represents the day of the week, while the value placed after the `#` represents which occurrence in the month it is. For example, if you put `1#3`, the event would trigger on the third Sunday of the month. Please note that if you put `X#5` and there is no fifth occurrence of that day of the week in that month, the event will **not** be triggered. For example, if you put `1#5`, and there is no fifth Sunday in that month, the event will **not** be triggered. |

### Examples

The following table shows sample cron expression strings and explains what they mean.

| Expression | Explanation |
| ---------- | ----------- |
| `0 0 13 * * ?` | The event will fire at 1PM every day. |
| `0 30 9 * * ? 2022` | The event will fire every day at 9:30AM in the year 2022. |
| `0 * 18 * * ?` | The event will fire every minute, starting at 6PM and ending at 6:59PM, every day. |
| `0 0/10 17 * * ?` | The event will fire every 10 minutes, starting at 5PM and ending at 6PM, ever day. |
| `0 13,38 5 ? 6 WED` | The event will fire at 5:13AM and 5:38AM every Wednesday in June. |
| `0 30 12 ? * 4#3` | The event will fire at 12:30PM on the third Wednesday every month. |
| `0 30 12 ? * 6L` | The event will fire at 12:30PM on the last Friday of every month. |
| `0 45 11 ? * MON-THU` | The event will fire at 11:45AM every Monday, Tuesday, Wednesday, and Thursday. |