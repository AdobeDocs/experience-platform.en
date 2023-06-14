---
title: Adobe Commerce Source Connector
description: Learn how to use the Adobe Commerce source to bring your commerce data to Experience Platform.
---
# Adobe Commerce

Adobe Commerce is an agile B2B and B2C commerce platform which enables merchants and brands to accelerate revenue through customer-centric digital commerce experiences across online and physical spaces. 

Adobe Experience Platform Sources supports integration of Adobe Commerce to allow merchants to send storefront and back office data to the Adobe Experience Edge, so other Adobe Experience Cloud products like Adobe Analytics and Adobe Target can use Commerce data.

* **Storefront events**: Capture shopper interactions such as `View Page`, `View Product`, and `Add to Cart`. For B2B merchants, storefront events also captures [requisition lists](<https://experienceleague.adobe.com/docs/commerce-admin/b2b/requisition-lists/requisition-lists.html>).
* **Back office events**: Capture information on the status of an order, such as whether an order was placed, canceled, refunded, shipped, or completed.

>[!NOTE]
>
>Captured data in Adobe Commerce does not include personally identifiable information (PII). All user identifiers, such as cookie IDs and IP addresses are strictly anonymized.

## Prerequisites

In order to connect Adobe Commerce to Experience Platform, you must have the following:

* Adobe Commerce 2.4.3 or newer.
* A valid Adobe ID and Organization ID.
* Access to the [Adobe Client Data Layer extension](../../../tags/extensions/client/client-data-layer/overview.md). This extension is necessary to collect storefront event data.
* Entitlements to other Adobe DX products.