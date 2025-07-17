---
title: License Usage and Capacity
description: Learn about your license usage and capacity limits within Adobe Experience Platform. 
---

# License usage and capacities

In Adobe Experience Platform, capacities let you know if your organization has exceeded any of your guardrails and gives you information on how to fix these issues. 

For more information about guardrails in Experience Platform, please read the [Real-Time CDP guardrails overview](../../rtcdp/guardrails/overview.md).

## Capacity behavior

Currently, Capacity supports the following services:

- Streaming segmentation
- Streaming ingestion

Within these services, the following guardrails are tracked:

- Maximum profile record size is 100 kB
- Maximum Experience Event size is 10 kB
- Maximum number of streaming audiences is 500
- Maximum number of edge audiences is 150
- Maximum combined throughput for streaming segmentation is 1650 records per second (rps)

These capacities are at an **organization** level and can be distributed to your individual sandboxes. For example, with the 1650 rps for streaming segmentation throughput, you can set your production sandbox to be at 1500 rps and your development sandbox to be at 150 rps.

If your usage reaches 80% and 90% of your licensed capacity, Experience Platform will issue an alert, notifying that you are reaching the maximum of your specified capacity. 

If your usage goes to 100% of your licensed capacity or above, you will be considered in breach of your capacity. At this point, you may experience performance degradation and latency. As a result, your service level targets (SLTs) will **not** be guaranteed.

## Frequently asked questions

The following section outlines frequently asked questions about the capabilities of Capacity.

### Can I have a maximum combined throughput limit that sums up to less than my target maximum?

+++ Answer

No. The maximum combined throughput limit **must** sum up to your organization's guardrail. 

+++
