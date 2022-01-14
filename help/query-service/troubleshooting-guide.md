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

## Frequently asked questions

The following is a list of answers to commonly asked questions about Query Service.

### How can I get only the metadata for a query?

To get only the metadata for a query, you can run a query that returns zero rows, as follows:

```sql
SELECT * FROM <table> WHERE 1=0
```

This query returns only the metadata for the specified table.

### How can I quickly iterate on a CTAS (Create Table as Select) query without materializing it?

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

This is not a feature that Query Service offers directly. However, if the PSQL client used to connect to the database server has the capability, the response of a SELECT query can be written and downloaded as a CSV file. Please refer to the documentation of the utility or third-party tool that you are using for clarification on this process.

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
