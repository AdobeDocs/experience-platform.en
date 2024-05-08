---
title: Query Pro Mode
description: Learn how to use SQL queries to generate insights for your custom dashboards.
---
# Query pro-mode {#query-pro-mode}

>[!NOTE]
>
>Query pro-mode is only available to users who have purchased the Data Distiller SKU. The [[!UICONTROL Guided design mode]](./user-defined-dashboards.md) is available to all users to create insights from an existing data model.

The **[!UICONTROL Enter SQL]** dialog appears. Select a database (insights data model) to query from the dropdown menu, and input a suitable query for your dataset in the Query Editor.

See the [Query Editor user guide](../query-service/ui/user-guide.md#query-authoring) for information on its UI elements.

>[!TIP]
>
>If your query uses query parameters, run the query once to pre-populate all the query parameter keys used. The UI automatically displays the Query parameters tab. Add the appropriate values for your keys.

![The [!UICONTROL Enter SQL] dialog with the dataset dropdown menu and run icon highlighted, The dialog has a populated SQL query and the query parameters tab displayed.](./images/user-defined-dashboards/sql-workflow/enter-sql-database-dropdown.png)

To execute your query, select the run icon (![The run icon.](./images/user-defined-dashboards/sql-workflow/run-icon.png)). The Query Editor displays the results tab. Next, to confirm your configuration and open the widget composer, select **[!UICONTROL Select]**. 

<!-- Screenshot below was taken from a screengrab -->

![The [!UICONTROL Enter SQL] dialog with SQL input, the results tab displayed, and Select highlighted.](./images/user-defined-dashboards/sql-workflow/enter-sql-select.png)

## Populate widget {#populate-widget}
 
The widget composer is now populated with the columns from the executed SQL. The type of dashboard is indicated in the top left, in this case it is [!UICONTROL Manual SQL Entry]. Select the pencil icon (![A pencil icon.](./images/user-defined-dashboards/edit-icon.png)) to edit the SQL at any point. 

>[!TIP]
>
>The available attributes are columns taken from the executed SQL.

To create your widget, use the attributes listed in the [!UICONTROL Attributes] column. You can use the search bar to look for attributes or scroll the list.

![The widget composer with the creation method and attribute column highlighted.](./images/user-defined-dashboards/sql-workflow/creation-method-and-attribute-column.png)

### Add attributes {#add-attributes}

To add an attribute to your widget, select the plus icon (![A plus icon.](./images/user-defined-dashboards/add-icon.png)) next to an attribute name. The dropdown menu that appears allows you to add an attribute to the chart from the options determined by your SQL. Different chart types have different options, such as an X and Y axis dropdown.

In this donut chart example, the options are size and color. Color breaks down the donut chart results, and the size is the actual metric used. Add an attribute to the [!UICONTROL Color] field to split the results into different colors based on their composition of that attribute.

>[!TIP]
>
>Select the up and down arrow icon (![The up and down arrow icon.](./images/user-defined-dashboards/switch-axis-icon.png)) to switch the arrangement of the X and Y axis on bar or line charts.

![The widget composer with the add-icon dropdown and switch arrows highlighted.](./images/user-defined-dashboards/sql-workflow/add-icon-and-switch-arrows.png)

To change the type of graph or chart of your widget, select from the available options of the [!UICONTROL Marks] dropdown. The options include [!UICONTROL Line], [!UICONTROL Donut], [!UICONTROL Big number], and [!UICONTROL Bar]. Once selected, a preview visualization of your widget's current settings is generated.

![The widget composer with the widget preview highlighted.](./images/user-defined-dashboards/sql-workflow/widget-preview.png)

## Widget properties {#properties}

Select the properties icon (![The properties icon.](./images/user-defined-dashboards/properties-icon.png)) in the right rail to open the properties panel. In the [!UICONTROL Properties] panel, enter a name for the widget in the **[!UICONTROL Widget title]** text field. You can also rename various aspects of your chart. 

>[!NOTE]
>
>The specific fields available in the properties sidebar vary depending on the chart type you are editing.

![The widget composer with the properties icon and Widget title field highlighted.](./images/user-defined-dashboards/sql-workflow/widget-properties-title-text.png)

## Save your widget {#save-widget}

Saving in the widget composer saves the widget locally to your dashboard. If you wish to save your work and resume later, select **[!UICONTROL Save]**. A tick icon underneath the widget name indicates that the widget has been saved. Alternatively, when you are satisfied with your widget, select **[!UICONTROL Save and close]** to make the widget available to all other users with access to your dashboard. Select Cancel to abandon your work and return to your custom dashboard.

![The widget composer with Save, Widget saved, and Save and close highlighted.](./images/user-defined-dashboards/sql-workflow/insight-saved.png)

## Edit your dashboard and insights {#edit}

Select **[!UICONTROL Edit]** to edit your entire dashboard or any of your insights. From the edit mode, you can resize widgets, edit your SQL, or create and apply global and temporal filters. These filters constrain the data displayed in your dashboard widgets. It is a convenient way to quickly update and fine-tune your insights for different use cases.

![A custom dashboard with Edit highlighted.](./images/user-defined-dashboards/sql-workflow/edit-dashboard.png)

Select **[!UICONTROL Add filter]** to create either a [[!UICONTROL Date filter]](#create-date-filter) or a [[!UICONTROL Global filter]](#create-global-filter). Once created, all global and date filters are available from [the filter icon](#select-global-filter) (![A filter icon.](./images/user-defined-dashboards/sql-workflow/filter.png)) of your dashboard.

![A custom dashboard with the Add filter dropdown menu highlighted.](./images/user-defined-dashboards/sql-workflow/add-filter.png)

## Edit, duplicate, or delete an insight

See the Custom Dashboard guide for instructions on how to [edit, duplicate, or delete an existing widget](./user-defined-dashboards.md#duplicate).

