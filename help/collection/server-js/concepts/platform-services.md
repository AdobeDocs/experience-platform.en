---
title: Platform services
description: Learn about the services that the Server SDK uses for networking, cookies, and storage, and how to replace them.
badge: Alpha
---
# Platform services

The Server SDK shares its core logic with the Web SDK. Anything that depends on the environment, such as sending network requests, reading cookies, or storing data, goes through a set of **platform services**. The SDK includes default services that use only web-standard APIs, so they work in any runtime that meets the [requirements](../overview.md#requirements). You can replace any of them with your own implementation.

Most implementations don't need to replace any services. The most common reason to replace one is to provide a [`cookie`](#cookie) service, so that a visitor keeps the same identity and consent across requests.

## Where to pass services {#where}

You can pass services in two places:

* **`createInstance`** (or `createCustomInstance`): Pass an object with a `platformServices` property. The services apply to the top-level instance. Handles created by [`forRequest`](../methods/forrequest.md) also reuse the `network`, `runtime`, `legacy`, and `globals` services, but **not** the `cookie` and `storage` services, because those hold visitor data.
* **`forRequest`**: Pass the services directly in the `forRequest` object, next to `request`. These services apply only to that handle, and take priority over the services passed to `createInstance`.

```js
import { createInstance } from "@adobe/alloy-node";

// Applies to the top-level instance. Handles reuse network, runtime, legacy, and globals.
const alloy = createInstance({
  platformServices: {
    runtime: myRuntimeService
  }
});

await alloy.configure({
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  edgeCredentials: {
    clientId: process.env.ADOBE_CLIENT_ID,
    clientSecret: process.env.ADOBE_CLIENT_SECRET,
    scopes: process.env.ADOBE_SCOPES.split(",")
  }
});

// Applies only to this handle
const visitor = alloy.forRequest({
  request: req,
  cookie: myCookieServiceForThisVisitor,
  storage: myStorageServiceForThisVisitor
});
```

The interfaces for each service are defined in [`packages/core/src/services/types.ts`](https://github.com/adobe/alloy/blob/main/packages/core/src/services/types.ts) in the `adobe/alloy` repository on GitHub. When you replace a service, your implementation must provide every method in the interface.

## Available services {#services}

| Service | Default behavior | Scope when passed to `createInstance` |
| --- | --- | --- |
| [`cookie`](#cookie) | Stores cookies in memory. | Top-level instance only |
| [`storage`](#storage) | Stores data in memory. | Top-level instance only |
| [`network`](#network) | Sends requests with the global `fetch` function and forwards the visitor's headers. | Top-level instance and every handle |
| `runtime` | Uses the global `setTimeout`, `clearTimeout`, `atob`, `btoa`, `TextEncoder`, `TextDecoder`, and `Date.now` functions. | Top-level instance and every handle |
| `legacy` | Does nothing. In a browser, this service connects to the legacy Visitor ID Service library, which doesn't exist on a server. | Top-level instance and every handle |
| `globals` | Returns empty values. In a browser, this service reads page details, such as the page URL. | Top-level instance and every handle |

## Cookie service {#cookie}

The SDK stores each visitor's identity (ECID) and consent preferences in cookies. On a server, it reads and writes those cookies through the `cookie` service. The cookie service must provide the following methods:

| Method | Description |
| --- | --- |
| `get(name)` | Returns the value of the named cookie, or `undefined` if it doesn't exist. |
| `getAll()` | Returns an object that contains every cookie name and value. |
| `set(name, value, options)` | Creates or updates a cookie. |
| `remove(name, options)` | Deletes a cookie. |
| `withConverter(converter)` | Returns a cookie service that encodes and decodes values with the given converter. |

The default cookie service keeps cookies in memory only:

* On a `forRequest` handle without a `cookie` service, the store starts empty for each request, so the visitor gets a new ECID on every request.
* On the top-level instance, one store lasts for the life of the process and is shared by every call made on that instance.

The SDK doesn't include a cookie service that reads the visitor's `Cookie` request header and writes `Set-Cookie` response headers. To keep a visitor's identity and consent across requests, you must provide your own implementation and pass a new one to `forRequest` for each request.

## Storage service {#storage}

The SDK uses the `storage` service to remember a few values, such as whether debugging is turned on with [`setDebug`](../methods/setdebug.md), which consent preferences [`setConsent`](../methods/setconsent.md) already sent, and the client ID that Adobe Experience Platform Assurance uses to validate requests. The default storage service keeps data in memory.

Each `forRequest` handle gets a new, empty storage service unless you pass one. If you use Assurance and want a visitor's Assurance client ID to stay the same across requests, pass a `storage` service for that visitor to `forRequest`.

## Network service {#network}

The default network service sends requests with the global `fetch` function. When you pass a `request` to `forRequest`, it also adds the visitor's headers to each request. See [Context and forwarded headers](context-and-headers.md).

To replace the network service, pass a **function** that receives the SDK's logger and returns a network service, instead of passing the service object itself:

```js
const alloy = createInstance({
  platformServices: {
    network: (logger) => myNetworkService
  }
});
```

>[!IMPORTANT]
>
>If you replace the network service, the SDK no longer forwards the visitor's headers from the `request` that you pass to `forRequest`. Your network service is responsible for any headers that it sends.
>
>The SDK calls your service's `sendFetchRequest(url, body, headers)` method with a `headers` object that contains the `Authorization`, `x-api-key`, and `x-gw-ims-org-id` headers for authenticated requests. Always send these headers. Otherwise, the Edge Network rejects `sendEvent` requests.
