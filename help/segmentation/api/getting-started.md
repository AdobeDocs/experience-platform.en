---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Segmentation Service developer guide
topic: developer guide
---

# Getting started with [!DNL Segmentation Service] {#getting-started}

Adobe Experience Platform [!DNL Segmentation Service] allows you to build segments and generate audiences in Adobe Experience Platform from your [!DNL Real-time Customer Profile] data.

The developer guide requires a working understanding of the various [!DNL Experience Platform] services involved with using [!DNL Segmentation Service].

- [!DNL Segmentation](../home.md): Allows you to build audience segments from [!DNL Real-time Customer Profile] data.
- [!DNL Experience Data Model (XDM) System](../../xdm/home.md): The standardized framework by which E[!DNL xperience Platform] organizes customer experience data.
- [!DNL Real-time Customer Profile](../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
- [!DNL Sandboxes](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully work with the [!DNL Segmentation] API.

## Reading sample API calls

The [!DNL Segmentation Service] API documentation provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

## Required headers

The API documentation also requires you to have completed the [authentication tutorial](../../tutorials/authentication.md) in order to successfully make calls to [!DNL Platform] endpoints. Completing the authentication tutorial provides the values for each of the required headers in [!DNL Experience Platform] API calls, as shown below:

- Authorization: `Bearer {ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{IMS_ORG}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox in which the operation will take place:

- x-sandbox-name: `{SANDBOX_NAME}`
  
>[!NOTE]
>
>For more information on working with sandboxes in [!DNL Experience Platform], see the [sandboxes overview documentation](../../sandboxes/home.md).

<!-- ## Estimates

Estimates provides statistical information for a segment definition, such as projected audience size and confidence interval. You can use the `/estimate` endpoint to view an estimate of a segment definition. 

For more information on using this endpoint, please read the [estimates developer guide](./estimates.md). 

## Export jobs

Export jobs are asynchronous processes that are used to persist audience segment members to datasets. You can use the `/export/jobs` endpoint to retrieve all export jobs, create a new export job, retrieve details of a specific export job, or cancel a specific export job.

For more information on using this endpoint, please read the [export jobs developer guide](./export-jobs.md).

## Previews

Previews provide a paginated list of qualifying profiles for a segment definition, allowing you to compare the results against what you expect. You can use the `/preview` endpoint to create a new preview job, look up results of a specific preview job, or delete a specific preview job.

For more information on using this endpoint, please read the [previews developer guide](./previews.md).

## PQL conversions

Profile Query Language (PQL) conversions allows you to convert your formatting between `pql/text` and `pql/json`. You can do this by using the `/segment/conversion` endpoint.

For more information on using this endpoint, please read the [PQL conversions developer guide](./pql-conversions.md).

## Schedules

Schedules are a tool that can be used to automatically run export jobs once a day. You can use the `/config/schedules` endpoint to retrieve a list of schedules, create a new schedule, retrieve details of a specific schedule, update a specific schedule, or delete a specific schedule. 

For more information on using this endpoint, please read the [schedules developer guide](./schedules.md). -->

## Segment definitions

Segment definitions define which profiles will be part of which audience segments. You can use the `/segment/definitions` endpoint to retrieve a list of segment definitions, create a new segment definition, retrieve details of a specific segment definition, delete a specific segment definition, or overwrite details of a specific segment definition.

For more information on using this endpoint, please read the [segment definitions developer guide](./segment-definitions.md). 

## Segment jobs

Segment jobs process previously established segment definitions to generate an audience segment. You can use the `/segment/jobs` endpoint to retrieve a list of segment jobs, create a new segment job, retrieve details of a specific segment job, or delete a specific segment job.

For more information on using this endpoint, please read the [segment jobs developer guide](./segment-jobs.md).

## Segment search

Segment search is used to search and index configurable fields contained across various data sources and return them in near real-time. To begin working with Segment search, see the [search developer guide](segment-search.md)

## Next steps

To being making calls using the [!DNL Segmentation Service] API, select one of the available endpoint guides either using the left navigation or within the [developer guide overview](./overview.md)