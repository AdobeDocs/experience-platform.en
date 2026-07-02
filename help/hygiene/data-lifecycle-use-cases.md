---
title: Advanced Data Lifecycle Management use cases and capabilities
description: Understand why data lifecycle management matters in Adobe Experience Platform and choose the right capability—record delete, dataset expiration, or automatic expiration—for your data management goal.
---
<!-- exl-id and remaining metadata (product_v2/role_v2/topic_v2) to be generated on publish -->

<!--
PLANNING — remove all HTML-comment planning blocks before publish.
This is the Data Lifecycle Management use-case / decision hub (single page).
Status: scaffolded from Step 04 IA + Step 05 section specs (2026-06-30). Prose = Step 06.
Naming: first mention "Advanced Data Lifecycle Management (referred to as Data Lifecycle in the product navigation)"; "Data Lifecycle Management" thereafter. Never use "ADLM" in visible text.
Global rules for this page: decision/why-when hub only — link out for procedures, mechanics, timelines, quota; do NOT restate them. Privacy Service = motivation-level only, no endpoints. Quota = link to published page, no restated values.
Full artifacts: adlm-user-guide-IA-2026-06-30.md, adlm-user-guide-execution-brief-2026-06-30.md (in Documents\adlm-context\).
-->

# Advanced Data Lifecycle Management use cases and capabilities

<!-- DRAFT PENDING (Step 06): short intro — what this page helps the reader do (decide which capability to use and why), and that it links out for how-to. Keep to 2–3 sentences, no claims that belong to linked pages. -->

## Why manage your data lifecycle

<!--
PLANNING (Section A — Step 05 spec READY)
Objective: Explain why managing the data lifecycle matters, so the reader is motivated to act and can frame their goal before choosing a capability.
Reader outcome: reader can articulate the business reasons to manage their data lifecycle (cost/entitlement pressure, performance, data minimization, privacy risk) and recognize whether data belongs in analytical vs engagement workflows.
Reader questions: (1) Why manage my lifecycle instead of keeping everything? (2) What goes wrong if I don't? (3) What data should I keep vs let go?
Required content: rationale (unmanaged data -> cost/entitlement pressure, performance issues, privacy risk) [source: internal value-realization guidance, public-safe subset]; data minimization / retain only what use cases need [source: same + landing/license-usage-and-guardrails/data-management-best-practices.md]; analytical vs engagement framing [source: landing data storage model + public-safe subset].
Excludes: license entitlement metrics/mechanics (link landing/license-usage-and-guardrails/data-management-best-practices.md); capability selection (belongs to "Choose the right capability"); procedures.
Cross-link: landing/license-usage-and-guardrails/data-management-best-practices.md for license/cost strategy; leads into the capability-selection section.
Assumptions: reader knows data lake vs Profile store at a basic level [INFERRED]; motivated by cost/compliance [INFERRED].
Open questions: none blocking. Drafting note: strip any commercial/upsell framing from the source.
Readiness: READY.
-->

| Workflow | Best suited to | Typical use cases |
| --- | --- | --- |
| Analytical | Long-term retention with slower access, held in the data lake | Historical analysis, reporting, data science |
| Engagement | Real-time or near-real-time access, held in the Profile store | Segmentation, activation, personalization |

Aligning each dataset to the workflow it supports helps you keep only the data you need in the Profile store, where it counts toward your license usage, while retaining longer-lived data in the data lake.

For guidance on tracking and managing your license entitlements, see [Data management license entitlement best practices](../landing/license-usage-and-guardrails/data-management-best-practices.md).

## Choose the right capability

<!--
PLANNING (Section B — core hub; Step 05 spec READY)
Objective: Help the reader decide which capability fits their goal, and recognize when Privacy Service is the correct tool instead.
Reader outcome: reader can select Record Delete / Dataset Expiration / E-TTL / P-TTL for their goal, and knows when to use Privacy Service.
Required content: (1) intent→capability decision table; (2) targeted/one-time vs automated/ongoing distinction; (3) Record Delete vs Privacy Service — motivation-level (operational vs regulatory); (4) how E-TTL/P-TTL/Dataset Expiration differ at a glance.
Excludes: procedures; API endpoint names / workorder-vs-jobs boundary (T6); Privacy Service internals; full TTL mechanics; license strategy.
Cross-links: privacy-service/home.md (motivation-level); routes to sections C/D/E below.
Batch: draft together with C/D/E (comparison must match their scope).
-->

Your data management goal determines which capability to use. The following table maps common goals to the capability that fits. Each capability is described in the section that follows.

| Your goal | Capability |
| --- | --- |
| Remove specific individuals' records, matched by identity | **Record delete** |
| Delete an entire dataset, immediately or on a schedule | **Dataset expiration** |
| Automatically remove stale events from a dataset over time | **Experience Event TTL** |
| Automatically remove inactive pseudonymous (unknown) profiles | **Pseudonymous Profile TTL** |

These capabilities fall into two groups. Record delete and dataset expiration are targeted, one-time actions that you submit when you need them. Experience Event TTL and Pseudonymous Profile TTL are automated settings that remove data on an ongoing basis once you configure them.

>[!IMPORTANT]
>
>These capabilities manage your data for operational reasons such as data cleansing, removing anonymous data, and data minimization. They are not for privacy or regulatory compliance. To fulfill data subject rights requests under regulations such as the General Data Protection Regulation (GDPR), use [Adobe Experience Platform Privacy Service](../privacy-service/home.md) instead.

## Record delete

<!--
PLANNING (Section C — Step 05 spec READY)
Objective: Explain what Record Delete does, when to use it, what to expect, and where to perform it.
Reader outcome: understands row-level deletion by primary identity for operational/minimization use (not compliance), key limitations, irreversibility, high-level timeline/quota, and where to do it.
Required content: what it is (row-level by primary identity); when to use (cleansing/anonymous/minimization); NOT for compliance → Privacy Service; limitations (primary identity only; unpopulated skipped; pre-config data ineligible; single-vs-all-dataset depends on delta migration); irreversibility; brief what-to-expect (timeline + quota, LINKS only); where to do it.
Excludes: step-by-step UI/API (link ui/record-delete.md, api/workorder.md); timeline tables (link data-lifecycle-processing-timelines.md); quota values (link ui/record-delete.md#quotas — do not restate); relational/CDC detail (link ui/record-delete.md).
Source: ui/record-delete.md; data-lifecycle-processing-timelines.md.
-->

Record delete removes individual records from Experience Platform based on their primary identity. Use it to remove data for specific consumers or entities for operational reasons such as data cleansing, removing anonymous data, or data minimization. For privacy or regulatory requests, use [Adobe Experience Platform Privacy Service](../privacy-service/home.md) instead.

Record delete acts only on the primary identity defined in each dataset's schema. Before you use it, note the following limitations:

* Only the primary identity is matched. Records cannot be targeted by secondary identities.
* Records without a populated primary identity are skipped.
* Data ingested before the primary identity was configured in the dataset's schema cannot be deleted this way.

Depending on your organization's configuration, you can delete records from a single dataset or from all datasets.

>[!IMPORTANT]
>
>Deleted records cannot be recovered.

After you submit a request, it is grouped into a batch before processing and completes within the service level agreement (SLA) for your entitlement. For the processing stages and how long each takes, see [Data Lifecycle processing timelines](./data-lifecycle-processing-timelines.md). Record delete requests are also subject to daily and monthly identifier submission limits; for the current limits, see [identifier submission quotas](./ui/record-delete.md#quotas).

You can create record delete requests in the [!UICONTROL Data Lifecycle] workspace or with the API. See [Create a record delete request](./ui/record-delete.md) for the UI workflow and the [work order endpoint guide](./api/workorder.md) for the API.

## Dataset expiration

<!--
PLANNING (Section D — Step 05 spec READY)
Objective: Explain what Dataset Expiration does, when to use it, what to watch out for, and where to perform it.
Reader outcome: understands scheduled deletion of an entire dataset across data lake/Identity/Profile, the dataflow + limit caveats, and where to do it.
Required content: what it is (whole-dataset scheduled removal across 3 services); when to use (retire datasets no longer needed); caveat (update ingesting dataflows first); limits orientation (20 pending; 50 with Shield); batch deletion not supported (brief note); where to do it.
Excludes: scheduling steps (link ui/dataset-expiration.md, api/dataset-expiration.md); Edge Network deep detail; timeline detail.
Source: ui/dataset-expiration.md; home.md.
-->

Dataset expiration deletes an entire dataset on a date that you schedule. When the dataset reaches its expiration date, the data lake, Identity Service, and Real-Time Customer Profile each remove the dataset's contents, and the expiration completes once all three services finish. Use it to retire datasets that are no longer needed for your use cases.

>[!IMPORTANT]
>
>Before a dataset expires, update any dataflows that ingest data into it so that your downstream workflows are not affected.

You can have a limited number of scheduled dataset expirations pending at one time: 20 for Real-Time CDP, Adobe Journey Optimizer, and Customer Journey Analytics, or 50 with the Healthcare Shield or Privacy and Security Shield add-on. Data Lifecycle Management does not support batch deletion.

You can schedule dataset expirations in the [!UICONTROL Data Lifecycle] workspace or with the API. See [Schedule a dataset expiration](./ui/dataset-expiration.md) for the UI workflow and the [dataset expiration endpoint guide](./api/dataset-expiration.md) for the API.

## Automatic expiration: Experience Event and Pseudonymous Profile TTL

<!--
PLANNING (Section E — Step 05 spec READY WITH CAVEATS: non-blocking data-lake-TTL scope choice)
Objective: Explain what E-TTL and P-TTL are, when to use each, how they differ from each other and from delete/expiration, and where to configure them.
Reader outcome: understands E-TTL (dataset-level, drops stale events) and P-TTL (sandbox-level, removes inactive pseudonymous profiles), when to use each, how they complement, how they differ from targeted delete/expiration, and where to configure.
Required content: E-TTL (dataset-level, min 1 day, permanent); P-TTL (sandbox-level, self-serve, default 14d prod/3d dev); how E-TTL vs P-TTL differ (granularity/identity/removed items); TTL vs delete/expiration (automated/ongoing vs targeted/one-time); complementary usage; where to configure (LINKS).
Excludes: config steps/permissions (link profile/event-expirations.md, profile/pseudonymous-profiles.md, catalog dataset TTL guide); deep segmentation-lookback detail.
RESOLVED (Jordan 2026-06-30): data-lake dataset TTL = brief mention + link only.
Source: profile/event-expirations.md; profile/pseudonymous-profiles.md.
-->

Experience Event TTL and Pseudonymous Profile TTL automatically remove data from the Profile store once it is no longer useful, without you submitting individual requests. Unlike record delete and dataset expiration, which are one-time actions, these settings apply on an ongoing basis after you configure them.

Experience Event TTL (also called Experience Event expiration) applies at the dataset level and removes event data once it reaches the age that you set. It removes only events; a profile's attributes remain until all of that profile's data is gone. The minimum expiration is one day. For how to configure it, see [Experience Event expirations](../profile/event-expirations.md).

Pseudonymous Profile TTL (Pseudonymous Profile data expiration) applies at the sandbox level and removes pseudonymous (unknown) profiles that have had no activity for the period that you set. It removes both events and profile records. This setting is self-serve, with a default expiration of 14 days in production sandboxes and 3 days in development sandboxes. For how to configure it, see [Pseudonymous profile data expiration](../profile/pseudonymous-profiles.md).

The two settings differ in scope and in what they remove:

| | Experience Event TTL | Pseudonymous Profile TTL |
| --- | --- | --- |
| Applies at | Dataset level | Sandbox level |
| Removes | Events only | Events and profile records |
| Targets | Events older than the set age | Pseudonymous profiles inactive for the set period |

The two settings complement each other. Set Experience Event TTL on your datasets to control how long event data is retained, and use a shorter Pseudonymous Profile TTL to remove unknown profiles sooner.

>[!IMPORTANT]
>
>Data removed by either setting is permanently deleted and cannot be restored.

To remove aged records from a dataset in the data lake, rather than from the Profile store, you can also set a data lake retention period. See [Manage Experience Event dataset retention (TTL)](../catalog/datasets/experience-event-dataset-retention-ttl-guide.md).

## Plan your retention strategy

<!--
PLANNING (Section F — Step 05 spec READY)
Objective: Help the reader turn capability knowledge into an ongoing retention plan (what to keep, how long, how to monitor).
Reader outcome: reader can define a basic retention approach across capabilities, knows to monitor usage regularly, and knows where to go for license-level strategy.
Reader questions: (1) How do I decide retention periods for different data? (2) How do I combine the capabilities into an ongoing plan? (3) How do I keep it working over time?
Required content: retain-only-what-use-cases-need principle [source: internal value-realization guidance, public-safe subset + landing data-management-best-practices.md]; combining capabilities (e.g. always set Experience Event TTL, use a shorter Pseudonymous Profile TTL; expire/delete datasets no longer needed) [source: profile/event-expirations.md, profile/pseudonymous-profiles.md, ui/dataset-expiration.md]; monitoring cadence (review usage regularly) [source: public-safe subset; link landing license usage dashboard].
Excludes: license-usage strategy detail and dashboard mechanics (link landing/license-usage-and-guardrails/data-management-best-practices.md); capability how-to (belongs to the capability sections + their linked pages).
Cross-link: landing/license-usage-and-guardrails/data-management-best-practices.md; back-references the capability sections above.
Cross-section dependency: builds on the capability sections (B–E) — F is synthesis; keep it as the last section.
Assumptions: reader has read the capability sections first [INFERRED, position dependency].
Open questions: ensure F stays lifecycle-planning, not a license-compliance checklist (that lives in landing) [NON-BLOCKING; resolved by the guide/landing ownership split].
Readiness: READY.
-->

Data lifecycle management is an ongoing practice, not a one-time task. As a general principle, retain data only as long as it supports an active use case, and match the capability you use to how long the data stays useful.

Use the capabilities together, based on the data you keep:

* Set Experience Event TTL on your datasets to control how long event data is retained, and use a shorter Pseudonymous Profile TTL to remove inactive unknown profiles sooner.
* Use dataset expiration to retire entire datasets that are no longer needed for any use case.
* Use record delete to remove data for specific individuals or entities as the need arises.

Review your data usage regularly so that you can adjust your retention settings before data growth affects cost or performance. For the tools and best practices to track and manage your license entitlements, see [Data management license entitlement best practices](../landing/license-usage-and-guardrails/data-management-best-practices.md).
