---
title: onBeforeEventSend (Server SDK)
description: Register a function that can change or cancel each event just before the Server SDK sends it.
badge: Alpha
---
# `onBeforeEventSend` (Server SDK)

>[!BEGINSHADEBOX]

*This page describes `onBeforeEventSend` in the Server SDK `configure` method. For the Web SDK, see [`onBeforeEventSend`](/help/collection/js/commands/configure/onbeforeeventsend.md).*

>[!ENDSHADEBOX]

The `onBeforeEventSend` callback lets you register a function that runs just before the Server SDK sends each event. Use it to add, change, or remove data in every event in one place, or to cancel events that you don't want to send, such as traffic from known bots.

The SDK calls the function with a `content` object that contains the following properties:

* **`xdm`**: The event's XDM data. It already includes the data that the SDK adds automatically, such as `implementationDetails` and the page URL taken from the `Referer` header. See [Context and forwarded headers](../../concepts/context-and-headers.md).
* **`data`**: The event's non-XDM data, from the [`data`](../sendevent/data.md) option of `sendEvent`.

Change the `content` object directly. Return `false` to cancel the event. When you cancel an event, `sendEvent` resolves with an empty object and the SDK doesn't contact Adobe.

>[!WARNING]
>
>If your function throws an error, the SDK doesn't send the event, and `sendEvent` rejects with an error that includes the message from your function.

## Code example

Register the `onBeforeEventSend` callback when you call `configure`. The SDK calls the same function for every event from the instance and from every [`forRequest`](../forrequest.md) handle, so the function must not depend on data from a single request. Use the `content` object instead.

```js
await alloy.configure({
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  edgeCredentials: {
    clientId: process.env.ADOBE_CLIENT_ID,
    clientSecret: process.env.ADOBE_CLIENT_SECRET,
    scopes: process.env.ADOBE_SCOPES.split(",")
  },
  onBeforeEventSend: (content) => {
    // Cancel events that your application marked as bot traffic
    if (content.data?.isBot) {
      return false;
    }

    // Add a value to every event
    content.xdm.application ??= {};
    content.xdm.application.name = "Example storefront";

    // Remove the query string from the page URL
    const pageUrl = content.xdm.web?.webPageDetails?.URL;
    if (pageUrl) {
      content.xdm.web.webPageDetails.URL = pageUrl.split("?")[0];
    }
  }
});
```
