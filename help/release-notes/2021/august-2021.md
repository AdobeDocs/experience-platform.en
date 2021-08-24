---
title: Adobe Experience Platform Release Notes
description: Experience Platform release notes for August 25, 2021.
doc-type: release notes
last-update: August 25, 2021
author: ens28527
---

# Adobe Experience Platform release notes 

**Release date: August 25, 2021**

Updates to existing features in Adobe Experience Platform:

- [Observability Insights](#observability)
- [Real-time Customer Profile](#profile)
- [Sources](#sources)

## Observability Insights {#observability}

Observability Insights allows you to monitor Platform activities through the use of statistical metrics and event notifications.

**New Features**

| Feature | Description |
| --- | --- |
| Alerts | You can now subscribe to important alerts related to workflows running on Platform. After subscribing to specific alert rules, you will receive in-UI notifications and emails when an important lifecycle event happens (such as successful data ingestion) or if there are issues that need your attention (such as an ingestion flow failing or a segment job taking longer than expected). For more information, see the [alerts overview](../../observability/alerts/overview.md). |

See the [Observability Insights overview](../../observability/home.md) for more information on the service.

## Real-time Customer Profile {#profile}

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With Real-time Customer Profile, you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data. Profile allows you to consolidate customer data into a unified view offering an actionable, timestamped account of every customer interaction.

| Feature | Description |
| ------- | ----------- |
|Browse profiles by merge policy or identity| When browsing profiles in Experience Platform, you can now browse by merge policy to preview 20 sample profiles based on the selected merge policy. You can also browse by identity in order to search for a specific profile using an identity namespace and related identity value. For more information, see the [Real-time Customer Profile UI guide](../../profile/ui/user-guide.md).|

To learn more about Real-time Customer Profile, including tutorials and best practices for working with profile data, please begin by reading the [Real-time Customer Profile overview](../../profile/home.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

| Feature | Description |
| ------- | ----------- |
| Local file upload source connector | The file ingestion category has been renamed to local system, allowing you to bring local files directly to Platform using the local file upload connector. Data ingested through this connector can be monitored through the Monitoring Dashboard. See the [local file upload source overview](../../sources/connectors/local-system/local-file-upload.md) for more information. |

To learn more about sources, see the [sources overview](../../sources/home.md).
