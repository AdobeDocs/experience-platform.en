---
keywords: Experience Platform;home;popular topics;query service;Query service;troubleshooting guide;faq;troubleshooting;
solution: Experience Platform
title: Query Service Troubleshooting Guide
topic-legacy: troubleshooting
description: This document contains information on common error codes you encounter and the possible causes.
exl-id: 14cdff7a-40dd-4103-9a92-3f29fa4c0809
---
# [!DNL Query Service] troubleshooting guide

This document provides answers to frequently asked questions about Query Service and provides a list of commonly seen error codes when using Query Service. For questions and troubleshooting related to other services in Adobe Experience Platform, please refer to the [Experience Platform troubleshooting guide](../landing/troubleshooting.md).

The following list of answers to frequently asked questions about Query Service divided into the following categories:

- [Query Editor](#query-editor)
- [Exporting Data](#exporting-data)
- [Third-party tools](#third-party-tools)

## Query Editor {#query-editor}

This section includes information on performance, limits, and processes.

### Can I turn off the auto-complete feature in the Query Service Editor?

No. Turning off the auto-complete feature is not currently supported by the platform.

### Why does the Query Editor sometimes become slow when I type in a query?

One potential causes is the auto-complete feature. The feature processes certain metadata commands that can occasionally slow the editor.

### Can I use Postman for Query Service API?

Yes, you can visualize and interact with all Adobe API services using Postman (a free, third-party application). Watch the [Postman setup guide](https://video.tv.adobe.com/v/28832) for step by-step instructions on how to set up a project in Adobe Developer Console and acquire all the necessary credentials for use with Postman. See the official documentation for [guidance on starting, running, and sharing Postman collections](https://learning.postman.com/docs/running-collections/intro-to-collection-runs/).

## Exporting Data {#exporting-data}

This section includes information on exporting data to activated destinations.

## Third-party tools {#third-party-tools}

This section includes information on the use of third-party tools such as PSQL and Power BI. 

### How can I get only the metadata for a query?

To get only the metadata for a query, you can run a query that returns zero rows, as follows:

```sql
SELECT * FROM <table> WHERE 1=0
```

This query returns only the metadata for the specified table.

### How can I quickly iterate on a CTAS (Create Table As Select) query without materializing it?

You can create temporary tables to quickly iterate and experiment on a query before materializing it for use. You can also use temporary tables to validate if a query is functional.

For example, you can create a temporary table:

```sql
CREATE temp TABLE temp_dataset AS
SELECT *
FROM actual_dataset
WHERE 1 = 0;
```

Then you can use the temporary table as follows: 

```sql
INSERT INTO temp_dataset
SELECT a._company AS _company,
a._id AS _id,
a.timestamp AS timestamp
FROM actual_dataset a
WHERE timestamp >= TO_TIMESTAMP('2021-01-21 12:00:00')
AND timestamp < TO_TIMESTAMP('2021-01-21 13:00:00')
LIMIT 100;
```

### How do I change the time zone to and from a UTC Timestamp?

Adobe Experience Platform persists data in UTC (Coordinated Universal Time) timestamp format. An example of the UTC format is `2021-12-22T19:52:05Z`

Query Service supports built-in SQL functions to convert a given timestamp to and from UTC format. Both the `to_utc_timestamp()` and the `from_utc_timestamp()` methods take two parameters: timestamp and timezone. 

| Parameter  | Description  |
|---|---|
| Timestamp  | The timestamp can be written in either UTC format or simple `{year-month-day}` format. If no time is provided, the default value is midnight on the morning of the given day.  |
| Timezone  |  The timezone is written in a `{continent/city})` format. It must be one of the recognized timezone codes as found in the [public-domain TZ database](https://data.iana.org/time-zones/tz-link.html#tzdb). |

#### Convert to the UTC timestamp

The `to_utc_timestamp()` method interprets the given parameters and converts it **to the timestamp of your local timezone** in UTC format. For example, the time zone in Seoul, South Korea is UTC/GMT +9 hours. By providing a date-only timestamp, the method uses a default value of midnight in the morning. The timestamp and timezone are converted into the UTC format from the time of that region to a UTC timestamp of your local region.

```SQL
SELECT to_utc_timestamp('2021-08-31', 'Asia/Seoul');
```

The query returns a timestamp in the user's local time. In this case, 3PM the previous day as Seoul is nine hours ahead.

```
2021-08-30 15:00:00
```

As another example, if the given timestamp was `2021-07-14 12:40:00.0` for the `Asia/Seoul` timezone, the returned UTC timestamp would be `2021-07-14 03:40:00.0`

The console output provided in the Query Service UI is a more human-readable format:

```
8/30/2021, 3:00 PM
```

#### Convert from the UTC timestamp

The `from_utc_timestamp()` method interprets the given parameters **from the timestamp of your local timezone** and provides the equivalent timestamp of the desired region in UTC format. In the example below, the hour is 2:40PM in the user's local timezone. The Seoul timezone passed as a variable is nine hours ahead of the local timezone.

```SQL
SELECT from_utc_timestamp('2021-08-31 14:40:00.0', 'Asia/Seoul');
```

The query returns a timestamp in UTC format for the timezone passed as a parameter. The result is nine hours ahead of the timezone that ran the query.

```
8/31/2021, 11:40 PM
```

### How should I filter my time-series data?

When querying with time-series data, you should use the timestamp filter whenever possible for more accurate analysis.

>[!NOTE]
>
> The date string **must** be in the format `yyyy-mm-ddTHH24:MM:SS`. 

An example of using the timestamp filter can be seen below:

```sql
SELECT a._company  AS _company,
       a._id       AS _id,
       a.timestamp AS timestamp
FROM   dataset a
WHERE  timestamp >= To_timestamp('2021-01-21 12:00:00')
       AND timestamp < To_timestamp('2021-01-21 13:00:00')
```

### Should I use wildcards, such as * to get all the rows from my datasets?

You cannot use wildcards to get all the data from your rows, as Query Service should be treated as a **columnar-store** rather than a traditional row-based store system.

### Should I use `NOT IN` in my SQL query?

The `NOT IN` operator is often used to retrieve rows that are not found in another table or SQL statement. This operator can slow down performance and may return unexpected results if the columns that are being compared accept `NOT NULL`, or you have large numbers of records.

Instead of using `NOT IN`, you can use either `NOT EXISTS` or `LEFT OUTER JOIN`.

For example, if you have the following tables created:

```sql
CREATE TABLE T1 (ID INT)
CREATE TABLE T2 (ID INT)
INSERT INTO T1 VALUES (1)
INSERT INTO T1 VALUES (2)
INSERT INTO T1 VALUES (3)
INSERT INTO T2 VALUES (1)
INSERT INTO T2 VALUES (2)
```

If you are using the `NOT EXISTS` operator, you can replicate using the `NOT IN` operator by using the following query:

```sql
SELECT ID FROM T1
WHERE NOT EXISTS
(SELECT ID FROM T2 WHERE T1.ID = T2.ID)
```

Alternatively, if you are using the `LEFT OUTER JOIN` operator, you can replicate using he `NOT IN` operator by using the following query:

```sql
SELECT T1.ID FROM T1
LEFT OUTER JOIN T2 ON T1.ID = T2.ID
WHERE T2.ID IS NULL
```

### What is the correct usage of the `OR` and `UNION` operators?

### How do I correctly use the `CAST` operator to convert my timestamps in SQL queries?

When using the `CAST` operator to convert a timestamp, you need to include both the date **and** time.

For example, missing the time component, as shown below, will result in an error:

```sql
SELECT * FROM ABC
WHERE timestamp = CAST('07-29-2021' AS timestamp)
```

A correct usage of the `CAST` operator is shown below:

```sql
SELECT * FROM ABC
WHERE timestamp = CAST('07-29-2021 00:00:00' AS timestamp)
```

### How can I download my query results as a CSV file?

This is not a feature that Query Service offers directly. However, if the [!DNL PostgreSQL] client used to connect to the database server has the capability, the response of a SELECT query can be written and downloaded as a CSV file. Please refer to the documentation of the utility or third-party tool that you are using for clarification on this process.

## REST API errors

| HTTP status code | Description | Possible causes |
| ---------------- | ----------- | --------------- |
| 400 | Bad request | Malformed or illegal query |
| 401 | Authentication failed | Invalid auth token |
| 500 | Internal server error | Internal system failure |

## PostgreSQL API errors

| Error code | Connection state | Description | Possible cause |
| ---------- | ---------------- | ----------- | -------------- |
| **08P01** | N/A | Unsupported message type | Unsupported message type |
| **28P01** | Start-up - authentication | Invalid password | Invalid authentication token |
| **28000** | Start-up - authentication | Invalid authorization type | Invalid authorization type. Must be `AuthenticationCleartextPassword`. |
| **42P12** | Start-up - authentication | No tables found | No tables found for use |
| **42601** | Query | Syntax error | Invalid command or syntax error |
| **42P01** | Query | Table not found | Table specified in the query was not found |
| **42P07** | Query | Table exists | A table with the same name already exists (CREATE TABLE) |
| **53400** | Query | LIMIT exceeds max value | User specified a LIMIT clause higher than 100,000 |
| **53400** | Query | Statement timeout | The live statement submitted took more than the maximum of 10 minutes |
| **58000** | Query | System error | Internal system failure |
| **0A000** | Query/Command | Not supported | The feature/functionality in the query/command is not supported |
| **42501** | DROP TABLE Query | Dropping table not created by Query Service | The table that is being dropped was not created by Query Service using the `CREATE TABLE` statement |
| **42501** | DROP TABLE Query | Table not created by the authenticated user | The table that is being dropped was not created by the currently logged in user |
| **42P01** | DROP TABLE Query | Table not found | The table specified in the query was not found |
| **42P12** | DROP TABLE Query | No table found for `dbName`: please check the `dbName` | No tables were found in the current database |
