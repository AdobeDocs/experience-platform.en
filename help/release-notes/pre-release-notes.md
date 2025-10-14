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

- [Alerts](#alerts)
- [Destinations](#destinations)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)

## Alerts {#alerts}

Experience Platform allows you to subscribe to event-based alerts for various Experience Platform activities. You can subscribe to different alert rules through the [!UICONTROL Alerts] tab in the Experience Platform user interface, and can choose to receive alert messages within the UI itself or through email notifications.

**New or updated features**

| Feature | Description |
| --- | --- |
| Destination failure rate alert | A new alert has been added for destinations: **Destination failure rate exceeds threshold**. This alert notifies you when the number of failed records while activating data has exceeded the allowed threshold, enabling you to respond quickly to activation issues. |

{style="table-layout:auto"}

For more information about alerts, read the [[!DNL Observability Insights] overview](../observability/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations**

| Destination | Description |
| --- | --- |
| AdForm | Use this destination to send Adobe Real-Time CDP audiences to Adform for activation based on the Experience Cloud ID (ECID) and Adform's ID Fusion. Adform's ID Fusion is Adform's ID resolution service that allows you to activate your first party audiences based on the Experience Cloud ID (ECID). |
| `Amazon Ads` | We have added additional personal identifiers support such as `firstName`, `lastName`, `street`, `city`, `state`, `zip`, and `country`. Mapping these fields as target identities can improve audience match rates. |

**New or updated functionality**

| Feature | Description |
| --- | --- |
| Support for [!DNL AES256] server-side encryption in [!DNL Amazon S3] destinations | [!DNL Amazon S3] destinations now support [!DNL AES256] server-side encryption, providing enhanced security for your exported data. You can configure this encryption method when setting up or updating your [!DNL Amazon S3] destination connections, ensuring that your data is encrypted at rest using industry-standard [!DNL AES256] encryption algorithms. For more information, read the [[!DNL Amazon] documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingEncryption.html). |
| Several new destinations that support audience-level monitoring | The following destinations now support audience-level monitoring: <ul><li>[!DNL Airship Tags]</li><li>(API) [!DNL Salesforce Marketing Cloud]</li><li>[!DNL Marketo Engage]</li><li>[!DNL Microsoft Bing]</li><li>(V1) [!DNL Pega CDH Realtime Audience]</li><li>(V2) [!DNL Pega CDH Realtime Audience]</li><li>[!DNL Salesforce Marketing Cloud] Account Engagement</li><li>[!DNL The Trade Desk]</li></ul> |
| Dataset export guardrails fix | A fix has been implemented to the dataset export guardrails. Previously, some datasets which had a timestamp column and were _not_ based on the XDM Experience Events schema were incorrectly treated as Experience Events datasets, limiting exports to a 365-day lookback window. The documented 365-day lookback guardrail now applies exclusively to Experience Events datasets. Datasets based on any schema apart from the XDM Experience Events schema are now governed by the 10 billion records guardrail. Some customers may see increased export numbers for datasets which erroneously fell under the 365-day lookback window. This enables you to export datasets for predictive workflows that have a long lookback window. For more information, read the [dataset export guardrails](../destinations/guardrails.md#dataset-exports). |
| Enhanced audience-level reporting for enterprise destinations | Improved audience-level reporting logic for enterprise destinations. After this release, customers will see more accurate audience reporting numbers that include only audiences relevant for the selected destination. This monitoring adjustment ensures reporting includes only audiences mapped on the dataflow, providing clearer insights into actual data activation. This does not affect the amount of data being activated—it is purely a monitoring enhancement to improve reporting accuracy. |

For more information, read the [Destinations overview](../destinations/home.md).

## Segmentation Service {#segmentation-service}

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Audiences can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| Streaming segmentation monitoring | Real-time monitoring for streaming segmentation provides transparency into evaluation rate, latency, and data quality metrics at the sandbox, dataset, and audience levels. This supports proactive alerting and actionable insights to help data engineers identify capacity violations and ingestion issues. Monitoring metrics include evaluation rate, P95 ingestion latency, as well as records received, evaluated, failed, and skipped. View-by-dataset and view-by-audience capabilities provide comprehensive visibility into net new profiles qualified and disqualified. |

For more information, read the [[!DNL Segmentation Service] overview](../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated sources**

| Source | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} [!DNL Talon.one] sources for loyalty data | Use the [!DNL Talon.One] sources to ingest batch and streaming loyalty data into Experience Platform. The connector supports streaming of profile data, transaction data, and loyalty data including points earned, points redeemed, points expired, and tier data. |

**Updated sources**

| Source | Description |
| --- | --- |
| General Availability of [!DNL Google Ads] source (API-only) | The API version of the [!DNL Google Ads] source is now in General Availability. The API documentation has been updated to reflect that the latest version is now `v21`, and Experience Platform supports all versions v19 and above. The UI version remains in beta and only supports one-time ingestion. To use incremental data ingestion, use the API route. |
| [!DNL Azure Event Hubs] virtual network support | Adobe now explicitly supports virtual network connections to Azure Event Hubs, enabling data transfer over private networks rather than public networks. Customers can allowlist the Experience Platform VNet to route Event Hubs traffic privately through the Azure private backbone, providing enhanced security and compliance for data ingestion workflows. |

For more information, read the [sources overview](../sources/home.md).
