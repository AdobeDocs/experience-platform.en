---
title: Build options
description: Create a custom Web SDK build that disables features to lower build size.
exl-id: 853e0a6c-0953-4e08-9a7d-334aab022583
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Build options {#build-options}

>[!CONTEXTUALHELP]
>id="platform_tags_websdk_buildoptions"
>title="Build options"
>abstract="Selectively include or exclude modules from the JavaScript library, reducing library size and improving performance."

The Web SDK library includes multiple modules for various features like personalization, identity, link tracking, and more. Depending on your use cases, you might only need specific features instead of the entire library. Disabling build components allows you to use only the modules you need, reducing the library size and improving performance.

When you disable a component, you can no longer edit the settings of that component. If you use multiple Web SDK instances, selected build components apply to all instances.

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Expand the **[!UICONTROL Build options]** accordion at the top.

>[!WARNING]
>
>Incorrectly modifying these settings can cause undesired results, including data loss. Thoroughly test your implementation in a development environment before publishing these changes to production.

Adobe offers the ability to disable the following Web SDK build components:

| Build component | Description | Dependent features |
| --- | --- | --- |
| **[!UICONTROL Activity collector]** | Allows automatic link collection and Activity Map tracking. | |
| **[!UICONTROL Advertising]** | Enables Adobe Advertising integration with Customer Journey Analytics. To turn off Advertising at runtime without removing it from your library, use the [[!UICONTROL Advertising]](advertising.md#advertising-enabled) setting instead. | |
| **[!UICONTROL Audiences]** | Supports the integration with Adobe Audience Manager, such as ID syncs. | |
| **[!UICONTROL Brand concierge]** | Enables integration with Brand concierge. | |
| **[!UICONTROL Consent]** | Allows the ability to use consent features. | [[!UICONTROL Set consent]](../actions/set-consent.md) action |
| **[!UICONTROL Event merge]** | Deprecated. | [[!UICONTROL Event merge ID]](../data-element-types.md) data element (deprecated)<br>[[!UICONTROL Reset event merge ID]](../actions/reset-event-merge-id.md) action (deprecated) |
| **[!UICONTROL Media Analytics bridge]** | Supports the integration with legacy Media Analytics. | [[!UICONTROL Get media analytics tracker]](../actions/get-media-analytics-tracker.md) action |
| **[!UICONTROL Personalization]** | Supports integrations with Adobe Target and Adobe Journey Optimizer. | [[!UICONTROL Apply propositions]](../actions/apply-propositions.md) action |
| **[!UICONTROL Push notifications]** | Enables web push notifications for Adobe Journey Optimizer. | [[!UICONTROL Send push subscription]](../actions/send-push-subscription.md) action |
| **[!UICONTROL Rules engine]** | Enables device decisioning with Adobe Journey Optimizer. | [[!UICONTROL Evaluate rulsets]](../actions/evaluate-rulesets.md) action<br> [[!UICONTROL Subscribe ruleset items]](../event-types.md#subscribe-ruleset-items) event |
| **[!UICONTROL Streaming media]** | Supports the integration with streaming media collection. | [[!UICONTROL Send media event]](../actions/send-media-event.md) action |
