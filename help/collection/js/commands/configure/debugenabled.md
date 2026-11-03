---
title: debugEnabled (Web SDK)
description: Use code to enable debugging capabilities in the Web SDK.
exl-id: 89392d16-9a0d-427b-86b6-70005f63f440
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
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
