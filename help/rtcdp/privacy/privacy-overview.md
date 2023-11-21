---
keywords: data governance rtcdp;rtcdp data governance;real time customer data profile data governance;privacy rtcdp;rtcdp privacy
title: Privacy in Real-Time Customer Data Platform
description: Adobe Real-Time Customer Data Platform allows you to streamline the process of keeping your data operations compliant with privacy regulations.
feature: Get Started, Privacy
exl-id: bcb0e42e-4549-4952-bb69-5534aee353f8
---
# Privacy in Real-Time Customer Data Platform

[!DNL Adobe Real-Time Customer Data Platform] ([!DNL Real-Time CDP]) helps marketers bring data from multiple enterprise systems together, allowing them to better identify, understand, and engage their customers. Adobe holds consumer data privacy as a fundamental design principle and provides various controls to help marketers manage the data privacy of their customers.

The majority of [!DNL Real-Time CDP] capabilities are powered by Adobe Experience Platform. This document provides information about the various privacy enhancement technologies supported by [!DNL Real-Time CDP], with links to [!DNL Experience Platform] documentation for more information.

## Honoring customer access and delete requests

Legal privacy regulations such as the [!DNL General Data Protection Regulation] (GDPR) and the [!DNL California Consumer Privacy Act] (CCPA) give customers the right to request access to, or the deletion of, the personal data you collect from them. Since [!DNL Real-Time CDP] leverages [!DNL Experience Platform] capabilities for data collection and storage, customer requests to access and delete their personal data should be managed within [!DNL Platform]. See the overview on [Adobe Experience Platform Privacy Service](../../privacy-service/home.md) for more information.

>[!IMPORTANT]
>
> Privacy requests submitted through Adobe Experience Platform Privacy Service for Adobe Marketo Engage apply to Real-Time CDP B2B customers only.

## Opt-out capabilities

[!DNL Real-Time CDP] allows customers to opt out of having their personal data included in segmentation use cases. Customers' opt-out preferences are captured and stored by [!DNL Real-Time Customer Profile], and can be enforced by excluding users who have opted out from a segment using boolean logic ("AND NOT") in the segment predicate.

See the document on [honoring opt-out requests](../../segmentation/consents.md) in the Adobe Experience Platform Segmentation Service documentation for more information.

## IAB TCF 2.0 support

[!DNL Real-Time CDP] is built on Adobe Experience Platform, which is part of the registered [vendor list](https://iabeurope.eu/vendor-list-tcf-v2-0/) for the [!DNL Transparency & Consent Framework (TCF)], as outlined by the [!DNL Interactive Advertising Bureau (IAB)]. In compliance with TCF 2.0 requirements, Platform allows you to collect detailed customer consent data and integrate it into your stored customer profiles. This consent data can then be factored into whether certain profiles are included in exported audience segments, depending on their use case.

See the overview on [IAB TCF 2.0 support in Experience Platform](../../landing/governance-privacy-security/consent/iab/overview.md) for more information.

## Next steps

This document provided a brief introduction to the privacy capabilities of [!DNL Real-Time CDP]. Please review the documentation linked to throughout this guide for more information on each feature.
