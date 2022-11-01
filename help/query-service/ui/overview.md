---
keywords: Experience Platform;home;popular topics;query service;Query service;query;query editor;Query Editor;Query editor;
solution: Experience Platform
title: Query Service UI Guide
topic-legacy: guide
description: Adobe Experience Platform Query Service provides a user interface that can be used to write and execute queries, view previously executed queries, and access queries saved by users within your IMS Organization.
exl-id: 99ad25e4-0ca4-4bd1-b701-ab463197930b
---
# [!DNL Query Service] UI guide

The Adobe Experience Platform [!DNL Query Service] provides a user interface that can be used to write and execute queries, view previously executed queries, and access queries saved by users within your IMS Organization. To access the UI within [Adobe Experience Platform](https://platform.adobe.com), select **[!UICONTROL Queries]** in the left navigation.

## [!DNL Query Editor]

The [!DNL Query Editor] enables you to write and execute queries without using an external client. Select **[!UICONTROL Create Query]** to open the [!DNL Query Editor] and create a new query. You can also access the [!DNL Query Editor] by selecting a query from the **[!UICONTROL Log]** or **[!UICONTROL Templates]** tabs. Selecting a previously executed or saved query will open the [!DNL Query Editor] and display the SQL for the selected query.

![The Queries dashboard with Create Query highlighted.](../images/ui/overview/overview.png)

[!DNL Query Editor] provides editing space where you can begin typing a query. As you type, the editor automatically completes SQL reserved words, tables, and field names within tables. When finished writing your query, select the **Play** button to run the query. The **[!UICONTROL Console]** tab below the editor shows what [!DNL Query Service] is currently doing, indicating when a query has been returned. The **[!UICONTROL Result]** tab, next to the Console, displays query results. See the [Query Editor guide](./user-guide.md) for more information on using the [!DNL Query Editor].

![A zoomed in view of the [!DNL Query Editor].](../images/ui/overview/query-editor.png)

## Templates {#browse}

The **[!UICONTROL Templates]** tab shows queries saved by users in your organization. It is useful to think of these as query projects, as queries saved here may still be under construction. Queries displayed on the **[!UICONTROL Templates]** tab also display as run queries in the **[!UICONTROL Log]** tab if they have been previously executed by [!DNL Query Service].

![A zoomed in view of the Queries dashboard Templates tab displaying several saved queries.](../images/ui/overview/templates.png)

| Column | Description |
| --- | --- |
| **[!UICONTROL Name]** | The name field is either the query name created by the user or the first few characters of your SQL query. Any query created through the UI with the Query Editor is named at inception. If the query was created through the API then the name of the query is a snippet of the initial SQL used to create the query. You can select the query name to open the query in the [!DNL Query Editor]. You can also use the search bar to search for the [!UICONTROL Name] of a query. Searches are case sensitive. |
| **[!UICONTROL SQL]** | The first few characters of the SQL query. Hovering over the code displays the full query. |
| **[!UICONTROL Modified by]** | The last user who modified the query. Any user in your organization with access to [!DNL Query Service] can modify queries. |
| **[!UICONTROL Last modified]** | The date and time of the last modification to the query, in the browser's time zone. |

## Log

The **[!UICONTROL Log]** tab provides a list of queries that have previously been executed. By default, the log lists the queries in reverse chronology.

![A zoomed in view of the Queries dashboard Log tab displaying a list of queries in reverse chronological order.](../images/ui/overview/log.png)

| Column | Description |
| --- | --- |
| **[!UICONTROL Name]** | The query name, consisting of the first several characters of the SQL query. Selecting the name opens the [!DNL Query Editor], allowing you to edit the query. You can use the search bar to search on the Name of a query. Searches are case sensitive. |
| **[!UICONTROL Created by]** | The name of the person who created the query. |
| **[!UICONTROL Client]** | The client used for the query. |
| **[!UICONTROL Dataset]** | The input dataset used by the query. Select the dataset to go to the input dataset details screen. |
|**[!UICONTROL Status]** | The current status of the query. |
| **[!UICONTROL Last run]** | When the query was run last. You can sort the list in either ascending or descending order by selecting the arrow over this column. |
| **[!UICONTROL Run time]** | The amount of time it took to run the query. |

## Credentials

The **[!UICONTROL Credentials]** tab displays both your expiring and non-expiring credentials. For more information on how to use these credentials to connect with external clients, please read the [credentials guide](../clients/overview.md).

![The Queries dashboard with the Credentials tab highlighted.](../images/ui/overview/credentials.png)

## Next steps

Now that you are familiar with [!DNL Query Service] user interface on [!DNL Platform], you can access [!DNL Query Editor] to start creating your own query projects to share with other users in your organization. For more information on authoring and running queries in [!DNL Query Editor], see the [[!DNL Query Editor] user guide](./user-guide.md).