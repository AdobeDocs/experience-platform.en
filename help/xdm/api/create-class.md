---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;;experience data model;Experience data model;Experience Data Model;data model;Data Model;schema registry;Schema Registry;class;Class;classes;Classes;create
solution: Experience Platform
title: Create a class
description: The primary building block of a schema is a class. The class contains the minimum set of fields that must be defined in order to capture the core data of a schema. For example, if you were designing a schema for cars and trucks they would most likely use a class called Vehicle that described the basic common properties of all vehicles.
topic: developer guide
---

# Create a class

The primary building block of a schema is a class. The class contains the minimum set of fields that must be defined in order to capture the core data of a schema. For example, if you were designing a schema for cars and trucks they would most likely use a class called Vehicle that described the basic common properties of all vehicles.

There are several standard classes provided by Adobe and other [!DNL Experience Platform] partners, but you may also define your own classes and save them to the [!DNL Schema Registry]. You can then compose a schema that implements the class you created, and define mixins that are compatible with your newly defined class.

>[!NOTE]
>
>When composing a schema based on a class that you define, you will not be able to use standard mixins. Each mixin defines the classes they are compatible with in their `meta:intendedToExtend` attribute. Once you begin defining mixins that are compatible with your new class (by using the `$id` of your new class in the `meta:intendedToExtend` field of the mixin), you will be able to reuse those mixins every time you define a schema that implements the class you defined. See the sections on [creating mixins](create-mixin.md) and [creating schemas](create-schema.md) for more information.

**API format**

```http
POST /tenant/classes
```

**Request**

The request to create (POST) a class must include an `allOf` attribute containing a `$ref` to one of two values: `https://ns.adobe.com/xdm/data/record` or `https://ns.adobe.com/xdm/data/time-series`. These values represent the behavior upon which the class is based (record or time-series, respectively). For more information on the differences between record data and time series data, see the section on behavior types within the [basics of schema composition](../schema/composition.md).

When you define a class, you may also include mixins or custom fields within the class definition. This would cause the added mixins and fields to be included in all schemas that implement the class. The following example request defines a class called "Property", which captures information regarding different properties owned and operated by a company. It includes a `propertyId` field to be included each time the class is used.

```SHELL
curl -X POST \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/classes \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
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
    "imsOrg": "{IMS_ORG}",
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

Performing a GET request to list all classes in the tenant container would now include the Property class. You can also perform a lookup (GET) request using the URL-encoded `$id` URI to view the new class directly. Be sure to include the `version` in the Accept header when performing a lookup request.
