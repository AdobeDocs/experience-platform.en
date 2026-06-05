---
title: List of States Start Collection Data Type
description: Learn about the List of States Start Data Type Experience Data Model (XDM) data type.
exl-id: adeb3e91-7266-41ce-b406-f7fd5dbb2236
TQID: https://experienceleague.adobe.com/fr4TJgxCJYOVSKHbWpyGDsmupivHPCCyDY7UXaxRU3Y
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!UICONTROL List of States Start] data type

The [!UICONTROL List of States Start] data type is an Experience Data Model (XDM) data type designed for representing information related to the starting state of various player attributes. It includes the [!UICONTROL Player State Name] property that indicates the specific attribute state (for example, "fullscreen", "mute", "closedCaptioning"). This data type is used to capture and describe the initial conditions of different player states.

![A diagram of [!UICONTROL List of States Start] data type.](../images/data-types/list-of-states-start-collection.png)

>[!NOTE]
>
>This data type belongs to the `mediaCollection` schema — fields that your implementation sends to the streaming media backend. Adobe processes this data and produces the corresponding `mediaReporting` fields, which are ingested into Platform datasets. See [Streaming media XDM reporting schema](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/edge/reporting-schema) for details.

| Display name | Property | Data type | Required | Description |
|---|---|---|---|---|
| [!UICONTROL Player State Name] | `name` | string | No | The name of the player state. Enumerated: "fullscreen", "mute", "closedCaptioning", "pictureInPicture", "inFocus" with respective meanings. |
