---
title: Event duplication handling in Experience Platform
description: Learn how Adobe Experience Platform handles event duplication
exl-id: ac8c3ee8-52cf-459c-b283-16ed32d2976d
TQID: https://experienceleague.adobe.com/P7G0XROFmmnm0Z9VEAxt-lSw6UhenD4g7SBeV-5T7FY
product_v2:
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: e98b7246-966c-4318-9e95-cad2f7a17dc7
    internal-label: Customer Journey Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: fdddec33-c9cb-4459-b8b6-2664395a6f10
    internal-label: Real-Time Customer Data Platform
feature_v2:
  - id: ba929a52-9339-4154-9487-317dc875a3c7
    internal-label: Use cases
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: df64005d-8f9a-422e-ba4d-c6f6dc3454b4
    internal-label: Use cases
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: a230274e-7e6e-49eb-b817-514495a710ac
    internal-label: query service
  - id: abc02dd6-664f-446a-9aaa-675bc0f2fe4a
    internal-label: Sources
  - id: acc16deb-1d7f-4ec9-9ce3-6cdf355afde6
    internal-label: XDM
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
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
