---
title: getIdentity (Server SDK)
description: Retrieve a visitor's Experience Cloud ID with the Server SDK without sending an event.
badge: Alpha
---
# `getIdentity` (Server SDK)

>[!BEGINSHADEBOX]

*This page describes the Server SDK `getIdentity` method. For the Web SDK, see [`getIdentity`](/help/collection/js/commands/getidentity.md).*

>[!ENDSHADEBOX]

The `getIdentity` method returns the visitor's Experience Cloud ID (ECID) without sending event data. When you call [`sendEvent`](sendevent/overview.md), the Edge Network establishes the visitor's identity automatically, so use `getIdentity` only when your server needs the ECID itself. For example, use it to store the ECID with your own records or to pass it to another system.

Call `getIdentity` on the visitor's [`forRequest`](forrequest.md) handle:

```js
const visitor = alloy.forRequest({ request: req, cookie: visitorCookies });

const result = await visitor.getIdentity({
  namespaces: ["ECID"]
});

console.log(result.identity.ECID);
```

The SDK uses the following flow to return the ECID:

1. The SDK checks whether consent allows it to proceed. If the visitor has opted out, `getIdentity` resolves with an empty object.
1. If the visitor's identity cookie is available through the cookie service that you passed to `forRequest`, the SDK reads the ECID from it without contacting Adobe.
1. Otherwise, the SDK requests the visitor's identity from the Edge Network, writes the identity cookie through your cookie service, and returns the ECID.

The request to the Edge Network is unauthenticated. Make sure that your datastream accepts unauthenticated requests. See [Set the datastream access type](../authentication.md#datastream-access-type).

If you don't pass a cookie service to `forRequest`, the SDK can't find an existing identity, so each `forRequest` handle gets a new ECID. See [Instances and requests](../concepts/instances-and-requests.md#identity).

## Options {#options}

The `getIdentity` method accepts an optional object with the following properties:

* **`namespaces`**: An array of the identity namespaces to return. Supported values are `"ECID"` and `"CORE"`. The default value is `["ECID"]`. You can request the `"CORE"` namespace only when [`thirdPartyCookiesEnabled`](configure/thirdpartycookiesenabled.md) is `true`. Otherwise, `getIdentity` rejects.
* **`edgeConfigOverrides`**: A [datastream configuration override object](configure/edgeconfigoverrides.md) for this request.

## Result object {#result}

The `getIdentity` method returns a promise. When it resolves, the result object contains the following properties:

* **`identity.ECID`**: A string that contains the visitor's ECID.
* **`identity.CORE`**: A string that contains the visitor's CORE ID, if you requested the `CORE` namespace.
* **`edge.regionId`**: An integer that identifies the Edge Network region that handled the request. This property is present only when the SDK contacted the Edge Network to get the identity.

```js
const { identity } = await visitor.getIdentity();
console.log(identity.ECID);
```
