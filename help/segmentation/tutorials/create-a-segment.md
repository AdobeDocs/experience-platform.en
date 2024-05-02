---
solution: Experience Platform
title: Create a Segment Definition Using the Segmentation Service API
type: Tutorial
description: Follow this tutorial to learn how to develop, test, preview, and save a segment definition using the Adobe Experience Platform Segmentation Service API.
exl-id: 78684ae0-3721-4736-99f1-a7d1660dc849
---
# Create a segment definition using the Segmentation Service API 

This document provides a tutorial for developing, testing, previewing, and saving a segment definition using the [[!DNL Adobe Experience Platform Segmentation Service API]](../api/getting-started.md). 

For information on how to build segment definitions using the user interface, please see the [Segment Builder guide](../ui/overview.md).

## Getting started

This tutorial requires a working understanding of the various [!DNL Adobe Experience Platform] services involved in creating segment definitions. Before beginning this tutorial, please review the documentation for the following services:

- [[!DNL Real-Time Customer Profile]](../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
- [[!DNL Adobe Experience Platform Segmentation Service]](../home.md): Allows you to build audiences using segment definitions or other external sources from Real-Time Customer Profile data.
- [[!DNL Experience Data Model (XDM)]](../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes customer experience data. To best make use of Segmentation, please ensure your data is ingested as profiles and events according to the [best practices for data modeling](../../xdm/schema/best-practices.md).

The following sections provide additional information that you will need to know in order to successfully make calls to the [!DNL Platform] APIs.

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{ORG_ID}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

- Content-Type: application/json

## Develop a segment definition

The first step in segmentation is to define a segment definition. A segment definition is an object that encapsulates a query written in [!DNL Profile Query Language] (PQL). This object is also called a PQL predicate. PQL predicates define the rules for the segment definition based on conditions related to any record or time series data you supply to [!DNL Real-Time Customer Profile]. See the [PQL guide](../pql/overview.md) for more information on writing PQL queries.

You can create a new segment definition by making a POST request to the `/segment/definitions` endpoint in the [!DNL Segmentation] API. The following example outlines how to format a definition request, including what information is required in order for a segment definition to be defined successfully.

For a detailed explanation on how to define a segment definition, please read the [segment definition developer guide](../api/segment-definitions.md#create).

## Estimate and preview an audience {#estimate-and-preview-an-audience}

As you develop your segment definition, you can use the estimate and preview tools within [!DNL Real-Time Customer Profile] to view summary-level information to help ensure you are isolating the expected audience. Estimates provide statistical information on a segment definition, such as the projected audience size and confidence interval. Previews provide paginated lists of qualifying profiles for a segment definition, allowing you to compare the results against what you expect.

By estimating and previewing your audience, you can test and optimize your PQL predicates until they produce a desireable result, where they can then be used in an updated segment definition.

There are two required steps to preview or get an estimate of your segment definition:

1. [Create a preview job](#create-a-preview-job)
2. [View estimate or preview](#view-an-estimate-or-preview) using the ID of the preview job
  
### How estimates are generated

As data enabled for Real-Time Customer Profile is ingested into Platform, it is stored within the Profile data store. When the ingestion of records into the Profile store increases or decreases the total profile count by more than 5%, a sampling job is triggered to update the count. If the profile count does not change by more than 5%, the sampling job will run automatically on a weekly basis. 

The way in which the sample is triggered depends on the type of ingestion being used:

- For streaming data workflows, a check is done on an hourly basis to determine if the 5% increase or decrease threshold has been met. If this threshold has been met, a sample job is automatically triggered to update the count.
- For batch ingestion, within 15 minutes of successfully ingesting a batch into the Profile store, if the 5% increase or decrease threshold is met, a job is run to update the count. Using the Profile API you can preview the latest successful sample job, as well as list profile distribution by dataset and by identity namespace.

The sample size depends on the overall number of entities in your Profile store. These sample sizes are represented in the following table:

| Entities in Profile store | Sample size |
| ------------------------- | ----------- |
| Less than 1 million | Full data set |
| 1 to 20 million | 1 million |
| Over 20 million | 5% of total |

Estimates generally run over 10-15 seconds, beginning with a rough estimate and refining as more records are read.

### Create a preview job

You can create a new preview job by making a POST request to the `/preview` endpoint.

Detailed instructions on creating a preview job can be found in the [previews and estimates endpoints guide](../api/previews-and-estimates.md#create-preview).

### View an estimate or preview

Estimate and preview processes are run asynchronously as different queries can take different lengths of time to complete. Once a query has been initiated, you can use API calls to retrieve (GET) the current state of the estimate or preview as it progresses.

Using the [!DNL Segmentation Service] API, you can look up a preview job's current state by its ID. If the state is "RESULT_READY", you can view the results. To look up a preview job's current state, please read the section on [retrieving a preview job section](../api/previews-and-estimates.md#get-preview) in the previews and estimates endpoints guide. To look up an estimate job's current state, please read the section on [retrieving an estimate job](../api/previews-and-estimates.md#get-estimate) in the previews and estimates endpoints guide.


## Next steps

Once you have developed, tested, and saved your segment definition, you can create a segment job to build an audience using the [!DNL Segmentation Service] API. See the tutorial on [evaluating and accessing segment results](./evaluate-a-segment.md) for detailed steps on how to accomplish this.
