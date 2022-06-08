---
title: Attribution Analysis
description: This document explains how you can use Query Service to create a marketing effectiveness measurement technique based on the marketing attribution model of first and last touch.
---
# Attribution analysis

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

### First touch attribution {#first-touch}

First touch attribution accredits 100% of the responsibility for a successful outcome to the initial channel that the consumer encountered. This SQL example is used to highlight the interaction that led to a subsequent series of customer actions. 

The query below returns the first touch attribution value and details of the channel in the target Experience Event dataset. It also returns a `struct` object for the selected channel with the first touch value, timestamp, and attribution for each row.

**Query syntax**

```sql
ATTRIBUTION_FIRST_TOUCH({TIMESTAMP}, {CHANNEL_NAME}, {CHANNEL_VALUE}) OVER ({PARTITION} {ORDER} {FRAME})
```

| Parameter | Description |
|---|---|
| {TIMESTAMP} | The timestamp field found in the dataset. |
| {CHANNEL_NAME} | The label for the returned object. |
| {CHANNEL_VALUE} | The column or field that is the target channel for the query. |

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

In the results below, the initial tracking code `em:946426` taken from the [!DNL Experience Event] dataset is attributed with 100% (1.0) of the responsibility for the customer actions because it was the first interaction.

```console
| id | timestamp | trackingCode | first_touch |
|----|-----------|--------------|-------------|
| 5D9D1DFBCEEBADF6-4097750903CE64DB | 2018-12-18 07:06:12.0 | em:946426    | (Paid First,em:946426,2018-12-18 07:06:12.0,1.0) |
| 5D9D1DFBCEEBADF6-4097750903CE64DB | 2018-12-18 07:07:02.0 | em:946426    | (Paid First,em:946426,2018-12-18 07:06:12.0,1.0) |
| 5D9D1DFBCEEBADF6-4097750903CE64DB | 2018-12-18 07:07:55.0 |              | (Paid First,em:946426,2018-12-18 07:06:12.0,1.0) |
| 5D9D1DFBCEEBADF6-4097750903CE64DB | 2018-12-18 07:08:44.0 |              | (Paid First,em:946426,2018-12-18 07:06:12.0,1.0) |
| 5D9D1DFBCEEBADF6-4097750903CE64DB | 2018-12-23 17:50:10.0 | em:513526    | (Paid First,em:946426,2018-12-18 07:06:12.0,1.0) |
| 5D9D1DFBCEEBADF6-4097750903CE64DB | 2018-12-23 17:50:43.0 | em:513526    | (Paid First,em:946426,2018-12-18 07:06:12.0,1.0) |
| 5D9D1DFBCEEBADF6-4097750903CE64DB | 2018-12-23 17:53:02.0 |              | (Paid First,em:946426,2018-12-18 07:06:12.0,1.0) |
| 5D9D1DFBCEEBADF6-4097750903CE64DB | 2018-12-26 20:37:12.0 | sms:70175    | (Paid First,em:946426,2018-12-18 07:06:12.0,1.0) |
| 5D9D1DFBCEEBADF6-4097750903CE64DB | 2018-12-26 20:37:57.0 |              | (Paid First,em:946426,2018-12-18 07:06:12.0,1.0) |
| 5D9D1DFBCEEBADF6-4097750903CE64DB | 2019-01-02 19:41:38.0 | em:526702    | (Paid First,em:946426,2018-12-18 07:06:12.0,1.0)|
(10 rows)
```

**first_touch column components**

The results are given in the `first_touch` column. The `first_touch` column is made up of the following components:

```sql
({NAME}, {VALUE}, {TIMESTAMP}, {FRACTION})
```

|Parameter | Description |
|---|---|
|{`NAME`} | The {`CHANNEL_NAME`}, which was entered as a label in the ADF. |
|{`VALUE`} | The value from {`CHANNEL_VALUE`} that is the first touch in the [!DNL Experience Event]. |
|{`TIMESTAMP`} | The timestamp of the [!DNL Experience Event] where the first touch occurred. |
|{`FRACTION`} | The attribution of the first touch, expressed as a decimal fraction. |

### Last touch attribution {#second-touch}

Last touch attribution accredits 100% of the responsibility for a successful outcome to the last channel that the consumer encountered. This SQL example is used to highlight the final interaction in a series of customer actions. 

The query returns the last touch attribution value and details of the channel in the target [!DNL Experience Event] dataset. It also returns a `struct` object for the selected channel with the last touch value, timestamp, and attribution for each row. 

**Query syntax**

```sql
ATTRIBUTION_LAST_TOUCH({TIMESTAMP}, {CHANNEL_NAME}, {CHANNEL_VALUE}) OVER ({PARTITION} {ORDER} {FRAME})
```

| Parameter | Description |
|---|---|
| {TIMESTAMP} | The timestamp field found in the dataset. |
| {CHANNEL_NAME} | The label of the returned object. |
| {CHANNEL_VALUE} | The column or field that is the target channel for the query. |

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

In the results displayed below, the tracking code in the returned object is the last interaction in each [!DNL Experience Event] record. Each code is attributed 100% (1.0) responsibility for the customer's actions, as it was the last interaction.

```console
 id | timestamp | trackingCode | last_touch
 ---+-----------+--------------+------------
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

**last_touch column components**

The results are given in the `last_touch` column. The `last_touch` column is made up of the following components:

```console
({NAME}, {VALUE}, {TIMESTAMP}, {FRACTION})
```

|Parameter | Description |
|---|---|
|{`NAME`} | The {`CHANNEL_NAME`}, which was entered as a label in the ADF. |
|{`VALUE`} | The value from {`CHANNEL_VALUE`} that is the first touch in the [!DNL Experience Event]. |
|{`TIMESTAMP`} | The timestamp of the [!DNL Experience Event] where the first touch occurred. |
|{`FRACTION`} | The attribution of the first touch, expressed as a decimal fraction. |

## First-touch attribution with expiration condition {#first-touch-attribution-with-expiration-condition}

The query returns the first-touch attribution value and details for a single channel in the target [!DNL Experience Event] dataset for a specified time period. The query returns a struct object with the first touch value, timestamp, and attribution for each row returned for the selected channel.

This query below is useful if you want to see what interaction, within a selected time interval, led to a customer action. In the example shown below, the first touch returned for each customer action is the earliest interaction within the previous seven days (expTimeout = 86400 * 7).

**Query syntax**

```sql
ATTRIBUTION_FIRST_TOUCH_EXP_IF(
    {TIMESTAMP}, {CHANNEL_NAME}, {CHANNEL_VALUE}, {EXP_CONDITION}, {EXP_BEFORE})
    OVER ({PARTITION} {ORDER} {FRAME})
```

The following table provides descriptions of the parameters required: 

| Parameter | Description |
|---|---|
| {`TIMESTAMP`} | The timestamp field found in the dataset. |
| {`CHANNEL_NAME`} | The label of the returned object. |
| {`CHANNEL_VALUE`} | The column or field that is the target channel for the query. |
| `{EXP_CONDITION}` | The condition that determines the expiry point of the channel. |
| `{EXP_BEFORE}` | A boolean that indicates if the channel expires before or after the specified condition, `{EXP_CONDITION}`, is met. This is primarily enabled for a session's expiry conditions, to ensure that the first touch is not selected from a previous session. By default, this value is set to `false`. |

**Example query**

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
-----------------------------------+-----------------------+--------------+--------------------------------------------------
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

**first_touch column components**

The results are given in the `first_touch` column. The `first_touch` column is made up of the following components:

```sql
({NAME}, {VALUE}, {TIMESTAMP}, {FRACTION})
```

The following table provides descriptions of the required parameters:

| Parameters | Description | 
| ---------- | ----------- |
| `{NAME}` | The `{CHANNEL_NAME}`, which was entered as a label in the ADF. |
| `{VALUE}` | The value from `CHANNEL_VALUE}` that is the first touch in the [!DNL Experience Event], prior to the `{EXP_CONDITION}`. |
| `{TIMESTAMP}` | The timestamp of the [!DNL Experience Event] where the first touch occurred. |
| `{FRACTION}` | The attribution of the first touch, expressed as a decimal fraction. |

## First-touch attribution with expiration timeout {#first-touch-attribution-with-expiration-timeout}

This query is used to find the interaction, within a selected time period, that led to a customer action.

The query below returns the first-touch attribution value and details for a single channel in the target Experience Event dataset for a specified time period. The query returns a `struct` object with the first touch value, timestamp, and attribution for each row returned for the selected channel.

**Query syntax**

```sql
ATTRIBUTION_FIRST_TOUCH_EXP_IF(
    {TIMESTAMP}, {CHANNEL_NAME}, {CHANNEL_VALUE}, {EXP_CONDITION}, {EXP_BEFORE})
    OVER ({PARTITION} {ORDER} {FRAME})
```

| Parameter | Description |
|---|---|
| {`TIMESTAMP`} | The timestamp field found in the dataset. |
| {`CHANNEL_NAME`} | The label of the returned object. |
| {`CHANNEL_VALUE`} | The column or field that is the target channel for the query. |
| {`EXP_CONDITION`} | The condition that determines the expiry point of the channel.|
| {`EXP_BEFORE`} | A boolean that indicates if the channel expires before or after the specified condition, {`EXP_CONDITION`}, is met. This is primarily enabled for a session’s expiry conditions, to ensure that the first touch is not selected from a previous session. By default, this value is set to `false`.|

**Example query**

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

In the results displayed below, the first touch returned for each customer action is the earliest interaction within the previous seven days (expTimeout = 86400 * 7).

```console
 id | timestamp | trackingCode | first_touch
 ---+-----------+--------------+------------
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

**first_touch column components**

The results are given in the `first_touch` column. The `first_touch` column is made up of the following components:

```sql
({NAME}, {VALUE}, {TIMESTAMP}, {FRACTION})
```

|Parameter | Description |
|---|---|
|{`NAME`} | The {`CHANNEL_NAME`}, which was entered as a label in the ADF. |
|{`VALUE`} | The value from {`CHANNEL_VALUE`} that is the first touch in the Experience Event. |
|{`TIMESTAMP`} | The timestamp of the Experience Event where the first touch occurred. |
|{`FRACTION`} | The attribution of the first touch, expressed as a decimal fraction. |
