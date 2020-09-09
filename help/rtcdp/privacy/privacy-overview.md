---
keywords: data governance rtcdp;rtcdp data governance;real time customer data profile data governance;privacy rtcdp;rtcdp privacy
title: Privacy in Real-time Customer Data Profile
seo-title: Privacy in Real-time Customer Data Profile
description: Real-time Customer Data Profile allows you to streamline the process of keeping your data operations compliant with privacy regulations.
seo-description: Real-time Customer Data Profile allows you to streamline the process of keeping your data operations compliant with privacy regulations.
---

# Privacy in [!DNL Real-time CDP]

[!DNL Real-time Customer Data Platform] ([!DNL Real-time CDP]) helps marketers bring data from multiple enterprise systems together, allowing them to better identify, understand, and engage their customers. Adobe holds consumer data privacy as a fundamental design principle and provides various controls to help marketers manage the data privacy of their customers.

The majority of [!DNL Real-time CDP] capabilities are powered by Adobe Experience Platform. This document provides information about the various privacy enhancement technologies supported by [!DNL Real-time CDP], with links to [!DNL Experience Platform] documentation for more information.

## [!DNL Privacy Service]

Adobe Experience Platform [!DNL Privacy Service] allows you to streamline the process of keeping your data operations compliant with privacy regulations such as the [!DNL General Data Protection Regulation] (GDPR) and the [!DNL California Consumer Privacy Act] (CCPA). Since [!DNL Real-time CDP] leverages [!DNL Experience Platform] capabilities for data collection and storage, the access and delete requests for GDPR and CCPA should be managed within [!DNL Platform]. See the [Privacy Service overview](../../privacy-service/home.md) document for a more detailed introduction of the service.

There are two methods for submitting individual GDPR and CCPA data subject requests for accessing and deleting customer data:

* Use the [[!DNL Privacy Service UI]](https://privacyui.cloud.adobe.io/) to create and monitor access and delete requests within a visual workspace. See the [Privacy Service user guide](../../privacy-service/ui/overview.md) for step-by-step instructions.
* Use the [[!DNL Privacy Service API]](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/privacy-service.yaml) to manage access and delete requests with RESTful API calls. See the [Privacy Service API tutorial](../../privacy-service/api/getting-started.md) for step-by-step instructions.

## Opt-out capabilities

[!DNL Real-time CDP] allows customers to opt out of having their personal data included in segmentation use cases. Customers' opt-out preferences are captured and stored by Real-time Customer Profile, and can be enforced by excluding users who have opted out from a segment using boolean logic ("AND NOT") in the segment predicate.

See the document on [honoring opt-out requests](../../segmentation/honoring-opt-outs.md) in the Adobe Experience Platform Segmentation Service documentation for more information.

## IAB TCF 2.0 support

[!DNL Real-time CDP] is part of the registered [vendor list](https://iabeurope.eu/vendor-list-tcf-v2-0/) for the [!DNL Transparency & Consent Framework] (TCF), as outlined by the [!DNL Interactive Advertising Bureau] (IAB). In compliance with TCF 2.0 requirements, [!DNL Real-time CDP] allows you to collect detailed customer consent data and integrate it into your stored customer profiles. This consent data can then be factored into whether profiles are included in exported audience segments, depending on their use case.

See the overview on [IAB TCF 2.0 support in Real-time CDP](./iab/overview.md) for more information.

## Next steps

This document provided a brief introduction to the privacy capabilities of Real-time CDP. Please review the documentation linked to throughout this guide for more information on each feature.