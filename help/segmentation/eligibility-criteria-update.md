---
title: Segmentation Eligibility Criteria Update
description: Learn about the segmentation eligibility criteria updates that affect the types of audiences that can be evaluated using streaming and edge segmentation.
hide: true
exl-id: c91c0f75-9bc8-4fa7-9d27-9b07d0ea560c
TQID: 'https://experienceleague.adobe.com/xyQ6nsneyxiMeFGPF4ywLlpOGZ91K96gPr8-fn4wvzA'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
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