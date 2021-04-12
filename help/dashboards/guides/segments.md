---
keywords: Experience Platform;profile;segment;segments;segmentation;user interface;UI;customization;segment dashboard;dashboard
title: Segments Dashboard
description: Adobe Experience Platform provides a dashboard through which you can view important information about segments your organization has created. 
topic: guide
type: Documentation
exl-id: de5e07bc-2c44-416e-99db-7607059117cb
---
# (Beta) Segments dashboard {#segment-dashboard}

>[!IMPORTANT]
>
>The dashboard functionality outlined in this document is currently in beta and is not available to all users. The documentation and the functionality are subject to change.

The Adobe Experience Platform user interface (UI) provides a dashboard through which you can view important information about your segments, as captured during a daily snapshot. This guide outlines how to access and work with the segments dashboard in the UI and provides more information regarding the visualizations displayed in the dashboard.  

For an overview of all of the Adobe Experience Platform Segmentation Service features within the Platform user interface, please visit the [Segmentation Service UI guide](../../segmentation/ui/overview.md).

## Segment dashboard data

The segment dashboard displays a snapshot of the attribute (record) data that your organization has within the Profile store in Experience Platform. The snapshot does not include any event (time series) data. 

The attribute data in the snapshot shows the data exactly as it appears at the specific point in time when the snapshot was taken. In other words, the snapshot is not an approximation or sample of the data, and the segment dashboard is not updating in real time.

>[!NOTE]
>
>Any changes or updates made to the data since the snapshot was taken will not be reflected in the dashboard until the next snapshot is taken.

## Exploring the segment dashboard

To navigate to the segment dashboard within the Platform UI, select **[!UICONTROL Segments]** in the left rail, then select the **[!UICONTROL Overview]** tab to display the dashboard.

![](../images/segments/dashboard-overview.png)

### Select a segment

The dashboard will automatically select a segment to display, but you can change the segment that is displayed using the drop down menu. To choose a different segment, select the drop down next to the segment name and then select the segment that you wish to view.

>[!NOTE]
>
>The dropdown menu shows all segments that your organization has created so far. This may mean that you will need to scroll in order to view the complete list of available segments.

![](../images/segments/change-segment.png)

### Widgets and metrics

The segments dashboard is composed of widgets, which are read-only metrics providing important information regarding your selected segment. The "last updated" date and time on the widget show when the last snapshot of the data was taken.

![](../images/segments/widget-timestamp.png)

## Available widgets

Experience Platform provides multiple widgets that you can use to visualize different metrics related to your segment. Select the name of a widget below to learn more:

* [[!UICONTROL Segment size]](#segment-size)
* [[!UICONTROL Profiles added over time]](#profiles-added-over-time)
* [[!UICONTROL Profiles by namespace]](#profiles-by-namespace)

### [!UICONTROL Segment size] {#segment-size}

The **[!UICONTROL Segment size]** widget displays the total number of merged profiles within the selected segment at the time the snapshot was taken. This number is the result of applying the segment merge policy to your Profile data in order to merge profile fragments together to form a single profile for each individual in the segment. 

For more information on fragments and merged profiles, please begin by reading the [Real-time Customer Profile overview](../../profile/home.md).

![](../images/segments/segment-size.png)

### [!UICONTROL Profiles added over time] {#profiles-added-over-time}

The **[!UICONTROL Profiles added over time]** widget provides information regarding the total number of profiles in the segment as captured during the daily snapshot, for the last 30 days. This widget displays how the segment size may have shifted over a 30 day period as new profiles qualify for or exit from the segment. 

To learn more about segment evaluation and how profiles qualify and exit from segments, please refer to the [Segmentation Service documentation](../../segmentation/home.md).

![](../images/segments/profiles-added-over-time.png)

### [!UICONTROL Profiles by namespace] {#profiles-by-namespace}

The **[!UICONTROL Profiles by namespace]** widget displays the breakdown of namespaces across all of the merged profiles in your selected segment. The total number of profiles by identity namespace ([!UICONTROL ID namespace] in the widget) may be higher than the total number of profiles in the segment because one profile could have multiple namespaces associated with it. In other words, adding together the values shown for each namespace may total more than the total profiles in the segment because if a customer interacts with your brand on more than one channel, multiple namespaces may be associated with that individual customer.

To learn more about identity namespaces, please visit the [Adobe Experience Platform Identity Service documentation](../../identity-service/home.md).

![](../images/segments/profiles-by-namespace.png)

## Next steps

By following this document you should now be able to locate the segment dashboard and select a segment to view. You should also understand the metrics displayed in the available widgets. To learn more about working with segments in the Experience Platform UI, please refer to the [Segmentation Service UI guide](../../segmentation/ui/overview.md).
