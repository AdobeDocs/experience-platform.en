---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Marketing actions
topic: developer guide
---

# Marketing actions

A marketing action, in the context of the Adobe Experience Platform Data Governance, is an action that an [!DNL Experience Platform] data consumer takes, for which there is a need to check for violations of data usage policies.

Working with marketing actions in the API requires you to use the `/marketingActions` endpoint.

## List all marketing actions

To view a list of all marketing actions, a GET request can be made to `/marketingActions/core` or `/marketingActions/custom` that returns all policies for the specified container.

**API format**

```http
GET /marketingActions/core
GET /marketingActions/custom
```

**Request**

The following request will return a list of all custom marketing actions defined by the IMS Organization. 

```SHELL
curl -X GET \
  https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

The response object provides the total number of marketing actions in the container (`count`) and the `children` array contains the details for each marketing action, including the `name` and an `href` for the marketing action. This path (`_links.self.href`) is used to complete the `marketingActionsRefs` array when [creating a data usage policy](policies.md#create-policy).

```JSON
{
    "_page": {
        "start": "sampleMarketingAction",
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
            "imsOrg": "{IMS_ORG}",
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
            "imsOrg": "{IMS_ORG}",
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

## Look up a specific marketing action

You can also perform a lookup (GET) request to view the details of a specific marketing action. This is done using the `name` of the marketing action. If the name is unknown, it can be found using the listing (GET) request shown previously.

**API format**

```http
GET /marketingActions/core/{marketingActionName}
GET /marketingActions/custom/{marketingActionName}
```

**Request**

```SHELL
curl -X GET \
  https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/combineData \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

The response object contains the details for the marketing action, including the path (`_links.self.href`) needed to reference the marketing action when defining a data usage policy (`marketingActionsRefs`).

```JSON
{
    "name": "combineData",
    "description": "Combine multiple data sources together.",
    "imsOrg": "{IMS_ORG}",
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

## Create or update a marketing action

The [!DNL Policy Service] API allows you to define your own marketing actions, as well as update existing ones. Creating and updating are both done using a PUT operation to the name of the marketing action. 

**API format**

```http
PUT /marketingActions/custom/{marketingActionName}
```

**Request**

In the request that follows, notice that the `name` in the request payload is the same as the `{marketingActionName}` in the API call. Unlike the `id` of a policy that is read-only and system-generated, creating a marketing action requires you to provide the _intended_ name of the marketing action as you create it. 

>[!NOTE]
>
>Failure to supply the `{marketingActionName}` in the call will result in a 405 Error (Method Not Allowed) as you are not permitted to perform a PUT to the `/marketingActions/custom` endpoint directly. Also, if the `name` in the payload doesn't match the `{marketingActionName}` in the path, you will receive a 400 Error (Bad Request).

```SHELL
curl -X PUT \
  https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/crossSiteTargeting \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "name": "crossSiteTargeting",
        "description": "Perform targeting on information obtained across multiple web sites."
      }'
```

**Response**

If successfully created, you will receive an HTTP Status 201 (Created) and the response body will contain the details of the newly created marketing action. The `name` in the response should match what was sent in the request.

```JSON
{
    "name": "crossSiteTargeting",
    "description": "Perform targeting on information obtained across multiple web sites.",
    "imsOrg": "{IMS_ORG}",
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

## Delete a marketing action

It is possible to delete marketing actions by sending a DELETE request to the `{marketingActionName}` of the marketing action you wish to remove. 

>[!NOTE]
>
>You are not able to delete marketing actions that are referenced by exiting policies. Trying to do so will result in a 400 Error (Bad Request) along with an error message that includes the `id` (or multiple IDs) of any policy (or policies) containing a reference to the marketing action you are trying to delete.

**API format**

```http
DELETE /marketingActions/custom/{marketingActionName}
```

**Request**

```SHELL
curl -X DELETE \
  https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/crossSiteTargeting \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

If the marketing action has been successfully deleted, the response body will be blank with an HTTP Status 200 (OK). 

You can confirm the deletion by attempting to lookup (GET) the marketing action. You should receive an HTTP Status 404 (Not Found) along with a "Not Found" error message because the marketing action has been removed.
