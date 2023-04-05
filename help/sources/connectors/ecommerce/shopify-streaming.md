---
keywords: Experience Platform;home;popular topics;shopify;streaming
title: Shopify Streaming Source
description: Learn how to create a source connection and dataflow to ingest streaming data from your Shopify instance to Adobe Experience Platform
badge: "Beta"
---
# [!DNL Shopify] Streaming

>[!NOTE]
>
>The [!DNL Shopify] Streaming source is in beta. Please read the [sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled sources.

Adobe Experience Platform provides support for ingesting data from Streaming applications. Support for streaming providers include [!DNL Shopify].

## Prerequisites 

The following section outlines prerequisite steps to complete before using the [!DNL Shopify] Streaming source.

>[!IMPORTANT]
>
>You must have a valid [!DNL Shopify] partner account in order to connect to [!DNL Shopify] APIs. If you do not already have a partner account, please register using the [[!DNL Shopify] partners dashboard](https://www.shopify.com/partners).

### Create your application

With a valid [!DNL Shopify] partner account, you can now proceed and create your app using the partners dashboard. For comprehensive steps on how to create your app in [!DNL Shopify], read the [[!DNL Shopify] guide on getting started](https://www.shopify.com/partners/blog/17056443-how-to-generate-a-shopify-api-token).

Once your app is created, retrieve your **client ID** and **client secret** from the **client credentials** tab of the [!DNL Shopify] partners dashboard. The client ID and client secret will be used in the next steps to retrieve your authorization code and access token.

### Retrieve your authorization code

```http
https://{SHOP}.myshopify.com/admin/oauth/authorize?client_id={API_KEY}&scope={SCOPES}&redirect_uri={REDIRECT_URI}
```

| Parameter | Description |
| --- | --- |
| `shop` | Your subdomain `myshopify.com` URL. |
| `api_key` | Your [!DNL Shopify] client ID. You can retrieve your client ID from the **client credentials** tab of the [!DNL Shopify] partners dashboard. |
| `scopes` | The type of access that you want to define. For example, you can set scopes as `scope=write_orders,read_customers` to allow permissions to modify orders and read customers. |
| `redirect_uri` | The URL for the script that will generate the access token. |

### Retrieve your access token

Now that you have your client ID, client secret, and authorization code, you can retrieve your access token.

**Request**

```shell
curl -X POST \
  'https://connnectors-test.myshopify.com/admin/oauth/access_token' \
  -H 'developer-token: {DEVELOPER_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'Cookie: _master_udr=xxx; request_method=POST'
  -d '{
    "client_id" : "d8c0ba01315ba74355cd0bf48756cd75",
    "client_secret" : "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",
    "code": "c23f191059ea085699a9828435aab261"
}'
```

**Response**

```json
{
  "access_token": "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",
  "scope": "write_orders,read_customers"
}
```

### Create a webhook for streaming [!DNL Shopify] data

Webhooks allow applications to stay synchronized with your [!DNL Shopify] data or perform an action after a particular event occurs in a shop. For streaming [!DNL Shopify] data to Experience Platform, webhooks can be used to define the http endpoint and the topics for subscription.

**Request**

```shell
curl -X POST \
  'https://connnectors-test.myshopify.com/admin/api/2022-07/webhooks.json' \
  -H 'X-Shopify-Access-Token: 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' \
  -H 'Content-Type: application/json' \; request_method=POST' \
  -d '{
    "webhook":
    {
      "address":"https://dcs-int.adobedc.net/collection/9d411a24aa3c0a3eded92bac6c64d0da986ee7a8212f87168c5fb42d9ddc3227","topic":"orders/create","format":"json"
      }
}'
```

**Response**

```json
{
  "webhook": {
    "id": 1091138715786,
    "address": "https://dcs-int.adobedc.net/collection/9d411a24aa3c0a3eded92bac6c64d0da986ee7a8212f87168c5fb42d9ddc3227",
    "topic": "orders/create",
    "created_at": "2022-07-20T07:15:23-04:00",
    "updated_at": "2022-07-20T07:15:23-04:00",
    "format": "json",
    "fields": [],
    "metafield_namespaces": [],
    "api_version": "2021-10",
    "private_metafield_namespaces": []
  }
}
```