---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;experience data model;Experience data model;Experience Data Model;data model;Data Model;audit;audit log;changelog;change log;rpc;
solution: Experience Platform
title: Audit Log API Endpoint
description: The /auditlog endpoint in the Schema Registry API allows you to retrieve a chronological list of changes that have been made to an existing XDM resource.
topic-legacy: developer guide
exl-id: 8d33ae7c-0aa4-4f38-a183-a2ff1801e291
---
# Audit log endpoint

For each Experience Data Model (XDM) resource, the [!DNL Schema Registry] maintains a log of all changes that have occurred between different updates. The `/auditlog` endpoint in the [!DNL Schema Registry] API allows you to retrieve an audit log for any class, schema field group, data type, or schema specified by ID.

## Getting started

The endpoint used in this guide is part of the [[!DNL Schema Registry] API](https://www.adobe.io/experience-platform-apis/references/schema-registry/). Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

The `/auditlog` endpoint is part of the remote procedure calls (RPCs) that are supported by the [!DNL Schema Registry]. Unlike other endpoints in the [!DNL Schema Registry] API, RPC endpoints do not require additional headers like `Accept` or `Content-Type`, and do not use a `CONTAINER_ID`. Instead, they must use the `/rpc` namespace, as demonstrated in the API call below.

## Retrieve an audit log for a resource

You can retrieve an audit log for any class, field group, data type, or schema within the Schema Library by specifying the resource's ID in the path of a GET request to the `/auditlog` endpoint.

**API format**

```http
GET /rpc/auditlog/{RESOURCE_ID}
```

| Parameter | Description |
| --- | --- |
| `{RESOURCE_ID}` | The `meta:altId` or URL-encoded `$id` of the resource whose audit log you want to retrieve. |

{style="table-layout:auto"}

**Request**

The following request retrieves the audit log for a schema.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/rpc/auditlog/_{TENANT_ID}.schemas.50649eb1b040bf042d6400a0335901cd2a97d31a4eac4330 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a chronological list of changes made to the resource, from most recent to least recent.

```json
[
  {
    "id": "https://ns.adobe.com/{TENANT_ID}/schemas/50649eb1b040bf042d6400a0335901cd2a97d31a4eac4330",
    "updatedUser": "{USER_ID}",
    "imsOrg": "{ORG_ID}",
    "updatedTime": "02-19-2021 05:43:56",
    "requestId": "a14NMF0jd6BIfyXaHdTDl4bC4R0r9rht",
    "clientId": "{CLIENT_ID}",
    "sandBoxId": "28e74200-e3de-11e9-8f5d-7f27416c5f0d",
    "updates": [
      {
        "id": "https://ns.adobe.com/{TENANT_ID}/schemas/50649eb1b040bf042d6400a0335901cd2a97d31a4eac4330",
        "xdmType": "schemas",
        "action": "remove",
        "path": "/meta:usageCount",
        "value": 0
      }
    ]
  },
  {
    "id": "https://ns.adobe.com/{TENANT_ID}/schemas/50649eb1b040bf042d6400a0335901cd2a97d31a4eac4330",
    "updatedUser": "{USER_ID}",
    "imsOrg": "{ORG_ID}",
    "updatedTime": "02-19-2021 05:43:56",
    "requestId": "pFQbgmWrdbJrNB9GdxTSGECpXYWspu68",
    "clientId": "{CLIENT_ID}",
    "sandBoxId": "28e74200-e3de-11e9-8f5d-7f27416c5f0d",
    "updates": [
      {
        "id": "https://ns.adobe.com/{TENANT_ID}/classes/11052164b588f0c29584bf6ae1a6663a59aa65426c82389f",
        "xdmType": "classes",
        "action": "remove",
        "path": "/definitions/customFields/properties/_{TENANT_ID}/properties/loyaltySunday_ABC",
        "value": {
          "title": "LoyaltySundayABC",
          "description": "",
          "type": "string",
          "isRequired": false,
          "required": [],
          "meta:xdmType": "string"
        }
      },
      {
        "id": "https://ns.adobe.com/{TENANT_ID}/classes/11052164b588f0c29584bf6ae1a6663a59aa65426c82389f",
        "xdmType": "classes",
        "action": "remove",
        "path": "/definitions/customFields/properties/_{TENANT_ID}/properties/loyaltyMoxee_XYZ",
        "value": {
          "title": "LoyaltyMoxeeXYZ",
          "description": "",
          "type": "string",
          "isRequired": false,
          "required": [],
          "meta:xdmType": "string"
        }
      }
    ]
  }
]
```

| Property | Description |
| --- | --- |
| `updates` | An array of objects, with each object representing a change made to the specified resource or one of its dependent resources. |
| `id` | The `$id` of the resource that was changed. This value typically represents the resource specified in the request path, but may represent a dependent resource if that is the source of the change. |
| `xdmType` | The type of resource that was changed. |
| `action` | The type of change that was made. |
| `path` | A [JSON Pointer](../../landing/api-fundamentals.md#json-pointer) string indicating the path to the specific field that was changed or added. |
| `value` | The value that was assigned to the new or updated field. |

{style="table-layout:auto"}
