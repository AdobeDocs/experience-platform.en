---
keywords: Experience Platform;home;popular topics;query service;Query service;query;query editor;Query Editor;Query editor;
solution: Experience Platform
title: Query Service UI Guide
description: Adobe Experience Platform Query Service provides a user interface that can be used to write and execute queries, view previously executed queries, and access queries saved by users within your organization.
exl-id: 99ad25e4-0ca4-4bd1-b701-ab463197930b
---
# [!DNL Query Service] UI guide

The Adobe Experience Platform [!DNL Query Service] provides a user interface that can be used to write and execute queries, view previously executed queries, and access queries saved by users within your organization. To access the UI within [Adobe Experience Platform](https://platform.adobe.com), select **[!UICONTROL Queries]** in the left navigation.

## Overview

The [!DNL Query Service] Overview provides a streamlined entry point for working with queries and Data Distiller templates. Here you can access all the features needed to write queries, explore datasets, and analyze audience data, ensuring a smooth workflow for your data analytics and audience insights.

![The Query Service workspace with teh Overview tab highlighted.]()

### Main panels {#main-panels}

The [!UICONTROL Overview] page contains several main sections to help you get started:

1. **[!UICONTROL Create query]**: Quickly navigate to the Query Editor to write and execute new queries.
2. **[!UICONTROL Write queries]**: Learn more about how to write queries using the Query Service UI, guiding you to this detailed documentation.
3. **[!UICONTROL Discover Data Distiller]**: Utilize pre-built templates to create dashboards based on custom data models and deploy personalized insights, with a link to the Data Distiller overview.

### Data Distiller capabilities {#data-distiller-capabilities}

The Data Distiller capabilities section offers links to more advanced features of Adobe Experience Platform:

- **[!UICONTROL Data exploration]**: Explore data within Experience Platform by bringing it in as a query. This capability allows for thorough verification and validation of ingested data using SQL.
- **[!UICONTROL Derived datasets for Experience Platform applications]**: Create derived datasets from existing datasets to support Experience Platform applications.
- **[!UICONTROL AI/ML pipelines]**: Develop datasets from Experience Platform data to power machine learning models and artificial intelligence processes.
- **[!UICONTROL SQL insights]**: Understand how to develop an SQL insights dashboard with Data Distiller, including use cases, essential capabilities, and necessary steps.

### Recommended Data Distiller accelerators {#recommended-accelerators}

These accelerators provide quick links to the Data Distiller dashboards available in the [!UICONTROL Templates] section:

- **[!UICONTROL Advanced audience overlaps]**: Analyze intersections between multiple audience segments to uncover valuable insights and optimize segmentation strategies.
- **[!UICONTROL Audience comparison]**: Compare key metrics between different audiences side by side to understand audience size, growth, and other important KPIs.
- **[!UICONTROL Audience trends]**: Track audience metrics over time to monitor changes in audience size, identity growth, and overall engagement.
- **[!UICONTROL Audience identity overlaps]**: Analyze identity overlaps within selected audiences to refine identity stitching and improve segmentation.

### Data Distiller examples {#data-distiller-examples}

These links lead to practical guides and examples to help you make the most of Data Distiller:

- **[!UICONTROL Decile-based derived datasets]**: Learn how to create decile-based derived datasets for your Real-Time Customer Profile data.
- **[!UICONTROL Customer lifetime value]**: Discover how to track and visualize the customer lifetime value (CLV) metric using Real-Time CDP.
- **[!UICONTROL Propensity score]**: Use Query Service to send data to an ML platform to train a model for predicting customer propensity scores, enabling targeted marketing.
- **[!UICONTROL Consent analysis]**: Build a consent dashboard to analyze customer consent for various marketing use cases in Real-Time CDP.
- **[!UICONTROL Fuzzy match]**: Perform a 'fuzzy' match to identify similar strings across large separate data sources in Adobe Experience Platform.

### Key metrics {#key-metrics}

The key metrics section displays visualizations of important data that helps you monitor Query Service usage. For each chart, you can select the ellipse (`...`) in the top right followed by [!UICONTROL View more] to view either a tabulated form of the results, or download the data as a CSV file to view in a spreadsheet. For more details, refer to the [View more guide](../../dashboards/sql-insights-query-pro-mode/view-more.md).

#### Set a date filter {#set-date-filter}

To apply a global date filter for these visualizations, select the **[!UICONTROL Filter]** icon and adjust the date range in the **[!UICONTROL Filters]** dialog. Applying this filter allows you to tailor the displayed metrics to a specific time frame, enhancing the relevance of your analysis.

![The Filters dialog for the key metrics charts in the Query Service Workspace.]()

#### [!UICONTROL Distiller batch queries]

Displays the number of batch queries processed each day, including CTAS/ITAS Interactive queries and scheduled queries.

<!-- ![The Audience size trends chart.](../../images/sql-insights-query-pro-mode/templates/audience-size-trends-chart.png) -->

#### [!UICONTROL Compute hours consumed]

The [!UICONTROL Compute hours consumed] chart tracks the compute hours consumed by your queries, helping you manage resource allocation effectively.

<!-- ![The Audience size trends chart.](../../images/sql-insights-query-pro-mode/templates/audience-size-trends-chart.png) -->

#### [!UICONTROL Data exploratory queries]

Visualizes the count of data exploration queries processed each day, providing insights into how users are leveraging on-demand data processing.

<!-- ![The Audience size trends chart.](../../images/sql-insights-query-pro-mode/templates/audience-size-trends-chart.png) -->

## [!DNL Query Editor]

The [!DNL Query Editor] enables you to write and execute queries without using an external client. Select **[!UICONTROL Create Query]** to open the [!DNL Query Editor] and create a new query. You can also access the [!DNL Query Editor] by selecting a query from the **[!UICONTROL Log]** or **[!UICONTROL Templates]** tabs. Selecting a previously executed or saved query will open the [!DNL Query Editor] and display the SQL for the selected query.

![The Queries dashboard with Create Query highlighted.](../images/ui/overview/overview.png)

[!DNL Query Editor] provides editing space where you can begin typing a query. As you type, the editor automatically completes SQL reserved words, tables, and field names within tables. When finished writing your query, select the **Play** button to run the query. The **[!UICONTROL Console]** tab below the editor shows what [!DNL Query Service] is currently doing, indicating when a query has been returned. The **[!UICONTROL Result]** tab, next to the Console, displays query results. See the [Query Editor guide](./user-guide.md) for more information on using the [!DNL Query Editor].

![A zoomed in view of the [!DNL Query Editor].](../images/ui/overview/query-editor.png)

## Scheduled queries {#scheduled-queries}

Queries that have already been saved as a template can be scheduled to run on a regular cadence. When scheduling a query, you can choose the frequency of runs, the start and end date, the day of the week the scheduled query runs, as well as the dataset to export the query to. Query schedules are set using Query Editor.

To learn how to schedule a query through the UI, see the [scheduled queries guide](./user-guide.md#scheduled-queries). To learn how to add schedules using the API, please read the [scheduled queries endpoint guide](../api/scheduled-queries.md).

Once a query has been scheduled it appears in the list of scheduled queries on the [!UICONTROL Scheduled Queries] tab. Full details regarding the query, runs, creator, and timings can be found by selecting a scheduled query from the list.

![The Queries workspace with the Scheduled Queries tab highlighted and displaying rows of query schedules.](../images/ui/overview/scheduled-queries.png)

<!--  -->

| Column | Description |
| --- | --- |
| **[!UICONTROL Name]** | The name field is either the template name or the first few characters of your SQL query. Any query created through the UI with the Query Editor is named at inception. If the query was created through the API then the name of the query is a snippet of the initial SQL used to create the query. |
| **[!UICONTROL Template]** | The template name of the query. Select a template name to navigate to the Query Editor. The query template is displayed in the Query Editor for convenience. If there is no template name, the row is marked with a hyphen and there is no ability to redirect to the Query Editor to view the query.   |
| **[!UICONTROL SQL]** | A snippet of the SQL query.  |
| **[!UICONTROL Run frequency]** |  This is the cadence at which your query is set to run. The available values are `Run once` and `Scheduled`. Queries can be filtered according to their run frequency. |
| **[!UICONTROL Created by]** | The name of the user who created the query.  |
| **[!UICONTROL Created]** |  The timestamp when the query was created, in UTC format.  |
| **[!UICONTROL Last run timestamp]** | The most recent timestamp when the query was run. This column highlights whether a query has been executed according to its current schedule. |
| **[!UICONTROL Last run status]** | The status of the most recent query execution. The three status values are: `successful` `failed` or `in progress`.|

See the documentation for more information on how to [monitor queries through the Query Service UI](./monitor-queries.md).

## Templates {#browse}

The **[!UICONTROL Templates]** tab shows queries saved by users in your organization. It is useful to think of these as query projects, as queries saved here may still be under construction. Queries displayed on the **[!UICONTROL Templates]** tab also display as run queries in the **[!UICONTROL Log]** tab if they have been previously executed by [!DNL Query Service].

![A zoomed in view of the Queries dashboard Templates tab displaying several saved queries.](../images/ui/overview/templates.png)

| Column | Description |
| --- | --- |
| **[!UICONTROL Name]** | The name field is either the query name created by the user or the first few characters of your SQL query. Any query created through the UI with the Query Editor is named at inception. If the query was created through the API then the name of the query is a snippet of the initial SQL used to create the query. You can select the query name to open the query in the [!DNL Query Editor]. You can also use the search bar to search for the [!UICONTROL Name] of a query. Searches are case sensitive. |
| **[!UICONTROL SQL]** | The first few characters of the SQL query. Hovering over the code displays the full query. |
| **[!UICONTROL Modified by]** | The last user who modified the query. Any user in your organization with access to [!DNL Query Service] can modify queries. |
| **[!UICONTROL Last modified]** | The date and time of the last modification to the query, in the browser's time zone. |

See the [query templates](./query-templates.md) documentation for more information on templates in the Platform UI.

## Log {#log}

The **[!UICONTROL Log]** tab provides a list of queries that have previously been executed. By default, the log lists the queries in reverse chronology.

![A zoomed in view of the Queries dashboard Log tab displaying a list of queries in reverse chronological order.](../images/ui/overview/log.png)

| Column | Description |
| --- | --- |
| **[!UICONTROL Name]** | The query name, consisting of the first several characters of the SQL query. Select the template name to open the [!UICONTROL Query log details] view for that run. You can use the search bar to search on the name of a query. Searches are case sensitive. |
| **[!UICONTROL Start time]** | The time that the query was executed. |
| **[!UICONTROL Complete time]** | The time that the query run completed. |
| **[!UICONTROL Status]** | The current status of the query. |
| **[!UICONTROL Dataset]** | The input dataset used by the query. Select the dataset to go to the input dataset details screen. |
| **[!UICONTROL Client]** | The client used for the query. |
| **[!UICONTROL Created by]** | The name of the person who created the query. |

>![Note]
>
>Select the pencil icon (![A pencil icon.](/help/images/icons/edit.png)) from any row of the query log to navigate to the [!DNL Query Editor]. The query is pre-populated for convenient editing.

See the [query logs documentation](./query-logs.md) for more information on the log files automatically generated by a query event.

## Credentials

The **[!UICONTROL Credentials]** tab displays both your expiring and non-expiring credentials. For more information on how to use these credentials to connect with external clients, please read the [credentials guide](../clients/overview.md).

![The Queries dashboard with the Credentials tab highlighted.](../images/ui/overview/credentials.png)

## Next steps

Now that you are familiar with [!DNL Query Service] user interface on [!DNL Platform], you can access [!DNL Query Editor] to start creating your own query projects to share with other users in your organization. For more information on authoring and running queries in [!DNL Query Editor], see the [[!DNL Query Editor] user guide](./user-guide.md).
