---
keywords: Experience Platform;Query Service;Data Distiller;accelerators;parameterized queries;SQL templates
solution: Experience Platform
title: Data Distiller Accelerators
description: Use Data Distiller Accelerators to run and schedule Adobe-approved parameterized SQL templates in the Query Service UI. Accelerators are read-only and Adobe-managed; use **[!UICONTROL Create custom template]** to clone and edit them.
---
# Data Distiller Accelerators {#data-distiller-accelerators}

Data Distiller Accelerators are Adobe-authored, parameterized SQL templates designed for common analytical scenarios. You use accelerators to run common analyses without writing SQL from scratch. Accelerators are read-only and maintained by Adobe, ensuring consistency across your organization. If you need to modify one, you can clone it as a custom template.

After completing this guide, you can discover, run, schedule, and clone accelerators in the Queries workspace.

>[!AVAILABILITY]
>
>Data Distiller Accelerators are only available to organizations with a Data Distiller SKU. The Accelerators tab and related workflows require the Data Distiller add-on. See the [Data Distiller overview](../data-distiller/overview.md) for more information.

## Prerequisites {#prerequisites}

Before you begin, ensure you meet the following requirements:

- You have access to the Queries workspace in Experience Platform.
- You understand [how to use the Query Editor and run queries](./user-guide.md).
- You are familiar with [parameterized queries](./parameterized-queries.md) (placeholders in SQL replaced at runtime).

## When to use accelerators {#when-to-use}

Use accelerators when you need pre-built SQL for common analytical patterns such as funnel analysis, moving averages, or audience overlap. If no accelerator fits your use case, [write a custom query in the Query Editor](./user-guide.md#query-authoring) or request a new accelerator (see [Request a new accelerator](#request-accelerator)).

Accelerators include a broad set of Adobe-provided SQL templates for recurring analytical use cases. Some recommended accelerators provide direct access to preconfigured dashboards for audience analysis, while others open in the Query Editor for query execution and customization.

To begin using accelerators, navigate to the **[!UICONTROL Queries]** workspace and open the **[!UICONTROL Accelerators]** tab or the **[!UICONTROL Overview]** tab.

<!--  -->
## Accelerator discovery paths {#discovery-paths}

You can access accelerators from the Queries workspace in two ways, depending on whether you want the full catalog or recommended templates.

### Use the Accelerators tab

Use this path when you want to browse all available accelerators. To open the full accelerator catalog, select **[!UICONTROL Queries]** in the left navigation, then select the **[!UICONTROL Accelerators]** tab.

The workspace displays a table of accelerators with names, SQL previews, and timestamps. Select an accelerator name to open it in the Query Editor.

![The Queries workspace with the Accelerators tab selected showing the table of accelerators.](../images/ui/accelerators/accelerators-tab-table.png)

### Use the Overview tab

Use this path when you want quick access to commonly used accelerators. Navigate to **[!UICONTROL Queries]**, then select the **[!UICONTROL Overview]** tab.

In **[!UICONTROL Recommended Data Distiller accelerators]**, select a card.

Recommended accelerators can open in different workspaces depending on their configuration. Some cards open the Query Editor with SQL preloaded, while others open a dashboard with prebuilt visualizations for audience analysis. If the card opens a dashboard instead of the Query Editor, see [Dashboard-linked accelerators](#dashboard-accelerators).

![The Queries workspace with the Overview tab selected showing a list of recommended Data Distiller accelerators.](../images/ui/accelerators/queries-overview-accelerators.png)

<!--  -->
## Open an accelerator in the Query Editor {#open-accelerator}

<!-- PM question: Is it accurate that accelerators selected from both the **[!UICONTROL Accelerators]** tab always open in the Query Editor? If not, which cases behave differently?

Answer: All accelerators form the [!UICONTROL Accelerators] tab open in the Query Editor. The accelerators that open into dashboards are NOT available form the [!UICONTROL Accelerators] tab. -->

After you select an accelerator from the **[!UICONTROL Accelerators]** tab or **[!UICONTROL Overview]** tab, the Query Editor opens with the accelerator SQL preloaded.

<!-- PM question: Why is **[!UICONTROL Show results]** disabled for accelerators if users can still run the query and view results in the **[!UICONTROL Results]** tab? What is the functional difference?

Answer: You cannot imediatley run an acelerator for the Query editor. First, you must select either [!UICONTROL Create custom template] to edit and cusomtize the SQL, or select [!UICONTROL Run as CTAS], depending on the accelerator. 
If you run the SQL as a CTAS query then a new table will be created. The [!UICONTORL Enter output dataset details] dialog appears. Form here you must input a name for the output dataset that will be created. You can also add an optional description. Select Run as CTAS to confirm your configuration. 

![The [!UICONTORL Enter output dataset details] dialog with a dataset name and description populated.](../images/ui/accelerators/output-dataset-details-dialog.png)

The results can be seen in the datasets workspace or found through the [!UICONTROL Logs] tab.
-->

The SQL is read-only, and toolbar actions such as [!UICONTROL Show results], [!UICONTROL Undo text], [!UICONTROL Format text], and [!UICONTROL Save] are disabled. To execute the query, use the play icon in the toolbar. Running the query executes it with the provided parameters and displays results in the **[!UICONTROL Results]** tab.

The right-hand panel displays metadata such as [!UICONTROL Accelerator ID], [!UICONTROL Name], and modification details, and provides access to scheduling through **[!UICONTROL Add schedule]**.

Next, select **[!UICONTROL Create custom template]** to create a custom template, or **[!UICONTROL Cancel]** to exit the editor.

![The Query Editor with an accelerator open, showing the SQL area, Query parameters tab, and right-hand panel.](../images/ui/accelerators/accelerator-query-editor.png)

## Provide parameters and execute an accelerator {#provide-parameters-execute}

After opening an accelerator, you must provide values for all parameters before running the query.

Parameters use the `${PARAMETER_NAME}` syntax and appear in the **[!UICONTROL Query parameters]** tab below the editor. For example, a parameter such as `${START_DATE}` might require a date value in `YYYY-MM-DD` format (for example, `2024-01-01`), while `${AUDIENCE_ID}` might require a specific audience identifier. The required format depends on how the parameter is defined in the accelerator SQL.

To run an accelerator:

1. Select **[!UICONTROL Query parameters]** and enter a value for each parameter.  
2. Select the play icon (![The play icon.](../../images/icons/play.png)) in the toolbar to run the query.

The query executes and, if successful, the results table populates in the **[!UICONTROL Results]** tab for immediate inspection. These results are not automatically saved to a dataset unless you explicitly configure output settings or create a schedule.

>[!IMPORTANT]
>
>You must supply values for all parameters before running an accelerator. Running the query with missing or empty parameter values causes the query to fail.

For more information on parameterized queries, see [Parameterized queries in Query Editor](./parameterized-queries.md). For full query execution details, including limits and output options, see the [Query Editor user guide](./user-guide.md#run-a-query).

## Schedule an accelerator {#schedule-accelerator}

After running an accelerator and confirming that the results are correct in the **[!UICONTROL Results]** tab, you can schedule it to run automatically with fixed parameter values. Select **[!UICONTROL Add schedule]** in the right-hand panel to begin.

![The schedule configuration dialog showing frequency, date range, output dataset, and parameter fields.](../images/ui/accelerators/schedule-details.png)

<!-- PM question: How does a scheduled accelerator update the selected output dataset on each run? Are results appended, overwritten, or handled another way?

Answer:  The options to create and append, or update an existing dataset are the same for an accelerator and any schedueld query. IN the Schedule configuration dialog, in the [!UICONTROL Dataset details] section to choose between: [!UICONTROL Append into existing dataset] or [!UICONTROL Create and append into new dataset]
 -->


The schedule configuration includes the frequency, start and end dates, output dataset, and parameter values that are reused for each run. Each scheduled execution writes results to the specified dataset based on your configuration. This enables you to persist and reuse query output over time.

For complete step-by-step instructions, see [Create a query schedule](./query-schedules.md#create-schedule).

## Create a custom template from an accelerator {#create-custom-template}

Create a custom template when you need to modify the SQL or reuse the logic under your own configuration.

Open an accelerator in the Query Editor, then select **[!UICONTROL Create custom template]**. Modify the SQL as needed, and select **[!UICONTROL Save]** or **[!UICONTROL Save and close]** to store the template. The template is saved to the **[!UICONTROL Templates]** tab, where you can manage it like any other template. For more information, see [Query templates](./query-templates.md).

### What changes when you create a custom template {#custom-template-differences}

The cloned template differs from the original accelerator because the SQL is editable, you can save changes, delete the template, and schedule it. The **[!UICONTROL Modified by]** field shows your name.

The template appears in the **[!UICONTROL Templates]** tab instead of **[!UICONTROL Accelerators]**.

## Dashboard-linked accelerators {#dashboard-accelerators}

<!-- 
PM question: Which specific accelerators are dashboard-linked, and how do users access them? 
and
PM question: Do dashboard-linked accelerators ever require parameters or manual execution, or are they always precomputed visualizations? 


Answer: It is only these 4 that open as dashboards:
Advanced Audience Overlaps
Audience Comparison
Audience Trends
Audience Identity Overlaps

This is because they are the pre-configured templates in query pro mode for analyzing specific aspects of audience behavior, segmentation, and identity management.

Context:
```
Available templates
The templates currently available in the Dashboards workspace are:

Advanced Audience Overlaps
Use the Advanced Audience Overlaps dashboard to quickly analyze audience intersections for specific audiences or view all overlaps to uncover valuable insights across your entire audience set. Use these insights to refine segmentation, reduce redundant messaging, and create more targeted campaigns for improved marketing efficiency.
(https://experienceleague.adobe.com/en/docs/experience-platform/dashboards/sql-insights-query-pro-mode/templates/overlaps)

Audience Comparison
The Audience Comparison dashboard allows you to compare key metrics between two audience groups side-by-side. Use this dashboard to analyze important KPIs, such as audience size, identity breakdown, and changes in audience size over time. These insights help you make informed decisions about audience segmentation and improve targeting strategies.
(https://experienceleague.adobe.com/en/docs/experience-platform/dashboards/sql-insights-query-pro-mode/templates/comparison)

Audience Trends
Use the Audience Trends dashboard to analyze audience metrics over time. Visualize trends for audience size, number of identities, and number of single identity profiles to monitor audience evolution, measure growth, and refine engagement strategies effectively.
(https://experienceleague.adobe.com/en/docs/experience-platform/dashboards/sql-insights-query-pro-mode/templates/trends)

Audience Identity Overlaps
Use the Audience Identity Overlaps dashboard to analyze identity overlaps within selected audiences. View identity trends and breakdowns to understand how different identity types relate, enhancing identity stitching and improving customer segmentation accuracy.
(https://experienceleague.adobe.com/en/docs/experience-platform/dashboards/sql-insights-query-pro-mode/templates/identity-overlaps)

Next steps
After reading this document, you have learned about the four Data Distiller Templates available in the Dashboards workspace and how they help you analyze audience data for better decision-making. These templates provide tools for understanding audience intersections, comparing metrics, tracking trends, and analyzing identity overlaps to refine segmentation, reduce redundancy, and enhance engagement.

For more details on each template, refer to the respective guides for Advanced Audience Overlaps, Audience Comparison, Audience Trends, and Audience Identity Overlaps.
```

-->

These dashboards provide prebuilt visualizations for audience analysis rather than raw query results.

![Dashboard view showing audience analysis visualizations with charts and filters.](../images/ui/accelerators/dashboard-accelerator-template-example.png)

After the dashboard opens, use available controls and filters to explore and compare audience data. 

<!-- 
PM Question; to confirm "These accelerators do not require parameter input or manual query execution."  

Answer: I believe it is accurate to say that "These accelerators do not require parameter input or manual query execution." because they are pre configured and run automatically on your data.
-->

For more details, see [dashboard templates](../../dashboards/sql-insights-query-pro-mode/templates/overview.md).

## Request a new accelerator {#request-accelerator}

If you have a recurring use case that is not covered by existing accelerators, submit a request through your Adobe support channel.

Adobe evaluates requests based on common usage patterns and industry applicability.

## Next steps {#next-steps}

You can now use accelerators to run and automate common analytical queries.

To extend your workflows, create and browse [query templates](./query-templates.md#browse), author [parameterized queries](./parameterized-queries.md), schedule [queries](./query-schedules.md), or explore [Query Service workflows](./user-guide.md).
