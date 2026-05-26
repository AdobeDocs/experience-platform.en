---
keywords: data governance rtcdp;rtcdp data governance;real time customer data profile data governance;privacy rtcdp;rtcdp privacy
title: Privacy in Real-Time Customer Data Platform
description: Adobe Real-Time Customer Data Platform allows you to streamline the process of keeping your data operations compliant with privacy regulations.
feature: Get Started, Privacy
exl-id: bcb0e42e-4549-4952-bb69-5534aee353f8
TQID: https://experienceleague.adobe.com/HRSdT-rRWw-l2eHKnSpp6k6rT0Vu--o1Jvx4C6mU9YA
product_v2:
  - id: fdddec33-c9cb-4459-b8b6-2664395a6f10
    internal-label: Real-Time Customer Data Platform
feature_v2:
  - id: ba929a52-9339-4154-9487-317dc875a3c7
    internal-label: Use cases
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
  - id: fd2e3797-f2ea-4b36-a9af-52acf5e90513
    internal-label: Customer profiles
---
# Privacy in Real-Time Customer Data Platform

[!DNL Adobe Real-Time Customer Data Platform] ([!DNL Real-Time CDP]) helps marketers bring data from multiple enterprise systems together, allowing them to better identify, understand, and engage their customers. Adobe holds consumer data privacy as a fundamental design principle and provides various controls to help marketers manage the data privacy of their customers.

The majority of [!DNL Real-Time CDP] capabilities are powered by Adobe Experience Platform. This document provides information about the various privacy enhancement technologies supported by [!DNL Real-Time CDP], with links to [!DNL Experience Platform] documentation for more information.

## Honoring customer access and delete requests

Legal privacy regulations such as the [!DNL General Data Protection Regulation] (GDPR) and the [!DNL California Consumer Privacy Act] (CCPA) give customers the right to request access to, or the deletion of, the personal data you collect from them. Since [!DNL Real-Time CDP] leverages [!DNL Experience Platform] capabilities for data collection and storage, customer requests to access and delete their personal data should be managed within [!DNL Experience Platform]. See the overview on [Adobe Experience Platform Privacy Service](../../privacy-service/home.md) for more information.

>[!IMPORTANT]
>
> Privacy requests submitted through Adobe Experience Platform Privacy Service for Adobe Marketo Engage apply to Real-Time CDP B2B customers only.

## Opt-out capabilities

[!DNL Real-Time CDP] allows customers to opt out of having their personal data included in segmentation use cases. Customers' opt-out preferences are captured and stored by [!DNL Real-Time Customer Profile], and can be enforced by excluding users who have opted out from an audience using boolean logic ("AND NOT") in the segment predicate.

See the document on [honoring opt-out requests](../../segmentation/tutorials/consents.md) in the Adobe Experience Platform Segmentation Service documentation for more information.

## IAB TCF 2.0 support

[!DNL Real-Time CDP] is built on Adobe Experience Platform, which is part of the registered [vendor list](https://iabeurope.eu/vendor-list-tcf/) for the [!DNL Transparency & Consent Framework (TCF)], as outlined by the [!DNL Interactive Advertising Bureau (IAB)]. In compliance with TCF 2.0 requirements, Experience Platform allows you to collect detailed customer consent data and integrate it into your stored customer profiles. This consent data can then be factored into whether certain profiles are included in exported audiences, depending on their use case.

See the overview on [IAB TCF 2.0 support in Experience Platform](../../landing/governance-privacy-security/consent/iab/overview.md) for more information.

## Next steps

This document provided a brief introduction to the privacy capabilities of [!DNL Real-Time CDP]. Please review the documentation linked to throughout this guide for more information on each feature.
