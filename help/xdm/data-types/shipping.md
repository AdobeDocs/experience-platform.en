---
title: Shipping Data Type
description: Learn about the Shipping Experience Data Model (XDM) data type.
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
