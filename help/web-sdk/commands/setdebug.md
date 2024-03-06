---
title: setDebug
description: Enable or disable the Web SDK debug setting.
---
# `setDebug`

The `setDebug` command allows you to enter or exit debugging mode in the Web SDK. It is one of several options available for [debugging](../use-cases/debugging.md). Adobe advises enabling debug mode within development environments or just on your local machine within production environments.

## Set debug using the Web SDK tag extension

The tag extension does not offer the ability to toggle debug options within the UI. You can either use the custom code editor using JavaScript syntax, or enter the JavaScript code within the browser console while on your site. 

## Set debug using the Web SDK JavaScript library

Run the `setDebug` command when calling your configured instance of the Web SDK. The only option in the configuration object is `enabled`, which is a boolean that determines if debug mode is enabled.

```js
alloy("setDebug", {"enabled": true});
```
