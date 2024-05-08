---
title: Create a Global Filter
description: Learn how to filter your data insights with a custom globally applied filter.
---
# Create a global filter {#create-global-filter}

To apply a global filter, first select **[!UICONTROL Add filter]** from your dashboard view, then **[!UICONTROL Global filter]** from the dropdown menu. 

![A custom dashboard with Add filter and its dropdown menu highlighted.](../../images/customizable-insights/sql-workflow/add-filter.png)

Global filters affect the data of all widgets in your dashboard. You can quickly change the insights provided by your SQL with customized global filters.

The [!UICONTROL Create a global filter] dialog opens. Creating a global filter follows the same process as creating an insight with SQL. First, select a database (insights data model) to query, then input your custom SQL in the Query Editor, and finally select the run icon (![A run icon.](../../images/customizable-insights/sql-workflow/run-icon.png)). 

>[IMPORTANT]
>
>You must include an ID and a value when you create a global filter.

After successfully running the query, the results tab displays the results. Select **[!UICONTROL Next]**.

![The [!UICONTROL Create a global filter dialog] with the dataset dropdown menu, the run icon and Next highlighted.](../../images/customizable-insights/sql-workflow/global-filter.png)

The final step of the global filter creation workflow requires you to add a label for your filter. Add a label to the **[!UICONTROL Filter label]** text field and select a filter type from the dropdown box. 

>[!NOTE]
>
>The options available are dependent on the dataset and SQL that you use. 

Finally, select **[!UICONTROL Select]** to return to your dashboard view.

![The [!UICONTROL Create a global filter dialog] with Select and the Filter label text input highlighted.](../../images/customizable-insights/sql-workflow/global-filter-label.png)

## Enable the global filter for each insight {#Enable-global-filter}

After creating your global filter for your dashboard, the toggle for that global filter becomes available as part of the widget composer.

![The widget composer with the Global Filter toggle highlighted.](../../images/customizable-insights/sql-workflow/global-filter-consent.png)

>[!IMPORTANT]
>
>Ensure that the global filter parameter is included in the SQL of each insight.

## Select a global filter {#select-global-filter}

To open the [!UICONTROL Filters] dialog that lists all of your custom filters, select the filter icon (![A filter icon.](../../images/customizable-insights/sql-workflow/filter.png)) on the left of your dashboard. Next, to apply the effects on your dashboard insights, choose an option from the dropdown menu of your global filter then select **[!UICONTROL Apply]**.

![A custom dashboard with the filter dialog highlighted.](../../images/customizable-insights/sql-workflow/custom-filters.png)
