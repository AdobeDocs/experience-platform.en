---
title: Accelerated Queries Endpoint
description: Learn how to access to query accelerated store in a stateless manner to quickly return results based on aggregated data. This document provides a sample HTTP request and response for the Query Service accelerated-queries endpoint.
exl-id: 29ea4d25-9c46-4b29-a6d7-45ac33dcb0fb
---
# Accelerated queries endpoint

As part of the Data Distiller SKU, the [Query Service API](https://developer.adobe.com/experience-platform-apis/references/query-service/) allows you to make stateless queries to the accelerated store. The returned results are based on aggregated data. The decreased latency of results allows for a more interactive exchange of information. The accelerated queries APIs are also used to power [user-defined dashboards](../../dashboards/user-defined-dashboards.md).

Before continuing with this guide, ensure that you have read and understood the [Query Service API guide](./getting-started.md) in order to successfully use Query Service API.

## Getting started

The Data Distiller SKU is required to use the query accelerated store. Please see the [packaging](../packages.md), [guardrails](../guardrails.md#query-accelerated-store), and [licensing](../data-distiller/licence-usage.md) documentation that relates to the Data Distiller SKU. If you do not have the Data Distiller SKU please contact your Adobe customer service representative for more information.

The following sections detail the API calls necessary to access the query accelerated store in a stateless manner through the Query Service API. Each call includes the general API format, a sample request showing required headers, and a sample response.

## Run an accelerated query {#run-accelerated-query}

Make a POST request to the `/accelerated-queries` endpoint to run an accelerated query. The query is either contained directly in the request payload or referenced with a template ID. 

**API format**

```shell
POST /accelerated-queries
```

### Request

>[!IMPORTANT]
>
>Requests to the `/accelerated-queries` endpoint require either an SQL statement OR a template ID, but not both. Submitting both in a request causes an error.

The following request submits an SQL query in the request body to the accelerated store.

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
   "dbName": "acmesbox1:acmeacceldb:accmeaggschema",
   "sql": "SELECT * FROM accounts;",
   "name": "Sample Accelerated Query",
   "description": "A sample of an accelerated query."
 }
'
```

This alternate request submits a template ID in the request body to the accelerated store. The SQL from the corresponding template is used to query the accelerated store.

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
   "dbName": "acmesbox1:acmeacceldb:accmeaggschema",
   "templateId": "5d8228e7-4200-e3de-11e9-7f27416c5f0d",
   "name": "Sample Accelerated Query",
   "description": "A sample of an accelerated query."
 }
'
```

| Property | Description |
|---|---|
| `dbName`  | The name of the database you are making an accelerated query to. The value for `dbName` should take the format of `{SANDBOX_NAME}:{ACCELERATED_STORE_DATABASE}.{ACCELERATED_STORE_SCHEMA}`. The database provided must exist within the accelerated store or the request will result in an error. You must also ensure that the `x-sandbox-name` header and sandbox name in `dbName` refer to same sandbox. |
| `sql`  | An SQL statement string. The maximum size allowed is 1000000 characters.  |
| `templateId` | The unique identifier of a query created and saved as a template when a POST request is made to the `/templates` endpoint. |
| `name` | An optional human-friendly, descriptive name for the accelerated query.  |
| `description` | An optional comment on the intent of the query to help other users understand its purpose. The maximum size allowed is 1000 bytes.  |

**Response**

A successful response returns HTTP status 200 with the ad hoc schema created by the query.

>[!NOTE]
>
>The following response has been truncated for brevity.

```json
{
  "queryId": "315a0a66-0fbb-4810-bc30-484cea5e0f1e",
  "resultsMeta": {
    "_adhoc": {
      "type": "object",
      "meta:xdmType": "object",
      "properties": {
                "Units": {
                    "type": "string",
                    "meta:xdmType": "string",
                    "default": null
                },
                "Industry_code_NZSIOC": {
                    "type": "string",
                    "meta:xdmType": "string",
                    "default": null
                },
                "Industry_name_NZSIOC": {
                    "type": "string",
                    "meta:xdmType": "string",
                    "default": null
                },
                "Variable_code": {
                    "type": "string",
                    "meta:xdmType": "string",
                    "default": null
                },
                "Variable_name": {
                    "type": "string",
                    "meta:xdmType": "string",
                    "default": null
                },
                "Industry_aggregation_NZSIOC": {
                    "type": "string",
                    "meta:xdmType": "string",
                    "default": null
                },
                "Value": {
                    "type": "string",
                    "meta:xdmType": "string",
                    "default": null
                },
                "Year": {
                    "type": "string",
                    "meta:xdmType": "string",
                    "default": null
                },
                "Variable_category": {
                    "type": "string",
                    "meta:xdmType": "string",
                    "default": null
                },
                "Industry_code_ANZSIC06": {
                    "type": "string",
                    "meta:xdmType": "string",
                    "default": null
                }
            }
        }
    },
  "results": [
     {
            "Units": "Dollars (millions)",
            "Industry_code_NZSIOC": "CC411",
            "Industry_name_NZSIOC": "Printing",
            "Variable_code": "H26",
            "Variable_name": "Fixed tangible assets",
            "Industry_aggregation_NZSIOC": "Level 4",
            "Value": "282",
            "Year": "2020",
            "Variable_category": "Financial position",
            "Industry_code_ANZSIC06": "ANZSIC06 groups C161 and C162"
        },
        {
            "Units": "Dollars (millions)",
            "Industry_code_NZSIOC": "CC411",
            "Industry_name_NZSIOC": "Printing",
            "Variable_code": "H27",
            "Variable_name": "Additions to fixed assets",
            "Industry_aggregation_NZSIOC": "Level 4",
            "Value": "35",
            "Year": "2020",
            "Variable_category": "Financial position",
            "Industry_code_ANZSIC06": "ANZSIC06 groups C161 and C162"
        },
        {
            "Units": "Dollars (millions)",
            "Industry_code_NZSIOC": "CC411",
            "Industry_name_NZSIOC": "Printing",
            "Variable_code": "H28",
            "Variable_name": "Disposals of fixed assets",
            "Industry_aggregation_NZSIOC": "Level 4",
            "Value": "9",
            "Year": "2020",
            "Variable_category": "Financial position",
            "Industry_code_ANZSIC06": "ANZSIC06 groups C161 and C162"
        },
        ...
    ],
  "request": {
    "dbName": "acmesbox1:acmeacceldb:accmeaggschema",
    "sql": "SELECT * FROM accounts;",
    "name": "Sample Accelerated Query",
    "description": "A sample of an accelerated query."
  }
}
```

| Property | Description |
|---|---|
| `queryId`  | The ID value of the query created. | 
| `resultsMeta`  | This object contains the metadata for each column returned in results so users know the name and type of each column. | 
| `resultsMeta._adhoc`  | An ad-hoc Experience Data Model (XDM) schema with fields that are namespaced for usage only by a single dataset.  | 
| `resultsMeta._adhoc.type`  | The data type of the ad hoc schema. | 
| `resultsMeta._adhoc.meta:xdmType`  | This is a system-generated value for the XDM field type. For more information on the available types see the documentation on [available XDM types](https://experienceleague.adobe.com/docs/experience-platform/xdm/tutorials/custom-fields-api.html). | 
| `resultsMeta._adhoc.properties`  | These are the column names of the queried dataset. | 
| `resultsMeta._adhoc.results`  | These are the row names of the queried dataset. They reflect each of the returned columns.  |
