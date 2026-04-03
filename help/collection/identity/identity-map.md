---
title: Using identityMap in Data Collection
description: Learn how to construct and send identityMap payloads to identify known visitors across namespaces in your Web SDK implementation.
exl-id: 33b409cb-48f5-4e77-ba2f-7dfe0b2cb2a9
---
# Using identityMap in Data Collection

The `identityMap` payload object is how you tell the Edge Network who a visitor is beyond their device-level [ECID](./overview.md). When a visitor signs in, completes a purchase, or otherwise becomes known, you can send person-level identifiers (CRM ID, hashed email, loyalty ID, etc.) alongside the ECID. These person-level identifiers provide valuable information to downstream services so that they can:

* **Stitch activity to a person across devices and channels.** [Identity Service](/help/identity-service/home.md) links the identities you send into an [identity graph](/help/identity-service/features/identity-graph-viewer.md), connecting anonymous device-level behavior to a known person.
* **Build unified customer profiles.** [Real-Time Customer Profile](/help/profile/home.md) uses the primary identity that you set to anchor events and attributes to a single profile, enabling person-level segmentation and audience building.
* **Activate audiences on downstream destinations.** Many [Destinations](/help/destinations/home.md) require resolved person-level identities (hashed emails, phone numbers, etc.) to match your audiences to their user bases.
* **Orchestrate cross-channel journeys.** [Journey Optimizer](https://experienceleague.adobe.com/docs/journey-optimizer/using/ajo-home.html) uses resolved identities to trigger and personalize journeys across email, push, and in-app channels based on a visitor's authenticated behavior.

This page covers how to construct `identityMap` payloads, choose the right settings for each identity, and handle common implementation scenarios.

## Payload structure {#structure}

The `identityMap` is a JSON object where each top-level key is a namespace and the value is an array of identity descriptors. You can include one or more namespaces in a single payload, and each descriptor contains three fields: `id`, `authenticatedState`, and `primary`.

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

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | String | Yes | The identifier value (for example, `user@example.com` or `ABC123`). |
| `authenticatedState` | String | Yes | How confidently you know this identity belongs to the visitor. Valid values include `ambiguous`, `authenticated`, and `loggedOut`. |
| `primary` | Boolean | Yes | Whether this identity should be the primary identifier for the event. Exactly one identity across all namespaces must be marked `primary: true`. |

The sections below cover each part of the payload in detail.

### Namespace keys {#namespace-keys}

Each top-level key in `identityMap` is an [identity namespace](/help/identity-service/features/namespaces.md) — a string that classifies the type of identifier (for example, `CRMID`, `Email`, `Phone`, or `LoyaltyId`). Namespaces must exist in Identity Service before you reference them in a payload. You can include multiple namespace keys in the same event when you have more than one identifier for the visitor.

You do not need to include the ECID as a namespace key. The Edge Network automatically adds the ECID to the identity payload. If you do include the ECID explicitly, do not mark it as `primary` when a person-level identity is also present.

### `id` {#id}

The `id` field is the identifier string itself — the value that tells Experience Platform which specific person or device this identity represents. Each [identity namespace](/help/identity-service/features/namespaces.md) expects a specific value format, and sending a value in the wrong format creates a distinct identity that cannot be merged with the correctly formatted version, resulting in fragmented profiles.

Before you include a value in `identityMap`, prepare it according to the format that your target namespace expects:

| Common namespace types | How to prepare the value | Example |
| --- | --- | --- |
| **CRM / internal ID** | Use the exact identifier your system of record assigns. Keep the format consistent across all events (casing, leading zeros, prefixes). | `ABC-12345`, `00098765` |
| **Email (raw)** | Lowercase the full email address and trim leading and trailing whitespace. | `user@example.com` |
| **Email (hashed)** | Lowercase and trim the email address first, then hash with SHA-256. Send the resulting 64-character hex string. Do not add a salt unless your namespace definition requires one. | `a1b2c3d4e5f6a7b8c9...` |
| **Phone (E.164)** | Format the number in [E.164](https://en.wikipedia.org/wiki/E.164): a leading `+`, the country code, and the subscriber number with no spaces or punctuation. | `+15551234567` |
| **FPID** | Generate a [UUIDv4](https://datatracker.ietf.org/doc/html/rfc4122) string. See [first-party device IDs](./fpid.md) for generation requirements. | `123e4567-e89b-42d3-9456-426614174000` |

For the full list of standard namespaces and their definitions, see [Identity namespace overview](/help/identity-service/features/namespaces.md#standard).

>[!TIP]
>
>The `id` value is case-sensitive. `User@Example.com` and `user@example.com` are treated as two separate identities. Normalize casing before you send the value (usually by lowercasing email and trimming whitespace) to avoid creating duplicate identities in the graph.

#### Collecting `id` at runtime {#collect-id}

The identifier you need is rarely available directly on the page. Common collection strategies include:

* **Data layer**: Read the identifier from your site's data layer after the visitor signs in. This location is the most reliable approach because the data layer is populated by your application's backend and reflects the authenticated session state.
* **Auth token or session cookie**: Decode or look up the identifier from a JWT or session cookie that your authentication system sets. Validate that the token is still active before using the value.
* **Server-side enrichment**: Use [Data Prep for Data Collection](/help/datastreams/data-prep.md) or an [event forwarding rule](/help/tags/ui/event-forwarding/overview.md) to map or transform the identifier at the Edge before it reaches downstream services. This location is useful when the client only has an opaque session token that maps to an internal ID on the server side.

>[!TIP]
>
>If a given `id` value resolves to an empty string, `null`, or `undefined`, do not include the namespace in the `identityMap`. Sending an empty `id` creates a broken identity record. Guard your implementation with a check before building the payload.

### `authenticatedState` {#authenticated-state}

The `authenticatedState` field tells downstream services how much trust to place in a given identity. The following values are valid for this field:

| Value | When to use |
| --- | --- |
| **`authenticated`** | The visitor has actively proven their identity during the current session (for example, by signing in with credentials, completing MFA, or similar verification). |
| **`loggedOut`** | The visitor was previously authenticated but has since signed out. The identity is still associated with the device but the session is no longer active. |
| **`ambiguous`** | The identity cannot be confirmed as belonging to the current visitor. Use this value for device-level identifiers like FPIDs or any identifier where authentication has not happened yet. |

>[!TIP]
>
>The `authenticatedState` value affects how Adobe Experience Platform Identity Service builds and merges identity graphs. Sending `authenticated` for an identity that has not been verified can create incorrect cross-device links that are difficult to undo.

### `primary` {#primary-identity}

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

Use the [Identity map](/help/tags/extensions/client/web-sdk/data-element-types.md#identity-map) data element type to build your identity payload in the Tags UI:

1. Create a data element with the **[!UICONTROL Adobe Experience Platform Web SDK]** extension and the **[!UICONTROL Identity map]** data element type.
2. Add identities by specifying the namespace, the data element or value that resolves to the identifier, and the authenticated state.
3. Mark one identity as primary.
4. Reference this data element in your **[!UICONTROL Send event]** action under **[!UICONTROL Identity map]**.

>[!ENDTABS]

## Common scenarios {#common-scenarios}

+++**Login**

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

+++

+++**Logout**

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

+++

+++**Multiple namespaces**

You can send multiple identity namespaces in the same event. This scenario is common when a visitor is signed in and you have several identifiers available (for example, a CRM ID, hashed email, and loyalty ID). Include all known identifiers, mark only one as primary, and set the others to `primary: false`.

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
        "id": "a1b2c3d4e5f6...",
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

+++

+++**Anonymous visitors**

For anonymous visitors, you typically do not need to send any `identityMap` at all. The Edge Network automatically assigns an ECID and uses it as the primary identity. If you use [first-party device IDs](./fpid.md), the FPID is the only identity you need to include for anonymous visitors.

+++

## How identityMap affects the identity graph {#identity-graph}

Every `identityMap` payload that reaches Experience Platform is processed by [Identity Service](/help/identity-service/home.md), which links the identities you send into an [identity graph](/help/identity-service/features/identity-graph-viewer.md). Which namespaces you include, how you set `authenticatedState`, and which identity you mark as `primary`, directly shape how Identity Service builds and merges those graphs.

Key behaviors to be aware of:

* **Identities sent on the same event are linked together.** If you include a CRMID and an Email namespace on the same `sendEvent` call, Identity Service creates a link between those two identities. Spreading identifiers across separate events produces weaker links and can result in fragmented graphs.
* **The `primary` identity anchors the event in Real-Time Customer Profile.** Profile uses the primary identity to determine which profile the event belongs to. Marking the wrong identity as primary (for example, setting ECID as primary when a person-level ID is available) can cause events to be stored against device-level profiles rather than person-level profiles.
* **The `authenticatedState` influences graph confidence.** Sending `authenticated` for an identity that has not actually been verified can create incorrect cross-device links that are difficult to undo. Use `authenticated` only when the visitor has actively proven their identity during the current session.

If your implementation uses [identity graph linking rules](/help/identity-service/identity-graph-linking-rules/overview.md) (such as namespace priority or the identity optimization algorithm), review the [implementation guide](/help/identity-service/identity-graph-linking-rules/implementation-guide.md) to understand how those rules interact with the identities you send through `identityMap`.

>[!NOTE]
>
>The `identityMap` is only sent when the Web SDK makes a request to the Edge Network, which is gated by the visitor's consent state. If your implementation uses `defaultConsent: "pending"`, identities are not sent until consent is granted. See [Consent and identity](./consent.md) for details.
