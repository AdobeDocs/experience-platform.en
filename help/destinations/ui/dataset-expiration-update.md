---
title: Update dataset export default expiration date
description: Learn how to update the default expiration date for dataset export dataflows that were set to expire on September 1st, 2025.
type: Tutorial
hide: true
hidefromtoc: true
---

# Update dataset export default expiration date

>[!IMPORTANT]
>
>**Action required**: If your organization has dataset export dataflows with an end date of September 1st, 2025, you must update these dates before the expiration to prevent your data exports from stopping.

## Overview

In the [September 2024 release of Experience Platform](/help/release-notes/latest/latest.md#destinations), Adobe introduced the ability to set an `endTime` date for dataset export dataflows. As part of this release, Adobe automatically set a default end date of **September 1st, 2025** for all existing dataset export dataflows that were created before the September 2024 release.

## Why this matters

Dataset export dataflows with an end date of September 1st, 2025 will automatically stop exporting data on that date unless you manually update the expiration date. This could disrupt your data pipeline and reporting workflows.

## Identify affected dataflows

### Using the Experience Platform UI

1. Navigate to **[!UICONTROL Destinations]** > **[!UICONTROL Browse]** in the Experience Platform UI.
2. Look for dataflows with **[!UICONTROL Datasets]** in the **[!UICONTROL Data Type]** column.
3. Dataflows that need attention will display a notification message indicating they expire on September 1st, 2025.

![Dataset export dataflows with expiration notification](/help/destinations/assets/ui/export-datasets/update-end-date.png)

### Using the API

You can also identify affected dataflows using the Flow Service API by querying for dataflows with an `endTime` of `2025-09-01T00:00:00.000Z`.

## Update the expiration date

### Using the Experience Platform UI

1. **Select the dataflow**: In the Destinations workspace, find and select the dataset export dataflow that needs updating.

2. **Access the scheduling settings**: 
   - Click on **[!UICONTROL Export datasets]** in the selected dataflow
   - Navigate to the **[!UICONTROL Scheduling]** step
   - Click **[!UICONTROL Edit schedule]**

3. **Update the end date**:
   - Choose a new end date that extends beyond September 1st, 2025
   - Consider your long-term data export needs when selecting the date
   - Click **[!UICONTROL Save]** to confirm the changes

4. **Complete the workflow**: Proceed through the remaining steps and save your updates.

![Edit schedule control in the Scheduling step](/help/destinations/assets/ui/export-datasets/edit-schedule-control-highlighted.png)

### Using the API

You can update the end date programmatically using the Flow Service API:

```json
PATCH /flows/{FLOW_ID}
{
  "updateEtag": "etag_value",
  "transformations": [
    {
      "name": "MapSchedule",
      "params": {
        "schedule": {
          "frequency": "ONCE",
          "startTime": "2024-01-01T00:00:00.000Z",
          "endTime": "2026-01-01T00:00:00.000Z"
        }
      }
    }
  ]
}
```

For detailed API instructions, refer to the [Export datasets API documentation](/help/destinations/api/export-datasets.md#update-schedule).

## Best practices

### Setting appropriate end dates

- **Consider your data retention policies**: Set end dates that align with your organization's data retention requirements
- **Plan for renewal**: Set dates that give you sufficient time to review and renew before expiration
- **Document your changes**: Keep track of which dataflows you've updated and their new expiration dates

### Monitoring your dataflows

- **Regular reviews**: Periodically check your dataset export dataflows for upcoming expirations
- **Set up alerts**: Use the [destinations alerts feature](/help/destinations/ui/alerts.md) to get notified about expiring dataflows
- **Automate where possible**: Consider using the API to programmatically manage expiration dates

## Troubleshooting

### Common issues

**Q: I can't see the Edit schedule option**
A: Ensure you have the necessary permissions to edit dataflows. Contact your system administrator if you need elevated permissions.

**Q: The end date field is grayed out**
A: This may indicate that the dataflow is currently processing or in a state that doesn't allow editing. Wait for the current operation to complete and try again.

**Q: I updated the date but the change didn't save**
A: Make sure to complete all steps in the workflow and click the final save button. Check for any validation errors that might prevent saving.

### Getting help

If you encounter issues updating your dataset export expiration dates:

1. Check the [destinations troubleshooting guide](/help/destinations/troubleshooting-guide.md)
2. Review the [export datasets documentation](/help/destinations/ui/export-datasets.md)
3. Contact Adobe Support if you need additional assistance

## Related documentation

- [Export datasets using the Experience Platform UI](/help/destinations/ui/export-datasets.md)
- [Export datasets API documentation](/help/destinations/api/export-datasets.md)
- [Update the end date of dataset export dataflows](/help/destinations/ui/update-end-date-export-dataflows.md)
- [Destinations workspace overview](/help/destinations/ui/destinations-workspace.md)
- [Monitor dataflows](/help/destinations/ui/monitor-dataflows.md)

