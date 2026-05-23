---
title: Media Event Information Data Type
description: Learn about the Media Event Information Experience Data Model (XDM) data type.
exl-id: 91bb7f28-b629-4044-b687-768c545ac8a2
TQID: https://experienceleague.adobe.com/U8KhaDwXjJBeEbwY4POi490-73wyekcruu9jFi0rD1s
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: acc16deb-1d7f-4ec9-9ce3-6cdf355afde6
    internal-label: XDM
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# [!UICONTROL Media Event Information] data type

[!UICONTROL Media Event Information] is a standard Experience Data Model (XDM) data type that describes media details information related to the experience event. 

![A diagram of the Media Event Information data type.](../images/data-types/media-event-information.png)

| Property | Data type | Description |
| --- | --- | --- |
| `mediaCollection` | [!UICONTROL mediaDetails] | Media details information related to the experience event. This data type is used for both [media data collection](./media-collection-details.md) and [media data reporting](./media-reporting-details.md). |
| `mediaEventTimestamp` | [!UICONTROL String] | The time when a media event occurred. |
| `mediaEventType` | [!UICONTROL String] | The media event type. |

{style="table-layout:auto"}

For more details on the field group, refer to the [public XDM repository](https://github.com/adobe/xdm/blob/master/components/datatypes/mediaevent.schema.json)
