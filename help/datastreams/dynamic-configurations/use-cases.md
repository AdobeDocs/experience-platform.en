---
title: Dynamic Datastream Configuration Use Cases
description: "Learn how to use [!DNL Dynamic Datastream Configurations] to separate events by value, manage data retention, suppress system events, and filter bot traffic."
---

# Dynamic datastream configuration use cases

This page covers six common use cases for [!DNL Dynamic Datastream Configurations]: event separation by value, tiered data retention strategy, system event suppression, bot traffic filtering, selective Experience Cloud solution routing, and Analytics source connector migration.

Each use case is independent. Implement only the ones that apply to your implementation.

Before configuring rules, complete the [prerequisites and planning checklist](/help/datastreams/dynamic-configurations/prerequisites.md) and review the [configuration patterns](/help/datastreams/dynamic-configurations/configuration-patterns.md) to choose the right primary dataset strategy for your implementation.

## Use case 1: Separate Actionable from Analytical events {#uc1}

**Goal:** Optimize Profile store usage and reduce Total Data Volume by routing only **Actionable** events to the [!DNL Real-Time Customer Profile] while keeping **Analytical** events available for [!DNL Customer Journey Analytics].

**When to use:** You are ingesting Web SDK or Mobile SDK events into [!DNL Adobe Experience Platform] and experiencing profile overages, Total Data Volume overages, or streaming ingestion guardrail pressure because all events land in a profile-enabled dataset.

### Dataset strategy {#uc1-dataset-strategy}

The following two-dataset structure separates events by their profile value.

| Dataset | Profile-enabled | Events |
|---------|----------------|--------|
| `Web Events - Profile` | Yes | Purchases, add-to-cart, form submissions, key conversions |
| `Web Events - Analytics` | No | Page views, scroll events, link clicks, general browsing |

### Rule configuration {#uc1-rule-config}

Before configuring rules, decide whether to use the [Actionable first or Analytical first](/help/datastreams/dynamic-configurations/configuration-patterns.md#aep-patterns) dataset strategy. That choice determines which dataset you set as the primary on your datastream.

**Example 1: Analytical first — Actionable events rule**

Primary dataset: `Web Events - Analytics` (non-profile-enabled, default fallback)
Secondary dataset: `Web Events - Profile` (profile-enabled)

Write one rule to promote **Actionable** events to the profile-enabled dataset. All **Analytical** events fall through to the primary dataset automatically.

**Rule: Actionable events**

| Field | Operator | Value |
|-------|----------|-------|
| `eventType` | equals | `commerce.purchases` |

Add additional conditions using [!DNL OR] logic for other **Actionable** event types, such as `commerce.productListAdds` or `leadGeneration.formComplete`.

- **[!DNL Adobe Experience Platform] service:** Enabled
- **Event dataset override:** `Web Events - Profile`
- **Edge services:** Enable [!DNL Adobe Journey Optimizer], [!UICONTROL Edge Segmentation], or [!UICONTROL Decision Management] as needed for your personalization use cases. See [Experience Platform settings](/help/datastreams/configure.md#aep).

**Example 2: Actionable first — Analytical events rule**

Primary dataset: `Web Events - Profile` (profile-enabled, default fallback)
Secondary dataset: `Web Events - Analytics` (non-profile-enabled)

Write one rule to route **Analytical** events away from the profile-enabled dataset. All **Actionable** events fall through to the primary dataset automatically.

**Rule: Analytical events**

| Field | Operator | Value |
|-------|----------|-------|
| `eventType` | equals | `web.webpagedetails.pageViews` |

Add additional conditions for other **Analytical** event types.

- **[!DNL Adobe Experience Platform] service:** Enabled
- **Event dataset override:** `Web Events - Analytics`
- **[!DNL Adobe Journey Optimizer] / [!UICONTROL Edge Segmentation] / [!UICONTROL Decision Management]:** Disabled

## Use case 2: Tiered data retention strategy {#uc2}

**Goal:** Manage data retention costs by routing events to datasets with different retention windows based on their long-term business value.

**When to use:** You need different retention windows for different event types. For example, longer retention for purchase data and shorter retention for product interactions in [!DNL Adobe Real-Time CDP].

For details on dataset retention configuration, see the [Experience Event Dataset Retention guide](/help/catalog/datasets/experience-event-dataset-retention-ttl-guide.md).

### Dataset strategy {#uc2-dataset-strategy}

The following three-tier structure assigns retention windows based on event value.

| Dataset | Profile-enabled | Retention | Events |
|---------|----------------|-----|--------|
| `Purchases` | Yes | 3 months | Consented online purchases |
| `Product Interactions` | Yes | 30 days | Product views, add-to-cart, page views with UTM parameters |
| `Browsing - General` | No | 12 months | General page views, site search, component impressions |

>[!IMPORTANT]
>
>You set data retention at the dataset level in [!DNL Adobe Experience Platform], not in the [!DNL Dynamic Datastream Configuration]. See [Set or update retention for a dataset](/help/catalog/datasets/experience-event-dataset-retention-ttl-guide.md#set-update-ttl). Dynamic datastream configurations route events to the correct dataset. The dataset's retention setting controls how long data is kept. Create your datasets with the correct retention window before configuring rules.

### Rule configuration {#uc2-rule-config}

Set the primary dataset on your datastream to `Browsing - General` so that unmatched events land in the non-profile dataset by default rather than inflating the profile store. You do not need a rule for general browsing events — they fall through to the primary dataset automatically.

**Rule 1: Purchases**

| Field | Operator | Value |
|-------|----------|-------|
| `eventType` | equals | `commerce.purchases` |

- **Event dataset override:** `Purchases`
- **Edge services:** Enabled as needed ([!UICONTROL Edge Segmentation], [!DNL Adobe Journey Optimizer], [!UICONTROL Decision Management])

**Rule 2: Product interactions**

| Field | Operator | Value |
|-------|----------|-------|
| `eventType` | equals | `commerce.productViews` |

Add additional conditions with [!DNL OR] for `commerce.productListAdds`, page views with UTM parameters, and other product interaction events.

- **Event dataset override:** `Product Interactions`
- **Edge services:** Enabled as needed

## Use case 3: Suppress personalization system events {#uc3}

**Goal:** Keep `decisioning.propositionFetch` and `personalization.request` events out of [!DNL Customer Journey Analytics] and the [!DNL Real-Time Customer Profile]. These system events fire on every page load when [!DNL Adobe Target] or [!DNL Adobe Journey Optimizer] retrieves personalization decisions. They are **Expendable** events with no analytical or profile value.

**When to use:** You use [!DNL Adobe Target] or [!DNL Adobe Journey Optimizer] for personalization alongside [!DNL Customer Journey Analytics] or [!DNL Adobe Real-Time CDP], and these system events are inflating your billable row count, consuming Profile store capacity, or consuming streaming ingestion throughput.

### Rule configuration {#uc3-rule-config}

Route system events to a dedicated quarantine dataset rather than disabling the [!DNL Adobe Experience Platform] service entirely. This preserves the events for debugging before you confirm they carry no value.

**Rule: System events**

| Field | Operator | Value |
|-------|----------|-------|
| `eventType` | equals | `decisioning.propositionFetch` |

Add an [!DNL OR] condition for `personalization.request` and any other system event types you want to suppress.

- **[!DNL Adobe Experience Platform] service:** Enabled
- **Event dataset override:** `System Events - Quarantine` (a non-profile-enabled dataset with a 30-day retention window, for debugging and audit purposes)
- **[!UICONTROL Edge Segmentation] / [!DNL Adobe Journey Optimizer] / [!UICONTROL Decision Management]:** Enabled as needed

After routing these events to the quarantine dataset, ensure it is excluded from your [!DNL Customer Journey Analytics] connection.

>[!NOTE]
>
>Suppressing `decisioning.propositionFetch` events from [!DNL Adobe Experience Platform] ingestion does not disable the personalization call itself. [!DNL Adobe Target] and [!DNL Adobe Journey Optimizer] still evaluate and return personalization decisions. This rule only controls whether [!DNL Adobe Experience Platform] stores the system event record in its datasets.

## Use case 4: Bot traffic filtering {#uc4}

**Goal:** Stop bot-generated events from entering the [!DNL Real-Time Customer Profile], inflating [!DNL Customer Journey Analytics] metrics, or consuming streaming ingestion throughput.

**When to use:** You have enabled bot detection on your datastream and want to act on the bot scores assigned to events.

### Prerequisites {#uc4-prerequisites}

Before configuring this rule, complete the bot detection setup described in the [prerequisites and planning checklist](/help/datastreams/dynamic-configurations/prerequisites.md#schema-dataset):

1. Enable [bot detection](/help/datastreams/bot-detection.md) on the datastream.
2. Add the **Bot Detection Information** field group to your XDM schema.
3. Allow up to 15 minutes for bot detection rules to propagate before testing.

### Rule configuration {#uc4-rule-config}

Always start by quarantining bot events for analysis. After you validate that the bot scoring is accurate, you can either continue to quarantine or choose to discard these events entirely.

**Rule: Bot traffic**

| Field | Operator | Value |
| ----- | -------- | ----- |
| `botDetection.score` | equals | `1` |

**Option A: Quarantine for analysis (recommended initially)**

- **[!DNL Adobe Experience Platform] service:** Enabled
- **Event dataset override:** `Bot Traffic - Quarantine` (non-profile, 30-day retention)
- **Edge services:** Disabled

Ensure this dataset is excluded from your [!DNL Customer Journey Analytics] connection.

**Option B: Discard entirely (after validating Option A)**

- **[!DNL Adobe Experience Platform] service:** Disabled

After validating the quarantine dataset and confirming the bot scoring is accurate, disable the [!DNL Adobe Experience Platform] service in the rule to stop these events from reaching [!DNL Adobe Experience Platform] altogether.

You can also disable other services for bot traffic in separate rules:

- **[!DNL Adobe Analytics]:** Disabled. This prevents bot hits from inflating report suite metrics.
- **[!DNL Adobe Target]:** Disabled. This prevents bots from skewing A/B test results.

>[!NOTE]
>
>[!DNL Adobe Analytics] has its own bot filtering capabilities. Disabling [!DNL Adobe Analytics] via a [!DNL Dynamic Datastream Configuration] rule for bot traffic is a complementary approach. Discuss with your Analytics team whether datastream-level filtering, Analytics-level filtering, or both is appropriate for your implementation.

### Rule ordering {#uc4-rule-ordering}

Place the bot filtering rule **first** in your rule list, before any **Actionable** or **Analytical** rules. Because the Edge Network uses first-match-wins evaluation, placing this rule first ensures the Edge Network catches and discards bot traffic before any other routing logic runs. Routing a bot event to a profile-enabled dataset consumes unnecessary Profile store capacity.

## Use case 5: Selective Experience Cloud solution routing {#uc5}

**Goal:** Control which Experience Cloud solutions ([!DNL Adobe Analytics], [!DNL Adobe Target], [!DNL Adobe Audience Manager]) receive specific event types, and override solution-level settings such as report suites or property tokens based on event conditions.

**When to use:** You want to consolidate multiple datastreams into one, different event types should go to different [!DNL Adobe Analytics] report suites, or certain events should not reach [!DNL Adobe Target] or [!DNL Adobe Audience Manager].

### Example A: Override Analytics report suites by event type {#uc5-example-a}

A single datastream serving multiple site sections that report to different report suites:

**Rule 1: E-commerce events**

| Field | Operator | Value |
|-------|----------|-------|
| `eventType` | starts with | `commerce.` |

- **[!DNL Adobe Analytics]:** Enabled
- **Report suite override:** `rsid-commerce`

**Rule 2: Content events**

| Field | Operator | Value |
|-------|----------|-------|
| `eventType` | equals | `web.webpagedetails.pageViews` |

- **[!DNL Adobe Analytics]:** Enabled
- **Report suite override:** `rsid-content`

### Example B: Disable Target for Analytical events {#uc5-example-b}

Prevent **Analytical** events from reaching [!DNL Adobe Target] to reduce Target requests per second and unnecessary processing:

**Rule: Analytical events**

| Field | Operator | Value |
|-------|----------|-------|
| `eventType` | equals | `web.webpagedetails.pageViews` |

- **[!DNL Adobe Target]:** Disabled
- **[!DNL Adobe Analytics]:** Enabled (default report suite)

### Example C: Consolidate multiple datastreams {#uc5-example-c}

If you currently maintain separate datastreams for [!DNL Adobe Analytics] and [!DNL Adobe Target], [!DNL Event Forwarding], [!DNL Adobe Journey Optimizer], and [!DNL Customer Journey Analytics], you can consolidate into a single datastream:

1. [Enable all services](/help/datastreams/configure.md#add-services) on one datastream.
2. Use [!DNL Dynamic Datastream Configuration] rules to control which events reach which services.
3. Suppress `decisioning.propositionFetch` events from [!DNL Adobe Experience Platform] (see [use case 3](#uc3)).
4. Filter bot traffic before it reaches any service (see [use case 4](#uc4)).
5. Route **Actionable** events and **Analytical** events to appropriate datasets (see [use case 1](#uc1)).

This reduces datastream management overhead and eliminates the need for client-side logic to select between datastreams.

For the full consolidation example with rule tables and rule-order rationale, see the [end-to-end example](/help/datastreams/dynamic-configurations/example.md).

## Use case 6: Migrate from the Analytics source connector {#uc6}

**Goal:** Replace the [Adobe Analytics source connector](/help/sources/connectors/adobe-applications/analytics.md) with [Web SDK data collection](/help/collection/js/js-overview.md) while preserving the row-level filtering the source connector provided.

**When to use:** You are migrating from the [!DNL Adobe Analytics] source connector to Web SDK-based data collection into [!DNL Adobe Experience Platform], and you relied on the source connector to filter which events the profile received.

### Migration approach {#uc6-migration}

Follow these steps in order. Steps 1 and 2 are planning steps you complete before touching the datastream.

**Step 1: Inventory of your source connector filters**

Document which events the source connector currently excludes from ingestion:

- Event types excluded from profile (for example, page views, custom link calls)
- Row filters based on specific conditions (for example, exclude internal traffic)

**Step 2: Map source connector filters to rules**

| Source connector filter | Dynamic datastream configuration equivalent |
| ---------------------- | ------------------------------------------- |
| Row filter: exclude event type X from profile | Rule: route events where `eventType` equals X to a non-profile dataset |
| Row filter: exclude internal traffic | Rule: route events where `email` contains `@yourcompany.com` to a non-profile dataset or discard |

**Step 3: Create your dataset strategy**

Follow [use case 1](#uc1) or [use case 2](#uc2) based on your retention requirements.

**Step 4: Configure rules**

Implement the rules mapped in Step 2. Decide between an [Analytical first or Actionable first](/help/datastreams/dynamic-configurations/configuration-patterns.md#aep-patterns) pattern. Prioritize rules that affect the largest number of events first and leave all other events to the default fallback.

**Step 5: Run parallel ingestion**

During migration, run both the source connector and Web SDK ingestion in parallel for a validation window. Compare:

- Event volumes per dataset
- Profile counts and Total Data Volume
- [!DNL Customer Journey Analytics] row counts

After you validate the results, decommission the source connector.

>[!WARNING]
>
>Do not reuse the same datasets for both the [!DNL Adobe Analytics] source connector and Web SDK ingestion. Ingesting from both sources into the same dataset duplicates your data. Use distinct datasets for each ingestion path and do not enable the Web SDK ingestion dataset for profile until validation is complete.

>[!NOTE]
>
>[!DNL Dynamic Datastream Configurations] operate at the event routing level and cannot filter individual fields within an event. For field-level (column-level) control, design your XDM schemas to include only the fields each dataset needs, and use [Data Prep for Data Collection](/help/datastreams/data-prep.md) mappings to control which fields are mapped from your raw data layer into the XDM payload.

## Next steps

- Review the [end-to-end example](/help/datastreams/dynamic-configurations/example.md) to see multiple use cases combined in a single datastream configuration.
- Read [best practices for [!DNL Dynamic Datastream Configurations]](/help/datastreams/dynamic-configurations/best-practices.md) before deploying to production.
- Follow the steps in [Test and validate [!DNL Dynamic Datastream Configurations]](/help/datastreams/dynamic-configurations/testing.md) to verify your rules are routing correctly.
