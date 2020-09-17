---
keywords: Experience Platform;home;popular topics;date range
solution: Experience Platform
title: Adobe Experience Platform Observability Insights
topic: overview
description: Observability Insights is a RESTful API that allows you to expose key observability metrics in Adobe Experience Platform. These metrics provide insights into Platform usage statistics, health-checks for Platform services, historical trends, and performance indicators for various Platform functionalities.
---

# Adobe Experience Platform Observability Insights overview

[!DNL Observability Insights] allows you to monitor activities on Adobe Experience Platform through the use of statistical metrics and event notifications. This document provides an overview of the various capabilities provided by the service, along with links to further documentation for details.

## [!DNL Observability Insights] API

The [!DNL Observability Insights] API is a RESTful API that allows you to expose key observability metrics in Adobe Experience Platform. These metrics provide insights into [!DNL Platform] usage statistics, health-checks for [!DNL Platform] services, historical trends, and performance indicators for various [!DNL Platform] functionalities. 

For more information on working with the API, see the [[!DNL Observability Insights] API developer guide](./api/overview.md).

## Event notifications

[!DNL Observability Insights] allows you to subscribe to event notifications regarding Adobe Experience Platform activities. By subscribing to events, you can set up your own downstream protocols for when a job has completed, if a certain milestone within a workflow has been reached, or if any failures occurred during the process.

See the overview on [event notifications](./notifications/overview.md) for more information.

| Property | Description |
| --- | --- |
| `metricResponses` | An array whose objects represent each of the metrics specified in the request. Each object contains information about the filter configuration and returned metric data. |
| `metric` | The name of one of the metrics provided in the request. |
| `filters` | The filter configuration for the specified metric. |
| `datapoints` | An array whose objects represent the results of the specified metric and filters. The number of objects in the array depends on the filter options provided in the request. If no filters were provided, the array will only contain a single object that represents all datasets. |
| `groupBy` | If multiple datasets were specified in the `filter` property for a metric, and the `groupBy` option was set to true in the request, this object will contain the ID of the dataset that the corresponding `dps` property applies to.<br><br>If this object appears empty in the response, the corresponding `dps` property applies to all datasets provided in the `filters` array (or all datasets in [!DNL Platform] if no filters were provided). |
| `dps` | The returned data for the given metric, filter, and time range. Each key in this object represents a timestamp with a corresponding value for the specified metric. The time period between each datapoint depends on the `granularity` value specified in the request. |

## Next steps

This document covered the various capabilities of [!DNL Observability Insights]. Refer to the documentation linked to throughout this overview to learn more about each feature.