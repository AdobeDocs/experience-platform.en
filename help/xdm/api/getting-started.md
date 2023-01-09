---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;experience data model;Experience data model;Experience Data Model;data model;Data Model;schema registry;Schema Registry;
solution: Experience Platform
title: Getting Started with the Schema Registry API
description: This document provides an introduction to the core concepts you need to know before attempting to make calls to the Schema Registry API.
exl-id: 7daebb7d-72d2-4967-b4f7-1886736db69f
---
# Getting started with the [!DNL Schema Registry] API

The [!DNL Schema Registry] API allows you to create and manage various Experience Data Model (XDM) resources. This document provides an introduction to the core concepts you need to know before attempting to make calls to the [!DNL Schema Registry] API.

## Prerequisites

Using the developer guide requires a working understanding of the following components of Adobe Experience Platform:

* [[!DNL Experience Data Model (XDM) System]](../home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    * [Basics of schema composition](../schema/composition.md): Learn about the basic building blocks of XDM schemas.
* [[!DNL Real-Time Customer Profile]](../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
* [[!DNL Sandboxes]](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

XDM uses JSON Schema formatting to describe and validate the structure of ingested customer experience data. It is therefore strongly recommended that you review the [official JSON Schema documentation](https://json-schema.org/) for a better understanding of this underlying technology.

## Reading sample API calls

The [!DNL Schema Registry] API documentation provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

## Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {ORG_ID}`

All resources in [!DNL Experience Platform], including those belonging to the [!DNL Schema Registry], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

* `x-sandbox-name: {SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in [!DNL Platform], see the [sandbox documentation](../../sandboxes/home.md). 

All lookup (GET) requests to the [!DNL Schema Registry] require an additional `Accept` header, whose value determines the format of information returned by the API. See the [Accept header](#accept) section below for more details.

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

* `Content-Type: application/json`

## Know your TENANT_ID {#know-your-tenant_id}

Throughout the API guides you will see references to a `TENANT_ID`. This ID is used to ensure that resources you create are namespaced properly and contained within your IMS Organization. If you do not know your ID, you can access it by performing the following GET request:

**API format**

```http
GET /stats
```

**Request**

```SHELL
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/stats \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns information regarding your organization's use of the [!DNL Schema Registry]. This includes a `tenantId` attribute, the value of which is your `TENANT_ID`. 

```JSON
{
  "imsOrg":"{ORG_ID}",
  "tenantId":"{TENANT_ID}",
  "counts": {
    "schemas": 4,
    "mixins": 3,
    "datatypes": 1,
    "classes": 2,
    "unions": 0,
  },
  "recentlyCreatedResources": [ 
    {
      "title": "Sample Field Group",
      "description": "New Sample Field Group.",
      "meta:resourceType": "mixins",
      "meta:created": "Sat Feb 02 2019 00:24:30 GMT+0000 (UTC)",
      "version": "1.1"
    },
    {
      "$id": "https://ns.adobe.com/{TENANT_ID}/classes/5bdb5582be0c0f3ebfc1c603b705764f",
      "title": "Tenant Class",
      "description": "Tenant Defined Class",
      "meta:resourceType": "classes",
      "meta:created": "Fri Feb 01 2019 22:46:21 GMT+0000 (UTC)",
      "version": "1.0"
    } 
  ],
  "recentlyUpdatedResources": [
    {
      "title": "Sample Field Group",
      "description": "New Sample Field Group.",
      "meta:resourceType": "mixins",
      "meta:updated": "Sat Feb 02 2019 00:34:06 GMT+0000 (UTC)",
      "version": "1.1"
    },
    {
      "title": "Data Schema",
      "description": "Schema for Data Information",
      "meta:resourceType": "schemas",
      "meta:updated": "Fri Feb 01 2019 23:47:43 GMT+0000 (UTC)",
      "meta:class": "https://ns.adobe.com/{TENANT_ID}/classes/47b2189fc135e03c844b4f25139d10ab",
      "meta:classTitle": "Sample Class",
      "version": "1.1"
    }
 ],
 "classUsage": {
    "https://ns.adobe.com/{TENANT_ID}/classes/47b2189fc135e03c844b4f25139d10ab": [
      {
        "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/274f17bc5807ff307a046bab1489fb18",
        "title": "Tenant Data Schema",
        "description": "Schema for tenant-specific data."
      }
    ],
    "https://ns.adobe.com/xdm/context/profile": [
      {
        "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/3ac6499f0a43618bba6b138226ae3542",
        "title": "Simple Profile",
        "description": "A simple profile schema."
      },
      {
        "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/fbc52b243d04b5d4f41eaa72a8ba58be",
        "title": "Program Schema",
        "description": "Schema for program-related data."
      },
      {
        "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/4025a705890c6d4a4a06b16f8cf6f4ca",
        "title": "Sample Schema",
        "description": "A sample schema."
      }
    ]
  }
 }
```

## Understand the `CONTAINER_ID` {#container}

Calls to the [!DNL Schema Registry] API require the use of a `CONTAINER_ID`. There are two containers against which API calls can be made: the `global` container and the `tenant` container.

### Global container

The `global` container holds all standard Adobe and [!DNL Experience Platform] partner provided classes, schema field groups, data types, and schemas. You may only perform list and lookup (GET) requests against the `global` container.

An example of a call that uses the `global` container would look like the following:

```http
GET /global/classes
```

### Tenant container

Not to be confused with your unique `TENANT_ID`, the `tenant` container holds all classes, field groups, data types, schemas, and descriptors defined by an IMS Organization. These are unique to each organization, meaning they are not visible or manageable by other IMS Orgs. You may perform all CRUD operations (GET, POST, PUT, PATCH, DELETE) against resources that you create in the `tenant` container.

An example of a call that uses the `tenant` container would look like the following:

```http
POST /tenant/fieldgroups
```

When you create a class, field group, schema or data type in the `tenant` container, it is saved to the [!DNL Schema Registry] and assigned an `$id` URI that includes your `TENANT_ID`. This `$id` is used throughout the API to reference specific resources. Examples of `$id` values are provided in the next section.

## Resource identification {#resource-identification}

XDM resources are identified with an `$id` attribute in the form of a URI, such as the following examples: 

* `https://ns.adobe.com/xdm/context/profile` 
* `https://ns.adobe.com/{TENANT_ID}/schemas/7442343-abs2343-21232421` 

To make the URI more REST-friendly, schemas also have a dot-notation encoding of the URI in a property called `meta:altId`:

* `_xdm.context.profile`
* `_{TENANT_ID}.schemas.7442343-abs2343-21232421`

Calls to the [!DNL Schema Registry] API will support either the URL-encoded `$id` URI or the `meta:altId` (dot-notation format). Best practice is to use the URL-encoded `$id` URI when making a REST call to the API, like so:

* `https%3A%2F%2Fns.adobe.com%2Fxdm%2Fcontext%2Fprofile`
* `https%3A%2F%2Fns.adobe.com%2F{TENANT_ID}%2Fschemas%2F7442343-abs2343-21232421`

## Accept header {#accept}

When performing list and lookup (GET) operations in the [!DNL Schema Registry] API, an `Accept` header is required to determine the format of the data returned by the API. When looking up specific resources, a version number must also be included in the `Accept` header.

The following table lists compatible `Accept` header values, including those with version numbers, along with descriptions of what the API will return when they are used.

| Accept | Description |
| ------- | ------------ |
| `application/vnd.adobe.xed-id+json` | Returns a list of IDs only. This is most commonly used for listing resources. |
| `application/vnd.adobe.xed+json` | Returns a list of full JSON schema with original `$ref` and `allOf` included. This is used to return a list of full resources. |
| `application/vnd.adobe.xed+json; version=1` | Raw XDM with `$ref` and `allOf`. Has titles and descriptions. |
| `application/vnd.adobe.xed-full+json; version=1` | `$ref` attributes and `allOf` resolved. Has titles and descriptions. |
| `application/vnd.adobe.xed-notext+json; version=1` | Raw XDM with `$ref` and `allOf`. No titles or descriptions. |
| `application/vnd.adobe.xed-full-notext+json; version=1` | `$ref` attributes and `allOf` resolved. No titles or descriptions. |
| `application/vnd.adobe.xed-full-desc+json; version=1` | `$ref` attributes and `allOf` resolved. Descriptors are included. |
| `application/vnd.adobe.xed-deprecatefield+json; version=1` |  `$ref` and `allOf` resolved, has titles and descriptions. Deprecated fields are indicated with a `meta:status` attribute of `deprecated`. |

{style="table-layout:auto"}

>[!NOTE]
>
>Platform currently supports only one major version for each schema (`1`). Therefore, the value for `version` must always be `1` when performing lookup requests in order to return the latest minor version of the schema. See the subsection below for more information on schema versioning.

### Schema versioning {#versioning}

Schema versions are referenced by `Accept` headers in the Schema Registry API and in `schemaRef.contentType` properties in downstream Platform service API payloads.

Currently, Platform only supports a single major version (`1`) for each schema. According to the [rules of schema evolution](../schema/composition.md#evolution), each update to a schema must be non-destructive, meaning that new minor versions of a schema (`1.2`, `1.3`, etc.) are always backward compatible with previous minor versions. Therefore, when specifying `version=1`, the Schema Registry always returns the **latest** major version `1` of a schema , meaning that previous minor versions are not returned.

>[!NOTE]
>
>The non-destructive requirement for schema evolution is only enforced after the schema has been referenced by a dataset and one of the following cases is true:
>
>* Data has been ingested into the dataset.
>* The dataset has been enabled for use in Real-Time Customer Profile (even if no data has been ingested).
>
>If the schema has not been associated with a dataset that meets one of the above criteria, then any change can be made to it. However, in all cases the `version` component still remains at `1`.

## XDM field constraints and best practices

The fields of a schema are listed within its `properties` object. Each field is itself an object, containing attributes to describe and constrain the data that the field can contain. Refer to the guide on [defining custom fields in the API](../tutorials/custom-fields-api.md) for code samples and optional constraints for the most commonly used data types.

The following sample field illustrates a properly formatted XDM field, with further details on naming constraints and best practices provided below. These practices can also be applied when defining other resources that contain similar attributes.

```JSON
"fieldName": {
    "title": "Field Name",
    "type": "string",
    "format": "date-time",
    "examples": [
        "2004-10-23T12:00:00-06:00"
    ],
    "description": "Full sentence describing the field, using proper grammar and punctuation.",
}
```

* The name of a field object may contain alphanumeric, dash, or underscore characters, but **may not** start with an underscore.  
  * **Correct:** `fieldName`, `field_name2`, `Field-Name`, `field-name_3`  
  * **Incorrect:** `_fieldName`
* camelCase is preferred for the name of the field object. Example: `fieldName`
* The field should include a `title`, written in Title Case. Example: `Field Name`
* The field requires a `type`.  
    * Defining certain types may require an optional `format`.  
    * Where a specific formatting of data is required, `examples` can be added as an array.
    * The field type may also be defined using any data type in the registry. See the section on [creating a data type](./data-types.md#create) in the data types endpoint guide for more information. 
* The `description` explains the field and pertinent information regarding field data. It should be written in full sentences with clear language so that anyone accessing the schema can understand the intention of the field.

## Next steps

To begin making calls using the [!DNL Schema Registry] API, select one of the available endpoint guides.
