---
title: getVar()
description: Returns a value of a data element or a value set using setVar().
exl-id: 8a496964-284a-4719-ac68-10368568db4f
---
# `getVar()`

The `_satellite.getVar()` method returns the current value of a [Data element](/help/tags/ui/managing-resources/data-elements.md) or a value set using [`_satellite.setVar()`](setvar.md). If a data element and a `setVar()` value share the same name, the data element takes precedence. If you call a string identifier that does not yet exist, the method returns `undefined`. Evaluation is synchronous.

```js
_satellite.getVar(name: string, event?: unknown) => unknown
```

The return value and type depend on the data element type that you reference. For example, if you call `getVar()` that retrieves a string variable, the type returned is `string`. If you call `getVar()` that returns a Web SDK variable data element, then the type returned is an `object` containing all properties set in that variable.

```js
// Retrieves the value in the `Example` data element
_satellite.getVar('Example');

// Execute custom logic depending on the numeric value in the `cartTotal` data element
const cartValue = Number(_satellite.getVar('cartTotal'));
if (cartValue > 100) {
  _satellite.logger.info('Purchase larger than $100 detected');
}

// Some data elements like Web SDK variables support deeply nested properties
const pageName = _satellite.getVar('Data layer')?.web?.webPageDetails?.name;
if (!pageName) {
  _satellite.logger.warn('Page name is not set');
}

// Custom code data elements support a second argument
// Works in a Launch custom code block where `event` is provided by the rule engine.
const rule = _satellite.getVar('Return event rule', event);
```

## Available fields

The `getVar()` method supports two arguments. Most use cases do not include the second optional argument.

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| **`name`** | `string` | Yes | The data element name that you want to retrieve. Data element names are case-sensitive. |
| **`event`** | `object` | No | Event context from the triggering rule. Only used in advanced use cases by data elements using [custom code](/help/tags/ui/managing-resources/data-elements.md#custom-code) or custom extensions. When a rule is triggered by an event (such as a click, form submission, or custom JavaScript dispatch), the associated event object is included here. Data elements can use this information to return contextual values, such as the clicked element's details or properties from a custom event. |
