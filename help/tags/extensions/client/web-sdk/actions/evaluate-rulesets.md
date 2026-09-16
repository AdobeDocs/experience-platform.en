---
title: Evaluate rulesets
description: Manually trigger a ruleset evaluation.
exl-id: 63751b47-b635-446f-af10-8144c9d3aa58
TQID: https://experienceleague.adobe.com/KTwXVG5M-hcwplzoJQIHFdFJ4v0eI3XEOXjEAaWwImQ
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
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
