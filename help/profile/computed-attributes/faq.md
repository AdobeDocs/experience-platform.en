---
title: Computed Attributes Frequently Asked Questions
description: In Adobe Experience Platform, computed attributes are functions used to aggregate event-level data into profile-level attributes. These functions are automatically computed so that they can be used across segmentation, activation, and personalization. This guide answers frequently asked questions about using computed attributes.
badge: "Beta"
---

# Frequently asked questions

The following is a list of frequently asked questions regarding computed attributes.

## Which datasets contribute towards computed attribute calculations?

Computed attributes considers Profile-enabled Experience Event datasets for calculating computed attributes.

## What Experience Data Model (XDM) fields can be used for creating computed attributes?

All XDM fields on your Experience Event union schema can be used to create computed attributes.

## What does the "last evaluation time" represent?

The last evaluation time means that the events **prior** to that timestamp were considered in the latest successful refresh of the computed attribute.

## Can I choose the refresh frequency? How is this decided?

The refresh frequency is automatically determined based on the lookback period of your computed attribute. For more information on this, please read the [lookback period section](./overview.md#lookback-periods) of the computed attributes overview.

## How are computations affected by Experience Event data expirations?

Computed attribute calculations are based on the defined lookback period and the Experience Events falling within that period of time. As a result, these calculations are **not** affected by the Experience Event data expirations. However, to ensure the accuracy of your computed attributes, your lookback period should remain **within** the bounds of your data expirations.

## Can I create a computed attribute based on another computed attribute?

Since computed attributes are created using Experience Event fields and resides on a Profile field, there is no way to directly use a computed attribute to create another computed attribute.

## Are there any limits to the number of computed attributes I can create?

The current maximum number of **published** computed attributes is 25.

## Are there any downstream implications for disabling a computed attribute?

Before disabling your computed attribute, you **should** remove them from your downstream systems (such as segmentation, journeys, or destinations), as there may be complications that arise if they are not removed.

## What happens when I disable a computed attribute? {#inactive-status}

When a computed attribute is disabled or made inactive, it is no longer updated. As a result, this computed attribute is **not** usable in profile lookup or other downstream usages.

## How do computed attributes help drive engagement?

Computed attributes drive Profile enrichment by aggregating your event attributes at a merged profile level. For example, you can personalize marketing emails with the latest viewed product.
