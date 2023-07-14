---
title: Audiences Frequently Asked Questions
description: Find out answers to frequently asked questions about audiences.
---

# Frequently asked questions

Adobe Experience Platform [!DNL Segmentation Service] provides a user interface and RESTful API that allows you to create audiences through segment definitions or other sources from your [!DNL Real-Time Customer Profile] data. These audiences are centrally configured and maintained on Platform, and are readily accessible by any Adobe solution. The following is a list of frequently asked questions regarding audiences and segmentation.

## Do I have access to Audience Portal and Audience Composition?

Audience Portal and Audience Composition are available to all Real-Time CDP Prime and Ultimate customers (B2C, B2B, and B2P Editions) and Journey Optimizer Select, Prime, Ultimate Starter, and Ultimate customers.

At this point in time, only profile-based audiences are supported. Support for account-based audiences will be added in a later release.

## Are externally generated pre-built audiences supported with Audience Portal?

Yes, externally generated pre-built audiences are supported with Audience Portal. At this point in time, you can import an externally generated audience through a CSV file. In the future, you'll be able to add audiences through batch or streaming-based source connectors.

## Can I reconcile externally generated audience data with an existing profile in Platform?

Yes, the externally generated audience will be merged with the existing profile in Platform if the primary identifiers match.This data can take up to 24 hours to be reconciled. If profile data does not already exist, a new profile will be created as the data is ingested.

## Can I use an externally generated audience to build other audiences?

Yes, any externally generated audience will appear within the audience inventory and can be used when building audiences within the [Segment Builder](./ui/segment-builder.md).

## Can I use externally uploaded attributes as part of segmentation?

No, you cannot. Profile attributes are meant to be long-lasting attributes, while externally generated audience data that is uploaded only contains contextual data that is associated with that externally generated audience.

The externally generated audience's contextual data, or enrichment attributes, are **not** durably long lasting, as their lifecycle is tied to the uploaded audience. As a result, due to its transient nature, these enrichment attributes are **not** available for use in segmentation.

However when mapping your audiences to batch or file-based destinations, you can use these externally generated enrichment attributes to augment your audiences and further downstream activations.

To learn more about this capability, please read the guide on [activating audience data to batch profile export destinations](../destinations/ui/activate-batch-profile-destinations.md#mapping).

## Can I activate externally generated audiences to Adobe Journey Optimizer?

At this point in time, no. However, this capability will be available in the near future.

## Can I delete an externally generated audience?

At this point in time, no. You can either deactivate or archive this audience instead. In this state, profiles **will** remain active for use in downstream applications. Support for deleting externally generated audiences will be added in a subsequent release.

## How will Audience Portal and Audience Composition interact with the release of Real-Time CDP Partner Data?

Audience Portal and Audience Composition will interact with Partner Data in two ways:

1. If you ingest a partner-provided prospect list using the Prospect Profile class and workflow, the prospects will be kept **separately** from merge customer profiles in Profile Service. As a result, this means that prospect lists will **not** appear in either Audience Portal or Audience Composition for use.
2. If you are leveraging partner-provided attributes to enrich **existing** first-party profiles, those partner-data-enriched audiences **will** appear in both Audience Portal and Audience Composition for use.

## Can I use externally generated audiences in Audience Composition?

At this point in time, no. However, this capability should be available in the near future.

## Can I send audiences from Audience Composition to all downstream destinations and channels?

At this point in time, no. Currently, you can use audiences from Audience Composition in Adobe Journey Optimizer Campaigns and Real-time CDP destinations. Adobe Journey Optimizer Journeys will be supported in a future release.

## Are there any guardrails on the number of compositions?

At this point in time, you can only have **10** published compositions per sandbox. This guardrail is planned to be increased in a future release.

## What are the workflow guardrails for Audience Composition?

The composition component placing follows a rigid structure as follows:

1. You **always** start with the [!UICONTROL Audience] block to select your starting activity. You can have a maximum of **one** [!UICONTROL Audience] block.
2. You can optionally add an [!UICONTROL Exclude] block that follows the [!UICONTROL Audience] block.
3. You can optionally add an [!UICONTROL Enrich] block that follows the [!UICONTROL Exclude] block.
4. You can optionally add a [!UICONTROL Rank] or [!UICONTROL Split] block. You can **only** have one of these blocks per composition.
5. You **always** end with a [!UICONTROL Save] block to save your audience.

For more details about using Audience Composition, please read the [Audience Composition UI guide](./ui/audience-composition.md).

## Can I use an Audience Composition in another composition?

No, audiences created using Audience Composition **cannot** be used as an input in another audience composition.

## How does splitting work in Audience Composition?

Audience splitting lets you further subset your audience into smaller groups. This split forces mutual exclusivity between the groups. This means that if a record meets the criteria of multiple split paths, it will be assigned the **first** path from the left and **not** assigned to any of the other paths.

For more information on the Split block, please read the [Audience Composition UI guide](./ui/audience-composition.md#split).

## Can I use all segmentation types in the Audience Composition workflow?

Yes, all segmentation types (batch segmentation, streaming segmentation, and edge segmentation) are supported in the Audience Composition workflow. However, since compositions are currently only run once per day, even if streaming- or edge-evaluated audiences are included, the result will be based on audience membership at the time the composition was executed.

## How can I confirm a profile's membership in an audience?

To confirm a profile's audience membership, visit the profile details page of the profile you want to confirm. Select **[!UICONTROL Attributes]**, followed by **[!UICONTROL View JSON]**, and you can confirm that the `segmentMembership` object contains the ID of the audience.
