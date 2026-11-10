---
title: Configuration settings overview
description: Learn about available options when configuring the Web SDK tag extension.
exl-id: 03f7bc0a-05c9-48ae-ae57-478db6d18f52
TQID: 'https://experienceleague.adobe.com/q8L7EqiSw47gxvuVoOE1MnZ1p2m1kIj6AIXOAK0c6Wk'
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
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Configuration settings overview {#config-overview}

The Adobe Experience Platform Web SDK tag extension provides several options that you can customize. These configuration settings are the tag equivalent of using the [`configure`](/help/collection/js/commands/configure/overview.md) command in the JavaScript library.

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.

The configuration page is organized into three accordions: [!UICONTROL Build options], [!UICONTROL SDK instances], and [!UICONTROL Property actions].

## Build options

The **[!UICONTROL Build options]** accordion contains library management settings and the option to disable specific Web SDK build components. Disabling unused components reduces the extension's build size and can improve performance. See [Build options](custom-build-components.md) for more information.

## SDK instances

Most implementations typically need a single SDK instance. However, if your organization requires multiple Web SDK tracking instances, you can use the **[!UICONTROL Add instance]** button. The following overarching sections are available when configuring each Web SDK tag instance:

* [**[!UICONTROL SDK instance]**](general.md): General settings for the instance. All fields in this section are required.
* [**[!UICONTROL Datastreams]**](datastreams.md): Where you want the data to go for each tag environment.
* [**[!UICONTROL Consent]**](consent.md): Default consent settings for the extension.
* [**[!UICONTROL Identity]**](identity.md): Cookie and visitor migration settings.
* [**[!UICONTROL Personalization]**](personalization.md): Customize visitor experience on an individual level.
* [**[!UICONTROL Data collection]**](data-collection.md): Include or omit what is automatically collected.
* [**[!UICONTROL Streaming media]**](streaming-media.md): Settings specific to streaming media collection.
* [**[!UICONTROL Datastream configuration overrides]**](configuration-overrides.md): Modify configuration settings when certain conditions are met.
* [**[!UICONTROL Advanced settings]**](advanced-settings.md): Specify the base path for the Edge Network.

## Property actions

The **[!UICONTROL Property actions]** accordion contains property-wide maintenance utilities that apply to the tag property as a whole rather than to individual SDK instances.

* [**[!UICONTROL Repair data element references]**](repair-data-element-references.md): Scan all Web SDK extension actions in the property and replace stale data element references where possible.
