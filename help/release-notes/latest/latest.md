---
title: Adobe Experience Platform Release Notes August 2026
description: The August 2026 release notes for Adobe Experience Platform.
last-update: 2026-08-18
exl-id: f854f9e5-71be-4d56-a598-cfeb036716cb
TQID: https://experienceleague.adobe.com/RvjQSbQ2NNwBYQJD4G6jsXWdAAg3vzbXKYvRlMwbBW0
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
  - id: f8e8ea8a-6020-40da-99f7-6504fe599cb1
    internal-label: AI Assistant
subfeature_v2:
  - id: b784da9a-7978-4766-bf1f-5ab2b23d894a
    internal-label: Federated Audience Composition
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
  - id: cdd3e38b-fec2-4f39-8b10-83ddaab1ac16
    internal-label: B2B
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
  - id: e0c8953a-a203-4291-bef3-3560160d3041
    internal-label: Get started
  - id: ee602049-8a18-43df-9299-a689a025a371
    internal-label: Use cases
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
---
# Adobe Experience Platform release notes

>[!TIP]
>
>Refer to the following documentation for release notes of other Adobe Experience Platform applications:
>
>- [Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/whats-new/release-notes)
>- [Adobe Journey Optimizer B2B](https://experienceleague.adobe.com/en/docs/journey-optimizer-b2b/user/release-notes)
>- [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/releases/latest)
>- [Federated Audience Composition](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/release-notes)
>- [Real-Time CDP Collaboration](https://experienceleague.adobe.com/en/docs/real-time-cdp-collaboration/using/latest)

**Release date: August 18 2026**

New features and updates to existing features in Adobe Experience Platform:

- [Access control](#access-control)
- [Data Governance](#data-governance)
- [Data Ingestion](#data-ingestion)
- [Destinations](#destinations)
- [Run and Operate](#run-and-operate)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)

## Access control {#access-control}

Experience Platform leverages [Adobe Admin Console](https://adminconsole.adobe.com) product profiles to link users with permissions and sandboxes. Permissions control access to a variety of Experience Platform capabilities, including data modeling, profile management, and sandbox administration.

**New or updated features**

| Feature | Description |
| --- | --- |
| Object-Level Access Control for Datasets | You can now apply access labels to entire datasets to control which users and applications can read or write dataset data. Use the same Adobe-defined and custom access labels available throughout Adobe Experience Platform to enforce dataset-level access restrictions. For information about applying and managing dataset labels, see the [end to end guide](/help/access-control/abac/end-to-end-guide.md) |

{style="table-layout:auto"}

For more information, read the [Access control overview](/help/access-control/home.md). 

## Data Governance {#data-governance}

Use Data Governance to manage data usage policies and enforce compliance with data usage labels across Experience Platform.

**New or updated features**

| Feature | Description |
| --- | --- |
| mTLS Certificate Hierarchy Update | Adobe is transitioning outbound mTLS client certificates to a new certificate authority (CA) hierarchy. If your endpoint validates Adobe's mTLS client certificates, add the new root and intermediate CA certificates alongside the existing trusted hierarchy to prevent connection or delivery failures. See [Update your trust store for Adobe's new mTLS certificate hierarchy](/help/landing/governance-privacy-security/mtls-trust-chain-migration.md) for more details. |

{style="table-layout:auto"}

For more information, read the [Data Governance overview](/help/data-governance/home.md).

## Data Ingestion {#data-ingestion}

Use batch and streaming ingestion to bring data into Experience Platform from a variety of sources.

**New or updated features**

| Feature | Description |
| --- | --- |
| Updated [Batch Ingestion guardrails](/help/ingestion/guardrails.md) | Batch ingestion limits have increased to 25,000 files per batch and up to 1 TB for regular batches. Batches that exceed these limits fail at ingestion time, with updated error messages to help identify the issue. |

{style="table-layout:auto"}

For more information, read the [data ingestion overview](/help/ingestion/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated functionality**

| Feature | Description |
| --- | --- |
| [!BADGE Beta]{type=Informative} [Activate audiences on-demand for streaming destinations](/help/destinations/ui/activate-now-streaming.md) | Trigger an immediate, on-demand resend of an audience's full current membership to a streaming destination without waiting for the next audience qualification or disqualification event. This update is rolling out through August 21, 2026. This feature is in private beta and available for a limited number of streaming destinations. Contact your Adobe representative to request access. <br> ![Triggering an on-demand resend of an audience's full membership to a streaming destination using Activate now.](../2026/assets/august/activate-now-streaming.gif){zoomable="yes"} |
| [Data type filter in the destinations catalog](/help/destinations/catalog/overview.md) | Find the destination you need faster by filtering the **[!UICONTROL Browse]** tab of the destinations catalog by data type. <br> ![Filtering destinations by data type in the Browse tab of the destinations catalog.](../2026/assets/august/data-type-filter-browse.gif){zoomable="yes"} |

{style="table-layout:auto"}

**New or updated destinations**

| Feature | Description |
| --- | --- |
| External ID support for [[!DNL Amazon S3] assumed role authentication](/help/destinations/catalog/cloud-storage/amazon-s3.md#assumed-role-authentication) | Adobe now includes your Organization ID as the `sts:ExternalId` in every `AssumeRole` call for the [!DNL Amazon S3] destination's assumed role authentication flow. Add an `sts:ExternalId` condition to your IAM role's trust policy in AWS and set it to your Organization ID to strengthen the security of your assumed role connection. View the [documentation](/help/destinations/catalog/cloud-storage/amazon-s3.md#assumed-role-authentication) for examples of how to use this feature. |
| [[!DNL ZoomInfo Account Audiences]](/help/destinations/catalog/advertising/zoominfo-account-audiences.md) | Use the [!DNL ZoomInfo Account Audiences] destination to activate account audiences from Experience Platform to [!DNL ZoomInfo] for account-based marketing use cases. |
| Exclude exited profiles from [[!DNL LiveRamp] - Onboarding](/help/destinations/catalog/advertising/liveramp-onboarding.md) exports | Exports to the [!DNL LiveRamp] - Onboarding destination no longer include profiles that have exited an audience. This helps reduce your [Records Under Management (RUM)](https://docs.liveramp.com/connect/en/records-under-management.html) count in [!DNL LiveRamp]. This update is rolling out through August 21, 2026. |

{style="table-layout:auto"}

**Fixes and improvements**

| Fix | Description |
| --- | --- |
| B2B audience export fix | When you export B2B audiences to a destination, Experience Platform now sends only the audiences that have actually changed for a profile. Previously, an update to one audience caused every audience that the profile qualified for to be resent, resulting in larger exports than necessary. This aligns with the existing streaming and batch audience export behavior. |

{style="table-layout:auto"}

For more information, read the [Destinations overview](/help/destinations/home.md).

## Run and Operate {#run-and-operate}

**New or updated features**

| Feature | Description |
| --- | --- |
| [Additional health checks](/help/run-and-operate/health-checks/overview.md) | Health checks now include additional checks for the new Query Service, Merge Policies, and Segmentation categories, in addition to the existing Schemas and Identities, Ingestion, Automatic Data Expiration, and Datasets categories. |

{style="table-layout:auto"}

## Segmentation Service {#segmentation-service}

Use Segmentation Service to create audiences from your customer data and manage their full lifecycle in Experience Platform.

**New or updated features**

| Feature | Description |
| --- | --- |
| Batch segmentation progress transparency | When a batch segmentation job is processing, you can now see the percentage of the audience that has been evaluated. This lets you better estimate the remaining time needed for the segmentation job, so you can meet your audience's activation timeline. For more information, read the [monitor audiences guide](/help/dataflows/ui/monitor-audiences.md). |
| [!BADGE Beta]{type=Informative} Run Now | Run Now lets you trigger audience evaluation for a specific audience on demand, without waiting for a system-defined or user-defined schedule. For more information, read the [run now guide](/help/segmentation/methods/run-now.md). |
| External account audiences (B2B) | You can now upload account audiences using the external audiences endpoint. For more information, read the [external audiences endpoint guide](/help/segmentation/api/external-audiences.md). |
| Time-series custom objects (B2B) | You can now use time-series relational schemas in custom objects for segmentation use cases in [!DNL Real-Time CDP B2B Edition]. For more information, read the [custom objects guide](/help/rtcdp/segmentation/custom-objects.md). |

{style="table-layout:auto"}

For more information, read the [Segmentation Service overview](/help/segmentation/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

**New or updated sources**

| Source | Description |
| --- | --- |
| New sources in GA | The following sources have been promoted from Beta to General Availability (GA): <ul><li>[[!DNL Braze]](/help/sources/connectors/marketing-automation/braze.md)</li><li>[[!DNL Capillary]](/help/sources/connectors/loyalty/capillary.md)</li><li>[[!DNL Didomi]](/help/sources/connectors/consent-and-preferences/didomi.md)</li><li>[[!DNL LAVA]](/help/sources/connectors/loyalty/lava.md)</li><li>[[!DNL Rainfocus]](/help/sources/connectors/analytics/rainfocus.md)</li><li>[[!DNL Relay]](/help/sources/tutorials/ui/create/marketing-automation/relay-connector.md)</li><li>[[!DNL Shopify Streaming]](/help/sources/connectors/ecommerce/shopify-streaming.md)</li><li>[[!DNL Talon.One Batch]](/help/sources/tutorials/ui/create/loyalty/talon-one-batch.md)</li><li>[[!DNL Talon.One Streaming]](/help/sources/tutorials/ui/create/loyalty/talon-one-streaming.md)</li></ul> |
| Self Serve Sources (Streaming SDK) now in GA | Self-Serve Sources (Streaming SDK) are now generally available. Partners can build and configure streaming sources with secure authentication using either OAuth or HMAC-based authentication. Authentication is required for all Streaming SDK sources. HMAC authentication validates incoming events using SHA-256 signatures, while existing configuration remain compatible with the new authentication options. For more information, read the [Streaming SDK documentation](/help/sources/sources-sdk/streaming/getting-started.md). |
| Sources compatible with TLS v1.3 | The following source connectors are now compatible with Transport Layer Security (TLS) 1.3: <ul><li>[[!DNL Azure Data Lake Storage Gen2]](/help/sources/connectors/cloud-storage/adls-gen2.md)</li><li>[[!DNL Azure Blob Storage]](/help/sources/connectors/cloud-storage/blob.md)</li><li>[[!DNL Azure Event Hubs]](/help/sources/connectors/cloud-storage/eventhub.md)</li><li>[[!DNL Azure Synapse Analytics]](/help/sources/connectors/databases/synapse-analytics.md)</li><li>[[!DNL Data Landing Zone]](/help/sources/connectors/cloud-storage/data-landing-zone.md)</li><li>[[!DNL Snowflake] batch connector](/help/sources/connectors/databases/snowflake.md)</li></ul> |
| Updated IP address allowlist for Sources | The IP address allowlist for Adobe Experience Platform batch sources has been updated. For the current allowlist and configuration guidance, read the guide on [allowlisting IP addresses for sources](/help/sources/ip-address-allow-list.md). |

{style="table-layout:auto"}

For more information, read the [sources overview](../../sources/home.md).

<!--

| [!DNL Google Ads] (V2) source connector | You can now use the Google Ads (V2) source connector to ingest advertising account, campaign, ad group, ad, asset, experience, and performance data from the [!DNL Google Ads] API into Experience Platform. |

-->