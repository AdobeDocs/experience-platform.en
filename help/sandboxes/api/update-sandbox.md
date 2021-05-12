---
keywords: Experience Platform;home;popular topics;update sandbox
solution: Experience Platform
title: Update a Sandbox in the API
topic-legacy: developer guide
description: You can update one or more fields in a sandbox by making a PATCH request that includes the sandbox's name in the request path and the property to update in the request payload.
exl-id: a8ef4305-5e0c-4d8f-8663-1933c957f122
---
# Update a sandbox in the API

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
