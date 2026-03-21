---
keywords: Experience Platform;Query Service;Data Distiller;accelerators;parameterized queries;SQL templates
solution: Experience Platform
title: Data Distiller Accelerators
description: Use Data Distiller Accelerators to run and schedule Adobe-approved parameterized SQL templates in the Query Service UI. Accelerators are read-only and Adobe-managed; use **[!UICONTROL Create custom template]** to clone and edit them.
---
# Data Distiller Accelerators {#data-distiller-accelerators}

Data Distiller Accelerators are Adobe-authored, parameterized SQL templates designed for common analytical scenarios. You use accelerators to quickly run common analyses without writing SQL from scratch. Accelerators are read-only and maintained by Adobe, ensuring consistency across your organization. If you need to modify one, you can clone it as a custom template.

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

Use accelerators when you need pre-built SQL for common analytical patterns such as funnel analysis, moving averages, or audience overlap.  If no accelerator fits your use case, [write a custom query in the Query Editor](./user-guide.md#query-authoring) or request a new accelerator (see [Request a new accelerator](#request-accelerator)).

To begin using accelerators, navigate to the Queries workspace and open the Accelerators tab.

## Accelerator discovery paths {#discovery-paths}

You can access accelerators from the Queries workspace in two ways, depending on whether you want the full catalog or recommended templates.

### Use the Accelerators tab

Use this path when you want to browse all available accelerators. To open the full accelerator catalog, select **[!UICONTROL Queries]** in the left navigation, then select the **[!UICONTROL Accelerators]** tab.

The workspace displays a table of accelerators with names, SQL previews, and timestamps. Select an accelerator name to open it in the Query Editor.

![The Queries workspace with the Accelerators tab selected showing the table of accelerators.](../images/ui/accelerators/accelerators-tab-table.png)

### Use the Overview tab

Use this path when you want quick access to commonly used accelerators. Navigate to **[!UICONTROL Queries]**, then select the **[!UICONTROL Overview]** tab.

In **[!UICONTROL Recommended Data Distiller accelerators]**, select a card. After selection, either the Query Editor with the accelerator loaded, or the [!UICONTROL Dashboards] workspace opens with a visualization

If the card opens a dashboard instead of the Query Editor, see [Dashboard-linked accelerators](#dashboard-accelerators).

![The Queries workspace with the Overview tab selected showing a list of reccomened Data Distiller accelerators.](../images/ui/accelerators/queries-overview-accelerators.png)

## Open an accelerator in the Query Editor {#open-accelerator}

After you select an accelerator from the **[!UICONTROL Accelerators]** tab or **[!UICONTROL Overview]** tab, the Query Editor opens with the accelerator SQL preloaded.

The SQL is read-only, and toolbar actions such as [!UICONTROL Show results], [!UICONTROL Undo text], [!UICONTROL Format text], [!UICONTROL Save] are disabled.

You can still perform the following actions:

- Run the query  
- Exit the editor using **[!UICONTROL Cancel]**  
- Create a custom template using **[!UICONTROL Create custom template]**

The right-hand panel displays [!UICONTROL Accelerator ID], [!UICONTROL Name], [!UICONTROL Last modified], [!UICONTROL Modified by], and [!UICONTROL Add schedule].

![The Query Editor with an accelerator open, showing the SQL area, Query parameters tab, and right-hand panel.](../images/ui/accelerators/accelerator-query-editor.png)

## Provide parameters and execute an accelerator {#provide-parameters-execute}

After opening an accelerator, you must provide values for all parameters before running the query.

Parameters use the `${PARAMETER_NAME}` syntax and appear in the **[!UICONTROL Query parameters]** tab below the editor.

To run an accelerator:

1. Select **[!UICONTROL Query parameters]** and enter a value for each parameter.  
2. Select the play icon in the toolbar to run the query.

The query executes and the results table populates in the **[!UICONTROL Results]** tab.

>[!IMPORTANT]
>
>You must supply values for all parameters before running an accelerator. Running the query with missing or empty parameter values causes the query to fail.

For more information on parameterized queries, see [Parameterized queries in Query Editor](./parameterized-queries.md). For full query execution details, including limits and output options, see the [Query Editor user guide](./user-guide.md#run-a-query).


## Schedule an accelerator {#schedule-accelerator}

After validating an accelerator in the Query Editor, you can schedule it to run automatically with fixed parameter values. Select **[!UICONTROL Add schedule]** in the right-hand panel to begin.

The schedule configuration includes the frequency, start and end dates, output dataset, and parameter values that are reused for each run. For complete step-by-step instructions, see [Create a query schedule](./query-schedules.md#create-schedule).

## Create a custom template from an accelerator {#create-custom-template}

Create a custom template when you need to modify the SQL or reuse the logic under your own configuration.

Open an accelerator in the Query Editor, then select **[!UICONTROL Create custom template]**. Modify the SQL as needed, and select **[!UICONTROL Save]** or **[!UICONTROL Save and close]** to store the template.

The template appears in the **[!UICONTROL Templates]** tab, where you can manage it like any other template. For more information, see [Query templates](./query-templates.md).

### What changes when you create a custom template {#custom-template-differences}

The cloned template differs from the original accelerator in that the SQL is editable and you can save changes, you can delete the template, and you can schedule the template. The **[!UICONTROL Modified by]** field shows your name.

The template appears in the **[!UICONTROL Templates]** tab instead of **[!UICONTROL Accelerators]**.

## Dashboard-linked accelerators {#dashboard-accelerators}

Some accelerators open dashboards instead of the Query Editor. These provide visualizations for audience analysis. Examples include **[!UICONTROL Audience Identity Overlaps]** and **[!UICONTROL Advanced audience overlaps]**.

After opening a dashboard, use available controls and filters to explore and compare audience data. For more details, see [dashboard templates](../../dashboards/sql-insights-query-pro-mode/templates/overview.md).

## Request a new accelerator {#request-accelerator}

If you have a recurring use case that is not covered by existing accelerators, submit a request through your Adobe support channel.

Adobe evaluates requests based on common usage patterns and industry applicability.

## Next steps {#next-steps}

You can now use accelerators to run and automate common analytical queries.

To extend your workflows, create and browse [query templates](./query-templates.md#browse), author [parameterized queries](./parameterized-queries.md), schedule [queries](./query-schedules.md), or explore [Query Service workflows](./user-guide.md).
