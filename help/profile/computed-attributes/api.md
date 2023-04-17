---
title: Computed Attributes API Endpoint
description: In Adobe Experience Platform, computed attributes are functions used to aggregate event-level data into profile-level attributes. These functions are automatically computed so that they can be used across segmentation, activation, and personalization. This guide shows how to create, view, update, and delete computed attributes using the Real-Time Customer Profile API.
badge: "Beta"
---
# Computed attributes API endpoint

Computed attributes are functions used to aggregate event-level data into profile-level attributes. These functions are automatically computed so that they can be used across segmentation, activation, and personalization. This guide includes sample API calls for performing basic CRUD operations using the `/attributes` endpoint. 

To learn more about computed attributes, please begin by reading the [computed attributes overview](overview.md).

## Getting started

The API endpoint used in this guide is part of the [Real-Time Customer Profile API](https://www.adobe.com/go/profile-apis-en). 

Before continuing, please review the [Profile API getting started guide](../api/getting-started.md) for links to recommended documentation, a guide to reading the sample API calls that appear in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

Additionally, please review the documentation for the following service:

- [[!DNL Experience Data Model (XDM) System]](../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
  -  [Schema Registry getting started guide](../../xdm/api/getting-started.md#know-your-tenant_id): Information about your `{TENANT_ID}`, which appears in responses throughout this guide, is provided.

## Retrieve a list of computed attributes {#list}

You can retrieve a list of all the computed attributes for your organization by making a GET request to the `/ca/attributes` endpoint. 

**API format**

The `/attributes` endpoint supports several query parameters to help filter your results. While these parameters are optional, their use is strongly recommended to help reduce expensive overhead when listing resources. If you make a call to this endpoint with no parameters, all computed attributes available for your organization will be retrieved. Multiple parameters can be included, separated by ampersands (`&`). 

```http
GET /attributes
GET /attributes?{QUERY_PARAMETERS}
```

The following query parameters can be used when retrieving a list of computed attributes:

| Query parameter | Description | Example |
| --------------- | ----------- | ------- |
| `limit` | A parameter that specifies the maximum number of items returned as part of the response. The minimum value of this parameter is 1 and the maximum value is 40. If this parameter is not included, by default, 20 items will be returned. | `limit=20` |
| `offset` | A parameter that specifies the number of items to skip before returning the items. | `offset=5` |
| `sortBy` | A parameter that specifies the order in which the returned items are sorted. Available options include `name`, `status`, `updateEpoch`, and `createEpoch`. You can also choose whether to sort in ascending order or descending order by not including or including a `-` in front of the sort option. By default, the items will be sorted by `updateEpoch` in descending order. | `sortBy=name` |
| `status` | A parameter that lets you filter by the status of the computed attribute. Available options include `draft`, `new`, `processing`, `processed`, `failed`, `disabled`. This option is case insensitive. | `status=draft` | 

**Request**

The following request retrieves the last three computed attributes that were updated in your organization.

```shell
curl -X GET https://platform.adobe.io/data/core/ca/attributes?limit=3 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with a list of the last 3 updated computed attributes that belong to your organization and sandbox.

```json
{
    "_links": {
        "last": {
            "href": "/attributes?offset=3&limit=1"
        },
        "next": {
            "href": "/attributes?offset=20&limit=20"
        },
        "prev": {
            "href": "/attributes?offset=0&limit=20"
        },
        "self": {
            "href": "/attributes?offset=0&limit=20"
        }
    },
    "computedAttributes": [
        {
            "id": "2e3bf98c-5840-4eb5-98c9-fcd7bde82188",
            "type": "ComputedAttribute",
            "name": "multipleFilterClauses19",
            "displayName": "Multiple Filter Clauses 19",
            "description": "Multiple Filter Clauses 19",
            "imsOrgId": "{ORG_ID}",
            "sandbox": {
                "sandboxId": "e4f64b40-d8d9-11e9-a7ce-f3356ed0508b",
                "sandboxName": "prod",
                "type": "production",
                "default": true
            },
            "path": "{TENANT_ID}}",
            "positionPath": [
                "{TENANT_ID}"
            ],
            "expression": {
                "type": "PQL",
                "format": "pql/text",
                "value": "xEvent[(commerce.checkouts.value > 0.0 or commerce.purchases.value > 1.0 or commerce.order.priceTotal >= 10.0) and (timestamp occurs <= 7 days before now)].sum(commerce.order.priceTotal)",
                "meta": " "
            },
            "mergeFunction": {
                "value": "-"
            },
            "status": "DRAFT",
            "schema": {
                "name": "_xdm.context.profile"
            },
            "definedOn": [
                {
                    "meta:resourceType": "unions",
                    "meta:containerId": "tenant",
                    "$ref": "https://ns.adobe.com/xdm/context/profile__union"
                }
            ],
            "createEpoch": 1671223530322,
            "updateEpoch": 1673043640946,
            "createdBy": "{USER_ID}"
        },
        {
            "id": "d9fbbd3d-049a-4561-b826-adc162511950",
            "type": "ComputedAttribute",
            "name": "multipleFilterClauses20",
            "displayName": "Multiple Filter Clauses 20",
            "description": "Multiple Filter Clauses 20",
            "imsOrgId": "{ORG_ID}",
            "sandbox": {
                "sandboxId": "e4f64b40-d8d9-11e9-a7ce-f3356ed0508b",
                "sandboxName": "prod",
                "type": "production",
                "default": true
            },
            "path": "{TENANT_ID}",
            "positionPath": [
                "{TENANT_ID}"
            ],
            "expression": {
                "type": "PQL",
                "format": "pql/text",
                "value": "xEvent[(commerce.checkouts.value > 0.0 or commerce.purchases.value > 1.0 or commerce.order.priceTotal >= 10.0) and (timestamp occurs <= 7 days before now)].sum(commerce.order.priceTotal)",
                "meta": " "
            },
            "mergeFunction": {
                "value": "-"
            },
            "status": "DRAFT",
            "schema": {
                "name": "_xdm.context.profile"
            },
            "definedOn": [
                {
                    "meta:resourceType": "unions",
                    "meta:containerId": "tenant",
                    "$ref": "https://ns.adobe.com/xdm/context/profile__union"
                }
            ],
            "createEpoch": 1671223586455,
            "updateEpoch": 1671223586455,
            "createdBy": "{USER_ID}"
        },
        {
            "id": "afedff07-9d15-4385-b181-49708229d73b",
            "type": "ComputedAttribute",
            "name": "multipleFilterClauses18",
            "displayName": "Multiple Filter Clauses 18",
            "description": "Multiple Filter Clauses 18",
            "imsOrgId": "{ORG_ID}",
            "sandbox": {
                "sandboxId": "e4f64b40-d8d9-11e9-a7ce-f3356ed0508b",
                "sandboxName": "prod",
                "type": "production",
                "default": true
            },
            "path": "{TENANT_ID}",
            "positionPath": [
                "{TENANT_ID}"
            ],
            "expression": {
                "type": "PQL",
                "format": "pql/text",
                "value": "xEvent[(commerce.checkouts.value > 0.0 or commerce.purchases.value > 1.0 or commerce.order.priceTotal >= 10.0) and (timestamp occurs <= 7 days before now)].sum(commerce.order.priceTotal)",
                "meta": " "
            },
            "mergeFunction": {
                "value": "-"
            },
            "status": "DRAFT",
            "schema": {
                "name": "_xdm.context.profile"
            },
            "definedOn": [
                {
                    "meta:resourceType": "unions",
                    "meta:containerId": "tenant",
                    "$ref": "https://ns.adobe.com/xdm/context/profile__union"
                }
            ],
            "createEpoch": 1671220358902,
            "updateEpoch": 1671220358902,
            "createdBy": "{USER_ID}"
        }
    ],
    "_page": {
        "offset": 0,
        "limit": 20,
        "count": 3,
        "totalCount": 3
    }
}
```

| Property | Description |
| -------- | ----------- |
| `_links` | An object that contains the pagination information required to access the last page of results, the next page of results, the previous page of results, or the current page of results. |
| `computedAttributes` | An array that contains the computed attributes based on your query parameters. More information about the computed attributes array can be found in the [retrieve a specific computed attribute section](#get). |
| `_page` | An object that contains metadata about the returned results. This includes information about the current offset, the count of computed attributes returned, the total count of computed attributes, as well as the limit of computed attributes returned. |

## Create a computed attribute {#create}

To create a computed attribute, begin by making a POST request to the `/attributes` endpoint with a request body containing the details of the computed attribute that you wish to create.

**API format**

```http
POST /attributes
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/core/ca/attributes \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}'\
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "name": "testing",
        "displayName": "Sample Display Name",
        "description": "Sample Description",
        "expression": {
            "type": "PQL", 
            "format": "pql/text", 
            "value": "xEvent[(commerce.checkouts.value > 0.0 or commerce.purchases.value > 1.0 or commerce.order.priceTotal >= 10.0) and (timestamp occurs <= 7 days before now)].sum(commerce.order.priceTotal)"
        },
        "duration": {
            "count": 4,
            "unit": "DAYS"
        },
        "status": "DRAFT"
      }'
```

| Property | Description |
| -------- | ----------- |
| `name` | The name of the computed attribute field, as a string. |
| `description` | A description of the computed attribute. This is especially useful once multiple computed attributes have been defined as it will help others within your organization to determine the correct computed attribute to use. |
| `displayName` | The display name for the computed attribute. This is the name that will be displayed when listing your computed attributes within the Adobe Experience Platform UI. |
| `expression` | An object that represents the query expression of the computed attribute you are trying to create. |
| `expression.type` | The type of the expression. Currently, only PQL is supported. |
| `expression.format` | The format of the expression. Currently, only `pql/text` is supported. |
| `expression.value` | The value of the expression. |
| `duration` | An object that represents the lookback period for the computed attribute. The lookback period represents how far back can be looked back to compute the computed attribute. |
| `duration.count` | A number that represents the duration for the lookback period. The possible values depend on the value of the `duration.unit` field. <ul><li>`HOURS`: 1-24</li><li>`DAYS`: 1-7</li><li>`WEEKS`: 1-4</li><li>`MONTHS`: 1-6</li></ul> |
| `duration.unit` | A string that represents the unit of time that will be used for the lookback period. Possible values include: `HOURS`, `DAYS`, `WEEKS`, and `MONTHS`. |
| `status` | The status of the computed attribute. Possible values include `DRAFT`, `NEW`, and `PUBLISHED`. |

**Response**

A successful response returns HTTP status 200 with information about your newly created computed attribute.

```json
{
    "id": "1e8d0d77-b2bb-4b17-bbe6-2dbc08c1a631",
    "type": "ComputedAttribute",
    "name": "testing",
    "displayName": "Sample Display Name",
    "description": "Sample Description",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "02dd69f0-da73-11e9-9ea1-af59ce7c24e8",
        "sandboxName": "prod",
        "type": "production",
        "isDefault": true
    },
    "path": "{TENANT_ID}",
    "positionPath": [
        "{TENANT_ID}"
    ],
    "keepCurrent": false,
    "expression": {
        "type": "PQL",
        "format": "pql/text",
        "value": "xEvent[(commerce.checkouts.value > 0.0 or commerce.purchases.value > 1.0 or commerce.order.priceTotal >= 10.0) and (timestamp occurs <= 7 days before now)].sum(commerce.order.priceTotal)"
    },
    "mergeFunction": {
        "value": "SUM"
    },
    "status": "DRAFT",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "returnSchema": {
        "meta:xdmType": "number"
    },
    "definedOn": [
        {
            "meta:resourceType": "unions",
            "meta:containerId": "tenant",
            "$ref": "https://ns.adobe.com/xdm/context/profile__union"
        }
    ],
    "createEpoch": 1680070188696,
    "updateEpoch": 1680070188696,
    "createdBy": "{USER_ID}"
}
```

| Property | Description |
| -------- | ----------- |
| `id` | The system-generated ID of your newly created computed attribute. |
| `status` | The computed attribute's status. This can either be `DRAFT` or `NEW`. |
| `createEpoch` | The time at which the computed attribute was created, in seconds. |
| `updateEpoch`| The time at which the computed attribute was last updated, in seconds. |
| `createdBy` | The ID of the user who created the computed attribute. |

## Retrieve a specific computed attribute {#get}

You can retrieve detailed information about a specific computed attribute by making a GET request to the `/attributes` endpoint and providing the ID of the computed attribute you wish to retrieve in the request path.

**API format**

```http
GET /attributes/{ATTRIBUTE_ID}
```

**Request**

```shell
curl -X GET 'https://platform.adobe.io/data/core/ca/attributes/1e8d0d77-b2bb-4b17-bbe6-2dbc08c1a631' \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with detailed information about the specified computed attribute.

```json
{
    "id": "1e8d0d77-b2bb-4b17-bbe6-2dbc08c1a631",
    "type": "ComputedAttribute",
    "name": "testing",
    "displayName": "Sample Display Name",
    "description": "Sample Description",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "02dd69f0-da73-11e9-9ea1-af59ce7c24e8",
        "sandboxName": "prod",
        "type": "production",
        "isDefault": true
    },
    "path": "{TENANT_ID}",
    "positionPath": [
        "{TENANT_ID}}"
    ],
    "keepCurrent": false,
    "expression": {
        "type": "PQL",
        "format": "pql/text",
        "value": "xEvent[(commerce.checkouts.value > 0.0 or commerce.purchases.value > 1.0 or commerce.order.priceTotal >= 10.0) and (timestamp occurs <= 7 days before now)].sum(commerce.order.priceTotal)"
    },
    "mergeFunction": {
        "value": "SUM"
    },
    "status": "DRAFT",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "returnSchema": {
        "meta:xdmType": "number"
    },
    "definedOn": [
        {
            "meta:resourceType": "unions",
            "meta:containerId": "tenant",
            "$ref": "https://ns.adobe.com/xdm/context/profile__union"
        }
    ],
    "createEpoch": 1680070188696,
    "updateEpoch": 1680070188696,
    "createdBy": "{USER_ID}"
}
```

| Property | Description |
| -------- | ----------- |
| `id` | A unique, read-only, system-generated ID that can be used for referencing the computed attribute during other API operations. |
| `type` | A string that shows that the returned object is a computed attribute. |
| `imsOrgId` | The ID of the organization the computed attribute belongs to. |
| `sandbox` | The sandbox object contains details of the sandbox within which the computed attribute was configured. This information is drawn from the sandbox header sent in the request. For more information, please see the [sandboxes overview](../../sandboxes/home.md). |
| `path` | The `path` to the computed attribute. |
| `positionPath` | An array containing the deconstructed `path` to the computed attribute. |
| `expression` | An object that contains the computed attribute's expression. |
| `mergeFunction` | An object that contains the merge function for the computed attribute. This value is based off of the corresponding aggregation parameter within the computed attribute's expression. |
| `status` | The computed attribute's status. This can be one of the following values: `DRAFT`, `NEW`, `PROCESSING`, `PROCESSED`, `FAILED`, `DISABLED`, or `DELETED`. |
| `schema` | An object that contains information about the schema where the expression is evaluated in. Currently, only `_xdm.context.profile` is supported. |
| `returnSchema` | An object that contains the return type supported by the PQL expression. |
| `definedOn` | An array showing the union schemas upon which the computed attribute has been defined. Contains one object per union schema, meaning there may be multiple objects within the array if the computed attribute has been added to multiple schemas based on different classes. |
| `createEpoch` | The time at which the computed attribute was created, in seconds. |
| `updateEpoch`| The time at which the computed attribute was last updated, in seconds. |
| `createdBy` | The ID of the user who created the computed attribute. |

## Delete a specific computed attribute {#delete}

You can deleted a specific computed attribute by making a DELETE request to the `/attributes` endpoint and providing the ID of the computed attribute you wish to delete in the request path.

>[!IMPORTANT]
>
>The delete request can only be used to delete computed attributes that have a status of **draft** (`DRAFT`). This endpoint **cannot** be used to delete computed attributes that are published.

**API format**

```http
DELETE /attributes/{ATTRIBUTE_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{ATTRIBUTE_ID}` | The `id` value of the computed attribute you want to delete. |

**Request**

```shell
curl -X DELETE https://platform.adobe.io/data/core/ca/attributes/1e8d0d77-b2bb-4b17-bbe6-2dbc08c1a631 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 202 with details of the deleted computed attribute.

```json
{
    "id": "03ae581b-5f7b-48da-a9eb-4ef0daf4bc3c",
    "type": "ComputedAttribute",
    "name": "testdemopd2",
    "displayName": "testdemopd2",
    "description": "testdemopd2",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "02dd69f0-da73-11e9-9ea1-af59ce7c24e8",
        "sandboxName": "prod",
        "type": "production",
        "isDefault": true
    },
    "path": "{TENANT_ID}",
    "positionPath": [
        "{TENANT_ID}"
    ],
    "keepCurrent": false,
    "expression": {
        "type": "PQL",
        "format": "pql/text",
        "value": "xEvent[(commerce.shipping.shipDate occurs <= 1 days before now) and (timestamp occurs <= 1 days before now)].min(commerce.shipping.shipDate)"
    },
    "mergeFunction": {
        "value": "MIN"
    },
    "status": "DRAFT",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "returnSchema": {
        "meta:xdmType": "string"
    },
    "definedOn": [
        {
            "meta:resourceType": "unions",
            "meta:containerId": "tenant",
            "$ref": "https://ns.adobe.com/xdm/context/profile__union"
        }
    ],
    "createEpoch": 1681365690928,
    "updateEpoch": 1681365690928,
    "createdBy": "{USER_ID}"
}
```

## Update a specific computed attribute

You can update a specific computed attribute by making a PATCH request to the `/attributes` endpoint and providing the ID of the computed attribute you wish to update in the request path.

>[!IMPORTANT]
>
>When updating a computed attribute, only the following fields can be updated:
>
>- If the current status is `NEW`, the `displayName` and `description` can be updated. The status can also be changed to `DISABLED`.
>- If the current status is `DRAFT`, the status can only be changed to `NEW`.
>- If the current status is either `PROCESSING` or `PROCESSED`, the status can only be changed to `DISABLED`.

**API format**

```http
PATCH /attributes/{ATTRIBUTE_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{ATTRIBUTE_ID}` | The `id` value of the computed attribute you want to update. |

**Request**

The following request will update the status of the computed attribute from `DRAFT` to `NEW`.

```shell
curl -X PATCH https://platform.adobe.io/data/core/ca/attributes/1e8d0d77-b2bb-4b17-bbe6-2dbc08c1a631 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
 {
    "description": "Sample Description",
    "expression": {
        "type": "PQL",
        "format": "pql/text",
        "value": "xEvent[(commerce.checkouts.value > 0.0 or commerce.purchases.value > 1.0 or commerce.order.priceTotal >= 10.0) and (timestamp occurs <= 7 days before now)].sum(commerce.order.priceTotal)"
    },
    "status": "NEW"
 }'
```

**Response**

A successful response returns HTTP status 200 with information about your newly updated computed attribute.

```json
{
    "id": "1e8d0d77-b2bb-4b17-bbe6-2dbc08c1a631",
    "type": "ComputedAttribute",
    "name": "testing123",
    "displayName": "Sample Display Name",
    "description": "Sample Description",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "02dd69f0-da73-11e9-9ea1-af59ce7c24e8",
        "sandboxName": "prod",
        "type": "production",
        "isDefault": true
    },
    "path": "{TENANT_ID}",
    "positionPath": [
        "{TENANT_ID}"
    ],
    "keepCurrent": false,
    "expression": {
        "type": "PQL",
        "format": "pql/text",
        "value": "xEvent[(commerce.checkouts.value > 0.0 or commerce.purchases.value > 1.0 or commerce.order.priceTotal >= 10.0) and (timestamp occurs <= 7 days before now)].sum(commerce.order.priceTotal)"
    },
    "mergeFunction": {
        "value": "SUM"
    },
    "status": "NEW",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "returnSchema": {
        "meta:xdmType": "number"
    },
    "definedOn": [
        {
            "meta:resourceType": "unions",
            "meta:containerId": "tenant",
            "$ref": "https://ns.adobe.com/xdm/context/profile__union"
        }
    ],
    "createEpoch": 1680071726825,
    "updateEpoch": 1680074429192,
    "createdBy": "{USER_ID}"
}
```

## Next steps

Now that you have learned the basics of computed attributes, you are ready to begin defining them for your organization. To learn how to use computed attributes in the Experience Platform UI, please read the [computed attributes UI guide](./ui.md).
