---
keywords: Experience Platform;home;popular topics;protocol
solution: Experience Platform
title: Explore a Protocol System Using the Flow Service API
topic-legacy: overview
description: This tutorial uses the Flow Service API to explore protocols applications.
exl-id: e4b24312-543e-4014-aa53-e8ca9c620950
---
# Explore a protocol system using the [!DNL Flow Service] API

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the [!DNL Flow Service] API to explore protocols applications.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

*   [Sources](../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
*   [Sandboxes](../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to a protocols application using the [!DNL Flow Service] API.

### Obtain a base connection

In order to explore your protocol system using [!DNL Platform] APIs, you must possess a valid base connection ID. If you do not already have a base connection for the protocol system you wish to work with, you can create one through the following tutorial:

* [Generic OData](../create/protocols/odata.md)

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

*   Authorization: Bearer `{ACCESS_TOKEN}`
*   x-api-key: `{API_KEY}`
*   x-gw-ims-org-id: `{ORG_ID}`

All resources in [!DNL Experience Platform], including those belonging to [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

*   x-sandbox-name: `{SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

*   Content-Type: `application/json`

## Explore your data tables

Using the connection ID for your protocols application, you can explore your data tables by performing GET requests. Use the following call to find the path of the table you wish to inspect or ingest into [!DNL Platform].

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=root
```

| Parameter | Description |
| --- | --- |
| `{BASE_CONNECTION_ID}` | The ID of a protocol base connection. |

**Request**

```shell
curl -X GET \
    'http://platform.adobe.io/data/foundation/flowservice/connections/a5c6b647-e784-4b58-86b6-47e784ab580b/explore?objectType=root' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns an array of tables from your protocols application. Find the table you wish to bring into [!DNL Platform] and take note of its `path` property, as you are required to provide it in the next step to inspect its structure.

```json
[
    {
        "type": "table",
        "name": "Categories",
        "path": "Categories",
        "canPreview": true,
        "canFetchSchema": true
    },
    {
        "type": "table",
        "name": "CustomerDemographics",
        "path": "CustomerDemographics",
        "canPreview": true,
        "canFetchSchema": true
    },
    {
        "type": "table",
        "name": "Customers",
        "path": "Customers",
        "canPreview": true,
        "canFetchSchema": true
    },
    {
        "type": "table",
        "name": "Orders",
        "path": "Orders",
        "canPreview": true,
        "canFetchSchema": true
    }
]
```

## Inspect the structure of a table

To inspect the structure of a table from your protocols application, perform a GET request while specifying the path of a table as a query parameter.

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=table&object={TABLE_PATH}
```

| Parameter | Description |
| --------- | ----------- |
| `{BASE_CONNECTION_ID}` | The connection ID of your protocols application. |
| `{TABLE_PATH}` | The path of a table within your protocols application. |

```shell
curl -X GET \
    'http://platform.adobe.io/data/foundation/flowservice/connections/a5c6b647-e784-4b58-86b6-47e784ab580b/explore?objectType=table&object=Orders' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the structure of the specified table. Details regarding each of the table's columns are located within elements of the `columns` array.

```json
{
    "format": "flat",
    "schema": {
        "columns": [
            {
                "name": "OrderID",
                "type": "integer",
                "xdm": {
                    "type": "integer",
                    "minimum": -2147483648,
                    "maximum": 2147483647
                }
            },
            {
                "name": "CustomerID",
                "type": "string",
                "xdm": {
                    "type": "string"
                }
            },
            {
                "name": "EmployeeID",
                "type": "integer",
                "xdm": {
                    "type": "integer",
                    "minimum": -2147483648,
                    "maximum": 2147483647
                }
            },
            {
                "name": "OrderDate",
                "type": "string",
                "meta:xdmType": "date-time",
                "xdm": {
                    "type": "string",
                    "format": "date-time"
                }
            },
        ]
    }
}
```

## Next steps

By following this tutorial, you have explored your protocols application, found the path of the table you wish to ingest into [!DNL Platform], and obtained information regarding its structure. You can use this information in the next tutorial to [collect data from your protocols application and bring it into Platform](../collect/protocols.md).
