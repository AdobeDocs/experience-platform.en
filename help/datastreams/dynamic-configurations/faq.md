---
title: Dynamic Datastream Configurations FAQ
description: "Learn about common questions on [!DNL Dynamic Datastream Configurations], including rule behavior, event routing, system interactions, performance, and limitations."
---

# Dynamic datastream configurations FAQ

## Can I use [!DNL Dynamic Datastream Configurations] and client-side datastream overrides together?

No. Dynamic datastream configurations and [datastream configuration overrides](/help/datastreams/overrides.md) are mutually exclusive per event. When an event carries a client-side override (sent via Web SDK `sendEvent` or `configure`), the override takes precedence and the Edge Network skips [!DNL Dynamic Datastream Configuration] rules for that event.

Plan your implementation around one approach for each datastream. If you are migrating from overrides to [!DNL Dynamic Datastream Configurations], remove `edgeConfigOverrides` from your SDK code as you enable the corresponding rules.

## What happens if no [!DNL Dynamic Datastream Configuration] rule matches an event?

The Edge Network routes the event according to the default static datastream configuration: the primary event dataset and all enabled services.

Set the primary dataset to a non-profile-enabled dataset. Unexpected or uncategorized events then land in the data lake rather than inflating your profile store.

## Can [!DNL Dynamic Datastream Configurations] drop or discard events entirely?

Yes. Disable the service (for example, [!DNL Adobe Experience Platform]) in a rule's routing configuration. The Edge Network does not send the event to that service. If you disable all services for a matching rule, the event does not reach any downstream processing.

For bot traffic filtering, Adobe recommends first routing events to a quarantine dataset ([use case 4](/help/datastreams/dynamic-configurations/use-cases.md#uc4)) to validate your bot detection logic before switching to a full discard configuration.

## Can I filter individual fields within an event using [!DNL Dynamic Datastream Configurations]?

No. Dynamic datastream configurations route entire events. They cannot remove or mask specific fields within an event payload.

## Does [!DNL Dynamic Datastream Configuration] affect personalization responses from Target or Journey Optimizer?

Disabling [!DNL Adobe Target] for certain events via a [!DNL Dynamic Datastream Configuration] rule prevents those events from triggering Target decisioning, and [!DNL Adobe Target] returns no personalization for them. Be careful not to disable [!DNL Adobe Target] for interactive page-load events that need personalization.

Suppressing `decisioning.propositionFetch` events (see [use case 3](/help/datastreams/dynamic-configurations/use-cases.md#uc3)) prevents [!DNL Adobe Experience Platform] from storing these system events in its datasets. It does not disable the personalization call itself. [!DNL Adobe Target] and [!DNL Adobe Journey Optimizer] still evaluate and return personalization decisions regardless of this rule.

## How does [!DNL Data Prep] interact with [!DNL Dynamic Datastream Configurations]?

[Data Prep for Data Collection](/help/datastreams/data-prep.md) runs before [!DNL Dynamic Datastream Configuration] rule evaluation. [!DNL Data Prep] maps your raw source data (sent via the [`data` object](/help/collection/js/commands/sendevent/data.md)) into XDM fields. Dynamic datastream configuration rules then evaluate their conditions against the resulting XDM payload.

This means your rule conditions can reference any field that [!DNL Data Prep] has mapped, including calculated or derived fields. If you use [!DNL Data Prep], verify that your mapping includes all fields you reference in your rules.

More generally, all enrichment services, including bot detection, geolocation, and device lookup, run before [!DNL Dynamic Datastream Configuration] rule evaluation. Their output fields are available as rule conditions.

## How does [!DNL Dynamic Datastream Configuration] interact with bot detection?

[Bot detection](/help/datastreams/bot-detection.md) runs before [!DNL Dynamic Datastream Configuration] rule evaluation. Bot detection tags events with a `botDetection.score` field. Dynamic datastream configurations can then reference this field as a condition in rules.

They are complementary: bot detection identifies bot traffic; [!DNL Dynamic Datastream Configurations] act on that identification by routing or discarding the flagged events.

## Can I route events to datasets in different sandboxes?

No. Dynamic datastream configurations route events within the same sandbox as the datastream. The system does not support cross-sandbox routing.

## How many datastreams can I consolidate with [!DNL Dynamic Datastream Configurations]?

The 5-rule-per-service limit determines the answer. If your current multi-datastream setup requires more than 5 distinct routing paths per service, you may still need multiple datastreams. However, most implementations find that 5 rules are sufficient to consolidate two to four datastreams into one.

See [Create Dynamic Datastream Configurations](/help/datastreams/configure-dynamic-datastream.md#guardrails) for the full list of guardrails, including maximum rules per service and maximum conditions per rule.

## What is the performance impact of [!DNL Dynamic Datastream Configurations]?

Dynamic datastream configurations add minimal latency. The system enforces a 25ms evaluation budget for all rules in a datastream. Rules that evaluate within this budget have no measurable impact on end-to-end event latency.

To stay within the budget, keep rules simple, use `eventType` as your primary condition, and avoid complex multi-field conditions where simpler alternatives exist.

## Next steps

- See [Dynamic datastream configuration use cases](/help/datastreams/dynamic-configurations/use-cases.md) for step-by-step rule configurations.
- Read [best practices for [!DNL Dynamic Datastream Configurations]](/help/datastreams/dynamic-configurations/best-practices.md) for operational guidance.
- Return to [Create Dynamic Datastream Configurations](/help/datastreams/configure-dynamic-datastream.md) to adjust rule conditions or rule order.
