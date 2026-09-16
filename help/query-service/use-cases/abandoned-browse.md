---
keywords: Experience Platform;query service;Query service;query
title: Example Use Case for Adobe Experience Platform Query Service
description: An end-to-end example to demonstrate the versatility and benefits of Adobe Experience Platform Query Service.
exl-id: 00bdae47-71b7-44ea-9365-a1d64c88d2bf
TQID: https://experienceleague.adobe.com/rwleF1-pMq0uCxuX1d3ut3uKDk0esgek9FOpOpXCOdM
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
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
    internal-label: Metadata
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: b4dd41a7-ccf8-4e9d-918e-acaab534a307
    internal-label: Data quality
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
---
# Example use case for Adobe Experience Platform [!DNL Query Service]

This document and accompanying video presentation provide a high-level end-to-end workflow demonstrating how Adobe Experience Platform [!DNL Query Service] benefits your organization's strategic business insights. Using a browse abandonment use case as an example, this guide illustrates the following key concepts:

* The key importance of data processing to maximize the potential of Adobe Experience Platform.
* Ways to build the query based on your existing data architecture.
* Ensure data quality that meets your needs, and methods to mitigate any shortfalls.
* The process to schedule a query to run at a set frequency for use downstream in segmentation and destinations for personalization.
* The ease for marketers to include derived datasets in their audiences through the power of [!DNL Query Service].

## Objectives {#objectives}

This workflow demonstration relies on several Adobe Experience Platform services. If you want to follow along, it is recommended to have a good understanding of the following features and services:

* The [basics of Experience Data Model (XDM) schema composition](../../xdm/schema/composition.md)
* How to [create datasets and ingest data](https://experienceleague.adobe.com/docs/platform-learn/tutorials/data-ingestion/create-datasets-and-ingest-data.html)
* How to [ingest data using the Adobe Analytics source connector](https://experienceleague.adobe.com/docs/platform-learn/tutorials/sources/ingest-data-from-adobe-analytics.html)
* [Segmentation](../../segmentation/home.md)
* [Destinations](../../destinations/home.md)

The browse abandonment example centers on using Adobe [!DNL Analytics] data to create a particular actionable audience. The audience is refined to include every customer who browsed the website in the last four days but did not make a purchase. Each profile in the audience is then targeted with the highest-price SKU that resulted from the customer's behavior pattern.

The query itself is very prescriptive and only includes data that meets the use case criteria for the segment definition. This improves performance by minimizing the amount of [!DNL Analytics] data being processed. It also orders the data by price from highest to lowest and chooses the highest-priced SKU that the user was browsing.

The query used in the presentation can be seen below:

```sql
INSERT INTO summit_adv_data_prep_dataset
SELECT STRUCT(
    customerId AS crmCustomerId, struct(sku AS sku, price AS sku_price, abandonTS AS abandonTS) AS abandonBrowse) AS _pfreportingonprod
FROM
(SELECT
B.personKey.sourceId,
A.productListItems[0].SKU AS sku,
max(A.timestamp) AS abandonTS,
max(c._pfreportingonprod.price) AS price
FROM summit_adobe_analytics_dataset A,profile_attribute_14adf268_2a20_4dee_bee6_a6b0e34616a9 B,summit_product_dataset c
WHERE A._experience.analytics.customDimension.evars.evar1 = B.personKey.sourceID
AND productListItems[0].SKU = C._pfreportingonprod.sku
AND A.web.webpagedetails.URL NOT LIKE '%orderconfirmation%'
AND timestamp > current_date - interval '4 day'
GROUP BY customerId,sku
order by price desc)D;
```

## [!DNL Query Service] browse abandonment example using adobe analytics {#video-example}

The video presentation seen below provides a holistic, real-world use case for your Experience Platform data focussed on [!DNL Query Service] and Adobe analytics integrations.  

>[!VIDEO](https://video.tv.adobe.com/v/342533?quality=12&learn=on)

## Benefits of [!DNL Query Service] {#benefits}

The features provided by [!DNL Query Service] serves many purposes. You can use it to accommodate complex logic for segmentation, for calculating various personalized attributes for use downstream, or to greatly simplify how you build out your audiences. 

[!DNL Query Service] enables you to include constraints in your queries to simplify your audience building process. This improves data quality by ensuring the right data qualifies for your audiences. Maintaining the quality of your query results in an accurate audience and helps with data reliability. You can also save your audience by creating schemas and custom tables based on attributes derived from your query. A custom table can be enabled for Profile and you can use these data points for segmentation and personalization. This feature assists marketers who want to create a clear-cut audience of people.

Also, by including logic in your query that satisfies any recurring or static conditions, [!DNL Query Service] extracts the burden of elaborate segmentation.

Adobe Experience Platform provides a data repository and the necessary tools to activate your data in an efficient and reliable way. By keeping data inside Experience Platform, it allows you to derive attributes while running other processes and removes the need to export data to third-party tools for manipulation and processing. Such processing overheads can greatly impact a project timeline when dealing with hundreds of attributes or campaigns. This gives marketers a single location to access their data and build out campaigns as well as a very dynamic means of segmenting and personalizing their messages.

## Next steps

By reading this document, you should now understand how [!DNL Query Service] impacts not only the quality of your data and ease of segmentation but also its importance within your data architecture for the entire end-to-end workflow. For more applicable SQL examples that use Adobe Analytics with [!DNL Query Service], see the [Adobe Analytics merchandising variables use case](./merchandising-variables.md).

Other documents that demonstrate the benefits of [!DNL Query Service] to your organization's strategic business insights are the [bot filtering use case](./bot-filtering.md) example. 

Alternatively, these documents can benefit your understanding of [!DNL Query Service] features: 

* [Guidance for query execution](../best-practices/writing-queries.md)
* [Guidance for data asset organization](../best-practices/organize-data-assets.md).


