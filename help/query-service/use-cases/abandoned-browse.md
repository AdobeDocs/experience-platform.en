---
keywords: Experience Platform;query service;Query service;query
title: Example Use Case for Adobe Experience Platform Query Service
topic-legacy: tutorial
description: An end-to-end example to demonstrate the versatility and benefits of Adobe Experience Platform Query Service.
exl-id: 00bdae47-71b7-44ea-9365-a1d64c88d2bf
---
# Example use case for Adobe Experience Platform [!DNL Query Service]

This document and accompanying video presentation provide a high-level end-to-end workflow demonstrating how Adobe Experience Platform [!DNL Query Service] benefits your organization's strategic business insights. Using a browse abandonment use case as an example, this guide illustrates the following key concepts:

* The key importance of data processing to maximize the potential of Adobe Experience Platform.
* Ways to build the query based on your existing data architecture.
* Ensure data quality that meets your needs, and methods to mitigate any shortfalls.
* The process to schedule a query to run at a set frequency for use downstream in segmentation and destinations for personalization.
* The ease for marketers to include derived attributes in their segments through the power of [!DNL Query Service].

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

The features provided by [!DNL Query Service] serves many purposes. You can use it to accommodate complex logic for segmentation, for calculating various personalized attributes for use downstream, or to greatly simplify how you build out your segments. 

[!DNL Query Service] enables you to include constraints in your queries to simplify your segment building process. This improves data quality by ensuring the right data qualifies for your segments and creates more accurate audiences. Maintaining the quality of your query results in an accurate audience and helps with data reliability. You can also save your audience by creating schemas and custom tables based on attributes derived from your query. A custom table can be enabled for Profile and you can use these data points for segmentation and personalization. This feature assists marketers who want to create a clear-cut audience of people.

Also, by including logic in your query that satisfies any recurring or static conditions, [!DNL Query Service] extracts the burden of elaborate segmentation.

Adobe Experience Platform provides a data repository and the necessary tools to activate your data in an efficient and reliable way. By keeping data inside Platform, it allows you to derive attributes while running other processes and removes the need to export data to third-party tools for manipulation and processing. Such processing overheads can greatly impact a project timeline when dealing with hundreds of attributes or campaigns. This gives marketers a single location to access their data and build out campaigns as well as a very dynamic means of segmenting and personalizing their messages.

## Next steps

By reading this document, you should now understand how [!DNL Query Service] impacts not only the quality of your data and ease of segmentation but also its importance within your data architecture for the entire end-to-end workflow. For more applicable SQL examples that use Adobe Analytics with [!DNL Query Service], see the [Adobe Analytics merchandising variables use case](./merchandising-variables.md).

Other documents that demonstrate the benefits of [!DNL Query Service] to your organization's strategic business insights are the [bot filtering use case](./bot-filtering.md) example. 

Alternatively, these documents that will benefit your understanding of [!DNL Query Service] features: 

* [Guidance for query execution](../best-practices/writing-queries.md)
* [Guidance for data asset organization](../best-practices/organize-data-assets.md).


