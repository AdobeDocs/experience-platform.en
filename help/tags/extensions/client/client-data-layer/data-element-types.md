---
title: Adobe Client Data Layer extension data element types
description: Learn how to read the Adobe Client Data Layer computed state and history size with the data element types in the Adobe Client Data Layer tag extension.
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
  - id: f9a2105e-7a47-4e85-9193-31a519a2cb83
    internal-label: Data collection tags data elements
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b23e006f-0a29-4f1d-8fd0-77aa56f3d12b
    internal-label: Data modeling
---
# Data element types

The Adobe Client Data Layer (ACDL) extension provides the following data element types:

* [**[!UICONTROL Data layer computed state]**](#computed-state): Returns the computed state, or the value at a path in it.
* [**[!UICONTROL Data layer size]**](#size): Returns the number of entries in the data layer array.

## Data layer computed state {#computed-state}

The **[!UICONTROL Data layer computed state]** data element returns a copy of the ACDL [computed state](/help/collection/acdl/concepts/computed-state.md), which merges all the data that was pushed to the data layer. Under **[!UICONTROL Return value]**, choose one of the following options:

* **[!UICONTROL Entire computed state]** (default): Returns the complete computed state as an object.
* **[!UICONTROL Specific path]**: Returns the value at the **[!UICONTROL Path]** that you enter. Separate the keys in the path with dots, such as `page.title`. For array items, use the index as a key, such as `cart.items.0.sku`. If the path doesn't exist, the data element returns `undefined`.

For example, after the following pushes, a **[!UICONTROL Specific path]** of `page.title` returns `"Products"`:

```js
adobeDataLayer.push({ page: { title: "Home", language: "en" } });
adobeDataLayer.push({ page: { title: "Products" } });
```

The data element calls [`getState()`](/help/collection/acdl/methods/getstate.md), so the same path rules apply.

>[!IMPORTANT]
>
>The data element returns `undefined` until ACDL loads. If the extension [loads ACDL](configure.md#load-library), the library loads after the tag library, so rules that run when the tag library loads, such as rules with the **[!UICONTROL Library Loaded (Page Top)]** event, can run first. Trigger rules that depend on data layer values with a [**[!UICONTROL Data layer push]**](event-types.md) event, which runs after ACDL is ready.

In rules triggered by a **[!UICONTROL Data layer push]** event, you can also read the pushed object with tokens such as `%event.message.page.title%`. See [Use the pushed data in rules](event-types.md#event-object).

To send the computed state to Adobe and map it to XDM in your datastream, use this data element in the **[!UICONTROL Data]** field of the Web SDK **[!UICONTROL Send event]** action. See [Send the data layer for mapping in the datastream](/help/collection/acdl/web-sdk.md#data).

## Data layer size {#size}

The **[!UICONTROL Data layer size]** data element returns the number of entries in the data layer array, which is the length of its [history](/help/collection/acdl/concepts/queue.md#history). It has no settings.

For example, after the following pushes, the data element returns `2`:

```js
adobeDataLayer.push({ event: "myEvent" });
adobeDataLayer.push({ data: { foo: "bar" } });
```

The following items affect the size:

* Data objects and event objects each add one entry. Functions and invalid items don't add entries.
* The [**[!UICONTROL Clear data layer history]**](action-types.md#clear-history) action sets the size to `1` when it keeps a snapshot, or to `0` when it leaves the array empty.
* Before ACDL loads, the size counts every item in the queue, including functions.
