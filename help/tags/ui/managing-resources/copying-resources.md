---
title: Copy Resources
description: Learn how to create a new tag resource using the settings of an existing tag resource in Adobe Experience Platform.
exl-id: 7e52ceae-97df-4c64-aba3-4f5ba6018a47
---
# Copy resources

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../term-updates.md) for a consolidated reference of the terminology changes.

Sometimes, it is convenient to make a new resource using the settings of an existing resource. In these cases, you can make a copy.

Properties, Extensions, Rules, and Data Elements can all be copied.

Copying a resource creates a duplicate of that resource in the specified destination. This is a discreet, one-time action and there is no ongoing relationship between the original resource and any copies that have been made.

## Initiate a copy

You can initiate a copy of an extension by viewing your installed extensions, selecting  the drop-down arrow on the **[!UICONTROL Configure]** button and selecting **[!UICONTROL Copy]**.

![Copying the Analytics extension](../../images/copy-initiate-extension.png)

For properties, rules, and data elements, simply select the resource you want to copy and then select **[!UICONTROL Copy]** in the actions menu.

![Copying my Analytics rule](../../images/copy-initiate-rule.png)

If you are copying a rule or a data element, in the copy dialog you may use the drop-down menu to select a Destination Property you want to copy to (default setting is the current property). Extensions cannot be copied to the same property, so those will not provide that option.

>[!NOTE]
>
>It is not possible to copy resources to another property if one property is configured for extension development and the other property is not.

Once you've configured the behavior you want, select **[!UICONTROL Copy]**.

## Copying properties

When you make a copy of a full property, there are a few things that you should understand about the process.

* The property settings will be copied exactly as they are (domains, advanced settings, etc)
* Rules, data elements, and extensions from within the origin property will be copied to the new target property.  Adapters, environments, and libraries will not be copied.
* Required extensions (Extensions required by any existing data elements or rule components) will be copied to the target property even if they have been uninstalled from the origin property.
* Copying a property can take awhile.  This happens in the background.  You can monitor the progress of the copy or you can continue on with other tasks while it happens.
* If you modify an individual resource after it has already been copied to the target property (but before the copy has been completed), the new modifications will not be copied over.

## Copying extensions

When you copy an extension to another property, there are a few things that you should understand.

* If the destination property does not have the extension installed, it will be installed using the same settings as the origin property.
* If the destination property already has the extension installed, then only the settings will be copied.
* If the destination property has a lower version of the extension installed, you'll receive a notice that you need to upgrade the extension on the destination property before you can perform the copy.  Extension developers can add settings to their extensions over time, so settings from a newer extension cannot be reliably applied to older versions.
* If the destination property has a higher version of the extension installed, then the settings are copied over, but no downgrade is performed.  The destination property still retains its current version number.

## Copying rules and data elements

All rules and data elements are provided by an extension, so when you copy across properties, Platform must account for these underlying extensions.

![Copying a Rule to my Demo Property](../../images/copy-rules-dialog1.png)

The Copy dialog box provides an explanation of exactly what will take place before you begin copying. The above dialog is for a rule, but the same applies to data elements.

1. **Extensions required by these rules are copied.** This lets you know that required extensions will go along with the rule.  These copies follow the same rules as a regular extension copy outlined above.
1. **Extension settings will NOT be copied if the extension is already installed.** This means if the required extensions already exist on the destination property, the extension remains as is.  If you wish to copy the extension settings as well, you can use the **Replace extension settings on destination property** toggle and the explanation is updated accordingly.
1. **Data Elements required by these Rules will NOT be copied.** This explanation only applies to rules.  Rules often rely on data elements to function correctly.  If you copy a rule to a new property, you'll also need to copy any required data elements as a separate action.
