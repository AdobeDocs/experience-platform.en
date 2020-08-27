---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Reset a sandbox
topic: developer guide
---

# Reset a sandbox

Development sandboxes have a "factory reset" feature which deletes all non-default resources from a sandbox. You can reset a sandbox by making a PUT request that includes the sandbox's `name` in the request path.

**API format**

```http
PUT /sandboxes/{SANDBOX_NAME}
```

| Parameter | Description |
| --- | --- |
| `{SANDBOX_NAME}` | The `name` property of the sandbox you want to reset. |

**Request**

The following request resets a sandbox named "dev-2".

```shell
curl -X PUT \
  https://platform.adobe.io/data/foundation/sandbox-management/sandboxes/dev-2 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
    "action": "reset"
  }'
```

| Property | Description |
| --- | --- |
| `action` | This parameter must be supplied in the request payload with a value of "reset" in order to reset the sandbox. |

**Response**

A successful response returns the details of the updated sandbox, showing that its `state` is "resetting".

```json
{
    "id": "d8184350-dbf5-11e9-875f-6bf1873fec16",
    "name": "dev-2",
    "title": "Development 2",
    "state": "resetting",
    "type": "development",
    "region": "VA7"
}
```

>[!NOTE]
>
>Once a sandbox is reset, it takes roughly 15 minutes to be provisioned by the system. Once provisioned, the sandbox's `state` becomes "active" or "failed".