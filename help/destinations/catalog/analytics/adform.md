---
keywords: adform extension;adform
title: Adform Website Tracking extension
description: The Adform extension is an analytics destination in Adobe Experience Platform. For more information about the extension functionality, see the extension page on Adobe Exchange.
exl-id: f616ecbf-6833-40cd-86be-7c13afe31180
---
# Adform Website Tracking extension {#adform-extension}

## Overview {#overview}

The Adform Website Tracking extension enables advertisers to implement Adform Tracking Points effortlessly across their sites using the [!DNL Experience Platform Launch] platform.

[!DNL Adform] is an analytics extension in Adobe Experience Platform. For more information about the extension functionality, see the extension page on [Adobe Exchange](https://exchange.adobe.com/experiencecloud.details.103195.adform-website-tracking.html)

This destination is an [!DNL Adobe Experience Platform Launch] extension. For more information about how [!DNL Platform Launch] extensions work in Platform, see [Experience Platform Launch extensions overview](../launch-extensions/overview.md).

![Adform extension](../../assets/catalog/analytics/adform/catalog.png)

## Prerequisites {#prerequisites}

This extension is available in the [!DNL Destinations] catalog for all customers who have purchased Platform.

To use this extension, you need access to [!DNL Adobe Experience Platform Launch]. [!DNL Platform Launch] is offered to Adobe Experience Cloud customers as an included, value-add feature. Contact your organization administrator to get access to [!DNL Platform Launch] and ask them to grant you the **[!UICONTROL manage_properties]** permission so you can install extensions.

## Install extension {#install-extension}

To install the Adform extension:

In the [Platform interface](http://platform.adobe.com/), go to **[!UICONTROL Destinations]** > **[!UICONTROL Catalog]**.

Select the extension from the catalog or use the search bar.

Click on the destination to highlight it, then select **[!UICONTROL Configure]** in the right rail. If the **[!UICONTROL Configure]** control is greyed out, you are missing the **[!UICONTROL manage_properties]** permission. See [Prerequisites](#prerequisites).

In the **[!UICONTROL Select available Launch property]** window, select the [!DNL Launch] property in which you want to install the extension. You also have the option of creating a new property in Launch. A property is a collection of rules, data elements, configured extensions, environments, and libraries. Learn about properties in the [Properties page section](../../../tags/ui/administration/companies-and-properties.md#properties-page) of the [!DNL Launch] documentation.

The workflow takes you to [!DNL Launch] to complete the installation. 

For information about the extension configuration options and installation support, see the [Adform page on Adobe Exchange](https://exchange.adobe.com/experiencecloud.details.103195.adform-website-tracking.html).

You can also install the extension directly in the [Adobe Experience Platform Launch interface](https://launch.adobe.com/). See [Add a new extension](../../../tags/ui/managing-resources/extensions/overview.md#add-a-new-extension) in the [!DNL Platform Launch] documentation.

## How to use the extension {#how-to-use}

Once you have installed the extension, you can start setting up rules for it directly in [!DNL Platform Launch].

In [!DNL Platform Launch], you can set up rules for your installed extensions to send event data to the extension destination only in certain situations. For more information about setting up rules for your extensions, see [Rules documentation](../../../tags/ui/managing-resources/rules.md).

## Configure, upgrade, and delete extension {#configure-upgrade-delete}

You can configure, upgrade, and delete extensions in the [!DNL Platform Launch] interface.

>[!TIP]
>
>If the extension is already installed on one of your properties, the Platform UI still displays **[!UICONTROL Install]** for the extension. Kick off the installation workflow as described in [Install extension](#install-extension) to get to [!DNL Platform Launch] and configure or delete your extension.

To upgrade your extension, see [Extension upgrade](../../../tags/ui/managing-resources/extensions/extension-upgrade.md) in the [!DNL Platform Launch] documentation.
