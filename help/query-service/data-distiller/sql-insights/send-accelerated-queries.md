---
title: Send Accelerated Queries
description: An introduction to the accelerated queries API.
exl-id: c6cd1182-d3a9-457f-81d5-18027e47c3f9
TQID: https://experienceleague.adobe.com/azW144gC6Z6W2IFZi7yu-ENR69q5zuFBAfvr6bWpWFA
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
subfeature_v2:
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
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
---
# Send accelerated queries

As part of the Data Distiller SKU, the [Query Service API](https://developer.adobe.com/experience-platform-apis/references/query-service/) allows you to make stateless queries to the accelerated store. The [accelerated queries endpoint](https://developer.adobe.com/experience-platform-apis/references/query-service/#tag/Accelerated-Queries) returns results based on aggregated data to reduce the wait time for results and provide a more interactive exchange of information.

See the [Accelerated Queries endpoint](../../api/accelerated-queries.md) documentation for instructions on how to query the accelerated store.

With the query accelerated store you can build a custom data model and/or extend an existing Adobe Real-Time Customer Data Platform data model. To engage with or embed your reporting insights into a reporting/visualization framework, see the [query accelerated store reporting insights guide](./reporting-insights-data-model.md). You can also read the Real-Time Customer Data Platform Insights Data Model documentation to learn how to [customize your SQL query templates to create Real-Time CDP reports for your marketing and key performance indicator (KPI) use cases](../../../dashboards/data-models/cdp-insights-data-model-b2c.md). You can use the [attribute-based access control capability](../../../access-control/abac/overview.md), to control the level of restriction on datasets in the accelerated store. See the [data governance in Query Service](../../data-governance/overview.md#create-field-based-access-restrictions-on-accelerated-datasets)
document for more information.
