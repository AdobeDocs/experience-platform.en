---
title: Adobe Advertising configuration settings
description: Turn Adobe Advertising on or off and configure Demand-side Platform functionality.
exl-id: 594fd75d-bb13-4146-9105-1398e24c4c16
TQID: 'https://experienceleague.adobe.com/LgIPs8Gke0ApLPRaiegkbd-sFJUnHLQsqHqn0GfajNI'
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e0e9cace-366e-4b9c-b3b9-31ec233dfc89
    internal-label: Advertising DSP
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: ee30758d-9ffe-4cd7-8f26-0d4394f041f6
    internal-label: Demand Side Platform
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
---
# Adobe Advertising configuration settings {#advertising}

>[!CONTEXTUALHELP]
>id="platform_tags_websdk_advertising"
>title="Adobe Advertising"
>abstract="Configure settings for Adobe Advertising integrations. Note that no advertising configuration is necessary to enable click-through measurement. Search, Social, and Commerce clients have no further action required; however, Demand-side Platform (DSP) users need to configure advertisers in this section to measure view-through conversions."

The **[!UICONTROL Adobe Advertising]** section lets you turn Adobe Advertising on or off and enable or disable Demand-side Platform (DSP) functionality if used in your implementation.

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the **[!UICONTROL Adobe Advertising]** section.

The following options are available. For equivalent JavaScript library settings, see [`advertising`](/help/collection/js/commands/configure/advertising.md) in the Web SDK documentation.

## [!UICONTROL Advertising] {#advertising-enabled}

A combo box that turns Adobe Advertising on or off at runtime. This setting is available in the Web SDK tag extension version 2.39.0 or later.

* **[!UICONTROL Enabled]**: The default value. Advertising features run as configured.
* **[!UICONTROL Disabled]**: Turns off Advertising at runtime. Web SDK sends no click-through or view-through conversions, adds no advertising IDs to events, makes no Surfer ID, ID5, or RampID calls, and does not read or write advertising cookies. Existing advertising cookies are left unchanged. The other settings in this section are hidden, but their values are kept and are restored when you select **[!UICONTROL Enabled]** again.
* **Data element**: Select the data element icon to choose a [data element](/help/tags/ui/managing-resources/data-elements.md) that returns `true` to turn on Advertising or `false` to turn it off. The data element must return a boolean value. Other values, such as the strings `"true"` or `"false"`, cause the Web SDK configuration to fail.

Turning off Advertising with this setting keeps the Advertising code in your library. To remove the Advertising code from the library entirely, deselect **[!UICONTROL Advertising]** under [[!UICONTROL Build options]](custom-build-components.md). Use this setting instead of the build option when you want to turn off Advertising without rebuilding your library, or when you want to turn it on or off conditionally using a data element.

## [!UICONTROL Adobe Advertising DSP]

You only need to set this field if your implementation uses a DSP. This field is hidden when **[!UICONTROL Advertising]** is set to **[!UICONTROL Disabled]**.

A drop-down menu that enables or disables DSP functionality for Adobe Advertising.

* **[!UICONTROL Enabled]**: Enables view-through tracking.
* **[!UICONTROL Disabled]**: Disables view-through tracking.

When enabled, the following settings are available:

* **[!UICONTROL Advertisers]**: The advertisers for which to enable view-through tracking.
* **[!UICONTROL ID5 partner ID]**: Optional. Your organization's ID5 partner ID. This setting allows the Web SDK to collect ID5 universal IDs.
* **[!UICONTROL RampID JavaScript path]**: Optional. The path to your organization's [!DNL LiveRamp RampID] JavaScript code (`ats.js`).  This setting allows the Web SDK to collect [!DNL RampID] universal IDs.
