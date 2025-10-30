---
keywords: Experience Platform;home;popular topics;batch ingestion;Batch ingestion;partial ingestion;Partial ingestion;Retrieve error;retrieve error;Partial batch ingestion;partial batch ingestion;partial;ingestion;Ingestion;
solution: Experience Platform
title: Partial Batch Ingestion Overview
description: This document provides a tutorial for managing partial batch ingestion.
exl-id: 25a34da6-5b7c-4747-8ebd-52ba516b9dc3
---
# Partial batch ingestion

Partial batch ingestion is the ability to ingest data containing errors, up to a certain threshold. With this capability, users can successfully ingest all their correct data into Adobe Experience Platform while all their incorrect data is batched separately, along with details as to why it is invalid.

This document provides a tutorial for managing partial batch ingestion. 

## Getting started

This tutorial requires a working knowledge of the various Adobe Experience Platform services involved with partial batch ingestion. Before beginning this tutorial, please review the documentation for the following services:

- [Batch ingestion](./overview.md): The method which [!DNL Experience Platform] ingests and stores data from data files, such as CSV and Parquet.
- [[!DNL Experience Data Model (XDM)]](../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.

The following sections provide additional information that you will need to know in order to successfully make calls to [!DNL Experience Platform] APIs.

### Reading sample API calls

This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Experience Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{ORG_ID}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Experience Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in [!DNL Experience Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

## Enable a batch for partial batch ingestion in the API {#enable-api}

>[!NOTE]
>
>This section describes enabling a batch for partial batch ingestion using the API. For instructions on using the UI, please read the [enable a batch for partial batch ingestion in the UI](#enable-ui) step.

You can create a new batch with partial ingestion enabled.

To create a new batch, follow the steps in the [batch ingestion developer guide](./api-overview.md). Once you reach the **[!UICONTROL Create batch]** step, add the following field within the request body:

```json
{
    "enableErrorDiagnostics": true,
    "partialIngestionPercent": 5
}
```

| Property | Description |
| -------- | ----------- |
| `enableErrorDiagnostics` | A flag that allows [!DNL Experience Platform] to generate detailed error messages about your batch. |
| `partialIngestionPercent` | The percentage of acceptable errors before the entire batch will fail. So, in this example, a maximum of 5% of the batch can be errors, before it will fail. |


## Enable a batch for partial batch ingestion in the UI {#enable-ui}

>[!NOTE]
>
>This section describes enabling a batch for partial batch ingestion using the UI. If you have already enabled a batch for partial batch ingestion using the API, you can skip ahead to the next section.

To enable a batch for partial ingestion through the [!DNL Experience Platform] UI, you can create a new batch through source connections, create a new batch in an existing dataset, or create a new batch through the "[!UICONTROL Map CSV to XDM flow]". 

### Create a new source connection {#new-source}

To create a new source connection, follow the listed steps in the [Sources overview](../../sources/home.md). Once you reach the **[!UICONTROL Dataflow detail]** step, take note of the **[!UICONTROL Partial ingestion]** and **[!UICONTROL Error diagnostics]** fields.

![](../images/batch-ingestion/partial-ingestion/configure-batch.png)

The **[!UICONTROL Partial ingestion]** toggle allows you to enable or disable the use of partial batch ingestion.

The **[!UICONTROL Error diagnostics]** toggle only appears when the **[!UICONTROL Partial ingestion]** toggle is off. This feature allows [!DNL Experience Platform] to generate detailed error messages about your ingested batches. If the **[!UICONTROL Partial ingestion]** toggle is turned on, enhanced error diagnostics are automatically enforced.

![](../images/batch-ingestion/partial-ingestion/configure-batch-partial-ingestion-focus.png)

The **[!UICONTROL Error threshold]** allows you to set the percentage of acceptable errors before the entire batch will fail. By default, this value is set to 5%.

### Use an existing dataset {#existing-dataset}

To use an existing dataset, start by selecting a dataset. The sidebar on the right populates with information about the dataset. 

![](../images/batch-ingestion/partial-ingestion/monitor-dataset.png)

The **[!UICONTROL Partial ingestion]** toggle allows you to enable or disable the use of partial batch ingestion.

The **[!UICONTROL Error diagnostics]** toggle only appears when the **[!UICONTROL Partial ingestion]** toggle is off. This feature allows [!DNL Experience Platform] to generate detailed error messages about your ingested batches. If the **[!UICONTROL Partial ingestion]** toggle is turned on, enhanced error diagnostics are automatically enforced.

![](../images/batch-ingestion/partial-ingestion/monitor-dataset-partial-ingestion-focus.png)

The **[!UICONTROL Error threshold]** allows you to set the percentage of acceptable errors before the entire batch will fail. By default, this value is set to 5%.

Now, you can upload data using the **Add data** button, and it will be ingested using partial ingestion.

### Use the "[!UICONTROL Map CSV to XDM schema]" flow {#map-flow}

To use the "[!UICONTROL Map CSV to XDM schema]" flow, follow the listed steps in the [Map a CSV file tutorial](../tutorials/map-csv/overview.md). Once you reach the **[!UICONTROL Add data]** step, take note of the **[!UICONTROL Partial ingestion]** and **[!UICONTROL Error diagnostics]** fields.

![](../images/batch-ingestion/partial-ingestion/xdm-csv-workflow.png)

The **[!UICONTROL Partial ingestion]** toggle allows you to enable or disable the use of partial batch ingestion.

The **[!UICONTROL Error diagnostics]** toggle only appears when the **[!UICONTROL Partial ingestion]** toggle is off. This feature allows [!DNL Experience Platform] to generate detailed error messages about your ingested batches. If the **[!UICONTROL Partial ingestion]** toggle is turned on, enhanced error diagnostics are automatically enforced.

![](../images/batch-ingestion/partial-ingestion/xdm-csv-workflow-partial-ingestion-focus.png)

**[!UICONTROL Error threshold]** allows you to set the percentage of acceptable errors before the entire batch will fail. By default, this value is set to 5%.

## Enable partial ingestion and error diagnostics for an existing dataflow

If a dataflow in Experience Platform was created without enabling partial ingestion or error diagnostics, you can still enable these features without recreating the flow. Read the sections below to learn how to enable partial ingestion and error diagnostics for an existing dataflow using the [!DNL Flow Service] API.

By default, dataflows may not have partial ingestion or error diagnostics enabled. These features are helpful for identifying and isolating issues during data ingestion. Using the [!DNL Flow Service] API, you can retrieve your current dataflow configuration and apply the necessary changes using a PATCH request.

Follow the steps below to enable partial ingestion and error diagnostics for an existing dataflow.

### Retrieve flow details

To retrieve your dataflow configurations, make a GET request to the `/flows/{FLOW_ID}` endpoint and provide the ID of your dataflow. For more information on retrieving dataflow details, refer to the [Update dataflows using the [!DNL Flow Service] API](../../sources/tutorials/api/update-dataflows.md) guide.

Make sure to save the value of the `etag` field returned in the response. This is necessary for the update request to ensure version consistency.

### Update flow configuration

Next, make a PATCH request to the `/flows/` endpoint and provide the ID of the dataflow that you want to enable partial ingestion and error diagnostics for.

>[!IMPORTANT]
>
>- Include the previously saved `etag` value in the request header using the If-Match key.
>- You can modify the `partialIngestionPercent` value to suit your specific needs.

**API format**

```http
PATCH /flows/{FLOW_ID}
```

**Request**

```shell
curl -X PATCH \
    'https://platform.adobe.io/data/foundation/flowservice/flows/2edc08ac-4df5-4fe6-936f-81a19ce92f5c' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
    -H 'If-Match: "1a0037e4-0000-0200-0000-602e06f60000"' \
    -d '[
        {
            "op": "add",
            "path": "/options",
            "value": {
                "partialIngestionPercent": "10"
            }
        },
        {
            "op": "add",
            "path": "/options/errorDiagnosticsEnabled",
            "value": true
        }
    ]'
```

**Response**

A successful response returns your `flow ID` and an updated `etag`.

```json
{
    "id": "2edc08ac-4df5-4fe6-936f-81a19ce92f5c",
    "etag": "\"2c000802-0000-0200-0000-613976440000\""
}
```

### Verify the update

After the PATCH is complete, make a GET request and retrieve your dataflow to verify that the changes were successfully completed.

**API format**

```http
GET /flows/{FLOW_ID}
```

**Request**

The following request retrieves updated information regarding your flow ID.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/flowservice/flows/2edc08ac-4df5-4fe6-936f-81a19ce92f5c' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns your dataflow details, confirming that partial ingestion and error diagnostics are now enabled in the `options` section.

```json
"options": {
    "partialIngestionPercent": 10,
    "errorDiagnosticsEnabled": true
}
```

Enabling partial ingestion and error diagnostics can significantly improve the reliability and debuggability of your data ingestion workflows.

## Next steps {#next-steps}

This tutorial covered how to create or modify a dataset to enable partial batch ingestion. For more information on batch ingestion, please read the [batch ingestion developer guide](./api-overview.md).

For information on monitoring partial ingestion errors, please read the [batch ingestion error diagnostics guide](../quality/error-diagnostics.md).
