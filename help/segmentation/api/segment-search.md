---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
solution: Adobe Experience Platform
title: Real-time Customer Profile API developer guide
topic: guide
---

# Profile search

Profile search is used to search and index configurable fields contained across various data sources and return them in near real-time. 

This guide provides information to help you better understand Profile search and includes sample API calls for performing basic actions using the API.

## Getting started

The API endpoints used in this guide are part of the Real-time Customer Profile API. Before continuing, please review the [Real-time Customer Profile developer guide](getting-started.md).

In particular, the [getting started section](getting-started.md) of the Profile developer guide includes links to related topics, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform APIs.

### Get search results

The search endpoint can be used to get search results based on the values of the required `schema.name` parameter and additional optional query parameters. Multiple parameters can be used, separated by ampersands (&).

**API format**

```http
GET /search?{QUERY_PARAMETERS}
```

|Parameter|Description|
|---|---|
|`schema.name`|**Required.** The name of the schema class containing the content to be searched, written in dot-notation format. Currently, only `schema.name=_xdm.context.segmentdefinition` is supported.|
|`limit`|The number of search results to return. The default value is 50.|
|`page`|The page number used for paginating results of the query searched.|
|`s`|A query that conforms to Microsoft's implementation of [Lucene's search syntax](https://docs.microsoft.com/en-us/azure/search/query-lucene-syntax). If no search term is specified, then all records associated with `schema.name` will be returned. A more detailed explanation can be found in the [Search parameters](#search-parameters) section of this document.|
|`namespace`|Identifies the actual data to search on the schema class specified in the `schema.name` parameter. |
|`organization.type`|Determines the content of the response. The format of the content returned is dependent on the values used in `schema.name`. For `_xdm.context.segmentdefinition`, the valid values are `hierarchy` or `hierarchyinfo`.|
|`organization.id`| **Required if `organization.type` is specified.** Gives the hierarchy of the specified organization when used with the `organization.type` of hierarchy.|

**Request**

```shell
curl -X GET \
    https://platform.adobe.io/data/core/ups/search?schema.name=_xdm.context.segmentdefinition \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'Content-Type: application/json' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns an array of objects that meet your search criteria. In this example, because the `schema.name` parameter was `_xdm.context.segmentdefinition`, a list of segment definitions is returned.

```json
{
  "aam-hierarchy": {
    "_xdm.context.segmentdefinition": [
      {
        "isFolder": true,
        "id": "100023",
        "name": "Segment Definition 1",
        "description": "Sample description.",
        "parentFolderId": "99970"
      },
      {
        "isFolder": false,
        "id": "1000028",
        "name": "Segment Definition 2",
        "description": "Sample description.",
        "parentFolderId": "103584"
      }
    ]
  },
  "page": {
    "totalCount": 2,
    "totalPages": 1,
    "pageOffset": "1",
    "pageSize": 2,
    "limit": 2
  }
}
```

### Create provisioning requests

You can create provisioning requests to enable Profile search on schemas by making a POST request to the `/search/provisioning/component/init` endpoint.

**Request**

>[!CAUTION]
>This POST request does not contain a payload, and therefore does not require a Content-Type header. In addition, there is no Sandbox header because all of the data is sent into a global sandbox.

```shell
curl -X POST \
    https://platform.adobe.io/data/core/ups/search/provisioning/component/init \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' 
```

**Response**

A successful response returns HTTP status 201 (Created) and the following message:

```plaintext
The request has been fulfilled and resulted in a new resource being created.
```

### Handle configuration requests

The configuration endpoint can be used to set up the proper indexes, indexers, and data source connections for a new IMS Organization. Two properties are required in order to handle configuration requests: `databaseName` and `containerName`.

`databaseName` represents the name of the Profile database for the organization that will be configured.

`containerName` represents the name of the container populated by a data connector, which is what is read during configuration. There are two values for `containerName`, one or both can be used in the POST request:
- `_xdm.content.segmentdefinition`
- `_experience.audiencemanager.segmentfolder`

### Create a configuration request

The following API call generates the required data source, indexer, and index based on the parameters supplied in the request payload.

**API format**

```http
POST /search/configure
```

**Request**

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/search/configure \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "databaseName": {DATABASE_NAME},
    "containerName": "_xdm.context.segmentdefinition" "_experience.audiencemanager.segmentfolder"
  }'
```

**Response**

A successful response returns HTTP status 202 (Accepted) and a plaintext message.

```plaintext
The request has been accepted for processing, but the processing has not been completed.
```

### Delete a configuration request

The following API call removes matching index entries, and deletes the indexer and data source based on the parameters supplied in the request payload. 

>[!NOTE]
>The index itself will not be deleted, as it is a shared resource.

**API format**

```http
DELETE /search/configure
```

**Request**

```shell
curl -X DELETE \
  https://platform.adobe.io/data/core/ups/search/configure \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "databaseName": {DATABASE_NAME},
    "containerName": "_xdm.context.segmentdefinition" "_experience.audiencemanager.segmentfolder"
  }'
```

**Response**

A successful response returns HTTP status 202 (Accepted) and a plaintext message.

```plaintext
The request has been accepted for processing, but the processing has not been completed.
```

## Next steps

After reading this guide you now have a better understanding of how Real-time Customer Profile search works. For more information on Real-time Customer Profile, please read the [Real-time Customer Profile overview](../home.md). For more information on Segmentation, please read the [Segmentation overview](../../segmentation/home.md).

## Appendix {#appendix}

### Search parameters {#search-parameters}

The following table lists the specifics of how the search parameter works when using the search API. 

|Search Query | Description|
|------------ | -----------|
|foo | Search for any word. This will return results if the word "foo" is found in any of the searchable fields.|
|foo AND bar | A Boolean search. This will return results if **both** the words "foo" and "bar" are found in any of the searchable fields.|
|foo OR bar | A Boolean search. This will return results if **either** the word "foo" or the word "bar" are found in any of the searchable fields.|
|foo NOT bar | A Boolean search. This will return results if the word "foo" is found but the word "bar" is not found in any of the searchable fields.|
|name: foo AND bar | A Boolean search. This will return results if **both** the words "foo" and "bar" are found in the "name" field.|
|run* | A wildcard search. Using an asterisk (*) matches 0 or more characters, meaning it will return results if the content of any of the searchable fields contains a word that starts with "run". For example, this will return results if the words "runs", "running", "runner", or "runt" appear.|
|cam? | A wildcard search. Using a question mark (?) matches only exactly one character, meaning it will return results if the content of any of the searchable fields starts with "cam" and an additional letter. For example, this will return results if the words "camp" or "cams" appear, but will not return results if the words "camera" or "campfire" appear.|
|"blue umbrella" | A phrase search. This will return results if the contents of any of the searchable fields contains the full phrase "blue umbrella".|
|blue\~ | A fuzzy search. Optionally, you can put a number between 0-2 after the tilde (~) to specify the edit distance. For example, "blue\~1" would be return "blue", "blues", or "glue". Fuzzy search can **only** be applied to terms, not phrases. However, you can append tildes to the end of each word in a phrase. So, for example, "camping\~ in\~ the\~ summer\~" would match on "camping in the summer".|
|"hotel airport"\~5 | A proximity search. This type of search is used to find terms that are near to each other in a document. For example, the phrase `"hotel airport"~5` will find the terms "hotel" and "airport" within 5 words of each other in a document.|
|`/a[0-9]+b$/` | A regular expression search. This type of search finds a match based on the contents between forward slashes "/", as documented in the RegExp class. For example, to find documents containing "motel" or "hotel", specify `/[mh]otel/`. Regular expression searches are matched against single words.|

For more detailed documentation about the query syntax, please read the [Lucene query syntax documentation](https://docs.microsoft.com/en-us/azure/search/query-lucene-syntax).
