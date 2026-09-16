---
description: Learn how to use the Events tab in Adobe Experience Platform Debugger.
keywords: debugger;experience platform debugger extension;chrome;extension;events;dtm;target
seo-description: Experience Platform Debugger Events Screen
seo-title: Events
title: Events Tab
exl-id: 1f94ca36-d545-4e41-89a9-ed97c45991fb
TQID: https://experienceleague.adobe.com/jFZtw-Qh15b8D7NHDjbgFIYRJVWVc5-qny6lmFVmWFQ
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
---
# Events tab

The **Events** tab provides a graphical view of the events that occur, displayed on a timeline.

![](images/events.jpg)

For each event, an icon for the applicable solution appears on the timeline. Icons also show changes to the data layer (if enabled). Hover over an icon for a summary of the event. Select on the event for more details. You can Shift-Select or Control-Select to view multiple events.

![](images/events-details.jpg)

Select on a detail for more information.

![](images/events-details-more.jpg)

## Track data layer changes

To enable tracking data layer changes in the timeline: 

1. Select the Gear icon at the top right.
1. Enter the name of your data layer.

    ![](images/event-datalayer.jpg)

1. Select **[!UICONTROL Save]**.

The data layer change details show anything that has been deleted or added. You can select **{}** to look deeper into the data layer.

## Download event information

Select **[!UICONTROL Download]** to download an Excel file showing information about your page calls.
