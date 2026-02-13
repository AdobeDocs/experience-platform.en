---
title: Brand Concierge configuration settings
description: Configure session persistence and stream timeouts for Brand Concierge chat.
exl-id: d5c0bdf7-563d-4e0e-9b1b-71e2fa783e29
---
# Brand Concierge configuration settings

>[!AVAILABILITY]
>
>Brand Concierge for the Web SDK is currently in **beta**. The functionality and documentation are subject to change.

The **[!UICONTROL Brand Concierge]** section lets you control how Brand Concierge chat sessions behave in the Web SDK tag extension.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the **[!UICONTROL Brand Concierge]** section.

The following options are available:

## [!UICONTROL Sticky conversation session]

A checkbox that persists Brand Concierge sessions across page loads using a session cookie. This option is disabled by default. See [`conversation`](/help/collection/js/commands/configure/conversation.md) in the JavaScript library documentation for guidance setting this value.

## [!UICONTROL Stream timeout (seconds)]

The maximum amount of time, in seconds, to wait for conversation stream chunks before triggering a timeout error. The default value is `10` seconds.
