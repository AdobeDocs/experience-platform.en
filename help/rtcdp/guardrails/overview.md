---
title: Real-Time CDP Guardrails
description: Learn about the data guardrails across the various services and areas of Real-Time CDP.
feature: Guardrails, Data Management, Data Ingestion, Data Export
exl-id: 377499b4-5707-4d50-94e3-02f88ad5bf2c
TQID: https://experienceleague.adobe.com/FG6q8ZiUOM8o10kfJd-58ZcrlOvWyAQe06efuZeapPI
product_v2:
  - id: fdddec33-c9cb-4459-b8b6-2664395a6f10
    internal-label: Real-Time Customer Data Platform
feature_v2:
  - id: ba929a52-9339-4154-9487-317dc875a3c7
    internal-label: Use cases
  - id: ebefeaba-efa6-45e2-ae01-f6171cdb8d1e
    internal-label: Tier
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: cdd65e7e-8839-44a2-bc21-0e03623b5dd1
    internal-label: Optimization
  - id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
    internal-label: Data management
  - id: fd2e3797-f2ea-4b36-a9af-52acf5e90513
    internal-label: Customer profiles
---
# Real-Time CDP Guardrails

Guardrails are thresholds that provide guidance for data and system usage, performance optimization, and avoidance of errors or unexpected results in Real-Time CDP. Guardrails can refer to your usage or consumption of data and processing in relation to your licensing entitlements.

>[!IMPORTANT]
>
>Check your license entitlements in your Sales Order and corresponding [Product Description](https://helpx.adobe.com/legal/product-descriptions.html) on actual usage limits in addition to this guardrails page.

Start here and follow the links below to understand all guardrails across the various services and areas of Real-Time CDP:

* [Guardrails for data ingestion](/help/ingestion/guardrails.md)
* [Guardrails for the [!DNL Edge Network API]](https://developer.adobe.com/data-collection-apis/docs/getting-started/guardrails/)
* [Guardrails for [!DNL Real-Time Customer Profile] data and segmentation](/help/profile/guardrails.md)
* [Guardrails for [!DNL Identity Service] data](/help/identity-service/guardrails.md)
* [Guardrails for [!DNL Query Service]](/help/query-service/guardrails.md)
* [Guardrails for data activation through destinations](/help/destinations/guardrails.md)
* [Guardrails for Real-Time CDP B2B](/help/rtcdp/b2b-guardrails.md)

>[!TIP]
>
>Additionally, visit [the digital experience blueprints](https://experienceleague.adobe.com/docs/blueprints-learn/architecture/architecture-overview/deployment/guardrails.html) for further information such as [end-to-end latency diagrams](https://experienceleague.adobe.com/docs/blueprints-learn/architecture/architecture-overview/deployment/guardrails.html?lang=en#end-to-end-latency-diagrams) for various Experience Platform services.

## Guardrail types {#guardrail-types}

Note that the two guardrail types across all Real-Time CDP areas and services are: 

| Guardrail type | Description|
|----------|---------|
| **Performance guardrail (Soft limit)** | Performance guardrails are usage limits that relate to the scoping of your use cases. When exceeding performance guardrails, you may experience performance degradation and latency. Adobe is not responsible for such performance degradation. Customers who consistently exceed a performance guardrail may elect to license additional capacity to avoid performance degradation.|
| **System-enforced guardrails (Hard limit)** | System-enforced guardrails are enforced by the Real-Time CDP UI or API. These are limits that you cannot exceed as the UI and API will block you from doing so or will return an error.|

{style="table-layout:auto"}

## Real-Time CDP licensing and entitlement information {#product-descriptions}

Additionally, refer to the product description links below for licensing and entitlement information based on the Real-Time CDP edition and tier you purchased:

* [All Adobe product descriptions](https://helpx.adobe.com/legal/product-descriptions.html)
* [Real-Time Customer Data Platform (B2C Edition - Prime and Ultimate Packages)](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2c-edition-prime-and-ultimate-packages.html)
* [Real-Time Customer Data Platform (B2P Edition - Prime and Ultimate Packages)](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2p-edition-prime-and-ultimate-packages.html)
* [Real-Time Customer Data Platform (B2B Edition - Prime and Ultimate Packages)](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2b-edition-prime-and-ultimate-packages.html)

## Guardrails for other Experience Platform applications  {#guardrails-other-aep-apps}

Similar guardrails exist for other Experience Platform applications. Visit the links below for more information:

* [Adobe Journey Optimizer guardrails](https://experienceleague.adobe.com/docs/journey-optimizer/using/get-started/guardrails.html?lang=en)
* [Customer Journey Analytics guardrails](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-admin/guardrails.html)

## Next steps

After understanding the guardrails that apply to various areas and services of Real-Time CDP, you can follow along with a [sample use case of a Real-Time CDP implementation](/help/rtcdp/get-started.md).
