---
description: Learn how to monitor and troubleshoot scheduled batch activations using the Job Schedules tool in Adobe Experience Platform.
solution: Experience Platform
title: Monitor Job Schedules
type: Tutorial
---

# Monitor job schedules

The Job Schedules tool provides advanced visibility into scheduled batch activations, helping you quickly identify and resolve issues that may affect your data delivery. This self-service diagnostic tool reduces troubleshooting time by providing a comprehensive view of your batch activation workflows and their dependencies.

Use Job Schedules to monitor the health and performance of your scheduled batch activations, understand job execution patterns, and proactively address configuration issues before they impact your business operations.

## Getting started {#getting-started}

This guide requires a working understanding of the following components of Adobe Experience Platform:

- [Destinations](../destinations/home.md): Destinations are pre-built integrations with commonly used applications that allow for the seamless activation of data from Experience Platform for cross-channel marketing campaigns, email campaigns, targeted advertising, and other use cases.
- [Batch destinations](../destinations/destination-types.md#file-based): Batch destinations export files to downstream systems on a scheduled basis. Job Schedules monitors these scheduled exports.
- [Real-Time Customer Profile](../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
- [Sandboxes](../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Experience Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

## Access Job Schedules {#access-job-schedules}

To access the Job Schedules tool:

1. In the Adobe Experience Platform UI, select **[!UICONTROL Run and Operate]** from the left navigation.
2. Select **[!UICONTROL Job Schedules]** to open the monitoring dashboard.

The Job Schedules dashboard displays all scheduled batch activations configured in your organization, along with their current status and execution history.

## Understanding the Job Schedules interface {#understanding-interface}

The Job Schedules interface provides a comprehensive view of your batch activation jobs. The main components include:

### Job list view {#job-list-view}

The job list displays all scheduled batch activations with the following information:

- **[!UICONTROL Job name]**: The name of the batch activation job, typically matching the destination name and dataflow configuration.
- **[!UICONTROL Destination]**: The target destination where data is being activated.
- **[!UICONTROL Schedule]**: The configured frequency for the batch activation (for example, daily, weekly, or custom intervals).
- **[!UICONTROL Status]**: The current operational status of the job. See [Job status indicators](#job-status-indicators) for details.
- **[!UICONTROL Last run]**: The timestamp of the most recent job execution.
- **[!UICONTROL Next run]**: The scheduled time for the next job execution.
- **[!UICONTROL Audiences]**: The number of audiences included in the batch activation.

### Job status indicators {#job-status-indicators}

Job Schedules uses visual indicators to help you quickly assess the health of your scheduled activations:

| Status | Visual indicator | Description |
| -------- | ---------------- | ------------- |
| Healthy | Green checkmark | The job is executing successfully according to its schedule with no errors. |
| Warning | Yellow caution icon | The job is running but has encountered minor issues that may require attention, such as partial failures or performance degradation. |
| Error | Red error icon | The job has failed or encountered critical issues preventing successful execution. |
| Paused | Gray pause icon | The job is currently paused and not executing on its schedule. |
| Scheduled | Blue clock icon | The job is configured and scheduled but has not yet had its first execution. |

## Monitoring job execution {#monitoring-execution}

Select any job from the list to view detailed execution information and diagnostic data.

### Execution history {#execution-history}

The execution history section displays a chronological record of job runs, including:

- **[!UICONTROL Run ID]**: A unique identifier for each job execution.
- **[!UICONTROL Start time]**: When the job execution began.
- **[!UICONTROL Duration]**: How long the job took to complete.
- **[!UICONTROL Records processed]**: The number of profile records processed during the run.
- **[!UICONTROL Records exported]**: The number of records successfully exported to the destination.
- **[!UICONTROL Records failed]**: The number of records that failed to export.
- **[!UICONTROL Status]**: The outcome of the job run (successful, failed, or completed with warnings).

### Execution details {#execution-details}

Selecting a specific job run reveals additional diagnostic information:

- **[!UICONTROL Audience breakdown]**: Performance metrics for each audience included in the activation.
- **[!UICONTROL Export files]**: List of files generated during the export, with download links where applicable.
- **[!UICONTROL Error details]**: For failed runs, detailed error messages and affected record counts.
- **[!UICONTROL Processing timeline]**: A visual representation of the job's processing stages and duration.

## Interpreting job patterns and dependencies {#interpreting-patterns}

Job Schedules helps you identify patterns and dependencies that may affect your batch activations:

### Schedule overlap {#schedule-overlap}

When multiple jobs are scheduled to run simultaneously or in close succession, you may observe:

- Increased job duration due to resource contention
- Queuing delays when system capacity is reached
- Higher likelihood of timeout errors

**Recommendation**: Stagger your batch activation schedules to distribute load throughout the day and avoid peak processing times.

### Data freshness dependencies {#data-freshness}

Batch activations depend on the availability of updated profile data. Job Schedules highlights potential timing issues:

- Jobs scheduled too soon after data ingestion may export incomplete data
- Segment evaluation timing may not align with batch export schedules
- Profile merge policies may affect data availability

**Recommendation**: Ensure your batch activation schedules account for upstream data processing time, including ingestion, identity resolution, and segment evaluation.

### Audience size fluctuations {#audience-size-fluctuations}

Significant changes in audience size between runs may indicate:

- Changes to segment definitions or evaluation logic
- Data quality issues affecting profile qualification
- Seasonal or business-driven audience behavior changes

**Recommendation**: Monitor audience size trends to validate segment logic and data quality. Investigate unexpected fluctuations promptly.

## Common configuration anti-patterns {#configuration-anti-patterns}

Job Schedules helps you identify common configuration issues that can impact activation reliability:

### Aggressive scheduling {#aggressive-scheduling}

**Pattern**: Jobs scheduled to run at very frequent intervals (for example, every 15 minutes or hourly) when business requirements don't necessitate real-time updates.

**Impact**:

- Increased system resource consumption
- Higher probability of job failures during peak processing times
- Potential cost increases due to excessive API calls or file exports
- Minimal business value from frequent updates

**Recommendation**: Evaluate your actual business requirements for data freshness. For most batch activation use cases, daily or less frequent schedules provide adequate timeliness while optimizing system performance and costs.

### Insufficient processing time {#insufficient-processing-time}

**Pattern**: Multiple large-scale batch activations scheduled with insufficient time between runs to complete processing.

**Impact**:

- Job queuing and delays
- Incomplete exports if previous jobs haven't finished
- Cascading failures when one delayed job affects subsequent scheduled jobs

**Recommendation**: Calculate expected processing time based on audience size and destination performance. Schedule jobs with adequate buffer time between runs, especially for large audience activations.

### Missing error handling {#missing-error-handling}

**Pattern**: Jobs configured without appropriate alerting or fallback mechanisms when failures occur.

**Impact**:

- Delayed awareness of data delivery failures
- Extended mean time to resolution (MTTR) for issues
- Potential business impact from missing data in downstream systems

**Recommendation**: Configure alerts to notify appropriate stakeholders when job failures occur. Regularly review job execution history to identify and address recurring issues.

### Unaligned dependencies {#unaligned-dependencies}

**Pattern**: Batch activation schedules that don't account for upstream data processing schedules (for example, data ingestion, segment evaluation, or identity resolution).

**Impact**:

- Exports may contain stale or incomplete data
- Profile qualification may not reflect recent changes
- Audiences may exclude recently qualified profiles

**Recommendation**: Map your data processing pipeline from ingestion through activation. Ensure batch activation schedules allow adequate time for all upstream processes to complete before export begins.

### Oversized audiences {#oversized-audiences}

**Pattern**: Batch activations configured with very large audiences that exceed destination platform limits or cause processing timeouts.

**Impact**:

- Job failures due to file size or API rate limits
- Extended processing times affecting schedule reliability
- Potential throttling from destination platforms

**Recommendation**: Review destination platform documentation for recommended audience size limits. Consider splitting large audiences into multiple smaller activations or using streaming destinations for very large-scale activations.

## Optimizing job performance {#optimizing-performance}

Use Job Schedules to identify opportunities for performance optimization:

### Review execution trends {#review-trends}

Regularly analyze job execution metrics to identify:

- **Processing time trends**: Increasing duration may indicate growing data volumes or system resource constraints.
- **Failure patterns**: Recurring failures at specific times may indicate infrastructure issues or capacity limitations.
- **Success rates**: Declining success rates warrant investigation into data quality or configuration issues.

### Schedule optimization {#schedule-optimization}

Optimize your batch activation schedules based on:

- **Business requirements**: Align activation frequency with actual business needs for data freshness.
- **System capacity**: Distribute jobs to avoid concurrent execution during peak processing periods.
- **Destination constraints**: Respect rate limits and processing windows of destination platforms.
- **Data availability**: Ensure upstream data processing completes before activation begins.

## Ongoing enhancements {#ongoing-enhancements}

Job Schedules is continuously evolving to provide enhanced monitoring and diagnostic capabilities. Adobe regularly releases updates that include:

- Additional performance metrics and visualization options
- Enhanced error diagnostics with recommended remediation steps
- Predictive analytics to identify potential issues before they impact activations
- Integration with additional Adobe Experience Platform services

To stay informed about new capabilities and best practices, refer to the Experience Platform release notes and documentation updates.

## Next steps {#next-steps}

After learning about Job Schedules, you may want to explore these related topics:

- [Monitor dataflows for destinations](../dataflows/ui/monitor-destinations.md): Learn how to monitor real-time activation dataflows.
- [Batch destinations](../destinations/destination-types.md#file-based): Understand the different types of batch destinations available in Experience Platform.
- [Schedule audience exports](../destinations/ui/activate-batch-profile-destinations.md): Learn how to configure scheduled batch activations.
