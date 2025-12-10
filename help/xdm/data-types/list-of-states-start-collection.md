---
title: List of States Start Collection Data Type
description: Learn about the List of States Start Data Type Experience Data Model (XDM) data type.
exl-id: adeb3e91-7266-41ce-b406-f7fd5dbb2236
---
# [!UICONTROL List of States Start] data type

The [!UICONTROL List of States Start] data type is an Experience Data Model (XDM) data type designed for representing information related to the starting state of various player attributes. It includes the [!UICONTROL Player State Name] properties which indicates the specific attribute state (for example, "fullscreen", "mute", "closedCaptioning"). This data type is used to capture and describe the initial conditions of different player states.

![A diagram of [!UICONTROL List of States Start] data type.](../images/data-types/list-of-states-start-collection.png)

| Display name                   | Property     | Data type | Required  | Description                                     | 
|--------------------------------|--------------|-----------|-----------|-------------------------------------------------|
| [!UICONTROL Player State Name] | `name`       | string    |    No     | The name of the player state. Enumerated: "fullscreen", "mute", "closedCaptioning", "pictureInPicture", "inFocus" with respective meanings. |

{style="table-layout:auto"}
