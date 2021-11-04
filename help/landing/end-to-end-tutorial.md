---
keywords: Experience Platform;home;popular topics;CJA;journey analytics;customer journey analytics;campaign orchestration;orchestration;customer journey;journey;journey orchestration;capability;region
solution: Experience Platform
title: Adobe Experience Platform end-to-end example workflow
topic-legacy: getting started
description: Adobe Experience Platform enables organizations to centralize and standardize customer data before applying data science and machine learning to dramatically improve the design and delivery of rich, personalized experiences.
exl-id: edcce353-338a-440e-99eb-a64e2abca579
---
# Adobe Experience Platform end-to-end example workflow

intro blurb

## Getting started

This end-to-end workflow involves the usage of multiple Adobe Experience Platform services. For more information about the services used in this workflow, please review the documentation for the following services:

Sources
Segmentation
XDM
Destinations

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
>For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

- Content-Type: application/json

Additional headers may be required to complete specific requests. The correct headers are shown in each of the examples within this document. Please pay special attention to the sample requests in order to ensure that all required headers are included.

## Ingest your data into Platform

In order to use Platform to evaluate your data, you will first need to ingest your data into Platform. You can ingest your data by using one of the various sources provided by Platform, such as [Amazon S3](../sources/tutorials/api/create/cloud-storage/s3.md). A full list of available sources can be found in the [source connectors overview](../sources/home.md).

If you use Amazon S3 as your source connector, you can follow the instructions in either the API tutorial on [creating an Amazon S3 connector](../sources/tutorials/api/create/cloud-storage/s3.md) or the UI tutorial on [creating an Amazon S3 connector](../sources/tutorials/ui/create/cloud-storage/s3.md) to learn how to create, connect to, and ingest data within the connector.

For more detailed instructions on source connectors, please read the [source connectors overview](../sources/home.md). To learn more about Flow Service, the API which sources is based off of, please read the [Flow Service API reference](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Evaluate your data

After ingesting your data into Platform through a source connector, you can evaluate your data by using segmentation. To learn more about segmentation, please read the [segmentation service overview](../segmentation/home.md).

### Create a segment definition

Firstly, you will need to create a segment definition to cluster your individuals to create your target audience. To create a segment definition, you can follow the instructions in either the API tutorial on [creating a segment]() or the UI guide on using the [Segment Builder]().

Ensure that once you've created a segment definition, that you keep note of the segment definition ID.

### Schedule a segment job

After creating your segment definition, you can create a schedule to evaluate the segment on a regular basis. To create a schedule, you can follow the instructions in the API guide on the [schedules endpoint]().

### Evaluate a segment job

### Monitor the segment job

## Export your evaluated data

## Next steps

ending