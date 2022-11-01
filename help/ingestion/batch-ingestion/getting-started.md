---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
title: Getting Started with the Data Ingestion API
type: Documentation
description: The Data Ingestion API getting started guide outlines the key concepts and basic functionality that you need to know before you can begin to ingest data into Experience Platform using APIs.
exl-id: 0653de2b-3268-478b-a23f-c458b6d3df7c
---
# Getting started with the Data Ingestion API {#getting-started}

Using Data Ingestion API endpoints, you can perform basic CRUD operations in order to ingest data in Adobe Experience Platform.

Using the API guides requires a working understanding of multiple Adobe Experience Platform services involved in working with data. Before using the Data Ingestion API, please review the documentation for the following services:

* [Batch ingestion](./overview.md): Allows you to ingest data into Adobe Experience Platform as batch files.
* [[!DNL Real-time Customer Profile]](../home.md): Provides a unified, customer profile in real time based on aggregated data from multiple sources.
* [[!DNL Experience Data Model (XDM)]](../../xdm/home.md): The standardized framework by which Platform organizes customer experience data.
* [[!DNL Sandboxes]](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully make calls to [!DNL Profile] API endpoints.

## Reading sample API calls

The Data Ingestion API documentation provides example API calls to demonstrate how to properly format requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

## Required headers

The API documentation also requires you to have completed the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en) in order to successfully make calls to [!DNL Platform] endpoints. Completing the authentication tutorial provides the values for each of the required headers in [!DNL Experience Platform] API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {ORG_ID}`

All requests with a payload in the request body (such as POST, PUT, and PATCH calls) must include a `Content-Type` header. Accepted values specific to each call are provided in the call parameters.

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. Requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

* `x-sandbox-name: {SANDBOX_NAME}`

For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md).
