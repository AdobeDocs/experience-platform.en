---
title: Folders Endpoint
description: Learn how to create, update, manage, and delete folders using the Adobe Experience Platform APIs.
role: Developer
exl-id: ee43d699-725d-4ffd-a71b-049eeb3b4d7c
---
# Folders endpoint

>[!IMPORTANT]
>
>The endpoint URL for this set of endpoints is `https://experience.adobe.io`.

Folders are a capability that let you better organize your business objects for easier navigability and categorization.

This guide provides information to help you better understand folders and includes sample API calls for performing basic actions using the API.

## Getting started

Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including required headers and how to read example API calls.

## Retrieve a list of folders {#list}

You can retrieve a list of folders that belong to your organization by making a GET request to the `/folder` endpoint and specifying the folder type and the parent folder ID.

**API format**

```http
GET /folders/{FOLDER_TYPE}/{PARENT_FOLDER_ID}/subfolders
```

| Parameter | Description |
| --------- | ----------- |
| `{FOLDER_TYPE}` | The type of objects that are contained within the folder. The supported values include `segment` and `dataset`. |
| `{PARENT_FOLDER_ID}` | The ID of the parent folder that you're retrieving the list of folders from. To view a list of all the parent folders, use the folder ID `root`. |

**Request**

+++A sample request to list all top-level dataset folders

```shell
curl -X GET https://experience.adobe.io/unifiedfolders/folders/dataset/root/subfolders
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status 200 with a list of all top-level folders for dataset in your organization.

+++A sample response that contains a list of all top-level folders for dataset in your organization.

```json
{
    "id": "c626b4f7-223b-4486-8900-00c266e31dd1",
    "name": "ParentFolder",
    "noun": "Dataset",
    "parentId": "{PARENT_ID}",
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
POST /folders/{FOLDER_TYPE}
```

| Parameter | Description |
| --------- | ----------- |
| `{FOLDER_TYPE}` | The type of objects that are contained within the folder. The supported values include `segment` and `dataset`. |

**Request**

+++A sample request to create a new folder.

```shell
curl -X POST https://experience.adobe.io/unifiedfolders/folders/dataset
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
    "name": "SampleFolder",
    "parentId": "6a5e0927-1527-4abc-9993-376fd7067ca5"
 }'
```

| Property | Description | 
| -------- | ----------- |
| `name` | The name of the folder you want to create. |
| `parentId` | The ID of the parent folder. |

+++

**Response**

A successful response returns HTTP status 200 with details of your newly created folder.

+++A sample response that contains details of your newly created folder.

```json
{
    "id": "83f8287c-767b-4106-b271-257282fd170e",
    "name": "SampleFolder",
    "noun": "dataset",
    "parentId": "6a5e0927-1527-4abc-9993-376fd7067ca5",
    "imsOrg": "{ORG_ID}",
    "sandboxId": "{SANDBOX_ID}",
    "sandboxName": "prod",
    "createdBy": "{USER_ID}",
    "createdAt": "2023-10-01T08:47:06.192+00:00",
    "modifiedBy": "{USER_ID}",
    "modifiedAt": "2023-10-01T08:47:06.192+00:00",
    "status": "IN_USE",
    "_links": null
}
```

| Property | Description |
| -------- | ----------- |
| `id` | The ID of the newly created folder. |
| `createdBy` | The ID of the user who created the folder. |
| `createdAt` | The timestamp of when the folder was created. |
| `modifiedBy` | The ID of the user who last modified the folder. |
| `modifiedAt` | The timestamp of when the folder was last updated. |

+++

## Retrieve a specific folder {#get}

You can retrieve a specific folder that belongs to your organization by making a GET request to the `/folder` endpoint and specifying the folder type and the folder's ID.

**API format**

```http
GET /folders/{FOLDER_TYPE}/{FOLDER_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{FOLDER_TYPE}` | The type of objects that are contained within the folder. The supported values include `segment` and `dataset`. |
| `{FOLDER_ID}` | The ID of the folder that you're retrieving. |

**Request**

+++A sample request to retrieve a specific folder

```shell
curl -X GET https://experience.adobe.io/unifiedfolders/folders/dataset/83f8287c-767b-4106-b271-257282fd170e
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status 200 with details of the requested folder.

+++A sample response that contains details of the requested folder.

```json
{
    "id": "83f8287c-767b-4106-b271-257282fd170e",
    "name": "SampleFolder",
    "noun": "dataset",
    "parentId": "{PARENT_ID}",
    "imsOrg": "{ORG_ID}",
    "sandboxId": "{SANDBOX_ID}",
    "sandboxName": "prod",
    "createdBy": "{USER_ID}",
    "createdAt": "2023-10-01T08:47:06.192+00:00",
    "modifiedBy": "{USER_ID}",
    "modifiedAt": "2023-10-01T08:47:06.192+00:00",
    "status": "IN_USE",
    "_links": {
        "self": {
            "href": "/folders/dataset/83f8287c-767b-4106-b271-257282fd170e"
        }
    }
}
```

| Property | Description |
| -------- | ----------- |
| `id` | The ID of the requested folder. |
| `name` | The name of the requested folder. |
| `parentId` | The ID of the parent folder. |
| `createdBy` | The ID of the user who created the folder. |
| `createdAt` | The timestamp of when the folder was created. |
| `modifiedBy` | The ID of the user who last updated the folder. |
| `modifiedAt` | The timestamp of when the folder was last updated. |
| `status` | The status of the requested folder. Supported values include `IN_USE` and `ARCHIVED`. |

+++

## Validate a specified folder {#validate}

You can validate if a folder is eligible to have objects in it by making a GET request to the `/folder/{FOLDER_TYPE}/{FOLDER_ID}/validate` endpoint, and provide both the folder type and ID.

**API format**

```http
GET /folders/{FOLDER_TYPE}/{FOLDER_ID}/validate
```

| Parameter | Description |
| --------- | ----------- |
| `{FOLDER_TYPE}` | The type of objects that are contained within the folder. The supported values include `segment` and `dataset`. |
| `{FOLDER_ID}` | The ID of the folder that you're validating. |

**Request**

+++A sample request to validate a specific folder

```shell
curl -X GET https://experience.adobe.io/unifiedfolders/folders/dataset/83f8287c-767b-4106-b271-257282fd170e/validate
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful status returns HTTP status 200 with details of the folder you are validating.

+++A sample response contains details of the validated folder

```json
{
    "id": "83f8287c-767b-4106-b271-257282fd170e",
    "name": "SampleFolder",
    "noun": "dataset",
    "parentId": "{PARENT_ID}",
    "imsOrg": "{ORG_ID}",
    "sandboxId": "{SANDBOX_ID}",
    "sandboxName": "prod",
    "createdBy": "{USER_ID}",
    "createdAt": "2023-10-01T08:47:06.192+00:00",
    "status": "IN_USE",
    "modifiedBy": "{USER_ID}",
    "modifiedAt": "2023-10-01T08:47:06.192+00:00",
    "_links": {
        "self": {
            "href": "/folders/dataset/83f8287c-767b-4106-b271-257282fd170e"
        }
    }
}
```

+++

## Update a specific folder {#update}

You can update the details of a specific folder that belongs to your organization by making a PATCH request to the `/folder` endpoint and specifying the folder type and the folder's ID.

**API format**

```http
PATCH /folders/{FOLDER_TYPE}/{FOLDER_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{FOLDER_TYPE}` | The type of objects that are contained within the folder. The supported values include `segment` and `dataset`. |
| `{FOLDER_ID}` | The ID of the folder that you're updating. |

**Request**

+++A sample request to update a specific folder

```shell
curl -X GET https://experience.adobe.io/unifiedfolders/folders/dataset/83f8287c-767b-4106-b271-257282fd170e
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '[{
    "op": "replace",
    "path": "/name",
    "value": "RenamedSampleFolder"
 }]'
```

+++

**Response**

A successful response returns HTTP status 200 with information about your newly updated folder.

```json
{
    "id": "eafab5bf-3457-4b7f-b366-3c5399bd98f1",
    "name": "RenamedSampleFolder",
    "noun": "dataset",
    "parentFolderId": null,
    "imsOrg": "{ORG_ID}",
    "sandboxId": "{SANDBOX_ID}",
    "sandboxName": "prod",
    "createdBy": "183807A65A0F5D180A494004@AdobeID",
    "createdAt": "2024-03-05T01:42:36.910+00:00",
    "modifiedBy": "183807A65A0F5D180A494004@AdobeID",
    "modifiedAt": "2024-03-05T01:45:54.740+00:00",
    "status": "IN_USE",
    "_links": {
        "self": {
            "href": "/folders/dataset/eafab5bf-3457-4b7f-b366-3c5399bd98f1"
        }
    },
    "namespace": null
}
```

## Delete a specific folder {#delete}

You can delete a specific folder that belongs to your organization by making a DELETE request to the `/folder` and specifying the folder type and folder's ID.

***API format**

```http
DELETE /folders/{FOLDER_TYPE}/{FOLDER_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{FOLDER_TYPE}` | The type of objects that are contained within the folder. The supported values include `segment` and `dataset`. |
| `{FOLDER_ID}` | The ID of the folder that you're deleting. |

**Request**

+++A sample request to delete a specific folder

```shell
curl -X DELETE https://experience.adobe.io/unifiedfolders/folders/dataset/83f8287c-767b-4106-b271-257282fd170e
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status 200 with a message body informing you of the folder's deletion.

```json
{
    "message": "delete request accepted successfully"
}
```

## Next steps

After reading this guide, you now have a better understanding of how to create, manage, and delete folders using the Adobe Experience Platform API.
