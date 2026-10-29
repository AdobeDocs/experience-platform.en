---
title: datastreamId (Server SDK)
description: Determine which datastream the Server SDK sends data to.
badge: Alpha
---
# `datastreamId` (Server SDK)

>[!BEGINSHADEBOX]

*This page describes `datastreamId` in the Server SDK `configure` method. For the Web SDK, see [`datastreamId`](/help/collection/js/commands/configure/datastreamid.md).*

>[!ENDSHADEBOX]

The `datastreamId` property is a string that determines which [datastream](/help/datastreams/overview.md) in Adobe Experience Platform receives the data that the Server SDK sends. The datastream controls which Adobe services, such as Adobe Analytics, Adobe Target, or Experience Platform datasets, receive your events. **This property is required.**

To locate a datastream ID:

1. Log in to [Adobe Experience Cloud](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Datastreams]**.
1. Use the search field to locate the desired datastream, then copy the ID shown next to it. Alternatively, select the datastream name to see its ID in the right column.

If you call [`getIdentity`](../getidentity.md), [`appendIdentityToUrl`](../appendidentitytourl.md), or [`setConsent`](../setconsent.md), make sure that the datastream accepts unauthenticated requests. See [Set the datastream access type](../../authentication.md#datastream-access-type).

## Code example

Set the `datastreamId` string property when you call `configure`. If you omit it, `configure` rejects with an error.

```js
await alloy.configure({
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  edgeCredentials: {
    clientId: process.env.ADOBE_CLIENT_ID,
    clientSecret: process.env.ADOBE_CLIENT_SECRET,
    scopes: process.env.ADOBE_SCOPES.split(",")
  }
});
```

The SDK also accepts `edgeConfigId`, the former name of this property, for compatibility with older Web SDK configurations.

If you run more than one instance in the same process, each instance can use the same datastream or a different one.

## Send a single event to a different datastream

To send a specific event to a different datastream without changing your configuration, set `datastreamId` in the [`edgeConfigOverrides`](../sendevent/edgeconfigoverrides.md) object of `sendEvent`.
