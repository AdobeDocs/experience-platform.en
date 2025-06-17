---
title: Custom build components
description: Create a custom Web SDK build that disables features to lower build size.
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
| **[!UICONTROL Audiences]** | Supports the integration with Adobe Audience Manager, such as ID syncs. | |
| **[!UICONTROL Consent]** | Allows the ability to use consent features. | [[!UICONTROL Set consent]](../action-types.md#set-consent) action |
| **[!UICONTROL Event merge]** | Deprecated. | [[!UICONTROL Event merge ID]](../action-types.md#data) data element<br>[!UICONTROL Reset event merge ID] action |
| **[!UICONTROL Media Analytics bridge]** | Supports the integration with legacy Media Analytics. | [[!UICONTROL Get media analytics tracker]](../action-types.md#get-media-analytics-tracker) action |
| **[!UICONTROL Personalization]** | Supports integrations with Adobe Target and Adobe Journey Optimizer. | [[!UICONTROL Apply propositions]](../action-types.md#apply-propositions) | 
| **[!UICONTROL Rules engine]** | Enables device decisioning with Adobe Journey Optimizer. | [[!UICONTROL Evaluate rulsets]](../action-types.md#evaluate-rulesets) action<br> [[!UICONTROL Subscribe ruleset items]](../event-types.md#subscribe-ruleset-items) event |
| **[!UICONTROL Streaming media]** | Supports the integration with streaming media collection. | [[!UICONTROL Send media event]](../action-types.md#send-media-event) action |
