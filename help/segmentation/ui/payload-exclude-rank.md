---
solution: Experience Platform
title: Payload Exclude and Payload Rank Operators
description: Learn how to use the payload exclude and payload rank operators in audience compositions.
hide: true
---

# Payload Exclude and Payload Rank operators

Currently, audiences that are built on array-based schemas (such as a customer profile holding multiple product or account records) cannot exclude specific array elements or use a single element within an array to rank the audience.

The Payload Exclude and Payload Rank operators help mitigate this, as they can directly act upon the direct array elements within your audience.

## Payload operators {#operators}

The **Payload Exclude** operator is used to remove specific array elements from consideration of the audience **without** removing the customer from the audience. This removal is based off of a separately maintained and provided exclusion list.

The **Payload Ranking** operator is used to select a single best element for a customer that qualified through more than one array element. You can use this operator to choose a specific element to rank the customers by.

You can use these operators when your audience is built on an **array attribute** (such as a list of products or account records per profile) and either of the following is true:

- Certain array elements **cannot** be targeted, and the exclusion list is maintained outside of the composition
- Customers can qualify through multiple array elements, but only one of those elements should drive personalization

## Usage {#usage}

If you're using these operators, the composition evaluates in the following order: Targeting criteria, exclusion, followed by ranking.

>[!IMPORTANT]
>
>The exclusion will **always** be run before the ranking. If ranking ran before exclusion, a valid customer could be dropped from the audience entirely.

The targeting criteria is applied to the array attribute. This targeting criteria is your standard segmentation or filtering logic.

After the targeting criteria  is applied, the **Payload Exclude** operator removes any array values that match the disallowed values.

Once the exclusion is applied, the **Payload Rank** operator selects the top element from what remains.

## PayloadExclude {#exclude}

The **PayloadExclude** operator filters array elements by checking membership against a separate exclusion source array on the same profile. This operates at the **array-element** level, so the customer is **never** removed from the audience by this operator. At this time, the **PayloadExclude** operator **must** be injected to the composition using the API.

**API format**

```http
PATCH /journey/audience-orchestration/recipes/{COMPOSITION_ID}/exclusion
```

| Field | Description |
| ----- | ----------- |
| `COMPOSITION_ID` | The ID of the audience composition you're trying to add a payload exclusion to. |

**Request**

+++ A sample request to add a payload exclude to a composition, matching the previously mentioned exclude rules.

```shell
curl -X PATCH https://platform.adobe.io/journey/audience-orchestration/recipes/{COMPOSITION_ID}/exclusion
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H "Content-Type: application/json" \
  -H "If-Match: {_etag}" \
  -H "x-gw-ims-org-id: {IMS_ORG}" \
  -H "x-sandbox-name: {SANDBOX_NAME}" \
  -d '{
    "arrayAttribute": "{NAMESPACE}.productDetailsList",
    "qualifyingSource": {
        "array": "{NAMESPACE}.productExclusionList",
        "localKey": "productUniqueId",
        "remoteKey": "productUniqueId"
    },
    "excludeIfAnyOf": {
        "field": "qualifyingSource.exclusionList",
        "values": ["EXCL0001", "EXCL0020"]
    }
  }'
```

| Field | Description |
| ----- | ----------- |
| `arrayAttribute` | The array that is being filtered. |
| `qualifyingSource.array` | The separate array that holds the exclusion codes for each element. |
| `qualifyingSource.localKey` | The join key on the `arrayAttribute`. |
| `qualifyingSource.remoteKey` | The join key on the `qualifyingSource.array`. |
| `excludeIfAnyOf.field` | The field on the exclusion source that contains the exclusion codes. |
| `excludeIfAnyOf.values` | The specific exclusion codes to enforce for the composition. |

+++

## PayloadRank {#rank}

The **PayloadRank** operator ranks array elements by a chosen attribute and returns the top number of elements specified.

When you use the rank operator, you'll need to use the following fields:

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
