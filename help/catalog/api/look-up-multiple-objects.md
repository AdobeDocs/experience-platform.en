---
keywords: Experience Platform;home;popular topics;catalog;multiple object lookup;api
solution: Experience Platform
title: Look Up Multiple Catalog Objects
topic-legacy: developer guide
description: If you wish to view several specific objects, rather than making one request per object, Catalog provides a simple shortcut for requesting multiple objects of the same type. You can use a single GET request to return multiple specific objects by including a comma-separated list of IDs.
exl-id: b2329b32-6139-4557-aff3-a584e03b09f3
---
# Look up multiple Catalog objects

If you wish to view several specific objects, rather than making one request per object, [!DNL Catalog] provides a simple shortcut for requesting multiple objects of the same type. You can use a single GET request to return multiple specific objects by including a comma-separated list of IDs. 

>[!NOTE]
>
>Even when requesting specific [!DNL Catalog] objects, it is still best practice to `properties` query parameter to return only the properties you need.

**API format**

```http
GET /{OBJECT_TYPE}/{ID_1},{ID_2},{ID_3},{ID_4}
GET /{OBJECT_TYPE}/{ID_1},{ID_2},{ID_3},{ID_4}?properties={PROPERTY_1},{PROPERTY_2},{PROPERTY_3}
```

| Parameter | Description |
| -------- | ----------- |
| `{OBJECT_TYPE}` | The type of [!DNL Catalog] object to be retrieved. Valid objects are: <ul><li>`accounts`</li><li>`batches`</li><li>`connections`</li><li>`connectors`</li><li>`dataSets`</li><li>`dataSetFiles`</li><li>`dataSetViews`</li></ul> |
| `{ID}` | An identifier for one of the specific objects you want to retrieve. |

**Request**

The following request includes a comma-separated list of dataset IDs as well as a comma-separated list of properties to be returned for each dataset.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/catalog/dataSets/5bde21511dd27b0000d24e95,5bda3a4228babc0000126377,5bceaa4c26c115000039b24b,5bb276b03a14440000971552,5ba9452f7de80400007fc52a?properties=name,description,files' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a list of the specified datasets, containing only the requested properties (`name`, `description`, and `files`) for each. 

>[!NOTE]
>
>If a returned object does not contain one ore more of the requested properties indicated by the `properties` query, the response returns only the requested properties that it does include, as shown in ***`Sample Dataset 3`*** and ***`Sample Dataset 4`*** below.

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
