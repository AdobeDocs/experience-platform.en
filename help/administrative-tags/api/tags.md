---
title: Tags endpoint
description: Learn how to create, update, manage, and delete tags using the Adobe Experience Platform APIs.
---

# Tags endpoint

>[!IMPORTANT]
>
>The endpoint URL for this set of endpoints is `https://experience.adobe.io`.

Blurb

This guide provides information to help you better understand tags and tag categories and includes sample API calls for performing basic actions using the API.

## Getting started

The endpoints used in this guide are part of the Adobe Experience Platform APIs. Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including required headers and how to read example API calls

### Glossary

The following glossary highlights the difference between a **tag** and a **tag category**.

- **Tag**: A tag allows you to manage the metadata taxonomy for business objects, allowing you to classify these objects for easier discovery and categorization.
- **Tag category**: A tag category allows you to group your tags into meaningful sets, allowing you to provide more context to the tag's purpose.

## Retrieve a list of tag categories {#get-tag-categories}

You can retrieve a list of tag categories that belong to your organization by making a GET request to the `/tagCategory` endpoint.

**API format**

```http
GET /tagCategory
```

**Request**

+++A sample request to list all the tag categories in your organization

```shell
curl -X GET https://experience.adobe.io/unifiedTags/tagCategory
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status ??? with a list of all the tag categories for your organization.

+++A sample response that contains a list of all the tag categories in your organization.

```json
{
    "_page": {
        "count": 1,
        "limit": 10,
        "property": []
    },
    "tags": [
        {
            "id": "e2b7c656-067b-4413-a366-adde0401df50",
            "name": "Test Category",
            "description": "A sample description for the test tag category.",
            "org": "{ORG_ID}",
            "createdBy": "{USER_ID}",
            "createdAt": "1661752268000",
            "modifiedBy": "{USER_ID}",
            "modifiedAt": "1661752268000",
            "tagCount": 0
        }
    ]
}
```

| Property | Description |
| -------- | ----------- |

+++

## Create a new tag category {#create-tag-category}

>[!IMPORTANT]
>
>Only the system administrator and product administrator can use this API call.

You can create a new tag category by making a POST request to the `/tagCategory` endpoint.

**API format**

```http
POST /tagCategory
```

**Request**

+++A sample request to create a new tag category.

```shell
curl -X POST https://experience.adobe.io/unifiedTags/tagCategory
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
    "name": "Sample Test Category",
    "description": "Sample test category"
 }'
```

| Property | Description |
| -------- | ----------- |

+++

**Response**

A sample response returns HTTP status ??? with details of your newly created tag category.

+++A sample response that contains details of your newly created tag category.

```json
{
    "id": "e2b7c656-067b-4413-a366-adde0401df50",
    "name": "Sample Test Category",
    "description": "Sample test category",
    "org": "{ORG_ID}",
    "createdBy": "{USER_ID}",
    "createdAt": "1661752268000",
    "modifiedBy": "{USER_ID}",
    "modifiedAt": "1661752268000",
    "tagCount": 0
}
```

+++

## Retrieve a specific tag category {#get-tag-category}

You can retrieve a specific tag category that belongs to your organization by making a GET request to the `/tagCategory` endpoint and specifying the tag category's ID.

**API format**

```http
GET /tagCategory/{TAG_CATEGORY_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{TAG_CATEGORY_ID}` | The ID of the tag category that you're retrieving. |

**Request**

+++A sample request to retrieve a specific tag category

```shell
curl -X GET https://experience.adobe.io/unifiedTags/tagCategory/e2b7c656-067b-4413-a366-adde0401df50 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status ??? with details of the specified tag category.

+++A sample response that contains details of the specified tag category.

```json
{
    "id": "e2b7c656-067b-4413-a366-adde0401df50",
    "name": "Test Category",
    "description": "A sample description for the test tag category.",
    "org": "{ORG_ID}",
    "createdBy": "{USER_ID}",
    "createdAt": "1661752268000",
    "modifiedBy": "{USER_ID}",
    "modifiedAt": "1661752268000",
    "tagCount": 0
}
```

+++

## Update a specific tag category {#update-tag-category}

You can update details of a specific tag category that belongs to your organization by making a PATCH request to the `/tagCategory` endpoint and specifying the tag category's ID.

**API format**

```http
PATCH /tagCategory/{TAG_CATEGORY_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{TAG_CATEGORY_ID}` | The ID of the tag category that you're retrieving. |

**Request**

+++A sample request to update a specific tag category

```shell
curl -X PATCH https://experience.adobe.io/unifiedTags/tagCategory/e2b7c656-067b-4413-a366-adde0401df50 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
    "op": "replace",
    "path": "description",
    "value": "Updated sample description"
 }'
```

| Parameter | Description |
| --------- | ----------- |

+++

**Response**

A successful response HTTP status ??? with information about your newly updated tag category.

+++A sample response containing details of your newly updated tag category.

```json
{
    "id": "e2b7c656-067b-4413-a366-adde0401df50",
    "name": "Test Category",
    "description": "Updated sample description",
    "org": "{ORG_ID}",
    "createdBy": "{USER_ID}",
    "createdAt": "1661752268000",
    "modifiedBy": "{USER_ID}",
    "modifiedAt": "1661752268000",
    "tagCount": 0
}
```

+++

## Delete a specific tag category {#delete-tag-category}

>[!IMPORTANT]
>
>Only the system administrator and product administrator can use this API call.

You can delete a specific tag category that belongs to your organization by making a DELETE request to the `/tagCategory` endpoint and specifying the tag category's ID.

**API format**

```http
DELETE /tagCategory/{TAG_CATEGORY_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{TAG_CATEGORY_ID}` | The ID of the tag category that you're retrieving. |

**Request**

+++A sample request to delete a specific tag category

```shell
curl -X DELETE https://experience.adobe.io/unifiedTags/tagCategory/e2b7c656-067b-4413-a366-adde0401df50 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status ??? along with an empty response.

## Retrieve a list of tags {#get-tags}

You can retrieve a list of tags that belong to your organization by making a GET request to the `/tags` endpoint and the ID of the tag category.

**API format**

```http
GET /tags/{TAG_CATEGORY_ID}
```

**Request**

This request doesn't make sense at the moment.

**Response**

No response as a result.

## Create a new tag {#create-tag}

>[!IMPORTANT]
>
>Only the system administrator and product administrator can use this API call.

You can create a new tag by making a POST request to the `/tags` endpoint.

**API format**

```http
POST /tags
```

**Request**

+++A sample request to create a new tag.

```shell
curl -X POST https://experience.adobe.io/unifiedTags/tags
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
    "name": "sampleTag"
 }'
```

| Property | Description |
| -------- | ----------- |
| `name` | **Required**. The name of the tag you want to create. |
| `tagCategoryId` | *Optional*. The ID of the tag category that you want the tag to belong to. If not specified, the tag will be created as part of the uncategorized category. |

+++

**Response**

A successful response returns HTTP status ??? with details of your newly created tag.

+++A sample response that contains details of your newly created tag.

```json
{
    "name": "sampleTag",
    "id": "2bd5ddd9-7284-4767-81d9-c75b122f2a6a",
    "org": "{ORG_ID}",
    "createdAt": "1661753717000",
    "createdBy": "{USER_ID}",
    "modifiedAt": "1661753717000",
    "modifiedBy": "{USER_ID}",
    "tagCategoryId": "Uncategorized-{ORG_ID}",
    "tagCategoryName": "Uncategorized",
    "archived": false
}
```

| Parameter | Description |
| --------- | ----------- |

+++

## Retrieve a specific tag {#get-tag}

You can retrieve a specific tag that belongs to your organization by making a GET request to the `/tags` endpoint and specifying the ID of the tag you want to retrieve.

**API format**

```http
GET /tags/{TAG_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{TAG_ID}` | The ID of the tag that you're retrieving. |

**Request**

+++A sample request to retrieve a specific tag

```shell
curl -X GET https://experience.adobe.io/unifiedTags/tags/2bd5ddd9-7284-4767-81d9-c75b122f2a6a \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status ??? with details of the specified tag.

+++A sample response that contains details of the specified tag. 

```json
{
    "name": "sampleTag",
    "id": "2bd5ddd9-7284-4767-81d9-c75b122f2a6a",
    "org": "{ORG_ID}",
    "createdAt": "1661753717000",
    "createdBy": "{USER_ID}",
    "modifiedAt": "1661753717000",
    "modifiedBy": "{USER_ID}",
    "tagCategoryId": "Uncategorized-{ORG_ID}",
    "tagCategoryName": "Uncategorized",
    "archived": false
}
```

| Parameter | Description |
| --------- | ----------- |

+++

## Validate tags {#validate-tags}

You can validate if tags exist by making a POST request to the `/tags/validate` endpoint.

**API format**

```http
POST /tags/validate
```

**Request**

+++A sample request to validate the provided tag IDs.

```shell
curl -X POST https://experience.adobe.io/unifiedTags/tags/validate
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
    "ids": [
        "2bd5ddd9-7284-4767-81d9-c75b122f2a6a","d113f40c-0097-4626-8d5f-6d5017694453", "invalid-tag"
    ]
 }'
```

+++

**Response**

A successful response returns HTTP status ??? with information about which tags are valid and invalid.

+++A sample response displaying which tags are valid and invalid.

```json
{
    "invalidTags": [
        {
            "id": "invalid-tag"
        }
    ],
    "validTags": [
        {
            "id": "d113f40c-0097-4626-8d5f-6d5017694453"
        },
        {
            "id": "2bd5ddd9-7284-4767-81d9-c75b122f2a6a"
        }
    ]
}
```

| Property | Description |
| -------- | ----------- |

+++

## Update a specific tag {#update-tag}

You can update a specified tag by making a PATCH request to the `/tags` endpoint and providing the ID of the tag you want to update.

**API format**

```http
PATCH /tags/{TAG_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{TAG_ID}` | The ID of the tag that you're updating. |

**Request**

+++A sample request to update a specific tag

```shell
curl -X GET https://experience.adobe.io/unifiedTags/tags/2bd5ddd9-7284-4767-81d9-c75b122f2a6a \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
    "op": "replace",
    "path": "name",
    "value": "newSampleTag"
 }'
```

| Property | Description |
| -------- | ----------- |
| `op` | |
| `path` | |
| `value` | |

+++

**Response**

A successful response returns HTTP status ??? with details of the newly updated tag.

+++A sample response that contains details of the updated tag.

```json
{
    "name": "newSampleTag",
    "id": "2bd5ddd9-7284-4767-81d9-c75b122f2a6a",
    "org": "{ORG_ID}",
    "createdAt": "1661753717000",
    "createdBy": "{USER_ID}",
    "modifiedAt": "1661753717000",
    "modifiedBy": "{USER_ID}",
    "tagCategoryId": "Uncategorized-{ORG_ID}",
    "tagCategoryName": "Uncategorized",
    "archived": false
}
```

+++

## Delete a specific tag {#delete-tag}

>[!IMPORTANT]
>
>Only the system administrator and product administrator can use this API call.

You can delete a specific tag by making a DELETE tag to the `/tags` endpoint and specifying the ID of the tag that you want to delete.

**API format**

```http
DELETE /tags/{TAG_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{TAG_ID}` | The ID of the tag that you're deleting. |

**Request**

+++A sample request to delete a specific tag

```shell
curl -X DELETE https://experience.adobe.io/unifiedTags/tags/2bd5ddd9-7284-4767-81d9-c75b122f2a6a \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status ??? along with an empty response.

## Next steps

After reading this guide, you have a better understanding of how to create, manage, and delete tags and tag categories using the Adobe Experience Platform APIs. For more information on managing tags using the UI, please read the [managing tags guide](../ui/managing-tags.md). For more information on managing tag categories using the UI, please read the [tag categories guide](../ui/tags-categories.md).
