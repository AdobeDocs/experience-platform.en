---
title: Chapter Details Reporting Data Type
description: Learn about the Chapter Details Reporting Experience Data Model (XDM) data type.
exl-id: 73ebfbe3-66c3-4ef9-9944-d9cb5772127b
TQID: https://experienceleague.adobe.com/gVjIGh7CHzfTzgq-XnEzvkBiyospwk9gG8V47rst0hI
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
---
# [!UICONTROL Chapter Details] Reporting data type

[!UICONTROL Chapter Details] Reporting is a standard Experience Data Model (XDM) data type that describes various attributes related to chapters or segments within media content. Use the [!UICONTROL Chapter Details] Reporting data type to capture details such as chapter name, duration, position, ID, playback status (started/completed), and the time spent on each chapter. Media reporting fields are used by Adobe services to analyze the Media Collection fields sent by users. This data, alongside other specific user metrics, are computed and reported upon.

![A diagram of the Chapter Details Reporting data type.](../images/data-types/chapter-details-reporting.png)

>[!NOTE]
>
>Each display name contains a link to further information on its audio and video parameters. The linked pages contain details on the video ad data collected by Adobe, implementation values, network parameters, reporting, and important considerations.

| Display name                                                                                                                                                            | Property      | Data type |           Description                                       |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|-----------|--------------------------------------------------------------|
| [[!UICONTROL Chapter Completed]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/chapter-parameters.html#chapter-complete)       | `isCompleted` | boolean   | Whether the chapter has completed or not.                |
| [[!UICONTROL Chapter ID]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/chapter-parameters.html#chapter)                       | `ID`          | string    | The auto-generated ID of the chapter.             |
| [[!UICONTROL Chapter Length Or Duration]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/chapter-parameters.html#chapter-length)| `length`      | integer   | The length of the chapter, in seconds.            |
| [[!UICONTROL Chapter Name]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/chapter-parameters.html#chapter-name)                | `friendlyName`| string    | The name of the chapter and/or segment.           |
| [[!UICONTROL Chapter Offset]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/chapter-parameters.html#chapter-offset)            | `offset`      | integer   | The offset of the chapter inside the content (in seconds) from the start. |
| [[!UICONTROL Chapter Position]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/chapter-parameters.html#chapter-position)        | `index`       | integer   | The position (index, integer) of the chapter inside the content. |
| [[!UICONTROL Chapter Started]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/chapter-parameters.html#chapter-start)            | `isStarted`   | boolean   | Whether the chapter has started or not.                  |
| [[!UICONTROL Chapter Time Played]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/chapter-parameters.html#chapter-time-spent)   | `timePlayed`  | integer   | The time spent on the chapter, in seconds.        |
