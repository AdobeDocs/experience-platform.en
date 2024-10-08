---
keywords: Marketo Web Personalization;marketo web personalization;Marketo Web Personalization extension;marketo web personalization extension;marketo;Marketo
title: Marketo Web Personalization extension
description: The Marketo Web Personalization extension is a personalization destination in Adobe Experience Platform. For more information about the extension functionality, see the extension page on Adobe Exchange.
exl-id: 2f194a5e-13b7-460a-a968-29131771efca
---
# [!DNL Marketo Web Personalization] extension {#marketo-web-personalization-extension}

## Overview {#overview}

This extension deploys the script for [!DNL Marketo's] Web Personalization and ContentAI applications. [!DNL Marketo] Web Personalization uniquely identifies and personalizes content to web visitor characteristics, such as firmographics for anonymous visitors and a broad array of behavioral attributes within the [!DNL Marketo] Engagement Platform for known visitors. [!DNL Marketo] ContentAI contains capabilities for AI-powered recommendations and personalization for web and email campaigns that are unique for B2B customers.

[!DNL Marketo Web Personalization] is a personalization extension in Adobe Experience Platform. For more information about web personalization and ContentAI in Marketo, read [Web Personalization Overview](https://experienceleague.adobe.com/docs/marketo/using/product-docs/web-personalization/understanding-web-personalization/web-personalization-overview.html).

This destination is a tag extension. For more information about how tag extensions work in Platform, see the [tag extensions overview](../launch-extensions/overview.md).

![Marketo Web Personalization Extension](../../assets/catalog/personalization/marketo-web-personalization/catalog.png)

## Prerequisites {#prerequisites}

This extension is available in the [!DNL Destinations] catalog for all customers who have purchased Platform.

To use this extension, you need access to tags in Adobe Experience Platform. Tags are offered to Adobe Experience Cloud customers as an included, value-add feature. Contact your organization administrator to get access to tags and ask them to grant you the **[!UICONTROL manage_properties]** permission so you can install extensions.

## Install extension {#install-extension}

To install the [!DNL Marketo Web Personalization] extension:

In the [Platform interface](https://platform.adobe.com/), go to **[!UICONTROL Destinations]** > **[!UICONTROL Catalog]**.

Select the extension from the catalog or use the search bar.

Click on the destination to highlight it, then select **[!UICONTROL Configure]** in the right rail. If the **[!UICONTROL Configure]** control is greyed out, you are missing the **[!UICONTROL manage_properties]** permission. See [Prerequisites](#prerequisites).

Select the property in which you want to install the extension. You also have the option of creating a new property. A property is a collection of rules, data elements, configured extensions, environments, and libraries. Learn about properties in the [Properties page section](../../../tags/ui/administration/companies-and-properties.md#properties-page) of in the tags documentation.

The workflow walks you through the steps to complete the installation.

You can also install the extension directly in the [Data Collection UI](https://experience.adobe.com/#/data-collection/). For more information, see the section on [adding a new extension](../../../tags/ui/managing-resources/extensions/overview.md#add-a-new-extension) in the tags documentation.

## How to use the extension {#how-to-use}

Once you have installed the extension, you can start setting up rules.

You can set up rules for your installed extensions to send event data to the extension destination only in certain situations. For more information about setting up rules for your extensions, see the [tags documentation](../../../tags/ui/managing-resources/rules.md).

## Configure, upgrade, and delete extension {#configure-upgrade-delete}

You can configure, upgrade, and delete extensions in the Data Collection UI.

>[!TIP]
>
>If the extension is already installed on one of your properties, the Platform UI still displays **[!UICONTROL Install]** for the extension. Kick off the installation workflow as described in [Install extension](#install-extension) to configure or delete your extension.

To upgrade your extension, see the guide on the [extension upgrade process](../../../tags/ui/managing-resources/extensions/extension-upgrade.md) in the tags documentation.
