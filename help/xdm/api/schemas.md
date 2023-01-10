---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;experience data model;Experience data model;Experience Data Model;data model;Data Model;schema registry;Schema Registry;schema;Schema;schemas;Schemas;create
solution: Experience Platform
title: Schemas API Endpoint
description: The /schemas endpoint in the Schema Registry API allows you to programmatically manage XDM schemas within your experience application.
topic-legacy: developer guide
exl-id: d0bda683-9cd3-412b-a8d1-4af700297abf
---
# Schemas endpoint

A schema can be thought of as the blueprint for the data you wish to ingest into Adobe Experience Platform. Each schema is composed of a class and zero or more schema field groups. The `/schemas` endpoint in the [!DNL Schema Registry] API allows you to programmatically manage schemas within your experience application.

## Getting started

The API endpoint used in this guide is part of the [[!DNL Schema Registry] API](https://www.adobe.io/experience-platform-apis/references/schema-registry/). Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Retrieve a list of schemas {#list}

You can list all schemas under the `global` or `tenant` container by making a GET request to `/global/schemas` or `/tenant/schemas`, respectively.

>[!NOTE]
>
>When listing resources, the Schema Registry limits result sets to 300 items. In order to return resources beyond this limit, you must use paging parameters. It is also recommended that you use additional query parameters to filter results and reduce the number of resources returned. See the section on [query parameters](./appendix.md#query) in the appendix document for more information.

**API format**

```http
GET /{CONTAINER_ID}/schemas?{QUERY_PARAMS}
```

| Parameter | Description |
| --- | --- |
| `{CONTAINER_ID}` | The container that houses the schemas you want to retrieve: `global` for Adobe-created schemas or `tenant` for schemas owned by your organization. |
| `{QUERY_PARAMS}` | Optional query parameters to filter results by. See the [appendix document](./appendix.md#query) for a list of available parameters. |

{style="table-layout:auto"}

**Request**

The following request retrieves a list of schemas from the `tenant` container, using an `orderby` query parameter to sort the results by their `title` attribute.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas?orderby=title \
  -H 'Accept: application/vnd.adobe.xed-id+json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

The response format depends on the `Accept` header sent in the request. The following `Accept` headers are available for listing schemas:

| `Accept` header | Description |
| --- | --- |
| `application/vnd.adobe.xed-id+json` | Returns a short summary of each resource. This is the recommended header for listing resources. (Limit: 300) |
| `application/vnd.adobe.xed+json` | Returns full JSON schema for each resource, with original `$ref` and `allOf` included. (Limit: 300) |

{style="table-layout:auto"}

**Response**

The request above used the `application/vnd.adobe.xed-id+json` `Accept` header, therefore the response includes only the `title`, `$id`, `meta:altId`, and `version` attributes for each schema. Using the other `Accept` header (`application/vnd.adobe.xed+json`) returns all attributes of each schema. Select the appropriate `Accept` header depending on the information you require in your response.

```json
{
  "results": [
    {
      "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/0238be93d3e7a06aec5e0655955901ec",
      "meta:altId": "_{TENANT_ID}.schemas.0238be93d3e7a06aec5e0655955901ec",
      "version": "1.4",
      "title": "Hotels"
    },
    {
      "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/0ef4ce0d390f0809fad490802f53d30b",
      "meta:altId": "_{TENANT_ID}.schemas.0ef4ce0d390f0809fad490802f53d30b",
      "version": "1.0",
      "title": "Loyalty Members"
    }
  ],
  "_page": {
        "orderby": "title",
        "next": null,
        "count": 2
    },
    "_links": {
        "next": null,
        "global_schemas": {
            "href": "https://platform.adobe.io/data/foundation/schemaregistry/global/schemas"
        }
    }
}
```

## Look up a schema {#lookup}

You can look up a specific schema by making a GET request that includes the schema's ID in the path.

**API format**

```http
GET /{CONTAINER_ID}/schemas/{SCHEMA_ID}
```

| Parameter | Description |
| --- | --- |
| `{CONTAINER_ID}` | The container that houses the schema you want to retrieve: `global` for an Adobe-created schema or `tenant` for a schema owned by your organization. |
| `{SCHEMA_ID}` | The `meta:altId` or URL-encoded `$id` of the schema you want to look up. |

{style="table-layout:auto"}

**Request**

The following request retrieves a schema specified by its `meta:altId` value in the path. 

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas/_{TENANT_ID}.schemas.f579a0b5f992c69458ea408ec36571f7da9de15901bab116 \
  -H 'Accept: application/vnd.adobe.xed+json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

The response format depends on the `Accept` header sent in the request. All lookup requests require a `version` be included in the `Accept` header. The following `Accept` headers are available:

| `Accept` header | Description |
| ------- | ------------ |
| `application/vnd.adobe.xed+json; version=1` | Raw with `$ref` and `allOf`, has titles and descriptions. |
| `application/vnd.adobe.xed-full+json; version=1` | `$ref` and `allOf` resolved, has titles and descriptions. |
| `application/vnd.adobe.xed-notext+json; version=1` | Raw with `$ref` and `allOf`, no titles or descriptions. |
| `application/vnd.adobe.xed-full-notext+json; version=1` | `$ref` and `allOf` resolved, no titles or descriptions. |
| `application/vnd.adobe.xed-full-desc+json; version=1` | `$ref` and `allOf` resolved, descriptors included. |
| `application/vnd.adobe.xed-deprecatefield+json; version=1` |  `$ref` and `allOf` resolved, has titles and descriptions. Deprecated fields are indicated with a `meta:status` attribute of `deprecated`. |

{style="table-layout:auto"}

**Response**

A successful response returns the details of the schema. The fields that are returned depend on the `Accept` header sent in the request. Experiment with different `Accept` headers to compare the responses and determine which header is best for your use case.

```json
{
  "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/20af3f1d4b175f27ba59529d1b51a0c79fc25df454117c80",
  "meta:altId": "_{TENANT_ID}.schemas.20af3f1d4b175f27ba59529d1b51a0c79fc25df454117c80",
  "meta:resourceType": "schemas",
  "version": "1.1",
  "title": "Example schema",
  "type": "object",
  "description": "An example schema created within the tenant container.",
  "allOf": [
      {
          "$ref": "https://ns.adobe.com/xdm/context/profile",
          "type": "object",
          "meta:xdmType": "object"
      },
      {
          "$ref": "https://ns.adobe.com/{TENANT_ID}/mixins/443fe51457047d958f4a97853e64e0eca93ef34d7990583b",
          "type": "object",
          "meta:xdmType": "object"
      }
  ],
  "imsOrg": "{ORG_ID}",
  "meta:extensible": false,
  "meta:abstract": false,
  "meta:extends": [
      "https://ns.adobe.com/{TENANT_ID}/mixins/443fe51457047d958f4a97853e64e0eca93ef34d7990583b",
      "https://ns.adobe.com/xdm/common/auditable",
      "https://ns.adobe.com/xdm/data/record",
      "https://ns.adobe.com/xdm/context/profile"
  ],
  "meta:xdmType": "object",
  "meta:registryMetadata": {
      "repo:createdDate": 1602872911226,
      "repo:lastModifiedDate": 1603381419889,
      "xdm:createdClientId": "{CLIENT_ID}",
      "xdm:lastModifiedClientId": "{CLIENT_ID}",
      "xdm:createdUserId": "{USER_ID}",
      "xdm:lastModifiedUserId": "{USER_ID}",
      "eTag": "84b4da79b7445a4bf1c59269e718065effddb983c492f48e223d49c049c6d589",
      "meta:globalLibVersion": "1.15.4"
  },
  "meta:class": "https://ns.adobe.com/xdm/context/profile",
  "meta:containerId": "tenant",
  "meta:sandboxId": "ff0f6870-c46d-11e9-8ca3-036939a64204",
  "meta:sandboxType": "production",
  "meta:tenantNamespace": "_{TENANT_ID}"
}
```

## Create a schema {#create}

The schema composition process begins by assigning a class. The class defines key behavioral aspects of the data (record or time series), as well as the minimum fields that are required to describe the data that will be ingested.

>[!NOTE]
>
>The example call below is only a baseline example of how to create a schema in the API, with the minimal composition requirements of a class and no field groups. For complete steps on how to create a schema in the API, including how to assign fields using field groups and data types, see the [schema creation tutorial](../tutorials/create-schema-api.md).

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
  -H 'x-gw-ims-org-id: {ORG_ID}' \
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
| `allOf` | An array of objects, with each object referring to a class or field group whose fields the schema implements. Each object contains a single property (`$ref`) whose value represents the `$id` of the class or field group the new schema will implement. One class must be provided, with zero or more additional field groups. In the above example, the single object in the `allOf` array is the schema's class. |

{style="table-layout:auto"}

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
    "imsOrg": "{ORG_ID}",
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

Performing a GET request to [list all schemas](#list) in the tenant container would now include the new schema. You can perform a [lookup (GET) request](#lookup) using the URL-encoded `$id` URI to view the new schema directly.

To add additional fields to a schema, you can perform a [PATCH operation](#patch) to add field groups to the schema's `allOf` and `meta:extends` arrays.

## Update a schema {#put}

You can replace an entire schema through a PUT operation, essentially re-writing the resource. When updating a schema through a PUT request, the body must include all of the fields that would be required when [creating a new schema](#create) in a POST request.

>[!NOTE]
>
>If you only want to update part of a schema instead of replacing it entirely, see the section on [updating a portion of a schema](#patch).

**API format**

```http
PUT /tenant/schemas/{SCHEMA_ID}
```

| Parameter | Description |
| --- | --- |
| `{SCHEMA_ID}` | The `meta:altId` or URL-encoded `$id` of the schema you want to re-write. |

{style="table-layout:auto"}

**Request**

The following request replaces an existing schema, changing its `title`, `description`, and `allOf` attributes.

```SHELL
curl -X PUT \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas/_{TENANT_ID}.schemas.d5cc04eb8d50190001287e4c869ebe67 \
  -H 'Authorization: Bearer {ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "title":"Commercial Property Information",
        "description": "Information related to commercial properties.",
        "type": "object",
        "allOf": [ 
          { 
            "$ref": "https://ns.adobe.com/{TENANT_ID}/classes/01b7b1745e8ac4ed1e8784ec91b6afa7" 
          } 
        ]
      }'
```

**Response**

A successful response returns the details of the updated schema.

```JSON
{
    "title":"Commercial Property Information",
    "description": "Information related to commercial properties.",
    "type": "object",
    "allOf": [
        {
            "$ref": "https://ns.adobe.com/{TENANT_ID}/classes/01b7b1745e8ac4ed1e8784ec91b6afa7"
        }
    ],
    "meta:class": "https://ns.adobe.com/{TENANT_ID}/classes/01b7b1745e8ac4ed1e8784ec91b6afa7",
    "meta:abstract": false,
    "meta:extensible": false,
    "meta:extends": [
        "https://ns.adobe.com/{TENANT_ID}/classes/01b7b1745e8ac4ed1e8784ec91b6afa7",
        "https://ns.adobe.com/xdm/data/record"
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

## Update a portion of a schema {#patch}

You can update a portion of a schema by using a PATCH request. The [!DNL Schema Registry] supports all standard JSON Patch operations, including `add`, `remove`, and `replace`. For more information on JSON Patch, see the [API fundamentals guide](../../landing/api-fundamentals.md#json-patch).

>[!NOTE]
>
>If you want to replace an entire resource with new values instead of updating individual fields, see the section on [replacing a schema using a PUT operation](#put).

One of the most common PATCH operations involves adding previously defined field groups to a schema, as demonstrated by the example below.

**API format**

```http
PATCH /tenant/schemas/{SCHEMA_ID} 
```

| Parameter | Description |
| --- | --- |
| `{SCHEMA_ID}` | The URL-encoded `$id` URI or `meta:altId` of the schema you want to update. |

{style="table-layout:auto"}

**Request**

The example request below adds a new field group to a schema by adding that field group's `$id` value to both the `meta:extends` and `allOf` arrays. 

The request body takes the form of an array, with each listed object representing a specific change to an individual field. Each object includes the operation to be performed (`op`), which field the operation should be performed on (`path`), and what information should be included in that operation (`value`).

```SHELL
curl -X PATCH\
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas/_{TENANT_ID}.schemas.d5cc04eb8d50190001287e4c869ebe67 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'content-type: application/json' \
  -d '[
        { 
          "op": "add",
          "path": "/meta:extends/-",
          "value":  "https://ns.adobe.com/{TENANT_ID}/mixins/e49cbb2eec33618f686b8344b4597ecf"
        },
        {
          "op": "add",
          "path": "/allOf/-",
          "value":  {
            "$ref": "https://ns.adobe.com/{TENANT_ID}/mixins/e49cbb2eec33618f686b8344b4597ecf"
          }
        }
      ]'
```

**Response**

The response shows that both operations were performed successfully. The field group `$id` has been added to the `meta:extends` array and a reference (`$ref`) to the field group `$id` now appears in the `allOf` array.

```JSON
{
    "title": "Property Information",
    "description": "Property-related information.",
    "type": "object",
    "allOf": [
        {
            "$ref": "https://ns.adobe.com/{TENANT_ID}/classes/19e1d8b5098a7a76e2c10a81cbc99590"
        },
        {
            "$ref": "https://ns.adobe.com/{TENANT_ID}/mixins/e49cbb2eec33618f686b8344b4597ecf"
        }
    ],
    "meta:class": "https://ns.adobe.com/{TENANT_ID}/classes/19e1d8b5098a7a76e2c10a81cbc99590",
    "meta:abstract": false,
    "meta:extensible": false,
    "meta:extends": [
        "https://ns.adobe.com/{TENANT_ID}/classes/19e1d8b5098a7a76e2c10a81cbc99590",
        "https://ns.adobe.com/xdm/data/record",
        "https://ns.adobe.com/{TENANT_ID}/mixins/e49cbb2eec33618f686b8344b4597ecf"
    ],
    "meta:containerId": "tenant",
    "imsOrg": "{ORG_ID}",
    "meta:altId": "_{TENANT_ID}.schemas.d5cc04eb8d50190001287e4c869ebe67",
    "meta:xdmType": "object",
    "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/d5cc04eb8d50190001287e4c869ebe67",
    "version": "1.1",
    "meta:resourceType": "schemas",
    "meta:registryMetadata": {
        "repo:createDate": 1552088461236,
        "repo:lastModifiedDate": 1552088649634,
        "xdm:createdClientId": "{CREATED_CLIENT}",
        "xdm:repositoryCreatedBy": "{CREATED_BY}"
    }
}
```

## Enable a schema for use in Real-Time Customer Profile {#union}

In order for a schema to participate in [Real-Time Customer Profile](../../profile/home.md), you must add a `union` tag to the schema's `meta:immutableTags` array. You can accomplish this by making a PATCH request for the schema in question.

>[!IMPORTANT]
>
>Immutable tags are tags that are intended to be set, but never removed.

**API format**

```http
PATCH /tenant/schemas/{SCHEMA_ID} 
```

| Parameter | Description |
| --- | --- |
| `{SCHEMA_ID}` | The URL-encoded `$id` URI or `meta:altId` of the schema you want to enable. |

{style="table-layout:auto"}

**Request**

The example request below adds a `meta:immutableTags` array to an existing schema, giving the array a single string value of `union` to enable it for use in Profile.

```SHELL
curl -X PATCH\
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas/_{TENANT_ID}.schemas.d5cc04eb8d50190001287e4c869ebe67 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'content-type: application/json' \
  -d '[
        {
          "op": "add",
          "path": "/meta:immutableTags",
          "value": ["union"]
        }
      ]'
```

**Response**

A successful response returns the details of the updated schema, showing that the `meta:immutableTags` array has been added.

```JSON
{
    "title": "Property Information",
    "description": "Property-related information.",
    "type": "object",
    "allOf": [
        {
            "$ref": "https://ns.adobe.com/{TENANT_ID}/classes/19e1d8b5098a7a76e2c10a81cbc99590"
        },
        {
            "$ref": "https://ns.adobe.com/{TENANT_ID}/mixins/e49cbb2eec33618f686b8344b4597ecf"
        }
    ],
    "meta:class": "https://ns.adobe.com/{TENANT_ID}/classes/19e1d8b5098a7a76e2c10a81cbc99590",
    "meta:abstract": false,
    "meta:extensible": false,
    "meta:extends": [
        "https://ns.adobe.com/{TENANT_ID}/classes/19e1d8b5098a7a76e2c10a81cbc99590",
        "https://ns.adobe.com/xdm/data/record",
        "https://ns.adobe.com/{TENANT_ID}/mixins/e49cbb2eec33618f686b8344b4597ecf"
    ],
    "meta:containerId": "tenant",
    "imsOrg": "{ORG_ID}",
    "meta:altId": "_{TENANT_ID}.schemas.d5cc04eb8d50190001287e4c869ebe67",
    "meta:xdmType": "object",
    "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/d5cc04eb8d50190001287e4c869ebe67",
    "version": "1.1",
    "meta:resourceType": "schemas",
    "meta:registryMetadata": {
        "repo:createDate": 1552088461236,
        "repo:lastModifiedDate": 1552088649634,
        "xdm:createdClientId": "{CREATED_CLIENT}",
        "xdm:repositoryCreatedBy": "{CREATED_BY}"
    },
    "meta:immutableTags": [
      "union"
    ]
}
```

You can now view the union for this schema's class to confirm that the schema's fields are represented. See the [unions endpoint guide](./unions.md) for more information.

## Delete a schema {#delete}

It may occasionally be necessary to remove a schema from the Schema Registry. This is done by performing a DELETE request with the schema ID provided in the path.

**API format**

```http
DELETE /tenant/schemas/{SCHEMA_ID}
```

| Parameter | Description |
| --- | --- |
| `{SCHEMA_ID}` | The URL-encoded `$id` URI or `meta:altId` of the schema you want to delete. |

{style="table-layout:auto"}

**Request**

```shell
curl -X DELETE \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas/_{TENANT_ID}.schemas.d5cc04eb8d50190001287e4c869ebe67 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 204 (No Content) and a blank body.

You can confirm the deletion by attempting a lookup (GET) request to the schema. You will need to include an `Accept` header in the request, but should receive an HTTP status 404 (Not Found) because the schema has been removed from the Schema Registry.
