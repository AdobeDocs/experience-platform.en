---
keywords: Experience Platform;home;popular topics;batch ingestion;Batch ingestion;ingestion;developer guide;api guide;upload;ingest Parquet;ingest json;
solution: Experience Platform
title: Batch Ingestion API Guide
description: This document provides a comprehensive guide for developers working with batch ingestion APIs for Adobe Experience Platform.
exl-id: 4ca9d18d-1b65-4aa7-b608-1624bca19097
TQID: https://experienceleague.adobe.com/oCAUvP0cM4dw1wEXnVCbjIkNGIlwSKb31A5h5s3-MTM
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
---
# Batch ingestion developer guide

This document provides a comprehensive guide to using [batch ingestion API endpoints](https://developer.adobe.com/experience-platform-apis/references/batch-ingestion/) in Adobe Experience Platform. For an overview of batch ingestion APIs, including prerequisites and best practices, please begin by reading the [batch ingestion API overview](overview.md).

The appendix to this document provides information for [formatting data to be used for ingestion](#data-transformation-for-batch-ingestion), including sample CSV and JSON data files.

## Getting started

The API endpoints used in this guide is part of the [Batch Ingestion API](https://developer.adobe.com/experience-platform-apis/references/batch-ingestion/). Batch ingestion is provided through a RESTful API where you can perform basic CRUD operations against the supported object types.

Before continuing, please review the [batch ingestion API overview](overview.md) and the [getting started guide](getting-started.md). 

## Ingest JSON files

>[!NOTE]
>
>- The following steps are applicable for small files (256 MB or less). If you hit a gateway timeout or request body size errors, you need to switch to large file upload.
>
>- Use single-line JSON objects (JSONL) instead of multi-line JSON as input for batch ingestion. Single-line JSON objects (JSONL) allows for better performance as the system can divide one input file into multiple chunks and process them in parallel, whereas multi-line JSON cannot be split. This can significantly reduce data processing costs and improve batch processing latency.

### Create batch

Firstly, you will need to create a batch, with JSON as the input format. When creating the batch, you will need to provide a dataset ID. You will also need to ensure that all the files uploaded as part of the batch conform to the XDM schema linked to the provided dataset.

>[!NOTE]
>
>The examples below are for single-line JSON (JSONL). To ingest multi-line JSON, the `isMultiLineJson` flag will need to be set. For more information, please read the [batch ingestion troubleshooting guide](./troubleshooting.md).

**API format**

```http
POST /batches
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/import/batches \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
          "datasetId": "{DATASET_ID}",
           "inputFormat": {
                "format": "json"
           }
      }'
```   

| Parameter | Description |
| --------- | ----------- |
| `{DATASET_ID}` | The ID of the reference dataset. |

**Response**

```json
{
    "id": "{BATCH_ID}",
    "imsOrg": "{ORG_ID}",
    "updated": 0,
    "status": "loading",
    "created": 0,
    "relatedObjects": [
        {
            "type": "dataSet",
            "id": "{DATASET_ID}"
        }
    ],
    "version": "1.0.0",
    "tags": {},
    "createdUser": "{USER_ID}",
    "updatedUser": "{USER_ID}"
}
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The ID of the newly created batch. |
| `{DATASET_ID}` | The ID of the referenced dataset. |

### Upload files

Now that you have created a batch, you can use the batch ID from the batch creation response to upload files to the batch. You can upload multiple files to the batch.

>[!NOTE]
>
>See the appendix section for an [example of a properly-formatted JSON data file](#data-transformation-for-batch-ingestion).

**API format**

```http
PUT /batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The ID of the batch you want to upload to. |
| `{DATASET_ID}` | The ID of the batch's reference dataset. |
| `{FILE_NAME}` | The name of the file you want to upload. Ensure that you use a unique file name so that it does not clash with another file for the batch of files being submitted. |

**Request**

>[!NOTE]
>
>The API supports single-part upload. Ensure that the content-type is application/octet-stream. 

```shell
curl -X PUT https://platform.adobe.io/data/foundation/import/batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}.json \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'content-type: application/octet-stream' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  --data-binary "@{FILE_PATH_AND_NAME}.json"
```  

| Parameter | Description |
| --------- | ----------- |
| `{FILE_PATH_AND_NAME}` | The full path and name of the file you are trying to upload. This file path is the local file path, such as `acme/customers/campaigns/summer.json`. |

**Response**

```http
200 OK
```

### Complete batch

Once you have finished uploading all the different parts of the file, you will need to signal that the data has been fully uploaded, and that the batch is ready for promotion.

**API format**

```http
POST /batches/{BATCH_ID}?action=COMPLETE
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The ID of the batch you want to upload to. |

**Request**

```shell
curl -X POST "https://platform.adobe.io/data/foundation/import/batches/{BATCH_ID}?action=COMPLETE" \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
``` 

**Response**

```http
200 OK
```

## Ingest Parquet files {#ingest-parquet-files}

>[!NOTE]
>
>The following steps are applicable for small files (256 MB or less). If you hit a gateway timeout or request body size errors, you will need to switch to large file upload.

### Create batch

Firstly, you will need to create a batch, with Parquet as the input format. When creating the batch, you will need to provide a dataset ID. You will also need to ensure that all the files uploaded as part of the batch conform to the XDM schema linked to the provided dataset.

**Request**

```shell
curl -X POST "https://platform.adobe.io/data/foundation/import/batches" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-sandbox-name: {SANDBOX_NAME}" 
  -d '{
          "datasetId": "{DATASET_ID}",
           "inputFormat": {
                "format": "parquet"
           }
      }'
```

| Parameter | Description |
| --------- | ------------ |
| `{DATASET_ID}` | The ID of the reference dataset. |

**Response**

```http
201 Created
```

```json
{
    "id": "{BATCH_ID}",
    "imsOrg": "{ORG_ID}",
    "updated": 0,
    "status": "loading",
    "created": 0,
    "relatedObjects": [
        {
            "type": "dataSet",
            "id": "{DATASET_ID}"
        }
    ],
    "version": "1.0.0",
    "tags": {},
    "createdUser": "{USER_ID}",
    "updatedUser": "{USER_ID}"
}
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The ID of the newly created batch. |
| `{DATASET_ID}` | The ID of the referenced dataset. |
| `{USER_ID}` | The ID of the user who created the batch. |

### Upload files

Now that you have created a batch, you can use the `batchId` from before to upload files to the batch. You can upload multiple files to the batch.

**API format**

```http
PUT /batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The ID of the batch you want to upload to. |
| `{DATASET_ID}` | The ID of the batch's reference dataset. |
| `{FILE_NAME}` | The name of the file you want to upload. Ensure that you use a unique file name so that it does not clash with another file for the batch of files being submitted. |

**Request**

>[!CAUTION]
>
>This API supports single-part upload. Ensure that the content-type is application/octet-stream.

```shell
curl -X PUT https://platform.adobe.io/data/foundation/import/batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}.parquet \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/octet-stream' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  --data-binary "@{FILE_PATH_AND_NAME}.parquet"
```

| Parameter | Description |
| --------- | ----------- |
| `{FILE_PATH_AND_NAME}` | The full path and name of the file you are trying to upload. This file path is the local file path, such as `acme/customers/campaigns/summer.parquet`.|

**Response**

```http
200 OK
```

### Complete batch

Once you have finished uploading all the different parts of the file, you will need to signal that the data has been fully uploaded, and that the batch is ready for promotion.

**API format**

```http
POST /batches/{BATCH_ID}?action=complete
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The ID of the batch you want to signal is ready for completion. |

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/import/batches/{BATCH_ID}?action=COMPLETE \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' 
```

**Response**

```http
200 OK
```

## Ingest large Parquet files

>[!NOTE]
>
>This section details how to upload files that are larger than 256 MB. The large files are uploaded in chunks and then stitched via an API signal.

### Create batch

Firstly, you will need to create a batch, with Parquet as the input format. When creating the batch, you will need to provide a dataset ID. You will also need to ensure that all the files uploaded as part of the batch conform to the XDM schema linked to the provided dataset.

**API format**

```http
POST /batches
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/import/batches \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
  -d '{
          "datasetId": "{DATASET_ID}",
           "inputFormat": {
             "format": "parquet"
           }
      }'
```

| Parameter | Description |
| --------- | ----------- |
| `{DATASET_ID}` | The ID of the reference dataset. |

**Response**

```http
201 Created
```

```json
{
    "id": "{BATCH_ID}",
    "imsOrg": "{ORG_ID}",
    "updated": 0,
    "status": "loading",
    "created": 0,
    "relatedObjects": [
        {
            "type": "dataSet",
            "id": "{DATASET_ID}"
        }
    ],
    "version": "1.0.0",
    "tags": {},
    "createdUser": "{USER_ID}",
    "updatedUser": "{USER_ID}"
}
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The ID of the newly created batch. |
| `{DATASET_ID}` | The ID of the referenced dataset. |
| `{USER_ID}` | The ID of the user who created the batch. |

### Initialize large file

After creating the batch, you will need to initialize the large file before uploading chunks to the batch.

**API format**

```http
POST /batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The ID of the newly created batch. |
| `{DATASET_ID}` | The ID of the referenced dataset. |
| `{FILE_NAME}` | The name of the file that is about to be initialized. |

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/import/batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}.parquet?action=INITIALIZE \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' 
```

**Response**

```http
201 Created
```

### Upload large file chunks

Now that the file has been created, all subsequent chunks can be uploaded by making repeated PATCH requests, one for each section of the file.

**API format**

```http
PATCH /batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The ID of the batch you want to upload to. |
| `{DATASET_ID}` | The ID of the batch's reference dataset. |
| `{FILE_NAME}` | The name of the file you want to upload. Ensure that you use a unique file name so that it does not clash with another file for the batch of files being submitted. |

**Request**

>[!CAUTION]
>
>This API supports single-part upload. Ensure that the content-type is application/octet-stream.

```shell
curl -X PATCH https://platform.adobe.io/data/foundation/import/batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}.parquet \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/octet-stream' \
  -H 'Content-Range: bytes {CONTENT_RANGE}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  --data-binary "@{FILE_PATH_AND_NAME}.parquet"
```

| Parameter | Description |
| --------- | ----------- |
| `{CONTENT_RANGE}` | In integers, the beginning and the end of the requested range. |
| `{FILE_PATH_AND_NAME}` | The full path and name of the file you are trying to upload. This file path is the local file path, such as `acme/customers/campaigns/summer.json`. |


**Response**

```http
200 OK
```

### Complete large file

Now that you have created a batch, you can use the `batchId` from before to upload files to the batch. You can upload multiple files to the batch.

**API format**

```http
POST /batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The ID of the batch you want to signal completion of. |
| `{DATASET_ID}` | The ID of the batch's reference dataset. |
| `{FILE_NAME}` | The name of the file you want to signal completion of. |

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/import/batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}.parquet?action=COMPLETE \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' 
```

**Response**

```http
201 Created
```

### Complete batch

Once you have finished uploading all the different parts of the file, you will need to signal that the data has been fully uploaded, and that the batch is ready for promotion.

**API format**

```http
POST /batches/{BATCH_ID}?action=COMPLETE
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The ID of the batch you want to signal is complete. |


**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/import/batches/{BATCH_ID}?action=COMPLETE \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' 

```

**Response**

```http
200 OK
```

## Ingest CSV files

In order to ingest CSV files, you'll need to create a class, schema, and a dataset that supports CSV. For detailed information on how to create the necessary class and schema, follow the instructions provided in the [ad-hoc schema creation tutorial](../../xdm/api/ad-hoc.md). 

>[!NOTE]
>
>The following steps are applicable for small files (256 MB or less). If you hit a gateway timeout or request body size errors, you will need to switch to large file upload.

### Create dataset

After following the instructions above to create the necessary class and schema, you'll need to create a dataset that can support CSV.

**API format**

```http
POST /catalog/dataSets
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/catalog/dataSets \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
  -d '{
      "name": "{DATASET_NAME}",
      "schemaRef": {
          "id": "https://ns.adobe.com/{TENANT_ID}/schemas/{SCHEMA_ID}",
          "contentType": "application/vnd.adobe.xed+json;version=1"
      }
  }'

```

| Parameter | Description |
| --------- | ----------- |
| `{TENANT_ID}` | This ID is used to ensure that resources you create are namespaced properly and contained within your organization. |
| `{SCHEMA_ID}` | The ID of the schema you've created. |

### Create batch

Next, you will need to create a batch with CSV as the input format. When creating the batch, you will need to provide a dataset ID. You will also need to ensure that all of the files uploaded as part of the batch conform to the schema linked to the provided dataset.

**API format**

```http
POST /batches
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/import/batches \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
  -d '{
            "datasetId": "{DATASET_ID}",
            "inputFormat": {
                "format": "csv"
            }
      }'
```

| Parameter | Description |
| --------- | ----------- |
| `{DATASET_ID}` | The ID of the reference dataset. |

**Response**

```http
201 Created
```

```json
{
    "id": "{BATCH_ID}",
    "imsOrg": "{ORG_ID}",
    "updated": 0,
    "status": "loading",
    "created": 0,
    "relatedObjects": [
        {
            "type": "dataSet",
            "id": "{DATASET_ID}"
        }
    ],
    "version": "1.0.0",
    "tags": {},
    "createdUser": "{USER_ID}",
    "updatedUser": "{USER_ID}"
}
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The ID of the newly created batch. |
| `{DATASET_ID}` | The ID of the referenced dataset. |
| `{USER_ID}` | The ID of the user who created the batch. |

### Upload files

Now that you have created a batch, you can use the `batchId` from before to upload files to the batch. You can upload multiple files to the batch.

>[!NOTE]
>
>See the appendix section for an [example of a properly-formatted CSV data file](#data-transformation-for-batch-ingestion).

**API format**

```http
PUT /batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The ID of the batch you want to upload to. |
| `{DATASET_ID}` | The ID of the batch's reference dataset. |
| `{FILE_NAME}` | The name of the file you want to upload. Ensure that you use a unique file name so that it does not clash with another file for the batch of files being submitted. |

**Request**

>[!CAUTION]
>
>This API supports single-part upload. Ensure that the content-type is application/octet-stream.

```shell
curl -X PUT https://platform.adobe.io/data/foundation/import/batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}.csv \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/octet-stream' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  --data-binary "@{FILE_PATH_AND_NAME}.csv"
```

| Parameter | Description |
| --------- | ----------- |
| `{FILE_PATH_AND_NAME}` | The full path and name of the file you are trying to upload. This file path is the local file path, such as `acme/customers/campaigns/summer.csv`.|


**Response**

```http
200 OK
```

### Complete batch

Once you have finished uploading all of the different parts of the file, you will need to signal that the data has been fully uploaded, and that the batch is ready for promotion.

**API format**

```http
POST /batches/{BATCH_ID}?action=COMPLETE
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/import/batches/{BATCH_ID}?action=COMPLETE \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

```http
200 OK
```

## Cancel a batch

While the batch is processing, it can still be cancelled. However, once a batch is finalized (such as either a success or failed state), the batch cannot be cancelled.

**API format**

```http
POST /batches/{BATCH_ID}?action=ABORT
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The ID of the batch you want to cancel. |

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/import/batches/{BATCH_ID}?action=ABORT \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' 
```

**Response**

```http
200 OK
```

## Delete a batch {#delete-a-batch}

A batch can be deleted by performing the following POST request with the `action=REVERT` query parameter to the ID of the batch you wish to delete. The batch is the marked as "inactive", making it eligible for garbage collection. The batch will be asynchronously collected, at which time it will be marked as "deleted".

**API format**

```http
POST /batches/{BATCH_ID}?action=REVERT
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The ID of the batch you want to delete. |

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/import/batches/{BATCH_ID}?action=REVERT \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' 
```

**Response**

```http
200 OK
```

## Patch a batch

Occasionally it may be necessary to update data in your organization's Profile store. For example, you may need to correct records or change an attribute value. Adobe Experience Platform supports the update or patch of Profile store data through an upsert action or "patching a batch".

>[!NOTE]
>
>These updates are allowed only on profile records, not experience events.

The following is required in order to patch a batch:

- **A dataset enabled for Profile and attribute updates.** This is done through dataset tags and requires a specific `isUpsert:true` tag be added to the `unifiedProfile` array. For details steps showing how to create a dataset or configure an existing dataset for upsert, follow the tutorial for [enabling a dataset for Profile updates](../../catalog/datasets/enable-upsert.md).
- **A Parquet file containing the fields to be patched and identity fields for the Profile.** The data format for patching a batch is similar to the regular batch ingestion process. The input required is a Parquet file, and in addition to the fields to be updated, the uploaded data must contain the identity fields in order to match the data in the Profile store.

Once you have a dataset enabled for Profile and upsert, and a Parquet file containing the fields you wish to patch as well the necessary identity fields, you can follow the steps for [ingesting Parquet files](#ingest-parquet-files) in order to complete the patch via batch ingestion.

## Replay a batch

If you want to replace an already ingested batch, you can do so with "batch replay" - this action is equivalent to deleting the old batch and ingesting a new one instead.

### Create batch

Firstly, you will need to create a batch, with JSON as the input format. When creating the batch, you will need to provide a dataset ID. You will also need to ensure that all the files uploaded as part of the batch conform to the XDM schema linked to the provided dataset. Additionally, you will need to provide the old batch(es) as reference in the replay section. In the example below, you are replaying batches with IDs `batchIdA` and `batchIdB`.

**API format**

```http
POST /batches
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/import/batches \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' 
  -d '{
          "datasetId": "{DATASET_ID}",
           "inputFormat": {
             "format": "json"
           },
            "replay": {
                "predecessors": ["${batchIdA}","${batchIdB}"],
                "reason": "replace"
             }
      }'
```

| Parameter | Description |
| --------- | ----------- |
| `{DATASET_ID}` | The ID of the reference dataset. |

**Response**

```http
201 Created
```

```json
{
    "id": "{BATCH_ID}",
    "imsOrg": "{ORG_ID}",
    "updated": 0,
    "status": "loading",
    "created": 0,
    "relatedObjects": [
        {
            "type": "dataSet",
            "id": "{DATASET_ID}"
        }
    ],
    "replay": {
        "predecessors": [
            "batchIdA", "batchIdB"
        ],
        "reason": "replace"
    },
    "version": "1.0.0",
    "tags": {},
    "createdUser": "{USER_ID}",
    "updatedUser": "{USER_ID}"
}
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The ID of the newly created batch. |
| `{DATASET_ID}` | The ID of the referenced dataset. |
| `{USER_ID}` | The ID of the user who created the batch. |


### Upload files

Now that you have created a batch, you can use the `batchId` from before to upload files to the batch. You can upload multiple files to the batch.

**API format**

```http
PUT /batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The ID of the batch you want to upload to. |
| `{DATASET_ID}` | The ID of the batch's reference dataset. |
| `{FILE_NAME}` | The name of the file you want to upload. Ensure that you use a unique file name so that it does not clash with another file for the batch of files being submitted. |

**Request**

>[!CAUTION]
>
>This API supports single-part upload. Ensure that the content-type is application/octet-stream. Do not use the curl -F option, as it defaults to multi-part request that is incompatible with the API.

```shell
curl -X PUT https://platform.adobe.io/data/foundation/import/batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}.json \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/octet-stream' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  --data-binary "@{FILE_PATH_AND_NAME}.json"
```

| Parameter | Description |
| --------- | ----------- |
| `{FILE_PATH_AND_NAME}` | The full path and name of the file you are trying to upload. This file path is the local file path, such as `acme/customers/campaigns/summer.json`. |

**Response**

```http
200 OK
```

### Complete batch

Once you have finished uploading all the different parts of the file, you will need to signal that the data has been fully uploaded, and that the batch is ready for promotion.

**API format**

```http
POST /batches/{BATCH_ID}?action=COMPLETE
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The ID of the batch you want to complete. |

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/import/batches/{BATCH_ID}?action=COMPLETE \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

```http
200 OK
```

## Appendix

The following section contains additional information for ingesting data in Experience Platform using batch ingestion.

### Data transformation for batch ingestion

In order to ingest a data file into Experience Platform, the hierarchical structure of the file must comply with the [Experience Data Model (XDM)](../../xdm/home.md) schema associated with the dataset being uploaded to.

Information on how to map a CSV file to comply with an XDM schema can be found in the [sample transformations](../../etl/transformations.md) document, along with an example of a properly formatted JSON data file. Sample files provided in the document can be found here:

- [CRM_profiles.csv](https://github.com/adobe/experience-platform-etl-reference/blob/master/example_files/CRM_profiles.csv)
- [CRM_profiles.json](https://github.com/adobe/experience-platform-etl-reference/blob/master/example_files/CRM_profiles.json)

The following is an example of a JSONL (single-line JSON) payload formatted for ingestion into Experience Platform, taken from the file "CRM_single_line_profiles.json":

+++Select to view payload

```json
{"person":{"name":{"courtesyTitle":"Mr","firstName":"Ewart","lastName":"Bennedsen"},"gender":"male","birthDayAndMonth":"09-25","birthDate":"2004-09-25","birthYear":2004},"identityMap":{"CRMID":[{"id":"71a16013-d805-7ece-9ac4-8f2cd66e8eaa","primary":false}],"ECID":[{"id":"87098882279810196101440938110216748923","primary":false},{"id":"55019962992006103186215643814973128178","primary":false}],"LOYALTYID":[{"id":"2e33192000007456-0365c00000000000","primary":true}]},"homePhone":{"number":"256-284-7231"},"personalEmail":{"address":"ebennedsenex@jiathis.com"},"homeAddress":{"street1":"72BuhlerCrossing","city":"Anniston","stateProvince":"Alabama","country":"US","postalCode":"36205","_schema":{"latitude":33.708276,"longitude":-85.7922905}}}
{"person":{"name":{"courtesyTitle":"Dr","firstName":"Novelia","lastName":"Ansteys"},"gender":"female","birthDayAndMonth":"10-31","birthDate":"1987-10-31","birthYear":1987},"identityMap":{"CRMID":[{"id":"2eeb6532-82e1-0d58-8955-bf97de66a6f5","primary":false}],"ECID":[{"id":"50829196174854544323574004005273946998","primary":false},{"id":"65233136134594262632703695260919939885","primary":false}],"LOYALTYID":[{"id":"2e3319208000765b-3811c00000000001","primary":true}]},"homePhone":{"number":"704-181-6371"},"personalEmail":{"address":"nansteysdk@spotify.com"},"homeAddress":{"street1":"79NorthfieldHill","city":"Charlotte","stateProvince":"NorthCarolina","country":"US","postalCode":"28299","_schema":{"latitude":35.2188655,"longitude":-80.8108888}}}
{"person":{"name":{"courtesyTitle":"Mr","firstName":"Ulises","lastName":"Mochan"},"gender":"male","birthDayAndMonth":"03-20","birthDate":"1996-03-20","birthYear":1996},"identityMap":{"CRMID":[{"id":"6f393075-addb-bdd6-73f8-31c393b700f5","primary":false}],"ECID":[{"id":"70086119428645095847094710218289660855","primary":false},{"id":"82011353387947708954389153068944017636","primary":false}],"LOYALTYID":[{"id":"2e33192080003023-26b2000000000002","primary":true}]},"homePhone":{"number":"720-837-4159"},"personalEmail":{"address":"umochanco@gnu.org"},"homeAddress":{"street1":"00671MifflinTrail","city":"Lacolle","stateProvince":"Québec","country":"CA","postalCode":"E5A","_schema":{"latitude":45.08338,"longitude":-73.36585}}}
{"person":{"name":{"courtesyTitle":"Mrs","firstName":"Friederike","lastName":"Durrell"},"gender":"female","birthDayAndMonth":"01-3","birthDate":"1979-01-3","birthYear":1979},"identityMap":{"CRMID":[{"id":"33d018ec-5fed-f1a3-56aa-079370a9511b","primary":false}],"ECID":[{"id":"50164729868919217963697788808932473456","primary":false},{"id":"64452712468609735658703639722261004071","primary":false}],"LOYALTYID":[{"id":"2e33192080006dfc-0cdf400000000003","primary":true}]},"homePhone":{"number":"798-528-3458"},"personalEmail":{"address":"fdurrellbj@utexas.edu"},"homeAddress":{"street1":"47FremontHill","city":"Independencia","stateProvince":"VeracruzLlave","country":"MX","postalCode":"91891","_schema":{"latitude":19.3803931,"longitude":-99.1476908}}}
```

+++