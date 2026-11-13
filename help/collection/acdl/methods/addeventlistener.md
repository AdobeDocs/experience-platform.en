---
title: addEventListener
description: Run a function when an event is pushed to the Adobe Client Data Layer or when its computed state changes.
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
---
# `addEventListener()`

The `addEventListener()` method registers a function, called a listener, that the Adobe Client Data Layer (ACDL) calls when an event is triggered.

```ts
adobeDataLayer.addEventListener(
  type: string,
  listener: (event: object) => void,
  options?: { scope?: "past" | "future" | "all", path?: string }
): void
```

This method exists only after ACDL loads. Call it from a function that you push, so that it works whether or not the library has loaded yet:

```js
window.adobeDataLayer = window.adobeDataLayer || [];

function handleClick(event) {
  console.log("Clicked:", event.eventInfo.reference);
}

window.adobeDataLayer.push(function(dl) {
  dl.addEventListener("click", handleClick);
});
```

## Parameters {#parameters}

| Parameter | Required | Description |
| --- | --- | --- |
| `type` | Yes | The name of the event to listen for. Use the `event` value of the pushes that you want, such as `"click"`, or a [built-in event](#built-in-events). Event names are case-sensitive. |
| `listener` | Yes | The function to call. See [The listener function](#listener). |
| `options.scope` | No | Whether to call the listener for events that were pushed before it was added, after it was added, or both. See [Scope](#scope). The default is `"all"`. |
| `options.path` | No | A dot-separated path in the computed state, such as `"page.title"`. The listener is called only for pushes that include data at this path or delete it. See [Path](#path). |

>[!IMPORTANT]
>
>If `listener` isn't a function, or if `options.scope` isn't `"past"`, `"future"`, or `"all"`, ACDL doesn't add the listener. Instead, it treats the arguments as a data push and merges keys such as `on` and `handler` into the computed state. Check these arguments carefully.

## Built-in events {#built-in-events}

In addition to the names of your own events, you can listen for the following built-in events:

* **`adobeDataLayer:change`**: Called for every push that changes the computed state, including event pushes that carry data.
* **`adobeDataLayer:event`**: Called for every event push, whatever its name.

```js
window.adobeDataLayer.push(function(dl) {
  dl.addEventListener("adobeDataLayer:event", function(event) {
    console.log("Event pushed:", event.event);
  });
});
```

For which events each kind of push triggers, see [Built-in events](../concepts/events.md#built-in-events).

## Scope {#scope}

The `scope` option controls whether the listener is called for events that are already in the data layer [history](../concepts/queue.md#history):

| Scope | Called for events in the history | Called for future events |
| --- | --- | --- |
| `all` (default) | Yes, immediately, in order | Yes |
| `past` | Yes, immediately, in order | No |
| `future` | No | Yes |

For example, if the history contains two `page view` events and a third one is pushed after the listeners are added, each listener below is called the following number of times:

```js
window.adobeDataLayer.push(function(dl) {
  dl.addEventListener("page view", allListener);                         // 3 times
  dl.addEventListener("page view", pastListener, { scope: "past" });     // 2 times
  dl.addEventListener("page view", futureListener, { scope: "future" }); // 1 time
});
```

Use `all` in most cases. It ensures that a listener doesn't miss events because of the order in which scripts load. Use `future` when replaying past events would cause problems, such as when the listener sends data that was already sent for those events.

## Path {#path}

The `path` option limits a listener to pushes that affect one part of the computed state. Use dots to separate the keys, such as `"page.title"`.

A listener with a path is called for a push when one of the following is true:

* The pushed data includes the path, even if its value is `null`.
* The pushed data deletes an object that contains the path, such as `{ page: null }` for the path `page.title`.
* The push is an event that carries no data. The path doesn't filter these pushes.

For example, a listener for `adobeDataLayer:change` with the path `page.title` is called for the first, fourth, and fifth pushes below:

```js
window.adobeDataLayer.push(function(dl) {
  dl.addEventListener("adobeDataLayer:change", function(event) {
    console.log("Page title changed:", dl.getState("page.title"));
  }, { path: "page.title" });
});

window.adobeDataLayer.push({ page: { title: "Home" } });        // Called
window.adobeDataLayer.push({ page: { language: "en" } });       // Not called
window.adobeDataLayer.push({ user: { loggedIn: true } });       // Not called
window.adobeDataLayer.push({ page: { title: "Products" } });    // Called
window.adobeDataLayer.push({ page: null });                     // Called
```

The path filters on the pushed object, not on whether the value in the computed state actually changed. Pushing the same title twice calls the listener twice.

## The listener function {#listener}

ACDL calls the listener with one argument: a copy of the object that was pushed, including its `event`, `eventInfo`, and data keys. Inside the listener, `this` refers to the data layer.

```js
window.adobeDataLayer.push(function(dl) {
  dl.addEventListener("cart add", function(event) {
    console.log(event);
    // { event: "cart add", eventInfo: { sku: "a-100" }, cart: { itemCount: 3 } }
    console.log(dl.getState("cart.itemCount"));
    // 3
  });
});

window.adobeDataLayer.push({ event: "cart add", eventInfo: { sku: "a-100" }, cart: { itemCount: 3 } });
```

Keep the following behavior in mind:

* **The computed state is already updated** when the listener runs.
* **Listeners run synchronously** during `push()`. Keep them short.
* **Errors propagate.** If a listener throws an error, the error propagates to the code that called `push()`, the remaining listeners for that push aren't called, and the pushed item isn't added to the history. The computed state is still updated. Catch errors inside your listeners.
* **Avoid endless loops.** A listener that pushes something that triggers itself calls itself without end. See [Avoid endless loops](../concepts/events.md#loops).

## Use named functions {#named-functions}

To remove a listener later with [`removeEventListener()`](removeeventlistener.md), you need a reference to the same function. Store the function in a variable or declare it by name instead of passing an anonymous function.

ACDL ignores a call to `addEventListener()` when the same function is already registered for the same event, even if the options are different. To listen with different options, use a different function.
