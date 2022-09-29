---
title: Manage Suggested Values in the API
description: Learn how to add suggested values to a string field in the Schema Registry API.
exl-id: 96897a5d-e00a-410f-a20e-f77e223bd8c4
---
# Manage suggested values in the API

For any string field in Experience Data Model (XDM), you can define an **enum** that constrains the values that the field can ingest to a predefined set. If you attempt to ingest data to an enum field and the value does not match any of those defined in its configuration, ingestion will be denied.

In contrast to enums, adding **suggested values** to a string field does not constrain the values that it can ingest. Instead, suggested values affect what predefined values are available in the [Segmentation UI](../../segmentation/ui/overview.md) when including the string field as an attribute.

>[!NOTE]
>
>There is an approximate five-minute delay for a field's updated suggested values to be reflected in the Segmentation UI.

This guide covers how to manage suggested values using the [Schema Registry API](https://developer.adobe.com/experience-platform-apis/references/schema-registry/). For steps on how to do this in the Adobe Experience Platform user interface, see the [UI guide on enums and suggested values](../ui/fields/enum.md).

## Prerequisites

This guide assumes you are familiar with the elements of schema composition in XDM and how to use the Schema Registry API to create and edit XDM resources. Please refer to the following documentation if you require an introduction:

* [Basics of schema composition](../schema/composition.md)
* [Schema Registry API guide](../api/overview.md)

It is also strongly recommended that you review the [evolution rules for enums and suggested values](../ui/fields/enum.md#evolution) if you are updating existing fields. If you are managing suggested values for schemas that participate in a union, see the [rules for merging enums and suggested values](../ui/fields/enum.md#merging).

## Composition 

In the API, the constrained values for an **enum** field are represented by an `enum` array, while a `meta:enum` object provides friendly display names for those values:

```json
"exampleStringField": {
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

For enum fields, the Schema Registry does not allow `meta:enum` to be extended beyond the values provided under `enum`, since attempting to ingest string values outside of those constraints would not pass validation.

Alternatively, you can define a string field that does not contain an `enum` array and only uses the `meta:enum` object to denote **suggested values**:

```json
"exampleStringField": {
  "type": "string",
  "meta:enum": {
    "value1": "Value 1",
    "value2": "Value 2",
    "value3": "Value 3"
  },
  "default": "value1"
}
```

Since the string does not have an `enum` array to define constraints, its `meta:enum` property can be extended to include new values.

<!-- ## Manage suggested values for standard fields

For existing standard fields, you can [add suggested values](#add-suggested-standard) or [remove suggested values](#remove-suggested-standard). -->

## Add suggested values to a standard field {#add-suggested-standard}

To extend the `meta:enum` of a standard string field, you can create a [friendly name descriptor](../api/descriptors.md#friendly-name) for the field in question in a particular schema.

>[!NOTE]
>
>Suggested values for string fields can only be added at the schema level. In other words, extending the `meta:enum` of a standard field in one schema does not affect other schemas that employ the same standard field.

The following request adds suggested values to the standard `eventType` field (provided by the [XDM ExperienceEvent class](../classes/experienceevent.md)) for the schema identified under `sourceSchema`:

```curl
curl -X POST \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/descriptors \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
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

<!-- ### Remove suggested values {#remove-suggested-standard}

If a standard string field has predefined suggested values, you can remove any values that you do not wish to see in segmentation. This is done through by creating a [friendly name descriptor](../api/descriptors.md#friendly-name) for the schema that includes an `xdm:excludeMetaEnum` property.

**API format**

```http
POST /tenant/descriptors
```

**Request**

The following request removes the suggested values "[!DNL Web Form Filled Out]" and "[!DNL Media ping]" for `eventType` in a schema based on the [XDM ExperienceEvent class](../classes/experienceevent.md).

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/descriptors \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
        "@type": "xdm:alternateDisplayInfo",
        "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/274f17bc5807ff307a046bab1489fb18",
        "xdm:sourceVersion": 1,
        "xdm:sourceProperty": "/xdm:eventType",
        "xdm:excludeMetaEnum": {
          "web.formFilledOut": "Web Form Filled Out",
          "media.ping": "Media ping"
        }
      }'
```

| Property | Description |
| --- | --- |
| `@type` | The type of descriptor being defined. For a friendly name descriptor, this value must be set to `xdm:alternateDisplayInfo`. |
| `xdm:sourceSchema` | The `$id` URI of the schema where the descriptor is being defined. |
| `xdm:sourceVersion` | The major version of the source schema. |
| `xdm:sourceProperty` | The path to the specific property whose suggested values you want to manage. The path should begin with a slash (`/`) and not end with one. Do not include `properties` in the path (for example, use `/personalEmail/address` instead of `/properties/personalEmail/properties/address`). |
| `meta:excludeMetaEnum` | An object that describes the suggested values that should be excluded for the field in segmentation. The key and value for each entry must match those included in the original `meta:enum` of the field in order for the entry to be excluded.  |

{style="table-layout:auto"}

**Response**

A successful response returns HTTP status 201 (Created) and the details of the newly created descriptor. The suggested values included under `xdm:excludeMetaEnum` will now be hidden from the Segmentation UI.

```json
{
  "@type": "xdm:alternateDisplayInfo",
  "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/274f17bc5807ff307a046bab1489fb18",
  "xdm:sourceVersion": 1,
  "xdm:sourceProperty": "/xdm:eventType",
  "xdm:excludeMetaEnum": {
    "web.formFilledOut": "Web Form Filled Out"
  },
  "meta:containerId": "tenant",
  "@id": "f3a1dfa38a4871cf4442a33074c1f9406a593407"
}
``` -->

## Manage suggested values for a custom field {#suggested-custom}

To manage the `meta:enum` of a custom field, you can update the field's parent class, field group, or data type through a PATCH request.

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
  -H 'x-gw-ims-org-id: {ORG_ID}' \
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

This guide covered how to manage suggested values for string fields in the Schema Registry API. See the guide on [defining custom fields in the API](./custom-fields-api.md) for more information on how to create different field types.
