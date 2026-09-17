---
title: Destinations Health Checks
description: Learn about the destinations health check in Adobe Experience Platform that detects stale destination activation schedules.
solution: Experience Platform
type: Documentation
role: Admin, User
---
# Destinations health checks

The destinations health check scans your sandbox for destination activation schedules with an expired end date whose dataflow remains active.

| Check | Object type |
| --- | --- |
| [Stale destination schedules](#stale-destination-schedules) | Destination |

## Stale destination schedules {#stale-destination-schedules}

Identifies destination activation schedules that are considered stale because their configured end date is in the past while the dataflow remains active.

| Detail | Description |
| --- | --- |
| **Issue** | One or more destination activation schedules have a past end date but the dataflow remains active. |
| **Impact** | The dataflow stops exporting data, and you might wonder why your campaign stopped receiving data. |
| **Remediation** | Extend the expired end date, create a new dataflow, or remove the dataflow. |

When you select the **[!UICONTROL Stale Destination Schedules]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: Explains that the configured activation end date is in the past while the dataflow is still active. This check inspects existing destination activation schedules for this condition.
* **[!UICONTROL Impact]**: The dataflow stops exporting data, and you might wonder why your campaign stopped receiving data.
* **[!UICONTROL General areas of impact]**: Destination activation schedules.
* **[!UICONTROL Experience League documentation]**: Links to schedule audience exports for [streaming](/help/destinations/ui/activate-segment-streaming-destinations.md#scheduling) and [batch](/help/destinations/ui/activate-batch-profile-destinations.md#scheduling) destinations.
* **[!UICONTROL Recommendation]**: Extend the expired end date, create a new dataflow, or remove the dataflow.
* **[!UICONTROL Affected flows]**: A list of active dataflows with audiences that have a past activation end date, including the associated audience and expired end date. Use the link icon to open the flow.

![Stale Destination Schedules detail panel showing description, impact, recommendation, and affected flows](../assets/health-checks/stale-destination-schedules-detail.png){zoomable="yes"}

For more information, see how to schedule audience exports for [streaming](/help/destinations/ui/activate-segment-streaming-destinations.md#scheduling) and [batch](/help/destinations/ui/activate-batch-profile-destinations.md#scheduling) destinations.

## Next steps {#next-steps}

* Return to the [health checks overview](/help/run-and-operate/health-checks/overview.md) to explore other check categories.
* Review the scheduling documentation for [streaming](/help/destinations/ui/activate-segment-streaming-destinations.md#scheduling) and [batch](/help/destinations/ui/activate-batch-profile-destinations.md#scheduling) destinations to manage your destination dataflow schedules.
