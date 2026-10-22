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

## Process Definitions

### GET /process-definitions

Lists current process definitions in the caller's sandbox.

**API format**

```http
GET /process-definitions
```

**Request**

```shell
curl -X GET "https://platform.adobe.io/data/core/maestro/process-definitions?sort=updatedAt&order=desc&pageSize=2" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}"
```

**Query parameters**

| Parameter | Required | Description |
| --------- | -------- | ----------- |
| `name` | No | Case-insensitive substring filter on the definition name. |
| `sort` | No | Field to sort by. Supported values are `createdAt`, `updatedAt`, and `name`. Default is `createdAt`. |
| `order` | No | Sort order. Supported values are `asc` and `desc`. Default is `desc`. |
| `pageSize` | No | Items per page. Supported range is 1 to 100. Default is 100. |
| `cursor` | No | Opaque pagination cursor returned by a previous call. Mutually exclusive with `offset`. |
| `offset` | No | Zero-based offset. Mutually exclusive with `cursor`. |

**Response**

A successful request returns HTTP status `200` with a page of process definitions. The response supports both cursor-based and offset-based pagination.

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

**Status codes**

- `200 OK`: The request succeeded.
- `400 Bad Request`: The request is invalid.
- `401 Unauthorized`: The user is not authenticated.
- `403 Forbidden`: The user cannot access the resource.

### GET /process-definitions/{definitionUuid}

Gets the current version of a process definition.

**API format**

```http
GET /process-definitions/{definitionUuid}
```

**Request**

```shell
curl -X GET "https://platform.adobe.io/data/core/maestro/process-definitions/{definitionUuid}" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}"
```

**Path parameters**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `definitionUuid` | String | The unique identifier of the process definition. |

**Response**

A successful request returns HTTP status `200` with the full `ProcessDefinitionView` payload for the requested definition.

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

**Status codes**

- `200 OK`: The definition was returned.
- `401 Unauthorized`: The user is not authenticated.
- `403 Forbidden`: The user cannot access the resource.
- `404 Not Found`: The definition does not exist in the current sandbox.

## Process Runs

### GET /runs

Lists executions for a process definition. The response includes up to 100 of the most recent runs, sorted by `submittedAt` descending.

**API format**

```http
GET /runs
```

**Request**

```shell
curl -X GET "https://platform.adobe.io/data/core/maestro/runs?definitionUuid={DEFINITION_UUID}&executionTrigger=MANUAL" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}"
```

**Query parameters**

| Parameter | Required | Description |
| --------- | -------- | ----------- |
| `definitionUuid` | Yes | The process definition whose runs you want to list. |
| `executionTrigger` | No | Filters results to runs started by `MANUAL` or `SCHEDULE`. |

**Response**

A successful request returns HTTP status `200` with an array of `ProcessRunView` objects.

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

**Status codes**

- `200 OK`: Matching executions were returned.
- `400 Bad Request`: The request is invalid.
- `401 Unauthorized`: The user is not authenticated.

### GET /runs/{runId}

Gets the state and event history for an execution.

**API format**

```http
GET /runs/{runId}
```

**Request**

```shell
curl -X GET "https://platform.adobe.io/data/core/maestro/runs/{runId}" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}"
```

**Path parameters**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `runId` | String | The unique identifier of the execution. |

**Response**

A successful request returns HTTP status `200` with the full `ProcessRunView`, including the event history.

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

**Status codes**

- `200 OK`: The execution was returned.
- `401 Unauthorized`: The user is not authenticated.
- `403 Forbidden`: The user cannot access the resource.
- `404 Not Found`: The execution does not exist in the current sandbox.

### POST /runs

Submits an execution against the current internal version of a named definition.

**API format**

```http
POST /runs
```

**Request**

```shell
curl -X POST "https://platform.adobe.io/data/core/maestro/runs" \
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

**Request body**

```json
{
  "definitionUuid": "5b4e018b-f37c-4104-928b-b67148ce8537",
  "inputs": {
    "customerEmail": "alice@example.com",
    "orgName": "ACME Corp"
  }
}
```

**Response**

A successful request returns HTTP status `202 Accepted` with the accepted run details. The execution is asynchronous and returns immediately with `state: PENDING`.

```json
{
  "runId": "b4d8e7c0-6c31-4d77-9f3d-c7d8a99496d2",
  "definitionUuid": "5b4e018b-f37c-4104-928b-b67148ce8537",
  "state": "PENDING",
  "executionTrigger": "MANUAL"
}
```

**Status codes**

- `202 Accepted`: The execution was accepted.
- `400 Bad Request`: The request payload is invalid.
- `401 Unauthorized`: The user is not authenticated.
- `403 Forbidden`: The user cannot access the resource.
- `404 Not Found`: The process definition does not exist.
- `409 Conflict`: A manual run is already in progress for the same definition.
- `503 Service Unavailable`: The service is unavailable.

## Process Schedules

### GET /process-definitions/{definitionUuid}/schedule

Reads the schedule attached to a process definition.

**API format**

```http
GET /process-definitions/{definitionUuid}/schedule
```

**Request**

```shell
curl -X GET "https://platform.adobe.io/data/core/maestro/process-definitions/{definitionUuid}/schedule" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}"
```

**Path parameters**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `definitionUuid` | String | The unique identifier of the process definition that owns the schedule. |

**Response**

A successful request returns HTTP status `200` with the schedule definition.

```json
{
  "definitionUuid": "5b4e018b-f37c-4104-928b-b67148ce8537",
  "scheduleType": "cron",
  "cron": "0 0 * * *",
  "paused": false
}
```

**Status codes**

- `200 OK`: The schedule was returned.
- `401 Unauthorized`: The user is not authenticated.
- `404 Not Found`: The definition or schedule does not exist.

### PUT /process-definitions/{definitionUuid}/schedule

Replaces the schedule body for a process definition.

**API format**

```http
PUT /process-definitions/{definitionUuid}/schedule
```

**Request**

```shell
curl -X PUT "https://platform.adobe.io/data/core/maestro/process-definitions/{definitionUuid}/schedule" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}" \
  -H "Content-Type: application/json" \
  -d '{
    "cron": "0 0 * * *"
  }'
```

**Request body**

```json
{
  "cron": "0 0 * * *"
}
```

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
curl -X DELETE "https://platform.adobe.io/data/core/maestro/process-definitions/{definitionUuid}/schedule" \
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
curl -X POST "https://platform.adobe.io/data/core/maestro/process-definitions/{definitionUuid}/schedule:pause" \
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
curl -X POST "https://platform.adobe.io/data/core/maestro/process-definitions/{definitionUuid}/schedule:resume" \
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
