---
title: debugEnabled
description: Use code to enable debugging capabilities in the Web SDK.
exl-id: 89392d16-9a0d-427b-86b6-70005f63f440
---
# `debugEnabled`

The `debugEnabled` property allows you to enable or disable debugging using Web SDK code. It is one of the available ways to enable [debugging](/help/collection/use-cases/debugging.md). Enabling debugging within your implementation can be more convenient than other methods during website development when you always want to have debugging enabled. This method of debugging enables it for all visitors, so it is not recommended for production pages. See the [Debugging](/help/collection/use-cases/debugging.md) use case page for more ways to enable debugging.

Set the `debugEnabled` boolean to `true` when running the `configure` command. If you omit this property when configuring the SDK, it defaults to `false`.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  debugEnabled: true
});
```
  
## Enable debugging using the Web SDK tag extension
  
There are no debugging options available natively using the Web SDK tag extension. Use an [alternate debugging method](/help/collection/use-cases/debugging.md) when configuring your tag property.
