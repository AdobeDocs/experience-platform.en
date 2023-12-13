---
title: Cart Data Type
description: This document provides an overview of the Cart Experience Data Model (XDM) data type.
---
# [!UICONTROL Cart] data type

[!UICONTROL Cart] is a standard Experience Data Model (XDM) data type that provides properties related to a shopping cart. The data type captures the unique identifier assigned by the seller (!UICONTROL Cart ID]) and the source ([!UICONTROL Cart Source]) where one or more products were added to the cart. 

![A diagram of the [!UICONTROL Cart] data type.](../images/data-types/cart.png)

| Display name   | Property          | Data type | Description                                                |
|----------------|-------------------|-----------|------------------------------------------------------------|
| [!UICONTROL Cart ID]        | `cartID`        | string    | Unique identifier assigned by the seller for the cart.      |
| [!UICONTROL Cart Source]    | `cartSource`    | string    | Where one or more products were added to the cart from.     |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/cart.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/cart.schema.json)
