---
keywords: Experience Platform;home;popular topics;batch ingestion;Batch ingestion;ingestion;developer guide;api guide;upload;ingest Parquet;ingest json;
solution: Experience Platform
title: Batch Ingestion API Guide
topic: developer guide
description: This document provides a comprehensive overview of using batch ingestion APIs.
exl-id: 4ca9d18d-1b65-4aa7-b608-1624bca19097
---
# Batch ingestion API guide

This document provides a comprehensive overview of using [batch ingestion APIs](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/ingest-api.yaml). 

The appendix to this document provides information for [formatting data to be used for ingestion](#data-transformation-for-batch-ingestion), including sample CSV and JSON data files.

## Getting started

Data ingestion provides a RESTful API through which you can perform basic CRUD operations against the supported object types.

The following sections provide additional information that you will need to know or have on-hand in order to successfully make calls to the Batch Ingestion API.

This guide requires a working understanding of the following components of Adobe Experience Platform:

- [Batch ingestion](./overview.md): Allows you to ingest data into Adobe Experience Platform as batch files.
- [[!DNL Experience Data Model (XDM)] System](../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
- [[!DNL Sandboxes]](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

### Reading sample API calls

This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- `Authorization: Bearer {ACCESS_TOKEN}`
- `x-api-key: {API_KEY}`
- `x-gw-ims-org-id: {IMS_ORG}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

- `x-sandbox-name: {SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

Requests that contain a payload (POST, PUT, PATCH) may require an additional `Content-Type` header. The accepted values specific to each call are provided in the call parameters. 

## Types

When ingesting data, it is important to understand how [!DNL Experience Data Model] (XDM) schemas work. For more information about how XDM field types map to different formats, please read the [Schema Registry developer guide](../../xdm/api/getting-started.md).

There is some flexibility when ingesting data - if a type does not match what is in the target schema, the data will be converted to the expressed target type. If it cannot, it will fail the batch with a `TypeCompatibilityException`. 

For example, neither JSON nor CSV has a date or date-time type. As a result, these values are expressed using [ISO 8061 formatted strings](https://www.iso.org/iso-8601-date-and-time-format.html) ("2018-07-10T15:05:59.000-08:00") or Unix Time formatted in milliseconds (1531263959000) and are converted at ingestion time to the target XDM type.

The table below shows the conversions supported when ingesting data.

| Inbound (row) vs Target (col) | String  | Byte  | Short  | Integer  | Long  | Double  | Date  | Date-Time | Object | Map |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| String    | X | X | X | X | X | X | X | X |   |   |
| Byte      | X | X | X | X | X | X |   |   |   |   |
| Short     | X | X | X | X | X | X |   |   |   |   |
| Integer   | X | X | X | X | X | X |   |   |   |   |
| Long      | X | X | X | X | X | X | X | X |   |   |
| Double    | X | X | X | X | X | X |   |   |   |   |
| Date      |   |   |   |   |   |   | X |   |   |   |
| Date-Time |   |   |   |   |   |   |   | X |   |   |
| Object    |   |   |   |   |   |   |   |   | X | X |
| Map       |   |   |   |   |   |   |   |   | X | X |

>[!NOTE]
>
>Booleans and arrays cannot be converted to other types.

## Ingestion constraints

Batch data ingestion has some constraints:
- Maximum number of files per batch: 1500
- Maximum batch size: 100 GB
- Maximum number of properties or fields per row: 10000
- Maximum number of batches per minute, per user: 138

## Ingest JSON files

>[!NOTE]
>
>The following steps are applicable for small files (256 MB or less). If you hit a gateway timeout or request body size errors, you need to switch to large file upload.

### Create batch

Firstly, you will need to create a batch, with JSON as the input format. When creating the batch, you will need to provide a dataset ID. You will also need to ensure that all the files uploaded as part of the batch conform to the XDM schema linked to the provided dataset.

>[!NOTE]
>
>The examples below are for single-line JSON. To ingest multi-line JSON, the `isMultiLineJson` flag will need to be set. For more information, please read the [batch ingestion troubleshooting guide](./troubleshooting.md).

**API format**

```http
POST /batches
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/import/batches \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-api-key : {API_KEY}' \
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
    "imsOrg": "{IMS_ORG}",
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

Now that you have created a batch, you can use the `batchId` from before to upload files to the batch. You can upload multiple files to the batch.

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
| `{FILE_NAME}` | The name of the file you want to upload. This file path is the location where the file will be saved on the Adobe side. |

**Request**

>[!NOTE]
>
>The API supports single-part upload. Ensure that the content-type is application/octet-stream. 

```shell
curl -X PUT https://platform.adobe.io/data/foundation/import/batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}.json \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'content-type: application/octet-stream' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-api-key : {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  --data-binary "@{FILE_PATH_AND_NAME}.json"
```  

| Parameter | Description |
| --------- | ----------- |
| `{FILE_PATH_AND_NAME}` | The full path and name of the file you are trying to upload. This file path is the local file path, such as `Users/sample-user/Downloads/sample.json`. |

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
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-api-key : {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
``` 

**Response**

```http
200 OK
```

## Ingest Parquet files

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
  -H "x-gw-ims-org-id: {IMS_ORG}" \
  -H "x-api-key : {API_KEY}" \
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
    "imsOrg": "{IMS_ORG}",
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
| `{FILE_NAME}` | The name of the file you want to upload. This file path is the location where the file will be saved on the Adobe side. |

**Request**

>[!CAUTION]
>
>This API supports single-part upload. Ensure that the content-type is application/octet-stream.

```shell
curl -X PUT https://platform.adobe.io/data/foundation/import/batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}.parquet \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/octet-stream' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-api-key : {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  --data-binary "@{FILE_PATH_AND_NAME}.parquet"
```

| Parameter | Description |
| --------- | ----------- |
| `{FILE_PATH_AND_NAME}` | The full path and name of the file you are trying to upload. This file path is the local file path, such as `Users/sample-user/Downloads/sample.json`.|

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
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-api-key : {API_KEY}' \
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
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-api-key : {API_KEY}' \
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
    "imsOrg": "{IMS_ORG}",
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
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
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
| `{FILE_NAME}` | The name of the file you want to upload. This file path is the location where the file will be saved on the Adobe side. |

**Request**

>[!CAUTION]
>
>This API supports single-part upload. Ensure that the content-type is application/octet-stream.

```shell
curl -X PATCH https://platform.adobe.io/data/foundation/import/batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}.parquet \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/octet-stream' \
  -H 'Content-Range: bytes {CONTENT_RANGE}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  --data-binary "@{FILE_PATH_AND_NAME}.parquet"
```

| Parameter | Description |
| --------- | ----------- |
| `{CONTENT_RANGE}` | In integers, the beginning and the end of the requested range. |
| `{FILE_PATH_AND_NAME}` | The full path and name of the file you are trying to upload. This file path is the local file path, such as `Users/sample-user/Downloads/sample.json`. |


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
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
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
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-api-key : {API_KEY}' \
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
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
  -d '{
      "name": "{DATASET_NAME}",
      "schemaRef": {
          "id": "https://ns.adobe.com/{TENANT_ID}/schemas/{SCHEMA_ID}",
          "contentType": "application/vnd.adobe.xed+json;version=1"
      },
      "fileDescription": {
          "format": "parquet",
          "delimiters": [","], 
          "quotes": ["\""],
          "escapes": ["\\"],
          "header": true,
          "charset": "UTF-8"
      }      
  }'

```

| Parameter | Description |
| --------- | ----------- |
| `{TENANT_ID}` | This ID is used to ensure that resources you create are namespaced properly and contained within your IMS Organization. | 
| `{SCHEMA_ID}` | The ID of the schema you've created. |

An explanation of what the different part of the "fileDescription" section of the JSON body can be seen below:

```json
{
    "fileDescription": {
        "format": "parquet",
        "delimiters": [","],
        "quotes": ["\""],
        "escapes": ["\\"],
        "header": true,
        "charset": "UTF-8"
    }
}
```

| Parameter | Description |
| --------- | ----------- |
| `format` | The format of the mastered file, not the format of the input file. |
| `delimiters` | The character to use as the delimiter. |
| `quotes` | The character to use for quotes. |
| `escapes` | The character to use as the escape character. |
| `header` | The uploaded file **must** contain headers. Since schema validation is done, this must be set to true. In addition, headers may **not** contain any spaces - if you have any spaces in your header, please replace them with underscores instead. |
| `charset` | An optional field. Other supported charsets include "US-ASCII" and "ISO-8869-1". If left empty, UTF-8 is assumed by default. |

The dataset referenced must have the file description block listed above and must point to a valid schema in the registry. Otherwise, the file will not be mastered into Parquet.

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
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-api-key : {API_KEY}' \
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
    "imsOrg": "{IMS_ORG}",
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
| `{FILE_NAME}` | The name of the file you want to upload. This file path is the location where the file will be saved on the Adobe side. |

**Request**

>[!CAUTION]
>
>This API supports single-part upload. Ensure that the content-type is application/octet-stream.

```shell
curl -X PUT https://platform.adobe.io/data/foundation/import/batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}.csv \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/octet-stream' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-api-key : {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  --data-binary "@{FILE_PATH_AND_NAME}.csv"
```

| Parameter | Description |
| --------- | ----------- |
| `{FILE_PATH_AND_NAME}` | The full path and name of the file you are trying to upload. This file path is the local file path, such as `Users/sample-user/Downloads/sample.json`.|


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
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-api-key : {API_KEY}' \
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
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-api-key : {API_KEY}' \
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
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-api-key : {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' 
```

**Response**

```http
200 OK
```

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
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-api-key : {API_KEY}' \
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
    "imsOrg": "{IMS_ORG}",
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
| `{FILE_NAME}` | The name of the file you want to upload. This file path is the location where the file will be saved on the Adobe side. |

**Request**

>[!CAUTION]
>
>This API supports single-part upload. Ensure that the content-type is application/octet-stream. Do not use the curl -F option, as it defaults to multi-part request that is incompatible with the API.

```shell
curl -X PUT https://platform.adobe.io/data/foundation/import/batches/{BATCH_ID}/datasets/{DATASET_ID}/files/{FILE_NAME}.json \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/octet-stream' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-api-key : {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  --data-binary "@{FILE_PATH_AND_NAME}.json"
```

| Parameter | Description |
| --------- | ----------- |
| `{FILE_PATH_AND_NAME}` | The full path and name of the file you are trying to upload. This file path is the local file path, such as `Users/sample-user/Downloads/sample.json`. |

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
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-api-key : {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

```http
200 OK
```

## Appendix

### Data transformation for batch ingestion

In order to ingest a data file into [!DNL Experience Platform], the hierarchical structure of the file must comply with the [Experience Data Model (XDM)](../../xdm/home.md) schema associated with the dataset being uploaded to.

Information on how to map a CSV file to comply with an XDM schema can be found in the [sample transformations](../../etl/transformations.md) document, along with an example of a properly formatted JSON data file. Sample files provided in the document can be found here:

- [CRM_profiles.csv](https://github.com/adobe/experience-platform-etl-reference/blob/master/example_files/CRM_profiles.csv)
- [CRM_profiles.json](https://github.com/adobe/experience-platform-etl-reference/blob/master/example_files/CRM_profiles.json)
