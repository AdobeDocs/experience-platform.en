---
title: getVar()
description: Returns a value from the desired data element.
---
# `getVar()`

The `_satellite.getVar()` method retrieves the value of a [Data element](/help/tags/ui/managing-resources/data-elements.md) by name. It retrieves values from data elements defined in the tag UI or from variables previously set using [`_satellite.setVar()`](setvar.md).

If a tag UI data element and a variable set by `setVar()` use the same string identifier, the method returns the tag UI data element. If you call a string identifier that does not yet exist, the method returns `undefined`.

The return value and type depend on the data element type that you reference. For example, if you call `getVar()` that retrieves a string variable, the type returned is `string`. If you call `getVar()` that returns a Web SDK variable data element, then the type returned is an `object` containing all properties set in that variable.

```js
// Retrieves the value in the `Example` data element
_satellite.getVar('Example');

// Execute custom logic depending on the numeric value in the `cartTotal` data element
var cartValue = _satellite.getVar('cartTotal');
if (cartValue > 100) {
  console.log('Purchase larger than $100 detected');
}

// Some data elements like Web SDK variables support deeply nested properties
var pageName = _satellite.getVar('Data layer')?.web?.webPageDetails?.name;
if (!pageName) {
  console.log('Page name is not set');
}

// Custom code data elements support a second argument
// The event refers to the calling rule's event, and only works in a custom code block where `event` is provided by the rule engine.
var rule = _satellite.getVar('Return event rule', event);
```

## Available fields

The `getVar()` method supports two arguments. Most standard data elements do not use the second argument; only custom code data elements and certain extension-based types can use it.

* **`name`**: The data element name that you want to retrieve. Data element names are case-sensitive.
* **`event`**: An optional field that enables advanced dynamic behavior, mostly with [custom code data elements](/help/tags/ui/managing-resources/data-elements.md#custom-code). When a rule is triggered by an event (such as a click, form submission, or custom JavaScript dispatch), the associated event object is included here. Data elements can use this information to return contextual values, such as the clicked element's details or properties from a custom event.
