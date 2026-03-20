---
title: Monitor edge segmentation 
description: Learn how to use the monitoring dashboard to observe edge segmentation throughput.
---

# Monitor edge segmentation

You can use the monitoring dashboard in the Adobe Experience Platform UI to conduct real-time monitoring of edge segmentation within your organization. Use this feature to access greater transparency into the throughput of your edge data.

## Getting started

This guide requires a working understanding of the following components of Experience Platform:

* [Dataflows](../home.md): Dataflows represent data jobs that transfer information across Experience Platform. They are configured across various services to facilitate the movement of data from source connectors to target datasets, as well as to Identity Service, Real-Time Customer Profile, and Destinations.
* [Capacities](../../landing/license-usage-and-guardrails/capacity.md): In Experience Platform, capacities let you know if your organization has exceeded any of your guardrails and gives you information on how to fix these issues.
* [Edge segmentation](../../segmentation/methods/edge-segmentation.md): Edge segmentation is the ability to evaluate segment definitions in Adobe Experience Platform instantaneously [on the edge](../../landing/edge-and-hub-comparison.md), enabling same page and next page personalization use cases. 

## Access {#access}

To access the monitoring dashboard for edge segmentation throughput, select **[!UICONTROL Monitoring]** within the **[!UICONTROL Data management]** section, followed by **[!UICONTROL Edge]**.

IMAGE

The monitoring dashboard appears. This shows monitoring metrics for edge streaming throughput, a graph displaying the rate of edge streaming throughput, and a datastream view. These metrics can be filtered by service, by edge, and by date.

IMAGE

>[!NOTE]
>
>You can see the Datastream view **only** if you select [!UICONTROL Edge segmentation throughput].

If you filter by service, you can choose which service you want to view the throughput information about. This includes services such as Edge segmentation, Data collection, Target, Adobe Journey Optimizer, Offer Decisioning, Custom personalized destinations, Event forwarding, Adobe Analytics, and Adobe Audience Manager.

If you filter by edge, you can choose which edge you want to view information about. Supported edges include US East Coast, US West Coast, Europe, India, Singapore, Australia, Japan, and Switzerland. You can select multiple edges to view at a time.

If you filter by date, you can choose the timescale to filter your events. This timescale can be set up to 30 days. Alternatively, you can use one of the following preconfigured time scales: Last 6 hours, Last 12 hours, Last 24 hours, Last 7 days, and Last 30 days.

## Monitoring metrics for edge throughput

The metrics table provides information specific to the selected service's edge throughput. You can refer to the following table for more details on each column.

| Metric | Description |
| ------ | ----------- |
| Requests received | The number of requests received by the selected edges within the timeframe. |
| Peak throughput | The highest rate of requests received by the selected edges within the timeframe. |

{style="table-layout:auto"}

## Monitoring graph for edge segmentation throughput

The monitoring graph shows the records per second received by the selected edges within the alloted timeframe, compared to the maximum capacity allowed.

IMAGE

## Datastream view

>[!NOTE]
>
>The datastream view is **only** available if you're filtering for Edge segmentation throughput.

The datastream view section displays a list of the latest datastreams that passed through the sandbox's edges.

IMAGE

| Field | Description |
| ----- | ----------- |
| Datastream name | The name of the datastream. |
| Datasets | The ??? of datasets the datastream belongs to. | 
| Service enabled | ??? Boolean? Or which services it's enabled for? |
| Requests | The number of requests that passed through the datastream. |
| Peak throughput | The highest rate of requests that passed through the datastream. |
