---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
solution: Adobe Experience Platform
title: Adobe Experience Platform Segmentation Service developer guide
topic: guide
---

# Adobe Experience Platform Segmentation Service API developer guide

[!DNL Adobe Experience Platform Segmentation Service] allows you to build segments and generate audiences in [!DNL Adobe Experience Platform] from your [!DNL Real-time Customer Profile] data.

The Segmentation Service API includes multiple endpoints, outlined below. Please visit the individual endpoint guides for details and refer to the [getting started guide](getting-started.md) for important information on required headers, reading sample API calls, and more.

To view all available endpoints and CRUD operations, please refer to the [Segmentation Service API Reference swagger](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/segmentation.yaml).

## Estimates and previews

Estimates provide statistical information for a segment definition, such as projected audience size and confidence interval. You can use the `/estimate` endpoint to view an estimate of a segment definition. 

Previews provide a paginated list of qualifying profiles for a segment definition, allowing you to compare the results against what you expect. You can use the `/preview` endpoint to create a new preview job, look up results of a specific preview job, or delete a specific preview job.

For more information on using these endpoints, please read the [estimates and previews endpoints guide](./estimates-and-previews.md). 

## Export jobs

Export jobs are asynchronous processes that are used to persist audience segment members to datasets. You can use the `/export/jobs` endpoint to retrieve all export jobs, create a new export job, retrieve details of a specific export job, or cancel a specific export job.

For more information on using this endpoint, please read the [export jobs endpoint guide](./export-jobs.md).

## Schedules

Schedules are a tool that can be used to automatically run batch segmentation jobs once a day. You can use the `/config/schedules` endpoint to retrieve a list of schedules, create a new schedule, retrieve details of a specific schedule, update a specific schedule, or delete a specific schedule. 

For more information on using this endpoint, please read the [schedules endpoint guide](./schedules.md). 

## Segment definitions

Segment definitions define which profiles will be part of which audience segments. You can use the `/segment/definitions` endpoint to retrieve a list of segment definitions, create a new segment definition, retrieve details of a specific segment definition, delete a specific segment definition, or overwrite details of a specific segment definition.

For more information on using this endpoint, please read the [segment definitions endpoint guide](./segment-definitions.md). 

## Segment jobs

Segment jobs process previously established segment definitions to generate an audience segment. You can use the `/segment/jobs` endpoint to retrieve a list of segment jobs, create a new segment job, retrieve details of a specific segment job, or delete a specific segment job.

For more information on using this endpoint, please read the [segment jobs endpoint guide](./segment-jobs.md).

## Segment search

Segment search is used to search and index configurable fields contained across various data sources and return them in near real-time. To begin working with Segment search, see the [search endpoint guide](segment-search.md)

## Next steps

To begin making calls using the [!DNL Segmentation] API, select one of the endpoint guides to learn how to use specific [!DNL Segmentation]-related endpoints. To learn more about working with segments using the [!DNL Platform] UI, see the [Segmentation user guide](../ui/overview.md).