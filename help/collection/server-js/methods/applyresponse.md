---
title: applyResponse (Server SDK)
description: Process an Edge Network response that you obtained without the Server SDK.
badge: Alpha
---
# `applyResponse` (Server SDK)

>[!BEGINSHADEBOX]

*This page describes the Server SDK `applyResponse` method. For the Web SDK, see [`applyResponse`](/help/collection/js/commands/applyresponse.md).*

>[!ENDSHADEBOX]

The `applyResponse` method processes a response from the Edge Network that your application obtained some other way, such as by calling the [Edge Network API](https://developer.adobe.com/data-collection-apis/docs/) directly. The SDK reads the response as if it had sent the request itself and returns the same kind of result as [`sendEvent`](sendevent/overview.md), such as personalization propositions.

```js
const visitor = alloy.forRequest({ request: req, cookie: visitorCookies });

const { propositions = [] } = await visitor.applyResponse({
  responseHeaders: edgeResponseHeaders,
  responseBody: edgeResponseBody
});
```

In the Web SDK, `applyResponse` lets a browser take over a response that a server requested. With the Server SDK, you usually don't need it, because `sendEvent` already returns the results of each request.

## Options {#options}

The `applyResponse` method accepts an object with the following properties:

* **`responseBody`**: Required. The JSON body of the Edge Network response. It must contain a `handle` array.
* **`responseHeaders`**: An object that maps response header names to string values.

The SDK also accepts `renderDecisions` and `personalization.sendDisplayEvent` so that you can share code with a browser implementation, but they have no effect on a server.

## Result object {#result}

The `applyResponse` method returns a promise. When it resolves, the result object contains **`propositions`**, an array of the personalization propositions in the response, if the instance includes the Personalization component. The SDK doesn't render them.
