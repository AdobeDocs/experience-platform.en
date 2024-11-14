---
title: Backup object configuration using Sandbox Tooling
description: 
feature: Use Cases, Sandbox Tooling
---
# Backup object configuration using Sandbox Tooling

Backup object configurations, or metadata, using Sandbox Tooling packages to safely reset sandboxes, add versioning support, and prevent the loss of critical configurations such as schemas, datasets, and segments, especially during development iterations.

![Overview showing the benefits of sandbox tooling](../images/use-cases/tooling-overview.png)

## Why consider this use case {#why-this-use-case}

<!-- WHY THIS USE CASE HERE -->

Before resetting any non-production sandboxes over their usage entitlements...

- bit about the benefits of a sandbox backup
- bit about the things to add into a backup

## Prerequisites and planning {#prerequisites-and-planning}

When planning to create your own backup package(s) within your organization, consider the following prerequisites in your planning process:

- Evaluate the current usage of the sandboxes within your organization. Are any non-production sandboxes approaching or exceeding their license entitlement?
- What is the scope of the metadata you wish to back up? You may consider backing up either a complete or partial sandbox, depending on your use case.
- Depending on the scope metadata you wish to back up, ensure you understand how to manually [add objects to a package](../ui/sandbox-tooling.md#add-object-to-a-new-package) or how to [export an entire sandbox](../ui/sandbox-tooling.md#export-an-entire-sandbox).
- Ensure you have access to Sandbox Tooling in your organization with the correct permissions.

### UI functionality, Platform components, and Experience Cloud products that you will use {#ui-functionality-and-elements}

To successfully implement this use case, you must use multiple areas of Adobe Experience Platform. Make sure that you have the necessary [attribute-based access control permissions](../../access-control/abac/overview.md) for all these areas, or ask your system administrator to grant you the necessary permissions.

  - [Sandbox Tooling](../ui/sandbox-tooling.md)
  - [Sandbox management](../ui/user-guide.md)
  - [License usage dashboard](../../landing/license-usage-and-guardrails/license-usage-dashboard.md-)
  - [Datasets](../../catalog/datasets/overview.md)
  - [Schemas](../../xdm//home.md)
  - [Segments](../../segmentation/home.md)
  <!-- - [Adobe Journey Optimizer](../../landing/) -->

## How to achieve the use case: high-level overview {#achieve-the-use-case-high-level}

<!-- HIGH LEVEL OVERVIEW HERE -->

## How to achieve the use case: Step-by-step instructions {#step-by-step-instructions}

<!-- Read through the sections below which include links to further documentation, to complete each of the steps in the high-level overview above. -->

<!-- STEP BY STEP INSTRUCTIONS BELOW -->

## Other use cases acheived through Sandbox Toolings: {#other-use-cases}

<!-- ADD ADDITIONAL USE CASE HERE -->
