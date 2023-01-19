---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;search;datatype;data-type;data type;
solution: Experience Platform
title: Search Data Type
description: This document provides an overview of the Search Experience Data Model (XDM) data type.
exl-id: 9893cb67-b0c7-4f91-a0d4-96f7b87d9510
---
# [!UICONTROL Search] data type

[!UICONTROL Search] is a standard Experience Data Model (XDM) data type that contains information about web search activity.

<img src='../images/data-types/search.PNG' width=500 /><br />

| Property | Data type | Description |
| --- | --- | --- |
| `isPaid` | Boolean | Used to indicate if the search is paid or not. |
| `keywords` | String | The keywords for the search. |
| `pageDepth` | Integer | The page depth in the search results. |
| `position` | Integer | The position or rank of the listing in the search result page. |
| `searchEngine` | String | The search engine used by the search. |
| `searchEngineID` | String | The application-specific identifier used to identify the search engine. |
| `slot` | String | The named section of the page where the search result appeared. The value of this property must be equal to one of the known enum values you define such as `top`, `side`, or `bottom`. |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/search.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/search.schema.json)
