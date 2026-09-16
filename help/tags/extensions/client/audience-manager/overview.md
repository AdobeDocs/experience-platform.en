---
title: Adobe Audience Manager Extension Overview
description: Learn about the Adobe Audience Manager tag extension in Adobe Experience Platform.
exl-id: d345e145-fdb9-4ca3-88c2-9c2a247ea59a
TQID: https://experienceleague.adobe.com/4fU8whgMl6AX1tmn2rIV5YAokblPJIAOF5U8zlfwQh0
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: df80eeb1-8d72-467e-b0df-9d51c7d3a0a1
    internal-label: Audience Manager
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: df401a2a-327d-468c-a5e4-b7b7ccd071a0
    internal-label: Data integration
---
# Adobe Audience Manager extension overview

With the Audience Manager tag extension, you can integrate the DIL code used by Audience Manager with your properties in Adobe Experience Platform.

Use this reference for information about the options available when using this extension to build a rule.

>[!NOTE]
>
>This extension is not meant to be used for event forwarding of Adobe Analytics data. For event forwarding, use the [Adobe Analytics extension](../analytics/overview.md).

## Configure the Adobe Audience Manager extension

If the Adobe Audience Manager extension is not yet installed, open your property, then select **[!UICONTROL Extensions > Catalog]**, hover over the Adobe Audience Manager extension, and select **[!UICONTROL Install]**.

To configure the extension, open the [!UICONTROL Extensions] tab, hover over the extension, and then select **[!UICONTROL Configure]**.

### DIL Settings

Configure your DIL settings. The following configuration options are available:

![](../../../images/ext-aam-config.png)

#### DIL Version

Shows the Data Integration Library (DIL) version.

This setting cannot be changed.

#### Exclude Specific Paths

If the URL matches any of the excluded paths, the extension is not loaded.

Select **[!UICONTROL Add Path]** to specify an excluded URL.

Enable Regex if the URL is a regular expression.

#### Use DIL Site Catalyst Module

The [SiteCatalyst module](https://experiencecloud.adobe.com/resources/help/en_US/aam/r_dil_sc_init.html) works with DIL to send Analytics tag elements to Audience Manager.

Use the Code Editor to configure the siteCatalyst.init file.

You can also create a note containing information about this configuration.

#### Use DIL Google Analytics Module

Enable the [Google Analytics module](https://experiencecloud.adobe.com/resources/help/en_US/aam/dil-google-universal-analytics.html).

#### DIL.create Initialization Properties

Add initialization properties used by [DIL.create](https://experiencecloud.adobe.com/resources/help/en_US/aam/r_dil_create.html) and the namespace subproperty for the [visitorService object](https://experiencecloud.adobe.com/resources/help/en_US/aam/r_dil_visitor_service.html). Two sample use cases are included in the code comments, in the Code Editor.

Select **[!UICONTROL Choose an Item]** to add additional properties.

Hover over the "i" icons to learn what each property does. You can find more information for the properties in the [Audience Manager DIL documentation](https://experiencecloud.adobe.com/resources/help/en_US/aam/r_dil_create.html).

Select **[!UICONTROL Save]** when you have finished configuring the extension.

## Adobe Audience Manager extension action types

This topic describes the action types available in the Audience Manager extension.

The Adobe Audience Manager extension provides the following actions in the Then portion of a rule:

### Run Custom Code

Run the custom code configured in the code editor.

Enter the desired code in the Code Editor, then provide a name for the code. This code will become available in the Then portion of the rule builder.

![](../../../images/ext-aam-then.png)

You can also add a note with information about the configuration.
