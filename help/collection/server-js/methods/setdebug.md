---
title: setDebug (Server SDK)
description: Turn debug logging on or off in the Server SDK while your server runs.
badge: Alpha
---
# `setDebug` (Server SDK)

>[!BEGINSHADEBOX]

*This page describes the Server SDK `setDebug` method. For the Web SDK, see [`setDebug`](/help/collection/js/commands/setdebug.md).*

>[!ENDSHADEBOX]

The `setDebug` method turns debug logging on or off while your server runs. When debugging is on, the SDK writes messages about its configuration, each method call, and its results to the console. See [`debugEnabled`](configure/debugenabled.md) for an example of the output.

See [Enable debug logging](/help/collection/debugging/logging.md#enable-logging) for the diagnostic workflow and production guidance.

The only option is `enabled`, a boolean that turns debugging on (`true`) or off (`false`).

```js
await alloy.setDebug({ enabled: true });
```

`setDebug` affects only the instance or [`forRequest`](forrequest.md) handle that you call it on:

* **On the top-level instance**, it changes logging for calls made directly on that instance, for the life of the process. It doesn't change logging for `forRequest` handles.
* **On a `forRequest` handle**, it changes logging for that handle only. This lets you debug a single request without turning on logging for all visitors.

To turn on debugging for every request, set [`debugEnabled`](configure/debugenabled.md) to `true` when you call `configure`.

## Result object {#result}

The `setDebug` method returns a promise that resolves with an empty object.
