---
title: Guidance to Convert your Time Zone to and from a UTC Timestamp
type: Tutorial
description: This document explains how to change your current time zone to and from a UTC Timestamp format in Adobe Experience Platform Query Service.
---

# Time zone computations in Query Service

Query Service standardizes persisted data in Adobe Experience Platform using the UTC (Coordinated Universal Time)timestamp format. 

A UTC timestamp is displayed in the following format. 'Year/Month/DAY  Hour (24 hour) : Minutes : Seconds Z'. 'Z' in this case its the UTC offset. This offset is defined by the time zone of the geographical area and is one of 24 global time zones. 'Z' will be either 0 or a plus or minus integer.

An example of the UTC format is `2021-12-22T19:52:05Z`

Query service supports built-in Spark SQL functions to convert a given time stamp and render that time as a timestamp in UTC or return it to another format. The example queries provided in this document can be used in both the user interface and the Query Service API.

Both the from_utc_timestamp and the to_utc_timestamp method take two parameters. These variables are the date in year-month-day format and the continent and city separated by a `/`.

## Convert from the UTC timestamp

The following query provides an example of how to convert a timestamp from the UTC format.

```SQL
SELECT from_utc_timestamp('2016-08-31', 'Asia/Seoul');
```

The query returns a timestamp in UTC timestamp format.

```
2016-08-31 09:00:00
```

## Convert to the UTC timestamp

This query provides an example of how to convert a timestamp to the UTC format.

```SQL
SELECT to_utc_timestamp('2016-08-31', 'Asia/Seoul');
```

The query returns the following timestamp.

```
2016-08-30 15:00:00
```

## Next steps

After reading this document you have a better understanding of how to convert time stamps into the UTC format supported by query service, and revert them to their previous format. For more information on Query service best practices please see the documentation on [general guidance for query execution](./writing-queries.md).
