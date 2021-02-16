---
keywords: Experience Platform;home;popular topics;schema;Schema;mixin;Mixin;Mixins;mixins;data type;data types;Data types;Data type;schema design;datatype;Datatype;data type;Data type;schemas;Schemas;Schema design;map;Map;
solution: Experience Platform
title: XDM Field Type Constraints
topic: overview
description: A reference for field type constraints in Experience Data Model (XDM), including the other serialization formats they can be mapped to and how to define your own field types in the API.
---

# XDM field type constraints

The field type of an Experience Data Model (XDM) schema field constrains what kind of data the field can contain. This document provides an overview of each core field type, including the other serialization formats they can be mapped to and how to define your own field types in the API in order to enforce different constraints.

## Getting started

Before using this guide, please review the [basics of schema composition](./composition.md) for an introduction to XDM schemas, classes, and mixins.

If you plan on defining your own field types in the API, it is strongly recommended that you start with the [Schema Registry developer guide](../api/getting-started.md) to learn how to create mixins and data types to include your custom fields in. If you are using the Experience Platform UI to create your schemas, see the guide on [defining fields in the UI](../ui/fields/overview.md) to learn how implement constraints on fields that you define within custom mixins and data types.

## Base structure and examples

XDM is built on top of JSON Schema, and therefore XDM fields inherit a similar syntax when defining their type. Understanding how different field types are represented in JSON Schema can help indicate the base constraints of each type.

>[!NOTE]
>
>See the [API fundamentals guide](../../landing/api-fundamentals.md#json-schema) for more information on JSON Schema and other underlying technologies in Experience Platform APIs.

The following table outlines how each XDM type is represented in JSON Schema, along with an example value that conforms to the type:

<table>
  <thead>
    <tr>
      <th>XDM type</th>
      <th>JSON Schema</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[!UICONTROL String]</td>
      <td>
        <pre class="JSON language-JSON hljs">
{"type": "string"}</pre>
      </td>
      <td><code>"Platinum"</code></td>
    </tr>
    <tr>
      <td>[!UICONTROL Double]</td>
      <td>
        <pre class="JSON language-JSON hljs">
{"type": "number"}</pre>
      </td>
      <td><code>12925.49</code></td>
    </tr>
    <tr>
      <td>[!UICONTROL Long]</td>
      <td>
        <pre class="JSON language-JSON hljs">
{
  "type": "integer",
  "maximum": 9007199254740991,
  "minimum": -9007199254740991
}</pre>
      </td>
      <td><code>1478108935</code></td>
    </tr>
    <tr>
      <td>[!UICONTROL Integer]</td>
      <td>
        <pre class="JSON language-JSON hljs">
{
  "type": "integer",
  "maximum": 2147483648,
  "minimum": -2147483648
}</pre>
      </td>
      <td><code>24906290</code></td>
    </tr>
    <tr>
      <td>[!UICONTROL Short]</td>
      <td>
        <pre class="JSON language-JSON hljs">
{
  "type": "integer",
  "maximum": 32768,
  "minimum": -32768
}</pre>
      </td>
      <td><code>15781</code></td>
    </tr>
    <tr>
      <td>[!UICONTROL Byte]</td>
      <td>
        <pre class="JSON language-JSON hljs">
{
  "type": "integer",
  "maximum": 128,
  "minimum": -128
}</pre>
      </td>
      <td><code>90</code></td>
    </tr>
    <tr>
      <td>[!UICONTROL Date]*</td>
      <td>
        <pre class="JSON language-JSON hljs">
{
  "type": "string",
  "format": "date"
}</pre>
      </td>
      <td><code>"2019-05-15"</code></td>
    </tr>
    <tr>
      <td>[!UICONTROL DateTime]*</td>
      <td>
        <pre class="JSON language-JSON hljs">
{
  "type": "string",
  "format": "date-time"
}</pre>
      </td>
      <td><code>"2019-05-15T20:20:39+00:00"</code></td>
    </tr>
    <tr>
      <td>[!UICONTROL Boolean]</td>
      <td>
        <pre class="JSON language-JSON hljs">
{"type": "string"}</pre>
      </td>
      <td><code>true</code></td>
    </tr>
  </tbody>
</table>

**All date-formatted strings must conform to the ISO 8601 standard ([RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6)).*

## Mapping XDM types to other formats

The sections below describe how each XDM type maps to other common serialization formats:

* [Parquet, Spark SQL, and Java](#parquet)
* [Scala, .NET, and CosmosDB](#scala)
* [MongoDB, Aerospike, and Protobuf 2](#mongo)

>[!IMPORTANT]
>
>Among the standard XDM types listed in the tables below, the [!UICONTROL Map] type is also included. Maps are used in standard schemas when data is represented as keys that map to certain values, or where keys cannot reasonably be included in a static schema and must be treated as data values.
>
>Map-type fields are reserved for industry and vendor schema usage and therefore cannot be used in custom resources that you define. The map type's inclusion in the tables below is only intended to help you determine how to map your existing data to XDM if it is currently stored in any of the formats listed below.

### Parquet, Spark SQL, and Java {#parquet}

| XDM type | Parquet | Spark SQL | Java | 
| --- | --- | --- | --- |
| [!UICONTROL String] | Type: `BYTE_ARRAY`<br>Annotation: `UTF8` | `StringType` | `java.lang.String` |
| [!UICONTROL Double] | Type: `DOUBLE` | `LongType` | `java.lang.Double` |
| [!UICONTROL Long] | Type: `INT64` | `LongType` | `java.lang.Long` |
| [!UICONTROL Integer] | Type: `INT32`<br>Annotation: `INT_32` | `IntegerType` | `java.lang.Integer` |
| [!UICONTROL Short] | Type: `INT32`<br>Annotation: `INT_16` | `ShortType` | `java.lang.Short` |
| [!UICONTROL Byte] | Type: `INT32`<br>Annotation: `INT_8` | `ByteType` | `java.lang.Short` |
| [!UICONTROL Date] | Type: `INT32`<br>Annotation: `DATE` | `DateType` | `java.util.Date` |
| [!UICONTROL DateTime] | Type: `INT64`<br>Annotation: `TIMESTAMP_MILLIS` | `TimestampType` | `java.util.Date` |
| [!UICONTROL Boolean] | Type: `BOOLEAN` | `BooleanType` | `java.lang.Boolean` |
| [!UICONTROL Map] | `MAP`-annotated group<br><br>(`<key-type>` must be `STRING`) | `MapType`<br><br>(`keyType` must be `StringType`) | `java.util.Map` |

### Scala, .NET, and CosmosDB {#scala}

| XDM type | Scala | .NET | CosmosDB |
| --- | --- | --- | --- |
| [!UICONTROL String] | `String` | `System.String` | `String` |
| [!UICONTROL Double] | `Double` | `System.Double` | `Number` |
| [!UICONTROL Long] | `Long` | `System.Int64` | `Number` |
| [!UICONTROL Integer] | `Int` | `System.Int32` | `Number` |
| [!UICONTROL Short] | `Short` | `System.Int16` | `Number` |
| [!UICONTROL Byte] | `Byte` | `System.SByte` | `Number` |
| [!UICONTROL Date] | `java.util.Date` | `System.DateTime` | `String` |
| [!UICONTROL DateTime] | `java.util.Date` | `System.DateTime` | `String` |
| [!UICONTROL Boolean] | `Boolean` | `System.Boolean` | `Boolean` |
| [!UICONTROL Map] | `Map` | (N/A) | `object` |

### MongoDB, Aerospike, and Protobuf 2 {#mongo}

| XDM type | MongoDB | Aerospike | Protobuf 2 | 
| --- | --- | --- | --- |
| [!UICONTROL String] | `string` | `String` | `string` |
| [!UICONTROL Double] | `double` | `Double` | `double` |
| [!UICONTROL Long] | `long` | `Integer` | `int64` |
| [!UICONTROL Integer] | `int` | `Integer` | `int32` |
| [!UICONTROL Short] | `int` | `Integer` | `int32` |
| [!UICONTROL Byte] | `int` | `Integer` | `int32` |
| [!UICONTROL Date] | `date` | `Integer`<br>(Unix milliseconds) | `int64`<br>(Unix milliseconds) |
| [!UICONTROL DateTime] | `timestamp` | `Integer`<br>(Unix milliseconds) | `int64`<br>(Unix milliseconds) |
| [!UICONTROL Boolean] | `bool` | `Integer`<br>(0/1 binary) | `bool` |
| [!UICONTROL Map] | `object` | `map` | `map<key_type, value_type>` |

## Defining XDM field types in the API {#define-fields}

All XDM fields are defined using the standard [JSON Schema](https://json-schema.org/) constraints that apply to their field type, with additional constraints for field names that are enforced by [!DNL Experience Platform]. The Schema Registry API allows you to define additional field types through the use of formats and optional constraints. XDM field types are exposed by the field-level attribute, `meta:xdmType`.

>[!NOTE]
>
>`meta:xdmType` is a system-generated value, and therefore you are not required to add this property to the JSON for your field when using the API. Best practice is to use JSON Schema types (such as `string` and `integer`) with the appropriate min/max constraints as defined in the table below.

The following table outlines the appropriate formatting to define different field types, including those with optional properties. More information regarding optional properties and type-specific keywords is available through the [JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/type.html).

To begin, find the desired field type and use the sample code provided to build your API request for [creating a mixin](../api/mixins.md#create) or [creating a data type](../api/data-types.md#create).

<table>
  <tr>
    <th>XDM type</th>
    <th>Optional properties</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>[!UICONTROL String]</td>
    <td>
      <ul>
        <li><code>pattern</code></li>
        <li><code>minLength</code></li>
        <li><code>maxLength</code></li>
      </ul>
    </td>
    <td>
      <pre class="JSON language-JSON hljs">
"sampleField": {
    "type": "string",
    "pattern": "^[A-Z]{2}$",
    "maxLength": 2
}</pre>
    </td>
  </tr>
  <tr>
    <td>[!UICONTROL URI]</td>
    <td></td>
    <td>
      <pre class="JSON language-JSON hljs">
"sampleField": {
  "type": "string",
  "format": "uri"
}</pre>
    </td>
  </tr>
  <tr>
    <td>[!UICONTROL Enum]</td>
    <td>
      <ul>
        <li><code>default</code></li>
        <li><code>meta:enum</code></li>
      </ul>
    </td>
    <td>Constrained enum values are provided under the <code>enum</code> array, while optional customer-facing labels for each value can be provided under <code>meta:enum</code>:
      <pre class="JSON language-JSON hljs">
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
}</pre>
    </td>
  </tr>
  <tr>
    <td>[!UICONTROL Number]</td>
    <td></td>
    <td>
      <pre class="JSON language-JSON hljs">
"sampleField": {
  "type": "number"
}</pre>
    </td>
  </tr>
  <tr>
    <td>[!UICONTROL Long]</td>
    <td></td>
    <td>
      <pre class="JSON language-JSON hljs">
"sampleField": {
  "type": "integer",
  "minimum": -9007199254740992,
  "maximum": 9007199254740992
}</pre>
    </td>
  </tr>
  <tr>
    <td>[!UICONTROL Integer]</td>
    <td></td>
    <td>
      <pre class="JSON language-JSON hljs">
"sampleField": {
  "type": "integer",
  "minimum": -2147483648,
  "maximum": 2147483648
}</pre>
    </td>
  </tr>
  <tr>
    <td>[!UICONTROL Short]</td>
    <td></td>
    <td>
      <pre class="JSON language-JSON hljs">
"sampleField": {
  "type": "integer",
  "minimum": -32768,
  "maximum": 32768
}</pre>
    </td>
  </tr>
  <tr>
    <td>[!UICONTROL Byte]</td>
    <td></td>
    <td>
      <pre class="JSON language-JSON hljs">
"sampleField": {
  "type": "integer",
  "minimum": -128,
  "maximum": 128
  }</pre>
    </td>
  </tr>
  <tr>
    <td>[!UICONTROL Boolean]</td>
    <td>
      <ul>
        <li><code>default</code></li>
      </ul>
    </td>
    <td>
      <pre class="JSON language-JSON hljs">
"sampleField": {
  "type": "boolean",
  "default": false
}</pre>
    </td>
  </tr>
  <tr>
    <td>[!UICONTROL Date]</td>
    <td></td>
    <td>
      <pre class="JSON language-JSON hljs">
"sampleField": {
  "type": "string",
  "format": "date",
  "examples": ["2004-10-23"]
}</pre>
    </td>
  </tr>
  <tr>
    <td>[!UICONTROL DateTime]</td>
    <td></td>
    <td>
      <pre class="JSON language-JSON hljs">
"sampleField": {
  "type": "string",
  "format": "date-time",
  "examples": ["2004-10-23T12:00:00-06:00"]
}</pre>
    </td>
  </tr>
  <tr>
    <td>[!UICONTROL Array]</td>
    <td></td>
    <td>An array of basic scalar types (e.g. strings):
      <pre class="JSON language-JSON hljs">
"sampleField": {
  "type": "array",
  "items": {
    "type": "string"
  }
}</pre>
      An array of objects defined by another schema:<br/>
      <pre class="JSON language-JSON hljs">
"sampleField": {
  "type": "array",
  "items": {
    "$ref": "https://ns.adobe.com/xdm/data/paymentitem"
  }
}</pre>
    </td>
  </tr>
  <tr>
    <td>[!UICONTROL Object]</td>
    <td></td>
    <td>The <code>type</code> attribute of each sub-field defined under <code>properties</code> can be defined using any scalar type:
      <pre class="JSON language-JSON hljs">
"sampleField": {
  "type": "object",
  "properties": {
    "field1": {
      "type": "string"
    },
    "field2": {
      "type": "number"
    }
  }
}</pre>
      Object-type fields can defined by referencing the <code>$id</code> of a data type:
      <pre class="JSON language-JSON hljs">
"sampleField": {
  "type": "object",
  "$ref": "https://ns.adobe.com/xdm/common/phoneinteraction"
}</pre>
    </td>
  </tr>
  <tr>
    <td>[!UICONTROL Map]</td>
    <td></td>
    <td>A map <strong>must not</strong> define any properties. It <strong>must</strong> define a single <code>additionalProperties</code> schema to describe the type of values contained within the map (each map can only contain a single data type). Values may be any valid XDM <code>type</code> attribute, or a reference to another schema using a <code>$ref</code> attribute.<br/><br/>A map field with string-type values:
      <pre class="JSON language-JSON hljs">
"sampleField": {
  "type": "object",
  "additionalProperties":{
    "type": "string"
  }
}</pre>
    A map field with arrays of strings for values:
      <pre class="JSON language-JSON hljs">
"sampleField": {
  "type": "object",
  "additionalProperties":{
    "type": "array",
    "items": {
      "type": "string"
    }
  }
}</pre>
    A map field that references another data type:
      <pre class="JSON language-JSON hljs">
"sampleField": {
  "type": "object",
  "additionalProperties":{
    "$ref": "https://ns.adobe.com/xdm/data/paymentitem"
  }
}</pre>
    </td>
  </tr>
</table>
