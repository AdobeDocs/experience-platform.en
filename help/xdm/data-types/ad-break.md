---
title: Ad Break Data Type
description: Learn about the Ad break Experience Data Model (XDM) data type.
exl-id: dfe0c386-8459-440d-95b5-b2139fac0fc3
---
# [!UICONTROL Ad break] data type

[!UICONTROL Ad break] is a standard Experience Data Model (XDM) data type that describes how a timed ad is inserted into a timed piece of media.

![Data type structure](../images/data-types/ad-break.png)

| Property | Data type | Description |
| --- | --- | --- |
| `_dc.title` | String | A friendly name for the ad break. |
| `_id` | String | A unique identifier for the ad break. |
| `offset` | Integer | The offset, in seconds, of the ad break from the start of the primary content. |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/marketing/advertising-break.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/marketing/advertising-break.schema.json)
