---
title: Get Meaningful Signals Faster
description: This guide provides an end-to-end demonstration on how to use Data Distiller and user-defined dashboards with Real-Time Customer Data Platform to measure and visualize customer lifetime value.
---
# Get meaningful signals faster

Use your Real-Time Customer Data Platform to track customer lifetime value (CLV) and visualize that metric with user-defined dashboards. Through the use of Data Distiller and user-defined dashboards, you can measure how valuable a customer is to your company across the entirety of your relationship. Knowing the CLV can help you develop your businesses strategies to acquire new customers while retaining the existing ones and maintaining profit margins.

The following infographic depicts the cycle of data collection, manipulation, analysis, and actuation that generates high performance data to improve your marketing campaigns.

![The round trip infographic of data from observation to analysis to action.](../images/use-cases/infographic-use-case-cycle.png)

This end-to-end use case demonstrates how data signals can be captured and modified to calculate the customer lifetime value derived attribute. These derived attributes can then be applied to your Real-Time CDP profile data and are available for use with user-defined dashboards to build a dashboard for insight analysis. Through Data Distiller, you can extend the Real-Time CDP insights data model and use the CLV derived attribute and dashboard insights to build a new segment and activate it to a desired destination. These segments can then be used to create high performance audiences to power your next marketing campaign.

This guide is designed to help you to better understand your customer experience by measuring data signals across key touchpoints that drive CLV and implement a similar use case in your environment. The entire process is summarized in the image below.

![An infographic of the broad steps required to utilize customer lifetime value.](../images/use-cases/implementation-steps.png)

## Getting started {#getting-started}

This guide requires that you have a working understanding of the following components of Adobe Experience Platform:

* [Query Service](../home.md): Provides a user interface and a RESTful API where you can use SQL queries to analyze and enrich your data. 
* [Segmentation Service](../../segmentation/home.md): Allows you to build segments and generate audiences from your Real-Time Customer Profile data.

## Prerequisites

This guide requires you to have the [Data Distiller](../data-distiller/overview.md) SKU as part of your package offering. If you are unsure whether you have this, please speak to your Adobe service representative.

## Create a derived attribute {#create-derived-attribute}

The first step in establishing your CLV is to create a derived attribute from the data signals captured from user actions. This particular use case is captured in a separate document about an airline loyalty scheme. See the guide to learn how to [use Query Service to create decile-based derived attributes for use with your profile data.](help/query-service/use-cases/deciles-use-case.md.md). Full examples and explanations are provided in the document that explain the following steps:

* Create a schema to allow for decile bucketing.
* Use Query Service to create deciles.
* Generate decile datasets.
* Enable the schema for use in Real-Time Customer Profile.
* Create an identity namespace and mark it as the primary identifier.
* Create a query to calculate deciles over a lookback period.

## Extend the insights data model and schedule updates {#extend-data-model-and-set-refresh-schedule}

Next, you must build a custom data model or extend an existing Adobe Real-Time CDP data model to engage with  your CLV reporting insights. See the documentation to learn how to [build a reporting insights data model through Query Service for use with accelerated store data and user-defined dashboards](../data-distiller/query-accelerated-store/reporting-insights-data-model.md#build-a-reporting-insights-data-model). The tutorial covers the following steps:

* Create a model for reporting insights with Data Distiller.
* Create tables, relationships, and populate data.
* Query the reporting insight data model.
* Extend your data model with the Real-Time CDP insights data model.
* Create dimension tables to extend your reporting insights model.
* Query your extended accelerated store reporting insights data model
<!-- * Visualize your data with user-defined dashboards -->

Please see the Real-Time Customer Data Platform Insights Data Model documentation to learn how to [customize your SQL query templates to create Real-Time CDP reports for your marketing and key performance indicator (KPI) use cases](../../dashboards/cdp-insights-data-model.md).

Make sure to set a schedule to refresh your custom data model on a regular cadence. This ensures that the data comes back in as part of your ingestion pipeline as needed, and populates your user-defined dashboards. See the [schedule queries guide](https://experienceleague.adobe.com/docs/experience-platform/query/ui/query-schedules.html#create-schedule) to learn how to set up your schedule.

## Build a dashboard to capture insights {#build-a-custom-dashboard}

Now that you have created your custom data model, you are ready to visualize your data with custom queries and user-defined dashboards. See the user-defined dashboards overview for full guidance on how to [build a custom dashboard](../../dashboards/user-defined-dashboards.md). The UI guide includes details on:

* How to create a widget.
* How to use the widget composer.

Possible examples of custom CLV widgets that use uses decile buckets can be seen below.

![A collection of custom decile-based CLTV widgets.](../images/use-cases/deciles-user-defined-dashboard.png)

## Create and activate segments to build high performance audiences {#create-and-activate-segments}

The next step is to build segments and generate audiences from your Real-Time Customer Profile data. See the Segment Builder UI guide to learn how to [create and activate segments in Adobe Experience Platform](../../segmentation/ui/segment-builder.md). The guide provides sections on how to:

* Create segment definitions using a combination of attributes, events, and existing audiences as building blocks.
* Use the rule builder canvas and containers to control the order in which segment rules are executed.
* View estimates of your prospective audience, allowing you to adjust your segment definitions as required.
* Enable all segment definitions for scheduled segmentation.
* Enable specified segment definitions for streaming segmentation.

Alternatively, there is also a [segment builder video tutorial](https://experienceleague.adobe.com/docs/platform-learn/tutorials/segments/create-segments.html) available for more information.

## Activate your segment for an email campaign {#activate-segment-for-campaign}

Once you have built your segment, you are ready to activate it to a destination. For the purpose of this use case, you are recommended to use Adobe Campaign. Information on [connecting to Adobe Campaign](../../destinations/catalog/email-marketing/adobe-campaign.md) can be found in the destinations catalog documentation.

## See the returned analysis data form your campaign {#post-campaign-data-analysis} 

The data from sources can now be incrementally processed as part of a scheduled refresh to your data model in the accelerated data store. Any response events from customers can be ingested into Adobe Experience Platform as they happen or in batches. Your data model could be refreshed once, or multiple times a day depending on your settings or source connectors. See the [batch ingestion API overview](https://experienceleague.adobe.com/docs/experience-platform/ingestion/batch/overview.html) or the [streaming ingestion overview](https://experienceleague.adobe.com/docs/experience-platform/ingestion/streaming/overview.html) for more information. 

Once your data model is updated, your custom dashboard widgets provide meaningful signals that allow you to to measure and visualize customer lifetime value.

![A custom widget to show the number of emails opened according to their segment and email campaign.](../images/use-cases/post-activation-and-email-response-kpis.png)

These insights can inturn help you develop your businesses strategies for subsequent campaigns.

![A collection of four customized widgets that detail the results of the email campaign.](../images/use-cases/example-widgets.png)

A variety of visualization options are provided for your custom analysis. 

![The Email opened by campaign buckets widget.](../images/use-cases/email-opened-by-campaign-buckets.png)

<!-- "Data signals are actions taken by consumers while online that offer clues about intent that can be acted upon. This includes anything from visiting a website to filling out a change of address or clicking an ad."  -->

<!-- "Customer touchpoints are your brand's points of customer contact, from start to finish." -->
