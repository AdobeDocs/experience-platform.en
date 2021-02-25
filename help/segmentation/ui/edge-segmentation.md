---
keywords: Experience Platform;home;popular topics;edge segmentation;Segmentation;Segmentation Service;segmentation service;ui guide;streaming edge;
solution: Experience Platform
title: Edge Segmentation UI Guide
topic: ui guide
description: Edge segmentation is the ability to do segmentation on Platform near instantaneously, allowing segments to quickly and efficiently be evaluated.
---

# Edge segmentation

Edge segmentation is the ability to do segmentation on Platform near instantaneously, allowing segments to quickly and efficiently be evaluated.

## Edge segmentation query types

A query can be evaluated with edge segmentation if it meets any of the following criteria:

| Query type | Details | Example |
| ---------- | ------- | ------- |
| Incoming hit | Any segment definition that refers to a single incoming event with no time restriction. | ![](../images/ui/edge-segmentation/incoming-hit.png) |
| Incoming hit within a relative time window | Any segment definition that refers to a single incoming event. | ![](../images/ui/edge-segmentation/relative-hit-success.png) |
| Profile only | Any segment definition that refers to only a profile attribute. | |
| Incoming hit that refers to a profile | Any segment definition that refers to a single incoming event, with no time restriction, and one or more profile attributes. | ![](../images/ui/edge-segmentation/profile-hit.png) |
| Incoming hit that refers to a profile within a relative time window | Any segment definition that refers to a single incoming event and one or more profile attributes. | ![](../images/ui/edge-segmentation/profile-relative-success.png) |
| Multiple events that refer to a profile | Any segment definition that refers to multiple events **within the last 24 hours** and (optionally) has one or more profile attributes. | ![](../images/ui/edge-segmentation/event-history-success.png) |

If the query matches any of the above query types, you can enable it for edge segmentation by turning the **[!UICONTROL Evaluate as streaming segment on the edge]** toggle on.

![](../images/ui/edge-segmentation/mark-on-edge.png)

## Next steps

This user guide explains how segment definitions evaluated with edge segmentation work on Adobe Experience Platform. 

To learn more about using the Adobe Experience Platform user interface, please read the [Segmentation user guide](./overview.md).