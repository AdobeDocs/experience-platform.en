---
title: Tags client-side JavaScript overview (_satellite)
description: Learn about the client-side _satellite object and the various functions you can perform with it in tags.
exl-id: f8b31c23-409b-471e-bbbc-b8f24d254761
TQID: 'https://experienceleague.adobe.com/bs08vc-tsRpXpuffgLrzWxsaJ57YxVUKSzIkpcRSzT4'
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Tags client-side JavaScript overview (`_satellite`)

_These pages outline how to use the `_satellite` object, which allow you to manage and customize your tag logic using JavaScript. See [Adobe Experience Platform Web SDK tag extension](/help/tags/extensions/client/web-sdk/overview.md) for details on how to set up your implementation in the Data Collection UI._

The `_satellite` object exposes several supported entry points that help you interact with the tag library published on your site. All tag deployments expose `_satellite` if the loader tag is implemented correctly. There are several primary use cases for this object:

* Usage within your tag library in custom code blocks, giving you full access to the tag library itself.
* Debugging your deployed implementation within any environment (development, staging, or production)
* Direct implementation on your website, giving you full control over when events or tag rules trigger. For new implementations, Adobe recommends using a more flexible strategy like the [Adobe Client Data Layer](/help/collection/acdl/overview.md).

>[!IMPORTANT]
>
>If you call `_satellite` from your site code (for example, `_satellite.track()`), **guard every call** so that your site is not tightly coupled to the tag library.
>
>Using `_satellite` inside a tag property's custom code or locally in your browser console does not require guarding.

## Common usage examples

```js
// Read and write a temporary data element value (guarded)
if(window._satellite?.getVar && window._satellite?.setVar) {
  const region = _satellite.getVar('user_region');
  _satellite.setVar('promo_code', code);
}

// Manually trigger a rule configured in your tag property (guarded)
if (window._satellite?.track) {
  _satellite.track('cart_add', { sku: '123', qty: 2 });
}

// Local console debugging (guarding not needed)
_satellite.setDebug(true);
_satellite.logger.log('Rule evaluated');
```
