---
solution: Experience Platform
title: Audiences UI Guide
description: Audience Composition in the Adobe Experience Platform UI provides a rich workspace that allows you to interact with Profile data elements. The workspace provides intuitive controls for building and editing audiences for your organization.
exl-id: 0dda0cb1-49e0-478b-8004-84572b6cf625
---
# Audience Composition UI guide

>[!BEGINSHADEBOX]

If you are an Adobe Journey Optimizer customer, please read the [get started with audience composition guide](https://experienceleague.adobe.com/docs/journey-optimizer/using/audiences-profiles-identities/audiences/audience-orchestration/get-started-audience-orchestration.html) in the Adobe Journey Optimizer documentation for more information on working with audience composition in that context.

>[!ENDSHADEBOX]

>[!AVAILABILITY]
>
>To use this feature, you must have the following permissions:
>
>- Manage Segments
>- Manage Profiles
>- Manage Merge Policies
>
>More information about permissions within Experience Platform can be found in the [access control overview](../../access-control/home.md#permissions).

>[!NOTE]
>
>This guide explains how to create audiences using Audience Composition. To learn how to create audiences through segment definitions using the Segment Builder please read the [Segment Builder UI guide](./segment-builder.md).

Audience Composition provides a workspace to build and edit audiences, using blocks that are used to represent different actions.

![The Audience Composition UI.](../images/ui/audience-composition/audience-composition.png)

To change the details of the composition, including the title and description, select the ![sliders](/help/images/icons/properties.png) button.

The **[!UICONTROL Composition properties]** popover appears. You can insert details of your composition, including the title and description here. 

![The Composition properties popover is displayed.](../images/ui/audience-composition/composition-properties.png)

>[!NOTE]
>
>If you do **not** give your composition a title, it will have a title of "Composition" followed by the creation date and time by default. Additionally, each composition **must** have its own unique name.

After updating your composition's details, select **[!UICONTROL Save]** to confirm these updates. The audience composition canvas re-appears.

The audience composition canvas is comprised of four different types of blocks: **[[!UICONTROL Audience]](#audience-block)**, **[[!UICONTROL Exclude]](#exclude-block)**, **[[!UICONTROL Rank]](#rank-block)**, and **[[!UICONTROL Split]](#split-block)**.

## [!UICONTROL Audience] {#audience-block}

>[!CONTEXTUALHELP]
>id="platform_segmentation_ao_audience"
>title="Audience block"
>abstract="The Audience block lets you add the sub-audiences that you want to use to compose your new audience."

>[!CONTEXTUALHELP]
>id="platform_segmentation_ao_merge_types"
>title="Merge types"
>abstract="The merge types determine how the selected sub-audiences are combined. Supported values include Union, Intersection, and Exclude overlap."

The **[!UICONTROL Audience]** block type allows you to add the sub-audiences that you want to use to compose your new larger audience. By default, an **[!UICONTROL Audience]** block is included at the top of the composition canvas.

When you select the **[!UICONTROL Audience]** block, the right rail displays controls for labeling the audience, adding audiences to the block, as well as building custom rules for the audience block.

>[!NOTE]
>
>You can either add audiences **or** create a custom rule. These two functionalities **cannot** be used together.

![The Audience block details are displayed.](../images/ui/audience-composition/audience-block.png)

### [!UICONTROL Add audience] {#add-audience}

To add audiences to the Audience block. select **[!UICONTROL Add Audience]**.

![The Add audience button is highlighted.](../images/ui/audience-composition/select-add-audience.png)

>[!IMPORTANT]
>
>Please note that **only** audiences defined using the default merge policy will appear. 
>
>Additionally, only **published** audiences created using Segment Builder can be used. Audiences created using Audience Composition and externally generated audiences are **not** available.

A list of audiences appears. Select the audiences you want to include, followed by **[!UICONTROL Add]** to append them to your audience block.

![A list of audiences appears. You can select which audience you want to add from this dialog.](../images/ui/audience-composition/select-audience.png)

Your selected audiences now appear within the right rail when the **[!UICONTROL Audience]** block is selected. From here, you can change the merge type of the combined audiences.

![The possible merge types for the audiences are highlighted.](../images/ui/audience-composition/merge-types.png)

| Merge type | Description |
| ---------- | ----------- |
| [!UICONTROL Union] | The audiences are combined into one audience. This would be the equivalent of an OR operation. |
| [!UICONTROL Intersection] | The audiences are combined, with only the audiences that are shared in **all** of them being added. This would be the equivalent of an AND operation. |
| [!UICONTROL Exclude overlap] | The audiences are combined, with only the audiences that are shared in **one, but not all** of them being added. This would be the equivalent of a XOR operation. |

### [!UICONTROL Build rule] {#build-rule}

>[!CONTEXTUALHELP]
>id="platform_segmentation_ao_rule_builder"
>title="Segment Builder"
>abstract="You can use Segment Builder to add a custom rule for your composition."

To add a custom rule to the Audience block, select **[!UICONTROL Build rule]**.

![The Build rule button is highlighted.](../images/ui/audience-composition/select-build-rule.png)

The Segment Builder appears. You can use the Segment Builder to create a custom rule for the audience to follow. More information about using the Segment Builder can be found in the [Segment Builder guide](./segment-builder.md).

![The Segment Builder UI is displayed.](../images/ui/audience-composition/segment-builder.png)

After adding a custom rule, select **[!UICONTROL Save]** to add the rule to your audience.

![](../images/ui/audience-composition/custom-rule.png)

## [!UICONTROL Exclude] {#exclude-block}

>[!CONTEXTUALHELP]
>id="platform_segmentation_ao_exclude"
>title="Exclude block"
>abstract="The Exclude block lets you exclude specified audiences or attributes from your composition."

>[!CONTEXTUALHELP]
>id="platform_segmentation_ao_exclude_type"
>title="Exclude type"
>abstract="You can either exclude profiles belonging to a specific audience (Exclude by audience) or exclude profiles based on a specific attribute (Exclude by attribute)."

The **[!UICONTROL Exclude]** block type allows you to exclude a specified sub-audience or attributes from your new larger audience.

To add an **[!UICONTROL Exclude]** block, select the **+** icon, followed by **[!UICONTROL Exclude]**.

![The Exclude option is selected.](../images/ui/audience-composition/add-exclude-block.png)

The **[!UICONTROL Exclude]** block is added. When this block is selected, details about the exclusion appear in the right rail. This includes the block's label and exclusion type. You can exclude [by audience](#exclude-audience) or [by attribute](#exclude-attribute).

![The Exclude block, highlighting the two different exclude types available.](../images/ui/audience-composition/exclude.png)

### Exclude by audience {#exclude-audience}

If you exclude by audience, you can select which audience you want to exclude by selecting **[!UICONTROL Add Audience]**.

![The [!UICONTROL Add audience] button is selected, which lets you choose which audience you want to exclude.](../images/ui/audience-composition/add-excluded-audience.png)

>[!IMPORTANT]
>
>Only **published** audiences created using Segment Builder can be used. Audiences created using Audience Composition and externally generated audiences are **not** available.

A list of audiences appears. Select **[!UICONTROL Add]** to add the audience you want to exclude to your exclude block.

![A list of audiences appears. You can select which audience you want to add from this dialog.](../images/ui/audience-composition/select-audience.png)

### Exclude by attribute {#exclude-attribute}

>[!CONTEXTUALHELP]
>id="platform_segmentation_ao_exclude_attribute"
>title="Exclude by attribute"
>abstract="When you exclude by attribute, you can exclude specific profiles from appearing in your composition based on the attributes selected."

If you exclude by attribute, you can select which attributes you want to exclude by selecting the ![filter](/help/images/icons/project-edit.png) icon within the **[!UICONTROL Exclusion rule]** section. Excluding the attribute lets you exclude any profile that contains this attribute from your resulting audience.

![The attribute section is highlighted, showing you where to select to choose the attribute to exclude.](../images/ui/audience-composition/exclude-attribute.png)

A list of profile attributes appears. Select the attribute type you want to exclude, followed by **[!UICONTROL Select]** to add them to your exclude block.

![A list of attributes is shown.](../images/ui/audience-composition/select-attribute-exclude.png)

>[!IMPORTANT]
>
>When excluding by attribute, you can only specify **one** value to exclude. Using any sort of separator, like a comma or semicolon, will only result in excluding that exact value. For example, setting the value as `red, blue` will result in excluding the term `red, blue` from the attribute, but will **not** result in excluding either the term `red` or `blue`.

## [!UICONTROL Enrich] {#enrich-block}

>[!CONTEXTUALHELP]
>id="platform_segmentation_ao_enrich"
>title="Enrich block"
>abstract="The Enrich block lets you enrich your audience with additional attributes coming from Adobe Experience Platform datasets."

>[!CONTEXTUALHELP]
>id="platform_segmentation_ao_dataset"
>title="Enrichment dataset"
>abstract="The enrichment dataset contains the data you want to associate with the composition."

>[!CONTEXTUALHELP]
>id="platform_segmentation_ao_enrich_criteria"
>title="Enrichment criteria"
>abstract="The enrichment criteria includes the Source join key and the Enrichment dataset join key. These two keys reconcile the source dataset and the enrichment dataset."

>[!CONTEXTUALHELP]
>id="platform_segmentation_ao_enrich_attributes"
>title="Enrichment attributes"
>abstract="The enrichment attributes are the attributes you want to have associated with the composition."

>[!IMPORTANT]
>
>At this point in time, enrichment attributes can **only** be used in downstream Adobe Journey Optimizer scenarios.

The **[!UICONTROL Enrich]** block type allows you to enrich your audience with additional attributes from a dataset. You can use these attributes in personalization use cases.

To add an **[!UICONTROL Enrich]** block, select the **+** icon, followed by **[!UICONTROL Enrich]**.

![The [!UICONTROL Enrich] option is selected.](../images/ui/audience-composition/add-enrich-block.png)

The **[!UICONTROL Enrich]** block is added. When this block is selected, details about the enrichment appear in the right rail. This includes the block's label and the enrichment dataset.

To select the dataset to enrich the audience with, select the ![filter](/help/images/icons/project-edit.png) icon. 

![The filter button is highlighted. Selecting this leads you to the [!UICONTROL Select dataset] popover.](../images/ui/audience-composition/enrich-select-dataset.png)

The **[!UICONTROL Select dataset]** popover appears. Select the dataset that you want to add for enrichment, followed by **[!UICONTROL Select]** to add the dataset for enrichment.

![The chosen dataset is selected.](../images/ui/audience-composition/select-dataset.png)

>[!IMPORTANT]
>
>The selected dataset **must** meet the following criteria:
>
>- The dataset **must** be of record type.
>   - The dataset **cannot** be of event type, be system-generated, or be marked for Profile.
>- The dataset **must** be 1 GB or smaller.

The **[!UICONTROL Enrichment criteria]** section now appears on the right rail. In this section, you can select the **[!UICONTROL Source join key]** and the **[!UICONTROL Enrichment dataset join key]**, which lets you link the enrichment dataset with the audience you're trying to create.

![The [!UICONTROL Enrichment criteria] area is highlighted.](../images/ui/audience-composition/enrichment-criteria.png)

To select the **[!UICONTROL Source join key]**, select the ![filter](/help/images/icons/project-edit.png) icon. 

The **[!UICONTROL Select a profile attribute]** popover appears. Select the profile attribute you want to use as the source join key, followed by **[!UICONTROL Select]** to choose that attribute as your source join key.

![The attribute you want to use as the source join key is highlighted.](../images/ui/audience-composition/select-source-join-key.png)

To select the **[!UICONTROL Enrichment dataset join key]**, select the ![filter](/help/images/icons/project-edit.png) icon.

The **[!UICONTROL Enrichment attributes]** popover appears. Select the attribute you want to use as the enrichment dataset join key, followed by **[!UICONTROL Select]** to choose that attribute as your enrichment dataset join key.

![The attribute you want to use as the enrichment dataset join key is highlighted.](../images/ui/audience-composition/select-enrichment-dataset-join-key.png)

Now that you've added both of your join keys, the **[!UICONTROL Enrichment attributes]** section appears. You can now add the attribute you want to enhance your audience with. To add these attributes, select **[!UICONTROL Add attribute]**.

The **[!UICONTROL Enrichment attributes]** popover appears. You can select the attributes from the dataset to enrich your audience with, followed by **[!UICONTROL Select]** to add the attributes to your audience.

![The enrichment attributes you want to add are highlighted.](../images/ui/audience-composition/select-enrichment-attribute.png)

<!-- ## [!UICONTROL Join] {#join-block}

The **[!UICONTROL Join]** block type allows you to add in external audiences from datasets that have not yet been processed by Adobe Experience Platform.

To add a **[!UICONTROL Join]** block, select the **+** icon, followed by **[!UICONTROL Join]**.

![The Join option is selected.](../images/ui/audience-composition/add-join-block.png)

When you select the block, details about the join are shown in the right rail, including the block's label and the option to add audiences to the enrichment dataset.

![The join block is highlighted, including details about the join block.](../images/ui/audience-composition/join.png)

After selecting **[!UICONTROL Add Audience]**, a list of audiences appears. Select the audiences you want to include, followed by **[!UICONTROL Add]** to add them to your join block.

![A list of audiences appears. You can select which audience you want to add from this dialog.](../images/ui/audience-composition/select-audience.png)

Your selected audiences now appear within the right rail when the **[!UICONTROL Join]** block is selected. 

![The audiences that were added as part of the Join are shown.](../images/ui/audience-composition/selected-audiences.png) -->

## [!UICONTROL Rank] {#rank-block}

>[!CONTEXTUALHELP]
>id="platform_segmentation_ao_ranking"
>title="Rank block"
>abstract="The Rank block lets you rank profiles based on a specific attribute and include them in your composition."

>[!CONTEXTUALHELP]
>id="platform_segmentation_ao_rank_profilelimit_text"
>title="Add profile limit"
>abstract="The Add profile limit toggle lets you specify a maximum number of profiles to include as part of the ranking process."

The **[!UICONTROL Rank]** block type allows you to rank and sort profiles based on a specified attribute and include these ranked profiles to your composition.

To add a **[!UICONTROL Rank]** block, select the **+** icon, followed by **[!UICONTROL Rank]**.

![The Rank option is selected.](../images/ui/audience-composition/add-rank-block.png)

When you select the block, details about the ranking are shown in the right rail, including the block's label, the attribute to rank by, the ranking order, and a toggle for limiting the number of profiles to rank.

![The rank block is highlighted, as well as the details of the rank block.](../images/ui/audience-composition/rank.png)

To select which attribute to rank the audiences by, select the ![filter](/help/images/icons/project-edit.png) icon.

![The filter icon is highlighted, showing you what to select to access the profile attribute selection screen.](../images/ui/audience-composition/select-rank-attribute.png)

A list of profile attributes appears. On this popover, you can select the attribute type you want to rank your audience by. Select **[!UICONTROL Select]** to add it to your rank block. Please note that the selected attribute can **only** be numbers.

![A list of attributes is shown.](../images/ui/audience-composition/rank-attribute.png)

After selecting the attribute, you can select the order to rank it by. This is either in ascending (from lowest to highest) or descending (from highest to lowest) order.

Additionally, you can limit the number of profiles returned by enabling the **[!UICONTROL Add profile limit]** toggle. When this toggle is enabled, you can set the maximum number of profiles returned within the **[!UICONTROL Included profiles]** field.

![The Add profile limit toggle is highlighted, which lets you limit the number of profiles returned.](../images/ui/audience-composition/add-profile-limit-rank.png)

## [!UICONTROL Split] {#split-block}

>[!CONTEXTUALHELP]
>id="platform_segmentation_ao_split"
>title="Split block"
>abstract="The Split block lets you divide your composition into multiple paths."

>[!CONTEXTUALHELP]
>id="platform_segmentation_ao_split_type"
>title="Split type"
>abstract="You can split your composition by Percent split or Attribute split. Percent split randomly splits profiles into multiple paths. Attribute split lets you split profiles based on a specified attribute."

>[!CONTEXTUALHELP]
>id="platform_segmentation_ao_split_otherprofiles_text"
>title="Other profiles"
>abstract="The Other profiles toggle lets you create an additional path with the remaining profiles that do not match any of the other paths' specified conditions."

>[!NOTE]
>
>In order to use the **[!UICONTROL Split]** block, you **must** have at least 10 profiles in your audience.

The **[!UICONTROL Split]** block type allows you to split your new audience into various sub-audiences. You can either split this audience based on percentage or by an attribute.

To add a **[!UICONTROL Split]** block, select the **+** icon, followed by **[!UICONTROL Split]**.

![The Split option is selected.](../images/ui/audience-composition/add-split-block.png)

When splitting your audience, you can either split by percentage or split by attribute.

### Split by percentage {#split-percentage}

>[!CONTEXTUALHELP]
>id="platform_segmentation_ao_split_percentage"
>title="Split by percentage"
>abstract="You can randomly split the audience into multiple audiences, based on the number of paths and percentages provided."

>[!CONTEXTUALHELP]
>id="platform_segmentation_ao_split_persistent"
>title="Persistent split"
>abstract="You can make the percentage split persistent by enabling this option and selecting an identity namespace."

When splitting by percentage, the audiences will be randomly split, based on the number of paths and percentages provided.

![The percent split is highlighted.](../images/ui/audience-composition/split-by-percentage.png)

Alternatively, you can also provide an identity, which would make the percentage-based split persistent. Available identity types include all the identity namespace available on your organization.

![The Split by identity checkbox is highlighted. Additionally, the dropdown that lets you select with identity to split by is highlighted.](../images/ui/audience-composition/split-by-identity.png)

### Split by attribute {#split-attribute}

When splitting by attribute, the audiences will be split based on the provided attributes. To select the attribute to split by, select the **[!UICONTROL Split]** block, followed by the ![filter](/help/images/icons/project-edit.png) icon. 

![The filter button is selected, showing how to filter by attribute.](../images/ui/audience-composition/split-by-attribute.png)

A list of profile attributes appears. Select the attribute type, followed by **[!UICONTROL Select]** to add it to your split block. 

![A list of attributes is shown.](../images/ui/audience-composition/select-attribute.png)

After selecting the attribute, you can choose which profiles will belong to which sub-audience by adding the values within the **[!UICONTROL Values]** field.

![The values you want to split the attributes by are added.](../images/ui/audience-composition/attribute-split-values.png)

Additionally, you can enable the **[!UICONTROL Other profiles]** toggle to create a sub-audience that comprises of all the non-selected profiles.

![The Other profiles toggle is highlighted.](../images/ui/audience-composition/split-other-profiles.png)

## Publishing your audience {#publish}

>[!CONTEXTUALHELP]
>id="platform_segmentation_ao_publish"
>title="Publish"
>abstract="You can publish your composition to create the resulting audience(s) in Adobe Experience Platform."

>[!IMPORTANT]
>
>When publishing your audience composition, please note that it may take up to 48 hours for it to be evaluated and activated for usage in downstream services such as a Real-Time CDP destination or Adobe Journey Optimizer channel.

After creating your composition, you can save and publish it by selecting **[!UICONTROL Publish]**. 

![The Publish button is highlighted, showing you how to save and publish your composition.](../images/ui/audience-composition/publish.png)

If there are any errors in creating the audience, an alert appears, letting you know how to resolve the issue.

![The Publish button is highlighted, showing you how to save and publish your composition.](../images/ui/audience-composition/audience-alert.png)

## Next steps

Audience Composition provides a rich workflow allowing you to create compositions from the different block types. To learn more about other parts of the Segmentation Service UI, please read the [Segmentation Service user guide](./overview.md).
