---
title: Requisition List Data Type
description: Learn about the Requisition List Experience Data Model (XDM) data type.
exl-id: cbea6b08-9d4d-4cbe-b0c5-506bccc6df67
TQID: https://experienceleague.adobe.com/PJjU5TIr7vs8HD1Y5Ymo3KwDU1jprtGjLD6OGqRAazQ
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!UICONTROL Requisition List] data type

[!UICONTROL Requisition List] is a standard Experience Data Model (XDM) data type that describes a curated collection of items for procurement or purchase. Use the [!UICONTROL Requisition List] data type to identify and describe requisition lists.

![A diagram of the [!UICONTROL Requisition List] data type.](../images/data-types/requisition-list.png)

| Display name              | Property          | Data type | Description                                      |
|---------------------------|-------------------|-----------|--------------------------------------------------|
| [!UICONTROL Requisition List ID]       | `ID`            | string    | The unique identifier of the requisition list.        |
| [!UICONTROL Requisition List Name]     | `name`          | string    | The name of the requisition list specified by the customer. |
| [!UICONTROL Requisition List Description] | `description` | string    | A description of the requisition list specified by the customer. |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/requisitionlist.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/requisitionlist.schema.json)
