---
title: Adobe Analytics source connector for report suite data
description: This document provides an overview of the Adobe Analytics source connector for Adobe Experience Platform.
exl-id: c4887784-be12-40d4-83bf-94b31eccdc2e
TQID: https://experienceleague.adobe.com/tn8xFuLHCbCI09BI92znF-tHumF9luCTeY8OCVDZcgQ
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
subfeature_v2:
  - id: b572b7ff-a413-4173-b2b4-d7d3874f1b9b
    internal-label: Best practices
  - id: b784da9a-7978-4766-bf1f-5ab2b23d894a
    internal-label: Federated Audience Composition
  - id: e5ae22e3-a3b0-46ed-804f-9abf1bbe3e74
    internal-label: Guardrails
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: c4147b6e-073b-4d3c-9ab1-d60f2f4434ef
    internal-label: Behavioral data
---
# Adobe Analytics source connector for report suite data

Adobe Experience Platform allows you to ingest Adobe Analytics data through the Analytics source connector. The connector streams report suite data into a Platform dataset in real time, converting it to XDM format.

## How the Analytics source connector works

You continue to use your existing Adobe Analytics implementation, such as AppMeasurement or the Adobe Analytics tag extension, to collect data into your report suites. The source connector does not change how you collect or report on that data. After your data reaches the Analytics data collection servers, the connector captures a copy of it.

![A graphic illustrating the journey of data from different Adobe applications, including Adobe Analytics.](./images/analytics-data-experience-platform.png)

This copy is a partially processed form of each hit, known as *mid-values*. Analytics produces mid-values after pre-processing (such as processing rules) but before visit- and visitor-level processing. As a result, they do not include post-processed context, such as visit number. The original hit continues through the pipeline to be written to your report suite as usual.

The connector streams these mid-values into a dataset in Experience Platform in real time. From the data lake, the data is available to Query Service and other data-discovery applications, and it can also enrich the Real-Time Customer Profile.

For details on how Analytics collects and processes data, including the mid-value stage, see [Processing order for data in Adobe Analytics](https://experienceleague.adobe.com/en/docs/analytics/technotes/processing-order).

## Mapping Adobe Analytics fields to XDM

When you create a source connection in the Experience Platform user interface, Analytics fields are automatically mapped to [XDM](/help/xdm/home.md) and ingested into a Platform dataset. For instructions, see the [Analytics source connector tutorial](../../tutorials/ui/create/adobe-applications/analytics.md).

For detailed information on the field mapping that occurs between Analytics and Experience Platform, see the [Adobe Analytics field mapping](./mapping/analytics.md) guide.

>[!IMPORTANT]
>
>Data Prep transformations can add latency to the overall dataflow. The amount of additional latency varies based on the complexity of the transformation logic.

## Primary identifiers in Analytics data

Every hit from the Analytics source connector contains a primary identifier that depends on whether an ECID or an AAID exists. If there is an ECID, the ECID is designated as the primary identifier. If there is an AAID, then the AAID is designated as the primary.

The following table provides more information on identity fields in your Analytics data.

| Identity field | Description |
| --- | --- |
| AAID | The AAID is the primary device identifier in Adobe Analytics and is guaranteed to exist on every event that is passed through the Analytics source. The AAID is sometimes referred to as the *Legacy Analytics ID* or as the `s_vi` cookie ID. Despite this, an AAID is created even if the `s_vi` cookie is not present. The AAID is represented by the `post_visid_high` and `post_visid_low` columns in [Analytics data feeds](https://experienceleague.adobe.com/docs/analytics/export/analytics-data-feed/data-feed-contents/datafeeds-reference.html). On any given event, the AAID field contains a single identity which may be one of the several different types described in the [order of operations for Analytics IDs](https://experienceleague.adobe.com/docs/id-service/using/reference/analytics-reference/analytics-order-of-operations.html). **Note**: Within an entire report suite, an AAID may contain a mix of types across events.|
| ECID | The ECID (Experience Cloud ID) is a separate device identifier field, which is populated in Adobe Analytics when Analytics is implemented using the Experience Cloud Identity Service. The ECID is sometimes also referred to as MCID (Marketing Cloud ID). If an ECID exists on an event, the AAID may be based on ECID depending on whether the Analytics [grace period](https://experienceleague.adobe.com/docs/id-service/using/reference/analytics-reference/grace-period.html) is configured. The ECID is represented by the `mcvisid` in Analytics data feeds. For more information on ECID, see the [ECID overview](/help/identity-service/features/ecid.md). For information on how ECID works with Analytics, see the document on [Analytics and Experience Cloud ID Requests](https://experienceleague.adobe.com/docs/id-service/using/reference/analytics-reference/legacy-analytics.html). |
| AACUSTOMID | The AACUSTOMID is a separate identifier field which is populated in Adobe Analytics based on the use of the [`visitorID`](https://experienceleague.adobe.com/en/docs/analytics/implementation/vars/config-vars/visitorid) variable in the Analytics implementation. If the AACUSTOMID is present, then the AAID is based on the AACUSTOMID because the AACUSTOMID trumps all other identifiers as defined by the [order of operations for Analytics IDs](https://experienceleague.adobe.com/docs/id-service/using/reference/analytics-reference/analytics-order-of-operations.html). |

### How the Analytics source treats identities

The Analytics source passes these identities to Experience Platform in XDM form as:

* `endUserIDs._experience.aaid.id`
* `endUserIDs._experience.mcid.id`
* `endUserIDs._experience.aacustomid.id`

These fields are not marked as identities. Instead, the same identities (if present in the event) are copied into XDM's `identityMap` as key-value pairs:

* `{ "key": "AAID", "value": [ { "id": "<identity>", "primary": <true or false> } ] }`
* `{ "key": "ECID", "value": [ { "id": "<identity>", "primary": <true or false> } ] }`
* `{ "key": "AACUSTOMID", "value": [ { "id": "<identity>", "primary": false } ] }`

When the identity or identities are copied into `identityMap`, `endUserIDs._experience.mcid.namespace.code` is also set on the same event:

* If AAID is present, `endUserIDs._experience.aaid.namespace.code` is set to "AAID".
* If ECID is present, `endUserIDs._experience.mcid.namespace.code` is set to "ECID".
* If AACUSTOMID is present, `endUserIDs._experience.aacustomid.namespace.code` is set to "AACUSTOMID".

In the identity map, if ECID is present, it is marked as the primary identity for the event. In this case, AAID may be based on ECID due to the [Identity Service grace period](https://experienceleague.adobe.com/docs/id-service/using/reference/analytics-reference/grace-period.html). Otherwise, AAID is marked as the primary identity for the event. AACUSTOMID is never marked as the Primary ID for the event. However, if AACUSTOMID is present, then AAID is based on AACUSTOMID due to the Experience Cloud order of operations.

## Hit timestamp precision and event ordering

The connector receives Analytics data as mid-values, which carry second-level hit timestamps. Because Analytics records time at only second-level precision and does not track sub-second timing, the order of hits collected within the same second is not deterministic. As a result, the order of same-second events ingested through the connector can differ from the order shown in Analytics reporting.

Customer Journey Analytics resolves timestamps to the [millisecond](https://experienceleague.adobe.com/en/docs/analytics-platform/using/connections/combined-dataset), but Analytics-sourced data only populates whole seconds. The timestamp alone therefore cannot establish the relative order of events that share the same second. This is most noticeable when several hits are collected in the same second (for example, a page view and an Adobe Target (A4T) hit).

For more information on Analytics timestamp precision, see the Adobe Analytics [timestamp](https://experienceleague.adobe.com/en/docs/analytics/implementation/vars/page-vars/timestamp) variable and [Hit depth](https://experienceleague.adobe.com/en/docs/analytics/components/dimensions/hit-depth) documentation. For the timestamp fields the connector maps to XDM (`hit_time_gmt` and `post_cust_hit_time_gmt`), see the [Adobe Analytics field mapping](./mapping/analytics.md) guide.

Your options for timestamp precision include:

* **Accept minor same-second ordering differences.** For most reporting, the effect is limited to events that share the same second and does not affect aggregate metrics. This is the recommended approach, including for mixed page-view and Adobe Target (A4T) scenarios.
* **For order-sensitive use cases, prefer the Web SDK.** Sending data through the [Adobe Experience Platform Web SDK](https://experienceleague.adobe.com/en/docs/experience-platform/collection/home) directly into Experience Platform and Customer Journey Analytics preserves sub-second (millisecond) timestamp precision and avoids Analytics reprocessing. This approach is recommended when event order is important.

## Data latency and backfill

The expected latency for Analytics data on Experience Platform is outlined in the table below. Latency varies depending on customer configuration, data volumes, and consumer applications. For example, if the Analytics implementation is configured with A4T, latency to the pipeline increases by 5-10 minutes.

| Analytics Data | Expected Latency |
| --- | --- |
| New data to Real-Time Customer Profile (A4T **not** enabled) | < 2 minutes |
| New data to Real-Time Customer Profile (A4T **is** enabled) | up to 30 minutes |
| New data to data lake | < 2.25 hours |
| New data to Customer Journey Analytics without [stitching](https://experienceleague.adobe.com/en/docs/analytics-platform/using/stitching/overview) | < 3.75 hours |
| New data to Customer Journey Analytics with stitching | < 7 hours |
| Backfill of less than 10 billion events | < 4 weeks |

For more information about Customer Journey Analytics latencies, see: [Customer Journey Analytics Guardrails](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-admin/guardrails.html?lang=en).

The Analytics backfill for production sandboxes defaults to 13 months. For Analytics data in non-production sandboxes, backfill is set to three months. The limit of 10 billion events mentioned in the table above is strictly with respect to expected latency.

When you create an Analytics source dataflow in a production sandbox, two dataflows are created:

* A dataflow that does a 13-month backfill of historical report suite data into the data lake. This dataflow ends when the backfill is complete.
* A dataflow that sends live data to the data lake and to the Real-Time Customer Profile. This dataflow runs continuously.

## Best practices

Follow these best practices to avoid exceeding your license entitlements and overwhelming your total storage and data richness metrics:

* Set up the Experience Event Dataset Retention Time-To-Live (TTL) in the beginning to optimize data lifecycle management and storage efficiency. For more details, see the guide on [managing Experience Event Dataset Retention in the data lake using TTL](/help/catalog/datasets/experience-event-dataset-retention-ttl-guide.md).
* When you create an Analytics source dataflow, start by configuring the connector to ingest data only into the data lake. After confirming that the dataflow is working, you can enable Profile ingestion for the dataset. This approach works best when row and column filters effectively reduce the data volume. Learn more in the [connecting Adobe Analytics to Experience Platform](../../tutorials/ui/create/adobe-applications/analytics.md) documentation.

## Frequently asked questions

+++Does Analytics backfill data count toward my licensed profile count?

No. Analytics backfill data is not ingested into Profile, so it does not count toward your license entitlements.

+++

+++Can I import more than 13 months of historical data?

The Analytics backfill for production sandboxes defaults to 13 months, and non-production sandboxes are limited to three months. For production sandboxes, if you have licensed the additional SKU that entitles you to import more than 13 months of historical backfill data, contact Adobe to request the extended backfill.

+++

+++How do I prevent secondary identities (AAID and AACUSTOMID) from being ingested into Real-Time Customer Profile?

You can use Data Prep to filter out secondary identities coming from Analytics, such as AAID and AACUSTOMID. If filtered out, these identities are not ingested into Profile even if they are available in the incoming Analytics data.

+++
