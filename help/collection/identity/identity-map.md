---
title: Using identityMap in Data Collection
description: Learn how to construct and send identityMap payloads to identify known visitors across namespaces in your Web SDK implementation.
---
# Using identityMap in Data Collection

The `identityMap` is how you tell the Edge Network who a visitor is beyond their device-level [ECID](./overview.md). When a visitor signs in, completes a purchase, or otherwise becomes known, you can send person-level identifiers — such as a CRM ID, hashed email, or loyalty ID — alongside the ECID so that downstream services can stitch activity to a real person.

This page covers how to construct `identityMap` payloads, choose the right settings for each identity, and handle common scenarios like login, logout, and multi-namespace implementations.

## identityMap structure {#structure}

The `identityMap` is a JSON object where each key is an [identity namespace](https://experienceleague.adobe.com/docs/experience-platform/identity/features/namespaces.html) and the value is an array of identity descriptors. Each descriptor contains the following fields:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | String | Yes | The identifier value (for example, `user@example.com` or `ABC123`). |
| `authenticatedState` | String | Yes | How confidently you know this identity belongs to the visitor. Accepted values: `ambiguous`, `authenticated`, `loggedOut`. |
| `primary` | Boolean | Yes | Whether this identity should be the primary identifier for the event. Exactly one identity across all namespaces must be marked `primary: true`. |

```json
{
  "identityMap": {
    "CRMID": [
      {
        "id": "abc-123-xyz",
        "authenticatedState": "authenticated",
        "primary": true
      }
    ]
  }
}
```

## Setting authenticatedState {#authenticated-state}

The `authenticatedState` field tells downstream services how much trust to place in a given identity. Use the following values:

| Value | When to use |
| --- | --- |
| `authenticated` | The visitor has actively proven their identity during the current session (for example, by signing in with credentials, completing MFA, or similar verification). |
| `loggedOut` | The visitor was previously authenticated but has since signed out. The identity is still associated with the device but the session is no longer active. |
| `ambiguous` | The identity cannot be confirmed as belonging to the current visitor. Use this for device-level identifiers like FPIDs or any identifier where authentication has not occurred. |

>[!IMPORTANT]
>
>The `authenticatedState` value affects how Adobe Experience Platform Identity Service builds and merges identity graphs. Sending `authenticated` for an identity that has not been verified can create incorrect cross-device links that are difficult to undo.

## Choosing the primary identity {#primary-identity}

Every `identityMap` payload must have exactly one identity marked as `primary: true`. The primary identity determines which identity is used as the anchor for the event in Experience Platform.

Follow these guidelines when setting the primary identity:

* **When a person-level identity is available** (the visitor is signed in), mark the person-level namespace as primary and the ECID as non-primary. This tells Experience Platform to anchor the event to the person rather than the device.
* **When only device-level identities are available** (the visitor is anonymous), the ECID is automatically used as the primary identity. You do not need to include the ECID in your `identityMap` — the Edge Network adds it automatically.

```json
{
  "identityMap": {
    "CRMID": [
      {
        "id": "abc-123-xyz",
        "authenticatedState": "authenticated",
        "primary": true
      }
    ],
    "Email": [
      {
        "id": "user@example.com",
        "authenticatedState": "authenticated",
        "primary": false
      }
    ]
  }
}
```

>[!NOTE]
>
>You do not need to include the ECID in your `identityMap`. The Edge Network automatically adds the ECID to the identity payload. If you do include the ECID explicitly, do not mark it as `primary` when a person-level identity is also present.

## Sending identityMap in your implementation {#send-identity}

>[!BEGINTABS]

>[!TAB JavaScript library]

Pass the `identityMap` in the `xdm` object of a [`sendEvent`](/help/collection/js/commands/sendevent/overview.md) call:

```js
alloy("sendEvent", {
  xdm: {
    identityMap: {
      CRMID: [
        {
          id: "abc-123-xyz",
          authenticatedState: "authenticated",
          primary: true
        }
      ]
    },
    eventType: "web.webpagedetails.pageViews"
  }
});
```

>[!TAB Web SDK tag extension]

Use the [**Identity map**](/help/tags/extensions/client/web-sdk/data-element-types.md#identity-map) data element type to build your identity payload in the Tags UI:

1. Create a data element with the **[!UICONTROL Adobe Experience Platform Web SDK]** extension and the **[!UICONTROL Identity map]** data element type.
2. Add identities by specifying the namespace, the data element or value that resolves to the identifier, and the authenticated state.
3. Mark one identity as primary.
4. Reference this data element in your **[!UICONTROL Send event]** action under **[!UICONTROL Identity map]**.

>[!ENDTABS]

## Common scenarios {#common-scenarios}

### Login {#login}

When a visitor signs in, send their person-level identifier with `authenticatedState: "authenticated"` and `primary: true`. Include this identity on the first event after authentication and on all subsequent events in the session.

```json
{
  "identityMap": {
    "CRMID": [
      {
        "id": "abc-123-xyz",
        "authenticatedState": "authenticated",
        "primary": true
      }
    ]
  }
}
```

### Logout {#logout}

When a visitor signs out, update `authenticatedState` to `loggedOut` while keeping the same identifier. This preserves the association between the device and the person while signaling that the session is no longer active.

```json
{
  "identityMap": {
    "CRMID": [
      {
        "id": "abc-123-xyz",
        "authenticatedState": "loggedOut",
        "primary": false
      }
    ]
  }
}
```

After logout, the ECID returns to being the effective primary identity (the Edge Network applies it automatically). Do not mark a different person-level identity as primary unless the visitor signs in with a different account.

>[!IMPORTANT]
>
>Do not stop sending the identifier entirely after logout. Switching from `authenticated` to `loggedOut` tells downstream services that the session ended. Omitting the identifier entirely leaves a gap in the identity graph that can cause fragmented profiles.

### Multiple namespaces {#multiple-namespaces}

You can send multiple identity namespaces in the same event. This is common when a visitor is signed in and you have several identifiers available (for example, a CRM ID, hashed email, and loyalty ID). Include all known identifiers, mark only one as primary, and set the others to `primary: false`.

```json
{
  "identityMap": {
    "CRMID": [
      {
        "id": "abc-123-xyz",
        "authenticatedState": "authenticated",
        "primary": true
      }
    ],
    "Email_LC_SHA256": [
      {
        "id": "a]1b2c3d4e5f6...",
        "authenticatedState": "authenticated",
        "primary": false
      }
    ],
    "LoyaltyId": [
      {
        "id": "LOY-98765",
        "authenticatedState": "authenticated",
        "primary": false
      }
    ]
  }
}
```

>[!TIP]
>
>Sending multiple namespaces with the same `authenticatedState` on the same event gives the Identity Service the strongest signal for linking those identities. Include all available identifiers at the point of authentication rather than spreading them across separate events.

### Anonymous visitors {#anonymous}

For anonymous visitors, you typically do not need to send any `identityMap` at all. The Edge Network automatically assigns an ECID and uses it as the primary identity. If you use [first-party device IDs](./first-party-device-ids.md), the FPID is the only identity you need to include for anonymous visitors.
