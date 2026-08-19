---
title: Ingestion Health Checks
description: Learn about the ingestion health check in Adobe Experience Platform that detects batch ingestion volume approaching platform guardrails.
solution: Experience Platform
type: Documentation
role: Admin, User
---
# Ingestion health checks

The ingestion health check scans your sandbox for batch ingestion volume approaching the platform guardrail for Profile-enabled datasets.

| Check | Object type |
| --- | --- |
| [Batches per day (profile)](#batches-per-day-profile) | Dataset |

## Batches per day (profile) {#batches-per-day-profile}

Scans the combined daily count of Profile and Experience Event batches ingested into a sandbox against the platform guardrail.

| Detail | Description |
| --- | --- |
| **Issue** | The combined count of Profile and Experience Event batches ingested into the sandbox in the last 24 hours is approaching the limit of 90 batches per day. |
| **Impact** | Exceeding the limit increases processing queue depth in the [!DNL Profile] store, which delays profile updates. Scheduled segmentation runs on its regular schedule regardless of whether all batches finished ingesting, which can lead to incorrect audience results from stale profile data. |
| **Remediation** | Consolidate ingestion to no more than one batch per dataset per 24 hours. Refer to the [!UICONTROL Job Schedules] dashboard to identify which datasets need batch count reduction. |

When you select the **[!UICONTROL Batches Per Day (Profile)]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: Explains that the per sandbox, per day limit for profile batch ingestion is 90 batches per day. This check inspects the combined daily count of Profile and Experience Event batches ingested into the sandbox for Profile-enabled datasets against the platform guardrail.
* **[!UICONTROL Impact]**: Exceeding 90 Profile or Experience Event batches per day increases processing queue depth in the [!DNL Profile] store, delaying profile updates. Scheduled segmentation starts on schedule regardless of whether all batches have finished ingesting, which can lead to incorrect audience results from stale profile data.
* **[!UICONTROL General areas of impact]**: Segmentation and activation results.
* **[!UICONTROL Experience League Documentation]**: A link to guardrails for data ingestion.
* **[!UICONTROL Recommendation]**: Consolidate ingestion to no more than one batch per dataset per 24 hours. Refer to the [!UICONTROL Job Schedules] dashboard to identify which datasets need batch count reduction.

![Batches Per Day (Profile) detail panel showing description, impact, general areas of impact, and Check Passed confirmation](../assets/health-checks/batches-per-day-profile-detail.png)

For more information, see the [guardrails for data ingestion](/help/ingestion/guardrails.md).

## Next steps {#next-steps}

* Return to the [health checks overview](/help/run-and-operate/health-checks/overview.md) to explore other check categories.
* Review [job schedules](/help/run-and-operate/job-schedules.md) to identify which datasets need batch count reduction.
