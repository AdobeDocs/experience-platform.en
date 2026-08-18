---
title: Destinations Health Checks
description: Learn about the destinations health check in Adobe Experience Platform that detects stale destination activation schedules.
solution: Experience Platform
type: Documentation
role: Admin, User
---
# Destinations health checks

The destinations health check scans your sandbox for destination activation schedules that have stopped delivering audiences without your knowledge.

| Check | Object type |
| --- | --- |
| [Stale destination schedules](#stale-destination-schedules) | Destination |

## Stale destination schedules {#stale-destination-schedules}

Identifies destination activation schedules that are considered stale because their configured end date is in the past while activation status remains active.

| Detail | Description |
| --- | --- |
| **Issue** | One or more destination activation schedules have a past end date but activation status remains set to active. |
| **Impact** | Audience delivery silently stops once the schedule's end date passes, even though the schedule still shows as active. You might not notice that a campaign has stopped delivering mid-campaign. |
| **Remediation** | Review the affected flows and update the end date, or create a new schedule, for any campaign that should still be delivering. |

When you select the **[!UICONTROL Stale Destination Schedules]** card, a detail panel opens on the right. The panel shows:

* **[!UICONTROL Description]**: Explains that destination schedules are considered stale when the configured end date is in the past but activation status remains set to active. This check inspects existing destination schedules for this condition.
* **[!UICONTROL Impact]**: Audience delivery silently stops once the schedule's end date passes, even though the schedule still shows as active. You might not notice that a campaign has stopped delivering mid-campaign.
* **[!UICONTROL General areas of impact]**: Audience delivery and campaign continuity.
* **[!UICONTROL Experience League Documentation]**: A link to guardrails for data activation.
* **[!UICONTROL Recommendation]**: Delete unnecessary expired schedules.
* **[!UICONTROL Affected flows]**: A list of activation flows with a past end date that remain active, including the associated audience and expired end date. Use the link icon to open the flow.

![Stale Destination Schedules detail panel showing description, impact, recommendation, and affected flows](../assets/health-checks/stale-destination-schedules-detail.png)

For more information, see the [default guardrails for data activation](/help/destinations/guardrails.md).

## Next steps {#next-steps}

* Return to the [health checks overview](/help/run-and-operate/health-checks.md) to explore other check categories.
* Review the [guardrails for data activation](/help/destinations/guardrails.md) to manage your destination activation schedules.
