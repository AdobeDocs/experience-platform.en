---
title: Define XDM Fields in the Schema Registry API
description: Learn how to define different fields when creating custom Experience Data Model (XDM) resources in the Schema Registry API.
exl-id: d79332e3-8448-42af-b250-882bcb0f1e7d
---
# Define XDM fields in the Schema Registry API

All Experience Data Model (XDM) fields are defined using the standard [JSON Schema](https://json-schema.org/) constraints that apply to their field type, with additional constraints for field names that are enforced by Adobe Experience Platform. The Schema Registry API allows you to define custom fields in your schemas through the use of formats and optional constraints. XDM field types are exposed by the field-level attribute, `meta:xdmType`.

>[!NOTE]
>
>`meta:xdmType` is a system-generated value, and therefore you are not required to add this property to the JSON for your field when using the API (except when [creating custom map types](#maps)). Best practice is to use JSON Schema types (such as `string` and `integer`) with the appropriate min/max constraints as defined in the table below.

The following table outlines the appropriate formatting to define different field types, including those with optional properties. More information regarding optional properties and type-specific keywords is available through the [JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/type.html).

To begin, find the desired field type and use the sample code provided to build your API request for [creating a field group](../api/field-groups.md#create) or [creating a data type](../api/data-types.md#create).

<table style="table-layout:auto">
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
    <br>Note that the <code>meta:enum</code> value does <strong>not</strong> declare an enumeration or drive any data validation on its own. In most cases, strings provided under <code>meta:enum</code> are also provided under <code>enum</code> to ensure that data is constrained. However, there are some use cases where <code>meta:enum</code> is provided without a corresponding <code>enum</code> array. See the tutorial on <a href="../tutorials/extend-soft-enum.md">extending soft enums</a> for more information.
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
    <td>A map-type field is essentially an object-type field with an unconstrained set of keys. Like objects, maps have a <code>type</code> value of <code>object</code>, but their <code>meta:xdmType</code> is explicitly set to <code>map</code>.<br><br>A map <strong>must not</strong> define any properties. It <strong>must</strong> define a single <code>additionalProperties</code> schema to describe the type of values contained within the map (each map can only contain a single data type). The <code>type</code> value must be either <code>string</code> or <code>integer</code>.<br/><br/>A map field with string-type values:
      <pre class="JSON language-JSON hljs">
"sampleField": {
  "type": "object",
  "meta:xdmType": "map",
  "additionalProperties":{
    "type": "string"
  }
}</pre>
    See the section below for more information on creating custom map types in XDM.
    </td>
  </tr>
</table>

## Creating custom map types {#maps}

In order to support "map-like" data efficiently in XDM, objects may be annotated with a `meta:xdmType` set to `map` to make it clear that an object should be managed as if the key set were unconstrained. Data that is ingested into map fields must use string keys, and only string or integer values (as determined by `additionalProperties.type`).

XDM places the following restrictions on the use of this storage hint:

* Map types MUST be of type `object`
* Map types MUST NOT have properties defined (in other words, they define "empty" objects)
* Map types MUST include an `additionalProperties.type` field that describes the values that may be placed within the map, either `string` or `integer`.

Ensure that you are only using map-type fields when absolutely necessary, as they carry the following performance drawbacks:

* Response time from Adobe Experience Platform Query Service degrades from three seconds to ten seconds for 100 million records
* Maps must have fewer than 16 keys or else risk further degradation

The Platform user interface also has limitations in how it can extract the keys of map-type fields. Whereas object-type fields can be expanded, maps are displayed as a single field instead.

## Next steps

This guide covered how to define different field types in the API. For more information how XDM field types are formatted, see the guide on [XDM field type constraints](../schema/field-constraints.md).
