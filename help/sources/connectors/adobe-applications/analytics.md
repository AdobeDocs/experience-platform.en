---
keywords: Experience Platform;home;popular topics;Analytics Source Connector;analytics;Analytics
solution: Experience Platform
title: Adobe Analytics Source Connector for Report-Suite Data
topic-legacy: overview
description: This document provides an overview of Analytics and describes the use-cases for Analytics data.
exl-id: c4887784-be12-40d4-83bf-94b31eccdc2e
---
# Adobe Analytics source connector for report-suite data

Adobe Experience Platform allows you to ingest Adobe Analytics data through the Analytics source connector. The [!DNL Analytics] source connector streams data collected by [!DNL Analytics] to Platform in real-time, converting SCDS-formatted [!DNL Analytics] data into [!DNL Experience Data Model] (XDM) fields for consumption by Platform.

This document provides an overview of [!DNL Analytics] and describes the use-cases for [!DNL Analytics] data.

## Adobe Analytics and Analytics data

[!DNL Analytics] is a powerful engine that helps you learn more about your customers, how they interact with your web properties, see where your digital marketing spend is effective, and identify areas of improvement. [!DNL Analytics] handles trillions of web-transactions per year and the [!DNL Analytics] source connector allows you to easily tap into this rich behavioral data and enrich the [!DNL Real-time Customer Profile] in a matter of minutes.

![](./images/analytics-data-experience-platform.png)

At a high level, [!DNL Analytics] collects data from various digital channels and multiple data centers around the world. Once the data is collected, Visitor Identification, Segmentation and Transformation Architecture (VISTA) rules, and processing rules are applied to shape the incoming data. After raw data has gone through this lightweight processing, it is then considered ready for consumption by [!DNL Real-time Customer Profile]. In a process parallel to the aforementioned, the same processed data is micro-batched and ingested into Platform datasets for consumption by [!DNL Data Science Workspace], [!DNL Query Service], and other data-discovery applications.

See the [processing rules overview](https://docs.adobe.com/content/help/en/analytics/admin/admin-tools/processing-rules/processing-rules.html) for more information on processing rules.

## Experience Data Model (XDM)

XDM is a publicly documented specification that provides common structures and definitions for an application to use to communicate with services on Experience Platform.

Adhering to XDM standards allows data to be uniformly incorporated, making it easier to deliver data and gather information.

To learn more about XDM, please see the [XDM System overview](../../../xdm/home.md).

## How are fields mapped from Adobe Analytics to XDM?

When a source connection is established for bringing [!DNL Analytics] data into Experience Platform using the Platform user interface, data fields are automatically mapped and ingested into [!DNL Real-time Customer Profile] within minutes. For instructions on creating a source connection with [!DNL Analytics] using the Platform UI, see the [Analytics source connector tutorial](../../tutorials/ui/create/adobe-applications/analytics.md).

For detailed information on the field mapping that occurs between [!DNL Analytics] and Experience Platform, see the [Adobe Analytics field mapping](./mapping/analytics.md) guide.

## What is the expected latency for Analytics Data on Platform?

| Analytics Data | Expected Latency |
| -------------- | ---------------- |
| New data to [!DNL Real-time Customer Profile] (A4T **not** enabled) | < 2 minutes |
| New data to [!DNL Real-time Customer Profile] (A4T **is** enabled) | < 15 minutes |
| New data to Data Lake | < 90 minutes |
| Backfill data (13 Months of Data or 10 Billion events, whichever is lower) | < 4 weeks |

>[!NOTE]
>
>Latency will vary depending on customer configuration, data volumes, and consumer applications. For example, if the [!DNL Analytics] implementation is configured with `A4T` the latency to Pipeline will increase to 5-10 minutes.

## Primary identifiers in [!DNL Analytics] data

Every hit from the [!DNL Analytics] source connector contains a primary identifier that is dependant on whether an ECID or an AAID exists. If there is an ECID, the ECID is designated as the primary identifier. If there is an AAID, then the AAID is designated as the primary.
