---
title: Run and Operate overview
description: Monitor, troubleshoot, and optimize your Adobe Experience Platform implementations with the Run and Operate tools. Gain visibility into scheduled batch activations, identify configuration issues, and improve system reliability.
---

# Run and Operate overview

>[!AVAILABILITY]
>
>Run and Operate features are currently available as a limited release.

[!UICONTROL Run and Operate] tools in Adobe Experience Platform provide advanced monitoring and diagnostic capabilities to help you maintain reliable, high-performing data operations. These self-service tools offer:

* **Comprehensive visibility**: Monitor the health of your scheduled data operations and get a complete view of execution status across all your workflows.
* **Faster troubleshooting**: Access detailed diagnostic information and execution history to quickly identify root causes when issues arise.
* **Proactive optimization**: Analyze job execution patterns, detect configuration anti-patterns, and prevent potential problems before they affect data delivery.

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

[Job Schedules](job-schedules.md) monitors all scheduled batch activations across your organization. You can view job execution status, performance metrics, and execution history to identify patterns and diagnose configuration issues that affect activation reliability.

![Experience Platform UI showing the Job Schedules screen.](assets/overview/job-schedules.png)

Use [!UICONTROL Job Schedules] to understand dependencies between data processing stages and batch exports, ensuring reliable data delivery to downstream systems.

## Next steps {#next-steps}

Now that you understand the purpose and capabilities of [!UICONTROL Run and Operate] tools, explore the following resources to deepen your knowledge:

* Learn about [batch ingestion](../ingestion/batch-ingestion/overview.md) to understand how data is ingested into Experience Platform
* Learn how to [monitor job schedules](job-schedules.md) for your batch ingestion and activations
* Understand how to [configure scheduled activations](../destinations/ui/activate-batch-profile-destinations.md) for batch destinations
* Explore [dataflow monitoring](../dataflows/ui/monitor-destinations.md) for destinations

