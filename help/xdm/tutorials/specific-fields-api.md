---
title: Add Specific Fields to a Schema Using the Schema Registry API
description: Learn how to add individual fields from pre-existing field groups to an Experience Data Model (XDM) schema using the Schema Registry API.
---
# Add specific fields to a schema using the Schema Registry API

Experience Data Model (XDM) schemas are composed of a base class, with additional fields included through the use of standard field groups defined by Adobe and custom field groups defined by your organization.

When building a schema, you may want to use some fields from a given field group while excluding others from the same group that you don't need. This tutorial shows you how to add individual fields from a field group to a schema using the Schema Registry API.

>[!NOTE]
>
>For information on how to add and remove individual schema fields in the Adobe Experience Platform UI, see the guide on [field-based workflows](../ui/field-based-workflows.md) (currently in beta).

## Prerequisites

This tutorial involves making calls to the [Schema Registry API](https://developer.adobe.com/experience-platform-apis/references/schema-registry/). Before starting, please review the [developer guide](../api/getting-started.md) for important information that you need to know in order to successfully make calls to the API, including your `{TENANT_ID}`, the concept of containers, and the required headers for making requests.

## Understanding the `meta:refProperty` field

For any given schema, the class and field groups that comprise its structure are referenced under its `allOf` array. Each component is represented as an object containing a `$ref` property that refers to the component's URI `$id`.

The following JSON represents a simplified schema that uses a single class (`experienceevent`) and field group (`experienceevent-all`):

```json
{
  "title": "My Sample Schema",
  "description": "My Sample Description",
  "type": "object",
  "allOf": [
    {
      "$ref": "https://ns.adobe.com/xdm/context/experienceevent"
    },
    {
      "$ref": "https://ns.adobe.com/experience/campaign/experienceevent-all"
    }
  ]
}
```

For any object in the `allOf` array that references a field group, you can add a sibling `meta:refProperty` field to specify which field(s) in the group should be included in the schema.

>[!NOTE]
>
>Each field is specified using a JSON Pointer string, representing the path to the field within its respective field group. The string must begin with a leading slash (`/`) and should not include any `properties` namespaces. For example: `/_experience/campaign/message/id`.

When included as a string, `meta:refProperty` can refer to a single field in a group. Other fields from the same group can be included by using the same `$ref` value in another object with a different `meta:refProperty` value.

```json
{
  "title": "My Sample Schema",
  "description": "An example schema that uses the XDM ExperienceEvent class.",
  "type": "object",
  "allOf": [
    {
      "$ref": "https://ns.adobe.com/xdm/context/experienceevent"
    },
    {
      "$ref": "https://ns.adobe.com/experience/campaign/experienceevent-all",
      "meta:refProperty": "/_experience/campaign/message/id"
    },
    {
      "$ref": "https://ns.adobe.com/experience/campaign/experienceevent-all",
      "meta:refProperty": "/_experience/campaign/message/size"
    }
  ]
}
```

Alternatively, `meta:refProperty` can be provided as an array, letting you specify multiple fields to include from a given group within a single `allOf` list item:

```json
{
  "title": "My Sample Schema",
  "description": "An example schema that uses the XDM ExperienceEvent class.",
  "type": "object",
  "allOf": [
    {
      "$ref": "https://ns.adobe.com/xdm/context/experienceevent"
    },
    {
      "$ref": "https://ns.adobe.com/experience/campaign/experienceevent-all",
      "meta:refProperty": [
        "/_experience/campaign/message/id",
        "/_experience/campaign/message/size",
        "/_experience/campaign/message/variant"
      ]
    }
  ]
}
```

## Add fields using a PUT operation

You can use a PUT request to rewrite an entire schema and configure the fields you want to include under `allOf`.

**API format**

```http
PUT /tenant/schemas/{SCHEMA_ID}
```

| Parameter | Description |
| --- | --- |
| `{SCHEMA_ID}` | The `meta:altId` or URL-encoded `$id` of the schema you want to rewrite. |

**Request**

The following request updates the specific fields included from the field group under the `allOf` array.

```shell
curl -X PUT \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas/_{TENANT_ID}.schemas.d5cc04eb8d50190001287e4c869ebe67 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
        "title": "My Sample Schema",
        "description": "My Sample Description",
        "type": "object",
        "allOf": [
          {
            "$ref": "https://ns.adobe.com/xdm/context/experienceevent"
          },
          {
            "$ref": "https://ns.adobe.com/experience/campaign/experienceevent-all",
            "meta:refProperty": [
              "/_experience/campaign/message/id",
              "/_experience/campaign/message/size",
              "/_experience/campaign/message/variant"
            ]
          }
        ]
      }'
```

**Response**

A successful response returns the details of the updated schema.

```json
{
  "title": "My Sample Schema",
  "description": "My Sample Description",
  "type": "object",
  "allOf": [
    {
      "$ref": "https://ns.adobe.com/xdm/context/experienceevent"
    },
    {
      "$ref": "https://ns.adobe.com/experience/campaign/experienceevent-all",
      "meta:refProperty": [
        "/_experience/campaign/message/id",
        "/_experience/campaign/message/size",
        "/_experience/campaign/message/variant"
      ]
    }
  ],
  "meta:class": "https://ns.adobe.com/xdm/context/experienceevent",
  "meta:abstract": false,
  "meta:extensible": false,
  "meta:extends": [
      "https://ns.adobe.com/xdm/context/experienceevent",
      "https://ns.adobe.com/xdm/data/time-series"
  ],
  "meta:containerId": "tenant",
  "imsOrg": "{ORG_ID}",
  "meta:altId": "_{TENANT_ID}.schemas.d5cc04eb8d50190001287e4c869ebe67",
  "meta:xdmType": "object",
  "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/d5cc04eb8d50190001287e4c869ebe67",
  "version": "1.0",
  "meta:resourceType": "schemas",
  "meta:registryMetadata": {
      "repo:createDate": 1552088461236,
      "repo:lastModifiedDate": 1552088470592,
      "xdm:createdClientId": "{CREATED_CLIENT}",
      "xdm:repositoryCreatedBy": "{CREATED_BY}"
  }
}
```

>[!NOTE]
>
>For more detailed information on PUT requests for schemas, refer to the [schemas endpoint guide](../api/schemas.md#put).

## Add fields using a PATCH operation

You can use a PATCH request to add individual fields to a schema without overwriting others. The Schema Registry supports all standard JSON Patch operations, including `add`, `remove`, and `replace`. For more information on JSON Patch, see the [API fundamentals guide](../../landing/api-fundamentals.md#json-patch).

**API format**

```http
PATCH /tenant/schemas/{SCHEMA_ID}
```

| Parameter | Description |
| --- | --- |
| `{SCHEMA_ID}` | The `meta:altId` or URL-encoded `$id` of the schema you want to rewrite. |

**Request**

The following request adds a new object to the schema's `allOf` array, specifying fields to be added.

```shell
curl -X PATCH \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas/_{TENANT_ID}.schemas.d5cc04eb8d50190001287e4c869ebe67 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '[
        {
          "op": "add",
          "path": "/allOf/-",
          "value":  {
            "$ref": "https://ns.adobe.com/experience/campaign/experienceevent-all",
            "meta:refProperty": [
              "/_experience/campaign/message/id",
              "/_experience/campaign/message/size",
              "/_experience/campaign/message/variant"
            ]
          }
        }
      ]'
```

**Response**

A successful response returns the details of the updated schema.

```json
{
  "title": "My Sample Schema",
  "description": "My Sample Description",
  "type": "object",
  "allOf": [
    {
      "$ref": "https://ns.adobe.com/xdm/context/experienceevent"
    },
    {
      "$ref": "https://ns.adobe.com/experience/campaign/experienceevent-all",
      "meta:refProperty": [
        "/_experience/campaign/message/id",
        "/_experience/campaign/message/size",
        "/_experience/campaign/message/variant"
      ]
    }
  ],
  "meta:class": "https://ns.adobe.com/xdm/context/experienceevent",
  "meta:abstract": false,
  "meta:extensible": false,
  "meta:extends": [
      "https://ns.adobe.com/xdm/context/experienceevent",
      "https://ns.adobe.com/xdm/data/time-series"
  ],
  "meta:containerId": "tenant",
  "imsOrg": "{ORG_ID}",
  "meta:altId": "_{TENANT_ID}.schemas.d5cc04eb8d50190001287e4c869ebe67",
  "meta:xdmType": "object",
  "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/d5cc04eb8d50190001287e4c869ebe67",
  "version": "1.0",
  "meta:resourceType": "schemas",
  "meta:registryMetadata": {
      "repo:createDate": 1552088461236,
      "repo:lastModifiedDate": 1552088470592,
      "xdm:createdClientId": "{CREATED_CLIENT}",
      "xdm:repositoryCreatedBy": "{CREATED_BY}"
  }
}
```

>[!NOTE]
>
>For more detailed information on PATCH requests for schemas, refer to the [schemas endpoint guide](../api/schemas.md#patch).

## Next steps

This guide covered how to use API calls to add individual fields from an existing field group to a schema. For details on how to perform similar field-based tasks in the Platform UI, see the guide on [field-based workflows](../ui/field-based-workflows.md).

For more information on the capabilities of the Schema Registry API, refer to the [API overview](../api/overview.md) for a full list of endpoints and processes.
