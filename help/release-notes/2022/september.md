---
title: Adobe Experience Platform Release Notes September 2022
description: The September 2022 release notes for Adobe Experience Platform.
---

# Adobe Experience Platform release notes 

**Release date: September 28, 2022**

Updates to existing features in Adobe Experience Platform:

- [[!DNL Artificial Intelligence and Machine Learning Services]](#ai-and-ml-services)
- [Identity Service](#identity-service)
- [Sources](#sources)

## [!DNL Artificial Intelligence/Machine Learning services] {#ai-and-ml-services}

AI/ML services empower marketing analysts and practitioners to leverage the power of artificial intelligence and machine learning in customer experience use cases. This allows for marketing analysts to set up models specific to a company's needs using business-level configurations without the need for data science expertise.

### Attribution AI

Attribution AI is used to attribute credits to touchpoints leading to conversion events. This can be used by marketers to help quantify the marketing impact of each individual marketing touchpoint across customer journeys.

| Feature | Description |
| --- | --- |
| Save Draft Instance | This new feature enables marketing analysts to save model configuration as a draft instance during configurations and continue to edit the draft until completion before training and scoring. Scenarios where this feature is helpful include, but are not limited to, when users have multiple fields to define in the configuration workflow that they are not able to complete in one go or when one or more dataset statistics (such as column completeness) take time to be processed before they become available. Read the [Attribution AI user guide](../../intelligent-services/attribution-ai/user-guide.md) to learn more. |
| Governance policies | After users submit to create an instance through the configuration workflow, the new policy enforcement service checks whether there are any policy violations of data usage and displays the details in a popover. It ensures that data operations and marketing actions are compliant with the data usage policies configured on Adobe Experience Platform. |

For more information on Attribution AI, the [Attribution AI overview](../../intelligent-services/attribution-ai/overview.md). For information on data governance policies, read the [policies overview](../../data-governance/policies/overview.md).

### Customer AI

Customer AI available in Real-time Customer Data Platform, is used to generate custom propensity scores such as churn and conversion for individual profiles at scale.

| Feature | Description |
| --- | --- |
| Save Draft Instance | This new feature enables marketing analysts to save model configuration as a draft instance during configurations and continue to edit the draft until completion before training and scoring. Scenarios where this feature is helpful include, but are not limited to, when users have multiple fields to define in the configuration workflow that they are not able to complete in one go or when one or more dataset statistics (such as column completeness) take time to be processed before they become available. Read the [Customer AI user guide](../../intelligent-services/customer-ai/user-guide/configure.md) to learn more.|
| Governance policies | After users submit to create an instance through the configuration workflow, the new policy enforcement service checks whether there are any policy violations of data usage and displays the details in a popover. It ensures that data operations and marketing actions are compliant with the data usage policies configured on Adobe Experience Platform. |

For more information on Customer AI, read the [Customer AI overview](../../intelligent-services/customer-ai/overview.md). For information on data governance policies, read the [policies overview](../../data-governance/policies/overview.md).

## Identity Service {#identity-service}

Delivering relevant digital experiences requires having a complete understanding of your customer. This is made more difficult when your customer data is fragmented across disparate systems, causing each customer to appear to have multiple "identities".

Adobe Experience Platform Identity Service helps you gain a better view of your customer and their behavior by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time.

**Updated features**

| Feature | Description |
| --- | --- |
| Support for dataset deletion | Identity Service now supports dataset deletion when requesting through the [Catalog Service API](https://developer.adobe.com/experience-platform-apis/references/catalog/), UI, or Data Hygiene. Read the guide on [deleting datasets in the UI](../../catalog/datasets/user-guide.md#delete-a-dataset) for more information. |

To learn more about Identity Service, read the [Identity Service overview](../../identity-service/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**Updated features**

| Feature | Description |
| --- | --- |
| Audience Manager segment population impact on Real-time Customer Profile | The ingestion of sizeable Audience Manager segment populations has a direct impact on your total profile count when you first send an Audience Manager segment to Platform using the Audience Manager source. This means that selecting all segments can potentially lead to a Profile count in excess of your license usage entitlement. For more information, read the [Audience Manager source overview](../../sources/connectors/adobe-applications/audience-manager.md). For information on your license usage, read the documentation on [using the license usage dashboard](../../dashboards/guides/license-usage.md). |

To learn more about sources, read the [sources overview](../../sources/home.md).