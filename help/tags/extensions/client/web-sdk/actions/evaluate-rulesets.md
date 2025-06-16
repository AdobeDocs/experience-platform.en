## Evaluate rulesets {#evaluate-rulesets}

This action type manually triggers ruleset evaluation. Rulesets are returned by Adobe Journey Optimizer to support features like in-browser messages.

![Image of the Experience Platform user interface showing the Evaluate rulesets response action type.](assets/evaluate-rulesets.png)

This action type supports the following options:

* **[!UICONTROL Render visual personalization decisions]**: Enable this option to render visual personalization decisions for the ruleset items that match.
* **[!UICONTROL Decision context]**: This is a key-value map that is used when evaluating Adobe Journey Optimizer rulesets for on-device decisioning. You can provide the decision context manually or through a data element.

## Get Media Analytics Tracker {#get-media-analytics-tracker}

This action is used to get the legacy Media Analytics API. When configuring the action and an object name is provided, then the legacy Media Analytics API will be exported to that window object. If none is provided it will be exported to `window.Media` as the current Media JS library does.

![Experience Platform UI image showing the Get Media Analytics Tracker action type.](assets/get-media-analytics-tracker.png)