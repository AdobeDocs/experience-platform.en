---
title: renderDecisions
description: Render personalized content that is eligible for automatic rendering.
exl-id: 6f7a3531-c2b6-4e90-a7ad-9f0fe4dc39e9
---
# `renderDecisions`

The `renderDecisions` property allows you to force the Web SDK to render any personalized content that is eligible for automatic rendering.

Set the `renderDecisions` boolean when running the `sendEvent` command. If omitted, this property defaults to `false`. Set this property to `true` if you want to automatically render personalized content.

>[!IMPORTANT]
>
>The `renderDecisions` property is incompatible with the [`documentUnloading`](documentunloading.md) property. Avoid setting both properties to `true` simultaneously.

```js
alloy("sendEvent", {
  "xdm": adobeDataLayer.getState(reference),
  "renderDecisions": true
});
```

## Render decisions using the Web SDK tag extension

The Web SDK tag extension equivalent of this property is the [**Render visual personalization decisions**](/help/tags/extensions/client/web-sdk/actions/send-event.md#personalization-fields) check box within the '[!UICONTROL Send event]' action.
