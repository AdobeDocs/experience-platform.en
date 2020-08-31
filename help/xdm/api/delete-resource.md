---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;;experience data model;Experience data model;Experience Data Model;data model;Data Model;schema registry;Schema Registry;delete
solution: Experience Platform
title: Delete a resource
topic: developer guide
---

# Delete a resource

It may occasionally be necessary to remove (DELETE) a resource from the [!DNL Schema Registry]. Only resources that you create in the tenant container may be deleted. This is done by performing a DELETE request using the `$id` of the resource you wish to delete.

**API format**

```http
DELETE /tenant/{RESOURCE_TYPE}/{RESOURCE_ID} 
```

| Parameter | Description |
| --- | --- |
| `{RESOURCE_TYPE}` | The type of resource to be deleted from the [!DNL Schema Library]. Valid types are `datatypes`, `mixins`, `schemas`, and `classes`. |
| `{RESOURCE_ID}` | The URL-encoded `$id` URI or `meta:altId` of the resource. |

**Request**

DELETE requests do not require Accept headers.

```SHELL
curl -X DELETE \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/mixins/https%3A%2F%2Fns.adobe.com%2F{TENANT_ID}%2Fmixins%2F4fbd5368aa67f0e74d5838f67694c867 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 204 (No Content) and a blank body. 

You can confirm the deletion by attempting a lookup (GET) request to the resource. You will need to include an Accept header in the request, but should receive an HTTP status 404 (Not Found) because the resource has been removed from the [!DNL Schema Registry].