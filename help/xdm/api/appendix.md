---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;experience data model;Experience data model;Experience Data Model;data model;Data Model;schema registry;Schema Registry;compatibility;Compatibility;compatibility mode;Compatibility mode;field type;field types;
solution: Experience Platform
title: Schema Registry API Guide Appendix
description: This document provides supplemental information related to working with the Schema Registry API.
topic: developer guide
exl-id: 2ddc7fe8-dd0b-4cf9-8561-e89fcdadbfce
---
# Schema Registry API guide appendix

This document provides supplemental information related to working with the [!DNL Schema Registry] API.

## Using query parameters {#query}

The [!DNL Schema Registry] supports the use of query parameters to page and filter results when listing resources.

>[!NOTE]
>
>When combining multiple query parameters, they must be separated by ampersands (`&`).

### Paging {#paging}

The most common query parameters for paging include:

| Parameter | Description |
| --- | --- |
| `start` | Specify where the listed results should begin. This value can be obtained from the `_page.next` attribute of a list response, and used to access the next page of results. If the `_page.next` value is null, then there is no additional page available.  |
| `limit` | Limit the number of resources returned. Example: `limit=5` will return a list of five resources. |
| `orderby` | Sort results by a specific property. Example: `orderby=title` will sort results by title in ascending order (A-Z). Adding a `-` before the parameter value (`orderby=-title`) will sort items by title in descending order (Z-A). |

### Filtering {#filtering}

You can filter results by using the `property` parameter, which is used to apply a specific operator against a given JSON property within the retrieved resources. Supported operators include:

| Operator | Description | Example |
| --- | --- | --- |
| `==` | Filters by whether the property equals the provided value. | `property=title==test` |
| `!=` | Filters by whether the property does not equal the provided value. | `property=title!=test` |
| `<` | Filters by whether the property is less than the provided value. | `property=version<5` |
| `>` | Filters by whether the property is greater than the provided value. | `property=version>5` |
| `<=` | Filters by whether the property is less than or equal to the provided value. | `property=version<=5` |
| `>=` | Filters by whether the property is greater than or equal to the provided value. | `property=version>=5` |
| `~` | Filters by whether the property matches a provided regular expression. | `property=title~test$` |
| (None) | Stating only the property name returns only entries where the property exists. | `property=title` |

>[!TIP]
>
>You can use the `property` parameter to filter field groups by their compatible class. For example, `property=meta:intendedToExtend==https://ns.adobe.com/xdm/context/profile` returns only field groups that are compatible with the [!DNL XDM Individual Profile] class.

## Compatibility Mode

[!DNL Experience Data Model] (XDM) is a publicly documented specification, driven by Adobe to improve the interoperability, expressiveness, and power of digital experiences. Adobe maintains the source code and formal XDM definitions in an [open source project on GitHub](https://github.com/adobe/xdm/). These definitions are written in XDM Standard Notation, using JSON-LD (JavaScript Object Notation for Linked Data) and JSON Schema as the grammar for defining XDM schemas.

When looking at formal XDM definitions in the public repository, you can see that standard XDM differs from what you see in Adobe Experience Platform. What you are seeing in [!DNL Experience Platform] is called Compatibility Mode, and it provides a simple mapping between standard XDM and the way it is used within [!DNL Platform].

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

Most [!DNL Experience Platform] services including [!DNL Catalog], [!DNL Data Lake], and [!DNL Real-time Customer Profile] use [!DNL Compatibility Mode] in lieu of standard XDM. The [!DNL Schema Registry] API also uses [!DNL Compatibility Mode], and the examples in this document are all shown using [!DNL Compatibility Mode].

It is worthwhile to know that a mapping takes place between standard XDM and the way it is operationalized in [!DNL Experience Platform], but it should not affect your use of [!DNL Platform] services.

The open source project is available to you, but when it comes to interacting with resources through the [!DNL Schema Registry], the API examples in this document provide the best practices you should know and follow.
