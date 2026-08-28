---
solution: Experience Platform
title: Payload Rank Operator
description: Learn how to use the payload rank in audience compositions.
hide: true
---

# Payload Rank operator

Currently, audiences that are built on array-based schemas (such as a customer profile holding multiple product or account records) cannot use a single element within an array to rank the audience.

The **Payload Ranking** operator lets you select a single best element for a customer that qualified through more than one array element. You can then choose a specific element to rank the customers by.

You can use this operator when your audience is built on an **array attribute** (such as a list of products or account records per profile) and if customers can qualify through multiple array elements, but only one of those elements should drive personalization.

## PayloadRank {#rank}

The **PayloadRank** operator ranks array elements by a chosen attribute and returns the top number of elements specified.

After adding an audience with a payload attribute, you can add the PayloadRank operator.

![The add Payload rank button is highlighted within Audience Composition.](/help/segmentation/images/ui/payload-rank/add-payload-rank.png)

When you use the rank operator, you can set the following fields:

| Field | Description |
| ----- | ----------- |
| Payload array | The array that is being ranked. |
| Rank order attribute | The attribute that you want to rank the array by. |
| Rank order sort direction | The sort order for the array. This can either be ascending or descending. |
| Limit | The number of top elements to return. |

![The Payload rank options are highlighted.](/help/segmentation/images/ui/payload-rank/payload-rank-options.png)

If two fields are tied, you can add a tie-breaker field as a way to determine which field will be chosen. If you add a tie-breaker field, you can set the following fields:

| Field | Description |
| ----- | ----------- |
| Attribute | The tiebreaking attribute that you want to rank the array by. |
| Sort direction | The sort order for the tiebreaker field. This can either be ascending or descending. |

You can also enable the **[!UICONTROL Override with a priority match]** option if you want a way to override the payload rank. If you enable this option, you can set the following additional fields:

| Field | Description |
| ----- | ----------- |
| Attribute | The attribute, in the array, that you want to override the ranking for. |
| Value | The value to look for in the override attribute. |

![The override options within the Payload rank operator are highlighted.](/help/segmentation/images/ui/payload-rank/override-options.png)

## Sample flow {#sample-flow}

Let's say you have a profile with the following four array elements.

| Element | Spend |
| ------- | ----- |
| Element 1 | 1000 |
| Element 2 | 2000 |
| Element 3 | 1500 |
| Element 4 | 1750 |

If you rank the elements by descending order on spend, returning only the top 1 result, the remaining elements would look as follows:

| Element | Spend | Rank |
| ------- | ----- | ---- |
| Element 02 | 2000 | 1 (selected) |
| Element 04 | 1750 | 2 |
| Element 03 | 1500 | 3 |
| Element 01 | 1000 | 4 |

As a result, Element 02 is selected since it has the highest spend of the elements.
