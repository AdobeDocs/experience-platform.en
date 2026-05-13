---
title: Category Data Data Type
description: Learn about the Category data Experience Data Model (XDM) data type.
exl-id: f8d52f2d-5fb0-4999-8b31-ddc14225b0ab
TQID: https://experienceleague.adobe.com/t9bTcHkqHpahlcb75NFoYHzTtdpC8n4yZEDxu4d1l-A
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!UICONTROL Category data] data type

[!UICONTROL Category data] is a standard Experience Data Model (XDM) data type that describes information related to a product's category. 

![A diagram of the  Category data data type.](../images/data-types/category-data.png)

| Display name    | Property           | Data type | Description                              |
|-----------------|--------------------|-----------|------------------------------------------|
| [!UICONTROL Category identifier] | `categoryID`   | string    | The identifier for the product's category.    |
| [!UICONTROL Category name]   | `categoryName`   | string    | The name of the product's category.          |
| [!UICONTROL Category path]   | `categoryPath`   | string    | The path of the product's category.          |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/categorydata.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/categorydata.schema.json)
