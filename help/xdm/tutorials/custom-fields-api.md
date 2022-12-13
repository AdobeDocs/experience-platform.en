---
title: Define XDM Fields in the Schema Registry API
description: Learn how to define different fields when creating custom Experience Data Model (XDM) resources in the Schema Registry API.
exl-id: d79332e3-8448-42af-b250-882bcb0f1e7d
---
# Define XDM fields in the Schema Registry API

All Experience Data Model (XDM) fields are defined using the standard [JSON Schema](https://json-schema.org/) constraints that apply to their field type, with additional constraints for field names that are enforced by Adobe Experience Platform. The Schema Registry API allows you to define custom fields in your schemas through the use of formats and optional constraints. XDM field types are exposed by the field-level attribute, `meta:xdmType`.

>[!NOTE]
>
>`meta:xdmType` is a system-generated value, and therefore you are not required to add this property to the JSON for your field when using the API (except when [creating custom map types](#custom-maps)). Best practice is to use JSON Schema types (such as `string` and `integer`) with the appropriate min/max constraints as defined in the table below.

This guide outlines the appropriate formatting to define different field types, including those with optional properties. More information regarding optional properties and type-specific keywords is available through the [JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/type.html).

To begin, find the desired field type and use the sample code provided to build your API request for [creating a field group](../api/field-groups.md#create) or [creating a data type](../api/data-types.md#create).

## [!UICONTROL String] {#string}

[!UICONTROL String] fields are indicated by `type: string`.

```json
"sampleField": {
  "title": "Sample String Field",
  "description": "An example string field.",
  "type": "string"
}
```

You can optionally constrain what kinds of values can be inputted for the string through the following additional properties:

* `pattern`: A regex pattern to constrain by.
* `minLength`: A minimum length for the string.
* `maxLength`: A maximum length for the string.

```json
"sampleField": {
  "title": "Sample String Field",
  "description": "An example string field with added constraints.",
  "type": "string",
  "pattern": "^[A-Z]{2}$",
  "maxLength": 2
}
```

## [!UICONTROL URI] {#uri}

[!UICONTROL URI] fields are indicated by `type: string` with a `format` property set to `uri`. No other properties are accepted.

```json
"sampleField": {
  "title": "Sample URI Field",
  "description": "An example URI field.",
  "type": "string",
  "format": "uri"
}
```

## [!UICONTROL Enum] {#enum}

[!UICONTROL Enum] fields must use `type: string`, with the enum values themselves provided under an `enum` array:

```json
"sampleField": {
  "title": "Sample Enum Field",
  "description": "An example enum field.",
  "type": "string",
  "enum": [
      "value1",
      "value2",
      "value3"
  ]
```

You can optional customer-facing labels for each value can be provided under a `meta:enum` property, with each label keyed to a corresponding `enum` value.

```json
"sampleField": {
  "title": "Sample Enum Field",
  "description": "An example enum field with customer-facing labels.",
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
  }
```

>[!NOTE]
>
>The `meta:enum` value does **not** declare an enumeration or drive any data validation on its own. In most cases, strings provided under `meta:enum` are also provided under `enum` to ensure that data is constrained. However, there are some use cases where `meta:enum` is provided without a corresponding `enum` array. See the tutorial on [defining suggested values](../tutorials/suggested-values.md) for more information.

You can optionally provide a `default` property to indicate the default `enum` value that the field will use if no value is provided.

```json
"sampleField": {
  "title": "Sample Enum Field",
  "description": "An example enum field with customer-facing labels and a default value.",
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
```

>[!IMPORTANT]
>
>If no `default` value is provided and the enum field is set to `required`, any record missing an accepted value for this field will fail validation upon ingestion.

## [!UICONTROL Number] {#number}

Number fields are indicated by `type: number` and have no other required properties.

```json
"sampleField": {
  "title": "Sample Number Field",
  "description": "An example number field.",
  "type": "number"
}
```

>[!NOTE]
>
>`number` types are used for any numeric type, either integers or floating point numbers, whereas [`integer` types](#integer) are used for integral numbers specifically. Refer to the [JSON Schema documentation on numeric types](https://json-schema.org/understanding-json-schema/reference/numeric.html) for more information on the use cases for each type.

## [!UICONTROL Integer] {#integer}

[!UICONTROL Integer] fields are indicated by `type: integer` and have no other required fields.

```json
"sampleField": {
  "title": "Sample Integer Field",
  "description": "An example integer field.",
  "type": "integer"
}
```

>[!NOTE]
>
>While `integer` types refer to integral numbers specifically, [`number` types](#number) are used for any numeric type, either integers or floating point numbers. Refer to the [JSON Schema documentation on numeric types](https://json-schema.org/understanding-json-schema/reference/numeric.html) for more information on the use cases for each type.

You can optionally constrain the range of the integer by adding `minimum` and `maximum` properties to the definition. Several other numerical types supported by the Schema Builder UI are just `integer` types with specific `minimum` and `maximum` constraints, such as [[!UICONTROL Long]](#long), [[!UICONTROL Short]](#short), and [[!UICONTROL Byte]](#byte).

```json
"sampleField": {
  "title": "Sample Integer Field",
  "description": "An example integer field with added constraints.",
  "type": "integer",
  "minimum": 1,
  "maximum": 100
}
```

## [!UICONTROL Long] {#long}

The equivalent of a [!UICONTROL Long] field created through the Schema Builder UI is an [`integer` type field](#integer) with specific `minimum` and `maximum` values (`-9007199254740992` and `9007199254740992`, respectively).

```json
"sampleField": {
  "title": "Sample Long Field",
  "description": "An example long field.",
  "type": "integer",
  "minimum": -9007199254740992,
  "maximum": 9007199254740992
}
```

## [!UICONTROL Short] {#short}

The equivalent of a [!UICONTROL Short] field created through the Schema Builder UI is an [`integer` type field](#integer) with specific `minimum` and `maximum` values (`-32768` and `32768`, respectively).

```json
"sampleField": {
  "title": "Sample Short Field",
  "description": "An example short field.",
  "type": "integer",
  "minimum": -32768,
  "maximum": 32768
}
```

## [!UICONTROL Byte] {#byte}

The equivalent of a [!UICONTROL Byte] field created through the Schema Builder UI is an [`integer` type field](#integer) with specific `minimum` and `maximum` values (`-128` and `128`, respectively).

```json
"sampleField": {
  "title": "Sample Byte Field",
  "description": "An example byte field.",
  "type": "integer",
  "minimum": -128,
  "maximum": 128
}
```

## [!UICONTROL Boolean] {#boolean}

[!UICONTROL Boolean] fields are indicated by `type: boolean`.

```json
"sampleField": {
  "title": "Sample Boolean Field",
  "description": "An example boolean field.",
  "type": "boolean"
}
```

You can optionally provide a `default` value that the field will use when no explicit value is provided during ingestion.

```json
"sampleField": {
  "title": "Sample Boolean Field",
  "description": "An example boolean field with a default value.",
  "type": "boolean",
  "default": false
}
```

>[!IMPORTANT]
>
>If no `default` value is provided and the boolean field is set to `required`, any record missing an accepted value for this field will fail validation upon ingestion.

## [!UICONTROL Date] {#date}

[!UICONTROL Date] fields are indicated by `type: string` and `format: date`. You can also optionally provide an array of `examples` to leverage in cases where you want to display a sample date string for users entering the data manually.

```json
"sampleField": {
  "title": "Sample Date Field",
  "description": "An example date field with an example array item.",
  "type": "string",
  "format": "date",
  "examples": ["2004-10-23"]
```

## [!UICONTROL DateTime] {#date-time}

[!UICONTROL DateTime] fields are indicated by `type: string` and `format: date-time`. You can also optionally provide an array of `examples` to leverage in cases where you want to display a sample datetime string for users entering the data manually.

```json
"sampleField": {
  "title": "Sample Datetime Field",
  "description": "An example datetime field with an example array item.",
  "type": "string",
  "format": "date-time",
  "examples": ["2004-10-23T12:00:00-06:00"]
}
```

## [!UICONTROL Array] {#array}

[!UICONTROL Array] fields are indicated by `type: array` and an `items` object that defines the schema of the items that the array will accept.

You can define array items using primitive types, such as an array of strings:

```json
"sampleField": {
  "title": "Sample Array Field",
  "description": "An example array field using a primitive type.",
  "type": "array",
  "items": {
    "type": "string"
  }
}
```

You can also define the array items based on an existing data type by referring to the `$id` of the data type through a `$ref` property. The following is an array of [!UICONTROL Payment Item] objects:

```json
"sampleField": {
  "title": "Sample Array Field",
  "description": "An example array field using a data type reference.",
  "type": "array",
  "items": {
    "$ref": "https://ns.adobe.com/xdm/data/paymentitem"
  }
}
```

## [!UICONTROL Object] {#object}

[!UICONTROL Object] fields are indicated by `type: object` and a `properties` object that defines sub-properties for the schema field.

The each sub-field defined under `properties` can be defined using any primitive `type` or by referencing an existing data type through a `$ref` property pointing to the `$id` of the data type in question:

```json
"sampleField": {
  "title": "Sample Object Field",
  "description": "An example object field.",
  "type": "object",
  "properties": {
    "field1": {
      "type": "string"
    },
    "field2": {
      "$ref": "https://ns.adobe.com/xdm/common/measure"
    }
  }
}
```

You can also define the entire object through by referring to a data type, provided the data type in question is itself defined as `type: object`:

```json
"sampleField": {
  "title": "Sample Object Field",
  "description": "An example object field using a data type reference.",
  "$ref": "https://ns.adobe.com/xdm/common/phoneinteraction"
}
```

## [!UICONTROL Map] {#map}

A map field is essentially an [`object`-type field](#object) with an unconstrained set of keys. Like objects, maps have a `type` value of `object`, but their `meta:xdmType` is explicitly set to `map`.

A map **must not** define any properties. It **must** define a single `additionalProperties` schema to describe the type of values contained within the map (each map can only contain a single data type). The `type` value must be either `string` or `integer`.

For example, a map field with string-type values would be defined like so:

```json
"sampleField": {
  "title": "Sample Map Field",
  "description": "An example map field.",
  "type": "object",
  "meta:xdmType": "map",
  "additionalProperties": {
    "type": "string"
  }
}
```

See the section below for furthe details on creating custom map fields.

### Creating custom map types {#custom-maps}

In order to support "map-like" data efficiently in XDM, objects may be annotated with a `meta:xdmType` set to `map` to make it clear that an object should be managed as if the key set were unconstrained. Data that is ingested into map fields must use string keys, and only string or integer values (as determined by `additionalProperties.type`).

XDM places the following restrictions on the use of this storage hint:

* Map types MUST be of type `object`.
* Map types MUST NOT have properties defined (in other words, they define "empty" objects).
* Map types MUST include an `additionalProperties.type` field that describes the values that may be placed within the map, either `string` or `integer`.

Ensure that you are only using map-type fields when absolutely necessary, as they carry the following performance drawbacks:

* Response time from [Adobe Experience Platform Query Service](../../query-service/home.md) degrades from three seconds to ten seconds for 100 million records.
* Maps must have fewer than 16 keys or else risk further degradation.

The Platform user interface also has limitations in how it can extract the keys of map-type fields. Whereas object-type fields can be expanded, maps are displayed as a single field instead.

## Next steps

This guide covered how to define different field types in the API. For more information how XDM field types are formatted, see the guide on [XDM field type constraints](../schema/field-constraints.md).
