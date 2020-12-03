---
keywords: Audience Manager DIL extension;destination audience manager;dil extension
title: Audience Manager DIL extension
seo-title: Audience Manager DIL extension
description: The Audience Manager DIL extension is a Data Management Platform (DMP) destination in Real-time Customer Data Platform. For more information about the extension functionality, see the extension page on Adobe Exchange.
seo-description: The Audience Manager DIL extension is a Data Management Platform (DMP) destination in Real-time Customer Data Platform. For more information about the extension functionality, see the extension page on Adobe Exchange.
---

# Audience Manager DIL extension {#aam-dil-extension}

## Overview {#overview}

This is the Adobe Audience Manager Data Integration Library extension (client-side implementation). Note: This extension is not meant to be used for server-side forwarding (SSF) of Adobe Analytics data. For SSF, use the Adobe Analytics extension. Important: Starting with version 8.0, DIL has a hard dependency on the [!DNL Experience Cloud] ID Service, version 3.3 or higher. Please implement both [!DNL Experience Cloud] ID Service and DIL for full [!DNL Audience Manager] data integration capabilities.

[!DNL Audience Manager] DIL is a Data Management Platform (DMP) extension in Real-time Customer Data Platform. For more information about the extension functionality, see the [Audience Manager extension page](https://experienceleague.adobe.com/docs/launch/using/extensions-ref/adobe-extension/adobe-audience-manager-extension.html) in Experience Platform Launch documentation.

This destination is an [!DNL Experience Platform Launch] extension. For more information about how Launch extensions work in Real-time CDP, see [Experience Platform Launch extensions overview](../launch-extensions/overview.md).

![Audience Manager DIL extension](../../assets/catalog/data-management-platform/aam-dil-extension/configure.png)

## Prerequisites {#prerequisites}

This extension is available in the [!DNL Destinations] catalog for all customers who have purchased Real-time CDP.

To use this extension, you need access to [!DNL Adobe Experience Platform Launch]. [!DNL Platform Launch] is offered to Adobe Experience Cloud customers as an included, value-add feature. Contact your organization administrator to get access to [!DNL Platform Launch] and ask them to grant you the **[!UICONTROL manage_properties]** permission so you can install extensions.

## Install extension {#install-extension}

To install the [!DNL Audience Manager] DIL extension:

In the [Real-time CDP interface](http://platform.adobe.com/), go to **[!UICONTROL Destinations]** > **[!UICONTROL Catalog]**.

Select the extension from the catalog or use the search bar.

Click on the destination to highlight it, then select **[!UICONTROL Configure]** in the right rail. If the **[!UICONTROL Configure]** control is greyed out, you are missing the **[!UICONTROL manage_properties]** permission. See [Prerequisites](#prerequisites).

In the **[!UICONTROL Select available Launch property]** window, select the [!DNL Launch] property in which you want to install the extension. You also have the option of creating a new property in Launch. A property is a collection of rules, data elements, configured extensions, environments, and libraries. Learn about properties in the [Properties page section](https://experienceleague.adobe.com/docs/launch/using/reference/admin/companies-and-properties.html#properties-page) of the [!DNL Launch] documentation.

The workflow takes you to [!DNL Launch] to complete the installation. 

For information about the extension configuration options, see the [Audience Manager extension page](https://experienceleague.adobe.com/docs/launch/using/extensions-ref/adobe-extension/adobe-audience-manager-extension.html) in [!DNL Experience Launch] documentation.

You can also install the extension directly in the [Adobe Experience Platform Launch interface](https://launch.adobe.com/). See [Add a new extension](https://experienceleague.adobe.com/docs/launch/using/reference/manage-resources/extensions/overview.html?lang=en#add-a-new-extension) in the [!DNL Platform Launch] documentation.

## How to use the extension {#how-to-use}

Once you have installed the extension, you can start setting up rules for it directly in [!DNL Platform Launch].

In [!DNL Platform Launch], you can set up rules for your installed extensions to send event data to the extension destination only in certain situations. For more information about setting up rules for your extensions, see [Rules documentation](https://experienceleague.adobe.com/docs/launch/using/reference/manage-resources/rules.html).

## Configure, upgrade, and delete extension {#configure-upgrade-delete}

You can configure, upgrade, and delete extensions in the [!DNL Platform Launch] interface.

>[!TIP]
>
>If the extension is already installed on one of your properties, the Real-time CDP UI still displays **[!UICONTROL Install]** for the extension. Kick off the installation workflow as described in [Install extension](#install-extension) to get to [!DNL Platform Launch] and configure or delete your extension.

To upgrade your extension, see [Extension upgrade](https://experienceleague.adobe.com/docs/launch/using/reference/manage-resources/extensions/extension-upgrade.html) in the [!DNL Platform Launch] documentation.



