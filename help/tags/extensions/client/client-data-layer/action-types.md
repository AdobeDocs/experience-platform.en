---
title: Adobe Client Data Layer extension action types
description: Learn how to push data to the Adobe Client Data Layer and clear its history with the action types in the Adobe Client Data Layer tag extension.
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
  - id: 1a2b3c4d-0006-4006-8006-000000000006
    internal-label: Data collection tags rules
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
---
# Action types

The Adobe Client Data Layer (ACDL) extension provides the following action types:

* [**[!UICONTROL Push to data layer]**](#push-to-data-layer): Pushes an object to the data layer.
* [**[!UICONTROL Clear data layer history]**](#clear-history): Removes past entries from the data layer array.

## Push to data layer {#push-to-data-layer}

The **[!UICONTROL Push to data layer]** action pushes an object to the data layer, exactly as if your site code had called [`push()`](/help/collection/acdl/methods/push.md). ACDL merges its data into the computed state and triggers matching listeners, including rules with a [**[!UICONTROL Data layer push]**](event-types.md) event. To trigger those rules, include an `event` key in the object.

If ACDL hasn't loaded yet, the object waits in the queue and is processed when ACDL loads.

Under **[!UICONTROL Source]**, choose how to provide the object:

### Choose a data element {#source-data-element}

Enter a data element token, such as `%Page data%`, or select the data element icon to choose one. Use this option when a data element, such as a **[!UICONTROL Custom Code]** data element, builds the complete object.

The data element must return a plain object. If it returns a string, the action parses the string as JSON and pushes the result. If it returns nothing, or a string that isn't valid JSON, the action pushes nothing and logs an error.

### Build an object {#source-builder}

Build the object field by field:

* Select **[!UICONTROL Add field]** to add a field to an object, or **[!UICONTROL Add item]** to add an item to an array. Select a field's name to rename it.
* Choose each field's type: **[!UICONTROL Text]**, **[!UICONTROL Data element]**, **[!UICONTROL Number]**, **[!UICONTROL Boolean]**, **[!UICONTROL Null]**, **[!UICONTROL Object]**, or **[!UICONTROL Array]**. Choose **[!UICONTROL Object]** or **[!UICONTROL Array]** to add nested data.
* A **[!UICONTROL Data element]** field receives the data element's value with its original type, such as an object or a number.
* A **[!UICONTROL Text]** field can mix text with data element tokens, such as `visiting %Page name% now`. The result is always a string.

### Edit JSON directly {#source-json}

Enter the object as JSON in **[!UICONTROL JSON content]**. The root must be an object. String values can include data element tokens:

```json
{
  "event": "virtual page view",
  "page": {
    "url": "%Page URL%",
    "previousUrl": "%Previous page URL%",
    "title": "Product: %Product name%"
  }
}
```

A value that contains only one token, such as `"%Page URL%"`, receives the data element's value with its original type. A value that mixes a token with other text receives a string.

You can switch between **[!UICONTROL Build an object]** and **[!UICONTROL Edit JSON directly]** while you edit. Your object is kept. When you save, only the source that you selected is saved.

>[!NOTE]
>
>Actions saved with version 2.0.x of the extension store the object as JSON text and replace data element tokens before the JSON is parsed. They keep working without changes. When you open and save such an action in version 2.1, the extension stores the object, and tokens keep their values' types.

## Clear data layer history {#clear-history}

The **[!UICONTROL Clear data layer history]** action removes past entries from the data layer array. Every push adds an entry, so on pages that stay open for a long time, such as single-page applications, the array keeps growing. Clear it at a natural break, such as after each virtual page view, to save memory and keep the data layer easy to inspect.

Clearing the history doesn't change the following:

* The [computed state](/help/collection/acdl/concepts/computed-state.md). The **[!UICONTROL Data layer computed state]** data element and `getState()` return the same values as before.
* Existing listeners, including rules with a **[!UICONTROL Data layer push]** event.

Under **[!UICONTROL After clearing]**, choose what remains in the array:

| Option | Array after the action | Effect on listeners added later with the All or Past time scope |
| --- | --- | --- |
| **[!UICONTROL Keep a snapshot of the current state (default)]** | One entry: a copy of the computed state at the time the action runs | `adobeDataLayer:change` listeners, such as rules that trigger on **[!UICONTROL All data changes]**, run once for the snapshot. The snapshot has no `event` key, so it doesn't replay named events. |
| **[!UICONTROL Leave the array empty]** | No entries | Nothing is replayed. |

Choose **[!UICONTROL Keep a snapshot of the current state]** if other scripts or debugging tools read the array directly, or if listeners that are added later should still receive the current data. Choose **[!UICONTROL Leave the array empty]** for the smallest memory footprint, or to make sure that listeners added later don't run for anything pushed before the action.

The snapshot is added directly to the array. It doesn't trigger existing listeners.

If ACDL hasn't loaded yet when the action runs, the action waits. It clears the history after ACDL loads and processes the items that were queued before the action.

For more information about the history, see [Queue and history](/help/collection/acdl/concepts/queue.md). For an example of clearing the history in a page view rule, see [Single-page applications](/help/collection/acdl/web-sdk.md#spa).
