---
keywords: Experience Platform;home;popular topics;payment
solution: Experience Platform
title: Explore a Payment System Using the Flow Service API
description: This tutorial uses the Flow Service API to explore payment applications.
exl-id: 7d0231de-46c0-49df-8a10-aeb42a2c8822
---
# Explore a payment system using the [!DNL Flow Service] API

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the [!DNL Flow Service] API to explore payment applications.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

*   [Sources](../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
*   [Sandboxes](../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to a payments application using the [!DNL Flow Service] API.

### Gather required credentials

This tutorial requires you to have a valid connection with the third-party payments application you wish to ingest data from. A valid connection involves your application's connection specification ID and connection ID. More information about creating a payments connection and retrieving these values can be found in the [connect a payments source to Platform](../../api/create/payments/paypal.md) tutorial.

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

Using the connection ID for your payments system, you can explore your data tables by performing GET requests. Use the following call to find the path of the table you wish to inspect or ingest into [!DNL Platform].

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=root
```

| Parameter | Description |
| --- | --- |
| `{BASE_CONNECTION_ID}` | The ID of a payments base connection. |

**Request**

```shell
curl -X GET \
    'http://platform.adobe.io/data/foundation/flowservice/connections/24151d58-ffa7-4960-951d-58ffa7396097/explore?objectType=root' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns an array of tables from your payments system. Find the table you wish to bring into [!DNL Platform] and take note of its `path` property, as you are required to provide it in the next step to inspect its structure.

```json
[
    {
        "type": "table",
        "name": "PayPal.Billing_Plans",
        "path": "PayPal.Billing_Plans",
        "canPreview": true,
        "canFetchSchema": true
    },
    {
        "type": "table",
        "name": "PayPal.Billing_Plans_Payment_Definition",
        "path": "PayPal.Billing_Plans_Payment_Definition",
        "canPreview": true,
        "canFetchSchema": true
    },
    {
        "type": "table",
        "name": "PayPal.Billing_Plans_Payment_Definition_Charge_Models",
        "path": "PayPal.Billing_Plans_Payment_Definition_Charge_Models",
        "canPreview": true,
        "canFetchSchema": true
    },
    {
        "type": "table",
        "name": "PayPal.Catalog_Products",
        "path": "PayPal.Catalog_Products",
        "canPreview": true,
        "canFetchSchema": true
    }
]
```

## Inspect the structure of a table

To inspect the structure of a table from your payments system, perform a GET request while specifying the path of a table as a query parameter.

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=table&object={TABLE_PATH}
```

| Parameter | Description |
| --------- | ----------- |
| `{BASE_CONNECTION_ID}` | The connection ID of your payments system. |
| `{TABLE_PATH}` | The path of a table within your payments system.|

```shell
curl -X GET \
    'http://platform.adobe.io/data/foundation/flowservice/connections/24151d58-ffa7-4960-951d-58ffa7396097/explore?objectType=table&object=test1.Mytable' \
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
                "name": "Product_Id",
                "type": "string",
                "xdm": {
                    "type": "string"
                }
            },
            {
                "name": "Product_Name",
                "type": "string",
                "xdm": {
                    "type": "string"
                }
            },
            {
                "name": "Description",
                "type": "string",
                "xdm": {
                    "type": "string"
                }
            },
            {
                "name": "Type",
                "type": "string",
                "xdm": {
                    "type": "string"
                }
            },
        ]
    }
}
```

## Next steps

By following this tutorial, you have explored your payments system, found the path of the table you wish to ingest into [!DNL Platform], and obtained information regarding its structure. You can use this information in the next tutorial to [collect data from your payments system and bring it into Platform](../collect/payments.md).
