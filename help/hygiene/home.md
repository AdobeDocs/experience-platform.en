---
title: Advanced Data Lifecycle Management Overview
description: Advanced Data Lifecycle Management allows you to manage the lifecycle of your data by updating or purging outdated or inaccurate records.
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

As data accumulates in Adobe Experience Platform, manage its lifecycle so that the data you retain continues to support active use cases. Removing data that is no longer useful helps reduce stale signals, unnecessary storage and processing, and supports your organization's retention requirements and licensing entitlements.

Advanced Data Lifecycle Management provides capabilities to remove specific records, retire entire datasets, and automatically expire data that no longer needs to remain in the Profile store or data lake. Use the appropriate capability based on what you need to remove, where the data is stored, and whether the removal is a one-time action or an ongoing retention policy.

## Data Lifecycle Management and Privacy Service {#privacy-service}

Use Advanced Data Lifecycle Management when you need to remove or retain data for operational purposes, such as data cleansing, data minimization, or managing stored data over time.

For privacy or regulatory data-subject rights requests, use [Adobe Experience Platform Privacy Service](placeholder.md) instead. Do not use Record delete or other Data Lifecycle Management capabilities to fulfill these requests.

## Understand retention across Experience Platform {#retention-across-platform}

To choose an appropriate retention policy, first consider where your data is stored and how you use it. The Profile store supports engagement workflows such as segmentation, activation, and personalization, while the data lake supports analytical and longer-term use cases. A dataset can support either type of workflow or both.

For Experience Event data stored in both repositories, manage retention in each repository independently. Removing data from the Profile store does not automatically remove the same data from the data lake, and vice versa. Both Profile store and data lake storage are subject to your organization's licensing entitlements.

## Data Lifecycle Management capabilities {#capabilities}

Choose a capability based on what you need to remove and where the data is stored.

| If you need to… | Use |
| --- | --- |
| Remove records associated with a primary identity for operational purposes | [Record delete](placeholder.md) |
| Remove an entire dataset on a scheduled date | [Dataset expiration](placeholder.md) |
| Remove old Experience Events from the Profile store over time | [Experience Event expiration](placeholder.md) |
| Remove old Experience Event records from the data lake while keeping the dataset | [Data lake retention policy](placeholder.md) |
| Remove inactive pseudonymous profiles | [Pseudonymous Profile data expiration](placeholder.md) |
| Fulfill privacy or regulatory data-subject requests | [Privacy Service](placeholder.md) |

Use Record delete or Dataset expiration when you need to submit a specific removal action. To manage data automatically over time, use Experience Event expiration, a data lake retention policy, or Pseudonymous Profile data expiration.

## Choose or implement a capability {#choose-or-implement}

If you are still deciding which capability fits your goal, see [Choose the right Data Lifecycle Management capability](placeholder.md). The guide compares the available retention and deletion options, explains their scope, and helps you determine when to use each one.

If you already know which capability you need, use the implementation guidance below to complete the task.

## Implement a data lifecycle task {#implement}

Use the task-specific guidance below when you already know which Data Lifecycle Management capability you need. Each section routes you to the relevant UI and API documentation without repeating the implementation steps here.

### Remove specific records

To remove records associated with a primary identity, use [Record delete in the Data Lifecycle workspace](placeholder.md) or submit a request with the [work order API](placeholder.md).

### Remove an entire dataset

To remove an entire dataset on a scheduled date, use [Dataset expiration in the Data Lifecycle workspace](placeholder.md) or the [dataset expiration API](placeholder.md).

### Configure Experience Event retention

To control how long Experience Events remain in the Profile store or data lake, use the [Set data retention policy](placeholder.md) workflow in the Datasets workspace. **Profile retention** controls Experience Event expiration from the Profile store, while a **data lake retention policy** controls row-level retention in the data lake. Configure the two retention periods independently based on how long you need the data in each repository.

### Remove inactive pseudonymous profiles

To remove inactive pseudonymous profiles, configure [Pseudonymous Profile data expiration](placeholder.md) in Profile settings. This setting applies at the sandbox level and is separate from the dataset-level retention settings used for Experience Events.

## Timelines and transparency {#timelines-and-transparency}

When you submit a Record delete request or schedule a Dataset expiration, the operation does not complete immediately. You can monitor its status as it moves through the applicable processing stages.

For detailed processing stages, timing, and SLA information, see [Data Lifecycle processing timelines](placeholder.md).

## Additional guidance {#additional-guidance}

Use the following resources when you need supporting information beyond the task-specific guidance above:

- To review Record delete submission limits and quota usage, see [Data Lifecycle quotas](placeholder.md).
- To understand how stored data contributes to your licensing entitlements and how to manage usage, see [Data management license entitlement best practices](placeholder.md).
- To automate Data Lifecycle operations programmatically, see the [Data Hygiene API overview](placeholder.md).
