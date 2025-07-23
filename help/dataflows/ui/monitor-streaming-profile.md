---
title: Monitor streaming profile ingestion
description: Learn how to use the monitoring dashboard to monitor streaming profile ingestion
---
# Monitor streaming profile ingestion

You can use the monitoring dashboard in the Adobe Experience Platform UI to conduct real-time monitoring of streaming profile ingestion rates in your organization. Use this feature for better transparency of throughput, latency, and data quality metrics surrounding your streaming data. Additionally, you can use this feature for proactive alerting and retrieval of actionable insights to identify potential capacity violations and data ingestion issues.

Read the following guide to learn how you can use the monitoring dashboard to monitor rates and metrics of streaming profile ingestion jobs in your organization.

## Understanding the streaming profile ingestion dashboard

You can use three different metric categories in the monitoring dashboard for streaming profile ingestion: [!UICONTROL Throughput], [!UICONTROL Ingestion], and [!UICONTROL Latency].

* **Throughput**: Select **[UICONTROL Throughput]** to view information on the amount of data that Experience Platform is processing given a configured period of time. Refer to this metric to evaluate the efficiency and capacity of your system.
  * **Capacity**: The maximum amount of data that your sandbox can process under defined conditions.
  * **Request throughput**: The rate at which events are received by the ingestion system, measured in events per second.
  * **Processing throughput**: The rate at which the system successfully ingests and processes incoming event payloads, measured in events per second.
* **Ingestion**: Select [!UICONTROL Ingestion] to view information on the ingestion jobs in your sandbox. These ingestion jobs are measured in three different metrics:
  * **Records created**: The total amount of records created within a given time period. This metric represents successful data ingestion processes in your sandbox.
  * **Failed records**: The total number of records that did not get ingested due to errors.
  * **Dropped records**: The total number of records that were dropped due to violation of capacity limits.
* **Latency**: Select [!UICONTROL Latency] to view information on the amount of time it takes Experience Platform to respond to a request or complete an operation within a given time period.

## Monitoring metrics for streaming profile ingestion {#streaming-profile-metrics}

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

| Metric | Description | Dimensions | Frequency of measurement |
| --- | --- | --- | --- |
| Request throughput | This metric represents the number of events entering the ingestion system per second. |Sandbox/Dataflow | Real-time monitoring with a data refresh every 60 seconds. |
| Processing throughput | This metric represents the number of events that are successfully ingested by the system each second. |Sandbox/Dataflow | Real-time monitoring with a data refresh every 60 seconds. |
| P95 ingestion latency | This metric measures the 95th percentile latency from the moment an event arrives in Experience Platform to when it is successfully ingested into the Profile store. | Sandbox/Dataflow | Real-time monitoring with a data refresh every 60 seconds. |
| Records ingested | This metric represents the total number of records ingested to the Profile store within a configured time window. | <ul><li>Sandbox/Dataflow</li><li>Dataflow run</li></ul> | <ul><li>Sandbox/Dataflow: Real-time monitoring with a data refresh every 60 seconds.</li><li>Dataflow run: Grouped in 15 minutes.</li></ul>  |
| Records failed | This metric represents the total number of records that failed ingestion into the Profile store, within a configured time window, due to errors. | <ul><li>Sandbox/Dataflow</li><li>Dataflow run</li></ul> |<ul><li>Sandbox/Dataflow: Real-time monitoring with a data refresh every 60 seconds.</li><li>Dataflow run: Grouped in 15 minutes.</li></ul>  |
| Records skipped | This metric represents the total number of records that were dropped within a configured time window, due to configuration or capacity breaches. | <ul><li>Sandbox/Dataflow</li><li>Dataflow run</li></ul> | <ul><li>Sandbox/Dataflow: Real-time monitoring with a data refresh every 60 seconds.</li><li>Dataflow run: Grouped in 15 minutes.</li></ul>  |
| Error details | This metric represents the number of failed events due to errors. | Dataflow run | Grouped in an hourly window. |

{style="table-layout:auto"}