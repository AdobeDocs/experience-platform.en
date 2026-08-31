---
title: Growth Credits Usage
description: Use [!DNL Growth Credits] to increase capacity for eligible Adobe Experience Platform services beyond your included entitlement. 
---

# [!DNL Growth Credits] usage {#usage}

Use [!DNL Growth Credits] to increase Adobe Experience Platform capacity for eligible capabilities beyond your existing entitlement. Monitor [!DNL Growth Credits] consumption, identify which services consume credits, and plan future capacity needs using the [!DNL Growth Credits] dashboard. 

## Monitor [!DNL Growth Credits] usage {#monitor-usage}

Use the [[!DNL Growth Credits] dashboard](/help/landing/license-usage-and-guardrails/capacity.md#growth-credits-dashboard) to monitor credit usage and plan future capacity needs.

Review dashboard metrics to:

- Monitor used, reserved, and available [!DNL Growth Credits] to understand current credit usage and remaining capacity.
- Identify which services contribute to credit consumption so that you can determine which workloads drive [!DNL Growth Credits] usage.
- Understand how credit usage changes over time by reviewing historical consumption trends and comparing usage across reporting periods.
- Determine how much additional capacity is currently reserved for active or scheduled capacity increases.
- Estimate when additional credits may be required by comparing current usage trends against your available credit balance.
- Evaluate the impact of capacity changes before requesting additional throughput or processing capacity.

[!DNL Growth Credits] usage is calculated using the following formula:

**Total [!DNL Growth Credits] usage = [!DNL Growth Credits] used + [!DNL Growth Credits] reserved**

Where:

- **[!DNL Growth Credits] used** represents [!DNL Growth Credits] that have already been used by eligible services such as Streaming Segmentation throughput, Edge Segmentation throughput, and others.
- **[!DNL Growth Credits] reserved** represents [!DNL Growth Credits] allocated to active or scheduled activities that have not yet been fully consumed.
- **Total usage** represents the total amount of [!DNL Growth Credits] committed by your organization, including both [!DNL Growth Credits] used and [!DNL Growth Credits] reserved.

Review the dashboard regularly to understand usage patterns and anticipate future capacity requirements.

For information about accessing and using the dashboard, see the [[!DNL Growth Credits] dashboard](/help/landing/license-usage-and-guardrails/capacity.md#growth-credits-dashboard) documentation.

## Eligible services that use [!DNL Growth Credits] {#services}

[!DNL Growth Credits] can be used for the following Experience Platform services.

| Feature | Description | Credits per metric |
| --- | --- | --- |
| Streaming Segmentation | Streaming Segmentation evaluates audiences as data is ingested into Adobe Experience Platform via streaming ingestion connectors<br><br>Incremental throughput capacity may be licensed in increments of 100 RPS, up to a maximum of 15,000 RPS total. | 7,500 [!DNL Growth Credits] per year for each increment of 100 RPS that is deployed. |
| Edge Segmentation | Incremental throughput capacity may be licensed in increments of 100 RPS. | 12,000 [!DNL Growth Credits] per year for each increment of 100 RPS that is deployed. |
