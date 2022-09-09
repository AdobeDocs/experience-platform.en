---
title: Attribution Analysis
description: This document explains how you can use Query Service to create a marketing effectiveness measurement technique based on the marketing attribution model of first and last touch.
exl-id: d62cd349-06fc-4ce6-a5e8-978f11186927
---
# Attribution analysis

Attribution is an analytical concept that helps to determine the marketing tactics such as channels, offers, and messages, that contribute to business sales or conversions. This concept evaluates the consumer journey (the process by which a customer interacts with a company to achieve a goal) that results in a purchase or acquisition based on customer touch points (any time a consumer interacts with your brand). Through attribution analysis, marketers can assess the return on investment of the channels that connect them to a potential customer. 

## Getting started

The SQL examples throughout this document are queries commonly used with Adobe Analytics data. This tutorial requires a working understanding of the following components:

* [The Adobe Analytics source connector for report-suite data overview](../../sources/connectors/adobe-applications/mapping/analytics.md).
* [The Analytics field mappings documentation](../../sources/connectors/adobe-applications/mapping/analytics.md) provides more information on ingesting and mapping analytics data for use with Query Service.
* [The Attribution IQ overview](https://experienceleague.adobe.com/docs/analytics/analyze/analysis-workspace/attribution/overview.html)
* [The Adobe Analytics Attribution panel guide](https://experienceleague.adobe.com/docs/analytics/analyze/analysis-workspace/panels/attribution.html).

An explanation of the parameters within the `OVER()` function can be found in the [window functions section](../sql/adobe-defined-functions.md#window-functions). The [Adobe Marketing and Commerce Term Glossary](https://business.adobe.com/glossary/index.html) may also be of use.

For each of the following use cases, a parameterized SQL query example is provided as a template for you to customize. Provide parameters wherever you see `{ }` in the SQL examples that you are interested in evaluating.

## Objectives

An attribution use case uses Adobe Analytics data to help associate customer actions to a successful outcome. This association is a critical part of understanding the factors that influence customer experiences. Attribution analysis data can be used to understand the significance of a customer's touch point during the customer journey.

The query examples contained in this document support various use cases for first touch and last touch attribution with different expiration settings. This guide illustrates the following key concepts:

* First touch and last touch attribution.
* First touch and last touch attribution with expiration timeout.
* First touch and last touch attribution with expiration condition.

## Attribution query parameters {#attribution-query-parameters}

The table below provides a breakdown of the parameters and their descriptions used in first touch and last touch attribution queries:

| Parameter | Description |
|---|---|
| `{TIMESTAMP}` | The timestamp field found in the dataset. |
| `{CHANNEL_NAME}` | The label for the returned object. |
| `{CHANNEL_VALUE}` | The column or field that is the target channel for the query. |
| `{EXP_TIMEOUT}` | The window of time prior to the channel event, in seconds, that the query searches for a first touch event. |
| `{EXP_CONDITION}` | The condition that determines the expiry point of the channel. |
| `{EXP_BEFORE}` | A boolean that indicates if the channel expires before or after the specified condition, `{EXP_CONDITION}`, is met. This is primarily enabled for a session's expiry conditions, to ensure that the first touch is not selected from a previous session. By default, this value is set to `false`. |

## Query results column components {#query-result-column-components}

The results for the attribution queries are given in either the `first_touch` or the `last_touch` column. These columns is made up of the following components:

```console
({NAME}, {VALUE}, {TIMESTAMP}, {FRACTION})
```

| Parameters | Description | 
| ---------- | ----------- |
| `{NAME}` | The `{CHANNEL_NAME}`, entered as a label in the Azure Data Factory (ADF). |
| `{VALUE}` | The value from `{CHANNEL_VALUE}` that is the last touch within the specified `{EXP_TIMEOUT}` interval |
| `{TIMESTAMP}` | The timestamp of the [!DNL Experience Event] where the last touch occurred |
| `{FRACTION}` | The attribution of the last touch, expressed as a decimal fraction. | 

### First touch attribution {#first-touch}

First touch attribution accredits 100% of the responsibility for a successful outcome to the initial channel that the consumer encountered. This SQL example is used to highlight the interaction that led to a subsequent series of customer actions. 

The query below returns the first touch attribution value and details of the channel in the target [!DNL Experience Event] dataset. It also returns a `struct` object for the selected channel with the first touch value, timestamp, and attribution for each row.

>[!NOTE]
>
>The Experience Cloud ID (ECID) is also known as MCID and continues to be used in namespaces.

**Query syntax**

```sql
ATTRIBUTION_FIRST_TOUCH({TIMESTAMP}, {CHANNEL_NAME}, {CHANNEL_VALUE}) OVER ({PARTITION} {ORDER} {FRAME})
```

For a complete list of potentially required parameters and their descriptions, see the [attribution query parameters section](#attribution-query-parameters). 

**Example query**

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

**Results**

In the results below, the initial tracking code `em:946426` is taken from the [!DNL Experience Event] dataset. This tracking code is attributed with 100% (`1.0`) of the responsibility for the customer actions because it was the first interaction.

```console
                 id                 |       timestamp       | trackingCode |                   first_touch                   
-----------------------------------+-----------------------+--------------+-------------------------------------------------
 5D9D1DFBCEEBADF6-4097750903CE64DB | 2018-12-18 07:06:12.0 | em:946426    | (Paid First,em:946426,2018-12-18 07:06:12.0,1.0) 
 5D9D1DFBCEEBADF6-4097750903CE64DB | 2018-12-18 07:07:02.0 | em:946426    | (Paid First,em:946426,2018-12-18 07:06:12.0,1.0) 
 5D9D1DFBCEEBADF6-4097750903CE64DB | 2018-12-18 07:07:55.0 |              | (Paid First,em:946426,2018-12-18 07:06:12.0,1.0) 
 5D9D1DFBCEEBADF6-4097750903CE64DB | 2018-12-18 07:08:44.0 |              | (Paid First,em:946426,2018-12-18 07:06:12.0,1.0) 
 5D9D1DFBCEEBADF6-4097750903CE64DB | 2018-12-23 17:50:10.0 | em:513526    | (Paid First,em:946426,2018-12-18 07:06:12.0,1.0) 
 5D9D1DFBCEEBADF6-4097750903CE64DB | 2018-12-23 17:50:43.0 | em:513526    | (Paid First,em:946426,2018-12-18 07:06:12.0,1.0) 
 5D9D1DFBCEEBADF6-4097750903CE64DB | 2018-12-23 17:53:02.0 |              | (Paid First,em:946426,2018-12-18 07:06:12.0,1.0) 
 5D9D1DFBCEEBADF6-4097750903CE64DB | 2018-12-26 20:37:12.0 | sms:70175    | (Paid First,em:946426,2018-12-18 07:06:12.0,1.0) 
 5D9D1DFBCEEBADF6-4097750903CE64DB | 2018-12-26 20:37:57.0 |              | (Paid First,em:946426,2018-12-18 07:06:12.0,1.0) 
 5D9D1DFBCEEBADF6-4097750903CE64DB | 2019-01-02 19:41:38.0 | em:526702    | (Paid First,em:946426,2018-12-18 07:06:12.0,1.0)
(10 rows)
```

For a breakdown of the results displayed in the `first_touch` column, see the [column components section](#query-result-column-components).

### Last touch attribution {#second-touch}

Last touch attribution accredits 100% of the responsibility for a successful outcome to the last channel that the consumer encountered. This SQL example is used to highlight the final interaction in a series of customer actions. 

The query returns the last touch attribution value and details of the channel in the target [!DNL Experience Event] dataset. It also returns a `struct` object for the selected channel with the last touch value, timestamp, and attribution for each row. 

**Query syntax**

```sql
ATTRIBUTION_LAST_TOUCH({TIMESTAMP}, {CHANNEL_NAME}, {CHANNEL_VALUE}) OVER ({PARTITION} {ORDER} {FRAME})
```

**Example query**

```sql
SELECT endUserIds._experience.mcid.id, timestamp, marketing.trackingCode,
    ATTRIBUTION_LAST_TOUCH(timestamp, 'trackingCode', marketing.trackingCode)
      OVER(PARTITION BY endUserIds._experience.mcid.id
           ORDER BY timestamp
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)
      AS last_touch
FROM experience_events
ORDER BY endUserIds._experience.mcid.id, timestamp ASC
```

**Results**

In the results displayed below, the tracking code in the returned object is the last interaction in each [!DNL Experience Event] record. Each code is attributed 100% (`1.0`) responsibility for the customer's actions, as it was the last interaction.

```console
                 id                |       timestamp       | trackingCode |                   last_touch                   
-----------------------------------+-----------------------+--------------+-------------------------------------------------
 5D9D1DFBCEEBADF6-4097750903CE64DB | 2017-12-18 07:06:12.0 | em:946426    | (Paid Last,em:946426,2017-12-18 07:06:12.0,1.0)
 5D9D1DFBCEEBADF6-4097750903CE64DB | 2017-12-18 07:07:02.0 | em:946426    | (Paid Last,em:946426,2017-12-18 07:07:02.0,1.0)
 5D9D1DFBCEEBADF6-4097750903CE64DB | 2017-12-18 07:07:55.0 |              | (Paid Last,em:946426,2017-12-18 07:07:02.0,1.0)
 5D9D1DFBCEEBADF6-4097750903CE64DB | 2017-12-18 07:08:44.0 |              | (Paid Last,em:946426,2017-12-18 07:07:02.0,1.0)
 5D9D1DFBCEEBADF6-4097750903CE64DB | 2017-12-23 17:50:10.0 | em:513526    | (Paid Last,em:513526,2017-12-23 17:50:10.0,1.0)
 5D9D1DFBCEEBADF6-4097750903CE64DB | 2017-12-23 17:50:43.0 | em:513526    | (Paid Last,em:513526,2017-12-23 17:50:43.0,1.0)
 5D9D1DFBCEEBADF6-4097750903CE64DB | 2017-12-23 17:53:02.0 |              | (Paid Last,em:513526,2017-12-23 17:50:43.0,1.0)
 5D9D1DFBCEEBADF6-4097750903CE64DB | 2017-12-26 20:37:12.0 | sms:70175    | (Paid Last,sms:70175,2017-12-26 20:37:12.0,1.0)
 5D9D1DFBCEEBADF6-4097750903CE64DB | 2017-12-26 20:37:57.0 |              | (Paid Last,sms:70175,2017-12-26 20:37:12.0,1.0)
 5D9D1DFBCEEBADF6-4097750903CE64DB | 2018-01-02 19:41:38.0 | em:526702    | (Paid Last,em:526702,2018-01-02 19:41:38.0,1.0)
(10 rows)
```

For a breakdown of the results displayed in the `last_touch` column, see the [column components section](#query-result-column-components).

### First touch attribution with expiration condition {#first-touch-attribution-with-expiration-condition}

This query is used to see which interaction led to a series of customer actions within a portion of the [!DNL Experience Event] dataset determined by a condition of your choosing.

The query returns the first touch attribution value and details for a single channel in the target [!DNL Experience Event] dataset, expiring after or before a condition. It also returns a `struct` object with the first touch value, timestamp, and attribution for each row returned for the selected channel.

**Query syntax**

```sql
ATTRIBUTION_FIRST_TOUCH_EXP_IF(
    {TIMESTAMP}, {CHANNEL_NAME}, {CHANNEL_VALUE}, {EXP_CONDITION}, {EXP_BEFORE})
    OVER ({PARTITION} {ORDER} {FRAME})
```

For a complete list of potentially required parameters and their descriptions, see the [attribution query parameters section](#attribution-query-parameters). 

**Example query**

In the example shown below, a purchase is recorded (`commerce.purchases.value IS NOT NULL`) on each of the four days shown in the results (July 15, 21, 23, and 29), and the initial tracking code on each day is attributed 100% (`1.0`) responsibility for the customer actions.

```sql
SELECT endUserIds._experience.mcid.id, timestamp, marketing.trackingCode,
    ATTRIBUTION_FIRST_TOUCH_EXP_IF(timestamp, 'Paid First', marketing.trackingCode, commerce.purchases.value IS NOT NULL, false)
      OVER(PARTITION BY endUserIds._experience.mcid.id
           ORDER BY timestamp
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)
      AS first_touch
FROM experience_events
ORDER BY endUserIds._experience.mcid.id, timestamp ASC
```

**Results**

```console
                 id               |       timestamp       | trackingCode |                   first_touch                   
----------------------------------+-----------------------+--------------+-------------------------------------------------
7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-15 06:04:10.0 | em:1024841   | (Paid First,em:1024841,2019-07-15 06:04:10.0,1.0)
7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-15 06:05:05.0 | em:1024841   | (Paid First,em:1024841,2019-07-15 06:04:10.0,1.0)
7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-15 06:05:35.0 |              | (Paid First,em:1024841,2019-07-15 06:04:10.0,1.0)
7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-15 06:08:30.0 |              | (Paid First,em:1024841,2019-07-15 06:04:10.0,1.0)
7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-21 18:45:10.0 | em:483339    | (Paid First,em:483339,2019-07-21 18:45:10.0,1.0)
7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-21 18:50:22.0 | em:483339    | (Paid First,em:483339,2019-07-21 18:45:10.0,1.0)
7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-21 18:56:56.0 |              | (Paid First,em:483339,2019-07-21 18:45:10.0,1.0)
7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-23 12:25:12.0 | sms:70558    | (Paid First,em:70558,2019-07-23 12:25:12.0,1.0)
7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-23 12:38:51.0 |              | (Paid First,em:70558,2019-07-23 12:25:12.0,1.0)
7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-29 21:33:30.0 | em:884210    | (Paid First,em:884210,2019-07-29 21:33:30.0,1.0)
(10 rows)
```

For a breakdown of the results displayed in the `first_touch` column, see the [column components section](#query-result-column-components).

### First touch attribution with expiration timeout {#first-touch-attribution-with-expiration-timeout}

This query is used to find the interaction, within a selected time period, that led to the successful customer action.

The query below returns the first touch attribution value and details for a single channel in the target [!DNL Experience Event] dataset for a specified time period. The query returns a `struct` object with the first touch value, timestamp, and attribution for each row returned for the selected channel.

**Query syntax**

```sql
ATTRIBUTION_FIRST_TOUCH_EXP_IF(
    {TIMESTAMP}, {CHANNEL_NAME}, {CHANNEL_VALUE}, {EXP_CONDITION}, {EXP_BEFORE})
    OVER ({PARTITION} {ORDER} {FRAME})
```

For a complete list of potentially required parameters and their descriptions, see the [attribution query parameters section](#attribution-query-parameters).

**Example query**

In the example shown below, the first touch returned for each customer action is the earliest interaction within the previous seven days (expTimeout = 86400 * 7).

```sql
SELECT endUserIds._experience.mcid.id, timestamp, marketing.trackingCode,
    ATTRIBUTION_FIRST_TOUCH_EXP_IF(timestamp, 'Paid First', marketing.trackingCode, commerce.purchases.value IS NOT NULL, false)
      OVER(PARTITION BY endUserIds._experience.mcid.id
           ORDER BY timestamp
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)
      AS first_touch
FROM experience_events
ORDER BY endUserIds._experience.mcid.id, timestamp ASC
```

**Results**

```console
                 id                 |       timestamp       | trackingCode |                   first_touch                   
-----------------------------------+-----------------------+--------------+-------------------------------------------------
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-15 06:04:10.0 | em:1024841   | (Paid First,em:1024841,2019-07-15 06:04:10.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-15 06:05:05.0 | em:1024841   | (Paid First,em:1024841,2019-07-15 06:04:10.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-15 06:05:35.0 |              | (Paid First,em:1024841,2019-07-15 06:04:10.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-15 06:08:30.0 |              | (Paid First,em:1024841,2019-07-15 06:04:10.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-21 18:45:10.0 | em:483339    | (Paid First,em:483339,2019-07-21 18:45:10.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-21 18:50:22.0 | em:483339    | (Paid First,em:483339,2019-07-21 18:45:10.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-21 18:56:56.0 |              | (Paid First,em:483339,2019-07-21 18:45:10.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-23 12:25:12.0 | sms:70558    | (Paid First,em:70558,2019-07-23 12:25:12.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-23 12:38:51.0 |              | (Paid First,em:70558,2019-07-23 12:25:12.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-29 21:33:30.0 | em:884210    | (Paid First,em:884210,2019-07-29 21:33:30.0,1.0)
(10 rows)
```

For a breakdown of the results displayed in the `first_touch` column, see the [column components section](#query-result-column-components).

### Last touch attribution with expiration condition {#last-touch-attribution-with-expiration-condition}

This query is used to find the last interaction in a series of customer actions within a portion of the [!DNL Experience Event] dataset determined by a condition of your choosing.

The query below returns the last touch attribution value and details for a single channel in the target [!DNL Experience Event] dataset, expiring after or before a condition. The query returns a `struct` object with the last touch value, timestamp, and attribution for each row returned for the selected channel. 

**Query syntax**

```sql
ATTRIBUTION_LAST_TOUCH_EXP_IF(
    {TIMESTAMP}, {CHANNEL_NAME}, {CHANNEL_VALUE}, {EXP_CONDITION}, {EXP_BEFORE}) 
    OVER ({PARTITION} {ORDER} {FRAME})
```

For a complete list of potentially required parameters and their descriptions, see the [attribution query parameters section](#attribution-query-parameters). 

**Example query**

In the example shown below, a purchase is recorded (`commerce.purchases.value IS NOT NULL`) on each of the four days shown in the results (July 15, 21, 23, and 29), and the last tracking code on each day is attributed 100% (`1.0`) responsibility for the customer actions.

```sql
SELECT endUserIds._experience.mcid.id, timestamp, marketing.trackingCode,
    ATTRIBUTION_LAST_TOUCH_EXP_IF(timestamp, 'trackingCode', marketing.trackingCode, commerce.purchases.value IS NOT NULL, false)
      OVER(PARTITION BY endUserIds._experience.mcid.id
           ORDER BY timestamp
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)
      AS last_touch
FROM experience_events
ORDER BY endUserIds._experience.mcid.id, timestamp ASC
```

**Example results**

```console
                id                 |       timestamp       | trackingCode |                   last_touch                   
-----------------------------------+-----------------------+--------------+------------------------------------------------
7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-15 06:04:10.0 | em:1024841   | (Paid Last,em:550984,2019-07-15 06:08:30.0,1.0)
7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-15 06:05:35.0 | em:1024841   | (Paid Last,em:550984,2019-07-15 06:08:30.0,1.0)
7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-15 06:05:35.0 |              | (Paid Last,em:550984,2019-07-15 06:08:30.0,1.0)
7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-15 06:08:30.0 | em:550984    | (Paid Last,em:550984,2019-07-15 06:08:30.0,1.0)
7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-21 18:45:10.0 | em:483339    | (Paid Last,em:483339,2019-07-21 18:56:56.0,1.0)
7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-21 18:50:22.0 | em:483339    | (Paid Last,em:483339,2019-07-21 18:56:56.0,1.0)
7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-21 18:56:56.0 |              | (Paid Last,em:483339,2019-07-21 18:56:56.0,1.0)
7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-23 12:25:12.0 | sms:70558    | (Paid Last,em:380097,2019-07-23 12:38:51.0,1.0)
7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-23 12:38:51.0 | em:380097    | (Paid Last,em:380097,2019-07-23 12:38:51.0,1.0)
7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-29 21:33:30.0 | em:884210    | (Paid Last,em:884210,2019-07-29 21:33:30.0,1.0)
(10 rows)
```

For a breakdown of the results displayed in the `last_touch` column, see the [column components section](#query-result-column-components).

### Last touch attribution with expiration timeout {#last-touch-attribution-with-expiration-timeout}

This query is used to find the last interaction within a selected time interval. The query returns the last touch attribution value and details for a single channel in the target [!DNL Experience Event] dataset for a specified time period. The query returns a `struct` object with the last touch value, timestamp, and attribution for each row returned for the selected channel. 

**Query syntax**

```sql
ATTRIBUTION_LAST_TOUCH_EXP_TIMEOUT(
    {TIMESTAMP}, {CHANNEL_NAME}, {CHANNEL_VALUE}, {EXP_TIMEOUT}) 
    OVER ({PARTITION} {ORDER} {FRAME})
```

For a complete list of potentially required parameters and their descriptions, see the [attribution query parameters section](#attribution-query-parameters). 

**Example query**

In the example shown below, the last touch returned for each customer action is the final interaction within the following seven days (`expTimeout = 86400 * 7`).

```sql
SELECT endUserIds._experience.mcid.id, timestamp, marketing.trackingCode,
    ATTRIBUTION_LAST_TOUCH_EXP_TIMEOUT(timestamp, 'trackingCode', marketing.trackingCode, 86400 * 7)
      OVER(PARTITION BY endUserIds._experience.mcid.id
           ORDER BY timestamp
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)
      AS last_touch
FROM experience_events
ORDER BY endUserIds._experience.mcid.id, timestamp ASC
```

**Results**

```console
                id                 |       timestamp       | trackingcode |                   last_touch                   
-----------------------------------+-----------------------+--------------+-------------------------------------------------
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-15 06:04:10.0 | em:1024841   | (Paid Last,em:483339,2019-07-21 18:56:56.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-15 06:05:35.0 | em:1024841   | (Paid Last,em:483339,2019-07-21 18:56:56.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-15 06:05:35.0 |              | (Paid Last,em:483339,2019-07-21 18:56:56.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-15 06:08:30.0 |              | (Paid Last,em:483339,2019-07-21 18:56:56.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-21 18:45:10.0 | em:483339    | (Paid Last,sms:70558,2019-07-23 12:38:51.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-21 18:50:22.0 | em:483339    | (Paid Last,sms:70558,2019-07-23 12:38:51.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-21 18:56:56.0 |              | (Paid Last,sms:70558,2019-07-23 12:38:51.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-23 12:25:12.0 | sms:70558    | (Paid Last,em:884210,2019-07-29 21:33:30.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-23 12:38:51.0 |              | (Paid Last,em:884210,2019-07-29 21:33:30.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-29 21:33:30.0 | em:884210    | (Paid Last,em:884210,2019-07-29 21:33:30.0,1.0)
(10 rows)
```

For a breakdown of the results displayed in the `last_touch` column, see the [column components section](#query-result-column-components).
