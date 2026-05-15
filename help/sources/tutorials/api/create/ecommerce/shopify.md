---
keywords: Experience Platform;home;popular topics;Shopify;shopify;ecommerce
title: Create a Shopify connector Base Connection Using the Flow Service API
description: Learn how to connect Shopify to Adobe Experience Platform using the Flow Service API.
exl-id: 36086c7f-813e-4fc5-9778-f9d55aba03b2
---
# Create a [!DNL Shopify] base connection using the [!DNL Flow Service] API

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

Read this guide to learn how to create a base connection for the [!DNL Shopify] source connector using the [[!DNL Flow Service] API](https://developer.adobe.com/experience-platform-apis/references/flow-service).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [[!DNL Sources]](../../../../home.md): Use Sources to easily bring in data from a variety of external systems and platforms. This feature enables you to organize, label, and enrich your incoming data so you can get more value from it using Experience Platform services.
* [[!DNL Sandboxes]](../../../../../sandboxes/home.md): Sandboxes let you safely experiment, test, and develop digital experiences by providing separate spaces within your Experience Platform instance—so you can make changes without impacting your production environment.

### Gather required credentials

You must have valid [!DNL Shopify] authentication credentials to create a base connection. For details on the required credentials and how to obtain them, refer to the [[!DNL Shopify] source connector overview](../../../../connectors/ecommerce/shopify.md#prerequisites).

### Using Experience Platform APIs

For information on how to successfully make calls to Experience Platform APIs, see the guide on [getting started with Experience Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Experience Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Shopify] authentication credentials as part of the request parameters.

**API format**

```http
POST /connections
```

### Basic authentication

The following request creates a base connection for [!DNL Shopify] using basic authentication:

+++Request

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Shopify source",
      "description": "Shopify source",
      "auth": {
          "specName": "Basic Authentication",
          "params": {
              "host": "{HOST}",
              "accessToken": "{ACCESS_TOKEN}"
          }
      },
      "connectionSpec": {
          "id": "4f63aa36-bd48-4e33-bb83-49fbcd11c708",
          "version": "1.0"
      }
  }
```

| Property | Description |
| --------- | ----------- |
| `auth.params.host` | The endpoint of the [!DNL Shopify] server. |
| `auth.params.accessToken` | The access token for your [!DNL Shopify] user account. |
| `connectionSpec.id` | The [!DNL Shopify] connection specification ID: `4f63aa36-bd48-4e33-bb83-49fbcd11c708`. |

+++

+++Response

A successful response returns the newly created connection, including its unique connection identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "582f4f8d-71e9-4a5c-a164-9d2056318d6c",
    "etag": "\"d600d3ae-0000-0200-0000-5fa99a3d0000\""
}
```

+++

### Access token based

The following request creates a base connection for [!DNL Shopify] using basic authentication:

+++Request

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Create shopify v2 Test Connection",
    "description": "Connection creation for Shopify",
    "auth": {
      "specName": "Access Token Based",
      "params": {
        "host": "{HOST}",
        "accessToken": "{ACCESS_TOKEN}"
      }
    },
    "connectionSpec": {
      "id": "4f63aa36-bd48-4e33-bb83-49fbcd11c708",
      "version": "1.0"
    }
}'
```

| Property | Description |
| --------- | ----------- |
| `auth.params.host` | The endpoint of the [!DNL Shopify] server. |
| `auth.params.accessToken` | The access token for your [!DNL Shopify] user account. |
| `connectionSpec.id` | The [!DNL Shopify] connection specification ID: `4f63aa36-bd48-4e33-bb83-49fbcd11c708`. |

+++

+++Response

A successful response returns the newly created connection, including its unique connection identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "92a00150-f3cc-4283-8fc4-6232725bcf33",
    "etag": "\"bb04d1f7-0000-0200-0000-69807e830000\""
}
```

+++

## Next steps

By following this tutorial, you have created a [!DNL Shopify] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring E-Commerce data to Experience Platform using the [!DNL Flow Service] API](../../collect/ecommerce.md)
