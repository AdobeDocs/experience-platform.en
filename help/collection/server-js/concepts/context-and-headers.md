---
title: Context and forwarded headers
description: Learn what context data the Server SDK adds to events, and how it forwards the visitor's request headers to the Edge Network.
badge: Alpha
---
# Context and forwarded headers

In a browser, the Web SDK reads the page URL, screen size, time zone, and other details from the page and adds them to each event. A server has no page to read, so the Server SDK adds a smaller set of context data. It also forwards details from the visitor's request so that the Edge Network can use them.

## Implementation details {#implementation-details}

The SDK adds the `xdm.implementationDetails` object to every event. This object identifies the library that sent the event:

```json
{
  "implementationDetails": {
    "name": "https://ns.adobe.com/experience/alloy-node",
    "version": "0.2.1",
    "environment": "server"
  }
}
```

The `version` value matches the installed version of the `@adobe/alloy-node` package. You can't turn off this data.

## Pass the incoming request {#request}

To add context about the visitor, pass the incoming request to [`forRequest`](../methods/forrequest.md) as the `request` property:

```js
const visitor = alloy.forRequest({ request: req });
```

The `request` value can be any object that has a `headers` property, including:

* A Node.js `IncomingMessage` from the `node:http` module.
* A request object from a framework built on `node:http`, such as Express or Fastify.
* A Fetch API `Request`, which many server-side JavaScript runtimes and frameworks pass to request handlers. Its `headers` property is a `Headers` object.

If you build a plain object yourself, use lowercase header names, such as `{ headers: { "user-agent": "..." } }`.

## Forwarded headers {#forwarded-headers}

When you pass a `request`, the SDK copies the following headers from it to each request that it sends to the Edge Network. Without these headers, the Edge Network would see your server as the visitor, and its device and location lookups would describe your server instead of the visitor.

| Header | Purpose |
| --- | --- |
| `User-Agent` | Identifies the visitor's browser and device. |
| `Accept-Language` | Identifies the visitor's preferred languages. |
| `Sec-CH-UA`, `Sec-CH-UA-Mobile`, `Sec-CH-UA-Platform`, `Sec-CH-UA-Platform-Version`, `Sec-CH-UA-Arch`, `Sec-CH-UA-Bitness`, `Sec-CH-UA-Full-Version-List`, `Sec-CH-UA-Model`, `Sec-CH-UA-WoW64` | User-Agent Client Hints, which describe the visitor's browser and device in more detail. See [User-agent client hints](/help/collection/use-cases/client-hints.md). |
| `X-Forwarded-For`, `Forwarded`, `X-Real-IP` | Identify the visitor's IP address when a proxy or load balancer sits in front of your server. |

The SDK forwards only the headers in this table. It never forwards the visitor's `Cookie`, `Authorization`, or `Referer` headers.

The Edge Network uses these headers for features such as [geolocation and device lookup](/help/datastreams/configure.md#geolocation-network-lookup), when they are enabled on your datastream. If your server runs behind a proxy or load balancer, make sure that it sets `X-Forwarded-For` or `Forwarded` to the visitor's real IP address.

Browsers send only a few low-entropy client hints by default. To receive the others, your server must ask the browser for them with the `Accept-CH` response header.

## Page URL from the Referer header {#page-url}

If the incoming request has a `Referer` header, the SDK uses its value as `xdm.web.webPageDetails.URL`. The `Referer` header contains the address of the page that made the request, so it is accurate only in some cases:

* **The browser calls your server from a page**, for example with `fetch`: `Referer` contains that page's URL, which is usually the value that you want.
* **The browser navigates to a page that your server renders**: `Referer` contains the *previous* page, not the page that the visitor is now viewing. Set the page URL yourself instead.
* **The request crosses origins**: Browsers usually trim `Referer` to the origin, such as `https://www.example.com/`, depending on the page's `Referrer-Policy`.

Values that you set in the [`xdm`](../methods/sendevent/xdm.md) object take priority over the `Referer` value. To set the page URL explicitly:

```js
await visitor.sendEvent({
  xdm: {
    eventType: "web.webpagedetails.pageViews",
    web: {
      webPageDetails: {
        URL: `https://www.example.com${req.url}`
      }
    },
    identityMap: {
      Email: [{ id: "visitor@example.com", primary: true }]
    }
  }
});
```

## Data that the SDK doesn't collect {#not-collected}

The following data that the Web SDK can collect in a browser has no reliable source on a server, so the Server SDK doesn't add it:

* Page title, referring page, and screen orientation
* Screen size, viewport size, and scroll position
* Local time and time zone
* High-entropy user-agent client hints that the browser didn't send in the request

If your application knows any of these values, for example because the browser sent them to your server, add them to the [`xdm`](../methods/sendevent/xdm.md) object yourself.
