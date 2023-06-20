---
title: Parameterized Queries
description: Learn how to parameterize queries in the Adobe Experience Platform UI.
---
# Parameterized queries

>[!IMPORTANT]
>
>The parameterized queries UI feature is currently available in a **limited release only** and not available to all customers.

Query Service supports the use of parameterized queries in the Query Editor. With parameterized queries you can now use placeholders for parameters and add the parameter values at execution time. This allows you to work with dynamic data where you don't know what the values will be until the statement is executed. Or prepare your queries ahead of time and reuse them for similar purposes. This saves considerable effort as you avoid creating distinct SQL queries for each use case.

## Prerequisites

Before continuing with this guide, please read the [Query Editor UI guide](./user-guide.md). The Query Editor guide provides detailed information on how to write, validate, and run queries for customer experience data within the Experience Platform user interface.

>![NOTE]
>
>Parameterized queries are not supported inside inline/nested templates beyond their immediate parent level. If an inline template is called within a parameterized query, and that inline template uses a parameter, the query will not work.

## Parameterized query syntax {#syntax}

Parameterized queries use the format `'$YOUR_PARAMETER_NAME'`. Parameterized queries can be concatenated using dot notation. An example SQL statement that uses parameterized queries can be seen below.

```sql
INSERT INTO
   $Database_Name.$Schema_Name.adwh_lkup_process_delta_log
   (process_name, merge_policy_id, process_status, process_date, create_ts, change_ts)
SELECT
   '$Table_Process_Name' process_name,
   hash('$Merge_PolicyID') merge_policy_id,
   '$process_status' process_status,
   to_date('$date_key') process_date,
   CURRENT_TIMESTAMP create_ts,
   CURRENT_TIMESTAMP change_ts;
```

## Create a parameterized query {#create}

<!-- below is probably unnecessary 
In the Experience Platform UI, select **Queries** in the left navigation menu to open the Query Service workspace. Next, select **Create Query** at the top right of the screen to start writing queries. This link is available from any of the pages in the Query Service workspace. -->

To create your parameterized query in the UI, navigate to the Query Editor. See the section on [accessing the Query Editor](./user-guide.md#accessing-query-editor) for instruction on how todo this.

Use the `'$'` preface to enter a query parameter into your query in the text editor.  Next, add the missing value for the key in the [!UICONTROL Query parameters] section below the editor. The query cannot be executed if you neglect to add a value to any of the required keys. An alert icon (![An alert icon.](../images/ui/parameterized-queries/alert-icon.png)) appears in the Query Parameters section next to any empty [!UICONTROL Value] input fields.

![The Query Editor with a parameterized query and the Query parameters section highlighted.](../images/ui/parameterized-queries/parameterized-query.png)

>[!TIP]
>
>You have to change tabs from [!UICONTROL Query parameters] to [!UICONTROL Console] to see the console output of the query. 

If, after running the query once, you remove a parameter and try to execute the query again, an error message is displayed in the [!UICONTROL Query parameters] section to alert you.

![The Query Editor with an empty value Filed and the query parameters error highlighted.](../images/ui/parameterized-queries/query-parameter-error.png)

>[!NOTE]
>
>You cannot save parameters within the templates. The values used are not persisted although parameters are saved when you schedule a parameterized query. See the documentation on [setting parameters for a scheduled parameterized query](./query-schedules.m.md#set-parameters) for more information. You can also check the query log to find the parameter values used in a query run, should you need to.

## Schedule a parameterized query {#schedule}

To schedule a parameterized query, after you follow the typical process to create a scheduled query as described in the guide to [create a query schedule](./query-schedules.md#create-schedule), you have to enter the parameter values to be used in the query run. See the section on [setting parameters for a scheduled parameterized query](./query-schedules.m.md#set-parameters) for specific instructions.

>[!TIP]
>
>Query Service supports prepared statements by using a parameterized query. Fort more information on the SQL syntax involved see the [prepared statements syntax guide](../sql/prepared-statements.md).

## Next steps

By reading this document, you have learned how to parameterize queries in the Adobe Experience Platform UI and use them in scheduled query runs. You should also understand how to check the logs for parameterized query runs.



<!-- Add a note to say doesnt work with inline templates (On both PRs) -->