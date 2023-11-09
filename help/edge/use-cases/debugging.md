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