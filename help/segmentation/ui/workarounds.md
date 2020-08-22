---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;segment builder;Segment builder
solution: Experience Platform
title: Segmentation Service Segment Builder breaking changes guide
topic: ui guide
description: Segment Builder provides a rich workspace that allows you to interact with Profile data elements. The workspace provides intuitive controls for building and editing rules, such as drag-and-drop tiles used to represent data properties. 
---

# Breaking changes guide (?)

Two breaking changes have been made with the September 2020 release for Adobe Experience Platform. This guide explains how to mitigate these breaking changes that have been made.

## Factorization of ORs in events

Previously, segments could use an OR between events in the same column. For example, a segment could be "A click event OR a view event followed by a purchase event".

This segment can now be re-stated by using the following steps.

### Factorize the segment

The previous example segment, "A click event OR a view event followed by a purchase event", can be re-defined in the following manner:

"A click event followed by a purchase event" OR "A view event followed by a purchase event".

By redefining the segment this way, you can see that, effectively, two segments have been created. This process of factorization can be repeated for any number of ORs between events.

### Create a child segment

After factorizing the segments, you can create the two different segments, and save them separately.

(Images of both segments)

### Combine the segments

Now that both child segments have been created, you can combine them to make a new segment which retains the original logic.

(New combined segment image)

## Removal of rule-level time constraints

