---
title: Deduplicate Operator
description: Learn how to use the Deduplicate operator in audience compositions. The Deduplicate operation lets you remove duplicate values from your compositions.
hide: true
---

# Deduplicate operator

>[!AVAILABILITY]
>
>The Deduplicate operators is in **limited availability**. Contact Adobe Customer Care for more information.

The **[!UICONTROL Deduplicate]** operator lets you remove repeated values from a payload or array before continuing through the Audience Composition workflow.

You can use this operator to:

- Remove repeated IDs, values, or records from an array
- Clean payload data before other operators run
- Reduce duplicate entries before ranking or exclusion logic
- Prepare data for downstream audience evaluation

## Usage

>[!CONTEXTUALHELP]
>id="platform_segmentation_ao_dedupe"
>title="Deduplication block"
>abstract="The Deduplication block lets you remove duplicate values from your composition, based off of a ranked field."

>[!CONTEXTUALHELP]
>id="platform_segmentation_ao_dedupe_selectionmethod"
>title="Selection method"
>abstract="The method with the deduplication is run. Choosing Random randomly retains profiles. Choosing Rank by field lets you choose an attribute to rank which profiles should be retained."

After adding an audience with a payload attribute, you can add the **[!UICONTROL Deduplicate]** operator.

![The Deduplicate operator is shown within the Audience Composition canvas.](/help/segmentation/images/ui/deduplicate/deduplicate.png)

When you use the deduplicate operator, you can set the following fields:

| Field | Description |
| ----- | ----------- |
| Group by | The attribute you want to group your profiles by. |
| Keep | The number of profiles you want to keep after the deduplication has run. |
| Selection method | The method which the extra profiles are removed. This can either be **[!UICONTROL Random]** or **[!UICONTROL Rank by field]**. If **[!UICONTROL Random]** is selected, the profiles are randomly removed. If **[!UICONTROL Rank by field]** is selected, you can choose the attribute which the profile is ranked by. |

![The settings for the Deduplicate operator are displayed.](/help/segmentation/images/ui/deduplicate/deduplicate-settings.png)

If you select **[!UICONTROL Rank by field]** you can choose an attribute to rank the fields by.

| Field | Description |
| ----- | ----------- |
| Attribute | The attribute that you want to rank your profiles by. |
| Sort direction | The sort order for the ranking attribute. This can either be ascending or descending. |

If multiple fields are tied, you can add a tie-breaker field as a way to determine which field will be chosen. If you add a tie-breaker field, you can set the following fields:

| Field | Description |
| ----- | ----------- |
| Attribute | The tiebreaking attribute that you want to rank the profiles by. |
| Sort direction | The sort order for the tiebreaker field. This can either be ascending or descending. |

## Next steps

After reading this guide, you now know how to use the Deduplicate operator. For more information on other operators, read the [Audience Composition guide](/help/segmentation/ui/audience-composition.md). To learn how to use the Payload rank and Payload exclude operators, read the [Payload rank and Payload exclude operators guide](/help/segmentation/ui/payload-rank-exclude.md).
