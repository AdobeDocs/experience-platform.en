---
title: Update the end date of dataset export dataflows (Action required by May 1, 2025)
type: Tutorial
hide: yes
hidefromtoc: yes
description: Learn how to update the end date for dataset export dataflows with a current end date of May 1, 2025.
---

# Update the end date of dataset export dataflows (Action required by May 1, 2025)

>[!IMPORTANT]
>
>The action items on this page apply if your organization set up dataset export dataflows before the September 2024 release of Experience Platform.

## What is happening?

The [September 2024 release of Experience Platform](/help/release-notes/latest/latest.md#destinations) introduced the option to set an `endTime` date for export dataset dataflows. Adobe has also introduced a default end date of May 1, 2025, for all dataset export dataflows created *prior to the September 2024 release*. These dataflows currently display a message similar to the one shown below.

![UI notification about the need to update the end date of the export dataset dataflow.](/help/destinations/assets/ui/export-datasets/update-end-date.png)

**Action item**: For any of these dataflows, you must manually update the end date before it expires; otherwise, your exports will stop. Use the Experience Platform UI to identify which dataflows are set to stop on May 1, 2025.

## Why am I being notified?

Your organization has been identified as having active dataset export dataflows with an end date of May 1, 2025.

## Use the UI to update the end date

Use the Experience Platform UI to identify dataflows with an end date of May 1, 2025, and update them to a future date.

### Find the dataflows that need updating

Navigate to **Destinations > Browse** and look for the data type **Datasets** in the **Data Type** column, as shown below. Select the desired dataflows to inspect them.

![Dataset export dataflows highlighted in the Browse tab.](/help/destinations/assets/ui/export-datasets/view-dataset-dataflows.png)

### Update the end date of the dataflows

To update the end date of dataflows:

1. In the dataflows that you have selected for inspection in the previous step, select **Export datasets**.
  ![Export datasets control highlighted in the Browse tab.](/help/destinations/assets/ui/export-datasets/export-datasets-control-highlighted.png)
2. In the workflow, proceed to the **Scheduling** step and select **Edit schedule**. 
  ![Edit schedule control highlighted in the Scheduling step.](/help/destinations/assets/ui/export-datasets/edit-schedule-control-highlighted.png)
3. Choose a desired end date after May 1, 2025 and select **Save**.
  ![Select end date control highlighted in the Scheduling step.](/help/destinations/assets/ui/export-datasets/select-end-date.png)
4. Proceed to the end of the workflow and save your updates.

For extensive information about the scheduling step, read the [export datasets UI tutorial](/help/destinations/api/export-datasets.md#scheduling). 

## Use the API to update the end date

### Find the dataflows that need updating

### Update the end date of the dataflows