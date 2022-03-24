---
description: Use the [!UICONTROL Profile Enrichment] dashboard to understand if profile enrichment jobs ran on time and without any exceptions, and to track the relevant metrics for related accounts.
solution: Experience Platform
title: Monitor profile enrichment jobs
type: Tutorial

---
# Monitor profile enrichment jobs in the UI

Use the [!UICONTROL Profile Enrichment] dashboard to understand if profile enrichment jobs for your B2B profiles ran on time and without any exceptions, and to track the relevant metrics for related accounts.

In the [Platform UI](https://platform.adobe.com), select **[!UICONTROL Monitoring]** from the left navigation to access the [!UICONTROL Monitoring] dashboard. In the view selector, select **B2B Flow** to see the dashboard elements specific to [Real-Time CDP B2B](/help/rtcdp/b2b-overview.md).  The [!UICONTROL Monitoring] dashboard contains metrics and information on profile enrichment jobs for [related accounts](/help/rtcdp/b2b-ai-ml-services/related-accounts.md).

![Profile enrichment jobs monitoring](/help/dataflows/assets/ui/b2b/monitoring-profile-enrichment-jobs.png)

The data in the Metrics quadrant indicates the latest information for your B2B accounts, taken from the last successfully processed job.

The following metrics are available for related accounts profile enrichment jobs:

| Metric | Description |
---------|----------|
| **[!UICONTROL Total account profiles]** | Indicates the total account profiles that you have access to in your organization. |
| **[!UICONTROL Account groups]** | Indicates the number of accounts that are grouped together by the Experience Platform machine learning algorithms. |
| **[!UICONTROL Single-account groups]** | Indicates the number of accounts which are not grouped with other accounts. |
| **[!UICONTROL Largest group size]** | Indicates the size of the largest related accounts group. The largest permitted group is 30. |
| **[!UICONTROL Median group size]** | Indicates the median size of related accounts groups. |
| **[!UICONTROL Last successful run]** | Indicates the date and time of the last successful profile enrichment job. |
| **[!UICONTROL Status]** | Indicates the status (successful, failed, or processing) of the profile enrichment job. |
| **[!UICONTROL Message]** | For failed profile enrichment jobs, you can see a message which indicates the reason of the job failure and what you can do to address it. |

## UI controls {#ui-controls}

Use the arrow icon (![arrow icon](/help/dataflows/assets/ui/monitor-destinations/chevron-up.png)) to expand or dismiss the card at the top of the screen, which shows at-a-glance information about the profile enrichment jobs for related accounts.

![Arrow icon UI control](/help/dataflows/assets/ui/b2b/use-arrow-control.gif)

Use the **[!UICONTROL Metrics and graphs]** toggle to dismiss the view that displays the latest metrics.

![Metrics and graphs toggle](/help/dataflows/assets/ui/b2b/metrics-and-graphs-toggle.gif)

Use the **[!UICONTROL Show failures only]** toggle to only display the failed profile enrichment jobs.

![Show failures only toggle](/help/dataflows/assets/ui/b2b/show-failures-only.gif)

## Next steps {#next-steps}

By following this tutorial, you can now successfully monitor and understand metrics for related accounts profile enrichment jobs. You can now also successfully identify and address errors that contribute to the failure of profile enrichment jobs. See the following documents for more details:

* [Related accounts in Real-time CDP B2B](/help/rtcdp/b2b-ai-ml-services/related-accounts.md)
* [Related accounts tab in the Account profile UI guide](/help/rtcdp/accounts/account-profile-ui-guide.md)