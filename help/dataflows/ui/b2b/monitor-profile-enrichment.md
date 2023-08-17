---
description: Use the [!UICONTROL Profile Enrichment] dashboard to understand if profile enrichment jobs ran and completed successfully, and to view the basic metrics to gauge the effectiveness of the enrichments.
solution: Experience Platform
title: Monitor profile enrichment jobs
type: Tutorial
exl-id: 096a2212-ed7f-4419-8ead-fa1ca01c2804
---
# Monitor profile enrichment jobs in the UI {#monitor-profile-enrichment}

Use the [!UICONTROL Profile Enrichment] dashboard to understand if profile enrichment jobs ran and completed successfully, and to view the basic metrics to gauge the effectiveness of the enrichments.

In the [Platform UI](https://platform.adobe.com), select **[!UICONTROL Monitoring]** from the left navigation to access the [!UICONTROL Monitoring] dashboard. In the view selector, select **B2B Flow** to see the dashboard elements specific to [Real-Time CDP B2B](/help/rtcdp/b2b-overview.md).  The [!UICONTROL Monitoring] dashboard includes the basic metrics from the latest successful run, and daily job status up to 90 days in the past.

## Related accounts profile enrichment {#related-accounts}

The [!UICONTROL Related accounts] dashboard shows basic metrics and the status of the daily job specific to the [Related Accounts](/help/rtcdp/b2b-ai-ml-services/related-accounts.md) profile enrichment. 

![Visual indication of how to get to the Profile enrichment jobs monitoring screen in the Experience Platform UI.](/help/dataflows/assets/ui/b2b/monitoring-profile-enrichment-jobs.png)

The data in the **[!UICONTROL Metrics]** card includes the basic metrics from the latest successful run of the Related Accounts job.

The following metrics are available for related accounts profile enrichment jobs:

| Metric | Description |
| --------- | ---------- |
| **[!UICONTROL Total account profiles]** | Indicates the total account profiles that your organization has access to. |
| **[!UICONTROL Account groups]** | Indicates the number of account groups clustered by the related accounts machine learning job. |
| **[!UICONTROL Single-account groups]** | Indicates the number of accounts which are not grouped together with other accounts. |
| **[!UICONTROL Largest group size]** | Indicates the size of the largest related accounts group. The maximum allowed group size is 30. |
| **[!UICONTROL Median group size]** | Indicates the median size of related accounts groups in your organization. |
| **[!UICONTROL Last successful run]** | Indicates the date and time of the last successful related accounts job run. |
| **[!UICONTROL Status]** | Indicates the status (successful, failed, or processing) of the related accounts job. |
| **[!UICONTROL Message]** | Indicates an error or warning message for a particular job run. |

## Lead to account matching profile enrichment {#lead-to-account-matching}

The [!UICONTROL Lead to account matching] dashboard shows the basic metrics and daily job-run status specific to the [Lead to account matching](/help/rtcdp/b2b-ai-ml-services/lead-to-account-matching.md) profile enrichment. 

![Lead to account matching profile enrichment](/help/dataflows/assets/ui/b2b/mpc-lead-to-account-matching.png)

The following metrics are available for lead to account matching profile enrichment jobs:

| Metric | Description |
| --------- | ---------- |
| **[!UICONTROL Total persons with accounts]** | Indicates the total number of people that are associated with an account. |
| **[!UICONTROL Total accounts]** | Indicates the total number of accounts. |
| **[!UICONTROL Existing persons with accounts]** | Indicates the number of people that are already associated with an account from the data sources. |
| **[!UICONTROL Persons matched]** | Indicates the number of people that were matched to an account. |
| **[!UICONTROL Persons unmatched]** | Indicates the number of people that were not matched to an account. |
| **[!UICONTROL Last successful run]** | Indicates the date and time of the last successful lead to account matching job run. |
| **[!UICONTROL Status]** | Indicates the status (successful, failed, or processing) of the lead to account matching job. |

## Predictive lead and account scoring profile enrichment {#predictive-lead-to-account-scoring}

The [!UICONTROL Predictive lead and account scoring] dashboard shows the basic metrics and daily job-run status specific to the [Predictive lead and account scoring](/help/rtcdp/b2b-ai-ml-services/predictive-lead-and-account-scoring.md) profile enrichment. 

![Predictive lead and account scoring profile enrichment](/help/dataflows/assets/ui/b2b/predictive-lead-and-account-scoring.png)

The following metrics are available for predictive lead and account scoring profile enrichment jobs:

| Metric | Description |
| --------- | ---------- |
| **[!UICONTROL Job start]** | Indicates the start date and time of the predictive lead and account scoring job run. |
| **[!UICONTROL Processing time]** | The total time taken for the job to complete. |
| **[!UICONTROL Score name]** | The score name of the job. |
| **[!UICONTROL Profile type]** | The type of the score: <ul><li>Person</li><li>Account</li></ul>. |
| **[!UICONTROL Job type]** | The type of the job:<ul><li>Scoring</li><li>Training</li>. |
| **[!UICONTROL Status]** | Indicates the status (successful, failed, or processing) of the predictive lead and account scoring job. |

## UI controls {#ui-controls}

This section describes various user interface (UI) options in the monitoring interface, which allow you to filter the metrics that are displayed on the page.

Use the arrow icon (![arrow icon](/help/dataflows/assets/ui/monitor-destinations/chevron-up.png)) to expand or dismiss the card at the top of the screen, which shows at-a-glance information about the profile enrichment jobs.

![Screen recording that shows the arrow icon UI control.](/help/dataflows/assets/ui/b2b/use-arrow-control.gif)

Use the **[!UICONTROL Metrics and graphs]** toggle to dismiss the view that displays the latest metrics.

![Screen recording that shows the metrics and graphs toggle.](/help/dataflows/assets/ui/b2b/metrics-and-graphs-toggle.gif)

Use the **[!UICONTROL Show failures only]** toggle to only display the failed profile enrichment jobs.

![Screen recording that shows the Show failures only toggle.](/help/dataflows/assets/ui/b2b/show-failures-only.gif)

## Next steps {#next-steps}

By following this tutorial, you can now successfully monitor and understand metrics for profile enrichment jobs. See the following documents for more details:

* [Related accounts in Real-Time CDP B2B](/help/rtcdp/b2b-ai-ml-services/related-accounts.md)
* [Related accounts tab in the Account profile UI guide](/help/rtcdp/accounts/account-profile-ui-guide.md)
* [Lead to account matching in Real-Time CDP B2B](/help/rtcdp/b2b-ai-ml-services/lead-to-account-matching.md)
* [Predictive lead and account scoring in Real-Time CDP B2B](/help/rtcdp/b2b-ai-ml-services/predictive-lead-and-account-scoring.md)
