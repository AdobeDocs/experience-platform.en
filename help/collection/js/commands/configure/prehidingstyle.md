---
title: prehidingStyle
description: Create a CSS definition that allows personalized content to load without flickering.
exl-id: 3693542a-69d3-4ad8-bea4-4cabf7d80563
---
# `prehidingStyle`

The `prehidingStyle` property allows you to define a CSS selector to hide personalized content until it loads. This property is valuable in synchronous Web SDK implementations to avoid flickering. Adobe recommends using the [prehiding snippet](/help/collection/use-cases/personalization/manage-flicker.md) for asynchronous Web SDK implementations.

The CSS selectors that you define in this property begin hiding content when you run the first [`sendEvent`](../sendevent/overview.md) command on a page. Content is unhidden when a response from Adobe is received, which typically includes personalized content. Content is also unhidden if the `sendEvent` command fails or times out.

If you include both `prehidingStyle` and the prehiding snippet in your implementation, the prehiding snippet takes priority over this configuration property.

Set the `prehidingStyle` string when running the `configure` command. If you omit this property when configuring the Web SDK, nothing is hidden when running the first `sendEvent` command on a page. Set this value to the desired CSS selector and declaration block for synchronously loaded libraries.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  prehidingStyle: "#container { opacity: 0 !important }"
});
```

## Prehiding style using the Web SDK tag extension

These settings can be configured in the Web SDK tag extension using [Personalization configuration settings](/help/tags/extensions/client/web-sdk/configure/personalization.md).
