---
description: Learn how to view detailed information about datasets and individual job runs in Job Schedules.
solution: Experience Platform
title: View Job Schedule Details
type: Tutorial
---

# View job schedule details

When troubleshooting job failures or investigating performance issues, you need detailed information about specific datasets and their job runs. The [Job Schedules](job-schedules.md) interface allows you to drill down from the timeline view into individual datasets and jobs to understand execution history, timing, and status.

Use this detailed view to:

* Investigate why a specific job failed or took longer than expected
* Review the execution history for a dataset over time
* Understand the timing and duration patterns of batch jobs
* Identify which specific batches are causing pipeline issues
* Gather information needed for troubleshooting with Adobe Support

## Prerequisites {#prerequisites}

Before viewing job details, you should:

* Have access to [!UICONTROL Job Schedules] with the **[!UICONTROL View Job Schedules]** [access control permission](/help/access-control/home.md#permissions).
* Be familiar with the [Job Schedules interface](job-schedules.md#understanding-interface) and timeline view.
* Understand the different [job types](job-schedules.md#job-schedules-details) (lake ingestion, profile ingestion, segmentation, activation).

## Understanding the details hierarchy {#details-hierarchy}

Job schedules provide three levels of detail, allowing you to move from broad patterns to specific issues:

| View level | What it shows | When to use it |
|------------|---------------|----------------|
| **Timeline view** | All datasets and their scheduled jobs across the selected time period | Identifying patterns, spotting [anti-patterns](job-schedules-anti-patterns.md), and getting an overview of your entire pipeline |
| **Dataset details** | Aggregated metrics and execution history for a single dataset | Tracking overall performance of one dataset, understanding data volumes, and reviewing job frequency |
| **Job run details** | Specific execution information for an individual job run | Investigating why a particular job failed, checking exact timing, and verifying records processed |

**Navigation flow**: Start with the timeline view to identify issues → Select a dataset to see its details → Select a specific job run to investigate details.

### Which view should I use? {#which-view}

| I need to... | Use this view |
|--------------|---------------|
| See all my datasets and their schedules at once | [Timeline view](job-schedules.md) |
| Identify scheduling conflicts or anti-patterns | [Timeline view](job-schedules.md) |
| Track overall performance of one dataset | [Dataset details](#view-dataset-details) |
| See how many total records a dataset has processed | [Dataset details](#view-dataset-details) |
| Compare job performance over time for one dataset | [Dataset details](#view-dataset-details) |
| Investigate why a specific job failed | [Job run details](#view-job-details) |
| Check exact timing of a particular job execution | [Job run details](#view-job-details) |
| Verify records processed in a single run | [Job run details](#view-job-details) |
| Access detailed error messages | [Job run details](#view-job-details) → Select dataflow run ID |

## View dataset details {#view-dataset-details}

To view details for a specific dataset:

1. In the **[!UICONTROL Job Schedules]** timeline view, locate the dataset you want to investigate.
2. Select the dataset name from the left column.

The dataset details view opens in a right-side panel, showing information about all jobs associated with this dataset.

![The dataset details panel showing aggregated lake and profile ingestion metrics for a selected dataset.](assets/job-schedules/view-dataset-details.png)

The dataset details panel displays the dataset name, ID, and job-specific metrics organized by job type. At the top of the panel, the dataset ID is displayed as a clickable link. Select this ID to navigate to the full dataset details page.

Each dataset details panel includes the following metrics:

### Lake ingestion metrics {#lake-ingestion-metrics}

For datasets with data lake ingestion jobs, the panel shows the following metrics:

| Metric | Description | Use for |
|--------|-------------|---------|
| **[!UICONTROL Total runs]** | The total number of data lake ingestion jobs that have completed for this dataset | Activity tracking |
| **[!UICONTROL Runs in progress]** | How many lake ingestion jobs are currently running | Bottleneck detection |
| **[!UICONTROL Total records added]** | The cumulative number of new records added to the data lake across all job runs | Volume monitoring |
| **[!UICONTROL Total ingestion time]** | The combined duration of all data lake ingestion jobs | Processing time assessment |
| **[!UICONTROL Total records updated]** | The cumulative number of existing records that were updated during ingestion | Refresh pattern analysis |
| **[!UICONTROL Avg. ingestion speed (records/second)]** | The average throughput rate for data lake ingestion jobs | Performance comparison |

### Profile ingestion metrics {#profile-ingestion-metrics}

For datasets with profile ingestion jobs, the panel shows the following metrics:

| Metric | Description | Use for |
|--------|-------------|---------|
| **[!UICONTROL Total runs]** | The total number of profile ingestion jobs that have completed for this dataset | Activity tracking |
| **[!UICONTROL Runs in progress]** | How many profile ingestion jobs are currently running | Delay detection |
| **[!UICONTROL Total profiles created]** | The cumulative number of new profiles created from this dataset across all job runs | Profile growth monitoring |
| **[!UICONTROL Total profile ingestion time]** | The combined duration of all profile ingestion jobs | Timing issue identification |
| **[!UICONTROL Total profiles updated]** | The cumulative number of existing profiles that were updated with data from this dataset | Update frequency tracking |
| **[!UICONTROL Avg. profile ingestion speed (profiles/second)]** | The average throughput rate for profile ingestion jobs | Performance monitoring |

>[!NOTE]
>
> These metrics show cumulative totals across all job runs for this dataset. To see details for a specific run, select a job directly from the timeline.

## Filter datasets in the timeline {#filter-datasets}

When you have many datasets with scheduled jobs, you may want to focus on specific datasets rather than viewing all of them at once. The dataset filter allows you to select which datasets appear in the timeline view.

![The dataset filter panel allowing you to select which datasets appear in the timeline view.](assets/job-schedules/view-datasets.gif)

To filter the datasets displayed in the timeline:

1. Look for the dataset counter in the upper left of the timeline view (for example, "2 Datasets").
2. Select the filter icon next to the dataset counter.
3. A dataset selection panel opens, showing all available datasets with scheduled jobs.
4. Select or deselect datasets to show or hide them in the timeline view.
5. The timeline updates immediately to show only the selected datasets.

Use filtering to:

* **Focus on specific data sources**: When troubleshooting a particular data pipeline, filter to show only the relevant datasets.
* **Reduce visual clutter**: If you have many datasets, filtering helps you see patterns more clearly for a subset of data.
* **Compare related datasets**: Select only datasets that are related to understand their scheduling relationship.
* **Investigate anti-patterns**: When you identify a potential [configuration issue](job-schedules-anti-patterns.md), filter to the affected datasets to examine them more closely.

The filter persists during your session, so you can navigate between time periods (today, yesterday, last 7 days) while maintaining your dataset selection.

## View individual job run details {#view-job-details}

When you need to investigate a specific job run, select it from the timeline to see detailed execution information for that particular run.

### Access job run details {#access-job-details}

To view details for a specific job run:

1. In the [!UICONTROL Job Schedules] timeline view, locate the specific job run you want to investigate.
2. Select the job indicator on the timeline (the colored bar representing the job).

The **[!UICONTROL Dataflow run details]** panel opens, showing information about that specific job execution.

![The dataflow run details panel showing execution information for a specific job run.](assets/job-schedules/job-details.png)

### Dataflow run details {#dataflow-run-details}

The dataflow run details panel displays information about the specific job run, organized by job type. For ingestion jobs, you'll see details for both lake ingestion and profile ingestion stages.

#### Lake ingestion job details {#lake-ingestion-job-details}

| Field | Description |
|-------|-------------|
| **[!UICONTROL Dataflow run ID]** | The unique identifier for this specific lake ingestion job run. Select the ID to view complete dataflow monitoring details. |
| **[!UICONTROL Run status]** | The outcome of the job (Success, Failed, In Progress). A green indicator shows successful completion. |
| **[!UICONTROL Started at]** | The date and time when the lake ingestion job began execution. |
| **[!UICONTROL Completed at]** | The date and time when the lake ingestion job finished execution. |
| **[!UICONTROL Records added]** | The number of new records added to the data lake during this job run. |
| **[!UICONTROL Records updated]** | The number of existing records that were updated in the data lake during this job run. |

#### Profile ingestion job details {#profile-ingestion-job-details}

| Field | Description |
|-------|-------------|
| **[!UICONTROL Dataflow run ID]** | The unique identifier for this specific profile ingestion job run. Select the ID to view complete dataflow monitoring details. |
| **[!UICONTROL Run status]** | The outcome of the job (Success, Failed, In Progress). A green indicator shows successful completion. |
| **[!UICONTROL Started at]** | The date and time when the profile ingestion job began execution. |
| **[!UICONTROL Completed at]** | The date and time when the profile ingestion job finished execution. |
| **[!UICONTROL Records added]** | The number of new profiles created during this job run. |
| **[!UICONTROL Records updated]** | The number of existing profiles that were updated during this job run. |

### Understanding job execution flow {#job-execution-flow}

When viewing a specific job run, you can see the relationship between lake ingestion and profile ingestion:

* **Lake ingestion runs first**: Data is loaded into the data lake and validated.
* **Profile ingestion follows**: After lake ingestion completes, eligible records are processed into the profile store.
* **Timing matters**: Note the time difference between when lake ingestion completes and when profile ingestion starts. Gaps here can impact downstream processes like segmentation.

**Use job run details to**:

* Verify that a specific job completed successfully
* Calculate the actual duration of a job run (completed time minus started time)
* Understand how many records were processed in a specific run
* Compare performance across different job runs
* Access detailed dataflow monitoring for troubleshooting failures
* Identify timing issues between lake and profile ingestion stages

## Troubleshooting with job details {#troubleshooting}

Use job details to investigate issues and determine next steps:

**Failed jobs**: Select the dataflow run ID to view error details in the monitoring dashboard. Check [dataset details](#view-dataset-details) for recurring patterns, review the [timeline](job-schedules.md) for resource contention, and identify [anti-patterns](job-schedules-anti-patterns.md) in your configuration.

**Slow jobs**: Compare duration against historical averages in [dataset metrics](#view-dataset-details). Common causes include [schedule overlap](job-schedules-anti-patterns.md#schedule-overlap-pattern), [dense batch stacking](job-schedules-anti-patterns.md#scheduled-density), or increased data volume.

**Record mismatches**: Compare lake ingestion records against profile ingestion records in the job run details. Profile ingestion typically shows fewer records due to identity requirements and data quality rules.

For detailed dataflow status information, see [Monitor data lake ingestion](../dataflows/ui/monitor-sources.md), [Monitor dataflows for profiles](../dataflows/ui/monitor-profiles.md), [Monitor dataflows for audiences](../dataflows/ui/monitor-audiences.md), and [Monitor dataflows for destinations](../dataflows/ui/monitor-destinations.md).

## Next steps {#next-steps}

After learning how to view job details:

* Review the [Job Schedules overview](job-schedules.md) to understand the timeline view and interface.
* Learn about [anti-patterns](job-schedules-anti-patterns.md) to prevent common configuration issues.
* Understand [batch ingestion](../ingestion/batch-ingestion/overview.md) to optimize your data loading schedules.
* Explore [monitoring destination dataflows](../dataflows/ui/monitor-destinations.md) for end-to-end pipeline visibility.
