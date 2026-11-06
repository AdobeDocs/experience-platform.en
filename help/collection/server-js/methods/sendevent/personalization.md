---
title: personalization (Server SDK)
description: Request personalization decisions from the Edge Network with the Server SDK.
badge: Alpha
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: e43347a8-f2c5-4aa4-8623-6f13875d7e3a
    internal-label: Target
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
feature_v2:
  - id: b7798bb6-f089-4907-8492-05fc80e10632
    internal-label: Server API
  - id: c93393a4-e558-47e1-992e-c91ed4d480ce
    internal-label: Implementation
  - id: a984631b-2bae-4860-9b15-69c41a799dcb
    internal-label: APIs and SDKs
  - id: d0a62d3c-b79e-47e4-929e-40ef3cffa037
    internal-label: Communication channels
subfeature_v2:
  - id: faec0389-089e-4333-98ae-139ed60832a2
    internal-label: Server side implementation
  - id: eb547372-2a95-4d13-b0fd-f720c9895880
    internal-label: Edge Decisioning
  - id: f88eedcc-cf3e-46b8-9e94-0293589325f3
    internal-label: Code based channel
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `personalization` (Server SDK)

>[!BEGINSHADEBOX]

*This page describes `personalization` in the Server SDK `sendEvent` method. For the Web SDK, see [`personalization`](/help/collection/js/commands/sendevent/personalization.md).*

>[!ENDSHADEBOX]

The `personalization` object of `sendEvent` requests personalization decisions, also called *propositions*, from Adobe Target, Adobe Journey Optimizer, and Offer Decisioning. The Server SDK returns the propositions in the result of `sendEvent`, so that your server can use them or pass them to the browser.

```js
const { propositions = [] } = await visitor.sendEvent({
  xdm: {
    eventType: "decisioning.propositionFetch",
    identityMap: {
      Email: [{ id: "visitor@example.com", primary: true }]
    }
  },
  personalization: {
    decisionScopes: ["hero-banner"],
    surfaces: ["web://example.com/home"]
  }
});
```

This option is available only when the instance includes the Personalization component, which [`createInstance`](../../install.md#create-instance) includes by default.

## `personalization.decisionScopes`

The `decisionScopes` property is an array of strings. Each item identifies a location, context, or placement where you want personalized content. In Adobe Target, each decision scope maps to an mbox. In Adobe Journey Optimizer and Offer Decisioning, each decision scope maps to a decision-based placement.

```js
personalization: {
  decisionScopes: ["hero-banner", "cart-offer"]
}
```

## `personalization.surfaces`

The `surfaces` property is an array of [surface URI](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/channels/code-based-experience/configure-code-based-channel/code-based-surface#surface-uri) strings. Each surface identifies a channel, page, or component for which you want Adobe Journey Optimizer code-based experiences, such as `web://example.com/home` or `web://example.com/home#hero`.

```js
personalization: {
  surfaces: ["web://example.com/home", "web://example.com/home#hero"]
}
```

In a browser, the Web SDK automatically requests the surface for the current page. A server has no current page, so the Server SDK requests only the surfaces that you list. Similarly, the SDK doesn't automatically request the page-wide decision scope that the Web SDK requests when it renders a page.

## Top-level `decisionScopes` {#top-level-decision-scopes}

You can also pass decision scopes in a `decisionScopes` array at the top level of the `sendEvent` options, outside the `personalization` object. The SDK combines both arrays and removes duplicates.

```js
await visitor.sendEvent({
  xdm: {
    eventType: "decisioning.propositionFetch",
    identityMap: {
      Email: [{ id: "visitor@example.com", primary: true }]
    }
  },
  decisionScopes: ["hero-banner"]
});
```

## Propositions in the result {#result}

When you request personalization, the result of `sendEvent` contains a `propositions` array. Each proposition contains an `id`, a `scope`, `scopeDetails`, and an array of `items`. Each item has a `schema` that describes its content, such as HTML, JSON, or DOM actions.

The SDK doesn't render propositions, and it doesn't record that they were displayed. Use them in one of the following ways:

* **Render them in the browser.** Include the propositions in the page that your server returns, then pass them to the Web SDK [`applyPropositions`](/help/collection/js/commands/applypropositions.md) command to render them. Then record which propositions were displayed with a display event. See [Hybrid personalization](/help/collection/use-cases/personalization/hybrid-server-personalization.md).
* **Render them on the server.** Use the content of each item to build your response. Then record which propositions you displayed by sending a display event:

```js
await visitor.sendEvent({
  xdm: {
    eventType: "decisioning.propositionDisplay",
    identityMap: {
      Email: [{ id: "visitor@example.com", primary: true }]
    },
    _experience: {
      decisioning: {
        propositions: renderedPropositions.map(({ id, scope, scopeDetails }) => ({
          id,
          scope,
          scopeDetails
        })),
        propositionEventType: { display: 1 }
      }
    }
  }
});
```

## Options that have no effect on a server {#no-effect}

The SDK accepts the following properties so that you can share code with a browser implementation, but ignores them:

* `personalization.sendDisplayEvent`
* `personalization.includeRenderedPropositions`
* `personalization.defaultPersonalizationEnabled`
* `personalization.decisionContext`

The `renderDecisions` option of `sendEvent` also has no effect, because the SDK never renders content.
