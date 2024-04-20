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

![The Dashboard inventory with Create dashboard highlighted.](./images/user-defined-dashboards/sql-workflow/create-dashboard.png)

There are two options to from which to choose your dashboard creation method. You can either use an existing data model or the SQL Query Editor to create your insights. Using an existing data model has the benefits of providing a structured, efficient, and scalable framework tailored to your specific business needs. Insights generated from SQL queries offer far greater flexibility and customization, however, they are likely to require more time and expertise to develop and maintain. Refer to the user-defined dashboards guide to learn how to [create insights from an existing data model](./user-defined-dashboards.md#create-widget).

Select **[!UICONTROL SQL Query Editor]** followed by **[!UICONTROL Create]**.

>[!NOTE]
>
>Once you make a selection, you cannot change this selection within that dashboard. Instead, create a new dashboard that uses a different insight creation method.

![The [!UICONTROL Create dashboard] dialog with SQL Query Editor and Create highlighted. PLACEHOLDER](./images/user-defined-dashboards/sql-workflow/suggested-ui-experience.png)

The **[!UICONTROL Enter SQL]** dialog appears. Select a database to query from the dropdown menu, and input a suitable query for your dataset in the Query Editor.

See the [Query Editor user guide](../query-service/ui/user-guide.md#query-authoring) for information on its UI elements.

>[!TIP]
>
>If your query uses query parameters, run the query once to pre-populate all the query parameter keys used. The UI automatically displays the Query parameters tab. Add the appropriate values for your keys.

![The [!UICONTROL Enter SQL] dialog with the dataset dropdown menu and run icon highlighted, The dialog has a populated SQL query and the query parameters tab displayed.](./images/user-defined-dashboards/sql-workflow/enter-sql-database-dropdown.png)

Select the run icon (![The run icon.](./images/user-defined-dashboards/sql-workflow/run-icon.png)). The Query editor displays the results tab. Next, select **[!UICONTROL Select]** to confirm your configuration. The widget composer appears. 

![The [!UICONTROL Enter SQL] dialog with SQL input, the results tab displayed, and Select highlighted.](./images/user-defined-dashboards/sql-workflow/enter-sql-select.png)

## Populate widget {#populate-widget}

The widget composer is now populated with data from your chosen dataset. The type of dashboard is indicated in the top left, in this case it is [!UICONTROL Manual SQL Entry]. Select the pencil icon (![A pencil icon.](./images/user-defined-dashboards/edit-icon.png)) to edit the SQL at any point. 

Use the attributes listed in the [!UICONTROL Attributes] column to create your widget. You can use the search bar to look for attributes or scroll the list.

![The widget composer with the creation method and attribute column highlighted.]()

### Add attributes {#add-attributes}

Select the add icon (![An add icon.](./images/user-defined-dashboards/add-icon.png)) next to an attribute name to add an attribute to your widget. The dropdown menu that appears allows you to add an attribute as either the X axis, the Y axis, or as a color for your widget. The color attribute allows you to differentiate the results of the X and Y axis marks based on colour. It does this by splitting the results into different colours based on their composition of a third attribute.

[!TIP>]
>
>Select the up and down arrow icon (![The up and down arrow icon.](./images/user-defined-dashboards/switch-axis-icon.png)) to switch the arrangement of the X and Y axis.

![The widget composer with the add-icon dropdown and switch arrows highlighted.]()

To change the type of graph or chart of your widget, select from the available options of the [!UICONTROL Marks] dropdown. The options include [!UICONTROL Line], [!UICONTROL Donut], [!UICONTROL Big number], [!UICONTROL Table], and [!UICONTROL Bar]. Once selected, a preview visualization of your widget's current settings is generated.

![The widget composer with the widget preview highlighted.](./images/user-defined-dashboards/sql-workflow/widget-preview.png)

## Widget properties {#properties}

Select the properties icon (![The properties icon.](./images/user-defined-dashboards/properties-icon.png)) in the right rail to open the properties panel. In the Properties panel, enter a name for the widget in the **[!UICONTROL Widget title]** text field. You can also rename the X or Y axis by entering a new name into the [!UICONTROL Axis label] text fields.

![The widget composer with the properties icon and Widget title field highlighted.](./images/user-defined-dashboards/sql-workflow/widget-properties-title-text.png)

## Save your widget {#save-widget}

Saving in the widget composer saves the widget locally to your dashboard. If you wish to save your work and resume at a later time, select **[!UICONTROL Save]**. A tick icon underneath the widget name indicates that the widget has been saved. Alternatively, when you are satisfied with your widget, select **[!UICONTROL Save and close]** to make the widget available to all other users with access to your dashboard. Select Cancel to abandon your work and return to your custom dashboard.

![The widget composer with Save, Widget saved, and Save and close highlighted.]()

<!-- Add content on global filters -->

### View more / View SQL

From your custom dashboard, select the ellipses on each widget to access the [!UICONTROL View more] and [!UICONTROL View SQL] options. 

## Edit your dashboard {#edit}

Select **[!UICONTROL Edit]** to edit your entire dashboard and all your insights. From the edit mode, you can resize widgets, create and apply global and temporal filters. These filters constrain the data displayed in your dashboard widgets. It is a convenient way to quickly update and fine tune your insights for different use cases.

Select **[!UICONTROL Add filter]** to create either a [!UICONTROL Date filter] or a [!UICONTROL Global filter].

![A custom dashboard with the Add filter dropdown menu highlighted.](./images/user-defined-dashboards/sql-workflow/add-filter.png)

### Create a date filter {#create-date-filter}

Select **[!UICONTROL Date Filter]** from the dropdown menu to open the calender view. Select a start date and an end date to create as custom date filter.

![A custom dashboard with the date filter calender highlighted.](./images/user-defined-dashboards/sql-workflow/date-filter.png)

### Create a global filter {#create-global-filter}

Global filters effect the data of all widgets in your dashboard. You can quickly change the insights provided by your SQL with customized global filters. Once created, all global filters are available from the filter icon (![A filter icon.](./images/user-defined-dashboards/sql-workflow/filter.png)) of your dashboard.

Select **[!UICONTROL Global Filter]** from the dropdown menu to open the [!UICONTROL Create a global filter dialog]. This follows the same process as creating an insight with SQL. First, select a dataset to query, then input your custom SQL in the Query Editor, and finally select the run icon (![A run icon.](./images/user-defined-dashboards/sql-workflow/run-icon.png)). After successfully running the query, the results tab displays the results. Select **[!UICONTROL Next]**.

![The [!UICONTROL Create a global filter dialog] with the dataset dropdown menu, the run icon and Next highlighted.](./images/user-defined-dashboards/sql-workflow/global-filter.png)

The final step of the workflow to create a global filter requires you to add a label for you filter. Add a [!UICONTROL Filter label] to the text field and select a filter type from the dropdown box. The options are dependant on the dataset and SQL that you use. Finally add an optional description to differentiate the filter. When you are satisfied with your configuration, select **[!UICONTROL Select]** to return to your dashboard view.

![The [!UICONTROL Create a global filter dialog] with Select and the Filter label text input highlighted.](./images/user-defined-dashboards/sql-workflow/global-filter-label.png)

### Select a global filter {#select-global-filter}

Select the filter icon (![A filter icon.](./images/user-defined-dashboards/sql-workflow/filter.png)) on the left of your dashboard to open the [!UICONTROL Filters] dialog that lists all of your custom filters. Choose an option from the dropdown menu of your global filter to apply the effects on your dashboard insights.

![A custom dashboard with the filter dialog highlighted.](./images/user-defined-dashboards/sql-workflow/custom-filters.png)

## Duplicate a widget

See the Custom Dashboard guide for instructions on how to [duplicate an existing widget](./user-defined-dashboards.md#duplicate).

