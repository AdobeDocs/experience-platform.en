---
keywords: Experience Platform;Query Service;Data Distiller;accelerators;parameterized queries;SQL templates
solution: Experience Platform
title: Data Distiller Accelerators
description: Use Data Distiller Accelerators to run and schedule Adobe-approved parameterized SQL templates in the Query Service UI. Accelerators are read-only and Adobe-managed; use Create Custom Template to clone and edit them.
exl-id: placeholder
---
# Data Distiller Accelerators {#data-distiller-accelerators}

<!-- PLACEHOLDER: 2-3 sentence intro. Lead with what the user can accomplish: run parameterized SQL without authoring it, discover templates for common scenarios, optionally clone into editable templates. Include Data Distiller availability note in first paragraph. -->

## Prerequisites {#prerequisites}

<!-- PLACEHOLDER: One short paragraph + bullet list. State that the Data Distiller SKU is required (Query Service alone does not suffice). List assumed knowledge: Queries workspace, Query Editor, basic parameterized query concepts. Link to relevant docs; do not duplicate their content. -->

## Overview {#overview}

<!-- PLACEHOLDER: 2-3 paragraphs defining what accelerators are and how they behave. Cover: Adobe-managed, read-only parameterized SQL templates; governance (only Adobe can add/modify/delete); reuse across IMS orgs; why "Modified by" shows hyphen. Do not catalog individual accelerators; scope is conceptual only. -->

### Accelerator discovery paths {#discovery-paths}

<!-- PLACEHOLDER: Explain the two discovery paths. Path 1: Accelerators tab in Queries workspace (table view). Path 2: Recommended Data Distiller accelerators cards on Overview tab. One sentence on when to use each. Use [!UICONTROL] for UI elements. No screenshots in this subsection; reserve for procedural sections. -->

## Open an accelerator in the Query Editor {#open-accelerator}

<!-- PLACEHOLDER: Short paragraph describing how selecting an accelerator opens it in Query Editor with SQL pre-populated and read-only. State which actions remain available (Run, Cancel, Create custom template) and which are disabled/grayed out. Include screenshot of Accelerators tab table + Query Editor with open accelerator. Note right-hand panel (Accelerator ID, Name, Last modified, Modified by, Add schedule). -->

## Provide parameter inputs {#provide-parameters}

<!-- PLACEHOLDER: Explain that accelerators use ${PARAMETER_NAME} syntax and parameters appear in the Query parameters tab. Instruct user to supply values before running. State that all parameters must be filled or the query fails. Use [!IMPORTANT] callout for this. Include screenshot of Query parameters tab with populated parameters. Do not duplicate parameter syntax details from parameterized-queries doc; link there instead. -->

## Execute an accelerator {#execute-accelerator}

<!-- PLACEHOLDER: 1-2 short paragraphs. Describe running the query after entering parameters, where results appear (Results tab), and what happens on success. Mention failure when parameters are missing. Do not repeat step-by-step Query Editor instructions; link to Query Editor guide. Optional: [!TIP] on validating parameters before run. -->

## Schedule an accelerator {#schedule-accelerator}

<!-- PLACEHOLDER: Explain that accelerators can be scheduled directly. Reference Add schedule in right-hand panel or editor toolbar. State that scheduling follows the same workflow as other scheduled queries (frequency, date/time, output dataset). Do not repeat full scheduling steps; link to query schedules doc. Note that parameter values are set when the schedule is created and persist for each run. Include screenshot of Add schedule entry point if helpful. -->

## Create a custom template from an accelerator {#create-custom-template}

<!-- PLACEHOLDER: Explain Create custom template flow. Clarify that it clones the accelerator into a user-owned editable template; the original accelerator is not modified. Describe what changes: toolbar actions become available, user can edit and save, cloned query appears in Templates tab. Include procedural steps: Select Create custom template, optionally edit, save, confirm appearance in Templates tab. Include screenshot of Create custom template button + Templates tab showing new template. Link to query templates doc for managing templates. -->

### What changes when you create a custom template {#custom-template-differences}

<!-- PLACEHOLDER: Contrast custom template vs original accelerator. Clarify: editable/deletable, shows user in Modified by, can be scheduled. One short bullet list + one paragraph. -->

## Dashboard-linked accelerators {#dashboard-accelerators}

<!-- PLACEHOLDER: Explain that some accelerators from Overview tab link to the Dashboards workspace (e.g., Audience Identity Overlaps, Advanced audience overlaps). Briefly describe that these open dashboard visualizations. Link to relevant dashboard template docs. Do not enumerate each dashboard accelerator; reference in-product list or existing dashboard docs. -->

## Request a new accelerator {#request-accelerator}

<!-- PLACEHOLDER: One short paragraph. State that users can request new accelerators for recurring use cases via Jira/support request. Note that Adobe evaluates and adds based on industry applicability. Do not provide step-by-step Jira instructions or SLA. Clarify that customers cannot add accelerators themselves through the UI. -->

## Next steps {#next-steps}

<!-- PLACEHOLDER: 2-4 bullets linking to: Query templates (managing cloned templates), Parameterized queries (authoring parameterized SQL), Query schedules (scheduling), Query Editor user guide (general usage). Use descriptive link text. -->
