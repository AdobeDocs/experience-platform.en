---
title: Monitor streaming audiences
description: Learn how to use the monitoring dashboard to monitor audiences that are evaluated using streaming segmentation
hide: true
hidefromtoc: true
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
>abstract="This metric represents the number of processed audience evaluations per second."
>text="Learn more in documentation"

>[!CONTEXTUALHELP]
>id="platform_monitoring_streaming_audience_p95_latency"
>title="P95 ingestion latency"
>abstract="This metric measures the 95th percentile latency of successful event arrival and evaluation into the audience."

The following table provides more detailed information about the metrics that are used for streaming audiences.

| Metric | Description | Dimensions |
| ------ | ----------- | ---------- |
| Evaluation rate | The number of processed audience evaluations per second. | Sandbox, Dataset |
| P95 ingestion latency | The 95th percentile latency of the successful event arrival in the audience. | Sandbox, Dataset |
| Records received | | Dataset |
| Records evaluated | | Dataset |
| Records failed | | Dataset, Flow run |
| Records skipped | | Dataset Flow run |
| Profiles qualified | | Sandbox, Audience |
| Profiles disqualified | | Sandbox, Audience |
