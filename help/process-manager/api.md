---
title: Process Manager API
description: Learn how to list process definitions, review execution runs, and manage recurring schedules in Adobe Experience Platform.
badgeBeta: label="Beta" type="Informative"
---

# Process Manager API

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
      "imsOrg": "{ORG_ID}",
      "sandboxId": "{SANDBOX_ID}",
      "sandboxName": "prod",
      "tasks": [
          {
            "id": "wait-task-id",
            "taskType": "wait",
            "retry": {
                "maxAttempts": 1,
                "backoffCoefficient": 2.0
            }
        }
      ],
      "createdAt": "2026-05-13T17:45:00Z",
      "updatedAt": "2026-05-13T17:45:00Z",
      "createdBy": {
        "userId": "{USER_ID}",
        "isService": false
      },
      "updatedBy": {
        "userId": "{USER_ID}",
        "isService": false
      }
    }
  ],
  "offset": 0,
  "nextCursor": "opaque-pagination-cursor",
  "pageSize": 1,
  "total": 1,
  "hasMore": true
}
```

| Field | Description |
| ----- | ----------- |
| `definitionUuid` | The ID of the process definition. |
| `name` | The name of the process definition. |
| `imsOrg` | The ID of the organization that the process definition belongs to. |
| `sandboxId` | The ID of the sandbox that the process definition belongs to. |
| `sandboxName` | The name of the sandbox that the process definition belongs to. |
| `tasks` | An array that contains the task objects related to the process definition. |
| `tasks.id` | The ID of the task. |
| `tasks.taskType` | The type of task. Possible values include `wait`, `ingest-data`, `verify-profile-ingestion`, `run-segmentation`, `run-profile-export`, `trigger-activation`, `run-data-distiller`, and `send-notification`. |
| `tasks.retry.maxAttempts` | The number of times the task will be retried if the task fails. |
| `tasks.retry.backoffCoefficient` | |
| `createdAt` | The date and time the process definition was created. |
| `updatedAt` | The date and time the process definition was last updated. |
| `createdBy` | An object that contains information about the user that created the process definition. |
| `updatedBy` | An object that contains information about the user that last updated the process definition. |

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
    "imsOrg": "{ORG_ID}",
    "sandboxId": "{SANDBOX_ID}",
    "sandboxName": "prod",
    "tasks": [
        {
            "id": "wait-task-id",
            "taskType": "wait",
            "retry": {
                "maxAttempts": 1,
                "backoffCoefficient": 2.0
        }
    }
    ],
    "createdAt": "2026-05-13T17:45:00Z",
    "updatedAt": "2026-05-13T17:45:00Z",
    "createdBy": {
        "userId": "{USER_ID}",
        "isService": false
    },
    "updatedBy": {
        "userId": "{USER_ID}",
        "isService": false
    }
}
```

| Field | Description |
| ----- | ----------- |
| `definitionUuid` | The ID of the process definition. |
| `name` | The name of the process definition. |
| `imsOrg` | The ID of the organization that the process definition belongs to. |
| `sandboxId` | The ID of the sandbox that the process definition belongs to. |
| `sandboxName` | The name of the sandbox that the process definition belongs to. |
| `tasks` | An array that contains the task objects related to the process definition. |
| `tasks.id` | The ID of the task. |
| `tasks.taskType` | The type of task. Possible values include `wait`, `ingest-data`, `verify-profile-ingestion`, `run-segmentation`, `run-profile-export`, `trigger-activation`, `run-data-distiller`, and `send-notification`. |
| `tasks.retry.maxAttempts` | The number of times the task will be retried if the task fails. |
| `tasks.retry.backoffCoefficient` | |
| `createdAt` | The date and time the process definition was created. |
| `updatedAt` | The date and time the process definition was last updated. |
| `createdBy` | An object that contains information about the user that created the process definition. |
| `updatedBy` | An object that contains information about the user that last updated the process definition. |

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
    "definitionName": "Sample run",
    "imsOrg": "{ORG_ID}",
    "sandboxId": "{SANDBOX_ID}",
    "sandboxName": "prod",
    "state": "RUNNING",
    "submittedAt": "2026-10-23T18:32:52.402Z",
    "startedAt": "2026-10-23T18:32:52.402Z",
    "events": [
        {
            "type": "PROCESS_STARTED",
            "taskId": "sample-task",
            "taskType": "wait",
            "attempt": 1,
            "occurredAt": "2026-10-23T18:33:07.402Z"
        }
    ],
    "triggeredBy": "MANUAL"
  }
]
```

| Field | Description |
| ----- | ----------- |
| `runId` | The ID of the process definition run. |
| `definitionUuid` | The ID of the process definition that the run belongs to. |
| `definitionName` | The name of the process definition that the run belongs to. |
| `imsOrg` | The ID of the organization that the process definition run belongs to. |
| `sandboxId` | The ID of the sandbox that the process definition run belongs to. |
| `sandboxName` | The name of the sandbox that the process definition run belongs to. |
| `state` | The state of the process definition run. Possible values include `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`, `CANCELED`, `TERMINATED`, and `TIMED_OUT`. |
| `submittedAt` | The date and time the process definition run was submitted. |
| `startedAt` | The date and time the process definition run starts executing. |
| `events` | An object that contains the tasks that are executed as part of the process definition run. |
| `triggeredBy` | The method which the process definition was executed. Possible values include `MANUAL` or `SCHEDULE`. |

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

+++

**Response**

A successful request returns HTTP status 200 with information about the specified process definition run.

+++ A sample response with information about the process definition run.

```json
{
    "runId": "b4d8e7c0-6c31-4d77-9f3d-c7d8a99496d2",
    "definitionUuid": "5b4e018b-f37c-4104-928b-b67148ce8537",
    "definitionName": "Sample run",
    "imsOrg": "{ORG_ID}",
    "sandboxId": "{SANDBOX_ID}",
    "sandboxName": "prod",
    "state": "RUNNING",
    "submittedAt": "2026-10-23T18:32:52.402Z",
    "startedAt": "2026-10-23T18:32:52.402Z",
    "events": [
        {
            "type": "PROCESS_STARTED",
            "taskId": "sample-task",
            "taskType": "wait",
            "attempt": 1,
            "occurredAt": "2026-10-23T18:33:07.402Z"
        }
    ],
    "triggeredBy": "MANUAL"
}
```

| Field | Description |
| ----- | ----------- |
| `runId` | The ID of the process definition run. |
| `definitionUuid` | The ID of the process definition that the run belongs to. |
| `definitionName` | The name of the process definition that the run belongs to. |
| `imsOrg` | The ID of the organization that the process definition run belongs to. |
| `sandboxId` | The ID of the sandbox that the process definition run belongs to. |
| `sandboxName` | The name of the sandbox that the process definition run belongs to. |
| `state` | The state of the process definition run. Possible values include `PENDING`, `RUNNING`, `COMPLETED`, `FAILED`, `CANCELED`, `TERMINATED`, and `TIMED_OUT`. |
| `submittedAt` | The date and time the process definition run was submitted. |
| `startedAt` | The date and time the process definition run starts executing. |
| `events` | An object that contains the tasks that are executed as part of the process definition run. |
| `triggeredBy` | The method which the process definition was executed. Possible values include `MANUAL` or `SCHEDULE`. |

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
    "definitionName": "Sample run",
    "imsOrg": "{ORG_ID}",
    "sandboxId": "{SANDBOX_ID}",
    "sandboxName": "prod",
    "state": "PENDING",
    "submittedAt": "2026-10-23T18:32:52.402Z",
    "startedAt": "2026-10-23T18:32:52.402Z",
    "events": [
        {
            "type": "PROCESS_STARTED",
            "taskId": "sample-task",
            "taskType": "wait",
            "attempt": 1,
            "occurredAt": "2026-10-23T18:33:07.402Z"
        }
    ],
    "triggeredBy": "MANUAL"
}
```

| Field | Description |
| ----- | ----------- |
| `runId` | The ID of the newly accepted run. |
| `definitionUuid` | The ID of the process definition the run is for. |
| `definitionName` | The name of the process definition that the run belongs to. |
| `imsOrg` | The ID of the organization that the process definition run belongs to. |
| `sandboxId` | The ID of the sandbox that the process definition run belongs to. |
| `sandboxName` | The name of the sandbox that the process definition run belongs to. |
| `state` | The state of the run. Since this process is asynchronous, this will be `PENDING`. |
| `submittedAt` | The date and time the process definition run was submitted. |
| `startedAt` | The date and time the process definition run starts executing. |
| `events` | An object that contains the tasks that are executed as part of the process definition run. |
| `triggeredBy` | The method which the process definition was executed. Possible values include `MANUAL` or `SCHEDULE`. |

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
  "cron": "0 0 * * *",
  "paused": false,
  "createdAt": "2026-10-23T20:50:40.581Z",
  "updatedAt": "2026-10-23T20:50:40.581Z",
  "createdBy": {
    "userId": "{USER_ID}",
    "isService": false
  },
  "updatedBy": {
    "userId": "{USER_ID}",
    "isService": false
  }
}
```

| Field | Description |
| ----- | ----------- |
| `cron` | The cron format for the schedule. For more information about cron schedules, read the [cron expression format](https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) documentation. |
| `paused` | A boolean that states if the schedule is paused or not. |
| `createdAt` | The date and time the schedule was created. |
| `updatedAt` | The date and time the schedule was last updated. |
| `createdBy` | An object that contains details of the user who created the schedule. |
| `updatedBy` | An object that contains details of the user who last updated the schedule. |

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
curl -X PUT "https://aep-maestro.adobe.io/process-definitions/5b4e018b-f37c-4104-928b-b67148ce8537/schedule" \
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

+++ A sample response when updating a schedule.

A successful request returns HTTP status `200` with the updated schedule.

```json
{
  "cron": "0 0 * * *",
  "paused": false,
  "createdAt": "2026-10-23T20:50:40.581Z",
  "updatedAt": "2026-10-23T20:50:40.581Z",
  "createdBy": {
    "userId": "{USER_ID}",
    "isService": false
  },
  "updatedBy": {
    "userId": "{USER_ID}",
    "isService": false
  }
}
```

+++

## Remove the process definition schedule {#remove-schedule}

You can remove the schedule attached to a process definition by making a DELETE request to the `/process-definitions/{DEFINITION_ID}/schedule` endpoint while providing the ID of the process definition.

**API format**

```http
DELETE /process-definitions/{DEFINITION_ID}/schedule
```

| Parameter | Description |
| --------- | ----------- |
| `{DEFINITION_ID}` | The ID of the process definition. |

**Request**

+++ A sample request to remove the process definition's schedule.

```shell
curl -X DELETE "https://aep-maestro.adobe.io/process-definitions/5b4e018b-f37c-4104-928b-b67148ce8537/schedule" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}"
```

+++

**Response**

A successful request returns HTTP 204 with no response body.

## Pause the specified schedule {#pause-schedule}

You can pause the schedule for a process definition by making a POST request to the `/process-definitions/{DEFINITION_ID}/schedule:pause` endpoint while providing the process definition ID.

**API format**

```http
POST /process-definitions/{DEFINITION_ID}/schedule:pause
```

| Parameter | Description |
| --------- | ----------- |
| `{DEFINITION_ID}` | The ID of the process definition. |

**Request**

+++ A sample request to pause the schedule.

```shell
curl -X POST "https://aep-maestro.adobe.io/process-definitions/5b4e018b-f37c-4104-928b-b67148ce8537/schedule:pause" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}"
```

+++

**Response**

A successful request returns HTTP status 200 with information about the schedule.

+++ A sample response when pausing a schedule.

```json
{
  "cron": "0 0 * * *",
  "paused": true,
  "createdAt": "2026-10-23T20:50:40.581Z",
  "updatedAt": "2026-10-23T20:50:40.581Z",
  "createdBy": {
    "userId": "{USER_ID}",
    "isService": false
  },
  "updatedBy": {
    "userId": "{USER_ID}",
    "isService": false
  }
}
```

+++

## Resume the specified schedule {#resume-schedule}

You can resume the schedule for a process definition by making a POST request to the `/process-definitions/{DEFINITION_ID}/schedule:resume` endpoint while providing the process definition ID.

**API format**

```http
POST /process-definitions/{DEFINITION_ID}/schedule:resume
```

| Parameter | Description |
| --------- | ----------- |
| `{DEFINITION_ID}` | The ID of the process definition. |

**Request**

+++ A sample request when resuming a schedule.

```shell
curl -X POST "https://aep-maestro.adobe.io/process-definitions/5b4e018b-f37c-4104-928b-b67148ce8537/schedule:resume" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}"
```

+++

**Response**

A successful request returns HTTP status 200 with information about the schedule.

+++ A sample response when resuming a schedule.

```json
{
  "cron": "0 0 * * *",
  "paused": false,
  "createdAt": "2026-10-23T20:50:40.581Z",
  "updatedAt": "2026-10-23T20:50:40.581Z",
  "createdBy": {
    "userId": "{USER_ID}",
    "isService": false
  },
  "updatedBy": {
    "userId": "{USER_ID}",
    "isService": false
  }
}
```

+++