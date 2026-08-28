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

IMAGE

When you use the rank operator, you can set the following fields:

| Field | Description |
| ----- | ----------- |
| Payload array | The array that is being ranked. |
| Rank order attribute |  |
| Rank order sort direction | |
| Attribute | |
| Value | |
| Limit | |

IMAGE


need to use the following fields:

| Field | Description |
| ----- | ----------- |
| `attribute.path` | The array that is being ranked. |
| `rankOrder[0].rankColumn.path` | The attribute to rank the array by. |
| `rankOrder[0].sortOrder` | The sort order for the array. This can either be ascending or descending. |
| `limit` | The number of top elements to return. |

## Sample flow {#sample-flow}

Let's say you have a profile with the following four array elements, with the exclusion codes precomputed from the source array. 

| Element | Exclusion codes | Spend |
| ------- | --------------- | ----- |
| Element 1 | EXCL0008 | 1000 |
| Element 2 | EXCL0015 | 2000 |
| Element 3 | EXCL0001, EXCL0020 | 4000 |
| Element 4 | EXCL0001 | 5000 |

For the current example, `EXCL0001` and `EXCL0020` are the policies that will be enforced.

When this request runs, the **PayloadExclude** operator checks each element's exclusion codes against the exclusion codes that were just injected. An element is excluded if it contains **any** of the exclusion codes that are enforced on the array. | 

| Element | Exclusion codes | Contains the specified exclusion code? | Result |
| --- | --- | --- | --- |
| Element 01 | EXCL0008 | No | Kept |
| Element 02 | EXCL0015 | No | Kept |
| Element 03 | EXCL0001, EXCL0020 | Yes | Excluded |
| Element 04 | EXCL0001 | Yes | Excluded |

After the exclusion is ran, only two elements remain: Element 1 and Element 2. You can now rank these remaining elements with PayloadRank.

If you rank the remaining elements by descending order on spend, returning only the top 1 result, the remaining elements would look as follows:

| Element | Spend | Rank |
| ------- | ----- | ---- |
| Element 02 | 2000 | 1 (selected) |
| Element 01 | 1000 | 2 |

As a result, Element 02 is selected since it has the highest spend of the remaining elements. The rank operator **never** sees Element 03 or Element 04, so their spend values do not matter. 

For the final audience, the customer **remains** in the audience, since the exclusion only removes the array elements within the profile.

## Limitation {#limitations}

The following limitations apply when using the PayloadExclude or the PayloadRank operators:

- PayloadExclude **only** operates on array elements. This operator **cannot** remove an entire profile from an audience.
- The `excludeIfAnyOf.values` field is scoped **per campaign** and is set by the API caller for each composition. This field is **not** a persistent, audience-wide rule.
- You can only use a PayloadExclude on a composition that is in the **Draft** state.
