---
title: End-to-End Dynamic Datastream Configuration Example
description: "Learn how to combine [!DNL Dynamic Datastream Configuration] use cases into a single datastream for an e-commerce implementation using the Analytical first pattern."
---

# End-to-end [!DNL Dynamic Datastream Configuration] example

This page shows how to combine multiple [!DNL Dynamic Datastream Configuration] use cases into a single, production-ready configuration. The example uses the [Analytical first](/help/datastreams/dynamic-configurations/configuration-patterns.md#analytical-first) pattern and applies to a common e-commerce scenario.

## Scenario {#scenario}

An e-commerce retailer uses Web SDK with [!DNL Adobe Target] for personalization, [!DNL Adobe Analytics], [!DNL Customer Journey Analytics], and [!DNL Adobe Real-Time CDP]. The retailer currently maintains three separate datastreams: one for [!DNL Adobe Analytics] and [!DNL Adobe Target], one for [!DNL Customer Journey Analytics], and one for [!DNL Adobe Journey Optimizer]. The goal is to consolidate into a single datastream and:

- Filter bot traffic before it reaches any service ([use case 4](/help/datastreams/dynamic-configurations/use-cases.md#uc4))
- Suppress `decisioning.propositionFetch` system events from [!DNL Adobe Experience Platform] ([use case 3](/help/datastreams/dynamic-configurations/use-cases.md#uc3))
- Route purchases and product interactions to the [!DNL Real-Time Customer Profile] for segmentation and [!DNL Adobe Journey Optimizer] journeys ([use case 1](/help/datastreams/dynamic-configurations/use-cases.md#uc1) and [use case 2](/help/datastreams/dynamic-configurations/use-cases.md#uc2))
- Keep page views in the data lake for [!DNL Customer Journey Analytics] only

Since most events are page views (**Analytical**), the retailer chooses **Analytical first**: the primary dataset is non-profile-enabled, and rules promote **Actionable** events to Profile.

## Dataset strategy {#dataset-strategy}

Create these datasets before configuring rules. For data retention configuration guidance, see the [Experience Event Dataset Retention guide](/help/catalog/datasets/experience-event-dataset-retention-ttl-guide.md).

| Dataset | Profile-enabled | Retention | Purpose |
|---------|----------------|-----|---------|
| `Bot Traffic - Quarantine` | No | 30 days | Isolate bot events for analysis before discarding |
| `System Events - Quarantine` | No | 30 days | Isolate `propositionFetch` events for debugging |
| `Purchases` | Yes | 3 months | High-value conversions for profile, [!UICONTROL Edge Segmentation], and [!DNL Adobe Journey Optimizer] |
| `Product Interactions` | Yes | 30 days | Product views and add-to-cart for profile and [!UICONTROL Edge Segmentation] |
| `Browsing - General` **(primary)** | No | 12 months | Page views and site search for [!DNL Customer Journey Analytics] reporting |

`Browsing - General` is the primary dataset on the datastream. All events that match no rule fall back to this dataset.

## Experience Platform service rules {#aep-rules}

The following table shows the complete rule set for the [!DNL Adobe Experience Platform] service. The Edge Network evaluates rules in the order listed.

| Rule | Name | Conditions | [!DNL Adobe Experience Platform] | Dataset override | [!UICONTROL Edge Segmentation] | [!DNL Adobe Journey Optimizer] | Use case |
|------|------|-----------|------------|-----------------|-------------------|-------------------------------|----------|
| 1 | Bot traffic | `botDetection.score` equals `1` | Enabled | `Bot Traffic - Quarantine` | Disabled | Disabled | [UC 4](/help/datastreams/dynamic-configurations/use-cases.md#uc4) |
| 2 | System events | `eventType` equals `decisioning.propositionFetch` [!DNL OR] `eventType` equals `personalization.request` | Enabled | `System Events - Quarantine` | Disabled | Disabled | [UC 3](/help/datastreams/dynamic-configurations/use-cases.md#uc3) |
| 3 | Purchases | `eventType` equals `commerce.purchases` | Enabled | `Purchases` | Enabled | Enabled | [UC 1](/help/datastreams/dynamic-configurations/use-cases.md#uc1), [UC 2](/help/datastreams/dynamic-configurations/use-cases.md#uc2) |
| 4 | Product interactions | `eventType` equals `commerce.productViews` [!DNL OR] `eventType` equals `commerce.productListAdds` | Enabled | `Product Interactions` | Enabled | Disabled | [UC 1](/help/datastreams/dynamic-configurations/use-cases.md#uc1), [UC 2](/help/datastreams/dynamic-configurations/use-cases.md#uc2) |
| Default | Default (no match) | Everything else | Enabled (primary) | `Browsing - General` | Disabled | Disabled | [UC 1](/help/datastreams/dynamic-configurations/use-cases.md#uc1) |

## Why this rule order {#rule-order}

1. **Bot traffic first (Rule 1).** Quarantine bot-detected events before any routing logic runs. A bot event that matches a later rule would waste Profile store capacity.

2. **System events second (Rule 2).** `decisioning.propositionFetch` events fire on every page load and have no analytical value. Catching them early prevents them from accidentally matching an **Actionable** rule.

3. **Purchases third (Rule 3).** The Actionable events receive full [!DNL Adobe Experience Platform] treatment: Profile, Edge Segmentation, and [!DNL Adobe Journey Optimizer] for triggered inbound personalization.

4. **Product interactions fourth (Rule 4).** Profile-enabled for segmentation, but [!DNL Adobe Journey Optimizer] is disabled. This implementation does not fetch inbound personalization from [!DNL Adobe Journey Optimizer] on browse behavior.

5. **Default last.** Everything else (page views, scroll events, site search) lands in the non-profile primary dataset for [!DNL Customer Journey Analytics] reporting only.

## Rule budget analysis {#rule-budget}

This configuration uses **4 explicit rules** out of the 5-rule-per-service limit for [!DNL Adobe Experience Platform]. One rule slot remains available for future needs, for example, filtering internal traffic by email domain or routing a new event type.

For the full list of guardrails, see [Create Dynamic Datastream Configurations](/help/datastreams/configure-dynamic-datastream.md#guardrails).

If you need more granularity, combine additional event types as [!DNL OR] conditions within an existing rule. For example, Rule 4 already combines `commerce.productViews` and `commerce.productListAdds`. You could add `commerce.productListOpens` or `commerce.saveForLaters` to the same rule without using an additional rule slot. Each rule supports up to 100 conditions.

## Solution-level rules {#solution-rules}

The Experience Platform service rules in the previous section are independent of rules for other services. You can configure up to 5 additional rules for each of [!DNL Adobe Analytics], [!DNL Adobe Target], [!DNL Adobe Audience Manager], and [!DNL Event Forwarding], independently of the Experience Platform rules.

| Service | Rule | Condition | Action |
|---------|------|-----------|--------|
| [!DNL Adobe Analytics] | Bot bypass | `botDetection.score` equals `1` | [!DNL Adobe Analytics]: Disabled |
| [!DNL Adobe Analytics] | Commerce report suite | `eventType` starts with `commerce.` | Report suite override: `rsid-commerce` |
| [!DNL Adobe Target] | Bot bypass | `botDetection.score` equals `1` | [!DNL Adobe Target]: Disabled |

## Assurance validation {#assurance-validation}

After saving your rules, wait 15 minutes for changes to propagate across the Edge Network. Then validate each event path using [Adobe Experience Platform Assurance](/help/assurance/home.md).

For a full walkthrough of the validation process, see [Test and validate [!DNL Dynamic Datastream Configurations]](/help/datastreams/dynamic-configurations/testing.md).

| Test event | Expected rule match | Expected dataset | Profile ingested |
|-----------|--------------------|-----------------|--------------------|
| Page view from a bot user-agent | Rule 1: Bot traffic | `Bot Traffic - Quarantine` | No |
| Page load triggering [!DNL Adobe Target] personalization | Rule 2: System events | `System Events - Quarantine` | No |
| Purchase completion | Rule 3: Purchases | `Purchases` | Yes |
| Product detail page view | Rule 4: Product interactions | `Product Interactions` | Yes |
| Homepage page view | Default (no match) | `Browsing - General` | No |

## Next steps

- Follow the steps in [Test and validate [!DNL Dynamic Datastream Configurations]](/help/datastreams/dynamic-configurations/testing.md) to verify each event path before deploying to production.
- Read [best practices for [!DNL Dynamic Datastream Configurations]](/help/datastreams/dynamic-configurations/best-practices.md) for ongoing operational guidance.
- See the [FAQ](/help/datastreams/dynamic-configurations/faq.md) if you encounter unexpected routing behavior.
