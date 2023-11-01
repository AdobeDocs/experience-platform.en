---
title: Real-Time CDP Guardrails
description: Learn about the data guardrails across the various services and areas of Real-Time CDP.
---
# Real-Time CDP Guardrails

Guardrails are thresholds that provide guidance for data and system usage, performance optimization, and avoidance of errors or unexpected results in Real-Time CDP. Guardrails can refer to your usage or consumption of data and processing in relation to your licensing entitlements.

Start here and follow the links below to understand all guardrails across the various services and areas of Real-Time CDP:

* [Guardrails for data ingestion](/help/ingestion/guardrails.md)
* [Guardrails for the [!DNL Edge Network Server API]](/help/server-api/guardrails.md)
* [Guardrails for [!DNL Real-Time Customer Profile] data and segmentation](/help/profile/guardrails.md)
* [Guardrails for [!DNL Identity Service] data](/help/identity-service/guardrails.md)
* [Guardrails for [!DNL Query Service]](/help/query-service/guardrails.md)
* [Guardrails for data activation through destinations](/help/destinations/guardrails.md)

>[!TIP]
>
>Additionally, see [this page](https://experienceleague.adobe.com/docs/blueprints-learn/architecture/architecture-overview/deployment/guardrails.html) for information on guardrails for other Experience Platform apps, such as [Adobe Journey Optimizer](https://experienceleague.adobe.com/docs/journey-optimizer.html) and [Customer Journey Analytics](https://experienceleague.adobe.com/docs/customer-journey-analytics.html), and [end-to-end latency diagrams](https://experienceleague.adobe.com/docs/blueprints-learn/architecture/architecture-overview/deployment/guardrails.html?lang=en#end-to-end-latency-diagrams) for various Experience Platform services.

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
* [Real-Time Customer Data Platform (B2P - Prime and Ultimate Packages)](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2p-edition-prime-and-ultimate-packages.html)
* [Real-Time Customer Data Platform (B2B - Prime and Ultimate Packages)](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2b-edition-prime-and-ultimate-packages.html)

## Next steps

After understanding the guardrails that apply to various areas and services of Real-Time CDP, you can follow along with a [sample use case of a Real-Time CDP implementation](/help/rtcdp/get-started.md).
