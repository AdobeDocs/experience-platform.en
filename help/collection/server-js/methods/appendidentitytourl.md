---
title: appendIdentityToUrl (Server SDK)
description: Add a visitor's identity to a URL with the Server SDK so that another domain can recognize the visitor.
badge: Alpha
---
# `appendIdentityToUrl` (Server SDK)

>[!BEGINSHADEBOX]

*This page describes the Server SDK `appendIdentityToUrl` method. For the Web SDK, see [`appendIdentityToUrl`](/help/collection/js/commands/appendidentitytourl.md).*

>[!ENDSHADEBOX]

The `appendIdentityToUrl` method adds the visitor's identity to a URL as a query string parameter named `adobe_mc`. When the visitor follows the URL to another domain that you own, the Web SDK or the Server SDK on that domain reads the parameter and keeps the same Experience Cloud ID (ECID). This prevents the visitor from being counted twice in datasets that include both domains.

On a server, a common use is to add the visitor's identity to a redirect to another domain:

```js
const visitor = alloy.forRequest({ request: req, cookie: visitorCookies });

const { url } = await visitor.appendIdentityToUrl({
  url: "https://shop.example.net/checkout"
});

res.writeHead(302, { Location: url });
res.end();
```

The resulting URL looks similar to the following:

```text
https://shop.example.net/checkout?adobe_mc=TS%3D1792711449%7CMCMID%3D34567890123456789012345678901234567890%7CMCORGID%3DADB3LETTERSANDNUMBERS%2540AdobeOrg
```

If the SDK doesn't have the visitor's ECID yet, it requests one from the Edge Network first. That request is unauthenticated. See [Set the datastream access type](../authentication.md#datastream-access-type).

If the visitor has opted out, or [`defaultConsent`](configure/defaultconsent.md) is `"out"` and the visitor hasn't opted in, the method returns the URL unchanged. It also returns the URL unchanged, instead of rejecting, if it can't get the visitor's identity, for example because of a network error. When [debugging](configure/debugenabled.md) is on, the SDK logs a warning that includes `Unable to append identity to url`.

## Options {#options}

The `appendIdentityToUrl` method accepts an object with the following properties:

* **`url`**: Required. The URL to add the visitor's identity to.
* **`edgeConfigOverrides`**: A [datastream configuration override object](configure/edgeconfigoverrides.md) for this request.

## Result object {#result}

The `appendIdentityToUrl` method returns a promise. When it resolves, the result object contains **`url`**, the URL with the `adobe_mc` query string parameter added.
