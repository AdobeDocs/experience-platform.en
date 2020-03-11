---
keywords: Experience Platform;download scores;customer ai;popular topics
solution: Experience Platform
title: Downloading scores in Customer AI
topic: Downloading scores
---

# Downloading scores in Customer AI

Customer AI allows you to download scores in the parquet file format. This tutorial requires that you have read and finished the downloading Customer AI scores section in the [getting started](./getting-started.md) guide in order to have the required headers to make API calls. 

Additionally, in order to access scores for Customer AI, you need to have a service instance with a successful run status available. To create a new service instance visit the [Customer AI user interface guide](./user-guide.md). If you recently created a service instance and it is still training and scoring, please allow 24 hours for it to finish running.

## Finding your dataset ID

Within your service instance for Customer AI insights, select the *More actions* button located in the top-right navigation next to *Edit*. Clicking **More actions** opens a dropdown that allows you to select *Access scores*.

![more actions](./images/insights/more-actions.png)

Click **Access scores**, a new dialog appears containing a link to this documentation and the dataset ID for your current instance. Copy the dataset ID, you need the dataset ID to make the first API call in the next step.

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

To download a file, copy the `"href"` value for any file object in the `"data"` array, then proceed to the final step.

## Download your file data

To download your file data, make a GET request to the `"href"` value you copied in the previous step.

>[!NOTE]
>If you are making this request directly in terminal or cmd line, you might be prompted to add an output after your request headers. The following request example uses `--output {FILENAME.FILETYPE}`.

### API Format

```http
curl -X GET files/{dataSetFileId}
```

### REQUEST

>[!NOTE]
>Make sure you are in the correct directory or folder you want your file saved to.

```shell
curl -X GET 'https://platform.adobe.io:443/data/foundation/export/files/035e2520-5e69-11ea-b624-51ecfeba55d0-1?path=part-00000-tid-7597930103898538622-a25f1890-efa9-40eb-a2cb-1b378e93d582-528-1-c000.snappy.parquet' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -O 'filename.parquet'
```

### RESPONSE

The response downloads the file you requested in the directory you are currently in.

![Terminal](./images/download-scores/response.png)
