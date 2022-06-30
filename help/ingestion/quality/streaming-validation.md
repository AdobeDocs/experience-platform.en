---
keywords: Experience Platform;home;popular topics;streaming;streaming ingestion;streaming ingestion validation;validation;Streaming ingestion validation;validate;Synchronous validation;synchronous validation;Asynchronous validation;asynchronous validation;
solution: Experience Platform
title: Streaming Ingestion Validation
topic-legacy: tutorial
type: Tutorial
description: Streaming ingestion allows you to upload your data to Adobe Experience Platform using streaming endpoints in real time. Streaming ingestion APIs support two modes of validation - synchronous and asynchronous.
exl-id: 6e9ac943-6d73-44de-a13b-bef6041d3834
---
# Streaming ingestion validation

Streaming ingestion allows you to upload your data to Adobe Experience Platform using streaming endpoints in real time. Streaming ingestion APIs support two modes of validation - synchronous and asynchronous.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

- [[!DNL Experience Data Model (XDM) System]](../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
- [[!DNL Streaming Ingestion]](../streaming-ingestion/overview.md): One of the methods by which data can be sent to [!DNL Experience Platform].

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{ORG_ID}`

All resources in [!DNL Experience Platform], including those belonging to the [!DNL Schema Registry], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

- Content-Type: `application/json`

### Validation coverage

[!DNL Streaming Validation Service] covers validation in the following areas:
-  Range
-  Presence
-  Enum
-  Pattern
-  Type
-  Format

## Synchronous validation

Synchronous validation is a method of validation that provides immediate feedback about why an ingestion failed. However, upon failure, the records that fail validation are dropped and prevented from being sent downstream. As a result, synchronous validation should only be used during the development process. When doing synchronous validation, the callers are informed of both the result of the XDM validation, and, if it failed, the reason for failure. 

By default, synchronous validation is not turned on. To enable it, you must pass in the optional query parameter `syncValidation=true` when making API calls. In addition, synchronous validation is currently only available if your stream endpoint is on the VA7 data center.

>[!NOTE]
>
>The `syncValidation` query parameter is only available for the single message endpoint and cannot be used for the batch endpoint.

If a message fails during synchronous validation, the message will not be written to the output queue, which provides immediate feedback for users.

>[!NOTE]
>
>Schema changes may not be immediately available since changes are cached. Allow up to fifteen minutes for the cache to refresh.

**API format**

```http
POST /collection/{CONNECTION_ID}?syncValidation=true
```

| Parameter | Description |
| --------- | ----------- |
| `{CONNECTION_ID}` | The `id` value of the streaming connection previously created. |

**Request**

Submit the following request to ingest data to your data inlet with synchronous validation:

```shell
curl -X POST https://dcs.adobedc.net/collection/{CONNECTION_ID}?syncValidation=true \
  -H "Content-Type: application/json" \
  -d '{JSON_PAYLOAD}'
```

| Parameter | Description |
| --------- | ----------- |
| `{JSON_PAYLOAD}` | The JSON body of a data you wish to ingest. |

**Response**

With synchronous validation enabled, a successful response includes any encountered validation errors in its payload:

```json
{
    "type": "http://ns.adobe.com/adobecloud/problem/data-collection-service/inlet",
    "status": 400,
    "title": "Invalid XDM Message Format",
    "report": {
        "message": "inletId: [6aca7aa2d87ebd6b2780ca5724d94324a14475f140a2b69373dd5c714430dfd4] imsOrgId: [7BF122A65C5B3FE40A494026@AdobeOrg] Message is invalid",
        "cause": {
            "_streamingValidation": [
                {
                    "schemaLocation": "#",
                    "pointerToViolation": "#",
                    "causingExceptions": [
                        {
                            "schemaLocation": "#",
                            "pointerToViolation": "#",
                            "causingExceptions": [],
                            "keyword": "additionalProperties",
                            "message": "extraneous key [workEmail] is not permitted"
                        },
                        {
                            "schemaLocation": "#",
                            "pointerToViolation": "#",
                            "causingExceptions": [],
                            "keyword": "additionalProperties",
                            "message": "extraneous key [person] is not permitted"
                        },
                        {
                            "schemaLocation": "#/properties/_id",
                            "pointerToViolation": "#/_id",
                            "causingExceptions": [],
                            "keyword": "type",
                            "message": "expected type: String, found: Long"
                        }
                    ],
                    "message": "3 schema violations found"
                }
            ]
        }
    }
}
```

The above response lists how many schema violations were found, and what the violations were. For example, this response states that the keys `workEmail` and `person` were not defined in the schema, and therefore are not allowed. It also flags the value for `_id` as incorrect, since the schema expected a `string`, but a `long` was inserted instead. Note that once five errors are encountered, validation service will **stop** processing that message. Other messages will continue to be parsed, however.

## Asynchronous validation

Asynchronous validation is a method of validation that does not provide immediate feedback. Instead, the data is sent to a failed batch in [!DNL Data Lake] to prevent data loss. This failed data can be later retrieved for further analysis and replay. This method should be used in production. Unless otherwise requested, streaming ingestion operates in asynchronous validation mode.  

**API format**

```http
POST /collection/{CONNECTION_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{CONNECTION_ID}` | The `id` value of the streaming connection previously created. |

**Request**

Submit the following request to ingest data to your data inlet with asynchronous validation:

```shell
curl -X POST https://dcs.adobedc.net/collection/{CONNECTION_ID} \
  -H "Content-Type: application/json" \
  -d '{JSON_PAYLOAD}'
```

| Parameter | Description |
| --------- | ----------- |
| `{JSON_PAYLOAD}` | The JSON body of a data you wish to ingest. |

>[!NOTE]
>
>No extra query parameter is required, as asynchronous validation is enabled by default.

**Response**

With asynchronous validation enabled, a successful response returns the following:

```json
{
    "inletId": "f6ca9706d61de3b78be69e2673ad68ab9fb2cece0c1e1afc071718a0033e6877",
    "xactionId": "1555445493896:8600:8",
    "receivedTimeMs": 1555445493932,
    "syncValidation": {
        "skipped": true
    }
}
```

Please note how the response states that synchronous validation has been skipped, as it has not been explicitly requested.

## Appendix

This section contains information about what the various status codes mean for responses for ingesting data.

### Status codes

| Status Code | What it means |
| ----------- | ------------- |
| 200 | Success. For synchronous validation, it means that it has passed the validation checks. For asynchronous validation, it means that it only has successfully received the message. Users can find out the eventual message status by observing the dataset. |
| 400 | Error. There is something wrong with your request. An error message with further details is received from the Streaming Validation Services. |
| 401 | Error. Your request is unauthorized - you'll need to request with a bearer token. For further information about how to request access, check out this [tutorial](https://www.adobe.com/go/platform-api-authentication-en) or this [blog post](https://medium.com/adobetech/using-postman-for-jwt-authentication-on-adobe-i-o-7573428ffe7f). |
| 500 | Error. There is an internal system error. |
| 501 | Error. This means that synchronous validation is **not** supported for this location. |
| 503 | Error. The service is currently unavailable. Clients should retry at least three times using an exponential back-off strategy. |
