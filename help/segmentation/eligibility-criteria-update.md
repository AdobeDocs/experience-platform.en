---
title: Segmentation Eligibility Criteria Update
description: Learn about the segmentation eligibility criteria updates that affect the types of audiences that can be evaluated using streaming and edge segmentation.
hide: yes
hidefromtoc: yes
exl-id: c91c0f75-9bc8-4fa7-9d27-9b07d0ea560c
---
# Segmentation eligibility criteria update

Starting on May 20, 2025, three updates will be made that affect segmentation eligibility.

1. Eligible ruleset
2. Time window eligibility
3. Including batch data in streaming audiences
4. Active merge policies

## Ruleset {#ruleset}

Any **new or edited** segment definitions that match the following rulesets will **no longer** be evaluated using streaming or edge segmentation. Instead, they will be evaluated using batch segmentation.

- A single event with a time window longer than 24 hours
  - Activate an audience with all profiles that viewed a webpage in last 3 days.
- A single event with no time window
  - Activate an audience with all profiles that viewed a webpage.

## Time window {#time-window}

In order to evaluate an audience with streaming segmentation, it **must** be constrained within a 24 hour time window.

## Including batch data in streaming audiences {#include-batch-data}

Prior to this update, you could create a streaming audience definition that combined both batch and streaming data sources. However, with the latest update, creating an audience with both batch and streaming data sources will be evaluated using batch segmentation.

If you need to evaluate a segment definition using streaming or edge segmentation that matches the updated query type, you need to explicitly create a batch and streaming query and combine them using segment of segments. This batch query **must** be based on a profile schema.

For example, let's say you have two audiences, with one audience housing profile schema data and the other housing experience event schema data:

| Audience | Schema | Source type | Query definition | Audience ID | 
| -------- | ------ | ----------- | ---------------- | ----------- |
| CA Residents | Profile | Batch | Home address is in the state of California | `e3be6d7f-1727-401f-a41e-c296b45f607a` |
| Recent checkouts | Experience Event | Streaming | Has at least one checkout in the the last 24 hours | `9e1646bb-57ff-4309-ba59-17d6c5bab6a1` |

If you want to use the batch component in your streaming audience, you'll need to make a reference to the batch audience using segment of segments.

So, an example query that would combine the two audiences together would look as follows:

```
inSegment("e3be6d7f-1727-401f-a41e-c296b45f607a") and 
CHAIN(xEvent, timestamp, [C0: WHAT(eventType.equals("commerce.checkouts", false)) 
WHEN(<= 24 hours before now)])
```

The resulting audience *will* be evaluated using streaming segmentation, since it leverages the batch audience's membership by referring to the batch audience component.

However, if you want to combine two audiences with event data, you **cannot** just combine the two events. You'll need to create both audiences, then create another audience that uses `inSegment` to refer to both of these audiences.

For example, let's say you have two audiences, with both audiences housing experience event schema data:

| Audience | Schema | Source type | Query definition | Audience ID | 
| -------- | ------ | ----------- | ---------------- | ----------- |
| Recent abandons | Experience event | Batch | Has at least one abandon event in the last 24 hours | `e3be6d7f-1727-401f-a41e-c296b45f607a` |
| Recent checkouts | Experience Event | Streaming | Has at least one checkout in the the last 24 hours | `9e1646bb-57ff-4309-ba59-17d6c5bab6a1` |

In this situation, you'd need to create a third audience as follows:

```
inSegment("e3be6d7f-1727-401f-a41e-c296b45f607a") and inSegment("9e1646bb-57ff-4309-ba59-17d6c5bab6a1")
```

>[!IMPORTANT]
>
>All existing segment definitions that match the query types will remain evaluated using streaming or edge segmentation until they are edited.
>
>Additionally, all existing segment definitions that currently meet the other streaming or edge segmentation evaluation criteria will remain evaluated with streaming or edge segmentation.

## Merge policy {#merge-policy}

Any **new or edited** segment definitions that qualify for streaming or edge segmentation **must** be on the "Active on Edge" merge policy.

All existing segment definitions that are evaluated using streaming or edge segmentation will continue to work as is.
