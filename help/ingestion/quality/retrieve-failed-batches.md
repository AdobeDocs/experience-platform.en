---
keywords: Experience Platform;home;popular topics;retrieve failed batches;failed batches;batch ingestion;Batch ingestion;Failed batches;Get failed batches;get failed batches;Download failed batches;download failed batches;
solution: Experience Platform
title: Retrieving Failed Batches Using the Data Access API
type: Tutorial
description: This tutorial covers steps for retrieving information about a failed batch using Data Ingestion APIs.
exl-id: 5fb9f28d-091e-4124-8d8e-b8a675938d3a
---
# Retrieving failed batches using the Data Access API

Adobe Experience Platform provides two methods for uploading and ingesting data. You can either use batch ingestion, which allows you to insert their data using various file types (such as CSVs), or streaming ingestion, which allows you to insert their data to [!DNL Platform] using streaming endpoints in real time.

This tutorial covers steps for retrieving information about a failed batch using [!DNL Data Ingestion] APIs.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

- [[!DNL Experience Data Model (XDM) System]](../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
- [[!DNL Data Ingestion]](../home.md): The methods by which data can be sent to [!DNL Experience Platform].

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

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

- `Content-Type: application/json`

### Sample failed batch

This tutorial will be using sample data with an incorrectly formatted timestamp that sets the month's value to be **00**, as seen below:

```json
{
    "body": {
        "xdmEntity": {
            "id": "c8d11988-6b56-4571-a123-b6ce74236036",
            "timestamp": "2018-00-10T22:07:56Z",
            "environment": {
                "browserDetails": {
                    "userAgent": "Mozilla\/5.0 (Windows NT 5.1) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/29.0.1547.57 Safari\/537.36 OPR\/16.0.1196.62",
                    "acceptLanguage": "en-US",
                    "cookiesEnabled": true,
                    "javaScriptVersion": "1.6",
                    "javaEnabled": true
                },
                "colorDepth": 32,
                "viewportHeight": 799,
                "viewportWidth": 414
            }
        }
    }
}
```

The payload above will not properly validate against the XDM schema due to the malformed timestamp.

## Retrieve the failed batch

**API format**

```http
GET /batches/{BATCH_ID}/failed
```

| Property | Description |
| -------- | ----------- |
| `{BATCH_ID}` | The ID of the batch that you're looking up. |

**Request**

```shell
curl -X GET 'https://platform.adobe.io/data/foundation/export/batches/{BATCH_ID}/failed' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

```json
{
    "data": [
        {
            "name": "_SUCCESS",
            "length": "0",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io:443/data/foundation/export/batches/{BATCH_ID}/failed?path=_SUCCESS"
                }
            }
        },
        {
            "name": "part-00000-44c7b669-5e38-43fb-b56c-a0686dabb982-c000.json",
            "length": "1800",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io:443/data/foundation/export/batches/{BATCH_ID}/failed?path=part-00000-44c7b669-5e38-43fb-b56c-a0686dabb982-c000.json"
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

With the above response, you can see which chunks of the batch succeeded and failed. From this response, you can see that the file `part-00000-44c7b669-5e38-43fb-b56c-a0686dabb982-c000.json` contains the failed batch.

## Download the failed batch

Once you know which file in the batch failed, you can download the failed file and see what the error message is.

**API format**

```http
GET /batches/{BATCH_ID}/failed?path={FAILED_FILE}
```

| Property | Description |
| -------- | ----------- |
| `{BATCH_ID}` | The ID of the batch that contains the failed file. |
| `{FAILED_FILE}` | The name of the file that has the failed formatting. |

**Request**

The following request allows you to download the file that had ingestion errors.

```shell
curl -X GET 'https://platform.adobe.io/data/foundation/export/batches/{BATCH_ID}/failed?path={FAILED_FILE}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

Since the previous ingested batch had an invalid date-time, the following validation error will be shown.

```json
{
    "_validationErrors": [
        {
            "causingExceptions": [],
            "keyword": "format",
            "message": "[2018-00-23T22:07:01Z] is not a valid date-time. Expected [yyyy-MM-dd'T'HH:mm:ssZ, yyyy-MM-dd'T'HH:mm:ss.[0-9]{1-9}Z, yyyy-MM-dd'T'HH:mm:ss[+-]HH:mm, yyyy-MM-dd'T'HH:mm:ss.[0-9]{1,9}[+-]HH:mm]",
            "pointerToViolation": "#/timestamp",
            "schemaLocation": "#/properties/timestamp"
        }
    ]
}
```

## Next steps

After reading this tutorial, you have learned how to retrieve errors from failed batches. For more information about batch ingestion, please read the [batch ingestion developer guide](../batch-ingestion/overview.md). For more information about streaming ingestion, please read the [creating a streaming connection tutorial](../tutorials/create-streaming-connection.md).

## Appendix

This section contains information about other ingestion error types that can occur.

### Incorrectly formatted XDM

Like the timestamp error in the previous example flow, these errors are due to incorrectly formatted XDM. These error messages will vary, depending on the nature of the problem. As a result, no specific error example can be shown.

### Missing or invalid IMS Org ID

This error is shown if the IMS Org ID is either missing from the payload is invalid.

```json
{
    "type": "http://ns.adobe.com/adobecloud/problem/data-collection-service/inlet",
    "status": 400,
    "title": "Invalid XDM Message Format",
    "report": {
        "message": "inletId: [{INLET_ID}] imsOrgId: [{ORG_ID}@AdobeOrg] Message has an absent or wrong ims org in the header"
    }
}
```

### Missing XDM schema

This error is shown if the `schemaRef` for the `xdmMeta` is missing.

```json
{
    "type": "http://ns.adobe.com/adobecloud/problem/data-collection-service/inlet",
    "status": 400,
    "title": "Invalid XDM Message Format",
    "report": {
        "message": "inletId: [{INLET_ID}] imsOrgId: [{ORG_ID}@AdobeOrg] Message has unknown xdm format"
    }
}
```

### Missing source name

This error is shown if the `source` in the header is missing its `name`.

```json
{
    "_errors":{
        "_streamingValidation": [
            {
                "message": "Payload header is missing Source Name"
            }
        ]
    }
}
```

### Missing XDM entity

This error is shown if there is no `xdmEntity` present.

```json
{
    "_validationErrors": [
        {
            "message": "Payload body is missing xdmEntity"
        }
    ]
}
```
