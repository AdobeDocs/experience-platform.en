---
title: Best Practices for Dynamic Datastream Configurations
description: "Learn best practices for designing, organizing, and operating [!DNL Dynamic Datastream Configuration] rules to ensure reliable event routing and system performance."
---

# Best practices for [!DNL Dynamic Datastream Configurations]

Use these practices when you design and operate [!DNL Dynamic Datastream Configuration] rules. They help you manage [system guardrails](/help/datastreams/configure-dynamic-datastream.md#guardrails), avoid common mistakes, and maintain configurations that are easy to understand and troubleshoot.

## Rule design {#rule-design}

**Use separate datastreams per event source.** Consider creating one datastream for Web SDK, one for Mobile SDK, and one for the Server API. If your data comes from a different source or uses a different XDM schema, create a separate datastream. A dedicated datastream with its own corresponding datasets improves traceability and simplifies troubleshooting. Dynamic datastream configuration rules then handle routing within each datastream.

**Keep rules simple and flat.** Dynamic datastream configurations do not support nested logical expressions. If your logic requires nesting, break it into multiple flat rules. Simpler rules evaluate faster, are easier to audit, and are less likely to produce unexpected matches.

**Use `eventType` as your primary condition.** `eventType` is the most reliable and performant discriminator for routing decisions. It is consistently populated across Web SDK, Mobile SDK, and Server API implementations and has a well-defined set of values. Virtually every use case should start with an `eventType`-based condition, optionally combined with secondary conditions.

**Order rules by priority: Expendable first, then Actionable, then Analytical.** Because the Edge Network uses first-match-wins evaluation, the order of your rules determines the outcome for events that could match multiple conditions.

A recommended order:

1. Bot traffic: **Expendable** or quarantine
2. System events (`decisioning.propositionFetch`, `personalization.request`): quarantine
3. **Actionable** events: route to a profile-enabled dataset
4. **Analytical** events: route to a non-profile dataset

Placing **Expendable** rules first ensures the Edge Network catches harmful or operational traffic before it makes expensive routing decisions such as profile ingestion or inbound personalization.

**Design your default route conservatively.** Configure the datastream's default [!DNL Adobe Experience Platform] event dataset to a non-profile-enabled dataset. Unexpected or uncategorized events then land in the data lake rather than inflating your profile store. You can always add a specific rule to promote a newly discovered event type to Profile once you have classified it.

## Dataset strategy {#dataset-strategy}

**Create datasets before configuring rules.** All target datasets must exist with the correct schema before you reference them in routing configurations. After you validate your rules using Assurance, enable profile, configure data retention, and update your [!DNL Customer Journey Analytics] connection.

For data retention configuration guidance, see the [Experience Event Dataset Retention guide](/help/catalog/datasets/experience-event-dataset-retention-ttl-guide.md).

**Use a consistent naming convention.** Clear dataset names make it easy to identify the purpose of each dataset when reviewing your configuration or monitoring ingestion. A recommended pattern:

- `[Brand] Web Events - Profile (90d)`
- `[Brand] Web Events - Analytics (12mo)`
- `[Brand] Bot Traffic - Quarantine (30d)`
- `[Brand] System Events - Quarantine (30d)`

**Align your [!DNL Customer Journey Analytics] connection with your dataset strategy.** After you configure [!DNL Dynamic Datastream Configuration] rules and events route to separate datasets, update your [!DNL Customer Journey Analytics] connection to include only the datasets that should be used in reporting. Exclude quarantine datasets for bot traffic and system events. For details, see the [Customer Journey Analytics connections documentation](https://experienceleague.adobe.com/en/docs/analytics-platform/using/cja-connections/overview){target="_blank"}.

## Operational practices {#operational}

**Allow 15 minutes for changes to propagate.** Datastream configuration changes, including new or updated [!DNL Dynamic Datastream Configuration] rules, take up to 15 minutes to propagate across the Edge Network. Do not test immediately after saving changes. Wait the full propagation window before running Assurance sessions or comparing dataset ingestion volumes.

**Remove client-side overrides before enabling rules.** [Datastream configuration overrides](/help/datastreams/overrides.md) take precedence over [!DNL Dynamic Datastream Configuration] rules. Any event that carries a client-side override bypasses your rules silently, with no error or warning. Before enabling rules, audit your Web SDK or Mobile SDK implementation to remove `edgeConfigOverrides` from [`sendEvent`](/help/collection/js/commands/sendevent/overview.md) and [`configure`](/help/collection/js/commands/configure/overview.md) calls for events that [!DNL Dynamic Datastream Configurations] should handle.

**Monitor after deployment.** After enabling rules in production, monitor the following to confirm correct behavior:

- **Dataset ingestion volumes** in [!DNL Adobe Experience Platform] > **[!UICONTROL Datasets]**: verify that events land in the expected datasets and that volumes match your projections.
- **Streaming ingestion throughput and Total Data Volume**: verify the impact in streaming ingestion volumes proportional to the events now routed away from profile-enabled datasets. Verify Total Data Volume impact accounting for retention expiry windows.
- **[!DNL Customer Journey Analytics] workspace**: if you excluded datasets or suppressed event types, confirm those events no longer appear in your reports.

## Next steps

- See [Test and validate [!DNL Dynamic Datastream Configurations]](/help/datastreams/dynamic-configurations/testing.md) for a step-by-step testing checklist.
- Review [Dynamic datastream configuration use cases](/help/datastreams/dynamic-configurations/use-cases.md) for reference rule configurations.
- See the [FAQ](/help/datastreams/dynamic-configurations/faq.md) for answers to common questions about rule behavior and system interactions.
