---
title: Collect commerce, product, and order information using the Adobe Experience Platform Web SDK
description: Learn how to add data related to products or a shopping cart using the Adobe Experience Platform Web SDK.
exl-id: 3c79e776-89ef-494b-a2ea-3c23efce09ae
---
# Collect commerce, product, and order information

If your organization sells products or services, you can use this page as a guide on how to track those products and services.

This page uses the XDM [Commerce Schema](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/commerce.schema.md) field group.

This field group consists of two main parts:

* The `commerce` object. This object lets you indicate which actions happen to the `productListItems` array.
* The `productListItems` array.

>[!TIP]
>
>If you are familiar with Adobe Analytics, the `commerce` object contains data similar to commerce events in the `events` variable. The `productListItems` object array contains data similar to the `products` variable.

## The `commerce` object {#commerce-object}

This section describes the fields available in the `commerce` object.

>[!TIP]
>
>A measure has two fields: `id` and `value`. Most of the time, you only use the `value` field (for example, `'value':1`). The `id` field allows you to set a unique identifier for tracking when the measure was sent. See the XDM documentation for [Measure](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/data/measure.schema.md) for more information.

| Measure | Recommendation | Description |
|---|---|---|
|[`cartAbandons`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/commerce.schema.md#xdmcartabandons)|Optional|A cart is no longer accessible or purchasable by the user.|
|[`checkouts`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/commerce.schema.md#xdmcheckouts)|Highly recommended|A user is no longer browsing for products but is in the process of purchasing a product.|
|[`productListAdds`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/commerce.schema.md#xdmproductlistadds)|Highly recommended|A product is added to a list. Be sure to set the product in the `productListItems` at the same time.|
|[`productListOpens`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/commerce.schema.md#xdmproductlistopens)|Optional|A new product list is created. For example, a new shopping cart is created.|
|[`productListRemovals`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/commerce.schema.md#xdmproductlistremovals)|Highly recommended|A product is removed from a product list.|
|[`productListReopens`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/commerce.schema.md#xdmproductlistreopens)|Optional|A product list is reactivated by the user. This action often happens in remarketing campaigns.|
|[`productListViews`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/commerce.schema.md#xdmproductlistviews)|Highly recommended|A list of products is viewed.|
|[`productViews`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/commerce.schema.md#xdmproductviews)|Highly recommended|A view of a product happened. Be sure to set the product viewed in the `productListItems`.|
|[`purchases`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/commerce.schema.md#xdmpurchases)|Highly recommended|An order is accepted. Must have a product list.|
|[`saveForLaters`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/commerce.schema.md#xdmsaveforlaters)|Optional|A product is saved for future use.|

{style="table-layout:auto"}

### `Commerce` object examples

Expand the section below to see an example of a Web SDK command using a field from the `commerce` object.

+++`productViews`

A basic Web SDK `sendEvent` call setting the `productViews` field to `1`:

```javascript
alloy("sendEvent", {
  "xdm":{
    "commerce":{
      "productViews":{
        "value":1
      }
    }
  }
});
```

+++

## The `order` object {#order-object}

The `commerce` object contains a dedicated object for collecting order details. This is called the `order` object.

This section describes all the fields supported by the `order` object.

| Field | Option | Recommendation | Description |
|---|---|---|---|
|[`currencyCode`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/data/order.schema.md#xdmcurrencycode)|||The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency for the order total.|
|[`payments[]`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/data/order.schema.md#xdmpayments)|||The list of payments on an order. A [paymentItem](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/data/paymentitem.schema.md) includes the following.|
||[`currencyCode`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/data/paymentitem.schema.md#xdmcurrencycode)|Optional|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency for this payment method.|
||[`paymentAmount`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/data/paymentitem.schema.md#xdmpaymentamount)|Highly recommended|The value of the payment in the currency code specified.|
||[`paymentType`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/data/paymentitem.schema.md#xdmpaymenttype)|Highly recommended|The type of payment (for example, `credit_card`, `gift_card`, `paypal`). See the list of [known values](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/data/paymentitem.schema.md#xdmpaymenttype-known-values) for details.|
||[`transactionID`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/data/paymentitem.schema.md#xdmtransactionid)|Optional|A unique ID for this payment transaction.|
|[`priceTotal`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/data/order.schema.md#xdmpricetotal)||Highly recommended|The total for this order after all discounts and taxes have been applied.|
|[`purchaseID`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/data/order.schema.md#xdmpurchaseid)||Highly recommended|The unique identifier assigned by the seller for this purchase.|
|[`purchaseOrderNumber`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/data/order.schema.md#xdmpurchaseordernumber)||Optional|A unique identifier assigned by the purchaser for this purchase.|

### Order object examples

Expand the section below to see an example of a Web SDK command using the `commerce` object.

+++`Order` object example

A Web SDK `sendEvent` call setting the `order` object that applies to multiple products in the `productListItems` array:

```javascript
alloy("sendEvent",{
  "xdm":{
    "commerce":{
      "order":{
        "purchaseID":"123456789",
        "currencyCode":"USD",
        "priceTotal":39.98,
        "payments":[
          {
            "transactionID":"amx12345",
            "paymentAmount":39.98,
            "paymentType":"credit_card",
            "currencyCode":"USD"
          }
        ]
      }
    },
    "productListItems":[
      {
        "SKU":"HT105",
        "name":"The Big Floppy Hat",
        "priceTotal":29.99,
        "quantity":1
      },
      {
        "SKU":"HT104",
        "name":"The Small Floppy Hat",
        "priceTotal":9.99,
        "quantity":1
      }
    ]
  }
});
```

+++

## The product list object {#product-list-object}

The product list indicates which products are related to the corresponding action. It is a list of [productListItems](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/productlistitem.schema.md). Each product has several optional fields.

| Field | Recommendation | Description |
|---|---|---|
|[`currencyCode`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/productlistitem.schema.md#xdmcurrencycode)|Optional|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency for the product. This field typically only applies when you have multiple products in the product list with different currency codes.|
|[`priceTotal`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/productlistitem.schema.md#xdmpricetotal)|Highly recommended|Only set this field when applicable. For example, it might not be possible to set on `productView` event because different variations of the product can have different prices but on a `productListAdds` event.|
|[`product`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/productlistitem.schema.md#xdmproduct)|Highly recommended|The XDM ID for the product.|
|[`productAddMethod`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/productlistitem.schema.md#xdmproductaddmethod)|Highly recommended|The method that was used to add a product item to the list by the visitor. Set with `productListAdds` measures and only used when a product is added to the list. Examples include `add to cart button`, `quick add`, and `upsell`.|
|[`productName`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/productlistitem.schema.md#xdmname)|Highly recommended| The display name or the human-readable name of the product.|
|[`quantity`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/productlistitem.schema.md#xdmquantity)|Highly recommended|The number of units the customer has indicated they require of the product. Should be set on `productListAdds`, `productListRemoves`, `purchases`, `saveForLaters`, and so on.|
|[`SKU`](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/productlistitem.schema.md#xdmsku)|Highly recommended|Store Keeping Unit. It is the unique identifier for the product.|

### Product list examples

Expand the sections below to see examples of Web SDK commands using the `productListItems` object.

+++`productListItems` example

A Web SDK `sendEvent` call setting the `productViews` for multiple products in the `productListItems` array:

```javascript
alloy("sendEvent",{
  "xdm":{
    "commerce":{
      "productViews":{
        "value":1
      }
    },
    "productListItems":[
      {
        "SKU":"HT105",
        "name":"The Big Floppy Hat",
      },
      {
        "SKU":"HT104",
        "name":"The Small Floppy Hat",
      }
    ]
  }
});
```

+++

+++`productListAdds` examplae

A Web SDK `sendEvent` call setting the `productListAdds` event for multiple products in the `productListItems` array:

```javascript
alloy("sendEvent",{
  "xdm":{
    "commerce":{
      "productListAdds":{
        "value":1
      }
    },
    "productListItems":[
      {
        "SKU":"HT105",
        "name":"The Big Floppy Hat",
        "quantity":1,
        "priceTotal":29.99,
        "productAddMethod":"Add to Cart Button"
      },
      {
        "SKU":"HT104",
        "name":"The Small Floppy Hat",
        "quantity":1,
        "priceTotal":9.99,
        "productAddMethod":"Add-on"
      }
    ]
  }
});
```

+++

+++`checkouts` example

A Web SDK `sendEvent` call setting the `checkouts` event for multiple products in the `productListItems` array:

```javascript
alloy("sendEvent",{
  "xdm":{
    "commerce":{
      "checkouts":{
        "value":1
      }
    },
    "productListItems":[
      {
        "SKU":"HT105",
        "name":"The Big Floppy Hat",
        "quantity":1,
        "priceTotal":29.99
      },
      {
        "SKU":"HT104",
        "name":"The Small Floppy Hat",
        "quantity":1,
        "priceTotal":9.99
      }
    ]
  }
});
```

+++
