---
title: Configuration settings overview
description: Learn about available options when configuring the Web SDK tag extension.
---
# Configuration settings overview

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
