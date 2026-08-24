---
title: Choose the right Data Lifecycle Management capability
description: Understand why data lifecycle management matters in Adobe Experience Platform. Compare record delete, dataset expiration, Experience Event TTL, and Pseudonymous Profile TTL, and choose the right capability for your data management goal.
solution: Experience Platform
keywords: Experience Platform;data lifecycle;record delete;dataset expiration;data hygiene;time to live;ttl;data minimization
---
# Choose the right Data Lifecycle Management capability

To manage the data you store in Adobe Experience Platform, use Advanced Data Lifecycle Management to remove or expire data that is no longer useful. Use this guide to understand why managing your data lifecycle matters and to choose the right capability for your goal. For step-by-step instructions, follow the implementation links in each section.

This guide is for administrators and developers who manage data volumes, retention, and entitlements in Experience Platform. It assumes you are familiar with core Experience Platform concepts, including datasets, [identities](../identity-service/home.md), [profiles](../profile/home.md), and sandboxes. The availability and permissions required for each action are described on the linked UI and API pages.

## Why manage your data lifecycle {#why-manage}

Adobe Experience Platform ingests data continuously, and the amount of data you store grows over time. Managing your data lifecycle keeps that data aligned with your active use cases, so you retain what continues to deliver value and remove what no longer does. A well-defined retention strategy also helps you meet your organization's data retention requirements and keep data volumes within your licensing entitlements.

When data accumulates beyond what your use cases require, you face several risks:

* **Reduced relevance:** Retaining signals beyond the period when they remain useful can reduce the relevance of segmentation, activation, and personalization.
* **Cost pressure:** Growing data volumes can push you toward or beyond your licensing entitlements, which can lead to overages.
* **Degraded performance:** Excess data increases system load and can slow processing.
* **Privacy exposure:** Retaining data longer than it is useful increases privacy risk and regulatory exposure.

To avoid these outcomes, retain data only as long as it supports an active use case. Apply the same principle at ingestion by using [ingestion filters](../landing/license-usage-and-guardrails/data-management-best-practices.md#ingestion-filters) to bring in only the data your use cases require. Behavioral data, such as event data, typically consumes far more storage than record data, so unmanaged behavioral data usually has the greatest impact on storage growth.

A key part of managing your data lifecycle is matching data to the workflow it serves. Experience Platform stores data in two repositories that serve different purposes:

| Workflow | Best suited to | Typical use cases |
| --- | --- | --- |
| Analytical | Long-term retention with slower access, held in the data lake | Historical analysis, reporting, data science |
| Engagement | Real-time or near-real-time access, held in the Profile store | Segmentation, activation, personalization |

Align each dataset to the workflow it supports and retain the data only as long as that workflow requires it. Both Profile and data lake storage are subject to licensing entitlements, which vary by the products your organization has purchased. Confirm the entitlements available to your organization when you plan where data is stored and how long it is retained.

![Diagram showing Adobe Experience Platform splitting into two workflows: Analytical Workflows generating data-driven insights, and Engagement Workflows powered by Real-time Customer Profile.](./images/choose-a-capability/analytical-engagement-workflows.png){width="600" zoomable="yes"}

For guidance on tracking and managing your license entitlements, see [Data management license entitlement best practices](../landing/license-usage-and-guardrails/data-management-best-practices.md).

## Choose the right capability {#choose-a-capability}

Your data management goal determines which retention or deletion option to use. The following table maps common goals to the option that fits. Each option is described in the section that follows.

| Your goal | Option |
| --- | --- |
| Remove specific individuals' records, matched by identity | [Record delete](#record-delete) |
| Delete an entire dataset on a date you schedule | [Dataset expiration](#dataset-expiration) |
| Automatically remove stale Experience Events from the Profile store over time | [Experience Event TTL](#experience-event-ttl) |
| Automatically remove inactive pseudonymous (unknown) profiles | [Pseudonymous Profile TTL](#pseudonymous-profile-ttl) |
| Automatically remove old Experience Event records from the data lake while keeping the dataset | [Data lake retention](#automatic-expiration) |

These capabilities fall into two groups. Record delete and dataset expiration are targeted, one-time actions that you submit when you need them. Experience Event TTL and Pseudonymous Profile TTL are automated settings that remove data on an ongoing basis once you configure them. Data lake retention is a related, separately configured setting that follows the same automated pattern. If your goal requires more than one of these—for example, removing specific records while also trimming ongoing event growth—combine capabilities as described in [Plan your retention strategy](#plan-retention).

>[!IMPORTANT]
>
>Use Data Lifecycle Management capabilities for operational data management, such as data cleansing, removing anonymous data, and data minimization, not for privacy or regulatory compliance. To fulfill data subject rights requests under regulations such as the General Data Protection Regulation (GDPR), use [Adobe Experience Platform Privacy Service](../privacy-service/home.md) instead.

## Record delete {#record-delete}

When you need to remove specific individuals' data for operational reasons such as data cleansing, removing anonymous data, or data minimization, use record delete. It removes individual records from Experience Platform based on their primary identity. By default, record delete affects the data lake, Identity Service, and Real-Time Customer Profile. Record delete is not a compliance tool. To fulfill data subject rights requests, use [Adobe Experience Platform Privacy Service](../privacy-service/home.md).

>[!IMPORTANT]
>
>Deleted records cannot be recovered.

Record delete acts only on the primary identity defined in each dataset's schema. Before you use it, note the following limitations:

* Only the primary identity is matched. Records cannot be targeted by secondary identities.
* Records without a populated primary identity are skipped.
* Data ingested before the primary identity was configured in the dataset's schema cannot be deleted this way.
* A dataset with a scheduled or in-progress dataset expiration cannot receive a record delete request. Cancel the scheduled expiration or wait until the expiration completes before you submit the record delete request.
* For relational-schema datasets with change data capture, deleted records may be re-ingested unless the source is updated accordingly. For requirements and limitations that apply to these datasets, see [relational schema considerations](./ui/record-delete.md#relational-record-delete).

Depending on your organization's configuration, you can delete records from a single dataset or from all datasets.

After you submit a request, Experience Platform batches it before processing. Processing completes within the service level agreement (SLA) for your entitlement. For the processing stages and how long each takes, see [Data Lifecycle processing timelines](./data-lifecycle-processing-timelines.md). Record delete requests are also subject to daily and monthly identifier submission limits. For the current limits, see [identifier submission quotas](./ui/record-delete.md#quotas).

You can create record delete requests in the [!UICONTROL Data Lifecycle] workspace or with the API. See [Create a record delete request](./ui/record-delete.md) for the UI workflow and the [work order endpoint guide](./api/workorder.md) for the API.

## Dataset expiration {#dataset-expiration}

When you need to retire an entire dataset that is no longer needed for your use cases, use dataset expiration. It deletes the dataset on a date that you schedule, and you can modify or cancel the scheduled expiration at any time before the expiration process begins. When the dataset reaches its expiration date, the data lake, Identity Service, and Real-Time Customer Profile each remove the dataset's contents, and the expiration completes once all three services finish.

>[!IMPORTANT]
>
>Before a dataset expires, update any dataflows that ingest data into it to avoid ingestion failures that can affect downstream workflows. The dataset is removed from the data lake before the rest of the expiration process completes, so any dataflow that still ingests into it begins to fail as soon as the dataset is removed.

You can have only a limited number of scheduled dataset expirations pending at one time. The limit depends on your product and any Shield entitlement. For the current limit, see [pending expiration limits](./ui/dataset-expiration.md#schedule-dataset-expiration). Data Lifecycle Management does not support batch dataset deletion.

You can schedule dataset expirations in the [!UICONTROL Data Lifecycle] workspace or with the API. See [Schedule a dataset expiration](./ui/dataset-expiration.md) for the UI workflow and the [dataset expiration endpoint guide](./api/dataset-expiration.md) for the API.

## Automatic expiration: Experience Event and Pseudonymous Profile TTL {#automatic-expiration}

When you want to trim stale data from the Profile store automatically over time, rather than deleting it yourself, use Experience Event TTL or Pseudonymous Profile TTL. Once configured, these settings remove eligible data automatically according to the retention or inactivity period you set, without requiring you to submit individual requests. The settings continue to apply until you change or remove them.

### Experience Event TTL {#experience-event-ttl}

Experience Event TTL (also called Experience Event expiration) is the Profile retention setting for an ExperienceEvent dataset. It applies at the dataset level and controls how long event data is retained in the Profile store. It removes events only, not profile attributes. If a profile has no attributes of its own, the profile stops existing after all of its events are removed. The minimum retention period is one day. Configure this Profile retention setting from the [!UICONTROL Datasets] workspace. See the [Set data retention policy](../catalog/datasets/user-guide.md#data-retention-policy) document for configuration guidance.

>[!NOTE]
>
>Unexpectedly high event volume can also result from bot traffic rather than genuine user activity. For guidance on identifying and filtering bot traffic, see [Bot filtering in Query Service](../query-service/use-cases/bot-filtering.md).

### Pseudonymous Profile TTL {#pseudonymous-profile-ttl}

Pseudonymous Profile TTL (also called Pseudonymous Profile data expiration) applies at the sandbox level and removes pseudonymous (unknown) profiles after they have been inactive for the period that you set. It removes both events and profile records. You can configure the setting yourself. The default expiration period is 14 days for production sandboxes and 3 days for development sandboxes. Because the removal process runs on a recurring cycle, eligible profiles are not removed immediately. For configuration guidance, see [Pseudonymous profile data expiration](../profile/pseudonymous-profiles.md).

The two settings differ in scope and in what they remove:

| Characteristic | Experience Event TTL          | Pseudonymous Profile TTL                          |
| -------------- | ----------------------------- | ------------------------------------------------- |
| Applies at     | Dataset level                 | Sandbox level                                     |
| Removes        | Events only                   | Events and profile records                        |
| Targets        | Events older than the set age | Pseudonymous profiles inactive for the set period |

The two settings complement each other. Set Experience Event TTL on your datasets to control how long event data is retained, and use a shorter Pseudonymous Profile TTL to remove unknown profiles sooner. For guidance on choosing durations, see [Plan your retention strategy](#plan-retention).

>[!IMPORTANT]
>
>Data removed by either setting is permanently deleted and cannot be restored.

<!-- Experience Event TTL controls how long events are retained in the Profile store. An ExperienceEvent dataset can also have a separate data lake retention policy. Both policies are configured from the same [!UICONTROL Set data retention policy] workflow in the [!UICONTROL Datasets] workspace. -->In addition to Profile retention, an ExperienceEvent dataset can have a separate data lake retention policy. Both policies are configured from the same [!UICONTROL Set data retention policy] workflow in the [!UICONTROL Datasets] workspace.

Use the following guidance to distinguish the available retention options:

| If you want to…                                                                  | Use                                      |
| -------------------------------------------------------------------------------- | ---------------------------------------- |
| Remove old Experience Events from the Profile store while keeping the dataset    | Experience Event TTL (Profile retention) |
| Remove old Experience Event records from the data lake while keeping the dataset | Data lake retention                      |
| Remove the entire dataset                                                        | Dataset expiration                       |

Because Profile and data lake retention are independent, you can retain events in the data lake for long-term analysis after they expire from the Profile store. For data lake retention guidance, including API configuration, see [Manage Experience Event dataset retention (TTL)](../catalog/datasets/experience-event-dataset-retention-ttl-guide.md).

## Plan your retention strategy {#plan-retention}

Managing your data lifecycle is an ongoing practice, not a one-time task. Retain data only as long as it supports an active use case, and configure retention periods and expiration dates to match how long the data stays useful.

### Key considerations to guide your data strategy

Answer the following questions for each dataset before you set specific retention durations:

* **Is this data still needed for an active use case?** Retaining data beyond what your use cases require increases storage and processing costs without adding value.
* **Does this data belong in an analytical or engagement workflow?** Align each dataset to the [workflow it serves](#why-manage) so it lives in the right repository.
* **How long does this data need to be retained to stay useful?** Match each capability's duration to how long the data supports your use case, not to a default or indefinite period.
* **How often do you review data usage?** Review usage on a regular basis, such as weekly, so you can catch inefficiencies and adjust retention settings before they affect cost or performance.

Use the following guidance when you set retention durations:

* **Experience Event TTL:** Set the expiration to cover the longest lookback your audiences need, and keep your audience lookback windows within that period so that segmentation stays accurate.
* **Pseudonymous Profile TTL:** Set a shorter period than your Experience Event TTL to remove inactive unknown profiles sooner.
* **Data lake retention:** Set a longer period for event data you still need for analysis, independent of when the same data expires from the Profile store. Match the duration to how the data is used: shorter for frequently accessed data, longer for archival needs. See [Manage Experience Event dataset retention (TTL)](../catalog/datasets/experience-event-dataset-retention-ttl-guide.md) for recommended durations and minimums.

>[!TIP]
>
>Apply the same retention discipline to non-production sandboxes as you do to production. Avoid copying full production datasets into a non-production sandbox without a defined use case, since unmanaged non-production data still counts toward your license usage.

Apply these capabilities based on your data retention requirements. For example, for high-volume clickstream data, apply an Experience Event TTL with a shorter Pseudonymous Profile TTL to control your Profile store footprint. Set a longer data lake retention period separately to preserve the same events for long-term analysis. Use dataset expiration to retire entire datasets you no longer need, and record delete to remove specific records on request.

For guidance on tracking and managing your license entitlements, see [Data management license entitlement best practices](../landing/license-usage-and-guardrails/data-management-best-practices.md).

## Next steps {#next-steps}

Once you've chosen a capability, use the linked implementation guidance in its section to carry it out. If you're implementing record delete or dataset expiration through the API, see [best practices for record delete and dataset expiration requests](./best-practices.md) for guidance on batching requests, handling throttling, and monitoring work order status. For broader Data Lifecycle orientation, see the [Data Lifecycle UI guide](./ui/overview.md) or the [Data Hygiene API guide](./api/overview.md).
