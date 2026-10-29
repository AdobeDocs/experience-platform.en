---
title: idMigrationEnabled (Server SDK)
description: Carry over visitor identities from the Adobe Visitor ID Service when you use the Server SDK.
badge: Alpha
---
# `idMigrationEnabled` (Server SDK)

>[!BEGINSHADEBOX]

*This page describes `idMigrationEnabled` in the Server SDK `configure` method. For the Web SDK, see [`idMigrationEnabled`](/help/collection/js/commands/configure/idmigrationenabled.md).*

>[!ENDSHADEBOX]

The `idMigrationEnabled` property lets the Server SDK reuse Experience Cloud IDs (ECIDs) that the legacy Adobe Visitor ID Service (`VisitorAPI.js`) assigned to your visitors. The Visitor ID Service stores the ECID in a cookie named `AMCV_<orgId>`. Reusing these IDs prevents a sharp increase in unique visitors when you move from the Visitor ID Service to the Web SDK or the Server SDK.

## How identity migration works on a server {#how-it-works}

The SDK reads and writes cookies through the cookie service that you pass to [`forRequest`](../forrequest.md). When `idMigrationEnabled` is `true`:

1. If the visitor has no `kndctr_<orgId>_identity` cookie, but has an `AMCV_<orgId>` cookie, the SDK reads the ECID from the `AMCV_` cookie and adds it to the event's `identityMap`. The Edge Network then continues to use that ECID for the visitor.
1. After the Edge Network returns the visitor's identity, the SDK writes it to both the `kndctr_<orgId>_identity` cookie and the `AMCV_<orgId>` cookie, so that pages that still use the Visitor ID Service recognize the same visitor.

Identity migration works only if your cookie service gives the SDK access to the visitor's real browser cookies, and only if the Visitor ID Service ran on the same domain with the same [`orgId`](orgid.md). The Server SDK can't read identities from the Visitor ID Service library itself, because that library runs only in browsers.

If your cookie service doesn't read the visitor's browser cookies, or your site never used the Visitor ID Service, identity migration has no effect.

## Code example

Set the `idMigrationEnabled` boolean when you call `configure`. If you omit it, it defaults to `true`. Set it to `false` to stop the SDK from reading and writing `AMCV_` cookies.

```js
await alloy.configure({
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  edgeCredentials: {
    clientId: process.env.ADOBE_CLIENT_ID,
    clientSecret: process.env.ADOBE_CLIENT_SECRET,
    scopes: process.env.ADOBE_SCOPES.split(",")
  },
  idMigrationEnabled: false
});
```
