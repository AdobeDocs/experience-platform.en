---
keywords: Experience Platform;home;popular topics;api;Attribute-Based Access Control;attribute-based access control
solution: Experience Platform
title: Products API Endpoint
description: The /products endpoint in the Attribute-Based Access Control API allows you to  programmatically manage products in Adobe Experience Platform.
role: Developer
exl-id: 44ee9a9d-7a13-4d59-a1a9-97764dbd3763
TQID: https://experienceleague.adobe.com/JiGxf-EwwRDIXbeKDT1WHlPAItSiF3hayqstjKCfL6Q
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: adf04a6a-050f-44bc-a52c-db79ccb22ebf
    internal-label: Administration
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
subfeature_v2:
  - id: a16ec9c0-4484-4842-b9a0-5504cde38e6a
    internal-label: Access control
  - id: a7150a74-b8a9-4042-b066-147c5f0ca505
    internal-label: Alerts
  - id: a9eb38d5-9d89-492f-af4e-b968a07f2d91
    internal-label: Permissions
  - id: d175cb4c-5781-454e-a826-bf6dff786265
    internal-label: Roles
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b23e006f-0a29-4f1d-8fd0-77aa56f3d12b
    internal-label: Data modeling
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
    internal-label: Data management
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
    internal-label: Administration
---
# Products endpoint

>[!NOTE]
>
>If a user token is being passed, then the user of the token must have an "org admin" role for the requested org.

The `/products` endpoint in the attribute-based access control API allows you to programmatically manage products as well as permission categories and permission sets associated with products in your organization.

## Getting started

The API endpoint used in this guide is part of the attribute-based access control API. Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Retrieve a list of entitled products {#list}

You can retrieve a list of entitled products by making a GET request to the `/products` endpoint.

**API format**

```http
GET /products/
```

**Request**

The following request retrieves a list of entitled products belonging to your organization.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/access-control/administration/products \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
```

**Response**

A successful response returns a list of entitled products belonging to your organization.

```json
{
  "products": [
    {
      "id": "{ID}",
      "name": "Adobe Experience Platform",
      "serviceCode": "{SERVICE_CODE}"
    }
  ]
}
```

| Property | Description |
| --- | --- |
| `id` | The corresponding ID of the queried product. |
| `name` | The name of the queried product. |
| `serviceCode` | The corresponding service code of the queried product. |

## Look up permission categories by product ID 

You can look up permission categories for a given product, by making a GET request to the `/products/{PRODUCT_ID}/categories` endpoint while specifying your product ID.

**API format**

```http
GET /products/{PRODUCT_ID}/categories
```

| Parameter | Description |
| --- | --- |
| {PRODUCT_ID} | The ID of the product associated with the permission categories you want to look up. |

**Request**

The following request retrieves permission categories associated with `{PRODUCT_ID}`.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/access-control/administration/products/{PRODUCT_ID}/categories \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
```

**Response**

A successful response returns the permission categories associated with the product ID you queried.

```json
{
  "categories": [
    {
        "name": "Profile Management"
    },
    {
        "name": "Data Ingestion"
    },
    {
        "name": "Sandbox Administration"
    },
    {
        "name": "Query Service"
    },
    {
        "name": "Data Management"
    },
    {
        "name": "Identity Management"
    },
    {
        "name": "Data Modeling"
    },
    {
        "name": "Data Science Workspace"
    },
    {
        "name": "Dashboards"
    },
    {
        "name": "Alerts"
    },
    {
        "name": "Data Governance"
    }
  ]
}
```

| Property | Description |
| --- | --- |
| `category` | The permission categories that are available within the queried product ID. |
| `name` | The name of the permission category. |

## Look up permission sets by product ID

You can look up permission sets for a given product, by making a GET request to the `/products/{PRODUCT_ID}/permission-sets` endpoint while specifying your product ID.

**API format**

```http
GET /products/{PRODUCT_ID}/permission-sets
```

| Parameter | Description |
| --- | --- |
| {PRODUCT_ID} | The ID of the product associated with the permission sets you want to look up. |

**Request**

The following request retrieves permission sets associated with `{PRODUCT_ID}`.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/access-control/administration/products/{PRODUCT_ID}/permission-sets \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
```

**Response**

A successful response returns the permission sets associated with the product ID you queried.

```json
{
  "permission-sets": [
      {
          "id": "manage-schemas",
          "name": "Manage Schemas",
          "category": "Data Modeling",
          "permissions": [
              {
                  "resource": "schemas",
                  "actions": [
                      "read",
                      "write",
                      "delete"
                  ]
              },
              {
                  "resource": "schema-fields",
                  "actions": [
                      "read",
                      "write",
                      "delete"
                  ]
              },
              {
                  "resource": "sandboxes",
                  "actions": [
                      "view"
                  ]
              }
          ]
      },
      {
          "id": "view-schemas",
          "name": "View Schemas",
          "category": "Data Modeling",
          "permissions": [
              {
                  "resource": "schemas",
                  "actions": [
                      "read"
                  ]
              },
              {
                  "resource": "schema-fields",
                  "actions": [
                      "read"
                  ]
              },
              {
                  "resource": "sandboxes",
                  "actions": [
                      "view"
                  ]
              }
          ]
      },
  ]
}
```

| Property | Description |
| --- | --- |
| `permission-sets` | Permission sets represent a group of permissions that an administrator can apply to a role. An administrator can assign permission sets to a role, instead of assigning individual permissions. This allows you to create custom roles from a pre-defined role that contains a group of permissions. |
| `id` | The corresponding ID of the queried permission set. |
| `name` | The corresponding name of the queried permission set. |
| `category` | The available permission category. |
| `permissions` | Permissions include the ability to view and/or use Experience Platform features, such as creating sandboxes, defining schemas, and managing datasets. |
| `permissions.resource` | The asset or object that a subject can or cannot access. Resources can be files, applications, servers, or even APIs. |
| `permissions.actions` | The action that a subject is permitted to do against a queried resource. Possible values include: `view`, `read`, `create`, `edit`, and `delete` |
