---
keywords: Experience Platform;home;popular topics;data access;python sdk;spark sdk;data access api;export;Export
solution: Experience Platform
title: Data Access API Guide
description: The Data Access API supports Adobe Experience Platform by providing developers with a RESTful interface focused on the discoverability and accessibility of ingested datasets within Experience Platform.
exl-id: 278ec322-dafa-4e3f-ae45-2d20459c5653
---
# Data Access API guide

The Data Access API supports Adobe Experience Platform by providing users with a RESTful interface focused on the discoverability and accessibility of ingested datasets within [!DNL Experience Platform].

![An diagram of how Data Access facilitates the discoverability and accessibility of ingested datasets within Experience Platform.](images/Data_Access_Experience_Platform.png)

## API specification reference

The Swagger API reference documentation can be found [here](https://developer.adobe.com/experience-platform-apis/references/data-access/).

## Terminology {#terminology}

The table provides a description of some terms commonly used throughout this document.

| Term  |  Description |
| ----- | ------------ |
| Dataset | A collection of data that includes a schema and fields. |
| Batch | A set of data collected over a period of time and processed together as a single unit. |

## Retrieve list of files within a batch {#retrieve-list-of-files-in-a-batch}

To retrieve a list of files belonging to a particular batch, use the batch identifier (batchID) with the Data Access API.

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

The `"data"` array contains a list of all files within the specified batch. Each file returned has its own unique ID (`{FILE_ID}`) contained within the `"dataSetFileId"` field. You can use this unique ID to access or download the file.

| Property | Description |
| -------- | ----------- |
| `data.dataSetFileId` | The file ID for each file in the specified batch. |
| `data._links.self.href` | The url to access the file. |

## Access and download files within a batch

To access specific details of a file, use a file identifier (`{FILE_ID}`) with the Data Access API, including its name, size in bytes, and a link to download.

The response contains a data array. Depending on whether the file pointed to by the ID is an individual file or a directory, the data array returned may contain a single entry or a list of files belonging to that directory. Each file element includes the details of the file.

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
| `data.name` | The name of the file (for example, `profiles.csv`). |
| `data.length` | The size of the file (in bytes). |
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
| `data.name` | The name of the file (for example, `profiles.csv`). |
| `data._links.self.href` | The URL to download the file. |

## Access the contents of a file {#access-file-contents}

You can also use the [!DNL Data Access] API to access the contents of a file. You can then download the contents to an external source.

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
| `{FILE_NAME}` | The full name of the file (for example, `profiles.csv`). |

**Response**

`Contents of the file`

## Additional code samples

For additional samples, refer to the [data access tutorial](tutorials/dataset-data.md).

## Subscribe to data ingestion events {#subscribe-to-data-ingestion-events}

You can subscribe to specific high-value events through the [Adobe Developer Console](https://developer.adobe.com/console/). For instance, you can subscribe to data ingestion events to be notified of potential delays and failures. See the tutorial on [subscribing to data ingestion notifications](../ingestion/quality/subscribe-events.md) for more information.
