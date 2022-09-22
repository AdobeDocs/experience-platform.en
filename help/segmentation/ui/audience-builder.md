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

![The Audience Builder UI.](../images/ui/audience-builder/audience-builder.png)

The audience composition canvas is comprised of five different types of blocks: Audience, Exclude, Join, Rank, and Split.

## Audience {#audience-block}

The **Audience** block allows you to add the sub-audiences you want to compose your new larger audience. By default, an **Audience** block is included at the top of the composition canvas.

When you select the **Audience** block, the right rail displays details, including the label for the audience block and the option to add audiences to the block.

![The Audience block details are displayed.](../images/ui/audience-builder/select-audience.png)

After selecting **[!UICONTROL Add Audience]**, a list of audiences appears. Select the audiences you want to add to your audience block, followed by **[!UICONTROL Add]** to add them to your audience block.

![A list of audiences appears. You can select which audience you want to add from this dialog.](../images/ui/audience-builder/select-audience.png)

Your selected audiences now appear within the right rail, when the **Audience** block is selected. From here, you can change the merge type of the combined audiences.

![The possible merge types for the audiences are highlighted.](../images/ui/audience-builder/merge-types.png)

| Merge type | Description |
| ---------- | ----------- |
| Union | The audiences are combined into one audience. This would be the equivalent of an OR operation. |
| Intersection | The audiences are combined, with only the audiences that are in **every** selected audience being added. This would be the equivalent of an AND operation. |
| Exclude overlap | The audiences are combined, with only the audience that are in **one** of the selected audience being added. This would be the equivalent of a XOR operation. |

## Exclude {#exclude-block}

The **Exclude** block allows you to exclude either specified sub-audiences or attributes from your new larger audience.

To add an **Exclude** block, select the **+** icon, followed by **Exclude**.

IMAGE TO BE MADE

The **Exclude** block is added. When this block is selected, details about the exclusion appear in the right rail. This includes the block's label and exclusion type. You can either exclude by audience or by attribute.

![The Exclude block, highlighting the two different exclude types available.](../images/ui/audience-builder/exclude.png)

### Exclude by audience {#exclude-audience}

If you exclude by audience, you can select which audiences you want to exclude from the new audience by selecting **[!UICONTROL Add Audience]**.

IMAGE TO ADD

A list of audiences appears, where you can select the audiences you want to exclude from your new audience. Select **[!UICONTROL Add]** to add them to your exclude block.

![A list of audiences appears. You can select which audience you want to add from this dialog.](../images/ui/audience-builder/select-audience.png)

### Exclude by attribute {#exclude-attribute}

If you exclude by attribute, you can select which attributes you want to exclude from your new audience by selecting the ![filter](../images/ui/audience-builder/filter-attribute.png) icon within the **[!UICONTROL Exclusion rule]** section.

![The attribute section is highlighted, showing you where to select to choose the attribute to exclude.](../images/ui/audience-builder/exclude-attribute.png)

A list of profile attributes appears, where you can select the attribute type you want to exclude from your new audience. Select **[!UICONTROL Select]** to add them to your exclude block.

![A list of attributes is shown.](../images/ui/audience-builder/select-attribute.png)

## Join {#join-block}

The **Join** block allows you to add in external audiences from datasets that have not yet been processed by Adobe Experience Platform.

To dd a **Join** block, select the **+** icon, followed by **Join**.

IMAGE TO ADD

When you select the block, details about the join are shown in the right rail, including the block's label and the option to add audiences to the enrichment dataset.

![The join block is highlighted, including details about the join block.](../images/ui/audience-builder/join.png)

After selecting **Add Audience**, a list of audiences appears. Select the audiences you want to add to your join block, followed by **Add** to add them to your join block.

![A list of audiences appears. You can select which audience you want to add from this dialog.](../images/ui/audience-builder/select-audience.png)

Your selected audiences now appear within the right rail, when the **Join** block is selected. 

IMAGE TO ADD

## Rank {#rank-block}

The **Rank** block allows you to rank and sort the audiences before your new audience is published. 

To add a **Rank** block, select the **+** icon, followed by **Rank**.

IMAGE TO ADD

When you select the block, details about the ranking are shown in the right rail, including the block's label, the attribute to rank by, the ranking order, as well as a toggle for limiting the number of profiles to rank.

![The rank block is highlighted, as well as the details of the rank block.](../images/ui/audience-builder/rank.png)

To select which attribute to rank the audiences by, select the ![filter](../images/ui/audience-builder/filter-attribute.png) icon.

![The filter icon is highlighted, showing you what to select to access the profile attribute selection screen.](../images/ui/audience-builder/select-rank-attribute.png)

A list of profile attributes appears, where you can select the attribute type you want to rank your new audience by. Select **Select** to add it to your rank block. Please note that the selected attribute can **only** be of type `int`.

![A list of attributes is shown.](../images/ui/audience-builder/select-attribute.png)

After selecting the attribute to rank the audience by, you can select the order to rank it by. This is either in ascending (from lowest to highest) or descending (from highest to lowest) order.

Additionally, you can limit the number of audiences returned by enabling the **[!UICONTROL Add profile limit]** toggle. When this toggle is enabled, you can set the maximum number of audiences returned within the **[!UICONTROL Included profiles]** field.

IMAGE TO ADD

## Split {#split-block}

The **Split** block allows you to split your new audience into various sub-audiences. You can either split this audience based on percentage or by an attribute.

To add a **Split** block, select the **+** icon, followed by **Split**.

IMAGE TO ADD

### Split by percentage {#split-percentage}

When splitting by percentage, the audiences will be randomly split, based on the number of paths and percentages provided.

For example, you could have three paths, each with a differing percentage of profiles.

IMAGE TO ADD

Additionally, you can mark one of the split audiences to be the control group.

![The control group toggle is enabled. This lets you mark one of the split audiences to be a control group.](../images/ui/audience-builder/control-group.png)

### Split by attribute {#split-attribute}

When splitting by attribute, the audiences will be split based on the provided attributes. To select the attribute to split by, select the **Split** block, followed by the ![filter](../images/ui/audience-builder/filter-attribute.png) icon. 

![The filter button is selected, showing how to filter by attribute.](../images/ui/audience-builder/select-attribute-split.png)

A list of profile attributes appears, where you can select the attribute type you want to split your audiences by. Select **[!UICONTROL Select]** to add it to your split block. 

![A list of attributes is shown.](../images/ui/audience-builder/select-attribute.png)

After selecting the attribute to split the audience by, you can choose which profiles will belong to which sub-audience by adding the values within the **Values** field.

IMAGE TO MARKUP

Additionally, you can enable the **Other profiles** toggle to create a sub-audience that comprises of all the non-selected profiles.

IMAGE TO MARKUP