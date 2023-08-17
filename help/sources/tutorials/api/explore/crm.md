---
keywords: Experience Platform;home;popular topics;CRM;crm;crm flow service
solution: Experience Platform
title: Explore a CRM System Using the Flow Service API
description: This tutorial uses the Flow Service API to explore CRM systems.
exl-id: 9a8c553a-a93d-4539-a9d2-5f76a3927d92
---
# Explore a CRM system using the [!DNL Flow Service] API

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the [!DNL Flow Service] API to explore CRM systems.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to a CRM system using the [!DNL Flow Service] API.

### Create a connection ID

In order to explore your CRM system using [!DNL Platform] APIs, you must possess a valid connection ID. If you do not already have a connection for the CRM system you wish to work with, you can create one through the following tutorials:

* [Microsoft Dynamics](../create/crm/ms-dynamics.md)
* [Salesforce](../create/crm/salesforce.md)

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {ORG_ID}`

All resources in [!DNL Experience Platform], including those belonging to [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

* `x-sandbox-name: {SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

* `Content-Type: application/json`

## Explore your data tables

Using the connection ID for your CRM system, you can explore your data tables by performing GET requests. Use the following call to find the path of the table you wish to inspect or ingest into [!DNL Platform].

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=root
```

| Parameter | Description |
| --- | --- |
| `{BASE_CONNECTION_ID}` | The ID of the base connection for your CRM system. |

**Request**

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/connections/{BASE_CONNECTION_ID}/explore?objectType=root' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response is an array of tables from to your CRM system. Find the table you wish to bring into [!DNL Platform] and take note of its `path` property, as you are required to provide it in the next step to inspect its structure.

```json
[
    {
        "type": "table",
        "name": "Solution Component Summary",
        "path": "msdyn_solutioncomponentsummary",
        "canPreview": true,
        "canFetchSchema": true
    },
    {
        "type": "table",
        "name": "Quote Invoicing Product",
        "path": "msdyn_quoteinvoicingproduct",
        "canPreview": true,
        "canFetchSchema": true
    },
    {
        "type": "table",
        "name": "Opportunity Relationship",
        "path": "customeropportunityrole",
        "canPreview": true,
        "canFetchSchema": true
    }
]
```

## Inspect the structure of a table

To inspect the structure of a table from your CRM system, perform a GET request while specifying the path of a table as a query parameter.

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=table&object={TABLE_PATH}
```

| Parameter | Description |
| --- | --- |
| `{BASE_CONNECTION_ID}` | The ID of the base connection for your CRM system. |
| `{TABLE_PATH}` | The path of a table. |

**Request**

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/connections/{BASE_CONNECTION_ID}/explore?objectType=table&object={TABLE_PATH}' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the structure of a table. Details regarding each of the table's columns are located within elements of the `columns` array.

```json
{
    "format": "flat",
    "schema": {
        "columns": [
            {
                "name": "first_name",
                "type": "string",
                "meta": {
                    "originalType": "String"
                }
            },
            {
                "name": "last_name",
                "type": "string",
                "meta": {
                    "originalType": "String"
                }
            },
            {
                "name": "email",
                "type": "string",
                "meta": {
                    "originalType": "String"
                }
            }
        ]
    }
}
```

## Next steps

By following this tutorial, you have explored your CRM system, found the path of the table you wish to bring in to [!DNL Platform], and obtained information regarding its structure. You can use this information in the next tutorial to [collect data from your CRM system and bring it into Platform](../collect/crm.md).
