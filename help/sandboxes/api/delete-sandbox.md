---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Delete a sandbox
topic: developer guide
---

# Delete a sandbox

You can delete a sandbox by making a DELETE request that includes the sandbox's `name` in the request path.

>[!NOTE]
>
>Making this API call updates the sandbox's `status` property to "deleted" and deactivates it. GET requests can still retrieve sandbox's details after it has been deleted.

**API format**

```http
DELETE /sandboxes/{SANDBOX_NAME}
```

| Parameter | Description |
| --- | --- |
| `{SANDBOX_NAME}` | The `name` of the sandbox you want to delete. |

**Request**

The following request deletes a sandbox named "dev-2".

```shell
curl -X DELETE \
  https://platform.adobe.io/data/foundation/sandbox-management/sandboxes/dev-2 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the sandbox's updated details, showing that its `state` is "deleted".

```json
{
    "name": "dev-2",
    "title": "Development 2",
    "state": "deleted",
    "type": "development",
    "region": "VA7"
}
```