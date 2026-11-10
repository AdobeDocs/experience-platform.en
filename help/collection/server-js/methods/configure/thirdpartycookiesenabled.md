---
title: thirdPartyCookiesEnabled (Server SDK)
description: Control whether the Server SDK uses the Audience Manager third-party domain for identity requests.
badge: Alpha
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: df80eeb1-8d72-467e-b0df-9d51c7d3a0a1
    internal-label: Audience Manager
  - id: e1971122-7081-4556-9222-8a31bd71800c
    internal-label: Experience Cloud Services
feature_v2:
  - id: b7798bb6-f089-4907-8492-05fc80e10632
    internal-label: Server API
  - id: a50ad69b-1331-40e9-b634-531a085a6a54
    internal-label: Identities
  - id: 6f307efa-2798-5b6d-8079-f765b66875c1
    internal-label: Cookies
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `thirdPartyCookiesEnabled` (Server SDK)

>[!BEGINSHADEBOX]

*This page describes `thirdPartyCookiesEnabled` in the Server SDK `configure` method. For the Web SDK, see [`thirdPartyCookiesEnabled`](/help/collection/js/commands/configure/thirdpartycookiesenabled.md).*

>[!ENDSHADEBOX]

The `thirdPartyCookiesEnabled` property determines whether the Server SDK uses the Adobe Audience Manager third-party domain, `adobedc.demdex.net`, to help identify visitors. It also controls whether you can request the visitor's [CORE ID](/help/collection/identity/overview.md).

## How this property works on a server {#how-it-works}

In a browser, the Web SDK uses the third-party domain to read and set a cookie on `demdex.net`, which helps identify a visitor across domains. On a server, requests go directly from your server to Adobe, so they never carry the visitor's `demdex.net` cookie, and any `demdex.net` cookie that Adobe sets in the response never reaches the visitor's browser.

When `thirdPartyCookiesEnabled` is `true`, which is the default:

* A visitor's first unauthenticated request, from [`getIdentity`](../getidentity.md), [`appendIdentityToUrl`](../appendidentitytourl.md), or [`setConsent`](../setconsent.md), goes to `adobedc.demdex.net` instead of to the [`edgeDomain`](edgedomain.md).
* The SDK asks the Edge Network for both the ECID and the CORE ID.
* You can request the `CORE` namespace with `getIdentity`. Because the request doesn't carry the visitor's `demdex.net` cookie, the CORE ID that the server receives might not match the one in the visitor's browser.

When `thirdPartyCookiesEnabled` is `false`:

* All unauthenticated requests go to the `edgeDomain`.
* The SDK asks the Edge Network for the ECID only.
* Requesting the `CORE` namespace with `getIdentity` rejects with an error.

This property doesn't affect where [`sendEvent`](../sendevent/overview.md) sends events. The SDK always sends events to the authenticated Edge Network Server API.

Unless you need the CORE ID, consider setting `thirdPartyCookiesEnabled` to `false`, so that all requests go to your configured `edgeDomain`.

## Code example

Set the `thirdPartyCookiesEnabled` boolean when you call `configure`. If you omit it, it defaults to `true`.

```js
await alloy.configure({
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  edgeCredentials: {
    clientId: process.env.ADOBE_CLIENT_ID,
    clientSecret: process.env.ADOBE_CLIENT_SECRET,
    scopes: process.env.ADOBE_SCOPES.split(",")
  },
  thirdPartyCookiesEnabled: false
});
```
