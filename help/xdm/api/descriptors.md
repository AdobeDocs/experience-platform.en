---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;experience data model;Experience data model;Experience Data Model;data model;Data Model;schema registry;Schema Registry;descriptor;Descriptor;descriptors;Descriptors;identity;Identity;friendly name;Friendly name;alternatedisplayinfo;reference;Reference;relationship;Relationship
solution: Experience Platform
title: Descriptors API Endpoint
description: The /descriptors endpoint in the Schema Registry API allows you to programmatically manage XDM descriptors within your experience application.
exl-id: bda1aabd-5e6c-454f-a039-ec22c5d878d2
---
# Descriptors endpoint

Schemas define the structure of data entities but don't specify how any datasets created from these schemas relate to each other. In Adobe Experience Platform, you can use descriptors to describe these relationships and add interpretive metadata to a schema. 

Descriptors are tenant-level metadata objects applied to schemas in Adobe Experience Platform. They define structural relationships, keys, and behavioral fields (such as timestamps or versioning) that influence how data is validated, joined, or interpreted downstream.

A schema can have one or more descriptors. Each descriptor defines a `@type` and the `sourceSchema` it applies to. The descriptor automatically applies to all datasets created from that schema.

In Adobe Experience Platform, a descriptor is metadata that adds behavioral rules or structural meaning to a schema.
There are several types of descriptors, including:

- [Identity descriptor](#identity-descriptor) – marks a field as an identity
- [Primary key descriptor](#primary-key-descriptor) – enforces uniqueness
- [Relationship descriptor](#relationship-descriptor) – defines a foreign-key join
- [Alternate display info descriptor](#friendly-name) – lets you rename a field in the UI
- [Version](#version-descriptor) and [timestamp](#timestamp-descriptor) descriptors – track event ordering and change detection

The `/descriptors` endpoint in the [!DNL Schema Registry] API allows you to programmatically manage descriptors within your experience application.

## Getting started

The endpoint used in this guide is part of the [[!DNL Schema Registry] API](https://developer.adobe.com/experience-platform-apis/references/schema-registry/). Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

In addition to standard descriptors, the [!DNL Schema Registry] supports descriptor types for relational schemas, such as **primary key**, **version** and **timestamp**. These enforce uniqueness, control versioning, and define time-series fields at the schema level. If you are unfamiliar with relational schemas, review the [Data Mirror overview](../data-mirror/overview.md) and [relational schemas technical reference](../schema/relational.md) before continuing.

>[!IMPORTANT]
>
>See the [Appendix](#defining-descriptors) for details on all descriptor types.

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

The response format depends on the `Accept` header sent in the request. Notice that the `/descriptors` endpoint uses `Accept` headers that are different from all other endpoints in the [!DNL Schema Registry] API.

>[!IMPORTANT]
>
>Descriptors require unique `Accept` headers that replace `xed` with `xdm`, and also offer a `link` option that is unique to descriptors. The proper `Accept` headers have been included in the examples calls below, but take extra caution to ensure that the correct headers are being used when working with descriptors.

| `Accept` header | Description |
| -------|------------ |
| `application/vnd.adobe.xdm-id+json` | Returns an array of descriptor IDs |
| `application/vnd.adobe.xdm-link+json` | Returns an array of descriptor API paths |
| `application/vnd.adobe.xdm+json` | Returns an array of expanded descriptor objects |
| `application/vnd.adobe.xdm-v2+json` | This `Accept` header must be used to use paging capabilities. |

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

To view the details of a specific descriptor, send a GET request using its `@id`.

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

This request essentially rewrites the descriptor, so the request body must include all fields required for defining a descriptor of that type. In other words, the request payload to update (PUT) a descriptor is the same as the payload to [create (POST) a descriptor](#create) of the same type.

>[!IMPORTANT]
>
>As with creating descriptors using POST requests, each descriptor type requires its own specific fields to be sent in PUT request payloads. See the [appendix](#defining-descriptors) for a complete list of descriptors and the fields necessary to define them.

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

Performing a [lookup (GET) request](#lookup) to view the descriptor shows that the fields have now been updated to reflect the changes sent in the PUT request.

## Delete a descriptor {#delete}

Occasionally you may need to remove a descriptor that you have defined from the [!DNL Schema Registry]. This is done by making a DELETE request referencing the `@id` of the descriptor that you wish to remove.

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

## Appendix {#appendix}

The following section provides additional information regarding working with descriptors in the [!DNL Schema Registry] API.

### Defining descriptors {#defining-descriptors}

>[!NOTE]
>
>The maximum number of descriptors that can be applied to an organization's sandbox is 4000.

The following sections provide an overview of available descriptor types, including the required fields for defining a descriptor of each type.

>[!IMPORTANT]
>
>You cannot label the tenant namespace object, as the system would apply that label to every custom field across that sandbox. Instead, you must specify the leaf node under that object that you need to label.

#### Identity descriptor {#identity-descriptor}

An identity descriptor signals that the "[!UICONTROL sourceProperty]" of the "[!UICONTROL sourceSchema]" is an [!DNL Identity] field as described by [Experience Platform Identity Service](../../identity-service/home.md).

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
| `xdm:sourceProperty` | The path to the specific property that will be the identity. Path should begin with a "/" and not end with one. Do not include "properties" in the path (for example, use "/personalEmail/address" instead of "/properties/personalEmail/properties/address") |
| `xdm:namespace` | The `id` or `code` value of the identity namespace. A list of namespaces can be found using the [[!DNL Identity Service API]](https://developer.adobe.com/experience-platform-apis/references/identity-service). |
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
| `xdm:sourceProperty` | The path to the specific property whose details you want to modify. The path should begin with a slash (`/`) and not end with one. Do not include `properties` in the path (for example, use `/personalEmail/address` instead of `/properties/personalEmail/properties/address`). |
| `xdm:title` | The new title that you wish to display for this field, written in Title Case. |
| `xdm:description` | An optional description can be added along with the title. |
| `meta:enum` | If the field indicated by `xdm:sourceProperty` is a string field, `meta:enum` can be used to add suggested values for the field in the Segmentation UI. It is important to note that `meta:enum` does not declare an enumeration or provide any data validation for the XDM field.<br><br>This should only be used for core XDM fields defined by Adobe. If the source property is a custom field defined by your organization, you should instead edit the field's `meta:enum` property directly through a PATCH request to the field's parent resource. |
| `meta:excludeMetaEnum` | If the field indicated by `xdm:sourceProperty` is a string field that has existing suggested values provided under a `meta:enum` field, you can include this object in a friendly name descriptor to exclude some or all of these values from segmentation. The key and value for each entry must match those included in the original `meta:enum` of the field in order for the entry to be excluded.  |

{style="table-layout:auto"}

#### Relationship descriptor {#relationship-descriptor}

Relationship descriptors describe a relationship between two different schemas, keyed on the properties described in `xdm:sourceProperty` and `xdm:destinationProperty`. See the tutorial on [defining a relationship between two schemas](../tutorials/relationship-api.md) for more information. 

Use these properties to declare how a source field (foreign key) relates to a destination field ([primary key](#primary-key-descriptor) or candidate key). 

>[!TIP]
>
>A **foreign key** is a field in the source schema (defined by `xdm:sourceProperty`) that references a key field in another schema. A **candidate key** is any field (or set of fields) in the destination schema that uniquely identifies a record and can be used instead of the primary key.

The API supports two patterns:

- `xdm:descriptorOneToOne`: standard 1:1 relationship.
- `xdm:descriptorRelationship`: general pattern for new work and relational schemas (supports cardinality, naming, and non-primary key targets).

##### One-to-one relationship (standard schemas)

Use this when maintaining existing standard-schema integrations that already rely on `xdm:descriptorOneToOne`.

```json
{
  "@type": "xdm:descriptorOneToOne",
  "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/{SOURCE_SCHEMA_ID}",
  "xdm:sourceVersion": 1,
  "xdm:sourceProperty": "/parentField/subField",
  "xdm:destinationSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/{DEST_SCHEMA_ID}",
  "xdm:destinationVersion": 1,
  "xdm:destinationProperty": "/parentField/subField"
}
```

The following table describes the fields required to define a one-to-one relationship descriptor.

| Property | Description |
| --- | --- |
| `@type` | The type of descriptor being defined. For a relationship descriptor, this value must be set to `xdm:descriptorOneToOne`, unless you have access to Real-Time CDP B2B edition. With B2B edition you have the option to use `xdm:descriptorOneToOne` or [`xdm:descriptorRelationship`](#b2b-relationship-descriptor). |
| `xdm:sourceSchema` | The `$id` URI of the schema where the descriptor is being defined. |
| `xdm:sourceVersion` | The major version of the source schema. |
| `xdm:sourceProperty` | Path to the field in the source schema where the relationship is being defined. Should begin with a "/" and not end with "/". Do not include "properties" in the path (for example, "/personalEmail/address" instead of "/properties/personalEmail/properties/address"). |
| `xdm:destinationSchema` | The `$id` URI of the reference schema this descriptor is defining a relationship with. |
| `xdm:destinationVersion` | The major version of the reference schema. |
| `xdm:destinationProperty` | (Optional) Path to a target field within the reference schema. If this property is omitted, the target field is inferred by any fields that contain a matching reference identity descriptor (see below). |

##### General relationship (relational schemas and recommended for new projects)

Use this descriptor for all new implementations and for relational schemas. It allows you to define the relationship's cardinality (such as one-to-one or many-to-one), specify relationship names, and link to a destination field that is not the primary key (non-primary key).

The following examples show how to define a general relationship descriptor.

**Minimal example:**

This minimal example includes only the required fields to define a many-to-one relationship between two schemas.

```json
{
  "@type": "xdm:descriptorRelationship",
  "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/{SOURCE_SCHEMA_ID}",
  "xdm:sourceProperty": "/customer_ref",
  "xdm:sourceVersion": 1,
  "xdm:destinationSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/{DEST_SCHEMA_ID}",
  "xdm:cardinality": "M:1"
}
```

**Example with all optional fields:**

This example includes all optional fields, such as relationship names, display titles, and an explicit non-primary key destination field.

```json
{
  "@type": "xdm:descriptorRelationship",
  "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/{SOURCE_SCHEMA_ID}",
  "xdm:sourceVersion": 1,
  "xdm:sourceProperty": "/customer_ref",
  "xdm:destinationSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/{DEST_SCHEMA_ID}",
  "xdm:destinationProperty": "/customer_id",
  "xdm:sourceToDestinationName": "CampaignToCustomer",
  "xdm:destinationToSourceName": "CustomerToCampaign",
  "xdm:sourceToDestinationTitle": "Customer campaigns",
  "xdm:destinationToSourceTitle": "Campaign customers",
  "xdm:cardinality": "M:1"
}
```

##### Choosing a relationship descriptor

Use the following guidelines to decide which relationship descriptor to apply:

| Situation                       | Descriptor to use             |
| --------------------------------------------------------------------- | ----------------------------------------- |
| New work or relational schemas                                       | `xdm:descriptorRelationship`              |
| Existing 1:1 mapping in standard schemas                              | Continue using `xdm:descriptorOneToOne` unless you need features supported only by `xdm:descriptorRelationship`.     |
| Need many-to-one or optional cardinality (`1:1`, `1:0`, `M:1`, `M:0`) | `xdm:descriptorRelationship`              |
| Need relationship names or titles for UI/downstream readability       | `xdm:descriptorRelationship`              |
| Need a destination target that is not an identity                     | `xdm:descriptorRelationship`              |

>[!NOTE]
>
>For existing `xdm:descriptorOneToOne` descriptors in standard schemas, continue using them unless you need features such as non-primary identity destination targets, custom naming, or expanded cardinality options.

##### Capabilities comparison

The following table compares the capabilities of the two descriptor types:

| Capability         | `xdm:descriptorOneToOne` | `xdm:descriptorRelationship`                                             |
| ------------------ | ------------------------ | ------------------------------------------------------------------------ |
| Cardinality        | 1:1                      | 1:1, 1:0, M:1, M:0 (informational)                                       |
| Destination target | Identity/explicit field  | Primary key by default, or non-primary key via `xdm:destinationProperty`          |
| Naming fields      | Not supported            | `xdm:sourceToDestinationName`, `xdm:destinationToSourceName`, and titles |
| Relational fit     | Limited                  | Primary pattern for relational schemas                                  |

##### Constraints and validation

Follow these requirements and recommendations when defining a general relationship descriptor:

- For relational schemas, place the source field (foreign key) at the root level. This is a current technical limitation for ingestion, not just a best-practice recommendation.
- Ensure that data types of source and destination fields are compatible (numeric, date, boolean, string).
- Remember that cardinality is informational; storage does not enforce it. Specify cardinality in `<source>:<destination>` format. Accepted values are: `1:1`, `1:0`, `M:1`, or `M:0`.

#### Primary key descriptor {#primary-key-descriptor}

The primary key descriptor (`xdm:descriptorPrimaryKey`) enforces uniqueness and non-null constraints on one or more fields in a schema.

```json
{
  "@type": "xdm:descriptorPrimaryKey",
  "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/{SCHEMA_ID}",
  "xdm:sourceProperty": ["/orderId", "/orderLineId"]
}
```

| Property             | Description                                                                   |
| -------------------- | ----------------------------------------------------------------------------- |
| `@type`              | Must be `xdm:descriptorPrimaryKey`.                                           |
| `xdm:sourceSchema`   | `$id` URI of the schema.                                                      |
| `xdm:sourceProperty` | JSON Pointer(s) to the primary key field(s). Use an array for composite keys. For time-series schemas, the composite key must include the timestamp field to ensure uniqueness across event records. |

#### Version descriptor {#version-descriptor}

>[!NOTE]
>
>In the UI Schema Editor, the version descriptor appears as "[!UICONTROL Version identifier]."

The version descriptor (`xdm:descriptorVersion`) designates a field to detect and prevent conflicts from out-of-order change events.

```json
{
  "@type": "xdm:descriptorVersion",
  "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/{SCHEMA_ID}",
  "xdm:sourceProperty": "/versionNumber"
}
```

| Property             | Description                                                   |
| -------------------- | ------------------------------------------------------------- |
| `@type`              | Must be `xdm:descriptorVersion`.                              |
| `xdm:sourceSchema`   | `$id` URI of the schema.                                      |
| `xdm:sourceProperty` | JSON Pointer to the version field. Must be marked `required`. |

#### Timestamp descriptor {#timestamp-descriptor}

>[!NOTE]
>
>In the UI Schema Editor, the timestamp descriptor appears as "[!UICONTROL Timestamp identifier]."

The timestamp descriptor (`xdm:descriptorTimestamp`) designates a date-time field as the timestamp for schemas with `"meta:behaviorType": "time-series"`.

```json
{
  "@type": "xdm:descriptorTimestamp",
  "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/{SCHEMA_ID}",
  "xdm:sourceProperty": "/eventTime"
}
```

| Property             | Description                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------ |
| `@type`              | Must be `xdm:descriptorTimestamp`.                                                         |
| `xdm:sourceSchema`   | `$id` URI of the schema.                                                                   |
| `xdm:sourceProperty` | JSON Pointer to the timestamp field. Must be marked `required` and be of type `date-time`. |

##### B2B relationship descriptor {#B2B-relationship-descriptor}

The Real-Time CDP B2B Edition introduces an alternative way to define relationships between schemas, which allows for many-to-one relationships. This new relationship must have the `@type: xdm:descriptorRelationship` type, and the payload must include more fields than the `@type: xdm:descriptorOneToOne` relationship. See the tutorial on [defining a schema relationship for B2B Edition](../tutorials/relationship-b2b.md) for more information.

```json
{
   "@type": "xdm:descriptorRelationship",
   "xdm:sourceSchema" : "https://ns.adobe.com/{TENANT_ID}/schemas/9f2b2f225ac642570a110d8fd70800ac0c0573d52974fa9a",
   "xdm:sourceVersion" : 1,
   "xdm:sourceProperty" : "/person-ref",
   "xdm:destinationSchema" : "https://ns.adobe.com/{TENANT_ID/schemas/628427680e6b09f1f5a8f63ba302ee5ce12afba8de31acd7",
   "xdm:destinationVersion" : 1,
   "xdm:destinationProperty": "/personId",
   "xdm:destinationNamespace" : "People", 
   "xdm:destinationToSourceTitle" : "Opportunity Roles",
   "xdm:sourceToDestinationTitle" : "People",
   "xdm:cardinality": "M:1"
}
```

| Property | Description |
| --- | --- |
| `@type` | The type of descriptor being defined. For us with the following fields, the value must be set to `xdm:descriptorRelationship`. For information on additional types, see the [relationship descriptors](#relationship-descriptor) section.  |
| `xdm:sourceSchema` | The `$id` URI of the schema where the descriptor is being defined. |
| `xdm:sourceVersion` | The major version of the source schema. |
| `xdm:sourceProperty` | Path to the field in the source schema where the relationship is being defined. Should begin with a "/" and not end with "/". Do not include "properties" in the path (for example, "/personalEmail/address" instead of "/properties/personalEmail/properties/address"). |
| `xdm:destinationSchema` | The `$id` URI of the reference schema this descriptor is defining a relationship with. |
| `xdm:destinationVersion` | The major version of the reference schema. |
| `xdm:destinationProperty` | (Optional) Path to a target field within the reference schema. This must resolve to the schema's primary ID, or to another field with a compatible data type to `xdm:sourceProperty`. If omitted, the relationship may not function as expected. |
| `xdm:destinationNamespace` | The namespace of the primary ID from the reference schema. |
| `xdm:destinationToSourceTitle` | The display name of the relationship from the reference schema to the source schema. |
| `xdm:sourceToDestinationTitle` | The display name of the relationship from the source schema to the reference schema. |
| `xdm:cardinality` | The joining relationship between the schemas. This value should be set to `M:1`, referring to a many-to-one relationship. |

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
