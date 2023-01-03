---
title: Adobe Experience Platform Release Notes August 2021
description: The August 2021 release notes for Adobe Experience Platform.
doc-type: release notes
last-update: August 25, 2021
author: ens28527
exl-id: 0513b9dc-b16c-43b3-8e17-4be4499308d4
---
# Adobe Experience Platform release notes 

**Release date: August 25, 2021**

Updates to existing features in Adobe Experience Platform:

- [Destinations](#destinations)
- [Observability Insights](#observability)
- [Real-Time Customer Profile](#profile)
- [Sources](#sources)

## Destinations {#destinations}

Destinations are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New destinations**

| Destination | Description |
| ----------- | ----------- |
| [[!DNL Airship Attributes]](../../destinations/catalog/mobile-engagement/airship-attributes.md) | The Airship Attributes destination, previously in beta, is now generally available. |
| [[!DNL Airship Tags]](../../destinations/catalog/mobile-engagement/airship-tags.md) | The Airship Tags destination, previously in beta, is now generally available. |
| [[!DNL Braze]](../../destinations/catalog/mobile-engagement/braze.md) | The Braze destination, previously in beta, is now generally available. |
| [[!DNL Pinterest Customer List]](../../destinations/catalog/advertising/pinterest.md) | With the Pinterest Customer List destination, you can create audiences from your customer lists, people who've visited your site or people who have already interacted with your content on Pinterest. |
| [[!DNL Twitter Custom Audiences]](../../destinations/catalog/social/twitter.md) | Target your existing followers and customers in Twitter and create relevant re-marketing campaigns by activating your audiences built within Adobe Experience Platform. |
| [[!DNL Verizon Media/Yahoo DataX]](../../destinations/catalog/advertising/datax.md) | DataX is an aggregate Verizon Media/Yahoo infrastructure that hosts various components that enable Verizon Media/Yahoo to exchange data with its external partners in a secure, automated and scalable manner.|

**New features**

| Feature | Description |
| --- | --- |
| [[!DNL Destination SDK]](../../destinations/destination-sdk/overview.md) | Adobe Experience Platform Destination SDK is a suite of configuration APIs that allow you to configure destination integration patterns for Experience Platform to deliver audience and profile data to your endpoint, based on data and authentication formats of your choice. The configurations are stored in Experience Platform and can be retrieved via API for additional updates. |
| [Usability improvements to Destinations](../../destinations/ui/activation-overview.md) | Usability improvements to destinations enable marketers to seamlessly activate segments to existing destinations. |

For more general information on destinations, refer to the [destinations overview](../../destinations/home.md).

## Observability Insights {#observability}

Observability Insights allows you to monitor Platform activities through the use of statistical metrics and event notifications.

**New Features**

| Feature | Description |
| --- | --- |
| Alerts | You can now subscribe to important alerts related to workflows running on Platform. After subscribing to specific alert rules, you will receive in-UI notifications and emails when an important lifecycle event happens (such as successful data ingestion) or if there are issues that need your attention (such as an ingestion flow failing or a segment job taking longer than expected). For more information, see the [alerts overview](../../observability/alerts/overview.md). |

See the [Observability Insights overview](../../observability/home.md) for more information on the service.

## Real-Time Customer Profile {#profile}

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With Real-Time Customer Profile, you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data. Profile allows you to consolidate customer data into a unified view offering an actionable, timestamped account of every customer interaction.

| Feature | Description |
| ------- | ----------- |
|Browse profiles by merge policy or identity| When browsing profiles in Experience Platform, you can now browse by merge policy to preview 20 sample profiles based on the selected merge policy. You can also browse by identity in order to search for a specific profile using an identity namespace and related identity value. For more information, see the [Real-Time Customer Profile UI guide](../../profile/ui/user-guide.md).|

To learn more about Real-Time Customer Profile, including tutorials and best practices for working with profile data, please begin by reading the [Real-Time Customer Profile overview](../../profile/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

| Feature | Description |
| ------- | ----------- |
| Local file upload source connector | The file ingestion category has been renamed to local system, allowing you to bring local files directly to Platform using the local file upload connector. Data ingested through this connector can be monitored through the Monitoring Dashboard. See the [local file upload source overview](../../sources/connectors/local-system/local-file-upload.md) for more information. |

To learn more about sources, see the [sources overview](../../sources/home.md).
