---
title: Network Tab
description: Learn how to use the Network tab in Adobe Experience Platform Debugger.
keywords: debugger;experience Platform Debugger extension;chrome;extension;network;information
seo-description: Experience Platform Debugger Network screen
seo-title: Network Tab
uuid: 839686c9-6e4f-4661-acf6-150ea24dc47f
exl-id: ed0579ef-ec26-43df-9453-a395c105038a
TQID: 'https://experienceleague.adobe.com/pHNSxx-HRE2sJKyKq8nLQKAu3ps7cO3gb1iMVntSV58'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: f6ac78a3-5b59-40f5-a37d-45df5303d3a3
    internal-label: Dashboards
subfeature_v2:
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
---
# Network tab

The **Network** tab aggregates all of the Adobe CX Enterprise solution calls made on the page and displays each request as a column, with the most recent request on the left. Standard parameters are automatically labeled with friendly names and arranged to group common parameters on the same row. Each column header shows the request type, such as `Analytics · Page view` or `Concierge · Voice conversation`, and the request number.

![](images/network.jpg)

This screen is useful for comparing key value pairs across hits. You can confirm that parameters used for integrations, such as the ECID or the Supplemental Data ID, are consistent across integrations.

>[!NOTE]
>
>At this time, not all parameters passed in the solution calls (for example, Analytics context variables, Target custom parameters, or Visitor ID Service Customer IDs) are visible in the Network screen.

To change the information by solution, select the solution you want to view from the list in the left nav. The following example is filtered to show only Analytics:

![](images/network-analytics.jpg)

To return to displaying all solutions, select **[!UICONTROL Network]**

Select on an item in the Network view to see an expanded view. From the expanded view window, you can copy the information shown to the Clipboard.

![](images/network-expand.jpg)

<!--
Use the icon at the top of each column to copy the server call URL to your clipboard, where you can paste it into another document for reference or debugging purposes.

![](images/copy.jpg)
-->

## Filter, search, and navigate requests {#filter-search}

Starting in Debugger version 1.8.0, the request tables in the **[!UICONTROL Network]** tab and in each solution tab include the following controls:

* **Solution buttons**: Available in the **[!UICONTROL Network]** tab only. Select one or more solutions to show only their requests. Select **[!UICONTROL All]** to show requests from every solution.
* **[!UICONTROL Request types]**: Select which request types to show, such as Analytics page views, Web SDK events, media events, or Brand Concierge conversations. The menu shows the number of captured requests of each type.
* **[!UICONTROL Find in requests]**: Search for an event, ID, or any raw value. Search highlights matching requests, rows, and values, but it does not hide requests that don't match. To move between matching requests, select the previous and next arrow buttons next to the search field, or press Enter to go to the next match and Shift+Enter to go to the previous match. Press Escape to clear the search.
* **[!UICONTROL Reset view]**: Clears the request type filter and search. In the **[!UICONTROL Network]** tab, it also shows requests from all solutions again.

The request count shows the number of captured requests. When filters hide some requests, the count also shows the number of requests shown. When you search, it also shows the number of matching requests.

When the table contains more requests than fit in the window, arrow buttons appear at the left and right edges of the table. Select these buttons to jump to the oldest or most recent request.

## Clear and download requests {#clear-download}

To clear the list, select **[!UICONTROL Clear events]**.

To download an Excel file containing the information on this screen, select **[!UICONTROL Download]**. In the **[!UICONTROL Network]** tab, the download includes requests from the selected solutions. Request type filters and search do not change which requests are downloaded.
