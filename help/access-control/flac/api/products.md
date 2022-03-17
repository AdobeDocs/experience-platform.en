---
keywords: Experience Platform;home;popular topics;api;field level access control;Field Level Access Control;flac;FLAC
solution: Experience Platform
title: Products API Endpoint
description: The /products endpoint in the Field Level Access Control API allows you to  programmatically manage products in Adobe Experience Platform.
---
# Products endpoint

The `/products` endpoint in the Field Level Access Control API allows you to programmatically manage products as well as permission categories and permission sets associated with products in your IMS Organization.

## Getting started

The API endpoint used in this guide is part of the Field Level Access Control API. Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Retrieve a list of entitled products {#list}

You can retrieve a list of entitled products by making a GET request to the `/products` endpoint.

**API format**

```http
GET /products/
```

**Request**

The following request retrieves a list of entitled products belonging to your IMS Organization.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/access-control/administration/products \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
```

**Response**

A successful response returns a list of entitled products belonging to your IMS Organization.

```json
{
  "products": [
    {
      "id": "string",
      "name": "string",
      "serviceCode": "string"
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
      "name": "string"
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
      "id": "string",
      "name": "string",
      "category": "string",
      "permissions": [
        {
          "resource": "string",
          "actions": [
            "string"
          ]
        }
      ]
    }
  ]
}
```
