---
title: Experience Platform Pre-Release Notes
description: A preview of the latest release notes for Adobe Experience Platform.
hide: true
hidefromtoc: true
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

**Release date: August 2025**

New features and updates to existing features in Adobe Experience Platform:

- [Alerts](#alerts)
- [Destinations](#destinations)
- [Experience Data Model (XDM)](#cdm)
- [Query Service](#query-service)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)

## Alerts {#alerts}

Experience Platform allows you to subscribe to event-based alerts for various Experience Platform activities. You can subscribe to different alert rules through the [!UICONTROL Alerts] tab in the Experience Platform user interface, and can choose to receive alert messages within the UI itself or through email notifications.

**New features**

| Feature | Description |
| ------- | ----------- |
| Streaming throughput capacity alerts | Stay ahead of capacity issues with proactive alerts. You can now set up alerts to notify you when your streaming throughput reaches 80%, 90%, or exceeds capacity limits. This gives you early warning so you can take action before performance is impacted. |

For more information about alerts, read the [[!DNL Observability Insights] overview](../../observability/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**Updated destinations**

| Destination | Description |
| --- | --- |
| [!DNL Google Ad Manager 360] | Your [!DNL Google Ad Manager 360] destination is now production-ready with General Availability (GA). All beta notices have been removed, and prerequisites have been updated to ensure you have everything you need for successful production deployment. |
| [!DNL LinkedIn] destination | Never worry about expired credentials again. Account expiry information is now visible directly in the product interface, so you can see when your [!DNL LinkedIn] authentication will expire and renew it before it causes any disruptions to your data flows. |
| [!DNL Data Landing Zone] destination | Protect your exported data with encryption. You can now attach RSA-formatted public keys to encrypt your exported files, giving you the same level of security that other cloud storage destinations provide for your sensitive information. |

**New or updated functionality**

| Feature | Description |
| --- | --- |
| [!DNL Marketo] destination cards consolidation | Simplify your [!DNL Marketo] destination setup with our unified destination card. We've consolidated [!DNL Marketo] V2 and V3 cards into one streamlined option, making it easier to choose the right destination and get started quickly. |

For more information, read the [Destinations overview](../destinations/home.md).

## Experience Data Model (XDM) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**New features**

| Feature | Description |
| ------- | ----------- |
| Model-Based Schemas | Simplify your data modeling with Model-Based Schemas. You can now create schemas more easily with comprehensive how-to examples and guidance. This feature is currently available to Campaign Orchestration license holders and will expand to Data Distiller customers at GA, making data modeling more accessible and efficient. |

For more information, read the [XDM overview](../xdm/home.md).

## Query Service {#query-service}

Adobe Experience Platform Query Service provides a robust SQL interface for data analysis and exploration across the platform.

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| Data Distiller Session Management | Take control of your data analysis sessions with enhanced session management. You can now monitor and manage your sessions more effectively across development and production environments, giving you better visibility into your query performance and resource usage. |
| Dataset Export endTime updates | Get more precise timing information for your data exports. You'll now receive more accurate endTime data, helping you better track when your exports complete and plan your data workflows more effectively. |

For more information, read the [Query Service overview](../query-service/home.md).

## Segmentation Service {#segmentation-service}

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Audiences can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| Audience estimates | Audience estimates are now automatically generated within Segment Builder. This value will be updated whenever you modify the audience, and always reflects the latest audience rules. |

For more information, read the [[!DNL Segmentation Service] overview](../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated functionality**

| Feature | Description |
| --- | --- |
| Azure Private Link Support in the UI (Beta) | Keep your data secure with private network connections. You can now create private endpoints and set up dataflows that bypass the public internet, giving you enhanced security and network isolation for your sensitive data. |
| Support for service principal authentication for [!DNL Azure Blob Storage] | You can now connect your [!DNL Azure Blob Storage] account to Experience Platform with service principal authentication. |

For more information, read the [sources overview](../sources/home.md).

<!--
## B2B CDP {#b2b-cdp}

Real-Time CDP B2B Edition provides comprehensive B2B customer data management capabilities, enabling organizations to build unified customer profiles, create sophisticated B2B audiences, and activate data across various marketing channels.

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| Lookup Support for B2B Classes Only | Streamline your B2B data access with focused lookup support. You can now look up Person (Profile), Experience Events, Account, and Opportunity entities directly through the Entities API. This simplified approach helps you access the most important B2B data more efficiently while reducing complexity. |
| B2B Namespace and Schema Updates | Experience a cleaner, more streamlined B2B data model. We've simplified the B2B namespace and schema structure by removing complex relationship mappings and non-primary identity support for certain B2B classes. This makes your B2B data easier to work with and understand. |

For more information, read the [Real-Time CDP B2B Edition overview](../rtcdp/b2b-overview.md).

-->
