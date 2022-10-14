---
title: Monitor Queries
description: Learn how to monitor queries through the Query Service UI.
---
# Monitor queries


## [!UICONTROL Scheduled Queries] 

The [!UICONTROL Scheduled Queries] tab provides an overview of the top  Browse executed queries level scheduled queries.

![The schedules tab in the Queries workspace.]()

{Describe the columns}

| Column | Description  |
|---|---|
| Name |   |
| Template |   |
| SQL |   |
| Run frequency |   |
| Created by |   |
| Created |   |
| Last run timestamp |   |
| Last run status |   |

Select the settings icon (![A settings icon.](./images/monitor-queries/settings-icon.png)) to open the Customize table settings dialog and edit available columns.

![The Customize table settings icon.](./images/monitor-queries/customze-table-settings-icon.png)

Toggle the relevant check boxes to remove or add a table column, select **[!UICONTROL Apply]** to confirm your choices.

![The Customize table settings dialog.](./images/monitor-queries/customize-table-dialog.png)

if {it} was created through the UI, and a named template was created. The template column holds the name. if {it} was created through the API then the template column is blank. 

<!-- >[!IMPORTANT]
>
> -->

### Subscribe to alerts

You can subscribe to alerts from the [!UICONTROL Scheduled Queries] tab. Select the alert notification icon (![An alert icon.](./images/monitor-queries/alerts-icon.png)) next to the query name to open the [!UICONTROL Alerts] dialog. The [!UICONTROL Alerts] dialogue allows to you subscribe to an alert based on the status of the query. The three available options are start, success, or failure. Check the appropriate box or boxes and select **[!UICONTROL Save]** to subscribe.

<!-- Link to alert subscriptions doc when available -->

### Filter queries

You can filter queries based on run frequency. From the [!UICONTROL Scheduled Queries] tab, select the filter icon (![A filter icon](./images/monitor-queries/filter-icon.png)) to open the filter sidebar. 

![The scheduled queries tab with the filter icon highlighted.](./images/monitor-queries/filter-queries.png)

Select either the Scheduled or Run once run frequency filter check boxes to filter the list of queries.

![The scheduled queries tab with the filter sidebar highlighted.]()

Select the template name to navigate to the Query Editor.

<!-- Q) How do you return from the Editor to the Schedules tab? -->

If the query was created through the API then the name of the query is the first 60 characters of the SQL used to create the query.

## schedule details

Select the query name to navigate to the Schedule details page. This view provides a list of all the runs executed as part of that scheduled query. This information is provided in a five column table.

| Column name  | Description  |
|---|---|
|   |   |
|   |   |
|   |   |
|   |   |
|   |   |

### Query run overview

Select the query run ID to navigate to the [!UICONTROL Query run overview].

![The Query run overview screen with the run details highlighted.] ()

{breakdown the info provided}

{mention that you can copy the SQL to clipboard}

![The Query run overview screen with copy to clipboard icon highlighted] ()

### Query errors

{Describe the breakdown of query errors that caused the run to fail. list of errors adn error code.}

![Query run details view wit teh query errors highlighted.] ()

Select [!UICONTROL Scheduled Queries] to return to the [!UICONTROL Schedules] tab.

## Run details

Gives more information on a particular run.

