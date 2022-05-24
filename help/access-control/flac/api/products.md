---
keywords: Experience Platform;home;popular topics;api;Attribute-Based Access Control;attribute-based access control
solution: Experience Platform
title: Products API Endpoint
description: The /products endpoint in the Attribute-Based Access Control API allows you to  programmatically manage products in Adobe Experience Platform.
hide: true
hidefromtoc: true
---
# Products endpoint

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
      "id": "acp",
      "name": "Adobe Experience Platform",
      "serviceCode": "acp"
    }
  ]
}
```

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
