---
keywords: Experience Platform;home;popular topics;query service;Query service;writing queries;writing query;
solution: Experience Platform
title: General Guidance for Query Execution in Query Service
topic-legacy: queries
type: Tutorial
description: This document outlines important details to know when writing queries in Adobe Experience Platform Query Service.
exl-id: a7076c31-8f7c-455e-9083-cbbb029c93bb
---
# General guidance for query execution in [!DNL Query Service]

This document details important details to know when writing queries in Adobe Experience Platform [!DNL Query Service].

For detailed information on the SQL syntax used in [!DNL Query Service], please read the [SQL syntax documentation](../sql/syntax.md).

## Query execution models

Adobe Experience Platform [!DNL Query Service] has two models of query execution: interactive and non-interactive. Interactive execution is used for query development and report generation in business intelligence tools, while non-interactive is used for larger jobs and operational queries as a part of a data processing workflow.

### Interactive query execution

Queries can be executed interactively by submitting them through the [!DNL Query Service] UI or [through a connected client](../clients/overview.md). When running [!DNL Query Service] through a connected client, an active session runs between the client and [!DNL Query Service] until either the submitted query returns or times out.

Interactive query execution has the following limitations:

| Parameter | Limitation |
| --------- | ---------- |
| Query timeout | 10 minutes |
| Maximum rows returned | 50,000 | 
| Maximum concurrent queries | 5 |

>[!NOTE]
>
>To override the maximum rows limitation, include `LIMIT 0` in your query. The query timeout of 10 minutes still applies. 

By default, the results of interactive queries are returned to the client and are **not** persisted. In order to persist the results as a dataset in [!DNL Experience Platform], the query must use the `CREATE TABLE AS SELECT` syntax.

### Non-interactive query execution

Queries submitted through the [!DNL Query Service] API are run non-interactively. Non-interactive execution means that [!DNL Query Service] receives the API call and executes the query in the order it is received. Non-interactive queries always result in either the generation of a new dataset in [!DNL Experience Platform] to receive the results, or the insertion of new rows into an existing dataset. 

## Accessing a specific field within an object

To access a field within an object in your query, you can use either dot notation (`.`) or bracket notation (`[]`). The following SQL statement uses dot notation to traverse the `endUserIds` object down to the `mcid` object.

>[!NOTE]
>
>The Experience Cloud ID (ECID) is also known as MCID and continues to be used in namespaces.

```sql
SELECT endUserIds._experience.mcid
FROM {ANALYTICS_TABLE_NAME}
WHERE endUserIds._experience.mcid IS NOT NULL
AND TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}')
LIMIT 1
```

| Property | Description |
| -------- | ----------- |
| `{ANALYTICS_TABLE_NAME}` | The name of your analytics table. |

The following SQL statement uses bracket notation to traverse the `endUserIds` object down to the `mcid` object. 

```sql
SELECT endUserIds['_experience']['mcid']
FROM {ANALYTICS_TABLE_NAME}
WHERE endUserIds._experience.mcid IS NOT NULL
AND TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}')
LIMIT 1
```

| Property | Description |
| -------- | ----------- |
| `{ANALYTICS_TABLE_NAME}` | The name of your analytics table. |

>[!NOTE]
>
>Since each notation type returns the same results, the one you choose to use is up to your preference.

Both of the example queries above return a flattened object, rather than a single value:

```console
              endUserIds._experience.mcid   
--------------------------------------------------------
 (48168239533518554367684086979667672499,"(ECID)",true)
(1 row)
```

The returned `endUserIds._experience.mcid` object contains the corresponding values for the following parameters:

- `id`
- `namespace`
- `primary`

When the column is only declared down to the object, it returns the entire object as a string. To view only the ID, use:

```sql
SELECT endUserIds._experience.mcid.id
FROM {ANALYTICS_TABLE_NAME}
WHERE endUserIds._experience.mcid IS NOT NULL
AND TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}')
LIMIT 1
```

```console 
     endUserIds._experience.mcid.id 
----------------------------------------
 48168239533518554367684086979667672499
(1 row)
```

## Quotes

Single quotes, double quotes, and back quotes have different usages within Query Service queries.

### Single quotes

The single quote (`'`) is used to create text strings. For example, it can be used in the `SELECT` statement to return a static text value in the result, and in the `WHERE` clause to evaluate the content of a column.

The following query declares a static text value (`'datasetA'`) for a column:

```sql
SELECT 
  'datasetA',
  timestamp,
  web.webPageDetails.name
FROM {ANALYTICS_TABLE_NAME}
WHERE TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}')
LIMIT 10
```

The following query uses a single-quoted string (`'homepage'`) in its WHERE clause to return events for a specific page.

```sql
SELECT 
  timestamp,
  endUserIds._experience.mcid.id
FROM {ANALYTICS_TABLE_NAME}
WHERE web.webPageDetails.name = 'homepage'
AND TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}')
LIMIT 10
```

### Double quotes

The double quote (`"`) is used to declare an identifier with spaces.

The following query uses double quotes to return values from specified columns when one column contains a space in its identifier:

```sql
SELECT
  no_space_column,
  "space column"
FROM
( SELECT 
    'column1' as no_space_column,
    'column2' as "space column"
)
```

>[!NOTE]
>
>Double quotes **cannot** be used with dot notation field access. 

### Back quotes

The back quote `` ` `` is used to escape reserved column names **only** when using  dot notation syntax. For example, since `order` is a reserved word in SQL, you must use back quotes to access the field `commerce.order`:

```sql
SELECT 
  commerce.`order`
FROM {ANALYTICS_TABLE_NAME}
WHERE TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}')
LIMIT 10
```

Back quotes are also used to access a field that starts with a number. For example, to access the field `30_day_value`, you would need to use back quote notation.

```SQL
SELECT
    commerce.`30_day_value`
FROM {ANALYTICS_TABLE_NAME}
WHERE TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}')
LIMIT 10
```

Back quotes are **not** needed if you are using bracket-notation.

```sql
 SELECT
  commerce['order']
 FROM {ANALYTICS_TABLE_NAME}
 WHERE TIMESTAMP = to_timestamp('{TARGET_YEAR}-{TARGET_MONTH}-{TARGET_DAY}')
 LIMIT 10
```

## Viewing table information

After connecting to Query Service, you can see all your available tables on Platform by using either the `\d` or `SHOW TABLES` commands.

### Standard table view

The `\d` command shows the standard PostgreSQL view for listing tables. An example of this command's output can be seen below:

```sql
             List of relations
 Schema |       Name      | Type  |  Owner   
--------+-----------------+-------+----------
 public | luma_midvalues  | table | postgres
 public | luma_postvalues | table | postgres
(2 rows)
```

### Detailed table view

`SHOW TABLES` command is a custom command that provides more detailed information about the tables. An example of this command's output can be seen below:

```sql
       name      |        dataSetId         |     dataSet    | description | resolved 
-----------------+--------------------------+----------------+-------------+----------
 luma_midvalues  | 5bac030c29bb8d12fa992e58 | Luma midValues |             | false
 luma_postvalues | 5c86b896b3c162151785b43c | Luma midValues |             | false
(2 rows)
```

### Schema information 

To view more detailed information about the schemas within the table, you can use the `\d {TABLE_NAME}` command, where `{TABLE_NAME}` is the name of the table whose schema information you want to view.

The following example shows the schema information for the `luma_midvalues` table, which would be seen by using `\d luma_midvalues`:

```sql
                         Table "public.luma_midvalues"
      Column       |             Type            | Collation | Nullable | Default 
-------------------+-----------------------------+-----------+----------+---------
 timestamp         | timestamp                   |           |          | 
 _id               | text                        |           |          | 
 productlistitems  | anyarray                    |           |          | 
 commerce          | luma_midvalues_commerce     |           |          | 
 receivedtimestamp | timestamp                   |           |          | 
 enduserids        | luma_midvalues_enduserids   |           |          | 
 datasource        | datasource                  |           |          | 
 web               | luma_midvalues_web          |           |          | 
 placecontext      | luma_midvalues_placecontext |           |          | 
 identitymap       | anymap                      |           |          | 
 marketing         | marketing                   |           |          | 
 environment       | luma_midvalues_environment  |           |          | 
 _experience       | luma_midvalues__experience  |           |          | 
 device            | device                      |           |          | 
 search            | search                      |           |          | 
```

Additionally, you can get further information about a particular column by appending the name of the column to the table name. This would be written in the format `\d {TABLE_NAME}_{COLUMN}`.

The following example shows additional information for the `web` column, and would be invoked by using the following command: `\d luma_midvalues_web`:

```sql
                 Composite type "public.luma_midvalues_web"
     Column     |               Type                | Collation | Nullable | Default 
----------------+-----------------------------------+-----------+----------+---------
 webpagedetails | luma_midvalues_web_webpagedetails |           |          | 
 webreferrer    | web_webreferrer                   |           |          | 
```

## Joining datasets

You can join multiple datasets together to include data from other datasets in your query.

The following example would join the following two datasets (`your_analytics_table` and `custom_operating_system_lookup`) and creates a `SELECT` statement for the top 50 operating systems by number of page views.

**Query**

```sql
SELECT 
  b.operatingsystem AS OperatingSystem,
  SUM(a.web.webPageDetails.pageviews.value) AS PageViews
FROM your_analytics_table a 
     JOIN custom_operating_system_lookup b 
      ON a._experience.analytics.environment.operatingsystemID = b.operatingsystemid 
WHERE TIMESTAMP >= TO_TIMESTAMP('2018-01-01') AND TIMESTAMP <= TO_TIMESTAMP('2018-12-31')
GROUP BY OperatingSystem 
ORDER BY PageViews DESC
LIMIT 50;
```

**Results**

| OperatingSystem | PageViews |
| --------------- | --------- |
| Windows 7 | 2781979.0 |
| Windows XP | 1669824.0 |
| Windows 8 | 420024.0 |
| Adobe AIR | 315032.0 |
| Windows Vista | 173566.0 |
| Mobile iOS 6.1.3 | 119069.0 |
| Linux | 56516.0 |
| OSX 10.6.8 | 53652.0 |
| Android 4.0.4 | 46167.0 |
| Android 4.0.3 | 31852.0 |
| Windows Server 2003 and XP x64 Edition | 28883.0 |
| Android 4.1.1 | 24336.0 |
| Android 2.3.6 | 15735.0 |
| OSX 10.6 | 13357.0 |
| Windows Phone 7.5 | 11054.0 |
| Android 4.3 | 9221.0 |

## Deduplication

Query Service supports data deduplication, or the removal of duplicate rows from data. For more information on deduplication, please read the [Query Service deduplication guide](./deduplication.md).

## Time zone computations in Query Service

Query Service standardizes persisted data in Adobe Experience Platform using the UTC timestamp format. For more information on how to translate your time zone requirement to and from a UTC timestamp, please see the [FAQ section on how to change the time zone to and from a UTC Timestamp](../troubleshooting-guide.md#How-do-I-change-the-time-zone-to-and-from-a-UTC-Timestamp?).

## Next steps

By reading this document, you have been introduced to some important considerations when writing queries using [!DNL Query Service]. For more information on how to use the SQL syntax to write your own queries, please read the [SQL syntax documentation](../sql/syntax.md).

For more samples of queries that can be used within Query Service, please read the following use case documentation:

- [Analytics insights](../use-cases/analytics-insights.md)
- [Activity analysis with Adobe Target](../use-cases/activity-analysis-with-adobe-target.md)
- [ExperienceEvent sample queries](../sample-queries/experience-event.md).
