---
title: Query Schedules
description: Learn how to automate scheduled query runs, edit existing schedule settings, delete or disable a query schedule, and utilize the available scheduling options through the Adobe Experience Platform UI.
exl-id: 984d5ddd-16e8-4a86-80e4-40f51f37a975
TQID: https://experienceleague.adobe.com/TazOHQGBFYjSGH0WjggCDoo8YybIJ3Wg61Iz8igpFNk
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
---
# Query schedules

You can automate query runs by creating query schedules. Scheduled queries run on a custom cadence to manage your data based on frequency, date, and time. You can also choose an output dataset for your results if required. Queries that have been saved as a template can be scheduled from the Query Editor.

>[!IMPORTANT]
>
>You can only add a schedule to a query that has already been created, and saved.

## Account requirements for scheduled queries {#technical-account-user-requirements}

To help scheduled queries run reliably, Adobe recommends that administrators provision a technical account (using OAuth Server-to-Server credentials) for creating scheduled queries. Scheduled queries can also be created with a personal user account, but queries created this way will stop running if that user's access is removed or disabled.

For details on setting up technical accounts and assigning the required permissions, see the [Credentials guide prerequisites](./credentials.md#prerequisites) and [API authentication](../../landing/api-authentication.md).

For additional guidance on creating and configuring a technical account, refer to:

- [Developer Console setup](https://experienceleague.adobe.com/en/docs/platform-learn/getting-started-for-data-architects-and-data-engineers/set-up-developer-console-and-postman): Step-by-step instructions for configuring the Adobe Developer Console and obtaining OAuth credentials.
- [End-to-end technical account setup](https://experienceleague.adobe.com/en/docs/platform-learn/tutorial-comprehensive-technical/setup): A comprehensive walkthrough for creating and configuring a technical account in Adobe Experience Platform.

If you only use the Query Service UI, ensure you have the necessary permissions or coordinate with an administrator who manages technical accounts. Any scheduled queries are added to the list in the [!UICONTROL Scheduled queries] tab, where you can monitor the status, schedule details, and error messages for all scheduled query jobs, as well as subscribe to alerts. For more information on monitoring and managing your queries, see the [monitor scheduled queries document](./monitor-queries.md).

This workflow covers the scheduling process in the Query Service UI. To learn how to add schedules using the API, refer to the [scheduled queries endpoint guide](../api/scheduled-queries.md).

>[!NOTE]
>
>Use a technical account to ensure scheduled queries continue to run even if users leave the organization or their roles change. Choose a technical account whenever possible for uninterrupted query automation.

## Create a query schedule {#create-schedule}

To schedule a query, select a query template from either the [!UICONTROL Templates] tab or the [!UICONTROL Template] column of the [!UICONTROL Scheduled Queries] tab. Selecting the template name navigates you to the Query Editor. 

If you access a saved query from the Query Editor, you can create a schedule for the query or view the query's schedule from the details panel.

>[!TIP]
>
>Select **[!UICONTROL View schedule]** to navigate to the schedules workspace and see any scheduled query runs at a glance.

![The Query Editor wih [!UICONTROL View schedule] and [!UICONTROL Add schedule] highlighted.](../images/ui/query-schedules/view-add-schedule.png)

Select **[!UICONTROL Add schedule]** to navigate to the [schedule details page](#schedule-details).

Alternatively, select the **[!UICONTROL Schedules]** tab below the query's name. 

![The Query Editor with the Schedules tab highlighted.](../images/ui/query-schedules/schedules-tab.png)

The schedules workspace appears. The UI displays a list of any scheduled runs that the template is associated with. Select **[!UICONTROL Add Schedule]** to create a schedule. 

![The Query Editor Schedule workspace with Add schedule highlighted.](../images/ui/query-schedules/add-schedule.png)

### Add schedule details {#schedule-details}

>[!CONTEXTUALHELP]
>id="platform_queryService_querySchedules_noEndDate"
>title="Scheduled query with no end date"
>abstract="This scheduled query has no end date and continues running until you manually pause or delete it. Review long-running schedules periodically to avoid unnecessary compute usage."

The schedule details page appears. Use this page to configure the schedule settings for the scheduled query. Details include the [frequency and weekday of the scheduled query](#scheduled-query-frequency) run, the start and end date, the dataset to export the results to, and [query status alerts](#alerts-for-query-status).

>[!IMPORTANT]
>
>Support for scheduled queries without an end date is currently available to a limited set of customers. If this capability is enabled for your organization, you can create scheduled queries that run continuously without specifying an end date. In some system responses and UI views, schedules without an end date may appear with a far-future date, such as `31.12.9999`.
>
>If this capability is not enabled for your organization, an end date must be specified. There is no upper limit for the end date.

![The Schedule details panel highlighted.](../images/ui/query-schedules/schedule-details.png)

#### Scheduled query frequency {#scheduled-query-frequency}

You can choose the following options for **[!UICONTROL Frequency]**:

- **[!UICONTROL Hourly]**: The scheduled query will run every hour for the date period you selected.
- **[!UICONTROL Daily]**: The scheduled query will run every X days at the time and the date period you selected. Please note that the time selected is in **UTC**, and not your local time zone.
- **[!UICONTROL Weekly]**: The selected query will run on the days of the week, time, and the date period you selected. Please note that the time selected is in **UTC**, and not your local time zone.
- **[!UICONTROL Monthly]**: The selected query will run every month at the day, time, and the date period you selected. Please note that the time selected is in **UTC**, and not your local time zone.
- **[!UICONTROL Yearly]**: The selected query will run every year at the day, month, time, and the date period you selected. Please note that the time selected is in **UTC**, and not your local time zone.

### Provide dataset details {#dataset-details}

Manage the query results by either appending the data to an existing dataset or creating a new dataset and appending the data to it. 

Select **[!UICONTROL Create and append into new dataset]** to create a data set when you execute a query for the first time. Subsequent executions continue to insert data into that data set. Lastly, provide a name and description for the dataset. 

>[!IMPORTANT]
>
> Since you are using either an existing or creating a new dataset, you do **not** need to include either `INSERT INTO` or `CREATE TABLE AS SELECT` as part of the query, since the datasets are already set. Including either `INSERT INTO` or `CREATE TABLE AS SELECT` as part of your scheduled queries will result in an error.

![The Schedule details panel with Dataset details and the [!UICONTROL Create and append into new dataset] options highlighted.](../images/ui/query-schedules/dataset-details-create-and-append.png)

Alternatively, select **[!UICONTROL Append into existing dataset]** followed by the dataset icon (![The dataset icon.](/help/images/icons/database.png)).

![The Schedule details panel with Dataset details and Append into existing dataset highlighted.](../images/ui/query-schedules/dataset-details-existing.png)

The **[!UICONTROL Select output dataset]** dialog appears. 

Next, either browse the existing datasets or use the search field to filter the options. Select the row of the dataset that you wish to use. The dataset details are displayed in the panel on the right. Select **[!UICONTROL Done]** to confirm your choice.

![The Select output dataset dialog with the search field, a dataset row, and Done highlighted.](../images/ui/query-schedules/select-output-dataset-dialog.png)

### Quarantine queries if they continuously fail {#quarantine}

When creating a schedule, you can enroll your query in the quarantine feature to safeguard system resources and prevent potential disruptions. The quarantine feature automatically identifies and isolates queries that repeatedly fail by placing them in a [!UICONTROL Quarantined] state. By quarantining queries after ten consecutive failures, you can intervene, review, and rectify issues before allowing further executions. This helps to maintain your operational efficiency and data integrity.

![The Queries Schedules workspace with [!UICONTROL Query Quarantine] highlighted and Yes selected.](../images/ui/query-schedules/quarantine-enroll.png)

Once a query is enrolled for the quarantine feature, you can subscribe to alerts for this query status change. If a scheduled query is not enrolled in quarantine, it does not appear as an option on [the Alerts dialog](./monitor-queries.md#alert-subscription).

You can also enroll a scheduled query into the quarantine feature from the inline actions of the [!UICONTROL Scheduled Queries] tab. See the [monitor queries documentation](./monitor-queries.md#quarantined-queries) for more details.

### Set alerts for a scheduled query status {#alerts-for-query-status}

You can also subscribe to query alerts as part of your scheduled query settings. You can configure your settings to receive notifications for a variety of situations. Alerts can be set for a quarantined state, delays in query processing, or a change in status of your query. The available query-state alert options include start, success, and failure. Alerts can be received either as pop-up notifications or emails. Select the checkbox to subscribe to alerts for that status of scheduled query. 

![The Schedule details panel with the Alert options highlighted.](../images/ui/query-editor/alerts.png)

The table below explains the supported query alert types: 

| Alert type | Description |
|---|---|
| `start` | This alert notifies you when a scheduled query run is initiated or starts to process. |
| `success` | This alert informs you when a scheduled query run completes successfully, indicating that the query executed without any errors. |
| `failed` | This alert triggers when a scheduled query run encounters an error or fails to execute successfully. It helps you identify and address issues promptly. |
| `quarantine` | This alert is activated when a scheduled query run is put into a quarantined state. Once a query is [enrolled in the quarantine feature](#quarantine), any scheduled query that fails ten consecutive runs is automatically put into a [!UICONTROL Quarantined] state. A quarantined query then requires your intervention before any further executions can take place. Note: Queries must be enrolled for the quarantine feature for you to subscribe to quarantine alerts. |
| `delay` | This alert notifies you if there is a [delay in the outcome of a scheduled query execution](./monitor-queries.md#query-run-delay) beyond a specified threshold. You can set a custom time that triggers the alert when the query runs for that duration without either completing or failing. The default behavior sets an alert for 150 mins after the query begins processing. |

>[!NOTE]
>
>If you choose to set a [!UICONTROL Query Run Delay] alert, you must set your desired delay time in minutes in the Experience Platform UI. Enter the duration in minutes. The maximum delay is 24 hours (1440 minutes).

For an overview of alerts in Adobe Experience Platform, including the structure of how alert rules are defined, see the [alerts overview](../../observability/alerts/overview.md). For guidance on managing alerts and alert rules within the Adobe Experience Platform UI, see the [Alerts UI guide](../../observability/alerts/ui.md).

### Set parameters for a scheduled parameterized query {#set-parameters}

If you are creating a scheduled query for a [parameterized query](./parameterized-queries.md), you must now set the parameter values for these query runs.

![The Schedule details section of the schedule creation workflow with the Query parameters section highlighted.](../images/ui/query-schedules/scheduled-query-parameter.png)

After confirming your schedule details, select **[!UICONTROL Save]** to create a schedule. You are returned to your template's schedules tab. This workspace displays details of the newly created schedule, including the schedule ID, the schedule itself, and the schedule's output dataset. 

## View scheduled query runs {#scheduled-query-runs}

From your template's [!UICONTROL Schedules] tab, select the schedule ID to navigate to the list of query runs for your newly scheduled query.

![The schedules workspace with the newly created schedule highlighted.](../images/ui/query-schedules/schedules-workspace.png)

Alternatively, to view a list of a query template's scheduled runs, navigate to the **[!UICONTROL Scheduled queries]** tab and select a template name from the list available.

![The Scheduled queries tab with a named template highlighted.](../images/ui/query-schedules/view-scheduled-runs.png)

The list of query runs for that scheduled query appears. 

### Compute hours at job level {#compute-hours}

Track compute hours consumed at the query execution level for your CTAS/ITAS batch queries. This feature offers insights into compute usage, helping you optimize resource allocation and improve query performance.

>[!AVAILABILITY]
>
>The Compute Hours functionality is exclusive to users who have purchased the [Data Distiller SKU](../data-distiller/overview.md). Contact your Adobe representative for more information.

![The details section of the Scheduled Queries workspace with a list of query runs highlighted for a scheduled query.](../images/ui/query-schedules/list-of-scheduled-runs.png)

The following table provides descriptions of each column available in the details section that lists scheduled query runs.

| Column Title        | Description  |
|---------------------|----------------------------------|
| [!UICONTROL Query Run ID]        | Displays a unique identifier for each query run, allowing you to track and reference individual executions of your scheduled queries.            |
| [!UICONTROL Query Run Start]     | Indicates the start date and time of the query run, to help you monitor when each execution began. |
| [!UICONTROL Query Run Complete]  | Shows the completion date and time of the query run, to provide insight into execution duration and status.  |
| [!UICONTROL Status]              | Displays the current status of the query run, such as `Completed,` `Running,` or `Failed,` to assess the outcome quickly. |
| [!UICONTROL Datasets]            | Lists datasets used in the query run, to show which data sources were involved in the execution. |
| [!UICONTROL Compute Hours]       | Shows the compute time used for each query run, measured in hours. This helps to track resource usage and optimize query performance. |

{style="table-layout:auto"}

>[!NOTE]
>
>Compute Hours data is available from 08/15/2024. Data before this date appears as 'Not Available'.

See the [monitor scheduled queries guide](./monitor-queries.md) for complete information on how to monitor the status of all query jobs through the UI. 

Select a **[!UICONTROL Query run ID]** from the list to navigate to the query run overview. For a full breakdown of the information available on the [query run overview](./monitor-queries.md#query-run-overview), see the monitor scheduled queries documentation.

To monitor scheduled queries using the Query Service API, see the [scheduled query run endpoints guide](../api/runs-scheduled-queries.md).

## Edit a schedule {#edit-schedule}

You can access the schedule editor from the [!UICONTROL Scheduled Queries] workspace, the schedule details page, or the Query Editor. You can modify supported configuration settings for an existing scheduled query without recreating the schedule. Editing a schedule only updates the schedule configuration. It does not modify the underlying SQL query definition.

>[!IMPORTANT]
>
>The **[!UICONTROL Edit schedule]** option is only displayed for eligible schedules. Schedules that have ended, been deleted, or are still registering cannot be edited.

### Access the edit workflow {#access-edit-workflow}

Use one of the following paths from the **[!UICONTROL Scheduled Queries]** tab to access the edit workflow for an eligible scheduled query. 

Either, select the ellipsis (**...**) for the schedule you want to modify, then **[!UICONTROL Edit schedule]** from the inline actions menu. This opens the schedule editor directly. See [Manage scheduled queries with inline actions](./monitor-queries.md#inline-actions) for more information.

![The Scheduled Queries tab with the inline action ellipses and Edit schedule highlighted from the popup menu.](../images/ui/query-schedules/inline-actions-edit.png)

Or select a schedule name from the table to open the schedule details page. On the schedule details page, select **[!UICONTROL Edit schedule]** from the top-right corner of the page to open the schedule editor.

![The schedule details page with the Edit schedule button highlighted.](../images/ui/query-schedules/edit-schedule.png)

You can also edit an existing qualifying schedule from the Query Editor.

1. Open a query template in the Query Editor and select **[!UICONTROL View schedule]**.
2. Select the schedule ID from the list to open the schedule details page.
3. Select **[!UICONTROL Edit schedule]**.

### Edit schedule settings {#edit-schedule-settings}

Use the schedule editor to review the current schedule configuration and update supported settings.

>[!NOTE]
>
>The **[!UICONTROL Start date]** and **[!UICONTROL Start time]** fields are fixed at creation and cannot be modified. To use a different start date or start time, [create a new schedule](#create-schedule).

![The schedule editor displaying editable schedule settings, including frequency, recurrence days, end date, end time, Query Quarantine enrollment, and alert subscriptions. The Start date and Start time fields are disabled and cannot be modified.](../images/ui/query-schedules/schedule-editor.png)

The following settings can be modified:

| Setting | Description |
|---|---|
| **[!UICONTROL Frequency]** | How often the query runs. Options include **[!UICONTROL Hourly]**, **[!UICONTROL Daily]**, **[!UICONTROL Weekly]**, **[!UICONTROL Monthly]**, and **[!UICONTROL Yearly]**. |
| **[!UICONTROL Days]** | The days on which the query runs. Choose one or multiple weekdays to run on a weekly cadence or a specific day of the month if you run monthly or yearly frequencies. |
| **[!UICONTROL End date]** | The date after which the scheduled query stops running. |
| **[!UICONTROL End time]** | The time at which the schedule ends on the specified end date. |
| **[!UICONTROL No end date]** | Configures the schedule to run continuously without an end date, if this option is enabled for your organization. |
| **[!UICONTROL Query Quarantine]** | Enrolls or removes the query from the quarantine feature. See [Quarantine queries if they continuously fail](#quarantine) for details. |
| **[!UICONTROL Alerts]** | Adds, removes, or modifies alert subscriptions for this scheduled query. See [Set alerts for a scheduled query status](#alerts-for-query-status) for available alert types. |

### Save schedule changes {#save-schedule-changes}

After updating the schedule settings, select **[!UICONTROL Save]** to apply the changes. A confirmation message appears when the schedule updates successfully.

### Verify updated schedule information {#verify-schedule-updates}

After saving, verify that the updated schedule configuration appears in the following locations:

- The **[!UICONTROL Scheduled Queries]** tab.
- The **[!UICONTROL Properties]** panel on the [schedule details page](./monitor-queries.md#query-runs).

## Enable, disable, or delete a schedule {#delete-schedule}

You can enable, disable, or delete a schedule from the schedules workspace of a particular query or from the [!UICONTROL Scheduled Queries] workspace that lists all the scheduled queries.

To access the [!UICONTROL Schedules] tab of your chosen query, you must select the name of a query template from either the [!UICONTROL Templates] tab or the [!UICONTROL Scheduled Queries] tab. This navigates to the Query Editor for that query. Form the Query Editor, select **[!UICONTROL Schedules]** to access the schedules workspace. 

Select a schedule from the rows of available schedules to populate the details panel. Use the toggle to disable (or enable) the scheduled query.

### Delete disabled queries

>[!IMPORTANT]
>
>You must disable the schedule before you can delete a schedule for a query.

![The list of a template's schedules with the details panel highlighted.](../images/ui/query-schedules/schedule-details-panel.png)

A confirmation dialog appears. Select **[!UICONTROL Disable]** to confirm the action.

![The Disable schedule confirmation dialog.](../images/ui/query-schedules/disable-schedule-confirmation-dialog.png)

Select **[!UICONTROL Delete a schedule]** to delete the disabled schedule. 

![The schedules workspace with Delete schedule highlighted.](../images/ui/query-schedules/delete-schedule.png)

Alternatively, the [!UICONTROL Scheduled Queries] tab offers a collection of inline actions for each scheduled query. The available inline actions include [!UICONTROL Disable schedule] or [!UICONTROL Enable schedule], [!UICONTROL Delete schedule], and [!UICONTROL Subscribe] to alerts for the scheduled query. For complete instructions on how to delete or disable a scheduled query through the scheduled Queries tab, please see the [monitor scheduled queried guide](./monitor-queries.md#inline-actions).

