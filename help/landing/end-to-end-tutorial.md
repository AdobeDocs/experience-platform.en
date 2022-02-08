---
title: Adobe Experience Platform end-to-end example workflow
topic-legacy: getting started
description: Adobe Experience Platform enables organizations to centralize and standardize customer data before applying data science and machine learning to dramatically improve the design and delivery of rich, personalized experiences.
exl-id: edcce353-338a-440e-99eb-a64e2abca579
---
# Adobe Experience Platform end-to-end example workflow

Adobe Experience Platform is the most powerful, flexible, and open system on the market for building and managing complete solutions that drive customer experience. [!DNL Experience Platform] enables organizations to centralize and standardize customer data and content from any system and apply data science and machine learning to dramatically improve the design and delivery of rich, personalized experiences.

Built on RESTful APIs, [!DNL Experience Platform] exposes the full functionality of the system to developers, supporting the easy integration of enterprise solutions using familiar tools. [!DNL Experience Platform] lets you derive a holistic view of your customers by ingesting your customer data, segmenting your data to the audiences you want to target, and activating these audiences to an external destination. The following tutorial shows an end-to-end workflow, showing all the steps from ingestion via sources to audience activation via destinations.

## Getting started

This end-to-end workflow involves the usage of multiple Adobe Experience Platform services. For more information about the services used in this workflow, please review the documentation for the following services:

- [[!DNL Experience Data Model (XDM)]](../xdm/home.md): The standardized framework by which [!DNL Platform] organizes customer experience data. To best make use of Segmentation, please ensure your data is ingested as profiles and events according to the [best practices for data modeling](../xdm/schema/best-practices.md).
- [Sources](../sources/home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
- [[!DNL Segmentation Service]](../segmentation/home.md): [!DNL Segmentation Service] allows you to divide data stored in [!DNL Experience Platform] that relates to individuals (such as customers, prospects, users, or organizations) into smaller groups.
- [[!DNL Real-time Customer Profile]](../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
- [Datasets](../catalog/datasets/overview.md): The storage and management construct for data persistence in [!DNL Experience Platform].
- [Destinations](../destinations/home.md): Destinations are pre-built integrations with commonly used applications that allow for the seamless activation of data from Platform for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

The following sections provide additional information that you will need to know in order to successfully make calls to [!DNL Platform] APIs.

### Reading sample API calls

This developer guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](./troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{IMS_ORG}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../sandboxes/home.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

- Content-Type: application/json

Additional headers may be required to complete specific requests. The correct headers are shown in each of the examples within this document. Please pay special attention to the sample requests in order to ensure that all required headers are included. 

## Ingest your data into Platform

In order to use Platform to evaluate your data, you will first need to ingest your data into Platform. You can ingest your data by using one of the various sources provided by Platform, such as [Amazon S3](../sources/tutorials/api/create/cloud-storage/s3.md). A full list of available sources can be found in the [source connectors overview](../sources/home.md).

If you use Amazon S3 as your source connector, you can follow the instructions in either the API tutorial on [creating an Amazon S3 connector](../sources/tutorials/api/create/cloud-storage/s3.md) or the UI tutorial on [creating an Amazon S3 connector](../sources/tutorials/ui/create/cloud-storage/s3.md) to learn how to create, connect to, and ingest data within the connector. Please note that when you ingest your data, you will need to create an XDM schema for the data to be formatted into. To learn how to best create an XDM schema, please read the guide on the [basics of schema composition](../xdm/schema/composition.md).

For more detailed instructions on source connectors, please read the [source connectors overview](../sources/home.md). To learn more about Flow Service, the API which sources is based off of, please read the [Flow Service API reference](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Evaluate your data

After ingesting your data into Platform through a source connector, you can evaluate your data by using segmentation. Segmentation is the process of defining specific attributes or behaviors shared by a subset of profiles from your profile store to distinguish a marketable group of people from your customer base. To learn more about segmentation, please read the [segmentation service overview](../segmentation/home.md).

### Create a segment definition

Firstly, you will need to create a segment definition to cluster your individuals to create your target audience. A segment definition is a collection of rules that you can use to define the audience you want to target. To create a segment definition, you can follow the instructions in either the API tutorial on [creating a segment](../segmentation/tutorials/create-a-segment.md) or the UI guide on using the [Segment Builder](../segmentation/ui/segment-builder.md).

Ensure that once you've created a segment definition, that you keep note of the segment definition ID.

### Evaluate your segment definition

After creating your segment definition, you can either create a segment job to evaluate the segment as a one-time instance or create a schedule to evaluate the segment on an ongoing basis. 

To evaluate a segment definition on demand, you will need to create a segment job. A segment job is an asynchronous process that creates a new audience segment, based on the referred segment definition and merge policies. Once the segment job is created and evaluated, you can get information about the segment, such as errors that may have occurred during processing or the size of your audience. To learn how to create a segment job, including all the details you need to provide, please read the [segment job developer guide](../segmentation/api/segment-jobs.md). 

To evaluate a segment definition on an ongoing basis, you will need to create and enable a schedule. A schedule is a tool that can be used to used to automatically run a segment job once a day at a specified time. To learn how to create and enable a schedule, you can follow the instructions in the API guide on the [schedules endpoint](../segmentation/api/schedules.md).

## Export your evaluated data to a dataset

After either creating your one-time segment job or your ongoing schedule, you can export the results of this segmentation by creating a segment export job. A segment export job is an asynchronous task that sends information about the evaluated segment job's audiences to a dataset. 

Before creating an export job, you will first need to create a dataset to export the data to. To learn how to create a dataset, please read the create a target dataset step in the tutorial on [evaluating a segment](../segmentation/tutorials/evaluate-a-segment.md#create-dataset), ensuring you note the dataset ID after creation. After creating a dataset, you can create an export job. To learn how to create an export job, you can follow the instructions in the API guide on the [export jobs endpoint](../segmentation/api/export-jobs.md).

## Export your evaluated data to a destination

Alternatively, after creating your one-time segment job or your ongoing schedule, you can export the results of this segmentation to a destination. A destination is an endpoint, such as an Adobe application on an external service, where an audience can be activated and delivered. A full list of available destinations can be found in the [destinations overview](../destinations/home.md).

To learn how to activate your segment definition to a destination, please read the activate data to your new destination step in the tutorial on [connecting to destinations and activating data](../destinations/api/email-marketing.md#activate-data).

## Next steps

By reading this tutorial, you have been introduced to a high level overview for a simple end-to-end flow for Platform. To learn more about Adobe Experience Platform, please read the [Platform overview](./home.md). To learn more about using the Platform API and the Platform UI, please read the [Platform API guide](./api-guide.md) and the [Platform UI guide](./ui-guide.md) respectively.