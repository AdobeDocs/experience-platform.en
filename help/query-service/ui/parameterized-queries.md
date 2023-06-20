---
title: Parameterized Queries
description: Learn how to parameterize queries in the Adobe Experience Platform UI.
---
# Parameterized queries Limited 

>[!IMPORTANT]
>
>The parameterized queries UI feature is currently available in a limited release only and not available to all customers.

Query Service supports the use of parameterized queries in the Query Editor. With parameterized queries you can now use placeholders for parameters and add the parameter values at execution time. This allows you to work with dynamic data where you don't know what the values will be until the statement is executed. Or prepare your queries ahead of time and reuse them for similar purposes. This saves considerable effort as you avoid creating distinct SQL queries for each use case.

## Prerequitistes

Before continuing with this guide, please read the [Query Editor UI guide](./user-guide.md). The Query Editor guide provides detailed information on how to write, validate, and run queries for customer experience data within the Experience Platform user interface.

## Create a parameterized query

First, navigate to the Query Editor. See the section on [accessing the Query Editor](./user-guide.md#accessing-query-editor) for more information.

<!-- below is unnecessary 
In the Experience Platform UI, select **Queries** in the left navigation menu to open the Query Service workspace. Next, select **Create Query** at the top right of the screen to start writing queries. This link is available from any of the pages in the Query Service workspace. -->

Enter a query parameter in the text editor with the `'$'` preface. For example, `'$id'`. Next, add the missing value for the key in the [!UICONTROL Query parameters] section below the editor. The query cannot be executed if you neglect to add a value to any of the required keys. In this case, an error message is displayed in the Query Parameters section to alert you.

![The Query Editor with a parameterized query and the Query parameters section highlighted.](../images/ui/parameterized-queries/parameterized-query.png)




<!-- the system conducts a check before you execute the SQL, execute a query and check to see what parameters are in the query and if you have some that are missing the query parameters tab at the bottom will come into view and you'll see that it's filled in the missing parameters. -->

>![NOTE]
>
>Parameterized queries are not supported inside nested templates beyond their immediate parent level.


>[!TIP]
>
>Query Service supports prepared statements by using a parameterized query. Fort more information on the SQL syntax involved see the [prepared statements syntax guide](../sql/prepared-statements.md).


<!-- Add a note to say doesnt work with inline templates (On both PRs) -->