---
title: Track Data Signals to Generate Your Customer Lifetime Value
description: This guide provides an end-to-end demonstration on how to use Data Distiller and user-defined dashboards with Real-Time Customer Data Platform to measure and visualize customer lifetime value.
exl-id: c74b5bff-feb2-4e21-9ee4-1e0973192570
TQID: https://experienceleague.adobe.com/j-VRJe3vGxXBMf-Fj2HeM4f53oFLCEma1bEI9YJmIJw
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: a230274e-7e6e-49eb-b817-514495a710ac
    internal-label: query service
  - id: abc02dd6-664f-446a-9aaa-675bc0f2fe4a
    internal-label: Sources
  - id: ae2cba0e-54f2-464b-a3b3-ad371e8a886a
    internal-label: Catalog
  - id: b784da9a-7978-4766-bf1f-5ab2b23d894a
    internal-label: Federated Audience Composition
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
  - id: ee602049-8a18-43df-9299-a689a025a371
    internal-label: Use cases
  - id: f6ac78a3-5b59-40f5-a37d-45df5303d3a3
    internal-label: Dashboards
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: beb7a3c1-66ab-4786-b879-7621375b3c40
    internal-label: Email marketing
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: eb30f47f-d87a-400f-8f78-63ce7979ff56
    internal-label: Machine learning
---
# Track data signals to generate your customer lifetime value

You can use Real-Time Customer Data Platform to track customer lifetime value (CLV) and visualize that metric with user-defined dashboards. Through the use of Data Distiller and user-defined dashboards, you can measure how valuable a customer is to your company across the entirety of your relationship. Knowing the CLV can help you develop your business's strategies to acquire new customers while retaining the existing ones and maintaining profit margins.

The following infographic depicts the cycle of data collection, manipulation, analysis, and actuation that generates high-performance data to improve your marketing campaigns.

![The round trip infographic of data from observation to analysis to action.](../images/use-cases/infographic-use-case-cycle.png)

This end-to-end use case demonstrates how data signals can be captured and modified to calculate the customer lifetime value derived attribute. These derived datasets can then be applied to your Real-Time CDP profile data and are available for use with user-defined dashboards to build a dashboard for insight analysis. Through Data Distiller, you can extend the Real-Time CDP insights data model and use the CLV derived datasets and dashboard insights to build a new audience and activate it to a desired destination. These high-performance audiences can then be used to power your next marketing campaign.

This guide is designed to help you to better understand your customer experience by measuring data signals across key touchpoints that drive CLV and implement a similar use case in your environment. The entire process is summarized in the image below.

![An infographic of the broad steps required to utilize customer lifetime value.](../images/use-cases/implementation-steps.png)

## Getting started {#getting-started}

This guide requires that you have a working understanding of the following components of Adobe Experience Platform:

* [Query Service](../home.md): Provides a user interface and a RESTful API where you can use SQL queries to analyze and enrich your data. 
* [Segmentation Service](../../segmentation/home.md): Allows you to generate audiences from your Real-Time Customer Profile data.

## Prerequisites

This guide requires you to have the [Data Distiller](../data-distiller/overview.md) SKU as part of your package offering. If you are unsure whether you have this, please speak to your Adobe service representative.

## Create a derived dataset {#create-derived-dataset}

The first step in establishing your CLV is to create a derived dataset from the data signals captured from user actions. This particular use case is captured in a separate document about an airline loyalty scheme. See the guide to learn how to [use Query Service to create decile-based derived datasets for use with your profile data](./deciles-use-case.md). Full examples and explanations are provided in the document that explain the following steps:

* Create a schema to allow for decile bucketing.
* Use Query Service to create deciles.
* Generate decile datasets.
* Enable the schema for use in Real-Time Customer Profile.
* Create an identity namespace and mark it as the primary identifier.
* Create a query to calculate deciles over a lookback period.

## Extend the insights data model and schedule updates {#extend-data-model-and-set-refresh-schedule}

Next, you must build a custom data model or extend an existing Adobe Real-Time CDP data model to engage with your CLV reporting insights. See the documentation to learn how to [build a reporting insights data model through Query Service for use with accelerated store data and user-defined dashboards](../data-distiller/sql-insights/reporting-insights-data-model.md#build-a-reporting-insights-data-model). The tutorial covers the following steps:

* Create a model for reporting insights with Data Distiller.
* Create tables, relationships, and populate data.
* Query the reporting insight data model.
* Extend your data model with the Real-Time CDP insights data model.
* Create dimension tables to extend your reporting insights model.
* Query your extended accelerated store reporting insights data model

Please see the Real-Time Customer Data Platform Insights Data Model documentation to learn how to [customize your SQL query templates to create Real-Time CDP reports for your marketing and key performance indicator (KPI) use cases](../../dashboards/data-models/cdp-insights-data-model-b2c.md).

Make sure to set a schedule to refresh your custom data model on a regular cadence. This ensures that the data comes back in as part of your ingestion pipeline as needed, and populates your user-defined dashboards. See the [schedule queries guide](../ui/query-schedules.md#create-schedule) to learn how to set up your schedule.

## Build a dashboard to capture insights {#build-a-custom-dashboard}

Now that you have created your custom data model, you are ready to visualize your data with custom queries and user-defined dashboards. See the user-defined dashboards overview for full guidance on how to [build a custom dashboard](../../dashboards/standard-dashboards.md). The UI guide includes details on:

* How to create a widget.
* How to use the widget composer.

Examples of custom CLV widgets that use decile buckets can be seen below.

![A collection of custom decile-based CLTV widgets.](../images/use-cases/deciles-user-defined-dashboard.png)

## Create and activate high-performance audiences {#create-and-activate-audiences}

The next step is to build a segment definition and generate audiences from your Real-Time Customer Profile data. See the Segment Builder UI guide to learn how to [create and activate audiences in Experience Platform](../../segmentation/ui/segment-builder.md). The guide provides sections on how to:

* Create segment definitions using a combination of attributes, events, and existing audiences as building blocks.
* Use the rule builder canvas and containers to control the order in which the segmentation rules are executed.
* View estimates of your prospective audience, allowing you to adjust your segment definitions as required.
* Enable all segment definitions for scheduled segmentation.
* Enable specified segment definitions for streaming segmentation.

Alternatively, there is also a [segment builder video tutorial](https://experienceleague.adobe.com/docs/platform-learn/tutorials/audiences/create-segments.html) available for more information.

## Activate your audience for an email campaign {#activate-audience-for-campaign}

Once you have built your audience, you are ready to activate it to a destination. Experience Platform supports a variety of Email Service Providers (ESPs) that enable you to manage your email marketing activities, such as sending promotional email campaigns. 

Check the [email marketing destinations overview](../../destinations/catalog/email-marketing/overview.md#connect-destination) for a list of the supported destinations that you want to export data to (for example the [Oracle Eloqua](../../destinations/catalog/email-marketing/oracle-eloqua-api.md) page).

## See the returned analysis data from your campaign {#post-campaign-data-analysis} 

The data from sources can now be [incrementally processed](../key-concepts/incremental-load.md) as part of a scheduled refresh to your data model in the accelerated data store. Any response events from customers can be ingested into Adobe Experience Platform as they happen or in batches. Your data model could be refreshed once, or multiple times a day depending on your settings or source connectors. See the [batch ingestion API overview](../../ingestion/batch-ingestion/api-overview.md) or the [streaming ingestion overview](../../ingestion/streaming-ingestion/overview.md) for more information. 

Once your data model is updated, your custom dashboard widgets provide meaningful signals that allow you to measure and visualize customer lifetime value.

![A custom widget to show the number of emails opened according to their audience and email campaign.](../images/use-cases/post-activation-and-email-response-kpis.png)

A variety of visualization options are provided for your custom analysis. 

![The email opened by campaign buckets widget.](../images/use-cases/email-opened-by-campaign-buckets.png)

These insights can in turn help you develop your business strategies for subsequent campaigns.

![A collection of four customized widgets that detail the results of the email campaign.](../images/use-cases/example-widgets.png)

## Next steps 

By reading this document you should have a better understanding of how you can use Real-Time Customer Data Platform to track and visualize the customer lifetime value (CLV) metric. To learn more about the many business use cases catered for through Query Service and Experience Platform, you are recommended to read read the following documents:

* [An end-to-end example of an abandoned browse use case that demonstrates the versatility and benefits of Query Service.](./abandoned-browse.md)
* [How to use Query Service and machine learning to determine and filter bot activity from genuine online website visitor traffic](./bot-filtering.md)
* [How to perform a match on your Experience Platform data that combines results from multiple datasets by approximately matching a string of your choice.](./fuzzy-match.md)

<!-- "Data signals are actions taken by consumers while online that offer clues about intent that can be acted upon. This includes anything from visiting a website to filling out a change of address or clicking an ad."  -->

<!-- "Customer touchpoints are your brand's points of customer contact, from start to finish." -->
