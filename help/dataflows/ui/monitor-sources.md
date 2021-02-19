---
keywords: Experience Platform;home;popular topics;monitor accounts;monitor dataflows;dataflows;sources
description: Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for viewing existing dataflows from the Sources workspace.
solution: Experience Platform
title: Monitor Dataflows for Sources in the UI
topic: overview
type: Tutorial
---

# Monitor dataflows for sources in the UI

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for monitoring dataflows and troubleshooting errors from failed flow runs using the [!UICONTROL Sources] workspace.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

- [Sources](../../sources/home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
- [Sandboxes](../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

## Monitor failed dataflows

In the [Platform UI](https://platform.adobe.com), select **[!UICONTROL Monitoring]** from the left navigation to access the [!UICONTROL Monitoring] dashboard. The [!UICONTROL Monitoring] dashboard contains metrics and information on all sources dataflows, including insights into the health of data traffic from the source level to Platform.

The upper part of the dashboard contains a representation of the ingestion flow from the source level, to [!DNL Identity Service], and to [!DNL Profile]. Each cell includes a dot marker that indicates the presence of errors that occurred at that stage of ingestion. A green dot means an error-free ingestion, while a red dot means that an error occurred in that particular stage of ingestion.

![ingestion-flow](../assets/ui/monitor-sources/ingestion-flow.png)

At the center of the dashboard is the [!UICONTROL Source ingestion panel], which contains metrics and graphs that display data on records ingested and records failed. By default, the data displayed contains ingestion rates from the last 24 hours. Select **[!UICONTROL Last 24 hours]** to adjust the time frame of records displayed.

![monitoring-dashboard](../assets/ui/monitor-sources/monitoring-dashboard.png)

A calendar pop-up window appears, providing you options for alternative ingestion time frames. Select **[!UICONTROL Last 30 days]** and then select **[!UICONTROL Apply]**

![adjust-time-frame](../assets/ui/monitor-sources/adjust-timeframe.png)

The graphs are enabled by default and you can disable them to expand the list of sources below. Select the **[!UICONTROL Metrics and graphs]** toggle to disable the graphs.

![metrics-and-graphs](../assets/ui/monitor-sources/metrics-graphs.png)

| Source ingestion | Description |
| ---------------- | ----------- |
| Metrics | Displays information on the total number of records ingested, records failed, and failed dataflows. |
| Records ingested | Displays the total count of records ingested into Data Lake based on the time frame that you set. |
| Records failed | Displays the number of records that were not ingested into Data Lake due to errors in the data, based on the time frame that you set. |

The source ingestion list displays all sources that contain existing dataflows, including information on their ingestion rates, number of failed records, and total number of failed dataflows based on the time frame that you applied.

![source-ingestion](../assets/ui/monitor-sources/source-ingestion.png)

To sort through the list of sources, select **[!UICONTROL My sources]** and then select your category of choice from the dropdown menu. To focus on cloud storages, select **[!UICONTRIOL Cloud storage]**

![sort-by-category](../assets/ui/monitor-sources/sort-by-category.png)

Alternatively, you can enter a source into the search bar to isolate a single source. Once you have your source identified, select the filter icon ![filter](../assets/ui/monitor-sources/filter.png) beside it, to see a list of its active dataflows.

![search](../assets/ui/monitor-sources/search.png)

A list of dataflows appears. To narrow down the list and focus on dataflows with errors, select **[!UICONTROL Show failures only]**.

![show-failures-only](../assets/ui/monitor-sources/show-failures-only.png)

Locate the dataflow that you want to monitor and then select the filter icon ![filter](../assets/ui/monitor-sources/filter.png) beside it, to see more information on its run status

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

For a more granular representation of the error, select **[!UICONTROL Preview error diagnostics]**

![files](../assets/ui/monitor-sources/files.png)

The [!UICONTROL Error diagnostics preview] window appears, displaying a preview of up to 100 errors in the dataflow. You can select **[!UICONTROL Download]** to retrieve a curl command, which then allows you to download the error diagnostics.

When you are finished, select **[!UICONTROL Close]**

![error-diagnostics](../assets/ui/monitor-sources/error-diagnostics.png)

## Monitor successful dataflows

You can use the breadcrumb system at the top header to navigate your way back to the dataflows screen and monitor successful dataflows. Select **[!UICONTROL Run start: 2/14/2021, 9:47 PM]** to return to the previous page, and then select **[!UICONTROL Dataflow: Loyalty Data Ingestion Demo - Failed]** to return to the dataflows page.

![breadcrumbs](../assets/ui/monitor-sources/breadcrumbs.png)

From the dataflows page, disable the **[!UICONTROL Show failures only]** toggle, and then locate the successful dataflow that you want to monitor. Once you have identified your dataflow, select the filter icon ![filter](../assets/ui/monitor-sources/filter.png) beside it, to see its dataflow run information.

![dataflow-success](../assets/ui/monitor-sources/dataflow-success.png)

The [!UICONTROL Source ingestion] page contains information that confirms the successful ingestion of your dataflow. From here, you can start monitoring your dataflow's journey from the source-level, to [!DNL Identity Service], and then to [!DNL Profile].

Select **[!UICONTROL Identities]** to see ingestion in the [!UICONTROL Identities] stage.

![sources](../assets/ui/monitor-sources/sources.png)

The [!UICONTROL Identity processing] page contains information on records ingested to [!DNL Identity Service], including number of identities added, graphs created, and graphs updated.

Select the [!UICONTROL Profiles] to see the state records ingestion in the [!DNL Profiles] stage.

![identities](../assets/ui/monitor-sources/identities.png)

The [!UICONTROL Profile processing] page contains information on records ingested to [!DNL Profile], including number of profile fragments created, profile fragments updated, and the total number of profile fragments.

![profiles](../assets/ui/monitor-sources/profiles.png)

## Next steps

By following this tutorial, you have successfully monitored the ingestion flow of a dataflow from the source-level, to [!DNL Identity Service], and to [!DNL Profile], using the **[!UICONTROL Monitoring]** dashboard. You have also successfully identified errors that contributed to the failure of dataflows during the ingestion process. See the following documents for more details:

- [Real-time Customer Profile overview](../../profile/home.md)
- [Data Science Workspace overview](../../data-science-workspace/home.md)
