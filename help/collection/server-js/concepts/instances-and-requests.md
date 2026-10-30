---
title: Instances and requests
description: Learn how the Server SDK separates one-time instance setup from per-request work with forRequest, on a server that handles many visitors.
badge: Alpha
---
# Instances and requests

In a browser, each page load starts a new copy of the Web SDK that serves a single visitor. A server is different. One long-running process handles requests from many visitors, often at the same time. The Server SDK separates the work that happens once per process from the work that happens for each visitor's request:

* **Once per process**: Create an instance and call [`configure`](../methods/configure/overview.md) when your server starts.
* **Once per request**: Call [`forRequest`](../methods/forrequest.md) to get a handle that is scoped to the visitor who made the request, then call methods such as [`sendEvent`](../methods/sendevent/overview.md) on that handle.

## Configure once when your server starts {#configure-once}

Create one instance and configure it before your server starts accepting requests. Wait for `configure` to resolve, because `forRequest` throws an error if you call it before configuration finishes.

```js
import { createInstance } from "@adobe/alloy-node";

const alloy = createInstance();

await alloy.configure({
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  edgeCredentials: {
    clientId: process.env.ADOBE_CLIENT_ID,
    clientSecret: process.env.ADOBE_CLIENT_SECRET,
    scopes: process.env.ADOBE_SCOPES.split(",")
  }
});
```

If `configure` rejects, for example because an option is invalid, the instance stays unconfigured and `forRequest` keeps throwing until a call to `configure` succeeds.

## Call forRequest for each request {#for-request}

For each incoming request, call `forRequest` and pass the incoming request object. The returned handle has the same methods as the instance, except `configure` and `forRequest`.

The following example uses the Node.js built-in `node:http` module. The same pattern works with any framework that gives you the incoming request object, such as Express or Fastify.

```js
import { createServer } from "node:http";

createServer(async (req, res) => {
  const visitor = alloy.forRequest({ request: req });

  try {
    await visitor.sendEvent({
      xdm: {
        eventType: "web.webpagedetails.pageViews",
        identityMap: {
          Email: [{ id: "visitor@example.com", primary: true }]
        }
      }
    });
  } catch (error) {
    console.error("Failed to send event to Adobe", error);
  }

  res.end("OK");
}).listen(3000);
```

If your runtime or framework passes a Fetch API `Request` to your handler and expects a `Response` in return, use the same pattern. Register the handler in the way that your runtime or framework requires:

```js
async function handleRequest(request) {
  const visitor = alloy.forRequest({ request });

  try {
    await visitor.sendEvent({
      xdm: {
        eventType: "web.webpagedetails.pageViews",
        identityMap: {
          Email: [{ id: "visitor@example.com", primary: true }]
        }
      }
    });
  } catch (error) {
    console.error("Failed to send event to Adobe", error);
  }

  return new Response("OK");
}
```

Each handle is backed by its own SDK instance that is configured with the same options that you passed to `configure`. Handles don't share visitor state with each other, so one visitor's identity or consent can't leak into another visitor's request.

Passing the `request` lets the SDK forward the visitor's headers, such as `User-Agent`, `Accept-Language`, and `X-Forwarded-For`, to the Edge Network. See [Context and forwarded headers](context-and-headers.md).

## What is shared and what is per request {#scope}

| State | Scope | Details |
| --- | --- | --- |
| Configuration | Process | Set once by `configure`. Every handle uses the same configuration. |
| Access token | Process | The SDK requests an access token from Adobe the first time it needs one, then reuses it for every handle until shortly before it expires. See [Authentication](../authentication.md#token-caching). |
| Network, runtime, legacy, and globals services | Process | Handles reuse any [platform services](platform-services.md) that you pass to `createInstance`, unless you override them in `forRequest`. |
| Identity (ECID) and consent | Visitor | Read from and written to the `cookie` service that you pass to `forRequest`. |
| Storage | Request | Each handle gets a new in-memory store unless you pass a `storage` service to `forRequest`. |
| Request headers | Request | Read from the `request` that you pass to `forRequest`. |

## Identity and consent across requests {#identity}

The SDK stores the visitor's Experience Cloud ID (ECID) and consent preferences in cookies, the same way the Web SDK does. On a server, the SDK reads and writes these cookies through a **cookie service**, which you pass to `forRequest` as the `cookie` property.

* **If you don't pass a `cookie` service**, each handle starts with an empty in-memory cookie store. The Edge Network assigns a new ECID on every request, and consent that you set with [`setConsent`](../methods/setconsent.md) isn't remembered for the visitor's next request.
* **If you pass the same cookie data on each of a visitor's requests**, the SDK sends the stored identity to the Edge Network, so the visitor keeps the same ECID. Consent preferences also carry over.

The SDK doesn't include a cookie service that reads and writes HTTP `Cookie` and `Set-Cookie` headers. To keep a visitor's identity and consent across requests, provide your own implementation of the cookie service interface. See [Platform services](platform-services.md#cookie).

>[!NOTE]
>
>Events that [`sendEvent`](../methods/sendevent/overview.md) sends must include a primary identity in [`xdm.identityMap`](../methods/sendevent/xdm.md#primary-identity), whether or not you pass a cookie service. The ECID alone doesn't satisfy this requirement.

## Avoid the top-level instance for visitor traffic {#top-level}

You can call methods such as `sendEvent` directly on the instance that `createInstance` returns. Doing so is useful for testing your setup, or for sending events that don't belong to a specific visitor. However, the top-level instance keeps a single in-memory cookie store for the life of the process. Every call made on it shares the same identity, regardless of which visitor triggered it. Use a `forRequest` handle for each visitor's request instead.
