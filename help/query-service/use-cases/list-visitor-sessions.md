---
keywords: Experience Platform;home;popular topics;query service;Query service;experienceevent queries;experienceevent query;Experience Event query;
title: List the Page Views of a User
description: Learn how to write queries that use Experience Events to create a list of the last 100 pages that a specified user has used.
exl-id: d831910d-d3a4-4a5a-b897-b09f0546dab0
---
# List the page views of a user

This document provides an example of the SQL required to list the page views a specified user. With Adobe Experience Platform Query Service, you can write queries that use [!DNL Experience Events] to capture a variety of use cases. Experience Events are represented by the Experience Data Model (XDM) ExperienceEvent class, which captures an immutable and non-aggregated snapshot of the system when a user interacts with a website or service. Experience Events can even be used for time-domain analysis. See the [next steps section](#next-steps) for more use cases that involve [!DNL Experience Events] to generate visitor reports.

More information about XDM and [!DNL Experience Events] can be found in the [[!DNL XDM System] overview](../../xdm/home.md). By combining Query Service with [!DNL Experience Events], you can effectively track behavioral trends amongst your users. The following document provides examples of queries involving [!DNL Experience Events].

## Objective

The following example lists the last 100 pages that a specified user has viewed.

```sql
SELECT 
timestamp, 
web.webReferrer.type as referrerType, 
web.webReferrer.URL as referrer, 
web.webPageDetails.name as pageName, 
_experience.analytics.event1to100.event1.value as A, 
_experience.analytics.event1to100.event2.value as B, 
_experience.analytics.event1to100.event3.value as C, 
web.webPageDetails.pageviews.value as pageViews
FROM your_analytics_table 
WHERE endUserIds._experience.aaid.id = '457C3510571E5930-69AA721C4CBF9339' 
ORDER BY timestamp 
LIMIT 100;
```

The results of this query can be seen below.

```console
      timestamp       |  referrerType  |                            referrer                                |                 pageName            |  A  |  B  |  C  | pageViews
----------------------+----------------+--------------------------------------------------------------------+-------------------------------------+-----+-----+-----+--------------
2019-11-08 17:15:28.0 | typed_bookmark |                                                                    |                                     |     |     |     |
2019-11-08 17:53:05.0 | social         | http://www.reddit.com                                              | Home                                |     |     |     |          1.0
2019-11-08 17:53:45.0 | typed_bookmark |                                                                    | Kids                                |     |     |     |          1.0
2019-11-08 19:22:34.0 | typed_bookmark |                                                                    |                                     |     |     |     |          
2019-11-08 20:01:12.0 | search_engine  | http://www.google.com/search?ie=UTF-8&q=laundry parkas&cid=sem:115 | Home                                |     |     |     |          1.0 
2019-11-08 20:01:57.0 | typed_bookmark |                                                                    | Kids                                |     |     |     |          1.0
2019-11-08 20:03:36.0 | typed_bookmark |                                                                    | Search Results                      | 1.0 |     |     |          1.0
2019-11-08 20:04:30.0 | typed_bookmark |                                                                    | Product Details: Pemmican Power Bar |     |     |     |          1.0
2019-11-08 20:05:27.0 | typed_bookmark |                                                                    | Shopping Cart: Cart Details         |     |     |     |          1.0
2019-11-08 20:06:07.0 | typed_bookmark |                                                                    | Shopping Cart: Shipping Information |     |     |     |          1.0
2019-11-08 20:07:02.0 | typed_bookmark |                                                                    | Shopping Cart: Billing Information  |     |     | 1.0 |          1.0
2019-11-08 20:07:52.0 | typed_bookmark |                                                                    | Shopping Cart: Order Review         |     |     |     |          1.0
2019-11-08 20:08:45.0 | typed_bookmark |                                                                    | Order Confirmation                  |     |     |     |          1.0
2019-11-08 20:09:24.0 | typed_bookmark |                                                                    | Home                                |     |     |     |          1.0
2019-11-08 20:10:03.0 | typed_bookmark |                                                                    | Editorial Page: Camping Essentials  |     |     |     |          1.0
2019-11-08 20:11:01.0 | typed_bookmark |                                                                    | Account Registration|Form           |     |     |     |          1.0
2019-11-08 20:11:38.0 | typed_bookmark |                                                                    | Seasonal Sale                       |     |     |     |          1.0
2019-11-08 20:12:10.0 | typed_bookmark |                                                                    | Blog: Iris Sagan                    |     |     |     |          1.0
2019-11-08 20:13:09.0 | typed_bookmark |                                                                    | Product Details: UltraTech Socks    |     |     |     |          1.0
2019-11-08 20:14:05.0 | typed_bookmark |                                                                    | Seasonal Sale                       |     |     |     |          1.0
```

## Next steps {#next-steps}

By reading this document, you have a better understanding of how to use Query Service with [!DNL Experience Events] to list the page views as a specified user. 

See the following use cases to learn about other visitor based used cases:

- [Retrieve a list of visitors organized by number of page views.](./visitors-by-number-of-page-views.md)
- [View a roll-up report of a visitor.](./roll-up-report-of-a-visitor.md)
- [Create a trended report of events by day.](./trended-report-of-events.md)
