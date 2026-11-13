---
title: Troubleshoot the Adobe Client Data Layer
description: Diagnose common Adobe Client Data Layer problems, such as the library not loading, listeners that don't run, and missing data.
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
---
# Troubleshoot the Adobe Client Data Layer

Use this page to diagnose common problems with the Adobe Client Data Layer (ACDL). Most checks use your browser's developer console.

## Inspect the data layer {#inspect}

Run the following commands in the console:

| Command | Result |
| --- | --- |
| `adobeDataLayer.version` | The ACDL version, such as `"3.0.1"`. If it's `undefined`, ACDL hasn't loaded. |
| `adobeDataLayer.getState()` | The [computed state](concepts/computed-state.md). |
| `adobeDataLayer` | The [history](concepts/queue.md#history) of data and event objects, in the order that they were processed. |

To watch events as they happen, add a temporary listener:

```js
adobeDataLayer.addEventListener("adobeDataLayer:event", function(event) {
  console.log("ACDL event:", event.event, event);
}, { scope: "future" });
```

## Console messages {#console-messages}

| Message | Cause and solution |
| --- | --- |
| `The following item cannot be handled by the data layer because it does not have a valid format: ...` | Something pushed a value that isn't a plain object or a function, such as a string or an array. Find the code that pushes the value shown in the message. See [Invalid items](methods/push.md#invalid). |
| `Adobe Client Data Layer v... has already been imported/initialized on this page. You may be erroneously loading it a second time.` | The library loaded more than once. The first copy keeps working. Remove the extra copy. See [Load the library only once](install.md#load-once). |
| `TypeError: adobeDataLayer.getState is not a function` (or `addEventListener`, `removeEventListener`) | Code called an ACDL method before the library loaded. Call it from a function that you push instead. See [Call methods safely](methods/overview.md#call-safely). |
| `ReferenceError: structuredClone is not defined` | The browser is older than ACDL 3.x supports. See [Browser requirements](overview.md#browser-requirements). |
| `TypeError: Cannot read properties of null (reading 'event')` | Code pushed `null` or `undefined`. |
| `RangeError: Maximum call stack size exceeded` | A listener pushes something that triggers itself. See [Avoid endless loops](concepts/events.md#loops). |

The wording of JavaScript error messages varies slightly between browsers. For example, Safari reports `ReferenceError: Can't find variable: structuredClone`.

## ACDL doesn't load {#not-loaded}

If `adobeDataLayer.version` is `undefined`, check the following:

* **The library isn't on the page.** Check the network panel for `adobe-client-data-layer.min.js`, or for your tag library if the [tag extension](/help/tags/extensions/client/client-data-layer/configure.md) loads ACDL. Make sure that your Content Security Policy allows the script.
* **`adobeDataLayer` isn't an array.** If another script sets `window.adobeDataLayer` to something other than an array before ACDL loads, ACDL doesn't attach to it.
* **A script replaced the array.** Code such as `window.adobeDataLayer = [];` replaces the data layer with a new, empty array, which loses the ACDL methods, the computed state, and all listeners. Always use `window.adobeDataLayer = window.adobeDataLayer || [];`. See [Create the data layer array](install.md#initialize).
* **A queued function threw an error.** If a function that was pushed before ACDL loaded throws an error, the error appears in the console, and items that were queued after that function are lost. Catch errors inside the functions that you push.

## A listener doesn't run {#listener-not-called}

Check the following:

* **The event name doesn't match.** Event names are case-sensitive and must match exactly, including spaces.
* **The event was pushed before the listener was added, and the listener uses the `future` scope.** Use the default `all` scope. See [Scope](methods/addeventlistener.md#scope).
* **The history was cleared** before the listener was added, so there's nothing to replay. See [Clear the history](concepts/queue.md#clear).
* **The `path` option filters out the push.** A listener with a path runs only for pushes that include that path. See [Path](methods/addeventlistener.md#path).
* **The listener was never added.** If the listener argument isn't a function or the scope isn't valid, ACDL doesn't add the listener. Instead, keys such as `on` and `handler` appear in `adobeDataLayer.getState()`.
* **The same function is already registered** for the event. ACDL ignores the second registration, even with different options.
* **An earlier listener threw an error** for the same push, which stops the remaining listeners. Check the console for errors.
* **The push isn't an event.** An object whose `event` value is missing, empty, or not a string is treated as data. It triggers `adobeDataLayer:change` listeners, not event listeners.

## A listener runs more often than expected {#listener-called-too-often}

* **It replays past events.** With the default `all` scope, a new listener runs for matching events that are already in the history. This behavior is expected. Use the `future` scope if the earlier events were already handled.
* **It was added more than once.** Code that runs repeatedly and passes a new anonymous function each time adds a new listener each time. Use a named function. See [Use named functions](methods/addeventlistener.md#named-functions).
* **It uses a path.** A listener with a path runs for every push that includes the path, even if the value didn't change.

## Data is missing or wrong in the computed state {#state-issues}

* **The value was pushed as `event` or `eventInfo`.** These keys aren't stored in the computed state. Push data under other keys.
* **An array lost items.** Pushing an array replaces the whole array. Push the complete array. See [Arrays](concepts/computed-state.md#arrays).
* **An object didn't replace a string, number, or boolean.** Delete the key first by pushing `null`, then push the object. See [Change a value's type](concepts/computed-state.md#change-type).
* **A date or function became an empty object.** Store dates as strings or numbers. See [Value types](concepts/computed-state.md#value-types).
* **A change made to the result of `getState()` had no effect.** `getState()` returns a copy. Push the change instead.
* **`getState()` with a path returns `undefined`.** Check the spelling of every key in the path. Use dots for array indexes, such as `items.0.sku`, not brackets. See [Get a value at a path](methods/getstate.md#paths).

## Items are missing from the history {#history-issues}

* **Functions and invalid items aren't kept.** Only data objects and event objects are kept. See [After ACDL loads: a history](concepts/queue.md#history).
* **A listener threw an error.** When a listener throws an error, the item that triggered it updates the computed state but isn't added to the history.
* **One `push()` call contained several kinds of items.** Push each item in a separate call. See [Push one item per call](methods/push.md#one-item).
* **The history was cleared**, for example by the **[!UICONTROL Clear data layer history]** action in the tag extension.
