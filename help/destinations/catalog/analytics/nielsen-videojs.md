---
keywords: Nielsen VideoJS Player Handler;nielsen video js player;nielsen videojs player;Nielsen;nielsen;Nielsen videojs player;Nielsen Digital SDK;nielsen digital sdk
title: Nielsen VideoJS Player Handler extension
description: The Nielsen VideoJS Player Handler extension is an analytics destination in Adobe Experience Platform. For more information about the extension functionality, see the extension page on Adobe Exchange.
exl-id: d640bf40-c6af-4aff-8303-933fe71f4a7e
TQID: https://experienceleague.adobe.com/ZI8-VgGoxNxIY7RK1-G9aQYnWXRP3nAf8WSRZPZtLnQ
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: abc02dd6-664f-446a-9aaa-675bc0f2fe4a
    internal-label: Sources
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
  - id: c2be0313-b3ae-45e0-b454-d20bf54b23f2
    internal-label: Measurement
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# [!DNL Nielsen VideoJS Player Handler] extension {#nielsen-vjs-extension}

## Overview {#overview}

[!DNL Nielsen Digital SDK] tag extension offers audience measurement via the following digital measurement products:

DCR: A measurement solution that provides daily measurement of non-linear digital content, including content with ads will enable a comprehensive view of digital content audience consumption across Desktop, Mobile, Tablet and Connected Devices.

DTVR: This accounts for linear TV viewing occurring on desktop and mobile devices for participating programming sources. This is the first solution to receive accreditation from the MRC for its contribution to TV audience measurement for programming viewed on computers and mobile devices.

[!DNL Nielsen VideoJS Player Handler] is an analytics extension in [!DNL Adobe Experience Platform]. For more information about the extension functionality, see the extension page on [Adobe Exchange](https://exchange.adobe.com/experiencecloud.details.101361.nielsen-digital-sdk-extension.html).

This destination is a tag extension. For more information about how tag extensions work in Experience Platform, see the [tag extensions overview](../launch-extensions/overview.md).

![Nielsen VideoJS Player Handler Extension](../../assets/catalog/analytics/nielsen-videojs/catalog.png)

## Prerequisites {#prerequisites}

This extension is available in the [!DNL Destinations] catalog for all customers who have purchased Experience Platform.

To use this extension, you need access to tags in [!DNL Adobe Experience Platform]. Tags are offered to [!DNL Adobe CX Enterprise] customers as an included, value-add feature. Contact your organization administrator to get access to tags and ask them to grant you the **[!UICONTROL manage_properties]** permission so you can install extensions.

## Install extension {#install-extension}

To install the [!DNL Nielsen VideoJS Player Handler] extension:

In the [Experience Platform interface](https://platform.adobe.com/), go to **[!UICONTROL Destinations]** > **[!UICONTROL Catalog]**.

Select the extension from the catalog or use the search bar.

Select the destination, then select **[!UICONTROL Configure]** in the right rail. If the **[!UICONTROL Configure]** control is grayed out, you are missing the **[!UICONTROL manage_properties]** permission. See [Prerequisites](#prerequisites).

Select the property in which you want to install the extension. You also have the option of creating a new property. A property is a collection of rules, data elements, configured extensions, environments, and libraries. Learn about properties in the [Properties page section](../../../tags/ui/administration/companies-and-properties.md#properties-page) of in the tags documentation.

The workflow walks you through the steps to complete the installation. 

For information about the extension configuration options and installation support, see the [Nielsen Digital SDK page on Adobe Exchange](https://exchange.adobe.com/experiencecloud.details.101361.nielsen-digital-sdk-extension.html).

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
