---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Update a sandbox
topic: developer guide
---

# Update a sandbox

You can update one or more fields in a sandbox by making a PATCH request that includes the sandbox's `name` in the request path and the property to update in the request payload.

>[!NOTE]
>
>Currently only a sandbox's `title` property can be updated.

**API format**

```http
PATCH /sandboxes/{SANDBOX_NAME}
```

| Parameter | Description |
| --- | --- |
| `{SANDBOX_NAME}` | The `name` property of the sandbox you want to update. |

**Request**

The following request updates the `title` property of the sandbox named "dev-2".

```shell
curl -X PATCH \
  https://platform.adobe.io/data/foundation/sandbox-management/sandboxes/dev-2 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
    "title": "Development B"
  }'
```

**Response**

A successful response returns HTTP status 200 (OK) with the details of the newly updated sandbox.

```json
{
    "name": "dev-2",
    "title": "Development B",
    "state": "active",
    "type": "development",
    "region": "VA7"
}
```
