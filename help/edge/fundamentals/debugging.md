---
title: Debugging in the Adobe Experience Platform Web SDK
description: Learn how to toggle debugging capabilities in the Experience Platform Web SDK.
keywords: debugging web sdk;debugging;configure;configure command;debug command;edgeConfigId;setDebug;debugEnabled;debug;
---

# Debugging

When debugging is enabled, the SDK outputs messages to the browser console that can be helpful in debugging your implementation and understanding how the SDK is behaving.

Debugging is disabled by default, but can be toggled on in three different ways: 

* `configure` command
* `setDebug` command
* query string parameter

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
});
```

Currently, the provided `libraryInfo` object contains the following properties:

* `version` This is the version of the loaded library. For example, if the version of the library being loaded were 1.0.0, the value would be `1.0.0`.
