---
title: setVar()
description: Sets a value that you can retrieve later using getVar().
exl-id: b73e1f1e-4675-4086-ac9c-96be549a8588
TQID: 'https://experienceleague.adobe.com/773o0s4qnuf3LGvdovgpm8OtSQI7jtWI61vua1sBMG0'
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
subfeature_v2:
  - id: f9a2105e-7a47-4e85-9193-31a519a2cb83
    internal-label: Data collection tags data elements
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `setVar()`

The `_satellite.setVar()` method lets you set one or more custom name/value pairs that can later be referenced by [`_satellite.getVar()`](getvar.md).

```ts
// Set a single name/value pair
_satellite.setVar(name: string, value: unknown): void

// Set multiple name/value pairs at once
_satellite.setVar(vars: { [name: string]: unknown }): void;
```

>[!IMPORTANT]
>
>While the `getVar()` method can retrieve both data elements and values set by `setVar()`, these two entity types are separate. Using `setVar()` to set a value with the same name as a data element in the tags UI does not overwrite it.

## Persistence and scope

`setVar()` values live only in page memory:

* **Current page only**: Values persist until the page is unloaded. In single-page applications, they persist until a full reload or you overwrite/clear them.
* **No browser storage**: Nothing is written to cookies, local storage, or session storage.

## Referencing values set using `setVar()`

You can retrieve values in custom code using `getVar()`:

```js
// Set a custom variable using setVar()
_satellite.setVar('Ad location','Banner advertisement');

// Returns the string 'Banner advertisement'
_satellite.getVar('Ad location');
```

You can also reference these variables in the tags UI in fields that support data element notation:

```text
%Ad location%
```

>[!NOTE]
>
>If a value set using `setVar()` uses the same name as a data element and you reference that name in data element notation, the data element takes precedence.

## Examples

```js
// Set a single name/value pair
_satellite.setVar('product', 'Circuit Pro');

// Set multiple name/value pairs at once (same as calling setVar() three times)
_satellite.setVar({ 'title': 'Blinding Light', 'category': 'Game', 'genre': 'Tower defense' });

// Retrieve each value
_satellite.getVar('title'); // Blinding Light
_satellite.getVar('category'); // Game
_satellite.getVar('genre'); // Tower defense
```

>[!NOTE]
>
>Avoid using periods (`.`) when setting variable names using this method. The `getVar()` method does not recognize variables that contain periods set using `setVar()`. However, `getVar()` _does_ recognize data elements that use periods when they are defined in the tags UI.
