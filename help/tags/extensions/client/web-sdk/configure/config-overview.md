---
title: Configuration settings overview
description: Learn about available options when configuring the Web SDK tag extension.
exl-id: 03f7bc0a-05c9-48ae-ae57-478db6d18f52
TQID: https://experienceleague.adobe.com/q8L7EqiSw47gxvuVoOE1MnZ1p2m1kIj6AIXOAK0c6Wk
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
---
# Configuration settings overview {#config-overview}

The Adobe Experience Platform Web SDK tag extension provides several options that you can customize. These configuration settings are the tag equivalent of using the [`configure`](/help/collection/js/commands/configure/overview.md) command in the JavaScript library.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.

## Custom build components

If optimizing build size is a priority for your organization, you can disable certain features that you don't use to decrease the extension's build size. See [Custom build components](custom-build-components.md) for more information.

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
