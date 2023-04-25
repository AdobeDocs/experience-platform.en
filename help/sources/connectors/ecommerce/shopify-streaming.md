---
title: Shopify Streaming Source
description: Learn how to create a source connection and dataflow to ingest streaming data from your Shopify instance to Adobe Experience Platform
badge: Beta
hidefromtoc: y
hide: y
exl-id: 4c83c08d-c744-4167-9e3b-ed9a995943f4
---
# [!DNL Shopify Streaming]

>[!NOTE]
>
>The [!DNL Shopify Streaming] source is in beta. Please read the [sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled sources.

Adobe Experience Platform provides support for ingesting data from streaming applications. Support for streaming providers include [!DNL Shopify].

## Prerequisites {#prerequisites}

The following section outlines prerequisite steps to complete before using the [!DNL Shopify Streaming] source.

You must have a valid [!DNL Shopify] partner account in order to connect to the [!DNL Shopify] APIs. If you do not already have a partner account, please register using the [[!DNL Shopify] partners dashboard](https://www.shopify.com/partners).

### Create your application

With a valid [!DNL Shopify] partner account, you can now proceed and create your app using the partners dashboard. For comprehensive steps on how to create your app in [!DNL Shopify], read the [[!DNL Shopify] guide on getting started](https://www.shopify.com/partners/blog/17056443-how-to-generate-a-shopify-api-token).

Once your app is created, retrieve your **client ID** and **client secret** from the **client credentials** tab of the [!DNL Shopify] partners dashboard. The client ID and client secret will be used in the next steps to retrieve your authorization code and access token.

### Retrieve your authorization code

Next, retrieve your authorization code by entering your domain's `myshopify.com` URL into your browser, along with query strings that define your API key, scopes, and the redirect URI.

The format for this URL is as follows:

**API format**

```http
https://{SHOP}.myshopify.com/admin/oauth/authorize?client_id={API_KEY}&scope={SCOPES}&redirect_uri={REDIRECT_URI}
```

| Parameter | Description |
| --- | --- |
| `shop` | Your subdomain `myshopify.com` URL. |
| `api_key` | Your [!DNL Shopify] client ID. You can retrieve your client ID from the **client credentials** tab of the [!DNL Shopify] partners dashboard. |
| `scopes` | The type of access you want to define. For example, you can set scopes as `scope=write_orders,read_customers` to allow permissions to modify orders and read customers. |
| `redirect_uri` | The URL for the script that will generate the access token. |

**Request**

```http
https://connnectors-test.myshopify.com/admin/oauth/authorize?client_id=l6fiviermmzpram5i1spfub99shms3j9&scope=write_orders,read_customers&redirect_uri=https://acme.com
```

**Response**

A successful response returns your redirect URL, including the authorization code required to generate your access token.

```http
https://www.acme.com/?code=k6j2palgrbljja228ou8c20fmn7w41gz&hmac=68c9163f772eecbc8848c90f695bca0460899c125af897a6d2b0ebbd59d3a43b&shop=connnectors-test.myshopify.com&state=123456×tamp=1658305460
```

### Retrieve your access token

Now that you have your client ID, client secret, and authorization code, you can retrieve your access token. To retrieve your access token, make a POST request to your domain's `myshopify.com` URL while appending this URL with [!DNL Shopify's] API endpoint: `/admin/oauth/access_token`. 

**API format**

```https
POST /{SHOP}.myshopify.com/admin/oauth/access_token
```

**Request**

The following request generates an access token for your [!DNL Shopify] instance.

```shell
curl -X POST \
  'https://connnectors-test.myshopify.com/admin/oauth/access_token' \
  -H 'developer-token: {DEVELOPER_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'Cookie: _master_udr=xxx; request_method=POST'
  -d '{
    "client_id": "l6fiviermmzpram5i1spfub99shms3j9",
    "client_secret": "dajn3caxz9s7ti624ncyv_m4f60jnwi3ii3y3k",
    "code": "k6j2palgrbljja228ou8c20fmn7w41gz"
}'
```

**Response**

A successful response returns your access token and permission scopes.

```json
{
  "access_token": "shpca_wjhifwfc91psjtldysxd6rqli371tx54",
  "scope": "write_orders,read_customers"
}
```

## Create a webhook for streaming [!DNL Shopify] data {#webhook}

Webhooks allow applications to stay synchronized with your [!DNL Shopify] data or perform an action after a particular event occurs in a shop. For streaming [!DNL Shopify] data to Experience Platform, webhooks can be used to define the http endpoint and the topics for subscription.

**Request**

The following request creates a webhook for your [!DNL Shopify Streaming] data.

```shell
curl -X POST \
  'https://connnectors-test.myshopify.com/admin/api/2022-07/webhooks.json' \
  -H 'X-Shopify-Access-Token: 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' \
  -H 'Content-Type: application/json' \; request_method=POST' \
  -d '{
  "webhook": {
    "address": "https://dcs.adobedc.net/collection/9d411a24aa3c0a3eded92bac6c64d0da986ee7a8212f87168c5fb42d9ddc3227",
    "topic": "orders/create",
    "format": "json"
  }
}'
```

| Parameter | Description |
| --- | --- | 
| `webhook.address` | The http endpoint where streaming messages are sent. |
| `webhook.topic` | The topic of your webhook subscription. For more information, read the [[!DNL Shopify] webhook event topics guide](https://shopify.dev/docs/api/admin-rest/2023-04/resources/webhook#event-topics). |
| `webhook.format` | The format of your data. |

**Response**

A successful response returns information on your webhook, including its corresponding `id`, address, and other metadata information.

```json
{
  "webhook": {
    "id": 1091138715786,
    "address": "https://dcs.adobedc.net/collection/9d411a24aa3c0a3eded92bac6c64d0da986ee7a8212f87168c5fb42d9ddc3227",
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

### Limitations {#limitations}

The following is a list of known limitations that you may encounter when using webhooks with the [!DNL Shopify Streaming] source.

* It's not guaranteed that you can arrange the order of delivery of different topics for the same resource. For example, it's possible that a `products/update` webhook gets delivered before a `products/create` webhook.
* You can set your webhook to deliver webhook events to an endpoint at least once. This means that an endpoint may receive the same event more than once. You can scan for duplicate webhook events by comparing the `X-Shopify-Webhook-Id` header to previous events.
* [!DNL Shopify] treats HTTP 2xx status responses as successful notifications. Any other status code responses are deemed as failures. [!DNL Shopify] provides a retry mechanism for failed webhook notifications. If there is **no response after waiting for five seconds**, [!DNL Shopify] retries the connection **19 times** over the course of the next **48 hours**. If there are still no responses by the end of the retry period, then [!DNL Shopify] deletes the webhook. 

## Next steps

The following tutorials provide steps on how to connect your [!DNL Shopify Streaming] source to Experience Platform using the API and the UI:

* [Create a Shopify Streaming source connection and dataflow using the Flow Service API](../../tutorials/api/create/ecommerce/shopify-streaming.md)
* [Create a Shopify Streaming source connection and dataflow in the UI](../../tutorials/ui/create/ecommerce/shopify-streaming.md)
