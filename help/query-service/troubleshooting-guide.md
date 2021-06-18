---
keywords: Experience Platform;home;popular topics;query service;Query service;troubleshooting guide;faq;troubleshooting;
solution: Experience Platform
title: Query Service Troubleshooting Guide
topic-legacy: troubleshooting
description: This document contains information on common error codes you encounter and the possible causes.
exl-id: 14cdff7a-40dd-4103-9a92-3f29fa4c0809
---
# [!DNL Query Service] troubleshooting guide

## Frequently asked questions

The following section lists out commonly asked questions for Query Service, as well as solutions to resolve these issues.

### How can I get only the metadata for a query?

To get only the metadata for a query, you can run a query that returns zero rows, as follows:

```sql
SELECT * FROM <table> WHERE 1=0
```

This query will only return the metadata for the specified table.

### How can I quickly experiment on a query? How can I validate a query is functional?

You can create temporary tables to quickly iterate and experiment on a query before materializing it for use.

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
FROM temp_dataset a
WHERE timestamp >= To_timestamp('2021-01-21 12:00:00')
AND timestamp < To_timestamp('2021-01-21 13:00:00')
LIMIT 100;
```

### How should I filter my time series data?

When querying with time series data, you should use the timestamp filter whenever possible for more accurate analysis.

An example of using the timestamp filter can be seen below:

```sql
SELECT a._company  AS _company,
       a._id       AS _id,
       a.timestamp AS timestamp
FROM   dataset a
WHERE  timestamp >= To_timestamp('2021-01-21 12:00:00')
       AND timestamp < To_timestamp('2021-01-21 13:00:00')
```

### Can I get all of the data from my rows?

You cannot get all the data from your rows, as Query Service is a **columnar** based system, and not a row-based system.

## REST API errors

| HTTP Status Code | Description | Possible Causes |
| ---------------- | ----------- | --------------- |
| 400 | Bad request | Malformed or illegal query |
| 401 | Authentication failed | Invalid auth token |
| 500 | Internal server error | Internal system failure |

## PostgreSQL API errors

| Error Code and Connection State | Description | Possible Cause |
| ------------------------------- | ----------- | -------------- |
| **28P01** Start-up - authentication | Invalid password | Invalid authentication token |
| **28000** Start-up - authentication | Invalid authorization type | Invalid authorization type. Must be `AuthenticationCleartextPassword`. |
| **42P12** Start-up - authentication | No tables found | No tables found for use |
| **42601** Query | Syntax error | Invalid command or syntax error |
| **58000** Query | System error | Internal system failure |
| **42P01** Query | Table not found | Table specified in the query was not found |
| **42P07** Query | Table exists | Table already exists with the same name (CREATE TABLE) |
| **53400** Query | LIMIT exceeds max value | User specified a LIMIT clause higher than 100,000 |
| **53400** Query | Statement timeout | The live statement submitted took more than the maximum of 10 minutes |
| **08P01** N/A | Unsupported message type | Unsupported message type |
