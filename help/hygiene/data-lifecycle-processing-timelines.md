---
title: Data Lifecycle processing timelines
description: Understand how record delete requests are queued and processed in Adobe Experience Platform, including SLA commitments for standard and Shield entitlements.
---
# Data Lifecycle processing timelines {#data-lifecycle-processing-timelines}

Use this document to understand when a record delete request completes and what affects that timeline. Timelines differ by entitlement tier — standard (30-day SLA) or Privacy and Security Shield / Healthcare Shield (15-day SLA). If you are unsure which tier applies to your organization, check your [quota usage](./api/quota.md) or contact your Adobe representative. For dataset expiration timelines, see the [dataset expiration guide](./ui/dataset-expiration.md).

## Overview {#overview}

After you submit a [record delete request](./ui/record-delete.md), it moves through three stages: it enters a queue and is batched with other requests, downstream services execute the deletion, and the work order is confirmed as complete. All entitlement tiers follow the same high-level flow; what differs is how long each stage takes. The end-to-end duration is governed by your organization's SLA: 30 days for standard entitlements, and 15 days for organizations with Privacy and Security Shield or Healthcare Shield add-ons. If you have already submitted a request and want to confirm it is progressing normally, use the phase descriptions and timelines below to check where your request should be based on elapsed time.

## How record delete requests are processed {#how-requests-are-processed}

Record delete requests follow three high-level processing phases regardless of entitlement tier. The phase structure is consistent for all users; durations vary based on entitlement and system load. For entitlement-specific stage timings, see [Processing timelines by entitlement](#processing-timelines-by-entitlement).

### Phase 1: Queuing and batching {#queuing-and-batching}

After submission, a work order is created and your request enters a processing queue. Requests are held in the queue and grouped into batches before processing begins. Batching—not a system error—is the primary reason deletion does not occur immediately after submission.

Queue duration varies by entitlement tier. Standard requests may remain in queue for up to 14 days. Requests under Privacy and Security Shield or Healthcare Shield entitlements are typically batched within approximately 24 hours, depending on system conditions.

### Phase 2: Downstream processing {#downstream-processing}

Once a batch leaves the queue, downstream services process the deletion across your Experience Platform data stores. Work order status does not update during this phase; it reflects the overall outcome once processing is confirmed. To check the current state of your request, see [Monitoring request status](#monitoring-request-status). Duration varies based on system load and entitlement tier, and occurs within the operative SLA window for your entitlement tier.

### Phase 3: Completion {#completion}

The work order status updates to `completed` once all systems confirm deletion. You can verify completion status in the [Data Lifecycle workspace](./ui/browse.md).

For standard entitlements, a buffer window exists near the end of the SLA period. This window allows for integrity checks and resubmission of any failed deletion jobs before the SLA closes. For Privacy and Security Shield or Healthcare Shield entitlements, completion and any equivalent checks are handled within the 15-day SLA window; no separate buffer phase is defined.

## Processing timelines by entitlement {#processing-timelines-by-entitlement}

The three phases above apply to all entitlement tiers. The following tables show the approximate timing for each phase based on your entitlement. Identify your tier before relying on a specific timeline. Stage timings are approximate and vary based on system load and batch scheduling; the stated end-to-end SLA is the operative commitment.

### Standard entitlement {#standard-entitlement}

The following timeline applies to organizations without a Privacy and Security Shield or Healthcare Shield add-on.

>[!NOTE]
>
>Timings are approximate and vary based on system load and batch scheduling. The 30-day end-to-end SLA is the operative commitment.

| Stage | Approximate timing | Description |
|---|---|---|
| Request submitted and batched | Up to 14 days | A work order is created and queued. Requests are held and batched before processing begins. Batching is the primary reason deletion is not immediate. |
| Downstream processing | Day 15–25 | Downstream services receive and execute the record delete request. Duration varies based on system load. |
| Buffer — integrity checks and resubmissions | Day 25–30 | A buffer window allows for integrity checks and resubmission of any failed jobs before the SLA window closes. The work order status updates to `completed` once all systems confirm deletion. |

{style="table-layout:auto"}

**End-to-end SLA: 30 days**

### Privacy and Security Shield / Healthcare Shield {#shield-entitlement}

>[!IMPORTANT]
>
>The accelerated timeline below applies only to organizations that have purchased the Privacy and Security Shield or Healthcare Shield add-on. To verify your entitlement tier, contact your Adobe representative or review your [quota usage](./api/quota.md).

>[!NOTE]
>
>The 15-day end-to-end SLA is the operative commitment.

| Stage | Approximate timing | Description |
|---|---|---|
| Request submitted and batched | Typically ~24 hours | A work order is created and queued. Requests under Shield entitlements are typically batched and ready for processing within approximately 24 hours of submission. |
| Downstream processing and completion | Within 15-day SLA | Downstream services receive and execute the record delete request. Completion, including any integrity checks, is handled within the 15-day SLA window. The work order status updates to `completed` once all systems confirm deletion. |

{style="table-layout:auto"}

**End-to-end SLA: 15 days**

## Quota and submission limits {#quota-and-submission-limits}

Processing timelines apply after a request is accepted. Record delete requests are also subject to monthly and daily identifier submission quotas that are separate from and independent of processing SLAs. If a submitted request does not appear to be progressing, [confirm it was accepted](./ui/browse.md) before attributing the delay to batching — a request blocked by quota exhaustion requires action and does not enter the processing queue. Exceeding your quota prevents new requests from being accepted, regardless of your SLA tier.

For quota tiers, monthly caps, and entitlement-based limits, see:

- [Identifier submission quotas (UI)](./ui/record-delete.md#quotas)
- [Identifier submission quotas (API)](./api/workorder.md#quotas)

## Monitoring request status {#monitoring-request-status}

To check the status of a submitted record delete request, navigate to the **[!UICONTROL Data Lifecycle]** workspace in the Experience Platform UI and select the **[!UICONTROL Record]** tab. For programmatic status checks, use the work order API endpoint.

For detailed instructions, see [Browse data lifecycle work orders](./ui/browse.md) or the [Work order endpoint guide](./api/workorder.md).

## Next steps {#next-steps}

- [Create a record delete request in the UI](./ui/record-delete.md)
- [Create a record delete request using the API](./api/workorder.md)
- [Monitor quota usage](./api/quota.md)
- [Advanced Data Lifecycle Management overview](./home.md)
