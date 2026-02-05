---
title: Monitor streaming audiences
description: Learn how to use the monitoring dashboard to monitor audiences that are evaluated using streaming segmentation
hide: true
hidefromtoc: true
exl-id: b47325fb-7768-4bc0-92d2-5541729e636d
---
# Monitor streaming audiences

intro blurb

## Get started

This guide requires a working understanding of the following components of Experience Platform:

* [Dataflows](../home.md): Dataflows represent data jobs that transfer information across Experience Platform. They are configured across various services to facilitate the movement of data from source connectors to target datasets, as well as to Identity Service, Real-Time Customer Profile, and Destinations.
* [Segmentation Service](../../segmentation/home.md): 
* [Capacities](../../landing/license-usage-and-guardrails/capacity.md): In Experience Platform, capacities let you know if your organization has exceeded any of your guardrails and gives you information on how to fix these issues.

## Monitoring metrics for streaming audiences {#streaming-audience-metrics}

>[!CONTEXTUALHELP]
>id="platform_monitoring_streaming_audience_evaluation_rate"
>title="Evaluation rate"
>abstract="This metric represents the number of records evaluated per second."
>text="Learn more in documentation"

>[!CONTEXTUALHELP]
>id="platform_monitoring_streaming_audience_p95_latency"
>title="P95 ingestion latency"
>abstract="This metric measures the 95th percentile latency of an event arriving in Adobe Experience Platform to successful evaluation into the audience."
>text="Learn more in documentation"

The following table provides more detailed information about the metrics that are used for streaming audiences.

| Metric | Description | Dimensions |
| ------ | ----------- | ---------- |
| Evaluation rate | The number of processed audience evaluations per second. | Sandbox, Dataset |
| P95 ingestion latency | The 95th percentile latency of the successful event arrival in the audience. | Sandbox, Dataset |
| Records received | The total number of records received from streaming ingestion for streaming segmentation during the selected time window. | Dataset |
| Records evaluated | The total number of records that **successfully** evaluated using streaming segmentation during the selected time window. | Dataset |
| Records failed | The total number of records that **failed** evaluation in streaming segmentation due to errors during the selected time window. | Dataset, Flow run |
| Records skipped | The total number records that **skipped** evaluation in streaming segmentation due to errors during the selected time window. | Dataset, Flow run |
| Profiles qualified | The number of profiles that qualified to the audience during th selected time window. | Sandbox, Audience |
| Profiles disqualified | The number of profiles that disqualified from the audience during th selected time window. | Sandbox, Audience |

{style="table-layout:auto"}

## Use the monitoring dashboard for streaming audiences {#monitoring-dashboard}

To access the monitoring dashboard for streaming audiences, go to the Experience Platform UI, select **[!UICONTROL Monitoring]** from the left-navigation and then select **[!UICONTROL Streaming end-to-end]**.

IMAGE

On the top of the dashboard is the **[!UICONTROL Audiences]** metric card. This displays information about the **Evaluation rate** for the audiences.
