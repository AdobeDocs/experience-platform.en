---
keywords: Experience Platform;home;popular topics;Azure;azure blob;blob;Blob
solution: Experience Platform
title: Create an Azure Blob connector using the Flow Service API
topic: overview
type: Tutorial
description: This tutorial uses the Flow Service API to walk you through the steps to connect Experience Platform to an Azure Blob (hereinafter referred to as "Blob") storage.
---

# Create an [!DNL Azure Blob] connector using the [!DNL Flow Service] API

This tutorial uses the [[!DNL Flow Service] API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/flow-service.yaml)  to walk you through the steps to connect [!DNL Azure Blob] (hereinafter referred to as "Blob") to Experience Platform

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully create a [!DNL Blob] source connector using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with your [!DNL Blob] storage, you must provide values for the following connection property:

| Credential | Description |
| ---------- | ----------- |
| `connectionString` | A string that contains the authorization information necessary to authenticate [!DNL Blob] to Experience Platform. The [!DNL Blob] connection string pattern is: `DefaultEndpointsProtocol=https;AccountName={ACCOUNT_NAME};AccountKey={ACCOUNT_KEY}`. For more information about connection strings, see this [!DNL Blob] document on [configuring connection strings](https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string). |
| `sasUri` | The shared access signature URI that you can use as an alternative authentication type to connect your [!DNL Blob] account. For more information, see this [!DNL Blob] document on [shared access signature URIs](https://docs.microsoft.com/en-us/azure/data-factory/connector-azure-blob-storage#shared-access-signature-authentication).  |
| `connectionSpec.id` | The unique identifier needed to create a connection. The connection specification ID for [!DNL Blob] is: `4c10e202-c428-4796-9208-5f1f5732b1cf` |

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

### Gather values for required headers

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {IMS_ORG}`

All resources in Experience Platform, including those belonging to [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

* `x-sandbox-name: {SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

* `Content-Type: application/json`

## Create a connection

A connection specifies a source and contains your credentials for that source. Only one connection is required per [!DNL Blob] account as it can be used to create multiple dataflows to bring in different data.

### Create a [!DNL Blob] connection using connection string-based authentication

To create a [!DNL Blob] connection using connection string-based authentication, make a POST request to the [!DNL Flow Service] API while providing your [!DNL Blob] `connectionString`.

**API format**

```http
POST /connections
```

**Request**

In order to create a [!DNL Blob] connection, its unique connection specification ID must be provided as part of the POST request. The connection specification ID for [!DNL Blob] is `4c10e202-c428-4796-9208-5f1f5732b1cf`.

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Blob Connection",
        "description": "Cnnection for an Azure Blob account",
        "auth": {
            "specName": "ConnectionString",
            "params": {
                "connectionString": "DefaultEndpointsProtocol=https;AccountName={ACCOUNT_NAME};AccountKey={ACCOUNT_KEY}"
            }
        },
        "connectionSpec": {
            "id": "4c10e202-c428-4796-9208-5f1f5732b1cf",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
|   `auth.params.connectionString` | The connection string required to access data in your Blob storage. The Blob connection string pattern is: `DefaultEndpointsProtocol=https;AccountName={ACCOUNT_NAME};AccountKey={ACCOUNT_KEY}`. |
|   `connectionSpec.id` | The Blob storage connection specification ID is: `4c10e202-c428-4796-9208-5f1f5732b1cf` |

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your storage in the next tutorial.

```json
{
    "id": "4cb0c374-d3bb-4557-b139-5712880adc55",
    "etag": "\"1700c57b-0000-0200-0000-5e3b3f440000\""
}
```

### Create a [!DNL Blob] connection using shared access signature URI

A shared access signature (SAS) URI allows for secure delegated authorization to your [!DNL Blob] account. You can use SAS to create authentication credentials with varying degrees of access, as a SAS-based authentication allows you to set permissions, start and expiry dates, as well as provisions to specific resources.

To create a [!DNL Blob] connection using shared access signature URI, make a POST request to the [!DNL Flow Service] API while providing values for your [!DNL Blob] `sasUri`.

**API format**

```http
POST /connections
```

**Request**

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Blob Connection",
        "description": "Cnnection for an Azure Blob account",
        "auth": {
            "specName": "SasURIAuthentication",
            "params": {
                "sasUri": "https://{ACCOUNT_NAME}.blob.core.windows.net/?sv=<storage version>&st={START_TIME}&se={EXPIRE_TIME}&sr={RESOURCE}&sp={PERMISSIONS}>&sip=<{IP_RANGE}>&spr={PROTOCOL}&sig={SIGNATURE}>"
            }
        },
        "connectionSpec": {
            "id": "4c10e202-c428-4796-9208-5f1f5732b1cf",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
|   `auth.params.connectionString` | The SAS URI required to access data in your Blob storage. The Blob SAS URI pattern is: `https://{ACCOUNT_NAME}.blob.core.windows.net/?sv=<storage version>&st={START_TIME}&se={EXPIRE_TIME}&sr={RESOURCE}&sp={PERMISSIONS}>&sip=<{IP_RANGE}>&spr={PROTOCOL}&sig={SIGNATURE}>`. |
|   `connectionSpec.id` | The Blob storage connection specification ID is: `4c10e202-c428-4796-9208-5f1f5732b1cf` |

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your storage in the next tutorial.

```json
{
    "id": "4cb0c374-d3bb-4557-b139-5712880adc55",
    "etag": "\"1700c57b-0000-0200-0000-5e3b3f440000\""
}
```

## Next steps

By following this tutorial, you have created a Blob connection using APIs and a unique ID was obtained as part of the response body. You can use this connection ID to [explore cloud storages using the Flow Service API](../../explore/cloud-storage.md) or [ingest parquet data using the Flow Service API](../../cloud-storage-parquet.md).