---
keywords: Experience Platform;home;popular topics;sandbox developer guide
solution: Experience Platform
title: Sandbox management API Endpoint
description: The /sandboxes endpoint in the Sandbox API allows you to  programmatically manage sandboxes in Adobe Experience Platform.
exl-id: 0ff653b4-3e31-4ea5-a22e-07e18795f73e
---
# Sandbox management endpoint

Sandboxes in Adobe Experience Platform provide isolated development environments that allow you to test features, run experiments, and make custom configurations without impacting your production environment. The `/sandboxes` endpoint in the [!DNL Sandbox] API allows you to programmatically manage sandboxes in Platform.

## Getting started

The API endpoint used in this guide is part of the [[!DNL Sandbox] API](https://www.adobe.io/experience-platform-apis/references/sandbox). Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Retrieve a list of sandboxes {#list}

You can list all sandboxes belonging to your IMS Organization (active or otherwise), by making a GET request to the `/sandboxes` endpoint.

**API format**

```http
GET /sandboxes?{QUERY_PARAMS}
```

| Parameter | Description |
| --------- | ----------- |
| `{QUERY_PARAMS}` | Optional query parameters to filter results by. See the section on [query parameters](./appendix.md#query) for more information. |

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/sandbox-management/sandboxes?&limit=4&offset=1 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a list of sandboxes belonging to your organization, including details such as `name`, `title`, `state`, and `type`.

```json
{
    "sandboxes": [
        {
            "name": "prod",
            "title": "Production",
            "state": "active",
            "type": "production",
            "region": "VA7",
            "isDefault": true,
            "eTag": 2,
            "createdDate": "2019-09-04 04:57:24",
            "lastModifiedDate": "2019-09-04 04:57:24",
            "createdBy": "{USER_ID}",
            "modifiedBy": "{USER_ID}"
        },
        {
            "name": "dev",
            "title": "Development",
            "state": "active",
            "type": "development",
            "region": "VA7",
            "isDefault": false,
            "eTag": 1,
            "createdDate": "2019-09-03 22:27:48",
            "lastModifiedDate": "2019-09-03 22:27:48",
            "createdBy": "{USER_ID}",
            "modifiedBy": "{USER_ID}"
        },
        {
            "name": "stage",
            "title": "Staging",
            "state": "active",
            "type": "development",
            "region": "VA7",
            "isDefault": false,
            "eTag": 1,
            "createdDate": "2019-09-03 22:27:48",
            "lastModifiedDate": "2019-09-03 22:27:48",
            "createdBy": "{USER_ID}",
            "modifiedBy": "{USER_ID}"
        },
        {
            "name": "dev-2",
            "title": "Development 2",
            "state": "creating",
            "type": "development",
            "region": "VA7",
            "isDefault": false,
            "eTag": 1,
            "createdDate": "2019-09-07 10:16:02",
            "lastModifiedDate": "2019-09-07 10:16:02",
            "createdBy": "{USER_ID}",
            "modifiedBy": "{USER_ID}"
        }
    ],
    "_page": {
        "limit": 4,
        "count": 4
    },
    "_links": {
        "next": {
            "href": "https://platform.adobe.io:443/data/foundation/sandbox-management/sandboxes/?limit={limit}&offset={offset}",
            "templated": true
        },
        "prev": {
            "href": "https://platform.adobe.io:443/data/foundation/sandbox-management/sandboxes?offset=0&limit=1",
            "templated": null
        },
        "page": {
            "href": "https://platform.adobe.io:443/data/foundation/sandbox-management/sandboxes?offset=1&limit=1",
            "templated": null
        }
    }
}
```

| Property | Description |
| --- | --- |
| `name` | The name of the sandbox. This property is used for lookup purposes in API calls. |
| `title` | The display name for the sandbox. |
| `state` | The current processing state of the sandbox. A sandbox's state can be any of the following: <br/><ul><li>`creating`: The sandbox has been created, but is still being provisioned by the system.</li><li>`active`: The sandbox is created and active.</li><li>`failed`: Due to an error, the sandbox was not able to be provisioned by the system and is disabled.</li><li>`deleted`: The sandbox has been manually disabled.</li></ul>|  
| `type` | The sandbox type. The current supported sandbox types include `development` and `production`. |
| `isDefault` | A boolean property indicating whether this sandbox is the default production sandbox for the organization. |
| `eTag` | An identifier for a specific version of the sandbox. Used for version control and caching efficiency, this value is updated each time a change is made to the sandbox. |

## Look up a sandbox {#lookup}

You can look up an individual sandbox by making a GET request that includes the sandbox's `name` property in the request path.

**API format**

```http
GET /sandboxes/{SANDBOX_NAME}
```

| Parameter | Description |
| --- | --- |
| `{SANDBOX_NAME}` | The `name` property of the sandbox you want to look up. |

**Request**

The following request retrieves a sandbox named "dev-2".

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/sandbox-management/sandboxes/dev-2 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
```

**Response**

A successful response returns the details of the sandbox, including its `name`, `title`, `state`, and `type`.

```json
{
    "name": "dev-2",
    "title": "Development 2",
    "state": "creating",
    "type": "development",
    "region": "VA7",
    "isDefault": false,
    "eTag": 1,
    "createdDate": "2019-09-07 10:16:02",
    "lastModifiedDate": "2019-09-07 10:16:02",
    "createdBy": "{USER_ID}",
    "modifiedBy": "{USER_ID}"
}
```

| Property | Description |
| --- | --- |
| `name` | The name of the sandbox. This property is used for lookup purposes in API calls. |
| `title` | The display name for the sandbox. |
| `state` | The current processing state of the sandbox. A sandbox's state can be any of the following: <ul><li>**creating**: The sandbox has been created, but is still being provisioned by the system.</li><li>**active**: The sandbox is created and active.</li><li>**failed**: Due to an error, the sandbox was not able to be provisioned by the system and is disabled.</li><li>**deleted**: The sandbox has been manually disabled.</li></ul> |
| `type` | The sandbox type. The current supported sandbox types include: `development` and `production`. |
| `isDefault` | A boolean property indicating whether this sandbox is the default sandbox for the organization. Typically this is the production sandbox. |
| `eTag` | An identifier for a specific version of the sandbox. Used for version control and caching efficiency, this value is updated each time a change is made to the sandbox. |

## Create a sandbox {#create}

>[!NOTE]
>
>When a new sandbox is created, you must first add that new sandbox to your product profile in [Adobe Admin Console](https://adminconsole.adobe.com/) before you can start using the new sandbox. See the documentation on [managing permissions for a product profile](../../access-control/ui/permissions.md) for information on how to provision a sandbox to a product profile.

You can create a new development or production sandbox by making a POST request to the `/sandboxes` endpoint.

### Create a development sandbox

To create a development sandbox, you must provide a `type` attribute with a value of `development` in the request payload.

**API format**

```http
POST /sandboxes
```

**Request**

The following request creates a new development sandbox named "acme-dev".

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/sandbox-management/sandboxes \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "acme-dev",
    "title": "Acme Business Group dev",
    "type": "development"
  }'
```

| Property | Description |
| --- | --- |
| `name` | The identifier that will be used to access the sandbox in future requests. This value must be unique, and best practice is to make it as descriptive as possible. This value cannot contain any spaces or special characters. |
| `title` | A human-readable name used for display purposes in the Platform user interface. |
| `type` | The type of sandbox to be created. For a non-production sandbox, this value must be `development`. |

**Response**

A successful response returns the details of the newly created sandbox, showing that its `state` is "creating".

```json
{
    "name": "acme-dev",
    "title": "Acme Business Group dev",
    "state": "creating",
    "type": "development",
    "region": "VA7"
}
```

>[!NOTE]
>
>Sandboxes take roughly 30 seconds to be provisioned by the system, after which their `state` will become "active" or "failed".

### Create a production sandbox

To create a production sandbox, you must provide a `type` attribute with a value of `production` in the request payload.

**API format**

```http
POST /sandboxes
```

**Request**

The following request creates a new production sandbox named "acme".

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/sandbox-management/sandboxes \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H `Accept: application/json` \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "acme",
    "title": "Acme Business Group",
    "type": "production"
}'
```

| Property | Description |
| --- | --- |
| `name` | The identifier that will be used to access the sandbox in future requests. This value must be unique, and best practice is to make it as descriptive as possible. This value cannot contain any spaces or special characters. |
| `title` | A human-readable name used for display purposes in the Platform user interface. |
| `type` | The type of sandbox to be created. For a production sandbox, this value must be `production`. |

**Response**

A successful response returns the details of the newly created sandbox, showing that its `state` is "creating".

```json
{
    "name": "acme",
    "title": "Acme Business Group",
    "state": "creating",
    "type": "production",
    "region": "VA7"
}
```

>[!NOTE]
>
>Sandboxes take roughly 30 seconds to be provisioned by the system, after which their `state` will become "active" or "failed".

## Update a sandbox {#put}

You can update one or more fields in a sandbox by making a PATCH request that includes the sandbox's `name` in the request path and the property to update in the request payload.

>[!NOTE]
>
>Currently only a sandbox's `title` property can be updated.

**API format**

```http
PATCH /sandboxes/{SANDBOX_NAME}
```

| Parameter | Description |
| --- | --- |
| `{SANDBOX_NAME}` | The `name` property of the sandbox you want to update. |

**Request**

The following request updates the `title` property of the sandbox named "acme".

```shell
curl -X PATCH \
  https://platform.adobe.io/data/foundation/sandbox-management/sandboxes/acme \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'Content-Type: application/json'
  -d '{
    "title": "Acme Business Group prod"
  }'
```

**Response**

A successful response returns HTTP status 200 (OK) with the details of the newly updated sandbox.

```json
{
    "name": "acme",
    "title": "Acme Business Group prod",
    "state": "active",
    "type": "production",
    "region": "VA7"
}
```

## Reset a sandbox {#reset}

Sandboxes have a "factory reset" feature which deletes all non-default resources from a sandbox. You can reset a sandbox by making a PUT request that includes the sandbox's `name` in the request path.

**API format**

```http
PUT /sandboxes/{SANDBOX_NAME}
```

| Parameter | Description |
| --- | --- |
| `{SANDBOX_NAME}` | The `name` property of the sandbox you want to reset. |
| `validationOnly` | An optional parameter that allows you to do a pre-flight check on the sandbox reset operation without making the actual request. Set this parameter to `validationOnly=true` to check if the sandbox you are about to reset contains any Adobe Analytics, Adobe Audience Manager, or segment sharing data. |

**Request**

The following request resets a sandbox named "acme-dev".

```shell
curl -X PUT \
  https://platform.adobe.io/data/foundation/sandbox-management/sandboxes/acme-dev?validationOnly=true \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'Content-Type: application/json'
  -d '{
    "action": "reset"
  }'
```

| Property | Description |
| --- | --- |
| `action` | This parameter must be supplied in the request payload with a value of "reset" in order to reset the sandbox. |

**Response**

>[!NOTE]
>
>Once a sandbox is reset, it takes roughly 30 seconds to be provisioned by the system.

A successful response returns the details of the updated sandbox, showing that its `state` is "resetting".

```json
{
    "id": "d8184350-dbf5-11e9-875f-6bf1873fec16",
    "name": "acme-dev",
    "title": "Acme Business Group dev",
    "state": "resetting",
    "type": "development",
    "region": "VA7"
}
```

The default production sandbox and any user-created production sandboxes cannot be reset if the identity graph hosted within it is also being used by Adobe Analytics for the [Cross Device Analytics (CDA)](https://experienceleague.adobe.com/docs/analytics/components/cda/overview.html) feature, or if the identity graph hosted within it is also being used by Adobe Audience Manager for the [People Based Destinations (PBD)](https://experienceleague.adobe.com/docs/audience-manager/user-guide/features/destinations/people-based/people-based-destinations-overview.html) feature.

The following is a list of possible exceptions that could prevent a sandbox from being reset:

```json
{
    "status": 400,
    "title": "Sandbox `{SANDBOX_NAME}` cannot be reset. The identity graph hosted in this sandbox is also being used by Adobe Analytics for the Cross Device Analytics (CDA) feature.",
    "type": "http://ns.adobe.com/aep/errors/SMS-2074-400"
},
{
    "status": 400,
    "title": "Sandbox `{SANDBOX_NAME}` cannot be reset. The identity graph hosted in this sandbox is also being used by Adobe Audience Manager for the People Based Destinations (PBD) feature.",
    "type": "http://ns.adobe.com/aep/errors/SMS-2075-400"
},
{
    "status": 400,
    "title": "Sandbox `{SANDBOX_NAME}` cannot be reset. The identity graph hosted in this sandbox is also being used by Adobe Audience Manager for the People Based Destinations (PBD) feature, as well by Adobe Analytics for the Cross Device Analytics (CDA) feature.",
    "type": "http://ns.adobe.com/aep/errors/SMS-2076-400"
},
{
    "status": 400,
    "title": "Warning: Sandbox `{SANDBOX_NAME}` is used for bi-directional segment sharing with Adobe Audience Manager or Audience Core Service.",
    "type": "http://ns.adobe.com/aep/errors/SMS-2077-400"
}
```

You can proceed to reset a production sandbox that is used for bi-directional segment sharing with [!DNL Audience Manager] or [!DNL Audience Core Service] by adding the `ignoreWarnings` parameter to your request.

**API format**

```http
PUT /sandboxes/{SANDBOX_NAME}?ignoreWarnings=true
```

| Parameter | Description |
| --- | --- |
| `{SANDBOX_NAME}` | The `name` property of the sandbox you want to reset. |
| `ignoreWarnings` | An optional parameter that allows you to  skip the validation check and force the reset of a production sandbox that is used for bi-directional segment sharing with [!DNL Audience Manager] or [!DNL Audience Core Service]. This parameter cannot be applied to a default production sandbox. |

**Request**

The following request resets a production sandbox named "acme".

```shell
curl -X PUT \
  https://platform.adobe.io/data/foundation/sandbox-management/sandboxes/acme?ignoreWarnings=true \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'Content-Type: application/json'
  -d '{
    "action": "reset"
  }'
```

**Response**

A successful response returns the details of the updated sandbox, showing that its `state` is "resetting".

```json
{
    "id": "d8184350-dbf5-11e9-875f-6bf1873fec16",
    "name": "acme",
    "title": "Acme Business Group prod",
    "state": "resetting",
    "type": "production",
    "region": "VA7"
}
```

## Delete a sandbox {#delete}

>[!IMPORTANT]
>
>The default production sandbox cannot be deleted.

You can delete a sandbox by making a DELETE request that includes the sandbox's `name` in the request path.

>[!NOTE]
>
>Making this API call updates the sandbox's `status` property to "deleted" and deactivates it. GET requests can still retrieve sandbox's details after it has been deleted.

**API format**

```http
DELETE /sandboxes/{SANDBOX_NAME}
```

| Parameter | Description |
| --- | --- |
| `{SANDBOX_NAME}` | The `name` of the sandbox you want to delete. |
| `validationOnly` | An optional parameter that allows you to do a pre-flight check on the sandbox delete operation without making the actual request. Set this parameter to `validationOnly=true` to check if the sandbox you are about to reset contains any Adobe Analytics, Adobe Audience Manager, or segment sharing data. |
| `ignoreWarnings` | An optional parameter that allows you to skip the validation check and force the deletion of a user-created production sandbox that is used for bi-directional segment sharing with [!DNL Audience Manager] or [!DNL Audience Core Service]. This parameter cannot be applied to a default production sandbox. |

**Request**

The following request deletes a production sandbox named "acme".

```shell
curl -X DELETE \
  https://platform.adobe.io/data/foundation/sandbox-management/sandboxes/acme?ignoreWarnings=true \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}'
```

**Response**

A successful response returns the sandbox's updated details, showing that its `state` is "deleted".

```json
{
    "name": "acme",
    "title": "Acme Business Group prod",
    "state": "deleted",
    "type": "development",
    "region": "VA7"
}
```
