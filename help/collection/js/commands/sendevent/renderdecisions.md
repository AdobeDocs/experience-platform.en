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

Make sure that when setting this property to `true` that you also include associated scopes or surfaces. These scopes or surfaces can be requested automatically (such as on the first `sendEvent` command on a page), or explicitly (using [`personalization.decisionScopes`](personalization.md#personalizationdecisionscopes) or [`personalization.surfaces`](personalization.md#personalizationsurfaces)). A common issue when rendering personalization is the following scenario:

1. A `sendEvent` command executes early on the page that requests default personalization with `renderDecisions` not set (defaults to `false`). Propositions are fetched but not rendered.
1. Later on the page, another `sendEvent` triggers with `renderDecisions` set to `true` but does not include any scopes or surfaces. Since there are no scopes or surfaces in this second call, nothing is rendered.

You can avoid this issue by either:

* Setting `renderDecisions` to `true` on the first `sendEvent` call; or
* Explicitly setting `decisionScopes` or `surfaces` on a subsequent `sendEvent` call when setting `renderDecisions` to `true`.

## Render decisions using the Web SDK tag extension

The Web SDK tag extension equivalent of this property is the [**Render visual personalization decisions**](/help/tags/extensions/client/web-sdk/actions/send-event.md#personalization-fields) check box within the '[!UICONTROL Send event]' action.
