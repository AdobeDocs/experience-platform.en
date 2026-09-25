---
title: Usage Insights
description: Learn how to access, configure, and interpret Usage Insights to understand how your organization uses Real-Time CDP, Adobe Journey Optimizer, and Customer Journey Analytics.
---
# Usage Insights

To understand how your organization uses supported Adobe products and capabilities, use **[!UICONTROL Usage Insights]**. [!UICONTROL Usage Insights] is a [!UICONTROL Run and Operate] capability that provides visibility into product usage and adoption across Real-Time CDP, Adobe Journey Optimizer, and Customer Journey Analytics.

[!UICONTROL Usage Insights] focuses on product usage and adoption. It does not calculate financial return on investment or report license consumption. For information about your organization's licensed amounts and consumption, see the [license usage dashboard](../../landing/license-usage-and-guardrails/license-usage-dashboard.md).

## Prerequisites {#prerequisites}

[!UICONTROL Usage Insights] is available to organizations with at least one of the following products provisioned:

* Real-Time CDP Prime (B2C, B2B, or B2P)
* Real-Time CDP Ultimate (B2C, B2B, or B2P)
* Adobe Journey Optimizer B2C
* Customer Journey Analytics B2C

To view the [!UICONTROL Usage Insights] dashboard, you need the **[!UICONTROL View Usage Insights]** [access control permission](/help/access-control/home.md#permissions). Contact your system administrator to ensure that you have the appropriate permissions and access to a sandbox where Usage Insights is configured.

## Enable and configure Usage Insights {#enable-and-configure}

Before your organization can view usage data, a system administrator must enable [!UICONTROL Usage Insights] and configure at least one sandbox for data collection.

To enable [!UICONTROL Usage Insights]:

1. Select **[!UICONTROL Run and Operate]** from the left navigation, then select **[!UICONTROL Usage Insights]**.
1. Turn on **[!UICONTROL Enable usage insights]**.
1. From the **[!UICONTROL AEP Sandbox]** dropdown, select the sandbox where you want [!UICONTROL Usage Insights] to collect data.
1. Optionally, turn on **[!UICONTROL Override default retention window]** and use **[!UICONTROL Select number of months]** to set a custom retention period. By default, [!UICONTROL Usage Insights] retains data for 6 months. Select **[!UICONTROL Save]** to update your settings.
1. Select **[!UICONTROL Dashboard]**.

![The Usage Insights Data settings screen with controls for enabling Usage Insights, selecting an AEP sandbox, and overriding the default retention window.](../assets/usage-insights/usage-insights-data-settings.png){zoomable="yes"}

>[!IMPORTANT]
>
>Data collection begins when you enable [!UICONTROL Usage Insights]. Initial data typically becomes available within approximately 24 hours.

You can configure [!UICONTROL Usage Insights] for multiple sandboxes in your organization.

### Change the configured sandbox {#change-sandbox}

To change the sandbox configuration, select **[!UICONTROL Data Settings]** from the [!UICONTROL Usage Insights] dashboard. From the **[!UICONTROL AEP Sandbox]** dropdown, select the sandbox that you want to configure, make the required changes, and select **[!UICONTROL Save]**.

>[!IMPORTANT]
>
>Changing the sandbox may create an additional dataset, connection, and data view. Once saved, existing data remains in the previous dataset, and subsequent data is stored in the new dataset.

## Access Usage Insights {#access}

To access [!UICONTROL Usage Insights]:

1. Select **[!UICONTROL Run and Operate]** from the Experience Platform left navigation.
1. Select **[!UICONTROL Usage Insights]**.

To view Usage Insights data for a sandbox, [!UICONTROL Usage Insights] must be configured for that sandbox and you must have access to it. If Usage Insights is not available for your currently selected sandbox, you are prompted to switch to a sandbox where it is configured.

## Navigate the Usage Insights dashboard {#navigate-dashboard}

The [!UICONTROL Usage Insights] dashboard is available directly in Experience Platform and organizes usage data into six analysis areas: [!UICONTROL Profile analysis], [!UICONTROL Audience analysis], [!UICONTROL Destination analysis], [!UICONTROL Channel analysis], [!UICONTROL Campaign analysis], and [!UICONTROL Journey analysis].

Select the **[!UICONTROL Table of contents]** button to open a side panel that lists the analysis areas and the charts available in each area. Use the table of contents to identify available charts and navigate through the dashboard.

![The Usage Insights dashboard with the Table of contents panel open, showing the available analysis areas and charts.](../assets/usage-insights/usage-insights-dashboard.png){zoomable="yes"}

Each analysis area contains one or more charts that present usage information for that area. Expand an analysis area to view its charts and available data.

For definitions and details about the charts available in each analysis area, see the [Usage analysis reference](usage-analysis.md).

## Understand data freshness and retention {#data-freshness-and-retention}

[!UICONTROL Usage Insights] collects usage data nightly. The dashboard displays a rolling window of the most recent 7 days and updates automatically each day.

Initial data typically becomes available approximately 24 hours after you enable [!UICONTROL Usage Insights]. You can change how long collected data is retained by using the retention settings described in [Enable and configure Usage Insights](#enable-and-configure).

## Next steps {#next-steps}

To learn about the charts available in each Usage Insights analysis area and how to interpret the data they provide, see the [Usage analysis reference](usage-analysis.md).

For related Experience Platform guidance, see:

* [Run and Operate overview](../overview.md)
* [Access control overview](/help/access-control/home.md)
