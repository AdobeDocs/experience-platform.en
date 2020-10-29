---
keywords: facebook pixel extensions;facebook pixel extension;facebook pixel destinations;facebook pixel
title: Facebook Pixel extension
seo-title: Facebook Pixel extension
description: The Facebook Pixel extension is an advertising destination in Adobe Real-time Customer Data Platform. For more information about the extension functionality, see the extension page on Adobe Exchange.
seo-description: The Facebook Pixel extension is an advertising destination in Adobe Real-time Customer Data Platform. For more information about the extension functionality, see the extension page on Adobe Exchange.
---

# [!DNL Facebook Pixel] extension {#facebook-pixel-extension}

## Overview {#overview}

The [!DNL Facebook Pixel] is an analytics tool that allows you to measure the effectiveness of your advertising by understanding the actions people take on your website.

[!DNL Facebook Pixel] is an advertising extension in Adobe Real-time Customer Data Platform. For more information about the extension functionality, see the [Facebook Pixel website](https://developers.facebook.com/docs/facebook-pixel/).

This destination is an Adobe Experience Platform Launch extension. For more information about how Platform Launch extensions work in Adobe Real-time CDP, see [Adobe Experience Platform Launch extensions overview](/help/rtcdp/destinations/experience-platform-launch-extensions.md).

![Facebook Pixel extension](assets/facebook-pixel-extension.png)

## Prerequisites {#prerequisites}

This extension is available in the [!DNL Destinations] catalog for all customers who have purchased Adobe Real-time CDP.

To use this extension, you need access to Adobe Experience Platform Launch. Platform Launch is offered to Adobe Experience Cloud customers as an included, value-add feature. Contact your organization administrator to get access to Platform Launch and ask them to grant you the **[!UICONTROL manage_properties]** permission so you can install extensions.

## Install extension {#install-extension}

To install the [!DNL Facebook Pixel] extension:

1. In the [Adobe Real-time CDP interface](http://platform.adobe.com/), go to **[!UICONTROL Destinations]** > **[!UICONTROL Catalog]**.
2. Select the extension from the catalog or use the search bar.
3. Click on the destination to highlight it, then select **[!UICONTROL Configure]** in the right rail. If the **[!UICONTROL Configure]** control is greyed out, you are missing the **[!UICONTROL manage_properties]** permission. See [Prerequisites](#prerequisites).
4. In the **[!UICONTROL Select available Platform Launch property]** window, select the Platform Launch property in which you want to install the extension. You also have the option of creating a new property in Platform Launch. A property is a collection of rules, data elements, configured extensions, environments, and libraries. Learn about properties in the [Properties page section](https://docs.adobe.com/content/help/en/launch/using/reference/admin/companies-and-properties.html#properties-page) of the Platform Launch documentation.
5. The workflow takes you to Platform Launch to complete the installation. 

You can also install the extension directly in the [Adobe Experience Platform Launch interface](https://launch.adobe.com/). See [Add a new extension](https://docs.adobe.com/content/help/en/launch/using/reference/manage-resources/extensions/overview.html#add-a-new-extension) in the Platform Launch documentation.


## How to use the extension {#how-to-use}

Once you have installed the extension, you can start setting up rules for it directly in Platform Launch.

In Platform Launch, you can set up rules for your installed extensions to send event data to the extension destination only in certain situations. For more information about setting up rules for your extensions, see [Rules documentation](https://docs.adobe.com/help/en/launch/using/reference/manage-resources/rules.html).

## Configure, upgrade, and delete extension {#configure-upgrade-delete}

You can configure, upgrade, and delete extensions in the Platform Launch interface.

>[!TIP]
>
>If the extension is already installed on one of your properties, the Adobe Real-time CDP UI still displays **[!UICONTROL Install]** for the extension. Kick off the installation workflow as described in [Install extension](#install-extension) to get to Platform Launch and configure or delete your extension.

To upgrade your extension, see [Extension upgrade](https://docs.adobe.com/content/help/en/launch/using/reference/manage-resources/extensions/extension-upgrade.html) in the Platform Launch documentation.
