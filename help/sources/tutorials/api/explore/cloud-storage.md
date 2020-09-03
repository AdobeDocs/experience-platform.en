---
keywords: Experience Platform;home;popular topics;cloud storage;Cloud storage
solution: Experience Platform
title: Explore a cloud storage system using the Flow Service API
topic: overview
description: This tutorial uses the Flow Service API to explore a third party cloud storage system.
---

# Explore a cloud storage system using the [!DNL Flow Service] API

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the [!DNL Flow Service] API to explore a third party cloud storage system.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

*   [Sources](../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
*   [Sandboxes](../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to a cloud storage system using the [!DNL Flow Service] API.

### Obtain a base connection

In order to explore a third party cloud storage using [!DNL Platform] APIs, you must possess a valid base connection ID. If you do not already have a base connection for the storage you wish to work with, you can create one through the following tutorials:

*   [Amazon S3](../create/cloud-storage/s3.md)
*   [Azure Blob](../create/cloud-storage/blob.md)
*   [Azure Data Lake Storage Gen2](../create/cloud-storage/adls-gen2.md)
*   [Google Cloud Store](../create/cloud-storage/google.md)
*   [SFTP](../create/cloud-storage/sftp.md)

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](../../../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

*   Authorization: Bearer `{ACCESS_TOKEN}`
*   x-api-key: `{API_KEY}`
*   x-gw-ims-org-id: `{IMS_ORG}`

All resources in [!DNL Experience Platform], including those belonging to [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

*   x-sandbox-name: `{SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

*   Content-Type: `application/json`

## Explore your cloud storage

Using the base connection for your cloud storage, you can explore files and directories by performing GET requests. When performing GET requests to explore your cloud storage, you must include the query parameters that are listed in the table below:

| Parameter | Description |
| --------- | ----------- |
| `objectType` | The type of object that you wish to explore. Set this value as either: <ul><li>`folder`: Explore a specific directory</li><li>`root`: Explore the root directory.</li></ul> |
| `object` | This parameter is required only when viewing a specific directory. Its value represents the path of the directory you wish to explore. |

Use the following call to find the path of the file you wish to bring into [!DNL Platform]:

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=root
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=folder&object={PATH}
```

| Parameter | Description |
| --- | --- |
| `{BASE_CONNECTION_ID}` | The ID of a cloud storage base connection. |
| `{PATH}` | The path of a directory. |

**Request**

```shell
curl -X GET \
    'http://platform.adobe.io/data/foundation/flowservice/connections/{BASE_CONNECTION_ID}/explore?objectType=folder&object=/some/path/' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns an array of files and folders found within the queried directory. Take note of the `path` property of the file you wish you upload, as you are required to provide it in the next step to inspect its structure.

```json
[
    {
        "type": "File",
        "name": "data.csv",
        "path": "/some/path/data.csv"
    },
    {
        "type": "Folder",
        "name": "foobar",
        "path": "/some/path/foobar"
    }
]
```

## Inspect the structure of a file

To inspect the structure of data file from your cloud storage, perform a GET request while providing the file's path as a query parameter.

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=file&object={FILE_PATH}&fileType={FILE_TYPE}
```

| Parameter | Description |
| --- | --- |
| `{BASE_CONNECTION_ID}` | The ID of a cloud storage base connection. |
| `{FILE_PATH}` | Path to a file. |
| `{FILE_TYPE}` | The type of the file. Supported file types include:<ul><li><code>DELIMITED</code>: Delimiter-separated value. DSV files must be comma-separated.</li><li><code>JSON</code>: JavaScript Object Notation. JSON files must be XDM compliant</li><li><code>PARQUET</code>: Apache Parquet. Parquet files must be XDM compliant.</li></ul> |

**Request**

```shell
curl -X GET \
    'http://platform.adobe.io/data/foundation/flowservice/connections/{BASE_CONNECTION_ID}/explore?objectType=file&object=/some/path/data.csv&fileType=DELIMITED' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the structure of the queried file including table names and data types.

```json
[
    {
        "name": "Id",
        "type": "String"
    },
    {
        "name": "FirstName",
        "type": "String"
    },
    {
        "name": "LastName",
        "type": "String"
    },
    {
        "name": "Email",
        "type": "String"
    },
    {
        "name": "Phone",
        "type": "String"
    }
]
```

## Next steps

By following this tutorial, you have explored your cloud storage system, found the path of the file you wish to bring in to [!DNL Platform], and viewed its structure. You can use this information in the next tutorial to [collect data from your cloud storage and bring it into Platform](../collect/cloud-storage.md).