---
title: Context in Edge Extension Modules
description: Learn about the context object and the role it plays in interacting with library modules in tag extensions of edge properties.
exl-id: 04e4e369-687e-4b46-9d24-18a97a218555
---
# Context in edge extension modules

All library modules in edge extensions are provided a `context` object when they are executed. This document covers the properties provided by the `context` object and the role they play in library modules.

## Adobe Request Context (arc)

The `arc` property is an object that provides information about the event triggering the rule. The sections below cover the various sub-properties contained in this object.

### [!DNL event]

The `event` object represents the event that triggered the rule and contains the following values:

```js
logger.log(context.arc.event);
```

| Property | Description |
| --- | --- |
| `xdm` | The XDM object of the event. |
| `data` | The custom data layer. |

### [!DNL request]

Not to be confused with a request from the client device, `request` is a slightly modified object that comes from Adobe Experience Platform Edge Network.

```js
logger.log(context.arc.request)
```

The `request` object has two top-level properties: `body` and `head`. The `body` property contains Experience Data Model (XDM) information and can be inspected in Adobe Experience Platform Debugger when you navigate to **[!UICONTROL Launch]** and select the **[!UICONTROL Edge Trace]** tab.

### [!DNL ruleStash] {#rulestash}

`ruleStash` is an object that will collect every result from action modules.

```js
logger.log(context.arc.ruleStash);
```

Each extension has its own namespace. For example, if your extension has the name `send-beacon`, all results from `send-beacon` actions will be stored on the `ruleStash['send-beacon']` namespace.

The namespace is unique for each extension, and has a value of `undefined` at the beginning.

The namespace is overridden with the returned result from each action. For example, consider a `transform` extension containing two actions: `generate-fullname` and `generate-fulladdress`. These two actions are then added to a rule.

If the result of the `generate-fullname` action is `Firstname Lastname`, then the rule stash will appear as follows after the action is completed:

```js
{
  transform: 'Firstname Lastname'
}
```

If the result of the `generate-address` action is `3900 Adobe Way`, then the rule stash will appear as follows after the action is completed:

```js
{
  transform: '3900 Adobe Way'
}
```

Notice that "Firstname Lastname" no longer exists within the rule stash, because the `generate-address` action overrode it with a new value.

If you want `ruleStash` to store the results from both actions inside the `transform` namespace, you can write your action module similar to the following example:

```js
module.exports = (context) => {
  let transformRuleStash = context.arc.ruleStash.transform;

  if (!transformRuleStash) {
    transformRuleStash = {};
  }

  transformRuleStash.fullName = 'Firstname Lastname';

  return transformRuleStash;
}
```

The first time this action is executed, `ruleStash` starts as `undefined` and is therefore initialized as an empty object. The next time when the action is executed, it receives `ruleStash` that was returned when the action was previously called. Using an object as `ruleStash` allows you to add new data without losing data previously set by other actions from our extension.

>[!NOTE]
>
>Be careful to always return the full extension rule stash when using this strategy. If you instead only return a value, it will overwrite any other properties you may have set.

## Utilities

The `utils` property represents an object that provides utilities specific to the tag runtime.

### [!DNL logger]

The `logger` utility allows you to log messages that will be shown during debugging sessions when using [Adobe Experience Platform Debugger](https://chrome.google.com/webstore/detail/adobe-experience-platform/bfnnokhpnncpkdmbokanobigaccjkpob).

```js
context.utils.logger.error('Error!');
```

The logger has the following methods, where `message` is the message you want to log:

| Method | Description |
| --- | --- |
| `log(message)` | Logs a message to the console. |
| `info(message)` | Logs an informational message to the console. |
| `warn(message)` | Logs a warning message to the console. |
| `error(message)` | Logs an error message to the console. |
| `debug(message)` | Logs a debug message to the console. This is visible only when `verbose` logging is enabled within your browser console. |

### [!DNL fetch]

This utility implements the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). You can use the function to make requests to third-party endpoints.

```js
context.utils.fetch('http://example.com/movies.json')
  .then(response => response.json())
```

### [!DNL getBuildInfo]

This utility returns an object containing information about the build of the current tag runtime library. 

```js
logger.log(context.utils.getBuildInfo().turbineBuildDate);
```

The object contains the following values:

| Property | Description |
| --- | --- |
| `turbineVersion` | The [Turbine](https://www.npmjs.com/package/@adobe/reactor-turbine-edge) version used inside the current library. |
| `turbineBuildDate` | The ISO 8601 date when the version of [Turbine](https://www.npmjs.com/package/@adobe/reactor-turbine-edge) used inside the container was built. |
| `buildDate` | The ISO 8601 date when the current library was built. |
| `environment` | The environment for which this library was built. Possible values include `development`, `staging`, and `production.` |

The following is an example `getBuildInfo` object to demonstrate the values it returns:

```js
{
  turbineVersion: "1.0.0",
  turbineBuildDate: "2016-07-01T18:10:34Z",
  buildDate: "2016-03-30T16:27:10Z",
  environment: "development"
}
```

### [!DNL getExtensionSettings]

This utility returns the `settings` object that was last saved from the [extension configuration](../configuration.md) view.

```js
logger.log(context.utils.getExtensionSettings());
```

### [!DNL getSettings]

This utility returns the `settings` object that was last saved from the corresponding library module view.

```js
logger.log(context.utils.getSettings());
```

### [!DNL getRule]

This utility returns an object containing information about the rule that is triggering the module.

```js
logger.log(context.utils.getRule());
```

The object will contain the following values:

| Property | Description |
| --- | --- |
| `id` | The rule ID. |
| `name` | The rule name. |
