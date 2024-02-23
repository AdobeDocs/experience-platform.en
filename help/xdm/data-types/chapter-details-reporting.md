---
title: Chapter Details Reporting Data Type
description: Learn about the Chapter Details Reporting Experience Data Model (XDM) data type.
---
# [!UICONTROL Chapter Details] Reporting data type

<!-- WIP -->
<!-- Update the description below -->

[!UICONTROL Chapter Details] Reporting is a standard Experience Data Model (XDM) data type that describes various attributes related to chapters or segments within media content. Use the [!UICONTROL Chapter Details] Reporting data type to capture details such as chapter name, duration, position, ID, playback status (started/completed), and the time spent on each chapter.

<!-- Update the image below -->
![A diagram of the Chapter Details Reporting data type.](../images/data-types/chapter-details-reporting.png)

| Display name                           | Property      | Data type | Required | Description                                        |
|---------------------------|---------------|-----------|----------------------------------------------------------------------------|
| [!UICONTROL Chapter Completed]         | `isCompleted` | boolean   |   NO      | Whether the chapter has completed.                |
| [!UICONTROL Chapter ID]                | `ID`          | string    |   NO      | The auto-generated ID of the chapter.             |
| [!UICONTROL Chapter Length Or Duration]| `length`      | integer   |   Yes     | The length of the chapter, in seconds.            |
| [!UICONTROL Chapter Name]              | `friendlyName`| string    |   NO      | The name of the chapter and/or segment.           |
| [!UICONTROL Chapter Offset]            | `offset`      | integer   |   Yes     | The offset of the chapter inside the content (in seconds) from the start. |
| [!UICONTROL Chapter Position]          | `index`       | integer   |   Yes     | The position (index, integer) of the chapter inside the content. |
| [!UICONTROL Chapter Started]           | `isStarted`   | boolean   |   NO      | Whether the chapter has started.                  |
| [!UICONTROL Chapter Time Played ]      | `timePlayed`  | integer   |   NO      | The time spent on the chapter, in seconds.        |

{style="table-layout:auto"}
