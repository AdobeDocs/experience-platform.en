---
title: Manage Dataset TTLs
description: Learn how to schedule a time to live (TTL) for a dataset in the Adobe Experience Platform UI.
---
# Manage dataset TTLs

The **[!UICONTROL Data Cleansing]** workspace in the Adobe Experience Platform UI allows you to schedule a time to live (TTL) for a dataset.

This document covers how to schedule and manage dataset TTLs in the Platform UI.

## Schedule a TTL

To create a new request, select **[!UICONTROL Create request]** from the main page in the workspace.

The request creation dialog appears. under the **[!UICONTROL Action]** section, select **[!UICONTROL Dataset]** to update the available controls for TTL scheduling.

### Select a date and a dataset

Under the **[!UICONTROL Action]** section, select a date that you want the dataset to be deleted by. You can enter the date manually (in the format `mm/dd/yyyy`) or select the calendar icon to select the date from a dialog.

Next, under **[!UICONTROL Dataset Details]**, select the database icon to choose a dataset to apply the TTL to.

Only datasets belonging to the curren sandbox are shown. Once you have chosen a dataset from the list, select **[!UICONTROL Done]**.

### Submit the request

Once you have selected a dataset and a TTL date, select **[!UICONTROL Submit]**.

You are asked to confirm the date that the dataset will be deleted by. Select **[!UICONTROL Submit]** to continue.

After the request is submitted, a work order is created and appears on the [!UICONTROL Consumer] tab of the [!UICONTROL Data Cleansing] workspace. From here, you can monitor the work order's status as it processes the request.

## Edit or cancel a TTL

To edit or cancel a TTL, select **[!UICONTROL Dataset]** on the main page of the workspace, and select the TTL from the list.

On the details page of the TTL, the right rail shows controls to edit or cancel the scheduled deletion.



## Next steps

This document covered how to schedule dataset TTLs in the Experience Platform UI. For information on how to perform other data hygiene tasks in the UI, refer to the [data hygiene UI overview](./overview.md).

To learn how to schedule dataset TTLs using the Data Hygiene API, refer to the [dataset TTL endpoint guide](../api/ttl.md).
