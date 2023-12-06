---
title: Media Event Information Data Type
description: This document provides an overview of the Media Event Information Experience Data Model (XDM) data type.
---
# [!UICONTROL Media event information] data type

[!UICONTROL Media Event Information] is a standard Experience Data Model (XDM) data type that describes media details information related to the experience event. 

![A diagram of the Media Event Information data type.](../images/data-types/media-event.png)

| Property | Data type | Description |
| --- | --- | --- |
| `mediaCollection` | [[!UICONTROL mediaDetails]](./-details-information.md) | Media details information related to the experience event. |
| `mediaEventTimestamp` | [!UICONTROL String] | The time when a media event occurred. |
| `mediaEventType` | [!UICONTROL String] | The media event type. |

{style="table-layout:auto"}

For more details on the field group, refer to the [public XDM repository](https://github.com/adobe/xdm/blob/master/components/datatypes/mediaevent.schema.json)
