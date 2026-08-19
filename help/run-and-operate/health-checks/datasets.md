---
title: Datasets Health Checks
description: Learn about the datasets health check in Adobe Experience Platform that detects profile-enabled dataset counts approaching platform limits.
solution: Experience Platform
type: Documentation
role: Admin, User
---
# Datasets health checks

The datasets health check scans your sandbox for profile-enabled dataset counts approaching the platform limit for each schema class.

| Check | Object type |
| --- | --- |
| [Profile dataset count](#profile-dataset-count) | Dataset |

## Profile dataset count {#profile-dataset-count}

Scans the number of profile-enabled datasets against the platform limit for each schema class.

| Detail | Description |
| --- | --- |
| **Issue** | The number of profile-enabled datasets based on the XDM Individual Profile class, or the number based on the XDM ExperienceEvent class, is approaching the limit of 20. |
| **Impact** | An excessive number of profile-enabled datasets impacts the performance and throughput of both batch and streaming segmentation. |
| **Remediation** | Disable [!UICONTROL Profile] on datasets that no longer feed active journeys, segments, or destinations. Aim for one profile-enabled dataset per schema class. Consolidating to a single dataset per class reduces the number of fragments [!DNL Real-Time Customer Profile] must merge on every evaluation. |

When you select the **[!UICONTROL Profile Dataset Count]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: Explains that [!DNL Experience Platform] limits the number of datasets that can be enabled for profile to no more than 20 datasets based on the XDM Individual Profile class, and no more than 20 datasets based on the XDM ExperienceEvent class, per sandbox. This check inspects whether either guardrail has been exceeded.
* **[!UICONTROL Impact]**: An excessive number of profile-enabled datasets impacts the performance and throughput of both batch and streaming segmentation.
* **[!UICONTROL General areas of impact]**: Batch and streaming segmentation.
* **[!UICONTROL Experience League Documentation]**: Links to default guardrails for [!DNL Real-Time Customer Profile] data and the dataset user guide.
* **[!UICONTROL Recommendation]**: Disable [!UICONTROL Profile] on datasets that no longer feed active journeys, segments, or destinations by going to **[!UICONTROL Data Management]** > **[!UICONTROL Datasets]** and turning off the **[!UICONTROL Profile]** toggle. Aim for one profile-enabled dataset per schema class. Platform-managed datasets count against the limit but cannot be disabled, so focus remediation on your own datasets.
* **[!UICONTROL Profile Dataset Count]**: The current count of profile-enabled datasets for the schema class against the limit.

![Profile Dataset Count detail panel showing description, impact, general areas of impact, and Check Passed confirmation](../assets/health-checks/profile-dataset-count-detail.png)

For more information, see the [default guardrails for Real-Time Customer Profile data](/help/profile/guardrails.md) and the [datasets user guide](/help/catalog/datasets/user-guide.md).

## Next steps {#next-steps}

* Return to the [health checks overview](/help/run-and-operate/health-checks/overview.md) to explore other check categories.
* Review the [datasets user guide](/help/catalog/datasets/user-guide.md) to manage your profile-enabled datasets.
