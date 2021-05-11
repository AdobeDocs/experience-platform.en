---
keywords: Experience Platform;home;popular topics;Oracle Object Storage;oracle object storage
solution: Experience Platform
title: Create an Oracle Object Storage Source Connection Using the Flow Service API
topic-legacy: overview
type: Tutorial
description: Learn how to connect Adobe Experience Platform to Oracle Object Storage using the Flow Service API.
exl-id: a85faa44-7d5a-42a2-9052-af01744e13c9
---
# Create an [!DNL Oracle Object Storage] source connection using the [!DNL Flow Service] API

This tutorial uses the [[!DNL Flow Service] API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/flow-service.yaml) to walk you through the steps to connect Adobe Experience Platform to [!DNL Oracle Object Storage].

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

For more information on how to obtain these values, refer to the [Oracle Object Storage authentication guide](https://docs.oracle.com/en-us/iaas/Content/Identity/Concepts/usercredentials.htm#User_Credentials).

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

### Gather values for required headers

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {IMS_ORG}`

All resources in [!DNL Experience Platform], including those belonging to [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

* `x-sandbox-name: {SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

* `Content-Type: application/json`

## Create a connection

A connection specifies a source and contains your credentials for that source. Only one connection is required per [!DNL Oracle Object Storage] account as it can be used to create multiple source connectors to bring in different data.

**API format**

```http
POST /connections
```

**Request**

In order to create a [!DNL Oracle Object Storage] connection, its unique connection spec ID must be provided as part of the POST request. The connection spec ID for [!DNL Oracle Object Storage] is `c85f9425-fb21-426c-ad0b-405e9bd8a46c`.

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
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
