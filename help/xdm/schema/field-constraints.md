---
keywords: Experience Platform;home;popular topics;schema;Schema;mixin;Mixin;Mixins;mixins;data type;data types;Data types;Data type;schema design;datatype;Datatype;data type;Data type;schemas;Schemas;Schema design;map;Map;
solution: Experience Platform
title: XDM field type constraints
topic: overview
description: A reference for XDM field type constraints, including the other serialization formats they can be mapped to and how to define your own field types in the API.
---

# XDM field type constraints

The XDM field types you select for your schemas constrain what kinds of data those fields can contain. This document provides an overview of each core field type, including the other serialization formats they can be mapped to, and how to define your own field types in the API in order to enforce different constraints.

## Getting started

Before using this guide, please review the [basics of schema composition](./composition.md) for an introduction to XDM schemas, classes, and mixins.

If you plan on defining your own field types, it is strongly recommended that you start with the [Schema Registry developer guide](../api/getting-started.md) to learn how to create mixins and data types to include your custom fields in.

## Mapping XDM types to other formats

The table below describes the mapping between each XDM type (`meta:xdmType`) and other serialization formats.

|XDM Type<br>(meta:xdmType)|JSON<br>(JSON Schema)|Parquet<br>(type/annotation)|[!DNL Spark] SQL|Java|Scala|.NET|CosmosDB|MongoDB|Aerospike|Protobuf 2 |
|---|---|---|---|---|---|---|---|---|---|---|
|string|type:string|BYTE_ARRAY/UTF8|StringType|java.lang.String|String|System.String|String|string|String|string |
|number|type:number|DOUBLE|DoubleType|java.lang.Double|Double|System.Double|Number|double|Double|double |
|long|type:integer<br>maximum:2^53+1<br>minimum:-2^53+1|INT64|LongType|java.lang.Long|Long|System.Int64|Number|long|Integer|int64 |
|int|type:integer<br>maximum:2^31<br>minimum:-2^31|INT32/INT_32|IntegerType|java.lang.Integer|Int|System.Int32|Number|int|Integer|int32 |
|short|type:integer<br>maximum:2^15<br>minimum:-2^15|INT32/INT_16|ShortType|java.lang.Short|Short|System.Int16|Number|int|Integer|int32 |
|byte|type:integer<br>maximum:2^7<br>minimum:-2^7|INT32/INT_8|ByteType|java.lang.Short|Byte|System.SByte|Number|int|Integer|int32 |
|boolean|type:boolean|BOOLEAN|BooleanType|java.lang.Boolean|Boolean|System.Boolean|Boolean|bool|Integer|Integer|bool |
|date|type:string<br>format:date<br>(RFC 3339, section 5.6)|INT32/DATE|DateType|java.util.Date|java.util.Date|System.DateTime|String|date|Integer<br>(unix millis)|int64<br>(unix millis) |
|date-time|type:string<br>format:date-time<br>(RFC 3339, section 5.6)|INT64/TIMESTAMP_MILLIS|TimestampType|java.util.Date|java.util.Date|System.DateTime|String|timestamp|Integer<br>(unix millis)|int64<br>(unix millis) |
|map|object|MAP annotated group<br><br><<span>key_type</span>> MUST be STRING<br><br><<span>value_type</span>> type of map values|MapType<br><br>"keyType" MUST be StringType<br><br>"valueType" is type of map values.|java.util.Map|Map|---|object|object|map|map<<span>key_type, value_type</span>> |

## Defining XDM field types in the API

XDM schemas are defined using [JSON Schema](https://json-schema.org/) standards and basic field types, with additional constraints for field names which are enforced by [!DNL Experience Platform]. The [Schema Registry API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/schema-registry.yaml) allows you to define additional field types through the use of formats and optional constraints. XDM field types are exposed by the field-level attribute, `meta:xdmType`.

>[!NOTE]
>
>`meta:xdmType` is a system-generated value, and therefore you are not required to add this property to the JSON for your field. Best practice is to use JSON Schema types (such as string and integer) with the appropriate min/max constraints as defined in the table below.

The following table outlines the appropriate formatting to define scalar field types and more specific field types using optional properties. More information regarding optional properties and type-specific keywords is available through the [JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/type.html).

To begin, find the desired field type and use the sample code provided to build your API request for [creating a mixin](../api/create-mixin.md) or [creating a data type](../api/create-data-type.md).

<table>
  <tr>
    <th>Desired Type<br/>(meta:xdmType)</th>
    <th>JSON<br/>(JSON Schema)</th>
    <th>Code Sample</th>
  </tr>
  <tr>
    <td>string</td>
    <td>type: string<br/><br/><strong>Optional properties:</strong><br/>
      <ul>
        <li>pattern</li>
        <li>minLength</li>
        <li>maxLength</li>
      </ul>
    </td>
    <td>
      <pre class="JSON language-JSON hljs">
        "sampleField": {
            "type": "string",
            "pattern": "^[A-Z]{2}$",
            "maxLength": 2
        }
      </pre>
    </td>
  </tr>
  <tr>
    <td>uri<br/>(xdmType:string)</td>
    <td>type: string<br/>format: uri</td>
    <td>
      <pre class="JSON language-JSON hljs">
        "sampleField": {
          "type": "string",
          "format": "uri"
        }
      </pre>
    </td>
  </tr>
  <tr>
    <td>enum<br/>(xdmType: string)</td>
    <td>type: string<br/><br/><strong>Optional property:</strong><br/>
      <ul>
        <li>default</li>
      </ul>
    </td>
    <td>Specify customer-facing option labels using "meta:enum":
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
        }
      </pre>
    </td>
  </tr>
  <tr>
    <td>number</td>
    <td>type: number<br/>minimum: ±2.23×10^308<br/>maximum: ±1.80×10^308</td>
    <td>
      <pre class="JSON language-JSON hljs">
        "sampleField": {
          "type": "number"
        }
      </pre>
    </td>
  </tr>
  <tr>
    <td>long</td>
    <td>type: integer<br/>maximum:2^53+1<br>minimum:-2^53+1</td>
    <td>
      <pre class="JSON language-JSON hljs">
        "sampleField": {
          "type": "integer",
          "minimum": -9007199254740992,
          "maximum": 9007199254740992
        }
      </pre>
    </td>
  </tr>
  <tr>
    <td>int</td>
    <td>type: integer<br/>maximum:2^31<br>minimum:-2^31</td>
    <td>
      <pre class="JSON language-JSON hljs">
        "sampleField": {
          "type": "integer",
          "minimum": -2147483648,
          "maximum": 2147483648
        }
      </pre>
    </td>
  </tr>
  <tr>
    <td>short</td>
    <td>type: integer<br/>maximum:2^15<br>minimum:-2^15</td>
    <td>
      <pre class="JSON language-JSON hljs">
        "sampleField": {
          "type": "integer",
          "minimum": -32768,
          "maximum": 32768
        }
      </pre>
    </td>
  </tr>
  <tr>
    <td>byte</td>
    <td>type: integer<br/>maximum:2^7<br>minimum:-2^7</td>
    <td>
      <pre class="JSON language-JSON hljs">
        "sampleField": {
          "type": "integer",
          "minimum": -128,
          "maximum": 128
          }
      </pre>
    </td>
  </tr>
  <tr>
    <td>boolean</td>
    <td><br/>type: boolean<br/>{true, false}<br/><br/><strong>Optional property:</strong><br/>
      <ul>
        <li>default</li>
      </ul>
    </td>
    <td>
      <pre class="JSON language-JSON hljs">
        "sampleField": {
          "type": "boolean",
          "default": false
        }
      </pre>
    </td>
  </tr>
  <tr>
    <td>date</td>
    <td>type: string<br/>format: date</td>
    <td>
      <pre class="JSON language-JSON hljs">
        "sampleField": {
          "type": "string",
          "format": "date",
          "examples": ["2004-10-23"]
        }
      </pre>
      Date as defined by <a href="https://tools.ietf.org/html/rfc3339#section-5.6" target="_blank">RFC 3339, section 5.6</a>, where "full-date" = date-fullyear "-" date-month "-" date-mday (YYYY-MM-DD)
    </td>
  </tr>
  <tr>
    <td>date-time</td>
    <td>type: string<br/>format: date-time</td>
    <td>
      <pre class="JSON language-JSON hljs">
        "sampleField": {
          "type": "string",
          "format": "date-time",
          "examples": ["2004-10-23T12:00:00-06:00"]
        }
      </pre>
      Date-Time as defined by <a href="https://tools.ietf.org/html/rfc3339#section-5.6" target="_blank">RFC 3339, section 5.6</a>, where "date-time" = full-date "T" full-time:<br/>(YYYY-MM-DD'T'HH:MM:SS.SSSSX)
    </td>
  </tr>
  <tr>
    <td>array</td>
    <td>type: array</td>
    <td>items.type can be defined using any scalar type:
      <pre class="JSON language-JSON hljs">
        "sampleField": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      </pre>
      Array of objects defined by another schema:<br/>
      <pre class="JSON language-JSON hljs">
        "sampleField": {
          "type": "array",
          "items": {
            "$ref": "id"
          }
        }
      </pre>
      Where "id" is the {id} of the reference schema.
    </td>
  </tr>
  <tr>
    <td>object</td>
    <td>type: object</td>
    <td>properties.{field}.type can be defined using any scalar type:
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
        }
      </pre>
      Field of type "object" that is defined by a reference schema:
      <pre class="JSON language-JSON hljs">
        "sampleField": {
          "type": "object",
          "$ref": "id"
        }
      </pre>
      Where "id" is the {id} of the reference schema.
    </td>
  </tr>
  <tr>
    <td>map</td>
    <td>type: object<br/><br/><strong>Note:</strong><br/>Use of the 'map' data type is reserved for industry and vendor schema usage and is not available for use in tenant defined fields. It is used in standard schemas when data is represented as keys that map to some value, or where keys cannot reasonably be included in a static schema and must be treated as data values.</td>
    <td>A 'map' MUST NOT define any properties. It MUST define a single "[!UICONTROL additionalProperties]" schema to describe the type of values contained in the 'map'. A 'map' in XDM can contain only a single data type. Values may be any valid XDM schema definition, including an array or an object, or as a reference to another schema (via $ref).<br/><br/>Map field with values of type 'string':
      <pre class="JSON language-JSON hljs">
        "sampleField": {
          "type": "object",
          "additionalProperties":{
            "type": "string"
          }
        }
      </pre>
    Map field with values being an array of strings:
      <pre class="JSON language-JSON hljs">
        "sampleField": {
          "type": "object",
          "additionalProperties":{
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      </pre>
    Map field that references another schema:
      <pre class="JSON language-JSON hljs">
        "sampleField": {
          "type": "object",
          "additionalProperties":{
            "$ref": "id"
          }
        }
      </pre>
      Where "id" is the {id} of the reference schema.
    </td>
  </tr>
</table>
