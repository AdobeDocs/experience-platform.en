---
keywords: Experience Platform;home;popular topics;batch ingestion;Batch ingestion;partial ingestion;Partial ingestion;Retrieve error;retrieve error;Partial batch ingestion;partial batch ingestion;partial;ingestion;Ingestion;error diagnostics;retrieve error diagnostics;get error diagnostics;get error;get errors;retrieve errors;
solution: Experience Platform
title: Retrieving Data Ingestion Error Diagnostics
description: This document provides information on monitoring batch ingestion, managing partial batch ingestion errors, as well as a reference for partial batch ingestion types.
exl-id: b885fb00-b66d-453b-80b7-8821117c2041
---
# Retrieving data ingestion error diagnostics

Adobe Experience Platform provides two methods for uploading and ingesting data. You can either use batch ingestion, which allows you to insert data using various file types (such as CSVs), or streaming ingestion, which allows you to insert their data to [!DNL Platform] using streaming endpoints in real time.

This document provides information on monitoring batch ingestion, managing partial batch ingestion errors, as well as a reference for partial batch ingestion types.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

- [[!DNL Experience Data Model (XDM) System]](../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
- [[!DNL Adobe Experience Platform Data Ingestion]](../home.md): The methods by which data can be sent to [!DNL Experience Platform].

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- `Authorization: Bearer {ACCESS_TOKEN}`
- `x-api-key: {API_KEY}`
- `x-gw-ims-org-id: {ORG_ID}`

All resources in [!DNL Experience Platform], including those belonging to the [!DNL Schema Registry], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

- `x-sandbox-name: {SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

## Downloading error diagnostics {#download-diagnostics}

Adobe Experience Platform allows users to download the error diagnostics of the input files. The diagnostics will be retained within [!DNL Platform] for up to 30 days.

### List input files {#list-files}

The following request retrieves a list of all the files provided in a finalized batch.

**API format**

```shell
GET /batches/{BATCH_ID}/meta?path=input_files
```

| Property | Description |
| -------- | ----------- |
| `{BATCH_ID}` | The ID of the batch that you're looking up. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/export/batches/af838510-2233-11ea-acf0-f3edfcded2d2/meta?path=input_files \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response will return JSON objects detailing where the diagnostics were saved.

```json
{
    "_page": {
        "count": 1,
        "limit": 100
    },
    "data": [
        {
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/export/batches/af838510-2233-11ea-acf0-f3edfcded2d2/meta?path=input_files/fileMetaData1.json"
                }
            },
            "length": "1337",
            "name": "fileMetaData1.json"
        },
                {
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/export/batches/af838510-2233-11ea-acf0-f3edfcded2d2}/meta?path=input_files/fileMetaData2.json"
                }
            },
            "length": "1042",
            "name": "fileMetaData2.json"
        }
    ]
}
```

### Retrieve input file diagnostics {#retrieve-diagnostics}

Once you have retrieved a list of all the different input files, you can retrieve the diagnostics of the individual file by using the following request.

**API format**

```shell
GET /batches/{BATCH_ID}/meta?path=input_files/{FILE}
```

| Property | Description |
| -------- | ----------- |
| `{BATCH_ID}` | The ID of the batch that you're looking up. |
| `{FILE}` | The name of the file that you are accessing. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/export/batches/af838510-2233-11ea-acf0-f3edfcded2d2/meta?path=input_files/fileMetaData1.json \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response will return JSON objects containing `path` objects detailing where the diagnostics were saved. The response will return the `path` objects in [JSON Lines](https://jsonlines.readthedocs.io/en/latest/) format.

```json
{"path": "F1.json"}
{"path": "etc/F2.json"}
```

## Retrieve batch ingestion errors {#retrieve-errors}

If batches contain failures, you should retrieve error information about these failures so you can re-ingest the data.

### Check status {#check-status}

To check the status of the ingested batch, you must supply the batch's ID in the path of a GET request. To learn more about using this API call, please read the [catalog endpoint guide](../../catalog/api/list-objects.md).

**API format**

```http
GET /catalog/batches/{BATCH_ID}
GET /catalog/batches/{BATCH_ID}?{FILTER}
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The `id` value of the batch you want to check the status of. |
| `{FILTER}` | A query parameter used to filter the results returned in the response. Multiple parameters are separated by ampersands (`&`). For more information, please read the guide on [filtering Catalog data](../../catalog/api/filter-data.md).|

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/catalog/batches/af838510-2233-11ea-acf0-f3edfcded2d2 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response without errors**

A successful response returns with detailed information about the batch's status.

```json
{
    "af838510-2233-11ea-acf0-f3edfcded2d2": {
        "status": "success",
        "tags": {
            "acp_enableErrorDiagnostics": true,
            "acp_partialIngestionPercent": 5
        },
        "relatedObjects": [
            {
                "type": "dataSet",
                "id": "5deac2648a19d218a888d2b1"
            }
        ],
        "id": "af838510-2233-11ea-acf0-f3edfcded2d2",
        "externalId": "af838510-2233-11ea-acf0-f3edfcded2d2",
        "inputFormat": {
            "format": "parquet"
        },
        "imsOrg": "{ORG_ID}",
        "started": 1576741718543,
        "metrics": {
            "inputByteSize": 568,
            "inputFileCount": 4,
            "inputRecordCount": 519,
            "outputRecordCount": 497,
            "failedRecordCount": 0
        },
        "completed": 1576741722026,
        "created": 1576741597205,
        "createdClient": "{API_KEY}",
        "createdUser": "{USER_ID}",
        "updatedUser": "{USER_ID}",
        "updated": 1576741722644,
        "version": "1.0.5"
    }    
}
```

| Property | Description |
| -------- | ----------- |
| `metrics.failedRecordCount` | The number of rows that were not able to be processed due to parsing, conversion, or validation. This value can be derived by subtracting the `inputRecordCount` from the `outputRecordCount`. This value is generated on all batches regardless if `errorDiagnostics` is enabled. |

**Response with errors**

If the batch has one or more errors and has error diagnostics enabled, the response returns more information about the errors, both within the payload itself as well as a downloadable error file. Note that the status of a batch containing errors may still have a status of success.

```json
{
    "01E8043CY305K2MTV5ANH9G1GC": {
        "status": "success",
        "tags": {
            "acp_enableErrorDiagnostics": true,
            "acp_partialIngestionPercent": 5
        },
        "relatedObjects": [
            {
                "type": "dataSet",
                "id": "5deac2648a19d218a888d2b1"
            }
        ],
        "id": "01E8043CY305K2MTV5ANH9G1GC",
        "externalId": "01E8043CY305K2MTV5ANH9G1GC",
        "inputFormat": {
            "format": "parquet"
        },
        "imsOrg": "{ORG_ID}",
        "started": 1576741718543,
        "metrics": {
            "inputByteSize": 568,
            "inputFileCount": 4,
            "inputRecordCount": 519,
            "outputRecordCount": 514,
            "failedRecordCount": 5
        },
        "completed": 1576741722026,
        "created": 1576741597205,
        "createdClient": "{API_KEY}",
        "createdUser": "{USER_ID}",
        "updatedUser": "{USER_ID}",
        "updated": 1576741722644,
        "version": "1.0.5",
        "errors": [
           {
             "code": "INGEST-1212-400",
             "description": "Encountered 5 errors in the data. Successfully ingested 514 rows. Please review the associated diagnostic files for more details."
           },
           {
             "code": "INGEST-1401-400",
             "description": "The row has corrupted data and cannot be read or parsed. Fix the corrupted data and try again.",
             "recordCount": 2
           },
           {
             "code": "INGEST-1555-400",
             "description": "A required field is either missing or has a value of null. Add the required field to the input row and try again.",
             "recordCount": 3
           }
        ]
    }
}
```

| Property | Description |
| -------- | ----------- |
| `metrics.failedRecordCount` | The number of rows that were not able to be processed due to parsing, conversion, or validation. This value can be derived by subtracting the `inputRecordCount` from the `outputRecordCount`. This value is generated on all batches regardless if `errorDiagnostics` is enabled. |
| `errors.recordCount` | The number of rows that failed for the specified error code. This value is **only** generated if `errorDiagnostics` is enabled. |

>[!NOTE]
>
>If error diagnostics are not available, the following error message will appear instead:
>```json
>{
>    "errors": [{
>        "code": "INGEST-1211-400",
>        "description": "Encountered errors while parsing, converting or otherwise validating the data. Please resend the data with error diagnostics enabled to collect additional information on failure types"
>    }]
>}
>```

## Next steps {#next-steps}

This tutorial covered how to monitor partial batch ingestion errors. For more information on batch ingestion, please read the [batch ingestion developer guide](../batch-ingestion/api-overview.md).

## Appendix {#appendix}

This section provides supplemental information about ingestion error types.

### Partial batch ingestion error types {#partial-ingestion-types}

Partial batch ingestion has three different error types when ingesting data:

- [Unreadable files](#unreadable)
- [Invalid schemas or headers](#schemas-headers)
- [Unparsable rows](#unparsable)

### Unreadable files {#unreadable}

If the batch ingested has unreadable files, the batch's errors will be attached on the batch itself. More information on retrieving the failed batch can be found in the [retrieving failed batches guide](../quality/retrieve-failed-batches.md).

### Invalid schemas or headers {#schemas-headers}

If the batch ingested has an invalid schema or invalid headers, the batch's errors will be attached on the batch itself. More information on retrieving the failed batch can be found in the [retrieving failed batches guide](../quality/retrieve-failed-batches.md).

### Unparsable rows {#unparsable}

If the batch you ingested has unparsable rows, you can use the following request to view a list of files that contain errors.

**API format**

```http
GET /export/batches/{BATCH_ID}/meta?path=row_errors
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The `id` value of the batch you are retrieving error information from. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/export/batches/01EFZ7W203PEKSAMVJC3X99VHQ/meta?path=row_errors \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a list of the files that have errors.

```json
{
    "data": [
        {
            "name": "conversion_errors_0.json",
            "length": "1162",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io:443/data/foundation/export/batches/01EFZ7W203PEKSAMVJC3X99VHQ/meta?path=row_errors%2Fconversion_errors_0.json"
                }
            }
        },
        {
            "name": "parsing_errors_0.json",
            "length": "153",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io:443/data/foundation/export/batches/01EFZ7W203PEKSAMVJC3X99VHQ/meta?path=row_errors%2Fparsing_errors_0.json"
                }
            }
        }
    ],
    "_page": {
        "limit": 100,
        "count": 2
    }
}
```

You can then retrieve detailed information about the errors using the [diagnostics retrieval endpoint](#retrieve-diagnostics).

A sample response of retrieving the error file can be seen below:

```json
{
    "_corrupt_record": "{missingQuotes: 'v1'}",
    "_errors": [{
        "code": "1401",
        "message": "Row is corrupted and cannot be read, please fix and resend."
    }],
    "_filename": "parsing_errors_0.json"
}
```
