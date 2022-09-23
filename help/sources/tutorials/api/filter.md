---
keywords: Experience Platform;home;popular topics;flow service;Flow Service API;sources;Sources
title: 
description: This tutorial covers the steps on how to filter data at the source level using the Flow Service API
---
# Filter data at the source-level using the [!DNL Flow Service] API

>[!IMPORTANT]
>
>Support for filtering data at the source-level is currently only available for the [!DNL Google BigQuery] source.

INTRODUCTION.

## Getting started

This tutorial requires you to have a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../landing/api-guide.md).

## Look up connection specifications

Before you can use the API to filter data at the source-level, you must first retrieve your source's connection specification details in order to determine the operators and language that a specific source supports.

To retrieve a given source's connection specification, make a GET request to the `/connectionSpecs` endpoint of the [!DNL Flow Service] API while providing the property name of your source as part of your query parameters.

**API format**

```http
GET /connectionSpecs/{QUERY_PARAMS}
```

| Parameter | Description |
| --- | --- |
| `{QUERY_PARAMS}` |

**Request**

The following request retrieves connection specifications for [!DNL Google BigQuery]. 

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/flowservice/connectionSpecs?property=name=="google-big-query"' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the connection specifications for [!DNL Google BigQuery], including information on its supported query language and logical operators.

>[!NOTE]
>
>The API response below is truncated for brevity.

```json
"attributes": {
  "filterAtSource": {
    "enabled": true,
    "queryLanguage": "SQL",
    "logicalOperators": [
      "and",
      "or",
      "not"
    ],
    "comparisonOperators": [
      "=",
      "!=",
      "<",
      "<=",
      ">",
      ">=",
      "like",
      "in"
    ],
    "columnNameEscapeChar": "`",
    "valueEscapeChar": "'"
  }
```

| Property | Description |
| --- | --- |
| `attributes.filterAtSource` |
| `attributes.filterAtSource.enabled` |
| `attributes.filterAtSource.queryLanguage` |
| `attributes.filterAtSource.logicalOperators` |
| `attributes.filterAtSource.comparisonOperators` |
| `attributes.filterAtSource.columnNameEscapeChar` |
| `attributes.filterAtSource.valueEscapeChar` |

## Filter source data

