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
| Profile only | Any segment definition that refers to only a profile attribute. | |
| Incoming hit that refers to a profile | Any segment definition that refers to a single incoming event, with no time restriction, and one or more profile attributes. | ![](../images/ui/edge-segmentation/profile-hit.png) |
| Frequency query | Any segment definition that refers to an event happening a certain number of times. | |
| Frequency query that refers to a profile | Any segment definition that refers to an event happening a certain number of times and has one or more profile attributes. | |

If the query matches any of the above query types, you can enable it for edge segmentation by turning the **[!UICONTROL Evaluate as streaming segment on the edge]** toggle on.

![](../images/ui/edge-segmentation/mark-on-edge.png)

The following query types are **not** currently supported for edge segmentation:

| Query type | Details |
| ---------- | ------- |
| Relative-time window | If a query refers to a time window, it cannot be evaluated using edge segmentation. |
| Negation | If a query contains a negation, it cannot be evaluated using edge segmentation. | 

## Next steps

This user guide explains how segment definitions evaluated with edge segmentation work on Adobe Experience Platform. 

To learn more about using the Adobe Experience Platform user interface, please read the [Segmentation user guide](./overview.md).