---
title: Return Data Type
description: Learn about the Return Experience Data Model (XDM) data type.
exl-id: 1fd99a25-547f-49e7-8980-dda7db2ebb8a
TQID: 'https://experienceleague.adobe.com/4tYQzlTE8Otqmv-W3sVw5nhNShuSFqGwjF0mEIClpMQ'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
---
# [!UICONTROL Return] data type

[!UICONTROL Return] is a standard Experience Data Model (XDM) data type that captures the essential information related to a Return Merchandise Authorization (RMA).

![A diagram of the  Return data type.](../images/data-types/return.png)

| Display name                     | Property             | Data type | Description                                      |
|----------------------------------|----------------------|-----------|--------------------------------------------------|
| [!UICONTROL Return ID]           | `returnID`           | string    | The unique identifier for this RMA.               |
| [!UICONTROL Return Status]       | `returnStatus`       | string    | The current status of the RMA (for example Pending or Closed). |
| [!UICONTROL Order Purchase ID]   | `purchaseID`         | string    | The unique identifier of the order/purchase that the RMA pertains to. |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/return.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/return.schema.json)
