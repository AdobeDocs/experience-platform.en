---
title: Data Lifecycle processing timelines
description: Understand how record delete requests are queued and processed in Adobe Experience Platform, including SLA commitments for standard and Shield entitlements.
---
# Data Lifecycle processing timelines {#data-lifecycle-processing-timelines}

<!-- Two-to-three sentence introduction: state that this document is the canonical reference for record delete processing timelines and SLA behavior. Identify the two entitlement tiers covered (Standard vs. Shield). Explicitly exclude dataset expiration timelines and direct readers to the dataset expiration guide for that scope. -->

## Overview {#overview}

<!-- Provide a brief, entitlement-agnostic summary of the end-to-end processing model: requests are submitted, queued, batched, processed by downstream systems, and confirmed within an SLA window. Do not introduce tier-specific details here; reserve that for the sections below. The purpose is to establish a shared mental model before the reader encounters differentiated behavior. -->

## How record delete requests are processed {#how-requests-are-processed}

<!-- Describe the three high-level processing phases as customer-facing abstractions: queuing and batching, downstream processing, and completion. Explain that these phases apply to all entitlement tiers; what differs between tiers is the duration, not the structure. Do not expose internal service sequencing or name downstream systems. -->

### Phase 1: Queuing and batching {#queuing-and-batching}

<!-- Explain that submitted requests enter a queue and are held until a batch is processed. State that batching—not system failure—is the primary reason deletion is not immediate. For Standard, the queue duration is up to 14 days. For Shield, the queue duration is typically ~24 hours. Do not mention volume thresholds or batching triggers. -->

### Phase 2: Downstream processing {#downstream-processing}

<!-- Describe that once batched requests leave the queue, downstream services execute the deletions. Keep description outcome-focused: processing duration is influenced by system load and entitlement tier and occurs within the SLA window. Do not enumerate individual services or internal sequencing. -->

### Phase 3: Completion {#completion}

<!-- Describe how the work order reaches a `completed` status once all systems confirm deletion. For Standard, include the explicit buffer window (integrity checks, resubmission of failed jobs) that exists near the end of the SLA period. For Shield, buffer behavior is implicit within the SLA—do not define it as a named phase or assign timing to it. -->

## Processing timelines by entitlement {#processing-timelines-by-entitlement}

<!-- Introduce this section as the authoritative SLA reference. State that Standard and Shield are presented in parallel tables for direct comparison and that readers should identify their entitlement tier before relying on a specific timeline. Include a brief note that timings are approximate; the stated SLA is the operative commitment. -->

### Standard entitlement {#standard-entitlement}

<!-- Present a three-column stage table (Stage | Approximate timing | Description) covering: request queued and batched (up to 14 days), downstream processing, and buffer/completion window — with a 30-day end-to-end SLA. Include a note that timings vary based on system load; the 30-day SLA is the operative commitment. -->

### Privacy and Security Shield / Healthcare Shield {#shield-entitlement}

<!-- Present a parallel three-column stage table (matching Standard structure) covering: request queued and batched (typically ~24 hours) and downstream processing/completion — with a 15-day end-to-end SLA. Do not define a buffer as a separate phase. Do not introduce a phased Day 1–2 / 2–10 / 10–15 breakdown. Represent Shield as SLA-based only. Place an [!IMPORTANT] callout before the table stating that the accelerated timeline applies only to organizations with Privacy and Security Shield or Healthcare Shield add-ons. -->

## Quota and submission limits {#quota-and-submission-limits}

<!-- Provide a brief contextual note that record delete requests are also subject to monthly and daily identifier submission quotas that are separate from and independent of processing SLAs. Do not reproduce quota tables here. Link to `record-delete.md#quotas` (UI) and `workorder.md#quotas` (API) as the authoritative quota references. -->

## Monitoring request status {#monitoring-request-status}

<!-- State where users can check work order status: the [!UICONTROL Data Lifecycle] workspace (UI) or the work order API endpoint. Keep this section to two to three sentences and link out to `ui/browse.md` and `api/workorder.md` rather than repeating procedural steps. This section exists to serve readers who land directly on this reference page via deep link. -->

## Next steps {#next-steps}

<!-- Provide a short linked list of logical follow-on resources: record delete UI guide, work order API endpoint guide, quota reference, and the Data Lifecycle overview. Use descriptive link text. Introduce no new concepts. -->
