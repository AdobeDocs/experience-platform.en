---
keywords: Experience Platform;home;popular topics;Sandbox;sandbox
solution: Experience Platform
title: Create a Sandbox in the API
topic: developer guide
description: You can create a new sandbox by making a POST request to the `/sandboxes` endpoint.
exl-id: 676c5de8-2c3a-4612-9dd8-93e01cafe90e
---
# Create a sandbox in the API

You can create a new sandbox by making a POST request to the `/sandboxes` endpoint.

**API format**

```http
POST /sandboxes
```

**Request**

The following request creates a new development sandbox named "dev-3".

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/sandbox-management/sandboxes \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "dev-3",
    "title": "Development 3",
    "type": "development"
  }'
```

| Property | Description |
| --- | --- |
| `name` | The identifier that will be used to access the sandbox in future requests. This value must be unique, and best practice is to make it as descriptive as possible. Cannot contain any spaces or capital letters. |
| `title` | A human-readable name used for display purposes in the Platform user interface. |
| `type` | The type of sandbox to be created. Currently only "development" type sandboxes can be created by an organization. |

**Response**

A successful response returns the details of the newly created sandbox, showing that its `state` is "creating".

```json
{
    "name": "dev-3",
    "title": "Development 3",
    "state": "creating",
    "type": "development",
    "region": "VA7"
}
```

>[!NOTE]
>
>Sandboxes take roughly 15 minutes to be provisioned by the system, after which their `state` will become "active" or "failed".
