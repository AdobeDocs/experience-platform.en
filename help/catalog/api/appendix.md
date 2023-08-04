---
keywords: Experience Platform;home;popular topics;Catalog service;catalog api;appendix
solution: Experience Platform
title: Catalog Service API Guide Appendix
description: This document contains additional information to help you work with the Catalog API in Adobe Experience Platform.
exl-id: fafc8187-a95b-4592-9736-cfd9d32fd135
---
# [!DNL Catalog Service] API guide appendix

This document contains additional information to help you work with the [!DNL Catalog] API.

## View interrelated objects {#view-interrelated-objects}

Some [!DNL Catalog] objects can be interrelated with other [!DNL Catalog] objects. Any fields that are prefixed by `@` in response payloads denote related objects. The values for these fields take the form of a URI, which can be used in a separate GET request to retrieve the related objects they represent.

The example dataset returned in the document on [looking up a specific dataset](look-up-object.md) contains a `files` field with the following URI value: `"@/datasetFiles?datasetId={DATASET_ID}"`. The contents of the `files` field can be viewed by using this URI as the path for a new GET request.

**API format**

```http
GET {OBJECT_URI}
```

| Parameter | Description |
| --- | --- |
| `{OBJECT_URI}` | The URI provided by the interrelated object field (excluding the `@` symbol). |

**Request**

The following request uses the URI provided the example dataset's `files` property to retrieve a list of the dataset's associated files.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/catalog/dataSets/datasetFiles?datasetId={DATASET_ID}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a list of related objects. In this example, a list of dataset files is returned.

```json
{
    "7d501090-0280-11ea-a6bb-f18323b7005c-1": {
        "id": "7d501090-0280-11ea-a6bb-f18323b7005c-1",
        "batchId": "7d501090-0280-11ea-a6bb-f18323b7005c",
        "dataSetViewId": "5ba9452f7de80400007fc52b",
        "imsOrg": "{ORG_ID}",
        "createdUser": "{USER_ID}",
        "createdClient": "{CLIENT_ID}",
        "updatedUser": "{USER_ID}",
        "version": "1.0.0",
        "created": 1573256315368,
        "updated": 1573256315368
    },
    "148ac690-0280-11ea-8d23-8571a35dce49-1": {
        "id": "148ac690-0280-11ea-8d23-8571a35dce49-1",
        "batchId": "148ac690-0280-11ea-8d23-8571a35dce49",
        "dataSetViewId": "5ba9452f7de80400007fc52b",
        "imsOrg": "{ORG_ID}",
        "createdUser": "{USER_ID}",
        "createdClient": "{CLIENT_ID}",
        "updatedUser": "{USER_ID}",
        "version": "1.0.0",
        "created": 1573255982433,
        "updated": 1573255982433
    },
    "64dd5e19-8ea4-4ddd-acd1-f43cccd8eddb-1": {
        "id": "64dd5e19-8ea4-4ddd-acd1-f43cccd8eddb-1",
        "batchId": "64dd5e19-8ea4-4ddd-acd1-f43cccd8eddb",
        "dataSetViewId": "5ba9452f7de80400007fc52b",
        "imsOrg": "{ORG_ID}",
        "createdUser": "{USER_ID}",
        "createdClient": "{CLIENT_ID}",
        "updatedUser": "{USER_ID}",
        "version": "1.0.0",
        "created": 1569499425037,
        "updated": 1569499425037
    }
}
```

## Additional request headers

[!DNL Catalog] provides several header conventions to help you maintain the integrity of your data during updates.

### If-Match

It is good practice to use object versioning to prevent the type of data corruption that occurs when an object is saved by multiple users near-simultaneously. 

Best practice when updating an object involves first making an API call to view (GET) the object to be updated. Contained within the response (and any call where the response contains a single object) is an `E-Tag` header containing the version of the object. Adding the object version as a request header named `If-Match` in your update (PUT or PATCH) calls will result in the update only succeeding if the version is still the same, helping to prevent data collision.

If the versions do not match (the object was modified by another process since you retrieved it), you will receive HTTP status 412 (Precondition Failed) indicating that access to the target resource has been denied.

### Pragma

On occasion, you may wish to validate an object without saving the information. Using the `Pragma` header with a value of `validate-only` allows you to send POST or PUT requests for validation purposes only, preventing any changes to the data from being persisted.

## Data compaction

Compaction is an [!DNL Experience Platform] service that merges data from small files into larger files without changing any data. For performance reasons, it is sometimes beneficial to combine a set of small files into larger files in order to provide faster access to data when being queried.

When the files in an ingested batch have been compacted, its associated [!DNL Catalog] object is updated for monitoring purposes.
