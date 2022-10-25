---
title: Common Analytics Extension Overview
description: Learn about the Common Analytics tag extension in Adobe Experience Platform.
exl-id: 9eeb4589-df90-4356-b927-b2c29c32370b
---
# Common Analytics Plugins extension overview

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../../term-updates.md) for a consolidated reference of the terminology changes.

Use this reference for information about configuring the Common Analytics Plugins extension, and the options available when using this extension to augment the [!DNL Adobe Analytics] Extension.

## Configure the Common Analytics Plugins extension

This section provides a reference for the options available when configuring the Common Analytics Plugins extension.

>[!IMPORTANT]
>
>The Common Analytics Plugins extension augments the [!DNL Adobe Analytics] extension. You must have the [!DNL Adobe Analytics] extension installed on your property for it to work. Additionally, you must make the tracker globally accessible in the [!DNL Adobe Analytics] extension.

No additional configuration is required at the extension level.

## Adding Plugins to the [!DNL Adobe Analytics] extension

In order to use the plugins provided in this extension, you must first initialize the plugins you intend to use in their own rule.

1. Create a new rule.
1. Add the Core - Library Loaded (Page Top) event.
1. Use either of the initialization methods below.

## Common Analytics Plugins extension action types

This section describes the action types available in the Common Analytics Plugins extension.

The Common Analytics Plugins extension provides the following actions:

* [Initialize](#initialize)
* [Initialize Plugin](#initialize-plugin)

### Initialize

>[!IMPORTANT]
>
>While this action is easier to implement, Adobe Consulting does not recommend that you use this action as it increases the weight of the plugin.

In this action, you are able to select each plugin you want to include in your implementation and save the changes. Select as many or as few as you intend to use during the implementation.

### Initialize Plugin

These actions initialize the specific plugin you intend to use individually. To initialize all of the plugins you intend to use in your property, simply add the corresponding action to your rule and save the rule. While there is slightly more effort involved in configuring the extension this way, it provides greater code efficiency. As such, Adobe recommends this approach.

## Common Analytics Plugins extension data elements

The following data elements are available in the Common Analytics Plugins extension, which leverage tag capabilities to set up and configure their corresponding plugins in Analytics:

* `getGeoCoordinates`
* `getNewRepeat`
* `getPageName`
* `getResponsiveLayout`
* `getTimeParting`
* `getTimeSinceLastVisit`
* `getVisitDuration`
* `getVisitNum`

>[!NOTE]
>
>For more information on the above plugins, please consult the [Analytics documentation](https://experienceleague.adobe.com/docs/analytics/implementation/vars/plugins/impl-plugins.html).
