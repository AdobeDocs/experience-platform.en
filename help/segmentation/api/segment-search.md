---
title: Segment Search API Endpoint
description: In the Adobe Experience Platform Segmentation Service API, Segment Search is used to search fields contained across various data sources and return them in near real-time. This guide provides information to help you better understand Segment Search and includes sample API calls for performing basic actions using the API.
exl-id: bcafbed7-e4ae-49c0-a8ba-7845d8ad663b
---
# Segment Search endpoint

Segment Search is used to search fields contained across various data sources and return them in near real-time. 

This guide provides information to help you better understand Segment Search and includes sample API calls for performing basic actions using the API.

## Getting started

The endpoints used in this guide are part of the [!DNL Adobe Experience Platform Segmentation Service] API. Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including required headers and how to read example API calls.

In addition to the required headers outlined in the getting started section, all requests to the Segment Search endpoint require the following additional header:

- x-ups-search-version: "1.0"

### Search across multiple namespaces

This search endpoint can be used to search across various namespaces, returning a list of search count results. Multiple parameters can be used, separated by ampersands (&).

**API format**

```http
GET /search/namespaces?schema.name={SCHEMA}
GET /search/namespaces?schema.name={SCHEMA}&s={SEARCH_TERM}
```

| Parameters | Description | 
| ---------- | ----------- | 
| `schema.name={SCHEMA}` | **(Required)** Where {SCHEMA} represents the schema class value associated with the search objects. Currently, only `_xdm.context.segmentdefinition` is supported. |
| `s={SEARCH_TERM}` | *(Optional)* Where {SEARCH_TERM} represents a query that conforms to Microsoft's implementation of [Lucene's search syntax](https://docs.microsoft.com/en-us/azure/search/query-lucene-syntax). If no search term is specified, then all records associated with `schema.name` will be returned. A more detailed explanation can be found in the [appendix](#appendix) of this document. |

**Request**

```shell
curl -X GET \
    https://platform.adobe.io/data/core/ups/search/namespaces?schema.name=_xdm.context.segmentdefinition \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'Content-Type: application/json' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'x-ups-search-version: 1.0' 
```

**Response**

A successful response returns HTTP status 200 with the following information.

```json
{
  "namespaces": [
    {
      "namespace": "AAMTraits",
      "displayName": "AAMTraits",
      "count": 45
    },
    {
      "namespace": "AAMSegments",
      "displayName": "AAMSegment",
      "count": 10
    },
    {
      "namespace": "SegmentsAISegments",
      "displayName": "SegmentSAISegment",
      "count": 3
    }
  ],
  "totalCount": 3,
  "status": {
    "message": "Success"
  }
}
```

### Search individual entities

This search endpoint can be used to retrieve a list of all full text indexed objects within the specified namespace. Multiple parameters can be used, separated by ampersands (&).

**API format**

```http
GET /search/entities?schema.name={SCHEMA}&namespace={NAMESPACE}
GET /search/entities?schema.name={SCHEMA}&namespace={NAMESPACE}&s={SEARCH_TERM}
GET /search/entities?schema.name={SCHEMA}&namespace={NAMESPACE}&entityId={ENTITY_ID}
```

| Parameters | Description | 
| ---------- | ----------- | 
| `schema.name={SCHEMA}`| **(Required)** Where {SCHEMA} contains the schema class value associated with the search objects. Currently, only `_xdm.context.segmentdefinition` is supported. |
| `namespace={NAMESPACE}` | **(Required)** Where {NAMESPACE} contains the namespace you wish to search within. |
| `s={SEARCH_TERM}` | *(Optional)* Where {SEARCH_TERM} contains a query that conforms to Microsoft's implementation of [Lucene's search syntax](https://docs.microsoft.com/en-us/azure/search/query-lucene-syntax). If no search term is specified, then all records associated with `schema.name` will be returned. A more detailed explanation can be found in the [appendix](#appendix) of this document. |
| `entityId={ENTITY_ID}` | *(Optional)* Limits your search to within the designated folder, specified with {ENTITY_ID}. |
| `limit={LIMIT}` | *(Optional)* Where {LIMIT} represents the number of search results to return. The default value is 50. |
| `page={PAGE}` | *(Optional)* Where {PAGE} represents the page number used for paginating results of the query searched. Please note that the page number starts at **0**.|


**Request**

```shell
curl -X GET \
    https://platform.adobe.io/data/core/ups/search/entities?schema.name=_xdm.context.segmentdefinition&namespace=AAMSegments \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'Content-Type: application/json' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
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
GET /search/taxonomy?schema.name={SCHEMA}&namespace={NAMESPACE}&entityId={ENTITY_ID}
```

| Parameters | Description | 
| ---------- | ----------- | 
| `schema.name={SCHEMA}` | **(Required)** Where {SCHEMA} contains the schema class value associated with the search objects. Currently, only `_xdm.context.segmentdefinition` is supported. |
| `namespace={NAMESPACE}` | **(Required)** Where {NAMESPACE} contains the namespace you wish to search within. |
| `entityId={ENTITY_ID}` | **(Required)** The ID of the search object you want to get the structural information about, specified with {ENTITY_ID}. |

**Request**

```shell
curl -X GET \
    https://platform.adobe.io/data/core/ups/search/taxonomy?schema.name=_xdm.context.segmentdefinition&namespace=AAMSegments&entityId=porsche11037 \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'Content-Type: application/json' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'x-ups-search-version: 1.0' 
```

**Response**

A successful response returns HTTP status 200 with detailed structural information about the requested search object.

```json
{
    "taxonomy": [
        {
            "id": "0",
            "base64EncodedSourceId": "RFVGZ01BLTVlNjgzMGZjMzk3YjQ1MThhYWExYTA4Zg2",
            "name": "AAMTraits for Cars",
            "parentFolderId": "root"
        },
        {
            "id": "150561",
            "base64EncodedSourceId": "RFVGamdpRk1BZy01ZTY4MzBmYzM5N2I0NTE4YWFhMWEwOGY1",
            "name": "Fast Cars",
            "parentFolderId": "carTraits"
        },
        {
            "id": "porsche11037",
            "base64EncodedSourceId": "REFGZ01CLTVlNjczMGZjMzk3YjQ1MThhZGIxYTA4Zg==",
            "name": "Porsche",
            "parentFolderId": "redCarsFolderId"
        }
    ],
    "status": {
        "message": "Success"
    }
}
```

## Next steps

After reading this guide you now have a better understanding of how Segment Search works.

## Appendix {#appendix}

The following sections provide additional information about how search terms work. Search queries are written in the following manner: `s={FieldName}:{SearchExpression}`. So, for example, to search for a segment definition named AAM or [!DNL Platform], you would use the following search query: `s=segmentName:AAM%20OR%20Platform`.

> ![NOTE] For best practices, the search expression should be HTML encoded, like the example shown above.

### Search fields {#search-fields}

The following table lists the fields which can be searched within the search query parameter.

| Field name | Description |
| ---------- | ----------- |
| folderId | The folder or folders that have the folder ID of your specified search. |
| folderLocation | The location or locations that have the folder location of your specified search. |
| parentFolderId | The segment definition or folder that have the parent folder ID of your specified search. | 
| segmentId | The segment definition that matches the segment ID of your specified search. |
| segmentName | The segment definition that matches the segment name of your specified search. |
| segmentDescription | The segment definition that matches the segment description of your specified search. |

### Search expression {#search-expression}

The following table lists the specifics of how search queries works when using the Segment Search API. 

> ![NOTE] The following examples are shown in a non-HTML encoded format for better clarity. For best practices, HTML encode your search expression. 

| Example search expression | Description |
| ------------------------- | ----------- |
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
