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

**Release date: October 2025**

New features and updates to existing features in Adobe Experience Platform:

- [Access Control](#access-control)
- [Alerts](#alerts)
- [Audiences](#audiences)
- [Destinations](#destinations)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)

## Access Control {#access-control}

Experience Platform leverages Adobe Admin Console product profiles to link users with permissions and sandboxes. Permissions control access to a variety of Platform capabilities, including data modeling, profile management, and sandbox administration.

**Updated documentation**

| Feature | Description |
| --- | --- |
| Access labels documentation clarity improvements | The documentation for using access labels to manage user access to destination dataflows has been enhanced with improved clarity. The "Important callouts" section now uses discrete bullet points for easier scanning, and includes a new callout explaining that destination dataflows without user access may appear in the UI in a greyed-out state. Users cannot perform any actions on these dataflows. Visual indicators have been added through screenshots showing the greyed-out dataflows in the Destinations > Browse view, improving user expectations and reducing support questions. |

For more information, read the [access control overview](../access-control/home.md).

## Alerts {#alerts}

Experience Platform allows you to subscribe to event-based alerts for various Experience Platform activities. You can subscribe to different alert rules through the [!UICONTROL Alerts] tab in the Experience Platform user interface, and can choose to receive alert messages within the UI itself or through email notifications.

**New or updated features**

| Feature | Description |
| --- | --- |
| Destination failure rate alert | A new alert has been added for destinations: **Destination failure rate exceeds threshold**. This alert notifies you when the number of failed records while activating data has exceeded the allowed threshold, enabling you to respond quickly to activation issues. |

{style="table-layout:auto"}

For more information about alerts, read the [[!DNL Observability Insights] overview](../observability/home.md).

## Audiences {#audiences}

The Audiences feature in Adobe Experience Platform allows you to build, manage, and activate customer segments for targeted marketing campaigns and personalization efforts.

**Updated features**

| Feature | Description |
| ------- | ----------- |
| Enhanced datetime field support | Improved datetime field functionality in audience building with comprehensive guidance on how to effectively use datetime fields in segmentation criteria. This update provides better support for time-based audience targeting and more accurate temporal segmentation. |
| Updated segmentation guides | Comprehensive updates to basic and comprehensive segmentation guides including improved instructions for creating effective audience segments. The updated guides provide clearer instructions for leveraging the full capabilities of the segmentation service. |
| Improved audience estimates | Enhanced audience estimation capabilities with updated UI screenshots and more accurate estimation algorithms. The improvements provide better insights into audience sizes and composition before activation, helping marketers make more informed decisions about their targeting strategies. |

For more information, read the [Audiences overview](../audiences/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations**

| Destination | Description |
| --- | --- |
| AdForm |
| Amazon Ads |

<!--
| Snowflake |
-->

**New or updated functionality**

| Feature | Description |
| --- | --- |
| Support for AES256 server-side encryption in Amazon S3 destinations |
| Several new destinations that support audience-level monitoring | <ul><li>Airship Tags</li><li>(API) Salesforce Marketing Cloud</li><li>Marketo Engage</li><li>Microsoft Bing</li><li>(V1) Pega CDH Realtime Audience</li><li>(V2) Pega CDH Realtime Audience</li><li>Salesforce Marketing Cloud Account Engagement</li><li>The Trade Desk</li></ul> |
| Dataset export guardrails fix | A fix has been implemented to the dataset export guardrails. Previously, some datasets which had a timestamp column and were _not_ based on the XDM Experience Events schema were incorrectly treated as Experience Events datasets, limiting exports to a 365-day lookback window. The documented 365-day lookback guardrail now applies exclusively to Experience Events datasets. Datasets based on any schema apart from the XDM Experience Events schema are now governed by the 10 billion records guardrail. Some customers may see increased export numbers for datasets which erroneously fell under the 365-day lookback window. This enables you to export datasets for predictive workflows that have a long lookback window. For more information, read the [dataset export guardrails](../destinations/guardrails.md#dataset-exports). |
| Enhanced audience-level reporting for enterprise destinations | Improved audience-level reporting logic for enterprise destinations. After this release, customers will see more accurate audience reporting numbers that include only audiences relevant for the selected destination. This monitoring adjustment ensures reporting includes only audiences mapped on the dataflow, providing clearer insights into actual data activation. This does not affect the amount of data being activated—it is purely a monitoring enhancement to improve reporting accuracy. |

For more information, read the [Destinations overview](../destinations/home.md).

## Segmentation Service {#segmentation-service}

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Audiences can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| Goodness of Query best practices guide | A comprehensive best practices guide for authoring audiences in Adobe Experience Platform is now available. This guide provides guidance for marketers, audience builders, data engineers, architects, and administrators on how to create effective and efficient audience segments. The guide covers best practices for query optimization and audience building strategies to help users maximize the value of their segmentation efforts. |
| [!BADGE Beta]{type=Informative} TenK Segmentation | Enhanced batch segmentation capabilities with improved scalability and performance. This beta feature provides advanced segmentation capabilities for large-scale audience processing, enabling more efficient handling of complex audience definitions and large datasets. TenK segmentation enables customers to scale their segmentation operations significantly beyond previous limits. |
| Streaming segmentation monitoring | Real-time monitoring for streaming segmentation provides transparency into evaluation rate, latency, and data quality metrics at the Sandbox, Dataset, and segment levels. This supports proactive alerting and actionable insights to help data engineers identify capacity violations and ingestion issues. Monitoring metrics include evaluation rate, P95 ingestion latency, records received, evaluated, failed, and skipped. View-by-dataset and view-by-segment capabilities provide comprehensive visibility into net new profiles qualified and disqualified. |

For more information, read the [[!DNL Segmentation Service] overview](../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated sources**

| Source | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} [!DNL Talon.one] source connector for loyalty data | A new Talon.one source connector is now available for ingesting loyalty data into Adobe Experience Platform. This source connector enables customers to stream data from Talon.one loyalty applications into AEP as part of Adobe's loyalty offering strategy. The connector supports streaming of profile data, transaction data, and loyalty data including points earned, points redeemed, points expired, and tier data. Customers can also bring in historical data through Data Landing Zone as a one-time activity. |

**Updated sources**

| Source | Description |
| --- | --- |
| [!DNL Google Ads] connector API GA and version update | The Google Ads source connector API version is now generally available (GA). The API documentation has been updated to reflect that the latest version is v21, and Experience Platform supports all versions v19 and above. The beta tag has been removed from the API documentation. The UI version remains in beta, and the documentation now includes a note stating that incremental data ingestion is not supported via UI—only one-time ingestion is supported. To use incremental data ingestion, use the API route. |
| [!DNL Azure Event Hubs] virtual network support | Adobe now explicitly supports virtual network connections to Azure Event Hubs, enabling data transfer over private networks rather than public networks. Customers can whitelist the Adobe Experience Platform VNet to route Event Hubs traffic privately through the Azure private backbone, providing enhanced security and compliance for data ingestion workflows. |

For more information, read the [sources overview](../sources/home.md).
