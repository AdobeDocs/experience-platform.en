---
title: List of States End Collection Data Type
description: Learn about the List of States End Collection Data Type Experience Data Model (XDM) data type.
exl-id: e59d12e0-2f18-4637-8a51-41b7b5b59b57
TQID: 'https://experienceleague.adobe.com/aRF5lJ7YEzL66F0EE8rGCv94hydwmB1LDARvbyG27Rc'
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
# [!UICONTROL List of States End] data type

The [!UICONTROL List of States End] data type is an Experience Data Model (XDM) data type designed for representing information related to the ending state of various player attributes. It includes the [!UICONTROL Player State Name] property that indicates the specific attribute state (for example, "fullscreen", "mute", "closedCaptioning"). This data type is used to capture and describe the ending conditions of different player states.

![A diagram of List of States End Collection data type.](../images/data-types/list-of-states-end-collection.png)

>[!NOTE]
>
>This data type belongs to the `mediaCollection` schema — fields that your implementation sends to the streaming media backend. Adobe processes this data and produces the corresponding `mediaReporting` fields, which are ingested into Platform datasets. See [Streaming media XDM reporting schema](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/edge/reporting-schema) for details.

| Display name | Property | Data type | Required | Description |
|---|---|---|---|---|
| [!UICONTROL Player State Name] | `name` | string | No | The name of the player state. Enumerated: "fullscreen", "mute", "closedCaptioning", "pictureInPicture", "inFocus" with respective meanings. |
