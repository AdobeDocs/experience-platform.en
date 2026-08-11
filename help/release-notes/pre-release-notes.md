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

**Release date: August 2026**

New features and updates to existing features in Adobe Experience Platform:

- [Capacity](#capacity)
- [Data Governance](#data-governance)
- [Destinations](#destinations)
- [Ingestion](#ingestion)
- [Run and Operate](#run-and-operate)
- [Sources](#sources)

## Data Governance {#data-governance}

Use Data Governance to manage data usage policies and enforce compliance with data usage labels across Experience Platform.

**New or updated features**

| Feature | Description |
| --- | --- |
| Web Application Firewall (WAF) for [!DNL Experience Platform] | [!DNL Experience Platform] applications and APIs are now protected by a Web Application Firewall (WAF), adding an additional layer of security coverage. This update is being rolled out by region through mid-August 2026 and requires no action from you. |
| Object-level access control for datasets | Apply data usage labels directly to an entire dataset, using the same core and custom governance labels used elsewhere on the platform. |

{style="table-layout:auto"}

For more information, read the [Data Governance overview](../data-governance/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated functionality**

| Feature | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} Deliver audience now for streaming destinations | Trigger an immediate, on-demand resend of an audience's full current membership to a streaming destination, without waiting for the next scheduled export. This feature is currently available for the [[!DNL Google Customer Match]](../destinations/catalog/advertising/google-customer-match.md) and [[!DNL The Trade Desk]](../destinations/catalog/advertising/tradedesk.md) destinations. This feature is in private beta. Contact your Adobe representative to request access. |
| [Data type filter in the destinations catalog](../destinations/catalog/overview.md) | Filter destinations by data type in the destinations catalog **[!UICONTROL Browse]** tab. |

{style="table-layout:auto"}

**New or updated destinations**

| Feature | Description |
| --- | --- |
| External ID support for [[!DNL Amazon S3]](../destinations/catalog/cloud-storage/amazon-s3.md) assumed-role authentication | Adobe now presents your IMS Organization ID as the `sts:ExternalId` on every `AssumeRole` call for the [!DNL Amazon S3] destination's assumed-role authentication flow. Add an `sts:ExternalId` condition to your IAM role's trust policy in AWS and set it to your IMS Organization ID, to strengthen the security of your assumed-role connection. |
| [!DNL ZoomInfo Account] | Use the [!DNL ZoomInfo Account] destination to activate account audiences from [!DNL Experience Platform] to [!DNL ZoomInfo] for account-based marketing use cases. |

{style="table-layout:auto"}

**Fixes and improvements**

| Fix | Description |
| --- | --- |
| Exclude exited profiles from [[!DNL LiveRamp] - Onboarding](../destinations/catalog/advertising/liveramp-onboarding.md) exports | Exports to the [!DNL LiveRamp] - Onboarding destination no longer include profiles that have exited an audience. |
| B2B audience export fix | When you export B2B audiences to a destination, [!DNL Experience Platform] now sends only the audiences that actually changed for a profile. Previously, an update to one audience caused every audience that profile qualified for to be resent, resulting in larger exports than necessary. This brings B2B audience exports in line with existing streaming and batch audience export behavior. |

{style="table-layout:auto"}

For more information, read the [Destinations overview](../destinations/home.md).

## Ingestion {#ingestion}

Use batch and streaming ingestion to bring data into Experience Platform from a variety of sources.

**New or updated features**

| Feature | Description |
| --- | --- |
| Updated [batch ingestion guardrails](../ingestion/guardrails.md) | Guardrail limits for the number of files and datasets you can ingest into [!DNL Experience Platform] through the batch ingestion API and batch sources have increased. New error messages help you identify when a limit is reached. |

{style="table-layout:auto"}

For more information, read the [ingestion overview](../ingestion/home.md).

## Capacity {#capacity}

**New or updated features**

| Feature | Description |
| --- | --- |
| [Edge throughput monitor now includes deeper visibility into requests, capacity, and per-region performance](../dataflows/ui/monitor-edge.md) | The edge monitoring dashboard has been enhanced to give you greater insight into how your edge requests are processed. In addition to requests received and peak throughput, the dashboard now reports requests evaluated, requests skipped, and requests failed, along with a throughput status indicator that flags when requested throughput exceeds your organization's capacity. The throughput graph now distinguishes between your capacity, requested throughput, and processing throughput. A new chart shows edge throughput broken down by edge location, and the datastream table includes the same new request metrics for each datastream. Filtering by edge is now a multi-select control, so you can scope the dashboard to any combination of edge locations. |

{style="table-layout:auto"}

## Run and Operate {#run-and-operate}

**New or updated features**

| Feature | Description |
| --- | --- |
| [Additional health checks](../run-and-operate/health-checks.md) | Health checks now cover 16 additional checks across four new categories: schemas and identities, Query Service, merge policies, and audiences, in addition to the existing ingestion, automatic data expiration, and dataset categories. |

{style="table-layout:auto"}

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated sources**

| Source | Description |
| --- | --- |
| [[!DNL Rainfocus]](../sources/connectors/marketing-automation/rainfocus.md), [[!DNL Braze]](../sources/connectors/adobe-applications/braze.md), [!DNL Relay], [[!DNL Shopify Streaming]](../sources/connectors/ecommerce/shopify-streaming.md), [!DNL Didomi], [!DNL Capillary], [!DNL LAVA.AI], and [!DNL Talon.One] (streaming and batch) now generally available | These source connectors (formerly in beta) are now generally available. |

{style="table-layout:auto"}

For more information, read the [sources overview](../sources/home.md).
