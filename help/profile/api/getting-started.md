---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
title: Getting Started with the Real-Time Customer Profile API
topic-legacy: guide
type: Documentation
description: The Profile API getting started guide outlines the key concepts and basic functionality that you need to know in order to use Real-Time Customer Profile API endpoints to perform basic CRUD operations against Profile data.
exl-id: 7e30610a-a7e7-43ab-a45d-fd84ef6e36ef
---
# Getting started with the [!DNL Real-Time Customer Profile] API {#getting-started}

Using Real-Time Customer Profile API endpoints, you can perform basic CRUD operations against Profile data, such as configuring computed attributes, accessing entities, exporting Profile data, and deleting unneeded datasets or batches.

Using the developer guide requires a working understanding of the various Adobe Experience Platform services involved in working with [!DNL Profile] data. Before beginning to work with the [!DNL Real-Time Customer Profile] API, please review the documentation for the following services:

* [[!DNL Real-Time Customer Profile]](../home.md): Provides a unified, customer profile in real time based on aggregated data from multiple sources.
* [[!DNL Adobe Experience Platform Identity Service]](../../identity-service/home.md): Gain a better view of your customer and their behavior by bridging identities across devices and systems.
* [[!DNL Adobe Experience Platform Segmentation Service]](../../segmentation/home.md): Allows you to build audience segments from Real-Time Customer Profile data.
* [[!DNL Experience Data Model (XDM)]](../../xdm/home.md): The standardized framework by which Platform organizes customer experience data.
* [[!DNL Sandboxes]](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully make calls to [!DNL Profile] API endpoints.

## Reading sample API calls

The [!DNL Real-Time Customer Profile] API documentation provides example API calls to demonstrate how to properly format requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

## Required headers

The API documentation also requires you to have completed the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en) in order to successfully make calls to [!DNL Platform] endpoints. Completing the authentication tutorial provides the values for each of the required headers in [!DNL Experience Platform] API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {ORG_ID}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. Requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

* `x-sandbox-name: {SANDBOX_NAME}`

For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

All requests with a payload in the request body (such as POST, PUT, and PATCH calls) must include a `Content-Type` header. Accepted values specific to each call are provided in the call parameters.

## Next steps

To begin making calls using the [!DNL Real-Time Customer Profile] API, select one of the available endpoint guides.
