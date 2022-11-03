---
keywords: Experience Platform;home;popular topics;edge segmentation;Segmentation;Segmentation Service;segmentation service;ui guide;streaming edge;
solution: Experience Platform
title: Edge Segmentation UI Guide
topic-legacy: ui guide
description: Edge segmentation is the ability to evaluate segments in Platform instantaneously on the edge, enabling same page and next page personalization use cases.
exl-id: eae948e6-741c-45ce-8e40-73d10d5a88f1
---
# Edge segmentation UI guide

>[!NOTE] 
>
>Edge segmentation is now generally available to all Platform users. If you created edge segments during the beta, these segments will continue to be operational.

Edge segmentation is the ability to evaluate segments in Adobe Experience Platform instantaneously [on the edge](../../edge/home.md), enabling same page and next page personalization use cases. 

>[!IMPORTANT]
>
> The edge data will be stored in an edge server location closest to where it was collected and may be stored in a location other than the one designated as the hub (or principal) Adobe Experience Platform data center.
>
> Additionally, the edge segmentation engine will only honor requests on the edge where there is **one** primary marked identity, which is consistent with non-edge-based primary identities.

## Edge segmentation query types

Currently only select query types can be evaluated with edge segmentation. The following sections provide a list of query types that can be evaluated with edge segmentation and those that are not currently supported.

### Supported query types {#query-types}

A query can be evaluated with edge segmentation if it meets any of the criteria outlined in the following table.

>[!NOTE]
>
>If the query matches any of the query types in the following table, it will automatically be evaluated using edge segmentation. The system determines this ability automatically based on the query expression.

| Query type | Details | Example | PQL example |
| ---------- | ------- | ------- | ----------- |
| Single event | Any segment definition that refers to a single incoming event with no time restriction. | People who have added an item to their cart. | `chain(xEvent, timestamp, [A: WHAT(eventType = "addToCart")])` |
| Single profile | Any segment definitions that refers to a single profile-only attribute | People who live in the USA. | `homeAddress.countryCode = "US"` |
| Single event that refers to a profile | Any segment definition that refers to one or more profile attributes and a single incoming event with no time restriction. | People who live in the USA that visited the homepage. | `homeAddress.countryCode = "US" and chain(xEvent, timestamp, [A: WHAT(eventType = "addToCart")])` |
| Negated single event with a profile attribute | Any segment definition that refers to a negated single incoming event and one or more profile attributes | People who live in the USA and have **not** visited the homepage. | `not(chain(xEvent, timestamp, [A: WHAT(eventType = "homePageView")]))` |
| Single event within a time window | Any segment definition that refers to a single incoming event within a set period of time. | People who visited the homepage in the last 24 hours. | `chain(xEvent, timestamp, [X: WHAT(eventType = "addToCart") WHEN(< 8 days before now)])` |
| Single event with a profile attribute within a time window | Any segment definition that refers to one or more profile attributes and a single incoming event within a set period of time. | People who live in the USA that visited the homepage in the last 24 hours. | `homeAddress.countryCode = "US" and chain(xEvent, timestamp, [X: WHAT(eventType = "addToCart") WHEN(< 8 days before now)])` |
| Negated single event with a profile attribute within a time window | Any segment definition that refers to one or more profile attributes and a negated single incoming event within a period of time. | People who live in the USA and have **not** visited the homepage in the last 24 hours. | `homeAddress.countryCode = "US" and not(chain(xEvent, timestamp, [X: WHAT(eventType = "addToCart") WHEN(< 8 days before now)]))` | 
| Frequency event within a 24-hour time window | Any segment definition that refers to an event that takes place a certain number of times within a time window of 24 hours. | People who visited the homepage **at least** five times in the last 24 hours. | `chain(xEvent, timestamp, [A: WHAT(eventType = "homePageView") WHEN(< 24 hours before now) COUNT(5) ] )` |
| Frequency event with a profile attribute within a 24-hour time window | Any segment definition that refers to one or more profile attributes and an event that takes place a certain number of times within a time window of 24 hours. | People from the USA who visited the homepage **at least** five times in the last 24 hours. | `homeAddress.countryCode = "US" and chain(xEvent, timestamp, [A: WHAT(eventType = "homePageView") WHEN(< 24 hours before now) COUNT(5) ] )` |
| Negated frequency event with a profile within a 24-hour time window | Any segment definition that refers to one or more profile attributes and a negated event that takes place a certain number of times within a time window of 24 hours. | People who have not visited the homepage **more** than five times in the last 24 hours. | `not(chain(xEvent, timestamp, [A: WHAT(eventType = "homePageView") WHEN(< 24 hours before now) COUNT(5) ] ))` |
| Multiple incoming hits within a time profile of 24 hours | Any segment definition that refers to multiple events that occur within a time window of 24 hours. | People that visited the homepage **or** visited the checkout page within the last 24 hours. | `chain(xEvent, timestamp, [X: WHAT(eventType = "homePageView") WHEN(< 24 hours before now)]) and chain(xEvent, timestamp, [X: WHAT(eventType = "checkoutPageView") WHEN(< 24 hours before now)])` | 
| Multiple events with a profile within a 24-hour time window | Any segment definition that refers to one or more profile attributes and multiple events that occur within a time window of 24 hours. | People from the USA that visited the homepage **and** visited the checkout page within the last 24 hours. | `homeAddress.countryCode = "US" and chain(xEvent, timestamp, [X: WHAT(eventType = "homePageView") WHEN(< 24 hours before now)]) and chain(xEvent, timestamp, [X: WHAT(eventType = "checkoutPageView") WHEN(< 24 hours before now)])` |
| Segment of segments | Any segment definition that contains one or more batch or streaming segments. | People who live in the USA and are in the segment "existing segment". | `homeAddress.countryCode = "US" and inSegment("existing segment")` |
| Query that refers to a map | Any segment definition that refers to a map of properties. | People who have added to their cart based on external segment data. | `chain(xEvent, timestamp, [A: WHAT(eventType = "addToCart") WHERE(externalSegmentMapProperty.values().exists(stringProperty="active"))])` |

## Next steps

This guide explains how to evaluate segments with edge segmentation on Adobe Experience Platform. To learn more about using the Experience Platform user interface, please read the [Segmentation user guide](./overview.md). To learn how to perform similar actions and work with segments using Experience Platform APIs, please visit the [edge segmentation API guide](../api/edge-segmentation.md).

## Appendix

The following section lists frequently asked questions regarding edge segmentation:

### How long does it take for a segment to be available on Edge?

It takes up to one hour for a segment to be available on Edge.