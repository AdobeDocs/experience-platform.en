---
keywords: Medallia;medallia
title: Medallia extension
description: The Medallia extension is a voice of the customer destination in Adobe Experience Platform. For more information about the extension functionality, see the extension page on Adobe Exchange.
exl-id: c28cf31a-890c-4dcd-b936-5a030dc6e83e
TQID: https://experienceleague.adobe.com/8Y3dlOssRxIFouHLnxu2AixYkrU9pduWqf8PdUNVNdI
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
---
# [!DNL Medallia] extension {#medallia-extension}

## Overview {#overview}

Deploy [!DNL Medallia] quickly and seamlessly on your web properties. The extension also detects survey events, captures customer feedback in real time through Data elements, uses it in rules to personalize your customer's experience and shares data with [!DNL Adobe Analytics].

[!DNL Medallia] is a voice of the customer extension in [!DNL Adobe Experience Platform]. For more information about the extension functionality, see the extension page on [Adobe Exchange](https://exchange.adobe.com/experiencecloud.details.103279.medallia-for-adobe-launch.html).

This destination is a tag extension. For more information about how tag extensions work in Experience Platform, see the [tag extensions overview](../launch-extensions/overview.md).

![Medallia Extension](../../assets/catalog/voice/medallia/catalog.png)

## Prerequisites {#prerequisites}

This extension is available in the [!DNL Destinations] catalog for all customers who have purchased Experience Platform.

To use this extension, you need access to tags in [!DNL Adobe Experience Platform]. Tags are offered to [!DNL Adobe CX Enterprise] customers as an included, value-add feature. Contact your organization administrator to get access to tags and ask them to grant you the **[!UICONTROL manage_properties]** permission so you can install extensions.

## Install extension {#install-extension}

To install the [!DNL Medallia] extension:

In the [Experience Platform interface](https://platform.adobe.com/), go to **[!UICONTROL Destinations]** > **[!UICONTROL Catalog]**.

Select the extension from the catalog or use the search bar.

Select the destination, then select **[!UICONTROL Configure]** in the right rail. If the **[!UICONTROL Configure]** control is grayed out, you are missing the **[!UICONTROL manage_properties]** permission. See [Prerequisites](#prerequisites).

Select the property in which you want to install the extension. You also have the option of creating a new property. A property is a collection of rules, data elements, configured extensions, environments, and libraries. Learn about properties in the [Properties page section](../../../tags/ui/administration/companies-and-properties.md#properties-page) of in the tags documentation.

The workflow walks you through the steps to complete the installation.

For information about the extension configuration options and installation support, see the [Medallia page on Adobe Exchange](https://exchange.adobe.com/experiencecloud.details.103279.medallia-for-adobe-launch.html).

You can also install the extension directly in the [Data Collection UI](https://experience.adobe.com/#/data-collection/). For more information, see the section on [adding a new extension](../../../tags/ui/managing-resources/extensions/overview.md#add-a-new-extension) in the tags documentation.

## How to use the extension {#how-to-use}

Once you have installed the extension, you can start setting up rules.

You can set up rules for your installed extensions to send event data to the extension destination only in certain situations. For more information about setting up rules for your extensions, see the [tags documentation](../../../tags/ui/managing-resources/rules.md).

## Configure, upgrade, and delete extension {#configure-upgrade-delete}

You can configure, upgrade, and delete extensions in the Data Collection UI.

>[!TIP]
>
>If the extension is already installed on one of your properties, the Experience Platform UI still displays **[!UICONTROL Install]** for the extension. Kick off the installation workflow as described in [Install extension](#install-extension) to configure or delete your extension.

To upgrade your extension, see the guide on the [extension upgrade process](../../../tags/ui/managing-resources/extensions/extension-upgrade.md) in the tags documentation.
