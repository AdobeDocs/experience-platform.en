---
keywords: Experience Platform;home;popular topics;data access;data access api;query data access
solution: Experience Platform
title: View Dataset Data Using the Data Access API
type: Tutorial
description: Learn how to locate, access, and download data stored within a dataset using the Data Access API in Adobe Experience Platform. This document introduces some of the unique features of the Data Access API, such as paging and partial downloads.
exl-id: 1c1e5549-d085-41d5-b2c8-990876000f08
---
# View dataset data using [!DNL Data Access] API

Use this step-by-step tutorial to learn how to locate, access, and download data stored within a dataset using the [!DNL Data Access] API in Adobe Experience Platform. This document introduces some of the unique features of the [!DNL Data Access] API, such as paging and partial downloads.

## Getting started

This tutorial requires a working understanding on how to create and populate a dataset. See the [dataset creation tutorial](../../catalog/datasets/create.md) for more information.

The following sections provide additional information that you need to know to successfully make calls to the Platform APIs.

### Reading sample API calls {#reading-sample-api-calls}

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

To make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](../../landing/api-authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{ORG_ID}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation takes place in:

- x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

- Content-Type: application/json

## Sequence diagram

This tutorial follows the steps outlined in the sequence diagram below, highlighting the core functionality of the [!DNL Data Access] API.

![A sequence diagram of the Data Access API core functionality.](../images/sequence_diagram.png)

To retrieve information regarding batches and files, use the [!DNL Catalog] API. To access and download these files over HTTP as either full or partial downloads, depending on the size of the file, use the [!DNL Data Access] API.

## Locate the data

Before you can begin to use the [!DNL Data Access] API, you must identify the location of the data that you want to access. In the [!DNL Catalog] API, there are two endpoints that you can use to browse an organization's metadata and retrieve the ID of a batch or file that you want to access:

- `GET /batches`: Returns a list of batches under your organization
- `GET /dataSetFiles`: Returns a list of files under your organization

For a comprehensive list of endpoints in the [!DNL Catalog] API, refer to the [API Reference](https://developer.adobe.com/experience-platform-apis/references/catalog/).

## Retrieve a list of batches under your organization

Using the [!DNL Catalog] API, you can return a list of batches under your organization:

**API format**

```http
GET /batches
```

**Request**

```shell
curl -X GET 'https://platform.adobe.io/data/foundation/catalog/batches/' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

The response includes an object that lists of all of the batches related to the organization, with each top-level value representing a batch. The individual batch objects contain the details for that specific batch. The response below has been minimized for space.

```json
{
    "{BATCH_ID_1}": {
        "imsOrg": "{ORG_ID}",
        "created": 1516640135526,
        "createdClient": "{CREATED_CLIENT}",
        "createdUser": "{CREATED_BY}",
        "updatedUser": "{CREATED_BY}",
        "updated": 1516640135526,
        "status": "processing",
        "version": "1.0.0",
        "availableDates": {}
    },
    "{BATCH_ID_2}": {
    ...
    }
}
```

### Filter the list of batches {#filter-batches-list}

Filters are often required to find a particular batch to retrieve relevant data for a particular use case. Parameters can be added to a `GET /batches` request to filter the returned response. The request below returns all batches created after a specified time, within a particular data set, sorted by when they were created.

**API format**

```http
GET /batches?createdAfter={START_TIMESTAMP}&dataSet={DATASET_ID}&sort={SORT_BY}
```

| Property | Description | 
| -------- | ----------- |
| `{START_TIMESTAMP}` | The start timestamp in milliseconds (for example, 1514836799000). |
| `{DATASET_ID}` | The dataset identifier. |
| `{SORT_BY}` | Sorts the response by the value provided. For example, `desc:created` sorts the objects by creation date in descending order. |

**Request**

```shell
curl -X GET 'https://platform.adobe.io/data/foundation/catalog/batches?createdAfter=1521053542579&dataSet=5cd9146b21dae914b71f654f&orderBy=desc:created' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

```json
{   "{BATCH_ID_3}": {
        "imsOrg": "{ORG_ID}",
        "relatedObjects": [
            {
                "id": "5c01a91863540f14cd3d0439",
                "type": "dataSet"
            },
            {
                "id": "00998255b4a148a2bfd4804c2f327324",
                "type": "batch"
            }
        ],
        "status": "success",
        "metrics": {
            "recordsFailed": 0,
            "recordsWritten": 2,
            "startTime": 1550791835809,
            "endTime": 1550791994636
        },
        "errors": [],
        "created": 1550791457173,
        "createdClient": "{CLIENT_CREATED}",
        "createdUser": "{CREATED_BY}",
        "updatedUser": "{CREATED_BY}",
        "updated": 1550792060301,
        "version": "1.0.116"
    },
    "{BATCH_ID_4}": {
        "imsOrg": "{ORG_ID}",
        "status": "success",
        "relatedObjects": [
            {
                "type": "batch",
                "id": "00aff31a9ae84a169d69b886cc63c063"
            },
            {
                "type": "dataSet",
                "id": "5bfde8c5905c5a000082857d"
            }
        ],
        "metrics": {
            "startTime": 1544571333876,
            "endTime": 1544571358291,
            "recordsRead": 4,
            "recordsWritten": 4
        },
        "errors": [],
        "created": 1544571077325,
        "createdClient": "{CLIENT_CREATED}",
        "createdUser": "{CREATED_BY}",
        "updatedUser": "{CREATED_BY}",
        "updated": 1544571368776,
        "version": "1.0.3"
    }
}
```

A full list of parameters and filters can be found in the [Catalog API reference](https://developer.adobe.com/experience-platform-apis/references/catalog/).

## Retrieve a list of all files belonging to a particular batch

Now that you have the ID of the batch that you want to access, you can use the [!DNL Data Access] API to get a list of files belonging to that batch.

**API format**

```http
GET /batches/{BATCH_ID}/files
```

| Property | Description |
| -------- | ----------- |
| `{BATCH_ID}` | Batch identifier of the batch that you are trying to access. |

**Request**

```shell
curl -X GET 'https://platform.adobe.io/data/foundation/export/batches/5c6f332168966814cd81d3d3/files' \
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
            "dataSetFileId": "8dcedb36-1cb2-4496-9a38-7b2041114b56-1",
            "dataSetViewId": "5cc6a9b60d4a5914b7940a7f",
            "version": "1.0.0",
            "created": "1558522305708",
            "updated": "1558522305708",
            "isValid": false,
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io:443/data/foundation/export/files/8dcedb36-1cb2-4496-9a38-7b2041114b56-1"
                }
            }
        }
    ],
    "_page": {
        "limit": 100,
        "count": 1
    }
}
}
```

| Property | Description |
| -------- | ----------- |
| `data._links.self.href` | The URL to access this file. |

The response contains a data array that lists all the files within the specified batch. Files are referenced by their file ID, which is found under the `dataSetFileId` field.

## Access a file using a file ID {#access-file-with-file-id}

Once you have a unique file ID, you can use the [!DNL Data Access] API to access the specific details about the file, including its name, size in bytes, and a link to download it.

**API format**

```http
GET /files/{FILE_ID}
```

| Property | Description |
| -------- | ----------- |
| `{FILE_ID}` | The identifier of the file you want to access. |

**Request**

```shell
curl -X GET 'https://platform.adobe.io/data/foundation/export/files/8dcedb36-1cb2-4496-9a38-7b2041114b56-1' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

Depending on whether the file ID points to an individual file or a directory, the data array returned may contain a single entry or a list of files belonging to that directory. Each file element contains details such as the file's name, size in bytes, and a link to download the file.

**Case 1: File ID points to a single file**

**Response**

```json
{
    "data": [
        {
            "name": "{FILE_NAME}.parquet",
            "length": "249058",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/export/files/{FILE_ID_1}?path={FILE_NAME_1}.parquet"
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
| `{FILE_NAME}.parquet` | The name of the file. |
| `_links.self.href` | The URL to download the file. |

**Case 2: File ID points to a directory**

**Response**

```json
{
    "data": [
        {
            "dataSetFileId": "{FILE_ID_2}",
            "dataSetViewId": "460590b01ba38afd1",
            "version": "1.0.0",
            "created": "150151267347",
            "updated": "150151267347",
            "isValid": true,
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/export/files/{FILE_ID_2}"
                }
            }
        },
        {
            "dataSetFileId": "{FILE_ID_3}",
            "dataSetViewId": "460590b01ba38afd1",
            "version": "1.0.0",
            "created": "150151267685",
            "updated": "150151267685",
            "isValid": true,
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/export/files/{FILE_ID_3}"
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

| Property | Description |
| -------- | ----------- | 
| `data._links.self.href` | The URL to download the associated file. |

This response returns a directory containing two separate files, with IDs `{FILE_ID_2}` and `{FILE_ID_3}`. In this scenario, you must follow the URL of each file to access the file.

## Retrieve the metadata of a file

You can retrieve the metadata of a file by making a HEAD request. This returns the file's metadata headers, including its size in bytes and file format.

**API format**

```http
HEAD /files/{FILE_ID}?path={FILE_NAME}
```

| Property | Description |
| -------- | ----------- |
| `{FILE_ID}` | The file's identifier. |
| `{FILE_NAME}` | The file name (for example, profiles.parquet) |

**Request**

```shell
curl -I 'https://platform.adobe.io/data/foundation/export/files/8dcedb36-1cb2-4496-9a38-7b2041114b56-1?path=profiles.parquet' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

The response headers contain the metadata of the queried file, including:

- `Content-Length`: Indicates the size of the payload in bytes
- `Content-Type`: Indicates the type of file.

## Access the contents of a file

You can also access the contents of a file using the [!DNL Data Access] API.

**API format**

```shell
GET /files/{FILE_ID}?path={FILE_NAME}
```

| Property | Description |
| -------- | ----------- |
| `{FILE_ID}` | The file's identifier. |
| `{FILE_NAME}` | The file name (for example, profiles.parquet). |

**Request**

```shell
curl -X GET 'https://platform.adobe.io/data/foundation/export/files/8dcedb36-1cb2-4496-9a38-7b2041114b56-1?path=profiles.parquet' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the file's contents.

## Download partial contents of a file {#download-partial-file-contents}

To download a specific range of bytes from a file, specify a range header during a `GET /files/{FILE_ID}` request to the [!DNL Data Access] API. If the range is not specified, the API downloads the entire file by default.

The HEAD example in the [previous section](#retrieve-the-metadata-of-a-file) gives the size of a specific file in bytes.

**API format**

```http
GET /files/{FILE_ID}?path={FILE_NAME}
```

| Property | Description |
| -------- | ----------- |
| `{FILE_ID} `| The file's identifier. |
| `{FILE_NAME}` | The file name (for example, profiles.parquet) |

**Request**

```shell
curl -X GET 'https://platform.adobe.io/data/foundation/export/files/8dcedb36-1cb2-4496-9a38-7b2041114b56-1?path=profiles.parquet' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Range: bytes=0-99'
```

| Property | Description |
| -------- | ----------- | 
| `Range: bytes=0-99` | Specifies the range of bytes to download. If this is not specified, the API downloads the entire file. In this example, the first 100 bytes are downloaded. |

**Response**

The response body includes the first 100 bytes of the file (as specified by the "Range" header in the request) along with HTTP Status 206 (Partial Contents). The response also includes the following headers:

- Content-Length: 100 (the number of bytes returned)
- Content-type: application/parquet (a Parquet file was requested, therefore the response content type is `parquet`)
- Content-Range: bytes 0-99/249058 (the range requested (0-99) out of the total number of bytes (249058))

## Configure API response pagination {#configure-response-pagination}

Responses within the [!DNL Data Access] API are paginated. By default, the maximum number of entries per page is 100. You can modify the default behavior with paging parameters.

- `limit`: You can specify the number of entries per page according to your requirements using the "limit" parameter.
- `start`: The offset can be set by the "start" query parameter. 
- `&`: You can use an ampersand to combine multiple parameters in a single call.

**API format**

```http
GET /batches/{BATCH_ID}/files?start={OFFSET}
GET /batches/{BATCH_ID}/files?limit={LIMIT}
GET /batches/{BATCH_ID}/files?start={OFFSET}&limit={LIMIT}
```

| Property | Description | 
| -------- | ----------- |
| `{BATCH_ID}` | Batch identifier of the batch that you are trying to access. |
| `{OFFSET}` | The specified index to start the result array (for example, start=0) |
| `{LIMIT}` | Controls how many results are returned in the result array (for example, limit=1) |

**Request**

```shell
curl -X GET 'https://platform.adobe.io/data/foundation/export/batches/5c102cac7c7ebc14cd6b098e/files?start=0&limit=1' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**:

The response contains a `"data"` array with a single element, as specified by the request parameter `limit=1`. This element is an object containing the details of the first available file, as specified by the `start=0` parameter in the request (remember that in zero-based numbering, the first element is "0").

The `_links.next.href` value contains the link to the next page of responses, where you can see that the `start` parameter has advanced to `start=1`.

```json
{
    "data": [
        {
            "dataSetFileId": "{FILE_ID_1}",
            "dataSetViewId": "5a9f264c2aa0cf01da4d82fa",
            "version": "1.0.0",
            "created": "1521053793635",
            "updated": "1521053793635",
            "isValid": false,
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/export/files/{FILE_ID_1}"
                }
            }
        }
    ],
    "_page": {
        "limit": 1,
        "count": 6
    },
    "_links": {
        "next": {
            "href": "https://platform.adobe.io/data/foundation/export/batches/5c102cac7c7ebc14cd6b098e/files?start=1&limit=1"
        },
        "page": {
            "href": "https://platform.adobe.io/data/foundation/export/batches/5c102cac7c7ebc14cd6b098e/files?start=0&limit=1",
            "templated": true
        }
    }
}
```
