---
title: Satellite Object Reference
description: Learn about the client-side _satellite object and the various functions you can perform with it in tags.
exl-id: f8b31c23-409b-471e-bbbc-b8f24d254761
---
# Satellite object reference

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../term-updates.md) for a consolidated reference of the terminology changes.

This document serves as a reference for the client-side `_satellite` object and the various functions you can perform with it.

## `track`

**Code**

```javascript
_satellite.track(identifier: string [, detail: *] )
```

**Example**

```javascript
_satellite.track('contact_submit', { name: 'John Doe' });
```

`track` fires all rules using the Direct Call event type that has been configured with the given identifier from the Core tag extension. The above example triggers all rules using a Direct Call event type where the configured identifier is `contact_submit`. An optional object containing related information is also passed. The detail object can be accessed by entering `%event.detail%` within a text field in a condition or action or `event.detail` inside the code editor in a Custom Code condition or action.

## `getVar`

**Code**

```javascript
_satellite.getVar(name: string) => *
```

**Example**

```javascript
var product = _satellite.getVar('product');
```

In the example provided, if a data element exists with a matching name, the data element's value will be returned. If no matching data element exists, it will then check to see if a custom variable with a matching name has previously been set using `_satellite.setVar()`. If a matching custom variable is found, its value will be returned.

>[!NOTE]
>
>You can use percent (`%`) syntax to reference variables for many form fields in your tag implementation, reducing the need to call `_satellite.getVar()`. For example, using `%product%` will access the value of the product data element or custom variable.

When an event triggers a rule, you can pass the rule's corresponding `event` object into `_satellite.getVar()` like so:

```javascript
// event refers to the calling rule's event
var rule = _satellite.getVar('return event rule', event);
```

## `setVar`

**Code**

```javascript
_satellite.setVar(name: string, value: *)
```

**Example**

```javascript
_satellite.setVar('product', 'Circuit Pro');
```

`setVar()` sets a custom variable with a given name and value. The value of the variable can later be accessed using `_satellite.getVar()`.

You may optionally set multiple variables at once by passing an object where the keys are variable names and the values are the respective variable values.

```javascript
_satellite.setVar({ 'product': 'Circuit Pro', 'category': 'hobby' });
```

## `getVisitorId`

**Code**

```javascript
_satellite.getVisitorId() => Object
```

**Example**

```javascript
var visitorIdInstance = _satellite.getVisitorId();
```

If the [!DNL Adobe Experience Cloud ID] extension is installed on the property, this method returns the Visitor ID instance. See the [Experience Cloud ID Service documentation](https://experienceleague.adobe.com/docs/id-service/using/home.html) for more information.

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

## `cookie` {#cookie}

`_satellite.cookie` contains functions for reading and writing cookies. It is an exposed copy of the third-party library js-cookie. For details on more advanced usage of this library, please review the [js-cookie documentation](https://www.npmjs.com/package/js-cookie#basic-usage).

### Set a cookie {#cookie-set}

To set a cookie, use `_satellite.cookie.set()`.

**Code**

```javascript
_satellite.cookie.set(name: string, value: string[, attributes: Object])
```

>[!NOTE]
>
>In the old [`setCookie`](#setCookie) method of setting cookies, the third (optional) argument to this function call was an integer that indicated the cookie's expiration time in days. In this new method, an "attributes" object is accepted as a third argument instead. In order to set an expiration for a cookie using the new method, you must provide an `expires` property in the attributes object and set it to the desired value. This is demonstrated in the example below.

**Example**

The following function call writes a cookie that expires in one week.

```javascript
_satellite.cookie.set('product', 'Circuit Pro', { expires: 7 });
```

### Retrieve a cookie {#cookie-get}

To retrieve a cookie, use `_satellite.cookie.get()`.

**Code**

```javascript
_satellite.cookie.get(name: string) => string
```

**Example**

The following function call reads a previously set cookie.

```javascript
var product = _satellite.cookie.get('product');
```

### Remove a cookie {#cookie-remove}

To remove a cookie, use `_satellite.cookie.remove()`.

**Code**

```javascript
_satellite.cookie.remove(name: string)
```

**Example**

The following function call removes a previously set cookie.

```javascript
_satellite.cookie.remove('product');
```

## `buildInfo`

**Code**

```javascript
_satellite.buildInfo
```

This object contains information about the build of the current tag runtime library. The object contains the following properties:

### `turbineVersion`

This provides the [Turbine](https://www.npmjs.com/package/@adobe/reactor-turbine) version used inside the current library.

### `turbineBuildDate`

The ISO 8601 date when the version of [Turbine](https://www.npmjs.com/package/@adobe/reactor-turbine) used inside the container was built.

### `buildDate`

The ISO 8601 date when the current library was built.

This example demonstrates the object values:

```javascript
{
  turbineVersion: "14.0.0",
  turbineBuildDate: "2016-07-01T18:10:34Z",
  buildDate: "2016-03-30T16:27:10Z"
}
```

## `environment`

This object contains information about the environment that the current tag runtime library is deployed on.

**Code**

```javascript
_satellite.environment
```

The object contains the following properties:

```javascript
{
  id: "ENbe322acb4fc64dfdb603254ffe98b5d3",
  stage: "development"
}
```

| Property | Description |
| --- | --- |
| `id` | The id of the environment. |
| `stage` | The environment for which this library was built. The possible values are `development`, `staging`, and `production`. |

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

## `setCookie` {#setCookie}

>[!IMPORTANT]
>
>This method has been deprecated. Please use [`_satellite.cookie.set()`](#cookie-set) instead.

**Code**

```javascript
_satellite.setCookie(name: string, value: string, days: number)
```

**Example**

```javascript
_satellite.setCookie('product', 'Circuit Pro', 3);
```

This sets a cookie in the user's browser. The cookie will persist for the number of days specified.

## `readCookie`

>[!IMPORTANT]
>
>This method has been deprecated. Please use [`_satellite.cookie.get()`](#cookie-get) instead.

**Code**

```javascript
_satellite.readCookie(name: string) => string
```

**Example**

```javascript
var product = _satellite.readCookie('product');
```

This reads a cookie from the user's browser.

## `removeCookie`

>[!NOTE]
>
>This method has been deprecated. Please use [`_satellite.cookie.remove()`](#cookie-remove) instead.

**Code**

```javascript
_satellite.removeCookie(name: string)
```

**Example**

```javascript
_satellite.removeCookie('product');
```

This removes a cookie from the user's browser.

## Debugging Functions

The following functions should not be accessed from the production code. They are intended only for debugging purposes and will change over time as needed.

### `container`

**Code**

```javascript
_satellite._container
```

**Example**

>[!IMPORTANT]
>
>This function should not be accessed from the production code. It is intended only for debugging purposes and will change over time as needed.

### `monitor`

**Code**

```javascript
_satellite._monitors
```

**Example**

>[!IMPORTANT]
>
>This function should not be accessed from the production code. It is intended only for debugging purposes and will change over time as needed.

**Sample**

On your web page running a tag library, add a snippet of code to your HTML. Typically, the code is inserted into the `<head>` element before the `<script>` element that loads the tag library. This allows the monitor to catch the earliest system events that occur in the tag library. For example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <script>
    window._satellite = window._satellite || {};
    window._satellite._monitors = window._satellite._monitors || [];
    window._satellite._monitors.push({
      ruleTriggered: function (event) {
        console.log(
          'rule triggered',
          event.rule
        );
      },
      ruleCompleted: function (event) {
        console.log(
          'rule completed',
          event.rule
        );
      },
      ruleConditionFailed: function (event) {
        console.log(
          'rule condition failed',
          event.rule,
          event.condition
        );
      }
    });
  </script>
  <script src="//assets.adobedtm.com/launch-EN5bfa516febde4b22b3e7c6f96f6b439f.min.js"
          async></script>
</head>
<body>
  <h1>Click me!</h1>
</body>
</html>
```

In the first script element, because the tag library has not been loaded yet, the initial `_satellite` object is created and an array on `_satellite._monitors` is initialized. The script then adds a monitor object to that array. The monitor object can specify the following methods which will later be called by the tag library:

### `ruleTriggered`

This function is called after an event triggers a rule but before the rule's conditions and actions have been processed. The event object passed to `ruleTriggered` contains information about the rule that was triggered.

### `ruleCompleted`

This function is called after a rule has been fully processed. In other words, the event has occurred, all conditions have passed, and all actions have been executed. The event object passed to `ruleCompleted` contains information about the rule that was completed.

### `ruleConditionFailed`

This function is called after a rule has been triggered and one of its conditions has failed. The event object passed to `ruleConditionFailed` contains information about the rule that was triggered and the condition that failed.

If `ruleTriggered` is called, either `ruleCompleted` or `ruleConditionFailed` will be called shortly thereafter.

>[!NOTE]
>
>A monitor doesn't have to specify all three methods (`ruleTriggered`, `ruleCompleted`, and `ruleConditionFailed`). Tags in Adobe Experience Platform work with whatever supported methods have been provided by the monitor.

### Testing the Monitor

The example above specifies all three methods in the monitor. When they're called, the monitor logs out relevant information. To test this, set up two rules in the tag library:

1. A rule that has a click event and a browser condition that passes only if the browser is [!DNL Chrome].
1. A rule that has a click event and a browser condition that passes only if the browser is [!DNL Firefox].

If you open the page in [!DNL Chrome], open the browser console, and select the page, the following appears in the console:

![](../../images/debug.png)

Additional hooks or additional information might be added to these handlers as needed.
