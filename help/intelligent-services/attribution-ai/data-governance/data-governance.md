---
keywords: Experience Platform;data governance;attribution ai;popular topics
solution: Experience Platform, Real-time Customer Data Platform
feature: Attribution AI
title: Data Governance in Attribution AI
description: Adobe Experience Platform provides several services and tools that allow you to confidently control your collected experience data in order to comply with your business practices, legal obligations, and development process
---
# Attribution AI and Data Governance

Any data governance-related settings in Customer AI are inherited from Adobe Experience Platform.

## Data Governance {#governance}

The integration between Attribution AI and Adobe Experience Platform Data Governance gives you the ability to control and comprehend your data throughout its journey through Platform. This involves maintaining data quality, data lineage, data cataloging, and more.

Data usage labels and policies that were created on datasets consumed by Platform can be surfaced in the Attribution AI configuration workflow. These labels stop or warn users who use labeled fields. 

This integration allows you to manage compliance more easily. Data stewards in your organization can set policies to restrict usage. As a result, you can use data more confidently, knowing that it complies with policies defined by data stewards. Read the documentation on [Labels and Policies](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-dataviews/data-governance.html) to learn more.

## GDPR

Attribution AI will not subscribe to the General Data Protection Regulation (GDPR) Central Service directly and will instead inherit all dataset changes made in Experience Platform. We depend on Platform Data Lake to enforce GDPR deletion requests and notify us when they’ve been completed on Pipeline. We listen to Pipeline and synchronize all changes to affected batches in Attribution AI for raw score datasets.

## CCPA

The California Consumer Privacy Act (CCPA) enhances privacy rights and consumer protection for residents of California, United States. This Act became effective on January 1, 2020.

The CCPA provides new data privacy rights to California residents, such as the right to access and delete their personal data, to know whether their personal data is sold or disclosed (and to whom), and to refuse the sale of their personal data.
In accordance with the CCPA, the Privacy Service supports requests to opt out from the selling of personal data.

You can learn more about this feature here: 

[Getting Started in Attribution AI](../../attribution-ai/getting-started.md)
[Adobe Experience Platform & Applications](https://experienceleague.adobe.com/docs/blueprints-learn/architecture/architecture-overview/platform-applications.html)
[Adobe Experience Cloud architecture diagrams](https://experienceleague.adobe.com/docs/blueprints-learn/architecture/architecture-overview/experience-cloud.html)
