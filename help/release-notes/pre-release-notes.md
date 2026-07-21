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
>- [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/releases/latest)
>- [Federated Audience Composition](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/release-notes)
>- [Real-Time CDP Collaboration](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/latest)

**Release date: July 2026**

New features and updates to existing features in Adobe Experience Platform:

- [Destinations](#destinations)
- [Real-Time Customer Profile](#real-time-customer-profile)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated destinations**

| Feature | Description |
| --- | --- |
| [Limit exported audience membership to only mapped audiences](../destinations/ui/activate-segment-streaming-destinations.md#select-destination) | By default, an exported profile includes membership data for every audience under the same merge policy, even audiences you did not map to that dataflow. This inflates payload size and can expose audience data you did not intend to share. For [HTTP API](../destinations/catalog/streaming/http-destination.md), [Azure Event Hubs](../destinations/catalog/cloud-storage/azure-event-hubs.md), and [Amazon Kinesis](../destinations/catalog/cloud-storage/amazon-kinesis.md) destinations, enable **[!UICONTROL Include Mapped Audiences Only]** in the **[!UICONTROL Configure destination]** step to export membership only for the audiences you mapped to that dataflow. New dataflows have this control enabled by default. Existing dataflows keep exporting membership for all audiences that share the same merge policy, unless you turn the control on. |
| [Search for namespaces in the Select source field page](../destinations/ui/activate-segment-streaming-destinations.md#select-source-field) | Use the new search field in the **[!UICONTROL Select source field]** dialog to filter the identity namespace list by name when mapping audiences during activation. |
| [Search for audiences in the Select audiences page](../destinations/ui/activate-segment-streaming-destinations.md#select-audiences) | Find audiences faster in the **[!UICONTROL Select audiences]** step of the activation workflow. Filter by evaluation type (edge, streaming, or batch), namespace origin, and audience tags. |
| [Search for destinations in the Select destination page](../destinations/ui/activate-segment-streaming-destinations.md#select-destination) | Find destinations and existing dataflows faster in the **[!UICONTROL Select destination]** step of the activation workflow, including when you activate directly from an audience. |
| [Hourly export frequency for incremental dataset exports](../destinations/ui/export-datasets.md) | Select **[!UICONTROL 1 hour]** from the **[!UICONTROL Every]** dropdown when you schedule an incremental dataset export to a cloud storage destination, in addition to the existing 3, 6, 8, and 12 hour options. This option is also available through the [dataset export API](../destinations/api/export-datasets.md). |
| [[!DNL Microsoft Ads]](../destinations/catalog/advertising/microsoft-ads-customer-match.md) hashed email support | Map an already-hashed email field to the new hashed-email identity namespace when activating audiences to [!DNL Microsoft Ads]. Adobe sends already-hashed values as-is, while plain-text email fields continue to be sanitized and hashed by Adobe before export. Exported audience names now include a UTC timestamp to prevent naming collisions with audiences exported through the legacy [!DNL Bing Ads] connector. |
| [Export arrays and complex objects to streaming destinations](../destinations/ui/export-arrays-maps-objects.md) | Select arrays and complex objects, such as maps and arrays of objects, when mapping audiences to [HTTP API](../destinations/catalog/streaming/http-destination.md), [Amazon Kinesis](../destinations/catalog/cloud-storage/amazon-kinesis.md), and [Azure Event Hubs](../destinations/catalog/cloud-storage/azure-event-hubs.md) destinations. |
| [(Legacy) [!DNL Amazon Ads]](../destinations/catalog/advertising/amazon-ads.md) deprecated | The legacy [!DNL Amazon Ads] destination is now deprecated. Use the [[!DNL Amazon Ads]](../destinations/catalog/advertising/amazon-ads-v2.md) destination for new connections. Existing dataflows created with the legacy connector remain accessible and continue to run. |
| [[!DNL Kevel]](../destinations/catalog/advertising/kevel.md) incrementality group mapping | Map a profile attribute to the incrementality testing group field in the [!DNL Kevel] destination, so exported user records include the correct group value for incrementality testing use cases. |
| [[!DNL LiveRamp] - Onboarding](../destinations/catalog/advertising/liveramp-onboarding.md) updates | The [!DNL LiveRamp] - Onboarding destination now supports a **[!UICONTROL ONCE]** export frequency for one-time deliveries. The file-split threshold for exported files increased from 10 million to 100 million rows. The **[!UICONTROL Expired]** activation status has been removed. |
| [Audience-level reporting for additional destinations](../dataflows/ui/monitor-destinations.md#audience-level-view) | Audience-level dataflow reporting is now available for [Adobe Advertising DSP](../destinations/catalog/advertising/adobe-advertising-dsp-connection.md), [Algolia](../destinations/catalog/personalization/algolia.md), [Bombora Account Audiences](../destinations/catalog/advertising/bombora.md), [Demandbase](../destinations/catalog/advertising/demandbase-people.md), [Kevel](../destinations/catalog/advertising/kevel.md), [LINE](../destinations/catalog/mobile-engagement/line.md), [Mailchimp Interest Categories](../destinations/catalog/email-marketing/mailchimp-interest-categories.md), [Medallia](../destinations/catalog/voice/medallia.md), [Microsoft Ads Customer Match](../destinations/catalog/advertising/microsoft-ads-customer-match.md), [Reddit Custom Audience](../destinations/catalog/advertising/reddit-custom-audience.md), [Rokt](../destinations/catalog/advertising/rokt.md), [SendGrid](../destinations/catalog/email-marketing/sendgrid.md), [Snap Inc](../destinations/catalog/advertising/snap-inc.md), and [Zeta Marketing Platform](../destinations/catalog/data-management/zeta-marketing-platform.md). |
| [[!DNL Demandbase People]](../destinations/catalog/advertising/demandbase-people.md) new mapping fields | Map three new optional target fields, `title`, `jobLevel`, and `jobFunction`, to the [!DNL Demandbase People] destination in addition to the existing mandatory and recommended mappings. Adobe recommends mapping these fields when available for richer person data and better downstream audience targeting. |

{style="table-layout:auto"}

For more information, read the [Destinations overview](../destinations/home.md).

## Real-Time Customer Profile {#real-time-customer-profile}

Use Real-Time Customer Profile to create a holistic view of each individual known and anonymous customer, aggregated from multiple online and offline sources in real time.

**New or updated features**

| Feature | Description |
| --- | --- |
| Faster profile exports and activation | Profile attribute data is now consolidated when data is written, instead of repeatedly at read time. As a result, profile exports complete significantly faster, so downstream activations to destinations and [!DNL Adobe Journey Optimizer] are available sooner. This is a fully managed, back-end update. There is no change to how you configure or use Real-Time Customer Profile, though ingestion of profile attributes may take modestly longer, since more processing now happens at write time. This update is being rolled out through the end of July 2026. Review your scheduled ingestion and segmentation jobs to confirm the timing buffer between them remains appropriate, and consider moving up downstream activation schedules that were previously limited by processing time. |

{style="table-layout:auto"}

For more information, read the [Real-Time Customer Profile overview](../profile/home.md).

## Segmentation Service {#segmentation-service}

Use Segmentation Service to create audiences from your customer data and manage their full lifecycle in Experience Platform.

**New or updated features**

| Feature | Description |
| --- | --- |
| External audience file support for JSON and Parquet | Upload external audiences as JSON or Parquet files, in addition to existing supported formats. The `dataFilterStartTime` field is now optional when you create an external audience from an uploaded file. |
| [Audience Builder enhancements](../segmentation/ui/segment-builder.md) | Updated audience-building experience with enhanced usage patterns for creating and managing audience definitions. |

{style="table-layout:auto"}

>[!IMPORTANT]
>
>[!DNL Segment Match] will be discontinued and unavailable for use after November 27, 2026. [!DNL Real-Time CDP] Prime and Ultimate customers should transition data collaboration use cases from [!DNL Segment Match] to [!DNL Real-Time CDP Collaboration].

For more information, read the [Audiences overview](../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated sources**

| Source | Description |
| --- | --- |
| [!DNL Google Ads] | Use the [!DNL Google Ads] source to configure the complete [!DNL Google Ads] ingestion workflow in the Sources UI. Connect your [!DNL Google Ads] account and bring paid media data directly into Experience Platform for activation and analysis. |

{style="table-layout:auto"}

For more information, read the [sources overview](../sources/home.md).
