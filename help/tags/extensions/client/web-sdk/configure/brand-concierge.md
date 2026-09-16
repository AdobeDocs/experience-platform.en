---
title: Brand Concierge configuration settings
description: Configure desired settings for Brand Concierge chat.
exl-id: d5c0bdf7-563d-4e0e-9b1b-71e2fa783e29
---
# Brand Concierge configuration settings {#brand-concierge}

>[!AVAILABILITY]
>
>Brand Concierge for the Web SDK is currently in **beta**. The functionality and documentation are subject to change.

>[!CONTEXTUALHELP]
>id="platform_tags_websdk_brandconcierge"
>title="Brand Concierge"
>abstract="Configuration settings when using Brand Concierge on your Property."

The **[!UICONTROL Brand Concierge]** section lets you control how Brand Concierge chat sessions behave in the Web SDK tag extension.

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the **[!UICONTROL Brand Concierge]** section.

The following options are available. For equivalent JavaScript library settings, see [`conversation`](/help/collection/js/commands/configure/conversation.md) in the Web SDK documentation.

## [!UICONTROL Region]

A text field that routes Brand Concierge conversation requests to a specific data center instead of the nearest available one. Most organizations do not need to set this value. Only set it if conversation events do not arrive at the desired data center.

This setting only affects conversation events; standard send event commands are unaffected. Some possible example values include `va7`, `or2`, or `irl1`.

## [!UICONTROL Sticky conversation session]

A checkbox that persists Brand Concierge sessions across page loads using a session cookie. This option is disabled by default.

## [!UICONTROL Stream timeout (seconds)]

The maximum amount of time, in seconds, to wait for conversation stream chunks before triggering a timeout error. The default value is `10` seconds.

## [!UICONTROL Collect sources]

A checkbox that collects sources if a user navigated to the page from a link within a Brand Concierge conversation. Unchecked by default. If enabled, the library checks for the query string parameter `adobe_brand_concierge_source` and populates its value into `xdm.channel.referringSource`.
