---
title: Event duplication handling in Experience Platform
description: Learn how Adobe Experience Platform handles event duplication
---

# Event duplication handling in Adobe Experience Platform

Adobe Experience Platform is a highly distributed system designed to maximize reliability while scaling to ever-increasing volumes of data.

For real-time data collection, [Experience Events](../xdm/classes/experienceevent.md) are collected via the [Edge Network](../web-sdk/home.md#edge-network), from client-side sources, such as [Web SDK](../web-sdk/home.md) or [Mobile SDK](https://developer.adobe.com/client-sdks/home/), and delivered to Experience Platform processing and storage layers. These layers compose solutions such as Experience Platform, [Real-Time CDP](../rtcdp/home.md), [Customer Journey Analytics](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-overview/cja-overview.html), and [Adobe Journey Optimizer](https://experienceleague.adobe.com/docs/journey-optimizer/using/ajo-home.html).

To minimize Experience Event loss, client-side SDKs and the internal Experience Platform delivery service expect a confirmation that an event was successfully collected.

If that confirmation is not received, the client-side SDKs or the internal Platform delivery service trigger a retry, and the Experience Event is sent again.

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

* Real-Time CDP Profile Store drops events if an event with the same `_id` already exists in the [!DNL Profile Store]. See the documentation on [XDM ExperienceEvent class](../xdm/classes/experienceevent.md) for more details.
* Customer Journey Analytics allows users to configure a metric to only count values non-repetitively. To learn how to do this, see the documentation on [metric deduplication component settings](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-dataviews/component-settings/metric-deduplication.html?lang=en).
* Experience Platform Query Service supports data deduplication when it is required to remove an entire row from a calculation or ignore a specific set of fields because only part of the data in the row is duplicate information. See the documentation around [data deduplication in Query Service](../query-service/key-concepts/deduplication.md) for more information.

>[!NOTE]
>
>If you are running into event duplication issues outside of the use cases presented above, reach out to your Adobe representative and provide detailed information about your use case.