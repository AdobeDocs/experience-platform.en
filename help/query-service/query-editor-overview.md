# Query Editor user guide

Query Editor is an interactive tool provided by Adobe Experience Platform Query Service, which allows you to write, validate, and run queries for customer experience data within the Experience Platform user interface. Query Editor supports developing queries for analysis and data exploration, and allows you to run interactive queries for development purposes as well as non-interactive queries to populate datasets in Experience Platform.

Within this document you will find information on the following topics:
  - [Query authoring using Query Editor](#query-authoring-using-query-editor)
    - [Accessing Query Editor](#accessing-query-editor)
    - [Writing queries](#writing-queries)
    - [Writing tools in Query Editor](#writing-tools-in-query-editor)
    - [Error detection](#error-detection)
    - [Query details](#query-details)
    - [Saving queries](#saving-queries)
    - [How to find previous queries](#how-to-find-previous-queries)
  - [Executing queries using Query Editor](#executing-queries-using-query-editor)
    - [Console](#console)
    - [Query results](#query-results)

For more information about the concepts and features of Query Service, see the [Query Service overview][query-service-overview]. To learn more about how to navigate the Query Service user interface on Platform, see the [Query Service UI overview][query-service-ui].

## Getting started

Query Editor provides flexible execution of queries by connecting to Query Service, and queries will only run while this connection is active.

### Connecting to Query Service

Query Editor takes a few seconds to initialize and connect to Query Service when it is opened. Console tells you when it is connected, as shown below. If you attempt to run a query before the editor has connected, it delays execution until the connection is complete. 

![Image](../images/queries/query-editor-overview/initializing-connection.png)

### How queries are run from Query Editor

Queries executed from Query Editor run interactively. This means that if you close the browser or navigate away, the query is canceled. This is also true for queries made to generate datasets from query outputs. 

## Query authoring using Query Editor

Using Query Editor, you can write, execute, and save queries for customer experience data. All queries executed in Query Editor, or saved, are available to all users in your organization with access to Query Service.

### Accessing Query Editor

In the Experience Platform UI, click **Queries** in the left navigation menu to open the Query Service workspace. Next, click **Create Query** at the top right of the screen to start writing queries. This link is available from any of the pages in the Query Service workspace. 

![Image](../images/queries/query-editor-overview/create-query.png)
  
### Writing queries

Query Editor is organized to make writing queries as easy as possible. The screenshot below shows how the editor appears in the UI, with the **Play** button and SQL entry field highlighted.

![Image](../images/queries/query-editor-overview/editor.png)

To minimize your development time, it is recommended that you develop your queries with limits on the rows returned. For example, `SELECT fields FROM table WHERE conditions LIMIT number_of_rows`. After you have verified that your query produces the expected output, remove the limits and run the query with `CREATE TABLE tablename AS SELECT` to generate a dataset with the output. 

### Writing tools in Query Editor

* **Automatic syntax highlighting:** Makes reading and organizing SQL easier.

![Image](../images/queries/query-editor-overview/syntax-highlight.png)

* **SQL key word auto-complete:** Start typing your query then use the arrow keys to navigate to the desired term and press **Enter**.

![Image](../images/queries/query-editor-overview/syntax-auto.png)

* **Table and field auto-complete:** Start typing the table name you want to `SELECT` from, then use the arrow keys to navigate to the table you are looking for, and press **Enter**. Once a table is selected, autocomplete will recognize fields in that table. 

![Image](../images/queries/query-editor-overview/tables-auto.png)

### Error detection

Query Editor automatically validates a query as you write it, providing generic SQL validation and specific execution validation. If a red underline appears below the query (as shown in the image below), it represents an error within the query.

![Image](../images/queries/query-editor-overview/syntax-error-highlight.png)

When errors are detected, you can view the specific error messages by hovering over the SQL code.

![Image](../images/queries/query-editor-overview/linting-error.png)

### Query details

While you are viewing a query in Query Editor, the *Query Details* panel provides tools to manage the selected query.

![Image](../images/queries/query-editor-overview/query-details.png)

This panel allows you to generate an output dataset directly from the UI, delete or name the displayed query, and view the SQL code in an easy to copy format on the *SQL Query* tab. This panel also shows useful metadata such as the last time the query was modified and who modified it, if applicable.

To generate a dataset, click **Output Dataset**. The *Output Dataset* dialog appears. Enter a name and description, then click **Run Query**. The new dataset is displayed in the *Datasets* tab on the Query Service user interface on Platform.

### Saving queries

Query Editor provides a save function that allows you to save a query and work on it later. To save a query, click **Save** in the top right corner of Query Editor. Before a query can be saved, a name must be provided for the query using the *Query Details* panel.

### How to find previous queries

All queries executed from Query Editor are captured in the Log table. You can use the search functionality in the *Log* tab to find query executions. Saved queries are listed in the *Browse* tab. 

See the [Query Service UI overview][query-service-ui] for more information. 

> **Note:** Queries that are not executed are not saved by the Log. In order for the query to be available in Query Service, it must be run or saved in Query Editor.

## Executing queries using Query Editor

To run a query in Query Editor, you can enter SQL in the editor or load a previous query from the *Log* or *Browse* tab, and click **Play**. The status of query execution is displayed in the *Console* tab below, and output data is shown in the *Results* tab.

### Console

The console provides information on the status and operation of Query Service. The console displays the connection status to Query Service, query operations being executed, and any error messages that result from those queries.

![Image](../images/queries/query-editor-overview/console.png)

> **Note:** The console only shows errors that resulted from executing a query. It does not show query validation errors before a query is executed.

### Query results

After a query has completed, the results are displayed in the *Results* tab, next to the *Console* tab. This view shows the tabular output of your query, displaying up to 100 rows. This view allows you to verify that your query produces the expected output. To generate a dataset with your query, remove limits on rows returned, and run the query with `CREATE TABLE tablename AS SELECT` to generate a dataset with the output. See the [generating datasets tutorial][query-service-create-datasets] for instructions on how to generate a dataset from query results in Query Editor.

![Image](../images/queries/query-editor-overview/query-results.png)

## Next steps

Now that you know what features are available in Query Editor and how to navigate the application, you can start authoring your own queries directly in Platform. For more information about running SQL queries against datasets in Data Lake, see the guide on [running queries][query-service-running-queries]. For sample SQL queries for working with Adobe Analytics and Adobe Target data, see the [sample queries reference][query-service-sample-queries].

[query-service-overview]: ../overview/overview.md
[query-service-ui]: ./ui-overview.md
[query-service-running-queries]: ./running-queries.md
[query-service-sample-queries]: ../sample-queries-and-troubleshooting/sample-queries.md
[query-service-create-datasets]: ./create-datasets.md