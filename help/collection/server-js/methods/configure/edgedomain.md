---
title: edgeDomain (Server SDK)
description: Change the domain that the Server SDK uses for unauthenticated requests.
badge: Alpha
feature_v2:
  - id: b7798bb6-f089-4907-8492-05fc80e10632
    internal-label: Server API
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `edgeDomain` (Server SDK)

>[!BEGINSHADEBOX]

*This page describes `edgeDomain` in the Server SDK `configure` method. For the Web SDK, see [`edgeDomain`](/help/collection/js/commands/configure/edgedomain.md).*

>[!ENDSHADEBOX]

The `edgeDomain` property sets the domain that the Server SDK uses for **unauthenticated** requests to the Edge Network. These requests come from the following methods:

* [`getIdentity`](../getidentity.md)
* [`appendIdentityToUrl`](../appendidentitytourl.md), when it needs to request an identity
* [`setConsent`](../setconsent.md)

The `edgeDomain` property doesn't affect [`sendEvent`](../sendevent/overview.md). The SDK always sends events to the authenticated Edge Network Server API at `server.adobedc.net`. See [Which requests are authenticated](../../authentication.md#authenticated-requests).

In the Web SDK, a custom first-party domain helps reduce the impact of ad blockers on data collection. Ad blockers don't affect requests from your server, so most server implementations can keep the default value. If you already have a first-party domain for the Web SDK, such as `data.example.com`, you can use the same value here.

When [`thirdPartyCookiesEnabled`](thirdpartycookiesenabled.md) is `true`, the SDK sends a visitor's first unauthenticated request to `adobedc.demdex.net` instead of to `edgeDomain`.

## Code example

Set the `edgeDomain` string property when you call `configure`. If you omit it, it defaults to `edge.adobedc.net`.

```js
await alloy.configure({
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  edgeCredentials: {
    clientId: process.env.ADOBE_CLIENT_ID,
    clientSecret: process.env.ADOBE_CLIENT_SECRET,
    scopes: process.env.ADOBE_SCOPES.split(",")
  },
  edgeDomain: "data.example.com"
});
```
