---
title: Monitor Queries
description: Learn how to monitor queries through the Query Service UI.
---
# Monitor queries

Adobe Experience Platform provides improved visibility for the status of all query jobs through the UI. You can now find important information about the status of your query runs, including error messages and codes should they fail, from [!UICONTROL Scheduled Queries] tab. You can also subscribe to alerts through the UI for any of these queries based on their status.

## [!UICONTROL Scheduled Queries] 

<!-- THe query schedule browse -->

The [!UICONTROL Scheduled Queries] tab provides an overview of the executed and scheduled queries. The workspace contains all your CTAS and ITAS queries that are either scheduled to run or have been executed at least once. Run details can be found for all scheduled queries as well as error codes and messages for failed queries.

To navigate to the [!UICONTROL Scheduled Queries] tab, select **[!UICONTROL Queries]** from the left navigation bar followed by **[!UICONTROL Scheduled Queries]**

![The Scheduled Queries tab in the Queries workspace.](./images/monitor-queries/scheduled-queries.png)

The table below describes each available column.

>[!NOTE]
>
>The alert subscriptions icon is contained in each row in an untitled column. See the [alert subscriptions](#alert-subscription) section for more information.

| Column | Description  |
|---|---|
| Name | The name field is either the template name or the first few characters of your SQL query. Any query created through the UI with the Query Editor is named at inception. If the query was created through the API then the name of the query is a snippet of the initial SQL used to create the query. |
| Template | The template name of the query. Select a template name to navigate to the Query Editor. The query template is displayed in the Query Editor for convenience. If there is no template name, the row is marked with a hyphen and there is no ability to redirect to the Query Editor to view the query. |
| SQL | A snippet of the SQL query.  |
| Run frequency | This is the cadence at which your query is set to run. The available values are `Run once` and `Scheduled`. Queries can be filtered according to their run frequency. |
| Created by | The name of the user who created the query. |
| Created | The timestamp when the query was created, in UTC format.  |
| Last run timestamp | The most recent timestamp when the query was run. This column highlights whether a query has been executed according to its current schedule.  |
| Last run status | The status of the most recent query execution. The three status values are: `successful` `failed` or `in progress`. |

>[!TIP]
>
>If you navigate away to the Query Editor, you can select **[!UICONTROL Queries]** to return to the [!UICONTROL Templates] tab from the Query Editor 

### Customize table settings for scheduled queries 

You can adjust the columns on the [!UICONTROL Scheduled Queries] tab to your needs. Select the settings icon (![A settings icon.](./images/monitor-queries/settings-icon.png)) to open the [!UICONTROL Customize table] settings dialog and edit available columns.

![The Customize table settings icon.](./images/monitor-queries/customze-table-settings-icon.png)

Toggle the relevant checkboxes to remove or add a table column, and select **[!UICONTROL Apply]** to confirm your choices.

>[!NOTE]
>
>Any query that was created through the UI becomes a named template as part of the creation process. The template name is seen in the template column. If the query was created through the API then the template column is blank. 

![The Customize table settings dialog.](./images/monitor-queries/customize-table-dialog.png)

### Subscribe to alerts {#alert-subscription}

You can subscribe to alerts from the [!UICONTROL Scheduled Queries] tab. Select the alert notification icon (![An alert icon.](./images/monitor-queries/alerts-icon.png)) next to a query name to open the [!UICONTROL Alerts] dialog. The [!UICONTROL Alerts] dialog subscribes to both UI notifications and email alerts. Alerts are based on the status of the query. There are three options available: `start`, `success`, and `failure`. Check the appropriate box or boxes and select **[!UICONTROL Save]** to subscribe.

![The alert subscriptions dialog.](./images/monitor-queries/alert-subscription-dialog.png)

<!-- Link to alert subscriptions doc when available -->

### Filter queries

You can filter queries based on run frequency. From the [!UICONTROL Scheduled Queries] tab, select the filter icon (![A filter icon](./images/monitor-queries/filter-icon.png)) to open the filter sidebar. 

![The scheduled queries tab with the filter icon highlighted.](./images/monitor-queries/filter-queries.png)

Select either the **[!UICONTROL Scheduled]** or **[!UICONTROL Run once]** run frequency filter checkboxes to filter the list of queries.

>[!NOTE]
>
>Any query that has been executed but not scheduled qualifies as [!UICONTROL Run once].

![The scheduled queries tab with the filter sidebar highlighted.](./images/monitor-queries/filter-sidebar.png)

Once you have enabled your filter criteria, select **[!UICONTROL Hide Filters]** to close the filter panel.

## Query runs Schedule details

<!-- The schedule details screen. -->

Select a query name to navigate to the schedule details page. This view provides a list of all the runs executed as part of that scheduled query. The information provided includes the start and end time, status, and dataset used. 

![The schedule details page.](./images/monitor-queries/schedule-details.png) 

This information is provided in a five-column table. Each row denotes a query execution. 

| Column name  | Description  |
|---|---|
| Query run ID  | The query run ID for the daily execution.  |
| Query run start | The timestamp when the query was executed. This is in UTC format. |
| Query run complete | The timestamp when the query was completed. This is in UTC format. |
| Status | The status of the most recent query execution. The three status values are: `successful` `failed` or `in progress`. |
| Dataset | The dataset involved in the execution. |

Details of the query being scheduled can be seen in the properties sidebar. This panel includes the initial query ID, client type, template name, query SQL, and cadence of the schedule.

![The schedule details page with the properties panel highlighted.](./images/monitor-queries/properties-panel.png)

### Run details

Select a query run ID to navigate to the run details page and view query information. 

![The schedule details screen with a run ID highlighted.](./images/monitor-queries/navigate-to-run-details.png)

This view provides information on individual runs for this scheduled query and a more detailed breakdown of the run status. This page also includes the client information and details of any errors that caused the query to fail. 

![The run details screen with the overview section highlighted.](./images/monitor-queries/query-run-details.png)

The query status section provides the error code and error message should the query have failed. 

![The run details screen with the errors section highlighted.](./images/monitor-queries/failed-query.png)

You can copy the query SQL to your clipboard from this view. Select the copy icon in the top right of the SQL snippet to copy the query. A popup message confirms that the code has been copied.

![The run details screen with the SQL copy icon highlighted.](./images/monitor-queries/copy-sql.png)

Select **[!UICONTROL Query]** to return to the schedule details screen, or **[!UICONTROL Scheduled Queries]** to return to the [!UICONTROL Scheduled Queries] tab.

![The run details screen with Query highlighted.](./images/monitor-queries/return-navigation.png)

