---
title: Experience Platform Pre-Release Notes
description: A preview of the latest release notes for Adobe Experience Platform.
exl-id: f2c41dc8-9255-4570-b459-4f9fc28ee58b
---
# Adobe Experience Platform pre-release notes

>[!IMPORTANT]
>
>This document is intended as a **preview** of the release notes for the current month. Release items are subject to change, and may be added or removed in the final release.

>[!TIP]
>
>Refer to the following documentation for release notes of other Adobe Experience Platform applications:
>
>- [Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/whats-new/release-notes)
>- [Adobe Journey Optimizer B2B](https://experienceleague.adobe.com/en/docs/journey-optimizer-b2b/user/release-notes)
>- [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/releases/pre-release-notes)
>- [Federated Audience Composition](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/e-release-notes)
>- [Real-Time CDP Collaboration](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/latest)

**Release date: January 2026**

New features and updates to existing features in Adobe Experience Platform:

- [Agent Orchestrator](#agent-orchestrator)
- [Destinations](#destinations)
- [Real-Time Customer Profile](#real-time-customer-profile)
- [Schemas](#schemas)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)

## Agent Orchestrator {#agent-orchestrator}

Agent Orchestrator enables you to build and deploy AI-powered agents that can automate workflows and interact with customers across multiple channels.

**New or updated features**

| Feature | Description |
| --- | --- |
| Trial motion for Agent Orchestrator | Agent Orchestrator now offers a trial motion, allowing customers to explore and test the service before committing to a full purchase. This try-before-you-buy option enables organizations to evaluate Agent Orchestrator's capabilities, including skills and orchestration features, in their own environment. The trial provides hands-on experience with building AI-powered agents and understanding how they can be integrated into existing workflows. |

{style="table-layout:auto"}

For more information, see the [Agent Orchestrator documentation](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/agent-orchestrator).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations**

| Destination | Description |
| --- | --- |
| Kevel destination connector now available | [[!DNL Kevel]](https://www.kevel.com/) provides the AI-enabled technology and expert guidance that help innovative commerce leaders launch, scale, and succeed in retail media. [!DNL Kevel]'s Retail Media Cloud powers targeted, attributable, customizable ad formats for on-site and off-site advertising. |
| Index Exchange destination connector now available | [!DNL Index] is a global advertising supply-side platform that helps media owners maximize the value of their content across every screen. With over 20 years of industry leadership, [!DNL Index] connects the world's largest brands with premium experience makers to deliver high-quality consumer experiences. |
| Regional endpoints support for Braze connections | All [region-specific endpoints](https://www.braze.com/docs/user_guide/administrative/access_braze/sdk_endpoints) supported by [!DNL Braze] are now available for selection during the destination configuration flow. Ask your [!DNL Braze] representative which endpoint instance you should use. |
| Weekly and monthly scheduling support for Liveramp Onboarding | You can now configure weekly and monthly export schedules for the Liveramp Onboarding destination. |
|AES256 encryption support for Amazon S3 destinations | You can now configure AES256 encryption for your Amazon S3 exports. |
| Enhanced activation experience for The Trade Desk and Microsoft Bing destinations | The Trade Desk and Microsoft Bing destinations now include predefined mandatory mappings for an optimized activation experience. |

**New or updated functionality**

| Feature | Description |
| --- | --- |
| Updated guardrail limits for Adobe Target destination | The maximum number of audiences that can be mapped to a single Adobe Target destination has been increased from 50 to 250. This aligns Adobe Target with the standard audience limit for other destinations, providing greater flexibility for audience activation workflows. You can now activate more audiences to Adobe Target destinations without needing to create multiple dataflows. |
| [Edit destinations](/help/destinations/ui/edit-destination.md) and [edit marketing actions](/help/destinations/ui/edit-activation.md#edit-marketing-actions) general availability | The option to edit destinations and marketing actions is now available to all users. |
| Toggle field display names in the Mapping step | When mapping schema fields to a destination, you can now toggle between displaying the full XDM field name and showing only the display name. |

{style="table-layout:auto"}

For more information, read the [Destinations overview](../destinations/home.md).

## Real-Time Customer Profile {#real-time-customer-profile}

Real-Time Customer Profile enables you to see a holistic view of each individual customer by combining data from multiple channels, including online, offline, CRM, and third-party data. Profile allows you to consolidate your customer data into a unified view offering an actionable, timestamped account of every customer interaction.

**New or updated features**

| Feature | Description |
| --- | --- |
| Streaming capacity enforcement | Experience Platform now enforces streaming throughput capacities for Real-Time Customer Profile and Identity Service. When customers exceed their contracted streaming capacity, data will be queued and processed in a first-in-first-out manner. This ensures predictable system performance and prevents capacity violations from impacting data ingestion quality. Important notes: Streaming upserts will not be available on the data lake when capacity is exceeded, this enforcement does not apply to customers with Adobe Journey Optimizer licenses, and queued data will be processed sequentially once capacity becomes available. |
| API access deprecation for Real-Time CDP Prime | API access for experience events is now deprecated for all Real-Time CDP Prime customers. This change affects the ability to query experience events directly via API. Real-Time CDP Ultimate customers can request an exception through a formal exception process to enable experience events API access if needed for their use cases. This deprecation helps align Real-Time CDP with licensing functionality. |
| Monitor dataflow run | You can now monitor the progress and readiness of dataflow runs in Profile. |

{style="table-layout:auto"}

For more information, read the [[!DNL Real-Time Customer Profile] overview](../profile/home.md).

## Schemas {#schemas}

Experience Platform uses schemas to describe the structure of data in a consistent and reusable way. By defining data consistently across systems, it becomes easier to retain meaning and therefore gain value from data. Schemas are composed of a base class and zero or more schema field groups.

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| Schema inventory modernization with search, filter, tags, and folders | The schema browse page has been modernized to provide enhanced organizational and discovery capabilities. New features include advanced search and filtering options, support for user-generated tags and folders to organize schemas, and inline actions to streamline workflows. Key improvements include: updated columns (Name, Class, Datasets, Identities, Relationships, Enable for Profile, Behavior, Schema type, Tags, Created date, Last modified), advanced filters (Show profiles, Schema type, Class, Has any tag, Created by, Creation Date, Modified Date, Has primary Identity, Has relationship, Primary identity namespace), inline actions (Edit, Delete, Apply labels, Create dataset for non-relational schemas, Manage tags, Move to folder, Add to package, Copy JSON structure, Download sample file), and the ability to organize schemas using tags and folders. These enhancements provide comprehensive visibility into schema resources and enable more efficient schema management at the sandbox level. |

For more information, read the [[!DNL Schemas] overview](../xdm/home.md).

## Segmentation Service {#segmentation-service}

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Audiences can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| External audience TTL refresh | External audiences (such as CSV uploads) now support a force refresh capability for Time-to-Live (TTL) settings. This feature allows users to manually refresh the TTL expiration for external audiences, providing greater control over audience lifecycle management. This is particularly useful for audiences that need to persist beyond their initial TTL period or require reactivation without re-uploading the data. |

For more information, read the [[!DNL Segmentation Service] overview](../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated sources**

| Source | Description |
| --- | --- |
| [!DNL Oracle Eloqua] V2 source | A new [!DNL Oracle Eloqua] source connector is now available, replacing the deprecated connector. This updated connector provides enhanced functionality and improved reliability for ingesting data from [!DNL Oracle Eloqua] into Experience Platform. Customers using the existing connector should migrate to the new implementation, as existing connections will no longer function. The new connector supports all setup and configuration steps needed to connect to [!DNL Oracle Eloqua] and ingest marketing automation data. |
| [!DNL Salesforce Marketing Cloud] V2 source | A new [!DNL Salesforce Marketing Cloud] source connector is now available, replacing the deprecated connector. This updated connector provides improved performance and additional capabilities for ingesting data from [!DNL Salesforce Marketing Cloud] into Experience Platform. Customers using the existing connector should transition to the new implementation. The new connector includes comprehensive setup instructions for connecting to [!DNL Salesforce Marketing Cloud] and ingesting marketing automation data. |

For more information, read the [sources overview](../sources/home.md).

