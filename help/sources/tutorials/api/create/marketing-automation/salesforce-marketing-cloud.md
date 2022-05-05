---
keywords: Experience Platform;home;popular topics;salesforce marketing cloud;Salesforce Marketing Cloud
solution: Experience Platform
title: Create a Salesforce Marketing Cloud Base Connection Using the Flow Service API
topic-legacy: overview
type: Tutorial
description: Learn how to connect Adobe Experience Platform to Salesforce Marketing Cloud using the Flow Service API.
exl-id: fbf68d3a-f8b1-4618-bd56-160cc6e3346d
---
# Create a [!DNL Salesforce Marketing Cloud] base connection using the [!DNL Flow Service] API

>[!NOTE]
>
>The [!DNL Salesforce Marketing Cloud] source is in beta. See the [sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled sources.

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL Salesforce Marketing Cloud] using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

The following section provides additional information that you will need to know in order to successfully connect to [!DNL Salesforce Marketing Cloud] using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL Salesforce Marketing Cloud], you must provide the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `host` | The host server of your application. This is often your subdomain. **Note:** When entering your `host` value, you only need to specify the subdomain and not the entire URL. For example, if your host URL is `https://abcd-ab12c3d4e5fg6hijk7lmnop8qrst.auth.marketingcloudapis.com/`, then you only need to enter `abcd-ab12c3d4e5fg6hijk7lmnop8qrst` as your host value. |
| `clientId` | The client ID associated with your [!DNL Salesforce Marketing Cloud] application. |
| `clientSecret` | The client secret associated with your [!DNL Salesforce Marketing Cloud] application. |
| `connectionSpec.id` | The connection specification returns a source’s connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Salesforce Marketing Cloud] is: `ea1c2a08-b722-11eb-8529-0242ac130003`.  |

For more information about getting started, refer to this [[!DNL Salesforce Marketing Cloud] document](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/authentication.htm).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

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
                "host": "{HOST}"
                "clientId": "{CLIENT_ID}",
                "clientSecret": "{CLIENT_SECRET}"
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
* [Create a dataflow to bring marketing automation data to Platform using the [!DNL Flow Service] API](../../collect/marketing-automation.md)
