---
title: Adobe Client Data Layer extension overview
description: Learn how the Adobe Client Data Layer tag extension loads the data layer, triggers rules from data layer pushes, and reads and writes data layer data.
exl-id: c4d1b4d3-4b51-4701-be2e-31b08e109bf6
TQID: 'https://experienceleague.adobe.com/Cz-9amk86ZTY-OE-9TDzjuFFiQ4s6snU3y-mDfeAX-s'
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
  - id: 1a2b3c4d-0006-4006-8006-000000000006
    internal-label: Data collection tags rules
  - id: f9a2105e-7a47-4e85-9193-31a519a2cb83
    internal-label: Data collection tags data elements
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: c4147b6e-073b-4d3c-9ab1-d60f2f4434ef
    internal-label: Behavioral data
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Adobe Client Data Layer extension overview

The Adobe Client Data Layer (ACDL) tag extension connects the [Adobe Client Data Layer](/help/collection/acdl/overview.md) to your tag property. It can load the ACDL library, trigger rules when your site pushes data or events, read the computed state in data elements, and push data or clear the history from rule actions.

>[!IMPORTANT]
>
>The extension doesn't describe your pages for you. Your site code, or a platform such as Adobe Experience Manager Core Components, still needs to push data and events to the data layer. See [Install the Adobe Client Data Layer](/help/collection/acdl/install.md).

## Capabilities {#capabilities}

The extension provides the following components:

| Component | Type | Description |
| --- | --- | --- |
| [Extension configuration](configure.md) | Configuration | Sets the data layer name and whether the extension loads the ACDL library. |
| [[!UICONTROL Data layer push]](event-types.md#data-layer-push) | Event | Triggers a rule when data or events are pushed to the data layer. |
| [[!UICONTROL Push to data layer]](action-types.md#push-to-data-layer) | Action | Pushes an object, which can include data element values, to the data layer. |
| [[!UICONTROL Clear data layer history]](action-types.md#clear-history) | Action | Removes past entries from the data layer array without changing the computed state. |
| [[!UICONTROL Data layer computed state]](data-element-types.md#computed-state) | Data element | Returns the computed state, or the value at a path in it. |
| [[!UICONTROL Data layer size]](data-element-types.md#size) | Data element | Returns the number of entries in the data layer array. |

To send data layer data to Adobe Experience Platform, combine these components with the Web SDK extension. See [Send Adobe Client Data Layer data with the Web SDK](/help/collection/acdl/web-sdk.md).

## Install the extension {#install}

1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**, and open your tag property.
1. Select **[!UICONTROL Extensions]**, then select the **[!UICONTROL Catalog]** tab.
1. Search for **[!UICONTROL Adobe Client Data Layer]**.
1. Select the extension card, then select **[!UICONTROL Install]**.
1. Review the [extension configuration](configure.md), then select **[!UICONTROL Save]**.

Add the extension to a library and build it to deploy it to your site. See [Libraries](/help/tags/ui/publishing/libraries.md).

## Requirements {#requirements}

* **Browsers**: The extension includes ACDL 3.0.1. When the extension loads the library, the [browser requirements](/help/collection/acdl/overview.md#browser-requirements) of ACDL 3.x apply.
* **Content Security Policy**: The extension loads the library as a separate file from the same host as your tag library. If your site uses a Content Security Policy, make sure that it allows that host. See [Hosted library file](configure.md#hosted-file).

## Upgrade from version 2.0.x {#upgrade}

Version 2.1 is an update of the same extension. When you [upgrade the extension](/help/tags/ui/managing-resources/extensions/extension-upgrade.md), your existing rules, data elements, and settings keep working without changes. Some components have new display names, but the rules that use them don't change.

The following table summarizes the changes:

| Area | Version 2.0.x | Version 2.1 |
| --- | --- | --- |
| ACDL library | ACDL 2.0.2, included in the tag library's code | ACDL 3.0.1, loaded as a separate file after the tag library loads. See [Load the Adobe Client Data Layer library if absent](configure.md#load-library). |
| ACDL behavior | ACDL 2.x | ACDL 3.x, which changes how arrays merge and how paths are written. See [Upgrade from 2.x to 3.x](/help/collection/acdl/install.md#upgrade). |
| Custom data layer name | The page had to create the array with the custom name before the tag library loaded. Otherwise, the extension logged a warning and didn't use the name. | The extension creates the name if it doesn't exist, and both names always refer to the same array. See [Data layer name](configure.md#data-layer-name). |
| Event | **[!UICONTROL Data Pushed]**, with one specific event name | **[!UICONTROL Data layer push]**, with one or more event names, or a data element that returns them |
| Push action | **[!UICONTROL Push to Data Layer]**, with JSON text | **[!UICONTROL Push to data layer]**, with a data element, an object builder, or JSON. Values from data elements keep their type. |
| Reset action | **[!UICONTROL Reset Data Layer]**, which didn't wait for ACDL to load | **[!UICONTROL Clear data layer history]**, which waits for ACDL to load |
| Computed state data element | An empty path returned the entire computed state | An explicit choice between the entire computed state and a specific path |

After you upgrade, check the following:

1. **Browser support**: Make sure that ACDL 3.x supports the browsers that your visitors use. If you need ACDL 2.x, load it on your pages yourself and clear the [**[!UICONTROL Load the Adobe Client Data Layer library if absent]**](configure.md#load-library) option.
1. **Rules that run when the tag library loads**: Because the extension now loads ACDL after the tag library, the **[!UICONTROL Data layer computed state]** data element can return `undefined` in rules that use events such as **[!UICONTROL Library Loaded (Page Top)]**. Trigger these rules with a [**[!UICONTROL Data layer push]**](event-types.md) event instead, which runs after ACDL is ready. This change doesn't apply if your page loads ACDL before the tag library.
1. **Custom code**: Review custom code that pushes arrays, changes a value from a string or number to an object, or uses bracket notation in paths. See [Upgrade from 2.x to 3.x](/help/collection/acdl/install.md#upgrade).

For a complete list of changes, see the [release notes](release-notes.md).

## Next steps {#next-steps}

* [Configure the extension](configure.md)
* [Trigger rules with the Data layer push event](event-types.md)
* [Send Adobe Client Data Layer data with the Web SDK](/help/collection/acdl/web-sdk.md)
* [Learn about the Adobe Client Data Layer library](/help/collection/acdl/overview.md)
