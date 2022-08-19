---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;Segmentation Service;API;api;
title: Segmentation Service API Guide
topic-legacy: guide
description: The Segmentation Service API allows developers to programmatically manage segmentation operations in Adobe Experience Platform. Follow this guide to learn how to perform key operations using the API.
exl-id: cebecaf3-9746-4b0b-9c50-11789fba66c3
---
# Segmentation Service API guide

[!DNL Adobe Experience Platform Segmentation Service] allows you to build segments and generate audiences in [!DNL Adobe Experience Platform] from your [!DNL Real-time Customer Profile] data.

The [!DNL Segmentation Service] API provides multiple endpoints that allow you to programmatically manage your segmentation operations in [!DNL Experience Platform]. This overview document provides high-level introductions to each of these endpoints, and links to their associated endpoint guides for details. Before reading the individual endpoint guides, please refer to the [getting started guide](./getting-started.md) for important information on required headers, reading sample API calls, and more.

To view all available endpoints and CRUD operations, please refer to the [Segmentation Service API reference](https://www.adobe.io/experience-platform-apis/references/segmentation/).

## Audiences

Audiences are a collection of people who share similar behaviors and/or characteristics. These can be generated either by using Platform or from external sources. You can use the `/audiences` endpoint to retrieve all audiences, create a new audience, retrieve details of a specific audience, update a specific audience, or delete a specific audience.

For more information on using this endpoint, please read the [audiences endpoint guide](./audiences.md).

## Export jobs

Export jobs are asynchronous processes that are used to persist audience segment members to datasets. You can use the `/export/jobs` endpoint to retrieve all export jobs, create a new export job, retrieve details of a specific export job, or cancel a specific export job.

For more information on using this endpoint, please read the [export jobs endpoint guide](./export-jobs.md).

## Previews and estimates

Previews provide a paginated list of qualifying profiles for a segment definition, allowing you to compare the results against what you expect. You can use the `/preview` endpoint to create a new preview job or look up results of a specific preview job.

Estimates provide statistical information for segment definitions, such as projected audience size, confidence interval, and error standard deviation. You can use the `/estimate` endpoint to view an estimate of a segment definition. 

For more information on using these endpoints, please read the [previews and estimates endpoints guide](./previews-and-estimates.md). 

## Schedules

Schedules are a tool that can be used to automatically run batch segmentation jobs once a day. You can use the `/config/schedules` endpoint to retrieve a list of schedules, create a new schedule, retrieve details of a specific schedule, update a specific schedule, or delete a specific schedule. 

For more information on using this endpoint, please read the [schedules endpoint guide](./schedules.md). 

## Segment definitions

Segment definitions define which profiles will be part of which audience segments. You can use the `/segment/definitions` endpoint to manage segment definitions.

For more information on using this endpoint, please read the [segment definitions endpoint guide](./segment-definitions.md). 

## Segment jobs

Segment jobs process previously established segment definitions to generate an audience segment. You can use the `/segment/jobs` endpoint to manage segment jobs.

For more information on using this endpoint, please read the [segment jobs endpoint guide](./segment-jobs.md).

## Segment search

Segment search is used to search fields contained across various data sources and return them in near real-time. To begin working with segment search, see the [search endpoint guide](segment-search.md)

## Next steps

To get started with the [!DNL Segmentation Service] API, review the different endpoint guides for detailed steps on how to make calls to the service's various endpoints. To learn more about working with segments using the [!DNL Platform] UI, see the [Segmentation user guide](../ui/overview.md).
