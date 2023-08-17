---
keywords: Experience Platform;home;popular topics;Shopify;shopify;ecommerce
solution: Experience Platform
title: Create a Shopify connector Base Connection Using the Flow Service API
type: Tutorial
description: Learn how to connect Shopify to Adobe Experience Platform using the Flow Service API.
exl-id: 36086c7f-813e-4fc5-9778-f9d55aba03b2
---
# Create a [!DNL Shopify] base connection using the [!DNL Flow Service] API

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL Shopify] (hereinafter referred to as "[!DNL Shopify]") using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [[!DNL Sources]](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [[!DNL Sandboxes]](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL Shopify] using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL Shopify], you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `host` | The end point of your [!DNL Shopify] server. |
| `accessToken` | The access token for your [!DNL Shopify] user account. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Shopify] is: `4f63aa36-bd48-4e33-bb83-49fbcd11c708`. |

For more information about getting started, refer to this [Shopify authentication document](https://shopify.dev/concepts/about-apis/authentication).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Shopify] authentication credentials as part of the request parameters.

**API format**

```http
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Shopify]:

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

**Response**

A successful response returns the newly created connection, including its unique connection identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "582f4f8d-71e9-4a5c-a164-9d2056318d6c",
    "etag": "\"d600d3ae-0000-0200-0000-5fa99a3d0000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL Shopify] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring E-Commerce data to Platform using the [!DNL Flow Service] API](../../collect/ecommerce.md)
