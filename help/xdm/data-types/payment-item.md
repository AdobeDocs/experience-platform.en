---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;payment item;datatype;data-type;data type;
solution: Experience Platform
title: Payment Item Data Type
description: Learn about the Payment Item Experience Data Model (XDM) data type.
exl-id: d25a358b-73c1-468b-a9c5-808385689932
TQID: https://experienceleague.adobe.com/lxki-3fVq4DqBDEX1eyRiYsUq81pqOzkoBBghlkxI0Q
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!UICONTROL Payment Item] data type

[!UICONTROL Payment Item] is a standard Experience Data Model (XDM) data type that describes a payment associated with an order that defines the type of payment, the amount, and the associated currency.

![payment item image](../images/data-types/payment-item.PNG){width=400}

| Property | Data type | Description |
| --- | --- | --- |
| `currencyCode` | String | The ISO 4217 currency code used for the order totals. All instances must conform to the regular expression `^[A-Z]{3}$`. Examples include `USD` and `EUR`. |
| `paymentAmount` | Double | The value of the payment. |
| `paymentType` | String | The method of payment for this order. Accepted enum values include: <li> `cash` </li> <li> `credit_card` </li> <li> `debit_card` </li> <li> `gift_card` </li> <li> `check` </li> <li> `paypal` </li> <li> `wire_transfer` </li> <li> `credit_card_reference` </li> <li> `other` </li> |
| `transactionID` | String | The unique transaction identifier for this payment item. |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/data/paymentitem.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/data/paymentitem.schema.json)
