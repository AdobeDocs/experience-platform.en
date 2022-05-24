---
title: Manage Dataset TTLs
description: Learn how to schedule a time to live (TTL) for a dataset in the Adobe Experience Platform UI.
---
# Manage dataset TTLs

>[!IMPORTANT]
>
>Data hygiene capabilities in Adobe Experience Platform are currently only available for organizations that have purchased Adobe Shield for Healthcare.

The [[!UICONTROL Data Hygiene] workspace](./overview.md) in the Adobe Experience Platform UI allows you to schedule a time to live (TTL) for a dataset.

This document covers how to schedule and manage dataset TTLs in the Platform UI.

## Schedule a TTL

To create a new request, select **[!UICONTROL Create request]** from the main page in the workspace.

![Image showing the [!UICONTROL Create request] button being selected](../images/ui/ttl/create-request-button.png)

The request creation dialog appears. Under the **[!UICONTROL Action]** section, select **[!UICONTROL Dataset]** to update the available controls for TTL scheduling.

![Image showing the [!UICONTROL Dataset] option selected](../images/ui/ttl/create-request-button.png)

### Select a date and a dataset

Under the **[!UICONTROL Action]** section, select a date that you want the dataset to be deleted by. You can enter the date manually (in the format `mm/dd/yyyy`) or select the calendar icon (![Image of the calendar icon](../images/ui/ttl/calendar-icon.png)) to select the date from a dialog.

![Image showing an expiration date being set for the TTL](../images/ui/ttl/select-date.png)

Next, under **[!UICONTROL Dataset Details]**, select the database icon (![Image of the database icon](../images/ui/ttl/database-icon.png)) to open a dataset selection dialog. Choose a dataset from the list to apply the TTL to, then select **[!UICONTROL Done]**.

![Image showing a dataset being selected](../images/ui/ttl/select-dataset.png)

>[!NOTE]
>
>Only datasets belonging to the current sandbox are shown.

### Submit the request

Once you have selected a dataset and a TTL date, select **[!UICONTROL Submit]**.

![Image showing the [!UICONTROL Submit] button being selected](../images/ui/ttl/select-dataset.png)

You are asked to confirm the date that the dataset will be deleted by. Select **[!UICONTROL Submit]** to continue.

After the request is submitted, a work order is created and appears on the [!UICONTROL Consumer] tab of the [!UICONTROL Data Hygiene] workspace. From here, you can monitor the work order's status as it processes the request.

## Edit or cancel a TTL

To edit or cancel a TTL, select **[!UICONTROL Dataset]** on the main page of the workspace, and select the TTL from the list.

On the details page of the TTL, the right rail shows controls to edit or cancel the scheduled deletion.

## Next steps

This document covered how to schedule dataset TTLs in the Experience Platform UI. For information on how to perform other data hygiene tasks in the UI, refer to the [data hygiene UI overview](./overview.md).

To learn how to schedule dataset TTLs using the Data Hygiene API, refer to the [dataset TTL endpoint guide](../api/ttl.md).
