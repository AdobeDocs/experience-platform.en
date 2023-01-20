---
title: Analytics Insights For Web and Mobile Interactions
description: This document explains how to use Query Service to create actionable insights from ingested Adobe Analytics data.
exl-id: f64e61ef-0157-4f0a-88f8-bbe4f9aa83f0
---
# Analytics insights for web and mobile interactions

Adobe Experience Platform allows you to ingest data from Adobe Analytics report suites using Experience Data Model (XDM) fields to populate datasets. This analytics data is modified to conform to the [!DNL XDM ExperienceEvent] class. Query Service can then make use of this data by running SQL queries to generate valuable insights from a user's behavior over the digital platforms.

This document provides a variety of sample SQL queries that demonstrate common use cases when creating insights from web and mobile Analytics data.

See the [Analytics field mappings documentation](../../sources/connectors/adobe-applications/mapping/analytics.md) for more information on ingesting and mapping analytics data.

## Getting started

For each of the following use cases, a parameterized SQL query example is provided as a template for you to customize. Provide parameters wherever you see `{ }` in the SQL examples for the dataset, eVar, event, or time frame you are interested in evaluating.

## Objectives

The following examples show SQL queries for common use cases to analyze your Adobe Analytics data.

### Generate the visitor count for every hour on a given day

```sql
SELECT Substring(from_utc_timestamp(timestamp, 'America/New_York'), 1, 10) AS Day,
       Substring(from_utc_timestamp(timestamp, 'America/New_York'), 12, 2) AS Hour,
       Count(DISTINCT enduserids._experience.aaid.id) AS Visitor_Count
FROM   {TARGET_TABLE}
WHERE TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}')
GROUP BY Day, Hour
ORDER BY Hour;
```

### Identify the 10 most viewed pages on a given day

```SQL
SELECT web.webpagedetails.name AS Page_Name,
       Sum(web.webpagedetails.pageviews.value) AS Page_Views
FROM   {TARGET_TABLE}
WHERE TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}')
GROUP BY web.webpagedetails.name
ORDER BY page_views DESC
LIMIT  10;
```

### Identify the 10 most active users

```sql
SELECT enduserids._experience.aaid.id AS aaid,
       Count(timestamp) AS Count
FROM   {TARGET_TABLE}
WHERE TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}')
GROUP BY enduserids._experience.aaid.id
ORDER BY Count DESC
LIMIT  10;

```

### Identify the 10 most desired cities based on user activity

```sql
SELECT concat(placeContext.geo.stateProvince, ' - ', placeContext.geo.city) AS state_city,
       Count(timestamp) AS Count
FROM   {TARGET_TABLE}
WHERE TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}')
GROUP BY state_city
ORDER BY Count DESC
LIMIT  10;
```

### Identify the 10 most viewed products

```sql
SELECT Product_SKU,
       Sum(Product_Views) AS Total_Product_Views
FROM  (SELECT Explode(productlistitems.sku) AS Product_SKU,
              commerce.productviews.value   AS Product_Views
       FROM   {TARGET_TABLE}
            WHERE TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}')
              AND commerce.productviews.value IS NOT NULL)
GROUP BY Product_SKU
ORDER BY Total_Product_Views DESC
LIMIT  10;
```

### Identify the 10 highest order revenues

```sql
SELECT Purchase_ID,
       Round(Sum(Product_Items.priceTotal * Product_Items.quantity), 2) AS Total_Order_Revenue
FROM   (SELECT commerce.`order`.purchaseid AS Purchase_ID,
               Explode(productlistitems)   AS Product_Items
        FROM   {TARGET_TABLE}
        WHERE  commerce.`order`.purchaseid IS NOT NULL
                AND TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}')

GROUP BY Purchase_ID
ORDER BY total_order_revenue DESC
LIMIT  10;
```
