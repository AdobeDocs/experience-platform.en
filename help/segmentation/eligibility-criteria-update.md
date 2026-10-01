---
title: Segmentation Eligibility Criteria Update
description: Learn about the segmentation eligibility criteria updates that affect the types of audiences that can be evaluated using streaming and edge segmentation.
hide: true
exl-id: c91c0f75-9bc8-4fa7-9d27-9b07d0ea560c
TQID: https://experienceleague.adobe.com/xyQ6nsneyxiMeFGPF4ywLlpOGZ91K96gPr8-fn4wvzA
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
subfeature_v2:
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
---
# Segmentation eligibility criteria update

>[!IMPORTANT]
>
>All existing segment definitions that are currently evaluated using streaming or edge segmentation will continue to work as is, unless edited or updated.

If you are using the upgraded streaming segmentation, the following updates apply to your streaming segmentation eligibility:

1. Eligible ruleset

## Ruleset {#ruleset}

Any segment definitions that match the following ruleset will **no longer** be evaluated using streaming or edge segmentation. Instead, it will be evaluated using batch segmentation:

- A segment definition with batch-ingested profile data

Additionally, segment definitions that match the following rulesets will have a warning attached to its evaluation:

- A segment definition that contain fields with no ingested data
  - Streaming evaluation may not qualify until the data arrives
- A segment definition that contain fields with both streaming data and batch data
  - Streaming evaluation will not evaluate, since the audience contains both batch and streaming data.