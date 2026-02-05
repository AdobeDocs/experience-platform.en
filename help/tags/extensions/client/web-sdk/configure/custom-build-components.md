---
title: Custom build components
description: Create a custom Web SDK build that disables features to lower build size.
exl-id: 853e0a6c-0953-4e08-9a7d-334aab022583
---
# Custom build components

The Web SDK library includes multiple modules for various features like personalization, identity, link tracking, and more. Depending on your use cases, you might only need specific features instead of the entire library. Disabling build components allows you to use only the modules you need, reducing the library size and improving performance.

When you disable a component, you can no longer edit the settings of that component. If you use multiple Web SDK instances, selected build components apply to all instances.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Expand the **[!UICONTROL Custom build components]** accordion at the top.

>[!WARNING]
>
>Incorrectly modifying these settings can cause undesired results, including data loss. Thoroughly test your implementation in a development environment before publishing these changes to production.

Adobe offers the ability to disable the following Web SDK build components:

| Build component | Description | Dependent features |
| --- | --- | --- |
| **[!UICONTROL Activity collector]** | Allows automatic link collection and Activity Map tracking. | |
| **[!UICONTROL Advertising]** | Enables Adobe Advertising integration with Customer Journey Analytics. | |
| **[!UICONTROL Audiences]** | Supports the integration with Adobe Audience Manager, such as ID syncs. | |
| **[!UICONTROL Consent]** | Allows the ability to use consent features. | [[!UICONTROL Set consent]](../actions/set-consent.md) action |
| **[!UICONTROL Event merge]** | Deprecated. | [[!UICONTROL Event merge ID]](../data-element-types.md) data element (deprecated)<br>[[!UICONTROL Reset event merge ID]](../actions/reset-event-merge-id.md) action (deprecated) |
| **[!UICONTROL Media Analytics bridge]** | Supports the integration with legacy Media Analytics. | [[!UICONTROL Get media analytics tracker]](../actions/get-media-analytics-tracker.md) action |
| **[!UICONTROL Personalization]** | Supports integrations with Adobe Target and Adobe Journey Optimizer. | [[!UICONTROL Apply propositions]](../actions/apply-propositions.md) action |
| **[!UICONTROL Push notifications]** | Enables web push notifications for Adobe Journey Optimizer. | [[!UICONTROL Send push subscription]](../actions/send-push-subscription.md) action |
| **[!UICONTROL Rules engine]** | Enables device decisioning with Adobe Journey Optimizer. | [[!UICONTROL Evaluate rulsets]](../actions/evaluate-rulesets.md) action<br> [[!UICONTROL Subscribe ruleset items]](../event-types.md#subscribe-ruleset-items) event |
| **[!UICONTROL Streaming media]** | Supports the integration with streaming media collection. | [[!UICONTROL Send media event]](../actions/send-media-event.md) action |
