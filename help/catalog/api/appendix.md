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

The example dataset returned in the document on [looking up a specific dataset](look-up-object.md) contains a `files` field with the following URI value: `"@/dataSets/5ba9452f7de80400007fc52a/views/5ba9452f7de80400007fc52b/files"`. The contents of the `files` field can be viewed by using this URI as the path for a new GET request.

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
  'https://platform.adobe.io/data/foundation/catalog/dataSets/5ba9452f7de80400007fc52a/views/5ba9452f7de80400007fc52b/files' \
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

## Make multiple requests in a single call

The root endpoint of the [!DNL Catalog] API allows for multiple requests to be made within a single call. The request payload contains an array of objects representing what would normally be individual requests, which are then executed in order. 

If these requests are modifications or additions to [!DNL Catalog] and any one of the changes fails, all changes will revert.

**API format**

```http
POST /
```

**Request**

The following request creates a new dataset, then creates related views for that dataset. This example demonstrates the use of template language to access values returned in previous calls for use in subsequent calls.

For example, if you would like to reference a value that was returned from a previous sub-request, you can create a reference in the format: `<<{REQUEST_ID}.{ATTRIBUTE_NAME}>>` (where `{REQUEST_ID}` is the user-supplied ID for the sub-request, as demonstrated below). You can reference any attribute available in the body of a previous sub-request's response object by using these templates.

>[!NOTE]
>
>When an executed sub-request returns only the reference to an object (as is the default for most POST and PUT requests in the Catalog API), this reference is aliased to the value `id` and can be used as  `<<{OBJECT_ID}.id>>`. 

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/catalog \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "id": "firstObjectId",
      "resource": "/dataSets",
      "method": "post",
      "body": {
        "type": "raw",
        "name": "First Dataset"
      }
    }, 
    {
      "id": "secondObjectId",
      "resource": "/datasetViews",
      "method": "post",
      "body": {
        "dataSetId": "<<firstObjectId.id>>"
      }
    }
  ]'
```

| Property | Description |
| --- | --- |
| `id` | User-supplied ID that is attached to the response object so that you can match up requests to responses. [!DNL Catalog] does not store this value and simply returns it in the response for reference purposes. |
| `resource` | The resource path relative to the root of the [!DNL Catalog] API. The protocol and domain should not be part of this value, and it should be prefixed with "/". <br/><br/> When using PATCH or DELETE as the sub-request's `method`, include the object ID in the resource path. Not to be confused with the user-supplied `id`, the resource path uses the ID of the [!DNL Catalog] object itself (for example, `resource: "/dataSets/1234567890"`). |
| `method` | The name of the method (GET, PUT, POST, PATCH, or DELETE) related to the action taking place in the request. |
| `body` | The JSON document that would normally be passed as the payload in a POST, PUT, or PATCH request. This property is not required for GET or DELETE requests. |

**Response**

A successful response returns an array of objects containing the `id` that you assigned to each request, the HTTP status code for the individual request, and the response `body`. Since the three sample requests were all to create new objects, the `body` of each object is an array containing only the ID of the newly created object, as is the standard with most successful POST responses in [!DNL Catalog].

```json
[
    {
        "id": "firstObjectId",
        "code": 200,
        "body": [
            "@/dataSets/5be230aef5b02914cd52dbfa"
        ]
    },
    {
        "id": "secondObjectId",
        "code": 200,
        "body": [
            "@/dataSetViews/5be230aef5b02914cd52dbfb"
        ]
    }
]
```

Take care when inspecting the response to a multi-request, as you will need to verify the code of each individual sub-request and not rely solely on the HTTP status code for the parent POST request.  It is possible for a single sub-request to return a 404 (such as a GET request on an invalid resource) while the overall request returns 200.

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
