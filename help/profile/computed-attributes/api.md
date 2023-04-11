---
title: Computed Attributes API Endpoint
description: In Adobe Experience Platform, computed attributes are functions used to aggregate event-level data into profile-level attributes. These functions are automatically computed so that they can be used across segmentation, activation, and personalization. This guide shows how to create, view, update, and delete computed attributes using the Real-Time Customer Profile API.
badge: "Beta"
---
# Computed attributes API endpoint

Computed attributes are functions used to aggregate event-level data into profile-level attributes. These functions are automatically computed so that they can be used across segmentation, activation, and personalization. This guide includes sample API calls for performing basic CRUD operations using the `/computedAttributes` endpoint. 

To learn more about computed attributes, please begin by reading the [computed attributes overview](overview.md).

## Getting started

The API endpoint used in this guide is part of the [Real-Time Customer Profile API](https://www.adobe.com/go/profile-apis-en). 

Before continuing, please review the [Profile API getting started guide](../api/getting-started.md) for links to recommended documentation, a guide to reading the sample API calls that appear in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Retrieve a list of computed attributes {#list}

You can retrieve a list of all the computed attributes for your organization by making a GET request to the `/ca/attributes` endpoint. 

**API format**

The `/attributes` endpoint supports several query parameters to help filter your results. While these parameters are optional, their use is strongly recommended to help reduce expensive overhead when listing resources. If you make a call to this endpoint with no parameters, all computed attributes available for your organization will be retrieved. Multiple parameters can be included, separated by ampersands (`&`). 

```http
GET /ca
GET /ca?{QUERY_PARAMETERS}
```

The following query parameters can be used when retrieving a list of computed attributes:

| Query parameter | Description | Example |
| --------------- | ----------- | ------- |
| `limit` | A parameter that specifies the maximum number of items returned as part of the response. The minimum value of this parameter is 1 and the maximum value is 40. If this parameter is not included, by default, 20 items will be returned. | `limit=20` |
| `offset` | A parameter that specifies the number of items to skip before returning the items. | `offset=5` |
| `sortBy` | A parameter that specifies the order in which the returned items are sorted. Available options include `name`, `status`, `updateEpoch`, and `createEpoch`. You can also choose whether to sort in ascending order or descending order by not including or including a `-` in front of the sort option. By default, the items will be sorted by `updateEpoch` in descending order. | `sortBy=name` |
| `status` | A parameter that lets you filter by the status of the computed attribute. Available options include `enabled`, `enabling`, `failed`, `success`, `running`, `disabled`, and `disabling`. This option is case insensitive. | `status=enabled` | 
| `state` | A parameter that lets you filter by the state of the computed attribute. Available options include `published` or `draft`. This option is case insensitive. | `state=published` |

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
            "status": {
                "type": "PUBLISHED",
                "job": "ENABLED"
            },
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
            "status": {
                "type": "DRAFT",
                "job": "NOT_STARTED"
            },
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
            "status": {
                "type": "DRAFT",
                "job": "NOT_STARTED"
            },
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
| `computedAttributes` | An array that contains the computed attributes based on your query parameters. |
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
        "name": "sampleAttribute",
        "description": "A sample computed attribute that checks if all the purchases made by a user in the last seven days is greater than $10.",
        "displayName": "Sample Attribute",
        "expression": {
            "type": "PQL", 
            "format": "pql/text", 
            "value": "xEvent[(commerce.checkouts.value > 0.0 or commerce.purchases.value > 1.0 or commerce.order.priceTotal >= 10.0) and (timestamp occurs <= 7 days before now)].sum(commerce.order.priceTotal)"
        },
        "duration": {
            "count": 4,
            "unit": "DAYS"
        }
          
      }'
```

| Property | Description |
| -------- | ----------- |
| `name` | The name of the computed attribute field, as a string.|
| `description` | A description of the computed attribute. This is especially useful once multiple computed attributes have been defined as it will help others within your organization to determine the correct computed attribute to use. |
| `displayName` | The display name for the computed attribute. This is the name that will be displayed when listing your computed attributes within the Adobe Experience Platform UI. |
| `expression` | An object that represents the query expression of the computed attribute you are trying to create. |
| `expression.type` | The type of the expression. Currently, only PQL is supported. |
| `expression.format` | The format of the expression. Currently, only `pql/text` is supported. |
| `expression.value` | The value of the expression. |
| `duration` | An object that represents the lookback period for the computed attribute. |
| `duration.count` | A number that represents the duration for the lookback period. The possible values depend on the value of the `duration.unit` field. <ul><li>`HOURS`: 1-24</li><li>`DAYS`: 1-7</li><li>`WEEKS`: 1-4</li><li>`MONTHS`: 1-6</li></ul> |
| `duration.unit` | A string that represents the unit of time that will be used for the lookback period. Possible values include: `HOURS`, `DAYS`, `WEEKS`, and `MONTHS`. |

**Response**

A successful response returns HTTP Status 200 (OK) with information about your newly created computed attribute.

```json
{
    "id": "955fd500-fd4a-42fb-8518-d5f75287479a",
    "type": "ComputedAttribute",
    "name": "testdemso1s1",
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
    "status": {
        "type": "DRAFT",
        "job": "NOT_STARTED"
    },
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
| `status` | An object that contains the status of the computed attribute. |
| `status.type` | The name of the computed attribute's status. This can either be `PUBLISHED` or `DRAFT`. |
| `status.job` | ??? |
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
curl -X GET 'https://platform.adobe.io/data/core/ca/attributes/955fd500-fd4a-42fb-8518-d5f75287479a' \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with detailed information about the specified computed attribute.

```json
{
    "id": "955fd500-fd4a-42fb-8518-d5f75287479a",
    "type": "ComputedAttribute",
    "name": "testdemso1s1",
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
    "status": {
        "type": "DRAFT",
        "job": "NOT_STARTED"
    },
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
| `status` | An object that contains the status of the computed attribute. |
| `status.type` | The name of the computed attribute's status. This can either be `PUBLISHED` or `DRAFT`. |
| `status.job` | ??? |
| `schema` | An object that contains information about the schema where the expression is evaluated in. Currently, only `_xdm.context.profile` is supported. |
| `returnSchema` | An object that contains the return type supported by the PQL expression. |
| `definedOn` | An array showing the union schemas upon which the computed attribute has been defined. Contains one object per union schema, meaning there may be multiple objects within the array if the computed attribute has been added to multiple schemas based on different classes. |
| `createEpoch` | The time at which the computed attribute was created, in seconds. |
| `updateEpoch`| The time at which the computed attribute was last updated, in seconds. |
| `createdBy` | The ID of the user who created the computed attribute. |

## Delete a specific computed attribute {#delete}

You can deleted a specific computed attribute by making a DELETE request to the `/attributes` endpoint and providing the ID of the computed attribute you wish to delete in the request path.

**API format**

```http
DELETE /attributes/{ATTRIBUTE_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{ATTRIBUTE_ID}` | The `id` value of the computed attribute you want to delete. |

## Access computed attributes

When working with computed attributes using the API, there are two options for accessing computed attributes that have been defined by your organization. The first is to list all computed attributes, the second is to view a specific computed attribute by its unique `id`.

Steps for both access patterns are outlined in this document. Select one of the following to begin:

* **[List all existing computed attributes](#list-all-computed-attributes):** Return a list of all existing computed attributes that your organization has created.
* **[View a specific computed attribute](#view-a-computed-attribute):** Return the details of a single computed attribute by specifying its ID during the request.

### List all computed attributes {#list-all-computed-attributes}

Your IMS Organization may create multiple computed attributes, and performing a GET request to the `/config/computedAttributes` endpoint allows you list all existing computed attributes for your organization.

**API format**

```http
GET /config/computedAttributes
```

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/config/computedAttributes/ \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \ 
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

A successful response includes a `_page` attribute providing the total number of computed attributes (`totalCount`) and the number of computed attributes on the page (`pageSize`). 

The response also includes a `children` array composed of one or more objects, each containing the details of one computed attribute. If your organization does not have any computed attributes, the `totalCount` and `pageSize` will be 0 (zero) and the `children` array will be empty.

```json
{
    "_page": {
        "totalCount": 2,
        "pageSize": 2
    },
    "children": [
        {
            "id": "2afcf410-450e-4a39-984d-2de99ab58877",
            "imsOrgId": "{ORG_ID}",
            "sandbox": {
                "sandboxId": "ff0f6870-c46d-11e9-8ca3-036939a64204",
                "sandboxName": "prod",
                "type": "production",
                "default": true
            },
            "name": "birthdayCurrentMonth",
            "path": "person._{TENANT_ID}",
            "positionPath": [
                "person",
                "_{TENANT_ID}"
            ],
            "description": "Computed attribute to capture if the customer birthday is in the current month.",
            "expression": {
                "type": "PQL",
                "format": "pql/text",
                "value": "person.birthDate.getMonth() = currentMonth()"
            },
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
            "encodedDefinedOn":"?\b?VR)JMS?R?())(????+?KL?OJ?K???H??O??+I?(?/(?O??I??/????S?8{?E:",
            "dependencies": [],
            "dependents": [],
            "active": true,
            "type": "ComputedAttribute",
            "createEpoch": 1572555223,
            "updateEpoch": 1572555225
        },
        {
            "id": "ae0c6552-cf49-4725-8979-116366e8e8d3",
            "imsOrgId": "{ORG_ID}",
            "sandbox": {
                "sandboxId": "",
                "sandboxName": "",
                "type": "production",
                "default": true
            },
            "name": "productDownloads",
            "path": "_{TENANT_ID}",
            "positionPath": [
                "_{TENANT_ID}"
            ],
            "description": "Calculate total product downloads.",
            "expression": {
                "type": "PQL", 
                "format": "pql/text", 
                "value":  "let Y = xEvent[_coresvc.event.subType = \"DOWNLOAD\"].groupBy(_coresvc.attributes[name = \"product\"].value).map({
                  \"downloaded\": this.head()._coresvc.attributes[name = \"product\"].head().value,
                  \"downloadsSum\": this.count(),
                  \"downloadsToday\": this[timestamp occurs today].count(),
                  \"downloadsPast30Days\": this[timestamp occurs < 30 days before now].count(),
                  \"downloadsPast60Days\": this[timestamp occurs < 60 days before now].count(),
                  \"downloadsPast90Days\": this[timestamp occurs < 90 days before now].count() }) in { \"uniqueProductDownloadSum\": Y.count(), \"products\": Y }"
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
            "schema": {
                "name": "_xdm.context.profile"
            },
            "encodedDefinedOn": "\u001f?\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000?VR)JMS?R?())(????+?KL?OJ?K???H??O??+I?(?/(?O??I??/????S?\u0005\u00008{?E:\u0000\u0000\u0000",
            "dependencies": [],
            "dependents": [],
            "active": true,
            "type": "ComputedAttribute",
            "createEpoch": 1571945277,
            "updateEpoch": 1571945280
        }
    ],
    "_links": {
        "next": {}
    }
}
```

|Property|Description|
|---|---|
|`_page.totalCount`|The total number of computed attributes defined by your IMS Organization.|
|`_page.pageSize`|The number of computed attributes returned on this page of results. If `pageSize` is equal to `totalCount`, this means that there is only one page of results and all computed attributes have been returned. If they are not equal, there are additional pages of results that can be accessed. See `_links.next` for details.|
|`children`|An array composed of one or more objects, each containing the details of a single computed attribute. If no computed attributes have been defined, the `children` array is empty.|
|`id`|A unique, read-only, system-generated value assigned automatically to a computed attribute when it is created. For more information on the components of a computed attribute object, please see the section on [creating a computed attribute](#create-a-computed-attribute) earlier in this tutorial.|
|`_links.next`|If a single page of computed attributes is returned, `_links.next` is an empty object, as shown in the sample response above. If your organization has many computed attributes, they will be returned on multiple pages that you can access by make a GET request to the `_links.next` value.|

### View a computed attribute {#view-a-computed-attribute}

You can view a specific computed attribute by making a GET request to the `/config/computedAttributes` endpoint and including the computed attribute ID in the request path.

**API format**

```http
GET /config/computedAttributes/{ATTRIBUTE_ID}
```

|Parameter|Description|
|---|---|
|`{ATTRIBUTE_ID}`|The ID of the computed attribute that you wish to view.|

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/config/computedAttributes/2afcf410-450e-4a39-984d-2de99ab58877 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \ 
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

```json
{
    "id": "2afcf410-450e-4a39-984d-2de99ab58877",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "ff0f6870-c46d-11e9-8ca3-036939a64204",
        "sandboxName": "prod",
        "type": "production",
        "default": true
    },
    "name": "birthdayCurrentMonth",
    "path": "_{TENANT_ID}",
    "positionPath": [
        "_{TENANT_ID}"
    ],
    "description": "Computed attribute to capture if the customer birthday is in the current month.",
    "expression": {
        "type": "PQL",
        "format": "pql/text",
        "value": "person.birthDate.getMonth() = currentMonth()"
    },
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
    "encodedDefinedOn":"?\b?VR)JMS?R?())(????+?KL?OJ?K???H??O??+I?(?/(?O??I??/????S?8{?E:",
    "dependencies": [],
    "dependents": [],
    "active": true,
    "type": "ComputedAttribute",
    "createEpoch": 1572555223,
    "updateEpoch": 1572555225
}
```

## Update a computed attribute

Should you find that you need to update an existing computed attribute, this can be done by making a PATCH request to the `/config/computedAttributes` endpoint and including the ID of the computed attributed that you wish to update in the request path.

**API format**

```http
PATCH /config/computedAttributes/{ATTRIBUTE_ID}
```

|Parameter|Description|
|---|---|
|`{ATTRIBUTE_ID}`|The ID of the computed attribute that you wish to update.|

**Request**

This request uses [JSON Patch formatting](https://datatracker.ietf.org/doc/html/rfc6902) to update the "value" of the "expression" field.

```shell
curl -X PATCH \
  https://platform.adobe.io/data/core/ups/config/computedAttributes/ae0c6552-cf49-4725-8979-116366e8e8d3 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}'\
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \  
  -d '[
        {
          "op": "add",
          "path": "/expression",
          "value": 
          {
            "type": "PQL", 
            "format": "pql/text", 
            "value":  "{NEW_EXPRESSION_VALUE}"
          }
        }
      ]'
```

|Property|Description|
|---|---|
|`{NEW_EXPRESSION_VALUE}`|A valid [!DNL Profile Query Language] (PQL) expression. Computed attributes currently support the following functions: sum, count, min, max, and boolean. For a list of sample expressions, refer to the [sample PQL expressions](expressions.md) documentation.|

**Response**

A successful update returns HTTP Status 204 (No Content) and an empty response body. If you wish to confirm the update was successful, you can perform a GET request to view the computed attribute by its ID.

## Delete a computed attribute

It is also possible to delete a computed attribute using the API. This is done by making a DELETE request to the `/config/computedAttributes` endpoint and including the ID of the computed attribute that you wish to delete in the request path.

>[!NOTE]
>
>Please use caution when deleting a computed attribute as it may be in use in more than one schema and the DELETE operation cannot be undone.

**API format**

```http
DELETE /config/computedAttributes/{ATTRIBUTE_ID}
```

|Parameter|Description|
|---|---|
|`{ATTRIBUTE_ID}`|The ID of the computed attribute that you wish to delete.|

**Request**

```shell
curl -X DELETE \
  https://platform.adobe.io/data/core/ups/config/computedAttributes/ae0c6552-cf49-4725-8979-116366e8e8d3 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}'
  -H 'x-sandbox-name: {SANDBOX_NAME}' \ 
```

**Response**

A successful delete request returns HTTP Status 200 (OK) and an empty response body. To confirm the deletion was successful, you can perform a GET request to lookup the computed attribute by its ID. If the attribute was deleted, you will receive an HTTP Status 404 (Not Found) error.

## Create a segment definition referencing a computed attribute

Adobe Experience Platform allows you to create segments that define a group of specific attributes or behaviors from a group of profiles. A segment definition includes an expression that encapsulates a query written in PQL. These expressions can also reference computed attributes.

The following example creates a segment definition that references an existing computed attribute. To learn more about segment definitions, and how to work with them in the Segmentation Service API, please refer to the [segment definitions API endpoint guide](../../segmentation/api/segment-definitions.md).

To begin, make a POST request to the `/segment/definitions` endpoint, providing the computed attribute in the request body.

**API format**

```http
POST /segment/definitions
```

**Request**

```shell 
curl -X POST https://platform.adobe.io/data/core/ups/segment/definitions
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
        "name": "downloadedInLast7Days",
        "description": "Has product been downloaded in last 7 days?",
        "schema": {
            "name": "_xdm.context.profile"
        },
        "ttlInDays": 30,
        "expression": {
            "type": "PQL",
            "format": "pql/text",
            "value": "_{TENANT_ID}.downloadsLast7Days > 0",
            "meta": "m"
        },
        "dataGovernancePolicy": {
            "excludeOptOut": true
        },
        "evaluationInfo": {
            "batch": {
                "enabled": false
            },
            "continuous": {
                "enabled": true
            },
            "synchronous": {
                "enabled": false
            }
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `name` | A unique name for the segment, as a string. |
| `description` | A human-readable description of the definition. |
|`schema.name`|The schema associated with the entities in the segment. Consists of either an `id` or `name` field. |
| `expression` | An object containing fields with information about the segment definition. |
| `expression.type` | Specifies the expression type. Currently, only "PQL" is supported. |
| `expression.format` | Indicates the structure of the expression in value. Currently, only `pql/text` is supported.|
| `expression.value` | A valid PQL expression, in this example it includes a reference to an existing computed attribute. |

For more information on schema definition attributes, please refer to the examples provided in the [segment definitions API endpoint guide](../../segmentation/api/segment-definitions.md).

**Response**

A successful response returns HTTP status 200 with details of your newly created segment definition. To learn more about segment definition response objects, refer to the [segment definitions API endpoint guide](../../segmentation/api/segment-definitions.md).

```json

{
    "id": "add3933f-ac5c-4240-8259-3a4528ee4885",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "ttlInDays": 60,
    "id": "119835c3-5fab-4c18-ae01-4ccab328fc5c",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "{SANDBOX_ID}",
        "sandboxName": "{SANDBOX_NAME}",
        "type": "production",
        "default": true
    },
    "name": "segment-downloadedInLast7Days",
    "description": "Has product been downloaded in last 7 days?",
    "expression": {
        "type": "PQL",
        "format": "pql/text",
        "value": "_{TENANT_ID}.downloadsLast7Days > 0",
        "meta": "m"
    },
    "evaluationInfo": {
        "batch": {
            "enabled": false
        },
        "continuous": {
            "enabled": true
        },
        "synchronous": {
            "enabled": false
        }
    },
    "dataGovernancePolicy": {
        "excludeOptOut": true
    },
    "creationTime": 1602016581000,
    "updateEpoch": 1610609459,
    "updateTime": 1610609459000,
    "createEpoch": 1602016554,
    "_etag": "\"8b01611a-0000-0200-0000-5ffff3330000\"",
    "dependents": [
        "023d46c9-a27c-4ea9-a887-2c91ba83f2d1"
    ],
    "definedOn": [
        {
            "meta:resourceType": "unions",
            "meta:containerId": "tenant",
            "$ref": "https://ns.adobe.com/xdm/context/profile__union"
        }
    ],
    "dependencies": [
    "103d46c9-a27c-4ea9-a887-2c91ba83f2d1"
    ],
    "type": "SegmentDefinition"
}

```

## Next steps

Now that you have learned the basics of computed attributes, you are ready to begin defining them for your organization.
