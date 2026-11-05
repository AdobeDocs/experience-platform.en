---
title: forRequest (Server SDK)
description: Create a handle that is scoped to a single visitor's request.
badge: Alpha
feature_v2:
  - id: b7798bb6-f089-4907-8492-05fc80e10632
    internal-label: Server API
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
# `forRequest` (Server SDK)

The `forRequest` method returns a handle that is scoped to a single incoming request. Call it once for each request that your server handles, then call methods such as [`sendEvent`](sendevent/overview.md) on the handle. This method doesn't exist in the Web SDK, because each browser page already serves a single visitor.

The handle is backed by its own SDK instance, configured with the same options that you passed to [`configure`](configure/overview.md). This way, one visitor's identity and consent never leak into another visitor's request. See [Instances and requests](../concepts/instances-and-requests.md) for an explanation of what each handle shares with the top-level instance.

```js
const visitor = alloy.forRequest({
  request: req
});

await visitor.sendEvent({
  xdm: {
    eventType: "web.webpagedetails.pageViews",
    identityMap: {
      Email: [{ id: "visitor@example.com", primary: true }]
    }
  }
});
```

## Options {#options}

The `forRequest` method accepts an optional object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| `request` | Object | The incoming request. Any object with a `headers` property works, such as a Node.js `IncomingMessage`, an Express request, or a Fetch API `Request`. The SDK forwards some of the visitor's headers to the Edge Network and reads the `Referer` header. See [Context and forwarded headers](../concepts/context-and-headers.md). |
| `cookie` | Object | A cookie service for this visitor. The SDK reads and writes the visitor's identity and consent through it. If you omit it, the handle uses an empty in-memory store, and the visitor gets a new ECID on every request. See [Platform services](../concepts/platform-services.md#cookie). |
| `storage` | Object | A storage service for this visitor. If you omit it, the handle uses an empty in-memory store. See [Platform services](../concepts/platform-services.md#storage). |
| `network`, `runtime`, `legacy`, `globals` | Object or function | Replacements for the services that you passed to `createInstance`, for this handle only. Pass `network` as a function that returns a network service, and the others as objects. See [Platform services](../concepts/platform-services.md). |

The handle never reuses the `cookie` or `storage` services that you passed to `createInstance`, because those services hold visitor data. Pass them to `forRequest` for each request instead.

## Return value {#return}

Unlike other methods, `forRequest` doesn't return a promise. It returns a handle right away. The handle has the following methods, which work the same way as on the top-level instance:

* [`sendEvent`](sendevent/overview.md)
* [`getIdentity`](getidentity.md)
* [`appendIdentityToUrl`](appendidentitytourl.md)
* [`setConsent`](setconsent.md)
* [`applyResponse`](applyresponse.md)
* [`getLibraryInfo`](getlibraryinfo.md)
* [`setDebug`](setdebug.md)

The handle doesn't have `configure` or `forRequest` methods, because it is already configured.

Create a new handle for each request. Don't reuse a handle across requests or share it between visitors.

## Errors {#errors}

`forRequest` throws an error if you call it before `configure` resolves, or if `configure` rejected:

```text
forRequest() can only be called after configure() has resolved.
```

To avoid this error, wait for `configure` to resolve before your server starts accepting requests.
