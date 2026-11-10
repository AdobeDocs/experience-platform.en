---
title: Event duplication handling in Experience Platform
description: Learn how Adobe Experience Platform handles event duplication
exl-id: ac8c3ee8-52cf-459c-b283-16ed32d2976d
TQID: 'https://experienceleague.adobe.com/P7G0XROFmmnm0Z9VEAxt-lSw6UhenD4g7SBeV-5T7FY'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: e98b7246-966c-4318-9e95-cad2f7a17dc7
    internal-label: Customer Journey Analytics
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
  - id: a8a79b8d-fdca-499c-a5ef-f88a099d8eb9
    internal-label: Mobile SDK
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b4dd41a7-ccf8-4e9d-918e-acaab534a307
    internal-label: Data quality
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Event duplication handling in Adobe Experience Platform

Adobe Experience Platform is a highly distributed system designed to maximize reliability while scaling to ever-increasing volumes of data.

For real-time data collection, [Experience Events](/help/xdm/classes/experienceevent.md) are collected via the Edge Network, from client-side sources, such as Web SDK or [Mobile SDK](https://developer.adobe.com/client-sdks/home/), and delivered to Experience Platform processing and storage layers. These layers compose solutions such as Experience Platform, [Real-Time CDP](/help/rtcdp/home.md), [Customer Journey Analytics](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-overview/cja-overview.html), and [Adobe Journey Optimizer](https://experienceleague.adobe.com/docs/journey-optimizer/using/ajo-home.html).

To minimize Experience Event loss, client-side SDKs and the internal Experience Platform delivery service expect a confirmation that an event was successfully collected.

If that confirmation is not received, the client-side SDKs or the internal Experience Platform delivery service trigger a retry, and the Experience Event is sent again.

This is a best practice for handling transient failures. The side-effect is the possibility of introducing duplicate events.

To better understand best practices for handling transient failures, see this article on [transient fault handling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/transient-faults).

## Event duplication scenarios {#scenarios}

Event duplication can occur in various scenarios, such as, but not limited to:

* Network-related issues between client-side SDKs and the [!DNL Edge Network]. These issues can originate from Internet Service Provider failures, mobile signal loss, or other network failures, since the connectivity between the customer and the Edge Network is done through the public Internet.
* Internal Experience Platform auto-scaling events. Occasionally, data can be rebalanced due to cloud infrastructure volatility.

The Adobe Experience Platform data collection layer is designed to support "at-least-once" processing. Consequently, event duplication may occur in limited, rare situations.

To learn more about "at-least-once" processing, see this article on [message delivery guarantees](https://docs.confluent.io/kafka/design/delivery-semantics.html).

## Event deduplication options {#deduplication}

For business scenarios sensitive to duplicate events, Experience Platform uses multiple event deduplication methods in its downstream storage systems, such as the ones described below.

* Real-Time CDP Profile store drops events if an event with the same `_id` already exists in the [!DNL Profile store]. See the documentation on [XDM ExperienceEvent class](/help/xdm/classes/experienceevent.md) for more details.
* Customer Journey Analytics allows users to configure a metric to only count values non-repetitively. To learn how to do this, see the documentation on [metric deduplication component settings](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-dataviews/component-settings/metric-deduplication.html?lang=en).
* Experience Platform Query Service supports data deduplication when it is required to remove an entire row from a calculation or ignore a specific set of fields because only part of the data in the row is duplicate information. See the documentation around [data deduplication in Query Service](/help/query-service/key-concepts/deduplication.md) for more information.

>[!NOTE]
>
>If you are running into event duplication issues outside of the use cases presented above, reach out to your Adobe representative and provide detailed information about your use case.
