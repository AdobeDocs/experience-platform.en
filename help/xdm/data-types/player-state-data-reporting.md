---
title: Player State Data Reporting Data Type
description: Learn about the Player State Data Reporting Experience Data Model (XDM) data type.
exl-id: b01e126d-2467-46b3-8da7-8ec4580595b3
TQID: https://experienceleague.adobe.com/jKhITuKOHg5g-WRNVRXvgl5MXNJst9Tp5YJWU3ddB-4
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
---
# [!UICONTROL Player State Data Reporting] data type

[!UICONTROL Player State Data Reporting] is a standard Experience Data Model (XDM) data type that describes the various states and their occurrences within a media player. Use the [!UICONTROL Player State Data Reporting] data type to capture different player states such as fullscreen, mute, closed captioning, picture-in-picture, and in-focus states. For each state, it records whether the state is set, the count of occurrences, and the total duration it remains active during the media playback.

![A diagram of the  Player State Data Reporting data type.](../images/data-types/player-state-data-information.png)

| Display name      | Property       | Data type | Description                                  |
|-------------------|----------------|-----------|----------------------------------------------|
| [!UICONTROL Player State Name] | `name`       | string    | The name of the player state. Enumerated: "fullscreen", "mute", "closedCaptioning", "pictureInPicture", "inFocus" with respective meanings. |
| [!UICONTROL Player State Set]  | `isSet`      | boolean   | Whether or not the player state is set on that state. |
| [!UICONTROL Player State Count]| `count`      | integer   | The number of times that player state was set on the stream. |
| [!UICONTROL Player State Time] | `time`       | integer   | The total duration of that player state.      |

{style="table-layout:auto"}

For more details on the field group, refer to the [public XDM repository](https://github.com/adobe/xdm/blob/master/components/datatypes/playerstatedata.schema.json)
