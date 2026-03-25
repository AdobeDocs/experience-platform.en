---
title: Monitor edge segmentation 
description: Learn how to use the monitoring dashboard to observe edge segmentation throughput.
---

# Monitor edge segmentation

You can use the monitoring dashboard in the Adobe Experience Platform UI to conduct real-time monitoring of edge segmentation within your organization. Use this feature to access greater transparency into the throughput of your edge data.

## Getting started

This guide requires a working understanding of the following components of Experience Platform:

* [Datastreams](../../datastreams/overview.md): Datastreams let you connect Experience Platform Edge Network to your dataset.
* [Capacities](../../landing/license-usage-and-guardrails/capacity.md): In Experience Platform, capacities let you know if your organization has exceeded any of your guardrails and gives you information on how to fix these issues.
* [Edge segmentation](../../segmentation/methods/edge-segmentation.md): Edge segmentation is the ability to evaluate segment definitions in Adobe Experience Platform instantaneously [on the edge](../../landing/edge-and-hub-comparison.md), enabling same page and next page personalization use cases. 

## Access {#access}

To access the monitoring dashboard for edge segmentation throughput, select **[!UICONTROL Monitoring]** within the **[!UICONTROL Data management]** section, followed by **[!UICONTROL Edge]**.

![The method to access the monitor edge segmentation dashboard is highlighted.](/help/dataflows/assets/ui/monitor-edge/access.png)

The monitoring dashboard appears. This shows monitoring metrics for edge streaming throughput, a graph displaying the rate of edge streaming throughput, and a datastream view. These metrics can be filtered by service, by edge, and by date.

![The filtering options within the monitoring dashboard are highlighted.](/help/dataflows/assets/ui/monitor-edge/filtering.png)

>[!NOTE]
>
>You can see the Datastream view **only** if you select [!UICONTROL Edge segmentation throughput].

If you filter by service, you can choose which service you want to view the throughput information about. This includes services such as Edge segmentation, Data collection, Target, Adobe Journey Optimizer, Offer Decisioning, Custom personalized destinations, Event forwarding, Adobe Analytics, and Adobe Audience Manager.

If you filter by edge, you can choose which edge you want to view information about. Supported edges include US East Coast, US West Coast, Europe, India, Singapore, Australia, Japan, and Switzerland. You can select multiple edges to view at a time.

If you filter by date, you can choose the timescale to filter your events. This timescale can be set up to 30 days. Alternatively, you can use one of the following preconfigured time scales: [!UICONTROL Last 6 hours], [!UICONTROL Last 12 hours], [!UICONTROL Last 24 hours], [!UICONTROL Last 7 days], and [!UICONTROL Last 30 days].

## Monitoring metrics for edge throughput

The metrics table provides information specific to the selected service's edge throughput. You can refer to the following table for more details on each column.

| Metric | Description |
| ------ | ----------- |
| Requests received | The number of requests received by the selected edges within the timeframe. |
| Peak throughput | The highest rate of requests received by the selected edges within the timeframe. |

{style="table-layout:auto"}

## Monitoring graph for edge segmentation throughput

The monitoring graph shows the records per second received by the selected edges within the alloted timeframe, compared to the maximum capacity allowed.

![The edge segmentation throughput graph is displayed.](/help/dataflows/assets/ui/monitor-edge/edge-segmentation-throughput.png)

## Datastream view

>[!NOTE]
>
>The datastream view is **only** available if you're filtering for Edge segmentation throughput.

The datastream view section displays a list of the latest datastreams that passed through the sandbox's edges.

![The datastream view is displayed, showing information about the listed datastreams.](/help/dataflows/assets/ui/monitor-edge/datastream-view.png)

| Field | Description |
| ----- | ----------- |
| Datastream name | The name of the datastream. |
| Datasets | The name of datasets the datastream belongs to. | 
| Service enabled | The names of the services the datastream is enabled for. |
| Requests | The number of requests that passed through the datastream. |
| Peak throughput | The highest rate of requests that passed through the datastream. |
