---
title: Dynamic Datastream Configuration Overview
description: "Learn about [!DNL Dynamic Datastream Configurations], how it routes events to Experience Cloud services based on rules, and how it compares to other routing options."
---

# Dynamic datastream configuration overview

By default, the [!DNL Adobe Experience Platform Edge Network] sends every event arriving on a [datastream](/help/datastreams/overview.md) to all [!DNL Experience Cloud] services you have enabled. Use [!DNL Dynamic Datastream Configurations] to define **rules** that control which services receive which events and/or which datasets store those events, without changing any client-side SDK code.

Before [!DNL Dynamic Datastream Configurations], controlling event routing required either maintaining multiple datastreams or adding override logic in your client-side SDK implementation. [!DNL Dynamic Datastream Configurations] move that routing logic server-side into the datastream itself.

## What [!DNL Dynamic Datastream Configurations] can do {#can-do}

The following table summarizes the routing actions available to you.

| Action | Example |
|--------|---------|
| Route events to different datasets | Page views go to a non-profile dataset; purchases go to a profile-enabled dataset |
| Disable a service for matching events | Disable [!DNL Adobe Experience Platform] ingestion for bot traffic |
| Override service settings per event | Send events to different [!DNL Adobe Analytics] report suites or [!DNL Adobe Target] property tokens based on event conditions |
| Enable or disable Experience Platform sub-services | Disable [!UICONTROL Edge Segmentation], [!DNL Adobe Journey Optimizer], [!UICONTROL Decision Management], or [!UICONTROL Personalization Destinations] for specific event types |

## What [!DNL Dynamic Datastream Configurations] cannot do {#cannot-do}

Dynamic datastream configurations are designed for event-level routing. The following actions are not supported.

| Action | Reason |
| ------ | ------ |
| Send the same event to multiple datasets in parallel | Rules route an event to one dataset only |
| Remove fields from event payloads | The Edge Network always forwards the full event |
| Evaluate conditions based on profile attributes | Rules evaluate only the incoming event payload |

## Rule evaluation model {#rule-evaluation}

Understanding how the Edge Network evaluates **rules** helps you design configurations that behave predictably.

- **First match wins.** The Edge Network evaluates rules in the order you define them. When an event matches a rule, the Edge Network applies that rule's routing configuration and stops evaluating further rules.
- **Default fallback.** If no rule matches an event, the event follows the default static [datastream configuration](/help/datastreams/configure.md#aep): the primary event dataset and all enabled services.
- **25ms evaluation budget.** All rules in a datastream must evaluate within 25ms total. If evaluation exceeds this budget, the event falls back to the default datastream configuration. Keep rules simple and focused on reliable fields such as `eventType`.
- **Flat expressions only.** The system does not support nested logical expressions (containers within containers). If your logic requires nesting, break it into multiple flat rules instead.

For the full list of supported data types, operators, and guardrails, see [Create Dynamic Datastream Configurations](/help/datastreams/dynamic-configurations/configure.md).

## Event value taxonomy {#event-taxonomy}

Before designing rules, classify all event types your implementation sends into one of three categories. This classification directly determines your dataset strategy and rule design.

| Category | Description | Examples |
|----------|-------------|---------|
| **Expendable** | Events with no analytical or actionable value. | Bot-generated events, operational events such as `decisioning.propositionFetch` and `personalization.request` |
| **Analytical** | Events needed for analytics reporting only. These events are not needed for profile enrichment and are not actionable in segmentation and activation. | Page views, scroll depth, general browsing behavior |
| **Actionable** | Events needed for profile enrichment and actionable in segmentation and activation. These events are also analytical and are available in analytics reporting. | Purchases, add-to-cart, form submissions, key conversion events |

Classifying your events before you configure rules is the most important planning step. It determines which datasets you need, which events go to which datasets, and how many rules you need to write.

## Mutual exclusivity with datastream overrides {#overrides}

>[!IMPORTANT]
>
>Events that carry a client-side override bypass [!DNL Dynamic Datastream Configuration] rules silently, with no error or warning. If your rules are not matching events you expect them to match, check whether those events carry an `edgeConfigOverrides` payload.

Dynamic datastream configurations and [datastream configuration overrides](/help/datastreams/overrides.md) are mutually exclusive per event. When an event carries a client-side override sent via Web SDK [`sendEvent`](/help/collection/js/commands/sendevent/overview.md) or [`configure`](/help/collection/js/commands/configure/overview.md), the override takes precedence and the Edge Network skips [!DNL Dynamic Datastream Configuration] rules for that event.

Plan your implementation to use one approach or the other per event type. Do not use both. Where possible, use [!DNL Dynamic Datastream Configurations] over client-side overrides. They provide better visibility, traceability, and control.

## Next steps

- Review the [prerequisites and planning checklist](/help/datastreams/dynamic-configurations/prerequisites.md) before configuring your first rules.
- Read [Dynamic datastream configuration patterns](/help/datastreams/dynamic-configurations/configuration-patterns.md) to choose the right dataset strategy.
- Follow the UI steps to [create [!DNL Dynamic Datastream Configurations]](/help/datastreams/dynamic-configurations/configure.md).
