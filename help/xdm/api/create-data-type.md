---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;;experience data model;Experience data model;Experience Data Model;data model;Data Model;schema registry;Schema Registry;datatype;Datatype;data type;Data type;create
solution: Experience Platform
title: Create a data type
topic: developer guide
description: When there are common data structures that your organization wishes to use in multiple ways, you may wish to define a data type. Data types allow for the consistent use of multi-field structures, with more flexibility than mixins because they can be included anywhere in a schema by adding them as the 'type' of a field. 
---

# Create a data type

When there are common data structures that your organization wishes to use in multiple ways, you may wish to define a data type. Data types allow for the consistent use of multi-field structures, with more flexibility than mixins because they can be included anywhere in a schema by adding them as the `type` of a field. 

In other words, data types allow you to define an object hierarchy once, and refer to it in a field in the same manner as any other scalar type.

**API format**

```http
POST /tenant/datatypes
```

**Request**

Defining a data type does not require `meta:extends` or `meta:intendedToExtend` fields, nor do fields need to be nested to avoid collisions.

```SHELL
curl -X POST \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/datatypes \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "title":"Property Construction",
        "description":"Information related to the property construction",
        "type":"object",
        "properties": {
          "yearBuilt": {
            "type":"integer",
            "title": "Year Built",
            "description": "The year the property was constructed."
          },
          "propertyType": {
            "type":"string",
            "title": "Property Type",
            "description": "Type of building or structure in which the property exists.",
            "enum": [
              "freeStanding",
              "mall",
              "shoppingCenter"
            ],
            "meta:enum": {
              "freeStanding": "Free Standing Building",
              "mall": "Mall Space",
              "shoppingCentre": "Shopping Center"
            }
          }
        } 
      }'
```

**Response**

A successful response returns HTTP status 201 (Created) and a payload containing the details of the newly created data type, including the `$id`, `meta:altId`, and `version`. These three values are read-only and are assigned by the [!DNL Schema Registry].

```JSON
{
    "title": "Property Construction",
    "description": "Information related to the property construction",
    "type": "object",
    "properties": {
        "yearBuilt": {
            "type": "integer",
            "title": "Year Built",
            "description": "The year the property was constructed.",
            "meta:xdmType": "int"
        },
        "constructionType": {
            "type": "string",
            "title": "Construction Type",
            "description": "Type of building or structure in which the property exists.",
            "enum": [
                "freeStanding",
                "mall",
                "shoppingCenter"
            ],
            "meta:enum": {
                "freeStanding": "Free Standing Building",
                "mall": "Mall Space",
                "shoppingCentre": "Shopping Center"
            },
            "meta:xdmType": "string"
        }
    },
    "meta:abstract": true,
    "meta:extensible": true,
    "meta:containerId": "tenant",
    "imsOrg": "{IMS_ORG}",
    "meta:altId": "_{TENANT_ID}.datatypes.24c643f618647344606222c494bd0102",
    "meta:xdmType": "object",
    "$id": "https://ns.adobe.com/{TENANT_ID}/datatypes/24c643f618647344606222c494bd0102",
    "version": "1.0",
    "meta:resourceType": "datatypes",
    "meta:registryMetadata": {
        "repo:createDate": 1552087079285,
        "repo:lastModifiedDate": 1552087079285,
        "xdm:createdClientId": "{CREATED_CLIENT}",
        "xdm:repositoryCreatedBy": "{CREATED_BY}"
    }
}
```

Performing a GET request to list all data types in the tenant container would now include the Property Construction data type. You can also perform a lookup (GET) request using the URL-encoded `$id` URI to view the new data type directly. Be sure to include the `version` in your Accept header for a lookup request.
