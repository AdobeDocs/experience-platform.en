---
title: Automatically render DOM action propositions
description: Use Web SDK to automatically render eligible DOM action propositions and handle common SPA re-render scenarios.
keywords: personalization;renderDecisions;dom-action;sendEvent;applyPropositions;single page application;
---
# Render DOM action propositions automatically

Use this pattern when your personalization response includes proposition items with the schema:

**`https://ns.adobe.com/personalization/dom-action`**

These items typically include a selector and an action type (for example, `setHtml`) that the Web SDK can apply automatically when `renderDecisions` is enabled.

## 1. Manage flicker (optional)

If you need to prevent flicker while personalized content is applied, use the recommended flicker management approach for your implementation. See [Manage flicker](manage-flicker.md) for available options.

## 2. Request and render decisions noted for automatic rendering

Set `renderDecisions` to `true` when calling the `sendEvent` command. The `renderDecisions` property defaults to false when omitted.

```js
alloy("sendEvent", {
  renderDecisions: true,
  xdm: {
    web: {
      webPageDetails: {
        name: "home"
      }
    }
  }
});
```

Optionally, if you need to request specific placements, include `personalization.decisionScopes`:

```js
alloy("sendEvent", {
  renderDecisions: true,
  personalization: {
    decisionScopes: ["hero-banner", "recommendations"]
  },
  xdm: { }
});
```

See the [`personalization`](/help/collection/js/commands/sendevent/personalization.md) object in the [`sendEvent`](/help/collection/js/commands/sendevent/overview.md) command for more information.

## 3. Display events

If you set `renderDecisions` to `true` and either set `personalization.sendDisplayEvent` to `true` or omit it, the Web SDK sends display events immediately after personalization is rendered.

```js
alloy("sendEvent", {
  renderDecisions: true,
  personalization: {
    // sendDisplayEvent defaults to true when omitted
  },
  xdm: { }
});
```

See [Manage display events](display-events.md) for alternate options that meets your implementation's needs, such as when using [Top and bottom page events](top-bottom-page-events.md).

## 4. SPA view changes and re-rendering

For single-page applications, include a `viewName` on view-changing events.

```js
alloy("sendEvent", {
  renderDecisions: true,
  xdm: {
    web: {
      webPageDetails: {
        viewName: "cart"
      }
    }
  }
});
```

If your SPA re-renders UI for the same view without a new decision fetch, you can re-apply the previously returned propositions:

```js
let lastPropositions = [];

alloy("sendEvent", {
  renderDecisions: true,
  xdm: {
    web: { webPageDetails: { viewName: "cart" } }
  }
}).then(({ propositions = [] }) => {
  lastPropositions = propositions;
});

// Later, after a UI re-render:
alloy("applyPropositions", {
  propositions: lastPropositions
});
```

See [`applyPropositions`](/help/collection/js/commands/applypropositions.md) for more information.

>[!NOTE]
>
>The `applyPropositions` command does not automatically send display events. If you need to record "display" for re-render scenarios, see [Manage display events](display-events.md).
