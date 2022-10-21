---
title: Accelerated Queries API Endpoint
description: Learn how to access to query accelerated store in a stateless manner. This document provides sample HTTP requests and responses for the Query Service accelerated-queries endpoint.
---
# Accelerated Queries API Endpoint

{description}

Before continuing with this guide, ensure that you have read and understood the [Query Service API guide](./getting-started.md) in order to successfully use Query Service API.

## Getting started

The Data Distiller SKU is required to use the query accelerated store. Please see the [packaging](../packages.md), [guardrails](../guardrails.md#query-accelerated-store), and [licensing](../data-distiller/licence-usage.md) documentation that relates to the Data Distiller SKU. If you do not have the Data Distiller SKU please contact your Adobe customer service representative for more information.

The following sections detail the API calls necessary to access the query accelerated store in a stateless manner through the Query Service API. Each call includes the general API format, a sample request showing required headers, and a sample response.

## Create ...

Make a POST request to the `/accelerated-queries` endpoint to create ...

**API format**

```shell
POST /accelerated-queries
```

<!-- are there query parameters? -->

<!-- ### Query parameters

The following is a list of available query parameters for ...

{are they optional/required} -->


### Request

The following request ... for your organization.

```shell
curl -X POST https://platform.adobe.io/data/foundation/query/acceleated-queries
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}'
 -d '
{
  "dbName": "string",
  "sql": "SELECT * from t1;",
  "templateId": "123",
  "name": "string",
  "description": "string"
}
'
```

| Property | Description |
|---|---|
| `dbName`  | The `dbName` is a combination of the sandbox name and the database name. The value should be in the format of `[sandbox-name]:[dbString]`. The sandbox name is not necessary if you are using a production sandbox. |
| `sql`  | An SQL statement string. The maximum size allowed is 1000000 characters. |
| `templateId` | The unique identifier of a query created when a POST request is made to the `/templates` endpoint. |
| `description` | A comment on the intent of the query to help other users understand its purpose. The maximum size allowed is 1000 bytes.  |

**Response**

A successful response returns HTTP status 200 with ...

<!-- response body needs actual examples -->

```json
{
  "queryId": "string",
  "resultsMeta": {
    "_adhoc": {
      "type": "string",
      "meta:xdmType": "string",
      "properties": {
        "column_name_string_type": {
          "type": "string",
          "meta:xdmType": "string",
          "default": "default_string"
        },
        "column_name_integer_type": {
          "type": "integer",
          "meta:xdmType": "int,",
          "maximum": 2147483647,
          "minimum": -2147483648
        },
        "column_name_number_type": {
          "type": "number",
          "meta:xdmType": "number",
          "maximum": "null,",
          "minimum": {}
        },
        "column_name_boolean_type": {
          "type": "boolean",
          "meta:xdmType": "boolean"
        }
      }
    }
  },
  "results": [
    {
      "column_name_string_type": "anystring",
      "column_name_integer_type": 23,
      "column_name_number_type": 1.1,
      "column_name_boolean_type": true
    }
  ],
  "request": {
    "dbName": "string",
    "sql": "SELECT * from t1;",
    "templateId": "123",
    "name": "string",
    "description": "string"
  }
}
```
