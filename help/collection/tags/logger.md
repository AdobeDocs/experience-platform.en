---
title: logger
description: Output information to the browser console when debugging.
exl-id: c79d0d15-47e2-4a77-9318-1ccbe6fe5dd1
---
# `logger`

The `_satellite.logger` object contains methods that allow you to output diagnostic or informational messages to the browser console when [Debugging](../use-cases/debugging.md) is enabled. If debugging is not enabled, all `logger` method calls do nothing.

These methods allow developers, technical marketers, and testers to easily see what triggers within a tag property and when. Since these console messages only appear when debugging is enabled, you can leave `logger` messages in deployments to production without impacting the browser console of visitors to your site.

```ts
readonly _satellite.logger: {
  debug(...args: unknown[]): void;
  log(...args: unknown[]): void;
  info(...args: unknown[]): void;
  warn(...args: unknown[]): void;
  error(...args: unknown[]): void;
}
```

>[!TIP]
>
>Previous versions of the tag object used `_satellite.notify()`. The `notify()` function is deprecated in favor of `_satellite.logger`.

## Methods

All `_satellite.logger` methods pass through to their corresponding JavaScript `console.*` method when debugging is enabled. Most `console` arguments or objects are supported using `_satellite.logger`:

| Method | Forwards to | Recommended uses |
|---|---|---|
| `_satellite.logger.debug()` | `console.debug()` | Verbose diagnostics; some browsers might require verbose logging to see it. |
| `_satellite.logger.log()` | `console.log()` | General messages. |
| `_satellite.logger.info()` | `console.info()` | High-level informational events. |
| `_satellite.logger.warn()` | `console.warn()` | Recoverable issues. The console entry is highlighted yellow. |
| `_satellite.logger.error()` | `console.error()` | Failures. The console entry is highlighted red. Adobe recommends using `error` objects for stacks. |

```js
// First enable debugging mode
_satellite.setDebug(true);

// Logs a debug message
_satellite.logger.debug('Verbose diagnostic event');

// Logs a generic message
_satellite.logger.log('Example');

// Logs an informational message with mixed arguments
_satellite.logger.info('Rule triggered', 42, { ruleId: 'R123' }, ['a', 'b']);

// Logs a warning message
_satellite.logger.warn('Data element does not contain a value');

// Logs an error message with stack
_satellite.logger.error(new Error('Required extension not found'));
```

## Console output

The library prepends the following in all console output messages:

* **🚀**: Helps you easily detect which console messages originate from your tag implementation.
* **\[Origin\]**: The rule, action, extension, or data element name where the log originated from. If you call a logger method outside of your implementation (such as through the browser console), `[Custom Script]` is used.
* **Message output**: The message output included when invoking the method.

>[!NOTE]
>
>Browser formatting tokens like `%c`, `%s`, and `%d` are not applied due to the logger applying the `🚀 [Origin]` prefix.
