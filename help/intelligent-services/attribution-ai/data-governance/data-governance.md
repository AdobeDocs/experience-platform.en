---
keywords: insights;attribution ai;attribution ai insights;AAI query service;attribution queries;attribution scores
feature: Attribution AI data governance
title: Data governance
description: Learn how to view and manage audit logs in AAI
---
## Attribution AI and Data Governance

Generally speaking, any data governance-related settings in Attribution AI are inherited from Adobe Experience Platform.

## Data Governance

The integration between Attribution AI and Adobe Experience Platform Data Governance allows for labeling of sensitive Attribution AI data and enforcement of privacy policies.

Privacy labels and policies that were created on datasets consumed by Experience Platform can be surfaced in the Attribution AI configuration workflow. These labels stop or warn users who create metrics and/or dimensions from sensitive fields.

In addition, when data is exported from Attribution AI (via export, API, etc.), warnings or labels are added to notify users that a report contains sensitive information that needs to be treated in a specific way.

This integration allows you to manage compliance more easily. Data stewards in your organization can set policies to restrict usage. As a result, your Attribution AI users can more confidently use data, knowing that it complies with policies defined by data stewards.

Learn more

## GDPR

Attribution AI will not subscribe to the General Data Protection Regulation (GDPR) Central Service directly and will instead inherit all dataset changes made in Experience Platform. We depend on Platform Data Lake to enforce GDPR deletion requests and notify us when they’ve been completed on Pipeline. We listen to Pipeline and synchronize all changes to affected batches in Attribution AI for raw score datasets.

## CCPA

The California Consumer Privacy Act (CCPA) enhances privacy rights and consumer protection for residents of California, United States. This Act became effective on January 1, 2020.

The CCPA provides new data privacy rights to California residents, such as the right to access and delete their personal data, to know whether their personal data is sold or disclosed (and to whom), and to refuse the sale of their personal data.
In accordance with the CCPA, the Privacy Service supports requests to opt out from the selling of personal data.

## More help on this feature

Getting Started in Attribution AI
Adobe Experience Platform & Applications
Adobe Experience Cloud architecture diagrams