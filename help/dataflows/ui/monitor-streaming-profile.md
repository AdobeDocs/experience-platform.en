---
title: Monitor streaming profile ingestion
description: Learn how to use the monitoring dashboard to monitor streaming profile ingestion
hide: true
hidefromtoc: true
---
# Monitor streaming profile ingestion

You can use the monitoring dashboard in the Adobe Experience Platform UI to conduct real-time monitoring of streaming profile ingestion rates in your organization. Use this feature for better transparency of throughput, latency, and data quality metrics surrounding your streaming data. Additionally, you can use this feature for proactive alerting and retrieval of actionable insights to identify potential capacity violations and data ingestion issues.

Read the following guide to learn how you can use the monitoring dashboard to monitor rates and metrics of streaming profile ingestion jobs in your organization.

## Get started

This guide requires a working understanding of the following components of Experience Platform:

* [Dataflows](../home.md): Dataflows are a representation of data jobs that move data across Experience Platform. Dataflows are configured across different services, helping move data from source connectors to target datasets, to [!DNL Identity] and [!DNL Profile], and to [!DNL Destinations].
* [Real-Time Customer Profile](../../profile/home.md): Real-Time Customer Profile combines data from multiple sources—online, offline, CRM, and third-party—into a single, actionable view of each customer, enabling consistent and personalized experiences across all touch points.
* [Streaming ingestion](../../ingestion/streaming-ingestion/overview.md): Streaming ingestion is the process of continuously sending data—such as customer interactions, events, or signals—from various sources (websites, mobile apps, CRM, ERP, etc.) into Experience Platform in real time. This data is immediately available for use in the Real-Time Customer Profile, enabling instant personalization and decision-making.

## Use the monitoring dashboard for streaming profile ingestion 

To access the monitoring dashboard for streaming profile ingestion, go to the Experience Platform UI, select **[!UICONTROL Monitoring]** from the left-navigation and then select **[!UICONTROL Streaming end-to-end]**.

![The monitoring dashboard for streaming profile ingestion.](../assets/ui/streaming-profiles/monitoring-dashboard.png)

Refer to the top-header of the dashboard for the *[!UICONTROL Profile]* metrics card. Use this display to view information on the records ingested, failed, and skipped, as well as information on the current status of request throughput and latency.

![The profile card.](../assets/ui/streaming-profiles/profile-card.png)

## Understanding the streaming profile ingestion dashboard

Next, use the interface to view detailed information on your streaming profile ingestion metrics. Use calendar feature to toggle between different timeframes. You can select from following pre-configured time windows:

* [!UICONTROL Last 6 hours]
* [!UICONTROL Last 12 hours]
* [!UICONTROL Last 24 hours]
* [!UICONTROL Last 7 days]
* [!UICONTROL Last 30 days]

Alternatively, you can manually configure your own timeframe using the calendar.

You can use three different metric categories in the monitoring dashboard for streaming profile ingestion: [!UICONTROL Throughput], [!UICONTROL Ingestion], and [!UICONTROL Latency].

>[!BEGINTABS]

>[!TAB Throughput]

Select **[!UICONTROL Throughput]** to view information on the amount of data that Experience Platform is processing given a configured period of time. Refer to this metric to evaluate the efficiency and capacity of your system.

![The dashboard with the display set to "throughput".](../assets/ui/streaming-profiles/throughput.png)

* **Capacity**: The maximum amount of data that your sandbox can process under defined conditions.
* **Request throughput**: The rate at which events are received by the ingestion system, measured in events per second.
* **Processing throughput**: The rate at which the system successfully ingests and processes incoming event payloads, measured in events per second.

>[!TAB Ingestion]

**Ingestion**: Select **[!UICONTROL Ingestion]** to view information on the ingestion jobs in your sandbox. These ingestion jobs are measured in three different metrics.

![The dashboard with the display set to "ingestion".](../assets/ui/streaming-profiles/ingestion.png)

* **Records created**: The total amount of records created within a given time period. This metric represents successful data ingestion processes in your sandbox.
* **Failed records**: The total number of records that did not get ingested due to errors.
* **Dropped records**: The total number of records that were dropped due to violation of capacity limits.

>[!TAB Latency]

Select **[!UICONTROL Latency]** to view information on the amount of time it takes Experience Platform to respond to a request or complete an operation within a given time period.

![The dashboard with the display set to "latency".](../assets/ui/streaming-profiles/latency.png)

>[!ENDTABS]

## Monitoring metrics for streaming profile ingestion {#streaming-profile-metrics}

>[!CONTEXTUALHELP]
>id="platform_monitoring_streaming_profile"
>title="Monitor streaming profile ingestion"
>abstract="The monitoring dashboard for streaming profiles displays information on throughput, ingestion rates, and latency. Use this dashboard to view, understand, and analyze the data processing metrics. of your streaming profiles into Experience Platform."
>text="Learn more in documentation"

>[!CONTEXTUALHELP]
>id="platform_monitoring_streaming_profile_request_throughput"
>title="Request throughput"
>abstract="This metric represents the number of events entering the ingestion system per second."
>text="Learn more in documentation"

>[!CONTEXTUALHELP]
>id="platform_monitoring_streaming_profile_processing_throughput"
>title="Processing throughput"
>abstract="This metric represents the number of events that are successfully ingested by the system each second."
>text="Learn more in documentation"

>[!CONTEXTUALHELP]
>id="platform_monitoring_streaming_profile_p95_ingestion_latency"
>title="P95 ingestion latency"
>abstract="This metric measures the 95th percentile latency from the moment an event arrives in Experience Platform to when it is successfully ingested into the Profile store."
>text="Learn more in documentation"

>[!CONTEXTUALHELP]
>id="platform_monitoring_streaming_profile_max_throughput"
>title="Max throughput"
>abstract="This metric represents the maximum number of inbound requests per second entering streaming profile ingestion."
>text="Learn more in documentation"

>[!CONTEXTUALHELP]
>id="platform_monitoring_streaming_profile_records_ingested"
>title="Records ingested"
>abstract="This metric represents the total number of records ingested to the Profile store within a configured time window."
>text="Learn more in documentation"

>[!CONTEXTUALHELP]
>id="platform_monitoring_streaming_profile_records_failed"
>title="Records failed"
>abstract="This metric represents the total number of records that failed ingestion into the Profile store, within a configured time window, due to errors."
>text="Learn more in documentation"

>[!CONTEXTUALHELP]
>id="platform_monitoring_streaming_profile_records_skipped"
>title="Records skipped"
>abstract="This metric represents the total number of records that were dropped within a configured time window, due to configuration or capacity breaches."
>text="Learn more in documentation"

>[!CONTEXTUALHELP]
>id="platform_monitoring_streaming_profile_error_details"
>title="Error details"
>abstract="This metric represents the number of failed events due to errors."
>text="Learn more in documentation"

Use the metrics table for information specific to your dataflows. Refer to the following table for details on each column.

| Metric | Description | Dimensions | Frequency of measurement |
| --- | --- | --- | --- |
| Request throughput | This metric represents the number of events entering the ingestion system per second. |Sandbox/Dataflow | Real-time monitoring with a data refresh every 60 seconds. |
| Processing throughput | This metric represents the number of events that are successfully ingested by the system each second. |Sandbox/Dataflow | Real-time monitoring with a data refresh every 60 seconds. |
| P95 ingestion latency | This metric measures the 95th percentile latency from the moment an event arrives in Experience Platform to when it is successfully ingested into the Profile store. | Sandbox/Dataflow | Real-time monitoring with a data refresh every 60 seconds. |
| Max throughput | This metric represents the maximum number of inbound requests per second entering streaming profile ingestion | <ul><li>Sandbox/Dataflow</li><li>Dataflow run</li></ul> |
| Records ingested | This metric represents the total number of records ingested to the Profile store within a configured time window. | <ul><li>Sandbox/Dataflow</li><li>Dataflow run</li></ul> | <ul><li>Sandbox/Dataflow: Real-time monitoring with a data refresh every 60 seconds.</li><li>Dataflow run: Grouped in 15 minutes.</li></ul>  |
| Records failed | This metric represents the total number of records that failed ingestion into the Profile store, within a configured time window, due to errors. | <ul><li>Sandbox/Dataflow</li><li>Dataflow run</li></ul> |<ul><li>Sandbox/Dataflow: Real-time monitoring with a data refresh every 60 seconds.</li><li>Dataflow run: Grouped in 15 minutes.</li></ul>  |
| Records skipped | This metric represents the total number of records that were dropped within a configured time window, due to configuration or capacity breaches. | <ul><li>Sandbox/Dataflow</li><li>Dataflow run</li></ul> | <ul><li>Sandbox/Dataflow: Real-time monitoring with a data refresh every 60 seconds.</li><li>Dataflow run: Grouped in 15 minutes.</li></ul>  |
| Error details | This metric represents the number of failed events due to errors. | Dataflow run | Grouped in an hourly window. |

{style="table-layout:auto"}

To monitor the data that is being ingested in a specific dataflow, select the filter icon ![filter](/help/images/icons/filter-add.png) beside the dataflow name.

![The metrics page](../assets/ui/streaming-profiles/metrics.png)

Next, use the dataflow metrics interface to select the specific flow run that you want to inspect. Select the filter icon ![filter](/help/images/icons/filter-add.png) beside a flow run iteration to view metrics particular to the selected flow run.

![The dataflow metrics interface.](../assets/ui/streaming-profiles/flows.png)

Dataflow runs represent an instance of dataflow execution. For example, if a dataflow is scheduled to run hourly at 9:00 AM, 10:00 AM, and 11:00 AM, then you would have three instances of a flow run. Flow runs are specific to your particular organization.

Use the dataflow run details page to view metrics and information of your selected run iteration.

![The dataflow run activities interface.](../assets/ui/streaming-profiles/flow-runs.png)