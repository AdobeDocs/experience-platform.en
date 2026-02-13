---
title: Manually render propositions
description: Render proposition content using your own UI logic (HTML, JSON, or custom schemas), then record display events.
keywords: personalization;propositions;manual rendering;sendEvent;decisionScopes;display events;
---
# Manually render propositions

Use this pattern when you need full control over how proposition items are applied. For example, you are composing a complex UI from JSON content, or you want to apply custom business rules before rendering.

## 1. Request propositions

```js
alloy("sendEvent", {
  personalization: {
    decisionScopes: ["salutation", "discount"]
  },
  xdm: { }
}).then(({ propositions = [] }) => {
  // Render in the next step
});
```

See the [`personalization`](/help/collection/js/commands/sendevent/personalization.md) object in the [`sendEvent`](/help/collection/js/commands/sendevent/overview.md) command for more information.

## 2. Render proposition items (example)

When manually rendering propositions, they can take many different forms or shapes. The following is a minimal example that finds a proposition by scope, then applies the first HTML content item that it finds.

```js
function findPropositionByScope(propositions, scope) {
  return propositions.find((p) => p.scope === scope);
}

function renderHtmlInto(selector, html) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = html;
}

alloy("sendEvent", {
  personalization: { decisionScopes: ["discount"] },
  xdm: { }
}).then(({ propositions = [] }) => {
  const discount = findPropositionByScope(propositions, "discount");
  if (!discount) return { propositions, rendered: [] };

  const htmlItem = discount.items?.find(
    (i) => i.schema === "https://ns.adobe.com/personalization/html-content-item"
  );

  if (!htmlItem) return { propositions, rendered: [] };

  renderHtmlInto("#daily-special", htmlItem.data.content);
  return { propositions, rendered: [discount] };
});
```

>[!IMPORTANT]
>
>If you render HTML, ensure that it is safe for your environment. Treat content rendering as a security boundary (sanitization, trusted sources, and CSP considerations).

## 3. Record display events for what you rendered

For manually rendered propositions, display events are recorded through `sendEvent` calls that reference the rendered propositions.

```js
function toDisplayPayload(propositions) {
  return propositions.map((p) => ({
    id: p.id,
    scope: p.scope,
    scopeDetails: p.scopeDetails
  }));
}

// Example: record display for the propositions you actually rendered.
alloy("sendEvent", {
  xdm: {
    _experience: {
      decisioning: {
        propositions: toDisplayPayload(renderedPropositions),
        propositionEventType: { display: 1 }
      }
    }
  }
});
```

See [Manage display events](display-events.md) for more information.

## 4. Re-rendering

When UI changes require a re-render, rerun your manual rendering logic against the proposition data that you cached (or fetch again, if needed). If you need to record a display for re-render scenarios, see [Manage display events](display-events.md).
