---
title: Dynamic Datastream Configuration Patterns
description: "Learn about [!DNL Dynamic Datastream Configuration] patterns and when to use Actionable first versus Analytical first dataset strategies for Experience Platform."
---

# Dynamic datastream configuration patterns

Two categories of patterns apply to [!DNL Dynamic Datastream Configuration] rule design: general rule-writing patterns that apply to all services, and [!DNL Adobe Experience Platform]-specific dataset strategy patterns. Each category addresses a different design decision and can be applied independently.

Before reading this page, review the [event value taxonomy](/help/datastreams/dynamic-configurations/overview.md#event-taxonomy) in the [!DNL Dynamic Datastream Configuration] overview. Classifying your events as **Expendable**, **Analytical**, or **Actionable** is a prerequisite for choosing the right pattern.

## General patterns {#general-patterns}

The following patterns apply to all services: [!DNL Adobe Analytics], [!DNL Adobe Target], [!DNL Adobe Audience Manager], Event Forwarding, and [!DNL Adobe Experience Platform].

### Specific rules before broad rules {#granular-before-generic}

Because the Edge Network uses first-match-wins evaluation, define more specific rules before broader ones. A generic rule placed before a specific rule matches first and the Edge Network never evaluates the specific rule.

**Example:** Place the more specific rule first, followed by the broader rule:

- Rule 1 (specific): _`eventType` equals `commerce.purchases` [!DNL AND] `web.webPageDetails.URL` contains `/checkout/confirmation`_
- Rule 2 (broad): _`eventType` equals `commerce.purchases`_

### Write rules only for exceptions {#override-rules}

Because unmatched events fall back to the default static datastream configuration, you do not need rules for your most common event path. Define rules only for the subset of events that should deviate from the default.

**Example:** A datastream with a primary non-profile-enabled dataset (`Web Events - Analytics`) and a secondary profile-enabled dataset (`Web Events - Profile`). Instead of writing rules for all event types, write a single rule to route **Actionable** events to `Web Events - Profile`. All other events automatically fall back to the primary dataset.

## Experience Platform dataset patterns {#aep-patterns}

When routing events to [!DNL Adobe Experience Platform], choose a primary dataset strategy before writing rules. The strategy determines where unmatched events land, which is what happens to the majority of events in most implementations.

Both patterns support the same Edge Network services: [!UICONTROL Decision Management], [!UICONTROL Edge Segmentation], [!UICONTROL Personalization Destinations], and [!DNL Adobe Journey Optimizer]. See [Experience Platform settings](/help/datastreams/configure.md#aep) to enable them on your datastream.

>[!NOTE]
>
>You can have up to 5 rules for [!DNL Adobe Experience Platform], 5 for [!DNL Adobe Analytics], 5 for [!DNL Adobe Target], 5 for [!DNL Adobe Audience Manager], and 5 for Event Forwarding, all on the same datastream. Limits apply independently per service.

### Actionable first {#actionable-first}

**Actionable first** means you prioritize profile ingestion, segmentation, and activation by ensuring every event goes to the [!DNL Real-Time Customer Profile] and all enabled Edge services unless a rule explicitly routes it elsewhere.

Set the primary (default) dataset to a profile-enabled dataset. Enable the [!DNL Adobe Experience Platform] Edge services you need.

All events go to the data lake, the [!DNL Real-Time Customer Profile], and all enabled Edge services. Write rules to route **Analytical** events away from Profile and to disable Edge services for those events.

### Analytical first {#analytical-first}

**Analytical first** means you prioritize the data lake over the [!DNL Real-Time Customer Profile] by ensuring every event lands in a non-profile dataset unless a rule explicitly promotes it to the [!DNL Real-Time Customer Profile] and Edge services.

Set the primary (default) dataset to a non-profile-enabled dataset. Enable the [!DNL Adobe Experience Platform] Edge services you need.

All events go to the data lake only. Write rules to route **Actionable** events to a profile-enabled dataset and enable the appropriate Edge services for those events. Add rules to disable Edge services for **Analytical** events as needed.

## When to choose Actionable first versus Analytical first {#which-pattern}

Choose based on which event type makes up the majority of your traffic.

| Consideration | Actionable first | Analytical first |
|---|---|---|
| **Best when** | Most of your events are **Actionable** (for example, transactional apps, loyalty platforms) | Most of your events are **Analytical** (for example, content-heavy websites with high page view volume) |
| **Default behavior** | All events go to Profile. Rules route **Analytical** events away from Profile. | All events go to the data lake only. Rules route **Actionable** events to Profile. |
| **Rule efficiency** | Fewer rules needed when **Analytical** event types are a small set | Fewer rules needed when **Actionable** event types are a small set |
| **When things go wrong** | Unexpected events land in Profile (higher cost, but no opportunity loss for personalization) | Unexpected events stay out of Profile (lower cost, but may miss personalization opportunities) |

**Rule of thumb:** Write rules for the minority of your event types. If you have 3 **Actionable** event types and 15 **Analytical** event types, use Analytical first and write 3 rules to promote **Actionable** events to Profile. This keeps your rule count well within the 5-rule-per-service limit.

## Next steps

- See [Dynamic datastream configuration use cases](/help/datastreams/dynamic-configurations/use-cases.md) for concrete rule configurations built on these patterns.
- Review the [end-to-end example](/help/datastreams/dynamic-configurations/example.md) to see both patterns applied together in a production scenario.
- Follow the UI instructions in [Create Dynamic Datastream Configurations](/help/datastreams/configure-dynamic-datastream.md) to build your rules.
