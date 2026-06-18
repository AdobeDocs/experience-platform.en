---
title: Dynamic Datastream Configuration Prerequisites
description: "Learn how to prepare your datastream, schemas, datasets, and event inventory before configuring [!DNL Dynamic Datastream Configuration] rules to prevent setup errors."
---

# Prerequisites and planning checklist

Complete the following steps before you configure [!DNL Dynamic Datastream Configuration] rules. These are the most common sources of misconfigured rules and unexpected routing behavior.

## Datastream setup {#datastream-setup}

Your datastream must exist and have all required services enabled before you add rules. See [Configure a datastream](/help/datastreams/configure.md) and [Add services to a datastream](/help/datastreams/configure.md#add-services) for setup instructions.

Depending on which services you plan to use:

- **[!DNL Adobe Analytics]:** Configure at least one report suite. You can add more report suites under **[!UICONTROL Advanced Options]** as [report suite overrides](/help/datastreams/configure.md#analytics).
- **[!DNL Adobe Target]:** Configure at least one property token. You can add more property tokens under **[!UICONTROL Advanced Options]** as [property token overrides](/help/datastreams/configure.md#target).
- **[!DNL Adobe Audience Manager]:** No additional configuration required. See [Audience Manager settings](/help/datastreams/configure.md#audience-manager).
- **[!DNL Event Forwarding]:** Configure a property. See [Event Forwarding settings](/help/datastreams/configure.md#event-forwarding).
- **[!DNL Adobe Experience Platform]:**
  - [Configure a primary event dataset](/help/datastreams/configure.md#aep). This dataset receives all events that match no rule (the default fallback).
  - Configure any additional secondary event datasets your rules will route events to. If these datasets do not yet exist, complete the [Schema and dataset preparation](#schema-dataset) step before configuring rules.
  - Enable the [!DNL Adobe Experience Platform] Edge services you need, including **[!UICONTROL Decision Management]**, **[!UICONTROL Edge Segmentation]**, **[!UICONTROL Personalization Destinations]**, or **[!UICONTROL Adobe Journey Optimizer]**. See [Experience Platform settings](/help/datastreams/configure.md#aep).

## Schema and dataset preparation {#schema-dataset}

Prepare your schemas and datasets before configuring rules. Datasets must exist before you can reference them in routing configurations.

- Set the XDM schema for [!DNL Dynamic Datastream Configuration] conditions in the **[!UICONTROL Mapping Schema]** section of the datastream (see [Create a datastream](/help/datastreams/configure.md#create)).
- Verify that your XDM schema includes all fields you plan to use as rule conditions, for example `eventType`, custom data layer fields, or geographic fields.
- If you plan to use bot filtering rules, add the **[!UICONTROL Bot Detection Information]** field group to your XDM schema and enable [bot detection](/help/datastreams/bot-detection.md) on the datastream. Allow up to 15 minutes for bot detection rules to propagate before testing.
- [Create all target datasets](/help/catalog/datasets/user-guide.md#schema) before configuring rules, using the correct schema and naming convention. After you validate your rules, you can enable profile, configure data retention, and enable [!DNL Customer Journey Analytics] connections.

For details on configuring dataset retention windows, see the [Experience Event Dataset Retention guide](/help/catalog/datasets/experience-event-dataset-retention-ttl-guide.md).

>[!TIP]
>
>Create datasets without profile enablement first. Validate that events route to the correct datasets using [Adobe Experience Platform Assurance](/help/assurance/home.md), then enable profile and data retention settings. This prevents unnecessary events from being ingested in the [!DNL Real-Time Customer Profile] in the first place.

## Event inventory {#event-inventory}

Catalog every event type your implementation sends and classify each one before you write a single rule.

1. **List all event types.** Common examples include `web.webpagedetails.pageViews`, `commerce.purchases`, `commerce.productViews`, `commerce.productListAdds`, `decisioning.propositionFetch`, and `personalization.request`.

2. **Classify each event** using the [event value taxonomy](/help/datastreams/dynamic-configurations/overview.md#event-taxonomy):
   - **Expendable:** no analytical or actionable value (bot traffic, system events)
   - **Analytical:** needed for analytics reporting only, not for profile enrichment or segmentation
   - **Actionable:** needed for profile enrichment, segmentation, and activation; also available for analytics reporting

3. **Identify audience-dependent events.** Review your audience definitions and note which event types those audiences reference. Routing those events away from a profile-enabled dataset prevents the [!DNL Real-Time Customer Profile] from ingesting them, which causes audiences to stop evaluating correctly.

4. **Identify reliable condition fields.** Choose fields that are consistently populated and have a small, predictable set of values. `eventType` is the recommended primary condition field for most rules. Other useful fields include `botDetection.score`, `web.webPageDetails.URL`, and custom data layer fields mapped through [Data Prep for Data Collection](/help/datastreams/data-prep.md).

## Remove conflicting client-side overrides {#remove-overrides}

[Datastream configuration overrides](/help/datastreams/overrides.md) take precedence over [!DNL Dynamic Datastream Configuration] rules. Any event that carries a client-side override bypasses your rules silently, with no error or warning.

Before enabling rules:

- Verify that your Web SDK or Mobile SDK implementation does not send [`edgeConfigOverrides`](/help/collection/js/commands/sendevent/edgeconfigoverrides.md) in [`sendEvent`](/help/collection/js/commands/sendevent/overview.md) or [`configure`](/help/collection/js/commands/configure/overview.md) calls for events that your rules should handle.
- For each event type you move to [!DNL Dynamic Datastream Configuration] rules, remove the corresponding `edgeConfigOverrides` from your SDK code before you enable the rule.

## Next steps

After completing this checklist, you are ready to design your rules:

- Read [Dynamic datastream configuration patterns](/help/datastreams/dynamic-configurations/configuration-patterns.md) to choose the right dataset strategy.
- See [Dynamic datastream configuration use cases](/help/datastreams/dynamic-configurations/use-cases.md) for step-by-step rule configurations.
- Follow the UI instructions in [Create Dynamic Datastream Configurations](/help/datastreams/dynamic-configurations/configure.md) to build and save your rules.
