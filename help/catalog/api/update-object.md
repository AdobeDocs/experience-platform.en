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
| `{OBJECT_TYPE}` | The type of [!DNL Catalog] object to be updated. Valid objects are: <ul><li>`batches`</li><li>`dataSets`</li><li>`dataSetFiles`</li></ul> |
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

For more information on JSON Patch syntax, see the [API fundamentals guide](../../landing/api-fundamentals.md#json-patch).  

**API format**

```http
PATCH /{OBJECT_TYPE}/{OBJECT_ID}
```

| Parameter | Description |
| --- | --- |
| `{OBJECT_TYPE}` | The type of [!DNL Catalog] object to be updated. Valid objects are: <ul><li>`batches`</li><li>`dataSets`</li><li>`dataSetFiles`</li></ul> |
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

<!-- ... -->
## Update using PATCH v2

The `PATCH v2` endpoint provides a more flexible way to update dataset attributes using **merge patch** as defined in [RFC-7386](https://datatracker.ietf.org/doc/html/rfc7386).

**API format**

```http
PATCH /V2/DATASETS/{DATASET_ID}
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | The identifier of the dataset to update. |

### Headers

| Name | Type | Description |
| --- | --- | --- |
| `if-match` | string | Verifies the valid versions of a document by matching the updated date. |
| `if-none-match` | string | Verifies the invalid versions of a document by matching the updated date. |
| `x-api-key` | string | The API key of the calling client. *(Required)* |
| `x-gw-ims-org-id` | string | The owning IMS organization identifier. *(Required)* |
| `x-sandbox-id` | string | The sandbox ID of resources. |
| `x-sandbox-name` | string | The sandbox name of resources. *(Required for service tokens)* |
| `accept-encoding` | string | Specifies compressed response bodies. Supported encoding: `gzip`. |

**Request**

```shell
curl --request PATCH \
  --url https://platform-int.adobe.io/data/foundation/catalog/v2/dataSets/67976f0b4878252ab887ccd9 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
        "tags": {
            "custom_tag": ["patched_with_v2"]
        }
      }'
```

**Response**

A successful response returns ...

```json
[
    "@/dataSets/67976f0b4878252ab887ccd9"
]
```

### Example: Dataset before and after update

**Before PATCH v2 request:**

```JSON
{
    "67976f0b4878252ab887ccd9": {
        "name": "Test dataset",
        "description": "This is just a test dataset",
        "tags": {
            "adobe/pqs/table": ["test_dataset_20250127_113331_106"],
            "adobe/siphon/table/format": ["delta"]
        }
    }
}
```

**After PATCH v2 request:**

```JSON
{
    "67976f0b4878252ab887ccd9": {
        "name": "Test dataset",
        "description": "This is just a test dataset",
        "tags": {
            "adobe/pqs/table": ["test_dataset_20250127_113331_106"],
            "adobe/siphon/table/format": ["delta"],
            "custom_tag": ["patched_with_v2"]
        },
        "version": "1.0.1"
    }
}
```
