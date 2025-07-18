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

- Maximum number of streaming audiences is 500
  - Of these 500 streaming audiences, the maximum number of edge audiences is 150
- Maximum combined throughput for streaming segmentation is 1650 records per second (rps)

The audience capacity is at a **sandbox** level. This means that, for every sandbox you have in your organization, you can have 500 streaming audiences, of which 150 of those can be edge audiences.

The throughput capacity is at an **organization** level and can be distributed to your individual sandboxes. For example, with the 1650 rps for streaming segmentation throughput, you can set your production sandbox to be at 1500 rps and your development sandbox to be at 150 rps.

Experience Platform calculates the sandbox's throughput in 15 minute rolling intervals. This throughput is measured in real-time, with the data refreshing every 60 seconds.

If your usage reaches 80% and 90% of your licensed capacity, Experience Platform will issue an alert, notifying that you are reaching the maximum of your specified capacity. You can modify the settings to customize the capacity percentage to receive the alert or remove the alert entirely.

If your usage goes to above 100% of your licensed capacity, you will be considered in breach of your capacity. At this point, you will experience performance latency, and your service level targets (SLTs) will **not** be guaranteed.

## Frequently asked questions

The following section outlines frequently asked questions about the capabilities of Capacity.

### Can I have a maximum combined throughput limit that sums up to less than my target maximum?

+++ Answer

No. The maximum combined throughput limit **must** sum up to your organization's guardrail. 

+++

### What happens if I exceed my maximum capacities?

+++ Answer

This depends on which capacity is exceeded. 

Currently, if you exceed the maximum number of allowed audiences, your excessive audiences will not be affected. However, the ability to create new audiences may be restricted in the future.

If you exceed your streaming throughput, you will experience performance latency in your ingestion and segmentation. 

+++
