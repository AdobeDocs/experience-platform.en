---
title: prehidingStyle (Web SDK)
description: Create a CSS definition that allows personalized content to load without flickering.
exl-id: 3693542a-69d3-4ad8-bea4-4cabf7d80563
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
  - id: e9001ce2-5245-4a8e-8601-dd958009072f
    internal-label: Web experience
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `prehidingStyle` (Web SDK)

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
