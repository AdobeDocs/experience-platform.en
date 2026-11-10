---
title: debugEnabled (Web SDK)
description: Use code to enable debugging capabilities in the Web SDK.
exl-id: 89392d16-9a0d-427b-86b6-70005f63f440
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
# `debugEnabled` (Web SDK)

>[!BEGINSHADEBOX]

*This page describes `debugEnabled` in the Web SDK `configure` command. For the Server SDK, see [`debugEnabled`](/help/collection/server-js/methods/configure/debugenabled.md).*

>[!ENDSHADEBOX]

The `debugEnabled` property allows you to enable or disable debugging using Web SDK code. It is one of the available ways to enable [debug logging](/help/collection/debugging/logging.md#enable-logging). Enabling debugging within your implementation can be more convenient than other methods during website development when you always want to have debugging enabled. A configuration deployed in site code enables logging for visitors who run that code, so it is not recommended for production pages. See [Enable debug logging](/help/collection/debugging/logging.md) for other methods and local override behavior.

Set the `debugEnabled` boolean to `true` when running the `configure` command. If you omit this property when configuring the SDK, it defaults to `false`.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  debugEnabled: true
});
```
  
## Enable debugging using the Web SDK tag extension
  
The Web SDK tag extension does not provide a debug toggle in its tags configuration UI. Use [tag debug mode](/help/collection/debugging/logging.md#enable-logging) to control logging for extension-managed instances.
