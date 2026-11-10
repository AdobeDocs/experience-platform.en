---
title: Configure the Server SDK
description: Use the configure method to set required settings for the Server SDK.
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
# Configure the Server SDK

>[!BEGINSHADEBOX]

*This page describes how to configure the Server SDK. For the Web SDK, see [Configure the Web SDK](/help/collection/js/commands/configure/overview.md).*

>[!ENDSHADEBOX]

You configure the Server SDK with the **`configure`** method. Call it once on each instance, when your server starts and before you call [`forRequest`](../forrequest.md) or any other method. Every [`forRequest`](../forrequest.md) handle uses the configuration of the instance that created it.

**The [`datastreamId`](datastreamid.md), [`orgId`](orgid.md), and [`edgeCredentials`](edgecredentials.md) properties are required.** All other properties are optional. The following example shows a configuration object that uses every available property:

```js
import { createInstance } from "@adobe/alloy-node";

const alloy = createInstance();

await alloy.configure({
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  edgeCredentials: {
    clientId: process.env.ADOBE_CLIENT_ID,
    clientSecret: process.env.ADOBE_CLIENT_SECRET,
    scopes: process.env.ADOBE_SCOPES.split(",")
  },
  debugEnabled: false,
  defaultConsent: "in",
  edgeBasePath: "ee",
  edgeConfigOverrides: {
    com_adobe_target: {
      propertyToken: "01dbc634-07c1-d8f9-ca69-b489a5ac5e94"
    }
  },
  edgeDomain: "data.example.com",
  idMigrationEnabled: false,
  onBeforeEventSend: (content) => {
    content.xdm.application ??= {};
    content.xdm.application.name = "Example storefront";
  },
  thirdPartyCookiesEnabled: false
});
```

## Configuration properties {#properties}

| Property | Type | Required | Default |
| --- | --- | --- | --- |
| [`datastreamId`](datastreamid.md) | String | Yes | None |
| [`orgId`](orgid.md) | String | Yes | None |
| [`edgeCredentials`](edgecredentials.md) | Object | Yes | None |
| [`debugEnabled`](debugenabled.md) | Boolean | No | `false` |
| [`defaultConsent`](defaultconsent.md) | String | No | `"in"` |
| [`edgeBasePath`](edgebasepath.md) | String | No | `"ee"` |
| [`edgeConfigOverrides`](edgeconfigoverrides.md) | Object | No | None |
| [`edgeDomain`](edgedomain.md) | String | No | `"edge.adobedc.net"` |
| [`idMigrationEnabled`](idmigrationenabled.md) | Boolean | No | `true` |
| [`onBeforeEventSend`](onbeforeeventsend.md) | Function | No | None |
| [`thirdPartyCookiesEnabled`](thirdpartycookiesenabled.md) | Boolean | No | `true` |

The `defaultConsent` property is available only when the instance includes the Consent component, which `createInstance` includes by default. See [Create a custom instance](../../install.md#custom-instance).

## Options that the Server SDK doesn't support {#unsupported}

The Web SDK has configuration options for features that depend on a browser, such as link click collection, rendering personalized content, and push notifications. The Server SDK doesn't accept these options. If you include one, `configure` rejects with an `Unknown field` error that names the option.

The following Web SDK options are not available: `autoCollectPropositionInteractions`, `clickCollection`, `clickCollectionEnabled`, `context`, `conversation`, `downloadLinkQualifier`, `onBeforeLinkClickSend`, `personalizationStorageEnabled`, `prehidingStyle`, `pushNotifications`, `streamingMedia`, and `targetMigrationEnabled`.

## Result and errors {#result}

The `configure` method returns a promise that resolves with an empty object when configuration succeeds. It rejects in the following cases:

* `edgeCredentials` is missing, or one of its required properties is missing.
* `defaultConsent` is set to `"pending"`. See [`defaultConsent`](defaultconsent.md).
* A property has an invalid value or isn't recognized.
* `configure` was already called successfully on the same instance. Each instance can be configured only once.

If `configure` rejects, the instance stays unconfigured, and [`forRequest`](../forrequest.md) throws an error until a call to `configure` succeeds.
