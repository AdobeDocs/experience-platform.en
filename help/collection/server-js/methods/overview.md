---
title: Methods overview
description: Learn how to call Server SDK methods, handle their results, and choose between the instance and a forRequest handle.
badge: Alpha
---
# Methods overview

The Server SDK provides its features as methods on the object that [`createInstance`](../install.md#create-instance) returns. If you have used the Web SDK, these methods correspond to Web SDK commands, but you call them differently:

| Web SDK (browser) | Server SDK |
| --- | --- |
| `alloy("sendEvent", { xdm })` | `alloy.sendEvent({ xdm })` |
| `alloy("getIdentity")` | `alloy.getIdentity()` |

The Web SDK uses a single function that takes the command name as a string, so that a page can queue commands before the library finishes loading. A server loads the library before it handles any requests, so the Server SDK uses regular methods instead, which your editor can suggest and check as you type.

## Available methods {#methods}

| Method | Description | Top-level instance | `forRequest` handle |
| --- | --- | --- | --- |
| [`configure`](configure/overview.md) | Sets the datastream, organization, credentials, and other options. Call it once when your server starts. | Yes | No |
| [`forRequest`](forrequest.md) | Returns a handle that is scoped to one visitor's request. | Yes | No |
| [`sendEvent`](sendevent/overview.md) | Sends an event to the Edge Network and returns the results, such as personalization propositions. | Yes | Yes |
| [`getIdentity`](getidentity.md) | Returns the visitor's ECID without sending an event. | Yes | Yes |
| [`appendIdentityToUrl`](appendidentitytourl.md) | Adds the visitor's identity to a URL so that another domain can recognize the visitor. | Yes | Yes |
| [`setConsent`](setconsent.md) | Records the visitor's consent preferences. | Yes | Yes |
| [`applyResponse`](applyresponse.md) | Processes an Edge Network response that you obtained some other way. | Yes | Yes |
| [`getLibraryInfo`](getlibraryinfo.md) | Returns the library version and its current configuration. | Yes | Yes |
| [`setDebug`](setdebug.md) | Turns debug logging on or off. | Yes | Yes |

For visitor traffic, call methods on a `forRequest` handle instead of on the top-level instance. See [Instances and requests](../concepts/instances-and-requests.md).

## Handle results {#results}

Every method except `forRequest` returns a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). The promise resolves with a result object when the method succeeds, and rejects with an `Error` when it fails. Use `await` with `try...catch`, or use `then` and `catch`:

```js
try {
  const result = await visitor.sendEvent({
    xdm: {
      eventType: "web.webpagedetails.pageViews",
      identityMap: {
        Email: [{ id: "visitor@example.com", primary: true }]
      }
    }
  });
  console.log("Propositions", result.propositions);
} catch (error) {
  console.error("sendEvent failed", error.message);
}
```

The contents of the result object depend on the method. Each method's page describes its result object. Some methods, such as `setConsent`, resolve with an empty object.

The result also depends on the visitor's consent. If the visitor has opted out, methods such as `sendEvent` resolve with an empty object without sending anything to Adobe.

## Errors {#errors}

A method rejects in the following cases, among others:

* **Invalid options**: The SDK validates every option before it sends anything. An unknown or misspelled option, or a value of the wrong type, rejects with a message that names the problem, such as `'bogus': Unknown field`.
* **Authentication failures**: If the SDK can't obtain an access token, the method rejects with a message that includes `Failed to acquire an IMS access token`. See [Authentication](../authentication.md).
* **Edge Network errors**: If the Edge Network rejects the request, for example because the event has no primary identity, the method rejects with the error that the Edge Network returned.
* **Network failures**: If your server can't reach Adobe, the method rejects with the underlying network error.

`forRequest` doesn't return a promise. It returns a handle right away, or throws an error if `configure` hasn't resolved yet.

Depending on your runtime and how it is configured, an unhandled promise rejection can stop your server process or fail the request. Always handle rejections from SDK methods, so that a problem sending data to Adobe doesn't break the response that your server sends to the visitor.
