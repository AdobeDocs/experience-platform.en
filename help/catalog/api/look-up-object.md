---
keywords: Experience Platform;home;popular topics;catalog;object lookup;api
solution: Experience Platform
title: Look Up a Catalog Object
description: If you know the unique identifier for a specific Catalog object, you can perform a GET request to view that object's details.
exl-id: fd6fbe72-0108-4be3-a065-c753e7a19d24
---
# Look up a Catalog object

If you know the unique identifier for a specific [!DNL Catalog] object, you can perform a GET request to view that object's details. 

>[!NOTE]
>
>When viewing specific objects, it is still best practice to [filter by properties](filter-data.md) and return only the properties you are interested in.

**API format**

```http
GET /{OBJECT_TYPE}/{OBJECT_ID}
GET /{OBJECT_TYPE}/{OBJECT_ID}?properties={PROPERTY_1},{PROPERTY_2},{PROPERTY_3}
```

| Parameter | Description |
| --- | --- |
| `{OBJECT_TYPE}` | The type of [!DNL Catalog] object to be retrieved. Valid objects are: <ul><li>`batches`</li><li>`dataSets`</li><li>`dataSetFiles`</li></ul>|
| `{OBJECT_ID}` | The identifier of the specific object you want to retrieve. |

**Request**

The following request retrieves a dataset by its ID, returning its `name`, `description`, `tags`, and `files` properties.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/catalog/dataSets/5ba9452f7de80400007fc52a?properties=name,description,tags,files' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the specified dataset with only the requested `properties` in the body.

```json
{
    "5ba9452f7de80400007fc52a": {
        "name": "Sample Dataset",
        "description": "Sample dataset containing important data.",
        "tags": {
            "adobe/pqs/table": [
                "sample_dataset"
            ]
        },
        "files": "@/dataSetFiles?dataSetId=5ba9452f7de80400007fc52a"
    }
}
```

>[!NOTE]
>
>Properties whose values are prefixed with `@` represent interrelated objects. See the appendix section on [viewing interrelated objects](appendix.md#view-interrelated-objects) for steps on how to view the details of these objects.
