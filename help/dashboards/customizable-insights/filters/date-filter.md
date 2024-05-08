---
title: Create a date filter
description: Learn how to filter your custom insights by date.
---
# Create a date filter {#create-date-filter}

To filter your insights by date, you must add parameters to your SQL queries that can accept time constraints. This is done as part of the query pro-mode insight creation workflow. See the [query pro-mode documentation](#query-pro-mode) to learn how to enter SQL for your insights.

Query parameters allow you to work with dynamic data as they act as placeholders for the values you add at execution time. These placeholder values can be updated through the UI and enable less technical users to update the insights based on date ranges.   

If you are unfamiliar with query parameters, see the documentation for [guidance on how to implement parameterized queries](../query-service/ui/parameterized-queries.md).

## Apply a global date filter to your dashboard {#apply-global-date-filter}

First, apply a global date filter. From your dashboard view, select **[!UICONTROL Add filter]**, then **[!UICONTROL Date Filter]** from the dropdown menu. 

![A custom dashboard with Add filter and its dropdown menu highlighted.](./images/user-defined-dashboards/sql-workflow/add-filter.png)

The calander view appears. Next, select a start date and an end date to create a custom date filter.

>[!IMPORTANT]
>
>Simply adding a date filter will not make the charts change. You must edit each of your insights to include your chosen start and end date.

![A custom dashboard with the date filter calender highlighted.](./images/user-defined-dashboards/sql-workflow/date-filter.png)

Once you have selected a date range from your dashboard, insights that have date parameters in their SQL will see the date filter options in the widget composer. 

>[!NOTE]
>
>Selecting a date range on your dashboard displays the toggles for date filters as part of the insight creation workflow. 

## Edit your SQL to include date parameters {#include-date-parameters} 

If you have not yet incorporated date parameters in your SQL, edit you insights to include these parameters. See the documentation for instructions on how to [edit an insight](#edit).

>[!TIP]
>
>You are reccommended to add `$START_DATE` and `$END_DATE` parameters to your SQL statement in each of the charts that you want to enable date filters.

The example SQL statement below demonstrates how to incorporate `$START_DATE` and `$END_DATE` parameters.

```sql
SELECT Sum(personalization_consent_count) AS Personalization,
       Sum(datacollection_consent_count)  AS Datacollection,
       Sum(datasharing_consent_count)     AS Datasharing
FROM   fact_daily_consent_aggregates f
       INNER JOIN dim_consent_valued
               ON f.consent_value_id = d.consent_value_id
WHERE  f.date BETWEEN Upper(Coalesce(Cast('$START_DATE' AS date), '')) AND Upper
                      (
                             Coalesce(Cast('$END_DATE' AS date), ''))
       AND ( ( Upper(Coalesce($consent_value_filter, '')) IN ( '', 'NULL' ) )
              OR ( f.consent_value_id IN ( $consent_value_filter ) ) )
LIMIT  0; 
```

The screenshot below highlights the time constraints incorporated in the SQL statement and the query parameter key value pairs.

>[!NOTE]
>
>A value must be included for each parameter on the first run of a query that uses parameters. The value can be NULL.

![The [!UICONTROL Enter SQL] dialog with the date parameters highlighted in the SQL.](./images/user-defined-dashboards/sql-workflow/sql-date-parameters.png)

## Enable date parameters in each insight {#enable-date-parameters}

Once you have incorporated the appropriate parameters to your insights' SQL, the `Start_date` and `End_date` variables are now available as a toggles in the widget composer. See the [query pro-mode widget population section](#populate-widget) for info on how to edit an insight. 

From the widget composer, select toggles to enable the `Start_date` and `End_date` parameters.

![The widget composer with the Start_date and End_date toggles highlighted.](./images/user-defined-dashboards/sql-workflow/widget-composer-date-filter-toggles.png)

Next, select the appropriate parameters from the dropdown menus.

![The widget composer with the Start_date dropdown menu highlighted.](./images/user-defined-dashboards/sql-workflow/widget-composer-date-filter-dropdown.png)

Finally, select **[!UICONTROL Save and close]** to return to your dashboard. Date filters are now enabled for all insights that have start and end date parameters.

## Delete a date filter {#delete-date-filter}

To remove your date filter select the delete filter icon (![The delete filter icon.](./images/user-defined-dashboards/sql-workflow/delete-filter-icon.png)). 

>[!NOTE]
>
>If no date filter is applied to your insight, the default system behaviour analyzes your data over the past year up to the current calendar day.

![A custom dashboard with the filter delete icon highlighted.](./images/user-defined-dashboards/sql-workflow/delete-date-filter.png)
