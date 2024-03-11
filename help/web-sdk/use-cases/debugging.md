---
title: Debugging methods
description: Learn how to toggle debugging capabilities in the Web SDK.
keywords: debugging web sdk;debugging;configure;configure command;debug command;edgeConfigId;setDebug;debugEnabled;debug;
exl-id: 4e893af8-a48e-48dc-9737-4c61b3355f03
---
# Debugging methods

When debugging is enabled, the Web SDK outputs messages to the browser console that can be helpful in debugging your implementation. Debugging is valuable when you want to understand how the SDK behaves according to the rules and data elements that you have established.

Debugging is disabled by default, but can be toggled on in four different ways. You can use any combination of these methods to enable or disable debugging most convenient to your development workflow.

## Use `debugEnabled` in the `configure` command

Set the `debugEnabled` boolean to true when configuring the extension. This option is typically used for development environments, as it enables debugging for everyone visiting any page on your site:

```js
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
  "debugEnabled": true
});
```

See [`debugEnabled`](../commands/configure/debugenabled.md) for more information.

## Use the `setDebug` command

Similarly to the above boolean, this command enables debugging across all visitors to the page.

```js
alloy("setDebug", {"enabled": true});
```

See the [`setDebug`](../commands/setdebug.md) command for more information.

## Set a query string parameter

You can enable debugging by adding the query string `?alloy_debug=true` to the end of any URL. For example:

`http://example.com/?alloy_debug=true`

This method only applies to your local machine, allowing you to debug production websites without enabling debugging for everyone. Enabling debugging in this manner remains on for the rest of your browsing session or until you disable it.

## Use the Adobe Experience Platform Debugger

The Adobe Experience Platform Debugger is a powerful tool that examines your web pages and helps you debug your implementation of Experience Cloud products. You can enable debugging from the configuration tab of the AEP Web SDK section.

![Enable debugger](../assets/enable-debugging.png)

See [Adobe Experience Platform Debugger overview](/help/debugger/home.md) for more information.
