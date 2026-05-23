---
title: SQL Insights
description: Learn about the use cases, essential capabilities, and required steps to develop an SQL insights dashboard with Data Distiller. Discover how the SQL Insights capability within Data Distiller can enhance transparency and gain operational insights across different dimensions such as profiles, audiences, campaigns, journeys, entitlements, and consent.
exl-id: f807d0fd-c8ec-42d4-96a0-5ffc5681943b
TQID: https://experienceleague.adobe.com/U8N4L5KhrbAbVFM5sp3hMaxAlhAWSVOReMar2qwjQeA
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
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
subfeature_v2:
  - id: b784da9a-7978-4766-bf1f-5ab2b23d894a
    internal-label: Federated Audience Composition
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
  - id: e5ae22e3-a3b0-46ed-804f-9abf1bbe3e74
    internal-label: Guardrails
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
  - id: b23e006f-0a29-4f1d-8fd0-77aa56f3d12b
    internal-label: Data modeling
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: eb30f47f-d87a-400f-8f78-63ce7979ff56
    internal-label: Machine learning
  - id: ff2b9b37-92e0-45fc-b853-379d44c08c89
    internal-label: Audience segmentation
---
# SQL Insights

Create bespoke reporting data models to extract deeper insights, optimize strategies, and adapt analytics to meet specific business needs with Data Distiller's SQL Insights. Use the SQL Insights capability to enhance transparency and gain operational insights from your Adobe Experience Platform data across dimensions such as profiles, audiences, campaigns, journeys, entitlements, and consent. This capability provides a versatile, adaptive solution to tailor your organization's reporting data models to align with your specific business needs.

To [visualize your SQL Insights](../../../dashboards/sql-insights-query-pro-mode/overview.md) you can use [query pro mode](../../../dashboards/sql-insights-query-pro-mode/overview.md) to conduct complex analysis with custom SQL queries and transform your data into easily interpretable charts. Use query pro mode to create bespoke insights and visulaizations on your dashboards and cater to both technical and non-technical audiences by downloading your insights as CSV files. 

This document covers the use cases, essential capabilities, and required steps to develop an SQL insights dashboard with Data Distiller.

## Prerequisites

This tutorial uses user-defined dashboards to visualize data from your custom data model within the Experience Platform UI. See the [user-defined dashboards documentation](../../../dashboards/standard-dashboards.md) to learn more about this feature.

## Getting started 

The Data Distiller SKU is required to build a custom data model for your reporting insights and to extend the Real-Time CDP data models that hold enriched Experience Platform data. See the [packaging](../../packaging.md), [guardrails](../../guardrails.md#query-accelerated-store), and  [licensing](../../data-distiller/license-usage.md) documentation that relates to the Data Distiller SKU. If you do not have the Data Distiller SKU, contact your Adobe customer service representative for more information.

## SQL Insights use cases {#use-cases}

Below are common use cases that can be effectively addressed through SQL Insights in Data Distiller.

### Profile and audience usage transparency {#usage-transparency}

**Challenge:** How to break down Key Performance Indicators (KPIs) by specific criteria like business units, loyalty status, or Customer Lifetime Value (CLTV).

**SQL Insights Solution:** Data Distiller enables the extension of reporting data models in Adobe Experience Platform, facilitating [the addition of custom profile attributes such as CLTV](../../use-cases/customer-lifetime-value.md) or loyalty status.

### Consent anomaly tracking {#consent-anomaly-tracking}

**Challenge:** How to apply audience overlap and size trendline reports to customized consent attributes for channels like email, SMS, and phone.

**SQL Insights Solution:** The reporting data model can be extended to track changes in consent preferences over time. This involves building additional fact and dimension tables to trend consent preferences and scheduling [incremental data refresh](../../key-concepts/incremental-load.md).

### Optimize audience segmentation strategy {#optimize-audience-segmentation-strategy}

**Challenge:** How to integrate Machine Learning (ML) model-generated propensity scores into their audience KPI reports.

**SQL Insights Solution:** Data Distiller allows the inclusion of [propensity scores from custom ML models](../../use-cases/propensity-score.md), facilitating the calculation of aggregate scores at the audience level. This data can then be reported alongside standard KPIs.

### Audience expansion {#audience-expansion}

**Challenge:** How to acquire more than just profile counts in audience overlap reports and attain additional demographic data or preferences to guide audience expansion strategies.

**SQL Insights Solution:** By extending the reporting data model, users can incorporate additional profile attributes, enriching the audience overlap report with relevant demographic data and preferences.

## Key capabilities for generating SQL Insights {#key-capabilities}

The illustration below highlights several essential capabilities for generating SQL Insights. These capabilities include:

1. **Data visualizations:** Incorporating visual elements such as trends and bar charts for a comprehensive view of data trends.
1. **Dashboard authoring:** Enabling the creation of custom dashboards tailored to specific use cases, providing a more personalized and targeted analytics experience.
1. **Flexible SQL data modeling:** Use a versatile SQL data modeling approach that allows users to seamlessly combine and manipulate different datasets, enhancing adaptability, and analytical depth.
1. **Accelerated store:** Implementing an accelerated store mechanism to efficiently serve aggregated insights through SQL, ensuring streamlined and rapid access to valuable information.
1. **BI connectivity:** Facilitating seamless integration with popular Business Intelligence (BI) tools, including Power BI, Tableau, Looker, and Apache Superset. This connectivity ensures compatibility with diverse BI environments, offering users the flexibility to use their tool of choice for in-depth analysis and reporting.

![Visual representations of the key capabilities of Data Distiller's SQL Insights.](../../images/data-distiller/sql-insights/key-capabilities-of-customizable-insights.png)

## Steps to create SQL Insights {#steps-to-create}

To develop a SQL Insights dashboard within Data Distiller, follow the step-by-step instructions below.

1. **Ad hoc query exploration:** Begin by executing ad hoc `SELECT` queries to explore raw data on the data lake. This allows for on-the-fly, exploratory data analysis to experiment, and validates data where the results of the queries are not stored in the data lake.
1. **Batch query utilization:** Use batch queries to [create scheduled jobs](../../api/scheduled-queries.md#create-a-new-scheduled-query) for generating insights aggregate tables, ensuring a systematic and automated approach to data processing. Batch queries execute `INSERT TABLE AS SELECT` and `CREATE TABLE AS SELECT` queries to clean, shape, manipulate, and enrich data. The results of these queries are stored on the data lake.
1. **Aggregated insights loading:** Load the generated aggregated insights into the accelerated store and use SQL to test queries, and ensure the accuracy and efficiency of data retrieval. To learn how to [make stateless queries to the accelerated store](../../api/accelerated-queries.md), see the documentation.
1. **Access and integration:** Access the insights stored in the accelerated store seamlessly by integrating with Adobe Experience Platform [User-defined Dashboards](../../../dashboards/standard-dashboards.md) or other preferred Business Intelligence (BI) tools. These integrations with third-party clients facilitate a cohesive and intuitive experience for users.

![An infographic illustrating the four steps to SQL Insights in Data Distiller.](../../images/data-distiller/sql-insights/steps-to-customizable-insights.png)

## Next Steps

By reading this document, you now have a better understanding of the use cases, essential capabilities, and necessary steps to develop an SQL insights dashboard with Data Distiller. To continue learning about creating bespoke reporting data models, see the [reporting insights data model guide](./reporting-insights-data-model.md).
