---
keywords: Experience Platform;home;popular topics;query service;Query service;writing queries;writing query;
solution: Experience Platform
title: Writing queries
topic: queries
type: Tutorial
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

```sql
SELECT endUserIds._experience.mcid
FROM {ANALYTICS_TABLE_NAME}
WHERE endUserIds._experience.mcid IS NOT NULL
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
LIMIT 1
```

```console 
     endUserIds._experience.mcid.id 
----------------------------------------
 48168239533518554367684086979667672499
(1 row)
```

## When to use single quotes, double quotes, and back quotes

This section explains when to use single quotes, double quotes, and back quotes in queries. 

### Single quotes

The single quote (`'`) is used to create text strings. For example, it can be used in the `SELECT` statement to return a static text value in the result, and in the `WHERE` clause to evaluate the content of a column.

The following query declares a static text value (`'datasetA'`) for a column:

```sql
SELECT 
  'datasetA',
  timestamp,
  web.webPageDetails.name
FROM {ANALYTICS_TABLE_NAME}
LIMIT 10
```

The following query uses a single-quoted string (`'homepage'`) in its WHERE clause to return events for a specific page.

```sql
SELECT 
  timestamp,
  endUserIds._experience.mcid.id
FROM {ANALYTICS_TABLE_NAME}
WHERE web.webPageDetails.name = 'homepage'
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
LIMIT 10
```

Back quotes are also used to access a field that starts with a number. For example, to access the field `30_day_value`, you would need to use back quote notation.

```SQL
SELECT
    commerce.`30_day_value`
FROM {ANALYTICS_TABLE_NAME}
LIMIT 10
```

Back quotes are **not** needed if you are using bracket-notation.

```sql
 SELECT
  commerce['order']
 FROM {ANALYTICS_TABLE_NAME}
 LIMIT 10
```

## Next steps

By reading this document, you have been introduced to some important considerations when writing queries using [!DNL Query Service]. For more information on how to use the SQL syntax to write your own queries, please read the [SQL syntax documentation](../sql/syntax.md).