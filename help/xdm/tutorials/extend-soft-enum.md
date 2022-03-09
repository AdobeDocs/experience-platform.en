---
title: Extend a Soft Enum Field
description: Learn how to extend a soft enum field in the Schema Registry API.
exl-id: 96897a5d-e00a-410f-a20e-f77e223bd8c4
---
# Extend a soft enum field

In Experience Data Model (XDM), an enum field represents a string field that is constrained to a pre-defined subset of values. Enum fields can provide validation to ensure that ingested data conforms to a set of accepted values (referred to as a "hard enum"), or they can simply represent a set of suggested values without enforcing constraints (referred to as a "soft enum").

In the Schema Registry API, the constrained values for a hard enum are represented by an `enum` array, while a `meta:enum` object provides friendly display names for those values:

```json
"sampleHardEnumField": {
  "type": "string",
  "enum": [
    "value1",
    "value2",
    "value3"
  ],
  "meta:enum": {
    "value1": "Value 1",
    "value2": "Value 2",
    "value3": "Value 3"
  },
  "default": "value1"
}
```

For hard enum fields, the Schema Registry does not allow `meta:enum` to be extended beyond the values provided under `enum`, since attempting to ingest string values outside of those constraints would not pass validation.

By contrast, a soft enum field does not contain an `enum` array and only uses the `meta:enum` object to denote suggested values:

```json
"sampleSoftEnumField": {
  "type": "string",
  "meta:enum": {
    "value1": "Value 1",
    "value2": "Value 2",
    "value3": "Value 3"
  },
  "default": "value1"
}
```

Since soft enums do not have the same validation constraints as hard enums, their `meta:enum` properties can be extended to include new values. This tutorial covers how to extend standard and custom soft enum fields in the Schema Registry API.

## Prerequisites

This guide assumes you are familiar with the elements of schema composition in XDM and how to use the Schema Registry API to create and edit XDM resources. Please refer to the following documentation if you require an introduction:

* [Basics of schema composition](../schema/composition.md)
* [Schema Registry API guide](../api/overview.md)

## Extend a standard soft enum field

To extend the `meta:enum` of a standard string field, you can create a [friendly name descriptor](../api/descriptors.md#friendly-name) for the field in question in a particular schema.

>[!NOTE]
>
>Standard soft enums can only be extended at the schema level. In other words, extending the `meta:enum` of a standard field in one schema does not affect other schemas that employ the same standard field.

The following request adds soft enum values to the standard `eventType` field (provided by the [XDM ExperienceEvent class](../classes/experienceevent.md)) for the schema identified under `sourceSchema`:

```curl
curl -X POST \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/descriptors \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
        "@type": "xdm:alternateDisplayInfo",
        "sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/fbc52b243d04b5d4f41eaa72a8ba58be",
        "sourceProperty": "/eventType",
        "title": {
            "en_us": "Enum Event Type"
        },
        "description": {
            "en_us": "Event type field with soft enum values"
        },
        "meta:enum": {
          "eventA": {
            "en_us": "Event Type A"
          },
          "eventB": {
            "en_us": "Event Type B"
          }
        }
      }'
```

After applying the descriptor, the Schema Registry responds with the following when retrieving the schema (response truncated for space):

```json
{
  "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/fbc52b243d04b5d4f41eaa72a8ba58be",
  "title": "Example Schema",
  "properties": {
    "eventType": {
      "type":"string",
      "title": "Enum Event Type",
      "description": "Event type field with soft enum values.",
      "meta:enum": {
        "customEventA": "Custom Event Type A",
        "customEventB": "Custom Event Type B"
      }
    }
  }
}
```

>[!NOTE]
>
>If the standard field already contains values under `meta:enum`, the new values from the descriptor do not overwrite the existing fields and are added on instead:
>
>```json
>"standardField": {
>  "type":"string",
>  "title": "Example standard enum field",
>  "description": "Standard field with existing enum values.",
>  "meta:enum": {
>    "standardEventA": "Standard Event Type A",
>    "standardEventB": "Standard Event Type B",
>    "customEventA": "Custom Event Type A",
>    "customEventB": "Custom Event Type B"
>  }
>}
>```

## Extend a custom soft enum field

To extend the `meta:enum` of a custom field, you can update the field's parent class, field group, or data type through a PATCH request.

>[!WARNING]
>
>In contrast with standard fields, updating the `meta:enum` of a custom field affects all other schemas that employ that field. If you do not want changes to propagate across schemas, consider creating a new custom resource instead:
>
>* [Create a custom class](../api/classes.md#create)
>* [Create a custom field group](../api/field-groups.md#create)
>* [Create a custom data type](../api/data-types.md#create)

The following request updates the `meta:enum` of a "loyalty level" field provided by a custom data type:

```curl
curl -X PATCH \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/datatypes/_{TENANT_ID}.datatypes.8779fd45d6e4eb074300023a439862bbba359b60d451627a \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '[
        {
          "op": "replace",
          "path": "/loyaltyLevel/meta:enum",
          "value": {
            "ultra-platinum": "Ultra Platinum",
            "platinum": "Platinum",
            "gold": "Gold",
            "silver": "Silver",
            "bronze": "Bronze"
          }
        }
      ]'
```

After applying the change, the Schema Registry responds with the following when retrieving the schema (response truncated for space):

```json
{
  "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/fbc52b243d04b5d4f41eaa72a8ba58be",
  "title": "Example Schema",
  "properties": {
    "loyaltyLevel": {
      "type":"string",
      "title": "Loyalty Level",
      "description": "The loyalty program tier that this customer qualifies for.",
      "meta:enum": {
        "ultra-platinum": "Ultra Platinum",
        "platinum": "Platinum",
        "gold": "Gold",
        "silver": "Silver",
        "bronze": "Bronze"
      }
    }
  }
}
```

## Next steps

This guide covered how to extend soft enums in the Schema Registry API. See the guide on [defining custom fields in the API](./custom-fields-api.md) for more information on how to create different field types.
