---
title: Evaluate rulesets
description: Manually trigger a ruleset evaluation.
exl-id: 63751b47-b635-446f-af10-8144c9d3aa58
TQID: 'https://experienceleague.adobe.com/KTwXVG5M-hcwplzoJQIHFdFJ4v0eI3XEOXjEAaWwImQ'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
  - id: a984631b-2bae-4860-9b15-69c41a799dcb
    internal-label: APIs and SDKs
  - id: dc22c819-3f29-4e91-8b7d-5c6719831141
    internal-label: Content management
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
  - id: 1a2b3c4d-0006-4006-8006-000000000006
    internal-label: Data collection tags rules
  - id: d056adbe-402d-4f42-9746-f3d424e598b1
    internal-label: Web SDK
  - id: bc543dba-f0db-4234-b5da-877a5c1664e2
    internal-label: Content cards
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: a492a671-d5f6-46ee-b832-2efbca14ddd8
    internal-label: Activation and channels
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Evaluate rulesets

The **[!UICONTROL Evaluate rulesets]** action type lets you manually trigger ruleset evaluations. Rulesets are returned by Adobe Journey Optimizer to support features like in-browser messages.

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, then set the [!UICONTROL Action type] to **[!UICONTROL Evaluate rulesets]**.

![Image of the Experience Platform user interface showing the Evaluate rulesets response action type.](../assets/evaluate-rulesets.png)

## Available fields

This action type supports the following options:

* **[!UICONTROL Render visual personalization decisions]**: A checkbox that, when enabled, renders visual personalization decisions for the ruleset items that match.
* **[!UICONTROL Decision context]**: A key-value map that is used when evaluating Adobe Journey Optimizer rulesets for on-device decisioning. You can provide the decision context manually or through a data element.
