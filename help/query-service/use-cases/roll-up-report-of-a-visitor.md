---
keywords: Experience Platform;home;popular topics;query service;Query service;experienceevent queries;experienceevent query;Experience Event query;
title: View a roll-up report for a specific visitor
description: The following document provides examples of queries involving Experience Events in Adobe Experience Platform Query Service.
exl-id: 1348503f-65c1-41f9-b111-1284a49449a1
---
# View a roll-up report for a specific visitor

This document provides an SQL example to aggregate data from multiple analytics properties for a specific user and see that data together in one report. With Adobe Experience Platform Query Service, you can write queries that use [!DNL Experience Events] to capture a variety of use cases. Experience Events are represented by the Experience Data Model (XDM) ExperienceEvent class, which captures an immutable and non-aggregated snapshot of the system when a user interacts with a website or service. Experience Events can even be used for time-domain analysis. See the [next steps section](#next-steps) for more use cases that involve [!DNL Experience Events] to generate visitor reports.

More information about XDM and [!DNL Experience Events] can be found in the [[!DNL XDM System] overview](../../xdm/home.md). By combining Query Service with [!DNL Experience Events], you can effectively track behavioral trends amongst your users. The following document provides examples of queries involving [!DNL Experience Events].

## Objective

The following SQL example shows how to view an aggregate report of various analytics values for a specified user.

```sql
SELECT 
endUserIds._experience.aaid.id, 
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
WHERE endUserIds._experience.aaid.id = '457C3510571E5930-69AA721C4CBF9339' 
GROUP BY endUserIds._experience.aaid.id
ORDER BY pageViews DESC;
```

The query results are displayed in the table below.

```console
               id                 | pageViews |   A   |   B   |   C   | viewedParkas
----------------------------------+-----------+-------+-------+-------+--------------
457C3510571E5930-69AA721C4CBF9339 |     706.0 | 83.0  |  7.0  | 38.0  |          22
```

## Next steps {#next-steps}

By reading this document, you have a better understanding of how to use Query Service with [!DNL Experience Events] to view an aggregate report of analytics values for a specified user.

See the following use cases to learn about other visitor based used cases:

- [Retrieve a list of visitors organized by number of page views.](./visitors-by-number-of-page-views.md)
- [List a visitor's previous sessions.](./list-visitor-sessions.md)
- [Create a trended report of events by day.](./trended-report-of-events.md)
