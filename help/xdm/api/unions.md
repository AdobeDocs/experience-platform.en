---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Unions
topic: developer guide
---

# Unions

Unions (or union views) are system-generated, read-only schemas that aggregate the fields of all schemas which share the same class ([!DNL XDM ExperienceEvent] or [!DNL XDM Individual Profile]) and are enabled for [[!DNL Real-time Customer Profile]](../../profile/home.md).

This document covers essential concepts for working with unions in the Schema Registry API, including sample calls for various operations. For more general information about unions in XDM, see the section on unions in the [basics of schema composition](../schema/composition.md#union).

## Union mixins

The [!DNL Schema Registry] automatically includes three mixins within the union schema: `identityMap`, `timeSeriesEvents`, and `segmentMembership`.

### Identity map

A union schema's `identityMap` is a representation of the known identities within the union's associated record schemas. The identity map separates identities into different arrays keyed by namespace. Each listed identity is itself an object containing a unique `id` value.

See the [Identity Service documentation](../../identity-service/home.md) for more information.

### Time-series events

The `timeSeriesEvents` array is a list of time-series events that relate to the record schemas that are associated with the union. When [!DNL Profile] data is exported to datasets, this array is included for each record. This is useful for various use-cases, such as machine learning where models need a profile's entire behavior history in addition to its record attributes.

### Segment membership map

The `segmentMembership` map stores the results of segment evaluations. When segment jobs are successfully run using the [Segmentation API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/segmentation.yaml), the map is updated. `segmentMembership` also stores any pre-evaluated audience segments that are ingested into Platform, allowing for integration with other solutions like Adobe Audience Manager.

See the tutorial on [creating segments using APIs](../../segmentation/tutorials/create-a-segment.md) for more information.

## Enable a schema for union membership

In order for a schema to be included in the merged union view, the "union" tag must be added to the `meta:immutableTags` attribute of the schema. This is done through a PATCH request to update the schema and add the `meta:immutableTags` array with a value of "union".

>[!NOTE]
>
>Immutable tags are tags that are intended to be set, but never removed.

**API format**

```http
PATCH /tenant/schemas/{SCHEMA_ID}
```

| Parameter | Description |
| --- | --- |
| `{SCHEMA_ID}` | The URL-encoded `$id` URI or `meta:altId` of the schema you want to enable for use in [!DNL Profile]. |

**Request**

```SHELL
curl -X PATCH \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas/_{TENANT_ID}.schemas.d5cc04eb8d50190001287e4c869ebe67 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '[
        { "op": "add", "path": "/meta:immutableTags", "value": ["union"]}
      ]'
```

**Response**

A successful response returns the details of the updated schema, which now includes a `meta:immutableTags` array containing the string value, "union".

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
    "imsOrg": "{IMS_ORG}",
    "meta:immutableTags": [
        "union"
    ],
    "meta:altId": "_{TENANT_ID}.schemas.d5cc04eb8d50190001287e4c869ebe67",
    "meta:xdmType": "object",
    "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/d5cc04eb8d50190001287e4c869ebe67",
    "version": "1.2",
    "meta:resourceType": "schemas",
    "meta:registryMetadata": {
        "repo:createDate": 1552088461236,
        "repo:lastModifiedDate": 1552091263267,
        "xdm:createdClientId": "{CREATED_CLIENT}",
        "xdm:repositoryCreatedBy": "{CREATED_BY}"
    }
}
```

## List unions

When you set the "union" tag on a schema, the [!DNL Schema Registry] automatically creates and maintains a union for the class upon which the schema is based. The `$id` for the union is similar to the standard `$id` of a class, with the only difference being that is appended by two underscores and the word "union" (`"__union"`).

To view a list of available unions, you can perform a GET request to the `/unions` endpoint.

**API format**

```http
GET /tenant/unions
```

**Request**

```SHELL
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/unions \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Accept: application/vnd.adobe.xed-id+json'
```

**Response**

A successful response returns HTTP status 200 (OK) and a `results` array in the response body. If unions have been defined, the `title`, `$id`, `meta:altId`, and `version` for each union are provided as objects within the array. If no unions have been defined, HTTP status 200 (OK) is still returned but the `results` array will be empty.

```JSON
{
    "results": [
        {
            "title": "XDM Individual Profile",
            "$id": "https://ns.adobe.com/xdm/context/profile__union",
            "meta:altId": "_xdm.context.profile__union",
            "version": "1"
        },
        {
            "title": "Property",
            "$id": "https://ns.adobe.com/{TENANT_ID}/classes/19e1d8b5098a7a76e2c10a81cbc99590__union",
            "meta:altId": "_{TENANT_ID}.classes.19e1d8b5098a7a76e2c10a81cbc99590__union",
            "version": "1"
        }
    ]
}
```

## Look up a specific union

You can view a specific union by performing a GET request that includes the `$id` and, depending on the Accept header, some or all of the details of the union.

>[!NOTE]
>
>Union lookups are available using the `/unions` and `/schemas` endpoint to enable them for use in [!DNL Profile] exports into a dataset. 

**API format**

```http
GET /tenant/unions/{UNION_ID}
GET /tenant/schemas/{UNION_ID}
```

| Parameter | Description |
| --- | --- |
| `{UNION_ID}` | The URL-encoded `$id` URI of the union you want to lookup. URIs for union schemas are appended with "__union". |

**Request**

```SHELL
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/unions/https%3A%2F%2Fns.adobe.com%2Fxdm%2Fcontext%2Fprofile__union \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Accept: application/vnd.adobe.xed+json; version=1'
```

Union lookup requests require a `version` be included in the Accept header. 

The following Accept headers are available for union schema lookups:

| Accept | Description |
| -------|------------ |
| application/vnd.adobe.xed+json; version={MAJOR_VERSION} | Raw with `$ref` and `allOf`. Includes titles and descriptions. |
| application/vnd.adobe.xed-full+json; version={MAJOR_VERSION} | `$ref` attributes and `allOf` resolved. Includes titles and descriptions. |

**Response**

A successful response returns the union view of all schemas that implement the class whose `$id` was provided in the request path.

The response format depends on the Accept header sent in the request. Experiment with different Accept headers to compare the responses and determine which header is best for your use case. 

```JSON
{
    "type": "object",
    "description": "Union view of all schemas that extend https://ns.adobe.com/xdm/context/profile",
    "allOf": [
        {
            "$ref": "https://ns.adobe.com/xdm/context/profile"
        },
        {
            "$ref": "https://ns.adobe.com/xdm/context/profile-person-details"
        },
        {
            "$ref": "https://ns.adobe.com/{TENANT_ID}/mixins/477bb01d7125b015b4feba7bccc2e599"
        },
        {
            "$ref": "https://ns.adobe.com/xdm/context/profile-personal-details"
        }
    ],
    "meta:extends": [
        "https://ns.adobe.com/xdm/context/profile",
        "https://ns.adobe.com/xdm/data/record",
        "https://ns.adobe.com/xdm/context/identitymap",
        "https://ns.adobe.com/xdm/common/extensible",
        "https://ns.adobe.com/xdm/common/auditable",
        "https://ns.adobe.com/xdm/context/profile-person-details",
        "https://ns.adobe.com/{TENANT_ID}/mixins/477bb01d7125b015b4feba7bccc2e599",
        "https://ns.adobe.com/xdm/context/profile-personal-details"
    ],
    "title": "Union object for https://ns.adobe.com/xdm/context/profile",
    "$id": "https://ns.adobe.com/xdm/context/profile__union",
    "meta:containerId": "tenant",
    "meta:class": "https://ns.adobe.com/xdm/context/profile",
    "meta:altId": "_xdm.context.profile__union",
    "version": "1.0",
    "meta:resourceType": "unions",
    "meta:registryMetadata": {}
}
```

## List schemas in a union

In order to see which schemas are part of a specific union, you can perform a GET request using query parameters to filter the schemas within the tenant container. 

Using the `property` query parameter, you can configure the response to only return schemas containing a `meta:immutableTags` field and a `meta:class` equal to the class whose union you are accessing.

**API Format**

```http
GET /tenant/schemas?property=meta:immutableTags==union&property=meta:class=={CLASS_ID}
```

| Parameter | Description |
| --- | --- |
| `{CLASS_ID}` | The `$id` of the class whose union you want to access. |

**Request**

The following request looks up all schemas that are part of the [!DNL XDM Individual Profile] class union.

```SHELL
curl -X GET \
  'https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas?property=meta:immutableTags==union&property=meta:class==https://ns.adobe.com/xdm/context/profile' \
  -H 'Accept: application/vnd.adobe.xed-id+json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a filtered list of schemas, containing only those that satisfy both requirements. Remember that when using multiple query parameters, an AND relationship is assumed. The format of the response depends on the Accept header sent in the request.

```JSON
{
    "results": [
        {
            "title": "Schema 1",
            "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/142afb78d8b368a5ba97a6cc8fc7e033",
            "meta:altId": "_{TENANT_ID}.schemas.142afb78d8b368a5ba97a6cc8fc7e033",
            "version": "1.2"
        },
        {
            "title": "Schema 2",
            "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/e7297a6ddfc7812ab3a7b504a1ab98da",
            "meta:altId": "_{TENANT_ID}.schemas.e7297a6ddfc7812ab3a7b504a1ab98da",
            "version": "1.5"
        },
        {
            "title": "Schema 3",
            "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/50f960bb810e99a21737254866a477bf",
            "meta:altId": "_{TENANT_ID}.schemas.50f960bb810e99a21737254866a477bf",
            "version": "1.2"
        },
        {
            "title": "Schema 4",
            "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/a39655ca8ea3d5c1f36a463b45fccca8",
            "meta:altId": "_{TENANT_ID}.schemas.a39655ca8ea3d5c1f36a463b45fccca8",
            "version": "1.1"
        },
        {
            "title": "Schema 5",
            "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/c063fac45c6d6285ef33b0e2af09f633",
            "meta:altId": "_{TENANT_ID}.schemas.c063fac45c6d6285ef33b0e2af09f633",
            "version": "1.2"
        },
        {
            "title": "Schema 6",
            "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/dfebb19b93827b70bbad006137812537",
            "meta:altId": "_{TENANT_ID}.schemas.dfebb19b93827b70bbad006137812537",
            "version": "1.7"
        }
    ],
    "_links": {
        "global_schemas": {
            "href": "https://platform.adobe.io/data/foundation/schemaregistry/global/schemas?property=meta:immutableTags==union&property=meta:class==https://ns.adobe.com/xdm/context/profile"
        }
    }
}
```
