---
title: Tag Consistency Test Reference
description: Learn how the auditor feature tests for tag consistency in Adobe Experience Platform Debugger.
exl-id: 642b0c49-a7c7-4142-8189-67f00ed50015
TQID: https://experienceleague.adobe.com/W33I7lTeT8ywcsCdOnKaa9PJurbWt811P5T1Pc7KjOc
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Tag consistency test reference

This reference provides more information about how the auditor feature in Adobe Experience Platform Debugger tests for tag consistency.

>[!NOTE]
>
>For more information on auditor tests in Experience Platform Debugger, see the [auditor feature overview](./overview.md).

Tag consistency tests look for inconsistencies across all scanned pages. These are values or configurations that should be the same across all pages on the site to ensure accurate data collection.

| Test | Weight|  Criteria | Recommendation |
| --- | --- | --- | --- |
| Adobe Analytics - Consistent code version | 5 | More than one version of the Analytics code was found. | Replace all instances of Analytics with the current version.<br><br>[Additional information](https://experienceleague.adobe.com/docs/analytics/implementation/home.html) |

{style="table-layout:auto"}
