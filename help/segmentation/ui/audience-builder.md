---
keywords: Experience Platform;home;popular topics;Segmentation Service;segmentation;segmentation service;user guide;ui guide;audiences ui guide;audience builder;audience;audiences;audiences ui guide;
solution: Experience Platform
title: Audiences UI Guide
topic-legacy: ui guide
description: The Audience Builder in the Adobe Experience Platform UI provides a rich workspace that allows you to interact with Profile data elements. The workspace provides intuitive controls for building and editing audiences for your organization.
exl-id: b27516ea-8749-4b44-99d0-98d3dc2f4c65
---
# Audience Builder UI guide

The Audience Builder provides a workspace to build and edit audiences, using blocks that are used to represent different actions.

IMAGE

The audience composition canvas is comprised of five different types of blocks: Audience, Exclude, Join, Rank, and Split.

## Audience {#audience-block}

The **Audience** block allows you to add the sub-audiences you want to compose your new larger audience. By default, an **Audience** block is included at the top of the composition canvas.

IMAGE

When you select the **Audience** block, the right rail displays details, including the label for the audience block and option to add audiences to the block.

IMAGE

After selecting **Add Audience**, a list of audiences appears. Select the audiences you want to add to your audience block, followed by **Add** to add them to your audience block.

IMAGE

Your selected audiences now appear within the right rail, when the **Audience** block is selected. From here, you can change the merge type of the combined audiences.

IMAGE

| Merge type | Description |
| ---------- | ----------- |
| Union | |
| Intersection | |
| Exclude overlap | |

## Exclude {#exclude-block}

The **Exclude** block allows you to exclude either specified sub-audiences or attributes from your new larger audience.

To add an **Exclude** block, select the **+** icon, followed by **Exclude**.

IMAGE

The **Exclude** block is added. When this block is selected, details about the exclusion appear in the right rail. This includes the block's label and exclusion type. You can either exclude by audience or by attribute.

### Exclude by audience {#exclude-audience}

If you exclude by audience, you can select which audiences you want to exclude from the new audience by selecting **Add Audience**.

IMAGE

A list of audiences appears, where you can select the audiences you want to exclude from your new audience. Select **Add** to add them to your exclude block.

IMAGE

### Exclude by attribute {#exclude-attribute}

If you exclude by attribute, you can select which attributes you want to exclude from your new audience by selecting the ![filter]() icon within the **Exclusion rule** section.

IMAGE

A list of profile attributes appears, where you can select the attribute type you want to exclude from your new audience. Select **Add** to add them to your exclude block.

IMAGE

## Join {#join-block}

The **Join** block allows you to...

## Rank {#rank-block}

The **Rank** block allows you to...

## Split {#split-block}

The **Split** block allows you to split your new audience into various sub-audiences. You can either split this audience based on percentage or by an attribute.

### Split by percentage {#split-percentage}

When splitting by percentage, 

### Split by attribute {#split-attribute}

When splitting by attribute, 