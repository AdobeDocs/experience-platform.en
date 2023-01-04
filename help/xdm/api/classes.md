---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;experience data model;Experience data model;Experience Data Model;data model;Data Model;class registry;Schema Registry;class;Class;classes;Classes;create
solution: Experience Platform
title: Classes API Endpoint
description: The /classes endpoint in the Schema Registry API allows you to programmatically manage XDM classes within your experience application.
topic-legacy: developer guide
exl-id: 7beddb37-0bf2-4893-baaf-5b292830f368
---
# Classes endpoint

All Experience Data Model (XDM) schemas must be based on a class. A class determines the base structure of common properties that all schemas based on that class must contain, as well as which schema field groups are eligible for use in those schemas. In addition, a schema's class determines the behavioral aspects of the data that a schema will contain, of which there are two types:

* **[!UICONTROL Record]**: Provides information about the attributes of a subject. A subject could be an organization or an individual.
* **[!UICONTROL Time-series]**: Provides a snapshot of the system at the time an action was taken either directly or indirectly by a record subject.

>[!NOTE]
>
>For more information classes on data behaviors in terms of how they affect schema composition, refer to the [basics of schema composition](../schema/composition.md).

The `/classes` endpoint in the [!DNL Schema Registry] API allows you to programmatically manage classes within your experience application.

## Getting started

The endpoint used in this guide is part of the [[!DNL Schema Registry] API](https://developer.adobe.com/experience-platform-apis/references/schema-registry/). Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Retrieve a list of classes {#list}

You can list all classes under the `global` or `tenant` container by making a GET request to `/global/classes` or `/tenant/classes`, respectively.

>[!NOTE]
>
>When listing resources, the Schema Registry limits result sets to 300 items. In order to return resources beyond this limit, you must use paging parameters. It is also recommended that you use additional query parameters to filter results and reduce the number of resources returned. See the section on [query parameters](./appendix.md#query) in the appendix document for more information.

**API format**

```http
GET /{CONTAINER_ID}/classes?{QUERY_PARAMS}
```

| Parameter | Description |
| --- | --- |
| `{CONTAINER_ID}` | The container you want to retrieve classes from: `global` for Adobe-created classes or `tenant` for classes owned by your organization. |
| `{QUERY_PARAMS}` | Optional query parameters to filter results by. See the [appendix document](./appendix.md#query) for a list of available parameters. |

{style="table-layout:auto"}

**Request**

The following request retrieves a list of classes from the `tenant` container, using an `orderby` query parameter to sort the classes by their `title` attribute.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/classes?orderby=title \
  -H 'Accept: application/vnd.adobe.xed-id+json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

The response format depends on the `Accept` header sent in the request. The following `Accept` headers are available for listing classes:

| `Accept` header | Description |
| --- | --- |
| `application/vnd.adobe.xed-id+json` | Returns a short summary of each resource. This is the recommended header for listing resources. (Limit: 300) |
| `application/vnd.adobe.xed+json` | Returns full JSON class for each resource, with original `$ref` and `allOf` included. (Limit: 300) |

{style="table-layout:auto"}

**Response**

The request above used the `application/vnd.adobe.xed-id+json` `Accept` header, therefore the response includes only the `title`, `$id`, `meta:altId`, and `version` attributes for each class. Using the other `Accept` header (`application/vnd.adobe.xed+json`) returns all attributes of each class. Select the appropriate `Accept` header depending on the information you require in your response.

```json
{
  "results": [
    {
      "$id": "https://ns.adobe.com/{TENANT_ID}/classes/01b7b1745e8ac4ed1e8784ec91b6afa7",
      "meta:altId": "_{TENANT_ID}.classes.01b7b1745e8ac4ed1e8784ec91b6afa7",
      "version": "1.0",
      "title": "Hotel"
    },
    {
      "$id": "https://ns.adobe.com/{TENANT_ID}/classes/d43b86253676af50da3f671ecdd26ff9",
      "meta:altId": "_{TENANT_ID}.classes.d43b86253676af50da3f671ecdd26ff9",
      "version": "1.1",
      "title": "Property"
    },
    {
      "$id": "https://ns.adobe.com/{TENANT_ID}/classes/366f015dbfea802455fbc46c3b27f771",
      "meta:altId": "_{TENANT_ID}.classes.366f015dbfea802455fbc46c3b27f771",
      "version": "1.0",
      "title": "Subscription"
    }
  ],
  "_page": {
    "orderby": "title",
    "next": null,
    "count": 3
  },
  "_links": {
    "next": null,
    "global_schemas": {
      "href": "https://platform.adobe.io/data/foundation/schemaregistry/global/classes"
    }
  }
}
```

## Look up a class {#lookup}

You can look up a specific class by including the class's ID in the path of a GET request.

**API format**

```http
GET /{CONTAINER_ID}/classes/{CLASS_ID}
```

| Parameter | Description |
| --- | --- |
| `{CONTAINER_ID}` | The container that houses the class you want to retrieve: `global` for an Adobe-created class or `tenant` for a class owned by your organization. |
| `{CLASS_ID}` | The `meta:altId` or URL-encoded `$id` of the class you want to look up. |

{style="table-layout:auto"}

**Request**

The following request retrieves a class by its `meta:altId` value provided in the path. 

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/classes/_{TENANT_ID}.classes.f579a0b5f992c69458ea408ec36571f7da9de15901bab116 \
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

{style="table-layout:auto"}

**Response**

A successful response returns the details of the class. The fields that are returned depend on the `Accept` header sent in the request. Experiment with different `Accept` headers to compare the responses and determine which header is best for your use case.

```json
{
  "$id":"https://ns.adobe.com/{TENANT_ID}/classes/f8bbdc3c49d49eae62d1c17e867230ac3de6b5b63b0615ce",
  "meta:altId":"_{TENANT_ID}.classes.f8bbdc3c49d49eae62d1c17e867230ac3de6b5b63b0615ce",
  "meta:resourceType":"classes",
  "version":"1.1",
  "title":"Hotel",
  "type":"object",
  "description":"Base class for the Hotels schema",
  "definitions":{
    "customFields":{
      "type":"object",
      "properties":{
        "_{TENANT_ID}":{
          "type":"object",
          "properties":{
            "Address":{
              "title":"Address",
              "description":"",
              "isRequired":false,
              "$ref":"https://ns.adobe.com/xdm/common/address",
              "type":"object",
              "meta:xdmType":"object"
            },
            "phoneNumber":{
              "title":"Phone Number",
              "description":"",
              "isRequired":false,
              "$ref":"https://ns.adobe.com/xdm/context/phonenumber",
              "type":"object",
              "meta:xdmType":"object"
            },
            "brand":{
              "title":"Brand",
              "description":"",
              "type":"string",
              "isRequired":false,
              "meta:xdmType":"string"
            },
            "hotelId":{
              "title":"Hotel ID",
              "description":"",
              "type":"string",
              "isRequired":false,
              "meta:xdmType":"string"
            }
          },
          "meta:xdmType":"object"
        }
      },
      "meta:xdmType":"object"
    }
  },
  "allOf":[
    {
      "$ref":"https://ns.adobe.com/xdm/data/record",
      "type":"object",
      "meta:xdmType":"object"
    },
    {
      "$ref":"#/definitions/customFields",
      "type":"object",
      "meta:xdmType":"object"
    }
  ],
  "imsOrg":"{ORG_ID}",
  "meta:extensible":true,
  "meta:abstract":true,
  "meta:extends":[
    "https://ns.adobe.com/xdm/data/record"
  ],
  "meta:xdmType":"object",
  "meta:registryMetadata":{
    "repo:createdDate":1593643258779,
    "repo:lastModifiedDate":1597246362579,
    "xdm:createdClientId":"{CLIENT_ID}",
    "xdm:lastModifiedClientId":"{CLIENT_ID}",
    "xdm:createdUserId":"{USER_ID}",
    "xdm:lastModifiedUserId":"{USER_ID}",
    "eTag":"502f89ee16b8ab2e6b4ea09ecf0ab1e5614907db755051c1f3c65a273001d725",
    "meta:globalLibVersion":"1.15.4"
  },
  "meta:containerId":"tenant",
  "meta:tenantNamespace":"_{TENANT_ID}"
}
```

## Create a class {#create}

You can define a custom class under the `tenant` container by making a POST request.

>[!IMPORTANT]
>
>When composing a schema based on a custom class that you define, you will not be able to use standard field groups. Each field group defines the classes they are compatible with in their `meta:intendedToExtend` attribute. Once you begin defining field groups that are compatible with your new class (by using the `$id` of your new class in the `meta:intendedToExtend` field of the field group), you will be able to reuse those field groups every time you define a schema that implements the class you defined. See the sections on [creating field groups](./field-groups.md#create) and [creating schemas](./schemas.md#create) in their respective endpoint guides for more information.
>
>If you are planning to use schemas based on custom classes in Real-Time Customer Profile, it is also important to keep in mind that union schemas are only constructed based on schemas that share the same class. If you want to include a custom-class schema in the union for another class like [!UICONTROL XDM Individual Profile] or [!UICONTROL XDM ExperienceEvent], you must establish a relationship with another schema that employs that class. See the tutorial on [establishing a relationship between two schemas in the API](../tutorials/relationship-api.md) for more information.

**API format**

```http
POST /tenant/classes
```

**Request**

The request to create (POST) a class must include an `allOf` attribute containing a `$ref` to one of two values: `https://ns.adobe.com/xdm/data/record` or `https://ns.adobe.com/xdm/data/time-series`. These values represent the behavior upon which the class is based (record or time-series, respectively). For more information on the differences between record data and time series data, see the section on behavior types within the [basics of schema composition](../schema/composition.md).

When you define a class, you may also include field groups or custom fields within the class definition. This would cause the added field groups and fields to be included in all schemas that implement the class. The following example request defines a class called "Property", which captures information regarding different properties owned and operated by a company. It includes a `propertyId` field to be included each time the class is used.

```SHELL
curl -X POST \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/classes \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "title":"Property",
        "description":"Properties owned and operated by the company.",
        "type":"object",
        "definitions": {
          "property": {
            "properties": {
              "_{TENANT_ID}": {
                "type": "object",
                "properties": {
                  "property": {
                    "title": "Property Information",
                    "type": "object",
                    "description": "Information about different owned and operated properties.",
                    "properties": {
                      "propertyId": {
                        "title": "Property Identification Number",
                        "type": "string",
                        "description": "Unique Property identification number"
                      }
                    }
                  }
                }
              }
            },
            "type": "object"
          }
        },
        "allOf": [
          {
            "$ref": "https://ns.adobe.com/xdm/data/record"
          },
          {
            "$ref": "#/definitions/property"
          }
        ]
      }'
```

| Property | Description |
| --- | --- |
| `_{TENANT_ID}` | The `TENANT_ID` namespace for your organization. All resources created by your organization must include this property to avoid collisions with other resources in the [!DNL Schema Registry]. |
| `allOf` | A list of resources whose properties are to be inherited by the new class. One of the `$ref` objects within the array defines the behavior of the class. In this example, the class inherits "record" behavior. |

{style="table-layout:auto"}

**Response**

A successful response returns HTTP status 201 (Created) and a payload containing the details of the newly created class including the `$id`, `meta:altId`, and `version`. These three values are read-only and are assigned by the [!DNL Schema Registry].

```JSON
{
  "title": "Property",
  "description": "Properties owned and operated by the company.",
  "type": "object",
  "definitions": {
    "property": {
      "properties": {
        "_{TENANT_ID}": {
          "type": "object",
          "properties": {
            "property": {
              "title": "Property Information",
              "type": "object",
              "description": "Information about different owned and operated properties.",
              "properties": {
                "propertyId": {
                  "title": "Property Identification Number",
                  "type": "string",
                  "description": "Unique Property identification number",
                  "meta:xdmType": "string"
                }
              },
              "meta:xdmType": "object"
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
      "$ref": "https://ns.adobe.com/xdm/data/record"
    },
    {
      "$ref": "#/definitions/property"
    }
  ],
  "meta:abstract": true,
  "meta:extensible": true,
  "meta:extends": [
    "https://ns.adobe.com/xdm/data/record"
  ],
  "meta:containerId": "tenant",
  "imsOrg": "{ORG_ID}",
  "meta:altId": "_{TENANT_ID}.classes.19e1d8b5098a7a76e2c10a81cbc99590",
  "meta:xdmType": "object",
  "$id": "https://ns.adobe.com/{TENANT_ID}/classes/19e1d8b5098a7a76e2c10a81cbc99590",
  "version": "1.0",
  "meta:resourceType": "classes",
  "meta:registryMetadata": {
    "repo:createDate": 1552086405448,
    "repo:lastModifiedDate": 1552086405448,
    "xdm:createdClientId": "{CREATED_CLIENT}",
    "xdm:repositoryCreatedBy": "{CREATED_BY}"
  }
}
```

Performing a GET request to [list all classes](#list) in the `tenant` container would now include the Property class. You can also [perform a lookup (GET) request](#lookup) using the URL-encoded `$id` to view the new class directly.

## Update a class {#put}

You can replace an entire class through a PUT operation, essentially re-writing the resource. When updating a class through a PUT request, the body must include all of the fields that would be required when [creating a new class](#create) in a POST request.

>[!NOTE]
>
>If you only want to update part of a class instead of replacing it entirely, see the section on [updating a portion of a class](#patch).

**API format**

```http
PUT /tenant/classes/{CLASS_ID}
```

| Parameter | Description |
| --- | --- |
| `{CLASS_ID}` | The `meta:altId` or URL-encoded `$id` of the class you want to re-write. |

{style="table-layout:auto"}

**Request**

The following request re-writes an existing class, changing its `description` and the `title` of one of its fields.

```SHELL
curl -X PUT \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/classes/_{TENANT_ID}.classes.19e1d8b5098a7a76e2c10a81cbc99590 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "title": "Property",
        "description": "Base class for properties operated by a company.",
        "type": "object",
        "definitions": {
          "property": {
            "properties": {
              "_{TENANT_ID}": {
                "type": "object",
                "properties": {
                  "property": {
                    "title": "Property Information",
                    "type": "object",
                    "description": "Information about different owned and operated properties.",
                    "properties": {
                      "propertyId": {
                        "title": "Property ID",
                        "type": "string",
                        "description": "Unique Property ID string."
                      }
                    }
                  }
                }
              }
            },
            "type": "object"
          }
        },
        "allOf": [
          {
            "$ref": "https://ns.adobe.com/xdm/data/record"
          },
          {
            "$ref": "#/definitions/property"
          }
        ]
      }'
```

**Response**

A successful response returns the details of the updated class.

```JSON
{
  "title": "Property",
  "description": "Base class for properties operated by a company.",
  "type": "object",
  "definitions": {
    "property": {
      "properties": {
        "_{TENANT_ID}": {
          "type": "object",
          "properties": {
            "property": {
              "title": "Property Information",
              "type": "object",
              "description": "Information about different owned and operated properties.",
              "properties": {
                "propertyId": {
                  "title": "Property ID",
                  "type": "string",
                  "description": "Unique Property ID string",
                  "meta:xdmType": "string"
                }
              },
              "meta:xdmType": "object"
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
      "$ref": "https://ns.adobe.com/xdm/data/record"
    },
    {
      "$ref": "#/definitions/property"
    }
  ],
  "meta:abstract": true,
  "meta:extensible": true,
  "meta:extends": [
    "https://ns.adobe.com/xdm/data/record"
  ],
  "meta:containerId": "tenant",
  "imsOrg": "{ORG_ID}",
  "meta:altId": "_{TENANT_ID}.classes.19e1d8b5098a7a76e2c10a81cbc99590",
  "meta:xdmType": "object",
  "$id": "https://ns.adobe.com/{TENANT_ID}/classes/19e1d8b5098a7a76e2c10a81cbc99590",
  "version": "1.0",
  "meta:resourceType": "classes",
  "meta:registryMetadata": {
    "repo:createDate": 1552086405448,
    "repo:lastModifiedDate": 1552086405448,
    "xdm:createdClientId": "{CREATED_CLIENT}",
    "xdm:repositoryCreatedBy": "{CREATED_BY}"
  }
}
```

## Update a portion of a class {#patch}

You can update a portion of a class by using a PATCH request. The [!DNL Schema Registry] supports all standard JSON Patch operations, including `add`, `remove`, and `replace`. For more information on JSON Patch, see the [API fundamentals guide](../../landing/api-fundamentals.md#json-patch).

>[!NOTE]
>
>If you want to replace an entire resource with new values instead of updating individual fields, see the section on [replacing a class using a PUT operation](#put).

**API format**

```http
PATCH /tenant/class/{CLASS_ID} 
```

| Parameter | Description |
| --- | --- |
| `{CLASS_ID}` | The URL-encoded `$id` URI or `meta:altId` of the class you want to update. |

{style="table-layout:auto"}

**Request**

The example request below updates the `description` of an existing class, and the `title` of one of its fields.

The request body takes the form of an array, with each listed object representing a specific change to an individual field. Each object includes the operation to be performed (`op`), which field the operation should be performed on (`path`), and what information should be included in that operation (`value`).

```SHELL
curl -X PATCH \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/classes/_{TENANT_ID}.classes.19e1d8b5098a7a76e2c10a81cbc99590 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'content-type: application/json' \
  -d '[
        { "op": "replace", "path": "/description", "value":  "Base class for properties operated by a company."},
        { "op": "replace", "path": "/definitions/property/properties/_{TENANT_ID}/properties/property/properties/propertyId/title", "value": "Unique Property ID string" }
      ]'
```

**Response**

The response shows that both operations were performed successfully. The `description` has been updated, along with the `title` of the `propertyId` field.

```JSON
{
  "title": "Property",
  "description": "Base class for properties operated by a company.",
  "type": "object",
  "definitions": {
    "property": {
      "properties": {
        "_{TENANT_ID}": {
          "type": "object",
          "properties": {
            "property": {
              "title": "Property Information",
              "type": "object",
              "description": "Information about different owned and operated properties.",
              "properties": {
                "propertyId": {
                  "title": "Property ID",
                  "type": "string",
                  "description": "Unique Property ID string",
                  "meta:xdmType": "string"
                }
              },
              "meta:xdmType": "object"
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
      "$ref": "https://ns.adobe.com/xdm/data/record"
    },
    {
      "$ref": "#/definitions/property"
    }
  ],
  "meta:abstract": true,
  "meta:extensible": true,
  "meta:extends": [
    "https://ns.adobe.com/xdm/data/record"
  ],
  "meta:containerId": "tenant",
  "imsOrg": "{ORG_ID}",
  "meta:altId": "_{TENANT_ID}.classes.19e1d8b5098a7a76e2c10a81cbc99590",
  "meta:xdmType": "object",
  "$id": "https://ns.adobe.com/{TENANT_ID}/classes/19e1d8b5098a7a76e2c10a81cbc99590",
  "version": "1.0",
  "meta:resourceType": "classes",
  "meta:registryMetadata": {
    "repo:createDate": 1552086405448,
    "repo:lastModifiedDate": 1552086405448,
    "xdm:createdClientId": "{CREATED_CLIENT}",
    "xdm:repositoryCreatedBy": "{CREATED_BY}"
  }
}
```

## Delete a class {#delete}

It may occasionally be necessary to remove a class from the Schema Registry. This is done by performing a DELETE request with the class ID provided in the path.

**API format**

```http
DELETE /tenant/classes/{CLASS_ID}
```

| Parameter | Description |
| --- | --- |
| `{CLASS_ID}` | The URL-encoded `$id` URI or `meta:altId` of the class you want to delete. |

{style="table-layout:auto"}

**Request**

```shell
curl -X DELETE \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/classes/_{TENANT_ID}.classes.d5cc04eb8d50190001287e4c869ebe67 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 204 (No Content) and a blank body.

You can confirm the deletion by attempting a [lookup (GET) request](#lookup) for the class. You will need to include an `Accept` header in the request, but should receive an HTTP status 404 (Not Found) because the class has been removed from the Schema Registry.
