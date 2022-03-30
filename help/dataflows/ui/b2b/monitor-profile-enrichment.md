---
description: Use the [!UICONTROL Profile Enrichment] dashboard to understand if profile enrichment jobs ran and completed successfully, and to view the basic metrics to gauge the effectiveness of the enrichments.
solution: Experience Platform
title: Monitor profile enrichment jobs
type: Tutorial

---
# Monitor profile enrichment jobs in the UI

Use the [!UICONTROL Profile Enrichment] dashboard to understand if profile enrichment jobs ran and completed successfully, and to view the basic metrics to gauge the effectiveness of the enrichments.

In the [Platform UI](https://platform.adobe.com), select **[!UICONTROL Monitoring]** from the left navigation to access the [!UICONTROL Monitoring] dashboard. In the view selector, select **B2B Flow** to see the dashboard elements specific to [Real-Time CDP B2B](/help/rtcdp/b2b-overview.md).  The [!UICONTROL Monitoring] dashboard includes the basic metrics from the latest successful run, and daily job status up to 90 days in the past. The [!UICONTROL Related accounts] dashboard shows the basic metrics and daily job status specific to the [Related Accounts](/help/rtcdp/b2b-ai-ml-services/related-accounts.md) profile enrichment.

![Visual indication of how to get to the Profile enrichment jobs monitoring screen in the Experience Platform UI.](/help/dataflows/assets/ui/b2b/monitoring-profile-enrichment-jobs.png)

The data in the **[!UICONTROL Metrics]** card includes the basic metrics from the latest successful run of the Related Accounts job.

The following metrics are available for related accounts profile enrichment jobs:

| Metric | Description |
---------|----------|
| **[!UICONTROL Total account profiles]** | Indicates the total account profiles that your organization has access to. |
| **[!UICONTROL Account groups]** | Indicates the number of account groups clustered by the Related Accounts machine learning job. |
| **[!UICONTROL Single-account groups]** | Indicates the number of accounts which are not grouped together with other accounts. |
| **[!UICONTROL Largest group size]** | Indicates the size of the largest related accounts group. The maximum allowed group size is 30. |
| **[!UICONTROL Median group size]** | Indicates the median size of related accounts groups in your organization. |
| **[!UICONTROL Last successful run]** | Indicates the date and time of the last successful Related Accounts job run. |
| **[!UICONTROL Status]** | Indicates the status (successful, failed, or processing) of the Related Accounts job. |
| **[!UICONTROL Message]** | Indicates an error or warning message for a particular job run. |

## UI controls {#ui-controls}

This section describes various user interface (UI) options in the monitoring interface, which allow you to filter the metrics that are displayed on the page.

Use the arrow icon (![arrow icon](/help/dataflows/assets/ui/monitor-destinations/chevron-up.png)) to expand or dismiss the card at the top of the screen, which shows at-a-glance information about the profile enrichment jobs.

![Screen recording that shows the arrow icon UI control.](/help/dataflows/assets/ui/b2b/use-arrow-control.gif)

Use the **[!UICONTROL Metrics and graphs]** toggle to dismiss the view that displays the latest metrics.

![Screen recording that shows the metrics and graphs toggle.](/help/dataflows/assets/ui/b2b/metrics-and-graphs-toggle.gif)

Use the **[!UICONTROL Show failures only]** toggle to only display the failed profile enrichment jobs.

![Screen recording that shows the Show failures only toggle.](/help/dataflows/assets/ui/b2b/show-failures-only.gif)

## Next steps {#next-steps}

By following this tutorial, you can now successfully monitor and understand metrics for related accounts profile enrichment jobs. See the following documents for more details:

* [Related accounts in Real-time CDP B2B](/help/rtcdp/b2b-ai-ml-services/related-accounts.md)
* [Related accounts tab in the Account profile UI guide](/help/rtcdp/accounts/account-profile-ui-guide.md)