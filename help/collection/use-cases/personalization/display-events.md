---
title: Manage display events in the Web SDK
description: Explains what display events are and how you can use them in the Web SDK.
exl-id: 7150ad6e-7693-4f4d-917e-8d08a39a0b41
keywords: personalization;display events;sendEvent;renderDecisions;applyPropositions;propositions;
---
# Manage display events in the Web SDK

Display events tell personalization or analytics services that a specific piece of personalized content was displayed to the user. Sending display events improves reporting accuracy by helping downstream systems distinguish between content that was *requested* and content that was *actually shown*.

## Send display events automatically

Automatic display events are typically the simplest option. They are sent immediately after Web SDK finishes rendering eligible content from the `sendEvent` response, which can improve reporting accuracy.

To send display events automatically, use a `sendEvent` call that sets `renderDecisions` to `true` and set `personalization.sendDisplayEvent` to `true` (or omit it, since `true` is the default):

```js
alloy("sendEvent", {
  renderDecisions: true,
  personalization: { }, // sendDisplayEvent defaults to true
  xdm: {
    web: {
      webPageDetails: {
        name: "home"
      }
    }
  }
});
```

>[!NOTE]
>
>Automatic display events depend on SDK-managed rendering. If you manually render content (including by using `applyPropositions`), you must send display events explicitly using `sendEvent`.

## Send display events in subsequent `sendEvent` calls

Including display events in a later `sendEvent` call is useful when you want to attach additional page load data that isn't available when requesting personalization. It is commonly used when implementing [Top and bottom page events](/help/collection/use-cases/personalization/top-bottom-page-events.md). Correctly implementing display events in this manner helps avoid issues with [Bounce rate](https://experienceleague.adobe.com/en/docs/analytics/components/metrics/bounce-rate) in Adobe Analytics.

1. On the initial `sendEvent` call (often at the top of the page), request and render content, but suppress automatic display events by setting `renderDecisions` to `true` and `personalization.sendDisplayEvent` to `false`:

   ```js
   alloy("sendEvent", {
     renderDecisions: true,
     personalization: { sendDisplayEvent: false },
     xdm: {
       web: {
         webPageDetails: {
            name: "home"
         }
       }
     }
   });
   ```

1. Later (often at the bottom of the page), call `sendEvent` with an XDM payload that includes display events for propositions that were rendered since the previous request by setting [`personalization.includeRenderedPropositions`](/help/collection/js/commands/sendevent/personalization.md) to `true`:
   
   ```js
   alloy("sendEvent", {
     personalization: { includeRenderedPropositions: true },
     xdm: {
       // Add any additional page load telemetry you want to send here
       web: {
         webPageDetails: {
           name: "home"
         }
       }
     }
   });
   ```

>[!NOTE]
>
>Only automatically rendered propositions that had display suppressed are included when using `includeRenderedPropositions`.

## Send display events for manually rendered propositions

If you render content yourself (either fully manual rendering or using `applyPropositions`), you must send display events explicitly using the `sendEvent` command. Call `sendEvent` with an XDM payload that includes the following properties:

* `_experience.decisioning.propositions` containing the rendered propositions' `id`, `scope`, and `scopeDetails`
* `_experience.decisioning.propositionEventType.display` set to `1`

The following two examples use this helper function to build the display event XDM payload:

```js
function buildDisplayEventXdm(renderedPropositions) {
  return {
    eventType: "decisioning.propositionDisplay",
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
  };
}
```

The following example uses manual rendering with display events:

```js
function renderExample(propositions) {
  // Your custom logic here. Return ONLY the propositions that were actually rendered.
  // For example: return [propositions[0]];
  return [];
}

alloy("sendEvent", {
  personalization: { decisionScopes: ["discount"] },
  xdm: { }
}).then(({ propositions = [] }) => {
  const renderedPropositions = renderExample(propositions);
  if (!renderedPropositions.length) { return; }
  return alloy("sendEvent", { xdm: buildDisplayEventXdm(renderedPropositions) });
});
```

The following example uses the `applyPropositions` command with display events. It chains `sendEvent`, `applyPropositions`, then another `sendEvent` together:

```js
alloy("sendEvent", {
  personalization: { decisionScopes: ["discount", "salutation"] },
  xdm: { }
}).then(({ propositions = [] }) => {
  return alloy("applyPropositions", {
    propositions,
    metadata: {
      salutation: { selector: "#salutation", actionType: "setHtml" },
      discount: { selector: "#daily-special", actionType: "replaceHtml" }
    }
  });
}).then(({ propositions: renderedPropositions = [] }) => {
  if (!renderedPropositions.length) { return; }
  return alloy("sendEvent", { xdm: buildDisplayEventXdm(renderedPropositions) });
});
```

## Common mistakes to avoid

* **Send display events before rendering finishes**: Send display events after auto-rendering completes, after `applyPropositions` resolves, or after your manual rendering logic completes.
* **Send display events for propositions that you didn't render**: Only include propositions that were actually displayed to the user.
* **Dropping `scopeDetails`**: Include `scopeDetails` from the proposition object when sending display events.
