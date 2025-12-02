---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;order;datatype;data-type;data type;
solution: Experience Platform
title: Order Data Type
description: Learn about the Order Experience Data Model (XDM) data type.
exl-id: abfc6d53-ffe6-4692-ad65-03d556831fa0
---
# [!UICONTROL Order] data type

[!UICONTROL Order] is a standard Experience Data Model (XDM) data type that describes the order placed for a product list.

![A diagram of the [!UICONTROL Order] data type.](../images/data-types/order.png)

| Display Name            | Property                | Data type | Description                                                                                                      |
|-------------------------|-------------------------|-----------|------------------------------------------------------------------------------------------------------------------|
| Purchase ID             | `purchaseID`        | String    | A unique identifier assigned by the seller for this purchase or contract. There is no guarantee that the ID is unique because the ID is defined by the seller. |
| Purchase Order Number   | `purchaseOrderNumber` | String  | A unique identifier assigned by the purchaser for this purchase or contract.                                        |
| Payment List            | `payments`          | Array of [[!UICONTROL Payment Items]](./payment-item.md) | The list of payments for this order. Payments are detailed in the [!UICONTROL Payment Items] specification. |
| Refunds List            | `refunds`           | Array of [[!UICONTROL Refund Items]](./refund-item.md) | The list of refunds for this order. Refunds are detailed in the [!UICONTROL Refund Items] specification.  |
| Return Info             | `returns`           | [[!UICONTROL Return Info]](./return.md) | The RMA (Return Merchandise Authorization) issued. Returns are detailed in the [!UICONTROL Return Info] specification. |
| Currency                | `currencyCode`      | String    | The ISO 4217 currency code used for the order totals. Examples include `USD` and `EUR`. All instances must match the pattern `^[A-Z]{3}$`. |
| Tax Amount              | `taxAmount`         | Number    | The tax amount paid by the buyer as part of the final payment.                                                   |
| Discount Amount         | `discountAmount`    | Number    | The difference between the regular price and the special price applied to the entire order, rather than to individual products. |
| Price Total             | `priceTotal`        | Number    | The total price of this order after all discounts and taxes have been applied.                                   |
| Order Type              | `orderType`         | String    | The type of order that has been placed. Possible values are `checkout` and `instant_purchase`.                   |
| Last Updated Date       | `lastUpdatedDate`   | String    | The time when a particular order record is last updated in the commerce system. Format: date-time.              |
| Created Date            | `createdDate`       | String    | The time/date when a new order is created in the commerce system. Format: date-time.                             |
| Cancel Date             | `cancelDate`        | String    | The date/time when an order cancellation is initiated by the shopper. Format: date-time.                         |
| Total Amount Refunded   | `refundTotal`       | Number    | The total amount provided in this refund on the order, combining all refunded items and after any discounts etc. have been applied. |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/data/order.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/data/order.schema.json)
