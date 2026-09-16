---
solution: Experience Platform
title: Refactored Segmentation Time Constraints UI Guide
description: Segment Builder provides a rich workspace that allows you to interact with Profile data elements. The workspace provides intuitive controls for building and editing rules, such as drag-and-drop tiles used to represent data properties.
exl-id: 3a352d46-829f-4a58-b676-73c3147f792c
TQID: https://experienceleague.adobe.com/MVpXrnxQCKp7Z1xzVNH67WP-zZu8LhgoT7YFplOLZag
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
subfeature_v2:
  - id: b784da9a-7978-4766-bf1f-5ab2b23d894a
    internal-label: Federated Audience Composition
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
---
# Time constraints refactorization {#refactorization}

>[!CONTEXTUALHELP]
>id="platform_audiences_segmentBuilder_constraints"
>title="Time constraints refactorization"
>abstract="Rule-level and group-level time constraints have been removed in order to clarify time constraint usage. Please re-write your constraint as a canvas-level or card-level time constraint."

The January 2024 release for Adobe Experience Platform has introduced changes to Adobe Experience Platform Segmentation Service that add new restrictions to where time constraints can be defined. These changes affect newly created or edited segments made using the Segment Builder UI. This guide explains how to mitigate these changes.

Prior to the January 2024 release, all rule-level, group-level, and canvas-level time constraints were redundantly referring to the same timestamp. In order to clarify time constraint usage, rule-level and group-level time constraints have been removed. To accommodate this change, all time constraints **must** be rewritten as **canvas-level** or **card-level** time constraints.

Previously, an individual event could have multiple time constraint rules attached to it. With this recent update, attempting to add a time constraint to a rule will now result in an **error**.

![The rule-level time constraint is highlighted. The error that subsequently happens is also highlighted.](../images/ui/segment-refactoring/rule-time-constraint.png)

Time constraints can now only be applied at the canvas-level or the card level. 

When applying a time constraint on the canvas-level, you can still select all the available time constraints.

>[!NOTE]
>
>If there is only **one** card on the canvas, applying the time constraint to the card is **equivalent** to applying the time constraint on the canvas-level.
>
>If there are **multiple** cards on the canvas, applying the time constraint to the canvas-level will apply that time constraint to **all** cards on the canvas. 

![The canvas-level time constraint is highlighted.](../images/ui/segment-refactoring/canvas-time-constraint.png)

To apply a time constraint at the card level, select the specific card you want to apply the time constraint to. The **[!UICONTROL Event Rules]** container appears. You can now select the time constraint you wish to apply to the card.

![The card-level time constraint is highlighted.](../images/ui/segment-refactoring/card-time-constraint.png)
