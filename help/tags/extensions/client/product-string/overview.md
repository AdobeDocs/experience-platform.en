---
title: Adobe Analytics Product String Extension Overview
description: Learn about the Adobe Analytics Product String tag extension in Adobe Experience Platform.
exl-id: a49feb4e-f166-41d2-9f85-639f6ff8bb8f
TQID: https://experienceleague.adobe.com/f-SpKAI5YymyvgEx1F-x3aj2dP8mvVjCX2rdnDgvgYQ
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Adobe Analytics Product String extension overview

The `products` variable tracks how users interact with products on your site. For example, the `products` variable can track how many times a product is viewed, added to the shopping cart, checked out, and purchased. It can also track the relative effectiveness of merchandising categories on your site.

The `products` variable should always be set in conjunction with a success event.

The [!DNL Adobe Analytics Product String Builder] extension automatically sets the `products` variable for you by looping through your data layer, grabbing all the necessary product related data, and formatting it in the proper syntax shown below. You no longer need to write and maintain custom JavaScript to perform these complex actions.

## Syntax of the Products Variable

```bash
Category;Product;Quantity;Price;eventN=X|eventN2=X2;eVarN=merch_category|eVarN2=merch_category2
```

For complete documentation, visit [Products](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/products.html).

## Extension Instructions

### Action Configuration

Add the "Adobe Analytics Product String - Set s.products" action to your rule.

![Action configuration](./images/screenshot-action-config.png)

### Setting the Standard Product Data

Next, define your data layer variables. After you configure the action as outlined in the previous step, the following screen appears:

![Standard fields](./images/screenshot-standard-fields.png)

For each of the data points you want to include in the product string, enter the path to the appropriate data layer variable.

For example, if your data layer is structured like this:

```json
digitalData = {
  "transaction": {
    "item": [{
      "productInfo": {
        "productName": "My Product"
      }
    }]
  }
};
```

You would enter the following path in the "Variable for product ID/name" field to capture the `productName` variable:

```json
digitalData.transaction.item.productInfo.productName
```

>[!NOTE]
>
>If you're using a data element to populate the field, it should be configured using the Constant or Custom Code data element type and must return the path above as a string literal.

### Price Type

The `price` parameter in the [!DNL Adobe Analytics] product string must reflect the total price for the number of units purchased, not the unit price, for that product. When enabling the Price field in the extension action, you must specify whether your data layer exposes the total price or unit price. When using the unit price, the [!DNL Adobe Analytics Product String] extension automatically multiplies the unit price by the quantity to get the total price and set the product string properly.

![Price type](./images/screenshot-price-type.png)

### Custom Events &amp; Merchandising eVars

![Events and eVars](./images/screenshot-events-evars.png)

If your implementation uses custom events or merchandising eVars, follow these steps:

1. Select the associated **[!UICONTROL Add]** button.
1. Choose the event or eVar you need to set from the dropdown.
1. Enter the path to the appropriate data layer variable using the same syntax described above.

### Action Sequence

This action must be accompanied by an "Adobe Analytics - Set Variables" action that sets the corresponding success events, as well as an "Adobe Analytics - Send Beacon" action. The proper sequence of actions is illustrated below.

![Standard fields](./images/screenshot-action-type.png)

### Requirements

* An object-based [data layer](https://theblog.adobe.com/data-layers-buzzword-best-practice/) with variables for all product related data (such as product ID, quantity, price). This extension does not work with array-based data layers.
* The [Adobe Analytics](../analytics/overview.md) extension must be installed.
