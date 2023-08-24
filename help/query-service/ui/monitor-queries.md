---
title: Monitor Scheduled Queries
description: Learn how to monitor queries through the Query Service UI.
exl-id: 4640afdd-b012-4768-8586-32f1b8232879
---
# Monitor scheduled queries

Adobe Experience Platform provides improved visibility for the status of all query jobs through the UI. From the [!UICONTROL Scheduled Queries] tab, you can now find important information about your query runs that includes the status, schedule details, and error messages/codes should they fail. You can also subscribe to alerts for queries based on their status through the UI for any of these queries through [!UICONTROL Scheduled Queries] tab.

## [!UICONTROL Scheduled Queries] 

The [!UICONTROL Scheduled Queries] tab provides an overview of all your scheduled CTAS and ITAS queries. Run details can be found for all scheduled queries as well as error codes and messages for any failed queries.

To navigate to the [!UICONTROL Scheduled Queries] tab, select **[!UICONTROL Queries]** from the left navigation bar followed by **[!UICONTROL Scheduled Queries]**

![The Scheduled Queries tab in the Queries workspace with Scheduled Queries and Queries highlighted.](../images/ui/monitor-queries/scheduled-queries.png)

The table below describes each available column.

>[!NOTE]
>
>The alert subscriptions icon is contained in each row in an untitled column. See the [alert subscriptions](#alert-subscription) section for more information.

| Column | Description  |
|---|---|
| **[!UICONTROL Name]** | The name field is either the template name or the first few characters of your SQL query. Any query created through the UI with the Query Editor is named at inception. If the query was created through the API, then its name becomes a snippet of the initial SQL used to create the query. To see a list of all runs associated with the query, select an item from the [!UICONTROL Name] column. For more information, see the [query runs schedule details](#query-runs) section. |
| **[!UICONTROL Template]** | The template name of the query. Select a template name to navigate to the Query Editor. The query template is displayed in the Query Editor for convenience. If there is no template name, the row is marked with a hyphen and there is no ability to redirect to the Query Editor to view the query. |
| **[!UICONTROL SQL]** | A snippet of the SQL query.  |
| **[!UICONTROL Run frequency]** | The cadence at which your query is set to run. The available values are `Run once` and `Scheduled`. Queries can be filtered according to their run frequency. |
| **[!UICONTROL Created by]** | The name of the user who created the query. |
| **[!UICONTROL Created]** | The timestamp when the query was created, in UTC format.  |
| **[!UICONTROL Last run timestamp]** | The most recent timestamp when the query was run. This column highlights whether a query has been executed according to its current schedule.  |
| **[!UICONTROL Last run status]** | The status of the most recent query execution. The status values are: `Success`, `Failed`, `In progress`, and `No runs`. |
| **[!UICONTROL Schedule Status]** | The current status of the scheduled query. There are five potential values, [!UICONTROL Registering], [!UICONTROL Active], [!UICONTROL Inactive], [!UICONTROL Deleted], and a hyphen. <ul><li>The hyphen indicates the scheduled query is a one-time, non-recurring query.</li><li>The [!UICONTROL Registering] status indicates that the system is still processing the creation of the new schedule for the query. Note, you cannot disable or delete a scheduled query while it is registering.</li><li>The [!UICONTROL Active] status indicates that the scheduled query has **not yet passed** its completion date and time.</li><li>The [!UICONTROL Inactive] status indicates that the scheduled query has **passed** its completion date and time.</li><li>The [!UICONTROL Deleted] status indicates that the query schedule has been deleted.</li></ul> |

>[!TIP]
>
>If you navigate to the Query Editor, you can select **[!UICONTROL Queries]** to return to the [!UICONTROL Templates] tab.

## Customize table settings for scheduled queries {#customize-table}

You can adjust the columns on the [!UICONTROL Scheduled Queries] tab to your needs. To open the [!UICONTROL Customize table] settings dialog and edit available columns, select the settings icon (![A settings icon.](../images/ui/monitor-queries/settings-icon.png)) from the top right of the screen.

>[!NOTE]
>
>The [!UICONTROL Created] column that refers to the date the schedule was created, is hidden by default.

![The Scheduled Queries tab with the Customize table settings icon highlighted.](../images/ui/monitor-queries/customze-table-settings-icon.png)

Toggle the relevant checkboxes to remove or add a table column. Next, select **[!UICONTROL Apply]** to confirm your choices.

>[!NOTE]
>
>Any query that was created through the UI becomes a named template as part of the creation process. The template name is seen in the template column. If the query was created through the API, then the template column is blank. 

![The Customize table settings dialog.](../images/ui/monitor-queries/customize-table-dialog.png)

## Manage scheduled queries with inline actions {#inline-actions}

The [!UICONTROL Scheduled Queries] view offers various inline actions to manage all of your scheduled queries from one location. Inline actions are indicated in each row with ellipsis. Select the ellipsis of a scheduled query that you want to manage to see the available options in a pop-up menu. The available options include [[!UICONTROL Disable schedule]](#disable) or [!UICONTROL Enable schedule], [[!UICONTROL Delete schedule]](#delete), and [[!UICONTROL Subscribe]](#alert-subscription) to query alerts.

![The Scheduled Queries tab with the inline action ellipses and popup menu highlighted.](../images/ui/monitor-queries/disable-inline.png)

### Disable or enable a scheduled query {#disable}

To disable a scheduled query, select the ellipsis of a scheduled query you want to manage, then select **[!UICONTROL Disable schedule]** from the options in the pop-up menu. A dialog appears to confirm your action. Select **[!UICONTROL Disable]** to confirm your setting.

Once a scheduled query is disabled, you can enable the schedule through the same process. Select the ellipsis, then select **[!UICONTROL Enable schedule]** from the available options.

### Delete a scheduled query {#delete}

To delete a scheduled query, select the ellipsis of a scheduled query you want to manage, then select **[!UICONTROL Delete schedule]** from the options in the pop-up menu. A dialog appears to confirm your action. Select **[!UICONTROL Delete]** to confirm your setting.

Once a scheduled query is deleted, it is **not** removed from the list of scheduled queries. The inline actions provided by the ellipses are removed and replaced by the grayed out add alert icon. You cannot subscribe to alerts for the deleted schedule. The row remains in the UI to provide information on runs conducted as part of the scheduled query. 

![The Scheduled Queries tab with a deleted scheduled query and greyed out alert icon highlighted.](../images/ui/monitor-queries/post-delete.png)

If you want to schedule runs for that query template, select the template name from the appropriate row to navigate to the Query Editor, then follow the [instructions to add a schedule to a query](./query-schedules.md#create-schedule) as described in the documentation. 

### Subscribe to alerts {#alert-subscription}

To subscribe to alerts for scheduled query runs, select the ellipsis of a scheduled query you want to manage, then select **[!UICONTROL Subscribe]** from the options in the pop-up menu.

The [!UICONTROL Alerts] dialog opens. The [!UICONTROL Alerts] dialog subscribes you to both UI notifications and email alerts. Alerts are based on the status of the query. There are three options available: `start`, `success`, and `failure`. Check the appropriate box or boxes and select **[!UICONTROL Save]** to subscribe. You can subscribe to alerts as long as they don't have a [!UICONTROL Last Run Timestamp] value.

![The alert subscriptions dialog.](../images/ui/monitor-queries/alert-subscription-dialog.png)

See the [alert subscriptions API documentation](../api/alert-subscriptions.md) for more information.

### View the query details {#query-details}

Select the information icon (![An information icon.](../images/ui/monitor-queries/information-icon.png)) to see the details panel for the query. The details panel contains all the relevant information on the query beyond the facts included in the scheduled queries table. The additional information includes the query ID, the last modified date, the SQL of the query, the schedule ID, and the current set schedule.

![The Scheduled Queries tab with the information icon and the details panel highlighted.](../images/ui/monitor-queries/details-panel.png)

## Filter queries {#filter}

You can filter queries based on run frequency. From the [!UICONTROL Scheduled Queries] tab, select the filter icon (![A filter icon](../images/ui/monitor-queries/filter-icon.png)) to open the filter sidebar. 

![The scheduled queries tab with the filter icon highlighted.](../images/ui/monitor-queries/filter-queries.png)

To filter the list of queries based on their run frequency, select either the **[!UICONTROL Scheduled]** or **[!UICONTROL Run once]** filter checkboxes.

>[!NOTE]
>
>Any query that has been executed but not scheduled qualifies as [!UICONTROL Run once].

![The scheduled queries tab with the filter sidebar highlighted.](../images/ui/monitor-queries/filter-sidebar.png)

Once you have enabled your filter criteria, select **[!UICONTROL Hide Filters]** to close the filter panel.

## Query runs schedule details {#query-runs}

To open the schedule details page, select a query name from the [!UICONTROL Scheduled Queries] tab. This view provides a list of all the runs executed as part of that scheduled query. The information provided includes the start and end time, status, and dataset used. 

![The schedule details page.](../images/ui/monitor-queries/schedule-details.png) 

This information is provided in a five-column table. Each row denotes a query execution. 

| Column name  | Description  |
|---|---|
| **[!UICONTROL Query run ID]**  | The query run ID for the daily execution. Select the **[!UICONTROL Query run ID]** to navigate to the [!UICONTROL Query run overview]. |
| **[!UICONTROL Query run start]** | The timestamp when the query was executed. The timestamp is in UTC format. |
| **[!UICONTROL Query run complete]** | The timestamp when the query was completed. The timestamp is in UTC format. |
| **[!UICONTROL Status]** | The status of the most recent query execution. The three status values are: `successful` `failed` or `in progress`. |
| **[!UICONTROL Dataset]** | The dataset involved in the execution. |

Details of the query being scheduled can be seen in the [!UICONTROL Properties] panel. This panel includes the initial query ID, client type, template name, query SQL, and cadence of the schedule.

![The schedule details page with the properties panel highlighted.](../images/ui/monitor-queries/properties-panel.png)

Select a query run ID to navigate to the run details page and view query information. 

![The schedule details screen with a run ID highlighted.](../images/ui/monitor-queries/navigate-to-run-details.png)

## Query run overview {#query-run-overview}

The [!UICONTROL Query run overview] provides information on individual runs for this scheduled query and a more detailed breakdown of the run status. This page also includes the client information and details of any errors that may have caused the query to fail. 

![The run details screen with the overview section highlighted.](../images/ui/monitor-queries/query-run-details.png)

The query status section provides the error code and error message should the query have failed. 

![The run details screen with the errors section highlighted.](../images/ui/monitor-queries/failed-query.png)

You can copy the query SQL to your clipboard from this view. To copy the query, select the copy icon in the top right of the SQL snippet. A popup message confirms that the code has been copied.

![The run details screen with the SQL copy icon highlighted.](../images/ui/monitor-queries/copy-sql.png)

### Run details for queries with anonymous block {#anonymous-block-queries}

Queries that use anonymous blocks to comprise their SQL statements are separated into their individual subqueries. The separation into subqueries allows you to inspect the run details for each query block individually.

>[!NOTE]
>
>The run details of an anonymous block that uses the DROP command will **not** be reported as a separate subquery. Separate run details are available for CTAS queries, ITAS queries, and COPY statements used as anonymous block subqueries. Run details for the DROP command are currently not supported.  

Anonymous blocks are denoted through the use of a `$$` prefix before the query. To find out more about anonymous blocks in query service, see the [anonymous block document](../essential-concepts/anonymous-block.md).

Anonymous block subqueries have tabs to the left of the run status. Select a tab to display the run details.

![The Query run overview displaying an anonymous block query. The multiple query tabs are highlighted.](../images/ui/monitor-queries/anonymous-block-overview.png)

In the event an anonymous block query fails, you can find the error code for that particular block through this UI.

![The Query run overview displaying an anonymous block query with the error code for a single block highlighted.](../images/ui/monitor-queries/anonymous-block-failed-query.png)

Select **[!UICONTROL Query]** to return to the schedule details screen, or **[!UICONTROL Scheduled Queries]** to return to the [!UICONTROL Scheduled Queries] tab.

![The run details screen with Query highlighted.](../images/ui/monitor-queries/return-navigation.png)

<!-- Details required to complete this section below:
### Run details for queries with parameterized queries {#parameterized-queries}

Queries that use parameterized values to make up the SQL statement are ... 
-->
