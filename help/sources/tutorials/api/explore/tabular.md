---
keywords: Experience Platform;home;popular topics;sources;API;explore;flow service
title: Explore a Tabular Source using the Flow Service API
description: This tutorial uses the Flow Service API to explore the contents and structure of a table-based source.
exl-id: 0c7a5b8a-2071-4ac2-b2d1-c5534e7c7d9c
---
# Explore data tables using the [!DNL Flow Service] API

This tutorial provides steps on how to explore and preview the structure and contents of your data tables using the [[!DNL Flow Service]](https://www.adobe.io/experience-platform-apis/references/flow-service/) API.

>[!NOTE]
>
> In order to explore your data tables, you must already have a valid base connection ID for a tabular source. If you do not have this ID, then see the following tutorials for steps on how to create a base connection ID for a tabular source: <ul><li>[Advertising](../../../home.md#advertising)</li><li>[CRM](../../../home.md#customer-relationship-management)</li><li>[Customer success](../../../home.md#customer-success)</li><li>[Database](../../../home.md#database)</li><li>[E-commerce](../../../home.md#ecommerce)</li><li>[Marketing automation](../../../home.md#marketing-automation)</li><li>[Payments](../../../home.md#payments)</li><li>[Protocols](../../../home.md#protocols)</li></ul>

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../landing/api-guide.md).

## Explore your data tables

You can retrieve information on the structure of your data tables by making a GET request to the [!DNL Flow Service] API while providing the base connection ID of your source.

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=root
```

| Parameter | Description |
| --- | --- |
| `{BASE_CONNECTION_ID}` | The base connection ID of your source. |

**Request**

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/flowservice/connections/5e73e5a2-dc36-45a8-9f16-93c7a43af318/explore?objectType=root' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns an array of tables from your source. Find the table you wish to bring into Platform and take note of its `path` property, as you are required to provide it in the next step to inspect its structure.

```json
[
    {
        "type": "table",
        "name": "ACME Spring Campaign",
        "path": "acmeSpringCampaign",
        "canPreview": true,
        "canFetchSchema": true
    },
    {
        "type": "table",
        "name": "ACME Summer Campaign",
        "path": "acmeSummerCampaign",
        "canPreview": true,
        "canFetchSchema": true
    }
]
```

## Inspect the structure of a table

To inspect the contents of your data tables, perform a GET request to the [!DNL Flow Service] API while specifying the path of a table as a query parameter.

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=table&object={TABLE_PATH}
```

| Parameter | Description |
| --- | --- |
| `{BASE_CONNECTION_ID}` | The base connection ID of your source. |
| `{TABLE_PATH}` | The path property of the table you want to inspect. |

**Request**

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/flowservice/connections/5e73e5a2-dc36-45a8-9f16-93c7a43af318/explore?objectType=table&object=acmeSpringCampaign' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns information on the contents and structure of the specified table. Details regarding each of the table's columns are located within elements of the `columns` array.

```json
{
  "format": "flat",
  "schema": {
    "columns": [
      {
        "name": "TestID",
        "type": "string",
        "xdm": {
          "type": "string"
        }
      },
      {
        "name": "Name",
        "type": "string",
        "xdm": {
          "type": "string"
        }
      },
      {
        "name": "Datefield",
        "type": "string",
        "meta:xdmType": "date-time",
        "xdm": {
          "type": "string",
          "format": "date-time"
        }
      },
      {
        "name": "complaint_type",
        "type": "string",
        "xdm": {
          "type": "string"
        }
      },
      {
        "name": "complaint_description",
        "type": "string",
        "xdm": {
          "type": "string"
        }
      },
      {
        "name": "status",
        "type": "string",
        "xdm": {
          "type": "string"
        }
      },
      {
        "name": "status_change_date",
        "type": "string",
        "meta:xdmType": "date-time",
        "xdm": {
          "type": "string",
          "format": "date-time"
        }
      },
      {
        "name": "city",
        "type": "string",
        "xdm": {
          "type": "string"
        }
      },
      {
        "name": "Datefield2",
        "type": "string",
        "meta:xdmType": "date-time",
        "xdm": {
          "type": "string",
          "format": "date-time"
        }
      }
    ]
  }
}
```

## Next steps

By following this tutorial, you have gathered information on the structure and contents of your data tables. Furthermore, you have retrieved the path to the table that you wish to ingest into Platform. You can use this information to create a source connection and a dataflow to bring your data to Platform. See the following tutorials for specific steps on how to create a source connection and a dataflow using the [!DNL Flow Service] API:

* [Advertising sources](../collect/advertising.md)
* [CRM sources](../collect/crm.md)
* [Customer success sources](../collect/customer-success.md)
* [Database sources](../collect/database-nosql.md)
* [E-commerce sources](../collect/ecommerce.md)
* [Marketing automation sources](../collect/marketing-automation.md)
* [Payments sources](../collect/payments.md)
* [Protocols sources](../collect/protocols.md)
