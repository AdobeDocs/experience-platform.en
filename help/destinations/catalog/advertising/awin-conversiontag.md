---
keywords: Awin Advertiser Conversion Tag extension;conversion tag;Awin;awin;AWIN
title: Awin Advertiser Conversion Tag extension
description: The Awin Advertiser Conversion Tag extension is an advertising destination in Adobe Experience Platform. For more information about the extension functionality, see the extension page on Adobe Exchange.
exl-id: 99feb169-acf3-4e68-8785-3f4cf565e5a9
---
# Awin Advertiser Conversion Tag extension {#awin-conversiontag-extension}

## Overview {#overview}

The Conversion Tag is the declaration of the AWIN.Tracking.Sale JavaScript object, which is done on the confirmation page to instruct the Mastertag that a conversion has taken place. It will then subsequently perform the necessary tracking requests.

Awin Advertiser Conversion Tag is an advertising extension in Adobe Experience Platform. For more information about the extension functionality, see the extension page on [Adobe Exchange](https://exchange.adobe.com/experiencecloud.details.103240.awin-conversion-tag.html).

This destination is an [!DNL Adobe Experience Platform Launch] extension. For more information about how [!DNL Platform Launch] extensions work in Platform, see [Experience Platform Launch extensions overview](../launch-extensions/overview.md).

![Awin Advertiser Conversiontag extension in the UI](../../assets/catalog/advertising/awin-conversion-tag/catalog.png)

## Prerequisites {#prerequisites}

This extension is available in the Destinations catalog for all customers who have purchased Platform.

To use this extension, you need access to [!DNL Experience Platform Launch]. [!DNL Experience Platform Launch] is offered to Adobe Experience Cloud customers as an included, value-add feature. Contact your organization administrator to get access to [!DNL Launch] and ask them to grant you the **[!UICONTROL manage_properties]** permission so you can install extensions.

## Install extension {#install-extension}

To install the [!DNL Awin Advertiser Conversion Tag] extension:

In the [Platform interface](http://platform.adobe.com/), go to **[!UICONTROL Destinations]** > **[!UICONTROL Catalog]**.

Select the extension from the catalog or use the search bar.

Click on the destination to highlight it, then select **[!UICONTROL Configure]** in the right rail. If the **[!UICONTROL Configure]** control is greyed out, you are missing the **[!UICONTROL manage_properties]** permission. See [Prerequisites](#prerequisites).

In the **[!UICONTROL Select available Platform Launch property]** window, select the [!DNL Platform Launch] property in which you want to install the extension. You also have the option of creating a new property in [!DNL Platform Launch]. A property is a collection of rules, data elements, configured extensions, environments, and libraries. Learn about properties in the [Properties page section](../../../tags/ui/administration/companies-and-properties.md#properties-page) of the [!DNL Launch] documentation.

The workflow takes you to [!DNL Platform Launch] to complete the installation. 

For information about the extension configuration options and installation support, see the [Awin Advertiser Conversion Tag page on Adobe Exchange](https://exchange.adobe.com/experiencecloud.details.103240.awin-conversion-tag.html).

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
