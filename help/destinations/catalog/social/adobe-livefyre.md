---
keywords: livefyre;livefyre extension
title: Adobe Livefyre extension
description: The Adobe Livefyre extension is a social destination in Adobe Experience Platform. For more information about the extension functionality, see the extension page on Adobe Exchange.
exl-id: a134c144-e7b8-4d48-8c90-5999e5ceb8a0
---
# Adobe Livefyre extension {#adobe-livefyre-extension}

## Overview {#overview}

Adobe Livefyre enables you to discover, organize, and publish a constant flow of user generated content onto your website to create authentic and highly personalized experiences.

Adobe Livefyre is a social extension in Adobe Experience Platform. For more information about the Adobe Livefyre, read the [Livefyre implementation guide](https://experienceleague.adobe.com/docs/livefyre/implementation/home.html).

This destination is a tag extension. For more information about how tags extensions work in Platform, see the [tag extensions overview](../launch-extensions/overview.md).

![Adobe Livefyre extension](../../assets/catalog/social/adobe-livefyre/catalog.png)

## Prerequisites {#prerequisites}

This extension is available in the [!DNL Destinations] catalog for all customers who have purchased Platform.

To use this extension, you need access to tags in Adobe Experience Platform. Tags are offered to Adobe Experience Cloud customers as an included, value-add feature. Contact your organization administrator to get access to tags and ask them to grant you the **[!UICONTROL manage_properties]** permission so you can install extensions.

## Install extension {#install-extension}

To install the Adobe Livefyre extension:

In the [Platform interface](https://platform.adobe.com/), go to **[!UICONTROL Destinations]** > **[!UICONTROL Catalog]**.

Select the extension from the catalog or use the search bar.

Click on the destination to highlight it, then select **[!UICONTROL Configure]** in the right rail. If the **[!UICONTROL Configure]** control is greyed out, you are missing the **[!UICONTROL manage_properties]** permission. See [Prerequisites](#prerequisites).

Select the tag property in which you want to install the extension. You also have the option of creating a new property. A property is a collection of rules, data elements, configured extensions, environments, and libraries. Learn about properties in the [tags documentation](../../../tags/ui/administration/companies-and-properties.md).

The workflow takes you to the Data Collection UI to complete the installation. 

You can also install the extension directly in the [Data Collection UI](https://experience.adobe.com/#/data-collection/). See the guide on [adding a new extension](../../../tags/ui/managing-resources/extensions/overview.md#add-a-new-extension) for more information.

## How to use the extension {#how-to-use}

Once you have installed the extension, you can start setting up rules. In the Data Collection UI, you can set up rules for your installed extensions to send event data to the extension destination only in certain situations. For more information about setting up rules for your extensions, see the overview on [rules](../../../tags/ui/managing-resources/rules.md) in the tags documentation.

## Configure, upgrade, and delete extension {#configure-upgrade-delete}

You can configure, upgrade, and delete extensions in the Data Collection UI.

>[!TIP]
>
>If the extension is already installed on one of your properties, the UI still displays **[!UICONTROL Install]** for the extension. Kick off the installation workflow as described in [Install extension](#install-extension) to configure or delete your extension.

To upgrade your extension, see the guide on the [extension upgrade process](../../../tags/ui/managing-resources/extensions/extension-upgrade.md) in the tags documentation.
