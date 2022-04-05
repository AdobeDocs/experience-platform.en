---
keywords: Experience Platform;profile;segment;segments;segmentation;user interface;UI;customization;segment dashboard;dashboard
title: Segments Dashboard
description: Adobe Experience Platform provides a dashboard through which you can view important information about segments your organization has created. 
type: Documentation
exl-id: de5e07bc-2c44-416e-99db-7607059117cb
---
# Segments dashboard {#segment-dashboard}

The Adobe Experience Platform user interface (UI) provides a dashboard through which you can view important information about your segments, as captured during a daily snapshot. This guide outlines how to access and work with the segments dashboard in the UI and provides more information regarding the visualizations displayed in the dashboard.  

For an overview of all of the Adobe Experience Platform Segmentation Service features within the Platform user interface, please visit the [Segmentation Service UI guide](../../segmentation/ui/overview.md).

## Segment dashboard data

The segment dashboard displays a snapshot of the attribute (record) data that your organization has within the Profile store in Experience Platform. The snapshot does not include any event (time series) data. 

The attribute data in the snapshot shows the data exactly as it appears at the specific point in time when the snapshot was taken. In other words, the snapshot is not an approximation or sample of the data, and the segment dashboard is not updating in real time.

>[!NOTE]
>
>Any changes or updates made to the data since the snapshot was taken will not be reflected in the dashboard until the next snapshot is taken.

## Exploring the segment dashboard

To navigate to the [!UICONTROL Segments] dashboard within the Platform UI, select **[!UICONTROL Segments]** in the left rail, then select the **[!UICONTROL Overview]** tab to display the dashboard.

>[!NOTE]
>
>If your organization is new to Platform and does not yet have active Profile datasets or merge policies created, the [!UICONTROL Segments] dashboard is not visible. Instead, the [!UICONTROL Overview] tab displays links and documentation to help you get started with segmentation.

![](../images/segments/dashboard-overview.png)

### Modifying the [!UICONTROL Segments] dashboard

You can modify the appearance of the [!UICONTROL Segments] dashboard by selecting **[!UICONTROL Modify dashboard]**. This enables you to move, add, and remove widgets from the dashboard as well as to access the **[!UICONTROL Widget library]** to explore available widgets and create custom widgets for your organization. 

Please refer to the [modifying dashboards](../customize/modify.md) and [widget library overview](../customize/widget-library.md) documentation to learn more.

## Select a segment

The dashboard automatically selects a segment to display, however you can change the segment by using the drop down menu or segment selector. 

To choose a different segment, select the drop down next to the segment name or use the segment selector to open the segment selection dialog.

![](../images/segments/change-segment.png)

![](../images/segments/select-segment-dialog.png)

## Widgets and metrics

The segments dashboard is composed of widgets, which are read-only metrics providing important information regarding your selected segment. 

The "last updated" date and time on a widget shows when the last snapshot of the data was taken. The date and time of the snapshot is provided in UTC; it is not in the timezone of the individual user or IMS Organization.

![](../images/segments/widget-timestamp.png)

## Standard widgets

Adobe provides multiple standard widgets that you can use to visualize different metrics related to your segments. You can also create custom widgets to be shared with your organization using the [!UICONTROL Widget library]. To learn more about creating custom widgets, please begin by reading the [widget library overview](../customize/widget-library.md).

To learn more about each of the available standard widgets, select the name of a widget from the following list:

* [[!UICONTROL Audience size]](#audience-size)
* [[!UICONTROL Audience size trend]](#audience-size-trend)
* [[!UICONTROL Identity overlap]](#identity-overlap)
* [[!UICONTROL Profiles by identity]](#profiles-by-identity)

### [!UICONTROL Audience size] {#audience-size}

>[!CONTEXTUALHELP]
>id="platform_dashboards_segments_audiencesize"
>title="Audience size"
>abstract="This widget displays the total number of merged profiles within the selected segment. This number depends on the merge policy applied to your data and is correct at the time of the most recent snapshot."
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/dashboards/guides/segments.html#audience-size" text="Learn more from documentation"

The **[!UICONTROL Audience size]** widget displays the total number of merged profiles within the selected segment at the time the snapshot was taken. This number is the result of applying the segment merge policy to your Profile data in order to merge profile fragments together to form a single profile for each individual in the segment. 

For more information on fragments and merged profiles, please begin by reading the [Real-time Customer Profile overview](../../profile/home.md).

![](../images/segments/audience-size.png)

### [!UICONTROL Audience size trend] {#audience-size-trend}

>[!CONTEXTUALHELP]
>id="platform_dashboards_segments_audiencesizetrend"
>title="Audience size trend"
>abstract="This widget provides information regarding the total number of profiles in the segment as captured during the daily snapshot, for the last 30 days, 90 days, or 12 months."
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/dashboards/guides/segments.html#audience-size-trend" text="Learn more from documentation"

The **[!UICONTROL Audience size trend]** widget provides information regarding the total number of profiles in the segment as captured during the daily snapshot, for the last 30 days, 90 days, or 12 months. This widget displays how the segment size may have shifted over time as new profiles qualify for or exit from the segment.

To learn more about segment evaluation and how profiles qualify and exit from segments, please refer to the [Segmentation Service documentation](../../segmentation/home.md).

![The segments overview displays the Audience size trend widget.](../images/segments/audience-size-trend-captions.png)

The **[!UICONTROL Audience size trend]** widget provides a [!UICONTROL Captions] button in the top right of the widget. Select **[!UICONTROL Captions]** to open the automatic captions dialog. A machine learning model automatically generates captions to describe the key trends and important events by analyzing the chart and segment data.

![The automatic captions dialog for the Audience size trend widget.](../images/segments/audience-size-trend-automatic-captions-dialog.png)

### [!UICONTROL Identity overlap] {#identity-overlap}

>[!CONTEXTUALHELP]
>id="platform_dashboards_segments_identityoverlap"
>title="Identity overlap"
>abstract="This widget shows the overlap of profiles in your segment containing both chosen identities. The circles display the relative size of each identity. The number of profiles containing both namespaces are represented by the overlap between the circles."
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/dashboards/guides/segments.html#identity-overlap" text="Learn more from documentation"

The **[!UICONTROL Identity overlap]** widget displays a Venn diagram, or set diagram, showing the overlap of profiles in your segment containing multiple identities. 

Use the dropdown menus on the widget to select the identities that you wish to compare. The circles display the relative size of each chosen identity, with the number of profiles containing both namespaces being represented by the size of the overlap between the circles.

If a customer interacts with your brand on more than one channel, multiple identities will be associated with that individual customer, therefore it is likely that your organization will have multiple profiles containing fragments from more than one identity.

To learn more about identities, please visit the [Adobe Experience Platform Identity Service documentation](../../identity-service/home.md).

![](../images/segments/identity-overlap.png)

### [!UICONTROL Profiles by identity] {#profiles-by-identity}

>[!CONTEXTUALHELP]
>id="platform_dashboards_segments_profilesbyidentity"
>title="Profiles by identity"
>abstract="This widget displays the breakdown of identities across every merged profile in your selected segment."
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/dashboards/guides/segments.html#profiles-by-identity" text="Learn more from documentation"

The **[!UICONTROL Profiles by identity]** widget displays the breakdown of identities across every merged profile in your selected segment. The total number of profiles by identity may be higher than the total number of profiles in the segment because one profile could have multiple identities associated with it. In other words, adding together the values shown for each identity may total more than the total audience size in the segment because if a customer interacts with your brand on more than one channel, multiple identities may be associated with that individual customer.

To learn more about identities, please visit the [Adobe Experience Platform Identity Service documentation](../../identity-service/home.md).

![](../images/segments/profiles-by-identity.png)

## Next steps

By following this document you should now be able to locate the segment dashboard and select a segment to view. You should also understand the metrics displayed in the available widgets. To learn more about working with segments in the Experience Platform UI, please refer to the [Segmentation Service UI guide](../../segmentation/ui/overview.md).
