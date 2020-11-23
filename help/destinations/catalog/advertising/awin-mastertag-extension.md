---
keywords: Awin Advertiser mastertag extension;mastertag tag;Awin;awin;AWIN
title: Awin Advertiser Mastertag extension
seo-title: Awin Advertiser Mastertag extension
description: The Awin Advertiser Mastertag extension is an advertising destination in Real-time Customer Data Platform. For more information about the extension functionality, see the extension page on Adobe Exchange.
seo-description: The Awin Advertiser Mastertag extension is an advertising destination in Real-time Customer Data Platform. For more information about the extension functionality, see the extension page on Adobe Exchange.
---

# [!DNL Awin Advertiser Mastertag] extension {#awin-mastertag-extension}

## Overview {#overview}

The [!DNL MasterTag] is a JavaScript library containing all functions required for Awin tracking solution and should be unconditionally appended to every page on the site, including the confirmation page, but excluding any page that displays or processes payment information.

[!DNL Awin Advertiser Mastertag] is an advertising extension in Real-time Customer Data Platform. For more information about the extension functionality, see the extension page on [Adobe Exchange](https://exchange.adobe.com/experiencecloud.details.103176.awin-advertiser-mastertag.html).

This destination is an [!DNL Experience Platform Launch] extension. For more information about how Launch extensions work in Adobe Real-time CDP, see [Experience Platform Launch extensions overview](/help/rtcdp/destinations/experience-platform-launch-extensions.md).

![Awin Advertiser Mastertag extension in the UI](/help/rtcdp/destinations/assets/awin-mastertag-extension.png)

## Prerequisites {#prerequisites}

This extension is available in the [!DNL Destinations] catalog for all customers who have purchased Adobe Real-time CDP.

To use this extension, you need access to [!DNL Adobe Experience Platform Launch]. [!DNL Platform Launch] is offered to Adobe Experience Cloud customers as an included, value-add feature. Contact your organization administrator to get access to [!DNL Platform Launch] and ask them to grant you the **[!UICONTROL manage_properties]** permission so you can install extensions.

## Install extension {#install-extension}

To install the [!DNL Awin Advertiser Mastertag] extension:

1. In the [Adobe Real-time CDP interface](http://platform.adobe.com/), go to **[!UICONTROL Destinations]** > **[!UICONTROL Catalog]**.
2. Select the extension from the catalog or use the search bar.
3. Click on the destination to highlight it, then select **[!UICONTROL Configure]** in the right rail. If the **[!UICONTROL Configure]** control is greyed out, you are missing the **[!UICONTROL manage_properties]** permission. See [Prerequisites](#prerequisites).
4. In the **[!UICONTROL Select available Platform Launch property]** window, select the [!DNL Platform Launch] property in which you want to install the extension. You also have the option of creating a new property in [!DNL Platform Launch]. A property is a collection of rules, data elements, configured extensions, environments, and libraries. Learn about properties in the [Properties page section](https://experienceleague.adobe.com/docs/launch/using/reference/admin/companies-and-properties.html#properties-page) of the [!DNL Launch] documentation.
5. The workflow takes you to [!DNL Platform Launch] to complete the installation. 

For information about the extension configuration options and installation support, see the [Awin Advertiser Mastertag page on Adobe Exchange](https://exchange.adobe.com/experiencecloud.details.103176.awin-advertiser-mastertag.html).

You can also install the extension directly in the [Adobe Experience Platform Launch interface](https://launch.adobe.com/). See [Add a new extension](https://experienceleague.adobe.com/docs/launch/using/reference/manage-resources/extensions/overview.html?lang=en#add-a-new-extension) in the [!DNL Platform Launch] documentation.


## How to use the extension {#how-to-use}

Once you have installed the extension, you can start setting up rules for it directly in [!DNL Platform Launch].

In [!DNL Platform Launch], you can set up rules for your installed extensions to send event data to the extension destination only in certain situations. For more information about setting up rules for your extensions, see [Rules documentation](https://experienceleague.adobe.com/docs/launch/using/reference/manage-resources/rules.html).

## Configure, upgrade, and delete extension {#configure-upgrade-delete}

You can configure, upgrade, and delete extensions in the [!DNL Platform Launch] interface.

>[!TIP]
>
>If the extension is already installed on one of your properties, the Adobe Real-time CDP UI still displays **[!UICONTROL Install]** for the extension. Kick off the installation workflow as described in [Install extension](#install-extension) to get to [!DNL Platform Launch] and configure or delete your extension.

To upgrade your extension, see [Extension upgrade](https://experienceleague.adobe.com/docs/launch/using/reference/manage-resources/extensions/extension-upgrade.html) in the [!DNL Platform Launch] documentation.
