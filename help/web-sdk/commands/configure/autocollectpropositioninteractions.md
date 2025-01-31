---
title: autoCollectPropositionInteractions
description: Learn how to configure Experience Platform Web SDK to automatically collect link data.
exl-id: c70db76a-3f2f-45a6-86ab-36efcb18d20f
---
# `autoCollectPropositionInteractions`

The `autoCollectPropositionInteractions` property is an optional setting that determines if the Web SDK should automatically collect proposition interactions.

The value is a map of decision providers, each with value that indicates how automatic proposition interactions should be handled.

## Supported values {#supported-values}

By default, automatic proposition interactions are _always_ collected for Adobe Journey Optimizer (`AJO`), and _never_ collected for Adobe Target (`TGT`).

The default value of `autoTrackPropositionInteractions` is shown below.

```json
{
  "AJO": "always",
  "TGT": "never"
}
```

Refer to the table below for the supported configuration values for each decision provider.

| Value | Description |
| --- | --- |
| `always` | [!DNL Web SDK] will always automatically collect `interact` events for any elements associated with a proposition. |
| `never` | [!DNL Web SDK] will never automatically collect `interact` events for elements associated with a proposition. |
| `decoratedElementsOnly` | [!DNL Web SDK] will automatically collect `interact` events for elements associated with a proposition, but only if the element includes data attributes specifying a label or token. |

## Automatic proposition interaction tracking {#logic}

When you enable automatic proposition interaction tracking, any clicks within a proposition element rendered to the DOM will be automatically collected by the [!DNL Web SDK]. This includes any experiences automatically rendered to the DOM by [!DNL Web SDK] and experiences rendered to the DOM using the [`applyPropositions`](../applypropositions.md) command.

### Data attributes {#data-attributes}

You can use data attributes on elements to add specificity to an interaction. 

| Name | Data attribute | Description |
| --- | --- | --- |
| [!DNL Label] | `data-aep-click-label` | When the label data attribute is present on a clicked element, it is included with the interaction details sent to the [!DNL Edge Network]. The [!DNL Web SDK] looks for a label data attribute beginning with the element clicked and walking up the DOM tree. The [!DNL Web SDK] uses the first label it finds. |
| [!DNL Token] | `data-aep-click-token` | Use this token when leveraging decision policies in [Adobe Journey Optimizer code-based campaigns](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/code-based-experience/get-started-code-based). You can use the token to distinguish which decision policy item was clicked. When the token data attribute is present on a clicked element, it is included with the interaction details sent to the Edge Network. The [!DNL Web SDK] looks for a token data attribute beginning with the element clicked and walking up the DOM tree. The [!DNL Web SDK] uses the first token it finds. |
| [!DNL Interact ID] | `data-aep-interact-id` | The [!DNL Web SDK] automatically adds this unique ID to container elements when rendering propositions. The Web SDK uses this ID to correlate [!DNL DOM] elements with propositions. As this is an ID required by the [!DNL Web SDK], you should not alter it in any way. You can safely ignore it. |

**Example**

Refer to the code snippet below to see an example of using data attributes.

```html
<div class="row movies" data-aep-interact-id="5">
  <div class="col-md-4 movie" data-aep-click-token="wlpk/z/qyDGoFGF1E47O0w">
    <img src="/img/walle.jpg" class="poster" />
    <h2>WALL·E</h2>
    <p class="description"> In a distant, but not so unrealistic, future where mankind has abandoned earth because it has become covered with trash from products sold by the powerful multi-national Buy N Large corporation, WALL-E, a garbage collecting robot has been left to clean up the mess. </p>
    <p>
      <button class="btn btn-default" data-aep-click-label="view-movie-WALL·E"> View details >> </button>
    </p>
  </div>
  <div class="col-md-4 movie" data-aep-click-token="6ZUrou9BVKIsINIAqxylzw">
    <img src="/img/ratatouille.jpg" class="poster" />
    <h2>Ratatouille</h2>
    <p class="description"> A rat named Remy dreams of becoming a great French chef despite his family's wishes and the obvious problem of being a rat in a decidedly rodent-phobic profession. When fate places Remy in the sewers of Paris, he finds himself ideally situated beneath a restaurant made famous by his culinary hero, Auguste Gusteau. </p>
    <p>
      <button class="btn btn-default" data-aep-click-label="view-movie-Ratatouille"> View details >> </button>
    </p>
  </div>
  <div class="col-md-4 movie" data-aep-click-token="QuuXntMRGnCP/AsZHf4pnQ">
    <img src="/img/coco.jpg" class="poster" />
    <h2>Coco</h2>
    <p class="description"> Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. </p>
    <p>
      <button class="btn btn-default" data-aep-click-label="view-movie-Coco"> View details >> </button>
    </p>
  </div>
</div>
```

### The `applyPropositions` command {#apply-propositions}

Refer to the [`applyPropositions`](../applypropositions.md) documentation to learn how this command works.

The `applyPropositions` command is a convenient way to render propositions to the [!DNL DOM]. However, in the case of code-based campaigns with `JSON`, you can use this command to correlate an existing [!DNL DOM] element (or the one your application code rendered to the screen based on the `JSON` values) with a proposition.

This correlation activates automatic interaction tracking for that element and assigns that element the appropriate proposition. To achieve this, set the `actionType` to `track`.

**Example**

```javascript
alloy("sendEvent", {
    renderDecisions: true,
}).then((result) => {
    const {
        propositions = []
    } = result;
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
1. Navigate to **Data Collection** > **Tags**.
1. Select the desire tag property.
1. Navigate to **Extensions**, then select **Configure** on the Adobe Experience Platform Web SDK card.
1. Scroll down to the **[!UICONTROL Data Collection]** section, then select the checkbox **Enable propositions and interaction link tracking**.
1. Select **Save**, then publish your changes.

## Enable automatic propositions and interactions link tracking through the Web SDK JavaScript library {#library}

Proposition tracking is enabled by default in [!DNL Web SDK]. However, you can configure it further using the `autoCollectPropositionInteractions` value when running the [`configure`](../configure/overview.md) command.

If you omit this property when configuring the Web SDK, it defaults to `{"AJO": "always", "TGT": "never"}`. If you prefer not to automatically track proposition interactions, set the value to `{"AJO": "never", "TGT": "never"}`.

```javascript
alloy("configure", {
   "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
   "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
   "autoCollectPropositionInteractions": {"AJO": "always", "TGT": "never"}
});
```
