---
title: Automated Dataset Expirations
description: Learn how to schedule a dataset expiration in the Adobe Experience Platform UI.
exl-id: 97db55e3-b5d6-40fd-94f0-2463fe041671
---
# Automated dataset expirations {#dataset-expiration}

>[!CONTEXTUALHELP]
>id="platform_privacyConsole_scheduleDatasetExpiration_description"
>title="Delete unwanted or expired customer records and datasets"
>abstract="<h2>Description</h2><p>To manage the lifecycle of your Experience Platform data unrelated to regulatory compliance, you can delete consumer records and schedule expiration dates for datasets. To create or manage data subject requests, see the 'Honor data subject privacy requests' use case block.</p>"

The [[!UICONTROL Data Lifecycle] workspace](./overview.md) in the Adobe Experience Platform UI allows you to schedule expirations for datasets. When a dataset reaches its expiration date, the data lake, Identity Service, and Real-Time Customer Profile begin separate processes to remove the dataset's contents from their respective services. Once the data is deleted from all three services, the expiration is marked as complete.

>[!WARNING]
>
>If a dataset is set to expire, you must manually change any dataflows that may be ingesting data into that dataset so that your downstream workflows are not negatively affected.

This document covers how to schedule and automate dataset expirations in the Platform UI.

>[!NOTE]
>
>Dataset Expiration does not currently delete data from the Adobe Experience Platform Edge Network. However, there is no possibility that data stays inside the Edge Network after the dataset is set to expire. This is because the 15-day service license agreement for Dataset Expiration overlaps with the 14-day period where data exists inside the Edge Network before being discarded.

## Schedule a dataset expiration {#schedule-dataset-expiration}

>[!CONTEXTUALHELP]
>id="platform_privacyConsole_scheduleDatasetExpiration_instructions"
>title="Instructions"
>abstract="<ul><li>Select <a href="https://experienceleague.adobe.com/docs/experience-platform/hygiene/ui/overview.html">Data Lifecycle</a> in the left navigation, then select <b>Create request</b>.</li><li>If you want to delete records:</li>&nbsp;&nbsp;&nbsp;<li>Select <b>Record</b>.</li>&nbsp;&nbsp;&nbsp;<li>Select a specific dataset to delete records from or choose the option to delete them from all datasets.</li>&nbsp;&nbsp;&nbsp;<li>Provide the identities of the consumers whose records are to be deleted. Select <b>Add identity</b> to provide the identities one at a time or select <b>Choose files</b> to upload a JSON file of identities instead.</li>&nbsp;&nbsp;&nbsp;<li>If needed, select <b>Template</b> to view the expected format of the JSON file.</li><li>See the documentation for instructions if you want to <a href="https://experienceleague.adobe.com/docs/experience-platform/hygiene/ui/dataset-expiration.html#schedule-dataset-expiration">schedule expiration dates for datasets</a>.</li></ul>"

To create a request, select **[!UICONTROL Create request]** from the main page in the workspace.

>[!IMPORTANT]
>
>Real-Time CDP, Adobe Journey Optimizer, and Customer Journey Analytics users have 20 pending scheduled dataset expiration work orders. Healthcare Shield and Privacy and Security Shield users have 50 pending scheduled dataset expiration work orders. This means that you can have 20 or 50 datasets scheduled to be deleted at any one time.<br>For example, if you have 20 scheduled dataset expirations and one dataset is due to be deleted tomorrow, you cannot set any more expirations until after that that dataset has been deleted.

![The [!UICONTROL Data Lifecycle] workspace with [!UICONTROL Create request] highlighted.](../images/ui/ttl/create-request-button.png)

The request creation workflow appears. Under the [!UICONTROL Requested Action] section, select **[!UICONTROL Delete Dataset]** to update the controls for dataset expiration scheduling.

![The request creation workflow with the [!UICONTROL Delete dataset] option highlighted.](../images/ui/ttl/dataset-selected.png)

### Select a date and a dataset {#select-date-and-dataset}

Under the **[!UICONTROL Requested Action]** section, select a date that you want the dataset to be deleted by. You can enter the date manually (in the format `mm/dd/yyyy`) or select the calendar icon (![A calendar icon.](../images/ui/ttl/calendar-icon.png)) to select the date from a dialog.

![A calendar dialog with an expiration date selected and highlighted for the dataset.](../images/ui/ttl/select-date.png)

Next, under **[!UICONTROL Dataset Details]**, select the database icon (![The database icon.](../images/ui/ttl/database-icon.png)) to open a dataset selection dialog. Choose a dataset from the list to apply the expiration to, then select **[!UICONTROL Done]**.

![The [!UICONTROL Select dataset] dialog with a dataset selected and [!UICONTROL Done] highlighted.](../images/ui/ttl/select-dataset.png)

>[!NOTE]
>
>Only datasets belonging to the current sandbox are shown.

### Submit the request {#submit-request}

The [!UICONTROL Dataset Details] section populates to include the primary identity and schema for the selected dataset. Under **[!UICONTROL Request settings]**, enter a name and optional description for the request, followed by **[!UICONTROL Submit]**.

![A completed dataset expiration request with the [!UICONTROL Request settings] and [!UICONTROL Submit] button highlighted.](../images/ui/ttl/submit.png)

A [!UICONTROL Confirm request] dialog appears. You are asked to confirm the dataset name and the date that the dataset will be deleted by. Select **[!UICONTROL Submit]** to continue.

After the request is submitted, a work order is created and appears on the main tab of the [!UICONTROL Data Lifecycle] workspace. From here, you can monitor the work order's status as it processes the request.

>[!NOTE]
>
>Refer to the overview section on [timelines and transparency](../home.md#dataset-expiration-transparency) for details on how dataset expirations are processed once they are executed.

## Edit or cancel a dataset expiration {#edit-or-cancel}

To edit or cancel a dataset expiration, select **[!UICONTROL Dataset]** on the main page of the workspace, and select the dataset expiration from the list.

On the details page of the dataset expiration, the right rail shows controls to edit or cancel the scheduled deletion.

## Next steps

This document covered how to schedule dataset expirations in the Experience Platform UI. For information on how to perform other data minimization tasks in the UI, refer to the [data lifecycle UI overview](./overview.md).

To learn how to schedule dataset expirations using the data hygiene API, refer to the [dataset expiration endpoint guide](../api/dataset-expiration.md).
