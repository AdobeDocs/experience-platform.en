---
title: Shipping Data Type
description: Learn about the Shipping Experience Data Model (XDM) data type.
exl-id: c3a58e46-c80e-4896-b21c-47dc5a6c869b
TQID: https://experienceleague.adobe.com/s-0-gPkJuCWxtmGSTr3W0co82X64743FXraYpfJfF3A
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
# [!UICONTROL Shipping] data type

[!UICONTROL Shipping] is a standard Experience Data Model (XDM) data type that provides details related to the shipment of one or more products. It includes details on the logistics and specifics regarding the delivery of ordered items.


![A diagram of the [!UICONTROL Shipping] data type.](../images/data-types/shipping.png)

| Display name         | Property              | Data type | Description                                          |
|----------------------|-----------------------|-----------|------------------------------------------------------|
| [!UICONTROL Shipping Method]      | `shippingMethod`    | string    | The method of shipping chosen by the customer.        |
| [!UICONTROL Shipping Amount]      | `shippingAmount`    | number    | The amount the customer had to pay for shipping.      |
| [!UICONTROL Currency code]        | `currencyCode`      | string    | The ISO 4217 alphabetic currency code used for pricing the product. |
| [!UICONTROL Shipping Destination] | `shippingDestination` | string | The ship-to destination specified by the user (for example, home, store, and so on). |
| [!UICONTROL Ship Date]            | `shipDate`          | string    | The date when one or more items from an order are shipped. |
| [!UICONTROL Shipping Address]     | `address`           | [[!UICONTROL address]](./address.md) | The shipping address.           |
| [!UICONTROL Tracking Number]      | `trackingNumber`    | number    | The tracking number provided by the shipping carrier. |
| [!UICONTROL Tracking URL]         | `trackingURL`       | string    | The URL to track the shipping status of an order item. |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/shipping.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/shipping.schema.json)
