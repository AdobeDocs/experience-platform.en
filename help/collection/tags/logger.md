---
title: logger
description: Output information to the browser console when debugging.
exl-id: c79d0d15-47e2-4a77-9318-1ccbe6fe5dd1
TQID: https://experienceleague.adobe.com/WvwiuKMWVNg3faKdQBB3u0JQV-39QEZLx9ROvwf1FdI
product_v2:
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: f002a92a-b99f-47a4-90c8-65e0e415bc7a
    internal-label: Pass
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
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
