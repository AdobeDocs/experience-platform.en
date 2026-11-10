---
title: renderDecisions (Web SDK)
description: Render personalized content that is eligible for automatic rendering.
exl-id: 6f7a3531-c2b6-4e90-a7ad-9f0fe4dc39e9
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
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `renderDecisions` (Web SDK)

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
