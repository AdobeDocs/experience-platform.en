---
title: SDK instance configuration settings
description: Configure general settings for the Web SDK instance.
---
# SDK instance configuration settings

This configuration section governs the Web SDK instance name, the IMS org it applies to, and the location that you want to send data to. By default, an instance is named `alloy`.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Locate the instance name just below the expanded [!UICONTROL SDK instances] accordion.

![Image showing the general settings of the Web SDK tag extension in the Tags UI](../assets/web-sdk-ext-general.png)

The following options are available:

## [!UICONTROL Name]

The Adobe Experience Platform Web SDK tag extension supports multiple instances on the page. The name is used to send data to multiple organizations without requiring duplicate Web SDK tag libraries. You can change the instance name to any valid JavaScript object name.

## [!UICONTROL IMS organization ID]

The ID of the organization that you would like the data sent to at Adobe. Most of the time, use the default value that is autopopulated. When you have multiple instances on the page, populate this field with the value of the second organization you want to send data to.

## [!UICONTROL Edge domain]

The domain that the extension sends and receives data from. While the default value of `edge.adobedc.net` works, Adobe recommends using a first-party domain in most cases. See the [Adobe-managed certificate program](https://experienceleague.adobe.com/en/docs/core-services/interface/data-collection/adobe-managed-cert) for instructions on how to set up a first-party domain suitable for data collection. See also [`edgeDomain`](/help/collection/js/commands/configure/edgedomain.md) in the JavaScript library documentation for guidance setting this value.
