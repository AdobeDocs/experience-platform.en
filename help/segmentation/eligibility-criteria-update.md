---
title: Segmentation Eligibility Criteria Update
description: Learn about the segmentation eligibility criteria updates that affect the types of audiences that can be evaluated using streaming and edge segmentation.
hide: yes
hidefromtoc: yes
exl-id: c91c0f75-9bc8-4fa7-9d27-9b07d0ea560c
---
# Segmentation eligibility criteria update

Starting on May 20, 2025, two updates will be made that affect segmentation eligibility.

1. Streaming and edge segmentation query types
2. Streaming and edge segmentation merge policies

## Query types

Any **new or edited** segment definitions that match the following query types will **no longer** be evaluated using streaming or edge segmentation. Instead, they will be evaluated using batch segmentation.

- A single event with a time window longer than 24 hours
  - Activate an audience with all profiles that viewed a webpage in last 3 days.
- A single event with no time window
  - Activate an audience with all profiles that viewed a webpage.

If you need to evaluate a segment definition using streaming or edge segmentation that matches the updated query type, you can explicitly create a batch and streaming query and combine them using segment of segments.

For example, if you needed to activate an audience with all profiles that viewed a webpage in last 3 days using streaming segmentation, you could create the following queries:

- Q1 (Streaming): All profiles who viewed a web page in last 24 hours
- Q2 (Batch): All profiles who viewed a web page in the last 3 days

Then, you could combine them by referring to Q1 or Q2.

Similarly, if you needed to activate an audience with all profiles that viewed a webpage, you could create the following queries:

- Q3 (Streaming): All profiles who viewed a web page in last 24 hours
- Q4 (Batch): All profiles who viewed a web page.
 
Then, you could combine them by referring to Q3 or Q4.

>[!IMPORTANT]
>
>All existing segment definitions that match the query types will remain evaluated using streaming or edge segmentation until they are edited.
>
>Additionally, all existing segment definitions that currently meet the other streaming or edge segmentation evaluation criteria will remain evaluated with streaming or edge segmentation.

## Merge policy

Any **new or edited** segment definitions that qualify for streaming or edge segmentation **must** be on the "Active on Edge" merge policy.

All existing segment definitions that are evaluated using streaming or edge segmentation will continue to work as is.
