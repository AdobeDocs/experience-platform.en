---
title: Refund Item Data Type
description: Learn about the Refund Item Experience Data Model (XDM) data type.
exl-id: 9968d314-c6f3-49d9-b860-709d7478c43a
TQID: https://experienceleague.adobe.com/pBCWrK7q8XLQPXFAtg3jUPC6OiCYdSHnNo1mX-9IsaQ
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
---
# [!UICONTROL Refund Item] data type

[!UICONTROL Refund Item] is a standard Experience Data Model (XDM) data type that describes captures information related to a refund associated with an order.

![A diagram of the  Refund Item data type.](../images/data-types/refund-item.png)

| Display name       | Property              | Data type | Description                                                                                       |
|--------------------|-----------------------|-----------|---------------------------------------------------------------------------------------------------|
| [!UICONTROL Transaction ID]     | `transactionID`     | string    | The unique transaction identifier for this refund item.                                           |
| [!UICONTROL Refund Amount]      | `refundAmount`      | number    | The value of the refund.                                                                          |
| [!UICONTROL Refund Reason]      | `refundReason`      | string    | The reason why a refund was issued.                  |
| [!UICONTROL Refund Payment Type]| `refundPaymentType` | string    | The method of payment for this order. Custom values are allowed.                        |
| [!UICONTROL Currency Code]      | `currencyCode`      | string    | The ISO 4217 currency code used for this refund item. For examples: 'USD', 'EUR'.                    |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/refunditem.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/refunditem.schema.json)
