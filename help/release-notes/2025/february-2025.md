---
title: Adobe Experience Platform Release Notes February 2025
description: The February 2025 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: February 18, 2025**

Updates to existing features and documentation in Adobe Experience Platform:

- [AI Assistant](#ai-assistant)
- [Data Prep](#data-prep)
- [Sources](#sources)

## AI Assistant {#ai-assistant}

AI Assistant in Adobe Experience Platform is a conversational experience that you can use to accelerate your workflows in Adobe applications. You can use AI Assistant to better understand product knowledge, troubleshoot problems, or search through information and find operational insights. AI Assistant supports Experience Platform, Real-Time Customer Data Platform, Adobe Journey Optimizer and Customer Journey Analytics.

**New features**

| Feature | Description |
| --- | --- |
| General availability of operational insights | Operational insights in AI Assistant are now in GA. Operational insights refer to answers AI Assistant generates about your meta data objects (attributes, audiences, dataflows, datasets, destinations, journeys, schemas, and sources), including counts, lookups, and lineage impact. Operational insights does not look at any data within the sandbox. For more information, read the [AI Assistant UI guide](../../ai-assistant/ui-guide.md). |
| Support for question autocomplete | When inputting a question to AI Assistant, you can now select from a list of recommended questions that AI Assistant provides. Use this feature to further accelerate your workflows with AI Assistant. For more information, read the guide on [using question autocomplete with AI Assistant](../../ai-assistant/ui-guide.md#use-question-autocomplete). |
| Support for dataset observability | You can now use AI Assistant to answer questions about specific dataset metrics such as storage sizes and row counts. Data observability questions support qualifiers that you can use to filter your queries by a certain time period. For more information, read the [AI Assistant questions guide](../../ai-assistant/questions.md). |

{style="table-layout:auto"}

For more information, read the [AI Assistant overview](../../ai-assistant/home.md).

## Data Prep {#data-prep}

Use data prep to map, transform, and validate data to and from Experience Data Model (XDM).

**New or updated features**

| Feature | Description |
| --- | --- |
| Enhanced support for importing and exporting mappings | You can now export mappings to a CSV file and configure them locally on a spreadsheet. You can then import your updated mappings to Experience Platform using the mapping interface in the UI. You can use this capability to configure large numbers of mappings without having to manually build them in the UI. Additionally, when creating a new dataflow, you can upload a copy of your mappings directly to Experience Platform to accelerate your workflow. For more information, read the guide on [importing and exporting mappings](../../data-prep/ui/mapping.md#import-mapping). |

{style="table-layout:auto"}

For more information, read the [Data Prep overview](../../data-prep/home.md).

## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

Use sources in Experience Platform to ingest data from an Adobe application or a third-party data source.

**Updated feature**

| Feature | Description |
| --- | --- |
| New media reporting field mapping guide for Adobe Analytics | Experience Data Model (XDM) mappings for media reporting in the Adobe Analytics source have been updated. Read the new [field mapping guide](../../sources/connectors/adobe-applications/mapping/analytics.md) for the [!DNL Analytics] source for a complete list of [!DNL Analytics] data feeds and their corresponding XDM field paths. | 
| Support for Views in [!DNL Microsoft Dynamics] | You can now ingest `"entityType": "view"` when using the [!DNL Microsoft Dynamics] source. For more information, read the guide on [connecting a [!DNL Microsoft Dynamics] source to Experience Platform](../../sources/tutorials/api/create/crm/ms-dynamics.md). |

{style="table-layout:auto"}

For more information, read the [sources overview](../../sources/home.md).
