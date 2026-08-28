---
solution: Experience Platform
title: Payload Exclude Operator
description: Learn how to use the payload exclude in audience compositions.
hide: true
---

# Payload Exclude operator

The **Payload Exclude** operator lets you remove specific array elements from consideration of the audience **without** removing the customer from the audience. This removal is based off of a separately maintained and provided exclusion list.

You can use this operator when your audience is built on an **array attribute** (such as a list of products or account records per profile) and either of the following is true:

- Certain array elements **cannot** be targeted, and the exclusion list is maintained outside of the composition
- Customers can qualify through multiple array elements, but only one of those elements should drive personalization

## Operation {#operation}

If you're using the Payload Exclude operator, the composition evaluates in the following order: Targeting criteria, exclusion, followed by ranking.

>[!IMPORTANT]
>
>The exclusion will **always** be run before the ranking. If ranking ran before exclusion, a valid customer could be dropped from the audience entirely.

The targeting criteria is applied to the array attribute. This targeting criteria is your standard segmentation or filtering logic.

After the targeting criteria  is applied, the **Payload Exclude** operator removes any array values that match the disallowed values.

Once the exclusion is applied, the **Payload Rank** operator selects the top element from what remains.

## Usage {#usage}

To use the PayloadExclude operator, you'll need to complete the following prerequisites:

- Add an audience with a payload to the composition
- Add a [Payload Rank](./payload-rank.md) block to the composition

Once you complete these steps, you can add the PayloadExclude operator to your composition. The PayloadExclude operator will automatically be placed between the audience with a payload and the PayloadRank operator.

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
  -H "x-api-key: {API_KEY}" \
  -d '{
    "qualifyingSource": {
        "array": {
            "path": "{NAMESPACE}.productExclusionList",
            "xdmType": "ARRAY"
        },
        "localKey": {
            "path": "{NAMESPACE}.productDetailsList.productUniqueId",
            "xdmType": "STRING"
        },
        "remoteKey": {
            "path": "{NAMESPACE}.productExclusionList.productUniqueId",
            "xdmType": "STRING"
        }
    },
    "excludeIfAnyOf": {
        "field": {
            "path": "{NAMESPACE}.productExclusionList.exclusionList",
            "xdmType": "ARRAY"
        },
        "values": [
            "EXCL0001", "EXCL0020"
        ]
    }
  }'
```

| Field | Description |
| ----- | ----------- |
| `qualifyingSource.array.path` | The location of the array that holds the exclusion codes for each element. |
| `qualifyingSource.localKey.path` | The location of the join key on the `arrayAttribute`. |
| `qualifyingSource.remoteKey` | The join key on the `qualifyingSource.array`. |
| `excludeIfAnyOf.field` | The field on the exclusion source that contains the exclusion codes. |
| `excludeIfAnyOf.values` | The specific exclusion codes to enforce for the composition. |

+++

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

After the exclusion is ran, only two elements remain: Element 1 and Element 2. You can now rank these remaining elements with the [PayloadRank operator](./payload-rank.md).

If you rank the remaining elements by descending order on spend, returning only the top 1 result, the remaining elements would look as follows:

| Element | Spend | Rank |
| ------- | ----- | ---- |
| Element 02 | 2000 | 1 (selected) |
| Element 01 | 1000 | 2 |

As a result, Element 02 is selected since it has the highest spend of the remaining elements. The rank operator **never** sees Element 03 or Element 04, so their spend values do not matter. 

For the final audience, the customer **remains** in the audience, since the exclusion only removes the array elements within the profile.

## Limitation {#limitations}

The following limitations apply when using the PayloadExclude operator:

- PayloadExclude **only** operates on array elements. This operator **cannot** remove an entire profile from an audience.
- The `excludeIfAnyOf.values` field is scoped **per campaign** and is set by the API caller for each composition. This field is **not** a persistent, audience-wide rule.
- You can only use a PayloadExclude on a composition that is in the **Draft** state.
