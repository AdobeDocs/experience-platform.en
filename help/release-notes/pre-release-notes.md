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

**Release date: July 29, 2025**

New features and updates to existing features in Adobe Experience Platform:

- [Destinations](#destinations)
- [Data Ingestion](#ingestion)
- [Query Service](#query-service)
- [Real-Time CDP B2B Edition](#b2b)
- [Sandboxes](#sandboxes)
- [Segmentation Service](#segmentation)
- [Sources](#sources)

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**Updated destinations**

| Destination | Description |
| --- | --- |
| Marketo Destination Cards Consolidation | Marketo V2 and Marketo Engage Person Sync destination cards have been consolidated into a single, unified destination card. This consolidation simplifies the destination selection process and provides a more streamlined experience for Marketo integrations. |

**New or updated functionality**

| Feature | Description |
| --- | --- |
| Data Landing Zone (DLZ) destination encryption support | Added encryption support for the Data Landing Zone destination. You can now attach RSA-formatted public keys to add encryption to your exported files, providing enhanced security for sensitive data exports. |
| Enhanced datastream information for edge destinations | Improved right-rail information for Adobe Target and Custom Personalization destinations now displays both Datastream name and Datastream ID fields, providing clearer visibility into associated datastream configurations and reducing confusion when reviewing existing dataflows. The **[!UICONTROL Datastream ID]** selector in the destination configuration screen has been updated to **[!UICONTROL Datastream]** for improved clarity in the user interface. |
| Marketing actions visibility in destination selection | Marketing actions are now displayed in the right rail of the [!UICONTROL Select Destination] step when configuring a dataflow, providing immediate visibility of marketing action changes without requiring navigation to the view page. This improvement enhances the user experience by making it easier to verify marketing action configurations during destination setup. |
|Edit marketing actions for destinations | You can now edit marketing actions for existing destinations. |
| Account names and descriptions for destination connections | You can now add account names and descriptions when connecting to destinations, enabling better management of destinations with multiple accounts. |

**Fixes**

| Issue | Description |
| --- | --- |
| Categories scroll functionality | Fixed an issue where the categories side menu in the destinations and sources catalog did not scroll properly on mouseover, improving navigation usability for users browsing destination categories. |

For more information, read the [Destinations overview](../destinations/home.md).

## Data Ingestion {#ingestion}

Experience Platform provides a comprehensive data ingestion framework that supports both batch and streaming data ingestion from various sources.

**New features**

| Feature | Description |
| ------- | ----------- |
| Support for monitoring streaming profile ingestion | Real-time monitoring for streaming profile ingestion is now available, providing transparency into throughput, latency, and data quality metrics. This supports proactive alerting and actionable insights to help data engineers identify capacity violations and ingestion issues. |

For more information, read the [data ingestion overview](../ingestion/home.md).

## Query Service {#query-service}

Adobe Experience Platform Query Service provides a robust SQL interface for data analysis and exploration across the platform.

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| Enhanced session management | Data Distiller now includes enhanced session management capabilities, providing better control over user sessions and improved performance monitoring across development and production environments. |
| Support for non-expiring credentials password character restrictions | Data Distiller now supports non-expiring credentials with specific character restrictions. While passwords require at least one number, one lowercase letter, one uppercase letter, and one special character, the dollar sign ($) is not supported. Recommended special characters include `!, @, #, ^, or &`. |
| Improved performance consistency across environments | Data Distiller performance is now consistent between development and production sandboxes, with similar backend resources available in both environments. Compute hours consumed may vary based on data volume and available backend compute resources at processing time. |

For more information, read the [Query Service overview](../query-service/home.md).

## Real-Time CDP B2B Edition {#b2b}

Real-Time CDP B2B Edition provides comprehensive B2B customer data management capabilities, enabling organizations to build unified customer profiles, create sophisticated B2B audiences, and activate data across various marketing channels.

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| B2B architecture upgrade | Experience Platform is upgrading to a new B2B architecture that introduces significant improvements to multi-entity audiences with B2B attributes. This upgrade consolidates merge policy support, enhances audience counts accuracy, and improves entity resolution capabilities. |
| Merge policy Consolidation for multi-entity Audiences | Multi-entity audiences with B2B attributes now support only a single merge policy — the default merge policy — instead of supporting multiple merge policies. This change ensures consistent audience composition and simplifies merge logic management. |
| Updates to account audience constraints | Account audiences no longer have the previous constraints of a 30 day lookback window for Experience Events, custom entity restrictions, or limitations on using `inSegment` events. These updates provide greater flexibility in creating complex B2B audience definitions. |
| Enhanced audience counts for B2B entities | Audience size estimates for audiences with B2B entities like Accounts and Opportunities are now exact, based on real-time segmentation results. This improvement provides more accurate and reliable estimates for audiences involving complex B2B relationships. |
| Account snapshots for audience membership | Audience membership details are now included for Account entities in snapshot exports, enabling access to account-level audience status, timestamps, and membership indicators. This brings feature parity between Profile (Person) and Account segmentation models. |
| Sandbox tooling changes for multi-entity audiences | Importing multi-entity audiences with B2B entities and Experience Events exported before migration is no longer supported. These audiences will fail import validation and cannot be automatically converted to the new architecture. Audiences must be re-exported after migration before importing into target sandboxes. |
| B2B Entity API deprecations | Audience creation via API for B2B entities (Account, Opportunity, Account-Person Relation, Opportunity-Person Relation, Campaign, Campaign Member, Marketing List, and Marketing List Member) is now deprecated. Additionally, Profile Access API lookup and delete operations for these B2B entities are also deprecated. |
| Updates to identity namespace for Entity Resolution  | Account and Opportunity entities now use time-precedence based merging with specific identity namespaces (`b2b_account` for Account, `b2b_opportunity` for Opportunity). All other entities are unified with primary identity overlaps merged using time-precedence based merging. |

For more information, read the [Real-Time CDP B2B Edition overview](../rtcdp/b2b/overview.md).

## Sandboxes {#sandboxes}

Experience Platform is built to enrich digital experience applications on a global scale. Companies often run multiple digital experience applications in parallel and need to cater for the development, testing, and deployment of these applications while ensuring operational compliance.

**New or updated features**

| Feature | Description |
| --- | --- |
| Changes to multi-entity audience imports | Sandbox tooling has been updated to support the new B2B architecture upgrade. Multi-entity audiences containing B2B entities and Experience Events must be re-exported after the architecture upgrade before being imported into target sandboxes via sandbox tooling. Importing pre-upgrade versions will fail validation. |

For more information on sandboxes, read the [sandboxes overview](../sandboxes/home.md).

## Segmentation Service {#segmentation-service}

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Audiences can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| External audience API | You can use the external audiences API to programmatically import externally generated audiences into Adobe Experience Platform. |

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New sources**

| Source | Description |
| --- | --- |
| Support for [!DNL Didomi] (Streaming SDK) | The [!DNL Didomi] source connector enables you to ingest consent management data from [!DNL Didomi]'s platform, supporting compliance with privacy regulations and consent-based marketing strategies. |

**New or updated functionality**

| Feature | Description |
| --- | --- |
| Support for change data capture in select sources | You can now create dataflows that enable change data capture for incremental ingestion using source connectors. This capability allows customers to bring change data type for incremental ingestion, improving data freshness and reducing processing overhead. |
| Support for soft deletion of records in [!DNL Salesforce] | The [!DNL Salesforce] source now supports including soft deleted records through an optional `includeDeletedObjects` parameter. When set to true, customers can include soft deleted records in their [!DNL Salesforce] queries and bring these records into Experience Platform. |

For more information, read the [sources overview](../sources/home.md).
