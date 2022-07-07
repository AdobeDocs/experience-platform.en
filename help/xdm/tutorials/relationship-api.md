---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;experience data model;Experience data model;Experience Data Model;data model;Data Model;schema registry;Schema Registry;schema;Schema;schemas;Schemas;relationship;Relationship;relationship descriptor;Relationship descriptor;reference identity;Reference identity;
title: Define a Relationship Between Two Schemas Using the Schema Registry API
description: This document provides a tutorial for defining a one-to-one relationship between two schemas defined by your organization using the Schema Registry API.
topic-legacy: tutorial
type: Tutorial
exl-id: ef9910b5-2777-4d8b-a6fe-aee51d809ad5
---
# Define a relationship between two schemas using the [!DNL Schema Registry] API

The ability to understand the relationships between your customers and their interactions with your brand across various channels is an important part of Adobe Experience Platform. Defining these relationships within the structure of your [!DNL Experience Data Model] (XDM) schemas allows you to gain complex insights into your customer data.

While schema relationships can be inferred through the use of the union schema and [!DNL Real-time Customer Profile], this only applies to schemas that share the same class. To establish a relationship between two schemas belonging to different classes, a dedicated relationship field must be added to a source schema, which references the identity of a destination schema.

This document provides a tutorial for defining a one-to-one relationship between two schemas defined by your organization using the [[!DNL Schema Registry API]](https://www.adobe.io/experience-platform-apis/references/schema-registry/). 

## Getting started

This tutorial requires a working understanding of [!DNL Experience Data Model] (XDM) and [!DNL XDM System]. Before beginning this tutorial, please review the following documentation:

* [XDM System in Experience Platform](../home.md): An overview of XDM and its implementation in [!DNL Experience Platform].
    * [Basics of schema composition](../schema/composition.md): An introduction of the building blocks of XDM schemas.
* [[!DNL Real-time Customer Profile]](../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
* [Sandboxes](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

Before starting this tutorial, please review the [developer guide](../api/getting-started.md) for important information that you need to know in order to successfully make calls to the [!DNL Schema Registry] API. This includes your `{TENANT_ID}`, the concept of "containers", and the required headers for making requests (with special attention to the [!DNL Accept] header and its possible values).

## Define a source and destination schema {#define-schemas}

It is expected that you have already created the two schemas that will be defined in the relationship. This tutorial creates a relationship between members of an organization's current loyalty program (defined in a "[!DNL Loyalty Members]" schema) and their favorite hotels (defined in a "[!DNL Hotels]" schema).

Schema relationships are represented by a **source schema** having a field that refers to another field within a **destination schema**. In the steps that follow, "[!DNL Loyalty Members]" will be the source schema, while "[!DNL Hotels]" will act as the destination schema.

>[!IMPORTANT]
>
>In order to establish a relationship, both schemas must have defined primary identities and be enabled for [!DNL Real-time Customer Profile]. See the section on [enabling a schema for use in Profile](./create-schema-api.md#profile) in the schema creation tutorial if you require guidance on how to configure your schemas accordingly.

In order to define a relationship between two schemas, you must first acquire the `$id` values for both schemas. If you know the display names (`title`) of the schemas, you can find their `$id` values by making a GET request to the `/tenant/schemas` endpoint in the [!DNL Schema Registry] API.

**API format**

```http
GET /tenant/schemas
```

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Accept: application/vnd.adobe.xed-id+json'
```

>[!NOTE]
>
>The [!DNL Accept] header `application/vnd.adobe.xed-id+json` returns only the titles, IDs, and versions of the resulting schemas.

**Response**

A successful response returns a list of schemas defined by your organization, including their `name`, `$id`, `meta:altId`, and `version`.

```json
{
    "results": [
        {
            "title": "Newsletter Subscriptions",
            "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/192a66930afad02408429174c311ae73",
            "meta:altId": "_{TENANT_ID}.schemas.192a66930afad02408429174c311ae73",
            "version": "1.2"
        },
        {
            "title": "Loyalty Members",
            "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/2c66c3a4323128d3701289df4468e8a6",
            "meta:altId": "_{TENANT_ID}.schemas.2c66c3a4323128d3701289df4468e8a6",
            "version": "1.5"
        },
        {
            "title": "Hotels",
            "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/d4ad4b8463a67f6755f2aabbeb9e02c7",
            "meta:altId": "_{TENANT_ID}.schemas.d4ad4b8463a67f6755f2aabbeb9e02c7",
            "version": "1.0"
        }
    ],
    "_page": {
        "orderby": "updated",
        "next": null,
        "count": 3
    },
    "_links": {
        "next": null,
        "global_schemas": {
            "href": "https://platform-stage.adobe.io/data/foundation/schemaregistry/global/schemas"
        }
    }
}
```

Record the `$id` values of the two schemas you want to define a relationship between. These values will be used in later steps.

## Define a reference field for the source schema

Within the [!DNL Schema Registry], relationship descriptors work similarly to foreign keys in relational database tables: a field in the source schema acts as a reference to the primary identity field of a destination schema. If your source schema does not have a field for this purpose, you may need to create a schema field group with the new field and add it to the schema. This new field must have a `type` value of `string`.

>[!IMPORTANT]
>
>The source schema cannot use its primary identity as a reference field.

In this tutorial, the destination schema "[!DNL Hotels]" contains an `hotelId` field that serves as the schema's primary identity. However, the source schema "[!DNL Loyalty Members]" does not have a dedicated field to be used as a reference to `hotelId`, and therefore a custom field group needs to be created in order to add a new field to the schema: `favoriteHotel`.

>[!NOTE]
>
>If your source schema already has a dedicated field that you plan to use as a reference field, you can skip ahead to the step on [creating a reference descriptor](#reference-identity).

### Create a new field group

In order to add a new field to a schema, it must first be defined in a field group. You can create a new field group by making a POST request to the `/tenant/fieldgroups` endpoint.

**API format**

```http
POST /tenant/fieldgroups
```

**Request**

The following request creates a new field group that adds a `favoriteHotel` field under the `_{TENANT_ID}` namespace of any schema it is added to.

```shell
curl -X POST\
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/fieldgroups \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'content-type: application/json' \
  -d '{
        "type": "object",
        "title": "Favorite Hotel",
        "meta:intendedToExtend": ["https://ns.adobe.com/xdm/context/profile"],
        "description": "Favorite hotel field group for the Loyalty Members schema.",
        "definitions": {
            "favoriteHotel": {
              "properties": {
                "_{TENANT_ID}": {
                  "type":"object",
                  "properties": {
                    "favoriteHotel": {
                      "title": "Favorite Hotel",
                      "type": "string",
                      "description": "Favorite hotel for a Loyalty Member."
                    }
                  }
                }
              }
            }
        },
        "allOf": [
            {
              "$ref": "#/definitions/favoriteHotel"
            }
        ]
      }'
```

**Response**

A successful response returns the details of the newly created field group.

```json
{
    "$id": "https://ns.adobe.com/{TENANT_ID}/mixins/3387945212ad76ee59b6d2b964afb220",
    "meta:altId": "_{TENANT_ID}.mixins.3387945212ad76ee59b6d2b964afb220",
    "meta:resourceType": "mixins",
    "version": "1.0",
    "type": "object",
    "title": "Favorite Hotel",
    "meta:intendedToExtend": [
        "https://ns.adobe.com/xdm/context/profile"
    ],
    "description": "Favorite hotel field group for the Loyalty Members schema.",
    "definitions": {
        "favoriteHotel": {
            "properties": {
                "_{TENANT_ID}": {
                    "type": "object",
                    "properties": {
                        "favoriteHotel": {
                            "title": "Favorite Hotel",
                            "type": "string",
                            "description": "Favorite hotel for a Loyalty Member.",
                            "meta:xdmType": "string"
                        }
                    },
                    "meta:xdmType": "object"
                }
            },
            "type": "object",
            "meta:xdmType": "object"
        }
    },
    "allOf": [
        {
            "$ref": "#/definitions/favoriteHotel"
        }
    ],
    "meta:xdmType": "object",
    "meta:abstract": true,
    "meta:extensible": true,
    "meta:containerId": "tenant",
    "meta:tenantNamespace": "_{TENANT_ID}",
    "meta:registryMetadata": {
        "eTag": "quM2aMPyb2NkkEiZHNCs/MG34E4=",
        "palm:sandboxName": "prod"
    }
}
```

| Property | Description |
| --- | --- |
| `$id` | The read-only, system generated unique identifier of the new field group. Takes the form of a URI. |

{style="table-layout:auto"}

Record the `$id` URI of the field group, to be used in the next step of adding the field group to the source schema.

### Add the field group to the source schema

Once you have created a field group, you can add it to the source schema by making a PATCH request to the `/tenant/schemas/{SCHEMA_ID}` endpoint.

**API format**

```http
PATCH /tenant/schemas/{SCHEMA_ID}
```

| Parameter | Description |
| --- | --- |
| `{SCHEMA_ID}` | The URL-encoded `$id` URI or `meta:altId` of the source schema. |

{style="table-layout:auto"}

**Request**

The following request adds the "[!DNL Favorite Hotel]" field group to the "[!DNL Loyalty Members]" schema.

```shell
curl -X PATCH \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas/_{TENANT_ID}.schemas.533ca5da28087c44344810891b0f03d9 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '[
    { 
      "op": "add", 
      "path": "/allOf/-", 
      "value":  {
        "$ref": "https://ns.adobe.com/{TENANT_ID}/mixins/3387945212ad76ee59b6d2b964afb220"
      }
    }
  ]'
```

| Property | Description |
| --- | --- |
| `op` | The PATCH operation to be performed. This request uses the `add` operation. |
| `path` | The path to the schema field where the new resource will be added. When adding  field groups to schemas, the value must be "/allOf/-". |
| `value.$ref` | The `$id` of the field group to be added. |

{style="table-layout:auto"}

**Response**

A successful response returns the details of the updated schema, which now includes the `$ref` value of the added field group under its `allOf` array.

```json
{
    "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/2c66c3a4323128d3701289df4468e8a6",
    "meta:altId": "_{TENANT_ID}.schemas.2c66c3a4323128d3701289df4468e8a6",
    "meta:resourceType": "schemas",
    "version": "1.1",
    "type": "object",
    "title": "Loyalty Members",
    "description": "",
    "allOf": [
        {
            "$ref": "https://ns.adobe.com/xdm/context/profile"
        },
        {
            "$ref": "https://ns.adobe.com/xdm/context/profile-person-details"
        },
        {
            "$ref": "https://ns.adobe.com/xdm/context/profile-personal-details"
        },
        {
            "$ref": "https://ns.adobe.com/{TENANT_ID}/mixins/ec16dfa484358f80478b75cde8c430d3"
        },
        {
            "$ref": "https://ns.adobe.com/xdm/context/identitymap"
        },
        {
            "$ref": "https://ns.adobe.com/{TENANT_ID}/mixins/3387945212ad76ee59b6d2b964afb220"
        }
    ],
    "meta:containerId": "tenant",
    "meta:class": "https://ns.adobe.com/xdm/context/profile",
    "meta:abstract": false,
    "meta:extensible": false,
    "meta:tenantNamespace": "_{TENANT_ID}",
    "imsOrg": "{ORG_ID}",
    "meta:extends": [
        "https://ns.adobe.com/xdm/context/profile",
        "https://ns.adobe.com/xdm/data/record",
        "https://ns.adobe.com/xdm/context/identitymap",
        "https://ns.adobe.com/xdm/common/extensible",
        "https://ns.adobe.com/xdm/common/auditable",
        "https://ns.adobe.com/xdm/context/profile-person-details",
        "https://ns.adobe.com/xdm/context/profile-personal-details",
        "https://ns.adobe.com/{TENANT_ID}/mixins/ec16dfa484358f80478b75cde8c430d3",
        "https://ns.adobe.com/{TENANT_ID}/mixins/61969bc646b66a6230a7e8840f4a4d33"
    ],
    "meta:xdmType": "object",
    "meta:registryMetadata": {
        "repo:createdDate": 1557525483804,
        "repo:lastModifiedDate": 1566419670915,
        "xdm:createdClientId": "{API_KEY}",
        "xdm:lastModifiedClientId": "{CLIENT_ID}",
        "eTag": "ITNzu8BVTO5pw9wfCtTTpk6U4WY="
    }
}
```

## Create a reference identity descriptor {#reference-identity}

Schema fields must have a reference identity descriptor applied to them if they are being used as a reference to another schema in a relationship. Since the `favoriteHotel` field in "[!DNL Loyalty Members]" will refer to the `hotelId` field in "[!DNL Hotels]", `favoriteHotel` must be given a reference identity descriptor.

Create a reference descriptor for the source schema by making a POST request to the `/tenant/descriptors` endpoint.

**API format**

```http
POST /tenant/descriptors
```

**Request**

The following request creates a reference descriptor for the `favoriteHotel` field in the source schema "[!DNL Loyalty Members]".

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/descriptors \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
    "@type": "xdm:descriptorReferenceIdentity",
    "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/533ca5da28087c44344810891b0f03d9",
    "xdm:sourceVersion": 1,
    "xdm:sourceProperty": "/_{TENANT_ID}/favoriteHotel",
    "xdm:identityNamespace": "Hotel ID"
  }'
```

| Parameter | Description |
| --- | --- |
| `@type` | The type of descriptor being defined. For reference descriptors the value must be `xdm:descriptorReferenceIdentity`. |
| `xdm:sourceSchema` | The `$id` URL of the source schema. |
| `xdm:sourceVersion` | The version number of the source schema. |
| `sourceProperty` | The path to the field in the source schema that will be used to refer to the destination schema's primary identity. |
| `xdm:identityNamespace` | The identity namespace of the reference field. This must be the same namespace as the destination schema's primary identity. See the [identity namespace overview](../../identity-service/home.md) for more information. |

{style="table-layout:auto"}

**Response**

A successful response returns the details of the newly created reference descriptor for the source field.

```json
{
    "@type": "xdm:descriptorReferenceIdentity",
    "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/533ca5da28087c44344810891b0f03d9",
    "xdm:sourceVersion": 1,
    "xdm:sourceProperty": "/_{TENANT_ID}/favoriteHotel",
    "xdm:identityNamespace": "Hotel ID",
    "meta:containerId": "tenant",
    "@id": "53180e9f86eed731f6bf8bf42af4f59d81949ba6"
}
```

## Create a relationship descriptor {#create-descriptor}

Relationship descriptors establish a one-to-one relationship between a source schema and a destination schema. Once you have defined a reference identity descriptor for the appropriate field in the source schema, you can create a new relationship descriptor by making a POST request to the `/tenant/descriptors` endpoint.

**API format**

```http
POST /tenant/descriptors
```

**Request**

The following request creates a new relationship descriptor, with "[!DNL Loyalty Members]" as the source schema and "[!DNL Hotels]" as the destination schema.

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/descriptors \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
    "@type": "xdm:descriptorOneToOne",
    "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/2c66c3a4323128d3701289df4468e8a6",
    "xdm:sourceVersion": 1,
    "xdm:sourceProperty": "/_{TENANT_ID}/favoriteHotel",
    "xdm:destinationSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/d4ad4b8463a67f6755f2aabbeb9e02c7",
    "xdm:destinationVersion": 1,
    "xdm:destinationProperty": "/_{TENANT_ID}/hotelId"
  }'
```

| Parameter | Description |
| --- | --- |
| `@type` | The type of descriptor to be created. The `@type` value for relationship descriptors is `xdm:descriptorOneToOne`. |
| `xdm:sourceSchema` | The `$id` URL of the source schema. |
| `xdm:sourceVersion` | The version number of the source schema. |
| `xdm:sourceProperty` | The path to the reference field in the source schema. |
| `xdm:destinationSchema` | The `$id` URL of the destination schema. |
| `xdm:destinationVersion` | The version number of the destination schema. |
| `xdm:destinationProperty` | The path to the primary identity field in the destination schema. |

{style="table-layout:auto"}

### Response

A successful response returns the details of the newly created relationship descriptor.

```json
{
    "@type": "xdm:descriptorOneToOne",
    "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/2c66c3a4323128d3701289df4468e8a6",
    "xdm:sourceVersion": 1,
    "xdm:sourceProperty": "/_{TENANT_ID}/favoriteHotel",
    "xdm:destinationSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/d4ad4b8463a67f6755f2aabbeb9e02c7",
    "xdm:destinationVersion": 1,
    "xdm:destinationProperty": "/_{TENANT_ID}/hotelId",
    "meta:containerId": "tenant",
    "@id": "76f6cc7105f4eaab7eb4a5e1cb4804cadc741669"
}
```

## Next steps

By following this tutorial, you have successfully created a one-to-one relationship between two schemas. For more information on working with descriptors using the [!DNL Schema Registry] API, see the [Schema Registry developer guide](../api/descriptors.md). For steps on how to define schema relationships in the UI, see the tutorial on [defining schema relationships using the Schema Editor](relationship-ui.md).
