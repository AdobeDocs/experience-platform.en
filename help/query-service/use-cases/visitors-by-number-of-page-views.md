---
keywords: Experience Platform;home;popular topics;query service;Query service;experienceevent queries;experienceevent query;Experience Event query;
title: List Visitors by Their Number of Page Views
description: Learn how to write queries that use Experience Events to retrieve a list of visitors organized by the number of page views.
---
# List visitors by their number of page views

This document provides an example of the SQL required to retrieve a list of visitors organized by the number of page views. With Adobe Experience Platform Query Service, you can write queries that use [!DNL Experience Events] to capture a variety of use cases. Experience Events are represented by the Experience Data Model (XDM) ExperienceEvent class, which captures an immutable and non-aggregated snapshot of the system when a user interacts with a website or service. Experience Events can even be used for time-domain analysis. See the [next steps section](#next-steps) for more use cases that involve [!DNL Experience Events] to generate visitor reports.

More information about XDM and [!DNL Experience Events] can be found in the [[!DNL XDM System] overview](../../xdm/home.md). By combining Query Service with [!DNL Experience Events], you can effectively track behavioral trends amongst your users. The following document provides examples of queries involving [!DNL Experience Events].

## Objective

The following example creates a report that lists the 10 IDs of the users who have viewed the most pages.

```sql
SELECT 
endUserIds._experience.aaid.id, 
SUM(web.webPageDetails.pageviews.value) as pageViews 
FROM your_analytics_table
GROUP BY endUserIds._experience.aaid.id 
ORDER BY pageViews DESC
LIMIT 10;
```

The query results are displayed in the table below.

```console
               id                  | pageViews
-----------------------------------+-----------
 457C3510571E5930-69AA721C4CBF9339 |     706.0
 776F85658792C017-6491FE6570382A01 |     700.0
 6BEC9C6AB52E779F-28F5B023113F2C85 |     654.0
 1C0CCFB2DC63611E-6E4A4D4142AEB613 |     642.0
 112EE9A6F3BE29D1-514A6C355A2C9EF6 |     629.0
 CCC75A0E6AC7F2FA-11D58515D370F626 |     624.0
 749F850A44153120-3710C53FA2162349 |     614.0
 2B668C6DDDAF0C505-92EDCC072F7CDDA |     587.0
 7EB7257335935320-101921AF45111FE6 |     586.0
 5F4759CA80DCA9C9-2C0DA93D80D9DBFA |     586.0
(10 rows)
```

## Next steps {#next-steps}

By reading this document, you have a better understanding of how to use Query Service with [!DNL Experience Events] to list users who have viewed the most pages. 

See the following use cases to learn about other visitor based used cases:

- [List a visitor's previous sessions.](./list-visitor-sessions.md)
- [View a roll-up report of a visitor.](./roll-up-report-of-a-visitor.md)
- [Create a trended report of events by day.](./trended-report-of-events.md)
