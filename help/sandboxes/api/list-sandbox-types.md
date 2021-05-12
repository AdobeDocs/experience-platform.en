---
keywords: Experience Platform;home;popular topics;list sandboxes
solution: Experience Platform
title: List Supported Sandbox Types in the API
topic-legacy: developer guide
description: You can retrieve a list of supported sandbox types for your organization by making a GET request to the /sandboxTypes endpoint.
exl-id: eb5e1b44-37f5-4ed5-98f5-ac8db8792c7d
---
# List supported sandbox types in the API

You can retrieve a list of supported sandbox types for your organization by making a GET request to the `/sandboxTypes` endpoint.

**API format**

```http
GET /sandboxTypes
```

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/sandbox-management/sandboxTypes \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
```

**Response**

A successful response returns a list of sandbox types that are supported for your organization.

```json
{
    "sandboxTypes": [
        "production",
        "development"
    ]
}
```
