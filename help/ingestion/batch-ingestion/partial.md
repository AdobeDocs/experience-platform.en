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
- [Experience Data Model (XDM)](../../xdm/home.md): The standardized framework by which Platform organizes customer experience data.

The following sections provide additional information that you will need to know in order to successfully make calls to [!DNL Platform] APIs.

### Reading sample API calls

This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{IMS_ORG}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

## Enable a batch for partial batch ingestion in the API {#enable-api}

>[!NOTE]
>
>This section describes enabling a batch for partial batch ingestion using the API. For instructions on using the UI, please read the [enable a batch for partial batch ingestion in the UI](#enable-ui) step.

You can create a new batch with partial ingestion enabled.

To create a new batch, follow the steps in the [batch ingestion developer guide](./api-overview.md). Once you reach the *Create batch* step, add the following field within the request body:

```json
{
    ...
    "enableErrorDiagnostics": true,
    "partialIngestionPercentage": 5
    ...
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

To create a new source connection, follow the listed steps in the [Sources overview](../../sources/home.md). Once you reach the *[!UICONTROL Dataflow detail]* step, take note of the *[!UICONTROL Partial ingestion]* and *[!UICONTROL Error diagnostics]* fields.

![](../images/batch-ingestion/partial-ingestion/configure-batch.png)

The *[!UICONTROL Partial ingestion]* toggle allows you to enable or disable the use of partial batch ingestion.

The *[!UICONTROL Error diagnostics]* toggle only appears when the *[!UICONTROL Partial ingestion]* toggle is off. This feature allows [!DNL Platform] to generate detailed error messages about your ingested batches. If the *[!UICONTROL Partial ingestion]* toggle is turned on, enhanced error diagnostics are automatically enforced.

![](../images/batch-ingestion/partial-ingestion/configure-batch-partial-ingestion-focus.png)

The *[!UICONTROL Error threshold]* allows you to set the percentage of acceptable errors before the entire batch will fail. By default, this value is set to 5%.

### Use an existing dataset {#existing-dataset}

To use an existing dataset, start by selecting a dataset. The sidebar on the right populates with information about the dataset. 

![](../images/batch-ingestion/partial-ingestion/monitor-dataset.png)

The [!UICONTROL *[!UICONTROL Partial ingestion]*] toggle allows you to enable or disable the use of partial batch ingestion.

The *[!UICONTROL Error diagnostics]* toggle only appears when the *[!UICONTROL Partial ingestion]* toggle is off. This feature allows [!DNL Platform] to generate detailed error messages about your ingested batches. If the *[!UICONTROL Partial ingestion]* toggle is turned on, enhanced error diagnostics are automatically enforced.

![](../images/batch-ingestion/partial-ingestion/monitor-dataset-partial-ingestion-focus.png)

The *[!UICONTROL Error threshold]* allows you to set the percentage of acceptable errors before the entire batch will fail. By default, this value is set to 5%.

Now, you can upload data using the **Add data** button, and it will be ingested using partial ingestion.

### Use the "[!UICONTROL Map CSV to XDM schema]" flow {#map-flow}

To use the "[!UICONTROL Map CSV to XDM schema]" flow, follow the listed steps in the [Map a CSV file tutorial](../tutorials/map-a-csv-file.md). Once you reach the *Add data* step, take note of the *[!UICONTROL Partial ingestion]* and *[!UICONTROL Error diagnostics]* fields.

![](../images/batch-ingestion/partial-ingestion/xdm-csv-workflow.png)

The *[!UICONTROL Partial ingestion]* toggle allows you to enable or disable the use of partial batch ingestion.

The *[!UICONTROL Error diagnostics]* toggle only appears when the *[!UICONTROL Partial ingestion]* toggle is off. This feature allows [!DNL Platform] to generate detailed error messages about your ingested batches. If the *[!UICONTROL Partial ingestion]* toggle is turned on, enhanced error diagnostics are automatically enforced.

![](../images/batch-ingestion/partial-ingestion/xdm-csv-workflow-partial-ingestion-focus.png)

The *[!UICONTROL Error threshold]* allows you to set the percentage of acceptable errors before the entire batch will fail. By default, this value is set to 5%.

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

**Response**

A successful response returns HTTP status 200 with detailed information about the batch's status.

```json
{
    "af838510-2233-11ea-acf0-f3edfcded2d2": {
        "status": "success",
        "tags": {
            ...
            "acp_enableErrorDiagnostics": true,
            "acp_partialIngestionPercent": 5
            ...
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
            "outputRecordCount": 497
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

If the batch has an error and has error diagnostics enabled, the status will be "success" with more information about the error provided in a downloadable error file.

## Next steps {#next-steps}

This tutorial covered how to create or modify a dataset to enable partial batch ingestion. For more information on batch ingestion, please read the [batch ingestion developer guide](./api-overview.md).

## Partial batch ingestion error types {#appendix}

Partial batch ingestion has four different error types when ingesting data.

- [Unreadable files](#unreadable)
- [Invalid schemas or headers](#schemas-headers)
- [Unparsable rows](#unparsable)
- [Invalid XDM conversion](#conversion)

### Unreadable files {#unreadable}

If the batch ingested has unreadable files, the batch's errors will be attached on the batch itself. More information on retrieving the failed batch can be found in the [retrieving failed batches guide](../quality/retrieve-failed-batches.md).

### Invalid schemas or headers {#schemas-headers}

If the batch ingested has an invalid schema or invalid headers, the batch's errors will be attached on the batch itself. More information on retrieving the failed batch can be found in the [retrieving failed batches guide](../quality/retrieve-failed-batches.md).

### Unparsable rows {#unparsable}

If the batch ingested has unparsable rows, the batch's errors will be stored in a file that can be accessed by using the endpoint outlined below.

**API format**

```http
GET /export/batches/{BATCH_ID}/failed?path=parse_errors
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The `id` value of the batch you are retrieving error information from. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/export/batches/{BATCH_ID}/failed?path=parse_errors \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with details of the unparsable rows.

```json
{
    "_corrupt_record":"{missingQuotes:"v1"}",
    "_errors": [{
         "code":"1401",
         "message":"Row is corrupted and cannot be read, please fix and resend."
    }],
    "_filename": "a1.json"
}
```

### Invalid XDM conversion {#conversion}

If the batch ingested has invalid XDM conversions, the batch's errors will be stored in a file that can be accessed by using the following endpoint.

**API format**

```http
GET /export/batches/{BATCH_ID}/failed?path=conversion_errors
```

| Parameter | Description |
| --------- | ----------- |
| `{BATCH_ID}` | The `id` value of the batch you are retrieving error information from. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/export/batches/{BATCH_ID}/failed?path=conversion_errors \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with details of the failures in XDM conversion.

```json
{
    "col1":"v1",
    "col2":"v2",
    "col3":[{
        "g1":"h1"
    }],
    "_errors":[{
        "column":"col3",
        "code":"123",
        "message":"Cannot convert array element from Object to String"
    }],
    "_filename":"a1.json"
},
{
    "col1":"v1",
    "col2":"v2",
    "col3":[{
        "g1":"h1"
    }],
    "_errors":[{
        "column":"col1",
        "code":"100",
        "message":"Cannot convert string to float"
    }],
    "_filename":"a2.json"
}
```