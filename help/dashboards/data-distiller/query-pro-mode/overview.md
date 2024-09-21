---
title: Query Pro Mode Overview
description: Learn how to use SQL queries in the Adobe Experience Platform UI to generate charts for your custom dashboards.
exl-id: 15c664c4-8546-4e04-b81d-c78bf83500d3
---
# Query pro mode overview {#query-pro-mode}

Query pro mode is an SQL editor-based workflow that guides you through the process of generating insights with custom SQL queries in the Adobe Experience Platform UI. Before you can generate insights with custom SQL queries, you must first [create a dashboard](./overview.md#create-custom-dashboard). 

## Compose SQL {#compose-sql}

Once you have chosen to create a dashboard with query pro mode, the **[!UICONTROL Enter SQL]** dialog appears. Select a database (insights data model) to query from the dropdown menu, and input a suitable query for your dataset in the query pro editor.

>[!NOTE]
>
>Query pro mode is only available to users who have purchased the Data Distiller SKU. The [[!UICONTROL Guided design mode]](../../user-defined-dashboards.md) is available to all users to create insights from an existing data model.

See the [Query Editor user guide](../../../query-service/ui/user-guide.md#query-authoring) for information on its UI elements.

![The [!UICONTROL Enter SQL] dialog with the dataset dropdown menu and run icon highlighted, The dialog has a populated SQL query and the query parameters tab displayed.](../../images/sql-insights/enter-sql-database-dropdown.png)

### Query parameters {#query-parameters}

To include [global](./filters/global-filter.md) or [date filters](./filters/date-filter.md) your query **must** use query parameters. When composing your statement in query pro mode, you must provide sample values if your query uses query parameters. The sample values allow you to execute the SQL statement and build the chart. Note that the sample values you provide when composing your statement are replaced by the actual values you select for the date or global filter at runtime. 

>[!IMPORTANT]
>
>If you want to use a global filter, you must place a query parameter in your SQL and then link that query parameter to the global filter in the widget composer. In the screenshot below, `CONSENT_VALUE_FILTER` is used in the SQL as a query parameter for a global filter. See the [global filter documentation](./filters/global-filter.md#enable-global-filter) for more information on how to do this. 

To execute your query, select the run icon (![The run icon.](/help/images/icons/play.png)). The Query Editor displays the results tab. Next, to confirm your configuration and open the widget composer, select **[!UICONTROL Select]**. 

>[!TIP]
>
>If your query uses query parameters, run the query once to pre-populate all the query parameter keys used. The query will fail but the UI automatically displays the Query parameters tab and lists all included keys. Add the appropriate values for your keys.

![The [!UICONTROL Enter SQL] dialog with SQL input, the results tab displayed, and Select highlighted.](../../images/sql-insights/enter-sql-select.png)

## Populate widget {#populate-widget}
 
The widget composer is now populated with the columns from the executed SQL. The type of dashboard is indicated in the top left, in this case it is [!UICONTROL Manual SQL Entry]. Select the pencil icon (![A pencil icon.](/help/images/icons/edit.png)) to edit the SQL at any point. 

>[!TIP]
>
>The available attributes are columns taken from the executed SQL.

To create your widget, use the attributes listed in the [!UICONTROL Attributes] column. You can use the search bar to look for attributes or scroll the list.

![The widget composer with the creation method and attribute column highlighted.](../../images/sql-insights/creation-method-and-attribute-column.png)

### Add attributes {#add-attributes}

To add an attribute to your widget, select the plus icon (![A plus icon.](/help/images/icons/add-circle.png)) next to an attribute name. The dropdown menu that appears allows you to add an attribute to the chart from the options determined by your SQL. Different chart types have different options, such as an X and Y axis dropdown.

In this donut chart example, the options are size and color. Color breaks down the donut chart results, and the size is the actual metric used. Add an attribute to the [!UICONTROL Color] field to split the results into different colors based on their composition of that attribute.

>[!TIP]
>
>Select the up and down arrow icon (![The up and down arrow icon.](/help/images/icons/switch.png)) to switch the arrangement of the X and Y axis on bar or line charts.

![The widget composer with the add-icon dropdown and switch arrows highlighted.](../../images/sql-insights/add-icon-and-switch-arrows.png)

To change the type of graph or chart of your widget, select from the available options of the [!UICONTROL Marks] dropdown. The options include [!UICONTROL Line], [!UICONTROL Donut], [!UICONTROL Big number], and [!UICONTROL Bar]. Once selected, a preview visualization of your widget's current settings is generated.

![The widget composer with the widget preview highlighted.](../../images/sql-insights/widget-preview.png)

## Advanced table attributes {#advanced-attributes}

To apply automatic sorting capabilities for any or all columns in your tables, select **[!UICONTROL Edit]** to edit your entire dashboard.

![A custom dashboard with Edit highlighted.](../../images/query-pro-mode/advanced-edit-dashboard.png)

Select the ellipsis (`...`) in the table to which you want to add sorting, then select **[!UICONTROL Edit]**.

![A table showing the ellipsis menu with Edit highlighted.](../../images/query-pro-mode/advanced-table-edit.png)

To enable sorting for any column, use the **[!UICONTROL Sortable]** check boxes.

![Table edit page with sortable check boxes highlighted.](../../images/query-pro-mode/advanced-table-sortable.png)

Select the properties icon (![The properties icon.](/help/images/icons/properties.png)) in the right rail to open the properties panel. In the **[!UICONTROL Properties]** panel, use the drop down to select the **[!UICONTROL Default sort]** column, then use the drop down to select the **[!UICONTROL Sort direction]**. Finally, select **[!Save and close]**.

![The widget composer with the properties icon, default sort, sort direction and save and close highlighted.](../../images/query-pro-mode/advanced-table-properties.png)

To learn more about using the sort, resizing columns, and pagination features, refer to [View more](./view-more.md).

## Widget properties {#properties}

Select the properties icon (![The properties icon.](/help/images/icons/properties.png)) in the right rail to open the properties panel. In the [!UICONTROL Properties] panel, enter a name for the widget in the **[!UICONTROL Widget title]** text field. You can also rename various aspects of your chart. 

>[!NOTE]
>
>The specific fields available in the properties sidebar vary depending on the chart type you are editing.

![The widget composer with the properties icon and Widget title field highlighted.](../../images/sql-insights/widget-properties-title-text.png)

## Save your widget {#save-widget}

Saving in the widget composer saves the widget locally to your dashboard. If you wish to save your work and resume later, select **[!UICONTROL Save]**. A tick icon underneath the widget name indicates that the widget has been saved. Alternatively, when you are satisfied with your widget, select **[!UICONTROL Save and close]** to make the widget available to all other users with access to your dashboard. Select Cancel to abandon your work and return to your custom dashboard.

![The widget composer with Save, Widget saved, and Save and close highlighted.](../../images/sql-insights/insight-saved.png)

## Edit your dashboard and charts {#edit}

Select **[!UICONTROL Edit]** to edit your entire dashboard or any of your insights. From the edit mode, you can resize widgets, edit your SQL, or create and apply global and temporal filters. These filters constrain the data displayed in your dashboard widgets. It is a convenient way to quickly update and fine-tune your insights for different use cases.

![A custom dashboard with Edit highlighted.](../../images/sql-insights/edit-dashboard.png)

Select **[!UICONTROL Add filter]** to create either a [[!UICONTROL Date filter]](#create-date-filter) or a [[!UICONTROL Global filter]](#create-global-filter). Once created, all global and date filters are available from [the filter icon](#select-global-filter) (![A filter icon.](/help/images/icons/filter.png)) of your dashboard.

![A custom dashboard with the Add filter dropdown menu highlighted.](../../images/query-pro-mode/add-filter.png)

## Edit, duplicate, or delete an insight

See the Custom Dashboard guide for instructions on how to [edit, duplicate, or delete an existing widget](../../user-defined-dashboards.md#duplicate).

## Next steps

After reading this document, you now know how write SQL queries in the Adobe Experience Platform UI to generate charts for your custom dashboards. Next, you should learn how to further enrich yourt data by [creating a date filter](./filters/date-filter.md), or [creating a global filter](./filters/global-filter.md).

You can also learn more about other Customized Insights features including [the different viewing options for you SQL analysed data](./view-more.md) or how to [view the SQL behind your custom insights](./view-sql.md).
