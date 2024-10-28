---
title: Adobe Experience Platform Release Notes October 2024
description: The October 2024 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: October 28, 2024**

Updates to existing features and documentation in Adobe Experience Platform:

- [Data Collection](#data-collection)
- [Destinations](#destinations)
- [Segmentation Service](#segmentation-service)
- [Sources](#sources)

## Data collection {#collection}

Adobe Experience Platform provides a suite of technologies that allow you to collect client-side customer experience data and send it to the Experience Platform Edge Network where it can be enriched, transformed, and distributed to Adobe or non-Adobe destinations.

**New features**

| Type | Feature | Description |
| --- | --- | --- |
| Tags and Extensions | Adobe Analytics JSON View | The Adobe Analytics tags extension now allows you to examine eVars, props, and event settings as JSON, which can be included in the Web SDK extension and exported for editing. You can also upload or copy this data and store it on your device. See the [Adobe Analytics extension documentation](../../tags/extensions/client/analytics/overview.md) for more information. |

{style="table-layout:auto"}

To learn more about data collections, read the [data collection overview](../../collection/home.md).

## Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

**New or updated functionality** {#destinations-new-updated-functionality}

| Feature | Description |
| ----------- | ----------- |
| [Array export support generally available](../../destinations/ui/export-arrays-calculated-fields.md) | All customers can now use the **[!UICONTROL Add calculated field]** option when exporting audiences to file-based destinations to export entire arrays or elements of arrays. Note that you still need to use the `array_to_string` function to flatten the array into a string in the target file. <br> ![Add calculated field selection with functions and fields.](../2024/assets/october/array-export.gif "Add calculated field with a selection of the array_to_string function and organizations array."){width="250" align="center" zoomable="yes"} |

{style="table-layout:auto"}

For more information, read the [destinations overview](../../destinations/home.md).

## Segmentation Service {#segmentation-service}

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Segments can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New or updated features**

| Feature | Description |
| ------- | ----------- |
| Flexible audience evaluation (Limited availability) | Flexible audience evaluation lets you quickly create new audiences on demand for time-sensitive communications. More information on this new feature can be found within the [Audience Portal documentation]. |

{style="table-layout:auto"}

For more information on [!DNL Segmentation Service], read the [Segmentation overview](../../segmentation/home.md).


## Sources {#sources}

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

Use sources in Experience Platform to ingest data from an Adobe application or a third-party data source.

**Updated feature**

| Feature | Description |
| --- | --- |
| Support for filtering standard activity entities in [!DNL Marketo Engage] | You can use the [!DNL Flow Service] API to filter standard activity entities when ingesting data from your [!DNL Marketo Engage] source. Read the guide on [filtering [!DNL Marketo] standard activity data](../../sources/tutorials/api/filter.md#filter-activity-entities-for-marketo-engage) for more information. |

{style="table-layout:auto"}

For more information, read the [sources overview](../../sources/home.md).
