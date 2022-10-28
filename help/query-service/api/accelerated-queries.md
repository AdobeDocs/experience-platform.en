---
title: Accelerated Queries API Endpoint
description: Learn how to access to query accelerated store in a stateless manner. This document provides sample HTTP requests and responses for the Query Service accelerated-queries endpoint.
---
# Accelerated queries API endpoint

Query Service provides accelerate queries to return results in a shorter period that conventional queries. Data stored and accessed from the query accelerated store returns results typically within 30 seconds and 

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

### Request

>[!IMPORTANT]
>
>Requests to the `/accelerated-queries` endpoint require either an SQL statement OR a template ID, but not both. Submitting both in a request causes an error.

The following request ... for your organization.

```shell
curl -X POST https://platform.adobe.io/data/foundation/query/acceleated-queries
 -H 'Authorization: {ACCESS_TOKEN}'
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}'
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -H 'Content-Type: application/json' \
 -H 'Accept: application/json' \
 -d '
 {
   "dbName": "prod:qsaccel",
   "sql": "SELECT * FROM accounts;",
   "name": "Sample Accelerated Query",
   "description": "A sample of an accelerated query."
 }
'
```

```shell
curl -X POST https://platform.adobe.io/data/foundation/query/acceleated-queries
 -H 'Authorization: {ACCESS_TOKEN}'
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}'
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -H 'Content-Type: application/json' \
 -H 'Accept: application/json' \
 -d '
 {
   "dbName": "prod:qsaccel",
   "templateId": "5d8228e7-4200-e3de-11e9-7f27416c5f0d",
   "name": "Sample Accelerated Query",
   "description": "A sample of an accelerated query."
 }
'
```

| Property | Description |
|---|---|
| `dbName`  | The `dbName` is a combination of the sandbox name and the database name with a `qsaccel` suffix. This required value should be in the format of `[sandbox-name]:[dbString]qsaccel`. The sandbox name is not necessary if you are using a production sandbox. |
| `sql`  | An SQL statement string. The maximum size allowed is 1000000 characters.  |
| `templateId` | The unique identifier of a query created when a POST request is made to the `/templates` endpoint. Either a template ID or an SQL statement is required, but not both. Submitting both in a request causes an error. |
| `description` | An optional comment on the intent of the query to help other users understand its purpose. The maximum size allowed is 1000 bytes.  |

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

| Property | Description |
|---|---|
| `queryId`  |    | 
| `resultsMeta`  |    | 
| `_adhoc`  |    | 
| `_adhoc.type`  |    | 
| `_adhoc.meta:xdmType`  | This is a system-generated value for the XDM field type. For more information on the available types see the documentation on [available XDM types](https://experienceleague.adobe.com/docs/experience-platform/xdm/tutorials/custom-fields-api.html). | 
| `_adhoc.properties`  |    | 
| ``  |    | 
