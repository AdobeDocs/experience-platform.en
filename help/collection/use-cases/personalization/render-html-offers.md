---
title: Render HTML offers without selectors
description: Render HTML proposition items that do not include selectors by providing metadata to applyPropositions, then record display events.
keywords: personalization;applyPropositions;metadata;actionType;decisionScopes;display events;
---
# Render HTML offers without selectors

Use this pattern when your propositions include HTML content, but you must provide where to apply it (selector), and how to apply it (action type). You can do this by calling [`applyPropositions`](/help/collection/js/commands/applypropositions.md) with a `metadata` object keyed by scope. Supported `actionType` values are `setHtml`, `replaceHtml`, and `appendHtml`.

## 1. Manage flicker (optional)

If you hide content while rendering, you are responsible for revealing it after rendering completes. See [Manage flicker](manage-flicker.md) for more information.

## 2. Request propositions for the scopes you intend to render

```js
alloy("sendEvent", {
  personalization: {
    decisionScopes: ["discount", "salutation"]
  },
  xdm: { }
}).then(({ propositions = [] }) => {
  // Render in the next step
});
```

See [`personalization.decisionScopes`](/help/collection/js/commands/sendevent/personalization.md) for more information.

## 3. Render offers with `applyPropositions` metadata

```js
alloy("sendEvent", {
  personalization: {
    decisionScopes: ["discount", "salutation"]
  },
  xdm: { }
}).then(({ propositions = [] }) => {
  return alloy("applyPropositions", {
    propositions,
    metadata: {
      salutation: {
        selector: "#salutation",
        actionType: "setHtml"
      },
      discount: {
        selector: "#daily-special",
        actionType: "replaceHtml"
      }
    }
  }).then(({ propositions: renderedPropositions = [] }) => {
    return { renderedPropositions };
  });
});
```

## 4. Record display events for rendered propositions

Display events are not automatically sent when calling `applyPropositions`. After rendering completes, use a `sendEvent` call that references the rendered propositions:

```js
function toDisplayPayload(propositions) {
  return propositions.map((p) => ({
    id: p.id,
    scope: p.scope,
    scopeDetails: p.scopeDetails
  }));
}

alloy("sendEvent", {
  personalization: {
    decisionScopes: ["discount", "salutation"]
  },
  xdm: { }
}).then(({ propositions = [] }) => {
  return alloy("applyPropositions", {
    propositions,
    metadata: {
      salutation: { selector: "#salutation", actionType: "setHtml" },
      discount: { selector: "#daily-special", actionType: "replaceHtml" }
    }
  }).then(({ propositions: renderedPropositions = [] }) => {
    return alloy("sendEvent", {
      xdm: {
        _experience: {
          decisioning: {
            propositions: toDisplayPayload(renderedPropositions),
            propositionEventType: { display: 1 }
          }
        }
      }
    });
  });
});
```

See [Manage display events](display-events.md) for more information.

>[!TIP]
>
>If you use [Top and bottom page events](top-bottom-page-events.md), this "record display" call is commonly implemented in the bottom `sendEvent` call.

## 5. Re-rendering

If your implementation requires a re-rendering later (such as in single-page applications), call `applyPropositions` again with the same propositions and metadata:

```js
alloy("applyPropositions", {
  propositions,
  metadata: {
    discount: { selector: "#daily-special", actionType: "replaceHtml" }
  }
});
```

If you need to record a display event for that re-render, see [Manage display events](display-events.md).
