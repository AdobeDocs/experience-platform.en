---
solution: Experience Platform
title: Payload Rank and Payload Exclude Operators
description: Learn how to use the Payload rank and Payload exclude operations in audience compositions. These operations let you directly affect the elements of the array without modifying the audience itself.
hide: true
---

# Payload rank and Payload exclude operators

Currently, audiences that are built on array-based schemas (such as a customer profile holding multiple product or account records) cannot exclude specific array elements or use a single element within an array to rank the audience.

The Payload rank and Payload Exclude operators help mitigate this, as they can directly act upon the elements within the array that live inside your audience.

## Getting started {#getting-started}

Before continuing this guide, review the [getting started with APIs guide](/help/segmentation/api/getting-started.md) for important information that you need to know in order to successfully make calls to the API, including required headers and how to read example API calls.

## Operators {#operators}

The **Payload exclude** operator lets you remove specific array elements from consideration of the audience **without** removing the customer from the audience. This removal is based off of a separately maintained and provided exclusion list.

The **Payload rank** operator lets you select a single best element for a customer that qualified through more than one array element. You can then choose a specific element to rank the customers by.

You can use these operators when your audience is built on an **array attribute** (such as a list of products or account records per profile) and either of the following is true:

- Certain array elements **cannot** be targeted, and the exclusion list is maintained outside of the composition
- Customers can qualify through multiple array elements, but only one of those elements should drive personalization

## Payload rank {#payload-rank}

The **Payload rank** operator ranks array elements by a chosen attribute and returns the top number of elements specified.

After adding an audience with a payload attribute, you can add the Payload rank operator.

![The add Payload rank button is highlighted within Audience Composition.](/help/segmentation/images/ui/payload-rank-exclude/add-payload-rank.png)

When you use the rank operator, you can set the following fields:

| Field | Description |
| ----- | ----------- |
| Payload array | The array that is being ranked. |
| Rank order attribute | The attribute that you want to rank the array by. |
| Rank order sort direction | The sort order for the array. This can either be ascending or descending. |
| Limit | The number of top elements to return. |

![The Payload rank options are highlighted.](/help/segmentation/images/ui/payload-rank-exclude/payload-rank-options.png)

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

![The override options within the Payload rank operator are highlighted.](/help/segmentation/images/ui/payload-rank-exclude/override-options.png)

## Payload Exclude {#payload-exclude}

If you're using the Payload exclude operator, the composition evaluates in the following order: Targeting criteria, exclusion, followed by ranking.

>[!IMPORTANT]
>
>The exclusion will **always** be run before the ranking. If ranking ran before exclusion, a valid customer could be dropped from the audience entirely.

The targeting criteria is applied to the array attribute. This targeting criteria is your standard segmentation or filtering logic.

After the targeting criteria  is applied, the **Payload exclude** operator removes any array values that match the disallowed values.

Once the exclusion is applied, the **Payload rank** operator selects the top element from what remains.

### Usage {#exclude-usage}

To use the Payload exclude operator, you'll need to complete the following prerequisites:

- Add an [audience with a payload](./audience-composition.md#audience-payload) to the composition
- Add a [Payload Rank](#payload-rank) block to the composition

Once you complete these steps, you can add the Payload exclude operator to your composition. The Payload exclude operator will automatically be placed between the audience with a payload and the Payload rank operator.

### Operation {#exclude-operation}

The **Payload exclude** operator filters array elements by checking membership against a separate exclusion source array on the same profile. This operates at the **array-element** level, so the customer is **never** removed from the audience by this operator. At this time, the **Payload exclude** operator **must** be injected to the composition using the API.

**API format**

```http
PATCH /journey/audience-orchestration/recipes/{COMPOSITION_ID}/exclusion
```

| Field | Description |
| ----- | ----------- |
| `COMPOSITION_ID` | The ID of the audience composition you're trying to add a payload exclusion to. You can get this ID from the URL of the saved composition you're injecting the payload exclusion to. For example, if the composition is found at `https://experience.adobe.com/#/@organization/sname:prod/platform/audience/compose/6a7aa076d795341f249d9262`, `6a7aa076d795341f249d9262` is the composition ID. |

**Request**

+++ A sample request to add a payload exclude to a composition

```shell
curl -X PATCH https://platform.adobe.io/journey/audience-orchestration/recipes/{COMPOSITION_ID}/exclusion
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H "Content-Type: application/json" \
  -H "If-Match: {_etag}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}" \
  -H "x-api-key: {API_KEY}" \
  -d '{
    "qualifyingSource": {
        "array": {
            "path": "{TENANT_ID}.productExclusionList",
            "xdmType": "ARRAY"
        },
        "localKey": {
            "path": "{TENANT_ID}.productDetailsList.productUniqueId",
            "xdmType": "STRING"
        },
        "remoteKey": {
            "path": "{TENANT_ID}.productExclusionList.productUniqueId",
            "xdmType": "STRING"
        }
    },
    "excludeIfAnyOf": {
        "field": {
            "path": "{TENANT_ID}.productExclusionList.exclusionList",
            "xdmType": "ARRAY"
        },
        "values": [
            "EXCL0001", "EXCL0020"
        ]
    }
  }'
```

>[!NOTE]
>
>The `{TENANT_ID}` value in the request body represents the namespace of your organization. For more information about this value, read the [XDM Schema Registry guide](/help/xdm/api/getting-started.md#know-your-tenant_id).

| Field | Description |
| ----- | ----------- |
| `qualifyingSource.array.path` | The location of the array that holds the exclusion codes for each element. |
| `qualifyingSource.localKey.path` | The location of the join key on the `arrayAttribute`. |
| `qualifyingSource.remoteKey.path` | The join key on the `qualifyingSource.array`. |
| `excludeIfAnyOf.field.path` | The field on the exclusion source that contains the exclusion codes. |
| `excludeIfAnyOf.values` | The specific exclusion codes to enforce for the composition. |

+++

## Sample flow {#sample-flow}

Let's say you have a customer that has multiple cards linked to their profile. However, you want to filter out some of these credit cards linked to the profile, since they don't match the qualification criteria you're looking for. This profile contains the following four array elements, with the exclusion codes precomputed from the source array. 

| Element | Exclusion codes | Spend |
| ------- | --------------- | ----- |
| Credit card 1 | EXCL0008 | 1000 |
| Credit card 2 | EXCL0015 | 2000 |
| Credit card 3 | EXCL0001, EXCL0020 | 4000 |
| Credit card 4 | EXCL0001 | 5000 |

For the current example, `EXCL0001` and `EXCL0020` are the policies that will be enforced, since those are the policies that make the credit cards not match the qualification criteria.

When this request runs, the **Payload exclude** operator checks each element's exclusion codes against the exclusion codes that were just injected. An element is excluded if it contains **any** of the exclusion codes that are enforced on the array.  

| Element | Exclusion codes | Contains the specified exclusion code? | Result |
| --- | --- | --- | --- |
| Credit card 1 | EXCL0008 | No | Kept |
| Credit card 2 | EXCL0015 | No | Kept |
| Credit card 3 | EXCL0001, EXCL0020 | Yes | Excluded |
| Credit card 4 | EXCL0001 | Yes | Excluded |

After the exclusion runs, only two elements remain: Credit card 1 and Credit card 2. You can now rank these remaining elements with the Payload rank operator.

If you rank the remaining elements by descending order on spend, returning only the top 1 result, the remaining elements would look as follows:

| Element | Spend | Rank |
| ------- | ----- | ---- |
| Credit card 2 | 2000 | 1 (selected) |
| Credit card 1 | 1000 | 2 |

As a result, Credit card 2 is selected since it has the highest spend of the remaining elements. The rank operator **never** sees Credit card 3 or Credit card 4, so their spend values do not matter. 

For the final audience, the customer **remains** in the audience, since the exclusion only removes the array elements within the profile.

## Limitation {#limitations}

The following limitations apply when using the Payload exclude operator:

- Payload exclude **only** operates on array elements. This operator **cannot** remove an entire profile from an audience.
- The `excludeIfAnyOf.values` field is scoped **per composition** and is set by the API caller for each composition. This field is **not** a persistent, audience-wide rule.
- You can only use a Payload exclude on a composition that is in the **Draft** state.
