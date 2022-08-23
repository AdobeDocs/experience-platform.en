---
title: Adobe Experience Platform Release Notes August 2022
description: The August 2022 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: August 24, 2022**

Updates to existing features in Adobe Experience Platform:

- [[!DNL Artificial Intelligence and Machine Learning Services]](#ai-and-ml-services)

## [!DNL Artificial Intelligence/Machine Learning services] {#ai-and-ml-services}

AI/ML services empower marketing analysts and practitioners to leverage the power of artificial intelligence and machine learning in customer experience use cases. This allows for marketing analysts to set up models specific to a company’s needs using business-level configurations without the need for data science expertise.

### Attribution AI

Attribution AI is used to attribute credits to touchpoints leading to conversion events. This can be used by marketers to help quantify the marketing impact of each individual marketing touchpoint across customer journeys.

**Updated features**

| Feature | Description |
| ------- | ----------- |
| Support for Privacy | <li> Attribution AI now supports defining user roles and access policies to manage [permissions](../../help/access-control/abac/ui/permissions.md) for features and objects within a product application. </li><li>Audit log resources are recorded automatically as the activity occurs.</li> <li> Through [attribute-based access control](../../access-control/abac/overview.md), administrators can control access to specific objects and/or capabilities based on certain attributes, which can be metadata added to an object, such as labels.Administrators can also define user roles that have access to only specific fields and data that correspond to those fields.</li> <li>[Data Hygiene](../../help/hygiene/home.md) capabilities within Attribution AI allow you to only use updated data for further training and scoring. Likewise, when you request to delete data, Attribution AI refrains from using the deleted data.</li><li>Attribution AI leverages Platform datasets. To help facilitate GDPR compliance, you can use Adobe Experience Platform Privacy Service to set up protocols to honor customer requests to access and delete their data across the data lake, Identity Service, and Real-time Customer Profile. All data is encrypted in transit and at rest.</li>|

{style="table-layout:auto"}

**Note**: Attribution AI will not be available for Healthcare Shield customers until the end of Q4 2022.
 
For more information on Attribution AI, please see the [Attribution AI](../../intelligent-services/attribution-ai/overview.md) overview.

### Customer AI

Customer AI available in Real-time Customer Data Platform, is used to generate custom propensity scores such as churn and conversion for individual profiles at scale.

**Updated features**

| Feature | Description |
| ------- | ----------- |
| Support for Privacy | <li> Customer AI now supports defining user roles and access policies to manage [permissions](../../help/access-control/abac/ui/permissions.md) for features and objects within a product application. </li><li>Audit log resources are recorded automatically as the activity occurs.</li> <li> Through [attribute-based access control](../../access-control/abac/overview.md), administrators can control access to specific objects and/or capabilities based on certain attributes. These attributes can be metadata added to an object, such as labels. Administrators can also define user roles that have access to only specific fields and data that correspond to those fields.</li> <li>[Data Hygiene](../../help/hygiene/home.md) capabilities within Customer AI allow you to only use updated data for further training and scoring. Similarly, when you request to delete data, Customer AI refrains from using the deleted data.</li><li>Customer AI leverages Platform datasets. To help facilitate GDPR compliance, you can use Adobe Experience Platform Privacy Service to set up protocols to honor customer requests to access and delete their data across the data lake, Identity Service, and Real-time Customer Profile. All data is encrypted in transit and at rest.</li>|

{style="table-layout:auto"}

**Note**: Customer AI will not be available for Healthcare Shield customers until the end of Q4 2022.
 
For more information on Customer AI, please see the [Customer AI](../../intelligent-services/customer-ai/overview.md) overview.