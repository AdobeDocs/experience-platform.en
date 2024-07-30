---
keywords: Experience Platform;home;popular topics;Policy enforcement;marketing actions api;API-based enforcement;data governance
solution: Experience Platform
title: Marketing Actions API Endpoint
description: A marketing action, in the context of the Adobe Experience Platform Data Governance, is an action that an Experience Platform data consumer takes, for which there is a need to check for violations of data usage policies.
role: Developer
exl-id: bc16b318-d89c-4fe6-bf5a-1a4255312f54
---
# Marketing actions endpoint

A marketing action, in the context of the Adobe Experience Platform Data Governance, is an action that an [!DNL Experience Platform] data consumer takes, for which there is a need to check for violations of data usage policies.

You can manage marketing actions for your organization by using the `/marketingActions` endpoint in the Policy Service API.

## Getting started

The API endpoints used in this guide are part of the [[!DNL Policy Service] API](https://www.adobe.io/experience-platform-apis/references/policy-service/). Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any [!DNL Experience Platform] API.

## Retrieve a list of marketing actions {#list}

You can retrieve a list of core or custom marketing actions by making a GET request to `/marketingActions/core` or `/marketingActions/custom`, respectively.

**API format**

```http
GET /marketingActions/core
GET /marketingActions/custom
```

**Request**

The following request retrieves a list of custom marketing actions maintained by your organization.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the details for each retrieved marketing action, including its `name` and `href`. The `href` value is used to identify the marketing action when [creating a data usage policy](policies.md#create-policy).

```json
{
    "_page": {
        "count": 2
    },
    "_links": {
        "page": {
            "href": "https://platform.adobe.io/marketingActions/custom?{?limit,start,property}",
            "templated": true
        }
    },
    "children": [
        {
            "name": "sampleMarketingAction",
            "description": "Marketing Action description.",
            "imsOrg": "{ORG_ID}",
            "created": 1550714012088,
            "createdClient": "string",
            "createdUser": "string",
            "updated": 1550714012088,
            "updatedClient": "string",
            "updatedUser": "string",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/sampleMarketingAction"
                }
            }
        },
        {
            "name": "newMarketingAction",
            "description": "Another marketing action.",
            "imsOrg": "{ORG_ID}",
            "created": 1550793833224,
            "createdClient": "string",
            "createdUser": "string",
            "updated": 1550793833224,
            "updatedClient": "string",
            "updatedUser": "string",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/newMarketingAction"
                }
            }
        }
    ]
}
```

| Property | Description |
| --- | --- |
| `_page.count` | The total number of marketing actions returned. |
| `children` | An array of objects that contain the details of the retrieved marketing actions. |
| `name` | The name of the marketing action, which acts as its unique identifier when [looking up a specific marketing action](#lookup). |
| `_links.self.href` | A URI reference for the marketing action, which can be used to complete the `marketingActionsRefs` array when [creating a data usage policy](policies.md#create-policy). |

## Look up a specific marketing action {#lookup}

You look up the details of a specific marketing action by including the marketing action's `name` property in the path of a GET request.

**API format**

```http
GET /marketingActions/core/{MARKETING_ACTION_NAME}
GET /marketingActions/custom/{MARKETING_ACTION_NAME}
```

| Parameter | Description |
| --- | --- |
| `{MARKETING_ACTION_NAME}` | The `name` property of the marketing action you want to look up. |

**Request**

The following request retrieves a custom marketing action named `combineData`.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/combineData \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

The response object contains the details for the marketing action, including the path (`_links.self.href`) needed to reference the marketing action when [defining a data usage policy](policies.md#create-policy) (`marketingActionsRefs`).

```JSON
{
    "name": "combineData",
    "description": "Combine multiple data sources together.",
    "imsOrg": "{ORG_ID}",
    "created": 1550793805590,
    "createdClient": "string",
    "createdUser": "string",
    "updated": 1550793805590,
    "updatedClient": "string",
    "updatedUser": "string",
    "_links": {
        "self": {
            "href": "https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/combineData"
        }
    }
}
```

## Create or update a custom marketing action {#create-update}

You can create a new custom marketing action, or update an existing one, by including the marketing action's existing or intended name in the path of a PUT request. 

**API format**

```http
PUT /marketingActions/custom/{MARKETING_ACTION_NAME}
```

| Parameter | Description |
| --- | --- |
| `{MARKETING_ACTION_NAME}` | The name of the marketing action to be created or updated. If a marketing action with the provided name already exists in the system, that marketing action is updated. If one does not exist, a new marketing action is created for the provided name. |

**Request**

The following request creates a new marketing action named `crossSiteTargeting`, provided that a marketing action of the same name does not yet exist in the system. If a `crossSiteTargeting` marketing action does exist, this call instead updates that marketing action based on the properties provided in the payload.

```shell
curl -X PUT \
  https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/crossSiteTargeting \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
        "name": "crossSiteTargeting",
        "description": "Perform targeting on information obtained across multiple web sites."
      }'
```

| Property | Description |
| --- | --- |
| `name` | The name of the marketing action to be created or updated. <br><br>**IMPORTANT**: This property must match the `{MARKETING_ACTION_NAME}` in the path, otherwise an HTTP 400 (Bad Request) error will occur. In other words, once a marketing action has been created, its `name` property cannot be changed. |
| `description` | An optional description to provide further context for the marketing action. |

**Response**

A successful response returns the details of the marketing action. If an existing marketing action was updated, the response returns HTTP status 200 (OK). If a new marketing action was created, the response returns HTTP status 201 (Created).

```JSON
{
    "name": "crossSiteTargeting",
    "description": "Perform targeting on information obtained across multiple web sites.",
    "imsOrg": "{ORG_ID}",
    "created": 1550713341915,
    "createdClient": "string",
    "createdUser": "string",
    "updated": 1550713856390,
    "updatedClient": "string",
    "updatedUser": "string",
    "_links": {
        "self": {
            "href": "https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/crossSiteTargeting"
        }
    }
}
```

## Delete a custom marketing action {#delete}

You can delete a custom marketing action by including its name in the path of a DELETE request.

>[!NOTE]
>
>Marketing actions that are referenced by existing policies cannot be deleted. Attempting to delete one of these marketing actions will result in an HTTP 400 (Bad Request) error along with a message that includes the IDs of all policies that reference the marketing action.

**API format**

```http
DELETE /marketingActions/custom/{MARKETING_ACTION_NAME}
```

| Parameter | Description |
| --- | --- |
| `{MARKETING_ACTION_NAME}` | The name of the marketing action you want to delete. |

**Request**

```shell
curl -X DELETE \
  https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/crossSiteTargeting \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP Status 200 (OK) with a blank response body. 

You can confirm the deletion by attempting to [look up the marketing action](#look-up). You should receive an HTTP 404 (Not Found) error if the marketing action has been removed from the system.
