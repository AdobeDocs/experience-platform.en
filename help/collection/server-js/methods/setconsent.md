---
title: setConsent (Server SDK)
description: Record a visitor's consent preferences with the Server SDK.
badge: Alpha
---
# `setConsent` (Server SDK)

>[!BEGINSHADEBOX]

*This page describes the Server SDK `setConsent` method. For the Web SDK, see [`setConsent`](/help/collection/js/commands/setconsent.md).*

>[!ENDSHADEBOX]

The `setConsent` method tells the Server SDK whether it can send data for a visitor (opt in) or must discard it (opt out). The SDK sends the visitor's preferences to the Edge Network, then stores the result in the `kndctr_<orgId>_consent` cookie through the cookie service that you pass to [`forRequest`](forrequest.md).

The SDK supports the following consent standards:

* **[Adobe standard](/help/landing/governance-privacy-security/consent/adobe/overview.md)**: Versions 1.0 and 2.0.
* **[IAB Transparency & Consent Framework (TCF)](/help/landing/governance-privacy-security/consent/iab/overview.md)**: Version 2.0.

This method is available only when the instance includes the Consent component, which [`createInstance`](../install.md#create-instance) includes by default.

## Call setConsent for a visitor {#call}

Consent belongs to a single visitor, so always call `setConsent` on that visitor's `forRequest` handle, never on the top-level instance. The following example uses the Adobe 2.0 standard:

```js
const visitor = alloy.forRequest({ request: req, cookie: visitorCookies });

await visitor.setConsent({
  consent: [{
    standard: "Adobe",
    version: "2.0",
    value: {
      collect: { val: "y" }
    }
  }]
});
```

The following example uses the Adobe 1.0 standard:

```js
await visitor.setConsent({
  consent: [{
    standard: "Adobe",
    version: "1.0",
    value: { general: "in" }
  }]
});
```

The following example uses the IAB TCF 2.0 standard:

```js
await visitor.setConsent({
  consent: [{
    standard: "IAB TCF",
    version: "2.0",
    value: "CO052l-O052l-DGAMBFRACBgAIBAAAAAAIYgEawAQEagAAAA",
    gdprApplies: true
  }]
});
```

If you use the IAB TCF standard and want consent data on the visitor's profile, include the IAB consent information in the event [`xdm`](sendevent/xdm.md) object as well. The SDK doesn't add it to events automatically.

## How consent is remembered {#stored-consent}

The SDK reads and writes the consent cookie through the `cookie` service that you pass to `forRequest`:

* **If your cookie service reads the visitor's browser cookies**, consent that the visitor recorded earlier, on the server or in the browser with the Web SDK, already applies. You don't need to call `setConsent` again until the visitor's preferences change.
* **If you don't pass a cookie service**, the SDK can't remember consent between requests. Each request starts from [`defaultConsent`](configure/defaultconsent.md).

The SDK skips the request if it already sent the same preferences for the visitor. It keeps track of the preferences that it sent through the `storage` service, so this check works across requests only if you pass that visitor's [`storage` service](../concepts/platform-services.md#storage) to `forRequest`. Otherwise, each call sends a request to the Edge Network, even if the visitor's preferences haven't changed. Call `setConsent` when the visitor makes or changes a consent choice, rather than on every request.

The request is unauthenticated. Make sure that your datastream accepts unauthenticated requests. See [Set the datastream access type](../authentication.md#datastream-access-type).

## Options {#options}

The `setConsent` method accepts an object with the following properties:

* **`consent`**: Required. An array of consent objects, each in one of the supported standards.
* **`identityMap`**: An identity map for the visitor. The Edge Network applies consent at the device level, so it uses only the `ECID` from this map.
* **`edgeConfigOverrides`**: A [datastream configuration override object](configure/edgeconfigoverrides.md) for this request.

## Result object {#result}

The `setConsent` method returns a promise that resolves with an empty object when the Edge Network accepts the consent preferences.
