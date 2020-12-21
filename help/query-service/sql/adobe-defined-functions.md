---
keywords: Experience Platform;home;popular topics;query service;Query service;adobe defined functions;sql;
solution: Experience Platform
title: Adobe-defined functions
topic: functions
description: This document provides information for Adobe-defined functions available in Query Service.
---

# Adobe-defined functions

Adobe-defined functions, herein referred to as ADFs, are prebuilt functions in Adobe Experience Platform Query Service that help perform common business-related tasks on [!DNL Experience Event] data. These include functions for [Sessionization](https://experienceleague.adobe.com/docs/analytics/components/virtual-report-suites/vrs-mobile-visit-processing.html) and [Attribution](https://experienceleague.adobe.com/docs/analytics/analyze/analysis-workspace/attribution/overview.html) like those found in Adobe Analytics. 

This document provides information for Adobe-defined functions available in [!DNL Query Service].

## Window functions {#window-functions}

The majority of the business logic requires gathering the touchpoints for a customer and ordering them by time. This support is provided by [!DNL Spark] SQL in the form of window functions. Window functions are part of standard SQL and are supported by many other SQL engines.

A window function updates an aggregation and returns a single item for each row in your ordered subset. The most basic aggregation function is `SUM()`. `SUM()` takes your rows and gives you one total. If you instead apply `SUM()` to a window, turning it into a window function, you receive a cumulative sum with each row.

The majority of the [!DNL Spark] SQL helpers are window functions that update each row in your window, with the state of that row added.

**Query syntax**

```sql
OVER ({PARTITION} {ORDER} {FRAME})
```

| Parameter | Description | Example |
| --------- | ----------- | ------- |
| `{PARTITION}` | A subgroup of rows based on a column or available field. | `PARTITION BY endUserIds._experience.mcid.id` |
| `{ORDER}` | A column or available field used to order the subset or rows. | `ORDER BY timestamp` |
| `{FRAME}` | A subgroup of the rows in a partition. | `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` |

## Sessionization

When you are working with [!DNL Experience Event] data originating from a website, mobile application, interactive voice response system, or any other customer interaction channel, it helps if events can be grouped around a related period of activity. Typically, you have a specific intent driving your activity like researching a product, paying a bill, checking account balance, filling out an application, and so on. 

This grouping, or sessionization of data, helps associate the events to uncover more context about the customer experience.

For more information about sessionization in Adobe Analytics, see the documentation on [context-aware sessions](https://experienceleague.adobe.com/docs/analytics/components/virtual-report-suites/vrs-mobile-visit-processing.html.

**Query syntax**

```sql
SESS_TIMEOUT({TIMESTAMP}, {EXPIRATION_IN_SECONDS}) OVER ({PARTITION} {ORDER} {FRAME})
```

| Parameter | Description | 
| --------- | ----------- |
| `{TIMESTAMP}` | The timestamp field found in the dataset. |
| `{EXPIRATION_IN_SECONDS}` | The number of seconds needed between events to qualify the end of the current session and the start of a new session. |

An explanation of the parameters within the `OVER()` function can be found in the [window functions section](#window-functions). 

**Example query**

```sql
SELECT 
  endUserIds._experience.mcid.id as id, 
  timestamp,
  SESS_TIMEOUT(timestamp, 60 * 30)
    OVER (PARTITION BY endUserIds._experience.mcid.id
        ORDER BY timestamp
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)
    AS session
FROM experience_events
ORDER BY id, timestamp ASC
LIMIT 10
```

**Results**

```console
                id                |       timestamp       |      session       
----------------------------------+-----------------------+--------------------
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-01-18 06:55:53.0 | (0,1,true,1)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-01-18 06:56:51.0 | (58,1,false,2)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-01-18 06:57:47.0 | (56,1,false,3)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-01-18 06:58:27.0 | (40,1,false,4)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-01-18 06:59:22.0 | (55,1,false,5)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-02-03 01:16:23.0 | (1361821,2,true,1)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-02-03 01:17:17.0 | (54,2,false,2)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-02-03 01:18:06.0 | (49,2,false,3)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-02-03 01:18:39.0 | (33,2,false,4)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-02-03 01:19:10.0 | (31,2,false,5)
(10 rows)
```

For the sample query given, the results are given in the `session` column. The `session` column is made up of the following components:

```sql
({TIMESTAMP_DIFF}, {NUM}, {IS_NEW}, {DEPTH})
```

| Parameters |  Description  | 
| ---------- | ------------- |
| `{TIMESTAMP_DIFF}` | The difference in time, in seconds, between the current record and the prior record. |
| `{NUM}` | A unique session number, starting at 1, for the key defined in the `PARTITION BY` of the window function.   |
| `{IS_NEW}` | A boolean used to identify whether a record is the first of a session. |
| `{DEPTH}` | The depth of the current record within the session. |

### SESS_START_IF

This query returns the state of the session for the current row, based on the current timestamp and the expression given and starts a new session with the current row.

**Query syntax**

```sql
SESS_START_IF({TIMESTAMP}, {TEST_EXPRESSION}) OVER ({PARTITION} {ORDER} {FRAME})
```

| Parameter | Description |
| --------- | ----------- |
| `{TIMESTAMP}` | The timestamp field found in the dataset. |
| `{TEST_EXPRESSION}` | An expression that you want to check the fields of the data against. For example, `application.launches > 0`. |

An explanation of the parameters within the `OVER()` function can be found in the [window functions section](#window-functions). 

**Example query**

```sql
SELECT
    endUserIds._experience.mcid.id AS id,
    timestamp,
    IF(application.launches.value > 0, true, false) AS isLaunch,
    SESS_START_IF(timestamp, application.launches.value > 0)
        OVER (PARTITION BY endUserIds._experience.mcid.id
            ORDER BY timestamp
            ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)
        AS session
    FROM experience_events
    ORDER BY id, timestamp ASC
    LIMIT 10
```

**Results**

```console
                id                |       timestamp       | isLaunch |      session       
----------------------------------+-----------------------+----------+--------------------
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-01-18 06:55:53.0 | true     | (0,1,true,1)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-01-18 06:56:51.0 | false    | (58,1,false,2)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-01-18 06:57:47.0 | false    | (56,1,false,3)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-01-18 06:58:27.0 | true     | (40,2,true,1)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-01-18 06:59:22.0 | false    | (55,2,false,2)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-02-03 01:16:23.0 | false    | (1361821,2,false,3)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-02-03 01:17:17.0 | false    | (54,2,false,4)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-02-03 01:18:06.0 | false    | (49,2,false,5)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-02-03 01:18:39.0 | false    | (33,2,false,6)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-02-03 01:19:10.0 | false    | (31,2,false,7)
(10 rows)
```

For the sample query given, the results are given in the `session` column. The `session` column is made up of the following components:

```sql
({TIMESTAMP_DIFF}, {NUM}, {IS_NEW}, {DEPTH})
```

| Parameters |  Description  | 
| ---------- | ------------- |
| `{TIMESTAMP_DIFF}` | The difference in time, in seconds, between the current record and the prior record. |
| `{NUM}` | A unique session number, starting at 1, for the key defined in the `PARTITION BY` of the window function. |
| `{IS_NEW}` | A boolean used to identify whether a record is the first of a session. |
| `{DEPTH}` | The depth of the current record within the session. |

### SESS_END_IF

This query returns the state of the session for the current row, based on the current timestamp and the expression given, ends the current session, and starts a new session on the next row.

**Query syntax**

```sql
SESS_END_IF({TIMESTAMP}, {TEST_EXPRESSION}) OVER ({PARTITION} {ORDER} {FRAME})
```

| Parameter | Description |
| --------- | ----------- |
| `{TIMESTAMP}` | The timestamp field found in the dataset. |
| `{TEST_EXPRESSION}` | An expression that you want to check the fields of the data against. For example, `application.launches > 0`. |

An explanation of the parameters within the `OVER()` function can be found in the [window functions section](#window-functions). 

**Example query**

```sql
SELECT
    endUserIds._experience.mcid.id AS id,
    timestamp,
    IF(application.applicationCloses.value > 0 OR application.crashes.value > 0, true, false) AS isExit,
    SESS_END_IF(timestamp, application.applicationCloses.value > 0 OR application.crashes.value > 0)
        OVER (PARTITION BY endUserIds._experience.mcid.id
            ORDER BY timestamp
            ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)
        AS session
    FROM experience_events
    ORDER BY id, timestamp ASC
    LIMIT 10
```

**Results**

```console
                id                |       timestamp       | isExit   |      session       
----------------------------------+-----------------------+----------+--------------------
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-01-18 06:55:53.0 | false    | (0,1,true,1)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-01-18 06:56:51.0 | false    | (58,1,false,2)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-01-18 06:57:47.0 | true     | (56,1,false,3)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-01-18 06:58:27.0 | false    | (40,2,true,1)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-01-18 06:59:22.0 | false    | (55,2,false,2)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-02-03 01:16:23.0 | false    | (1361821,2,false,3)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-02-03 01:17:17.0 | false    | (54,2,false,4)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-02-03 01:18:06.0 | false    | (49,2,false,5)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-02-03 01:18:39.0 | false    | (33,2,false,6)
 100080F22A45CB40-3A2B7A8E11096B6 | 2018-02-03 01:19:10.0 | false    | (31,2,false,7)
(10 rows)
```

For the sample query given, the results are given in the `session` column. The `session` column is made up of the following components:

```sql
({TIMESTAMP_DIFF}, {NUM}, {IS_NEW}, {DEPTH})
```

| Parameters |  Description  | 
| ---------- | ------------- |
| `{TIMESTAMP_DIFF}` | The difference in time, in seconds, between the current record and the prior record. |
| `{NUM}` | A unique session number, starting at 1, for the key defined in the `PARTITION BY` of the window function.   |
| `{IS_NEW}` | A boolean used to identify whether a record is the first of a session. |
| `{DEPTH}` | The depth of the current record within the session. |

## Attribution

Associating customer actions to success is an important part of understanding the factors that influence customer experiences. The following ADFs support first-touch attribution and last-touch attribution with different expiration settings.

For more information about attribution in Adobe Analytics, see the [Attribution IQ overview](https://experienceleague.adobe.com/docs/analytics/analyze/analysis-workspace/panels/attribution.html) in the [!DNL Analytics] Attribution panel guide.

### First-touch attribution

This query returns the first-touch attribution value and details for a single channel in the target [!DNL Experience Event] dataset. The query returns a `struct` object with the first touch value, timestamp, and attribution for each row returned for the selected channel.

This query is useful if you want to see what interaction led to a series of customer actions. In the example shown below, the initial tracking code (`em:946426`) in the [!DNL Experience Event] data is attributed 100% (`1.0`) responsibility for the customer actions, as it was the first interaction.

**Query syntax**

```sql
ATTRIBUTION_FIRST_TOUCH({TIMESTAMP}, {CHANNEL_NAME}, {CHANNEL_VALUE}) OVER ({PARTITION} {ORDER} {FRAME})
```

| Parameter | Description | 
| --------- | ----------- |
| `{TIMESTAMP}` | The timestamp field found in the dataset. |
| `{CHANNEL_NAME}` | The label for the returned object. |
| `{CHANNEL_VALUE}` | The column or field that is the target channel for the query. |

An explanation of the parameters within `OVER()` can be found in the [window functions section](#window-functions). 

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

```console
                id                 |       timestamp       | trackingCode |                   first_touch                    
-----------------------------------+-----------------------+--------------+--------------------------------------------------
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

For the sample query given, the results are given in the `first_touch` column. The `first_touch` column is made up of the following components:

```sql
({NAME}, {VALUE}, {TIMESTAMP}, {FRACTION})
```

| Parameter | Description | 
| --------- | ----------- |
| `{NAME}` | The `{CHANNEL_NAME}`, which was entered as a label in the ADF. |
| `{VALUE}` | The value from `{CHANNEL_VALUE}` that is the first touch in the [!DNL Experience Event] |
| `{TIMESTAMP}` | The timestamp of the [!DNL Experience Event] where the first touch occurred. |
| `{FRACTION}` | The attribution of the first touch, expressed as a decimal fraction. |

### Last-touch attribution

This query returns the last-touch attribution value and details for a single channel in the target [!DNL Experience Event] dataset. The query returns a `struct` object with the last touch value, timestamp, and attribution for each row returned for the selected channel.

This query is useful if you want to see the final interaction in a series of customer actions. In the example shown below, the tracking code in the returned object is the last interaction in each [!DNL Experience Event] record. Each code is attributed 100% (`1.0`) responsibility for the customer actions, as it was the last interaction.

**Query syntax**

```sql
ATTRIBUTION_LAST_TOUCH({TIMESTAMP}, {CHANNEL_NAME}, {CHANNEL_VALUE}) OVER ({PARTITION} {ORDER} {FRAME})
```

| Parameter | Description | 
| --------- | ----------- |
| `{TIMESTAMP}` | The timestamp field found in the dataset. |
| `{CHANNEL_NAME}` | The label of the returned object. |
| `{CHANNEL_VALUE}` | The column or field that is the target channel for the query. |

An explanation of the parameters within `OVER()` can be found in the [window functions section](#window-functions). 

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

```console
                id                 |       timestamp       | trackingcode |                   last_touch                   
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

For the sample query given, the results are given in the `last_touch` column. The `last_touch` column is made up of the following components:

```sql
({NAME}, {VALUE}, {TIMESTAMP}, {FRACTION})
```

| Parameters | Description | 
| ---------- | ----------- |
| `{NAME}` | The `{CHANNEL_NAME}`, which was entered as a label in the ADF. |
| `{VALUE}` | The value from `{CHANNEL_VALUE}` that is the last touch in the [!DNL Experience Event] |
| `{TIMESTAMP}` | The timestamp of the [!DNL Experience Event] where the `channelValue` was used. |
| `{FRACTION}` | The attribution of the last touch, expressed as a decimal fraction. |

### First-touch attribution with expiration condition

This query returns the first-touch attribution value and details for a single channel in the target [!DNL Experience Event] dataset, expiring after or before a condition. The query returns a `struct` object with the first touch value, timestamp, and attribution for each row returned for the selected channel.

This query is useful if you want to see what interaction led to a series of customer actions within a portion of the [!DNL Experience Event] dataset determined by a condition of your choosing. In the example shown below, a purchase is recorded (`commerce.purchases.value IS NOT NULL`) on each of the four days shown in the results (July 15, 21, 23, and 29) and the initial tracking code on each day is attributed 100% (`1.0`) responsibility for the customer actions.

**Query syntax**

```sql
ATTRIBUTION_FIRST_TOUCH_EXP_IF(
    {TIMESTAMP}, {CHANNEL_NAME}, {CHANNEL_VALUE}, {EXP_CONDITION}, {EXP_BEFORE}) 
    OVER ({PARTITION} {ORDER} {FRAME})
```

| Parameter | Description | 
| --------- | ----------- |
| `{TIMESTAMP}` | The timestamp field found in the dataset. |
| `{CHANNEL_NAME}` | The label for the returned object. |
| `{CHANNEL_VALUE}` | The column or field that is the target channel for the query. |
| `{EXP_CONDITION}` | The condition that determines the expiry point of the channel. |
| `{EXP_BEFORE}` | A boolean that indicates if the channel expires before or after the specified condition, `{EXP_CONDITION}`, is met. This is primarily enabled for a session's expiry conditions, to ensure that the first touch is not selected from a previous session. By default, this value is set to `false`. |

An explanation of the parameters within the `OVER()` function can be found in the [window functions section](#window-functions). 

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

For the sample query given, the results are given in the `first_touch` column. The `first_touch` column is made up of the following components:

```sql
({NAME}, {VALUE}, {TIMESTAMP}, {FRACTION})
```

| Parameters | Description | 
| ---------- | ----------- |
| `{NAME}` | The `{CHANNEL_NAME}`, which was entered as a label in the ADF. |
| `{VALUE}` | The value from `CHANNEL_VALUE}` that is the first touch in the [!DNL Experience Event], prior to the `{EXP_CONDITION}`. |
| `{TIMESTAMP}` | The timestamp of the [!DNL Experience Event] where the first touch occurred. |
| `{FRACTION}` | The attribution of the first touch, expressed as a decimal fraction. |

### First-touch attribution with expiration timeout

Ths query returns the first-touch attribution value and details for a single channel in the target [!DNL Experience Event] dataset for a specified time period. The query returns a `struct` object with the first touch value, timestamp, and attribution for each row returned for the selected channel. 

This query is useful if you want to see what interaction, within a selected time interval, led to a customer action. In the example shown below, the first touch returned for each customer action is the earliest interaction within the previous seven days (`expTimeout = 86400 * 7`).

**Specification**

```sql
ATTRIBUTION_FIRST_TOUCH_EXP_TIMEOUT(
    {TIMESTAMP}, {CHANNEL_NAME}, {CHANNEL_VALUE}, {EXP_TIMEOUT}) 
    OVER ({PARTITION} {ORDER} {FRAME})
```

| Parameter | Description | 
| --------- | ----------- |
| `{TIMESTAMP}` | The timestamp field found in the dataset. |
| `{CHANNEL_NAME}` | The label for the returned object. |
| `{CHANNEL_VALUE}` | The column or field that is the target channel for the query. |
| `{EXP_TIMEOUT}` | The window of time prior to the channel event, in seconds, that the query searches for a first touch event. |

An explanation of the parameters within the `OVER()` function can be found in the [window functions section](#window-functions). 

**Example query**

```sql
SELECT endUserIds._experience.mcid.id, timestamp, marketing.trackingCode,
    ATTRIBUTION_FIRST_TOUCH_EXP_TIMEOUT(timestamp, 'Paid First', marketing.trackingCode, 86400 * 7)
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
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-21 18:45:10.0 | em:483339    | (Paid First,em:1024841,2019-07-15 06:04:10.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-21 18:50:22.0 | em:483339    | (Paid First,em:1024841,2019-07-15 06:04:10.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-21 18:56:56.0 |              | (Paid First,em:1024841,2019-07-15 06:04:10.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-23 12:25:12.0 | sms:70558    | (Paid First,em:483339,2019-07-23 12:25:12.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-23 12:38:51.0 |              | (Paid First,em:483339,2019-07-23 12:25:12.0,1.0)
 7J82HGSSBNELKLD4-4107750913DE65DA | 2019-07-29 21:33:30.0 | em:884210    | (Paid First,em:884210,2019-07-29 21:33:30.0,1.0)
(10 rows)
```

For the sample query given, the results are given in the `first_touch` column. The `first_touch` column is made up of the following components:

```sql
({NAME}, {VALUE}, {TIMESTAMP}, {FRACTION})
```

| Parameters | Description | 
| ---------- | ----------- |
| `{NAME}` | The `{CHANNEL_NAME}`, which was entered as a label in the ADF. |
| `{VALUE}` | The value from `CHANNEL_VALUE}` that is the first touch within the specified `{EXP_TIMEOUT}` interval. |
| `{TIMESTAMP}` | The timestamp of the [!DNL Experience Event] where the first touch occurred. |
| `{FRACTION}` | The attribution of the first touch, expressed as a decimal fraction. |

### Last-touch attribution with expiration condition

This query returns the last-touch attribution value and details for a single channel in the target [!DNL Experience Event] dataset, expiring after or before a condition. The query returns a `struct` object with the last touch value, timestamp, and attribution for each row returned for the selected channel. 

This query is useful if you want to see the last interaction in a series of customer actions within a portion of the [!DNL Experience Event] dataset determined by a condition of your choosing. In the example shown below, a purchase is recorded (`commerce.purchases.value IS NOT NULL`) on each of the four days shown in the results (July 15, 21, 23, and 29) and the last tracking code on each day is attributed 100% (`1.0`) responsibility for the customer actions.

**Query syntax**

```sql
ATTRIBUTION_LAST_TOUCH_EXP_IF(
    {TIMESTAMP}, {CHANNEL_NAME}, {CHANNEL_VALUE}, {EXP_CONDITION}, {EXP_BEFORE}) 
    OVER ({PARTITION} {ORDER} {FRAME})
```

| Parameter | Description | 
| --------- | ----------- |
| `{TIMESTAMP}` | The timestamp field found in the dataset. |
| `{CHANNEL_NAME}` | The label for the returned object. |
| `{CHANNEL_VALUE}` | The column or field that is the target channel for the query. |
| `{EXP_CONDITION}` | The condition that determines the expiry point of the channel. |
| `{EXP_BEFORE}` | A boolean that indicates if the channel expires before or after the specified condition, `{EXP_CONDITION}`, is met. This is primarily enabled for a session's expiry conditions, to ensure that the first touch is not selected from a previous session. By default, this value is set to `false`. |

**Example query**

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
                id                 |       timestamp       | trackingcode |                   last_touch                   
-----------------------------------+-----------------------+--------------+-------------------------------------------------
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

For the sample query given, the results are given in the `last_touch` column. The `last_touch` column is made up of the following components:

```sql
({NAME}, {VALUE}, {TIMESTAMP}, {FRACTION})
```

| Parameters | Description | 
| ---------- | ----------- |
| `{NAME}` | The `{CHANNEL_NAME}`, which was entered as a label in the ADF. |
| `{VALUE}` | The value from `{CHANNEL_VALUE}` that is the last touch in the [!DNL Experience Event], prior to the `{EXP_CONDITION}`. |
| `{TIMESTAMP}` | The timestamp of the [!DNL Experience Event] where the last touch occurred. |
| `{FRACTION}` | The attribution of the last touch, expressed as a decimal fraction.  |

### Last-touch attribution with expiration timeout

This query returns the last-touch attribution value and details for a single channel in the target [!DNL Experience Event] dataset for a specified time period. The query returns a `struct` object with the last touch value, timestamp, and attribution for each row returned for the selected channel. 

This query is useful if you want to see the last interaction within a selected time interval. In the example shown below, the last touch returned for each customer action is the final interaction within the following seven days (`expTimeout = 86400 * 7`).

**Query syntax**

```sql
ATTRIBUTION_LAST_TOUCH_EXP_TIMEOUT(
    {TIMESTAMP}, {CHANNEL_NAME}, {CHANNEL_VALUE}, {EXP_TIMEOUT}) 
    OVER ({PARTITION} {ORDER} {FRAME})
```

| Parameter | Description | 
| --------- | ----------- |
| `{TIMESTAMP}` | The timestamp field found in the dataset. |
| `{CHANNEL_NAME}` | The label for the returned object |
| `{CHANNEL_VALUE}` | The column or field that is the target channel for the query |
| `{EXP_TIMEOUT}` | The window of time after the channel event, in seconds, that the query searches for a last touch event. |

An explanation of the parameters within the `OVER()` function can be found in the [window functions section](#window-functions). 

**Example query**

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

For the sample query given, the results are given in the `last_touch` column. The `last_touch` column is made up of the following components:

```sql
({NAME}, {VALUE}, {TIMESTAMP}, {FRACTION})
```

| Parameters | Description | 
| ---------- | ----------- |
| `{NAME}` | The `{CHANNEL_NAME}`, entered as a label in the ADF. |
| `{VALUE}` | The value from `{CHANNEL_VALUE}` that is the last touch within the specified `{EXP_TIMEOUT}` interval |
| `{TIMESTAMP}` | The timestamp of the [!DNL Experience Event] where the last touch occurred |
| `{FRACTION}` | The attribution of the last touch, expressed as a decimal fraction. |

## Pathing

Pathing can be used to understand the customer's depth of engagement, confirm the intended steps of an experience are working as designed, and identify potential pain points impacting the customer. 

The following ADFs support establishing pathing views from their previous and next relationships. You'll be able to create previous pages and next pages, or step through multiple events to create pathing. 

### Previous page

Determines the previous value of a particular field a defined number of steps away within the window. Notice in the example that the `WINDOW` function is configured with a frame of `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` setting the ADF to look at the current row and all subsequent rows.

**Query syntax**

```sql
PREVIOUS({KEY}, {SHIFT}, {IGNORE_NULLS}) OVER ({PARTITION} {ORDER} {FRAME})
```

| Parameter | Description | 
| --------- | ----------- |
| `{KEY}` | The column or field from the event. |
| `{SHIFT}` | (Optional) The number of events away from the current event. By default, the value is 1. |
| `{IGNORE_NULLS}` | (Optional) A boolean that indicates if null `{KEY}` values should be ignored. By default, the value is `false`. |

An explanation of the parameters within the `OVER()` function can be found in the [window functions section](#window-functions). 

**Example query**

```sql
SELECT endUserIds._experience.mcid.id, _experience.analytics.session.num, timestamp, web.webPageDetails.name
    PREVIOUS(web.webPageDetails.name, 3)
      OVER(PARTITION BY endUserIds._experience.mcid.id, _experience.analytics.session.num
           ORDER BY timestamp
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)
      AS previous_page
FROM experience_events
ORDER BY endUserIds._experience.mcid.id, _experience.analytics.session.num, timestamp ASC
```

**Results**

```console
                id                 |       timestamp       |                 name                |                    previous_page                    
-----------------------------------+-----------------------+-------------------------------------+-----------------------------------------------------
 457C3510571E5930-69AA721C4CBF9339 | 2017-11-08 17:15:28.0 |                                     | 
 457C3510571E5930-69AA721C4CBF9339 | 2017-11-08 17:53:05.0 | Home                                | 
 457C3510571E5930-69AA721C4CBF9339 | 2017-11-08 17:53:45.0 | Kids                                | (Home)
 457C3510571E5930-69AA721C4CBF9339 | 2017-11-08 19:22:34.0 |                                     | (Kids)
 457C3510571E5930-69AA721C4CBF9339 | 2017-11-08 20:01:12.0 | Home                                | 
 457C3510571E5930-69AA721C4CBF9339 | 2017-11-08 20:01:57.0 | Kids                                | (Home)
 457C3510571E5930-69AA721C4CBF9339 | 2017-11-08 20:03:36.0 | Search Results                      | (Kids)
 457C3510571E5930-69AA721C4CBF9339 | 2017-11-08 20:04:30.0 | Product Details: Pemmican Power Bar | (Search Results)
 457C3510571E5930-69AA721C4CBF9339 | 2017-11-08 20:05:27.0 | Shopping Cart: Cart Details         | (Product Details: Pemmican Power Bar)
 457C3510571E5930-69AA721C4CBF9339 | 2017-11-08 20:06:07.0 | Shopping Cart: Shipping Information | (Shopping Cart: Cart Details)
(10 rows)
```

For the sample query given, the results are given in the `previous_page` column. The value within the `previous_page` column is based on the `{KEY}` used in the ADF.

### Next page

Determines the next value of a particular field a defined number of steps away within the window. Notice in the example that the `WINDOW` function is configured with a frame of `ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING` setting the ADF to look at the current row and all subsequent rows.

**Query syntax**

```sql
NEXT({KEY}, {SHIFT}, {IGNORE_NULLS}) OVER ({PARTITION} {ORDER} {FRAME})
```

| Parameter | Description | 
| --------- | ----------- |
| `{KEY}` | The column or field from the event. |
| `{SHIFT}` | (Optional) The number of events away from the current event. By default, the value is 1. |
| `{IGNORE_NULLS}` | (Optional) A boolean that indicates if null `{KEY}` values should be ignored. By default, the value is `false`. |

An explanation of the parameters within the `OVER()` function can be found in the [window functions section](#window-functions). 

**Example query**

```sql
SELECT endUserIds._experience.aaid.id, timestamp, web.webPageDetails.name,
    NEXT(web.webPageDetails.name, 1, true)
      OVER(PARTITION BY endUserIds._experience.aaid.id
           ORDER BY timestamp
           ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING)
      AS previous_page
FROM experience_events
ORDER BY endUserIds._experience.aaid.id, timestamp ASC
LIMIT 10
```

**Results**

```console
                id                 |       timestamp       |                name                 |             previous_page             
-----------------------------------+-----------------------+-------------------------------------+---------------------------------------
 457C3510571E5930-69AA721C4CBF9339 | 2017-11-08 17:15:28.0 |                                     | (Home)
 457C3510571E5930-69AA721C4CBF9339 | 2017-11-08 17:53:05.0 | Home                                | (Kids)
 457C3510571E5930-69AA721C4CBF9339 | 2017-11-08 17:53:45.0 | Kids                                | (Home)
 457C3510571E5930-69AA721C4CBF9339 | 2017-11-08 19:22:34.0 |                                     | (Home)
 457C3510571E5930-69AA721C4CBF9339 | 2017-11-08 20:01:12.0 | Home                                | (Kids)
 457C3510571E5930-69AA721C4CBF9339 | 2017-11-08 20:01:57.0 | Kids                                | (Search Results)
 457C3510571E5930-69AA721C4CBF9339 | 2017-11-08 20:03:36.0 | Search Results                      | (Product Details: Pemmican Power Bar)
 457C3510571E5930-69AA721C4CBF9339 | 2017-11-08 20:04:30.0 | Product Details: Pemmican Power Bar | (Shopping Cart: Cart Details)
 457C3510571E5930-69AA721C4CBF9339 | 2017-11-08 20:05:27.0 | Shopping Cart: Cart Details         | (Shopping Cart: Shipping Information)
 457C3510571E5930-69AA721C4CBF9339 | 2017-11-08 20:06:07.0 | Shopping Cart: Shipping Information | (Shopping Cart: Billing Information)
(10 rows)
```

For the sample query given, the results are given in the `previous_page` column. The value within the `previous_page` column is based on the `{KEY}` used in the ADF.

## Time-between

Time-between allows you to explore latent customer behavior within a certain time period before or after an event occurs.

### Time-between previous match

This query returns a number representing the unit of time since the previous matching event was seen. If no matching event was found, it returns null.

**Query syntax**

```sql
TIME_BETWEEN_PREVIOUS_MATCH(
    {TIMESTAMP}, {EVENT_DEFINITION}, {TIME_UNIT})
    OVER ({PARTITION} {ORDER} {FRAME})
```

| Parameter | Description | 
| --------- | ----------- |
| `{TIMESTAMP}` | A timestamp field found in the dataset populated on all events. |
| `{EVENT_DEFINITION}` | The expression to qualify the previous event. |
| `{TIME_UNIT}` | The unit of output. Possible value include days, hours, minutes, and seconds. By default, the value is seconds. |

An explanation of the parameters within the `OVER()` function can be found in the [window functions section](#window-functions). 

**Example query**

```sql
SELECT 
  page_name,
  SUM (time_between_previous_match) / COUNT(page_name) as average_minutes_since_registration
FROM
(
SELECT 
  endUserIds._experience.mcid.id as id, 
  timestamp, web.webPageDetails.name as page_name, 
  TIME_BETWEEN_PREVIOUS_MATCH(timestamp, web.webPageDetails.name='Account Registration|Confirmation', 'minutes')
    OVER(PARTITION BY endUserIds._experience.mcid.id
       ORDER BY timestamp
       ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)
    AS time_between_previous_match
FROM experience_events
)
WHERE time_between_previous_match IS NOT NULL
GROUP BY page_name
ORDER BY average_minutes_since_registration
LIMIT 10
```

**Results**

```console
             page_name             | average_minutes_since_registration 
-----------------------------------+------------------------------------
                                   |                                   
 Account Registration|Confirmation |                                0.0
 Seasonal                          |                   5.47029702970297
 Equipment                         |                  6.532110091743119
 Women                             |                  7.287081339712919
 Men                               |                  7.640918580375783
 Product List                      |                  9.387459807073954
 Unlimited Blog|February           |                  9.954545454545455
 Product Details|Buffalo           |                 13.304347826086957
 Unlimited Blog|June               |                  770.4285714285714
(10 rows)
```

For the sample query given, the results are given in the `average_minutes_since_registration` column. The value within the `average_minutes_since_registration` column is the difference in time between the current and previous events. The unit of time was defined previously in the `{TIME_UNIT}`.

### Time-between next match

This query returns a negative number representing the unit of time behind the next matching event. If a matching event is not found, null is returned.

**Query syntax**

```sql
TIME_BETWEEN_NEXT_MATCH({TIMESTAMP}, {EVENT_DEFINITION}, {TIME_UNIT}) OVER ({PARTITION} {ORDER} {FRAME})
```

| Parameter | Description | 
| --------- | ----------- |
| `{TIMESTAMP}` | A timestamp field found in the dataset populated on all events. |
| `{EVENT_DEFINITION}` | The expression to qualify the next event. |
| `{TIME_UNIT}` | (Optional) The unit of output. Possible value include days, hours, minutes, and seconds. By default, the value is seconds. |

An explanation of the parameters within the `OVER()` function can be found in the [window functions section](#window-functions). 

**Example query**

```sql
SELECT 
  page_name,
  SUM (time_between_next_match) / COUNT(page_name) as average_minutes_until_order_confirmation
FROM
(
SELECT 
  endUserIds._experience.mcid.id as id, 
  timestamp, web.webPageDetails.name as page_name, 
  TIME_BETWEEN_NEXT_MATCH(timestamp, web.webPageDetails.name='Shopping Cart|Order Confirmation', 'minutes')
    OVER(PARTITION BY endUserIds._experience.mcid.id
       ORDER BY timestamp
       ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING)
    AS time_between_next_match
FROM experience_events
)
WHERE time_between_next_match IS NOT NULL
GROUP BY page_name
ORDER BY average_minutes_until_order_confirmation DESC
LIMIT 10
```

**Results**

```console
             page_name             | average_minutes_until_order_confirmation 
-----------------------------------+------------------------------------------
 Shopping Cart|Order Confirmation  |                                      0.0
 Men                               |                       -9.465295629820051
 Equipment                         |                       -9.682098765432098
 Product List                      |                       -9.690661478599221
 Women                             |                       -9.759459459459459
 Seasonal                          |                                  -10.295
 Shopping Cart|Order Review        |                      -366.33567364956144
 Unlimited Blog|February           |                       -615.0327868852459
 Shopping Cart|Billing Information |                       -775.6200495367711
 Product Details|Buffalo           |                      -1274.9571428571428
(10 rows)
```

For the sample query given, the results are given in the `average_minutes_until_order_confirmation` column. The value within the `average_minutes_until_order_confirmation` column is the difference in time between the current and next events. The unit of time was defined previously in the `{TIME_UNIT}`.

## Next steps

Using the functions described here, you can write queries to access your own [!DNL Experience Event] datasets using [!DNL Query Service]. For more information about authoring queries in [!DNL Query Service], see the documentation on [creating queries](../creating-queries/creating-queries.md).

## Additional resources

The following video shows how to run queries in the Adobe Experience Platform interface and in a PSQL client. Additionally, the video also uses examples involving individual properties in an XDM object, using Adobe-defined functions, and using CREATE TABLE AS SELECT (CTAS).

>[!VIDEO](https://video.tv.adobe.com/v/29796?quality=12&learn=on)