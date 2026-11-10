---
title: Apply propositions
description: Render propositions in single-page applications without incrementing metrics.
exl-id: cac9c65b-259b-4776-bd32-fab070a145fb
TQID: 'https://experienceleague.adobe.com/dzvNI7AGqvf2e1Man7WUOugdwRTjX4IeSqkzxGh--Mk'
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
  - id: 1a2b3c4d-0006-4006-8006-000000000006
    internal-label: Data collection tags rules
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Apply propositions

The **[!UICONTROL Apply propositions]** action type allows you to render propositions in single-page applications without incrementing metrics. This action type is useful when working with single-page applications where portions of the page get re-rendered, potentially overwriting any personalizations already applied to the page.

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, then set the [!UICONTROL Action type] to **[!UICONTROL Apply propositions]**.

![Experience Platform Tags UI showing the Apply Propositions action type.](../assets/apply-propositions.png)

## Use cases

You can use this action type for various use cases, such as:

1. **Render mbox HTML offers**. Propositions explicitly requested via a scope or surface from a **[!UICONTROL Send event]** action are not automatically rendered. You can use the **[!UICONTROL Apply propositions]** action type to tell Web SDK where to render them by specifying the proposition metadata.
2. **Render the offers for a view on a single-page application**. When rendering a view change event, if the analytics data is not ready yet, you can use the **[!UICONTROL Apply propositions]** action to render the view propositions at the top of page. See [top and bottom of page events (Second page view - Option 2)](/help/collection/use-cases/personalization/top-bottom-page-events.md) for more details. To use this, enter a **[!UICONTROL View name]** in the form.
3. **Re-render propositions**. When your site uses a framework like React to re-render content, you may need to re-apply personalization. In such cases you can use the **[!UICONTROL Apply propositions]** action type to do this.

This action type does not send a display event for rendered propositions. It keeps track of rendered propositions so that they can be included in subsequent **[!UICONTROL Send event]** calls.

## Available fields

This action type supports the following fields:

* **[!UICONTROL Instance]**: The SDK instance that the action applies to. This drop-down menu is disabled if your implementation uses a single SDK instance.
* **[!UICONTROL Propositions]**: An array of proposition objects that you want to re-render.
* **[!UICONTROL View name]**: The name of the view to render.
* **[!UICONTROL Proposition metadata]**: An object that determines how HTML offers can be applied. You can provide this information either through the form or through a data element. It contains the following properties:
  * **[!UICONTROL Scope]**
  * **[!UICONTROL Selector]**
  * **[!UICONTROL Action type]**
