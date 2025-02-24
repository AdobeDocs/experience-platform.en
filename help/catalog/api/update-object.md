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

## Update using JSON Patch notation {#patch-notation}

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

## Update using PATCH v2 notation {#patch-v2-notation}

The `/v2/dataSets/{DATASET_ID}` endpoint provides a more flexible way to update complex or deeply nested dataset attributes.

Typically, when you update a deeply nested field (such as `a.b.c.d`), each level in the path must already exist. If any level is missing, you must manually create each one before setting the final value. This often requires multiple operations, which adds complexity and increases the chance of mistakes.

The `/v2/dataSets/{DATASET_ID}` endpoint automatically creates any missing levels in the path. Instead of manually checking and adding `b` and `c` before setting `d`, the PATCH `v2` operation does this for you.

When you send a PATCH request to the `/v2/dataSets/{DATASET_ID}` endpoint, you only need to send the final structure, and the system fills in the missing parts before applying the update.

>[!NOTE]
>
>`If-Match` and `If-None-Match` headers are optional for the `/v2/dataSets/{id}` endpoint. PATCH requests to this endpoint dynamically merge updates, allowing modifications without retrieving the latest dataset version. While this reduces the risk of data loss from concurrent updates, you can use `If-Match` with the latest `etag` to ensure changes apply only to a specific version. Alternatively, `If-None-Match` prevents updates if the dataset has not changed since the last known version.

**API format**

```http
PATCH /V2/DATASETS/{DATASET_ID}
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | The identifier of the dataset to update. |

**Request**

```shell
curl -X PATCH https://platform.adobe.io/data/foundation/catalog/v2/dataSets/67b3077efa10d92ab7a71858 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
        "extensions": {
            "adobe_lakeHouse": {
            "rowExpiration": {
                "ttlValue": "P9Y"
            }
            }
        }
    }'
```

**Response**

A successful response returns an array containing the ID of the updated dataset, which should match the ID sent in the PATCH request. Performing a GET request for this object now shows that the `extensions.adobe_lakeHouse.rowExpiration` object has been created without requiring prior manual creation steps.

```json
[
    "@/dataSets/67b3077efa10d92ab7a71858"
]
```

### An example dataset before and after update

The example JSON below illustrates the dataset structure **before** the PATCH request, where the `extensions.adobe_lakeHouse.rowExpiration` object is not present in the dataset.

+++Select to view example

```JSON
{
    "67b3077efa10d92ab7a71858": {
        "name": "Acme Sales Data",
        "description": "This dataset contains sales transaction records for Acme Corporation.",
        "tags": {
            "adobe/siphon/table/format": [
                "delta"
            ],
            "adobe/pqs/table": [
                "testdataset_20250217_095510_966"
            ]
        },
        "classification": {
            "dataBehavior": "time-series",
            "managedBy": "CUSTOMER"
        },
        "createdUser": "{USER_ID}",
        "imsOrg": "{ORG_ID}",
        "sandboxId": "{SANDBOX_ID}",
        "createdClient": "{CLIENT_ID}",
        "updatedUser": "{USER_ID}",
        "version": "1.0.0",
        "extensions": {
            "adobe_lakeHouse": {},
            "adobe_unifiedProfile": {}
        },
        "created": 1739786110978,
        "updated": 1739786111203,
        "viewId": "{VIEW_ID}",
        "basePath": "{STORAGE_PATH}",
        "fileDescription": {},
        "files": "@/dataSetFiles?dataSetId=67b3077efa10d92ab7a71858",
        "schemaRef": {
            "id": "{SCHEMA_ID}",
            "contentType": "application/vnd.adobe.xed+json; version=1"
        },
        "persistence": {
            "adls": {
                "location": "{STORAGE_PATH}",
                "adlsType": "GEN2",
                "credentials": "@/dataSets/67b3077efa10d92ab7a71858/credentials"
            }
        }
    }
}
```

+++

The following JSON shows the dataset structure **after** the PATCH request. The update automatically creates the missing `extensions.adobe_lakeHouse.rowExpiration` object without prior manual creation steps. This example demonstrates how the `/v2/` PATCH request eliminates the need for multiple operations, making updates simpler and more efficient.


+++Select to view example

```JSON
{
    "67b3077efa10d92ab7a71858": {
        "name": "Acme Sales Data",
        "description": "This dataset contains sales transaction records for Acme Corporation.",
        "tags": {
            "adobe/siphon/table/format": [
                "delta"
            ],
            "adobe/pqs/table": [
                "testdataset_20250217_095510_966"
            ]
        },
        "imsOrg": "{ORG_ID}",
        "sandboxId": "{SANDBOX_ID}",
        "extensions": {
            "adobe_lakeHouse": {
                "rowExpiration": {
                    "ttlValue": "{TTL_VALUE}"
                }
            },
            "adobe_unifiedProfile": {}
        },
        "version": "{VERSION}",
        "created": "{CREATED_TIMESTAMP}",
        "updated": "{UPDATED_TIMESTAMP}",
        "createdClient": "{CLIENT_ID}",
        "createdUser": "{USER_ID}",
        "updatedUser": "{USER_ID}",
        "classification": {
            "dataBehavior": "time-series",
            "managedBy": "CUSTOMER"
        },
        "viewId": "{VIEW_ID}",
        "basePath": "{STORAGE_PATH}",
        "fileDescription": {},
        "files": "@/dataSetFiles?dataSetId=67b3077efa10d92ab7a71858",
        "schemaRef": {
            "id": "{SCHEMA_ID}",
            "contentType": "{CONTENT_TYPE}"
        },
        "persistence": {
            "adls": {
                "location": "{STORAGE_PATH}",
                "adlsType": "{STORAGE_TYPE}",
                "credentials": "@/dataSets/67b3077efa10d92ab7a71858/credentials"
            }
        }
    }
}
```

+++
