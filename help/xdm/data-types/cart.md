---
title: Cart Data Type
description: Learn about the Cart Experience Data Model (XDM) data type.
exl-id: 24ae3882-60f3-4962-b0b5-7dba48170da8
---
# [!UICONTROL Cart] data type

[!UICONTROL Cart] is a standard Experience Data Model (XDM) data type that provides properties related to a shopping cart. Use this data type to capture the unique identifier assigned by the seller (`Cart ID`) and the source (`Cart Source`) where one or more products were added to the cart. 

![A diagram of the [!UICONTROL Cart] data type.](../images/data-types/cart.png)

| Display name   | Property          | Data type | Description                                                |
|----------------|-------------------|-----------|------------------------------------------------------------|
| [!UICONTROL Cart ID]        | `cartID`        | string    | Unique identifier assigned by the seller for the cart.      |
| [!UICONTROL Cart Source]    | `cartSource`    | string    | Where one or more products were added to the cart from.     |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/cart.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/cart.schema.json)
