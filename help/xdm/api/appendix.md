---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Schema Registry developer appendix
topic: developer guide
---

# Appendix

This document provides supplemental information related to working with the Schema Registry API.

## Compatibility Mode

Experience Data Model (XDM) is a publicly documented specification, driven by Adobe to improve the interoperability, expressiveness, and power of digital experiences. Adobe maintains the source code and formal XDM definitions in an [open source project on GitHub](https://github.com/adobe/xdm/). These definitions are written in XDM Standard Notation, using JSON-LD (JavaScript Object Notation for Linked Data) and JSON Schema as the grammar for defining XDM schemas.

When looking at formal XDM definitions in the public repository, you can see that standard XDM differs from what you see in Adobe Experience Platform. What you are seeing in Experience Platform is called Compatibility Mode, and it provides a simple mapping between standard XDM and the way it is used within Platform.

### How Compatibility Mode works

Compatibility Mode allows the XDM JSON-LD model to work with existing data infrastructure by altering values within standard XDM while keeping the semantics the same. It uses a nested JSON structure, displaying schemas in a tree-like format.

The main difference you will notice between standard XDM and Compatibility Mode is the removal of the "xdm:" prefix for field names. 

The following is a side-by-side comparison showing birthday-related fields (with "description" attributes removed) in both standard XDM and Compatibility Mode. Notice that the Compatibility Mode fields include a reference to the XDM field and its data type in the "meta:xdmField" and "meta:xdmType" attributes.

<table>
	<th>Standard XDM</th>
	<th>Compatibility Mode</th>
	<tr>
		<td>
			<pre class="JSON language-JSON hljs">
        {
          "xdm:birthDate": {
              "title": "Birth Date",
              "type": "string",
              "format": "date",
          },
          "xdm:birthDayAndMonth": {
              "title": "Birth Date",
              "type": "string",
              "pattern": "[0-1][0-9]-[0-9][0-9]",
          },
          "xdm:birthYear": {
              "title": "Birth year",
              "type": "integer",
              "minimum": 1,
              "maximum": 32767
        }
      </pre>
		</td>
		<td>
			<pre class="JSON language-JSON hljs">
        {
          "birthDate": {
              "title": "Birth Date",
              "type": "string",
              "format": "date",
              "meta:xdmField": "xdm:birthDate",
              "meta:xdmType": "date"
          },
          "birthDayAndMonth": {
              "title": "Birth Date",
              "type": "string",
              "pattern": "[0-1][0-9]-[0-9][0-9]",
              "meta:xdmField": "xdm:birthDayAndMonth",
              "meta:xdmType": "string"
          },
          "birthYear": {
              "title": "Birth year",
              "type": "integer",
              "minimum": 1,
              "maximum": 32767,
              "meta:xdmField": "xdm:birthYear",
              "meta:xdmType": "short"
        }
      </pre>
		</td>
	</tr>
</table>

### Why is Compatibility Mode necessary?

Adobe Experience Platform is designed to work with multiple solutions and services, each with their own technical challenges and limitations (for example, how certain technologies handle special characters). In order to overcome these limitations, Compatibility Mode was developed.

Most Experience Platform services including Catalog, Data Lake, and Real-time Customer Profile use Compatibility Mode in lieu of standard XDM. The Schema Registry API also uses Compatibility Mode, and the examples in this document are all shown using Compatibility Mode.

It is worthwhile to know that a mapping takes place between standard XDM and the way it is operationalized in Experience Platform, but it should not affect your use of Platform services.

The open source project is available to you, but when it comes to interacting with resources through the Schema Registry, the API examples in this document provide the best practices you should know and follow.

### Defining XDM field types in the API

XDM schemas are defined using JSON Schema standards and basic field types, with additional constraints for field names which are enforced by Experience Platform. XDM allows you to define additional field types through the use of formats and optional constraints. The XDM field types are exposed by the field-level attribute, `meta:xdmType`.

>[!NOTE] `meta:xdmType` is a system-generated value, and therefore you are not required to add this property to the JSON for your field. Best practice is to use JSON Schema types (such as string and integer) with the appropriate min/max constraints as defined in the table below.

The following table outlines the appropriate formatting to define scalar field types and more specific field types using optional properties. More information regarding optional properties and type-specific keywords is available through the [JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/type.html).

To begin, find the desired field type and use the sample code provided to build your API request.

## Mapping XDM types to other formats

The table below describes the mapping between "meta:xdmType" and other serialization formats.

|XDM Type<br>(meta:xdmType)|JSON<br>(JSON Schema)|Parquet<br>(type/annotation)|Spark SQL|Java|Scala|.NET|CosmosDB|MongoDB|Aerospike|Protobuf 2
|---|---|---|---|---|---|---|---|---|---|---|
|string|type:string|BYTE_ARRAY/UTF8|StringType|java.lang.String|String|System.String|String|string|String|string
|number|type:number|DOUBLE|DoubleType|java.lang.Double|Double|System.Double|Number|double|Double|double
|long|type:integer<br>maximum:2^53+1<br>minimum:-2^53+1|INT64|LongType|java.lang.Long|Long|System.Int64|Number|long|Integer|int64
|int|type:integer<br>maximum:2^31<br>minimum:-2^31|INT32/INT_32|IntegerType|java.lang.Integer|Int|System.Int32|Number|int|Integer|int32
|short|type:integer<br>maximum:2^15<br>minimum:-2^15|INT32/INT_16|ShortType|java.lang.Short|Short|System.Int16|Number|int|Integer|int32
|byte|type:integer<br>maximum:2^7<br>minimum:-2^7|INT32/INT_8|ByteType|java.lang.Short|Byte|System.SByte|Number|int|Integer|int32
|boolean|type:boolean|BOOLEAN|BooleanType|java.lang.Boolean|Boolean|System.Boolean|Boolean|bool|Integer|Integer|bool
|date|type:string<br>format:date<br>(RFC 3339, section 5.6)|INT32/DATE|DateType|java.util.Date|java.util.Date|System.DateTime|String|date|Integer<br>(unix millis)|int64<br>(unix millis)
|date-time|type:string<br>format:date-time<br>(RFC 3339, section 5.6)|INT64/TIMESTAMP_MILLIS|TimestampType|java.util.Date|java.util.Date|System.DateTime|String|timestamp|Integer<br>(unix millis)|int64<br>(unix millis)
|map|object|MAP annotated group<br><br><<span>key_type</span>> MUST be STRING<br><br><<span>value_type</span>> type of map values|MapType<br><br>"keyType" MUST be StringType<br><br>"valueType" is type of map values.|java.util.Map|Map|---|object|object|map|map<key_type, value_type>|
