---
title: SQL Generated Insights
description: Learn how to generate insights for user-defined dashboards with SQL.
---
# SQL generated insights

As part of the user-defined dashboards feature you can use custom SQL queries to effectively extract insights from diverse structured datasets. This method of insight creation is well-suited for tables with clear relationships, such as sales records, customer information, or inventory data.

<!-- Users who have purchased the Data Distiller SKU can use custom SQL queries to create insights. -->

>[!IMPORTANT]
>
>Custom SQL insight creation is only available to users who have purchased the Data Distiller SKU.

To generate insights from SQL you must first create a dashboard.

## Create a custom dashboard

To create a custom dashboard, select **[!UICONTROL Dashboards]** from the left navigation panel to open the Dashboards workspace. Next, select **[!UICONTROL Create dashboard]**. The [!UICONTROL Create dashboard] dialog appears.

![The Dashboard inventory with Create dashboard highlighted.]()

There are two options to from which to choose your dashboard creation method. You can either use an existing data model or the SQL Query Editor to create your insights. Using an existing data model has the benefits of providing a structured, efficient, and scalable framework tailored to your specific business needs. Insights generated from SQL queries offer far greater flexibility and customization, however, they are likely to require more time and expertise to develop and maintain. Refer to the user-defined dashabords guide to learn how to [create insights from an existing data model](./user-defined-dashboards.md#create-widget).

Select **[!UICONTROL SQL Query Editor]** followed by **[!UICONTROL Create]**.

>[!NOTE]
>
>Once you make a selection, you cannot change this selection within that dashboard. Instead, create a new dashboard that uses a different insight creation method.

![The [!UICONTROL Create dashboard] dialog with  SQL Query Editor and Create highlighted.]()

The **[!UICONTROL Enter SQL]** dialog appears. Select a database to query from the dropdown menu, and input a suitable query for your dataset in the Query Editor.

See the [Query Editor user guide](../query-service/ui/user-guide.md#query-authoring) for information on its UI elements.

>[!TIP]
>
>If your query uses query parameters, run the query once to pre-populate all the query parameter keys used. The UI automatically displays the Query parameters tab. Add the appropriate values for your keys.

![The [!UICONTROL Enter SQL] dialog with the dataset dropdown menu highlighted, a populated SQL query, and the query parameters tab displayed.]()

Select the run icon (![The run icon.]()). The Query editor displays the results tab. Next, select [!UICONTROL Select] to confirm your configuration.

![The [!UICONTROL Enter SQL] dialog with SQL input, the results tab displayed, and Select highlighted.]()





