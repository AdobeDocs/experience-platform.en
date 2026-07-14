---
keywords: Audience Manager DIL extension;destination audience manager;dil extension
title: Audience Manager DIL extension
description: The Audience Manager DIL extension is a Data Management Platform (DMP) destination in Adobe Experience Platform. For more information about the extension functionality, see the extension page on Adobe Exchange.
exl-id: 7e1099de-0650-4ee2-b746-721afe194097
TQID: https://experienceleague.adobe.com/Bh74ytEjMwhanOa1hUaGZxmOx2dtZm8N9sf9Np5o69s
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: ae2cba0e-54f2-464b-a3b3-ad371e8a886a
    internal-label: Catalog
  - id: b64298cc-90cc-46b7-8917-ee391f1c7516
    internal-label: Data collection UI
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: f5efb499-54f9-432b-ac5c-599dbac103af
    internal-label: Data management
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
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: df401a2a-327d-468c-a5e4-b7b7ccd071a0
    internal-label: Data integration
  - id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
    internal-label: Data management
---
# Audience Manager DIL extension {#aam-dil-extension}

## Overview {#overview}

This is the Adobe Audience Manager Data Integration Library extension (client-side implementation). Note: This extension is not meant to be used for server-side forwarding (SSF) of [!DNL Adobe Analytics] data. For SSF, use the [!DNL Adobe Analytics] extension. Important: Starting with version 8.0, DIL has a hard dependency on the [!DNL Experience Cloud] ID Service, version 3.3 or higher. Please implement both [!DNL Experience Cloud] ID Service and DIL for full [!DNL Audience Manager] data integration capabilities.

[!DNL Audience Manager] DIL is a Data Management Platform (DMP) extension in [!DNL Adobe Experience Platform]. For more information about the extension functionality, see the [Audience Manager extension page](../../../tags/extensions/client/audience-manager/overview.md) in the tags documentation.

This destination is a tag extension. For more information about how extensions work in Experience Platform, see the [tag extensions overview](../launch-extensions/overview.md).

![Audience Manager DIL extension](../../assets/catalog/data-management-platform/aam-dil-extension/configure.png)

## Prerequisites {#prerequisites}

This extension is available in the [!DNL Destinations] catalog for all customers who have purchased Experience Platform.

To use this extension, you need access to tags in [!DNL Adobe Experience Platform]. Tags are offered to [!DNL Adobe CX Enterprise] customers as an included, value-add feature. Contact your organization administrator to get access to tags and ask them to grant you the **[!UICONTROL manage_properties]** permission so you can install extensions.

## Install extension {#install-extension}

To install the [!DNL Audience Manager] DIL extension:

In the [Experience Platform interface](https://platform.adobe.com/), go to **[!UICONTROL Destinations]** > **[!UICONTROL Catalog]**.

Select the extension from the catalog or use the search bar.

Select the destination, then select **[!UICONTROL Configure]** in the right rail. If the **[!UICONTROL Configure]** control is grayed out, you are missing the **[!UICONTROL manage_properties]** permission. See [Prerequisites](#prerequisites).

Select the property in which you want to install the extension. You also have the option of creating a new property. A property is a collection of rules, data elements, configured extensions, environments, and libraries. Learn about properties in the [tags documentation](../../../tags/ui/administration/companies-and-properties.md#properties-page).

The workflow walks you through the steps to complete the installation. 

For information about the extension configuration options, see the [Audience Manager extension page](../../../tags/extensions/client/audience-manager/overview.md) in the tags documentation.

You can also install the extension directly in the [Data Collection UI](https://experience.adobe.com/#/data-collection/). See the guide on [adding a new extension](../../../tags/ui/managing-resources/extensions/overview.md#add-a-new-extension) for more information.

## How to use the extension {#how-to-use}

Once you have installed the extension, you can start setting up rules. In the Data Collection UI, you can set up rules for your installed extensions to send event data to the extension destination only in certain situations. For more information about setting up rules for your extensions, see the overview on [rules](../../../tags/ui/managing-resources/rules.md) in the tags documentation.

## Configure, upgrade, and delete extension {#configure-upgrade-delete}

You can configure, upgrade, and delete extensions in the Data Collection UI.

>[!TIP]
>
>If the extension is already installed on one of your properties, the UI still displays **[!UICONTROL Install]** for the extension. Kick off the installation workflow as described in [Install extension](#install-extension) to configure or delete your extension.

To upgrade your extension, see the guide on the [extension upgrade process](../../../tags/ui/managing-resources/extensions/extension-upgrade.md) in the tags documentation.
