---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;experience data model;Experience data model;Experience Data Model;data model;Data Model;schema registry;Schema Registry;union;Union;unions;Unions;segmentMembership;timeSeriesEvents;
solution: Experience Platform
title: Unions API Endpoint
description: The /unions endpoint in the Schema Registry API allows you to programmatically manage XDM union schemas in your experience application.
exl-id: d0ece235-72e8-49d9-856b-5dba44e16ee7
---
# Unions endpoint

Unions (or union views) are system-generated, read-only schemas that aggregate the fields of all schemas which share the same class ([!DNL XDM ExperienceEvent] or [!DNL XDM Individual Profile]) and are enabled for [[!DNL Real-Time Customer Profile]](../../profile/home.md).

This document covers essential concepts for working with unions in the Schema Registry API, including sample calls for various operations. For more general information about unions in XDM, see the section on unions in the [basics of schema composition](../schema/composition.md#union).

## Union schema fields

The [!DNL Schema Registry] automatically includes three key fields within a union schema: `identityMap`, `timeSeriesEvents`, and `segmentMembership`.

### Identity map

A union schema's `identityMap` is a representation of the known identities within the union's associated record schemas. The identity map separates identities into different arrays keyed by namespace. Each listed identity is itself an object containing a unique `id` value. See the [Identity Service documentation](../../identity-service/home.md) for more information.

### Time-series events

The `timeSeriesEvents` array is a list of time-series events that relate to the record schemas that are associated with the union. When profile data is exported to datasets, this array is included for each record. This is useful for various use-cases, such as machine learning where models need a profile's entire behavior history in addition to its record attributes.

### Segment membership map

The `segmentMembership` map stores the results of evaluating a segment definition. When segment jobs are successfully run using the [Segmentation API](https://www.adobe.io/experience-platform-apis/references/segmentation/), the map is updated. `segmentMembership` also stores any pre-evaluated audiences that are ingested into Platform, allowing for integration with other solutions like Adobe Audience Manager. See the tutorial on [creating audiences using APIs](../../segmentation/tutorials/create-a-segment.md) for more information.

## Retrieve a list of unions {#list}

When you set the `union` tag on a schema, the [!DNL Schema Registry] automatically adds the schema to the union for the class upon which the schema is based. If no union exists for the class in question, a new union is automatically created. The `$id` for the union is similar to the standard `$id` of other [!DNL Schema Registry] resources, with the only difference being that is appended by two underscores and the word "union" (`__union`).

You can view a list of available unions by making GET request to the `/tenant/unions` endpoint.

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
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Accept: application/vnd.adobe.xed-id+json'
```

The response format depends on the `Accept` header sent in the request. The following `Accept` headers are available for listing unions:

| `Accept` header | Description |
| --- | --- |
| `application/vnd.adobe.xed-id+json` | Returns a short summary of each resource. This is the recommended header for listing resources. (Limit: 300) |
| `application/vnd.adobe.xed+json` | Returns full JSON class for each resource, with original `$ref` and `allOf` included. (Limit: 300) |

{style="table-layout:auto"}

**Response**

A successful response returns HTTP status 200 (OK) and a `results` array in the response body. If unions have been defined, the details for each union are provided as objects within the array. If no unions have been defined, HTTP status 200 (OK) is still returned but the `results` array will be empty.

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

## Look up a union {#lookup}

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
| `{UNION_ID}` | The URL-encoded `$id` URI of the union you want to look up. URIs for union schemas are appended with "__union". |

{style="table-layout:auto"}

**Request**

```SHELL
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/unions/https%3A%2F%2Fns.adobe.com%2Fxdm%2Fcontext%2Fprofile__union \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Accept: application/vnd.adobe.xed+json; version=1'
```

Union lookup requests require a `version` be included in the Accept header. 

The following Accept headers are available for union schema lookups:

| Accept | Description |
| -------|------------ |
| `application/vnd.adobe.xed+json; version=1` | Raw with `$ref` and `allOf`. Includes titles and descriptions. |
| `application/vnd.adobe.xed-full+json; version=1` | `$ref` attributes and `allOf` resolved. Includes titles and descriptions. |

{style="table-layout:auto"}

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

## Enable a schema for union membership {#enable}

In order for a schema to be included in the union for its class, a `union` tag must be added to the schema's `meta:immutableTags` attribute. You can accomplish this by making a PATCH request to add an `meta:immutableTags` array with a single string value of `union` to the schema in question. See the [schemas endpoint guide](./schemas.md#union) for a detailed example.

## List schemas in a union {#list-schemas}

In order to see which schemas are part of a specific union, you can perform a GET request to the `/tenant/schemas` endpoint. Using the `property` query parameter, you can configure the response to only return schemas containing a `meta:immutableTags` field and a `meta:class` equal to the class whose union you are accessing.

**API Format**

```http
GET /tenant/schemas?property=meta:immutableTags==union&property=meta:class=={CLASS_ID}
```

| Parameter | Description |
| --- | --- |
| `{CLASS_ID}` | The `$id` of the class whose union-enabled schemas you want to list. |

{style="table-layout:auto"}

**Request**

The following request retrieves a list of all schemas that are part of the union for the [!DNL XDM Individual Profile] class.

```SHELL
curl -X GET \
  'https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas?property=meta:immutableTags==union&property=meta:class==https://ns.adobe.com/xdm/context/profile' \
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

A successful response returns a filtered list of schemas, containing only those that belong to the specified class which have been enabled for union membership. Remember that when using multiple query parameters, an AND relationship is assumed.

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
