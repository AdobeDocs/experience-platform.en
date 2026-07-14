---
title: Apply propositions
description: Render propositions in single-page applications without incrementing metrics.
exl-id: cac9c65b-259b-4776-bd32-fab070a145fb
TQID: https://experienceleague.adobe.com/dzvNI7AGqvf2e1Man7WUOugdwRTjX4IeSqkzxGh--Mk
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: b3f03848-ae12-48b2-8aab-cad18567eb32
    internal-label: Metrics
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: ee602049-8a18-43df-9299-a689a025a371
    internal-label: Use cases
  - id: f1f1a2d4-0976-4881-b091-c2bb8de7ffac
    internal-label: Events
  - id: f6ff4d13-7b5c-4533-8556-95e76673d4cb
    internal-label: Properties
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
    internal-label: Metadata
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
---
# Apply propositions

The **[!UICONTROL Apply propositions]** action type allows you to render propositions in single-page applications without incrementing metrics. This action type is useful when working with single-page applications where portions of the page get re-rendered, potentially overwriting any personalizations already applied to the page.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
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
