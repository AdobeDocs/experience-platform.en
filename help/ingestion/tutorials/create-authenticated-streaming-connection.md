---
keywords: Experience Platform;home;popular topics;authenticated streaming connection;streaming connection;create streaming connection;create authenticated streaming connection;streaming ingestion;ingestion;
solution: Experience Platform
title: Create an authenticated streaming connection
topic: tutorial
type: Tutorial
description: Authenticated Data Collection allows Adobe Experience Platform services, such as Real-time Customer Profile and Identity, to differentiate between records coming from trusted sources and untrusted sources.
---

# Creating an authenticated streaming connection

Authenticated Data Collection allows Adobe Experience Platform services, such as [!DNL Real-time Customer Profile] and [!DNL Identity], to differentiate between records coming from trusted sources and untrusted sources. Clients that want to send Personally Identifiable Information (PII) can do so by sending access tokens as part of the POST request.

## Getting started

Streaming connection registration is required in order to start streaming data to Adobe Experience Platform. When registering a streaming connection, you need to provide some key details like the source of streaming data.

After registering a streaming connection, you, as the data producer, will have a unique URL which can be used to stream data to [!DNL Platform].

This tutorial also requires a working knowledge of various Adobe Experience Platform services. Before beginning this tutorial, please review the documentation for the following services:

- [[!DNL Experience Data Model (XDM)]](../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes experience data.
- [[!DNL Real-time Customer Profile]](../../profile/home.md): Provides a unified, consumer profile in real-time based on aggregated data from multiple sources.

The following sections provide additional information that you will need to know in order to successfully make calls to streaming ingestion APIs.

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

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

- Content-Type: application/json

## Create a connection

A connection specifies the source and contains the information required to make the flow compatible with streaming ingestion APIs.

**API format**

```http
POST /flowservice/connections
```

**Request**

>[!NOTE]
>
>The values for the listed `providerId` and the `connectionSpec` **must** be used as shown in the example, as they are what specifies to the API that you are creating a streaming connection for streaming ingestion. 

```shell
curl -X POST https://platform.adobe.io/data/foundation/flowservice/connections \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '{
     "name": "Sample name",
     "providerId": "521eee4d-8cbe-4906-bb48-fb6bd4450033",
     "description": "Sample description",
     "connectionSpec": {
         "id": "bc7b00d6-623a-4dfc-9fdb-f1240aeadaeb",
         "version": "1.0"
     },
     "auth": {
         "specName": "Streaming Connection",
         "params": {
             "sourceId": "Sample connection",
             "dataType": "xdm",
             "name": "Sample connection",
             "authenticationRequired": true
         }
     }
 }
```

**Response**

A successful response returns HTTP status 201 with details of the newly created connection.

```json
{
    "id": "77a05521-91d6-451c-a055-2191d6851c34",
    "etag": "\"a500e689-0000-0200-0000-5e31df730000\""
}
```

| Property | Description |
| -------- | ----------- |
| `id` | The `id` of your newly created connection. This will herein be referred to as `{CONNECTION_ID}`. |
| `etag` | An identifier assigned to the connection, specifying the revision of the connection. |

## Get data collection URL

With the connection created, you can now retrieve your data collection URL.

**API format**

```http
GET /flowservice/connections/{CONNECTION_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{CONNECTION_ID}` | The `id` value of the connection you previously created. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/flowservice/connections/{CONNECTION_ID} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with detailed information about the requested connection. The data collection URL is automatically created with the connection, and can be retrieved using the `inletUrl` value.

```json
{
    "items": [
        {
            "createdAt": 1583971856947,
            "updatedAt": 1583971856947,
            "createdBy": "{API_KEY}",
            "updatedBy": "{API_KEY}",
            "createdClient": "{USER_ID}",
            "updatedClient": "{USER_ID}",
            "id": "77a05521-91d6-451c-a055-2191d6851c34",
            "name": "Another new sample connection (Experience Event)",
            "description": "Sample description",
            "connectionSpec": {
                "id": "bc7b00d6-623a-4dfc-9fdb-f1240aeadaeb",
                "version": "1.0"
            },
            "state": "enabled",
            "auth": {
                "specName": "Streaming Connection",
                "params": {
                    "sourceId": "Sample connection (ExperienceEvent)",
                    "inletUrl": "https://dcs.adobedc.net/collection/a868e1ce678a911ef1482b083329af3cafa4bafdc781285f25911eaae9e00eb2",
                    "inletId": "a868e1ce678a911ef1482b083329af3cafa4bafdc781285f25911eaae9e00eb2",
                    "dataType": "xdm",
                    "name": "Sample connection (ExperienceEvent)"
                }
            },
            "version": "\"56008aee-0000-0200-0000-5e697e150000\"",
            "etag": "\"56008aee-0000-0200-0000-5e697e150000\""
        }
    ]
}
```

## Next steps

Now that you have created an authenticated streaming connection, you can stream either time series or record data, allowing you to ingest data within [!DNL Platform]. To learn how to stream time series data to [!DNL Platform], go to the [streaming time series data tutorial](./streaming-time-series-data.md). To learn how to stream record data to [!DNL Platform], go to the [streaming record data tutorial](./streaming-record-data.md).

## Appendix

This section provides supplemental information about authenticated streaming connections.

### Sending messages to an authenticated streaming connection

If a streaming connection has authentication enabled, the client will be required to add the `Authorization` header to their request. 

If the `Authorization` header is not present, or an invalid/expired access token is sent, an HTTP 401 Unauthorized response will be returned, with a similar response as below:

**Response**

```json
{
    "type": "https://ns.adobe.com/adobecloud/problem/data-collection-service-authorization",
    "status": "401",
    "title": "Authorization",
    "report": {
        "message": "[id] Ims service token is empty"
    }
}
```