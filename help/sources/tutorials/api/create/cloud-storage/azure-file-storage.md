---
keywords: Experience Platform;home;popular topics;Azure;Azure File Storage;Azure file storage
solution: Experience Platform
title: Create an Azure File Storage Base Connection Using the Flow Service API
topic-legacy: overview
type: Tutorial
description: Learn how to connect Azure File Storage to Adobe Experience Platform using the Flow Service API.
exl-id: 0c585ae2-be2d-4167-b04b-836f7e2c04a9
---
# Create an [!DNL Azure File Storage] base connection using the [!DNL Flow Service] API

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL Azure File Storage] using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL Azure File Storage] using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL Azure File Storage], you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `host` | The endpoint of the [!DNL Azure File Storag]e instance you are accessing. |
| `userId` | The user with sufficient access to the [!DNL Azure File Storage] endpoint. |
| `password` | The password for your [!DNL Azure File Storage] instance |
| `connectionSpec.id` | The connection specification returns a source’s connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Azure File Storage] is: `be5ec48c-5b78-49d5-b8fa-7c89ec4569b8`. |

For more information about getting started refer to [this Azure File Storage document](https://docs.microsoft.com/en-us/azure/storage/files/storage-how-to-use-files-windows).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Azure File Storage] authentication credentials as part of the request parameters.

**API format**

```http
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Azure File Storage]:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
        -d '{
        "name": "Azure File Storage connection",
        "description": "An Azure File Storage test connection",
        "auth": {
            "specName": "Basic Authentication",
            "params": {
                    "host": "{HOST}",
                    "userId": "{USER_ID}",
                    "password": "{PASSWORD}"
                }
        },
        "connectionSpec": {
            "id": "be5ec48c-5b78-49d5-b8fa-7c89ec4569b8",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| --------- | ----------- |
| `auth.params.host` | The endpoint of the [!DNL Azure File Storage] instance you are accessing.. |
| `auth.params.userId` | The user with sufficient access to the [!DNL Azure File Storage] endpoint. |
| `auth.params.password` | The [!DNL Azure File Storage] access key. |
| `connectionSpec.id` | The [!DNL Azure File Storage] connection specification ID: `be5ec48c-5b78-49d5-b8fa-7c89ec4569b8`. |

**Response**

A successful response returns details of the newly created base connection, including its unique identifier (`id`). This ID is required in the next step to create a source connection.

```json
{
    "id": "f9377f50-607a-4818-b77f-50607a181860",
    "etag": "\"2f0276fa-0000-0200-0000-5eab3abb0000\""
}
```

## Next steps

By following this tutorial, you have created an [!DNL Azure File Storage] connection using the [!DNL Flow Service] API and have obtained the connection's unique ID value. You can use this ID in the next tutorial as you learn how to [explore a third-party cloud storage using the Flow Service API](../../explore/cloud-storage.md).
