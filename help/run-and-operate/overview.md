---
title: Run and Operate overview
description: Monitor, troubleshoot, and optimize your Adobe Experience Platform implementations with the Run and Operate tools. Gain visibility into scheduled batch activations, identify configuration issues, and improve system reliability.
---

# Run and Operate overview

>[!AVAILABILITY]
>
>Run and Operate features are currently available as a limited release.

When batch jobs fail or deliver incomplete data, you need to quickly understand what caused the issue. The root cause could be data availability issues, incorrect timing, configuration problems, or system capacity constraints. Without clear visibility, you may spend hours investigating multiple systems before finding the answer.

With [!UICONTROL Run and Operate] tools, you can:

* **Monitor your data operations**: Get a complete view of job execution status and health across all your workflows.
* **Troubleshoot faster**: Access detailed diagnostic information and execution history to quickly identify root causes and reduce your mean time to resolution.
* **Prevent issues proactively**: Analyze job patterns, detect configuration problems before they cause failures, and optimize your data operations.

## Target audiences {#target-audiences}

[!UICONTROL Run and Operate] tools are designed to serve multiple audiences across your organization:

* **Data and IT teams**: System administrators and data engineers who maintain reliable data pipelines and troubleshoot technical issues.
* **Marketing operations**: Marketing technologists who monitor data delivery to marketing platforms and resolve activation issues.
* **Business stakeholders**: Leaders who need visibility into data operation health and overall system performance.

## Prerequisites {#prerequisites}

To gain access to Run and Operate capabilities, you need the **[!UICONTROL View Job Schedules]** [access control permissions](/help/access-control/home.md#permissions).

Contact your system administrator to ensure you have the appropriate permissions to view and use these tools.

## Getting started {#getting-started}

To access the Run and Operate tools from the Experience Platform UI:

1. Log in to your Experience Platform account and select **[!UICONTROL Run and Operate]** from the left navigation.
2. Select the tool that matches your monitoring or troubleshooting needs.
    
    >[!NOTE]
    >
    >Currently, the only available capability is [Job Schedules](job-schedules.md).

![Experience Platform UI showing the Run and operate left nav.](assets/overview/run-and-operate-left-nav.png)

## Available tools {#available-tools}

The following tools help you monitor and optimize your data operations.

### Job Schedules {#job-schedules}

With [Job Schedules](job-schedules.md), you can monitor all scheduled batch operations across your organization, including data lake ingestion, profile ingestion, segmentation, and destination activation. View job execution status, performance metrics, and execution history to identify patterns and diagnose configuration issues that affect reliability.

![Experience Platform UI showing the Job Schedules screen.](assets/overview/job-schedules.png)

You can also understand dependencies between data processing stages, helping you ensure reliable data flow throughout your Experience Platform workflows.

## Next steps {#next-steps}

Now that you understand the purpose and capabilities of [!UICONTROL Run and Operate] tools, explore the following resources to deepen your knowledge:

* Learn about [batch ingestion](../ingestion/batch-ingestion/overview.md) to understand how data is ingested into Experience Platform
* Learn how to [monitor job schedules](job-schedules.md) for your batch ingestion and activations
* Understand how to [configure scheduled activations](../destinations/ui/activate-batch-profile-destinations.md) for batch destinations
* Explore [dataflow monitoring](../dataflows/ui/monitor-destinations.md) for destinations

