---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Adobe Experience Platform partial batch ingestion overview
topic: overview
---


# Partial batch ingestion

Partial batch ingestion is the ability to ingest data containing errors, up to a certain threshold. With this capability, users can successfully ingest all their correct data into Adobe Experience Platform while all their incorrect data is batched separately, along with details as to why it is invalid.

This document provides a tutorial for managing partial batch ingestion. 

In addition, the [appendix](#appendix) to this tutorial provides a reference for partial batch ingestion error types.

## Getting started

This tutorial requires a working knowledge of the various Adobe Experience Platform services involved with partial batch ingestion. Before beginning this tutorial, please review the documentation for the following services:

- [Batch ingestion](./overview.md): The method which [!DNL Platform] ingests and stores data from data files, such as CSV and Parquet.
- [[!DNL Experience Data Model] (XDM)](../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes customer experience data.

The following sections provide additional information that you will need to know in order to successfully make calls to [!DNL Platform] APIs.

### Reading sample API calls

This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{IMS_ORG}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

## Enable a batch for partial batch ingestion in the API {#enable-api}

>[!NOTE]
>
>This section describes enabling a batch for partial batch ingestion using the API. For instructions on using the UI, please read the [enable a batch for partial batch ingestion in the UI](#enable-ui) step.

You can create a new batch with partial ingestion enabled.

To create a new batch, follow the steps in the [batch ingestion developer guide](./api-overview.md). Once you reach the **[!UICONTROL Create batch]** step, add the following field within the request body:

```json
{
    "enableErrorDiagnostics": true,
    "partialIngestionPercentage": 5
}
```

| Property | Description |
| -------- | ----------- |
| `enableErrorDiagnostics` | A flag that allows [!DNL Platform] to generate detailed error messages about your batch. |
| `partialIngestionPercentage` | The percentage of acceptable errors before the entire batch will fail. So, in this example, a maximum of 5% of the batch can be errors, before it will fail. |


## Enable a batch for partial batch ingestion in the UI {#enable-ui}

>[!NOTE]
>
>This section describes enabling a batch for partial batch ingestion using the UI. If you have already enabled a batch for partial batch ingestion using the API, you can skip ahead to the next section.

To enable a batch for partial ingestion through the [!DNL Platform] UI, you can create a new batch through source connections, create a new batch in an existing dataset, or create a new batch through the "[!UICONTROL Map CSV to XDM flow]". 

### Create a new source connection {#new-source}

To create a new source connection, follow the listed steps in the [Sources overview](../../sources/home.md). Once you reach the **[!UICONTROL Dataflow detail]** step, take note of the **[!UICONTROL Partial ingestion]** and **[!UICONTROL Error diagnostics]** fields.

![](../images/batch-ingestion/partial-ingestion/configure-batch.png)

The **[!UICONTROL Partial ingestion]** toggle allows you to enable or disable the use of partial batch ingestion.

The **[!UICONTROL Error diagnostics]** toggle only appears when the **[!UICONTROL Partial ingestion]** toggle is off. This feature allows [!DNL Platform] to generate detailed error messages about your ingested batches. If the **[!UICONTROL Partial ingestion]** toggle is turned on, enhanced error diagnostics are automatically enforced.

![](../images/batch-ingestion/partial-ingestion/configure-batch-partial-ingestion-focus.png)

The **[!UICONTROL Error threshold]** allows you to set the percentage of acceptable errors before the entire batch will fail. By default, this value is set to 5%.

### Use an existing dataset {#existing-dataset}

To use an existing dataset, start by selecting a dataset. The sidebar on the right populates with information about the dataset. 

![](../images/batch-ingestion/partial-ingestion/monitor-dataset.png)

The **[!UICONTROL Partial ingestion]** toggle allows you to enable or disable the use of partial batch ingestion.

The **[!UICONTROL Error diagnostics]** toggle only appears when the **[!UICONTROL Partial ingestion]** toggle is off. This feature allows [!DNL Platform] to generate detailed error messages about your ingested batches. If the **[!UICONTROL Partial ingestion]** toggle is turned on, enhanced error diagnostics are automatically enforced.

![](../images/batch-ingestion/partial-ingestion/monitor-dataset-partial-ingestion-focus.png)

The **[!UICONTROL Error threshold]** allows you to set the percentage of acceptable errors before the entire batch will fail. By default, this value is set to 5%.

Now, you can upload data using the **Add data** button, and it will be ingested using partial ingestion.

### Use the "[!UICONTROL Map CSV to XDM schema]" flow {#map-flow}

To use the "[!UICONTROL Map CSV to XDM schema]" flow, follow the listed steps in the [Map a CSV file tutorial](../tutorials/map-a-csv-file.md). Once you reach the **[!UICONTROL Add data]** step, take note of the **[!UICONTROL Partial ingestion]** and **[!UICONTROL Error diagnostics]** fields.

![](../images/batch-ingestion/partial-ingestion/xdm-csv-workflow.png)

The **[!UICONTROL Partial ingestion]** toggle allows you to enable or disable the use of partial batch ingestion.

The **[!UICONTROL Error diagnostics]** toggle only appears when the **[!UICONTROL Partial ingestion]** toggle is off. This feature allows [!DNL Platform] to generate detailed error messages about your ingested batches. If the **[!UICONTROL Partial ingestion]** toggle is turned on, enhanced error diagnostics are automatically enforced.

![](../images/batch-ingestion/partial-ingestion/xdm-csv-workflow-partial-ingestion-focus.png)

The **[!UICONTROL Error threshold]** allows you to set the percentage of acceptable errors before the entire batch will fail. By default, this value is set to 5%.

## Downloading file-level metadata {#download-metadata}

Adobe Experience Platform allows users to download the metadata of the input files. The metadata will be retained within [!DNL Platform] for up to 30 days.

### List input files {#list-files}

The following request will allow you to view a list of all the files provided in a finalized batch.

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/export/batches/{BATCH_ID}/meta?path=input_files \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response will return HTTP status 200 with JSON objects containing path objects detailing where the metadata was saved.

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
                    "href": "https://platform.adobe.io/data/foundation/export/batches/{BATCH_ID}/meta?path=input_files/fileMetaData1.json"
                }
            },
            "length": "1337",
            "name": "fileMetaData1.json"
        },
                {
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/export/batches/{BATCH_ID}/meta?path=input_files/fileMetaData2.json"
                }
            },
            "length": "1042",
            "name": "fileMetaData2.json"
        }
    ]
}
```

### Retrieve input file metadata {#retrieve-metadata}

Once you have retrieved a list of all the different input files, you can retrieve the metadata of the individual file by using the following endpoint.

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/export/batches/{BATCH_ID}/meta?path=input_files/fileMetaData1.json \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response will return HTTP status 200 with JSON objects containing path objects detailing where the metadata was saved.

```json
{"path": "F1.json"}
{"path": "etc/F2.json"}
```

## Retrieve partial batch ingestion errors {#retrieve-errors}

If batches contain failures, you will need to retrieve error information about these failures so you can re-ingest the data.

### Check status {#check-status}

To check the status of the ingested batch, you must supply the batch's ID in the path of a GET request.

**API format**

```http
GET /catalog/batches/{BATCH_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The `id` value of the batch you want to check the status of. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/catalog/batches/{BATCH_ID} \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response without errors**

A successful response returns HTTP status 200 with detailed information about the batch's status.

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
        "imsOrg": "{IMS_ORG}",
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
| `metrics.failedRecordCount` | The number of rows that were not able to be processed due to parsing, conversion, or validation. This value can be derived by subtracting the `inputRecordCount` from the `outputRecordCount`. This value will be generated on all batches regardless if `errorDiagnostics` is enabled. |

**Response with errors**

If the batch has one or more errors and has error diagnostics enabled, the status will be `success` with more information about the errors provided both within the response and in a downloadable error file.

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
        "imsOrg": "{IMS_ORG}",
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
| `metrics.failedRecordCount` | The number of rows that were not able to be processed due to parsing, conversion, or validation. This value can be derived by subtracting the `inputRecordCount` from the `outputRecordCount`. This value will be generated on all batches regardless if `errorDiagnostics` is enabled. |
| `errors.recordCount` | The number of rows that failed for the specified error code. This value is **only** generated if `errorDiagnostics` is enabled. |

>[!NOTE]
>
>If error diagnostics are not available, the following error message will appear instead:
> ```json
> {
>     "errors": [{
>         "code": "INGEST-1211-400",
>         "description": "Encountered errors while parsing, converting or otherwise validating the data. Please resend the data with error diagnostics enabled to collect additional information on failure types"
>     }]
> }
> ```

## Next steps {#next-steps}

This tutorial covered how to create or modify a dataset to enable partial batch ingestion. For more information on batch ingestion, please read the [batch ingestion developer guide](./api-overview.md).

## Partial batch ingestion error types {#appendix}

Partial batch ingestion has three different error types when ingesting data.

- [Unreadable files](#unreadable)
- [Invalid schemas or headers](#schemas-headers)
- [Unparsable rows](#unparsable)

### Unreadable files {#unreadable}

If the batch ingested has unreadable files, the batch's errors will be attached on the batch itself. More information on retrieving the failed batch can be found in the [retrieving failed batches guide](../quality/retrieve-failed-batches.md).

### Invalid schemas or headers {#schemas-headers}

If the batch ingested has an invalid schema or invalid headers, the batch's errors will be attached on the batch itself. More information on retrieving the failed batch can be found in the [retrieving failed batches guide](../quality/retrieve-failed-batches.md).

### Unparsable rows {#unparsable}

If the batch you ingested has unparsable rows, you can use the following endpoint to view a list of files that contain errors.

**API format**

```http
GET /export/batches/{BATCH_ID}/meta?path=row_errors
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The `id` value of the batch you are retrieving error information from. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/export/batches/{BATCH_ID}/meta?path=row_errors \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with a list of the files that have errors.

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

You can then retrieve detailed information about the errors using the [metadata retrieval endpoint](#retrieve-metadata).

A sample response of retrieving the error file can be seen below:

```json
{
    "_corrupt_record": "{missingQuotes: "v1"}",
    "_errors": [{
        "code": "1401",
        "message": "Row is corrupted and cannot be read, please fix and resend."
    }],
    "_filename": "parsing_errors_0.json"
}
```