---
keywords: Experience Platform;home;popular topics;Oracle Object Storage;oracle object storage
solution: Experience Platform
title: Create an Oracle Object Storage Base Connection Using the Flow Service API
type: Tutorial
description: Learn how to connect Adobe Experience Platform to Oracle Object Storage using the Flow Service API.
exl-id: a85faa44-7d5a-42a2-9052-af01744e13c9
---
# Create an [!DNL Oracle Object Storage] base connection using the [!DNL Flow Service] API

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL Oracle Object Storage] using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL Oracle Object Storage] using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect to [!DNL Oracle Object Storage], you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `serviceUrl` | The [!DNL Oracle Object Storage] endpoint required for authentication. The endpoint format is: `https://{OBJECT_STORAGE_NAMESPACE}.compat.objectstorage.eu-frankfurt-1.oraclecloud.com` |
| `accessKey` | The [!DNL Oracle Object Storage] access key ID required for authentication. |
| `secretKey` | The [!DNL Oracle Object Storage] password required for authentication. |
| `bucketName` | The allowed bucket name required if the user has restricted access. The bucket name must be between three and 63 characters long, it must begin and end with either a letter or a number, and can only contain lowercase letters, numbers, or hyphens (`-`). The bucket name cannot be formatted like an IP address. |
| `folderPath` | The allowed folder path required if the user has restricted access. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Oracle Object Storage] is: `c85f9425-fb21-426c-ad0b-405e9bd8a46c`. |

For more information on how to obtain these values, refer to the [Oracle Object Storage authentication guide](https://docs.oracle.com/en-us/iaas/Content/Identity/Concepts/usercredentials.htm#User_Credentials).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Oracle Object Storage] authentication credentials as part of the request parameters.

**API format**

```http
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Oracle Object Storage]:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Oracle Object Storage connection",
        "description": "Oracle Object Storage connection",
        "auth": {
            "specName": "Access Key",
            "params": {
                "serviceUrl": "{SERVICE_URL}",
                "accessKey": "{ACCESS_KEY}",
                "secretKey": "{SECRET_KEY}",
                "bucketName": "{BUCKET_NAME}",
                "folderPath", "{FOLDER_PATH}"
            }
        },
        "connectionSpec": {
            "id": "c85f9425-fb21-426c-ad0b-405e9bd8a46c",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.serviceUrl` | The [!DNL Oracle Object Storage] endpoint required for authentication. |
| `auth.params.accessKey` | The [!DNL Oracle Object Storage] access key ID required for authentication. |
| `auth.params.secretKey` | The [!DNL Oracle Object Storage] password required for authentication. |
| `auth.params.bucketName` | The allowed bucket name required if the user has restricted access. |
| `auth.params.folderPath` | The allowed folder path required if the user has restricted access. |
| `connectionSpec.id` | The [!DNL Oracle Object Storage] connection spec ID: `c85f9425-fb21-426c-ad0b-405e9bd8a46c`. |

**Response**

A successful response returns the connection ID of the newly created connection. This ID is required to explore your cloud storage data in the next tutorial.

```json
{
    "id": "4cb0c374-d3bb-4557-b139-5712880adc55",
    "etag": "\"6507cfd8-0000-0200-0000-5e18fc600000\""
}
```

## Next steps

By following this tutorial, you have created an [!DNL Oracle Object Storage] connection using the [!DNL Flow Service] API, and have obtained its unique connection ID. You can use this connection ID to [explore cloud storages using the Flow Service API](../../explore/cloud-storage.md).
