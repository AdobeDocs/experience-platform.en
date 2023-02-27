---
keywords: Experience Platform;home;popular topics;query service;Query service;experienceevent queries;experienceevent query;Experience Event query;
title: Create a Trended Report of Events
description: Learn how to write queries that use Experience Events to create a trended report of events over a specified date range, grouped by date.
---
# Create a trended report of events

This document provides an example of the SQL required to create a trended report of events by day over a specific date range. With Adobe Experience Platform Query Service, you can write queries that use [!DNL Experience Events] to capture a variety of use cases. Experience Events are represented by the Experience Data Model (XDM) ExperienceEvent class, which captures an immutable and non-aggregated snapshot of the system when a user interacts with a website or service. Experience Events can even be used for time-domain analysis. See the [next steps section](#next-steps) for more use cases that involve [!DNL Experience Events] to generate visitor reports.

Reports give you access to your Platform data to benefit your organization's strategic business insights. With these reports, you can examine your Platform data in a variety of ways, display key metrics in easy-to-understand formats, and share the resulting insights. 

More information about XDM and [!DNL Experience Events] can be found in the [[!DNL XDM System] overview](../../xdm/home.md). By combining Query Service with [!DNL Experience Events], you can effectively track behavioral trends amongst your users. The following document provides examples of queries involving [!DNL Experience Events].

## Objectives

The following example creates a trended report of events over a specified date range, grouped by date. Specifically, this SQL example sums up various analytics values as `A`, `B`, and `C`, and then sums up the number of times parkas have been viewed over the period of a month.

The timestamp column found in [!DNL Experience Event] datasets is in UTC format. The example uses the `from_utc_timestamp()` function to transform the timestamp from UTC to EDT and then uses the `date_format()` function to isolate the date from the rest of the timestamp.

```sql
SELECT 
date_format( from_utc_timestamp(timestamp, 'EDT') , 'yyyy-MM-dd') as Day,
SUM(web.webPageDetails.pageviews.value) as pageViews,
SUM(_experience.analytics.event1to100.event1.value) as A,
SUM(_experience.analytics.event1to100.event2.value) as B,
SUM(_experience.analytics.event1to100.event3.value) as C,
SUM(
    CASE 
    WHEN _experience.analytics.customDimensions.evars.evar1 = 'parkas' 
    THEN 1 
    ELSE 0 
    END) as viewedParkas
FROM your_analytics_table 
WHERE TIMESTAMP >= to_timestamp('2019-03-01') AND TIMESTAMP <= to_timestamp('2019-03-31')
GROUP BY Day 
ORDER BY Day ASC, pageViews DESC;
```

The results of this query can be seen below.

```console
     Day     | pageViews |   A    |   B   |    C    | viewedParkas
-------------+-----------+--------+-------+---------+--------------
 2019-03-01  |   55317.0 | 8503.0 | 804.0 | 1578.0  |           73
 2019-03-02  |   55302.0 | 8600.0 | 854.0 | 1528.0  |           86
 2019-03-03  |   54613.0 | 8162.0 | 795.0 | 1568.0  |          100
 2019-03-04  |   54501.0 | 8479.0 | 832.0 | 1509.0  |          100
 2019-03-05  |   54941.0 | 8603.0 | 816.0 | 1514.0  |           73
 2019-03-06  |   54817.0 | 8434.0 | 855.0 | 1538.0  |           76
 2019-03-07  |   55201.0 | 8604.0 | 843.0 | 1517.0  |           64
 2019-03-08  |   55020.0 | 8490.0 | 849.0 | 1536.0  |           99
 2019-03-09  |   43186.0 | 6736.0 | 643.0 | 1150.0  |           52
 2019-03-10  |   48471.0 | 7542.0 | 772.0 | 1272.0  |           70
 2019-03-11  |   56307.0 | 8721.0 | 818.0 | 1571.0  |           81
 2019-03-12  |   55374.0 | 8653.0 | 843.0 | 1501.0  |           59
 2019-03-13  |   55046.0 | 8509.0 | 887.0 | 1556.0  |           65
 2019-03-14  |   55518.0 | 8551.0 | 848.0 | 1516.0  |           77
 2019-03-15  |   55329.0 | 8575.0 | 818.0 | 1607.0  |           96
 2019-03-16  |   55030.0 | 8651.0 | 815.0 | 1542.0  |           66
 2019-03-17  |   55143.0 | 8435.0 | 774.0 | 1572.0  |           65
 2019-03-18  |   54065.0 | 8211.0 | 816.0 | 1574.0  |          111
 2019-03-19  |   55097.0 | 8395.0 | 771.0 | 1498.0  |           86
 2019-03-20  |   55198.0 | 8472.0 | 863.0 | 1583.0  |           82
 2019-03-21  |   54978.0 | 8490.0 | 820.0 | 1580.0  |           83
 2019-03-22  |   55464.0 | 8561.0 | 820.0 | 1559.0  |           83
 2019-03-23  |   55384.0 | 8482.0 | 800.0 | 1139.0  |           82
 2019-03-24  |   55295.0 | 8594.0 | 841.0 | 1382.0  |           78
 2019-03-25  |   42069.0 | 6365.0 | 606.0 | 1509.0  |           62
 2019-03-26  |   49724.0 | 7629.0 | 724.0 | 1553.0  |           44
 2019-03-27  |   55111.0 | 8524.0 | 804.0 | 1524.0  |           94
 2019-03-28  |   55030.0 | 8439.0 | 822.0 | 1554.0  |           73
 2019-03-29  |   55281.0 | 8601.0 | 854.0 | 1580.0  |           73
 2019-03-30  |   55162.0 | 8538.0 | 846.0 | 1534.0  |           79
 2019-03-31  |   55437.0 | 8486.0 | 807.0 | 1649.0  |           68
 (31 rows)
```

## Next steps {#next-steps}

By reading this document, you have a better understanding of how to use Query Service with [!DNL Experience Events] to effectively track behavioral trends amongst your users. 

To learn about other visitor based use cases that use [!DNL Experience Events], read the following documents:

- [Retrieve a list of visitors organized by number of page views.](./visitors-by-number-of-page-views.md)
- [List a visitor's previous sessions.](./list-visitor-sessions.md)
- [View a roll-up report of a visitor.](./roll-up-report-of-a-visitor.md)
