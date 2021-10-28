---
title: Extend a Soft Enum Field
description: Learn how to extend a soft enum string value in the Schema Registry API.
---
# Extend a soft enum field

In Experience Data Model (XDM), an enum field represents a string field that is constrained to a pre-defined subset of values. Enum fields can provide validation to ensure that ingested data conforms to accepted values (referred to as a "hard enum"), or they can simply represent a set suggested values without providing validation (referred to as a "soft enum").

In the Schema Registry API, hard enum values for a string field are represented by an `enum` array, while soft enum values are represented by a `meta:enum` object:

```json
"sampleField": {
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

This tutorial covers how to extend the soft enum values for standard and custom string fields in the Schema Registry API, including examples for common use cases.

## Prerequisites

This guide assumes you are familiar with the elements of schema composition in XDM and how to use the Schema Registry API to create and edit XDM resources. Please refer to the following documentation if you require an introduction:

* [Basics of schema composition](../schema/composition.md)
* [Schema Registry API guide](../api/overview.md)

## Extend a soft enum for a standard field

To extend the `meta:enum` of a standard string field, you can create a [friendly name descriptor](../api/descriptors.md#friendly-name) for the field in question.

The following request adds soft enum values to the standard `eventType` field provided by the [XDM ExperienceEvent class](../classes/experienceevent.md):

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
        "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/fbc52b243d04b5d4f41eaa72a8ba58be",
        "xdm:sourceProperty": "/xdm:eventType",
        "xdm:title": {
            "en_us": "Enum Event Type"
        },
        "xdm:description": {
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
    "xdm:eventType": {
      "type":"string",
      "title": "Enum Event Type",
      "description": "Event type field with soft enum values",
      "meta:enum": {
        "eventA": "Event Type A",
        "eventB": "Event Type B"
      }
    }
  }
}
```

## Extend a soft enum for a custom field

To extend the `meta:enum` of a custom field, you can update the parent resource of the field through a PATCH request.

**API format**

```http

```

**Request**

```curl

```

**Response**

```json

```

## Use cases

## Next steps
