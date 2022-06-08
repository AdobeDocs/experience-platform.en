---
title: Attribution Analysis
description: This document explains how you can use Query Service to create a marketing effectiveness measurement technique based on the marketing attribution model of first and last touch.
---
# Attribution Analysis

Attribution is an analytical concept that helps to determine the marketing tactics such as channels, offers, and messages, that contribute to business sales or conversions. This concept evaluates the consumer journey (the process by which a customer interacts with a company in order to achieve a goal) that results in a purchase or acquisition based on customer touch points (any time a consumer interacts with your brand). Through attribution analysis, marketers can assess the return-on-investment of the channels that connect them to a potential customer. 

## Getting started

The SQL examples throughout this document are queries commonly used with Adobe Analytics data. This tutorial requires a working understanding of the following components:

* [The Adobe Analytics source connector for report-suite data overview](../../sources/connectors/adobe-applications/mapping/analytics.md).
* [The Analytics field mappings documentation](../../sources/connectors/adobe-applications/mapping/analytics.md) provides more information on ingesting and mapping analytics data for use with Query Service.
* [The Attributino IQ overview](https://experienceleague.adobe.com/docs/analytics/analyze/analysis-workspace/attribution/overview.html)
* [The Adobe Analytics Attribution panel guide](https://experienceleague.adobe.com/docs/analytics/analyze/analysis-workspace/panels/attribution.html).

The [Adobe Marketing and Commerce Term Glossary](https://business.adobe.com/glossary/index.html) may also be of use.

## Objectives

An attribution use case uses Adobe Analytics data to help associate customer actions to a successful outcome. This association is a critical part in understanding the factors that influence customer experiences. Attribution analysis data can be used to understand the significance of a customer’s touch point during the customer journey.

The following query examples support various use cases for first-touch and last-touch attribution with different expiration settings. This guide illustrates the following key concepts:

* First touch and last touch attribution.
* First touch and last touch attribution with expiration timeout.
* First touch and last touch attribution with expiration condition.

### First-touch Attribution

This query returns the first-touch attribution value and details for a single channel in the target Experience Event dataset. The query returns a struct object with the first touch value, timestamp, and attribution for each row returned for the selected channel.

This query is useful to see which interaction led to a subsequent series of customer actions.

In the example shown below, the initial tracking code (`em:946426`) in the Experience Event data is attributed 100% (1.0) responsibility for the customer actions, as it was the first interaction.

#### Query syntax

```sql
ATTRIBUTION_FIRST_TOUCH({TIMESTAMP}, {CHANNEL_NAME}, {CHANNEL_VALUE}) OVER ({PARTITION} {ORDER} {FRAME})

```

| Parameter | Description |
|---|---|
| {TIMESTAMP} | The timestamp field found in the dataset. |
| {CHANNEL_NAME} | The label for the returned object. |
| {CHANNEL_VALUE} | The column or field that is the target channel for the query. |

```sql
SELECT endUserIds._experience.mcid.id, timestamp, marketing.trackingCode,
    ATTRIBUTION_FIRST_TOUCH(timestamp, 'Paid First', marketing.trackingCode)
      OVER(PARTITION BY endUserIds._experience.mcid.id
           ORDER BY timestamp
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)
      AS first_touch
FROM experience_events
ORDER BY endUserIds._experience.mcid.id, timestamp ASC
LIMIT 10
```

