---
title: Impressions Data Type
description: Learn about the Impressions XDM data type.
exl-id: 1e758043-a41e-45f7-ae8b-514990d0649e
TQID: 'https://experienceleague.adobe.com/W5OxAJdDaOnGBkgLxT1t0gN98PgpUBpH9faLO-WpCZc'
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
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
---
# [!UICONTROL Impressions] data type

[!UICONTROL Impressions] is a standard XDM data type that describes a marketing impression, which is a metric used to quantify the number of digital views or engagements for a piece of content such as an advertisement, digital post, or web page.

![](../images/data-types/impressions.png)

| Property | Data type | Description |
| --- | --- | --- |
| `ID` | String | A unique ID for the impression. |
| `displays` | Integer | The number of times the impression item has been displayed to a customer. |
| `selected` | Integer | The number of times the impression item has been selected or clicked. |
| `type` | String | The type of impression. |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/industry-verticals/impressions.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/industry-verticals/impressions.schema.json)
