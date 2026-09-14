---
title: Query Service Health Checks
description: Learn about the Query Service health checks in Adobe Experience Platform that detect scheduled query failures and performance degradation.
solution: Experience Platform
type: Documentation
role: Admin, User
---
# Query Service health checks

The [!DNL Query Service] health checks scan your sandbox for scheduled queries that are failing or slowing down over time.

| Check | Object type |
| --- | --- |
| [Scheduled queries failing](#scheduled-queries-failing) | Dataset |
| [Scheduled queries slowing](#scheduled-queries-slowing) | Dataset |

## Scheduled queries failing {#scheduled-queries-failing}

Checks each scheduled query for its most recent run and flags any that failed or errored.

| Detail | Description |
| --- | --- |
| **Issue** | One or more scheduled queries failed or errored on their most recent run. |
| **Impact** | Without monitoring or alerting, scheduled queries can fail silently and repeatedly. This consumes compute resources without producing output and leaves target datasets stale, which is especially problematic for profile-enabled datasets. |
| **Remediation** | Inspect each failing scheduled query to find the root cause, then modify the query as needed to resolve the issue. |

When you select the **[!UICONTROL Scheduled Queries Failing]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: For each scheduled query, checks whether the most recent run has a status of failed or errored.
* **[!UICONTROL Impact]**: Without monitoring or alerting configured, scheduled queries can fail silently and repeatedly, consuming compute resources without producing query output and leaving target datasets stale. This is particularly problematic for profile-enabled datasets.
* **[!UICONTROL General areas of impact]**: Dataset contents and segmentation results.
* **[!UICONTROL Experience League Documentation]**: A link to guardrails for [!DNL Query Service].
* **[!UICONTROL Recommendation]**: Inspect each failing scheduled query to find the root cause. Modify the query as needed to resolve the issue.
* **[!UICONTROL Affected scheduled queries]**: A list of failing scheduled queries with their run ID and status. Use the link icon to open the query.

![Scheduled Queries Failing detail panel showing description, impact, general areas of impact, and Check Passed confirmation](../assets/health-checks/scheduled-queries-failing-detail.png){zoomable="yes"}

For more information, see the [guardrails for Query Service](/help/query-service/guardrails.md).

## Scheduled queries slowing {#scheduled-queries-slowing}

Compares the duration of each scheduled query's most recent run against the average of its prior runs.

| Detail | Description |
| --- | --- |
| **Issue** | A scheduled query with at least three completed runs has a most recent run duration that is 50 percent or more slower than its historical average. |
| **Impact** | Queries continue to succeed but take progressively longer, which risks exceeding timeout thresholds and can overlap with scheduled batch segmentation. If the query writes to a profile-enabled dataset, this also affects segmentation results. |
| **Remediation** | Configure a data expiration on the Experience Event datasets that the query reads from, since datasets that grow indefinitely lead to continued increases in query duration. Also review the start times of your scheduled queries to reduce overlap. |

When you select the **[!UICONTROL Scheduled Queries Slowing]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: For each scheduled query with at least three completed runs, compares the duration of the most recent run against the average of prior runs and flags queries whose latest run is 50 percent or more slower than the historical average.
* **[!UICONTROL Impact]**: Queries continue to succeed but take progressively longer, risking exceeding timeout thresholds and overlap with scheduled batch segmentation.
* **[!UICONTROL General areas of impact]**: Segmentation results, when the query writes to a profile-enabled dataset.
* **[!UICONTROL Experience League Documentation]**: A link to guardrails for [!DNL Query Service].
* **[!UICONTROL Recommendation]**: Set a data expiration on every Experience Event dataset your scheduled queries read from, since datasets that grow indefinitely cause continued increases in query duration. Review the start times of your scheduled queries to reduce overlap.
* **[!UICONTROL Affected scheduled queries]**: A list of slowing scheduled queries with their latest duration, average duration, and percentage slowdown. Use the link icon to open the query.

![Scheduled Queries Slowing detail panel showing description, impact, general areas of impact, and Check Passed confirmation](../assets/health-checks/scheduled-queries-slowing-detail.png){zoomable="yes"}

For more information, see the [guardrails for Query Service](/help/query-service/guardrails.md) and the [Experience Event dataset retention documentation](/help/catalog/datasets/experience-event-dataset-retention-ttl-guide.md).

## Next steps {#next-steps}

* Return to the [health checks overview](/help/run-and-operate/health-checks/overview.md) to explore other check categories.
* Review the [guardrails for Query Service](/help/query-service/guardrails.md) to manage your scheduled queries.
