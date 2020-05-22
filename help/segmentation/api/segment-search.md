---
keywords: Experience Platform;segmentation;segmentation service;troubleshooting;API;seg;
solution: Adobe Experience Platform
title: Segmentation API developer guide
topic: guide
---

# Segment search

Segment search is used to search and index configurable fields contained across various data sources and return them in near real-time. 

This guide provides information to help you better understand Segment search and includes sample API calls for performing basic actions using the API.

## Getting started

The API endpoints used in this guide are part of the Segmentation API. Before continuing, please review the [Segmentation developer guide](getting-started.md).

In particular, the [getting started section](getting-started.md) of the Segmentation developer guide includes links to related topics, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform APIs.

### Search across multiple namespaces

This search endpoint can be used to search across various namespaces, returning a list of search count results. Multiple parameters can be used, separated by ampersands (&).

**API format**

```http
GET /search/namespaces?{QUERY_PARAMETERS}
```

| Parameters | Description | 
| ---------- | ----------- | 
| schema.name | **(Required)** The schema class value associated with the search objects. Currently, only `_xdm.context.segmentdefinition` is supported. |
| s | *(Optional)* A query that conforms to Microsoft's implementation of [Lucene's search syntax](https://docs.microsoft.com/en-us/azure/search/query-lucene-syntax). If no search term is specified, then all records associated with `schema.name` will be returned. A more detailed explanation can be found in the [appendix](#appendix) of this document. |

**Request**

```shell
curl -X GET \
    https://platform.adobe.io/data/core/ups/search/namespaces?schema.name=_xdm.context.segmentdefinition \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'Content-Type: application/json' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'x-ups-search-version: 1.0' 
```

**Response**

A successful response returns HTTP status 200 with the following information.

```json
{
  "namespaces": [
    {
      "name": "AAMTraits",
      "count": 45
    },
    {
      "name": "AAMSegments",
      "count": 10
    },
    {
      "name": "SegmentsAISegments",
      "count": 3
    }
  ],
  "status": {
    "message": "Success"
  }
}
```

### Search individual entities

This search endpoint can be used to retrieve a list of all full text indexed objects within the specified namespace. Multiple parameters can be used, separated by ampersands (&).

**API format**

```http
GET /search/entities?{QUERY_PARAMETERS}
```

| Parameters | Description | 
| ---------- | ----------- | 
| schema.name | **(Required)** The schema class value associated with the search objects. Currently, only `_xdm.context.segmentdefinition` is supported. |
| namespace | **(Required)** The namespace you wish to search within. |
| s | *(Optional)* A query that conforms to Microsoft's implementation of [Lucene's search syntax](https://docs.microsoft.com/en-us/azure/search/query-lucene-syntax). If no search term is specified, then all records associated with `schema.name` will be returned. A more detailed explanation can be found in the [appendix](#appendix) of this document. |
| entityId | *(Optional)* Limits your search to within the designated folder. |
| limit | *(Optional)* The number of search results to return. The default value is 50. |
| page | *(Optional)* The page number used for paginating results of the query searched. Please note that the page number starts at **0**.|


**Request**

```shell
curl -X GET \
    https://platform.adobe.io/data/core/ups/search/entities?schema.name=_xdm.context.segmentdefinition&namespace=AAMSegments \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'Content-Type: application/json' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'x-ups-search-version: 1.0' 
```

**Response**

A successful response returns HTTP status 200 with results matching the search query.

```json
{
  "entities": [
    {
       "id": "1012667",
       "base64EncodedSourceId": "RFVGamdydHpEdy01ZTE1ZGJlZGE4YjAxMzE4YWExZWY1MzM1",
       "sourceId": "DUFjgrtzDw-5e15dbeda8b01318aa1ef533",
       "isFolder": true,
       "parentFolderId": "974139",
       "name": "aam-47995 verification (100)"
    },
    {
       "id": "14653311",
       "base64EncodedSourceId": "REVGamduLVgzdy01ZTE2ZjRhNjc1ZDZhMDE4YThhZDM3NmY1",
       "sourceId": "DEFjgn-X3w-5e16f4a675d6a018a8ad376f",
       "isFolder": false,
       "parentFolderId": "324050",
       "name": "AAM - Heavy equipment",
       "description": "AAM - Acme Equipment"
    }
 
 ],
  "page": {
    "totalCount": 2,
    "totalPages": 1,
    "pageOffset": 0,
    "pageSize": 10
  },
  "status": {
    "message": "Success"
  }
}
```

### Get structural information about a search object

This search endpoint can be used to get the structural information about the requested search object.

**API format**

```http
GET /search/taxonomy?{QUERY_PARAMETERS}
```

| Parameters | Description | 
| ---------- | ----------- | 
| schema.name | **(Required)** The schema class value associated with the search objects. Currently, only `_xdm.context.segmentdefinition` is supported. |
| namespace | **(Required)** The namespace you wish to search within. |
| entityId | **(Required)** The ID of the search object you want to get the structural information about. |

**Request**

```shell
curl -X GET \
    https://platform.adobe.io/data/core/ups/search/taxonomy?schema.name=_xdm.context.segmentdefinition&namespace=AAMSegments&entityId=porsche11037 \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'Content-Type: application/json' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'x-ups-search-version: 1.0' 
```

**Response**

A successful response returns HTTP status 200 with detailed structural information about the requested search object.

```json
{
  "taxonomy": [
    {
      "id": "carTraits",
      "label": "AAMTraits for Cars",
      "parentFolderId": "root"
    },
    {
      "id": "fastCarsFolder",
      "label": "Fast Cars",
      "parentFolderId": "carTraits"
    },
    {
      "id": "porsche11037",
      "label": "Porsche",
      "parentFolderId": "redCarsFolderId"
    }
  ],
  "status": {
    "message": "Success"
  }
}
```

## Next steps

After reading this guide you now have a better understanding of how  Segment search works. For more information on Segmentation, please read the [Segmentation overview](../home.md).

## Appendix {#appendix}

Search queries are written in the following manner: `{FieldName}:{SearchExpression}`.

### Search fields {#search-fields}

The following table lists the fields which can be searched within the search parameter.

| Field Name | Description |
| ---------- | ----------- |
| folderId | The folder or folders that have the folder ID of your specified search. |
| folderLocation | The location or locations that have the folder location of your specified search. |
| parentFolderId | The segment or folder that have the parent folder ID of your specified search. | 
| segmentId | The segment matches the segment ID of your specified search. |
| segmentName | The segment matches the segment name of your specified search. |
| segmentDescription | The segment matches the segment description of your specified search. |

### Search expression {#search-expression}

The following table lists the specifics of how search queries works when using the search API. 

| Search Expression | Description |
| ----------------- | ----------- |
| foo | Search for any word. This will return results if the word "foo" is found in any of the searchable fields. |
| foo AND bar | A Boolean search. This will return results if **both** the words "foo" and "bar" are found in any of the searchable fields. |
| foo OR bar | A Boolean search. This will return results if **either** the word "foo" or the word "bar" are found in any of the searchable fields. |
| foo NOT bar | A Boolean search. This will return results if the word "foo" is found but the word "bar" is not found in any of the searchable fields. |
| name: foo AND bar | A Boolean search. This will return results if **both** the words "foo" and "bar" are found in the "name" field. |
| run* | A wildcard search. Using an asterisk (*) matches 0 or more characters, meaning it will return results if the content of any of the searchable fields contains a word that starts with "run". For example, this will return results if the words "runs", "running", "runner", or "runt" appear. |
| cam? | A wildcard search. Using a question mark (?) matches only exactly one character, meaning it will return results if the content of any of the searchable fields starts with "cam" and an additional letter. For example, this will return results if the words "camp" or "cams" appear, but will not return results if the words "camera" or "campfire" appear. |
| "blue umbrella" | A phrase search. This will return results if the contents of any of the searchable fields contains the full phrase "blue umbrella". |
| blue\~ | A fuzzy search. Optionally, you can put a number between 0-2 after the tilde (~) to specify the edit distance. For example, "blue\~1" would be return "blue", "blues", or "glue". Fuzzy search can **only** be applied to terms, not phrases. However, you can append tildes to the end of each word in a phrase. So, for example, "camping\~ in\~ the\~ summer\~" would match on "camping in the summer". |
| "hotel airport"\~5 | A proximity search. This type of search is used to find terms that are near to each other in a document. For example, the phrase `"hotel airport"~5` will find the terms "hotel" and "airport" within 5 words of each other in a document. |
| `/a[0-9]+b$/` | A regular expression search. This type of search finds a match based on the contents between forward slashes "/", as documented in the RegExp class. For example, to find documents containing "motel" or "hotel", specify `/[mh]otel/`. Regular expression searches are matched against single words. |

For more detailed documentation about the query syntax, please read the [Lucene query syntax documentation](https://docs.microsoft.com/en-us/azure/search/query-lucene-syntax).
