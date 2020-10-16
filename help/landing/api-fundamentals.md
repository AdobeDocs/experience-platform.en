---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Adobe Experience Platform API fundamentals
topic: getting started
---

# Adobe Experience Platform API fundamentals

Adobe Experience Platform APIs employ several underlying technologies and syntaxes that are important to understand in order to effectively manage JSON-based [!DNL Platform] resources. This document provides a brief overview of these technologies, as well as links to external documentation for more information.

## JSON Pointer {#json-pointer}

JSON Pointer is a standardized string syntax ([RFC 6901](https://tools.ietf.org/html/rfc6901)) for identifying specific values within JSON documents. A JSON Pointer is a string of tokens separated by `/` characters, which specify either object keys or array indexes, and the tokens can be a string or a number. JSON Pointer strings are used in many PATCH operations for [!DNL Platform] APIs, as described later in this document. For more information on JSON Pointer, please refer to the [JSON Pointer overview documentation](https://rapidjson.org/md_doc_pointer.html). 

### Example JSON schema object

The following JSON represents a simplified XDM schema, whose fields can be referenced using JSON Pointer strings.

```json
{
    "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/20af3f1d4b175f27ba59529d1b51a0c79fc25df454117c80",
    "meta:altId": "_{TENANT_ID}.schemas.20af3f1d4b175f27ba59529d1b51a0c79fc25df454117c80",
    "meta:resourceType": "schemas",
    "version": "1.0",
    "title": "Loyalty Member Details",
    "type": "object",
    "description": "Details about loyalty program members.",
    "properties": {
        "_{TENANT_ID}": {
            "type": "object",
            "properties": {
                "loyalty": {
                    "title": "Loyalty",
                    "description": "Loyalty object containing loyalty-specific fields.",
                    "properties": {
                        "loyaltyId": {
                            "title": "Loyalty ID",
                            "description": "Unique loyalty program member ID. Should be in the format of an email address.",
                            "type": "string",
                            "meta:xdmType": "string"
                        },
                        "memberSince": {
                            "title": "Member Since",
                            "description": "Date person joined loyalty program.",
                            "type": "string",
                            "format": "date",
                            "meta:xdmType": "date"
                        },
                        "points": {
                            "title": "Points",
                            "description": "Accumulated loyalty points",
                            "type": "integer",
                            "meta:xdmType": "int"
                        },
                        "loyaltyLevel": {
                            "title": "Loyalty Level",
                            "description": "The current loyalty program level to which the individual member belongs.",
                            "type": "string",
                            "enum": [
                                "platinum",
                                "gold",
                                "silver",
                                "bronze"
                            ],
                            "meta:enum": {
                                "platinum": "Platinum",
                                "gold": "Gold",
                                "silver": "Silver",
                                "bronze": "Bronze"
                            },
                            "meta:xdmType": "string"
                        }
                    },
                    "type": "object",
                    "meta:xdmType": "object",
                    "meta:referencedFrom": "https://ns.adobe.com/{TENANT_ID}/datatypes/78570e371092c032260714dd8bfd6d44"
                }
            },
            "meta:xdmType": "object"
        }
    }
}
```

### Example JSON Pointers based on schema object

|JSON Pointer | Resolves to|
|--- | ---|
|`"/title"` | "Loyalty Member Details"|
|`"/properties/_{TENANT_ID}/properties/loyalty"` | (Returns the contents of the `loyalty` object)|
|`"/properties/_{TENANT_ID}/properties/loyalty/properties/loyaltyLevel/enum"` | `["platinum", "gold", "silver", "bronze"]`|
|`"/properties/_{TENANT_ID}/properties/loyalty/properties/loyaltyLevel/enum/0"` | `"platinum"`|

>[!NOTE]
>
>When dealing with the `xdm:sourceProperty` and `xdm:destinationProperty` attributes of [!DNL Experience Data Model] (XDM) descriptors, any `properties` keys must be **excluded** from the JSON Pointer string. See the [!DNL Schema Registry] API developer guide sub-guide on [descriptors](../xdm/api/descriptors.md) for more information.

## JSON Patch

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

Depending on the operation type indicated in `op`, the JSON Patch object may require additional properties. For more information on the different JSON Patch operations and their required syntax, please refer to the [JSON Patch documentation](http://jsonpatch.com/).

## JSON Schema

JSON Schema is a format used to describe and validate the structure of JSON data. [Experience Data Model (XDM)](../xdm/home.md) leverages JSON Schema capabilities to enforce constraints on the structure and format of ingested customer experience data. For more information on JSON Schema, please refer to the [official documentation](https://json-schema.org/).

## Next steps

This document introduced some of the technologies and syntaxes involved with managing JSON-based resources for [!DNL Experience Platform]. For more information on working with [!DNL Platform] APIs, including best practices and answers to frequently asked questions, refer to the [Platform troubleshooting guide](troubleshooting.md).