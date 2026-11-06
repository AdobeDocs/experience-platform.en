---
title: debugEnabled (Server SDK)
description: Turn on debug logging for the Server SDK when you configure it.
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
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `debugEnabled` (Server SDK)

>[!BEGINSHADEBOX]

*This page describes `debugEnabled` in the Server SDK `configure` method. For the Web SDK, see [`debugEnabled`](/help/collection/js/commands/configure/debugenabled.md).*

>[!ENDSHADEBOX]

The `debugEnabled` property turns debug logging on or off for an instance. When debugging is on, the SDK writes messages to your server's console. These messages include the computed configuration, each method that runs with its options and result, and warnings and errors.

See [Enable debug logging](/help/collection/debugging/logging.md#enable-logging) for the diagnostic workflow, output location, and runtime scope.

Each message starts with the instance name in square brackets, such as `[alloy]`. You can change the name with the `name` property of [`createInstance`](../../install.md#create-instance).

```text
[alloy] Instance configured. Computed configuration: { ... }
[alloy] Executing getLibraryInfo command. Options: {}
[alloy] getLibraryInfo command resolved. Result: { ... }
```

Debug messages can include event data and visitor identifiers. Turn on debugging in development environments, and avoid leaving it on in production. The SDK always replaces the client secret in [`edgeCredentials`](edgecredentials.md) with `[REDACTED]` in its logs.

## Code example

Set the `debugEnabled` boolean to `true` when you call `configure`. If you omit this property, it defaults to `false`.

```js
await alloy.configure({
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  edgeCredentials: {
    clientId: process.env.ADOBE_CLIENT_ID,
    clientSecret: process.env.ADOBE_CLIENT_SECRET,
    scopes: process.env.ADOBE_SCOPES.split(",")
  },
  debugEnabled: process.env.NODE_ENV !== "production"
});
```

Every [`forRequest`](../forrequest.md) handle uses the same `debugEnabled` value as the instance that created it. To turn debugging on or off while your server runs, use [`setDebug`](../setdebug.md).
