---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;experience data model;Experience data model;Experience Data Model;data model;Data Model;audit;audit log;changelog;change log;rpc;
solution: Experience Platform
title: Audit Log API Endpoint
description: The /auditlog endpoint in the Schema Registry API allows you to retrieve a chronological list of changes that have been made to an existing XDM resource.
topic: developer guide
---

# Audit log endpoint

For each Experience Data Model (XDM) resource, the [!DNL Schema Registry] maintains a log of all changes that have occurred between different updates. The `/auditlog` endpoint in the [!DNL Schema Registry] API allows you to retrieve an audit log for any class, mixin, data type, or schema specified by ID.

## Getting started

The endpoint used in this guide is part of the [[!DNL Schema Registry] API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/mixin-registry.yaml). Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

The `/auditlog` endpoint is part of the remote procedure calls (RPCs) that are supported by the [!DNL Schema Registry]. Unlike other endpoints in the [!DNL Schema Registry] API, RPC endpoints do not require additional headers like `Accept` or `Content-Type`, and do not use a `CONTAINER_ID`. Instead, they must use the `/rpc` namespace, as demonstrated in the API call below.

## Retrieve an audit log for a resource

You can retrieve an audit log for any class, mixin, data type, or schema within the Schema Library by specifying the resource's ID in the path of a GET request to the `/auditlog` endpoint.

**API format**

```http
GET /rpc/auditlog/{RESOURCE_ID}
```

| Parameter | Description |
| --- | --- |
| `{RESOURCE_ID}` | The `meta:altId` or URL-encoded `$id` of the resource whose audit log you want to retrieve. |

**Request**

The following request retrieves the audit log for a `Restaurant` mixin.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/rpc/auditlog/_{TENANT_ID}.mixins.922a56b58c6b4e4aeb49e577ec82752106ffe8971b23b4d9 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a chronological list of changes made to the resource, from most recent to least recent.

```json
[
  {
    "id": "https://ns.adobe.com/{TENANT_ID}/fieldgroups/922a56b58c6b4e4aeb49e577ec82752106ffe8971b23b4d9",
    "auditTrails": [
      {
        "id": "https://ns.adobe.com/{TENANT_ID}/fieldgroups/922a56b58c6b4e4aeb49e577ec82752106ffe8971b23b4d9",
        "xdmType": "mixins",
        "action": "add",
        "path": "/definitions/customFields/properties/_{TENANT_ID}/properties/brand",
        "value": {
          "title": "Brand",
          "description": "",
          "type": "string",
          "isRequired": false,
          "meta:xdmType": "string"
        }
      },
      {
        "id": "https://ns.adobe.com/{TENANT_ID}/fieldgroups/922a56b58c6b4e4aeb49e577ec82752106ffe8971b23b4d9",
        "xdmType": "mixins",
        "action": "add",
        "path": "/meta:usageCount",
        "value": 0
      }
    ],
    "updatedUser": "{USER_ID}",
    "imsOrg": "{IMS_ORG}",
    "updated": 1606255582281,
    "clientId": "{CLIENT_ID}",
    "sandBoxId": "{SANDBOX_ID}"
  }
]
```

| Property | Description |
| --- | --- |
| `auditTrails` | An array of objects, with each object representing a change made to the specified resource or one of its dependent resources. |
| `id` | The `$id` of the resource that was changed. This value will typically represent the resource specified in the request path, but may represent a dependent resource if that is the source of the change. |
| `action` | The type of change that was made. |
| `path` | A [JSON Pointer](../../landing/api-fundamentals.md#json-pointer) string indicating the path to the specific field that was changed or added. |
| `value` | The value that was assigned to the new or updated field. |