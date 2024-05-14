---
title: autoTrackPropositionInteractionsEnabled
description: Learn how to configure Experience Platform Web SDK to automatically collect link data.
---

# `autoTrackPropositionInteractionsEnabled`

The `autoTrackPropositionInteractionsEnabled` property is an optional configuration option that determines if the Web SDK automatically collects proposition interactions. The value is a map of decision providers, each with value that indicates how automatic proposition interactions should be handled.

By default, automatic proposition interactions are always collected for Adobe Journey Optimizer (`AJO`), and never collected for Target (`TGT`).  The default value of `autoTrackPropositionInteractions` is:

```json
{
  "AJO": "always",
  "TGT": "never"
}
```

Possible configuration values for a decision provider are:

| Value                   | Description of behavior                                      |
| ----------------------- | ------------------------------------------------------------ |
| `always`                | Web SDK will always automatically collect `interact` events for any elements associated with a proposition. |
| `never`                 | Web SDK will never automatically collect `interact` events for elements associated with a proposition. |
| `decoratedElementsOnly` | Web SDK will automatically collect `interact` events for elements associated with a proposition but ONLY if the element has also have been "decorated" with data attributes specifying a label or token. |

## Automatic proposition interaction tracking {#logic}

When enabled, any clicks within a proposition element rendered to the DOM will be automatically collected.  This includes any experiences automatically rendered to the DOM by Web SDK and experiences rendered to the DOM using the `applyPropositions` command.

### Data attributes

Data attributes can be used on elements to add specificity to an interaction.  

| Name        | Data Attribute         | Detail                                                       |
| ----------- | ---------------------- | ------------------------------------------------------------ |
| Label       | `data-aep-click-label` | When the label data attribute is present on a clicked element, it is included with the interaction details sent to experience edge. The Web SDK looks for a label data-attribute beginning with the element clicked and walking up the DOM tree.  The first label found will be used. |
| Token       | `data-aep-click-token` | This token is useful when leveraging decision policies in AJO code based campaigns.  The token can be used to distinguish which decision policy item was clicked.  When the token data attribute is present on a clicked element, it is included with the interaction details sent to experience edge. The Web SDK looks for a token data-attribute beginning with the element clicked and walking up the DOM tree.  The first token found will be used. |
| Interact ID | `data-aep-interact-id` | This data attribute is a unique ID automatically added to container elements by Web SDK when rendering propositions. It is an internal convention the Web SDK uses to correlate DOM elements with propositions.  ⚠️**This data attribute is added by the Web SDK and should not be tampered with.  You can safely ignore it. ** |

Example usage of data attributes:

```html
<div class="row movies" data-aep-interact-id="5">
  <div class="col-md-4 movie" data-aep-click-token="wlpk/z/qyDGoFGF1E47O0w">
    <img src="/img/walle.jpg" class="poster" />
    <h2>WALL·E</h2>
    <p class="description">
      In a distant, but not so unrealistic, future where mankind has abandoned
      earth because it has become covered with trash from products sold by the
      powerful multi-national Buy N Large corporation, WALL-E, a garbage
      collecting robot has been left to clean up the mess.
    </p>
    <p>
      <button class="btn btn-default" data-aep-click-label="view-movie-WALL·E">
        View details »
      </button>
    </p>
  </div>

  <div class="col-md-4 movie" data-aep-click-token="6ZUrou9BVKIsINIAqxylzw">
    <img src="/img/ratatouille.jpg" class="poster" />
    <h2>Ratatouille</h2>
    <p class="description">
      A rat named Remy dreams of becoming a great French chef despite his
      family's wishes and the obvious problem of being a rat in a decidedly
      rodent-phobic profession. When fate places Remy in the sewers of Paris, he
      finds himself ideally situated beneath a restaurant made famous by his
      culinary hero, Auguste Gusteau.
    </p>
    <p>
      <button
        class="btn btn-default"
        data-aep-click-label="view-movie-Ratatouille"
      >
        View details »
      </button>
    </p>
  </div>

  <div class="col-md-4 movie" data-aep-click-token="QuuXntMRGnCP/AsZHf4pnQ">
    <img src="/img/coco.jpg" class="poster" />
    <h2>Coco</h2>
    <p class="description">
      Despite his family's baffling generations-old ban on music, Miguel dreams
      of becoming an accomplished musician like his idol, Ernesto de la Cruz.
      Desperate to prove his talent, Miguel finds himself in the stunning and
      colorful Land of the Dead following a mysterious chain of events.
    </p>
    <p>
      <button class="btn btn-default" data-aep-click-label="view-movie-Coco">
        View details »
      </button>
    </p>
  </div>
</div>

```

### applyPropositions command 

Historically the `applyPropositions` command has been used as a convenient way to render propositions to the DOM.  But in the case of code-based campaigns with `JSON`, it can also be used to correlate an existing DOM element (or one your application code rendered to the screen based on the JSON values) with a proposition.  Doing so activates automatic interaction tracking for that element and assigns that element the appropriate proposition.  It works following the same convention as rendering other propositions, just set the `actionType` to `track`.

Example usage:

```javascript
alloy("sendEvent", {
  renderDecisions: true,
}).then((result) => {
  const { propositions = [] } = result;
  const proposition = propositions.find(
    (proposition) => proposition.scope === "web://mywebsite.com/#weather-widget"
  );

  if (proposition) {
    renderWeatherWidget(proposition); // custom code that renders the weather widget based on the code-based campaign JSON

    alloy("applyPropositions", {
      propositions: [proposition],
      metadata: {
        "web://mywebsite.com/#weather-widget": {
          selector: "#weather-widget",
          actionType: "track",
        },
      },
    });
  }
});
```

## Enable automatic propositions and interactions click tracking through the Web SDK tag extension {#tag-extension}

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credential.
2. Navigate to **Data Collection** > **Tags**.
3. Select the desire tag property.
4. Navigate to **Extensions**, then select **Configure** on the Adobe Experience Platform Web SDK card.
5. Scroll down to the **[!UICONTROL Data Collection]** section, then select the checkbox **Enable propositions and interaction link tracking**.
6. Select **Save**, then publish your changes.

## Enable automatic propositions and interactions link tracking through the Web SDK JavaScript library {#library}

Proposition tracking is enabled by default.  But it can be further configured using the `autoTrackPropositionInteractionsEnabled` value when running the `configure` command. If you omit this property when configuring the Web SDK, it defaults to `{"AJO": "always", "TGT": "never"}`. Set the value to `{"AJO": "never", "TGT": "never"}` if you prefer not to automatically track proposition interactions.

```javascript
alloy("configure", {
   "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
   "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
   "autoTrackPropositionInteractionsEnabled": {"AJO": "always", "TGT": "never"}
});
```
