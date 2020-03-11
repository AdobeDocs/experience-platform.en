---
keywords: Experience Platform;download scores;customer ai;popular topics
solution: Experience Platform
title: Downloading scores in Customer AI
topic: Downloading scores
---

# Downloading scores in Customer AI

Customer AI allows you to download scores in the parquet file format. This tutorial requires that you have read and finished the downloading Customer AI scores section in the [getting started](./getting-started.md) guide.

Additionally, in order to access scores for Customer AI, you need to have a service instance with a successful run status available. To create a new service instance visit the [Customer AI user interface guide](./user-guide.md). If you recently created a service instance and it is still training and scoring, please allow 24 hours for it to finish running.

This document serves as a guide for downloading scores for Customer AI. The following topics are covered:
- [Downloading scores at the individual level](#finding-your-dataset-id)
  - [Finding your dataset ID](#finding-your-dataset-id)
  - [Getting your batch ID](#getting-your-batch-id)
  - [Using your batch ID](#using-your-batch-id)
  - [Retrieving your files](#retrieving-your-files)
  - [Downloading your file data](#downloading-your-file-data)
- [Downloading segements configured through Customer AI](#exporting-audience-to-a-target-dataset)

Currently, there are two ways to download Customer AI scores:

1. If you want to download the scores at the individual level and/or do not have Profile enabled, start by navigating to [finding your dataset ID](#finding-your-dataset-id).
2. If you have Profile enabled and want to download segments that you have configured using Customer AI, please navigate to [exporting audience to a target dataset](#exporting-audience-to-a-target-dataset).



## Finding your dataset ID

Within your service instance for Customer AI insights, select *More actions* located in the top-right navigation next to *Edit*. Clicking **More actions** opens a dropdown that allows you to select *Access scores*.

![more actions](./images/insights/more-actions.png)

Click **Access scores**, a new dialog appears containing a link to the downloading scores documentation and the dataset ID for your current instance. Copy the dataset ID to your clipboard and proceed to the next step.

![Dataset ID](./images/download-scores/access-scores.png)

## Getting your batch ID

Using your dataset ID from the previous step, you need to make a call to the following API in order to retrieve a batch ID. Additional query parameters a used for this API call in order to return a single batch instead of a list of batches belonging to your organization. For more information on the types of query parameters available, visit the [API reference guide](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/data-access-api.yaml) for the Data Access API.

### API Format

```http
curl -X GET /batches?&dataSet={DATASET_ID}&orderBy=desc:created&limit=1
```
- `{DATASET_ID}`: The dataset ID available in the "Access Scores" dialog.

### REQUEST

```shell
curl -X GET 'https://platform.adobe.io/data/foundation/catalog/batches?dataSet=5cd9146b31dae914b75f654f&orderBy=desc:created&limit=1' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

### RESPONSE

A successful response returns a payload containing a score batch ID object, in this example the object is `"5e602f67c2f39715a87f46b1"`. Within the score batch ID object is a `"relatedObjects"` array. This array contains two objects, one has `"type": "batch"`, this object also has an ID. In the example response below, the batch ID is `"035e2520-5e69-11ea-b624-51evfeba55d1"`. Copy your batch ID to use in the next API call.

```json
{   
    "5e602f67c2f39715a87f46b1": {
        "imsOrg": "{IMS_ORG}",
        "relatedObjects": [
            {
                "id": "5c01a91863540e14cd3d0432",
                "type": "dataSet"
            },
            {
                "id": "035e2520-5e69-11ea-b624-51evfeba55d1",
                "type": "batch"
            }
        ],
        "status": "success",
        "metrics": {
            "recordsRead": 46721830,
            "recordsWritten": 46721830,
            "avgNumExecutorsPerTask": 33,
            "startTime": 1583362385336,
            "inputSizeInKb": 10242034,
            "endTime": 1583363197517
        },
        "errors": [],
        "created": 1550791457173,
        "createdClient": "{CLIENT_CREATED}",
        "createdUser": "{CREATED_BY}",
        "updatedUser": "{CREATED_BY}",
        "updated": 1550792060301,
        "version": "1.0.116"
    }
}
```

## Using your batch ID

Once you have your batch ID, you are able to make a new GET request to `/batches`. 

### API Format

```http
curl -X GET batches/{BATCH_ID}/files
```
* `{BATCH_ID}`: The batch ID that was retrieved in the previous step [getting your batch ID](#getting-your-batch-id).

### REQUEST

Using your own batch ID, make the following request.

```shell
curl -X GET 'https://platform.adobe.io/data/foundation/export/batches/035e2520-5e69-11ea-b624-51evfeba55d1/files' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```
### RESPONSE

A successful response returns a payload containing a `_links:` object. Within the `_links:` object is an `"href"` with a new API call as its value. Copy this value to proceed to the next step.

```json
{
    "data": [
        {
            "dataSetFileId": "035e2520-5e69-11ea-b624-51ecfeba55d0-1",
            "dataSetViewId": "5e3b2fe3fe4b9f18a8b7a3db",
            "version": "1.0.0",
            "created": "1583361894479",
            "updated": "1583361894479",
            "isValid": false,
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io:443/data/foundation/export/files/035e2520-5e69-11ea-b624-51ecfeba55d0-1"
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
## Retrieving your files

Using the `"href"` value you got in the previous step as an API call, make a GET request.

### API Format

```http
curl -X GET files/{dataSetFileId}
```

### REQUEST

```shell
curl -X GET 'https://platform.adobe.io:443/data/foundation/export/files/035e2520-5e69-11ea-b624-51ecfeba55d0-1' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

### RESPONSE

The response contains a data array that may have a single entry, or a list of files belonging to that directory. The example below contains a list of files and has been condensed for readability.

```json
{
    "data": [
        {
            "name": "part-00000-tid-7597930103898538622-a25f1890-efa9-40eb-a2cb-1b378e93d582-528-1-c000.snappy.parquet",
            "length": "16214531",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io:443/data/foundation/export/files/035e2520-5e69-11ea-b624-51ecfeba55d0-1?path=part-00000-tid-7597930103898538622-a25f1890-efa9-40eb-a2cb-1b378e93d582-528-1-c000.snappy.parquet"
                }
            }
        },
        {
            "name": "...",
            "length": "16235375",
            "_links": {
                "self": {
                    "href": "..."
                }
            }
        }
    ],
    "_page": {
        "limit": 100,
        "count": 100
    },
    "_links": {
        "next": {
            "href": "..."
        },
        "page": {
            "href": "...",
            "templated": true
        }
    }
}
```

To download a file, copy the `"href"` value for any file object in the `"data"` array, then proceed to the next step.

## Downloading your file data

To download your file data, make a GET request to the `"href"` value you copied in the previous step. This value is an API call.

>[!NOTE]
>If you are making this request directly in terminal or cmd line, you might be prompted to add an output after your request headers. The following request example uses `--output {FILENAME.FILETYPE}`.

### API Format

```http
curl -X GET files/{dataSetFileId}
```

### Request

>[!NOTE]
>Make sure you are in the correct directory or folder you want your file saved to before you make the GET request.

```shell
curl -X GET 'https://platform.adobe.io:443/data/foundation/export/files/035e2520-5e69-11ea-b624-51ecfeba55d0-1?path=part-00000-tid-7597930103898538622-a25f1890-efa9-40eb-a2cb-1b378e93d582-528-1-c000.snappy.parquet' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -O 'filename.parquet'
```

### Response

The response downloads the file you requested in the directory you are currently in.

![Terminal](./images/download-scores/response.png)

## Exporting audience to a target dataset

An alternative way to download your score data is by exporting your audience to a dataset. After a segmentation job has successfully completed (the value of the `status` attribute is "SUCCEEDED"), you can export your audience to a dataset where it can be accessed and acted upon. 

>[!IMPORTANT]
>In order to utilize this method of exporting, Profile needs to be enabled.

The [evaluate a segment guide]() under the [export a segment]() section covers the steps that are required to export an audience dataset. The export a segment section outlines and provides examples for the following:

- **Create a target dataset:** Create the dataset to hold audience members.
- **Generate audience profiles in the dataset:** Populate the dataset with XDM Individual Profiles based on the results of a segment job.
- **Monitor export progress:** Check the current progress of the export process.
- **Read audience data:** Retrieve the resulting XDM Individual Profiles representing the members of your audience.
