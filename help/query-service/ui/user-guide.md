---
keywords: Experience Platform;home;popular topics;Query editor;query editor;Query service;query service;
solution: Experience Platform
title: Query Editor UI Guide
description: The Query Editor is an interactive tool provided by Adobe Experience Platform Query Service, which allows you to write, validate, and run queries for customer experience data within the Experience Platform user interface. Query Editor supports developing queries for analysis and data exploration, and allows you to run interactive queries for development purposes as well as non-interactive queries to populate datasets in Experience Platform.
exl-id: d7732244-0372-467d-84e2-5308f42c5d51
---
# [!DNL Query Editor] UI guide

[!DNL Query Editor] is an interactive tool provided by Adobe Experience Platform [!DNL Query Service], which allows you to write, validate, and run queries for customer experience data within the [!DNL Experience Platform] user interface. [!DNL Query Editor] supports developing queries for analysis and data exploration, and allows you to run interactive queries for development purposes as well as non-interactive queries to populate datasets in [!DNL Experience Platform].

For more information about the concepts and features of [!DNL Query Service], see the [Query Service overview](../home.md). To learn more about how to navigate the Query Service user interface on [!DNL Platform], see the [Query Service UI overview](./overview.md).

>[!NOTE]
>
>Certain Query Service functionality is not provided by the legacy version of the Query Editor. The screenshots used in this document are taken using the enhanced version of the Query Editor unless otherwise stated. See the section on the [enhanced Query Editor](#enhanced-editor-toggle) for more details.

## Getting started {#getting-started}

[!DNL Query Editor] provides flexible execution of queries by connecting to [!DNL Query Service], and queries only run while this connection is active.

## Accessing [!DNL Query Editor] {#accessing-query-editor}

In the [!DNL Experience Platform] UI, select **[!UICONTROL Queries]** in the left navigation menu to open the [!DNL Query Service] workspace. Next, to start writing queries, select **[!UICONTROL Create Query]** at the top right of the screen. This link is available from any of the pages in the [!DNL Query Service] workspace. 

![The Queries workspace overview tab with Create query highlighted.](../images/ui/query-editor/create-query.png)

### Connecting to [!DNL Query Service] {#connecting-to-query-service}

The Query Editor takes a few seconds to initialize and connect to Query Service when it is opened. The console tells you when it is connected, as shown below. If you attempt to run a query before the editor has connected, it delays execution until the connection is complete. 

![The console output of the Query Editor upon initial connection.](../images/ui/query-editor/connect.png)

### How queries are run from [!DNL Query Editor] {#run-a-query}

Queries executed from [!DNL Query Editor] run interactively which means that if you close the browser or navigate away, the query is cancelled. The same is true for queries made to generate datasets from query outputs.

The Enhanced edition of the Query Editor allows you to write more than one query in the Query Editor and execute all queries sequentially. See the section on [executing multiple sequential queries](#execute-multiple-sequential-queries) for more information.

## Query authoring using [!DNL Query Editor] {#query-authoring}

Using [!DNL Query Editor], you can write, execute, and save queries for customer experience data. All queries executed, or saved in [!DNL Query Editor] are available to all users in your organization with access to [!DNL Query Service].

>[!IMPORTANT]
>
>The legacy editor will be retired on 30-April-2024, and will no longer be available for use.

## Enhanced Query Editor toggle {#enhanced-editor-toggle}

>[!CONTEXTUALHELP]
>id="platform_queryService_queryEditor_enhancedEditorToggle"
>title="Enhanced editor toggle"
>abstract="Toggle between the legacy and enhanced version of the Query Editor. The legacy version is enabled by default, although the enhanced version provides better accessibility and multi-theming support. To learn more about these changes, see the documentation."

A UI toggle allows you to switch between the legacy and enhanced version of the Query Editor. The legacy version is enabled by default, although the enhanced version provides better accessibility and multi-theming support. Enable the enhanced version to access to the Query Editor settings.

![The Query Editor with the enhanced Query Editor toggle highlighted.](../images/ui/query-editor/enhanced-query-editor-toggle.png)

Activating the toggle switches the editor to light theme and improves the legibility of your syntax. A settings icon also appears above the Query Editor input field that incorporates the auto-complete toggle. From the settings icon, you can enable dark theme or disable/enable auto-complete.

>[!TIP]
>
>With the enhanced Query Editor, you can [!UICONTROL Disable syntax auto complete] while authoring a query without losing your progress. Typically, if you disable the auto-complete feature while editing, all changes to the query are lost.

To enable dark or light themes, select the settings icon (![A settings icon.](../images/ui/query-editor/settings-icon.png)) followed by the option in the dropdown menu that appears.

![The Query Editor with the settings icon and Enable dark theme dropdown menu option highlighted.](../images/ui/query-editor/query-editor-settings.png)

### Execute multiple sequential queries {#execute-multiple-sequential-queries}

The Enhanced edition of the Query Editor allows you to write more than one query in the Query Editor and execute all queries in a sequential manner.

The execution of multiple queries in a sequence each generate a log entry. However, only the results of the first query display in the Query Editor console. Check the query log if you need to troubleshoot or confirm the queries that were executed. See the [query logs documentation](./query-logs.md) for more information. 

>[!NOTE]
> 
>If a CTAS query is executed after the first query in the Query Editor, a table is still created however there is no output on the Query Editor console.

### Execute selected query {#execute-selected-query}

If you have written multiple queries but need to execute only one query, you can highlight your chosen query and select the 
[!UICONTROL Run selected query] icon. This icon is disabled by default until you select query syntax within the editor.

![The Query Editor with the [!UICONTROL Run selected query] icon highlighted.](../images/ui/query-editor/run-selected-query.png)

### Result count {#result-count}

The Query Editor has a maximum 50,000 row output. You can choose the number of rows are displayed at one time in the Query Editor console. To change the number of rows displayed in the console, select the **[!UICONTROL Result count]** dropdown and select from the 50, 100, 150, 300, and 500 options.

![The Query Editor with the Result count dropdown highlighted.](../images/ui/query-editor/result-count.png)

## Writing queries {#writing-queries}

[!UICONTROL Query Editor] is organized to make writing queries as easy as possible. The screenshot below shows how the editor appears in the UI, with the SQL entry field and **Play** highlighted.

![The Query Editor with the SQL input field and Play highlighted.](../images/ui/query-editor/editor.png)

To minimize your development time, you are recommended to develop your queries with limits on the number of rows returned. For example, `SELECT fields FROM table WHERE conditions LIMIT number_of_rows`. After you have verified that your query produces the expected output, remove the limits and run the query with `CREATE TABLE tablename AS SELECT` to generate a dataset with the output.

## Writing tools in [!DNL Query Editor] {#writing-tools}

- **Automatic syntax highlighting:** Makes reading and organizing SQL easier.

![An SQL statement in the Query Editor demonstrating syntax colour highlighting.](../images/ui/query-editor/syntax-highlight.png)

- **SQL keyword auto-complete:** Start typing your query then use the arrow keys to navigate to the desired term and press **Enter**.

![A few characters of SQL with the auto complete dropdown menu providing options from the Query Editor.](../images/ui/query-editor/syntax-auto.png)

- **Table and field auto-complete:** Start typing the table name you want to `SELECT` from, then use the arrow keys to navigate to the table you are looking for, and press **Enter**. Once a table is selected, autocomplete recognizes fields in that table. 

![The Query Editor input displaying drop down table name suggestions.](../images/ui/query-editor/tables-auto.png)

### Format text {#format-text}

The [!UICONTROL Format text] feature makes your query more readable by adding standardized syntax styling. Select **[!UICONTROL Format text]** to standardize all the text within the Query Editor.

>[!NOTE]
>
>The [!UICONTROL Format text] feature does not work with anonymous blocks. To learn how to chain one or more SQL statements sequentially, see the [anonymous block documentation](../key-concepts/anonymous-block.md). 

![The Query Editor with [!UICONTROL Format text] and the SQL statements highlighted.](../images/ui/query-editor/format-text.png)

<!-- ### Undo text {#undo-text}

If you format your SQL in the Query Editor, you can undo the formatting applied by the [!UICONTROL Format text] feature. To return your SQL back to its original form, select **[!UICONTROL Undo text]**.

![The Query Editor with [!UICONTROL Undo text] and the SQL statements highlighted.](../images/ui/query-editor/undo-text.png) -->

### Copy SQL {#copy-sql}

Select the copy icon to copy SQL form the Query Editor to your clipboard. This copy feature is available for both query templates and newly created queries in the Query Editor.

![The Queries workspace with an example query template with the copy icon highlighted.](../images/ui/query-editor/copy-sql.png)

### Auto-complete UI configurational toggle {#auto-complete}

The [!DNL Query Editor] automatically suggests potential SQL keywords along with table or column details for the query as you write it. The auto-complete feature is enabled by default and can be disabled or enabled at any point by selecting the [!UICONTROL Syntax auto-complete] toggle to the top right of the Query Editor.

The auto-complete configuration setting is per user and remembered for the consecutive logins for that user.

>[!NOTE]
>
>The syntax autocomplete toggle is only available for the legacy version of the Query Editor.

![Query Editor with the syntax auto-complete toggle highlighted.](../images/ui/query-editor/auto-complete-toggle.png)

Disabling this feature stops several metadata commands from being processed and providing recommendations that typically benefit the speed of the author when editing queries.

When you use the toggle to enable the auto-complete feature, recommended suggestions for table and column names as well as SQL keywords become available after a short pause. A success message in the console beneath the Query Editor indicates that the feature is active. 

If you disable the auto-complete feature, a page refresh is required for the feature to take effect. A confirmation dialog appears with three options when you disable the [!UICONTROL Syntax auto-complete] toggle :

- [!UICONTROL Cancel]
- [!UICONTROL Save changes and refresh]
- [!UICONTROL Refresh without saving changes]

>[!IMPORTANT]
>
>If you are writing or editing a query when disabling this feature, you must save any changes to your query before refreshing the page or all of your progress will be lost.  

![The confirmation dialog to disable the auto-complete feature.](../images/ui/query-editor/confirmation-dialog.png)

To disable the auto-complete feature, select the appropriate confirmation option.

### Error detection {#error-detection}

[!DNL Query Editor] automatically validates a query as you write it, providing generic SQL validation and specific execution validation. If a red underline appears below the query (as shown in the image below), it represents an error within the query.

<!-- ... Image below needs updating couldn't replicate the effect -->

![The Query Editor input displaying SQL underlined in red to indicate an error.](../images/ui/query-editor/syntax-error-highlight.png)

When errors are detected, you can view the specific error messages by hovering over the SQL code.

<!-- ... Image below needs updating couldn't replicate the effect -->

![A dialog with an error message.](../images/ui/query-editor/linting-error.png)

### Query details {#query-details}

To view a query in the Query Editor, select any saved template from the [!UICONTROL Templates] tab. The query details panel provides more information and tools to manage the selected query. It also shows useful metadata such as the last time that the query was modified and who modified it, if applicable.

>[!NOTE]
>
>The [!UICONTROL View schedule], [!UICONTROL Add schedule] and [!UICONTROL Delete query] options are only available after the query has been saved as a template. The [!UICONTROL Add schedule] option takes you directly to the schedule builder from the Query Editor. The [!UICONTROL View schedule] option takes you directly to the schedule inventory for that query. See the query schedules documentation to learn how to [create query schedules in the UI](./query-schedules.md#create-schedule).

![The Query Editor with the query details panel highlighted.](../images/ui/query-editor/query-details.png)

From the details panel you can generate an output dataset directly from the UI, delete or name the displayed query, view the query run schedule, and add the query to a schedule.  

To generate an output dataset, select **[!UICONTROL Run as CTAS]**. The **[!UICONTROL Enter output dataset details]** dialog appears. Enter a name and description, then select **[!UICONTROL Run as CTAS]**. The new dataset is displayed in the **[!UICONTROL Datasets]** Browse tab. See [the view datasets documentation](../../catalog/datasets/user-guide.md#view-datasets) to learn more about available datasets for your organization.

>[!NOTE]
>
>The [!UICONTROL Run as CTAS] option is only available if the query has **not** been scheduled.

![The [!UICONTROL Enter output dataset details] dialog.](../images/ui/query-editor/output-dataset-details.png)

After you execute the **[!UICONTROL Run as CTAS]** action, a confirmation message pops up to notify you of the successful action. This popup message contains a link that provides a convenient way to navigate to the query logs workspace. See the [query logs documentation](./query-logs.md) for more information on query logs.

### Saving queries {#saving-queries}

The [!DNL Query Editor] provides a save function that allows you to save a query and work on it later. To save a query, select **[!UICONTROL Save]** in the top-right corner of [!DNL Query Editor]. Before a query can be saved, a name must be provided for the query using the **[!UICONTROL Query Details]** panel.

>[!NOTE]
>
>Queries named and saved in using the Query Editor are available as templates within the Query dashboard [!UICONTROL Templates] tab. See the [templates documentation](./query-templates.md) for more information.

When you save a query in the Query Editor, a confirmation message pops up to notify you of the successful action. This popup message contains a link that provides a convenient way to navigate to the queries scheduling workspace. See the [schedule queries documentation](./query-schedules.md) to learn how to run queries on a custom cadence.

### Scheduled queries {#scheduled-queries}

Queries that have been saved as a template can be scheduled from the Query Editor. Scheduling queries allows you to automate query runs on a custom cadence. You can schedule queries based on frequency, date, and time, and also choose an output dataset for your results if necessary. Query schedules can also be disabled or deleted through the UI.

Schedules are set in the Query Editor. When using the Query Editor, you can only add a schedule to a query that has already been created, saved, and run. The same limitation does not apply to the [!DNL Query Service] API:

See the query schedules documentation to learn how to [create query schedules in the UI](./query-schedules.md). Alternatively, to learn how to add schedules using the API, read the [scheduled queries endpoint guide](../api/scheduled-queries.md).

Any scheduled queries are added to the list in the [!UICONTROL Scheduled queries] tab. From that workspace you can monitor the status of all scheduled query jobs through the UI. On the [!UICONTROL Scheduled queries] tab, you can find important information about your query runs and subscribe to alerts. The available information includes the status, schedule details, and error messages/codes if a run failed. See the [Monitor scheduled queries document](./monitor-queries.md) for more information.


### How to find previous queries {#previous-queries}

All queries executed from [!DNL Query Editor] are captured in the Log table. You can use the search functionality in the **[!UICONTROL Log]** tab to find query executions. Saved queries are listed in the **[!UICONTROL Templates]** tab. 

If a query was scheduled, then the [!UICONTROL Scheduled Queries] tab provides improved visibility through the UI for those query jobs. See the [query monitoring documentation](./monitor-queries.md) for more information. 

>[!NOTE]
>
>Queries that are not executed are not saved by the Log. In order for the query to be available in [!DNL Query Service], it must be run or saved in [!DNL Query Editor].

## Executing queries using Query Editor {#executing-queries}

To run a query in [!DNL Query Editor], you can enter SQL in the editor or load a previous query from the **[!UICONTROL Log]** or **[!UICONTROL Templates]** tab, and select **Play**. The status of query execution is displayed in the **[!UICONTROL Console]** tab below, and output data is shown in the **[!UICONTROL Results]** tab.

### Console {#console}

The console provides information on the status and operation of [!DNL Query Service]. The console displays the connection status to [!DNL Query Service], query operations being executed, and any error messages that result from those queries.

![The Console tab of the Query Editor console.](../images/ui/query-editor/console.png)

>[!NOTE]
>
>The console only shows errors that resulted from the execution of a query. It does not show the query validation errors that occur before a query is executed.

### Query results {#query-results}

After a query has been completed, the results are displayed in the **[!UICONTROL Results]** tab, next to the **[!UICONTROL Console]** tab. This view shows the tabular output of your query, displaying between 50 and 500 rows of results depending on your chosen [result count](#result-count). This view allows you to verify that your query produces the expected output. To generate a dataset with your query, remove limits on rows returned, and run the query with `CREATE TABLE tablename AS SELECT` to generate a dataset with the output. See the [generating datasets tutorial](./create-datasets.md) for instructions on how to generate a dataset from query results in [!DNL Query Editor].

![The Results tab of the Query Editor console displaying the results of a query run.](../images/ui/query-editor/query-results.png)

## Use cases {#use-cases}

Query Service provides solutions to a variety of use cases across industries and business scenarios. These practical examples demonstrate the flexibility and impact of the service in addressing diverse needs. To [uncover how Query Service can bring value to your specific business needs](../use-cases/overview.md), explore the comprehensive collection of use case documents. Learn how to use Query Service to provide insights and solutions for enhanced operational efficiency and business success.

## Run queries with [!DNL Query Service] tutorial video {#query-tutorial-video}

The following video shows how to run queries in the Adobe Experience Platform interface and in a PSQL client. The video also demonstrates the use of individual properties in an XDM object, Adobe-defined functions, and how to use CREATE TABLE AS SELECT (CTAS) queries.

>[!VIDEO](https://video.tv.adobe.com/v/29796?quality=12&learn=on)

## Next steps

Now that you know what features are available in [!DNL Query Editor] and how to navigate the application, you can start authoring your own queries directly in [!DNL Platform]. For more information about running SQL queries against datasets in [!DNL Data Lake], see the guide on [running queries](../best-practices/writing-queries.md). 
