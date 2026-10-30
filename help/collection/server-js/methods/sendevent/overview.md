---
title: sendEvent (Server SDK)
description: Send data to the Adobe Experience Platform Edge Network from your server.
badge: Alpha
---
# `sendEvent` (Server SDK)

>[!BEGINSHADEBOX]

*This page describes the Server SDK `sendEvent` method. For the Web SDK, see [`sendEvent`](/help/collection/js/commands/sendevent/overview.md).*

>[!ENDSHADEBOX]

The `sendEvent` method is the primary way to send data to Adobe from your server. Its result is also how you retrieve personalized content. Use the [`xdm`](xdm.md) object to send data that maps to your Adobe Experience Platform schema, and the [`data`](data.md) object to send other data.

Call `sendEvent` on the [`forRequest`](../forrequest.md) handle for the current visitor, after [`configure`](../configure/overview.md) resolves:

```js
const visitor = alloy.forRequest({ request: req });

const result = await visitor.sendEvent({
  type: "commerce.purchases",
  xdm: {
    identityMap: {
      Email: [{ id: "visitor@example.com", primary: true }]
    },
    commerce: {
      purchases: { value: 1 },
      order: {
        purchaseID: "a8g784hjq1mnp3",
        currencyCode: "USD",
        priceTotal: 999.98
      }
    }
  },
  data: {
    loyaltyTier: "gold"
  },
  personalization: {
    decisionScopes: ["order-confirmation-offer"]
  },
  edgeConfigOverrides: {
    com_adobe_analytics: {
      reportSuites: ["examplersid1"]
    }
  }
});
```

The SDK sends each event to the authenticated Edge Network Server API at `server.adobedc.net`. See [Authentication](../../authentication.md).

## Requirements {#requirements}

* **Primary identity**: Each event must include a primary identity in `xdm.identityMap`. If it doesn't, the Edge Network rejects the event. See [`xdm`](xdm.md#primary-identity).
* **Size**: The request that the SDK sends can be up to 64 KB. See [Guardrails](https://developer.adobe.com/data-collection-apis/docs/getting-started/guardrails) in the Edge Network API documentation.
* **Consent**: If the visitor has opted out, or [`defaultConsent`](../configure/defaultconsent.md) is `"out"` and the visitor hasn't opted in, `sendEvent` resolves with an empty object without sending anything.

## Options {#options}

| Option | Type | Description |
| --- | --- | --- |
| [`xdm`](xdm.md) | Object | Data that matches your XDM schema, including the event's identities. |
| [`data`](data.md) | Object | Data that doesn't match your XDM schema. |
| [`type`](eventtype.md) | String | The event type. A shortcut for `xdm.eventType`. |
| [`personalization`](personalization.md) | Object | The personalization decisions to request. |
| [`decisionScopes`](personalization.md#top-level-decision-scopes) | Array of strings | The decision scopes to request. An alternative to `personalization.decisionScopes`. |
| [`edgeConfigOverrides`](edgeconfigoverrides.md) | Object | Datastream overrides for this event only. |

If you pass an option that the SDK doesn't recognize, `sendEvent` rejects with an `Unknown field` error.

### Options that have no effect on a server {#no-effect}

The Server SDK accepts the following Web SDK options so that you can share event-building code with a browser implementation. However, they depend on a browser and have no effect on the server:

* `renderDecisions`: The SDK never renders content. It returns propositions in the result instead.
* `personalization.sendDisplayEvent`, `personalization.includeRenderedPropositions`, `personalization.defaultPersonalizationEnabled`, and `personalization.decisionContext`.
* `advertising`.

Don't set `documentUnloading` on a server. It doesn't apply outside a browser. For visitors who already have an identity, it makes the SDK send the event as an unauthenticated request to the [`edgeDomain`](../configure/edgedomain.md) instead of to the authenticated Server API. That endpoint doesn't return a response, so `sendEvent` doesn't return propositions.

The deprecated `datasetId` and `mergeId` options are still accepted. Instead of `datasetId`, use `com_adobe_experience_platform.datasets.event.datasetId` in [`edgeConfigOverrides`](edgeconfigoverrides.md).

## Result object {#result}

The `sendEvent` method returns a promise. See [Handle results](../overview.md#results). When the promise resolves, the result object can contain the following property:

* **`propositions`**: An array of personalization propositions that the Edge Network returned for the scopes and surfaces that you requested with [`personalization`](personalization.md). This property is present only when you request personalization. The SDK doesn't render propositions or mark them as rendered.

If you don't request personalization, or the event isn't sent because of consent or [`onBeforeEventSend`](../configure/onbeforeeventsend.md), the result is an empty object.

```js
const { propositions = [] } = await visitor.sendEvent({
  xdm: {
    eventType: "decisioning.propositionFetch",
    identityMap: {
      Email: [{ id: "visitor@example.com", primary: true }]
    }
  },
  personalization: {
    surfaces: ["web://example.com/home"]
  }
});
```

Unlike the Web SDK, the result never contains `inferences` or `destinations`.
