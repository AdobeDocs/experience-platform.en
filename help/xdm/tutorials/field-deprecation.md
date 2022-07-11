---
title: Deprecate an XDM Field
description: Learn how to deprecate Experience Data Model (XDM) fields in the Schema Registry API.
exl-id: e49517c4-608d-4e05-8466-75724ca984a8
---
# Deprecate an XDM field

In Experience Data Model (XDM), you can deprecate a field within a schema or custom resource by using the [Schema Registry API](https://developer.adobe.com/experience-platform-apis/references/schema-registry/). Deprecating a field causes it to be hidden from downstream UIs such as the [!UICONTROL Profiles] workspace and Customer Journey Analytics, but it is otherwise a non-breaking change and does not negatively affect existing data flows.

This document covers how to deprecate fields for different XDM resources.

## Getting started

This tutorial requires making calls to the Schema Registry API. Please review the [developer guide](../api/getting-started.md) for important information that you need to know in order to make these API calls. This includes your `{TENANT_ID}`, the concept of "containers", and the required headers for making requests (with special attention to the `Accept` header and its possible values).

## Deprecate a custom field {#custom}

To deprecate a field in a custom class, field group, or data type, update the custom resource through a PUT or PATCH request and add the attribute `meta:status: deprecated` to the field in question.

>[!NOTE]
>
>For general information on updating custom resources in XDM, refer to the following documentation:
>
>* [Update a class](../api/classes.md#patch)
>* [Update a field group](../api/field-groups.md#patch)
>* [Update a data type](../api/data-types.md#patch)

The example API call below deprecates a field in a custom data type.

**API format**

```http
PATCH /tenant/datatypes/{DATA_TYPE_ID}
```

**Request**

The following request deprecates the `expansionArea` field for a data type that describes a real-estate property.

```shell
curl -X PATCH \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/datatypes/_{TENANT_ID}.datatypes.8779fd45d6e4eb074300023a439862bbba359b60d451627a \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'content-type: application/json' \
  -d '[
        { 
          "op": "add",
          "path": "/properties/expansionArea/meta:status",
          "value": "deprecated"
        }
      ]'
```

**Response**

A successful response returns the update details of the custom resource, with the deprecated field containing a `meta:status` value of `deprecated`. The example response below has been truncated for space.

```json
{
  "$id": "https://ns.adobe.com/{TENANT_ID}/datatypes/8779fd45d6e4eb074300023a439862bbba359b60d451627a",
  "meta:altId": "_{TENANT_ID}.datatypes.8779fd45d6e4eb074300023a439862bbba359b60d451627a",
  "meta:resourceType": "datatypes",
  "version": "1.2",
  "title": "Property Details",
  "type": "object",
  "description": "Details relating to a real-estate property operated by the company.",
  "definitions": {
    "property": {
      "properties": {
        "_{TENANT_ID}": {
        "type":"object",
        "properties": {
            "expansionArea": {
              "title": "Expansion Area",
              "description": "Square footage for renovated additions to the property.",
              "type": "integer",
              "meta:status": "deprecated",
            },
            "propertyName": {
              "title": "Property Name",
              "description": "Name of the property",
              "type": "string"
            },
            "propertyCity": {
              "title": "Property City",
              "description": "City where the property is located.",
              "type": "string"
            },
            "propertyCountry": {
              "title": "Property Country",
              "description": "Country where the property is located.",
              "type": "string"
            },
            "phoneNumber": {
              "title": "Phone Number",
              "description": "Primary phone number for the property.",
              "type": "string"
            },
            "propertyType": {
              "type": "string",
              "title": "Property Type",
              "description": "Type and primary use of property.",
              "enum": [
                  "retail",
                  "yoga",
                  "fitness"
              ],
              "meta:enum": {
                  "retail": "Retail Store",
                  "yoga": "Yoga Studio",
                  "fitness": "Fitness Center"
              }
            },
            "propertyConstruction": {
              "$ref": "https://ns.adobe.com/{TENANT_ID}/datatypes/24c643f618647344606222c494bd0102"
            },
            "squareFeet": {
              "title": "Expansion Area",
              "description": "Square footage for renovated additions to the property.",
              "type": "integer",
            }
          }
        }
      }
    }
  },
  "allOf": [
    {
      "$ref": "#/definitions/customFields",
      "type": "object",
      "meta:xdmType": "object"
    }
  ],
  "imsOrg": "{IMS_ORG}",
  "meta:extensible": true,
  "meta:abstract": true,
  "meta:intendedToExtend": [
    "https://ns.adobe.com/xdm/context/profile"
  ],
  "meta:xdmType": "object",
  "meta:registryMetadata": {
    "repo:createdDate": 1594941263588,
    "repo:lastModifiedDate": 1594941538433,
    "xdm:createdClientId": "{CLIENT_ID}",
    "xdm:lastModifiedClientId": "{CLIENT_ID}",
    "xdm:createdUserId": "{USER_ID}",
    "xdm:lastModifiedUserId": "{USER_ID}",
    "eTag": "5e8a5e508eb2ed344c08cb23ed27cfb60c841bec59a2f7513deda0f7af903021",
    "meta:globalLibVersion": "1.15.4"
  },
  "meta:containerId": "tenant",
  "meta:tenantNamespace": "_{TENANT_ID}"
}
```

## Deprecate a standard field in a schema {#standard}

Fields from standard classes, field groups, and data types cannot be deprecated directly. Instead, you can deprecate their use in the individual schemas that employ these standard resources by using a descriptor.

### Create a field deprecation descriptor {#create-descriptor}

To create a descriptor for the schema fields you want to deprecate, make a POST request to the `/tenant/descriptors` endpoint.

**API format**

```http
POST /tenant/descriptors
```

**Request**

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/descriptors \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
        "@type": "xdm:descriptorDeprecated",
        "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/c65ddf08cf2d4a2fe94bd06113bf4bc4c855e12a936410d5",
        "xdm:sourceVersion": 1,
        "xdm:sourceProperty": "/faxPhone"
      }'
```

| Property | Description |
| --- | --- |
| `@type` | The type of descriptor. For a field deprecation descriptor, this value must be set to `xdm:descriptorDeprecated`. |
| `xdm:sourceSchema` | The URI `$id` of the schema you are applying the descriptor to. |
| `xdm:sourceVersion` | The version of the schema you are applying the descriptor to. Should be set to `1`. |
| `xdm:sourceProperty` | The path to the property within the schema that you are applying the descriptor to. If you want to apply the descriptor to multiple properties, you can provide a list of paths in the form of an array (for example, `["/firstName", "/lastName"]`). |

**Response**

```json
{
    "@id": "d882b1202bac0ac71f1e31fbcd9afbcc37f364270186b4b3",
    "@type": "xdm:descriptorDeprecated",
    "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/c65ddf08cf2d4a2fe94bd06113bf4bc4c855e12a936410d5",
    "xdm:sourceVersion": 1,
    "xdm:sourceProperty": "/faxPhone",
    "imsOrg": "{IMS_ORG}",
    "version": "1",
    "meta:containerId": "tenant",
    "meta:sandboxId": "28e74200-e3de-11e9-8f5d-7f27416c5f0d",
    "meta:sandboxType": "production"
}
```

### Verify the deprecated field {#verify-deprecation}

After the descriptor has been applied, you can verify whether the field has been deprecated by looking up the schema in question while using the appropriate `Accept` header.

>[!NOTE]
>
>Showing deprecated fields when listing schemas is currently not supported.

**API format**

```http
GET /tenant/schemas
```

**Request**

To include information on deprecated fields in the API response, you must set the `Accept` header to `application/vnd.adobe.xed-deprecatefield+json; version=1`.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas/_{TENANT_ID}.schemas.c65ddf08cf2d4a2fe94bd06113bf4bc4c855e12a936410d5 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Accept: application/vnd.adobe.xed-deprecatefield+json; version=1'
```

**Response**

A successful response returns the details of the schema, with the deprecated field containing a `meta:status` value of `deprecated`. The example response below has been truncated for space.

```json
"faxPhone": {
    "title": "Fax phone",
    "description": "Fax phone number.",
    "type": "object",
    "meta:xdmType": "object",
    "properties": {},
    "meta:referencedFrom": "https://ns.adobe.com/xdm/context/phonenumber",
    "meta:xdmField": "xdm:faxPhone",
    "meta:status": "deprecated"
}
```

## Next steps

This document covered how to deprecate XDM fields using the Schema Registry API. For more information on configuring fields for custom resources, see the guide on [defining XDM fields in the API](./custom-fields-api.md). For more information on managing descriptors, see the [descriptors endpoint guide](../api/descriptors.md).
