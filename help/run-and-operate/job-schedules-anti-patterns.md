---
description: Learn how to identify and resolve common job schedule configuration anti-patterns in Adobe Experience Platform.
solution: Experience Platform
title: Identify Job Schedule Anti-Patterns
type: Tutorial
hide: yes
---

# Identify job schedule anti-patterns

>[!AVAILABILITY]
>
>[!UICONTROL Job schedules] are currently available as a limited release and only for the following Real-Time CDP jobs:
>
> * Batch data lake ingestion
> * Batch profile ingestion
> * Batch sgmentation
> * Batch destination activation.

The [Job Schedules](job-schedules.md) timeline view helps you identify common configuration issues that can negatively impact your data pipeline performance and reliability. These anti-patterns often lead to job failures, data inconsistencies, or degraded system performance. By spotting these patterns early, you can reconfigure your jobs to avoid problems before they affect your business operations.

## Prerequisites {#prerequisites}

Before identifying anti-patterns, you should:

* Have access to [!UICONTROL Job Schedules] with the **[!UICONTROL View Job Schedules]** [access control permission](/help/access-control/home.md#permissions).
* Be familiar with the [Job Schedules interface](job-schedules.md#understanding-interface) and how to read the timeline view.
* Understand basic [batch ingestion](../ingestion/batch-ingestion/overview.md), [segmentation](../segmentation/home.md), and [profile processing](../profile/home.md) concepts.

## Quick reference {#anti-pattern-quick-reference}

| Anti-pattern | What you'll see on the timeline | Primary impact | Severity |
|--------------|----------------------------------|----------------|----------|
| [Schedule overlap](#schedule-overlap-pattern) | Multiple jobs running simultaneously | Resource contention and job failures | High |
| [Scheduled job density](#scheduled-density) | Many datasets with batches clustered in same hour | Pipeline bottlenecks and incomplete segmentation | High |
| [Excessive batches per dataset](#excessive-batches-per-dataset) | Single dataset with dozens of daily batches | Inefficient processing and operational complexity | Medium |

## Schedule overlap {#schedule-overlap-pattern}

**Impact severity**: High | **Primary issue**: Resource contention

**What to look for**: Multiple jobs scheduled to run at the same time or in close succession, particularly when resource-intensive jobs overlap.

In this example, you can see batch ingestion jobs running at the same time as a scheduled segmentation job. This creates resource contention because both operations require significant processing power and memory.

**Why this is problematic**:

* **Resource contention**: When multiple resource-intensive jobs run simultaneously, they compete for system resources (CPU, memory, I/O), causing all jobs to run slower.
* **Unpredictable performance**: Job duration becomes inconsistent, making it difficult to plan reliable schedules.
* **Cascading delays**: If jobs take longer than expected, they can delay downstream dependent jobs, creating a ripple effect throughout your pipeline.
* **Increased failure risk**: Resource exhaustion can cause jobs to timeout or fail completely.

**How to fix it**:

* **Stagger job schedules**: Ensure resource-intensive operations run sequentially rather than concurrently.
* **Add buffer time**: Leave adequate spacing between jobs to account for processing variations.
* **Review dependencies**: Identify which jobs must complete before others can start safely.

## Scheduled job density {#scheduled-density}

**Impact severity**: High | **Primary issue**: Pipeline bottlenecks

**What to look for**: Too many datasets with multiple batches scheduled within the same hour, particularly when these batches are stacked close together and scheduled near critical processing windows like segmentation start times.

In this pattern, you'll see:

* Multiple datasets each running several batches per day
* ETL jobs (data lake ingestion and profile ingestion) clustered within the same hour
* Batch ingestion scheduled immediately before or during scheduled segmentation windows

**Why this is problematic**:

* **Pipeline bottleneck**: When numerous batches from different datasets are stacked within a short time window, they create a processing bottleneck that can overwhelm the ingestion pipeline.
* **Delayed profile availability**: Profile ingestion jobs that run too close to segmentation start times may not complete in time, resulting in incomplete or stale audience evaluations.
* **Unpredictable segmentation**: If upstream ingestion jobs are still running when segmentation begins, you risk evaluating audiences against incomplete data, leading to incorrect audience membership.
* **Cascading failures**: A single delayed batch in a densely stacked schedule can cause a domino effect, delaying all subsequent batches and downstream processes.
* **Resource straining**: The system may struggle to allocate sufficient resources when processing too many concurrent ingestion jobs, leading to slower processing times or failures.

**How to fix it**:

* **Consolidate batches**: Reduce batch frequency by combining multiple small batches into fewer, larger batches per dataset.
* **Distribute evenly**: Spread ingestion jobs throughout the day rather than clustering them in specific hours.
* **Add buffer time**: Ensure a minimum 1-2 hour buffer between profile ingestion completion and segmentation start.
* **Review requirements**: Assess whether all datasets truly need multiple daily batches—many use cases work with less frequent updates.

## Excessive batches per dataset {#excessive-batches-per-dataset}

**Impact severity**: Medium | **Primary issue**: Inefficient processing

**What to look for**: A single dataset with an excessive number of individual batch jobs scheduled throughout the day, creating a long vertical stack of jobs on the timeline.

In this pattern, you'll see one dataset row with many individual batch ingestion jobs scheduled at frequent intervals—sometimes dozens of batches per day for a single dataset.

**Why this is problematic**:

* **Inefficient processing**: Each batch job has overhead costs (initialization, validation, metadata updates). Processing many small batches is significantly less efficient than processing fewer larger batches.
* **Increased failure surface**: More jobs mean more opportunities for failure. Each batch that fails requires investigation and potential reprocessing.
* **Unnecessary system load**: Frequent small batches keep the system constantly busy with overhead tasks rather than actual data processing, reducing overall throughput.
* **Delayed data availability**: Paradoxically, running many small batches can delay when data becomes available for downstream processes compared to consolidated batches.
* **Difficult inspection**: Tracking the success and performance of dozens of individual batch jobs per dataset becomes operationally complex and time-consuming.
* **Profile processing lag**: Each profile ingestion batch triggers profile processing. Frequent small batches can cause profile processing to run almost continuously, preventing efficient batch optimization.

**How to fix it**:

* **Reduce batch frequency**: Consolidate to fewer batches per day per dataset for most use cases.
* **Increase batch size**: Accumulate more data before triggering ingestion rather than ingesting immediately.
* **Align with business needs**: Verify whether hourly updates are truly required, or if daily/twice-daily updates suffice.
* **Use streaming for real-time**: Switch to streaming ingestion for genuine real-time requirements instead of simulating it with frequent batches.

## Next steps {#next-steps}

After identifying anti-patterns in your job schedules:

* View [job details](job-schedules-details.md) to investigate specific datasets and job runs that may be causing issues.
* Review the [Job Schedules overview](job-schedules.md) to understand the interface and inspection capabilities.
* Learn about [batch ingestion](../ingestion/batch-ingestion/overview.md) to optimize your data loading schedules.
* Understand [segmentation schedules](../segmentation/home.md) to ensure proper timing of audience evaluations.
* Explore [monitoring destination dataflows](../dataflows/ui/monitor-destinations.md) for end-to-end pipeline visibility.
