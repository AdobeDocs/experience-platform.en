---
title: Query Logs
description: Query logs are automatically generated each time a query is executed and are available through the UI to help with troubleshooting. This document outlines how to use and navigate the Query Service Logs section of the UI.
exl-id: 929e9fba-a9ba-4bf9-a363-ca8657a84f75
---
# Query logs

>[!IMPORTANT]
>
>Certain query logs features are currently in a limited release and not available to all customers. Your UI may appear slightly differently without an edit icon. Also, the process of selecting a query name may to navigate to the Query Editor instead of the [!UICONTROL Query log details] view.

Adobe Experience Platform maintains a log of all query events that occur through both the API and the UI. This information is available in the Query Service UI from the [!UICONTROL Logs] tab.  

The log files are generated automatically by any query event and contain information including the SQL used, the status of the query, how long it took, and last run time. You can use query log data as a powerful tool for troubleshooting inefficient or problem queries. More comprehensive log information is kept as part of the audit log feature and can be found in the [audit log documentation](../../landing/governance-privacy-security/audit-logs/overview.md).

## Check query logs

To check the query logs, select [!UICONTROL Queries] to navigate to the Query Service workspace and select [!UICONTROL Log] from the available options.

![The Platform UI with Queries and Log highlighted.](../images/ui/query-log/logs.png)

## Customize and search {#customize-and-search}

Query Service logs are presented in a customizable table format. To customize the table columns, select the settings icon (![A settings icon.](../images/ui/query-log/settings-icon.png)) to the right of the screen. A [!UICONTROL Customize Table] dialog appears where each column can be deselected.

You can also search for logs relating to specific query templates by typing the template name into the search field.

![The Queries Log workspace with the search bar and manage column table dropdown highlighted.](../images/ui/query-log/customize-logs.png)

A [description for each of the log table columns](./overview.md#log) can be found in the Log section of the Query Service overview. 

## Discover log data

Each row represents log data for a query run associated with a query template. Select any row from the table to populate the right sidebar with log data for that run.

![The Queries Log workspace with a row selected and the log data in the right sidebar highlighted.](../images/ui/query-log/log-details.png)

In the log details panel, you can select a new output dataset and see or copy the complete SQL query that was used in the run.

![The Queries Log workspace with a row selected and the output dataset and SQL query highlighted.](../images/ui/query-log/edit-output-dataset.png)

>[!IMPORTANT]
>
>Certain query logs features are currently in a limited release and not available to all customers.

You can also select a query template name from the [!UICONTROL Name] column to navigate directly to the [!UICONTROL Query log details] view.

>[!NOTE]
>
>If the query was created using the API and no template name was provided during initialization, the first few dozen characters of the SQL query are displayed instead.

![The Query log details view.](../images/ui/query-log/query-log-details.png)

Next to each row's template name or SQL snippet is a pencil icon (![A pencil icon.](../images/ui/query-log/edit-icon.png)) that you can use to navigate to the Query Editor. The query is then pre-populated in the editor for editing.

![The Queries Log workspace with a pencil icon highlighted.](../images/ui/query-log/edit-query.png)

## Next steps

By reading this document, you now have a better understanding of how query logs are accessed and used in the Query Service UI. 

See the [UI overview](./overview.md), or the [Query Service API guide](../api/getting-started.md) to learn more about Query Service capabilities.

See the [monitor queries document](./monitor-queries.md) to learn how Query Service improves the visibility of scheduled query runs.
