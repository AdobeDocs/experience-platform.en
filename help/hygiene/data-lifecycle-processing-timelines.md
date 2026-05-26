---
title: Data Lifecycle processing timelines
description: Understand how record delete requests are queued and processed in Adobe Experience Platform, including SLA commitments for standard and Shield entitlements.
keywords: data lifecycle
solution: Experience Platform
---
# Data Lifecycle processing timelines {#data-lifecycle-processing-timelines}

Use this document to understand when a record delete request completes and what affects that timeline. Timelines differ by entitlement tier, either the standard (30-day SLA) or Privacy and Security Shield or Healthcare Shield (15-day SLA). If you are unsure which tier applies to your organization, check your [quota usage](./api/quota.md) or contact your Adobe representative. For dataset expiration timelines, see the [dataset expiration guide](./ui/dataset-expiration.md).

## How record delete requests are processed {#how-record-delete-timelines-work}

After you submit a [record delete request](./ui/record-delete.md), it moves through three phases: queuing and batching, downstream processing, and completion. All entitlement tiers follow the same flow; your SLA determines how long each phase takes. Your SLA is 30 days for standard entitlements and 15 days for organizations with a Privacy and Security Shield or Healthcare Shield add-on.

If you have already submitted a request and want to confirm it is progressing normally, use the [Processing timelines by entitlement](#processing-timelines-by-entitlement) section to determine where your request should be based on elapsed time.

### Phase 1: Queuing and batching {#queuing-and-batching}

After submission, a work order is created and your request enters a processing queue. Requests are held in the queue and grouped into batches before processing begins. Batching, not a system error, is the primary reason deletion does not occur immediately after submission.

Queue duration varies by entitlement tier. Standard requests may remain in queue for up to 14 days. Requests under Privacy and Security Shield or Healthcare Shield entitlements are typically batched within approximately 24 hours, although large requests may be promoted earlier.

### Phase 2: Downstream processing {#downstream-processing}

Once a batch leaves the queue, downstream services process the deletion across your Experience Platform data stores. Work order status does not update during this phase; it reflects the overall outcome once processing is confirmed. To check the current state of your request, see [Monitoring request status](#monitoring-request-status). Processing duration varies based on system load and entitlement tier and occurs within the operative SLA window for your entitlement tier.

### Phase 3: Completion {#completion}

The work order status updates to `completed` once all systems confirm deletion. You can verify completion status in the [Data Lifecycle workspace](./ui/browse.md).

## Processing timelines by entitlement {#processing-timelines-by-entitlement}

The three phases above apply to all entitlement tiers. The following tables show the approximate timing for each phase based on your entitlement. Identify your tier before relying on a specific timeline. Stage timings are approximate and vary based on system load and batch scheduling; the stated end-to-end SLA is the operative commitment.

### Standard entitlement {#standard-entitlement}

The following timeline applies to organizations **without** a Privacy and Security Shield or Healthcare Shield add-on.

>[!IMPORTANT]
>
>The **30-day end-to-end SLA** is the operative commitment.

| Phase | Approximate timing | Description |
|---|---|---|
| Request submitted and batched | Up to 14 days | A work order is created and enters the processing queue. Requests are batched before processing begins. Batching is the primary reason deletion is not immediate. |
| Downstream processing | Day 15–25 | Downstream services receive and execute the record delete request. Duration varies based on system load. |
| Completion | Day 25–30 | Final processing and validation steps complete before the work order status updates to `completed`. |

{style="table-layout:auto"}

### Privacy and Security Shield / Healthcare Shield {#shield-entitlement}

The accelerated timeline below applies only to organizations that have purchased the Privacy and Security Shield or Healthcare Shield add-on. To verify your entitlement tier, contact your Adobe representative or review your [quota usage](./api/quota.md).

>[!IMPORTANT]
>
>The **15-day end-to-end SLA** is the operative commitment.

| Phase | Approximate timing | Description |
|---|---|---|
| Request submitted and batched | Typically ~24 hours | A work order is created and queued. Requests are grouped into batches before processing begins, which is why deletion is not immediate. |
| Downstream processing and completion | Within 15-day SLA | Downstream services receive and execute the record delete request. The work order status updates to `completed` once all systems confirm deletion. |

{style="table-layout:auto"}

## Quota and submission limits {#quota-and-submission-limits}

Processing timelines apply after a request is accepted. Record delete requests are also subject to monthly and daily identifier submission quotas that are separate from and independent of processing SLAs. If a submitted request does not appear to be progressing, [confirm it was accepted](./ui/browse.md) before attributing the delay to batching. A request blocked by quota exhaustion requires action and does not enter the processing queue. Exceeding your quota prevents new requests from being accepted, regardless of your SLA tier.

For quota tiers, monthly caps, and entitlement-based limits, see:

- [Identifier submission quotas (UI)](./ui/record-delete.md#quotas)
- [Identifier submission quotas (API)](./api/workorder.md#quotas)

## Monitoring request status {#monitoring-request-status}

To check the status of a submitted record delete request, navigate to the **[!UICONTROL Data Lifecycle]** workspace in the Experience Platform UI and select the **[!UICONTROL Record]** tab. A list of submitted record delete requests and their current statuses appears. For programmatic status checks, use the [work order API](./api/workorder.md).

For detailed instructions, see [Browse data lifecycle work orders](./ui/browse.md) or the [Work order endpoint guide](./api/workorder.md).

## Next steps {#next-steps}

To continue working with record delete requests, see the following resources.

- [Create a record delete request in the UI](./ui/record-delete.md)
- [Create a record delete request using the API](./api/workorder.md)
- [Monitor quota usage](./api/quota.md)
