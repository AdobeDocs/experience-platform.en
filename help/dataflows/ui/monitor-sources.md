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

In Adobe Experience Platform, data is ingested from a wide variety of sources, analyzed within Experience Platform, and activated to a wide variety of destinations. Platform makes the process of tracking this potentially non-linear flow of data easier by providing transparency with dataflows.

The monitoring dashboard provides you with a visual representation of the journey of a dataflow. You can use an aggregated monitoring view and navigate vertically from the source level, to a dataflow, and to a dataflow run, allowing you to view the corresponding metrics that contribute to a dataflow's success or failure. You can also use the monitoring dashboard's cross-service monitoring capacity to monitor a dataflow's journey from a source, to [!DNL Identity Service], and to [!DNL Profile].

This tutorial provides steps to monitor your dataflow, using both aggregated monitoring view and cross-service monitoring.

## Getting started {#getting-started}

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

* [Dataflows](../home.md): Dataflows are a representation of data jobs that move data across Platform. Dataflows are configured across different services, helping move data from source connectors to target datasets, to [!DNL Identity] and [!DNL Profile], and to [!DNL Destinations].
  * [Dataflow runs](../../sources/notifications.md): Dataflow runs are the recurring scheduled jobs based on the frequency configuration of selected dataflows.
* [Sources](../../sources/home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Identity Service](../../identity-service/home.md): Gain a better view of individual customers and their behavior by bridging identities across devices and systems.
* [Real-Time Customer Profile](../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
* [Sandboxes](../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

## Aggregated monitoring view {#aggregated-monitoring-view}

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

In the [Platform UI](https://platform.adobe.com), select **[!UICONTROL Monitoring]** from the left navigation to access the [!UICONTROL Monitoring] dashboard. The [!UICONTROL Monitoring] dashboard contains metrics and information on all sources dataflows, including insights into the health of data traffic from a source to [!DNL Identity Service], and to [!DNL Profile].

At the center of the dashboard is the [!UICONTROL Source ingestion] panel, which contains metrics and graphs that display data on records ingested and records failed.

![monitoring-dashboard](../assets/ui/monitor-sources/monitoring-dashboard.png)

By default, the data displayed contains ingestion rates from the last 24 hours. Select **[!UICONTROL Last 24 hours]** to adjust the time frame of records displayed.

![change-date](../assets/ui/monitor-sources/change-date.png)

A calendar pop-up window appears, providing you options for alternative ingestion time frames. Select **[!UICONTROL Last 30 days]** and then select **[!UICONTROL Apply]**

![adjust-time-frame](../assets/ui/monitor-sources/adjust-timeframe.png)

The graphs are enabled by default and you can disable them to expand the list of sources below. Select the **[!UICONTROL Metrics and graphs]** toggle to disable the graphs.

![metrics-and-graphs](../assets/ui/monitor-sources/metrics-graphs.png)

| Source ingestion | Description |
| ---------------- | ----------- |
| [!UICONTROL Records ingested ]| The total number of records ingested. |
| [!UICONTROL Records failed] | The total number of records that were not ingested due to errors in the data. |
| [!UICONTROL Total failed dataflows] | The total number of dataflows with a `failed` status. |

The source ingestion list displays all sources that contain at least one existing account. The list also includes information on each source's ingestion rate, number of failed records, and total number of failed dataflows based on the time frame that you applied.

![source-ingestion](../assets/ui/monitor-sources/source-ingestion.png)

To sort through the list of sources, select **[!UICONTROL My sources]** and then select your category of choice from the dropdown menu. For example, to focus on cloud storages, select  **[!UICONTROL Cloud storage]**

![sort-by-category](../assets/ui/monitor-sources/sort-by-category.png)

To view all existing dataflows across all sources, select **[!UICONTROL Dataflows]**.

![view-all-dataflows](../assets/ui/monitor-sources/view-all-dataflows.png)

Alternatively, you can enter a source into the search bar to isolate a single source. Once you have your source identified, select the filter icon ![filter](../assets/ui/monitor-sources/filter.png) beside it to see a list of its active dataflows.

![search](../assets/ui/monitor-sources/search.png)

A list of dataflows appears. To narrow down the list and focus on dataflows with errors, select **[!UICONTROL Show failures only]**.

![show-failures-only](../assets/ui/monitor-sources/show-failures-only.png)

Locate the dataflow that you want to monitor and then select the filter icon ![filter](../assets/ui/monitor-sources/filter.png) beside it, to see more information on its run status.

![dataflow](../assets/ui/monitor-sources/dataflow.png)

The dataflow run page displays information on your dataflow's run start date, size of data, status, as well as its processing time duration. Select the filter icon ![filter](../assets/ui/monitor-sources/filter.png) beside the dataflow run start time to see its dataflow run details.

![dataflow-run-start](../assets/ui/monitor-sources/dataflow-run-start.png)

The [!UICONTROL Dataflow run details] page displays information on the dataflow's metadata, partial ingestion status, and error summary. The error summary contains the specific top-level error that shows at which step the ingestion process encountered an error.

Scroll down to see more specific information on the error that occurred.

![dataflow-run-details](../assets/ui/monitor-sources/dataflow-run-details.png)

The [!UICONTROL Dataflow run errors] panel displays the specific error and error code that resulted in the dataflow's ingestion failure. In this scenario, a mapper transformation error occurred, resulting in the failure of 24 records.

Select **[!UICONTROL Files]** for more information.

![dataflow-run-errors](../assets/ui/monitor-sources/dataflow-run-errors.png)

The [!UICONTROL Files] panel contains information on the file's name and path.

For a more granular representation of the error, select **[!UICONTROL Preview error diagnostics]**.

![files](../assets/ui/monitor-sources/files.png)

The [!UICONTROL Error diagnostics preview] window appears, displaying a preview of up to 100 errors in the dataflow. You can select **[!UICONTROL Download]** to retrieve a curl command, which then allows you to download the error diagnostics.

When you are finished, select **[!UICONTROL Close]**

![error-diagnostics](../assets/ui/monitor-sources/error-diagnostics.png)

You can use the breadcrumb system at the top header to navigate your way back to the [!UICONTROL Monitoring] dashboard. Select **[!UICONTROL Run start: 2/14/2021, 9:47 PM]** to return to the previous page, and then select **[!UICONTROL Dataflow: Loyalty Data Ingestion Demo - Failed]** to return to the dataflows page.

![breadcrumbs](../assets/ui/monitor-sources/breadcrumbs.png)

## Next steps {#next-steps}

By following this tutorial, you have successfully monitored the ingestion dataflow from the source-level using the **[!UICONTROL Monitoring]** dashboard. You have also successfully identified errors that contributed to the failure of dataflows during the ingestion process. See the following documents for more details:

* [Monitoring identities in dataflows](./monitor-identities.md)
* [Monitoring profiles in dataflows](./monitor-profiles.md)
