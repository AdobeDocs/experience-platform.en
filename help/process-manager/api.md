---
title: Process Manager API
description: Learn how to list process definitions, review execution runs, and manage recurring schedules in Adobe Experience Platform.
---

# Process manager API

Use the Process Manager API in [!DNL Adobe Experience Platform] to list process definitions, review execution runs, and manage recurring schedules.

## Getting started

Before using the API, complete the [authentication tutorial](/help/landing/api-authentication.md). Then include these headers in every request:

- Authorization: `Bearer {ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{ORG_ID}`
- x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information about sandboxes in [!DNL Adobe Experience Platform], see the [sandboxes overview documentation](/help/sandboxes/home.md).

## List process definitions {#list-process-definitions}

You can list all the current process definitions by making a GET request to the `/process-definitions` endpoint.

**API format**

```http
GET /process-definitions
```

**Query parameters**

+++ A list of available query parameters.

| Parameter | Description |
| --------- | ----------- |
| `name` | Case-insensitive substring filter on the definition name. |
| `sort` | Field to sort by. Supported values are `createdAt`, `updatedAt`, and `name`. Default is `createdAt`. |
| `order` | Sort order. Supported values are `asc` and `desc`. Default is `desc`. |
| `pageSize` | Items per page. Supported range is 1 to 100. Default is 100. |
| `cursor` | Opaque pagination cursor returned by a previous call. Mutually exclusive with `offset`. |
| `offset` | Zero-based offset. Mutually exclusive with `cursor`. |

+++

**Request**

+++ A sample request to get a list of process definitions.

```shell
curl -X GET "https://aep-maestro.adobe.io/process-definitions?sort=updatedAt&order=desc&pageSize=2" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}"
```

+++


**Response**

A successful request returns HTTP status `200` with a list of process definitions.

+++ A sample response when retrieving a list of process definitions.

```json
{
  "items": [
    {
      "definitionUuid": "5b4e018b-f37c-4104-928b-b67148ce8537",
      "name": "onboard-new-customer",
      "createdAt": "2026-05-13T17:45:00Z",
      "updatedAt": "2026-05-13T17:45:00Z"
    }
  ],
  "offset": 0,
  "nextCursor": "opaque-pagination-cursor"
}
```

| Field | Description |
| ----- | ----------- |
| `definitionUuid` | The ID of the process definition. |
| `name` | The name of the process definition. |
| `createdAt` | The date and time the process definition was created. |
| `updatedAt` | The date and time the process definition was last updated. |

+++

### Retrieve a specific process definition

You can retrieve a specific process definition by making a GET request to the `/process-definitions` endpoint while providing the process definition ID.

**API format**

```http
GET /process-definitions/{DEFINITION_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{DEFINITION_ID}` | The ID of the process definition. |

**Request**

+++ A sample request to retrieve the specified process definition. 

```shell
curl -X GET "https://aep-maestro.adobe.io/process-definitions/5b4e018b-f37c-4104-928b-b67148ce8537" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}"
```

+++

**Response**

A successful request returns HTTP status 200 with information about the requested process definition.

+++ A sample response when retrieving a specific process definition.

```json
{
  "definitionUuid": "5b4e018b-f37c-4104-928b-b67148ce8537",
  "name": "onboard-new-customer",
  "description": "Welcome flow for new customers",
  "tasks": [
    {
      "id": "send-welcome",
      "taskType": "send-email"
    }
  ],
  "createdAt": "2026-05-13T17:45:00Z",
  "updatedAt": "2026-05-13T17:45:00Z"
}
```

| Field | Description |
| ----- | ----------- |
| `definitionUuid` | The ID of the process definition. |
| `name` | The name of the process definition. |
| `description` | An optional description about the process definition. |
| `tasks` | An array that contains the tasks that belong to the process definition. |
| `tasks.id` | The ID of the task within the process definition. |
| `tasks.taskType` | The type of task within the process definition. |
| `createdAt` | The date and time the process definition was created. |
| `updatedAt` | The date and time the process definition was last updated. |

+++

## List process definition runs {#list-process-definition-runs}

You can retrieve a list of all the runs for a process definition by making a GET request to the `/runs` endpoint and providing the ID of the process definition.

**API format**

```http
GET /runs?{QUERY_PARAMETERS}
```

**Query parameters**

| Parameter | Required | Description |
| --------- | -------- | ----------- |
| `definitionUuid` | Yes | The process definition whose runs you want to list. |
| `executionTrigger` | No | Filters results to runs started by `MANUAL` or `SCHEDULE`. |

**Request**

+++ A sample request to retrieve all the manual runs for the specified process definition. 

```shell
curl -X GET "https://aep-maestro.adobe.io/runs?definitionUuid=5b4e018b-f37c-4104-928b-b67148ce8537&executionTrigger=MANUAL" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}"
```

+++

**Response**

A successful request returns HTTP status 200 with information about the process definition runs.

+++ A sample response when retrieving a process definition's runs.

```json
[
  {
    "runId": "b4d8e7c0-6c31-4d77-9f3d-c7d8a99496d2",
    "definitionUuid": "5b4e018b-f37c-4104-928b-b67148ce8537",
    "state": "RUNNING",
    "executionTrigger": "MANUAL"
  }
]
```

| Field | Description |
| ----- | ----------- |
| `runId` | The ID of the process definition run. |
| `definitionUuid` | The ID of the process definition. |
| `state` | The state of the process definition run. Possible values include `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`, `CANCELED`, `TERMINATED`, and `TIMED_OUT`. |
| `executionTrigger` | The method which the process definition was executed. Possible values include `MANUAL` or `SCHEDULE`. |

+++

### Get specific process definition run {#get-process-definition-run}

You can retrieve a specific process definition run by making a GET request to the `/runs` endpoint while providing the run ID.

**API format**

```http
GET /runs/{RUN_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{RUN_ID}` | The ID of the process definition run. |

**Request**

+++ A sample request to retrieve the specified process definition run.

```shell
curl -X GET "https://aep-maestro.adobe.io/runs/{RUN_ID}" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}"
```

+++ A sample response when retrieving a specific process definition run.

**Response**

A successful request returns HTTP status 200 with information about the specified process definition run.

+++ A sample response with information about the process definition run.

```json
{
  "runId": "b4d8e7c0-6c31-4d77-9f3d-c7d8a99496d2",
  "definitionUuid": "5b4e018b-f37c-4104-928b-b67148ce8537",
  "state": "PENDING",
  "eventHistory": [
    {
      "eventType": "SUBMITTED",
      "timestamp": "2026-05-13T17:50:00Z"
    }
  ]
}
```

| Field | Description |
| ----- | ----------- |
| `runId` | The ID of the process definition run. |
| `definitionUuid` | The ID of the process definition. |
| `state` | The state of the process definition run. Possible values include `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`, `CANCELED`, `TERMINATED`, and `TIMED_OUT`. |
| `eventHistory` | An array that contains objects of the event history of the process definition run. |

+++

### Start a process definition run {#start-run}

You can start a process definition run by making a POST request to the `/runs` endpoint.

**API format**

```http
POST /runs
```

**Request**

+++ A sample request to start a process definition run.

```shell
curl -X POST "https://aep-maestro.adobe.io/runs" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}" \
  -H "Content-Type: application/json" \
  -d '{
    "definitionUuid": "5b4e018b-f37c-4104-928b-b67148ce8537",
    "inputs": {
      "customerEmail": "alice@example.com",
      "orgName": "ACME Corp"
    }
  }'
```

| Property | Type | Description |
| -------- | ---- | ----------- |
| `definitionUuid` | String | The ID of the process definition you want to start a run for. |
| `inputs` | Object | An optional object that contains fields that are required in the process definition. |

+++

**Response**

A successful request returns HTTP status 202 Accepted with the accepted run details. The execution is asynchronous and returns immediately with `state: PENDING`.

+++ A sample response when starting a process definition run.

```json
{
  "runId": "b4d8e7c0-6c31-4d77-9f3d-c7d8a99496d2",
  "definitionUuid": "5b4e018b-f37c-4104-928b-b67148ce8537",
  "state": "PENDING",
  "executionTrigger": "MANUAL"
}
```

| Field | Description |
| ----- | ----------- |
| `runId` | The ID of the newly accepted run. |
| `definitionUuid` | The ID of the process definition the run is for. |
| `state` | The state of the run. Since this process is asynchronous, this will be `PENDING`. |
| `executionTrigger` | The method which the process definition run was triggered. |

+++

## Retrieve process definition schedule {#get-schedule}

You can get the schedule for a process definition by making a GET request to the `/process-definitions/{DEFINITION_ID}/schedule` endpoint and providing the ID of the process definition.

**API format**

```http
GET /process-definitions/{DEFINITION_ID}/schedule
```

| Parameter | Description |
| --------- | ----------- |
| `{DEFINITION_ID}` | The ID of the process definition that owns the schedule. |

**Request**

+++ A sample request to retrieve the schedule for a process definition. 

```shell
curl -X GET "https://aep-maestro.adobe.io/process-definitions/{DEFINITION_ID}/schedule" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}"
```

+++

**Response**

A successful request returns HTTP status `200` with information about the process definition schedule.

+++ A sample response with information about the process definition schedule.

```json
{
  "definitionUuid": "5b4e018b-f37c-4104-928b-b67148ce8537",
  "scheduleType": "cron",
  "cron": "0 0 * * *",
  "paused": false
}
```

| Field | Description |
| ----- | ----------- |
| `definitionUuid` | The ID of the process definition. |
| `scheduleType` | The type of schedule. |
| `cron` | The cron format for the schedule. For more information about cron schedules, read the [cron expression format](https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) documentation. |
| `paused` | A boolean that states if the schedule is paused or not. |

+++

## Replace a schedule {#replace-schedule}

You can replace the schedule for a process definition by making a PUT request to the `/process-definitions/{DEFINITION_ID}/schedule` endpoint while providing the ID of the process definition.

**API format**

```http
PUT /process-definitions/{DEFINITION_ID}/schedule
```

| Parameter | Description |
| --------- | ----------- |
| `{DEFINITION_ID}` | The ID of the process definition that owns the schedule. |

**Request**

+++ A sample request to replace the process definition's schedule.

```shell
curl -X PUT "https://aep-maestro.adobe.io/process-definitions/{definitionUuid}/schedule" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}" \
  -H "Content-Type: application/json" \
  -d '{
    "cron": "0 0 * * *"
  }'
```

| Property | Type | Description |
| -------- | ---- | ----------- |
| `cron` | String | The cron format for the schedule. For more information about cron schedules, read the [cron expression format](https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) documentation. |

+++

**Response**

A successful request returns HTTP status `200` with the updated schedule.

**Status codes**

- `200 OK`: The schedule was replaced.
- `400 Bad Request`: The schedule payload is invalid.
- `404 Not Found`: The definition or schedule does not exist.
- `503 Service Unavailable`: The service is unavailable.

### DELETE /process-definitions/{definitionUuid}/schedule

Removes the schedule attached to a process definition.

**API format**

```http
DELETE /process-definitions/{definitionUuid}/schedule
```

**Request**

```shell
curl -X DELETE "https://aep-maestro.adobe.io/process-definitions/{definitionUuid}/schedule" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}"
```

**Response**

A successful request returns HTTP status `204 No Content`.

**Status codes**

- `204 No Content`: The schedule was deleted.
- `404 Not Found`: The definition or schedule does not exist.
- `503 Service Unavailable`: The service is unavailable.

### POST /process-definitions/{definitionUuid}/schedule:pause

Pauses the schedule for a process definition.

**API format**

```http
POST /process-definitions/{definitionUuid}/schedule:pause
```

**Request**

```shell
curl -X POST "https://aep-maestro.adobe.io/process-definitions/{definitionUuid}/schedule:pause" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}"
```

**Response**

A successful request returns HTTP status `200` with the paused schedule state.

**Status codes**

- `200 OK`: The schedule was paused.
- `404 Not Found`: The definition or schedule does not exist.
- `503 Service Unavailable`: The service is unavailable.

### POST /process-definitions/{definitionUuid}/schedule:resume

Resumes a paused schedule for a process definition.

**API format**

```http
POST /process-definitions/{definitionUuid}/schedule:resume
```

**Request**

```shell
curl -X POST "https://aep-maestro.adobe.io/process-definitions/{definitionUuid}/schedule:resume" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}"
```

**Response**

A successful request returns HTTP status `200` with the resumed schedule state.

**Status codes**

- `200 OK`: The schedule was resumed.
- `404 Not Found`: The definition or schedule does not exist.
- `503 Service Unavailable`: The service is unavailable.
