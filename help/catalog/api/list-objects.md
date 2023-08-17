---
keywords: Experience Platform;home;popular topics;filter;Filter;filter data;Filter data
solution: Experience Platform
title: List Catalog Objects
description: You can retrieve a list of all available objects of a specific type through a single API call, with best practice being to include filters that limit the size of the response.
exl-id: 2c65e2bc-4ddd-445a-a52d-6ceb1153ccea
---
# List Catalog objects

You can retrieve a list of all available objects of a specific type through a single API call, with best practice being to include filters that limit the size of the response.

**API format**

```http
GET /{OBJECT_TYPE}
GET /{OBJECT_TYPE}?{FILTER}={VALUE}&{FILTER_2}={VALUE}
```

| Parameter | Description |
| --- | --- |
| `{OBJECT_TYPE}` | The type of [!DNL Catalog] object to be listed. Valid objects are: <ul><li>`batches`</li><li>`dataSets`</li><li>`dataSetFiles`</li><li>`dataSetViews`</li></ul> |
| `{FILTER}` | A query parameter used to filter the results returned in the response. Multiple parameters are separated by ampersands (`&`). See the guide on [filtering Catalog data](filter-data.md) for more information. |

**Request**

The sample request below retrieves a list of datasets, with a `limit` filter reducing the response to five results, and a `properties` filter that limits the properties displayed for each dataset.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/catalog/dataSets?limit=5&properties=name,description,files' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a list of [!DNL Catalog] objects in the form of key-value pairs, filtered by the query parameters provided in the request. For each key-value pair, the key represents a unique identifier for the [!DNL Catalog] object in question, which can then be used in another call to [view that specific object](look-up-object.md) for more details.

>[!NOTE]
>
>If a returned object does not contain one or more of the requested properties indicated by the `properties` query, the response returns only the requested properties that it does include, as shown in ***`Sample Dataset 3`*** and ***`Sample Dataset 4`*** below.

```json
{
    "5ba9452f7de80400007fc52a": {
        "name": "Sample Dataset 1",
        "description": "Description of dataset.",
        "files": "@/dataSets/5ba9452f7de80400007fc52a/views/5ba9452f7de80400007fc52b/files"
    },
    "5bb276b03a14440000971552": {
        "name": "Sample Dataset 2",
        "description": "Description of dataset.",
        "files": "@/dataSets/5bb276b03a14440000971552/views/5bb276b01250b012f9acc75b/files"
    },
    "5bceaa4c26c115000039b24b": {
        "name": "Sample Dataset 3"
    },
    "5bda3a4228babc0000126377": {
        "name": "Sample Dataset 4",
        "files": "@/dataSets/5bda3a4228babc0000126377/views/5bda3a4228babc0000126378/files"
    },
    "5bde21511dd27b0000d24e95": {
        "name": "Sample Dataset 5",
        "description": "Description of dataset.",
        "files": "@/dataSets/5bde21511dd27b0000d24e95/views/5bde21511dd27b0000d24e96/files"
    }
}
```
