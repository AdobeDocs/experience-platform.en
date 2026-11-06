---
title: Advanced configuration settings
description: Configure advanced settings for the Web SDK tag extension.
exl-id: d830a210-77ab-4823-b5fa-c1194a01bea3
TQID: 'https://experienceleague.adobe.com/NUVxcZpYp-e8ByeQjtJ2K-wJEJmiSigFtAMYXqXzZwQ'
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
# Advanced configuration settings {#advanced}

>[!CONTEXTUALHELP]
>id="platform_tags_websdk_advanced"
>title="Advanced settings"
>abstract="Advanced configuration settings. Adobe recommends leaving these options as-is for most implementations."

This configuration section allows you to alter advanced settings. Adobe recommends leaving these options as-is for most implementations.

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the **[!UICONTROL Advanced Settings]** section.

![Image showing the advanced settings using the Web SDK tag extension page](../assets/advanced-settings.png)

Currently, there is one option available.

## [!UICONTROL Edge base path]

Use this field to change the base path that is used to interact with the Edge Network. Adobe might request that you change this field if you participate in certain alpha or beta tests; otherwise, Adobe recommends leaving it at the default value of `ee`.

This field is the tag equivalent of [`edgeBasePath`](/help/collection/js/commands/configure/edgebasepath.md) when configuring the JavaScript library.
