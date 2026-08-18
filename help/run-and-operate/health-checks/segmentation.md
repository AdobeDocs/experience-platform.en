---
title: Segmentation Health Checks
description: Learn about the segmentation health checks in Adobe Experience Platform that detect audience counts approaching sandbox limits.
solution: Experience Platform
type: Documentation
role: Admin, User
---
# Segmentation health checks

The segmentation health checks scan your sandbox for audience counts approaching platform limits across batch, streaming, and edge evaluation methods.

| Check | Object type |
| --- | --- |
| [Audience sandbox limit](#audience-sandbox-limit) | Segment |
| [Streaming audiences](#streaming-audiences) | Segment |
| [Edge audiences](#edge-audiences) | Segment |

## Audience sandbox limit {#audience-sandbox-limit}

Scans the total number of active audience definitions in a sandbox against the platform limit.

| Detail | Description |
| --- | --- |
| **Issue** | The total number of active audience definitions in the sandbox is approaching the limit of 4,000. |
| **Impact** | Every active audience is re-evaluated in each scheduled batch segmentation job. Approaching the limit increases the latency of every batch segmentation job. |
| **Remediation** | Review your active audiences and deactivate or delete any that are no longer needed. |

When you select the **[!UICONTROL Audience Sandbox Limit]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: Scans whether the total number of audiences defined in the sandbox exceeds the limit of 4,000. Every defined audience, whether batch, streaming, or edge, is re-evaluated in every scheduled batch segmentation job.
* **[!UICONTROL Impact]**: Exceeding 4,000 audiences increases the latency of every batch segmentation job.
* **[!UICONTROL General areas of impact]**: Batch segmentation and activation.
* **[!UICONTROL Experience League Documentation]**: A link to guardrails for [!DNL Real-Time Customer Profile].

![Audience Sandbox Limit detail panel showing description, impact, general areas of impact, and Check Passed confirmation](../assets/health-checks/audience-sandbox-limit-detail.png)

For more information, see the [guardrails for Real-Time Customer Profile data and segmentation](/help/profile/guardrails.md).

## Streaming audiences {#streaming-audiences}

Scans the number of streaming-evaluated audiences in a sandbox against the platform limit.

| Detail | Description |
| --- | --- |
| **Issue** | The number of streaming-evaluated audiences in the sandbox is approaching the limit of 500. |
| **Impact** | Streaming audiences consume significant compute resources. Approaching the limit causes performance degradation across all streaming audiences in the sandbox, increasing evaluation latency. |
| **Remediation** | Review your streaming audiences and consolidate or remove any that are no longer needed. |

When you select the **[!UICONTROL Streaming Audiences]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: Scans whether the number of streaming-evaluated audiences in the sandbox exceeds the guardrail of 500.
* **[!UICONTROL Impact]**: Exceeding the guardrail causes performance degradation across all streaming audiences in the sandbox, increasing evaluation latency.
* **[!UICONTROL General areas of impact]**: Real-time audience evaluation and activation.
* **[!UICONTROL Experience League Documentation]**: A link to guardrails for [!DNL Real-Time Customer Profile].

![Streaming Audiences detail panel showing description, impact, general areas of impact, and Check Passed confirmation](../assets/health-checks/streaming-audiences-detail.png)

For more information, see the [guardrails for Real-Time Customer Profile data and segmentation](/help/profile/guardrails.md) and the [streaming segmentation documentation](/help/segmentation/methods/streaming-segmentation.md).

## Edge audiences {#edge-audiences}

Scans the number of edge-evaluated audiences in a sandbox against the platform limit.

| Detail | Description |
| --- | --- |
| **Issue** | The number of edge-evaluated audiences in the sandbox is approaching the limit of 150. |
| **Impact** | Exceeding the limit causes performance degradation across all edge audiences in the sandbox, increasing evaluation latency and risking timeouts for real-time decisioning. |
| **Remediation** | Consolidate overlapping edge audiences where possible. Audit existing edge audiences to identify candidates that can move to streaming evaluation. Only audiences that require sub-second qualification at page load need edge evaluation. |

When you select the **[!UICONTROL Edge Audiences]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: Scans whether the number of edge-evaluated audiences in the sandbox exceeds the guardrail of 150.
* **[!UICONTROL Impact]**: Exceeding 150 edge audiences causes performance degradation across all edge audiences in the sandbox, increasing evaluation latency and risking timeouts for real-time decisioning.
* **[!UICONTROL General areas of impact]**: Edge-based real-time audience evaluation and personalization.
* **[!UICONTROL Experience League Documentation]**: A link to guardrails for [!DNL Real-Time Customer Profile].
* **[!UICONTROL Recommendation]**: Consolidate overlapping edge audiences where possible to reduce the total count. Audit existing edge audiences to identify candidates that can move to streaming evaluation.
* **[!UICONTROL Edge Audiences]**: The current count of edge audiences against the sandbox limit.

![Edge Audiences detail panel showing description, impact, general areas of impact, and Check Passed confirmation](../assets/health-checks/edge-audiences-detail.png)

For more information, see the [guardrails for Real-Time Customer Profile data and segmentation](/help/profile/guardrails.md) and the [edge segmentation documentation](/help/segmentation/methods/edge-segmentation.md).

## Next steps {#next-steps}

* Return to the [health checks overview](/help/run-and-operate/health-checks.md) to explore other check categories.
* Learn about [streaming segmentation](/help/segmentation/methods/streaming-segmentation.md) and [edge segmentation](/help/segmentation/methods/edge-segmentation.md).
