---
Keywords: ECID;ecid
title: Experience Cloud ID Service extension
description: The Experience Cloud ID Service extension is a personalization destination in Adobe Experience Platform. For more information about the extension functionality, see the extension page on Adobe Exchange.
exl-id: 4cc49c14-66ec-43e0-a106-70d9c3646d87
TQID: https://experienceleague.adobe.com/hSQDOYJx-0o8iKOgBLBb96XLE0fuaTXX5bGdJdAY10o
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: ae2cba0e-54f2-464b-a3b3-ad371e8a886a
    internal-label: Catalog
  - id: b64298cc-90cc-46b7-8917-ee391f1c7516
    internal-label: Data collection UI
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: f6ff4d13-7b5c-4533-8556-95e76673d4cb
    internal-label: Properties
  - id: f9a2105e-7a47-4e85-9193-31a519a2cb83
    internal-label: Data elements
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
---
# [!DNL Experience Cloud] ID Service extension {#adobe-ecid-extension}

## Overview {#overview}

This extension implements the [!DNL Experience Cloud] ID Service, which identifies visitors across all [!DNL Experience Cloud] solutions.

[!DNL Experience Cloud] ID Service is a personalization extension in [!DNL Adobe Experience Platform]. For more information about the extension functionality, see the [Experience Cloud ID Service extension page](../../../tags/extensions/client/id-service/overview.md) in the tags documentation.

This destination is a tag extension. For more information about how tags extensions work in Experience Platform, see the [tag extensions overview](../launch-extensions/overview.md).

![Adobe ECID extension](../../assets/catalog/personalization/adobe-ecid/catalog.png)

## Prerequisites {#prerequisites}

This extension is available in the Destinations catalog for all customers who have purchased Experience Platform.

To use this extension, you need access to tags in Experience Platform. Tags are offered to [!DNL Adobe CX Enterprise] customers as an included, value-add feature. Contact your organization administrator to get access to the Data Collection UI and ask them to grant you the **[!UICONTROL manage_properties]** permission so you can install extensions.

## Install extension {#install-extension}

To install the [!DNL Experience Cloud] ID Service extension:

In the [Experience Platform interface](https://platform.adobe.com/), go to **[!UICONTROL Destinations]** > **[!UICONTROL Catalog]**.

Select the extension from the catalog or use the search bar.

Select the destination, then select **[!UICONTROL Configure]** in the right rail. If the **[!UICONTROL Configure]** control is grayed out, you are missing the **[!UICONTROL manage_properties]** permission. See [Prerequisites](#prerequisites).

Select the tag property in which you want to install the extension. You also have the option of creating a new property. A property is a collection of rules, data elements, configured extensions, environments, and libraries. Learn about properties in the [tags documentation](../../../tags/ui/administration/companies-and-properties.md).

The workflow takes you to the Data Collection UI to complete the installation. 

For information about the extension configuration options and installation support, see the [Experience Cloud ID Service extension page](../../../tags/extensions/client/id-service/overview.md) in the tags documentation.

You can also install the extension directly in the [Data Collection UI](https://experience.adobe.com/#/data-collection/). See the guide on [adding a new extension](../../../tags/ui/managing-resources/extensions/overview.md#add-a-new-extension) for more information.

## How to use the extension {#how-to-use}

Once you have installed the extension, you can start setting up rules. In the Data Collection UI, you can set up rules for your installed extensions to send event data to the extension destination only in certain situations. For more information about setting up rules for your extensions, see the overview on [rules](../../../tags/ui/managing-resources/rules.md) in the tags documentation.

## Configure, upgrade, and delete extension {#configure-upgrade-delete}

You can configure, upgrade, and delete extensions in the Data Collection UI.

>[!TIP]
>
>If the extension is already installed on one of your properties, the UI still displays **[!UICONTROL Install]** for the extension. Kick off the installation workflow as described in [Install extension](#install-extension) to configure or delete your extension.

To upgrade your extension, see the guide on the [extension upgrade process](../../../tags/ui/managing-resources/extensions/extension-upgrade.md) in the tags documentation.
