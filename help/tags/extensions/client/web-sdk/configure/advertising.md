---
title: Adobe Advertising configuration settings
description: Enable or disable Demand-side Platform functionality.
---
# Adobe Advertising configuration settings

>[!AVAILABILITY]
>
>Adobe Advertising for the Web SDK is currently in **beta**. The functionality and documentation are subject to change.

The **[!UICONTROL Adobe Advertising]** section lets you enable or disable Demand-side Platform (DSP) functionality if used in your implementation. You only need to set this field if your implementation uses a DSP.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the **[!UICONTROL Adobe Advertising]** section.

Currently, there is one option available.

## [!UICONTROL Adobe Advertising DSP]

A drop-down menu that enables or disables DSP functionality for Adobe Advertising.

* **[!UICONTROL Enabled]**: Enables view-through tracking.
* **[!UICONTROL Disabled]**: Disables view-through tracking.

When enabled, the following settings are available:

* **[!UICONTROL Advertisers]**: The advertisers for which to enable view-through tracking.
* **[!UICONTROL ID5 partner ID]**: Optional. Your organization's ID5 partner ID. This setting allows the Web SDK to collect ID5 universal IDs.
* **[!UICONTROL RampID JavaScript path]**: Optional. The path to your organization's [!DNL LiveRamp RampID] JavaScript code (`ats.js`).  This setting allows the Web SDK to collect [!DNL RampID] universal IDs.
