---
title: Requisition List Data Type
description: This document provides an overview of the Requisition List Experience Data Model (XDM) data type.
---
# [!UICONTROL Requisition List] data type

[!UICONTROL Requisition List] is a standard Experience Data Model (XDM) data type that describes a curated collection of items for procurement or purchase purposes. Use the [!UICONTROL Requisition List] data type to identify and describe requisition lists.

![A diagram of the [!UICONTROL Requisition List] data type.](../images/data-types/requisition-list.png)

Certainly, here's the table based on the provided schema:

| Display name              | Property          | Data type | Description                                      |
|---------------------------|-------------------|-----------|--------------------------------------------------|
| [!UICONTROL Requisition List ID]       | `ID`            | string    | Unique identifier of the requisition list.        |
| [!UICONTROL Requisition List Name]     | `name`          | string    | Name of the requisition list specified by the customer. |
| [!UICONTROL Requisition List Description] | `description` | string    | Description of the requisition list specified by the customer. |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/requisitionlist.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/requisitionlist.schema.json)
