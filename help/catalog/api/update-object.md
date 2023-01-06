---
keywords: Experience Platform;home;popular topics;catalog;api;update an object
solution: Experience Platform
title: Update a Catalog Object
description: You can update part of a Catalog object by including its ID in the path of a PATCH request. This document covers using fields and using JSON Patch notation for performing PATCH operations on Catalog objects.
exl-id: 315de212-bf4d-40d5-a54f-9602a26d6852
---
# Update a Catalog object

You can update part of a [!DNL Catalog] object by including its ID in the path of a PATCH request. This document covers the two methods for performing PATCH operations on Catalog objects:

* Using fields
* Using JSON Patch notation

>[!NOTE]
>
>PATCH operations on an object cannot modify its expandable fields, which represent interrelated objects. Modifications to interrelated objects must be made directly.

## Update using fields

The following example call demonstrates how to update an object using fields and values.

**API format**

```http
PATCH /{OBJECT_TYPE}/{OBJECT_ID}
```

| Parameter | Description |
| --- | --- |
| `{OBJECT_TYPE}` | The type of [!DNL Catalog] object to be updated. Valid objects are: <ul><li>`accounts`</li><li>`batches`</li><li>`connections`</li><li>`dataSets`</li><li>`dataSetFiles`</li><li>`dataSetViews`</li></ul> |
| `{OBJECT_ID}` | The identifier of the specific object you want to update. |

**Request**

The following request updates the `name` and `description` fields of a dataset to the values provided in the payload. Object fields that are not to be updated can be excluded from the payload.

```shell
curl -X PATCH \
  https://platform.adobe.io/data/foundation/catalog/dataSets/5ba9452f7de80400007fc52a \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
       "name":"Updated Dataset Name",
       "description":"Updated description for Sample Dataset"
      }'
```

**Response**

A successful response returns an array containing ID of the updated dataset. This ID should match the one sent in the PATCH request. Performing a GET request for this dataset now shows that only the `name` and `description` have been updated while all other values remain unchanged.

```json
[
    "@/dataSets/5ba9452f7de80400007fc52a"
]
```

## Update using JSON Patch notation

The following example call demonstrates how to update an object using JSON Patch, as outlined in [RFC-6902](https://tools.ietf.org/html/rfc6902).

<!-- (Include once API fundamentals guide is published) 

For more information on JSON Patch syntax, see the [API fundamentals guide](). 

-->

**API format**

```http
PATCH /{OBJECT_TYPE}/{OBJECT_ID}
```

| Parameter | Description |
| --- | --- |
| `{OBJECT_TYPE}` | The type of [!DNL Catalog] object to be updated. Valid objects are: <ul><li>`accounts`</li><li>`batches`</li><li>`connections`</li><li>`dataSets`</li><li>`dataSetFiles`</li><li>`dataSetViews`</li></ul> |
| `{OBJECT_ID}` | The identifier of the specific object you want to update. |

**Request**

The following request updates the `name` and `description` fields of a dataset to the values provided in each JSON Patch object. When using JSON Patch, you must also set the Content-Type header to `application/json-patch+json`.

```shell
curl -X PATCH \
  https://platform.adobe.io/data/foundation/catalog/dataSets/5ba9452f7de80400007fc52a \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json-patch+json' \
  -d '[
        { "op": "add", "path": "/name", "value": "New Dataset Name" },
        { "op": "add", "path": "/description", "value": "New description for dataset" }
      ]'
```

**Response**

A successful response returns an array containing the ID of the updated object. This ID should match the one sent in the PATCH request. Performing a GET request for this object now shows that only the `name` and `description` have been updated while all other values remain unchanged.

```json
[
    "@/dataSets/5ba9452f7de80400007fc52a"
]
```
