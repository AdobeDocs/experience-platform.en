---
title: List of States End Collection Data Type
description: Learn about the List of States End Collection Data Type Experience Data Model (XDM) data type.
exl-id: e59d12e0-2f18-4637-8a51-41b7b5b59b57
---
# [!UICONTROL List of States End] data type

The List of States End Collection data type data type is an Experience Data Model (XDM) data type designed for representing information related to the ending state of various player attributes. It includes the [!UICONTROL Player State Name] properties which indicates the specific attribute state (for example, "fullscreen", "mute", "closedCaptioning"). This data type is used to capture and describe the initial conditions of different player states.

![A diagram of List of States End Collection data type.](../images/data-types/list-of-states-end-collection.png)

| Display name                   | Property     | Data type | Required  | Description                                     | 
|--------------------------------|--------------|-----------|-----------|-------------------------------------------------|
| [!UICONTROL Player State Name] | `name`       | string    |    No     | The name of the player state. Enumerated: "fullscreen", "mute", "closedCaptioning", "pictureInPicture", "inFocus" with respective meanings. |

{style="table-layout:auto"}
