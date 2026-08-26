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

[PLACEHOLDER: Introduce only the mental model needed to understand retention choices.

Include:
- Profile store supports engagement workflows such as segmentation, activation, and personalization
- data lake supports analytical and longer-term workflows
- datasets can support one or both
- Experience Event retention can be managed independently in each repository
- removing data from one repository does not automatically remove it from the other
- both Profile and data lake storage are subject to licensing entitlements

Do not turn this into a full architecture explanation.]

## Data Lifecycle Management capabilities {#capabilities}

[PLACEHOLDER: One short introduction explaining that the correct capability depends on what the customer needs to remove and where.]

| If you need to… | Use |
| --- | --- |
| Remove records associated with a primary identity for operational purposes | [Record delete](PLACEHOLDER) |
| Remove an entire dataset on a scheduled date | [Dataset expiration](PLACEHOLDER) |
| Remove old Experience Events from the Profile store over time | [Experience Event expiration](PLACEHOLDER) |
| Remove old Experience Event records from the data lake while keeping the dataset | [Data lake retention policy](PLACEHOLDER) |
| Remove inactive pseudonymous profiles | [Pseudonymous Profile data expiration](PLACEHOLDER) |
| Fulfill privacy or regulatory data-subject requests | [Privacy Service](PLACEHOLDER) |

[PLACEHOLDER: Brief synthesis only.

Clarify:
- Record delete and Dataset expiration are actions submitted when needed
- Experience Event expiration, data lake retention, and Pseudonymous Profile data expiration are ongoing controls
- avoid limitations, quotas, defaults, or procedural detail]

## Choose or implement a capability {#choose-or-implement}

[PLACEHOLDER: Make the routing model explicit.

Two clear paths:

**Still deciding which capability to use?**
Route to **Choose the right Data Lifecycle Management capability**.
Explain that it compares the available mechanisms, their scope, and when to use each.

**Already know what you need to do?**
Use the implementation routes below.

This section should make the handoff between overview → decision guide → implementation unmistakable.]

## Implement a data lifecycle task {#implement}

[PLACEHOLDER: Short introduction for readers who already know their intended action.

Organize by customer task rather than by UI/API technology.]

### Remove specific records

[PLACEHOLDER:
- route to Record delete UI guidance
- route to Record delete API/work order guidance
- optionally route to processing timelines and quota reference where relevant
- do not reproduce limits or edge cases here]

### Remove an entire dataset

[PLACEHOLDER:
- route to Dataset expiration UI guidance
- route to Dataset expiration API guidance
- optionally route to processing timelines
- do not reproduce the detailed processing-stage table]

### Configure Experience Event retention

[PLACEHOLDER:
- route to the Datasets / Set data retention policy workflow
- distinguish:
  - Experience Event expiration = Profile-side behavior
  - Profile retention = current UI label
  - Data lake retention policy = separate data lake policy
- make clear the two retention periods are independent
- do not use TTL as public terminology except where reproducing an exact technical identifier]

### Remove inactive pseudonymous profiles

[PLACEHOLDER:
- route to Pseudonymous Profile data expiration guidance
- clarify that it is configured separately at sandbox level in Profile settings
- do not present it as part of the Dataset retention workflow]

## Timelines and transparency {#timelines-and-transparency}

[PLACEHOLDER: Briefly explain that Record delete and Dataset expiration have defined processing stages and status visibility.

Include:
- these operations do not complete immediately
- customers can monitor request/job status
- link to Data Lifecycle processing timelines for detailed timing, SLA, and processing-stage information
- do not reproduce timeline tables, SLA values, or quota details here]

## Additional guidance {#additional-guidance}

[PLACEHOLDER: Keep only distinct supporting routes that answer questions not already handled above.

Potential routes:
- processing timelines and SLA behavior
- quota and entitlement guidance
- data-management / license entitlement best practices
- API overview for broader programmatic lifecycle management

Each link should explain what question it answers. Avoid turning this into a generic resource directory.]
