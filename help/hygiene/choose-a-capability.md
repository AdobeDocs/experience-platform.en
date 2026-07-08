---
title: Choose the right Data Lifecycle Management capability
description: Understand why data lifecycle management matters in Adobe Experience Platform. Compare record delete, dataset expiration, Experience Event TTL, and Pseudonymous Profile TTL, and choose the right capability for your data management goal.
solution: Experience Platform
keywords: Experience Platform;data lifecycle;record delete;dataset expiration;data hygiene;time to live;ttl;data minimization
---
# Choose the right Data Lifecycle Management capability

Advanced Data Lifecycle Management helps you manage the data you store in Adobe Experience Platform by removing or expiring data that is no longer useful. In the product navigation, it's called [!UICONTROL Data Lifecycle]. Use this guide to understand why managing your data lifecycle matters and to choose the right capability for your goal. For step-by-step instructions, follow the UI and API links in each section.

This guide is for administrators and developers who manage data volumes, retention, and entitlements in Experience Platform. It assumes you are familiar with core Experience Platform concepts, including datasets, [identities](../identity-service/home.md), [profiles](../profile/home.md), and sandboxes. The availability and permissions required for each action are described on the linked UI and API pages.

## Why manage your data lifecycle {#why-manage}

Adobe Experience Platform ingests data continuously, and the amount of data you store grows over time. As those volumes grow, your data can exceed your licensing entitlements. Managing your data lifecycle keeps the data in Experience Platform aligned with your active use cases, so you retain what delivers value and remove what no longer does.

When data accumulates beyond what your use cases require, you face several risks:

* **Cost pressure:** Growing data volumes can push you toward or beyond your licensing entitlements, which can lead to overages.
* **Degraded performance:** Excess data increases system load and can slow processing.
* **Privacy exposure:** Retaining data longer than it is useful increases privacy risk and regulatory exposure.

To avoid these outcomes, retain data only as long as it supports an active use case. Apply the same principle at ingestion by using [ingestion filters](../landing/license-usage-and-guardrails/data-management-best-practices.md#ingestion-filters) to bring in only the data your use cases require. Behavioral data, such as event data, typically consumes far more storage than record data, so it is usually where unmanaged growth has the greatest impact.

A key part of managing your data lifecycle is matching data to the workflow it serves. Experience Platform stores data in two repositories that serve different purposes:

| Workflow | Best suited to | Typical use cases |
| --- | --- | --- |
| Analytical | Long-term retention with slower access, held in the data lake | Historical analysis, reporting, data science |
| Engagement | Real-time or near-real-time access, held in the Profile store | Segmentation, activation, personalization |

Aligning each dataset to the workflow it supports helps you keep only the data you need in the Profile store, where it counts toward your license usage, while retaining longer-lived data in the data lake.

![Diagram showing Adobe Experience Platform splitting into two workflows: Analytical Workflows generating data-driven insights, and Engagement Workflows powered by Real-time Customer Profile.](./images/choose-a-capability/analytical-engagement-workflows.png){width="600" zoomable="yes"}

For guidance on tracking and managing your license entitlements, see [Data management license entitlement best practices](../landing/license-usage-and-guardrails/data-management-best-practices.md).

## Choose the right capability {#choose-a-capability}

Your data management goal determines which capability to use. The following table maps common goals to the capability that fits. Each capability is described in the section that follows.

| Your goal | Capability |
| --- | --- |
| Remove specific individuals' records, matched by identity | [Record delete](#record-delete) |
| Delete an entire dataset on a date you schedule | [Dataset expiration](#dataset-expiration) |
| Automatically remove stale events from a dataset over time | [Experience Event TTL](#experience-event-ttl) |
| Automatically remove inactive pseudonymous (unknown) profiles | [Pseudonymous Profile TTL](#pseudonymous-profile-ttl) |

These capabilities fall into two groups. Record delete and dataset expiration are targeted, one-time actions that you submit when you need them. Experience Event TTL and Pseudonymous Profile TTL are automated settings that remove data on an ongoing basis once you configure them. If your goal requires more than one of these—for example, removing specific records while also trimming ongoing event growth—combine capabilities as described in [Plan your retention strategy](#plan-retention).

>[!IMPORTANT]
>
>Data Lifecycle Management capabilities—including record delete, dataset expiration, Experience Event TTL, and Pseudonymous Profile TTL—manage your data for operational reasons such as data cleansing, removing anonymous data, and data minimization. None of them are for privacy or regulatory compliance. To fulfill data subject rights requests under regulations such as the General Data Protection Regulation (GDPR), use [Adobe Experience Platform Privacy Service](../privacy-service/home.md) instead.

## Record delete {#record-delete}

When you need to remove specific individuals' data for operational reasons such as data cleansing, removing anonymous data, or data minimization, use record delete. It removes individual records from Experience Platform based on their primary identity. By default, this affects the data lake, Identity Service, and Real-Time Customer Profile. Record delete is not a compliance tool; to fulfill data subject rights requests, use [Adobe Experience Platform Privacy Service](../privacy-service/home.md).

>[!IMPORTANT]
>
>Deleted records cannot be recovered.

Record delete acts only on the primary identity defined in each dataset's schema. Before you use it, note the following limitations:

* Only the primary identity is matched. Records cannot be targeted by secondary identities.
* Records without a populated primary identity are skipped.
* Data ingested before the primary identity was configured in the dataset's schema cannot be deleted this way.
* A dataset with an active dataset expiration cannot also receive a record delete request until that expiration completes.
* For relational-schema datasets with change data capture, deleted records may be re-ingested unless the source is updated accordingly; see [relational schema considerations](./ui/record-delete.md#relational-record-delete).

Depending on your organization's configuration, you can delete records from a single dataset or from all datasets.

After you submit a request, Experience Platform batches it before processing; processing completes within the service level agreement (SLA) for your entitlement. For the processing stages and how long each takes, see [Data Lifecycle processing timelines](./data-lifecycle-processing-timelines.md). Record delete requests are also subject to daily and monthly identifier submission limits; for the current limits, see [identifier submission quotas](./ui/record-delete.md#quotas).

You can create record delete requests in the [!UICONTROL Data Lifecycle] workspace or with the API. See [Create a record delete request](./ui/record-delete.md) for the UI workflow and the [work order endpoint guide](./api/workorder.md) for the API.

## Dataset expiration {#dataset-expiration}

When you need to retire an entire dataset that is no longer needed for your use cases, use dataset expiration. It deletes the dataset on a date that you schedule, and you can modify or cancel the scheduled date at any time before it executes. When the dataset reaches its expiration date, the data lake, Identity Service, and Real-Time Customer Profile each remove the dataset's contents, and the expiration completes once all three services finish.

>[!IMPORTANT]
>
>Before a dataset expires, update any dataflows that ingest data into it so that your downstream workflows are not affected. Because the dataset is removed from the data lake before the rest of the expiration process completes, any dataflow that still ingests into it begins to fail as soon as the dataset is removed.

You can have only a limited number of scheduled dataset expirations pending at one time. The limit depends on your product and any Shield entitlement. For the current limit, see [pending expiration limits](./ui/dataset-expiration.md#schedule-dataset-expiration). Data Lifecycle Management does not support batch dataset deletion.

You can schedule dataset expirations in the [!UICONTROL Data Lifecycle] workspace or with the API. See [Schedule a dataset expiration](./ui/dataset-expiration.md) for the UI workflow and the [dataset expiration endpoint guide](./api/dataset-expiration.md) for the API.

## Automatic expiration: Experience Event and Pseudonymous Profile TTL {#automatic-expiration}

When you want to trim stale data from the Profile store automatically over time, rather than deleting it yourself, use Experience Event TTL or Pseudonymous Profile TTL. Once you configure these settings, data is removed when it is no longer useful, without requiring you to submit individual requests. The settings continue to apply until you change or remove them.

### Experience Event TTL {#experience-event-ttl}

Experience Event TTL (also called Experience Event expiration) applies at the dataset level and removes event data once it reaches the age that you set. It only removes events, not profile attributes. If a profile has no attributes of its own, it stops existing once all of its events are removed. The minimum expiration is one day. This setting requires Adobe to enable it for your organization; contact your Adobe account team or Customer Care. For how to configure it, see [Experience Event expirations](../profile/event-expirations.md).

>[!NOTE]
>
>Unexpectedly high event volume can also result from bot traffic rather than genuine user activity. For guidance on identifying and filtering bot traffic, see [Bot filtering in Query Service](../query-service/use-cases/bot-filtering.md).

### Pseudonymous Profile TTL {#pseudonymous-profile-ttl}

Pseudonymous Profile TTL (Pseudonymous Profile data expiration) applies at the sandbox level and removes pseudonymous (unknown) profiles that have had no activity for the period that you set. It removes both events and profile records. This setting is self-serve, with a default expiration of 14 days in production sandboxes and 3 days in development sandboxes. Removal runs on a recurring cycle rather than instantly, so expect a short delay after a profile becomes eligible. For how to configure it, see [Pseudonymous profile data expiration](../profile/pseudonymous-profiles.md).

The two settings differ in scope and in what they remove:

| Characteristic | Experience Event TTL | Pseudonymous Profile TTL |
| --- | --- | --- |
| Applies at | Dataset level | Sandbox level |
| Removes | Events only | Events and profile records |
| Targets | Events older than the set age | Pseudonymous profiles inactive for the set period |

The two settings complement each other. Set Experience Event TTL on your datasets to control how long event data is retained, and use a shorter Pseudonymous Profile TTL to remove unknown profiles sooner. For guidance on choosing durations, see [Plan your retention strategy](#plan-retention).

>[!IMPORTANT]
>
>Data removed by either setting is permanently deleted and cannot be restored.

Experience Event TTL and Pseudonymous Profile TTL control data in the Profile store, which serves engagement use cases. To control how long the same event data is retained in the data lake for analytical use, set a data lake retention period instead. Data lake retention is independent, so you can keep events for long-term analysis after they expire from the Profile store. See [Manage Experience Event dataset retention (TTL)](../catalog/datasets/experience-event-dataset-retention-ttl-guide.md).

## Plan your retention strategy {#plan-retention}

Managing your data lifecycle is an ongoing practice, not a one-time task. Retain data only as long as it supports an active use case, and set each capability's duration to match how long the data stays useful.

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

Once you've chosen a capability, use the linked UI and API pages in each section to carry it out. If you're implementing record delete or dataset expiration through the API, see [best practices for record delete and dataset expiration requests](./best-practices.md) for guidance on batching requests, handling throttling, and monitoring work order status. For broader orientation across any of the four capabilities, see the [Data Lifecycle UI guide](./ui/overview.md) or the [Data Hygiene API guide](./api/overview.md).
