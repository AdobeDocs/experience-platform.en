---
title: defaultConsent (Server SDK)
description: Set how the Server SDK handles data collection for visitors who haven't recorded a consent preference.
badge: Alpha
---
# `defaultConsent` (Server SDK)

>[!BEGINSHADEBOX]

*This page describes `defaultConsent` in the Server SDK `configure` method. For the Web SDK, see [`defaultConsent`](/help/collection/js/commands/configure/defaultconsent.md).*

>[!ENDSHADEBOX]

The `defaultConsent` property determines whether the Server SDK collects data for a visitor who has no stored consent preference. A visitor's stored preference, which you record with [`setConsent`](../setconsent.md), always takes priority over this default.

Set the `defaultConsent` string property when you call `configure`. It supports the following values:

* **`"in"`**: The SDK sends data until the visitor opts out. This is the default value.
* **`"out"`**: The SDK doesn't send data until the visitor opts in. Methods such as [`sendEvent`](../sendevent/overview.md) resolve with an empty object without contacting Adobe.

```js
await alloy.configure({
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  edgeCredentials: {
    clientId: process.env.ADOBE_CLIENT_ID,
    clientSecret: process.env.ADOBE_CLIENT_SECRET,
    scopes: process.env.ADOBE_SCOPES.split(",")
  },
  defaultConsent: "out"
});
```

The value is case-sensitive. Any other value causes `configure` to reject. This property is available only when the instance includes the Consent component, which [`createInstance`](../../install.md#create-instance) includes by default.

## Pending consent is not supported {#pending}

The Web SDK also supports `"pending"`, which holds events in the browser until the visitor makes a choice. The Server SDK doesn't support `"pending"`, and `configure` rejects it.

In a browser, the page stays open while the visitor decides, so the Web SDK can send the held events afterward. On a server, each [`forRequest`](../forrequest.md) handle lasts only for a single request. A later request from the same visitor can't release events that an earlier request held, so they would never be sent.

Instead, track whether each visitor has made a consent decision in your own application. For visitors who haven't decided, don't call `sendEvent`.

## How stored consent affects the default {#stored-consent}

When a visitor sets their consent, the SDK stores it in the `kndctr_<orgId>_consent` cookie, through the cookie service that you pass to `forRequest`. On later requests, the SDK uses the stored preference instead of `defaultConsent`, as long as the visitor's identity cookie is also present. If the identity cookie is missing, the SDK discards the stored consent, because consent is tied to the visitor's identity.

The Server SDK uses the same cookie names as the Web SDK. If your cookie service reads the visitor's browser cookies, consent that the visitor recorded in the browser also applies on the server.

If you don't pass a cookie service to `forRequest`, the SDK can't remember the visitor's consent between requests. In that case, every request starts from `defaultConsent`.
