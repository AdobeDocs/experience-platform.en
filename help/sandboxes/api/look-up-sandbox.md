---
keywords: Experience Platform;home;popular topics;find sandbox;look up a sandbox
solution: Experience Platform
title: Look Up a Sandbox in the API
topic-legacy: developer guide
description: You can look up an individual sandbox by making a GET request that includes the sandbox's name property in the request path.
exl-id: de8d965c-ca58-436e-b5b1-05a492de70f5
---
# Look up a sandbox in the API

You can look up an individual sandbox by making a GET request that includes the sandbox's `name` property in the request path.

**API format**

```http
GET /sandboxes/{SANDBOX_NAME}
```

| Parameter | Description |
| --- | --- |
| `{SANDBOX_NAME}` | The `name` property of the sandbox you want to look up. |

**Request**

The following request retrieves a sandbox named "dev-2".

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/sandbox-management/sandboxes/dev-2 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the details of the sandbox, including its `name`, `title`, `state`, and `type`.

```json
{
    "name": "dev-2",
    "title": "Development 2",
    "state": "creating",
    "type": "development",
    "region": "VA7",
    "isDefault": false,
    "eTag": 1,
    "createdDate": "2019-09-07 10:16:02",
    "lastModifiedDate": "2019-09-07 10:16:02",
    "createdBy": "{USER_ID}",
    "modifiedBy": "{USER_ID}"
}
```

| Property | Description |
| --- | --- |
| `name` | The name of the sandbox. Used for lookup purposes in API calls. |
| `title` | The display name for the sandbox. |
| `state` | The current processing state of the sandbox. A sandbox's state can be any of the following: <ul><li>**creating**: The sandbox has been created, but is still being provisioned by the system.</li><li>**active**: The sandbox is created and active.</li><li>**failed**: Due to an error, the sandbox was not able to be provisioned by the system and is disabled.</li><li>**deleted**: The sandbox has been manually disabled.</li></ul> |
| `type` | The sandbox type, either "development" or "production". |
| `isDefault` | A boolean property indicating whether this sandbox is the default sandbox for the organization. Typically this is the production sandbox. |
| `eTag` | An identifier for a specific version of the sandbox. Used for version control and caching efficiency, this value is updated each time a change is made to the sandbox. |
