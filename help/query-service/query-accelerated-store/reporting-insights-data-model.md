---
title: Query Accelerated Store Reporting Insights
description: Learn how to build a reporting insights data model through Query Service for use with Accelerated Store data and user-defined dashboards.
---
# Query accelerated store reporting insights 

The query accelerated store allows you to reduce the time and processing power required to gain critical insights from your data. Typically, data is processed at a regular intervals (for example, on an hourly or daily basis) where aggregate views are created and reported upon.These derived insights intended to improve business performance are generated from an aggregated view of your data. The query accelerated store enables optimized data processing as only the required query data is retrieved.

Real-time Customer Data Platform offers the pre-configured Profiles, Segments, and Destinations insight dashboards. The query accelerated store  allows you to build on these existing data models to engage with or embed your reporting insights into a reporting/visualization framework. This document guides you through the creation process of your reporting insights data model for use with the Adobe stateless API. 

## Getting started

The Data Distiller SKU is required to build a custom data model for your reporting insights that extend the Real-time CDP data models and use data held by Adobe Experience Platform. Please see the [packaging](../packages.md) and guardrails documentation for information concerning [licensing](../data-distiller/licence-usage.md) and [limits of the Data Distiller SKU](../guardrails.md#query-accelerated-store). If you do not have the Data Distiller SKU please contact your Adobe administrator for more information.

## Build a reporting insights data model

<!-- Customers who use one or more advertiser platform to reach their audience and can use the platform API to get an approximate match count of their audience.

This document uses an example of building an Audience Insight data model. To begin with, you will have a data model and from your sources (advertiser platform api) one will get the upper and lower bounds of audience match. You may create a model as  described below. -->

![An entity relational diagram of the audience insight user model.](../images/query-accelerated-store/audience-insight-user-model.png)

<!-- The `ExternalAudienceReach` table/dataset is based on an ID and tracks the lower and upper bounds for match count.

Q) What ID specifically?

The `externalAudienceMapping` dimension table/dataset maps the external ID to a destination and segment on Platform. The one or more identities in one or more segments make up the destination. These are then used to target the audience using one or more advertiser platforms.  -->

<!-- MY NOTE:  Reporting is the process of organizing data into summaries. Insights is the result of exploring data and reports in order to extract meaningful information to improve business performance.  -->




