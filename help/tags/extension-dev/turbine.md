---
title: Turbine Free Variable
description: Learn about the turbine object, a free variable which provides information and utilities specific to the Adobe Experience Platform tag runtime.
exl-id: 1664ab2e-8704-4a56-8b6b-acb71534084e
---
# Turbine free variable

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../term-updates.md) for a consolidated reference of the terminology changes.

The `turbine` object is a "free variable" within the scope of your extension's library modules. It provides information and utilities specific to the Adobe Experience Platform tag runtime and is always available to library modules without using `require()`.

## `buildInfo`

```js
console.log(turbine.buildInfo.turbineBuildDate);
```

`turbine.buildInfo` is an object containing build information about the current tag runtime library.

```js
{
    turbineVersion: "14.0.0",
    turbineBuildDate: "2016-07-01T18:10:34Z",
    buildDate: "2016-03-30T16:27:10Z"
}
```

| Property | Description |
| --- | --- |
| `turbineVersion` | The [Turbine](https://www.npmjs.com/package/@adobe/reactor-turbine) version used inside the current library. |
|`turbineBuildDate` | The ISO 8601 date when the version of [Turbine](https://www.npmjs.com/package/@adobe/reactor-turbine) used inside the container was built. |
|`buildDate` | The ISO 8601 date when the current library was built. |

{style="table-layout:auto"}

## `environment`

```js
console.log(turbine.environment.stage);
```

`turbine.environment` is an object containing information about the environment that the library is deployed on.

```js
{
    id: "ENbe322acb4fc64dfdb603254ffe98b5d3",
    stage: "development"
}
```

| Property | Description |
| --- | --- |
|`id` | The ID of the environment. |
|`stage` | The environment for which this library was built. Possible values are `development`, `staging`, and `production`. |

{style="table-layout:auto"}

## `debugEnabled`

A boolean value indicating whether tag debugging is currently enabled.

If you are simply attempting to log messages, it's unlikely you will need to use this. Instead, always log messages using `turbine.logger` to ensure your messages are only printed to the console when tag debugging is enabled.

## `getDataElementValue`

```js
console.log(turbine.getDataElementValue(dataElementName));
```

Returns the value of a data element.

## `getExtensionSettings` {#get-extension-settings}

```js
var extensionSettings = turbine.getExtensionSettings();
```

Returns the settings object that was last saved from the [extension configuration](./configuration.md) view.

Please note that values within the returned settings objects may be coming from data elements. Because of this, calling `getExtensionSettings()` at different times may yield different results if the values of the data elements have changed. To get the most up-to-date values, please wait as long as possible before calling `getExtensionSettings()`.

## `getHostedLibFileUrl` {#get-hosted-lib-file}

```js
var loadScript = require('@adobe/reactor-load-script');
loadScript(turbine.getHostedLibFileUrl('AppMeasurement.js')).then(function() {
  // Do something ...
})
```

The [hostedLibFiles](./manifest.md) property can be defined inside the extension manifest in order to host various files along with the tag runtime library. This module returns the URL where the given library file is hosted.

## `getSharedModule` {#shared}

```js
var mcidInstance = turbine.getSharedModule('adobe-mcid', 'mcid-instance');
```

Retrieves a module that has been shared from another extension. If no matching module is found, `undefined` will be returned. See [Implementing Shared Modules](./web/shared.md) for more information regarding shared modules.

## `logger`

```js
turbine.logger.error('Error!');
```

The logging utility is used to log messages to the console. Messages will only show in the console if debugging is turned on by the user. The recommended way to turn on debugging is to use the [Adobe Experience Platform Debugger](https://chrome.google.com/webstore/detail/adobe-experience-platform/bfnnokhpnncpkdmbokanobigaccjkpob). As an alternative, the user can run the following command `_satellite.setDebug(true)` inside the browser developer console. The logger has the following methods:

* `logger.log(message: string)`: Logs a message to the console.
* `logger.info(message: string)`: Logs an informational message to the console.
* `logger.warn(message: string)`: Logs a warning message to the console.
* `logger.error(message: string)`: Logs an error message to the console.
* `logger.debug(message: string)`: Logs a debug message to the console. (Visible only when `verbose` logging is enabled within your browser console.)
* `logger.deprecation(message: string)`: Logs a warning message to the console whether or not tag debugging is enabled by the user.

## `onDebugChanged`

By passing a callback function into `turbine.onDebugChanged`, tags will call your callback whenever debugging is toggled. Tags will pass a boolean to the callback function which will be true if debugging was enabled or false if debugging was disabled.

If you are simply attempting to log messages, it's unlikely you will need to use this. Instead, always log messages using `turbine.logger` and tags will ensure your messages are only printed to the console when tag debugging is enabled. 

## `propertySettings` {#property-settings}

```js
console.log(turbine.propertySettings.domains);
```

An object containing the following settings which are defined by the user for the property of the current tag runtime library:

* `propertySettings.domains: Array<String>`

  An array of domains that the property covers.

* `propertySettings.undefinedVarsReturnEmpty: boolean`

  Extension developers should not be concerned with this setting.
