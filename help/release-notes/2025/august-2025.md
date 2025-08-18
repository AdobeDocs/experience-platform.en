---
title: Adobe Experience Platform Release Notes August 2025
description: The August 2025 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes

>[!TIP]
>
>Refer to the following documentation for release notes of other Adobe Experience Platform applications:
>
>- [Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/whats-new/release-notes)
>- [Adobe Journey Optimizer B2B](https://experienceleague.adobe.com/en/docs/journey-optimizer-b2b/user/release-notes)
>- [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/releases/pre-release-notes)
>- [Federated Audience Composition](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/e-release-notes)
>- [Real-Time CDP Collaboration](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/latest)

**Release date: August 19, 2025**


New features and updates to existing features in Adobe Experience Platform:

- [Alerts](#alerts)
- [Destinations](#destinations)
- [Experience Data Model (XDM)](#xdm)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)

## Alerts {#alerts}

Experience Platform allows you to subscribe to event-based alerts for various Experience Platform activities. You can subscribe to different alert rules through the [!UICONTROL Alerts] tab in the Experience Platform user interface, and can choose to receive alert messages within the UI itself or through email notifications.

**New features**

| Feature | Description |
| ------- | ----------- |
| Streaming throughput capacity alerts | Three new alerts allow users to subscribe to and configure alerts to proactively manage and monitor performance of streaming throughput capacity. New alerts include when streaming throughput reached 80%, 90%, or exceeds capacity limits. For more information, read the [capacity alert rules](../observability/alerts/rules.md#capacity) guide. |

For more information about alerts, read the [[!DNL Observability Insights] overview](../../observability/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

>[!IMPORTANT]
>
>**Dataset export schedule extension**
>
>If your organization has dataset export dataflows created prior to November 2024, these dataflows will stop working on **September 1st, 2025**. If you need the dataflows to keep exporting data after September 1st, 2025, you must extend their schedules for each destination to which you are exporting datasets, by following the steps in [this guide](../../destinations/ui/dataset-expiration-update.md).

**New destinations**

| Destination | Description |
| --- | --- |
| [!DNL Acxiom Real ID Audience] destination  | Use the [!DNL Acxiom Real ID Audience Connection] destination to enhance audiences with [!DNL Acxiom's] [Real ID&trade;](https://www.acxiom.com/real-id/real-id/) technology and activate audiences to multiple platforms, such as [!DNL Altice], [!DNL Ampersand], [!DNL Comcast], and more. |

**Updated destinations**

| Destination | Description |
| --- | --- |
| Authentication expiration details for [!DNL LinkedIn] and [!DNL Pinterest] destinations | Account expiration information is now visible directly in the Experience Platform interface, so you can see when your [!DNL LinkedIn] and [!DNL Pinterest] authentication will expire and renew it before it causes any disruptions to your dataflows. |
| Encryption support for [!DNL Data Landing Zone] destinations | Protect your exported data with encryption. You can now attach RSA-formatted public keys to encrypt your exported files, giving you the same level of security that other cloud storage destinations provide for your sensitive information. |
| [[!DNL Microsoft Bing]](../destinations/catalog/advertising/bing.md) internal upgrade | Starting August 11, 2025, you can see two **[!DNL Microsoft Bing]** cards side-by-side in the destinations catalog. This is due to an internal upgrade to the destinations service. The existing **[!DNL Microsoft Bing]** destination connector has been renamed to **[!UICONTROL (Deprecated) Microsoft Bing]** and a new card with the name **[!UICONTROL Microsoft Bing]** is now available to you. Use the new **[!UICONTROL Microsoft Bing]** connection in the catalog for new activation data flows. If you have any active dataflows to the **[!UICONTROL (Deprecated) Microsoft Bing]** destination, they will be updated automatically, so no action is required from you. <br><br>If you are creating dataflows through the [Flow Service API](https://developer.adobe.com/experience-platform-apis/references/destinations/), you must update your [!DNL flow spec ID] and [!DNL connection spec ID] to the following values:<ul><li>Flow spec ID: `8d42c81d-9ba7-4534-9bf6-cf7c64fbd12e`</li><li>Connection spec ID: `dd69fc59-3bc5-451e-8ec2-1e74a670afd4`</li></ul> Following this upgrade, you may experience a **drop in the number of activated profiles** in your dataflows to [!DNL Microsoft Bing]. This drop is caused by the introduction of the **ECID mapping requirement** for all activations to this destination platform.|
| [!DNL Marketo] destination cards consolidation | Simplify your [!DNL Marketo] destination setup with our unified destination card. We've consolidated [!DNL Marketo] V2 and V3 cards into one streamlined option, making it easier to choose the right destination and get started quickly. |

**New or updated functionality**

| Feature | Description |
| --- | --- |
| Enhanced search, filtering, and tagging capabilities for destinations | Improve your destination management workflow with enhanced search, filtering, and tagging capabilities across the Browse and Accounts tabs. You can now search for specific dataflows and accounts by name, filter by various criteria including destination platform, status, and dates, and create custom tags to organize your destinations. Column sorting is also available for key fields like last dataflow run time, making it easier to identify and manage your destination connections. |

For more information, read the [Destinations overview](../../destinations/home.md).

## Experience Data Model (XDM) {#xdm}

XDM is an open-source specification that provides common structures and definitions (schemas) for data that is brought into Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

**New features**

| Feature | Description |
| ------- | ----------- |
| Model-Based Schemas | Simplify your data modeling with Model-Based Schemas. You can now create schemas more easily with comprehensive how-to examples and guidance. This feature is currently available to Campaign Orchestration license holders and will expand to Data Distiller customers at GA, making data modeling more accessible and efficient. |

For more information, read the [XDM overview](../../xdm/home.md).

## Segmentation Service {#segmentation-service}

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Audiences can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| Audience estimates | Audience estimates are now automatically generated within Segment Builder. This value will be updated whenever you modify the audience, and always reflects the latest audience rules. |

For more information, read the [[!DNL Segmentation Service] overview](../../segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated functionality**

| Feature | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} Azure Private Link Support in the UI | Keep your data secure with private network connections. You can now create private endpoints and set up dataflows that bypass the public internet, giving you enhanced security and network isolation for your sensitive data. |
| [!DNL Marketo] source documentation updates | Get complete visibility into how your [!DNL Marketo] data is transformed when it enters Experience Platform. All field mappings now include detailed explanations of data transformations, so you can understand exactly how your `PersonID` becomes `leadID` and `eventType` becomes `activityType`. |
| Support for service principal authentication for [!DNL Azure Blob Storage] | You can now connect your [!DNL Azure Blob Storage] account to Experience Platform with service principal authentication. |

For more information, read the [sources overview](../../sources/home.md).
