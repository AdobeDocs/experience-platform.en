---
title: Key Value Pair Data Type
description: Learn about the Key Value Pair Experience Data Model (XDM) data type.
exl-id: 2a1a7537-9019-4cf2-bfa1-9c760f9656dd
TQID: https://experienceleague.adobe.com/D1O4T-bH4evkFSMsMByQ0LunEIhkN8Ho2hfNeFM--Bs
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!UICONTROL Key Value Pair] data type

[!UICONTROL Key Value Pair] is a standard Experience Data Model (XDM) data type that captures the details of a generic key-value pair. This data type is used in the [[!UICONTROL Adobe Analytics ExperienceEvent Full Extension] field group](../field-groups/event/analytics-full-extension.md) to describe the array items of a list variable.

![Key Value Pair Structure](../images/data-types/key-value-pair.png)

| Property | Data type | Description |
| --- | --- | --- |
| `key` | String | A key (name) for a generic variable or value. |
| `value` | String | The value of the variable. |

{style="table-layout:auto"}

For more details on the data type, refer to [the public XDM repository](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/analytics/keyvalue.schema.json).
