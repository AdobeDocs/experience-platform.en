---
keywords: Experience Platform;home;popular topics;cloud storage;Cloud storage
title: Explore a Cloud Storage Folders Using the Flow Service API
description: This tutorial uses the Flow Service API to explore a third-party cloud storage system.
exl-id: ba1a9bff-43a6-44fb-a4e7-e6a45b7eeebd
---
# Explore your cloud storage folders using the [!DNL Flow Service] API

This tutorial provides steps on how to explore and preview the structure and contents of your cloud storage using the [[!DNL Flow Service]](https://www.adobe.io/experience-platform-apis/references/flow-service/) API.

>[!NOTE]
>
>In order to explore your cloud storage, you must already have a valid base connection ID for a cloud storage source. If you do not have this ID, then see the [sources overview](../../../home.md#cloud-storage) for a list of cloud storage sources that you can create a base connection with.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../landing/api-guide.md).

## Explore your cloud storage folders

You can retrieve information on the structure of your cloud storage folders by making a GET request to the [!DNL Flow Service] API while providing the base connection ID of your source.

When performing GET requests to explore your cloud storage, you must include the query parameters that are listed in the table below:

| Parameter | Description |
| --------- | ----------- |
| `objectType` | The type of object that you wish to explore. Set this value as either: <ul><li>`folder`: Explore a specific directory</li><li>`root`: Explore the root directory.</li></ul> |
| `object` | This parameter is required only when viewing a specific directory. Its value represents the path of the directory you wish to explore. |


**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=root
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=folder&object={PATH}
```

| Parameter | Description |
| --- | --- |
| `{BASE_CONNECTION_ID}` | The base connection ID of your cloud storage source. |
| `{PATH}` | The path of a directory. |

**Request**

```shell
curl -X GET \
  'http://platform.adobe.io/data/foundation/flowservice/connections/dc3c0646-5e30-47be-a1ce-d162cb8f1f07/explore?objectType=folder&object=root' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns an array of files and folders found within the queried directory. Take note of the `path` property of the file you wish you upload, as you are required to provide it in the next step to inspect its structure.

```json
[
    {
        "type": "file",
        "name": "account.csv",
        "path": "/test-connectors/testFolder-fileIngestion/account.csv",
        "canPreview": true,
        "canFetchSchema": true
    },
    {
        "type": "file",
        "name": "profileData.json",
        "path": "/test-connectors/testFolder-fileIngestion/profileData.json",
        "canPreview": true,
        "canFetchSchema": true
    },
    {
        "type": "file",
        "name": "sampleprofile--3.parquet",
        "path": "/test-connectors/testFolder-fileIngestion/sampleprofile--3.parquet",
        "canPreview": true,
        "canFetchSchema": true
    }
]
```

## Inspect the structure of a file

To inspect the structure of data file from your cloud storage, perform a GET request while providing the file's path and type as a query parameter.

You can inspect the structure of a data file from your cloud storage source by performing a GET request while providing the file's path and type. You can also inspect different file types such as CSV, TSV, or compressed JSON and delimited files by specifying their file types as part of the query parameters.

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=file&object={FILE_PATH}&fileType={FILE_TYPE}&{QUERY_PARAMS}&preview=true
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=file&object={FILE_PATH}&preview=true&fileType=delimited&columnDelimiter=\t
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=file&object={FILE_PATH}&preview=true&fileType=delimited&compressionType=gzip;
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=FILE&object={FILE_PATH}&preview=true&ileType=delimited&encoding=ISO-8859-1;
```

| Parameter | Description |
| --------- | ----------- |
| `{BASE_CONNECTION_ID}` | The connection ID of your cloud storage source connector. |
| `{FILE_PATH}` | The path to the file you want to inspect. |
| `{FILE_TYPE}` | The type of the file. Supported file types include:<ul><li><code>DELIMITED</code>: Delimiter-separated value. DSV files must be comma-separated.</li><li><code>JSON</code>: JavaScript Object Notation. JSON files must be XDM compliant</li><li><code>PARQUET</code>: Apache Parquet. Parquet files must be XDM compliant.</li></ul> |
| `{QUERY_PARAMS}` | Optional query parameters that can be used to filter results. See the section on [query parameters](#query) for more information. |

**Request**

```shell
curl -X GET \
    'http://platform.adobe.io/data/foundation/flowservice/connections/{BASE_CONNECTION_ID}/explore?objectType=file&object=/aep-bootcamp/Adobe%20Pets%20Customer%2020190801%20EXP.json&fileType=json&preview=true' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
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

## Using query parameters {#query}

The [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/) supports the use of query parameters to preview and inspect different file types.

| Parameter | Description |
| --------- | ----------- |
| `columnDelimiter` | The single character value you specified as a column delimiter to inspect CSV or TSV files. If the parameter is unprovided, the value defaults to a comma `(,)`. |
| `compressionType` | A required query parameter for previewing a compressed delimited or JSON file. The supported compressed files are: <ul><li>`bzip2`</li><li>`gzip`</li><li>`deflate`</li><li>`zipDeflate`</li><li>`tarGzip`</li><li>`tar`</li></ul> |
| `encoding` | Defines which encoding type to use when rendering preview. The supported encoding types are: `UTF-8` and `ISO-8859-1`. **Note**: The `encoding` parameter is only available when ingesting delimited CSV files. Other file types will be ingested with the default encoding, `UTF-8`. |

## Next steps

By following this tutorial, you have explored your cloud storage system, found the path of the file you wish to bring in to [!DNL Platform], and viewed its structure. You can use this information in the next tutorial to [collect data from your cloud storage and bring it into Platform](../collect/cloud-storage.md).
