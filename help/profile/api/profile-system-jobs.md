---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
title: Profile System Jobs API Endpoint
type: Documentation
description: Adobe Experience Platform enables you to delete a dataset or batch from the Profile store in order to remove Real-Time Customer Profile data that is no longer needed or was added in error. This requires using the Profile API to create a Profile system job, or delete request.
role: Developer
exl-id: 75ddbf2f-9a54-424d-8569-d6737e9a590e
TQID: https://experienceleague.adobe.com/-x1wYB0ISg-uOuBi9VvGIIN-UnE0-7VzabSBTMB0LCo
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
---
# Profile system jobs endpoint (Delete requests)

Adobe Experience Platform enables you to ingest data from multiple sources and build robust profiles for individual customers. Data ingested into [!DNL Experience Platform] is stored in the [!DNL Data Lake], and if the datasets have been enabled for Profile, that data is stored in the [!DNL Real-Time Customer Profile] data store as well. Occasionally it may be necessary to delete profile data associated with a dataset from the Profile store in order to remove data that is no longer needed or was added in error. This requires using the [!DNL Real-Time Customer Profile] API to create a [!DNL Profile] system job, or "delete request".

>[!NOTE]
>
>If you are trying to delete datasets or batches from the [!DNL Data Lake], please visit the [Catalog Service overview](../../catalog/home.md) for more information.

## Getting started

The API endpoint used in this guide is part of the [[!DNL Real-Time Customer Profile API]](https://developer.adobe.com/experience-platform-apis/references/profile). Before continuing, please review the [getting started guide](getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## View delete requests {#view}

A delete request is a long-running, asynchronous process, meaning that your organization may be running multiple delete requests at once. In order to view all delete requests that your organization is currently running, you can perform a GET request to the `/system/jobs` endpoint. 

You may also use optional query parameters to filter the list of delete requests returned in the response. To use multiple parameters, separate each parameter using an ampersand (`&`).

**API format**

When using this endpoint, the first 100 system jobs are returned in descending order, based on their creation date.

```http
GET /system/jobs
GET /system/jobs?{QUERY_PARAMETERS}
```

| Parameter | Description | Example |
| --------- | ----------- | ------- |
| `start` | Determines the starting page of the returned result set. The page number is 0-based, which means that `start=0` will return results starting from 0. | `start=4` |
| `limit` | The number of results returned per page. | `limit=10` |

For example, if you had the query parameter of `?start=1&limit=10`, the response will return records 10-19.

**Request**

+++ A sample request to view your system jobs.

```shell
curl -X GET https://platform.adobe.io/data/core/ups/system/jobs \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

+++

**Response**

A successful response returns page information and a children array that contains an object for each of the system requests.

+++ A successful response for viewing the system requests

```json
{
    "_page": {
        "pageSize": 2,
        "start": "0",
        "totalCount": 2,
        "next": 1
    },
    "children:" [
        {
            "requestId": "80a9405a-21ca-4278-aedf-99367f90c055",
            "requestType": "DELETE_EE_BATCH",
            "imsOrgId": "{ORG_ID}",
            "sandbox": {
                "sandboxName": "prod",
                "sandboxId": "8129954b-fa83-43ba-a995-4bfa8373ba2b"
            },
            "status": "SUCCESS",
            "properties": {
                "batchId": "01JFSYFDFW9JAAEKHX672JMPSB",
                "datasetId": "66a92c5910df2d1767de13f3"
            },
            "createdAt": "2024-12-22T19:44:50.250006Z",
            "updatedAt": "2024-12-22T19:52:13.380706Z"
        },
        {
            "requestId": "38a835eb-b491-4864-902b-be07fa4d6a6d",
            "requestType": "TRUNCATE_DATASET",
            "imsOrgId": "{ORG_ID}",
            "sandbox": {
                "sandboxName": "prod",
                "sandboxId": "8129954b-fa83-43ba-a995-4bfa8373ba2b"
            },
            "status": "SUCCESS",
            "properties": {
                "datasetId": "66a92c5910df2d1767de13f3"
            },
            "createdAt": "2024-12-22T19:44:50.250006Z",
            "updatedAt": "2024-12-22T19:52:13.380706Z"
        }        
    ]
}
```

| Property | Description |
| -------- | ----------- |
| `requestId` | The ID of the system job. |
| `requestType` | The type of the system job. Possible values include `BACKFILL_TTL`, `DELETE_EE_BATCH`, and `TRUNCATE_DATASET`. |
| `status` | The status of the system job. Possible values include `NEW`, `SUCCESS`, `ERROR`, `FAILED`, and `IN-PROGRESS`. |
| `properties` | An object that contains batch and/or dataset IDs of the system job. |

+++

## Create a delete request {#create-a-delete-request}

Initiating a new delete request is done through a POST request to the `/systems/jobs` endpoint, where the ID of the dataset or batch to be deleted is provided in the body of the request.

### Delete a dataset and associated profile data 

In order to delete a dataset and all profile data associated with the dataset from the Profile store, the dataset ID must be included in the body of the POST request. This action will delete ALL data for a given dataset. [!DNL Experience Platform] allows you to delete datasets based on both record and time series schemas.

**API format**

```http
POST /system/jobs
```

**Request**

+++ A sample request to delete a dataset.

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/system/jobs \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "dataSetId": "66a92c5910df2d1767de13f3"
      }'
```

+++

| Property | Description |
| -------- | ----------- |
| `dataSetId` | The ID of the dataset you want to delete. |

**Response**

A successful response returns the details of the newly created system request, including a unique, system-generated, read-only ID for the request. This can be used to look up the request and check its status. The `status` for the request at time of creation is `NEW` until it begins processing (`IN-PROGRESS`). The dataSetId in the response should match the `dataSetId` sent in the request.

+++ A successful response for creating a delete request.

```json
{
    "requestId": "80a9405a-21ca-4278-aedf-99367f90c055",
    "requestType": "TRUNCATE_DATASET",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxName": "prod",
        "sandboxId": "8129954b-fa83-43ba-a995-4bfa8373ba2b"
    },
    "status": "SUCCESS",
    "properties": {
        "datasetId": "66a92c5910df2d1767de13f3"
    },
    "createdAt": "2024-12-22T19:44:50.250006Z",
    "updatedAt": "2024-12-22T19:52:13.380706Z"
}
```

| Property | Description |
| -------- | ----------- |
| `requestId` | The system-generated, read-only ID of the system job. |
| `requestType` | The type of the system job. Since you're deleting a dataset, this value is `TRUNCATE_DATASET`. |
| `status` | The status of the system job. Possible values include `NEW`, `SUCCESS`, `ERROR`, `FAILED`, and `IN-PROGRESS`. |
| `properties` | An object that contains the dataset IDs of the system job. |

+++

### Delete a batch

In order to delete a batch, the batch ID must be included in the body of the POST request. Please be advised that you cannot delete batches for datasets based on record schemas. Only batches for datasets based on time series schemas may be deleted. 

>[!NOTE]
>
> The reason you cannot delete batches for datasets based on record schemas is because record type dataset batches overwrite previous records and therefore cannot be "undone" or deleted. The only way to remove the impact of erroneous batches for datasets based on record schemas is to re-ingest the batch with the correct data in order to overwrite the incorrect records. 

For more information on record and time series behavior, please review the [section on XDM data behaviors](../../xdm/home.md#data-behaviors) in the [!DNL XDM System] overview.

**API format**

```http
POST /system/jobs
```

**Request**

+++ A sample request to delete a batch.

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/system/jobs \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "datasetId": "66a92c5910df2d1767de13f3",
        "batchId": "01JFSYFDFW9JAAEKHX672JMPSB"
      }'
```

+++

| Property | Description |
| -------- | ----------- |
| `datasetId` | The ID of the dataset for the batch you wish to delete. |
| `batchId` | The ID of the batch you wish to delete. |

**Response**

A successful response returns the details of the newly created system request.

+++ A successful response for creating a delete request.

```json
{
    "requestId": "80a9405a-21ca-4278-aedf-99367f90c055",
    "requestType": "DELETE_EE_BATCH",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxName": "prod",
        "sandboxId": "8129954b-fa83-43ba-a995-4bfa8373ba2b"
    },
    "status": "SUCCESS",
    "properties": {
        "datasetId": "66a92c5910df2d1767de13f3",
        "batchId": "01JFSYFDFW9JAAEKHX672JMPSB"
    },
    "createdAt": "2024-12-22T19:44:50.250006Z",
    "updatedAt": "2024-12-22T19:52:13.380706Z"
}
```

| Property | Description |
| -------- | ----------- |
| `requestId` | The system-generated, read-only ID of the system job. |
| `requestType` | The type of the system job. Since you're deleting a batch, this value is `DELETE_EE_BATCH`. |
| `status` | The status of the system job. Possible values include `NEW`, `SUCCESS`, `ERROR`, `FAILED`, and `IN-PROGRESS`. |
| `properties` | An object that contains the batch and dataset IDs of the system job. |

+++

If you attempt to initiate a delete request for a Record dataset batch, you will encounter a 400-level error, similar to the following:

```json
{
    "type": "https://ns.adobe.com/aep/errors/UPAPI-036002-422",
    "title": "Invalid system job payload.",
    "status": 422,
    "requestId": "5YrVbqD3YvxYOn5ihuC3KILIoEPZgdJN"
}
```

## View a specific delete request {#view-a-specific-delete-request}

To view a specific delete request, including details such as its status, you can perform a lookup (GET) request to the `/system/jobs` endpoint and include the ID of the delete request in the path.

**API format**

```http
GET /system/jobs/{DELETE_REQUEST_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{DELETE_REQUEST_ID}` | The ID of the delete request that you wish to view. |

**Request**

+++ A sample request to view a profile job.

```shell
curl -X GET https://platform.adobe.io/data/core/ups/system/jobs/9c2018e2-cd04-46a4-b38e-89ef7b1fcdf4 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns the details of the specified system request, including its updated status. The ID of the system request in the response should match the ID sent in the request path.

+++ A successful response for viewing a delete request.

```json
{
    "requestId": "9c2018e2-cd04-46a4-b38e-89ef7b1fcdf4",
    "requestType": "DELETE_EE_BATCH",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxName": "prod",
        "sandboxId": "8129954b-fa83-43ba-a995-4bfa8373ba2b"
    },
    "status": "SUCCESS",
    "properties": {
        "batchId": "01JFSYFDFW9JAAEKHX672JMPSB",
        "datasetId": "66a92c5910df2d1767de13f3"
    },
    "createdAt": "2024-12-22T19:44:50.250006Z",
    "updatedAt": "2024-12-22T19:52:13.380706Z"
}
```

| Property | Description |
| -------- | ----------- |
| `requestId` | The system-generated, read-only ID of the system job. |
| `requestType` | The type of the system job. Possible values include `BACKFILL_TTL`, `DELETE_EE_BATCH`, and `TRUNCATE_DATASET`. |
| `status` | The status of the system job. Possible values include `NEW`, `SUCCESS`, `ERROR`, `FAILED`, and `IN-PROGRESS`. |
| `properties` | An object that contains batch and/or dataset IDs of the system job. |

+++

Once the delete request status is `"SUCCESS"` you can confirm that the data has been deleted by attempting to access the deleted data using the Data Access API. For instructions on how to use the Data Access API to access datasets and batches, please review the [Data Access documentation](../../data-access/home.md).

## Next steps

Now that you know the steps involved in deleting datasets and batches from the [!DNL Profile store] within [!DNL Experience Platform], you can safely delete data that has been added erroneously or that your organization no longer needs. Please be mindful that a delete request cannot be undone, therefore you should only delete data that you are confident you do not need now and will not need in the future.
