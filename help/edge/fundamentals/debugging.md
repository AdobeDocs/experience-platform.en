---
title: Debugging in the Adobe Experience Platform Web SDK
description: Learn how to toggle debugging capabilities in the Experience Platform Web SDK.
keywords: debugging web sdk;debugging;configure;configure command;debug command;edgeConfigId;setDebug;debugEnabled;debug;
exl-id: 4e893af8-a48e-48dc-9737-4c61b3355f03
---
# Debugging

When debugging is enabled, the SDK outputs messages to the browser console that can be helpful in debugging your implementation and understanding how the SDK is behaving.

Debugging is disabled by default, but can be toggled on in four different ways:

* `configure` command
* `setDebug` command
* query string parameter
* Toggling on Enable Debugging in Adobe Experience Platform Debugger. Adobe Experience Platform is a powerful tool that examines your webpages and helps you debug implementation issues with your Experience Cloud products. Adobe Experience Platform Debugger is available as both a [Chrome](https://chrome.google.com/webstore/detail/adobe-experience-platform/bfnnokhpnncpkdmbokanobigaccjkpob) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/adobe-experience-platform-dbg/) extension. Debugging can be enabled from the configuration tab of the AEP Web SDK section. 

![](../assets/enable-debugging.png)

## Toggling debugging with the Configure command

When configuring the SDK using the `configure` command, enable debugging by setting the `debugEnabled` option to `true`.

```javascript
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId":"ADB3LETTERSANDNUMBERS@AdobeOrg",
  "debugEnabled": true
});
```

>[!TIP]
>
>This enables debugging for all users of the webpage rather than only your personal browser.

## Toggling debugging with the Debug command

Toggle debugging with a separate `debug` command as follows:

```javascript
alloy("setDebug", {
  "enabled": true
});
```

If you prefer not to change code on your webpage or don't want logging messages to be produced for all users of your website, this is particularly useful because you can run the `debug` command within your browser's JavaScript console at any time.

## Toggling debugging with a query string parameter

Toggle debugging by setting an `alloy_debug` query string parameter to `true` or `false` as follows:

```HTTP
http://example.com/?alloy_debug=true
```

Similar to the `debug` command, if you prefer not to change code on your webpage or don't want logging messages to be produced for all users of your website, this is particularly useful because you can set the query string parameter when loading the webpage within your browser.

## Priority and duration

When debugging is set through the `debug` command or query string parameter, it overrides any `debug` option set in the `configure` command. In these two cases, debugging also remains toggled on for the duration of the session. In other words, if you enable debugging using the debug command or query string parameter, it stays enabled until one of the following:

* The end of your session
* You run the `debug` command
* You set the query string parameter again

## Retrieving library information

It's often helpful to access some of the details behind the library you have loaded onto your website. To do this, execute the `getLibraryInfo` command as follows:

```js
alloy("getLibraryInfo").then(function(result) {
  console.log(result.libraryInfo.version);
  console.log(result.libraryInfo.commands);
  console.log(result.libraryInfo.configs);
});
```

Currently, the provided `libraryInfo` object contains the following properties:

* `version`: This is the version of the loaded library. For example, if the version of the library being loaded were 1.0.0, the value would be `1.0.0`. When the library is run inside the tag extension (named "AEP Web SDK"), the version is the library version and the tag extension version joined with a "+" sign. For example, if the version of the library were 1.0.0, and the version of the tag extension were 1.2.0, the value would be `1.0.0+1.2.0`.
* `commands`: These are all of the available commands supported by the loaded library. 
* `configs`: These are all of the current configs in the loaded library.
