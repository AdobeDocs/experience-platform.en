---
title: setVar()
description: Sets a value that you can retrieve later using getVar().
exl-id: b73e1f1e-4675-4086-ac9c-96be549a8588
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
