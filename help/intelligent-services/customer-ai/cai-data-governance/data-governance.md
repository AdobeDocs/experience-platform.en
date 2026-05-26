---
keywords: Experience Platform;data governance;customer ai;popular topics
solution: Experience Platform
feature: Customer AI
title: Data Governance in Customer AI
description: Adobe Experience Platform provides several services and tools that allow you to confidently control your collected experience data in order to comply with your business practices, legal obligations, and development process.
exl-id: de0836a4-7bc2-4f9c-95a9-c01dd9e2b03f
TQID: https://experienceleague.adobe.com/KlM7q7qwfUKkkYvwFajbFE-uYHG-wUYS0KMWf3d70rM
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
topic_v2:
  - id: b4dd41a7-ccf8-4e9d-918e-acaab534a307
    internal-label: Data quality
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# Customer AI and Data Governance in Customer AI

Any data governance-related settings in Customer AI are inherited from Adobe Experience Platform.

## Data Governance {#governance}

The integration between Customer AI and Adobe Experience Platform Data Governance gives you the ability to control and comprehend your data throughout its journey through Experience Platform. This involves maintaining data quality, data lineage, data cataloging, and more.

Data usage labels and policies that were created on datasets consumed by Experience Platform can be surfaced in the Customer AI configuration workflow. These labels stop or warn users who use labeled fields. 

This integration allows you to manage compliance more efficiently. Data stewards in your organization can set policies to restrict usage. As a result, you can use data that complies with policies defined by data stewards. Read the documentation on [Labels and Policies](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-dataviews/data-governance.html) to learn more.

## Consent Policy {#consent-policy}

Customer AI honors your consent preferences. Once you've [setup and enabled your consent policy](https://experienceleague.adobe.com/docs/experience-platform/data-governance/policies/user-guide.html#consent-policy), Customer AI will honor the consent data collected from you. Only consented data is used for scoring the model in subsequent runs of the model. The new scores will replace the old scores and can be used in segmentation. This feature is currently only available for HealthCare Shield customers, and Privacy and Security shield customers.

You can learn more about this feature here: 

[Getting Started in Customer AI](../../customer-ai/getting-started.md)
[Adobe Experience Platform & Applications](https://experienceleague.adobe.com/docs/blueprints-learn/architecture/architecture-overview/platform-applications.html)
[Adobe Experience Cloud architecture diagrams](https://experienceleague.adobe.com/docs/blueprints-learn/architecture/architecture-overview/experience-cloud.html)
