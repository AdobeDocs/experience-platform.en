---
keywords: Experience Platform;Query Service;Data Distiller;accelerators;parameterized queries;SQL templates
solution: Experience Platform
title: Data Distiller Accelerators
description: Use Data Distiller Accelerators to run and schedule Adobe-approved parameterized SQL templates in the Query Service UI. Accelerators are read-only and Adobe-managed; use Create Custom Template to clone and edit them.
exl-id: placeholder
---
# Data Distiller Accelerators {#data-distiller-accelerators}

Data Distiller Accelerators are a library of Adobe-approved, parameterized SQL templates for common analytical scenarios. You can discover accelerators, supply parameter values, and run or schedule the resulting queries without writing SQL from scratch. To customize an accelerator, use Create Custom Template to clone it into an editable query template that you own.

This feature is available only to organizations with a Data Distiller SKU. Query Service is the base offering included with Experience Platform; the Accelerators tab and related workflows require the Data Distiller add-on.

## Prerequisites {#prerequisites}

Before using accelerators, ensure that your organization has the Data Distiller SKU and that you have access to the Queries workspace in Experience Platform. You should understand the Query Editor, how to run queries, and the concept of parameterized queries (placeholders in SQL that are replaced with values at runtime). See the [Query Editor user guide](./user-guide.md) and [Parameterized queries in Query Editor](./parameterized-queries.md) for background.

## Overview {#overview}

Accelerators are Adobe-authored, parameterized SQL templates. They are read-only: you cannot edit, delete, or save changes to an accelerator. Only Adobe can add, modify, or remove accelerators. Accelerators are shared across all IMS organizations in your instance, so teams can reuse the same templates for consistent analysis.

The right-hand panel and metadata for an accelerator show **[!UICONTROL Modified by]** as a hyphen. Adobe does not display the names of Adobe authors for accelerators.

### Accelerator discovery paths {#discovery-paths}

You can discover accelerators in two ways:

- **[!UICONTROL Accelerators] tab:** In the Queries workspace, select the **[!UICONTROL Accelerators]** tab to view a table of all available accelerators. The table shows each accelerator name, a SQL preview, and creation and modification dates. Select an accelerator name to open it in the Query Editor.
- **[!UICONTROL Overview] tab:** The Recommended Data Distiller accelerators section on the **[!UICONTROL Overview]** tab displays a subset of accelerator cards. Select a card to open the corresponding accelerator or dashboard.

## Open an accelerator in the Query Editor {#open-accelerator}

Select an accelerator name from the **[!UICONTROL Accelerators]** tab or from the Recommended Data Distiller accelerators cards on the **[!UICONTROL Overview]** tab. The Query Editor opens with the accelerator's SQL pre-populated. The SQL is read-only: toolbar actions such as **[!UICONTROL Show results]**, **[!UICONTROL Undo text]**, **[!UICONTROL Format text]**, and **[!UICONTROL Save]** are disabled. The following actions remain available: run the query, cancel and exit, and create a custom template.

The right-hand panel displays accelerator metadata: **[!UICONTROL Accelerator ID]**, **[!UICONTROL Name]**, **[!UICONTROL Last modified]**, **[!UICONTROL Modified by]**, and **[!UICONTROL Add schedule]**.

## Provide parameter inputs {#provide-parameters}

Accelerators use the `${PARAMETER_NAME}` syntax for parameters. Parameters appear in the **[!UICONTROL Query parameters]** tab below the editor. Supply a value for each parameter before running the query.

>[!IMPORTANT]
>
>You must supply values for all parameters before running an accelerator. Running the query with missing or empty parameter values causes the query to fail.

Parameters are auto-populated from the SQL. Enter or adjust values in the **[!UICONTROL Query parameters]** tab. For general parameter concepts and authoring your own parameterized queries, see [Parameterized queries in Query Editor](./parameterized-queries.md).

## Execute an accelerator {#execute-accelerator}

After you enter values for all parameters in the **[!UICONTROL Query parameters]** tab, select the play icon to run the query. Results appear in the **[!UICONTROL Results]** tab. If any parameters are missing or empty, the query fails and an error message appears.

For full details on running queries in the Query Editor, see the [Query Editor user guide](./user-guide.md#run-a-query).

## Schedule an accelerator {#schedule-accelerator}

You can schedule an accelerator directly without cloning it. Select **[!UICONTROL Add schedule]** in the right-hand panel when the accelerator is open in the Query Editor. The scheduling workflow is the same as for other query templates: set frequency, start and end dates, and the output dataset. Parameter values are set when you create the schedule and are reused for each run.

For step-by-step scheduling instructions, see [Create a query schedule](./query-schedules.md#create-schedule).

## Create a custom template from an accelerator {#create-custom-template}

To customize an accelerator's SQL or make it fully editable, create a custom template. This clones the accelerator into a new query template that you own. The original accelerator is not modified.

1. Open an accelerator in the Query Editor.
2. Select **[!UICONTROL Create custom template]**.
3. The editor switches to editable mode. Modify the SQL if needed, then select **[!UICONTROL Save]** or **[!UICONTROL Save and close]**.
4. The cloned template appears in the **[!UICONTROL Templates]** tab. You can edit, schedule, or delete it like any other template.

See [Query templates](./query-templates.md) for managing templates.

### What changes when you create a custom template {#custom-template-differences}

The cloned template differs from the original accelerator in these ways:

- The SQL is editable and you can save changes.
- You can delete the template.
- **[!UICONTROL Modified by]** shows your name (or the user who last modified it).
- You can schedule the template.
- The template appears in the **[!UICONTROL Templates]** tab, not in **[!UICONTROL Accelerators]**.

## Dashboard-linked accelerators {#dashboard-accelerators}

Some accelerators from the Recommended Data Distiller accelerators section on the **[!UICONTROL Overview]** tab link to the Dashboards workspace instead of the Query Editor. Examples include Audience Identity Overlaps and Advanced audience overlaps. These open dashboard templates that provide visualizations for audience analysis. The full set of dashboard-linked accelerators is available in the product. See the [Query pro mode overview](../../dashboards/sql-insights-query-pro-mode/overview.md) for details on dashboard templates.

## Request a new accelerator {#request-accelerator}

Customers cannot add accelerators through the UI. If you have a recurring use case that you want as an accelerator, submit a request via your support channel or Jira. Adobe evaluates requests and adds new accelerators based on industry applicability and common patterns.

## Next steps {#next-steps}

- [Manage your cloned templates](./query-templates.md) in the Templates tab.
- [Author your own parameterized queries](./parameterized-queries.md) using the `$` syntax.
- [Schedule queries](./query-schedules.md) for automated runs.
- [Query Editor user guide](./user-guide.md) for general Query Service workflows.
