---
keywords: Experience Platform;home;popular topics;data access;python sdk;spark sdk;data access api;export;Export
solution: Experience Platform
title: Data Access API Guide
topic-legacy: developer guide
description: The Data Access API supports Adobe Experience Platform by providing developers with a RESTful interface focused on the discoverability and accessibility of ingested datasets within Experience Platform.
exl-id: 278ec322-dafa-4e3f-ae45-2d20459c5653
---
# Data Access API guide

The Data Access API supports Adobe Experience Platform by providing users with a RESTful interface focused on the discoverability and accessibility of ingested datasets within [!DNL Experience Platform].

![Data Access on Experience Platform](images/Data_Access_Experience_Platform.png)

## API specification reference

The Swagger API reference documentation can be found [here](https://www.adobe.io/experience-platform-apis/references/data-access/).

## Terminology

A description of some commonly used terms throughout this document.

| Term  |  Description |
| ----- | ------------ |
| Dataset | A collection of data that includes schema and fields. |
| Batch | A set of data collected over a period of time and processed together as a single unit. |

## Retrieve list of files within a batch

By using a batch identifier (batchID), the Data Access API can retrieve a list of files belonging to that particular batch.

**API format**

```http
GET /batches/{BATCH_ID}/files
```

| Property | Description |
| -------- | ----------- |
| `{BATCH_ID}` | The ID of the specified batch. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/export/batches/{BATCH_ID}/files \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

```json
{
  "data": [
    {
      "dataSetFileId": "{FILE_ID_1}",
      "dataSetViewId": "string",
      "version": "1.0.0",
      "created": "string",
      "updated": "string",
      "isValid": true,
      "_links": {
        "self": {
          "href": "https://platform.adobe.io/data/foundation/export/files/{FILE_ID_1}"
        }
      }
    },
    {
      "dataSetFileId": "{FILE_ID_2}",
      "dataSetViewId": "string",
      "version": "1.0.0",
      "created": "string",
      "updated": "string",
      "isValid": true,
      "_links": {
        "self": {
          "href": "https://platform.adobe.io/data/foundation/export/files/{FILE_ID_2}"
        }
      }
    },
  ],
  "_page": {
    "limit": 100,
    "count": 1
  }
}
```

The `"data"` array contains a list of all files within the specified batch. Each file returned has its own unique ID (`{FILE_ID}`) contained within the `"dataSetFileId"` field. This unique ID can then be used to access or download the file.

| Property | Description |
| -------- | ----------- |
| `data.dataSetFileId` | The file ID for each file in the specified batch. |
| `data._links.self.href` | The url to access the file. |

## Access and download files within a batch

By using a file identifier (`{FILE_ID}`), the Data Access API can be used to access specific details of a file, including its name, size in bytes, and a link to download.

The response will contain a data array. Depending on whether the file pointed to by the ID is an individual file or a directory, the data array returned may contain a single entry or a list of files belonging to that directory. Each file element will include the details of the file.

**API format**

```http
GET /files/{FILE_ID}
```

| Property | Description |
| -------- | ----------- |
| `{FILE_ID}` | Equal to the `"dataSetFileId"`, the ID of the file to be accessed. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/export/files/{FILE_ID} \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Single file response**

```JSON
{
  "data": [
    {
      "name": "{FILE_NAME}",
      "length": "{LENGTH}",
      "_links": {
        "self": {
          "href": "https://platform.adobe.io/data/foundation/export/files/{FILE_ID}?path={FILE_NAME}"
        }
      }
    }
  ],
  "_page": {
    "limit": 100,
    "count": 1
  }
}
```

| Property | Description |
| -------- | ----------- |
| `data.name` | Name of the file (e.g. profiles.csv). |
| `data.length` | Size of the file (in bytes). |
| `data._links.self.href` | The URL to download the file. |

**Directory response**

```JSON
{
  "data": [
    {
      "dataSetFileId": "{FILE_ID_1}",
      "dataSetViewId": "string",
      "version": "1.0.0",
      "created": "string",
      "updated": "string",
      "isValid": true,
      "_links": {
        "self": {
          "href": "https://platform.adobe.io/data/foundation/export/files/{FILE_ID_1}"
        }
      }
    },
    {
      "dataSetFileId": "{FILE_ID_2}",
      "dataSetViewId": "string",
      "version": "1.0.0",
      "created": "string",
      "updated": "string",
      "isValid": true,
      "_links": {
        "self": {
          "href": "https://platform.adobe.io/data/foundation/export/files/{FILE_ID_2}"
        }
      }
    }
  ],
  "_page": {
    "limit": 100,
    "count": 2
  }
}
```

When a directory is returned, it contains an array of all files within the directory. 

| Property | Description |
| -------- | ----------- |
| `data.name` | Name of the file (e.g. profiles.csv). |
| `data._links.self.href` | The URL to download the file. |

## Access the contents of a file

The [!DNL Data Access] API can also be used to access the contents of a file. This can then be used to download the contents to an external source.

**API format**

```http
GET /files/{dataSetFileId}?path={FILE_NAME}
```

| Property | Description |
| -------- | ----------- |
| `{FILE_NAME}` | The name of the file you are trying to access. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/export/files/{FILE_ID}?path={FILE_NAME} \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

| Property | Description |
| -------- | ----------- |
| `{FILE_ID}` | The ID of the file within a dataset. |
| `{FILE_NAME}` | The full name of the file (e.g. profiles.csv). |

**Response**

`Contents of the file`

## Additional code samples

For additional samples, please refer to the [data access tutorial](tutorials/dataset-data.md).

## Subscribe to data ingestion events

[!DNL Platform] makes specific high-value events available for subscription through the [Adobe Developer Console](https://www.adobe.com/go/devs_console_ui). For instance, you can subscribe to data ingestion events to be notified of potential delays and failures. See the tutorial on [subscribing to data ingestion notifications](../ingestion/quality/subscribe-events.md) for more information.
