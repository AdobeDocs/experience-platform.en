---
solution: Experience Platform
title: Refactored Segmentation Time Constraints UI Guide
description: Segment Builder provides a rich workspace that allows you to interact with Profile data elements. The workspace provides intuitive controls for building and editing rules, such as drag-and-drop tiles used to represent data properties.
exl-id: 3a352d46-829f-4a58-b676-73c3147f792c
---
# Time constraints refactorization

The January 2024 release for Adobe Experience Platform has introduced changes to Adobe Experience Platform Segmentation Service that add new restrictions to where time constraints can be defined These changes will affect newly created or edited segments made using the Segment Builder UI. This guide explains how to mitigate these changes.

Prior to the January 2024 release, all rule-level, group-level, and event-level time constraints were redundantly referring to the same timestamp. In order to clarify time constraint usage, rule-level and group-level time constraints have been removed. To accommodate this change, all time constraints **must** be rewritten as **event-level** or **card-level** time constraints.

Previously, an individual event could have multiple time constraint rules attached to it. 

SCREENSHOT 1

With this recent update, attempting to add a time constraint to a rule will now result in an error.
