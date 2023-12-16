---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;commerce;datatype;data-type;data type;
solution: Experience Platform
title: Commerce Data Type
description: Learn about the Commerce Experience Data Model (XDM) data type.
exl-id: c9cc569b-1a91-4a6e-8bfd-7f8ec07d01d4
---
# [!UICONTROL Commerce] data type

[!UICONTROL Commerce] is a standard Experience Data Model (XDM) data type that describes the records related to buying and selling.

![A diagram of the [!UICONTROL Commerce] data type.](../images/data-types/commerce.png)

| Display name                             | Property              | Data type                          | Description                                                                                              |
|------------------------------------------|-----------------------|------------------------------------|----------------------------------------------------------------------------------------------------------|
| [!UICONTROL Order]                       | `order`               | [[!UICONTROL Order]](./order.md)        | Describes the placed order for one or more products.                                      |
| [!UICONTROL Promotion ID]                | `promotionID`         | [!UICONTROL string]                     | A promotion identifier for the placed order, if one exists.                                                          |
| [!UICONTROL Cart Abandons]               | `cartAbandons`        | [[!UICONTROL Measure]](./measure.md)    | Describes when a product list has been identified as no longer accessible or purchasable by the user.         |
| [!UICONTROL Checkouts]                   | `checkouts`           | [[!UICONTROL Measure]](./measure.md)    | An action during the checkout process of a product list. There can be more than one checkout event if there are multiple steps in a checkout process. If there are multiple steps, the event time information and referenced page or experience is used to identify the step and individual events represented in order.                                                                  |
| [!UICONTROL Product List (Cart) Adds]    | `productListAdds`     | [[!UICONTROL Measure]](./measure.md)    | The addition of a product to the product list, such as a product being added to a shopping cart.                     |
| [!UICONTROL Product List (Cart) Opens]   | `productListOpens`    | [[!UICONTROL Measure]](./measure.md)    | The initializations of a new product list, such as a shopping cart being created.                                    |
| [!UICONTROL Product List (Cart) Removals]| `productListRemovals` | [[!UICONTROL Measure]](./measure.md)    | The removal or removals of a product entry from a product list, such as a product being removed from a shopping cart.|
| [!UICONTROL Product List (Cart) Reopens] | `productListReopens`  | [[!UICONTROL Measure]](./measure.md)    | A product list that was previously abandoned that has been re-activated by the user.                                 |
| [!UICONTROL Product List (Cart) Views]   | `productListViews`    | [[!UICONTROL Measure]](./measure.md)    | Describes when a view or views of a product list has occurred.View or views of a product-list has occurred.           |
| [!UICONTROL Product Views]               | `productViews`        | [[!UICONTROL Measure]](./measure.md)    | Describes when a view or views of an individual product has occurred.                                                 |
| [!UICONTROL Purchases]                   | `purchases`           | [[!UICONTROL Measure]](./measure.md)    | Used to track when an order has been accepted. The purchase event is the only required action in a commerce conversion. The purchase event must have a product list referenced.                                                                                                                                                                                                            |
| [!UICONTROL Save For Laters]             | `saveForLaters`       | [[!UICONTROL Measure]](./measure.md)    | Describes when a product list is saved for future use, such as a wish list.                                              |
| [!UICONTROL In Store Purchase]           | `inStorePurchase`     | [[!UICONTROL Measure]](./measure.md)    | Indicates an 'inStore' purchase. This information is saved for analytics use.                          |
| [!UICONTROL Cart]                        | `cart`                | [[!UICONTROL cart]](./cart.md)          | The properties of the cart that contains one or more products.                                         |
| [!UICONTROL Shipping]                    | `shipping`            |[[!UICONTROL shipping]](./shipping.md)   | The shipping details for one or more products.                                                             |
| [!UICONTROL Billing]                     | `billing`             | [[!UICONTROL billing]](#billing)        | The billing details for one or more payments.                                                               |
| [!UICONTROL Instant Purchase]            | `instantPurchase`     | [[!UICONTROL Measure]](./measure.md)    | Describes when a product has been purchased instantly, potentially skipping the cart or checkout.                                    |
| [!UICONTROL Requisition List Opens]      | `requisitionListOpens`| [[!UICONTROL Measure]](./measure.md)    | Indicates the initialization of a new requisition list.                                                                             |
| [!UICONTROL Requisition List Deletes]    | `requisitionListDeletes` | [[!UICONTROL Measure]](./measure.md) | Indicates the removal of requisition list.                                                                                           |
| [!UICONTROL Requisition List Adds]       | `requisitionListAdds` | [[!UICONTROL Measure]](./measure.md)    | Indicates the addition of a product(s) to a requisition list.                                                                          |
| [!UICONTROL Requisition List Removals]   | `requisitionListRemovals` | [[!UICONTROL Measure]](./measure.md)| Indicates the removal of a product(s) from a requisition product list.                                                               |
| [!UICONTROL Requisition List]            | `requisitionList`     |     [[!UICONTROL requisitionlist]](./requisition-list.md)        | The properties of requisition list created by the customer.                    |
| [!UICONTROL Scope]                       | `commerceScope`       | [[!UICONTROL commercescope]](./commerce-scope.md) | The commerce scope identifiers of where an event occurred (store view, store, website, etc.).                            |

{style="table-layout:auto"}

## [!UICONTROL billing] data type {#billing}

[!UICONTROL billing] is a standard Experience Data Model (XDM) data type that contains information about billing details. Specifically, it focuses on the billing address. 

![A diagram of the billing data type.](../images/data-types/billing.png)

| Display name                  | Property        | Data type       | Description              |
|-------------------------------|-----------------|-----------------|--------------------------|
| [!UICONTROL Billing Address]  | `address`       | [[!UICONTROL Postal Address]](./postal-address.md)   | The billing address.         |

{style="table-layout:auto"}

For more details on the [!UICONTROL Commerce] data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/marketing/commerce.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/marketing/commerce.schema.json)
