---
title: Connect Salesforce Marketing Cloud To Experience Platform Using The Flow Service API
description: Learn how to connect your Salesforce Marketing Cloud account to Experience Platform using APIs.
exl-id: fbf68d3a-f8b1-4618-bd56-160cc6e3346d
---
# Connect [!DNL Salesforce Marketing Cloud] to Experience Platform using the [!DNL Flow Service] API

>[!WARNING]
>
>The [!DNL Salesforce Marketing Cloud] source will be deprecated in January 2026. A new source will be released later this year as an alternative. Once the new source is released, you must plan to migrate to the new source by creating new account connections and dataflows before the end of January 2026.

Read this guide to learn how to connect your [!DNL Salesforce Marketing Cloud] account to Adobe Experience Platform using the [[!DNL Flow Service] API](https://developer.adobe.com/experience-platform-apis/references/flow-service/).

## Get started

This guide requires a working understanding of the following components of Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Experience Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL Azure Synapse Analytics] using the [!DNL Flow Service] API.


### Using Experience Platform APIs

For information on how to successfully make calls to Experience Platform APIs, see the guide on [getting started with Experience Platform APIs](../../../../../landing/api-guide.md).

The following section provides additional information that you will need to know in order to successfully connect to [!DNL Salesforce Marketing Cloud] using the [!DNL Flow Service] API.

### Gather required credentials

Read the [[!DNL Salesforce Marketing Cloud] authentication overview](../../../../connectors/marketing-automation/salesforce-marketing-cloud.md) for information on authentication.

### Using Experience Platform APIs

Read the guide on [getting started with Experience Platform APIs](../../../../../landing/api-guide.md) for information on how to successfully make calls to Experience Platform APIs.

## Connect [!DNL Salesforce Marketing Cloud] to Experience Platform on [!DNL Azure]

Read the steps below for information on how to connect your [!DNL Salesforce Marketing Cloud] account to Experience Platform on Azure.


## Create a base connection

>[!IMPORTANT]
>
>Custom object ingestion is currently not supported by the [!DNL Salesforce Marketing Cloud] source integration.

A base connection retains information between your source and Experience Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Salesforce Marketing Cloud] authentication credentials as part of the request body.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Salesforce Marketing Cloud]:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Salesforce Marketing Cloud base connection",
      "description": "Salesforce Marketing Cloud base connection",
      "auth": {
          "specName": "Client-Id-Secret Based Authentication",
          "params": {
              "host": "acme-ab12c3d4e5fg6hijk7lmnop8qrst"
              "clientId": "acme-salesforce-marketing-cloud",
              "clientSecret": "xxxx"
          }
      },
      "connectionSpec": {
          "id": "ea1c2a08-b722-11eb-8529-0242ac130003",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.clientId` | The client ID associated with your [!DNL Salesforce Marketing Cloud] application. |
| `auth.params.clientSecret` | The client secret associated with your [!DNL Salesforce Marketing Cloud] application. |
| `connectionSpec.id` | The [!DNL Salesforce Marketing Cloud] connection specification ID: `ea1c2a08-b722-11eb-8529-0242ac130003`. |

**Response**

A successful response returns the newly created connection, including its unique connection identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "2fce94c1-9a93-4971-8e94-c19a93097129",
    "etag": "\"d403848a-0000-0200-0000-5e978f7b0000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL Salesforce Marketing Cloud] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring marketing automation data to Experience Platform using the [!DNL Flow Service] API](../../collect/marketing-automation.md)
