---
title: Process definitions API
description: Learn how to create, update, list, and monitor process definitions and execution runs in Adobe Experience Platform.
---

# Process definitions endpoint

Process definitions let you register reusable workflow specifications in [!DNL Adobe Experience Platform]. You can use the process definitions API to create definitions, replace or rename them, list them, submit executions, and retrieve execution status.

## Getting started

In order to use Experience Platform APIs, you must have completed the [authentication tutorial](/help/landing/api-authentication.md). Completing the authentication tutorial provides the values for each of the required headers in Experience Platform API calls, as shown below:

- Authorization: `Bearer {ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{ORG_ID}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Experience Platform] APIs require a header that specifies the name of the sandbox in which the operation will take place:

- x-sandbox-name: `{SANDBOX_NAME}`
  
>[!NOTE]
>
>For more information on working with sandboxes in [!DNL Experience Platform], see the [sandboxes overview documentation](../../sandboxes/home.md).

## Create a process definition {#create-definition}

You can create a new process definition by making a POST request to the `/process-definitions` endpoint.

**API format**

```http
POST /process-definitions
```

**Request**

+++ A sample request to create a process definition.

```shell
curl -X POST https://platform.adobe.io/data/core/maestro/process-definitions \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "schemaVersion": "2.0",
        "name": "onboard-new-customer",
        "description": "Sends welcome email and provisions workspace.",
        "inputs": {
            "customerEmail": { 
                "type": "string", 
                "required": true 
            },
            "orgName": { 
                "type": "string", 
                "required": true 
                }
            },
        "tasks": [
            {
                "id": "send-welcome",
                "action": "send-email",
                "parameters": {
                    "to": { 
                        "$ref": "inputs.customerEmail" 
                    },
                "subject": "Welcome to Maestro"
            },
            "retry": { 
                "maxAttempts": 3, 
                "backoffCoefficient": 2.0 
            }
        },
        {
            "id": "provision-workspace",
            "action": "provision-sandbox",
            "parameters": { 
                "orgName": { 
                    "$ref": "inputs.orgName" 
                } 
            }
        }
        ],
        "outputs": {
        "workspaceUrl": { 
            "$ref": "steps.provision-workspace.outputs.workspaceUrl" 
        }
    }
  }'
```

| Property | Type | Description |
| -------- | ---- | ----------- |
| `schemaVersion` | String | The version of the schema. This value must be set to `2.0`. |
| `name` | String | The name of the process definition you want to create. |
| `description` | String | An optional description for the process definition. |
| `inputs` | Object | A map of the fields you want to input. Each value includes a `type` and `required` flag. |
| `tasks` | Array | The ordered list of workflow tasks. Each task includes an `id`, `action`, `parameters`, and optional `retry` settings. |
| `outputs` | Object | A map of outputs that can be referenced by downstream tasks or returned to callers. |

+++ 

**Response**

A successful response returns HTTP status 201 with the newly created definition.

+++ A sample response when creating a process definition.

```json
{
  "definitionUuid": "abc-123-...",
  "name": "onboard-new-customer",
  "imsOrg": "...",
  "sandboxId": "...",
  "sandboxName": "production",
  "inputs": {
    "customerEmail": { "type": "string", "required": true },
    "orgName": { "type": "string", "required": true }
  },
  "tasks": [
    {
      "id": "send-welcome",
      "action": "send-email",
      "parameters": {
        "to": { "$ref": "inputs.customerEmail" },
        "subject": "Welcome to Maestro"
      },
      "retry": { "maxAttempts": 3, "backoffCoefficient": 2.0 }
    }
  ],
  "createdAt": "2026-05-13T17:45:00Z",
  "updatedAt": "2026-05-13T17:45:00Z"
}
```

+++ 

## Replace a process definition {#replace-definition}

You can fully replace a process definition by making a PUT request to the `/process-definitions/{DEFINITION_ID}` endpoint. This operation replaces the body of the definition and bumps the internal version.

**API format**

```http
PUT /process-definitions/{DEFINITION_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{DEFINITION_ID}` | The unique identifier of the process definition to replace. |

**Request**

```json
{
    "schemaVersion": "2.0",
    "description": "Updated description.",
    "inputs": {
        "customerEmail": { 
            "type": "string", 
            "required": true 
        },
        "orgName": { 
            "type": "string", 
            "required": true 
        }
    },
    "tasks": [
        {
            "id": "send-welcome",
            "action": "send-email",
            "parameters": {
                "to": { 
                    "$ref": "inputs.customerEmail"
                },
            "subject": "Welcome to Maestro"
            }
        }
    ],
    "outputs": {
        "workspaceUrl": { 
            "$ref": "tasks.send-welcome.outputs.workspaceUrl"
        }
    }
}
```

**Response**

A successful response returns HTTP status 200 with details of the updated process definitions.

+++

```json

```

+++

## Rename a process definition {#rename-definition}

You can rename an existing definition by making a PATCH request to the `/process-definitions/{definitionUuid}` endpoint.

**API format**

```http
PATCH /process-definitions/{definitionUuid}
```

**Request**

```json
{ "name": "customer-onboarding" }
```

**Response**

| Status | Response |
| ------ | -------- |
| `200 OK` | Returns the renamed `ProcessDefinitionView`. |
| `400 Bad Request` | The new name fails validation. |
| `404 Not Found` | The definition does not exist in the current sandbox. |
| `409 Conflict` | Another definition in the same sandbox already uses the requested name. |
| `401`, `403` | Authentication or authorization failed. |

## Retrieve a process definition {#get-definition}

You can retrieve the current version of a process definition by making a GET request to the `/process-definitions/{definitionUuid}` endpoint.

**API format**

```http
GET /process-definitions/{definitionUuid}
```

**Response**

| Status | Response |
| ------ | -------- |
| `200 OK` | Returns the `ProcessDefinitionView`. |
| `404 Not Found` | The definition cannot be found in the current sandbox. |
| `401`, `403` | Authentication or authorization failed. |

## List process definitions {#list-definitions}

You can retrieve all process definitions in the current sandbox by making a GET request to the `/process-definitions` endpoint.

**API format**

```http
GET /process-definitions
```

**Query parameters**

| Parameter | Default | Description |
| --------- | ------- | ----------- |
| `name` | None | Case insensitive substring match on the definition name. |
| `sort` | `createdAt` | One of `createdAt`, `updatedAt`, or `name`. |
| `order` | `desc` | Sort direction. Use `asc` or `desc`. |
| `pageSize` | `100` | Number of items to include per page. This value must be between 1 and 100. |
| `cursor` | None | Opaque pagination cursor used in cursor mode. |
| `offset` | None | Zero-based offset used in offset mode. This value must not be combined with `cursor`. |

**Request**

sample request here

**Response**

```json
{
  "items": [
    {
      "definitionUuid": "abc-123-...",
      "name": "onboard-new-customer",
      "imsOrg": "...",
      "sandboxId": "...",
      "sandboxName": "production",
      "createdAt": "2026-05-13T17:45:00Z",
      "updatedAt": "2026-05-13T17:45:00Z"
    }
  ],
  "pageSize": 100,
  "nextCursor": "<opaque-string-or-null>",
  "offset": 0,
  "total": 247,
  "hasMore": true
}
```

| Status | Response |
| ------ | -------- |
| `200 OK` | Returns the `ProcessDefinitionListView`. |
| `400 Bad Request` | Invalid query parameters or a malformed pagination cursor. |
| `401`, `403` | Authentication or authorization failed. |

### Pagination behavior

Cursor pagination is stable when sorting by `createdAt`. With `sort=updatedAt` or `sort=name`, an edit in progress can cause duplicates or skipped items while a paginated read is underway.

## Submit an execution {#create-execution}

You can submit a process execution by making a POST request to the `/executions` endpoint. The call runs against the current version of the referenced process definition.

**API format**

```http
POST /executions
```

**Request**

```json
{
  "definitionUuid": "abc-123-...",
  "inputs": {
    "customerEmail": "alice@example.com",
    "orgName": "ACME Corp"
  }
}
```

**Response**

A successful response returns HTTP status 202 with a queued execution.

```json
{
    "executionId": "a3f9b-...",
    "definitionUuid": "abc-123-...",
    "definitionName": "onboard-new-customer",
    "imsOrg": "...",
    "sandboxId": "...",
    "sandboxName": "production",
    "state": "PENDING",
    "inputs": {
        "customerEmail": "alice@example.com",
        "orgName": "ACME Corp"
    },
    "submittedAt": "2026-05-13T17:46:00Z"
}
```

response info

| Status | Response |
| ------ | -------- |
| `202 Accepted` | Returns the new `ExecutionView` with a `PENDING` state. |
| `400 Bad Request` | Input validation failed. |
| `404 Not Found` | The referenced definition is not available in the current sandbox. |
| `503 Service Unavailable` | The platform could not persist or start the execution. |
| `401`, `403` | Authentication or authorization failed. |

## Retrieve an execution {#get-execution}

You can query the current state and event history of an execution by making a GET request to the `/executions/{executionId}` endpoint.

**API format**

```http
GET /executions/{EXECUTION_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{EXECUTION_ID}` | The execution identifier returned from the submit execution response. |

**Request**

request information

**Response**

response info

| Status | Response |
| ------ | -------- |
| `200 OK` | Returns the full `ExecutionView` including execution history. |
| `404 Not Found` | The execution cannot be found in the current sandbox. |
| `401`, `403` | Authentication or authorization failed. |

## Next steps

Use the endpoints in this guide to manage reusable process definitions and execute them from [!DNL Adobe Experience Platform]. For more information about the required authentication headers and sandbox setup, see the [API authentication tutorial](/help/landing/api-authentication.md).
