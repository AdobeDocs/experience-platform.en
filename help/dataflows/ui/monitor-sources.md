---
keywords: Experience Platform;home;popular topics;monitor accounts;monitor dataflows;dataflows;sources
description: This tutorial provides steps to monitor your dataflow, using both aggregated monitoring view and cross-service monitoring.
solution: Experience Platform
title: Monitor Dataflows for Sources in the UI
type: Tutorial
exl-id: 53fa4338-c5f8-4e1a-8576-3fe13d930846
---
# Monitor dataflows for sources in the UI

>[!IMPORTANT]
>
>Streaming sources, such as the [HTTP API source](../../sources/connectors/streaming/http.md) are not currently supported by the monitoring dashboard. At this moment, you can only use the dashboard to monitor batch sources.

<!-- In Adobe Experience Platform, data is ingested from a wide variety of sources, analyzed within Experience Platform, and activated to a wide variety of destinations. Platform makes the process of tracking this potentially non-linear flow of data easier by providing transparency with dataflows.

The monitoring dashboard provides you with a visual representation of the journey of a dataflow. You can use an aggregated monitoring view and navigate vertically from the source level, to a dataflow, and to a dataflow run, allowing you to view the corresponding metrics that contribute to a dataflow's success or failure. You can also use the monitoring dashboard's cross-service monitoring capacity to monitor a dataflow's journey from a source, to [!DNL Identity Service], and to [!DNL Profile].

This tutorial provides steps to monitor your dataflow, using both aggregated monitoring view and cross-service monitoring. -->

Read this document to learn how to use the monitoring dashboard to monitor your sources dataflows in the Experience Platform UI.

## Get started {#get-started}

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

* [Dataflows](../home.md): Dataflows are a representation of data jobs that move data across Platform. Dataflows are configured across different services, helping move data from source connectors to target datasets, to [!DNL Identity] and [!DNL Profile], and to [!DNL Destinations].
  * [Dataflow runs](../../sources/notifications.md): Dataflow runs are the recurring scheduled jobs based on the frequency configuration of selected dataflows.
* [Sources](../../sources/home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Identity Service](../../identity-service/home.md): Gain a better view of individual customers and their behavior by bridging identities across devices and systems.
* [Real-Time Customer Profile](../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
* [Sandboxes](../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

## Monitor your sources data using the monitoring dashboard

>[!CONTEXTUALHELP]
>id="platform_monitoring_source_ingestion"
>title="Source ingestion"
>abstract="The Source ingestion view contains information on data activity status and metrics in data lake service, including records ingested and records failed. Review the metric definition guide to learn more about metrics and graphs."
>text="Learn more in documentation"

>[!CONTEXTUALHELP]
>id="platform_monitoring_dataflow_run_details_ingestion"
>title="Dataflow run details"
>abstract="Sources processing contains information on data activity status and metrics in data lake service, including records ingested and records failed. Review the metric definition guide to learn more about metrics and graphs."
>text="Learn more in documentation"

<!-- In the [Platform UI](https://platform.adobe.com), select **[!UICONTROL Monitoring]** from the left navigation to access the [!UICONTROL Monitoring] dashboard. The [!UICONTROL Monitoring] dashboard contains metrics and information on all sources dataflows, including insights into the health of data traffic from a source to [!DNL Identity Service], and to [!DNL Profile].

At the center of the dashboard is the [!UICONTROL Source ingestion] panel, which contains metrics and graphs that display data on records ingested and records failed. -->

In the monitoring dashboard, select [!UICONTROL Sources] from the main header to update your dashboard with a display of your sources dataflow ingestion rate.

![The monitoring dashboard with the sources card selected.](../assets/ui/monitor-sources/sources.png)

The [!UICONTROL Ingestion rate] graph displays your data ingestion rate based on your configured time frame. By default, the monitoring dashboard displays ingestion rate from the last 24 hours. For steps on how to configure your time frame, read the guide on [configuring monitoring time frame](monitor.md#configure-monitoring-time-frame).

The graph is enabled to display by default. To hide the graph, select **[!UICONTROL Metrics and graphs]** to disable the toggle and hide the graph.

![The ingestion rate metrics graph.](../assets/ui/monitor-sources/metrics-graph.png)

The lower part of the dashboard displays a table that outlines the current metrics report for all existing sources dataflows.

![The monitoring dashboard metrics table.](../assets/ui/monitor-sources/metrics-table.png)

| Metrics | Description |
| --- | --- |
| Source name |
| Records received |
| Records ingested |
| Records skipped |
| Records failed |
| Ingested rate |
| Total failed dataflows |

{style="table-layout:auto"}

You can further filter your data using the options provided above the metrics table:

| Filtering options | Description |
| --- | --- |
| Search | Use the search bar to filter your view to a single source type. |
| Sources | Select **[!UICONTROL Sources]** to filter your view and display metric data per source type. This is the default display that the monitoring dashboard uses. |
| Dataflows | Select **[!UICONTROL Dataflows]** to filter your view and display metric data per dataflow. |
| Show failures only | Select **[!UICONTROL Show failures only]** to filter your view and display only dataflows that reported ingestion failures. |
| My sources | You can further filter your view by using the [!UICONTROL My sources] dropdown menu. Use the dropdown menu to filter your view by category. Alternatively, you can select **[!UICONTROL All sources]** to display metrics on all or sources, or select **[!UICONTROL My sources]** to display only the sources that you have a corresponding account with. |

{style="table-layout:auto"}

To monitor the data that is being ingested in a specific dataflow, select the filter icon ![filter](../assets/ui/monitor-sources/filter.png) beside a source.

![Monitor a specific dataflow by selecting the filter icon beside a given source.]()

The metrics table updates to a table of active dataflows that correspond to the source that you selected. During this step, you can view additional information on your dataflows, including their corresponding dataset and data type, as well as a time stamp on when they were last active. 

To further inspect a dataflow, select the filter icon ![filter](../assets/ui/monitor-sources/filter.png) beside a dataflow.

![The dataflows table in the monitoring dashboard.]()

* The dataflow run details page
* The dataflow run errors section

## Next steps {#next-steps}

By following this tutorial, you have successfully monitored the ingestion dataflow from the source-level using the **[!UICONTROL Monitoring]** dashboard. You have also successfully identified errors that contributed to the failure of dataflows during the ingestion process. See the following documents for more details:

* [Monitoring identities in dataflows](./monitor-identities.md)
* [Monitoring profiles in dataflows](./monitor-profiles.md)
