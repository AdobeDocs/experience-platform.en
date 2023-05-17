---
keywords: Experience Platform;data governance;customer ai;popular topics
solution: Experience Platform
feature: Customer AI
title: Data Governance in Customer AI
description: Adobe Experience Platform provides several services and tools that allow you to confidently control your collected experience data in order to comply with your business practices, legal obligations, and development process.
exl-id: de0836a4-7bc2-4f9c-95a9-c01dd9e2b03f
---
# Customer AI and Data Governance

Any data governance-related settings in Customer AI are inherited from Adobe Experience Platform.

## Consent Policy {#consent-policy}

Customer AI honors your consent preferences. Once you've setup your consent policy and enabled it as documented here, Customer AI will honor the consent data collected from you. Only consented data is used for scoring the model in subsequent runs of the model. The new scores will replace the old scores and can be used in segmentation. This feature is only available for HealthCare Shield customers, and Privacy and Security shield customers.

## Data Governance {#governance}

The integration between Customer AI and Adobe Experience Platform Data Governance gives you the ability to control and comprehend your data throughout its journey through Platform. This involves maintaining data quality, data lineage, data cataloging, and more.

Data usage labels and policies that were created on datasets consumed by Platform can be surfaced in the Customer AI configuration workflow. These labels stop or warn users who use labeled fields. 

This integration allows you to manage compliance more efficiently. Data stewards in your organization can set policies to restrict usage. As a result, you can use data that complies with policies defined by data stewards. Read the documentation on [Labels and Policies](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-dataviews/data-governance.html) to learn more.

You can learn more about this feature here: 

[Getting Started in Customer AI](../../customer-ai/getting-started.md)
[Adobe Experience Platform & Applications](https://experienceleague.adobe.com/docs/blueprints-learn/architecture/architecture-overview/platform-applications.html)
[Adobe Experience Cloud architecture diagrams](https://experienceleague.adobe.com/docs/blueprints-learn/architecture/architecture-overview/experience-cloud.html)
