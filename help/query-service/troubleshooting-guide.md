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
