---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Experience Platform API fundamentals
description: This document provides a brief overview of some the underlying technologies and syntaxes involved with Experience Platform APIs.
exl-id: cd69ba48-f78c-4da5-80d1-efab5f508756
---
# Experience Platform API fundamentals

Adobe Experience Platform APIs employ several underlying technologies and syntaxes that are important to understand in order to effectively manage JSON-based [!DNL Platform] resources. This document provides a brief overview of these technologies, as well as links to external documentation for more information.

## JSON Pointer {#json-pointer}

JSON Pointer is a standardized string syntax ([RFC 6901](https://tools.ietf.org/html/rfc6901)) for identifying specific values within JSON documents. A JSON Pointer is a string of tokens separated by `/` characters, which specify either object keys or array indexes, and the tokens can be a string or a number. JSON Pointer strings are used in many PATCH operations for [!DNL Platform] APIs, as described later in this document. For more information on JSON Pointer, please refer to the [JSON Pointer overview documentation](https://rapidjson.org/md_doc_pointer.html). 

### Example JSON schema object

The following JSON represents a simplified XDM schema whose fields can be referenced using JSON Pointer strings. Note that all fields that have been added using custom schema field groups (such as `loyaltyLevel`) are namespaced under a `_{TENANT_ID}` object, whereas fields that have been added using core field groups (such as `fullName`) are not.

```json
{
  "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/85a4bdaa168b01bf44384e049fbd3d2e9b2ffaca440d35b9",
  "meta:altId": "_{TENANT_ID}.schemas.85a4bdaa168b01bf44384e049fbd3d2e9b2ffaca440d35b9",
  "meta:resourceType": "schemas",
  "version": "1.0",
  "title": "Example schema",
  "type": "object",
  "description": "This is an example schema.",
  "properties": {
    "_{TENANT_ID}": {
      "type": "object",
      "properties": {
        "loyaltyLevel": {
          "title": "Loyalty Level",
          "description": "",
          "type": "string",
          "isRequired": false,
          "enum": [
            "platinum",
            "gold",
            "silver",
            "bronze"
          ]
        }
      }
    },
    "person": {
      "title": "Person",
      "description": "An individual actor, contact, or owner.",
      "type": "object",
      "properties": {
        "name": {
          "title": "Full name",
          "description": "The person's full name.",
          "type": "object",
          "properties": {
            "fullName": {
              "title": "Full name",
              "type": "string",
              "description": "The full name of the person, in writing order most commonly accepted in the language of the name.",
            },
            "suffix": {
              "title": "Suffix",
              "type": "string",
              "description": "A group of letters provided after a person's name to provide additional information. The `suffix` is used at the end of someones name. For example Jr., Sr., M.D., PhD, I, II, III, etc.",
            }
          },
          "meta:referencedFrom": "https://ns.adobe.com/xdm/context/person-name",
          "meta:xdmField": "xdm:name"
        }
      }
    }
  }
}
```

### Example JSON Pointers based on schema object

| JSON Pointer | Resolves to |
| --- | --- |
| `"/title"` | `"Example schema"` |
|  `"/properties/person/properties/name/properties/fullName"` | (Returns a reference to the `fullName` field, provided by a core field group.) |
| `"/properties/_{TENANT_ID}/properties/loyaltyLevel"` | (Returns a reference to the `loyaltyLevel` field, provided by a custom field group.) |
| `"/properties/_{TENANT_ID}/properties/loyaltyLevel/enum"` | `["platinum", "gold", "silver", "bronze"]` |
| `"/properties/_{TENANT_ID}/properties/loyaltyLevel/enum/0"` | `"platinum"` |

>[!NOTE]
>
>When dealing with the `xdm:sourceProperty` and `xdm:destinationProperty` attributes of [!DNL Experience Data Model] (XDM) descriptors, any `properties` keys must be **excluded** from the JSON Pointer string. See the [!DNL Schema Registry] API developer guide sub-guide on [descriptors](../xdm/api/descriptors.md) for more information.

## JSON Patch {#json-patch}

There are many PATCH operations for [!DNL Platform] APIs that accept JSON Patch objects for their request payloads. JSON Patch is a standardized format ([RFC 6902](https://tools.ietf.org/html/rfc6902)) for describing changes to a JSON document. It allows you to define partial updates to JSON without needing to send the entire document in a request body.

### Example JSON Patch object

```json
{
  "op": "remove",
  "path": "/foo"
}
```

* `op`: The type of patch operation. While JSON Patch supports several different operation types, not all PATCH operations in [!DNL Platform] APIs are compatible with every operation type. Available operation types are:
    * `add`
    * `remove`
    * `replace`
    * `copy`
    * `move`
    * `test`
* `path`: The part of the JSON structure to be updated, identified using [JSON Pointer](#json-pointer) notation.

Depending on the operation type indicated in `op`, the JSON Patch object may require additional properties. For more information on the different JSON Patch operations and their required syntax, please refer to the [JSON Patch documentation](https://datatracker.ietf.org/doc/html/rfc6902).

## JSON Schema {#json-schema}

JSON Schema is a format used to describe and validate the structure of JSON data. [Experience Data Model (XDM)](../xdm/home.md) leverages JSON Schema capabilities to enforce constraints on the structure and format of ingested customer experience data. For more information on JSON Schema, please refer to the [official documentation](https://json-schema.org/).

## Next steps

This document introduced some of the technologies and syntaxes involved with managing JSON-based resources for [!DNL Experience Platform]. Refer to the [getting started guide](api-guide.md) for more information on working with Platform APIs, including best practices. For answers to frequently asked questions, refer to the [Platform troubleshooting guide](troubleshooting.md).
