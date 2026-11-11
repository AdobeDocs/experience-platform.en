---
title: setDebug (Web SDK)
description: Enable or disable the Web SDK debug setting.
exl-id: 9faac147-b7c7-4732-8454-35102970dae0
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
autotag-review: '2026-11-05T22:08:57.077Z'
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
