---
title: autoCollectPropositionInteractions
description: Automatically collect data when a link is clicked.
exl-id: c70db76a-3f2f-45a6-86ab-36efcb18d20f
---
# `autoCollectPropositionInteractions`

The `autoCollectPropositionInteractions` property is an optional setting that determines if the Web SDK automatically collects proposition interactions. The value is a map of decision providers, each with value that indicates how automatic proposition interactions should be handled.

When you enable automatic proposition interaction tracking, any clicks within a proposition element rendered to the DOM are automatically collected by the Web SDK. This collection includes any experiences automatically rendered to the DOM by the Web SDK and experiences rendered to the DOM using the [`applyPropositions`](../applypropositions.md) command.

If you omit this property when configuring the Web SDK, it defaults to `{"AJO": "always", "TGT": "never"}`. If you prefer not to automatically track proposition interactions, set the value to `{"AJO": "never", "TGT": "never"}`.

```javascript
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
  "autoCollectPropositionInteractions": {
    "AJO": "always",
    "TGT": "never"
  }
});
```

Supported properties in this object include:

| Property | Description |
| --- | --- |
| **`AJO`** | Adobe Journey Optimizer. |
| **`TGT`** | Adobe Target. |

Possible values for each property include:

| Value | Description |
| --- | --- |
| **`always`** | Always automatically collect `interact` events for any elements associated with a proposition. |
| **`never`** | Never automatically collect `interact` events for elements associated with a proposition. |
| **`decoratedElementsOnly`** | Automatically collect `interact` events for elements associated with a proposition if the element includes data attributes specifying a label or token. |

## Data attributes {#data-attributes}

You can use data attributes on elements to add specificity to an interaction. 

| Name | Data attribute | Description |
| --- | --- | --- |
| **[!UICONTROL Label]** | `data-aep-click-label` | When the label data attribute is present on a clicked element, it is included with the interaction details sent to the Edge Network. The Web SDK looks for a label data attribute beginning with the element clicked and walking up the DOM tree. The Web SDK uses the first label it finds. |
| **[!UICONTROL Token]** | `data-aep-click-token` | Use this token when leveraging decision policies in [Adobe Journey Optimizer code-based campaigns](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/code-based-experience/get-started-code-based). You can use the token to distinguish which decision policy item was clicked. When the token data attribute is present on a clicked element, it is included with the interaction details sent to the Edge Network. The Web SDK looks for a token data attribute beginning with the element clicked and walking up the DOM tree. The Web SDK uses the first token it finds. |
| **[!UICONTROL Interact ID]** | `data-aep-interact-id` | The Web SDK automatically adds this unique ID to container elements when rendering propositions. The Web SDK uses this ID to correlate DOM elements with propositions. As this is an ID required by the Web SDK, you should not alter it in any way. You can safely ignore it. |

## Example

```html
<div class="row movies" data-aep-interact-id="5">
  <div class="col-md-4 movie" data-aep-click-token="wlpk/z/qyDGoFGF1E47O0w">
    <img src="/img/alpha.jpg" class="poster" />
    <h2>Example Movie Alpha</h2>
    <p class="description"> A lighthearted story about exploration and friendship set on a distant world. Follow a curious rover who discovers that small actions can lead to big changes.</p>
    <p>
      <button class="btn btn-default" data-aep-click-label="view-movie-Example-Alpha">View details</button>
    </p>
  </div>
  <div class="col-md-4 movie" data-aep-click-token="6ZUrou9BVKIsINIAqxylzw">
    <img src="/img/bravo.jpg" class="poster" />
    <h2>Example Movie Bravo</h2>
    <p class="description">An uplifting tale of a determined chef who overcomes unlikely odds to create culinary masterpieces in a bustling city bistro.</p>
    <p>
      <button class="btn btn-default" data-aep-click-label="view-movie-Example-Bravo">View details</button>
    </p>
  </div>
  <div class="col-md-4 movie" data-aep-click-token="QuuXntMRGnCP/AsZHf4pnQ">
    <img src="/img/charlie.jpg" class="poster" />
    <h2>Example Movie Charlie</h2>
    <p class="description">A vibrant adventure following a young musician who journeys into a fantastical realm to find the true meaning of family and tradition.</p>
    <p>
      <button class="btn btn-default" data-aep-click-label="view-movie-Example-Charlie">View details</button>
    </p>
  </div>
</div>
```

### Using `autoCollectPropositionInteractions` with the `applyPropositions` command {#apply-propositions}

The [`applyPropositions`](../applypropositions.md) command is a convenient way to render propositions to the DOM. However, in the case of code-based campaigns with JSON, you can use this command to correlate an existing DOM element (or the one your application code rendered to the screen based on the JSON values) with a proposition.

This correlation activates automatic interaction tracking for that element and assigns that element the appropriate proposition. To achieve this, set the `actionType` to `track`.

```javascript
alloy("sendEvent", {
    renderDecisions: true,
}).then((result) => {
    const {
        propositions = []
    } = result;
    const proposition = propositions.find(
        (proposition) => proposition.scope === "web://example.com/#weather-widget"
    );

    if (proposition) {
        renderWeatherWidget(proposition); // custom code that renders the weather widget based on the code-based campaign JSON

        alloy("applyPropositions", {
            propositions: [proposition],
            metadata: {
                "web://example.com/#weather-widget": {
                    selector: "#weather-widget",
                    actionType: "track",
                },
            },
        });
    }
});
```

## Configure automatic proposition interactions for the Web SDK tag extension

The following two drop-down menus when configuring the Web SDK tag extension are the tag equivalent of this object:

* [[!UICONTROL Auto click collection for Adobe Journey Optimizer]](/help/tags/extensions/client/web-sdk/configure/personalization.md#auto-click-collection-for-adobe-journey-optimizer)
* [[!UICONTROL Auto click collection for Adobe Target]](/help/tags/extensions/client/web-sdk/configure/personalization.md#auto-click-collection-for-adobe-target)
