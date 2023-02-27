---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;experience data model;Experience data model;Experience Data Model;data model;Data Model;schema registry;Schema Registry;descriptor;Descriptor;descriptors;Descriptors;identity;Identity;friendly name;Friendly name;alternatedisplayinfo;reference;Reference;relationship;Relationship
solution: Experience Platform
title: Descriptors API Endpoint
description: The /descriptors endpoint in the Schema Registry API allows you to programmatically manage XDM descriptors within your experience application.
exl-id: bda1aabd-5e6c-454f-a039-ec22c5d878d2
---
# Descriptors endpoint

Schemas define a static view of data entities, but do not provide specific details on how data based on these schemas (datasets, for example) may relate to one another. Adobe Experience Platform allows you to describe these relationships and other interpretive metadata about a schema using descriptors. 

Schema descriptors are tenant-level metadata, meaning they are unique to your IMS Organization and all descriptor operations take place in the tenant container. 

Each schema can have one or more schema descriptor entities applied to it. Each schema descriptor entity includes a descriptor `@type` and the `sourceSchema` to which it applies. Once applied, these descriptors will apply to all datasets created using the schema.

The `/descriptors` endpoint in the [!DNL Schema Registry] API allows you to programmatically manage descriptors within your experience application.

## Getting started

The endpoint used in this guide is part of the [[!DNL Schema Registry] API](https://developer.adobe.com/experience-platform-apis/references/schema-registry/). Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Retrieve a list of descriptors {#list}

You can list all descriptors that have been defined by your organization by making a GET request to `/tenant/descriptors`.

**API format**

```http
GET /tenant/descriptors
```

**Request**

```SHELL
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/descriptors \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Accept: application/vnd.adobe.xdm-link+json'
```

The response format depends on the `Accept` header sent in the request. Notice that the `/descriptors` endpoint uses `Accept` headers that are different than all other endpoints in the [!DNL Schema Registry] API.

>[!IMPORTANT]
>
>Descriptors require unique `Accept` headers that replace `xed` with `xdm`, and also offer a `link` option that is unique to descriptors. The proper `Accept` headers have been included in the examples calls below, but take extra caution to ensure the correct headers are being used when working with descriptors.

| `Accept` header | Description |
| -------|------------ |
| `application/vnd.adobe.xdm-id+json` | Returns an array of descriptor IDs |
| `application/vnd.adobe.xdm-link+json` | Returns an array of descriptor API paths |
| `application/vnd.adobe.xdm+json` | Returns an array of expanded descriptor objects |
| `application/vnd.adobe.xdm-v2+json` | This `Accept` header must be used in order to utilize paging capabilities. |

{style="table-layout:auto"}

**Response**

The response includes an array for each descriptor type that has defined descriptors. In other words, if there are no descriptors of a certain `@type` defined, the registry will not return an empty array for that descriptor type. 

When using the `link` `Accept` header, each descriptor is shown as an array item in the format `/{CONTAINER}/descriptors/{DESCRIPTOR_ID}`

```JSON
{
  "xdm:alternateDisplayInfo": [
    "/tenant/descriptors/85dc1bc8b91516ac41163365318e38a9f1e4f351",
    "/tenant/descriptors/49bd5abb5a1310ee80ebc1848eb508d383a462cf",
    "/tenant/descriptors/b3b3e548f1c653326bcf5459ceac4140fc0b9e08"
  ],
  "xdm:descriptorIdentity": [
    "/tenant/descriptors/f7a4bc25429496c4740f8f9a7a49ba96862c5379"
  ],
  "xdm:descriptorOneToOne": [
    "/tenant/descriptors/cb509fd6f8ab6304e346905441a34b58a0cd481a"
  ]
}
```

## Look up a descriptor {#lookup}

If you wish to view the details of a specific descriptor, you can look up (GET) an individual descriptor using its `@id`.

**API format**

```http
GET /tenant/descriptors/{DESCRIPTOR_ID}
```

| Parameter | Description |
| --- | --- |
| `{DESCRIPTOR_ID}` | The `@id` of the descriptor you want to look up. |

{style="table-layout:auto"}

**Request**

The following request retrieves a descriptor by its `@id` value. Descriptors are not versioned, therefore no `Accept` header is required in the lookup request.

```SHELL
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/descriptors/f3a1dfa38a4871cf4442a33074c1f9406a593407 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the details of the descriptor, including its `@type` and `sourceSchema`, as well as additional information that varies depending on the type of descriptor. The returned `@id` should match the descriptor `@id` provided in the request.

```JSON
{
  "@type": "xdm:descriptorIdentity",
  "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/fbc52b243d04b5d4f41eaa72a8ba58be",
  "xdm:sourceVersion": 1,
  "xdm:sourceProperty": "/personalEmail/address",
  "xdm:namespace": "Email",
  "xdm:property": "xdm:code",
  "xdm:isPrimary": false,
  "createdUser": "{CREATED_USER}",
  "imsOrg": "{ORG_ID}",
  "createdClient": "{CREATED_CLIENT}",
  "updatedUser": "{UPDATED_USER}",
  "created": 1548899346989,
  "updated": 1548899346989,
  "meta:containerId": "tenant",
  "@id": "f3a1dfa38a4871cf4442a33074c1f9406a593407"
}
```

## Create a descriptor {#create}

You can create a new descriptor by making a POST request to the `/tenant/descriptors` endpoint.

>[!IMPORTANT]
>
>The [!DNL Schema Registry] allows you to define several different descriptor types. Each descriptor type requires its own specific fields to be sent in the request body. See the [appendix](#defining-descriptors) for a complete list of descriptors and the fields necessary to define them.

**API format**

```http
POST /tenant/descriptors
```

**Request**

The following request defines an identity descriptor on an "email address" field in a sample schema. This tells [!DNL Experience Platform] to use the email address as an identifier to help stitch together information about the individual.

```SHELL
curl -X POST \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/descriptors \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '
      {
        "@type": "xdm:descriptorIdentity",
        "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/fbc52b243d04b5d4f41eaa72a8ba58be",
        "xdm:sourceVersion": 1,
        "xdm:sourceProperty": "/personalEmail/address",
        "xdm:namespace": "Email",
        "xdm:property": "xdm:code",
        "xdm:isPrimary": false
      }'
```

**Response**

A successful response returns HTTP status 201 (Created) and the details of the newly created descriptor, including its `@id`. The `@id` is a read-only field assigned by the [!DNL Schema Registry] and used for referencing the descriptor in the API.

```JSON
{
  "@type": "xdm:descriptorIdentity",
  "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/fbc52b243d04b5d4f41eaa72a8ba58be",
  "xdm:sourceVersion": 1,
  "xdm:sourceProperty": "/personalEmail/address",
  "xdm:namespace": "Email",
  "xdm:property": "xdm:code",
  "xdm:isPrimary": false,
  "meta:containerId": "tenant",
  "@id": "f3a1dfa38a4871cf4442a33074c1f9406a593407"
}
```

## Update a descriptor {#put}

You can update a descriptor by including its `@id` in the path of a PUT request.

**API format**

```http
PUT /tenant/descriptors/{DESCRIPTOR_ID}
```

| Parameter | Description |
| --- | --- |
| `{DESCRIPTOR_ID}` | The `@id` of the descriptor you want to update. |

{style="table-layout:auto"}

**Request**

This request essentially re-writes the descriptor, so the request body must include all fields required for defining a descriptor of that type. In other words, the request payload to update (PUT) a descriptor is the same as the payload to [create (POST) a descriptor](#create) of the same type.

>[!IMPORTANT]
>
>Just as with creating descriptors using POST requests, each descriptor type requires its own specific fields to be sent in PUT request payloads. See the [appendix](#defining-descriptors) for a complete list of descriptors and the fields necessary to define them.

The following example updates an identity descriptor to reference a different `xdm:sourceProperty` (`mobile phone`) and change the `xdm:namespace` to `Phone`.

```SHELL
curl -X PUT \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/descriptors/f3a1dfa38a4871cf4442a33074c1f9406a593407 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "@type": "xdm:descriptorIdentity",
        "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/fbc52b243d04b5d4f41eaa72a8ba58be",
        "xdm:sourceVersion": 1,
        "xdm:sourceProperty": "/mobilePhone/number",
        "xdm:namespace": "Phone",
        "xdm:property": "xdm:code",
        "xdm:isPrimary": false
      }'
```

**Response**

A successful response returns HTTP status 201 (Created) and the `@id` of the updated descriptor (which should match the `@id` sent in the request).

```JSON
{
    "@id": "f3a1dfa38a4871cf4442a33074c1f9406a593407"
}
```

Performing a [lookup (GET) request](#lookup) to view the descriptor will show that the fields have now been updated to reflect the changes sent in the PUT request.

## Delete a descriptor {#delete}

Occasionally you may need to remove a descriptor that you have defined from the [!DNL Schema Registry]. This is done by making a DELETE request referencing the `@id` of the descriptor you wish to remove.

**API format**

```http
DELETE /tenant/descriptors/{DESCRIPTOR_ID}
```

| Parameter | Description |
| --- | --- |
| `{DESCRIPTOR_ID}` | The `@id` of the descriptor you want to delete. |

{style="table-layout:auto"}

**Request**

```SHELL
curl -X DELETE \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/descriptors/ca921946fb5281cbdb8ba5e07087486ce531a1f2  \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 204 (No Content) and a blank body.

To confirm the descriptor has been deleted, you can perform a [lookup request](#lookup) against the descriptor `@id`. The response returns HTTP status 404 (Not Found) because the descriptor has been removed from the [!DNL Schema Registry].

## Appendix

The following section provides additional information regarding working with descriptors in the [!DNL Schema Registry] API.

### Defining descriptors {#defining-descriptors}

The following sections provide an overview of available descriptor types, including the required fields for defining a descriptor of each type.

#### Identity descriptor

An identity descriptor signals that the "[!UICONTROL sourceProperty]" of the "[!UICONTROL sourceSchema]" is an [!DNL Identity] field as described by [Adobe Experience Platform Identity Service](../../identity-service/home.md).

```json
{
  "@type": "xdm:descriptorIdentity",
  "xdm:sourceSchema":
    "https://ns.adobe.com/{TENANT_ID}/schemas/fbc52b243d04b5d4f41eaa72a8ba58be",
  "xdm:sourceVersion": 1,
  "xdm:sourceProperty": "/personalEmail/address",
  "xdm:namespace": "Email",
  "xdm:property": "xdm:code",
  "xdm:isPrimary": false
}
```

| Property | Description |
| --- | --- |
| `@type` | The type of descriptor being defined. For an identity descriptor, this value must be set to `xdm:descriptorIdentity`. |
| `xdm:sourceSchema` | The `$id` URI of the schema where the descriptor is being defined. |
| `xdm:sourceVersion` | The major version of the source schema. |
| `xdm:sourceProperty` | The path to the specific property that will be the identity. Path should begin with a "/" and not end with one. Do not include "properties" in the path (e.g. use "/personalEmail/address" instead of "/properties/personalEmail/properties/address") |
| `xdm:namespace` | The `id` or `code` value of the identity namespace. A list of namespaces can be found using the [[!DNL Identity Service API]](https://www.adobe.io/experience-platform-apis/references/identity-service). |
| `xdm:property` | Either `xdm:id` or `xdm:code`, depending on the `xdm:namespace` used. |
| `xdm:isPrimary` | An optional boolean value. When true, indicates the field as the primary identity. Schemas may contain only one primary identity. |

{style="table-layout:auto"}

#### Friendly name descriptor {#friendly-name}

Friendly name descriptors allow a user to modify the `title`, `description`, and `meta:enum` values of the core library schema fields. Especially useful when working with "eVars" and other "generic" fields that you wish to label as containing information specific to your organization. The UI can use these to show a more friendly name or to only show fields that have a friendly name.

```json
{
  "@type": "xdm:alternateDisplayInfo",
  "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/274f17bc5807ff307a046bab1489fb18",
  "xdm:sourceVersion": 1,
  "xdm:sourceProperty": "/xdm:eventType",
  "xdm:title": {
    "en_us": "Event Type"
  },
  "xdm:description": {
    "en_us": "The type of experience event detected by the system."
  },
  "meta:enum": {
    "click": "Mouse Click",
    "addCart": "Add to Cart",
    "checkout": "Cart Checkout"
  },
  "xdm:excludeMetaEnum": {
    "web.formFilledOut": "Web Form Filled Out",
    "media.ping": "Media ping"
  }
}
```

| Property | Description |
| --- | --- |
| `@type` | The type of descriptor being defined. For a friendly name descriptor, this value must be set to `xdm:alternateDisplayInfo`. |
| `xdm:sourceSchema` | The `$id` URI of the schema where the descriptor is being defined. |
| `xdm:sourceVersion` | The major version of the source schema. |
| `xdm:sourceProperty` | The path to the specific property whose details you want to modify.The path should begin with a slash (`/`) and not end with one. Do not include `properties` in the path (for example, use `/personalEmail/address` instead of `/properties/personalEmail/properties/address`). |
| `xdm:title` | The new title you wish to display for this field, written in Title Case. |
| `xdm:description` | An optional description can be added along with the title. |
| `meta:enum` | If the field indicated by `xdm:sourceProperty` is a string field, `meta:enum` can be used to add suggested values for the field in the Segmentation UI. It is important to note that `meta:enum` does not declare an enumeration or provide any data validation for the XDM field.<br><br>This should only be used for core XDM fields defined by Adobe. If the source property is a custom field defined by your organization, you should instead edit the field's `meta:enum` property directly through a PATCH request to the field's parent resource. |
| `meta:excludeMetaEnum` | If the field indicated by `xdm:sourceProperty` is a string field that has existing suggested values provided under a `meta:enum` field, you can include this object in a friendly name descriptor to exclude some or all of these values from segmentation. The key and value for each entry must match those included in the original `meta:enum` of the field in order for the entry to be excluded.  |

{style="table-layout:auto"}

#### Relationship descriptor

Relationship descriptors describe a relationship between two different schemas, keyed on the properties described in `sourceProperty` and `destinationProperty`. See the tutorial on [defining a relationship between two schemas](../tutorials/relationship-api.md) for more information.

```json
{
  "@type": "xdm:descriptorOneToOne",
  "xdm:sourceSchema":
    "https://ns.adobe.com/{TENANT_ID}/schemas/fbc52b243d04b5d4f41eaa72a8ba58be",
  "xdm:sourceVersion": 1,
  "xdm:sourceProperty": "/parentField/subField",
  "xdm:destinationSchema": 
    "https://ns.adobe.com/{TENANT_ID}/schemas/78bab6346b9c5102b60591e15e75d254",
  "xdm:destinationVersion": 1,
  "xdm:destinationProperty": "/parentField/subField"
}
```

| Property | Description |
| --- | --- |
| `@type` | The type of descriptor being defined. For a relationship descriptor, this value must be set to `xdm:descriptorOneToOne`. |
| `xdm:sourceSchema` | The `$id` URI of the schema where the descriptor is being defined. |
| `xdm:sourceVersion` | The major version of the source schema. |
| `xdm:sourceProperty` | Path to the field in the source schema where the relationship is being defined. Should begin with a "/" and not end with one. Do not include "properties" in the path (for example, "/personalEmail/address" instead of "/properties/personalEmail/properties/address"). |
| `xdm:destinationSchema` | The `$id` URI of the reference schema this descriptor is defining a relationship with. |
| `xdm:destinationVersion` | The major version of the reference schema. |
| `xdm:destinationProperty` | Optional path to a target field within the reference schema. If this property is omitted, the target field is inferred by any fields that contain a matching reference identity descriptor (see below). |

{style="table-layout:auto"}

#### Reference identity descriptor

Reference identity descriptors provide a reference context to the primary identity of a schema field, allowing it to be referenced by fields in other schemas. The reference schema must already have a primary identity field defined before it can be referred to by other schemas through this descriptor.

```json
{
  "@type": "xdm:descriptorReferenceIdentity",
  "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/78bab6346b9c5102b60591e15e75d254",
  "xdm:sourceVersion": 1,
  "xdm:sourceProperty": "/parentField/subField",
  "xdm:identityNamespace": "Email"
}
```

| Property | Description |
| --- | --- |
| `@type` | The type of descriptor being defined. For a reference identity descriptor, this value must be set to `xdm:descriptorReferenceIdentity`. |
| `xdm:sourceSchema` | The `$id` URI of the schema where the descriptor is being defined. |
| `xdm:sourceVersion` | The major version of the source schema. |
| `xdm:sourceProperty` | Path to the field in the source schema that will be used to refer to the reference schema. Should begin with a "/" and not end with one. Do not include "properties" in the path (for example, `/personalEmail/address` instead of `/properties/personalEmail/properties/address`). |
| `xdm:identityNamespace` | The identity namespace code for the source property. |

{style="table-layout:auto"}

#### Deprecated field descriptor

You can [deprecate a field within a custom XDM resource](../tutorials/field-deprecation-api.md#custom) by adding a `meta:status` attribute set to `deprecated` to the field in question. If you want to deprecate fields provided by standard XDM resources in your schemas, however, you can assign a deprecated field descriptor to the schema in question to achieve the same effect. Using the [correct `Accept` header](../tutorials/field-deprecation-api.md#verify-deprecation), you can then view which standard fields are deprecated for a schema when looking it up in the API.

```json
{
  "@type": "xdm:descriptorDeprecated",
  "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/c65ddf08cf2d4a2fe94bd06113bf4bc4c855e12a936410d5",
  "xdm:sourceVersion": 1,
  "xdm:sourceProperty": "/faxPhone"
}
```

| Property | Description |
| --- | --- |
| `@type` | The type of descriptor. For a field deprecation descriptor, this value must be set to `xdm:descriptorDeprecated`. |
| `xdm:sourceSchema` | The URI `$id` of the schema you are applying the descriptor to. |
| `xdm:sourceVersion` | The version of the schema you are applying the descriptor to. Should be set to `1`. |
| `xdm:sourceProperty` | The path to the property within the schema that you are applying the descriptor to. If you want to apply the descriptor to multiple properties, you can provide a list of paths in the form of an array (for example, `["/firstName", "/lastName"]`). |

{style="table-layout:auto"}
