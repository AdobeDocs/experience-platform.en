---
title: Advanced Data Lifecycle Management Overview
description: Learn how to manage data retention and deletion in Adobe Experience Platform, choose the right Data Lifecycle Management capability, and find the appropriate implementation guidance.
exl-id: 104a2bb8-3242-4a20-b98d-ad6df8071a16
TQID: https://experienceleague.adobe.com/iUo7h2mcsIwyECpzhl3NMAkqayBZuBSI1kvcYwOcupw
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# Advanced Data Lifecycle Management in Adobe Experience Platform

Keep only the data in Adobe Experience Platform that continues to support active use cases. By removing data that no longer provides value, you can reduce stale signals and unnecessary storage and processing, support your organization's retention requirements, and stay within your licensing entitlements.

Use Advanced Data Lifecycle Management to remove specific records, delete entire datasets, or automatically remove data that no longer needs to remain in Experience Platform. Choose the appropriate capability based on what you need to remove, where the data is stored, and whether you need a one-time action or an ongoing retention policy.

## Data Lifecycle Management and Privacy Service {#privacy-service}

Use Advanced Data Lifecycle Management when you need to manage data retention or remove data for operational purposes, such as data cleansing, data minimization, or managing stored data over time.

For privacy or regulatory data-subject rights requests, use [Adobe Experience Platform Privacy Service](../privacy-service/home.md) instead. Do not use record delete or other Data Lifecycle Management capabilities to fulfill these requests.

## Understand retention across Experience Platform {#retention-across-platform}

To choose an appropriate retention policy, first consider where your data is stored and how you use it. The Profile store supports engagement workflows such as segmentation, activation, and personalization, while the data lake supports analytical and longer-term use cases. A dataset can support either type of workflow or both.

For Experience Event data stored in both repositories, manage retention in each repository independently. Expiring data under one retention policy does not automatically cause the same data to expire under the other. Both Profile store and data lake storage are subject to your organization's licensing entitlements.

## Data retention and deletion options {#capabilities}

Choose a capability based on what you need to remove and where the data is stored.

| Goal | Recommended option |
| --- | --- |
| Remove records matched by primary identity for operational purposes | [Record delete](./ui/record-delete.md) |
| Remove an entire dataset on a scheduled date | [Dataset expiration](./ui/dataset-expiration.md) |
| Remove old Experience Events from the Profile store over time | [Experience Event expiration](../profile/event-expirations.md) |
| Remove old Experience Event records from the data lake while keeping the dataset | [Data lake retention policy](../catalog/datasets/experience-event-dataset-retention-ttl-guide.md) |
| Remove inactive pseudonymous profiles from the Profile store | [Pseudonymous Profile data expiration](../profile/pseudonymous-profiles.md) |
| Fulfill privacy or regulatory data-subject requests | [Privacy Service](../privacy-service/home.md) |

Use record delete or dataset expiration for one-time removal actions. To manage data automatically over time, use Experience Event expiration, a data lake retention policy, or Pseudonymous Profile data expiration.

## Choose or implement a capability {#choose-or-implement}

If you are still deciding which capability fits your goal, see [Choose the right Data Lifecycle Management capability](./choose-a-capability.md). The guide compares the available retention and deletion options, explains their scope, and helps you determine when to use each one.

If you already know which capability you need, continue to the implementation guidance below.

## Implement a data lifecycle task {#implement}

Use the task-specific guidance below to navigate to the relevant implementation documentation.

### Remove specific records

To remove records associated with a primary identity, use [record delete in the [!UICONTROL Data Lifecycle] workspace](./ui/record-delete.md) or submit a request with the [work order API](./api/workorder.md).

### Remove an entire dataset

To remove an entire dataset on a scheduled date, use [dataset expiration in the [!UICONTROL Data Lifecycle] workspace](./ui/dataset-expiration.md) or the [dataset expiration API](./api/dataset-expiration.md).

### Configure Experience Event retention

To control how long Experience Events remain in the Profile store or data lake, use the [Set data retention policy](../catalog/datasets/user-guide.md#data-retention-policy) workflow in the [!UICONTROL Datasets] workspace. In this workflow, the **Profile Service retention policy** configures Experience Event expiration in the Profile store, while a **data lake retention policy** applies row-level expiration in the data lake. Configure each retention policy independently based on how long you need the data in each repository.

### Remove inactive pseudonymous profiles

To remove inactive pseudonymous profiles, configure [Pseudonymous Profile data expiration](../profile/pseudonymous-profiles.md) in Profile settings. This setting applies at the sandbox level and is separate from the dataset-level retention settings used for Experience Events.

## Timelines and transparency {#timelines-and-transparency}

Record delete requests and dataset expiration do not complete immediately. A scheduled dataset expiration remains pending until its expiration time, after which processing begins. You can [monitor the current status of these operations](./ui/browse.md) at key processing milestones.

For detailed processing stages and timing, including applicable SLA information for record delete requests, see [Data Lifecycle processing timelines](./data-lifecycle-processing-timelines.md).

## Additional guidance {#additional-guidance}

Use the following resources when you need supporting information beyond the task-specific guidance above:

- To understand how stored data affects license usage and how to manage that usage, see [Data management license entitlement best practices](../landing/license-usage-and-guardrails/data-management-best-practices.md).
- To review record delete submission limits and quota usage, see [Data Lifecycle quotas](./api/quota.md).
- If you use Data Mirror to keep relational-schema datasets synchronized with an external source system, consider how source-system changes can affect deleted records. See the [Data Mirror overview](../xdm/data-mirror/overview.md).
- To automate Data Lifecycle operations programmatically, see the [Data Hygiene API overview](./api/overview.md).
