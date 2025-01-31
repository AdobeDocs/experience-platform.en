---
solution: Experience Platform
title: Edge Segmentation UI Guide
description: Learn how to use edge segmentation to evaluate segment definitions in Platform instantaneously on the edge, enabling same page and next page personalization use cases.
exl-id: eae948e6-741c-45ce-8e40-73d10d5a88f1
---
# Edge segmentation UI guide

>[!NOTE] 
>
>Edge segmentation is now generally available to all Platform users. If you created edge segment definitions during the beta, these segment definitions will continue to be operational.

Edge segmentation is the ability to evaluate segments in Adobe Experience Platform instantaneously [on the edge](../../web-sdk/home.md), enabling same page and next page personalization use cases. 

>[!IMPORTANT]
>
> The edge data will be stored in an edge server location closest to where it was collected and may be stored in a location other than the one designated as the hub (or principal) Adobe Experience Platform data center.
>
> Additionally, the edge segmentation engine will only honor requests on the edge where there is **one** primary marked identity, which is consistent with non-edge-based primary identities.

## Edge segmentation query types {#query-types}

Currently only select query types can be evaluated with edge segmentation. The following sections provide a list of query types that can be evaluated with edge segmentation and those that are not currently supported.

A query can be evaluated with edge segmentation if it meets any of the criteria outlined in the following table.

>[!NOTE]
>
>If the query matches any of the query types in the following table, it will automatically be evaluated using edge segmentation. The system determines this ability automatically based on the query expression.

| Query type | Details |
| ---------- | ------- |
| Single event | Any segment definition that refers to a single incoming event with no time restriction. |
| Single event within a relative time window | Any segment definition that refers to a single incoming event. |
| Single event with a time window | Any segment definition that refers to a single incoming event with a time window. |
| Profile only | Any segment definition that refers to only a profile attribute. |
| Single event with a profile attribute within a relative time window of less than 24 hours | Any segment definition that refers to a single incoming event, with one or more profile attributes, and occurs within a relative time window of less than 24 hours. |
| Segment of segments | Any segment definition that contains one or more batch or streaming segment definitions. **Note:** If segment of segments is used with **batch** segment definitions, profile disqualification can take **up to 24 hours** to occur. If segment of segments is used with **streaming** segment definitions, profile disqualification will occur in a streaming manner. |
| Multiple events with a profile attribute | Any segment definition that refers to multiple non-sequential events **within the last 24 hours** and (optionally) has one or more profile attributes. |

A segment definition will **not** be enabled for edge segmentation in the following scenario:

- The segment definition includes a combination of a single event and an `inSegment` event.
  - However, if the segment definition contained in the `inSegment` event is profile only, the segment definition **will** be enabled for edge segmentation.
- The segment definition uses "Ignore year" as part of its time constraints.

## Next steps

This guide explains how to evaluate segment definitions with edge segmentation on Adobe Experience Platform. To learn more about using the Experience Platform user interface, please read the [Segmentation user guide](./overview.md). To learn how to perform similar actions and work with segment definitions using Experience Platform APIs, please visit the [edge segmentation API guide](../api/edge-segmentation.md).

## Appendix

The following section lists frequently asked questions regarding edge segmentation:

### How long does it take for a segment definition to be available on the Edge Network?

It takes up to one hour for a segment definition to be available on the Edge Network.
