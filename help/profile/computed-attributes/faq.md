---
title: Computed Attributes Frequently Asked Questions
description: Find out answers to frequently asked questions about using computed attributes.
exl-id: a4d3c06a-d135-453b-9637-4f98e62737a7
---
# Frequently asked questions

In Adobe Experience Platform, computed attributes are functions used to aggregate event-level data into profile-level attributes. These functions are automatically computed so that they can be used across segmentation, activation, and personalization. The following is a list of frequently asked questions regarding computed attributes.

## How do I get access to computed attributes?

To get access to computed attributes, you'll need to have the appropriate permissions (**View Computed attributes** and **Manage Computed attributes**). For more information on the permissions required, please read the [access control documentation](../../access-control/home.md). To learn how to apply these permissions, please read the [managing permissions guide](../../access-control/ui/permissions.md).

## Which datasets contribute towards computed attribute calculations?

Computed attributes considers Real-Time Customer Profile-enabled Experience Event datasets for calculating computed attributes.

## What Experience Data Model (XDM) fields can be used for creating computed attributes?

All XDM fields on your Experience Event union schema can be used to create computed attributes.

## What does the "last evaluation time" represent?

The last evaluation time means that the events **prior** to that timestamp were considered in the latest successful refresh of the computed attribute.

## Can I choose the refresh frequency? How is this decided?

The refresh frequency is automatically determined based on the lookback period of your computed attribute. For more information on this, please read the [lookback period section](./overview.md#lookback-periods) of the computed attributes overview.

## How are computations affected by Experience Event data expirations?

Computed attribute calculations are backfilled for the defined lookback duration in the first time evaluation and updated based on incremental events for subsequent updates. As a result, these calculations are **not** affected by the Experience Event data expirations of the old data after the first evaluation. 

For example, if you create a computed attribute that's evaluated monthly with a three month lookback period, for the first evaluation, the computed attribute will compute for all events within that three month lookback period. Even if the Experience Event dataset has a data expiry of one month, this data expiration will **not** affect the monthly computed attribute refresh, since the next month's evaluation run will incrementally aggregate events and update the computation.

>[!NOTE]
>
>Expired data **cannot** be backfilled later by a computed attribute. Event dataset data expiry **may** limited the ability to validate the computed attribute's value at a later point in time. To validate the computed attribute value, your lookback period should remain **within** the bounds of the data expirations.

## Can I create a computed attribute based on another computed attribute?

Since computed attributes are created using Experience Event fields and resides in a Profile field, there is no way to directly use a computed attribute to create another computed attribute.

## Are there any limits to the number of computed attributes I can create?

Yes, there is a limit on the number of computed attributes you can create. Please refer to the product description or contact the Adobe Account Team for more information.

## Are there any downstream implications for disabling a computed attribute?

Before disabling your computed attribute, you **should** remove them from your downstream systems (such as segmentation, journeys, or destinations), as there may be complications that arise if they are not removed.

## What happens when I disable a computed attribute? {#inactive-status}

When a computed attribute is disabled or made inactive, it is no longer updated. As a result, this computed attribute **cannot** be used in profile lookup or other downstream usages.

## How do computed attributes help drive engagement?

Computed attributes drive Profile enrichment by aggregating your event attributes at a merged profile level. For example, you can personalize marketing emails with the latest viewed product.

## How often are computed attributes evaluated? Is this related to the audience evaluation schedule?

Computed attributes are evaluated in batches independently of the segmentation schedule. This means that regardless of the segmentation type (batch segmentation or streaming segmentation), the computed attribute will be evaluated on its own schedule (hourly, daily, weekly, or monthly). 

When the audience is evaluated, it will use the **latest** value of the computed attribute available.

## How do computed attributes interact with audiences evaluated using streaming segmentation?

If a streaming-segmentation-evaluated audience is using a computed attribute, it will take the **latest value** of the computed attribute while the audience is being evaluated. For example, if the audience is looking for purchase events, the audience will refer to the last evaluated computed attribute value when the purchase event comes.

## Can I use computed attributes on Edge?

Like any other profile attribute, computed attributes are available and can be used on edges. Please note that computed attributes are **not** computed on edge.

## How are data usage labels applied on computed attributes?

Computed attributes automatically derives data usage labels from the source fields and datasets that were used to define the computed attributes. This ensures that your behavioral data is appropriately used.

## How do I use computed attributes with Adobe Journey Optimizer?

To use computed attributes in journeys, you'll need to add the `SystemComputedAttributes` field group to the Experience Platform data source. For more information on configuring the Experience Platform data source, please read the [Adobe Experience Platform data source guide](https://experienceleague.adobe.com/docs/journey-optimizer/using/configuration/configure-journeys/data-source-journeys/adobe-experience-platform-data-source.html?lang=en).
