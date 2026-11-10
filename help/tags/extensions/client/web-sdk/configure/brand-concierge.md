---
title: Brand Concierge configuration settings
description: Configure desired settings for Brand Concierge chat.
exl-id: d5c0bdf7-563d-4e0e-9b1b-71e2fa783e29
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: b6ee73fe-bdc6-47d9-99a2-80194514dd40
    internal-label: Brand Concierge
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: bbbea26f-9621-49eb-9ab8-e06fb3bbce8c
    internal-label: Artificial intelligence
autotag-review: '2026-11-05T22:08:57.077Z'
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
