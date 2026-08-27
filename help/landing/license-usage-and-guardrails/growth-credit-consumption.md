---
title: Growth Credits Consumption
description: Use Growth credits to increase Adobe Experience Platform capacity beyond your included entitlement. 
---

# Growth Credits Consumption {#consumption}

Use [!DNL Growth credits] to increase Adobe Experience Platform capacity beyond your included entitlement. Monitor [!DNL Growth credit] consumption, identify which services consume credits, and plan future capacity needs using the [!DNL Growth credits] dashboard.

## Monitor Growth Credit consumption {#monitor-consumption}

Use the [[!DNL Growth credits] dashboard](/help/landing/license-usage-and-guardrails/capacity.md#growth-credits-dashboard) to plan future capacity needs.

Review dashboard metrics to:

- Monitor consumed, reserved, and available [!DNL Growth credits] to understand current credit utilization and remaining capacity.
- Identify which services contribute to credit consumption so that you can determine which workloads drive [!DNL Growth credit] usage.
- Understand how credit usage changes over time by reviewing historical consumption trends and comparing usage across reporting periods.
- Determine how much additional capacity is currently reserved for active or scheduled capacity increases.
- Estimate when additional credits may be required by comparing current consumption trends against your available credit balance.
- Evaluate the impact of capacity changes before requesting additional throughput or processing capacity.

[!DNL Growth credit] usage is calculated using the following formula:

**Usage = Credits used + Credits reserved**

Where:

- **Credits used** represents [!DNL Growth credits] that have already been used by capacity services such as streaming throughput, and edge throughput.
- **Credits reserved** represents [!DNL Growth credits] allocated to active or scheduled capacity increases that have not yet been fully consumed.
- **Usage** represents the total amount of [!DNL Growth credits] committed by your organization, including both consumed and reserved credits.

Review the dashboard regularly to understand usage patterns and anticipate future capacity requirements.

For information about accessing and using the dashboard, see the [[!DNL Growth credits]](/help/landing/license-usage-and-guardrails/capacity.md#growth-credits-dashboard) documentation.

## Services that consume Growth credits {#services}

[!DNL Growth credits] are consumed when you increase capacity for supported Experience Platform services.

| Feature | Description | Usage Calculation | Credits per metric |
| --- | --- | --- | --- |
| Streaming segmentation | Streaming Segmentation evaluates audiences as data is ingested into Adobe Experience Platform via streaming ingestion connectors. Throughput is measured in records per second (RPS). Baseline is 1,500 RPS at an organization level, across all sandboxes.<br><br>Incremental throughput capacity is licensed in packs of 100 RPS. | Capacity-based **daily burn**. A daily rate (credits/day) is set from the allocated RPS above baseline per the active rate card. | 7,500 per year for every 100 RPS |
| Edge segmentation | Edge Segmentation throughput, measured in RPS, deployed per Edge region × production sandbox. Baseline is 1,500 RPS at org level (500 RPS x 3 Edges); Incremental throughput will be sold as follows:<ul><li>*Minimum of 500 RPS for activating each new Edge region over and above the 3 default Edges.</li><li>Increments of 100 RPS for scaling each sandbox beyond the default capacity.</li></ul| Capacity-based **daily burn**. A daily rate (credits/day) is set from the allocated RPS above baseline per the rate card. | 12,000 per year for every 100 RPS |
