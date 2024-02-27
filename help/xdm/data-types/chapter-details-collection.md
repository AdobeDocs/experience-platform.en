---
title: Chapter Details Collection Data Type
description: Learn about the Chapter Details Collection Experience Data Model (XDM) data type.
---
# [!UICONTROL Chapter Details] Collection data type

[!UICONTROL Chapter Details] Collection is a standard Experience Data Model (XDM) data type that describes various attributes related to chapters or segments within media content. Use the [!UICONTROL Chapter Details] Collection data type to capture details such as chapter name, duration, position, ID, playback status (started/completed), and the time spent on each chapter.

![A diagram of the Chapter Details Collection data type.](../images/data-types/chapter-details-collection.png)

| Display name                           | Property      | Data type | Required | Description                                       | 
|----------------------------------------|---------------|-----------|----------|---------------------------------------------------|
| [!UICONTROL Chapter Name]              | `friendlyName`| string    |   No     | The name of the chapter and/or segment.           |
| [!UICONTROL Chapter Length Or Duration]| `length`      | integer   |   Yes    | The length of the chapter, in seconds.            |
| [!UICONTROL Chapter Offset]            | `offset`      | integer   |   Yes    | The offset of the chapter inside the content (in seconds) from the start. |
| [!UICONTROL Chapter Position]          | `index`       | integer   |   Yes    | The position (index, integer) of the chapter inside the content. |
| [!UICONTROL Chapter ID]                | `ID`          | string    |   No     | The auto-generated ID of the chapter.             |
| [!UICONTROL Chapter Started]           | `isStarted`   | boolean   |    No    | Whether the chapter has started.                  |
| [!UICONTROL Chapter Completed]         | `isCompleted` | boolean   |    No    | Whether the chapter has completed.                |
| [!UICONTROL Chapter Time Played ]      | `timePlayed`  | integer   |    No    | The time spent on the chapter, in seconds.        |

{style="table-layout:auto"}
