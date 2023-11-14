---
title: Monitor Batch Query License Usage
description: The Adobe Experience Platform UI provides a dashboard through which you can view important information about your organization's Data Distiller license usage.
exl-id: a1e365a0-cc65-4fd6-b36f-8d79b7d9ec7c
---
# Monitor batch query license usage {#monitor-license-usage}

The license usage dashboard provides granular reports about your organization's Query Service license usage and usage metrics for each purchased product. To learn more about the available metrics displayed in the dashboard, visit the [license usage dashboard guide](../../dashboards/guides/license-usage.md#available-metrics). 

The dashboard provides usage metrics for each purchased product, the consolidated usage of metrics in all production or development sandboxes, and the usage metrics from a specific sandbox. Information displayed here is captured during a daily snapshot of your Platform instance. 

>[!NOTE]
>
>The license usage dashboard is not enabled by default. Users must be granted "View License Usage Dashboard" permission to be able to view the dashboard. For steps on granting access permissions for viewing the license usage dashboard, refer to the [dashboard permissions guide](../../dashboards/permissions.md).

## Compute hours {#compute-hours}

The [!UICONTROL Compute hours] metric is only applicable to customers with the Data Distiller license for batch queries. [!UICONTROL Compute hours] are the measure of time taken by the Query Service engines to read, process, and write data back into the data lake when a batch query is executed.

>[!NOTE]
>
>**The [!UICONTROL Compute hours] data is available with limitations**: The data begins from Oct 1 2023 with no trends.<br>The **backfill** of data from your contract start date is a work-in-progress. It is expected to be available by the end of the calendar year.

![The license usage dashboard with the compute hours metric highlighted.](../images/data-distiller/compute-hours.png)

To find more information about the metrics available for your organization based on your organization's purchased license, see the [license usage dashboard guide](../../dashboards/guides/license-usage.md).
