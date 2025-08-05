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

## `notify`

>[!NOTE]
>
>This method has been deprecated. Please use `_satellite.logger.log()` instead.

**Code**

```javascript
_satellite.notify(message: string[, level: number])
```

**Example**

```javascript
_satellite.notify('Hello world!');
```

`notify` logs a message to the browser console. The message will only be displayed if tag debugging is enabled by the user (by calling `_satellite.setDebug(true)` or using an appropriate browser extension).

An optional logging level can be passed which will affect the styling and filtering of the message being logged. Supported levels are as follows:

3 - Informational messages.

4 - Warning messages.

5 - Error messages.

If you do not provide a logging level or pass any other level value, the message will be logged as a regular message.