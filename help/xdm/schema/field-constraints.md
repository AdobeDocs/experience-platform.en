---
keywords: Experience Platform;home;popular topics;schema;Schema;field group;Field group;Field groups;field groups;data type;data types;Data types;Data type;schema design;datatype;Datatype;data type;Data type;schemas;Schemas;Schema design;map;Map;
solution: Experience Platform
title: XDM Field Type Constraints
description: A reference for field type constraints in Experience Data Model (XDM), including the other serialization formats they can be mapped to and how to define your own field types in the API.
exl-id: 63839a28-6d26-46f1-8bbf-b524e82ac4df
---
# XDM field type constraints

In Experience Data Model (XDM) schemas, a field's type constrains what kind of data the field can contain. This document provides an overview of each core field type, including the other serialization formats they can be mapped to and how to define your own field types in the API in order to enforce different constraints.

## Getting started

Before using this guide, please review the [basics of schema composition](./composition.md) for an introduction to XDM schemas, classes, and schema field groups.

If you plan on defining your own field types in the API, it is strongly recommended that you start with the [Schema Registry developer guide](../api/getting-started.md) to learn how to create field groups and data types to include your custom fields in. If you are using the Experience Platform UI to create your schemas, see the guide on [defining fields in the UI](../ui/fields/overview.md) to learn how implement constraints on fields that you define within custom field groups and data types.

## Base structure and examples {#basic-types}

XDM is built on top of JSON Schema, and therefore XDM fields inherit a similar syntax when defining their type. Understanding how different field types are represented in JSON Schema can help indicate the base constraints of each type.

>[!NOTE]
>
>See the [API fundamentals guide](../../landing/api-fundamentals.md#json-schema) for more information on JSON Schema and other underlying technologies in Platform APIs.

The following table outlines how each XDM type is represented in JSON Schema, along with an example value that conforms to the type:

<table style="table-layout:auto">
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

>[!NOTE]
>
>Among the standard XDM types listed in the tables below, the [!UICONTROL Map] type is also included. Maps are used in standard schemas when data is represented as keys that map to certain values, or where keys cannot reasonably be included in a static schema and must be treated as data values.
>
>Many standard XDM components use map types, and you can also [define custom map fields](../tutorials/custom-fields-api.md#custom-maps) if desired. The map type's inclusion in the tables below is intended to help you determine how to map your existing data to XDM if it is currently stored in any of the formats listed below.

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

{style="table-layout:auto"}

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

{style="table-layout:auto"}

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

{style="table-layout:auto"}

## Defining XDM field types in the API {#define-fields}

The Schema Registry API allows you to define custom fields through the use of formats and optional constraints. See the guide on [defining custom fields in the Schema Registry API](../tutorials/custom-fields-api.md) for more information.
