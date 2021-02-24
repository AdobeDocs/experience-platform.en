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
| Incoming hit | Any segment definition that refers to a single incoming event with no time restriction. | ![](../images/ui/streaming-segmentation/incoming-hit.png) |
| Incoming hit within a relative time window | Any segment definition that refers to a single incoming event. | ![](../images/ui/streaming-segmentation/relative-hit-success.png) |
| Profile only | Any segment definition that refers to only a profile attribute. | |
| Incoming hit that refers to a profile | Any segment definition that refers to a single incoming event, with no time restriction, and one or more profile attributes. | ![](../images/ui/streaming-segmentation/profile-hit.png) |
| Incoming hit that refers to a profile within a relative time window | Any segment definition that refers to a single incoming event and one or more profile attributes. | ![](../images/ui/streaming-segmentation/profile-relative-success.png) |

