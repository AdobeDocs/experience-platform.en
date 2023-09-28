---
title: Folders endpoint
description: Learn how to create, update, manage, and delete folders using the Adobe Experience Platform APIs.
---

# Folders endpoint

>[!IMPORTANT]
>
>The endpoint URL for this set of endpoints is `https://experience.adobe.io`.

Blurb

This guide provides information to help you better understand folders and includes sample API calls for performing basic actions using the API.

## Getting started

The endpoints used in this guide are part of the Adobe Experience Platform APIs. Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including required headers and how to read example API calls.

## Retrieve a list of folders {#list}

You can retrieve a list of folders that belong to your organization by making a GET request to the `/folder` endpoint and specifying the folder type and the parent folder ID.

**API format**

```http
GET /folder/{FOLDER_TYPE}/{PARENT_FOLDER_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{FOLDER_TYPE}` | The type of objects that are contained within the folder. Currently, the supported values include `segments` and `datasets`. |
| `{PARENT_FOLDER_ID}` | The ID of the parent folder that you're retrieving the list of folders from. To view a list of all the parent folders, use the folder ID `root`. |

**Request**

+++A sample request to list all top-level dataset folders

```shell
curl -X GET https://experience.adobe.io/unifiedFolders/folder/datasets/root
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status ??? with a list of all top-level folders for datasets in your organization.

+++A sample response that contains a list of all top-level folders for datasets in your organization.

```json
{
    "id": "c626b4f7-223b-4486-8900-00c266e31dd1",
    "name": "ParentFolder",
    "noun": "Dataset",
    "parentId": "{ORG_ID}/{SANDBOX_ID}/Dataset",
    "tags": null,
    "imsOrg": "{ORG_ID}",
    "sandboxId": "{SANDBOX_ID}",
    "sandboxName": "prod",
    "createdBy": null,
    "createdAt": "2023-01-12T03:31:00.118+00:00",
    "modifiedBy": null,
    "modifiedAt": "2023-01-13T05:47:06.718+00:00",
    "_links": null,
    "children": [
        {
            "id": "09d86b23-4819-471b-8a2a-05774ed268de",
            "name": "ChildFolder.1",
            "noun": "dataset",
            "parentId": "c626b4f7-223b-4486-8900-00c266e31dd1",
            "tags": null,
            "imsOrg": "{ORG_ID}",
            "sandboxId": "{SANDBOX_ID}",
            "sandboxName": null,
            "createdBy": "{USER_ID}",
            "createdAt": "2023-01-12T12:51:39.284+00:00",
            "modifiedBy": "{USER_ID}",
            "modifiedAt": "2023-01-12T12:51:39.284+00:00",
            "_links": null,
            "children": []
        },
        {
            "id": "fd2f6a68-ef65-470d-ab31-b02b7b2241ca",
            "name": "ChildFolder.2",
            "noun": "dataset",
            "parentId": "c626b4f7-223b-4486-8900-00c266e31dd1",
            "tags": null,
            "imsOrg": "{ORG_ID}",
            "sandboxId": "1bd86660-c5da-11e9-93d4-6d5fc3a66a8e",
            "sandboxName": null,
            "createdBy": "{USER_ID}",
            "createdAt": "2023-01-13T03:38:40.006+00:00",
            "modifiedBy": "{USER_ID}",
            "modifiedAt": "2023-01-13T03:38:40.006+00:00",
            "_links": null,
            "children": []
        }
    ]
}
```

+++

## Create a new folder {#create}

You can create a new folder by making a POST request to the `/folder` endpoint and specifying the folder type.

**API format**

```http
POST /folder/{FOLDER_TYPE}
```

| Parameter | Description |
| --------- | ----------- |
| `{FOLDER_TYPE}` | The type of objects that are contained within the folder. Currently, the supported values include `segments` and `datasets`. |

**Request**

+++A sample request to create a new folder.

```shell
curl -X POST https://experience.adobe.io/unifiedFolders/folder/datasets
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
    "name": "SampleFolder",
    "tags": ["SampleTag1"],
    "parentId": "{ORG_ID}/{SANDBOX_ID}/datasets"
 }'
```

| Property | Description | 
| -------- | ----------- |
| `name` | The name of the folder you want to create. |
| `tags` | An optional parameter that lets you add tags to the folder. |
| `parentId` | The ID of the parent structure for the folder. |

+++

**Response**

A successful response returns HTTP status ??? with details of your newly created folder.

+++A sample response that contains details of your newly created folder.

```json
{
    "id": "83f8287c-767b-4106-b271-257282fd170e",
    "name": "SampleFolder",
    "noun": "datasets",
    "parentId": "{ORG_ID}/{SANDBOX_ID}/datasets",
    "tags": [
        "SampleTag1"
    ],
    "imsOrg": "{ORG_ID}",
    "sandboxId": "{SANDBOX_ID}",
    "sandboxName": "prod",
    "createdBy": "{USER_ID}",
    "createdAt": "2023-10-01T08:47:06.192+00:00",
    "modifiedBy": "{USER_ID}",
    "modifiedAt": "2023-10-01T08:47:06.192+00:00",
    "_links": null
}
```

| Property | Description |
| -------- | ----------- |
| `id` | The ID of the newly created folder. |
| `createdBy` | The ID of the user who created the folder. |
| `createdAt` | The timestamp of when the folder was created. |

+++

## Retrieve a specific folder {#get}

You can retrieve a specific folder that belongs to your organization by making a GET request to the `/folder` endpoint and specifying the folder type and the folder's ID.

**API format**

```http
GET /folder/{FOLDER_TYPE}/{FOLDER_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{FOLDER_TYPE}` | The type of objects that are contained within the folder. Currently, the supported values include `segments` and `datasets`. |
| `{FOLDER_ID}` | The ID of the folder that you're retrieving. |

**Request**

+++A sample request to retrieve a specific folder

```shell
curl -X GET https://experience.adobe.io/unifiedFolders/folder/datasets/83f8287c-767b-4106-b271-257282fd170e
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status ??? with details of the requested folder.

+++A sample response that contains details of the requested folder.

```json
{
    "id": "83f8287c-767b-4106-b271-257282fd170e",
    "name": "SampleFolder",
    "noun": "datasets",
    "parentId": "{ORG_ID}/{SANDBOX_ID}/datasets",
    "tags": [
        "SampleTag1"
    ],
    "imsOrg": "{ORG_ID}",
    "sandboxId": "{SANDBOX_ID}",
    "sandboxName": "prod",
    "createdBy": "{USER_ID}",
    "createdAt": "2023-10-01T08:47:06.192+00:00",
    "modifiedBy": "{USER_ID}",
    "modifiedAt": "2023-10-01T08:47:06.192+00:00",
    "_links": null
}
```

| Property | Description |
| -------- | ----------- |
| `id` | The ID of the requested folder. |
| `name` | The name of the requested folder. |
| `parentId` | The ID of the parent folder. |
| `tags` | An array that lists the IDs of the associated tags for the folder. |
| `createdBy` | The ID of the user who created the folder. |
| `createdAt` | The timestamp of when the folder was created. |
| `modifiedBy` | The ID of the user who last updated the folder. |
| `modifiedAt` | The timestamp of when the folder was last updated. |

+++

## Validate a specified folder {#validate}

You can validate if a folder exists by making a GET request to the `/folder/{FOLDER_TYPE}/{FOLDER_ID}/validate` endpoint, and provide both the folder type and ID.

**API format**

```http
GET /folder/{FOLDER_TYPE}/{FOLDER_ID}/validate
```

| Parameter | Description |
| --------- | ----------- |
| `{FOLDER_TYPE}` | The type of objects that are contained within the folder. Currently, the supported values include `segments` and `datasets`. |
| `{FOLDER_ID}` | The ID of the folder that you're validating. |

**Request**

+++A sample request to validate a specific folder

```shell
curl -X GET https://experience.adobe.io/unifiedFolders/folder/datasets/83f8287c-767b-4106-b271-257282fd170e/validate
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful status returns HTTP status ??? with details of the folder you are validating.

+++A sample response contains details of the validated folder

```json
{
    "id": "83f8287c-767b-4106-b271-257282fd170e",
    "name": "SampleFolder",
    "noun": "datasets",
    "parentId": "{ORG_ID}/{SANDBOX_ID}/datasets",
    "tags": [
        "SampleTag1"
    ],
    "imsOrg": "{ORG_ID}",
    "sandboxId": "{SANDBOX_ID}",
    "sandboxName": "prod",
    "createdBy": "{USER_ID}",
    "createdAt": "2023-10-01T08:47:06.192+00:00",
    "modifiedBy": "{USER_ID}",
    "modifiedAt": "2023-10-01T08:47:06.192+00:00",
    "_links": null
}
```

+++

## Update a specific folder {#update}

You can update the details of a specific folder that belongs to your organization by making a PATCH request to the `/folder` endpoint and specifying the folder type and the folder's ID.

**API format**

```http
PATCH /folder/{FOLDER_TYPE}/{FOLDER_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{FOLDER_TYPE}` | The type of objects that are contained within the folder. Currently, the supported values include `segments` and `datasets`. |
| `{FOLDER_ID}` | The ID of the folder that you're updating. |

**Request**

+++A sample request to update a specific folder

```shell
curl -X GET https://experience.adobe.io/unifiedFolders/folder/datasets/83f8287c-767b-4106-b271-257282fd170e
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
    "op": "replace",
    "path": "/name1",
    "value": "RenamedSampleFolder"
 }'
```

+++

**Response**

A successful response returns HTTP status ??? with information about your newly updated folder.

??????????????????????

## Retrieve a specific folder's subfolders {#get-subfolders}

You can retrieve the subfolders for a specific folder that belongs to your organization by making a GET request to the `/folder/{FOLDER_TYPE}/{FOLDER_ID}/subfolders` endpoint, and provide both the folder type and ID.

**API format**

```http
GET /folder/{FOLDER_TYPE}/{FOLDER_ID}/subfolders
```

**Request**

+++A sample request to retrieve the subfolders for a specific folder

```shell
curl -X GET https://experience.adobe.io/unifiedFolders/folder/datasets/83f8287c-767b-4106-b271-257282fd170e/subfolders
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status ??? with details of the requested folder's subfolders.

+++A sample response that contains details of the requested folder's subfolders.

```json
[
    {
        "id": "09d86b23-4819-471b-8a2a-05774ed268de",
        "name": "ABCD.1",
        "noun": "datasets",
        "parentId": "83f8287c-767b-4106-b271-257282fd170e",
        "tags": null,
        "imsOrg": "{ORG_ID}",
        "sandboxId": "{SANDBOX_ID}",
        "sandboxName": "prod",
        "createdBy": "{USER_ID}",
        "createdAt": "2023-01-12T12:51:39.284+00:00",
        "modifiedBy": "{USER_ID}",
        "modifiedAt": "2023-01-12T12:51:39.284+00:00",
        "_links": null
    },
    {
        "id": "fd2f6a68-ef65-470d-ab31-b02b7b2241ca",
        "name": "ABCD.2",
        "noun": "datasets",
        "parentId": "83f8287c-767b-4106-b271-257282fd170e",
        "tags": null,
        "imsOrg": "{ORG_ID}",
        "sandboxId": "{SANDBOX_ID}",
        "sandboxName": "prod",
        "createdBy": "{USER_ID}",
        "createdAt": "2023-01-13T03:38:40.006+00:00",
        "modifiedBy": "{USER_ID}",
        "modifiedAt": "2023-01-13T03:38:40.006+00:00",
        "_links": null
    }
]
```

+++

## Delete a specific folder {#delete}

You can delete a specific folder that belongs to your organization by making a DELETE request to the `/folder` and specifying the folder type and folder's ID.

***API format**

```http
DELETE /folder/{FOLDER_TYPE}/{FOLDER_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{FOLDER_TYPE}` | The type of objects that are contained within the folder. Currently, the supported values include `segments` and `datasets`. |
| `{FOLDER_ID}` | The ID of the folder that you're deleting. |

**Request**

+++A sample request to delete a specific folder

```shell
curl -X DELETE https://experience.adobe.io/unifiedFolders/folder/datasets/83f8287c-767b-4106-b271-257282fd170e
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status ??? with ????????

Response??????????

## Next steps

After reading this guide, you now have a better understanding of how to create, manage, and delete folders using the Adobe Experience Platform API.
