---
keywords: Experience Platform;home;popular topics;Query editor;query editor;Query service;query service;
solution: Experience Platform
title: Query Editor UI Guide
topic-legacy: query editor
description: The Query Editor is an interactive tool provided by Adobe Experience Platform Query Service, which allows you to write, validate, and run queries for customer experience data within the Experience Platform user interface. Query Editor supports developing queries for analysis and data exploration, and allows you to run interactive queries for development purposes as well as non-interactive queries to populate datasets in Experience Platform.
exl-id: d7732244-0372-467d-84e2-5308f42c5d51
---
# [!DNL Query Editor] UI guide

[!DNL Query Editor] is an interactive tool provided by Adobe Experience Platform [!DNL Query Service], which allows you to write, validate, and run queries for customer experience data within the [!DNL Experience Platform] user interface. [!DNL Query Editor] supports developing queries for analysis and data exploration, and allows you to run interactive queries for development purposes as well as non-interactive queries to populate datasets in [!DNL Experience Platform].

For more information about the concepts and features of [!DNL Query Service], see the [Query Service overview](../home.md). To learn more about how to navigate the Query Service user interface on [!DNL Platform], see the [Query Service UI overview](./overview.md).

## Getting started

[!DNL Query Editor] provides flexible execution of queries by connecting to [!DNL Query Service], and queries will only run while this connection is active.

### Connecting to [!DNL Query Service]

[!DNL Query Editor] takes a few seconds to initialize and connect to [!DNL Query Service] when it is opened. Console tells you when it is connected, as shown below. If you attempt to run a query before the editor has connected, it delays execution until the connection is complete. 

![Image](../images/ui/query-editor/connect.png)

### How queries are run from [!DNL Query Editor]

Queries executed from [!DNL Query Editor] run interactively. This means that if you close the browser or navigate away, the query is canceled. This is also true for queries made to generate datasets from query outputs. 

## Query authoring using [!DNL Query Editor]

Using [!DNL Query Editor], you can write, execute, and save queries for customer experience data. All queries executed in [!DNL Query Editor], or saved, are available to all users in your organization with access to [!DNL Query Service].

### Accessing [!DNL Query Editor]

In the [!DNL Experience Platform] UI, select **[!UICONTROL Queries]** in the left navigation menu to open the [!DNL Query Service] workspace. Next, select **[!UICONTROL Create Query]** at the top right of the screen to start writing queries. This link is available from any of the pages in the [!DNL Query Service] workspace. 

![Image](../images/ui/query-editor/create-query.png)
  
### Writing queries

[!UICONTROL Query Editor] is organized to make writing queries as easy as possible. The screenshot below shows how the editor appears in the UI, with the **Play** button and SQL entry field highlighted.

![Image](../images/ui/query-editor/editor.png)

To minimize your development time, it is recommended that you develop your queries with limits on the rows returned. For example, `SELECT fields FROM table WHERE conditions LIMIT number_of_rows`. After you have verified that your query produces the expected output, remove the limits and run the query with `CREATE TABLE tablename AS SELECT` to generate a dataset with the output. 

### Writing tools in [!DNL Query Editor]

- **Automatic syntax highlighting:** Makes reading and organizing SQL easier.

![Image](../images/ui/query-editor/syntax-highlight.png)

- **SQL key word auto-complete:** Start typing your query then use the arrow keys to navigate to the desired term and press **Enter**.

![Image](../images/ui/query-editor/syntax-auto.png)

- **Table and field auto-complete:** Start typing the table name you want to `SELECT` from, then use the arrow keys to navigate to the table you are looking for, and press **Enter**. Once a table is selected, autocomplete will recognize fields in that table. 

![Image](../images/ui/query-editor/tables-auto.png)

### Error detection

[!DNL Query Editor] automatically validates a query as you write it, providing generic SQL validation and specific execution validation. If a red underline appears below the query (as shown in the image below), it represents an error within the query.

![Image](../images/ui/query-editor/syntax-error-highlight.png)

When errors are detected, you can view the specific error messages by hovering over the SQL code.

![Image](../images/ui/query-editor/linting-error.png)

### Query details

While you are viewing a query in [!DNL Query Editor], the **[!UICONTROL Query Details]** panel provides tools to manage the selected query.

![Image](../images/ui/query-editor/query-details.png)

This panel allows you to generate an output dataset directly from the UI, delete or name the displayed query, and add a schedule to the query. 

This panel also shows useful metadata such as the last time the query was modified and who modified it, if applicable. To generate a dataset, select **[!UICONTROL Output Dataset]**. The **[!UICONTROL Output Dataset]** dialog appears. Enter a name and description, then select **[!UICONTROL Run Query]**. The new dataset is displayed in the **[!UICONTROL Datasets]** tab on the [!DNL Query Service] user interface on [!DNL Platform].

### Scheduled queries {#scheduled-queries}

>[!NOTE]
>
> You can only add a schedule to a query that has already been created, saved, and run. Additionally, you will **not** be able to add a schedule to a parameterized query.

To add a schedule to a query, select **[!UICONTROL Add schedule]**. 

![Image](../images/ui/query-editor/add-schedule.png)

The **[!UICONTROL Schedule details]** page appears. On this page, you can choose the frequency of the scheduled query, the dates the scheduled query will run, as well as what dataset to export the query to.

![Image](../images/ui/query-editor/schedule-details.png)

You can choose the following options for **[!UICONTROL Frequency]**:

- **[!UICONTROL Hourly]**: The scheduled query will run every hour for the date period you selected.
- **[!UICONTROL Daily]**: The scheduled query will run every X days at the time and the date period you selected. Please note that the time selected is in **UTC**, and not your local time zone.
- **[!UICONTROL Weekly]**: The selected query will run on the days of the week, time, and the date period you selected. Please note that the time selected is in **UTC**, and not your local time zone.
- **[!UICONTROL Monthly]**: The selected query will run every month at the day, time, and the date period you selected. Please note that the time selected is in **UTC**, and not your local time zone.
- **[!UICONTROL Yearly]**: The selected query will run every year at the day, month, time, and the date period you selected. Please note that the time selected is in **UTC**, and not your local time zone.

For the dataset, you have the option to use either an existing dataset or create a new dataset.

>[!IMPORTANT]
>
> Since you are using either an existing or creating a new dataset, you do **not** need to include either `INSERT INTO` or `CREATE TABLE AS SELECT` as part of the query, since the datasets are already set. Including either `INSERT INTO` or `CREATE TABLE AS SELECT` as part of your scheduled queries will result in an error.

After confirming all these details, select **[!UICONTROL Save]** to create a schedule.

The query details page re-appears, and now showing the details of the newly created schedule, including the schedule ID, the schedule itself, and the schedule's output dataset. You can use the schedule ID to look up more information about the runs of the scheduled query itself. To learn more, please read the [scheduled query run endpoints guide](../api/runs-scheduled-queries.md).

>[!NOTE]
>
> You can only schedule **one** query template using the UI. If you want to add additional schedules to a query template, you will need to use the API. If a schedule has already been added using the API, you will **not** be add additional schedules using the UI. If multiple schedules are already attached to a query template, only the oldest schedule will be displayed. To learn how to add schedules using the API, please read the [scheduled queries endpoint guide](../api/scheduled-queries.md). 
>
> Additionally, you should refresh the page if you want to ensure you have the latest state for the schedule you are viewing.

#### Delete a schedule

You can delete a schedule by selecting **[!UICONTROL Delete a schedule]**.

![Image](../images/ui/query-editor/delete-schedule.png)

>[!IMPORTANT]
>
> If you want to delete a schedule for a query, you must disable the schedule first.

### Saving queries

[!DNL Query Editor] provides a save function that allows you to save a query and work on it later. To save a query, select **[!UICONTROL Save]** in the top right corner of [!DNL Query Editor]. Before a query can be saved, a name must be provided for the query using the **[!UICONTROL Query Details]** panel.

### How to find previous queries

All queries executed from [!DNL Query Editor] are captured in the Log table. You can use the search functionality in the **[!UICONTROL Log]** tab to find query executions. Saved queries are listed in the **[!UICONTROL Browse]** tab. 

See the [Query Service UI overview](./overview.md) for more information. 

>[!NOTE]
>
>Queries that are not executed are not saved by the Log. In order for the query to be available in [!DNL Query Service], it must be run or saved in [!DNL Query Editor].

## Executing queries using Query Editor

To run a query in [!DNL Query Editor], you can enter SQL in the editor or load a previous query from the **[!UICONTROL Log]** or **[!UICONTROL Browse]** tab, and select **Play**. The status of query execution is displayed in the **[!UICONTROL Console]** tab below, and output data is shown in the **[!UICONTROL Results]** tab.

### Console

The console provides information on the status and operation of [!DNL Query Service]. The console displays the connection status to [!DNL Query Service], query operations being executed, and any error messages that result from those queries.

![Image](../images/ui/query-editor/console.png)

>[!NOTE]
>
>The console only shows errors that resulted from executing a query. It does not show query validation errors before a query is executed.

### Query results

After a query has completed, the results are displayed in the **[!UICONTROL Results]** tab, next to the **[!UICONTROL Console]** tab. This view shows the tabular output of your query, displaying up to 100 rows. This view allows you to verify that your query produces the expected output. To generate a dataset with your query, remove limits on rows returned, and run the query with `CREATE TABLE tablename AS SELECT` to generate a dataset with the output. See the [generating datasets tutorial](./create-datasets.md) for instructions on how to generate a dataset from query results in [!DNL Query Editor].

![Image](../images/ui/query-editor/query-results.png)

## Run queries with [!DNL Query Service] tutorial video

The following video shows how to run queries in the Adobe Experience Platform interface and in a PSQL client. Additionally, using individual properties in an XDM object, using Adobe-defined functions, and using CREATE TABLE AS SELECT (CTAS) are demonstrated.

>[!VIDEO](https://video.tv.adobe.com/v/29796?quality=12&learn=on)

## Next steps

Now that you know what features are available in [!DNL Query Editor] and how to navigate the application, you can start authoring your own queries directly in [!DNL Platform]. For more information about running SQL queries against datasets in [!DNL Data Lake], see the guide on [running queries](../best-practices/writing-queries.md). 
