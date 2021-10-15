---
keywords: Experience Platform;home;popular topics;edge segmentation;Segmentation;Segmentation Service;segmentation service;ui guide;streaming edge;
solution: Experience Platform
title: Edge Segmentation UI Guide
topic-legacy: ui guide
description: Edge segmentation is the ability to evaluate segments in Platform instantaneously on the edge, enabling same page and next page personalization use cases.
exl-id: eae948e6-741c-45ce-8e40-73d10d5a88f1
---
# Edge segmentation UI guide (beta)

>[!IMPORTANT] 
>
>Edge segmentation is currently in beta. The documentation and the functionality are subject to change.

Edge segmentation is the ability to evaluate segments in Adobe Experience Platform instantaneously [on the edge](../../edge/home.md), enabling same page and next page personalization use cases. 

## Edge segmentation query types

Currently only select query types can be evaluated with edge segmentation. The following sections provide a list of query types that can be evaluated with edge segmentation and those that are not currently supported.

### Supported query types

A query can be evaluated with edge segmentation if it meets any of the criteria outlined in the following table.

>[!NOTE]
>
>If the query matches any of the query types in the following table, it will automatically be evaluated using edge segmentation. The system determines this ability automatically based on the query expression.

| Query type | Details | Example |
| ---------- | ------- | ------- |
| Incoming hit | Any segment definition that refers to a single incoming event with no time restriction. | People who have added an item to their cart. |
| Incoming hit that refers to a profile | Any segment definition that refers to a single incoming event, with no time restriction, and one or more profile attributes. | People who live in the USA that visited the homepage. |
| Negated incoming hit that refers to a profile | Any segment definition that refers to a negated single incoming event and one or more profile attributes | People who live in the USA and have **not** visited the homepage. | 
| Incoming hit within a time window of 24 hours | Any segment definition that refers to a single incoming event within 24 hours | People who visited the homepage in the last 24 hours. |
| Incoming hit that refers to a profile within a time window of 24 hours | Any segment definition that refers to a single incoming event within 24 hours and has one or more profile attributes. | People who live in the USA that visited the homepage in the last 24 hours. |
| Negated incoming hit that refers to a profile within a time window of 24 hours | Any segment definition that refers to a negated single incoming event within 24 hours and has one or more profile attributes. | 
| Frequency event within a time window of 24 hours | Any segment definition that refers to an event that takes place a certain number of times within a time window of 24 hours | People who visited the homepage **at least** 5 times in the last 24 hours. |
| Frequency event that refers to a profile within a time window of 24 hours | Any segment definition that refers to an event that refers to a profile, takes place a certain number of times, and occurs within a time window of 24 hours. | People from the USA who visited the homepage **at least** 5 times in the last 24 hours. |
| Negated frequency event that refers to a profile within a time window of 24 hours | Any segment definition that refers to a negated event that refers to a profile, takes place a certain number of times, and occurs within a time window of 24 hours. | People who have not visited the homepage **more** than 5 times in the last 24 hours. |
| Multiple incoming hits that refer to a profile with a time profile of 24 hours | Any segment definition that refers to multiple events, refer to profiles, and occur within a time window of 24 hours. | People from the USA that visited the homepage **AND** visited the checkout page within the last 24 hours. |
| Multiple incoming hits within a time profile of 24 hours | Any segment definition that refers to multiple events and occur within a time window of 24 hours. | People that visited the homepage **OR** visited the checkout page within the last 24 hours. |

## Next steps

This guide explains how to evaluate segments with edge segmentation on Adobe Experience Platform. To learn more about using the Experience Platform user interface, please read the [Segmentation user guide](./overview.md). To learn how to perform similar actions and work with segments using Experience Platform APIs, please visit the [edge segmentation API guide](../api/edge-segmentation.md).
