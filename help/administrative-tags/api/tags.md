---
title: Unified Tags Endpoint
description: Learn how to create, update, manage, and delete tag categories and tags using the Adobe Experience Platform APIs.
role: Developer
exl-id: 6687d1da-a5e4-435a-9f99-1b0f9ac98088
---
# Unified tags endpoint

>[!IMPORTANT]
>
>The endpoint URL for this set of endpoints is `https://experience.adobe.io`.

Tags are a capability that let you manage metadata taxonomies to classify business objects for easier discovery and categorization. You subsequently can organize these tags into further groups by adding them to tag categories.

This guide provides information to help you better understand tags and tag categories and includes sample API calls for performing basic actions using the API.

## Getting started

The endpoints used in this guide are part of the Adobe Experience Platform APIs. Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including required headers and how to read example API calls

### Glossary

The following glossary highlights the difference between a **tag** and a **tag category**.

- **Tag**: A tag allows you to manage the metadata taxonomy for business objects, allowing you to classify these objects for easier discovery and categorization.
  - **Uncategorized tag**: An uncategorized tag is a tag that does not belong to a tag category. By default, created tags will be uncategorized.
- **Tag category**: A tag category allows you to group your tags into meaningful sets, allowing you to provide more context to the tag's purpose.

## Retrieve a list of tag categories {#get-tag-categories}

You can retrieve a list of tag categories that belong to your organization by making a GET request to the `/tagCategory` endpoint.

**API format**

```http
GET /tagCategory
GET /tagCategory?{QUERY_PARAMETERS}
```

The following optional query parameters can be used when retrieving tag categories.

| Query parameter | Description | Example |
| --------------- | ----------- | ------- |
| `start` | The location where the list of results starts from. You can use this to indicate the starting index for pagination of results. | `start=a` |
| `limit` | The maximum number of tag categories you want retrieved per page. | `limit=20` |
| `property` | The attribute you want to filter by when retrieving tag categories. Supported values include: <ul≥<li>`name`: The name of the tag category.</li></ul> | `property=name==category` |
| `sortBy` | The order in which the tag categories are sorted by. Supported values include `name`, `createdAt`, and `modifiedAt`. | `sortBy=name` |
| `sortOrder` | The direction in which the tag categories are sorted by. Supported values include `asc` and `desc`. | `sortOrder=asc` |

**Request**

+++A sample request to list all the tag categories in your organization

```shell
curl -X GET https://experience.adobe.io/unifiedtags/tagCategory
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}'
```

+++

**Response**

A successful response returns HTTP status 200 with a list of all the tag categories for your organization.

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
curl -X POST https://experience.adobe.io/unifiedtags/tagCategory
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}'
 -d '{
    "name": "Sample Test Category",
    "description": "Sample test category"
 }'
```

| Property | Description |
| -------- | ----------- |
| `name` | The name of the tag category you want to create. |
| `description` | A description of the tag category you want to create. |

+++

**Response**

A sample response returns HTTP status 200 with details of your newly created tag category.

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
curl -X GET https://experience.adobe.io/unifiedtags/tagCategory/e2b7c656-067b-4413-a366-adde0401df50 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}'
```

+++

**Response**

A successful response returns HTTP status 200 with details of the specified tag category.

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

| Property | Description |
| -------- | ----------- |
| `id` | The ID of the requested tag category. |
| `name` | The name of the requested tag category. |
| `description` | The description of the requested tag category. |
| `createdBy` | The ID of the user who created the tag category. |
| `createdAt` | The timestamp of when the tag category was created. |
| `modifiedBy` | The ID of the user who last updated the tag category. |
| `modifiedAt` | The timestamp of when the tag category was last updated. |
| `tagCount` | The number of tags that belong to the tag category. |

+++

## Update a specific tag category {#update-tag-category}

>[!IMPORTANT]
>
>Only the system administrator and product administrator can use this API call.

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
curl -X PATCH https://experience.adobe.io/unifiedtags/tagCategory/e2b7c656-067b-4413-a366-adde0401df50 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}'
 -d '[{
    "op": "replace",
    "path": "description",
    "value": "Updated sample description",
    "from": "Sample description"
 }]'
```

| Parameter | Description |
| --------- | ----------- |
| `op` | The operation that is completed. To update a specific tag category, set this value to `replace`. | 
| `path` | The path of the field that will be updated. Supported values include `name` and `description`. |
| `value` | The updated value of the field you want to update. |
| `from` | The original value of the field you want to update. |

+++

**Response**

A successful response HTTP status 200 with information about your newly updated tag category.

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
curl -X DELETE https://experience.adobe.io/unifiedtags/tagCategory/e2b7c656-067b-4413-a366-adde0401df50 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}'
```

+++

**Response**

A successful response returns HTTP status 200 along with an empty response.

## Retrieve a list of tags {#get-tags}

You can retrieve a list of tags that belong to your organization by making a GET request to the `/tags` endpoint and the ID of the tag category.

**API format**

```http
GET /tags
GET /tags?{QUERY_PARAMETERS}
```

The following optional query parameters can be used when retrieving tags.

| Query parameter | Description | Example |
| --------------- | ----------- | ------- |
| `start` | The location where the list of results starts from. You can use this to indicate the starting index for pagination of results. | `start=a` |
| `limit` | The maximum number of tags you want retrieved per page. | `limit=20` |
| `property` | The attribute you want to filter by when retrieving tags. Supported values include:<ul><li>`name`: The name of the tag.</li><li>`archived`: Whether or not the tags are archived or unarchived. You can set this value to either `true` or `false`.</li><li>`tagCategoryId`: The ID of the tag category the tag belongs to.</li></ul> | <ul><li>`property=name==TestTag`</li><li>`property=archived==false`</li><li>`property=tagCategoryId==e2b7c656-067b-4413-a366-adde0401df50`</li> |
| `sortBy` | The order in which the tags are sorted by. Supported values include `name`, `createdAt`, and `modifiedAt`. | `sortBy=name` |
| `sortOrder` | The direction in which the tag categories are sorted by. Supported values include `asc` and `desc`. | `sortOrder=asc` |


**Request**

+++A sample request to retrieve all tags belonging to a specific tag category

```shell
curl -X GET https://experience.adobe.io/unifiedtags/tags?property=tagCategoryId=e2b7c656-067b-4413-a366-adde0401df50
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}'
```

+++

**Response**

A successful response returns HTTP status 200 with details of the tags belonging to that tag category.

+++ A sample response that contains details of the requested tags.

```json
{
    "_page": {
        "count": 166,
        "limit": 10,
        "next": "eyJjb21wb3NpdGVUb2tlbiI6IntcInRva2VuXCI6XCIrUklEOn52a0owQUp3WDRrVko1d0FBQUFBQUFBPT0jUlQ6MiNUUkM6MjAjUlREOnVDTmQyWlAvWjV6TGdvUGVGR1JHQk1KNVExVmR6Mnc9I0lTVjoyI0lFTzo2NTU2NyNRQ0Y6OCNGUEM6QWdFQ0J3TG1BQ1NmQnNBQ0JBb0FBQVFBQ0FBQUNJQVlnQWVBRElBTmdBWEFFTUJCUUVBQUFBQkFRQkdBSElBR2dBQ0FENEFId0FKUkRFQUNBZ2dBUUJnQUVBQUlIb0FaZ0FDQUJNQUFRVUFBUUFCQVFScUFBc0FTQUFBRUxvQU9nQWFBQmNBQVlBQUFHSUlCUUFDQU1vQUlnQWlBQk1DQUFRQUFnZ0FnQUM2QURZQTNnQWlBR1lBQWdCZUFBY0FCZ0JlQUM4QURBQUlBQWdBQVFBQ0FBRUZBQVFFQUFBRWdBQ0FBSjRCR2dBeUFCSUFPZ0F5QU13QVNRQ0FBQUVBdGdCRUFBR0FkZ0FuQUFDZ0NBQUFBQ0lCQUFDSkFnQUJBRUFDQUg0QUhnQWFBQllBVUFFQUNCQUFFQUFRQUF4QUFzUnJBQUlFQUFBYkxoQklIQVBBQUhnUUVBTEVxQUE4RkNBQVFtcUVBd0FBTWd3Y09BSFdIa1FBZ0JGT0FTNEN4QVE0QVwiLFwicmFuZ2VcIjp7XCJtaW5cIjpcIlwiLFwibWF4XCI6XCJGRlwifX0iLCJvcmRlckJ5SXRlbXMiOlt7Iml0ZW0iOjE2OTQ0ODg2MDMwMDB9XSwicmlkIjoidmtKMEFKd1g0a1hHV2dFQUFBQUFBQT09IiwiaW5jbHVzaXZlIjp0cnVlfQ==",
        "property": [
            "tagCategoryId=e2b7c656-067b-4413-a366-adde0401df50"
        ]
    },
    "tags": [
        {
            "archived": false,
            "createdAt": 1705624523000,
            "createdBy": "{USER_ID}",
            "id": "8af14b1e-f267-44ad-b94c-9ac70274e3d5",
            "modifiedAt": 1705624523000,
            "modifiedBy": "{USER_ID}",
            "name": "xql-test-1705624481530",
            "org": "{ORG_ID}",
            "tagCategoryId": "e2b7c656-067b-4413-a366-adde0401df50",
            "tagCategoryName": "Test Category"
        },
        {
            "archived": false,
            "createdAt": 1705624523000,
            "createdBy": "{USER_ID}",
            "id": "8b907a2c-0f15-4d2c-9672-bf545d5e47ab",
            "modifiedAt": 1705624523000,
            "modifiedBy": "{USER_ID}",
            "name": "xql-test-1705624489131",
            "org": "{ORG_ID}",
            "tagCategoryId": "e2b7c656-067b-4413-a366-adde0401df50",
            "tagCategoryName": "Test Category"
        },
        {
            "archived": false,
            "createdAt": 1705624523000,
            "createdBy": "{USER_ID}",
            "id": "e30bd956-afad-40a1-8f4a-7e4428855856",
            "modifiedAt": 1705624523000,
            "modifiedBy": "{USER_ID}",
            "name": "xql-test-1705624494191",
            "org": "{ORG_ID}",
            "tagCategoryId": "e2b7c656-067b-4413-a366-adde0401df50",
            "tagCategoryName": "Test Category"
        },
        {
            "archived": false,
            "createdAt": 1705451722000,
            "createdBy": "{USER_ID}",
            "id": "3bf6a6ba-0b11-4d83-8f35-db6e5b9652d8",
            "modifiedAt": 1705451722000,
            "modifiedBy": "{USER_ID}",
            "name": "xql-test-1705451701640",
            "org": "{ORG_ID}",
            "tagCategoryId": "e2b7c656-067b-4413-a366-adde0401df50",
            "tagCategoryName": "Test Category"
        },
        {
            "archived": false,
            "createdAt": 1705422929000,
            "createdBy": "{USER_ID}",
            "id": "0910dfc8-7924-473d-afc6-1aa68337b3b6",
            "modifiedAt": 1705422929000,
            "modifiedBy": "{USER_ID}",
            "name": "xql-test-1705422890399",
            "org": "{ORG_ID}",
            "tagCategoryId": "e2b7c656-067b-4413-a366-adde0401df50",
            "tagCategoryName": "Test Category"
        },
        {
            "archived": false,
            "createdAt": 1705394126000,
            "createdBy": "{USER_ID}",
            "id": "b426085e-580b-4147-9921-8ba77ffa77a9",
            "modifiedAt": 1705394126000,
            "modifiedBy": "{USER_ID}",
            "name": "xql-test-1705394104556",
            "org": "{ORG_ID}",
            "tagCategoryId": "e2b7c656-067b-4413-a366-adde0401df50",
            "tagCategoryName": "Test Category"
        },
        {
            "archived": true,
            "createdAt": 1705392795000,
            "createdBy": "{USER_ID}",
            "id": "92961035-e72b-45a0-9625-781380017585",
            "modifiedAt": 1705392832000,
            "modifiedBy": "{USER_ID}",
            "name": "xql-test-1705392794917",
            "org": "{ORG_ID}",
            "tagCategoryId": "e2b7c656-067b-4413-a366-adde0401df50",
            "tagCategoryName": "Test Category"
        },
        {
            "archived": false,
            "createdAt": 1705335274000,
            "createdBy": "{USER_ID}",
            "id": "436ce801-ef87-45fd-b34a-9ce938a447e1",
            "modifiedAt": 1705335274000,
            "modifiedBy": "{USER_ID}",
            "name": "xql-test-1705335252944",
            "org": "{ORG_ID}",
            "tagCategoryId": "e2b7c656-067b-4413-a366-adde0401df50",
            "tagCategoryName": "Test Category"
        },
        {
            "archived": false,
            "createdAt": 1694776514000,
            "createdBy": "{USER_ID}",
            "id": "1e6e9836-5e18-4340-a959-3206c9bc3a94",
            "modifiedAt": 1694776514000,
            "modifiedBy": "{USER_ID}",
            "name": "xql-test-1694776510734",
            "org": "{ORG_ID}",
            "tagCategoryId": "e2b7c656-067b-4413-a366-adde0401df50",
            "tagCategoryName": "Test Category"
        },
        {
            "archived": false,
            "createdAt": 1694488609000,
            "createdBy": "{USER_ID}",
            "id": "b8400673-2f90-48e9-b73b-cdfbba5ab361",
            "modifiedAt": 1694488609000,
            "modifiedBy": "{USER_ID}",
            "name": "xql-test-1694488608301",
            "org": "{ORG_ID}",
            "tagCategoryId": "e2b7c656-067b-4413-a366-adde0401df50",
            "tagCategoryName": "Test Category"
        }
    ]
}
```

+++

## Create a new tag {#create-tag}

>[!IMPORTANT]
>
>Only the system administrator and product administrator can use this API call to create a new tag in a specified tag category.
>
>If you are creating an un-categorized tag, you do **not** need administrator permissions. 

You can create a new tag by making a POST request to the `/tags` endpoint.

**API format**

```http
POST /tags
```

**Request**

+++A sample request to create a new tag.

```shell
curl -X POST https://experience.adobe.io/unifiedtags/tags
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}'
 -d '{
    "name": "sampleTag"
 }'
```

| Property | Description |
| -------- | ----------- |
| `name` | **Required**. The name of the tag you want to create. |
| `tagCategoryId` | *Optional*. The ID of the tag category that you want the tag to belong to. If not specified, the tag will be created as part of the Uncategorized category. |

+++

**Response**

A successful response returns HTTP status 201 with details of your newly created tag.

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
| `name` | The name of the newly created tag. |
| `id` | The ID of the newly created tag. |
| `org` | The ID of the organization the tag belongs to. |
| `createdAt` | The timestamp of when the tag was created. |
| `createdBy` | The ID of the user who created the tag. |
| `modifiedAt` | The timestamp of when the tag was last updated. |
| `modifiedBy` | The ID of the user who last updated the tag. |
| `tagCategoryId` | The ID of the tag category that the tag belongs to. |
| `tagCategoryName` | The name of the tag category that the tag belongs to. |

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
curl -X GET https://experience.adobe.io/unifiedtags/tags/2bd5ddd9-7284-4767-81d9-c75b122f2a6a \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}'
```

+++

**Response**

A successful response returns HTTP status 200 with details of the specified tag.

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
    "tagCategoryId": "Test Category-{ORG_ID}",
    "tagCategoryName": "Test Category",
    "archived": false
}
```

| Parameter | Description |
| --------- | ----------- |
| `name` | The name of the tag you retrieved. |
| `id` | The ID of the tag you retrieved. |
| `org` | The ID of the organization the tag belongs to. |
| `createdAt` | The timestamp of when the tag was created. |
| `createdBy` | The ID of the user who created the tag. |
| `modifiedAt` | The timestamp of when the tag was last updated. |
| `modifiedBy` | The ID of the user who last updated the tag. |
| `tagCategoryId` | The ID of the tag category that the tag belongs to. |
| `tagCategoryName` | The name of the tag category that the tag belongs to. |
| `archived` | The archival status of the tag. If set to `true`, it means that the tag is archived. |

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
curl -X POST https://experience.adobe.io/unifiedtags/tags/validate
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}'
 -d '{
    "ids": [
        "2bd5ddd9-7284-4767-81d9-c75b122f2a6a","d113f40c-0097-4626-8d5f-6d5017694453", "invalid-tag"
    ],
    "entity": "{API_KEY}"
 }'
```

| Property | Description |
| -------- | ----------- |
| `ids` | An array that contains a list of tag IDs you want to validate. |
| `entity` | The entity that is requesting the validation. You can use the `{API_KEY}` value for this parameter. |

+++

**Response**

A successful response returns HTTP status 200 with information about which tags are valid and invalid.

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
| `invalidTags` | An array that contains a list of the invalid tag IDs. |
| `validTags` | An array that contains a list of the valid tag IDs. |

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
curl -X GET https://experience.adobe.io/unifiedtags/tags/2bd5ddd9-7284-4767-81d9-c75b122f2a6a \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}'
 -d '[{
    "op": "replace",
    "path": "name",
    "value": "newSampleTag",
    "from": "sampleTag"
 }]'
```

| Property | Description |
| -------- | ----------- |
| `op` | The operation that needs to be done. In this use case, it'll always be set to `replace`. |
| `path` | The path of the field that will be updated. Supported values include `name`, `archived`, and `tagCategoryId`. |
| `value` | The updated value of the field you want to update. |
| `from` | The original value of the field you want to update. |

+++

**Response**

A successful response returns HTTP status 200 with details of the newly updated tag.

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
    "tagCategoryId": "Test Category-{ORG_ID}",
    "tagCategoryName": "Test Category",
    "archived": false
}
```

+++

## Delete a specific tag {#delete-tag}

>[!IMPORTANT]
>
>Only the system administrator and product administrator can use this API call.
>
>Additionally, the tag **cannot** be associated with any business objects and **must** be archived before you can delete the tag. You can archive the tag by using the [update tag endpoint](#update-tag).

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
curl -X DELETE https://experience.adobe.io/unifiedtags/tags/2bd5ddd9-7284-4767-81d9-c75b122f2a6a \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}'
```

+++

**Response**

A successful response returns HTTP status 200 along with an empty response.

## Next steps

After reading this guide, you have a better understanding of how to create, manage, and delete tags and tag categories using the Adobe Experience Platform APIs. For more information on managing tags using the UI, please read the [managing tags guide](../ui/managing-tags.md). For more information on managing tag categories using the UI, please read the [tag categories guide](../ui/tags-categories.md).
