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




## Available tools {#available-tools}

### Job Schedules {#job-schedules}

[Job Schedules](job-schedules.md) provide comprehensive monitoring for scheduled batch activations. It gives you visibility into all scheduled batch activations across your organization, allowing you to monitor job execution status, performance metrics, and execution history to identify patterns and trends over time.

Job Schedules helps you diagnose configuration issues that affect batch activation reliability and understand dependencies between data processing stages and batch exports. This insight is particularly valuable for data teams, IT administrators, and marketing operations professionals who need to ensure reliable data delivery to downstream systems.



## Next steps {#next-steps}

Now that you understand the purpose and capabilities of [!UICONTROL Run and Operate] tools, explore the following resources to deepen your knowledge:

* Learn how to [monitor job schedules](job-schedules.md) for your batch activations
* Understand how to [configure scheduled activations](../destinations/ui/activate-batch-profile-destinations.md) for batch destinations
* Explore [dataflow monitoring](../dataflows/ui/monitor-destinations.md) for real-time destination activations
