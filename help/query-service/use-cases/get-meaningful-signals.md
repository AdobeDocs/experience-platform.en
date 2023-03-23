---
title: Get Meaningful Signals Faster
description: This guide provides an end-to-end demonstration on how to use Data Distiller and user-defined dashboards with Real-Time Customer Data Platform to measure and visualize customer lifetime value.
---
# Get meaningful signals faster

Use your Real-Time Customer Data Platform to track customer lifetime value (CLV) and visualize that metric with user-defined dashboards. Through the use of Data Distiller and user-defined dashboards, you can measure how valuable a customer is to your company across the entirity of your relationship. Knowing the CLV can help you develop your businesses strategies to acquire new customers while retaining the existing ones and maintaining profit margins.

This end-to-end use case demonstrates how data signals can be captured and modified to calculate the customer lifetime value derived attribute. These derived attributes can then be applied to your Real-Time CDP profile data and are available for use with user-defined dashboards to build a dashboard for insight analysis. Through Data Distiller you can extend the Real-Time CDP insights data model and use the CLV derived attribute and dashboard insights to build a new segment and activate it to a desired destination.

This guide is designed to help you to better understand your customer experience by measuring data signals across key touchpoints that drive CLV and implement a similar use case in your environment. 

## Getting started

This guide requires that you have a working understanding of the following components of Adobe Experience Platform:

* 
* 
* How to [create and activate segments in Adobe Experience Platform](../../segmentation/ui/segment-builder.md). There is also a [segment builder video tutorial](https://experienceleague.adobe.com/docs/platform-learn/tutorials/segments/create-segments.html) available for more information. 
* How to [build a user-defined dashboard](../../dashboards/user-defined-dashboards.md)


## Prerequisites

This guide requires you to have the [Data Distiller](../data-distiller/overview.md) SKU as part of your package offering. If you are unsure whether ou have this, please speak to your Adobe service representative.

## Create a derived attribute

The first step in establishing your CLV is to create a derived attribute from the data signals captured from user actions. This particular use case is captured in a separate document about an airline loyalty scheme. See the guide to learn how to [use Query Service to create decile-based derived attributes for use with your profile data.](help/query-service/use-cases/deciles-use-case.md.md). Full examples and explanations are provided in the document that explain the following steps:

* Create a schema to allow for decile bucketing.
* Use Query Service to create deciles.
* Generate decile datasets.
* Enable the schema for use in Real-Time Customer Profile.
* Create an identity namespace and mark it as the primary identifier.
* Create a query to calculate deciles over a lookback period.

## Extend the insights data model

Next, you must build a custom data model or extend an existing Adobe Real-Time CDP data model to engage with  your CLV reporting insights. See the documentation to learn how to [build a reporting insights data model through Query Service for use with accelerated store data and user-defined dashboards](../data-distiller/query-accelerated-store/reporting-insights-data-model.md#build-a-reporting-insights-data-model). The tutorial covers the following steps:

* Create a model for reporting insights with Data Distiller.
* Create tables, relationships, and populate data.
* Query the reporting insight data model.
* Extend your data model with the Real-Time CDP insights data model.
* Create dimension tables to extend your reporting insights model.
* Query your extended accelerated store reporting insights data model
* Visualize your data with user-defined dashboards

More information oin extending RTCDP data models can be found 

## Build a dashboard to capture insights



## Create and activate segments to build high performance audiences

The next step is to build segments and generate audiences from your Real-Time Customer Profile data. 


<!-- "Data signals are actions taken by consumers while online that offer clues about intent that can be acted upon. This includes anything from visiting a website to filling out a change of address or clicking an ad."  -->

<!-- "Customer touchpoints are your brand's points of customer contact, from start to finish." -->
