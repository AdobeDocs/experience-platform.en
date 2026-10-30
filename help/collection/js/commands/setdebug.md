---
title: setDebug (Web SDK)
description: Enable or disable the Web SDK debug setting.
exl-id: 9faac147-b7c7-4732-8454-35102970dae0
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# `setDebug` (Web SDK)

>[!BEGINSHADEBOX]

*This page describes the Web SDK `setDebug` command. For the Server SDK, see [`setDebug`](/help/collection/server-js/methods/setdebug.md).*

>[!ENDSHADEBOX]

The `setDebug` command allows you to enter or exit debugging mode in the Web SDK. It is one of several options available for [debug logging](../../debugging/logging.md#enable-logging). Adobe advises enabling debug mode within development environments or just on your local machine within production environments.

Run the `setDebug` command when calling your configured instance of the Web SDK. The only option in the configuration object is `enabled`, which is a boolean that determines if debug mode is enabled.

```js
alloy("setDebug", {"enabled": true});
```

## Set debug using the Web SDK tag extension

Call [`_satellite.setDebug()`](/help/collection/tags/setdebug.md) within the browser console on a page where a tag library is implemented. The Web SDK tag extension does not offer the ability to toggle debug options within the tags UI itself.
