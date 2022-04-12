---
title: Tag Consistency Test Reference
description: Learn how the auditor feature tests for tag consistency in Adobe Experience Platform Debugger.
exl-id: 642b0c49-a7c7-4142-8189-67f00ed50015
---
# Tag consistency test reference

This reference provides more information about how the auditor feature in Adobe Experience Platform Debugger tests for tag consistency.

>[!NOTE]
>
>For more information on auditor tests in Platform Debugger, see the [auditor feature overview](./overview.md).

Tag consistency tests look for inconsistencies across all scanned pages. These are values or configurations that should be the same across all pages on the site to ensure accurate data collection.

| Test | Weight|  Criteria | Recommendation |
| --- | --- | --- | --- |
| Adobe Analytics - Consistent code version | 5 | More than one version of the Analytics code was found. | Replace all instances of Analytics with the current version.<br><br>[Additional information](https://experienceleague.adobe.com/docs/analytics/implementation/home.html) |

{style="table-layout:auto"}
