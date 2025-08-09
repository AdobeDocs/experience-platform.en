## `logger`

**Code**

```javascript
_satellite.logger.log(message: string)
```

```javascript
_satellite.logger.info(message: string)
```

```javascript
_satellite.logger.warn(message: string)
```

```javascript
_satellite.logger.error(message: string)
```

**Example**

```javascript
_satellite.logger.error('No product ID found.');
```

The `logger` object allows for a message to be logged to the browser console. The message will only be displayed if tag debugging is enabled by the user (by calling `_satellite.setDebug(true)` or using an appropriate browser extension).

### Logging Deprecation Warnings

```javascript
_satellite.logger.deprecation(message: string)
```

**Example**

```javascript
_satellite.logger.deprecation('This method is no longer supported, please use [new example] instead.');
```

This logs a warning to the browser console. The message is displayed whether or not tag debugging is enabled by the user.

>[!TIP]
>
>Previous versions of the tag object used `_satellite.notify()`. The `notify()` function is deprecated in favor of `_satellite.logger`.
