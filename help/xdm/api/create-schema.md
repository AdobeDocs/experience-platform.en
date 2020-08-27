---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create a schema
topic: developer guide
---

# Create a schema

A schema can be thought of as the blueprint for the data you wish to ingest into [!DNL Experience Platform]. Each schema is composed of a class and zero or more mixins. In other words, you do not have to add a mixin in order to define a schema, but in most cases at least one mixin will be used. 

The schema composition process begins by assigning a class. The class defines key behavioral aspects of the data (record or time series), as well as the minimum fields that are required to describe the data that will be ingested.

**API format**

```http
POST /tenant/schemas
```

**Request**

The request must include an `allOf` attribute which references the `$id` of a class. This attribute defines the "base class" that the schema will implement. In this example, the base class is a "Property Information" class that was created previously.

```SHELL
curl -X POST \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas \
  -H 'Authorization: Bearer {ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "title":"Property Information",
        "description": "Property-related information.",
        "type": "object",
        "allOf": [ 
          { 
            "$ref": "https://ns.adobe.com/{TENANT_ID}/classes/19e1d8b5098a7a76e2c10a81cbc99590" 
          } 
        ]
      }'
```

| Property | Description |
| --- | --- |
| `allOf > $ref` | The `$id` value of the class the new schema will implement. |

**Response**

A successful response returns HTTP status 201 (Created) and a payload containing the details of the newly created schema, including the `$id`, `meta:altId`, and `version`. These values are read-only and are assigned by the [!DNL Schema Registry].

```JSON
{
    "title": "Property Information",
    "description": "Property-related information.",
    "type": "object",
    "allOf": [
        {
            "$ref": "https://ns.adobe.com/{TENANT_ID}/classes/19e1d8b5098a7a76e2c10a81cbc99590"
        }
    ],
    "meta:class": "https://ns.adobe.com/{TENANT_ID}/classes/19e1d8b5098a7a76e2c10a81cbc99590",
    "meta:abstract": false,
    "meta:extensible": false,
    "meta:extends": [
        "https://ns.adobe.com/{TENANT_ID}/classes/19e1d8b5098a7a76e2c10a81cbc99590",
        "https://ns.adobe.com/xdm/data/record"
    ],
    "meta:containerId": "tenant",
    "imsOrg": "{IMS_ORG}",
    "meta:altId": "_{TENANT_ID}.schemas.d5cc04eb8d50190001287e4c869ebe67",
    "meta:xdmType": "object",
    "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/d5cc04eb8d50190001287e4c869ebe67",
    "version": "1.0",
    "meta:resourceType": "schemas",
    "meta:registryMetadata": {
        "repo:createDate": 1552088461236,
        "repo:lastModifiedDate": 1552088461236,
        "xdm:createdClientId": "{CREATED_CLIENT}",
        "xdm:repositoryCreatedBy": "{CREATED_BY}"
    }
}
```

Performing a GET request to list all schemas in the tenant container would now include the Property Information schema, or you can perform a lookup (GET) request using the URL-encoded `$id` URI to view the new schema directly. Remember to include the `version` in the Accept header for all lookup requests.
