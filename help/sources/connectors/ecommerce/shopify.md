---
keywords: Experience Platform;home;popular topics;shopify;Shopify;
solution: Experience Platform
title: Shopify Source Connector Overview
description: Learn how to connect Shopify to Adobe Experience Platform using APIs or the user interface.
exl-id: 636b31a7-e5f9-434a-acd1-226096522495
---
# [!DNL Shopify] source connector

The [!DNL Shopify] (batch) source connector lets you reliably bring your [!DNL Shopify] storefront data into Adobe applications on a schedule that works for you. Instead of streaming every event in real time, you configure it to collect data from your [!DNL Shopify] shop at regular intervals (batches), giving you predictable, controlled ingestion.

Using secure API access to your [!DNL Shopify] store, you can set up the connector to regularly pull key entities—such as customers, orders, products, and related metadata—and map them into your data model. This allows you to:

- Build a unified view of your customers' commerce behavior across channels.
- Use your [!DNL Shopify] data to drive audience segmentation, personalization, and reporting.
- Eliminate manual exports by relying on automated, repeatable imports at scale.

By centralizing your [!DNL Shopify] data through scheduled batch jobs, the [!DNL Shopify] (batch) source connector helps you create a dependable foundation for insights and experience orchestration, while reducing the operational effort required to keep your data up to date.

## Prerequisites {#prerequisites}

### Gather required credentials

To connect your [!DNL Shopify] account to Experience Platform, you can use either **basic authentication** or an **access token based**. Make sure you have the following credentials ready:

>[!BEGINTABS]

>[!TAB Basic authentication]

| Credential | Description |
| --- | --- |
| `host` | The end point of your [!DNL Shopify] server. |
| `accessToken` | The access token for your [!DNL Shopify] user account. |
| `connectionSpec.id` | (**API only**) The `connectionSpec.id` is required when creating connections via API. For [!DNL Shopify], use: `4f63aa36-bd48-4e33-bb83-49fbcd11c708`. This value specifies the connector type and its supported authentication methods. |

For more information about getting started, refer to this [Shopify authentication document](https://shopify.dev/concepts/about-apis/authentication).

>[!TAB Access token based]

| Credential | Description |
| --- | --- |
| `host` | The end point of your [!DNL Shopify] server. |
| `accessToken` | The access token for your [!DNL Shopify] user account. |
| `connectionSpec.id` | (**API only**) The `connectionSpec.id` is required when creating connections via API. For [!DNL Shopify], use: `4f63aa36-bd48-4e33-bb83-49fbcd11c708`. This value specifies the connector type and its supported authentication methods. |

>[!ENDTABS]

## Connect [!DNL Shopify] to Experience Platform using APIs

- [Create a Shopify base connection using the Flow Service API](../../tutorials/api/create/ecommerce/shopify.md)
- [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
- [Create a dataflow for an eCommerce source using the Flow Service API](../../tutorials/api/collect/ecommerce.md)

## Connect [!DNL Shopify] to Experience Platform using the UI

- [Create a Shopify source connection in the UI](../../tutorials/ui/create/ecommerce/shopify.md)
- [Create a dataflow for an eCommerce source connection in the UI](../../tutorials/ui/dataflow/ecommerce.md)

## Limitations

Preview is not supported for the following columns. As a workaround, mappings for these fields can be created using the API.

- `amountSpent`
- `totalPriceSet`
- `lineItems.quantity`
- `lineItems.name`
- `lineItems.sku`
- `transactions.formattedGateway`
- `variants.sku`
