---
keywords: Experience Platform;home;popular topics;Azure;azure blob;blob;Blob
solution: Experience Platform
title: Create an Azure Blob Base Connection Using the Flow Service API
topic-legacy: overview
type: Tutorial
description: Learn how to connect Adobe Experience Platform to Azure Blob using the Flow Service API.
exl-id: 4ab8033f-697a-49b6-8d9c-1aadfef04a04
---
# Create an [!DNL Azure Blob] base connection using the [!DNL Flow Service] API

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL Azure Blob] (hereinafter referred to as "[!DNL Blob]") using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully create a [!DNL Blob] source connection using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with your [!DNL Blob] storage, you must provide values for the following connection property:

| Credential | Description |
| ---------- | ----------- |
| `connectionString` | A string that contains the authorization information necessary to authenticate [!DNL Blob] to Experience Platform. The [!DNL Blob] connection string pattern is: `DefaultEndpointsProtocol=https;AccountName={ACCOUNT_NAME};AccountKey={ACCOUNT_KEY}`. For more information about connection strings, see this [!DNL Blob] document on [configuring connection strings](https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string). |
| `sasUri` | The shared access signature URI that you can use as an alternative authentication type to connect your [!DNL Blob] account. The [!DNL Blob] SAS URI pattern is: `https://{ACCOUNT_NAME}.blob.core.windows.net/?sv=<storage version>&st={START_TIME}&se={EXPIRE_TIME}&sr={RESOURCE}&sp={PERMISSIONS}>&sip=<{IP_RANGE}>&spr={PROTOCOL}&sig={SIGNATURE}>` For more information, see this [!DNL Blob] document on [shared access signature URIs](https://docs.microsoft.com/en-us/azure/data-factory/connector-azure-blob-storage#shared-access-signature-authentication).  |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Blob] is: `d771e9c1-4f26-40dc-8617-ce58c4b53702`. |

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Blob] authentication credentials as part of the request parameters.

### Create a [!DNL Blob] base connection using connection string-based authentication

To create a [!DNL Blob] base connection using connection string-based authentication, make a POST request to the [!DNL Flow Service] API while providing your [!DNL Blob] `connectionString`.

**API format**

```http
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Blob] using connection string-based authentication:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Azure Blob connection using connectionString",
        "description": "Azure Blob connection using connectionString",
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

A successful response returns details of the newly created base connection, including its unique identifier (`id`). This ID is required in the next step to create a source connection.

```json
{
    "id": "4cb0c374-d3bb-4557-b139-5712880adc55",
    "etag": "\"1700c57b-0000-0200-0000-5e3b3f440000\""
}
```

### Create a [!DNL Blob] base connection using shared access signature URI

A shared access signature (SAS) URI allows for secure delegated authorization to your [!DNL Blob] account. You can use SAS to create authentication credentials with varying degrees of access, as a SAS-based authentication allows you to set permissions, start and expiry dates, as well as provisions to specific resources.

To create a [!DNL Blob] blob connection using shared access signature URI, make a POST request to the [!DNL Flow Service] API while providing values for your [!DNL Blob] `sasUri`.

**API format**

```http
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Blob] using shared access signature URI:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Azure Blob source connection using SAS URI",
        "description": "Azure Blob source connection using SAS URI",
        "auth": {
            "specName": "SAS URI Authentication",
            "params": {
                "sasUri": "https://{ACCOUNT_NAME}.blob.core.windows.net/?sv={STORAGE_VERSION}&st={START_TIME}&se={EXPIRE_TIME}&sr={RESOURCE}&sp={PERMISSIONS}>&sip=<{IP_RANGE}>&spr={PROTOCOL}&sig={SIGNATURE}>"
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
|   `auth.params.connectionString` | The SAS URI required to access data in your [!DNL Blob] storage. The [!DNL Blob] SAS URI pattern is: `https://{ACCOUNT_NAME}.blob.core.windows.net/?sv=<storage version>&st={START_TIME}&se={EXPIRE_TIME}&sr={RESOURCE}&sp={PERMISSIONS}>&sip=<{IP_RANGE}>&spr={PROTOCOL}&sig={SIGNATURE}>`. |
|   `connectionSpec.id` | The [!DNL Blob] storage connection specification ID is: `4c10e202-c428-4796-9208-5f1f5732b1cf` |

**Response**

A successful response returns details of the newly created base connection, including its unique identifier (`id`). This ID is required in the next step to create a source connection.

```json
{
    "id": "4cb0c374-d3bb-4557-b139-5712880adc55",
    "etag": "\"1700c57b-0000-0200-0000-5e3b3f440000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL Blob] connection using APIs and a unique ID was obtained as part of the response body. You can use this connection ID to [explore cloud storages using the Flow Service API](../../explore/cloud-storage.md).
