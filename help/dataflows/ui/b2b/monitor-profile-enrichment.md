---
keywords: Experience Platform;home;popular topics;monitor accounts;monitor dataflows;dataflows;destinations
description: 
solution: Experience Platform
title: Monitor profile enrichment jobs
type: Tutorial

---
# Monitor profile enrichment jobs in the UI

In the [Platform UI](https://platform.adobe.com), select **[!UICONTROL Monitoring]** from the left navigation to access the [!UICONTROL Monitoring] dashboard. In the view selector, select **B2B Flow** to see the dashboard elements specific to [Real-Time CDP B2B](/help/rtcdp/b2b-overview.md).  The [!UICONTROL Monitoring] dashboard contains metrics and information on profile enrichment jobs for related accounts (add link to related accounts feature page).

![Profile enrichment jobs monitoring](/help/dataflows/assets/ui/b2b/monitoring-profile-enrichment-jobs.png)

Use the [!UICONTROL Profile Enrichment] dashboard to understand if profile evaluation and export happens on time and without any exceptions, so the downstream services for destination activation can have the latest evaluated profile data.

The following metrics are available for profile enrichment related accounts jobs:

| Metric | Description |
---------|----------|
| **[!UICONTROL Total account profiles]** | Indicates the total account profiles that you are tracking. |
| **[!UICONTROL Account groups]** | Indicates the number of accounts that are grouped together by the machine learning algorithms. |
| **[!UICONTROL Single-account groups]** | Indicates the number of accounts which are not grouped with other accounts. |
| **[!UICONTROL Largest group size]** | Indicates the size of the largest related accounts group. The largest permitted group is 30. |
| **[!UICONTROL Median group size]** | Indicates the median size of related accounts groups. |
| **[!UICONTROL Last successful run]** | Indicates the date and time of the last successful profile enrichment job. |

The data in the Metrics in the quadrant indicates the latest metrics. 

Use the arrow icon (![arrow icon](/help/dataflows/assets/ui/monitor-destinations/chevron-up.png)) to expand or dismiss the cards at the top of the screen, which show at-a-glance information about the activation details, based on the destination type - streaming or batch: