---
title: applyResponse (Server SDK)
description: Process an Edge Network response that you obtained without the Server SDK.
badge: Alpha
feature_v2:
  - id: b7798bb6-f089-4907-8492-05fc80e10632
    internal-label: Server API
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
autotag-review: '2026-11-05T22:08:57.077Z'
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
