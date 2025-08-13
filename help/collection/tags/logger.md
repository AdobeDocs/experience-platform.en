---
title: logger
description: Output information to the browser console when debugging.
---
# `logger`

The `_satellite.logger` object contains methods that allow you to output diagnostic or informational messages to the browser console when [Debugging](../use-cases/debugging.md) is enabled. If debugging is not enabled, all `logger` method calls do nothing.

These methods allow developers, technical marketers, and testers easily see what triggers within a tag property and when. Since these console messages only appear when debugging is enabled, you can leave `logger` messages in deployments to production without impacting the browser console of visitors to your site. Adobe recommends using `_satellite.logger` methods over generic JavaScript console methods; methods like `console.log()` and `console.warn()` are visible to everyone viewing their browser console on your site.

>[!TIP]
>
>Previous versions of the tag object used `_satellite.notify()`. The `notify()` function is deprecated in favor of `_satellite.logger`.

## Methods

The following methods are available under the `_satellite.logger` object:

* **`logger.debug`**: Logs a debug message to the console. Some browsers might require verbose logging to see it.
* **`logger.log`**: Logs a generic message to the console.
* **`logger.info`**: Logs an informational message to the console.
* **`logger.warn`**: Logs a warning to the console. The console entry is highlighted yellow.
* **`logger.error`**: Logs an error to the console. The console entry is highlighted red.

```js
// First enable debugging mode
_satellite.setDebug(true);

// Logs a debug message
_satellite.logger.debug('Example debug message');

// Logs a generic message
_satellite.logger.log('Example');

// Logs an informational message
_satellite.logger.info('Rule triggered');

// Logs a warning message
_satellite.logger.warn('Data element does not contain a value');

// Logs an error message
_satellite.logger.error('Required extension not found');
```

## Console output

All console output messages include the following:

* **🚀**: Helps you easily detect which console messages originate from your tag implementation.
* **\[Origin\]**: The rule, action, extension, or data element name where the log originated from. If you call a logger method outside of your implementation (such as through the browser console), `[Custom Script]` is used.
* **Message text**: The message text included when invoking the method.
