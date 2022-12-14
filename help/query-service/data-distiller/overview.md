---
title: Data Distiller Overview
description: A summary of Data Distiller usage limits for Query Service data in relation to your licensing entitlement.
---
# Data Distiller overview

Data Distiller is a package offering that includes a subset of the functionalities from Adobe Experience Platform. With Data Distiller you can perform post-ingestion data preparation (such as cleaning, shaping, and manipulation) for real-time customer profile or analytical use cases by executing batch queries in Query Service. Your use of Data Distiller is dependent on your current and continued license of at least one of the following: Adobe Real-Time Customer Data Platform, Customer Journey Analytics, and/or Adobe Journey Optimizer.

## Licence usage {#licence-usage}

See the [Data Distiller licence usage document](./licence-usage.md) to view important information about your organization's Query Service license usage.

## Scoping parameters {#scoping-parameters}

Scoping parameters are usage limits that relate to the scoping of your proposed use case as defined by your licence capacity. Without add-ons, Data Distiller's scoping parameters are as follows: 

* **Compute Hours**: You can use PSQL or the Query Service API to run batch queries executed in any sandbox (scheduled or otherwise) to scan and write data. This uses your allotted Compute Hours per year as determined in the scoping process of your licence agreement. Total Compute Hours is accumulated across all Sandboxes.
* **Data Ingested**: The data ingested into Adobe Experience Platform which can be queried using Data Distiller is subject to the limitations described in your then-current license to Adobe Real-Time Customer Data Platform, Customer Journey Analytics, and/or Adobe Journey Optimizer.
* **Data Lake Storage**: The data lake storage provided in your then-current license to Adobe Real-Time Customer Data Platform, Customer Journey Analytics, and/or Adobe Journey Optimizer may also be used with Data Distiller. Data Lake Storage is a shared feature.
* **Query Service Users**: The number of Query Service users detailed in your then-current license to Adobe Real-Time Customer Data Platform, Customer Journey Analytics, and/or Adobe Journey Optimizer may also be used with Data Distiller. Query Service Users is a shared feature.

## Guardrails

See the [Query Service guardrails](../guardrails.md) document regarding default usage limits for Query Service data in relation to your licensing entitlement.

## Static limits

A static limit is the usage limit that relates to the functional boundaries of Adobe Experience Platform Activation. [More information on Adobe Experience Platform Activation](https://helpx.adobe.com/ca/legal/product-descriptions/adobe-experience-platform0.html) can be found in the Adobe help documents. A summary of Data Distiller static limit are listed below, for more complete information please refer to the Query Service guardrail document.  

* **Batch Queries**: Scheduled batch queries time out after 24 hours.
* **Query Service**: You can use Query Service for the following purposes: 
    * To run SQL queries for data analysis and post ingestion data preparation (cleaning, shaping, and manipulation).
    * To run SQL queries to create roll-up metrics to surface directly into a BI tool.
    * To quickly inspect data within Adobe Experience Platform.
* **Reporting API Call**: To ensure queries run on aggregated data using the reporting API have enough resources to execute efficiently. This includes queries that enhance existing data models such as those provided by Real-Time Customer Data Platform. The reporting API tracks resource utilization by assigning concurrency slots to each query. A maximum of 4 reporting API calls are available concurrently. If you accesses the reporting API through a BI tool and require more concurrency slots, a BI server is required.


