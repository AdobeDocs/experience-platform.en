---
title: Ad Break Data Type
description: Learn about the Ad break Experience Data Model (XDM) data type.
exl-id: dfe0c386-8459-440d-95b5-b2139fac0fc3
TQID: https://experienceleague.adobe.com/ezXIQ1w0eEFef2OZgMEzzhZNAkT51yIGzNFdvA6mfUU
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!UICONTROL Ad break] data type

[!UICONTROL Ad break] is a standard Experience Data Model (XDM) data type that describes how a timed ad is inserted into a timed piece of media.

![Data type structure](../images/data-types/ad-break.png)

| Property | Data type | Description |
|---|---|---|
| `_dc.title` | String | A friendly name for the ad break. |
| `_id` | String | A unique identifier for the ad break. |
| `offset` | Integer | The offset, in seconds, of the ad break from the start of the primary content. |

See [advertising-break.schema.json](https://github.com/adobe/xdm/blob/master/components/datatypes/marketing/advertising-break.schema.json) in the public XDM repository for the full schema definition.
