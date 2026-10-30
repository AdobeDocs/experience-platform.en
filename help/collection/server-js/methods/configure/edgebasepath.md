---
title: edgeBasePath (Server SDK)
description: Change the base path of the URLs that the Server SDK sends data to.
badge: Alpha
---
# `edgeBasePath` (Server SDK)

>[!BEGINSHADEBOX]

*This page describes `edgeBasePath` in the Server SDK `configure` method. For the Web SDK, see [`edgeBasePath`](/help/collection/js/commands/configure/edgebasepath.md).*

>[!ENDSHADEBOX]

The `edgeBasePath` property changes the first segment of the path in every URL that the Server SDK sends requests to. It applies to both authenticated requests sent to `server.adobedc.net` and unauthenticated requests sent to the [`edgeDomain`](edgedomain.md). For example, with the default value, `sendEvent` sends events to `https://server.adobedc.net/ee/v2/interact`.

Adobe might ask you to change this property if you take part in an alpha or beta program for data collection. Most organizations don't need to set it.

## Code example

Set the `edgeBasePath` string property when you call `configure`. If you omit it, it defaults to `"ee"`. Adobe recommends omitting this property from most configurations.

```js
await alloy.configure({
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  edgeCredentials: {
    clientId: process.env.ADOBE_CLIENT_ID,
    clientSecret: process.env.ADOBE_CLIENT_SECRET,
    scopes: process.env.ADOBE_SCOPES.split(",")
  },
  edgeBasePath: "ee"
});
```
