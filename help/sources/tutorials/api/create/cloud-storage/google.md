---
keywords: Experience Platform;home;popular topics;Google Cloud Storage;google cloud storage;google;Google
solution: Experience Platform
title: Create a Google Cloud Storage connector using the Flow Service API
topic: overview
description: This tutorial uses the Flow Service API to walk you through the steps to connect Experience Platform to a Google Cloud Storage account.
---

# Create a [!DNL Google Cloud Storage] connector using the [!DNL Flow Service] API

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the [!DNL Flow Service] API to walk you through the steps to connect [!DNL Experience Platform] to a [!DNL Google Cloud Storage] account.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

*   [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
*   [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to a Google Cloud Storage account using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with your [!DNL Google Cloud Storage] account, you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `accessKeyId` | The access key ID for your [!DNL Google Cloud Storage] account. |
| `secretAccessKey` | The secret access key for your [!DNL Google Cloud Storage] account. |

For information on getting started, visit [this Google Cloud document](https://cloud.google.com/docs/authentication).

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](../../../../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

*   Authorization: Bearer `{ACCESS_TOKEN}`
*   x-api-key: `{API_KEY}`
*   x-gw-ims-org-id: `{IMS_ORG}`

All resources in [!DNL Experience Platform], including those belonging to [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

*   x-sandbox-name: `{SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

*   Content-Type: `application/json`

## Create a connection

A connection specifies a source and contains your credentials for that source. Only one connection is required per [!DNL Google Cloud Storage] account as it can be used to create multiple source connectors to bring in different data.

**API format**

```http
POST /connections
```

**Request**

```shell
curl -X POST \
    'http://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Google Cloud Storage connection",
        "description": "Connector for Google Cloud Storage",
        "auth": {
            "specName": "Basic Authentication for google-cloud",
            "params": {
                "accessKeyId": "accessKeyId",
                "secretAccessKey": "secretAccessKey"
            }
        },
        "connectionSpec": {
            "id": "32e8f412-cdf7-464c-9885-78184cb113fd",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.accessKeyId` | The access key ID associated with your [!DNL Google Cloud Storage] account. |
| `auth.params.secretAccessKey` | The secret access key associated with your [!DNL Google Cloud Storage] account. |
| `connectionSpec.id` | The [!DNL Google Cloud Storage] connection specification ID: `32e8f412-cdf7-464c-9885-78184cb113fd` |

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your cloud storage data in the next tutorial.

```json
{
    "id": "4cb0c374-d3bb-4557-b139-5712880adc55",
    "etag": "\"6507cfd8-0000-0200-0000-5e18fc600000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL Google Cloud Storage] connection using APIs and a unique ID was obtained as part of the response body. You can use this connection ID to [explore cloud storages using the Flow Service API](../../explore/cloud-storage.md) or [ingest parquet data using the Flow Service API](../../cloud-storage-parquet.md).