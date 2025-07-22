---
title: Monitor streaming profile ingestion
description: Learn how to use the monitoring dashboard to monitor streaming profile ingestion
---
# Monitor streaming profile ingestion

You can use the monitoring dashboard to monitor streaming profile ingestion...


## Understanding the streaming profile ingestion dashboard

You can use three different metric categories in the monitoring dashboard for streaming profile ingestion: [!UICONTROL Throughput], [!UICONTROL Ingestion], and [!UICONTROL Latency].

* **Throughput**
  * **Capacity**
  * **Request throughput**
  * **Processing throughput**
* **Ingestion**
  * **Records created**
  * **Failed records**
  * **Dropped records**
* **Latency**

## Monitoring metrics for streaming profile ingestion

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